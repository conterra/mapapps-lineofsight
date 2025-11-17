[![devnet-bundle-snapshot](https://github.com/conterra/mapapps-lineofsight/actions/workflows/devnet-bundle-snapshot.yml/badge.svg)](https://github.com/conterra/mapapps-lineofsight/actions/workflows/devnet-bundle-snapshot.yml)
![Static Badge](https://img.shields.io/badge/requires_map.apps-4.20.0-e5e5e5?labelColor=%233E464F&logoColor=%23e5e5e5)
![Static Badge](https://img.shields.io/badge/tested_for_map.apps-4.20.0-%20?labelColor=%233E464F&color=%232FC050)

# mapapps-lineofsight

The LineOfSight widget is a 3D analysis tool that allows you to perform visibility analysis in a SceneView. Visibility
between a given observer and multiple target points is calculated against the currently displayed content in the view,
including ground, integrated meshes and 3D objects such as buildings or trees.

## Sample App
https://demos.conterra.de/mapapps/resources/apps/public_demo_lineofsight/index.html

## Quick start

Clone this project and ensure that you have all required dependencies installed correctly (see [Documentation](https://docs.conterra.de/en/mapapps/latest/developersguide/getting-started/set-up-development-environment.html)).

Then run the following commands from the project root directory to start a local development server:

```bash
# install all required node modules
$ mvn initialize

# start dev server
$ mvn compile -Denv=dev -Pinclude-mapapps-deps

# run unit tests
$ mvn test -P run-js-tests,include-mapapps-deps
```
