///
/// Copyright (C) 2025 con terra GmbH (info@conterra.de)
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///         http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

/*
 * Copyright (C) 2025 con terra GmbH (info@conterra.de)
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
import {createDijit} from "esri-widgets/EsriDijit";
import Binding from "apprt-binding/Binding";
import LineOfSight from "esri/widgets/LineOfSight";
import { type MapWidgetModel } from "map-widget/api";

import { InjectedReference } from "apprt-core/InjectedReference";

export default class LineOfSightWidgetFactory {

    _mapWidgetModel: InjectedReference<MapWidgetModel>;
    private binding?: Binding;
    private lineOfSightWidget?: LineOfSight | any;

    private deactivate(): void {
        this.deactivateBinding();
        this.destroyWidget();
        this.lineOfSightWidget?.viewModel.stop();
    }

    private createInstance(): any {
        return this.getWidget();
    }

    private getWidget(): any {
        const lineOfSightWidget = this.lineOfSightWidget = new LineOfSight();
        const binding = this.binding = Binding.for(lineOfSightWidget, this._mapWidgetModel!)
            .syncToLeft("view")
            .enable()
            .syncToLeftNow();

        const widget = createDijit(lineOfSightWidget);

        widget.deactivateWidget = function () {
            lineOfSightWidget.viewModel.stop();
        };
        widget.own(binding);
        return widget;
    }

    private destroyWidget(): void {
        this.lineOfSightWidget?.destroy();
        this.lineOfSightWidget = undefined;
    }

    private deactivateBinding(): void {
        this.binding?.unbind();
        this.binding = undefined;
    }
}
