---
id: Delete-Audit-log-data-from-SharePoint-AuditData-Table
title: SQL Script to safely delete audit log data from the SharePoint AuditData table
description: SQL Script to safely delete audit log data from the SharePoint AuditData table without maxing out the SQL Server CPU usage.
---

---

If your SharePoint Audit log table have grown out of control, this script can be used to safely delete logs older than 90 days.

```sql
use My_WSS_CONTENT_DATABASE;
set nocount on

declare @start_date datetime
declare @end_date   datetime
set @start_date = (select dateadd(d, +1, getdate()))
set @end_date   = (select dateadd(d, -90, getdate()))

declare @cleanup_task   varchar(max)
set @cleanup_task   =
'
set nocount on
while exists ( select * from [AuditData] where [occurred] not between ''' + CONVERT(nvarchar(24), @start_date, 121) + ''' and ''' + CONVERT(nvarchar(24), @end_date, 121) + ''')
    begin
        begin tran spauditmaint
        delete top (10) from [AuditData] where [occurred] not between ''' + CONVERT(nvarchar(24), @start_date, 121) + ''' and ''' + CONVERT(nvarchar(24), @end_date, 121) + '''
        commit tran spauditmaint
        checkpoint;
        print ''10 rows deleted''
    end
'
exec (@cleanup_task)
```

Thank you.
