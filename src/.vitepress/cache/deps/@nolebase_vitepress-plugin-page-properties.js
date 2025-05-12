import "./chunk-JVWSFFO4.js";

// node_modules/@nolebase/vitepress-plugin-page-properties/dist/client/index.mjs
import NolebasePageProperties from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-page-properties/dist/client/components/PageProperties.vue";
import NolebasePagePropertiesEditor from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-page-properties/dist/client/components/PagePropertiesEditor.vue";

// node_modules/@nolebase/vitepress-plugin-page-properties/dist/client/constants.mjs
var InjectionKey = Symbol("vitepress-nolebase-page-properties");

// node_modules/@nolebase/vitepress-plugin-page-properties/dist/client/index.mjs
var components = {
  NolebasePageProperties,
  NolebasePagePropertiesEditor
};
function NolebasePagePropertiesPlugin() {
  return {
    install(app, options) {
      if (typeof options !== "undefined" && typeof options === "object")
        app.provide(InjectionKey, options);
      for (const key of Object.keys(components))
        app.component(key, components[key]);
    }
  };
}
export {
  InjectionKey,
  NolebasePageProperties,
  NolebasePagePropertiesEditor,
  NolebasePagePropertiesPlugin
};
//# sourceMappingURL=@nolebase_vitepress-plugin-page-properties.js.map
