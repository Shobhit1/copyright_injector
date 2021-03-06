# copyright-injector README

[![Build Status](https://dev.azure.com/shobhit01/Copyright%20Injector%20CI/_apis/build/status/Shobhit1.copyright_injector)](https://dev.azure.com/shobhit01/Copyright%20Injector%20CI/_build/latest?definitionId=1)
[![Build Status](https://travis-ci.org/Shobhit1/copyright_injector.svg?branch=master)](https://travis-ci.org/Shobhit1/copyright_injector)
[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://opensource.org/licenses/MIT)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/Shobhit1/copyright_injector/graphs/commit-activity)
<!-- [![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/v/shobhit1.copyright-injector.svg)](https://marketplace.visualstudio.com/items?itemName=shobhit1.copyright-injector) -->
<!-- [![Visual Studio Marketplace](https://img.shields.io/vscode-marketplace/d/shobhit1.copyright-injector.svg)](https://marketplace.visualstudio.com/items?itemName=shobhit1.copyright-injector) -->

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

- `copyrightInfo.company`: add the name of the company that will be injected in the copyright template. Can put your name in it as well.
- `copyrightInfo.ignore`: A comma-delimited string of folders to ignore in file paths.
- `copyrightInfo.matchPattern`: A pattern to find all files. Defaults to '\*_/_ which is equivalent to all files

## Usage

### Inject Current file

Steps:

- Ctrl/Cmd + shift + P or F1
- Select, Copyright Injector: Inject in current file
- Save file

Please make sure that you have proper configurations entered in the workspace/user settings for this to work. Otherwise the extension will take default values.

### Inject All files

Steps:

- Ctrl/Cmd + shift + P or F1
- Select, Copyright Injector: Inject in all files

Please make sure that you have proper configurations entered in the workspace/user settings for this to work. Otherwise the extension will take default values.

## Issues and Suggestions

Please use [GitHub](https://github.com/Shobhit1/copyright_injector) to report issues and also to request enhancements.

## Planned Enhancements

- Check if copyright already exists, then skip the file.
- Implement extensions' actions when the extension is deactivated.
- Implement support for more than just ts files.
- add more unit tests.

## Release Notes

### 0.0.1

Initial release.
