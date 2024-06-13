/*
 * Copyright (C) 2023 con terra GmbH (info@conterra.de)
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
import EsriDijit from "esri-widgets/EsriDijit";
import Binding from "apprt-binding/Binding";
import LineOfSight from "esri/widgets/LineOfSight";

export default class LineOfSightWidgetFactory {

    #binding = null;
    #lineOfSightWidget = null;

    deactivate() {
        this._deactivateBinding();
        this._destroyWidget();
    }

    createInstance() {
        return this._getWidget();
    }

    _getWidget() {
        const lineOfSightWidget = this.#lineOfSightWidget = new LineOfSight();
        const mapWidgetModel = this._mapWidgetModel;
        const binding = this.#binding = Binding.for(lineOfSightWidget, mapWidgetModel)
            .syncToLeft("view")
            .enable()
            .syncToLeftNow();

        lineOfSightWidget.own(binding);

        return new EsriDijit(lineOfSightWidget);
    }

    _destroyWidget() {
        this.#lineOfSightWidget?.destroy();
        this.#lineOfSightWidget = null;
    }

    _deactivateBinding() {
        this.#binding?.unbind();
        this.#binding = null;
    }
}
