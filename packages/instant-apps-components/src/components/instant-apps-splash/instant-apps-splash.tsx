import { Component, Element, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';
import Sanitizer from '@esri/arcgis-html-sanitizer';
import { createSanitizerInstance } from 'templates-common-library/functionality/securityUtils';
import { getLocalStorageItem, removeItemFromLocalStorage, setLocalStorageItem } from './support/storageUtils';
import { getMessages } from '../../utils/locale';
import Splash_T9n from '../../assets/t9n/instant-apps-splash/resources.json';

const CSS = {
  back: 'instant-apps-splash__back-content',
  content: 'instant-apps-splash__content',
};

@Component({
  tag: 'instant-apps-splash',
  styleUrl: 'instant-apps-splash.scss',
  shadow: true,
})
export class InstantAppsSplash {
  private _sanitizer = createSanitizerInstance(Sanitizer);

  @Element()
  el: HTMLInstantAppsSplashElement;

  /**
   * Local storage key used to determine whether or not user has opted into "Don't show this again" checkbox.
   */
  @Prop()
  localStorageKey!: string;

  /**
   * Title of splash screen.
   */
  @Prop()
  titleText: string = '';

  /**
   * Content of splash screen.
   */
  @Prop({ mutable: true })
  content: string = '';

  /**
   * Primary button text.
   */
  @Prop()
  primaryButtonText: string = '';

  /**
   * Controls the 'open' state of the modal element.
   */
  @Prop({
    mutable: true,
  })
  open = true;

  /**
   * When `true`, disables the component's close button.
   */
  @Prop()
  closeButtonDisabled = false;

  /**
   * When `true`, disables the closing of the component when clicked outside.
   */
  @Prop()
  outsideCloseDisabled: boolean = false;

  /**
   * When `true`, enables a secondary button at the component's footer.
   */
  @Prop()
  secondaryButton = false;

  /**
   * Secondary button text.
   */
  @Prop()
  secondaryButtonText: string;

  /**
   * Secondary button icon.
   */
  @Prop()
  secondaryButtonIcon: string;

  /**
   * Callback function when secondary button is clicked.
   */
  @Prop()
  secondaryButtonCallback: () => Promise<void>;

  @State()
  messages: typeof Splash_T9n;

  /**
   * Emits when the splash modal is closed.
   */
  @Event() splashClose: EventEmitter<void>;

  @Watch('content')
  sanitizeContent(): void {
    this.content = this._sanitizer.sanitize(this.content);
  }

  componentWillLoad(): void {
    let open: boolean;
    const { localStorageKey } = this;
    if (localStorageKey) {
      open = this.open && !getLocalStorageItem(this.localStorageKey);
    } else {
      open = this.open;
    }
    this.el.open = open;
    if (this.content && this._sanitizer) this.sanitizeContent();
  }

  componentDidLoad(): void {
    getMessages(this);
  }

  render(): HTMLCalciteDialogElement {
    return (
      <calcite-dialog
        open={this.open}
        modal={true}
        heading={this.titleText}
        onCalciteDialogClose={this.close.bind(this)}
        closeDisabled={this.closeButtonDisabled}
        outsideCloseDisabled={this.outsideCloseDisabled}
      >
        <div innerHTML={this.content} />
        <slot name="custom-action"></slot>
        {this.localStorageKey ? this.renderDontShowThisAgainCheckbox() : null}
        {this.secondaryButton ? this.renderSecondaryButton() : null}
        {this.renderPrimaryButton()}
      </calcite-dialog>
    );
  }

  renderDontShowThisAgainCheckbox(): HTMLDivElement {
    const { localStorageKey, messages } = this;
    const checked = getLocalStorageItem(localStorageKey) ? true : null;
    return (
      <div class={CSS.back} slot="footer-start">
        <calcite-label layout="inline">
          <calcite-checkbox onCalciteCheckboxChange={this.handleDontShowThisAgain.bind(this)} checked={checked ?? undefined} />
          {messages?.dontShowThisAgain}
        </calcite-label>
      </div>
    );
  }

  renderPrimaryButton(): HTMLElement {
    const { primaryButtonText } = this;
    return (
      <calcite-button onClick={this.close.bind(this)} slot="footer-end">
        {primaryButtonText ? primaryButtonText : 'Enter'}
      </calcite-button>
    );
  }

  renderSecondaryButton() {
    return (
      <calcite-button onClick={this.secondaryButtonCallback?.bind(this)} slot="footer-end" icon-start={this.secondaryButtonIcon} appearance="outline">
        {this.secondaryButtonText}
      </calcite-button>
    );
  }

  close(): void {
    this.open = false;
    this.splashClose.emit();
  }

  protected handleDontShowThisAgain(event: CustomEvent): void {
    const { localStorageKey } = this;
    if (!localStorageKey) return;
    const checkboxNode = event.target as HTMLCalciteCheckboxElement;
    const { checked } = checkboxNode;
    if (checked) {
      setLocalStorageItem(localStorageKey);
    } else {
      removeItemFromLocalStorage(localStorageKey);
    }
  }
}
