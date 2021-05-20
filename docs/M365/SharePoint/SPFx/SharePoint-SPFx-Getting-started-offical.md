---
id: SharePoint-SPFx-Getting-started-offical
title: SharePoint SPFx Getting Started Offical
description: SharePoint SPFx - Setting up your development environment. (Using the offical Microsoft generator)
---

---

This is a step by step guide on how to set up your development environment to get started with building SharePoint Web Parts using the SharePoint Framework.

### Tools and libraries you will need

1.  Install **VSCode** ( I recommend VSCode, you can also use Atom or Webstorm )

2.  Install the latest version of **Node.js LTS 10.x**. ( At the moment this is the latest node version supported by SPFx. Use **nvm** if you need to run multiple node versions)

3.  Once you have node installed you can install all the global package dependencies which is Gulp, Yeoman and the SharePoint Framework Yeoman generator. You can install all 3 with npm install,

```batch
npm install gulp yo @microsoft/generator-sharepoint --global
```

4.  Now we can create a new folder, then cd into that folder and run the yeoman sharepoint generator to create the new project and install all the dependencies.

```batch
yo @microsoft/sharepoint
```

![generatespproject](/img/docimages/SPFx/generateSpProject.jpg)

6.  Trust the development certificate, by running the below command. The SharePoint Framework's local webserver, used when testing your custom solutions from your development environment, uses HTTPS by default.

```bash
gulp trust-dev-cert
```

5.  Make sure to use Chrome, Edge or Firefox as the local workbench will not work in older browsers.

6.  Open your solution in VSCode by running "Code ." Or Open VSCode and then open the solution folder from within VSCode.

7.  Then in the terminal run gulp serve, this will luanch the local workbench and from there you can add the HelloWorld webpart.

![gulpserve](/img/docimages/SPFx/gulpServe.jpg)

![localworkbench](/img/docimages/SPFx/localWorkbench.jpg)

8. You can also access your webpart in development from a SharePoint Online site by going to the URL https://your-sharepoint-site-url/\_layouts/workbench.aspx. One thing to note about this is that you will have to refresh the page manually to see any changes in development.

This is about it to get started. I can also highly recommend looking at all the sample projects already build with the framework, https://pnp.github.io/sp-dev-fx-webparts. You can simply clone the repository and use one of these projects as a starting point.

Thank you!
