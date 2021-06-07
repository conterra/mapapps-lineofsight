# LineOfSight

The LineOfSight widget is a 3D analysis tool that allows you to perform visibility analysis in a SceneView. Visibility between a given observer and multiple target points is calculated against the currently displayed content in the view, including ground, integrated meshes and 3D objects such as buildings or trees.

![Screenshot App](https://github.com/conterra/mapapps-lineofsight/blob/master/screenshot.PNG)

## Sample App
https://demos.conterra.de/mapapps/resources/apps/downloads_lineofsight/index.html

## Installation Guide
**Requirement: map.apps 4.9.0**

**Restrictions: Only works in 3D view**

[dn_lineofsight Documentation](https://github.com/conterra/mapapps-lineofsight/tree/master/src/main/js/bundles/dn_lineofsight)

## Development Guide
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

### Other methods to define the mapapps.remote.base property.
1. Goal parameters
   `mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
   Change the mapapps.remote.base in the build.properties file and run:
   `mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`
