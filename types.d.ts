import { EncodedClassName, } from './private/helpers/decodeClassName';

declare module 'react' {
  // namespace React {
  //   interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
  //     className?: ClassName | ClassName[];
  //   }
  // }

  interface P {
    className?: EncodedClassName | EncodedClassName[];
  }

  namespace JSX {
    interface IntrinsicElements {
      'var': Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      a: Omit<DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, keyof P> & P;
      abbr: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      address: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      area: Omit<DetailedHTMLProps<AreaHTMLAttributes<HTMLAreaElement>, HTMLAreaElement>, keyof P> & P;
      article: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      aside: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      audio: Omit<DetailedHTMLProps<AudioHTMLAttributes<HTMLAudioElement>, HTMLAudioElement>, keyof P> & P;
      b: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      base: Omit<DetailedHTMLProps<BaseHTMLAttributes<HTMLBaseElement>, HTMLBaseElement>, keyof P> & P;
      bdi: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      bdo: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      big: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      blockquote: Omit<DetailedHTMLProps<BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      body: Omit<DetailedHTMLProps<HTMLAttributes<HTMLBodyElement>, HTMLBodyElement>, keyof P> & P;
      br: Omit<DetailedHTMLProps<HTMLAttributes<HTMLBRElement>, HTMLBRElement>, keyof P> & P;
      button: Omit<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, keyof P> & P;
      canvas: Omit<DetailedHTMLProps<CanvasHTMLAttributes<HTMLCanvasElement>, HTMLCanvasElement>, keyof P> & P;
      caption: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      cite: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      code: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      col: Omit<DetailedHTMLProps<ColHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, keyof P> & P;
      colgroup: Omit<DetailedHTMLProps<ColgroupHTMLAttributes<HTMLTableColElement>, HTMLTableColElement>, keyof P> & P;
      data: Omit<DetailedHTMLProps<DataHTMLAttributes<HTMLDataElement>, HTMLDataElement>, keyof P> & P;
      datalist: Omit<DetailedHTMLProps<HTMLAttributes<HTMLDataListElement>, HTMLDataListElement>, keyof P> & P;
      dd: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      del: Omit<DetailedHTMLProps<DelHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      details: Omit<DetailedHTMLProps<DetailsHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      dfn: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      dialog: Omit<DetailedHTMLProps<DialogHTMLAttributes<HTMLDialogElement>, HTMLDialogElement>, keyof P> & P;
      div: Omit<DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>, keyof P> & P;
      dl: Omit<DetailedHTMLProps<HTMLAttributes<HTMLDListElement>, HTMLDListElement>, keyof P> & P;
      dt: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      em: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      embed: Omit<DetailedHTMLProps<EmbedHTMLAttributes<HTMLEmbedElement>, HTMLEmbedElement>, keyof P> & P;
      fieldset: Omit<DetailedHTMLProps<FieldsetHTMLAttributes<HTMLFieldSetElement>, HTMLFieldSetElement>, keyof P> & P;
      figcaption: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      figure: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      footer: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      form: Omit<DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, keyof P> & P;
      h1: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof P> & P;
      h2: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof P> & P;
      h3: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof P> & P;
      h4: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof P> & P;
      h5: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof P> & P;
      h6: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, keyof P> & P;
      head: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement>, keyof P> & P;
      header: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      hgroup: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      hr: Omit<DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>, keyof P> & P;
      html: Omit<DetailedHTMLProps<HtmlHTMLAttributes<HTMLHtmlElement>, HTMLHtmlElement>, keyof P> & P;
      i: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      iframe: Omit<DetailedHTMLProps<IframeHTMLAttributes<HTMLIFrameElement>, HTMLIFrameElement>, keyof P> & P;
      img: Omit<DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, keyof P> & P;
      input: Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, keyof P> & P;
      ins: Omit<DetailedHTMLProps<InsHTMLAttributes<HTMLModElement>, HTMLModElement>, keyof P> & P;
      kbd: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      keygen: Omit<DetailedHTMLProps<KeygenHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      label: Omit<DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, keyof P> & P;
      legend: Omit<DetailedHTMLProps<HTMLAttributes<HTMLLegendElement>, HTMLLegendElement>, keyof P> & P;
      li: Omit<DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, keyof P> & P;
      link: Omit<DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement>, keyof P> & P;
      main: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      map: Omit<DetailedHTMLProps<MapHTMLAttributes<HTMLMapElement>, HTMLMapElement>, keyof P> & P;
      mark: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      menu: Omit<DetailedHTMLProps<MenuHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      menuitem: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      meta: Omit<DetailedHTMLProps<MetaHTMLAttributes<HTMLMetaElement>, HTMLMetaElement>, keyof P> & P;
      meter: Omit<DetailedHTMLProps<MeterHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      nav: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      noindex: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      noscript: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      object: Omit<DetailedHTMLProps<ObjectHTMLAttributes<HTMLObjectElement>, HTMLObjectElement>, keyof P> & P;
      ol: Omit<DetailedHTMLProps<OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, keyof P> & P;
      optgroup: Omit<DetailedHTMLProps<OptgroupHTMLAttributes<HTMLOptGroupElement>, HTMLOptGroupElement>, keyof P> & P;
      option: Omit<DetailedHTMLProps<OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, keyof P> & P;
      output: Omit<DetailedHTMLProps<OutputHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      p: Omit<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, keyof P> & P;
      param: Omit<DetailedHTMLProps<ParamHTMLAttributes<HTMLParamElement>, HTMLParamElement>, keyof P> & P;
      picture: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      pre: Omit<DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>, keyof P> & P;
      progress: Omit<DetailedHTMLProps<ProgressHTMLAttributes<HTMLProgressElement>, HTMLProgressElement>, keyof P> & P;
      q: Omit<DetailedHTMLProps<QuoteHTMLAttributes<HTMLQuoteElement>, HTMLQuoteElement>, keyof P> & P;
      rp: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      rt: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      ruby: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      s: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      samp: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      script: Omit<DetailedHTMLProps<ScriptHTMLAttributes<HTMLScriptElement>, HTMLScriptElement>, keyof P> & P;
      section: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      select: Omit<DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, keyof P> & P;
      slot: Omit<DetailedHTMLProps<SlotHTMLAttributes<HTMLSlotElement>, HTMLSlotElement>, keyof P> & P;
      small: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      source: Omit<DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>, keyof P> & P;
      span: Omit<DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, keyof P> & P;
      strong: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      style: Omit<DetailedHTMLProps<StyleHTMLAttributes<HTMLStyleElement>, HTMLStyleElement>, keyof P> & P;
      sub: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      summary: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      sup: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      table: Omit<DetailedHTMLProps<TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, keyof P> & P;
      tbody: Omit<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, keyof P> & P;
      td: Omit<DetailedHTMLProps<TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, keyof P> & P;
      template: Omit<DetailedHTMLProps<HTMLAttributes<HTMLTemplateElement>, HTMLTemplateElement>, keyof P> & P;
      textarea: Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, keyof P> & P;
      tfoot: Omit<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, keyof P> & P;
      th: Omit<DetailedHTMLProps<ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, keyof P> & P;
      thead: Omit<DetailedHTMLProps<HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, keyof P> & P;
      time: Omit<DetailedHTMLProps<TimeHTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      title: Omit<DetailedHTMLProps<HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, keyof P> & P;
      tr: Omit<DetailedHTMLProps<HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, keyof P> & P;
      track: Omit<DetailedHTMLProps<TrackHTMLAttributes<HTMLTrackElement>, HTMLTrackElement>, keyof P> & P;
      u: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      ul: Omit<DetailedHTMLProps<HTMLAttributes<HTMLUListElement>, HTMLUListElement>, keyof P> & P;
      video: Omit<DetailedHTMLProps<VideoHTMLAttributes<HTMLVideoElement>, HTMLVideoElement>, keyof P> & P;
      wbr: Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, keyof P> & P;
      webview: Omit<DetailedHTMLProps<WebViewHTMLAttributes<HTMLWebViewElement>, HTMLWebViewElement>, keyof P> & P;
    }
  }
}
