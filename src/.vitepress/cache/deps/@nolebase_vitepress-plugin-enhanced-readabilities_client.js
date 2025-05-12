import "./chunk-JVWSFFO4.js";

// node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/index.mjs
import LayoutSwitch from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitch.vue";
import LayoutSwitchContentLayoutMaxWidthSlider from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitchContentLayoutMaxWidthSlider.vue";
import LayoutSwitchPageLayoutMaxWidthSlider from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/LayoutSwitchPageLayoutMaxWidthSlider.vue";
import NolebaseEnhancedReadabilitiesMenu from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/Menu.vue";
import ScreenLayoutSwitch from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenLayoutSwitch.vue";
import NolebaseEnhancedReadabilitiesScreenMenu from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenMenu.vue";
import ScreenSpotlight from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/ScreenSpotlight.vue";
import Spotlight from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/Spotlight.vue";
import SpotlightStyles from "D:/Project/nodejs/NiloticaDocs/node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/components/SpotlightStyles.vue";

// node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/constants.mjs
var InjectionKey = Symbol("vitepress-nolebase-enhanced-readabilities");
var LayoutSwitchModeStorageKey = "vitepress-nolebase-enhanced-readabilities-layout-switch-mode";
var SpotlightToggledStorageKey = "vitepress-nolebase-enhanced-readabilities-spotlight-mode";
var LayoutMode = ((LayoutMode2) => {
  LayoutMode2[LayoutMode2["FullWidth"] = 1] = "FullWidth";
  LayoutMode2[LayoutMode2["Original"] = 3] = "Original";
  LayoutMode2[LayoutMode2["SidebarWidthAdjustableOnly"] = 4] = "SidebarWidthAdjustableOnly";
  LayoutMode2[LayoutMode2["BothWidthAdjustable"] = 5] = "BothWidthAdjustable";
  return LayoutMode2;
})(LayoutMode || {});
var SpotlightStyle = ((SpotlightStyle2) => {
  SpotlightStyle2[SpotlightStyle2["Under"] = 1] = "Under";
  SpotlightStyle2[SpotlightStyle2["Aside"] = 2] = "Aside";
  return SpotlightStyle2;
})(SpotlightStyle || {});

// node_modules/@nolebase/vitepress-plugin-enhanced-readabilities/dist/client/index.mjs
var components = {
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesScreenMenu,
  NolebaseEnhancedReadabilitiesLayoutSwitch: LayoutSwitch,
  NolebaseEnhancedReadabilitiesScreenLayoutSwitch: ScreenLayoutSwitch,
  NolebaseEnhancedReadabilitiesSpotlight: Spotlight,
  NolebaseEnhancedReadabilitiesSpotlightStyles: SpotlightStyles,
  NolebaseEnhancedReadabilitiesScreenSpotlight: ScreenSpotlight
};
var NolebaseEnhancedReadabilitiesPlugin = {
  install(app, options) {
    if (typeof options !== "undefined" && typeof options === "object")
      app.provide(InjectionKey, options);
    for (const key of Object.keys(components))
      app.component(key, components[key]);
  }
};
export {
  InjectionKey,
  LayoutMode,
  LayoutSwitch,
  LayoutSwitchContentLayoutMaxWidthSlider,
  LayoutSwitchModeStorageKey,
  LayoutSwitchPageLayoutMaxWidthSlider,
  NolebaseEnhancedReadabilitiesMenu,
  NolebaseEnhancedReadabilitiesPlugin,
  NolebaseEnhancedReadabilitiesScreenMenu,
  ScreenLayoutSwitch,
  ScreenSpotlight,
  Spotlight,
  SpotlightStyle,
  SpotlightStyles,
  SpotlightToggledStorageKey
};
//# sourceMappingURL=@nolebase_vitepress-plugin-enhanced-readabilities_client.js.map
