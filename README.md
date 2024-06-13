# mapapps-lineofsight

The LineOfSight widget is a 3D analysis tool that allows you to perform visibility analysis in a SceneView. Visibility
between a given observer and multiple target points is calculated against the currently displayed content in the view,
including ground, integrated meshes and 3D objects such as buildings or trees.

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
