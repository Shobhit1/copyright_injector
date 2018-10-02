# copyright-injector README

This is a simple extension based on [license-injector](https://github.com/martellaj/license-injector) which seems to be not active.

Right now it only suppports adding a copyright text on top of following files:

- html
- js
- jsx
- ts
- tsx

## Features

This extension has two options:

- Inject copyright notice on top of currrent file
- Inject copyright notice on top of all files (only the ones that are currently supported by this plugin).

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

<!-- > Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow. -->

## Extension Settings

This extension contributes the following settings:

* `copyrightInfo.company`: add the name of the company that will be injected in the copyright template. Can put your name in it as well.
* `copyrightInfo.ignore`: A comma-delimited string of folders to ignore in file paths.
* `copyrightInfo.matchPattern`: A pattern to find all files. Defaults to '**/* which is equivalent to all files

## Known Issues


## Release Notes

### 1.0.0

Initial release.
