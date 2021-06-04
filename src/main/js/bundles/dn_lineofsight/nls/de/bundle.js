/*
 * Copyright (C) 2021 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
    bundleName: "LineOfSight",
    bundleDescription: "Das LineOfSight-Widget ist ein 3D-Analysewerkzeug, mit dem Sie eine Sichtbarkeitsanalyse in einer SceneView durchführen können. Die Sichtbarkeit zwischen einem bestimmten Beobachter und mehreren Zielpunkten wird anhand des aktuell angezeigten Inhalts in der Ansicht berechnet, einschließlich Boden, integrierte Netze und 3D-Objekte wie Gebäude oder Bäume.",
    ui: {
        windowTitle: "Sichtlinien-Simulation",
    },
    tool: {
        title: "Sichtlinien",
        tooltip: "Sichtlinien",
    }
}
