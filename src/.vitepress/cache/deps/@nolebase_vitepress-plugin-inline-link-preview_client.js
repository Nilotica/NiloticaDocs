import "./chunk-JVWSFFO4.js";

// node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/index.mjs
import InlineLinkPreview from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/components/InlineLinkPreview.vue";
import PopupIframe from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/components/PopupIframe.vue";

// node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/constants.mjs
var InjectionKey = Symbol("VPNolebaseInlineLinkPreview");

// node_modules/@nolebase/vitepress-plugin-inline-link-preview/dist/client/index.mjs
var components = {
  VPNolebaseInlineLinkPreview: InlineLinkPreview
};
var NolebaseInlineLinkPreviewPlugin = {
  install(app, options) {
    if (typeof options !== "undefined" && typeof options === "object")
      app.provide(InjectionKey, options);
    for (const key of Object.keys(components))
      app.component(key, components[key]);
  }
};
export {
  InjectionKey,
  InlineLinkPreview as NolebaseInlineLinkPreview,
  NolebaseInlineLinkPreviewPlugin,
  PopupIframe
};
//# sourceMappingURL=@nolebase_vitepress-plugin-inline-link-preview_client.js.map
