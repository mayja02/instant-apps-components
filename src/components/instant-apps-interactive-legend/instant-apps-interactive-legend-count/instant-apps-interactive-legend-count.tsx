import { Component, h, Prop } from '@stencil/core';
import { ICategory } from '../instant-apps-interactive-legend-classic/interfaces/interfaces';
import { loadModules } from 'esri-loader';
import { interactiveLegendState, store } from '../support/store';
import { handleFeatureCount } from '../support/helpers';

const CSS = {
  countText: ' instant-apps-interactive-legend__info-count-text',
  countTextSelected: ' instant-apps-interactive-legend__info-count-text--selected',
  calcite: {
    theme: {
      light: 'calcite-mode-light',
      dark: 'calcite-mode-dark',
    },
  },
};

@Component({
  tag: 'instant-apps-interactive-legend-count',
  styleUrl: 'instant-apps-interactive-legend-count.scss',
  scoped: true,
})
export class InstantAppsInteractiveLegendCount {
  intl: __esri.intl;
  reactiveUtils: __esri.reactiveUtils;
  handles: __esri.Handles;

  @Prop()
  showTotal: boolean = false;

  @Prop()
  legendvm: __esri.LegendViewModel;

  @Prop()
  layerId: string;

  @Prop()
  categoryId: string; //LegendElementInfo.label

  @Prop()
  infoIndex: number;

  @Prop()
  messages;

  @Prop()
  selected: boolean;

  @Prop()
  legendElement: __esri.LegendElement;

  // @State()
  // reRender = false;

  async componentWillLoad() {
    const observer = new MutationObserver(() => {
      // this.reRender = !this.reRender;
    });
    observer.observe(document.body, {
      attributes: true,
    });
    const [intl, reactiveUtils, Handles] = await loadModules(['esri/intl', 'esri/core/reactiveUtils', 'esri/core/Handles']);
    this.intl = intl;
    this.reactiveUtils = reactiveUtils;
    this.handles = new Handles();
    this.reactiveUtils.when(
      () => this.legendvm,
      () => {
        this.reactiveUtils.watch(
          () => this.legendvm?.view?.updating,
          async () => {
            const data = await handleFeatureCount(this.legendvm, interactiveLegendState.data);
            const layerData = data[this.layerId];
            store.set('data', { ...interactiveLegendState.data, [this.layerId]: layerData });
          },
          { initial: true },
        );
      },
      { initial: true, once: true },
    );
  }

  render() {
    return (
      <div key="int-legend-count">
        {this.showTotal ? (
          <span>
            {this.messages?.totalFeatureCount}: {this.getTotalFeatureCount()}
          </span>
        ) : (
          <span key="element-info-count" class={`${CSS.countText} ${this._getTheme()}${this.selected ? CSS.countTextSelected : ''}`}>
            {this.getCount()}
          </span>
        )}
      </div>
    );
  }

  getCount(): string | undefined {
    const { layerId, categoryId } = this;
    const isSingleElement = interactiveLegendState.data[layerId]?.categories?.size;
    if ((!interactiveLegendState.data || !layerId || !categoryId) && !isSingleElement) return '';

    const dataFromActiveLayerInfo = interactiveLegendState.data[layerId];
    if (!dataFromActiveLayerInfo) return;
    const { categories } = dataFromActiveLayerInfo;
    const category = categories.get(categoryId) as ICategory;

    if (category?.nestedInfos) {
      // nested
      const nestedInfo = category?.nestedInfos[this.infoIndex];
      return !isNaN(nestedInfo?.count as number) ? this.intl.formatNumber(nestedInfo.count as number) : '';
    } else {
      return !isNaN(category?.count as number) ? this.intl.formatNumber(category.count as number) : '';
    }
  }

  getTotalFeatureCount() {
    const { layerId } = this;
    if (!interactiveLegendState.data || !layerId) return '';
    const dataFromActiveLayerInfo = interactiveLegendState.data[layerId];
    if (!dataFromActiveLayerInfo) return;
    const { categories } = dataFromActiveLayerInfo;

    const categoriesArr = Array.from(categories).map((category: any) => category[1]);
    const isNestedUniqueSymbol = categoriesArr.every((category: ICategory) => !!category?.nestedInfos);

    if (isNestedUniqueSymbol) {
      // nested
      return categoriesArr
        .map(category => category.nestedInfos.map(nestedInfo => nestedInfo.count).reduce((acc: number, curr: number) => acc + curr))
        .reduce((acc: number, curr: number) => acc + curr);
    } else {
      const total = Array.from(categories.entries())
        .map((entry: any) => entry?.[1]?.count)
        .reduce((acc: number, curr: number) => acc + curr);
      return this.intl.formatNumber(total as number);
    }
  }

  private _getTheme(): string {
    const { light, dark } = CSS.calcite.theme;
    const isDarkTheme = document.body.classList.contains(dark);
    return isDarkTheme ? dark : light;
  }
}
