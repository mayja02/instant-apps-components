import { Component, h, Prop, EventEmitter, Event, Element } from '@stencil/core';

import {
  checkNestedUniqueSymbolLegendElement,
  checkRelationshipRamp,
  getIntLegendLayerData,
  getParentLegendElementInfoData,
  showAll,
  showAllNestedUniqueSymbol,
  zoomTo,
} from '../support/helpers';
import { interactiveLegendState, store } from '../support/store';
const CSS = {
  layerCaption: 'esri-legend__layer-caption',
  layerCaptionBtnContainer: 'instant-apps-interactive-legend__layer-caption-btn-container',
  layerCaptionBtnContainerNoText: 'instant-apps-interactive-legend__layer-caption-btn-container--no-text',
  layerCaptionText: 'instant-apps-interactive-legend__legend-layer-caption-text',
};

@Component({
  tag: 'instant-apps-interactive-legend-legend-element-caption',
  styleUrl: 'instant-apps-interactive-legend-legend-element-caption.scss',
  scoped: true,
})
export class InstantAppsInteractiveLegendLegendElementCaption {
  @Prop()
  legendvm: __esri.LegendViewModel;

  @Prop()
  activeLayerInfo: __esri.ActiveLayerInfo;

  @Prop()
  layer: __esri.FeatureLayer;

  @Prop()
  titleText: string;

  @Prop()
  legendElementIndex: number;

  @Prop()
  zoomTo: boolean;

  @Prop()
  isInteractive: boolean;

  @Prop()
  legendElement: __esri.LegendElement;

  @Prop({
    mutable: true,
  })
  expanded: boolean = true;

  @Prop()
  messages;

  @Event({
    eventName: 'showAllSelected',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  showAllSelectedEvent: EventEmitter<boolean>;

  @Event({
    eventName: 'legendLayerExpandUpdated',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  legendLayerExpandUpdatedEvent: EventEmitter<boolean>;

  @Element()
  el;

  render() {
    const showAllButton =
      interactiveLegendState.data?.[this.layer?.id]?.categories?.size > 1 ? (
        <calcite-button
          key="show-all-button"
          id="showAll"
          onClick={this.handleShowAll()}
          icon-start="list-check-all"
          appearance="outline"
          round={true}
          label={this.messages?.showAll}
        />
      ) : null;

    const zoomToButton = (
      <calcite-button
        key="zoom-to-button"
        id="zoomTo"
        onClick={this.handleZoomTo()}
        icon-start="magnifying-glass-plus"
        appearance="outline"
        round={true}
        label={this.messages?.zoomTo}
      />
    );

    const isNestedUniqueSymbols = checkNestedUniqueSymbolLegendElement(this.activeLayerInfo);

    const isRelationship = checkRelationshipRamp(this.activeLayerInfo);

    const { expanded } = this;

    const noText = !this.titleText ? ` ${CSS.layerCaptionBtnContainerNoText}` : '';

    return isNestedUniqueSymbols && !this.titleText ? null : (
      <div class={CSS.layerCaption}>
        {this.isInteractive || isRelationship ? (
          <div key="layer-caption-btn-container" class={`${CSS.layerCaptionBtnContainer}${noText}`}>
            {showAllButton}
            <calcite-tooltip reference-element="showAll" placement="top" label={this.messages?.showAll}>
              {this.messages?.showAll}
            </calcite-tooltip>
            {this.zoomTo
              ? [
                  zoomToButton,
                  <calcite-tooltip reference-element="zoomTo" placement="top" label={this.messages?.zoomTo}>
                    {this.messages?.zoomTo}
                  </calcite-tooltip>,
                ]
              : null}
          </div>
        ) : null}
        {this.titleText ? (
          <span key={`legend-layer-caption-text-${this.activeLayerInfo?.layer?.id}-${this.legendElementIndex}`} class={CSS.layerCaptionText}>
            {this.titleText}
          </span>
        ) : null}
        <calcite-action
          onClick={this.toggleExpanded()}
          icon={expanded === false ? 'chevron-right' : 'chevron-down'}
          appearance="transparent"
          text={expanded === false ? this.messages?.expand : this.messages?.collapse}
          label={expanded === false ? this.messages?.expand : this.messages?.collapse}
        ></calcite-action>
      </div>
    );
  }

  toggleExpanded(): () => void {
    return () => {
      this.expanded = !this.expanded;
      this.legendLayerExpandUpdatedEvent.emit(this.expanded);
    };
  }

  handleZoomTo(): () => void {
    return () => {
      const data = getIntLegendLayerData(this.layer, interactiveLegendState.data);
      const nestedCategory = getParentLegendElementInfoData(data, this.legendElement);
      zoomTo(data, this.legendvm.view as __esri.MapView, nestedCategory);
    };
  }

  handleShowAll(): () => void {
    return () => {
      const handleNestedCategory = () => {
        const layerData = showAllNestedUniqueSymbol(data, this.legendElement.title as string);
        interactiveLegendState.data[this.layer.id] = layerData;
        store.set('data', { ...interactiveLegendState.data, [this.layer.id]: layerData });
      };

      const handleCategory = () => {
        const layerData = showAll(data);
        interactiveLegendState.data[this.layer.id] = layerData;
        store.set('data', { ...interactiveLegendState.data, [this.layer.id]: layerData });
      };

      const data = interactiveLegendState.data?.[this.layer?.id];

      const nestedCategory = getParentLegendElementInfoData(data, this.legendElement);

      if (nestedCategory) {
        handleNestedCategory();
        return;
      }
      handleCategory();

      this.showAllSelectedEvent.emit();
    };
  }
}
