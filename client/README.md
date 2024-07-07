# CLIENT

This folder contains whatever UI you wish to use for this application, if any.

## Angular
From the root folder, navigate to the client folder:

```
cd client
```

Use the following command to create an Angular application without a top-level folder (wrapping your app with another folder between `client` and `src`):

```
npx @angular/cli@[version] new [app-name] --directory .
```

Using npx allows you to target the specific Angular CLI version you want, regardless of what you have installed. The `--directory .` command tells the CLI to generate the new applicaiton inside the existing folder.
