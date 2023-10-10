import { Component, Event, EventEmitter, Method, Prop, State, h } from '@stencil/core';

import LanguageTranslator_t9n from '../../assets/t9n/instant-apps-language-translator/resources.json';
import { getMessages } from '../instant-apps-language-translator/support/utils';
import { Element } from '@stencil/core';
import { loadModules } from 'esri-loader';
import { getDefaultLanguage } from '../../utils/locale';
import { getPortalItemResource, fetchResourceData } from '../../utils/languageSwitcher';

@Component({
  tag: 'instant-apps-language-switcher',
  styleUrl: 'instant-apps-language-switcher.scss',
  shadow: true,
})
export class InstantAppsLanguageSwitcher {
  portalItemResource: __esri.PortalItemResource;
  userLocale: string;
  intl: __esri.intl;
  request: __esri.request;
  defaultWebMapId: string;
  trigger: HTMLCalciteButtonElement;

  @Element()
  el: HTMLInstantAppsLanguageSwitcherElement;

  /**
   * Icon to display.
   */
  @Prop()
  icon: string = 'language';

  /**
   * Instant App portal item - used to fetch it's associated portal item resource. The portal item resource will contain the user defined translated strings.
   */
  @Prop()
  portalItem!: __esri.PortalItem;

  /**
   * Reference to map view to switch web maps if present in locales.
   */
  @Prop()
  view?: __esri.MapView | __esri.SceneView;

  /**
   * Data used to populate language switcher dropdown.
   */
  @Prop()
  locales: { locale: string; webmap?: string }[] = [];

  /**
   Defines the default language of the language switcher dropdown. Set internally if not defined. 
   */
  @Prop()
  defaultLocale?: string;

  @State()
  messages: typeof LanguageTranslator_t9n;

  @State()
  selectedLanguage: string | null = null;

  @State()
  t9nData: any = null;

  /**
   * Fires when a language is selected from the dropdown. This event will emit an object containing the information on the selected language and a flat object of unique identifiers and their associated values.
   */
  @Event()
  selectedLanguageUpdated: EventEmitter<{
    locale: string;
    data?: {
      [key: string]: string;
    };
  }>;

  async componentWillLoad() {
    const [intl, WebMap, request] = await loadModules(['esri/intl', 'esri/WebMap', 'esri/request']);
    this.intl = intl;
    this.request = request;
    this.messages = await getMessages(document.createElement('instant-apps-language-translator'));
    try {
      this.portalItemResource = (await getPortalItemResource(this.portalItem)) as __esri.PortalItemResource;
      const t9nData = await fetchResourceData(request, this.portalItemResource);
      this.t9nData = t9nData ?? {};
    } catch (err) {
      this.t9nData = {};
      console.error('NO PORTAL ITEM RESOURCE AVAILABLE.');
    } finally {
      const lang = this.defaultLocale ?? (getDefaultLanguage(intl, this.portalItem.portal) as string);
      if (lang) {
        this.userLocale = lang;

        const params = new URLSearchParams(window.location.search);
        const locale = params.get('locale');
        const localeExists = this.locales?.map(locale => locale?.locale)?.filter(localeFlag => localeFlag === locale)?.length > 0;
        this.selectedLanguage = locale && localeExists ? locale : null ?? lang;
        if (locale !== this.selectedLanguage) this.calciteDropdownItemSelectCallback(this.selectedLanguage)();
        this.selectedLanguageUpdated.emit({ locale: this.selectedLanguage, data: this.t9nData?.[this.selectedLanguage] ?? null });
      }

      if (this.view) {
        const webmap = this.view.map as __esri.WebMap;
        this.defaultWebMapId = webmap.portalItem.id;

        const translatedWebmap = this.locales?.filter(
          localeItem => localeItem?.webmap && localeItem?.webmap !== this.defaultWebMapId && localeItem?.locale === this.selectedLanguage,
        )?.[0]?.webmap;
        if (translatedWebmap) {
          this.view.map = new WebMap({
            portalItem: {
              id: translatedWebmap,
            },
          });
        }
      }
    }
  }

  render() {
    const trigger = this.renderTrigger();
    const dropdown = this.renderDropdownItems();
    const defaultLocale = this.renderDefaultLocale();
    return (
      <calcite-dropdown
        onCalciteDropdownBeforeOpen={() => (this.trigger.iconEnd = 'chevron-up')}
        onCalciteDropdownBeforeClose={() => (this.trigger.iconEnd = 'chevron-down')}
        width="m"
      >
        {trigger}
        {defaultLocale}
        {dropdown}
      </calcite-dropdown>
    );
  }

  renderDefaultLocale(): HTMLCalciteDropdownItemElement {
    const { userLocale } = this;
    return (
      <calcite-dropdown-item
        key={`default-${userLocale}`}
        value={userLocale}
        onCalciteDropdownItemSelect={this.calciteDropdownItemSelectCallback(userLocale)}
        selected={this.selectedLanguage === this.userLocale}
      >
        {this.getSelectedLanguageText(userLocale)}
      </calcite-dropdown-item>
    );
  }

  renderTrigger(): HTMLCalciteActionElement {
    return (
      <calcite-button ref={node => (this.trigger = node)} slot="trigger" icon-start={this.icon} icon-end="chevron-down" width="full" appearance="outline">
        {this.getSelectedLanguageText(this.selectedLanguage as string)}
      </calcite-button>
    );
  }

  renderDropdownItems(): HTMLCalciteDropdownItemElement[] {
    return this.locales?.map(localeItem => localeItem.locale)?.map(translatedLanguage => this.renderDropdownItem(translatedLanguage));
  }

  renderDropdownItem(translatedLanguage: string): HTMLCalciteDropdownItemElement {
    const text = this.getSelectedLanguageText(translatedLanguage);
    const selected = translatedLanguage === this.selectedLanguage;

    return (
      <calcite-dropdown-item
        key={translatedLanguage}
        value={translatedLanguage}
        selected={selected}
        onCalciteDropdownItemSelect={this.calciteDropdownItemSelectCallback(translatedLanguage)}
      >
        {text}
      </calcite-dropdown-item>
    );
  }

  calciteDropdownItemSelectCallback(translatedLanguage: string): () => void {
    return async () => {
      this.selectedLanguage = translatedLanguage;

      const { intl, selectedLanguage, t9nData, userLocale } = this;

      const eventData = this.locales.filter(locale => locale.locale === selectedLanguage)[0];

      if (selectedLanguage !== userLocale) eventData['data'] = t9nData[translatedLanguage];

      // Set url parameter 'locale' with value
      const params = new URLSearchParams(window.location.search);
      params.set('locale', this.selectedLanguage);

      intl.setLocale(selectedLanguage);

      if (this.view) {
        const [WebMap] = await loadModules(['esri/WebMap']);
        const webmap = this.locales.filter(localeItem => localeItem.locale === selectedLanguage)?.[0]?.webmap;
        if (webmap) {
          this.view.map = new WebMap({
            portalItem: {
              id: webmap,
            },
          });
        } else {
          const currentMapId = (this.view?.map as __esri.WebMap)?.portalItem?.id;
          if (currentMapId && this.defaultWebMapId !== currentMapId) {
            this.view.map = new WebMap({
              portalItem: {
                id: this.defaultWebMapId,
              },
            });
          }
        }
      }

      document.documentElement.setAttribute('lang', this.selectedLanguage);
      const prefersRTL = this.intl.prefersRTL();
      if (prefersRTL) {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.setAttribute('dir', 'ltr');
      }

      window.history.replaceState({}, '', decodeURIComponent(`${window.location.pathname}?${params}`));

      this.selectedLanguageUpdated.emit(eventData);
    };
  }

  getSelectedLanguageText(translatedLanguage: any): string {
    const { messages } = this;
    const translatedLanguageNames = messages?.translatedLanguageNames;
    const enLanguageNames = messages?.languages;
    const translatedLanguageName = translatedLanguageNames?.[translatedLanguage];
    const enLanguageName = enLanguageNames?.[translatedLanguage];
    return `${translatedLanguageName} - ${enLanguageName}`;
  }

  /**
   * Refreshes the component by fetching the latest translation data from the portal item resource.
   */
  @Method()
  async refresh(): Promise<void> {
    try {
      const resource = (await getPortalItemResource(this.portalItem)) as __esri.PortalItemResource;
      const t9nData = await fetchResourceData(this.request, resource);
      this.t9nData = t9nData;
      const refreshedData = { locale: this.selectedLanguage as string, data: t9nData[this.selectedLanguage as string] };
      this.selectedLanguageUpdated.emit(refreshedData);
    } catch {}
  }
}
