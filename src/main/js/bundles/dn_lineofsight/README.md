# dn_lineofsight

The LineOfSight widget is a 3D analysis tool that allows you to perform visibility analysis in a SceneView. Visibility between a given observer and multiple target points is calculated against the currently displayed content in the view, including ground, integrated meshes and 3D objects such as buildings or trees.

## Usage

Simply add the bundle "dn_lineofsight" to your app.

To make the functions of this bundle available to the user, the following tool can be added to a toolset:

| Tool ID                | Component              | Description              |
| ---------------------- | ---------------------- | ------------------------ |
| lineOfSightToggleTool  | LineOfSightToggleTool  | Show or hide the widget. |
