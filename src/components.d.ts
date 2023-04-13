/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ActiveTool, ExportOutput, ExtentSelector, IMeasureConfiguration, InstantAppsPopoverMessageOverrides, LayerExpression, PopoverPlacement } from "./interfaces/interfaces";
import { FilterMode } from "./components/instant-apps-interactive-legend/instant-apps-interactive-legend-classic/interfaces/interfaces";
import { InstantAppsPopovers } from "./components/instant-apps-popovers/instant-apps-popovers";
import { LogicalPlacement } from "@esri/calcite-components/dist/types/utils/floating-ui";
import { ScoreboardData, ScoreboardMode, ScoreboardPosition } from "./components/instant-apps-scoreboard/types/interfaces";
export namespace Components {
    interface InstantAppsExport {
        /**
          * Extra content that will be added below the view.
         */
        "extraContent"?: HTMLElement;
        /**
          * Export header name, updated in input.
         */
        "headerTitle"?: string;
        /**
          * When `true`, include legend in export.
         */
        "includeLegend"?: boolean;
        /**
          * When `true`, include map in export.
         */
        "includeMap"?: boolean;
        /**
          * When `true`, include popup in export.
         */
        "includePopup"?: boolean;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode": 'popover' | 'inline';
        /**
          * Output to use to set up export.
         */
        "output"?: ExportOutput;
        /**
          * Determines where the component will be positioned relative to the `referenceElement`.
         */
        "popoverPlacement"?: PopoverPlacement;
        /**
          * Determines the type of positioning to use for the overlaid content. Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout. `"fixed"` value should be used to escape an overflowing parent container, or when the reference element's position CSS property is `"fixed"`.
         */
        "popoverPositioning"?: 'absolute' | 'fixed';
        /**
          * Adjusts the scale of the action button.
         */
        "scale"?: 's' | 'm' | 'l';
        /**
          * Show header title input.
         */
        "showHeaderTitle"?: boolean;
        /**
          * Show include legend checkbox.
         */
        "showIncludeLegend"?: boolean;
        /**
          * Show include map checkbox.
         */
        "showIncludeMap"?: boolean;
        /**
          * Show popup checkbox.
         */
        "showIncludePopup"?: boolean;
        /**
          * MapView or SceneView to reference when filtering.
         */
        "view": __esri.MapView | __esri.SceneView | undefined;
    }
    interface InstantAppsFilterList {
        /**
          * Auto update URL with filter params.
         */
        "autoUpdateUrl"?: boolean;
        /**
          * Display close button in footer.
         */
        "closeBtn"?: boolean;
        /**
          * Close button onClick function.
         */
        "closeBtnOnClick"?: () => void;
        /**
          * Close button text.
         */
        "closeBtnText"?: string;
        /**
          * Turn on the ability to filter by extent.
         */
        "extentSelector"?: boolean;
        /**
          * Limits filtering options based on the view's extent geometry.
         */
        "extentSelectorConfig"?: ExtentSelector;
        /**
          * Use this to create filters that update a layer's definitionExpression.
         */
        "layerExpressions": LayerExpression[];
        /**
          * When `true`, the layer filter block is expanded.
         */
        "openFilters"?: boolean;
        /**
          * URL params set by using filters.
         */
        "urlParams"?: URLSearchParams;
        /**
          * MapView or SceneView to reference when filtering.
         */
        "view": __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsHeader {
        /**
          * Background color to display in header - accepts a hexidecimal value i.e. `#000000`.
         */
        "backgroundColor": string;
        /**
          * CSS styles to be used in conjuction with `custom-header-html`.
         */
        "customHeaderCss": string;
        /**
          * HTML code for custom headers.
         */
        "customHeaderHtml": string;
        /**
          * Font family to use for text
         */
        "fontFamily": string;
        /**
          * Display info button at the end of the title.
         */
        "infoButton": boolean;
        /**
          * Keeps track of the info 'open' state
         */
        "infoIsOpen": boolean;
        /**
          * Image URL for logo. Displays at the start of the header.
         */
        "logoImage": string;
        /**
          * Alternate text for header logo.
         */
        "logoImageAltText": string;
        /**
          * Logo URL to link out to another page.
         */
        "logoLink": string;
        /**
          * Adjusts scale of logo image.
         */
        "logoScale": 's' | 'm' | 'l';
        /**
          * Mobile breakpoint value in pixels(px).
         */
        "mobileWidthBreakpoint": number;
        /**
          * Text color to display in header - accepts a hexidecimal value i.e. `#FFFFFF`.
         */
        "textColor": string;
        /**
          * Main text to display in header.
         */
        "titleText": string;
        /**
          * Url to link out to from title text
         */
        "titleTextLink": string;
    }
    interface InstantAppsInteractiveLegend {
        /**
          * Display individual counts and total counts for legend infos.
         */
        "featureCount": boolean;
        /**
          * Filter mode to use when filtering features.
         */
        "filterMode": FilterMode;
        /**
          * Reference to Map View or Scene View
         */
        "view": __esri.MapView;
        /**
          * Displays 'Zoom To' button - updates the extent of the view based on the selected legend infos.
         */
        "zoomTo": boolean;
    }
    interface InstantAppsInteractiveLegendCaption {
        "activeLayerInfo": __esri.ActiveLayerInfo;
        "featureCount": boolean;
        "isChild": boolean;
        "legendvm": __esri.LegendViewModel;
        "messages": any;
    }
    interface InstantAppsInteractiveLegendClassic {
        /**
          * Display individual counts and total counts for legend infos.
         */
        "featureCount": boolean;
        /**
          * Filter mode to use when filtering features.
         */
        "filterMode": FilterMode;
        /**
          * Legend View model from the 4.x ArcGIS API for JavaScript
         */
        "legendvm": __esri.LegendViewModel;
        "messages": any;
        /**
          * Displays 'Zoom To' button - updates the extent of the view based on the selected legend infos.
         */
        "zoomTo": boolean;
    }
    interface InstantAppsInteractiveLegendCount {
        "categoryId": string;
        "layerId": string;
        "legendvm": __esri.LegendViewModel;
        "messages": any;
        "selected": boolean;
        "showTotal": boolean;
    }
    interface InstantAppsInteractiveLegendLayerCaption {
        "activeLayerInfo": __esri.ActiveLayerInfo;
        "expanded": boolean;
        "isInteractive": boolean;
        "layer": __esri.FeatureLayer;
        "legendElementIndex": number;
        "legendvm": __esri.LegendViewModel;
        "messages": any;
        "titleText": string;
        "zoomTo": boolean;
    }
    interface InstantAppsInteractiveLegendRelationship {
        "activeLayerInfo": __esri.ActiveLayerInfo;
        "filterMode": FilterMode;
        "legendElement": __esri.RelationshipRampElement;
        "messages": any;
    }
    interface InstantAppsKeyboardShortcuts {
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view": __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsMeasurement {
        "areaUnit"?: __esri.AreaUnit;
        "coordinateFormat"?: string;
        "linearUnit"?: __esri.LengthUnit;
        /**
          * MapView or SceneView
         */
        "view": __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsMeasurementTool {
        "activeTool": ActiveTool;
        "measureConfiguration": IMeasureConfiguration;
        "view": __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsPopover {
        "content": string;
        "disableAction": boolean;
        "imgAlt": string;
        "imgSrc": string;
        "index": number;
        "mediaSrc": string;
        "messageOverrides": InstantAppsPopoverMessageOverrides;
        "pagination": boolean;
        "parent": InstantAppsPopovers;
        "placement": LogicalPlacement;
        "popoverAction": (event: MouseEvent) => void;
        "popoverTitle": string;
        "refId": string;
        "referenceElement": string | HTMLElement;
        "subtitle": string;
    }
    interface InstantAppsPopovers {
        "beforeOpen": () => Promise<void>;
        "beginTour": () => Promise<void>;
        "close": (key: string) => Promise<void>;
        "currentId": string;
        "endTour": () => Promise<void>;
        "inTour": boolean;
        "instantAppsPopovers": Map<string, HTMLInstantAppsPopoverElement>;
        "open": (key: string) => Promise<void>;
    }
    interface InstantAppsScoreboard {
        /**
          * Data on layers, field attribute info, operations, for each scoreboard item
         */
        "data": ScoreboardData;
        /**
          * Mode of scoreboard i.e. 'floating' or 'pinned'.
         */
        "mode": ScoreboardMode;
        /**
          * Position of scoreboard i.e. 'bottom', 'left', or 'right'.
         */
        "position": ScoreboardPosition;
        /**
          * MapView or SceneView to reference extent, viewpoint, and layers in map to perform calculations.
         */
        "view": __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsSocialShare {
        /**
          * Auto update share URL.
         */
        "autoUpdateShareUrl": boolean;
        /**
          * Configure the default URL parameters that are appended to the generated share URL.
         */
        "defaultUrlParams": { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        /**
          * Show/hide the tip text below the share options.
         */
        "displayTipText": boolean;
        /**
          * Show/hide the embed UI.
         */
        "embed": boolean;
        /**
          * Text to nest in embed iframe code.
         */
        "iframeInnerText": string;
        /**
          * Configures the placement of the success message popover for the 'Copy Link' button. See options here: https://github.com/Esri/calcite-components/blob/v1.0.0-beta.83/src/utils/popper.ts#L34
         */
        "inlineSuccessPopoverPlacement": LogicalPlacement;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode": 'popover' | 'inline';
        /**
          * Adjusts the scale of the popover button icon.
         */
        "popoverButtonIconScale": 's' | 'm' | 'l';
        /**
          * Adjusts the scale of the component.
         */
        "scale": 's' | 'm' | 'l';
        "shareButtonColor": 'inverse' | 'neutral';
        /**
          * Display the share icons in a vertical or horizontal layout.
         */
        "shareIconsLayout": 'vertical' | 'horizontal';
        "shareText": string;
        /**
          * Generated share URL. Use this property to append custom URL parameters if needed.
         */
        "shareUrl": string;
        /**
          * Shortens generated URL.
         */
        "shortenShareUrl": boolean;
        /**
          * Show/hide social media icons.
         */
        "socialMedia": boolean;
        /**
          * Provides an alternate to the success.url message "App URL copied to clipboard."
         */
        "successMessage": string;
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view": __esri.MapView | __esri.SceneView;
    }
}
export interface InstantAppsExportCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInstantAppsExportElement;
}
export interface InstantAppsFilterListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInstantAppsFilterListElement;
}
export interface InstantAppsHeaderCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInstantAppsHeaderElement;
}
export interface InstantAppsInteractiveLegendLayerCaptionCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInstantAppsInteractiveLegendLayerCaptionElement;
}
export interface InstantAppsMeasurementCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInstantAppsMeasurementElement;
}
export interface InstantAppsScoreboardCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLInstantAppsScoreboardElement;
}
declare global {
    interface HTMLInstantAppsExportElement extends Components.InstantAppsExport, HTMLStencilElement {
    }
    var HTMLInstantAppsExportElement: {
        prototype: HTMLInstantAppsExportElement;
        new (): HTMLInstantAppsExportElement;
    };
    interface HTMLInstantAppsFilterListElement extends Components.InstantAppsFilterList, HTMLStencilElement {
    }
    var HTMLInstantAppsFilterListElement: {
        prototype: HTMLInstantAppsFilterListElement;
        new (): HTMLInstantAppsFilterListElement;
    };
    interface HTMLInstantAppsHeaderElement extends Components.InstantAppsHeader, HTMLStencilElement {
    }
    var HTMLInstantAppsHeaderElement: {
        prototype: HTMLInstantAppsHeaderElement;
        new (): HTMLInstantAppsHeaderElement;
    };
    interface HTMLInstantAppsInteractiveLegendElement extends Components.InstantAppsInteractiveLegend, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendElement: {
        prototype: HTMLInstantAppsInteractiveLegendElement;
        new (): HTMLInstantAppsInteractiveLegendElement;
    };
    interface HTMLInstantAppsInteractiveLegendCaptionElement extends Components.InstantAppsInteractiveLegendCaption, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendCaptionElement: {
        prototype: HTMLInstantAppsInteractiveLegendCaptionElement;
        new (): HTMLInstantAppsInteractiveLegendCaptionElement;
    };
    interface HTMLInstantAppsInteractiveLegendClassicElement extends Components.InstantAppsInteractiveLegendClassic, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendClassicElement: {
        prototype: HTMLInstantAppsInteractiveLegendClassicElement;
        new (): HTMLInstantAppsInteractiveLegendClassicElement;
    };
    interface HTMLInstantAppsInteractiveLegendCountElement extends Components.InstantAppsInteractiveLegendCount, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendCountElement: {
        prototype: HTMLInstantAppsInteractiveLegendCountElement;
        new (): HTMLInstantAppsInteractiveLegendCountElement;
    };
    interface HTMLInstantAppsInteractiveLegendLayerCaptionElement extends Components.InstantAppsInteractiveLegendLayerCaption, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendLayerCaptionElement: {
        prototype: HTMLInstantAppsInteractiveLegendLayerCaptionElement;
        new (): HTMLInstantAppsInteractiveLegendLayerCaptionElement;
    };
    interface HTMLInstantAppsInteractiveLegendRelationshipElement extends Components.InstantAppsInteractiveLegendRelationship, HTMLStencilElement {
    }
    var HTMLInstantAppsInteractiveLegendRelationshipElement: {
        prototype: HTMLInstantAppsInteractiveLegendRelationshipElement;
        new (): HTMLInstantAppsInteractiveLegendRelationshipElement;
    };
    interface HTMLInstantAppsKeyboardShortcutsElement extends Components.InstantAppsKeyboardShortcuts, HTMLStencilElement {
    }
    var HTMLInstantAppsKeyboardShortcutsElement: {
        prototype: HTMLInstantAppsKeyboardShortcutsElement;
        new (): HTMLInstantAppsKeyboardShortcutsElement;
    };
    interface HTMLInstantAppsMeasurementElement extends Components.InstantAppsMeasurement, HTMLStencilElement {
    }
    var HTMLInstantAppsMeasurementElement: {
        prototype: HTMLInstantAppsMeasurementElement;
        new (): HTMLInstantAppsMeasurementElement;
    };
    interface HTMLInstantAppsMeasurementToolElement extends Components.InstantAppsMeasurementTool, HTMLStencilElement {
    }
    var HTMLInstantAppsMeasurementToolElement: {
        prototype: HTMLInstantAppsMeasurementToolElement;
        new (): HTMLInstantAppsMeasurementToolElement;
    };
    interface HTMLInstantAppsPopoverElement extends Components.InstantAppsPopover, HTMLStencilElement {
    }
    var HTMLInstantAppsPopoverElement: {
        prototype: HTMLInstantAppsPopoverElement;
        new (): HTMLInstantAppsPopoverElement;
    };
    interface HTMLInstantAppsPopoversElement extends Components.InstantAppsPopovers, HTMLStencilElement {
    }
    var HTMLInstantAppsPopoversElement: {
        prototype: HTMLInstantAppsPopoversElement;
        new (): HTMLInstantAppsPopoversElement;
    };
    interface HTMLInstantAppsScoreboardElement extends Components.InstantAppsScoreboard, HTMLStencilElement {
    }
    var HTMLInstantAppsScoreboardElement: {
        prototype: HTMLInstantAppsScoreboardElement;
        new (): HTMLInstantAppsScoreboardElement;
    };
    interface HTMLInstantAppsSocialShareElement extends Components.InstantAppsSocialShare, HTMLStencilElement {
    }
    var HTMLInstantAppsSocialShareElement: {
        prototype: HTMLInstantAppsSocialShareElement;
        new (): HTMLInstantAppsSocialShareElement;
    };
    interface HTMLElementTagNameMap {
        "instant-apps-export": HTMLInstantAppsExportElement;
        "instant-apps-filter-list": HTMLInstantAppsFilterListElement;
        "instant-apps-header": HTMLInstantAppsHeaderElement;
        "instant-apps-interactive-legend": HTMLInstantAppsInteractiveLegendElement;
        "instant-apps-interactive-legend-caption": HTMLInstantAppsInteractiveLegendCaptionElement;
        "instant-apps-interactive-legend-classic": HTMLInstantAppsInteractiveLegendClassicElement;
        "instant-apps-interactive-legend-count": HTMLInstantAppsInteractiveLegendCountElement;
        "instant-apps-interactive-legend-layer-caption": HTMLInstantAppsInteractiveLegendLayerCaptionElement;
        "instant-apps-interactive-legend-relationship": HTMLInstantAppsInteractiveLegendRelationshipElement;
        "instant-apps-keyboard-shortcuts": HTMLInstantAppsKeyboardShortcutsElement;
        "instant-apps-measurement": HTMLInstantAppsMeasurementElement;
        "instant-apps-measurement-tool": HTMLInstantAppsMeasurementToolElement;
        "instant-apps-popover": HTMLInstantAppsPopoverElement;
        "instant-apps-popovers": HTMLInstantAppsPopoversElement;
        "instant-apps-scoreboard": HTMLInstantAppsScoreboardElement;
        "instant-apps-social-share": HTMLInstantAppsSocialShareElement;
    }
}
declare namespace LocalJSX {
    interface InstantAppsExport {
        /**
          * Extra content that will be added below the view.
         */
        "extraContent"?: HTMLElement;
        /**
          * Export header name, updated in input.
         */
        "headerTitle"?: string;
        /**
          * When `true`, include legend in export.
         */
        "includeLegend"?: boolean;
        /**
          * When `true`, include map in export.
         */
        "includeMap"?: boolean;
        /**
          * When `true`, include popup in export.
         */
        "includePopup"?: boolean;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode"?: 'popover' | 'inline';
        /**
          * Emits when the instant-apps-export's output prop is updated after the "Export" button is clicked.
         */
        "onExportOutputUpdated"?: (event: InstantAppsExportCustomEvent<void>) => void;
        /**
          * Output to use to set up export.
         */
        "output"?: ExportOutput;
        /**
          * Determines where the component will be positioned relative to the `referenceElement`.
         */
        "popoverPlacement"?: PopoverPlacement;
        /**
          * Determines the type of positioning to use for the overlaid content. Using `"absolute"` will work for most cases. The component will be positioned inside of overflowing parent containers and will affect the container's layout. `"fixed"` value should be used to escape an overflowing parent container, or when the reference element's position CSS property is `"fixed"`.
         */
        "popoverPositioning"?: 'absolute' | 'fixed';
        /**
          * Adjusts the scale of the action button.
         */
        "scale"?: 's' | 'm' | 'l';
        /**
          * Show header title input.
         */
        "showHeaderTitle"?: boolean;
        /**
          * Show include legend checkbox.
         */
        "showIncludeLegend"?: boolean;
        /**
          * Show include map checkbox.
         */
        "showIncludeMap"?: boolean;
        /**
          * Show popup checkbox.
         */
        "showIncludePopup"?: boolean;
        /**
          * MapView or SceneView to reference when filtering.
         */
        "view"?: __esri.MapView | __esri.SceneView | undefined;
    }
    interface InstantAppsFilterList {
        /**
          * Auto update URL with filter params.
         */
        "autoUpdateUrl"?: boolean;
        /**
          * Display close button in footer.
         */
        "closeBtn"?: boolean;
        /**
          * Close button onClick function.
         */
        "closeBtnOnClick"?: () => void;
        /**
          * Close button text.
         */
        "closeBtnText"?: string;
        /**
          * Turn on the ability to filter by extent.
         */
        "extentSelector"?: boolean;
        /**
          * Limits filtering options based on the view's extent geometry.
         */
        "extentSelectorConfig"?: ExtentSelector;
        /**
          * Use this to create filters that update a layer's definitionExpression.
         */
        "layerExpressions"?: LayerExpression[];
        /**
          * Emits when the reset button is pushed.
         */
        "onFilterListReset"?: (event: InstantAppsFilterListCustomEvent<void>) => void;
        /**
          * Emits when the filter is updated.
         */
        "onFilterUpdate"?: (event: InstantAppsFilterListCustomEvent<void>) => void;
        /**
          * When `true`, the layer filter block is expanded.
         */
        "openFilters"?: boolean;
        /**
          * URL params set by using filters.
         */
        "urlParams"?: URLSearchParams;
        /**
          * MapView or SceneView to reference when filtering.
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsHeader {
        /**
          * Background color to display in header - accepts a hexidecimal value i.e. `#000000`.
         */
        "backgroundColor"?: string;
        /**
          * CSS styles to be used in conjuction with `custom-header-html`.
         */
        "customHeaderCss"?: string;
        /**
          * HTML code for custom headers.
         */
        "customHeaderHtml"?: string;
        /**
          * Font family to use for text
         */
        "fontFamily"?: string;
        /**
          * Display info button at the end of the title.
         */
        "infoButton"?: boolean;
        /**
          * Keeps track of the info 'open' state
         */
        "infoIsOpen"?: boolean;
        /**
          * Image URL for logo. Displays at the start of the header.
         */
        "logoImage"?: string;
        /**
          * Alternate text for header logo.
         */
        "logoImageAltText"?: string;
        /**
          * Logo URL to link out to another page.
         */
        "logoLink"?: string;
        /**
          * Adjusts scale of logo image.
         */
        "logoScale"?: 's' | 'm' | 'l';
        /**
          * Mobile breakpoint value in pixels(px).
         */
        "mobileWidthBreakpoint"?: number;
        /**
          * Fires when the info button is clicked.
         */
        "onInfoIsOpenChanged"?: (event: InstantAppsHeaderCustomEvent<boolean>) => void;
        /**
          * Text color to display in header - accepts a hexidecimal value i.e. `#FFFFFF`.
         */
        "textColor"?: string;
        /**
          * Main text to display in header.
         */
        "titleText"?: string;
        /**
          * Url to link out to from title text
         */
        "titleTextLink"?: string;
    }
    interface InstantAppsInteractiveLegend {
        /**
          * Display individual counts and total counts for legend infos.
         */
        "featureCount"?: boolean;
        /**
          * Filter mode to use when filtering features.
         */
        "filterMode"?: FilterMode;
        /**
          * Reference to Map View or Scene View
         */
        "view"?: __esri.MapView;
        /**
          * Displays 'Zoom To' button - updates the extent of the view based on the selected legend infos.
         */
        "zoomTo"?: boolean;
    }
    interface InstantAppsInteractiveLegendCaption {
        "activeLayerInfo"?: __esri.ActiveLayerInfo;
        "featureCount"?: boolean;
        "isChild"?: boolean;
        "legendvm"?: __esri.LegendViewModel;
        "messages"?: any;
    }
    interface InstantAppsInteractiveLegendClassic {
        /**
          * Display individual counts and total counts for legend infos.
         */
        "featureCount"?: boolean;
        /**
          * Filter mode to use when filtering features.
         */
        "filterMode"?: FilterMode;
        /**
          * Legend View model from the 4.x ArcGIS API for JavaScript
         */
        "legendvm"?: __esri.LegendViewModel;
        "messages"?: any;
        /**
          * Displays 'Zoom To' button - updates the extent of the view based on the selected legend infos.
         */
        "zoomTo"?: boolean;
    }
    interface InstantAppsInteractiveLegendCount {
        "categoryId"?: string;
        "layerId"?: string;
        "legendvm"?: __esri.LegendViewModel;
        "messages"?: any;
        "selected"?: boolean;
        "showTotal"?: boolean;
    }
    interface InstantAppsInteractiveLegendLayerCaption {
        "activeLayerInfo"?: __esri.ActiveLayerInfo;
        "expanded"?: boolean;
        "isInteractive"?: boolean;
        "layer"?: __esri.FeatureLayer;
        "legendElementIndex"?: number;
        "legendvm"?: __esri.LegendViewModel;
        "messages"?: any;
        "onShowAllSelected"?: (event: InstantAppsInteractiveLegendLayerCaptionCustomEvent<boolean>) => void;
        "titleText"?: string;
        "zoomTo"?: boolean;
    }
    interface InstantAppsInteractiveLegendRelationship {
        "activeLayerInfo"?: __esri.ActiveLayerInfo;
        "filterMode"?: FilterMode;
        "legendElement"?: __esri.RelationshipRampElement;
        "messages"?: any;
    }
    interface InstantAppsKeyboardShortcuts {
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsMeasurement {
        "areaUnit"?: __esri.AreaUnit;
        "coordinateFormat"?: string;
        "linearUnit"?: __esri.LengthUnit;
        /**
          * Emits when there is an active measure tool to allow app devs to disable other tools/popups when tools are active .
         */
        "onMeasureActive"?: (event: InstantAppsMeasurementCustomEvent<boolean>) => void;
        /**
          * MapView or SceneView
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsMeasurementTool {
        "activeTool"?: ActiveTool;
        "measureConfiguration"?: IMeasureConfiguration;
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsPopover {
        "content"?: string;
        "disableAction"?: boolean;
        "imgAlt"?: string;
        "imgSrc"?: string;
        "index"?: number;
        "mediaSrc"?: string;
        "messageOverrides"?: InstantAppsPopoverMessageOverrides;
        "pagination"?: boolean;
        "parent"?: InstantAppsPopovers;
        "placement"?: LogicalPlacement;
        "popoverAction"?: (event: MouseEvent) => void;
        "popoverTitle"?: string;
        "refId"?: string;
        "referenceElement"?: string | HTMLElement;
        "subtitle"?: string;
    }
    interface InstantAppsPopovers {
        "beforeOpen"?: () => Promise<void>;
        "currentId"?: string;
        "inTour"?: boolean;
        "instantAppsPopovers"?: Map<string, HTMLInstantAppsPopoverElement>;
    }
    interface InstantAppsScoreboard {
        /**
          * Data on layers, field attribute info, operations, for each scoreboard item
         */
        "data"?: ScoreboardData;
        /**
          * Mode of scoreboard i.e. 'floating' or 'pinned'.
         */
        "mode"?: ScoreboardMode;
        /**
          * Emits when scoreboard data has been calculated and updated.
         */
        "onScoreboardDataUpdated"?: (event: InstantAppsScoreboardCustomEvent<ScoreboardData>) => void;
        /**
          * Position of scoreboard i.e. 'bottom', 'left', or 'right'.
         */
        "position"?: ScoreboardPosition;
        /**
          * MapView or SceneView to reference extent, viewpoint, and layers in map to perform calculations.
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface InstantAppsSocialShare {
        /**
          * Auto update share URL.
         */
        "autoUpdateShareUrl"?: boolean;
        /**
          * Configure the default URL parameters that are appended to the generated share URL.
         */
        "defaultUrlParams"?: { center?: boolean; level?: boolean; viewpoint?: boolean; selectedFeature?: boolean; hiddenLayers?: boolean } | null;
        /**
          * Show/hide the tip text below the share options.
         */
        "displayTipText"?: boolean;
        /**
          * Show/hide the embed UI.
         */
        "embed"?: boolean;
        /**
          * Text to nest in embed iframe code.
         */
        "iframeInnerText"?: string;
        /**
          * Configures the placement of the success message popover for the 'Copy Link' button. See options here: https://github.com/Esri/calcite-components/blob/v1.0.0-beta.83/src/utils/popper.ts#L34
         */
        "inlineSuccessPopoverPlacement"?: LogicalPlacement;
        /**
          * Renders tool as a popover with a trigger button, or inline to place in a custom container.
         */
        "mode"?: 'popover' | 'inline';
        /**
          * Adjusts the scale of the popover button icon.
         */
        "popoverButtonIconScale"?: 's' | 'm' | 'l';
        /**
          * Adjusts the scale of the component.
         */
        "scale"?: 's' | 'm' | 'l';
        "shareButtonColor"?: 'inverse' | 'neutral';
        /**
          * Display the share icons in a vertical or horizontal layout.
         */
        "shareIconsLayout"?: 'vertical' | 'horizontal';
        "shareText"?: string;
        /**
          * Generated share URL. Use this property to append custom URL parameters if needed.
         */
        "shareUrl"?: string;
        /**
          * Shortens generated URL.
         */
        "shortenShareUrl"?: boolean;
        /**
          * Show/hide social media icons.
         */
        "socialMedia"?: boolean;
        /**
          * Provides an alternate to the success.url message "App URL copied to clipboard."
         */
        "successMessage"?: string;
        /**
          * MapView or SceneView to reference when URL parameter values are generated, i.e. center, level, viewpoint, etc.
         */
        "view"?: __esri.MapView | __esri.SceneView;
    }
    interface IntrinsicElements {
        "instant-apps-export": InstantAppsExport;
        "instant-apps-filter-list": InstantAppsFilterList;
        "instant-apps-header": InstantAppsHeader;
        "instant-apps-interactive-legend": InstantAppsInteractiveLegend;
        "instant-apps-interactive-legend-caption": InstantAppsInteractiveLegendCaption;
        "instant-apps-interactive-legend-classic": InstantAppsInteractiveLegendClassic;
        "instant-apps-interactive-legend-count": InstantAppsInteractiveLegendCount;
        "instant-apps-interactive-legend-layer-caption": InstantAppsInteractiveLegendLayerCaption;
        "instant-apps-interactive-legend-relationship": InstantAppsInteractiveLegendRelationship;
        "instant-apps-keyboard-shortcuts": InstantAppsKeyboardShortcuts;
        "instant-apps-measurement": InstantAppsMeasurement;
        "instant-apps-measurement-tool": InstantAppsMeasurementTool;
        "instant-apps-popover": InstantAppsPopover;
        "instant-apps-popovers": InstantAppsPopovers;
        "instant-apps-scoreboard": InstantAppsScoreboard;
        "instant-apps-social-share": InstantAppsSocialShare;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "instant-apps-export": LocalJSX.InstantAppsExport & JSXBase.HTMLAttributes<HTMLInstantAppsExportElement>;
            "instant-apps-filter-list": LocalJSX.InstantAppsFilterList & JSXBase.HTMLAttributes<HTMLInstantAppsFilterListElement>;
            "instant-apps-header": LocalJSX.InstantAppsHeader & JSXBase.HTMLAttributes<HTMLInstantAppsHeaderElement>;
            "instant-apps-interactive-legend": LocalJSX.InstantAppsInteractiveLegend & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendElement>;
            "instant-apps-interactive-legend-caption": LocalJSX.InstantAppsInteractiveLegendCaption & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendCaptionElement>;
            "instant-apps-interactive-legend-classic": LocalJSX.InstantAppsInteractiveLegendClassic & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendClassicElement>;
            "instant-apps-interactive-legend-count": LocalJSX.InstantAppsInteractiveLegendCount & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendCountElement>;
            "instant-apps-interactive-legend-layer-caption": LocalJSX.InstantAppsInteractiveLegendLayerCaption & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendLayerCaptionElement>;
            "instant-apps-interactive-legend-relationship": LocalJSX.InstantAppsInteractiveLegendRelationship & JSXBase.HTMLAttributes<HTMLInstantAppsInteractiveLegendRelationshipElement>;
            "instant-apps-keyboard-shortcuts": LocalJSX.InstantAppsKeyboardShortcuts & JSXBase.HTMLAttributes<HTMLInstantAppsKeyboardShortcutsElement>;
            "instant-apps-measurement": LocalJSX.InstantAppsMeasurement & JSXBase.HTMLAttributes<HTMLInstantAppsMeasurementElement>;
            "instant-apps-measurement-tool": LocalJSX.InstantAppsMeasurementTool & JSXBase.HTMLAttributes<HTMLInstantAppsMeasurementToolElement>;
            "instant-apps-popover": LocalJSX.InstantAppsPopover & JSXBase.HTMLAttributes<HTMLInstantAppsPopoverElement>;
            "instant-apps-popovers": LocalJSX.InstantAppsPopovers & JSXBase.HTMLAttributes<HTMLInstantAppsPopoversElement>;
            "instant-apps-scoreboard": LocalJSX.InstantAppsScoreboard & JSXBase.HTMLAttributes<HTMLInstantAppsScoreboardElement>;
            "instant-apps-social-share": LocalJSX.InstantAppsSocialShare & JSXBase.HTMLAttributes<HTMLInstantAppsSocialShareElement>;
        }
    }
}
