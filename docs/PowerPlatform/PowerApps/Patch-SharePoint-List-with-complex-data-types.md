---
id: Patch-SharePoint-List-with-complex-data-types
title: Power Apps - Patch SharePoint List with complex data types
description: Patch SharePoint List with complex data types like people picker and lookup lists.
---

:::tip
Below is a code snipped to demonstrate how to insert a new record into a SharePoint list that contains complex data types like a Person field or a lookup to another list.
:::

- The Set function in line 1 is to store the ID of the newly created item in SharePoint. You can then use this ID in any further patch requests.

- Lines 6 and 11, the Sample and Location field is a Lookup to another list. You always have to use that exact object structure with the odata type, Id and value.

- At line 16, the Owner field is a Person column in SharePoint, once again this is how you will have to update a person column using that exact structure.

- Line 25, the ReasonCode field is a multi select column in SharePoint. If you have a listbox in Power Apps that allow you to select multiple items, this is how you would add each of the selected items to the SharePoint column.

```javascript
Set(
  shortStopId,
  Patch(ShortStops, Defaults(ShortStops), {
    Title: "",
    Sample: {
      "@odata.type": "#Microsoft.Azure.Connectors.SharePoint.SPListExpandedReference",
      Id: sampleItem.ID,
      Value: sampleItem.Title,
    },
    Location: {
      "@odata.type": "#Microsoft.Azure.Connectors.SharePoint.SPListExpandedReference",
      Id: sampleCurrLoc.ID,
      Value: sampleCurrLoc.Title,
    },
    Owner: {
      "@odata.type": "#Microsoft.Azure.Connectors.SharePoint.SPListExpandedUser",
      Claims: "i:0#.f|membership|" & Lower(User().Email),
      Department: "",
      DisplayName: "",
      Email: User().Email,
      JobTitle: ".",
      Picture: ".",
    },
    ReasonCode: ForAll(ListBox1.SelectedItems, {
      "@odata.type": "#Microsoft.Azure.Connectors.SharePoint.SPListExpandedReference",
      Id: ID,
      Value: Title,
    }),
    StartTime: Now(),
  }).ID
);
```
