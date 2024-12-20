import { Head, Link, createInertiaApp } from "@inertiajs/vue3";
import { useSSRContext, mergeProps, resolveComponent, withCtx, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, renderSlot, withDirectives, vModelSelect, createCommentVNode, createSSRApp, h } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderSlot, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderTeleport, ssrRenderStyle, ssrRenderClass, ssrRenderList, ssrLooseEqual } from "vue/server-renderer";
import { v4 } from "uuid";
import { createPopper } from "@popperjs/core";
import pickBy from "lodash/pickBy.js";
import throttle from "lodash/throttle.js";
import mapValues from "lodash/mapValues.js";
import { renderToString } from "@vue/server-renderer";
import createServer from "@inertiajs/vue3/server";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$o = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    viewBox: "0 0 1185 266",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><path d="M77.463 265c-19.497 0-35.318-15.405-35.318-34.39v-22.054C17.987 202.676 0 181.326 0 155.948V55.206C0 25.291 24.946 1 55.668 1h154.664C241.054 1 266 25.29 266 55.206v100.806c0 29.916-24.946 54.206-55.668 54.206H145.67c-2.823 0-5.383 1.407-6.827 3.58-10.7 17.067-24.158 31.897-39.98 43.915-6.236 4.794-13.654 7.287-21.4 7.287zM55.701 27.336c-15.771 0-28.65 12.465-28.65 27.87v100.806c0 15.342 12.813 27.87 28.65 27.87 7.49 0 13.536 5.881 13.536 13.168v33.624c0 4.922 4.272 7.99 8.214 7.99 1.709 0 3.286-.575 4.732-1.662 13.273-10.1 24.576-22.565 33.578-36.947 6.309-10.036 17.743-16.237 29.965-16.237h64.727c15.77 0 28.65-12.464 28.65-27.87V55.206c0-15.341-12.814-27.87-28.65-27.87H55.7z"></path><path d="M395.752 2.4c37.152 0 65.088 27.936 65.088 64.8 0 36.576-27.936 64.8-65.088 64.8h-46.368v72H322.6V2.4h73.152zm0 104.544c22.176 0 38.592-16.992 38.592-39.744 0-23.04-16.416-39.744-38.592-39.744h-46.368v79.488h46.368zM502.6 33.792c-9.504 0-16.992-7.488-16.992-16.704 0-9.216 7.488-16.992 16.992-16.992 9.216 0 16.704 7.776 16.704 16.992 0 9.216-7.488 16.704-16.704 16.704zM489.928 204V60h25.056v144h-25.056zM625 56.256c33.696 0 55.872 22.464 55.872 59.328V204h-25.056v-86.976c0-23.616-13.536-36.864-35.712-36.864-23.04 0-41.76 13.536-41.76 47.52V204h-25.056V60h25.056v20.736C589 63.744 604.84 56.256 625 56.256zM835.24 60h24.768v137.952c0 44.928-36 67.392-73.44 67.392-32.256 0-56.448-12.384-68.256-35.136l21.888-12.384c6.624 13.536 18.72 24.192 46.944 24.192 29.952 0 48.096-16.992 48.096-44.064v-20.448c-11.52 17.568-29.952 28.8-54.144 28.8-40.896 0-73.44-33.12-73.44-75.168 0-41.76 32.544-74.88 73.44-74.88 24.192 0 42.624 10.944 54.144 28.512V60zm-51.264 122.4c29.088 0 51.264-22.176 51.264-51.264 0-28.8-22.176-50.976-51.264-50.976-29.088 0-51.264 22.176-51.264 50.976 0 29.088 22.176 51.264 51.264 51.264zM946.8 205.08c-28.21 0-45.63-20.8-41.08-48.88 4.42-27.17 26.91-46.28 53.56-46.28 19.37 0 31.59 9.36 38.35 22.36l-23.79 12.61c-3.25-5.85-9.1-9.49-16.9-9.49-12.35 0-23.14 9.23-25.35 22.1-2.08 11.83 4.29 22.1 17.16 22.1 8.06 0 13.91-4.03 18.59-10.14l21.58 13.65c-9.36 13.78-24.44 21.97-42.12 21.97zm126.36-59.93c-1.95 11.18-8.58 19.5-18.2 24.44l11.7 33.28h-26l-9.36-28.6h-8.32l-5.07 28.6h-26l16.12-91h36.4c18.33 0 32.24 13.65 28.73 33.28zm-43.42-9.36l-2.99 16.9h10.66c5.07.13 8.84-2.99 9.75-8.32.91-5.33-1.82-8.58-7.02-8.58h-10.4zM1184.05 112l-15.99 91h-26l7.67-43.81-25.48 33.54h-2.34l-14.82-35.23-7.93 45.5h-26l15.99-91h26l13.65 37.31 27.95-37.31h27.3z"></path></svg>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Logo.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const Logo = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o]]);
const _sfc_main$n = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `text-input-${v4()}`;
      }
    },
    type: {
      type: String,
      default: "text"
    },
    error: String,
    label: String,
    modelValue: String
  },
  emits: ["update:modelValue"],
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    },
    setSelectionRange(start, end) {
      this.$refs.input.setSelectionRange(start, end);
    }
  }
};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<input${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-input", { error: $props.error }],
    type: $props.type,
    value: $props.modelValue
  }))}>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TextInput.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const TextInput = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n]]);
const _sfc_main$m = {
  props: {
    loading: Boolean
  }
};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    disabled: $props.loading,
    class: "flex items-center"
  }, _attrs))}>`);
  if ($props.loading) {
    _push(`<div class="btn-spinner mr-2"></div>`);
  } else {
    _push(`<!---->`);
  }
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/LoadingButton.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const LoadingButton = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m]]);
const _sfc_main$l = {
  components: {
    Head,
    LoadingButton,
    Logo,
    TextInput
  },
  data() {
    return {
      form: this.$inertia.form({
        email: "johndoe@example.com",
        password: "secret",
        remember: false
      })
    };
  },
  methods: {
    login() {
      this.form.post("/login");
    }
  }
};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_logo = resolveComponent("logo");
  const _component_text_input = resolveComponent("text-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Head, { title: "Login" }, null, _parent));
  _push(`<div class="flex items-center justify-center p-6 min-h-screen bg-indigo-800"><div class="w-full max-w-md">`);
  _push(ssrRenderComponent(_component_logo, {
    class: "block mx-auto w-full max-w-xs fill-white",
    height: "50"
  }, null, _parent));
  _push(`<form class="mt-8 bg-white rounded-lg shadow-xl overflow-hidden"><div class="px-10 py-12"><h1 class="text-center text-3xl font-bold">Welcome Back!</h1><div class="mt-6 mx-auto w-24 border-b-2"></div>`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "mt-10",
    label: "Email",
    type: "email",
    autofocus: "",
    autocapitalize: "off"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "mt-6",
    label: "Password",
    type: "password"
  }, null, _parent));
  _push(`<label class="flex items-center mt-6 select-none" for="remember"><input id="remember"${ssrIncludeBooleanAttr(Array.isArray($data.form.remember) ? ssrLooseContain($data.form.remember, null) : $data.form.remember) ? " checked" : ""} class="mr-1" type="checkbox"><span class="text-sm">Remember Me</span></label></div><div class="flex px-10 py-4 bg-gray-100 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div><!--]-->`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l]]);
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Login
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {
  props: {
    name: String
  }
};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  if ($props.name === "cheveron-down") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>`);
  } else if ($props.name === "cheveron-right") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><polygon points="12.95 10.707 13.657 10 8 4.343 6.586 5.757 10.828 10 6.586 14.243 8 15.657 12.95 10.707"></polygon></svg>`);
  } else if ($props.name === "dashboard") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-5.6-4.29a9.95 9.95 0 0 1 11.2 0 8 8 0 1 0-11.2 0zm6.12-7.64l3.02-3.02 1.41 1.41-3.02 3.02a2 2 0 1 1-1.41-1.41z"></path></svg>`);
  } else if ($props.name === "office") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      width: "100",
      height: "100",
      viewBox: "0 0 100 100"
    }, _attrs))}><path fill-rule="evenodd" d="M7 0h86v100H57.108V88.418H42.892V100H7V0zm9 64h11v15H16V64zm57 0h11v15H73V64zm-19 0h11v15H54V64zm-19 0h11v15H35V64zM16 37h11v15H16V37zm57 0h11v15H73V37zm-19 0h11v15H54V37zm-19 0h11v15H35V37zM16 11h11v15H16V11zm57 0h11v15H73V11zm-19 0h11v15H54V11zm-19 0h11v15H35V11z"></path></svg>`);
  } else if ($props.name === "printer") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M4 16H0V6h20v10h-4v4H4v-4zm2-4v6h8v-6H6zM4 0h12v5H4V0zM2 8v2h2V8H2zm4 0v2h2V8H6z"></path></svg>`);
  } else if ($props.name === "trash") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"></path></svg>`);
  } else if ($props.name === "users") {
    _push(`<svg${ssrRenderAttrs(mergeProps({
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20"
    }, _attrs))}><path d="M7 8a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0 1c2.15 0 4.2.4 6.1 1.09L12 16h-1.25L10 20H4l-.75-4H2L.9 10.09A17.93 17.93 0 0 1 7 9zm8.31.17c1.32.18 2.59.48 3.8.92L18 16h-1.25L16 20h-3.96l.37-2h1.25l1.65-8.83zM13 0a4 4 0 1 1-1.33 7.76 5.96 5.96 0 0 0 0-7.52C12.1.1 12.53 0 13 0z"></path></svg>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Icon.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k]]);
const _sfc_main$j = {
  props: {
    placement: {
      type: String,
      default: "bottom-end"
    },
    autoClose: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: false
    };
  },
  watch: {
    show(show) {
      if (show) {
        this.$nextTick(() => {
          this.popper = createPopper(this.$el, this.$refs.dropdown, {
            placement: this.placement,
            modifiers: [
              {
                name: "preventOverflow",
                options: {
                  altBoundary: true
                }
              }
            ]
          });
        });
      } else if (this.popper) {
        setTimeout(() => this.popper.destroy(), 100);
      }
    }
  },
  mounted() {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.show = false;
      }
    });
  }
};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({ type: "button" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  if ($data.show) {
    ssrRenderTeleport(_push, (_push2) => {
      _push2(`<div><div style="${ssrRenderStyle({ "position": "fixed", "top": "0", "right": "0", "left": "0", "bottom": "0", "z-index": "99998", "background": "black", "opacity": "0.2" })}"></div><div style="${ssrRenderStyle({ "position": "absolute", "z-index": "99999" })}">`);
      ssrRenderSlot(_ctx.$slots, "dropdown", {}, null, _push2, _parent);
      _push2(`</div></div>`);
    }, "#dropdown", false, _parent);
  } else {
    _push(`<!---->`);
  }
  _push(`</button>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Dropdown.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j]]);
const _sfc_main$i = {
  components: {
    Icon,
    Link
  },
  methods: {
    isUrl(...urls) {
      let currentUrl = this.$page.url.substr(1);
      if (urls[0] === "") {
        return currentUrl === "";
      }
      return urls.filter((url) => currentUrl.startsWith(url)).length;
    }
  }
};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "group flex items-center py-3",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "dashboard",
          class: ["mr-2 w-4 h-4", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Dashboard</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "dashboard",
            class: ["mr-2 w-4 h-4", $options.isUrl("") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Dashboard", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "group flex items-center py-3",
    href: "/organizations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "office",
          class: ["mr-2 w-4 h-4", $options.isUrl("organizations") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("organizations") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Organizations</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "office",
            class: ["mr-2 w-4 h-4", $options.isUrl("organizations") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("organizations") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Organizations", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "group flex items-center py-3",
    href: "/contacts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "users",
          class: ["mr-2 w-4 h-4", $options.isUrl("contacts") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("contacts") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Contacts</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "users",
            class: ["mr-2 w-4 h-4", $options.isUrl("contacts") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("contacts") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Contacts", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="mb-4">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "group flex items-center py-3",
    href: "/reports"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_icon, {
          name: "printer",
          class: ["mr-2 w-4 h-4", $options.isUrl("reports") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
        }, null, _parent2, _scopeId));
        _push2(`<div class="${ssrRenderClass($options.isUrl("reports") ? "text-white" : "text-indigo-300 group-hover:text-white")}"${_scopeId}>Reports</div>`);
      } else {
        return [
          createVNode(_component_icon, {
            name: "printer",
            class: ["mr-2 w-4 h-4", $options.isUrl("reports") ? "fill-white" : "fill-indigo-400 group-hover:fill-white"]
          }, null, 8, ["class"]),
          createVNode("div", {
            class: $options.isUrl("reports") ? "text-white" : "text-indigo-300 group-hover:text-white"
          }, "Reports", 2)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/MainMenu.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const MainMenu = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i]]);
const _sfc_main$h = {
  data() {
    return {
      show: true
    };
  },
  watch: {
    "$page.props.flash": {
      handler() {
        this.show = true;
      },
      deep: true
    }
  }
};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if (_ctx.$page.props.flash.success && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-green-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon></svg><div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.success)}</div></div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-green-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  if ((_ctx.$page.props.flash.error || Object.keys(_ctx.$page.props.errors).length > 0) && $data.show) {
    _push(`<div class="flex items-center justify-between mb-8 max-w-3xl bg-red-500 rounded"><div class="flex items-center"><svg class="shrink-0 ml-4 mr-2 w-4 h-4 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm1.41-1.41A8 8 0 1 0 15.66 4.34 8 8 0 0 0 4.34 15.66zm9.9-8.49L11.41 10l2.83 2.83-1.41 1.41L10 11.41l-2.83 2.83-1.41-1.41L8.59 10 5.76 7.17l1.41-1.41L10 8.59l2.83-2.83 1.41 1.41z"></path></svg>`);
    if (_ctx.$page.props.flash.error) {
      _push(`<div class="py-4 text-white text-sm font-medium">${ssrInterpolate(_ctx.$page.props.flash.error)}</div>`);
    } else {
      _push(`<div class="py-4 text-white text-sm font-medium">`);
      if (Object.keys(_ctx.$page.props.errors).length === 1) {
        _push(`<span>There is one form error.</span>`);
      } else {
        _push(`<span>There are ${ssrInterpolate(Object.keys(_ctx.$page.props.errors).length)} form errors.</span>`);
      }
      _push(`</div>`);
    }
    _push(`</div><button type="button" class="group mr-2 p-2"><svg class="block w-2 h-2 fill-red-800 group-hover:fill-white" xmlns="http://www.w3.org/2000/svg" width="235.908" height="235.908" viewBox="278.046 126.846 235.908 235.908"><path d="M506.784 134.017c-9.56-9.56-25.06-9.56-34.62 0L396 210.18l-76.164-76.164c-9.56-9.56-25.06-9.56-34.62 0-9.56 9.56-9.56 25.06 0 34.62L361.38 244.8l-76.164 76.165c-9.56 9.56-9.56 25.06 0 34.62 9.56 9.56 25.06 9.56 34.62 0L396 279.42l76.164 76.165c9.56 9.56 25.06 9.56 34.62 0 9.56-9.56 9.56-25.06 0-34.62L430.62 244.8l76.164-76.163c9.56-9.56 9.56-25.06 0-34.62z"></path></svg></button></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FlashMessages.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const FlashMessages = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h]]);
const _sfc_main$g = {
  components: {
    Dropdown,
    FlashMessages,
    Icon,
    Link,
    Logo,
    MainMenu
  },
  props: {
    auth: Object
  }
};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  const _component_logo = resolveComponent("logo");
  const _component_dropdown = resolveComponent("dropdown");
  const _component_main_menu = resolveComponent("main-menu");
  const _component_icon = resolveComponent("icon");
  const _component_flash_messages = resolveComponent("flash-messages");
  _push(`<div${ssrRenderAttrs(_attrs)}><div id="dropdown"></div><div class="md:flex md:flex-col"><div class="md:flex md:flex-col md:h-screen"><div class="md:flex md:shrink-0"><div class="flex items-center justify-between px-6 py-4 bg-indigo-900 md:shrink-0 md:justify-center md:w-56">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "mt-1",
    href: "/"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_logo, {
          class: "fill-white",
          width: "120",
          height: "28"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_logo, {
            class: "fill-white",
            width: "120",
            height: "28"
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_dropdown, {
    class: "md:hidden",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<svg class="w-6 h-6 fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"${_scopeId}><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"${_scopeId}></path></svg>`);
      } else {
        return [
          (openBlock(), createBlock("svg", {
            class: "w-6 h-6 fill-white",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20"
          }, [
            createVNode("path", { d: "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" })
          ]))
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-8 py-4 bg-indigo-800 rounded shadow-lg"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_main_menu, null, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 px-8 py-4 bg-indigo-800 rounded shadow-lg" }, [
            createVNode(_component_main_menu)
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="md:text-md flex items-center justify-between p-4 w-full text-sm bg-white border-b md:px-12 md:py-0"><div class="mr-4 mt-1">${ssrInterpolate($props.auth.user.account.name)}</div>`);
  _push(ssrRenderComponent(_component_dropdown, {
    class: "mt-1",
    placement: "bottom-end"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="group flex items-center cursor-pointer select-none"${_scopeId}><div class="mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap"${_scopeId}><span${_scopeId}>${ssrInterpolate($props.auth.user.first_name)}</span><span class="hidden md:inline"${_scopeId}> ${ssrInterpolate($props.auth.user.last_name)}</span></div>`);
        _push2(ssrRenderComponent(_component_icon, {
          class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
          name: "cheveron-down"
        }, null, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "group flex items-center cursor-pointer select-none" }, [
            createVNode("div", { class: "mr-1 text-gray-700 group-hover:text-indigo-600 focus:text-indigo-600 whitespace-nowrap" }, [
              createVNode("span", null, toDisplayString($props.auth.user.first_name), 1),
              createVNode("span", { class: "hidden md:inline" }, " " + toDisplayString($props.auth.user.last_name), 1)
            ]),
            createVNode(_component_icon, {
              class: "w-5 h-5 fill-gray-700 group-hover:fill-indigo-600 focus:fill-indigo-600",
              name: "cheveron-down"
            })
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 py-2 text-sm bg-white rounded shadow-xl"${_scopeId}>`);
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: `/users/${$props.auth.user.id}/edit`
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`My Profile`);
            } else {
              return [
                createTextVNode("My Profile")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
          href: "/users"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Manage Users`);
            } else {
              return [
                createTextVNode("Manage Users")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_Link, {
          class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
          href: "/logout",
          method: "delete",
          as: "button"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Logout`);
            } else {
              return [
                createTextVNode("Logout")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", { class: "mt-2 py-2 text-sm bg-white rounded shadow-xl" }, [
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: `/users/${$props.auth.user.id}/edit`
            }, {
              default: withCtx(() => [
                createTextVNode("My Profile")
              ]),
              _: 1
            }, 8, ["href"]),
            createVNode(_component_Link, {
              class: "block px-6 py-2 hover:text-white hover:bg-indigo-500",
              href: "/users"
            }, {
              default: withCtx(() => [
                createTextVNode("Manage Users")
              ]),
              _: 1
            }),
            createVNode(_component_Link, {
              class: "block px-6 py-2 w-full text-left hover:text-white hover:bg-indigo-500",
              href: "/logout",
              method: "delete",
              as: "button"
            }, {
              default: withCtx(() => [
                createTextVNode("Logout")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="md:flex md:grow md:overflow-hidden">`);
  _push(ssrRenderComponent(_component_main_menu, { class: "hidden shrink-0 p-12 w-56 bg-indigo-800 overflow-y-auto md:block" }, null, _parent));
  _push(`<div class="px-4 py-8 md:flex-1 md:p-12 md:overflow-y-auto" scroll-region>`);
  _push(ssrRenderComponent(_component_flash_messages, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div></div></div></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Layout.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g]]);
const _sfc_main$f = {
  inheritAttrs: false,
  props: {
    id: {
      type: String,
      default() {
        return `select-input-${v4()}`;
      }
    },
    error: String,
    label: String,
    modelValue: [String, Number, Boolean]
  },
  emits: ["update:modelValue"],
  data() {
    return {
      selected: this.modelValue
    };
  },
  watch: {
    selected(selected) {
      this.$emit("update:modelValue", selected);
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    },
    select() {
      this.$refs.input.select();
    }
  }
};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: _ctx.$attrs.class
  }, _attrs))}>`);
  if ($props.label) {
    _push(`<label class="form-label"${ssrRenderAttr("for", $props.id)}>${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<select${ssrRenderAttrs(mergeProps({
    id: $props.id,
    ref: "input"
  }, { ..._ctx.$attrs, class: null }, {
    class: ["form-select", { error: $props.error }]
  }))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</select>`);
  if ($props.error) {
    _push(`<div class="form-error">${ssrInterpolate($props.error)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SelectInput.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const SelectInput = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f]]);
const _sfc_main$e = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  props: {
    organizations: Array
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        organization_id: null,
        email: "",
        phone: "",
        address: "",
        city: "",
        region: "",
        country: "",
        postal_code: ""
      })
    };
  },
  methods: {
    store() {
      this.form.post("/contacts");
    }
  }
};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Contact" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/contacts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contacts`);
      } else {
        return [
          createTextVNode("Contacts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.organization_id,
    "onUpdate:modelValue": ($event) => $data.form.organization_id = $event,
    error: $data.form.errors.organization_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Organization"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.organizations, (organization) => {
          _push2(`<option${ssrRenderAttr("value", organization.id)}${_scopeId}>${ssrInterpolate(organization.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.organizations, (organization) => {
            return openBlock(), createBlock("option", {
              key: organization.id,
              value: organization.id
            }, toDisplayString(organization.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Contact`);
      } else {
        return [
          createTextVNode("Create Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Create.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const Create$2 = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e]]);
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {
  components: {
    Icon
  },
  emits: ["restore"]
};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between p-4 max-w-3xl bg-yellow-400 rounded" }, _attrs))}><div class="flex items-center">`);
  _push(ssrRenderComponent(_component_icon, {
    name: "trash",
    class: "shrink-0 mr-2 w-4 h-4 fill-yellow-800"
  }, null, _parent));
  _push(`<div class="text-yellow-800 text-sm font-medium">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div><button class="text-yellow-800 hover:underline text-sm" tabindex="-1" type="button">Restore</button></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/TrashedMessage.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const TrashedMessage = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d]]);
const _sfc_main$c = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: Layout,
  props: {
    contact: Object,
    organizations: Array
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: this.contact.first_name,
        last_name: this.contact.last_name,
        organization_id: this.contact.organization_id,
        email: this.contact.email,
        phone: this.contact.phone,
        address: this.contact.address,
        city: this.contact.city,
        region: this.contact.region,
        country: this.contact.country,
        postal_code: this.contact.postal_code
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/contacts/${this.contact.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this contact?")) {
        this.$inertia.delete(`/contacts/${this.contact.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this contact?")) {
        this.$inertia.put(`/contacts/${this.contact.id}/restore`);
      }
    }
  }
};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/contacts"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Contacts`);
      } else {
        return [
          createTextVNode("Contacts")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.first_name)} ${ssrInterpolate($data.form.last_name)}</h1>`);
  if ($props.contact.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This contact has been deleted. `);
        } else {
          return [
            createTextVNode(" This contact has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.organization_id,
    "onUpdate:modelValue": ($event) => $data.form.organization_id = $event,
    error: $data.form.errors.organization_id,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Organization"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><!--[-->`);
        ssrRenderList($props.organizations, (organization) => {
          _push2(`<option${ssrRenderAttr("value", organization.id)}${_scopeId}>${ssrInterpolate(organization.name)}</option>`);
        });
        _push2(`<!--]-->`);
      } else {
        return [
          createVNode("option", { value: null }),
          (openBlock(true), createBlock(Fragment, null, renderList($props.organizations, (organization) => {
            return openBlock(), createBlock("option", {
              key: organization.id,
              value: organization.id
            }, toDisplayString(organization.name), 9, ["value"]);
          }), 128))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$props.contact.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete Contact</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Contact`);
      } else {
        return [
          createTextVNode("Update Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Edit.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const Edit$2 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c]]);
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {
  components: {
    Link
  },
  props: {
    links: Array
  }
};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  if ($props.links.length > 3) {
    _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex flex-wrap -mb-1"><!--[-->`);
    ssrRenderList($props.links, (link, key) => {
      _push(`<!--[-->`);
      if (link.url === null) {
        _push(`<div class="mb-1 mr-1 px-4 py-3 text-gray-400 text-sm leading-4 border rounded">${link.label}</div>`);
      } else {
        _push(ssrRenderComponent(_component_Link, {
          key: `link-${key}`,
          class: ["mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded", { "bg-white": link.active }],
          href: link.url
        }, null, _parent));
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/Pagination.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b]]);
const _sfc_main$a = {
  components: {
    Dropdown
  },
  props: {
    modelValue: String,
    maxWidth: {
      type: Number,
      default: 300
    }
  },
  emits: ["update:modelValue", "reset"]
};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dropdown = resolveComponent("dropdown");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center" }, _attrs))}><div class="flex w-full bg-white rounded shadow">`);
  _push(ssrRenderComponent(_component_dropdown, {
    "auto-close": false,
    class: "focus:z-10 px-4 hover:bg-gray-100 border-r focus:border-white rounded-l focus:ring md:px-6",
    placement: "bottom-start"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="flex items-baseline"${_scopeId}><span class="hidden text-gray-700 md:inline"${_scopeId}>Filter</span><svg class="w-2 h-2 fill-gray-700 md:ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.243 599.998"${_scopeId}><path d="M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z"${_scopeId}></path></svg></div>`);
      } else {
        return [
          createVNode("div", { class: "flex items-baseline" }, [
            createVNode("span", { class: "hidden text-gray-700 md:inline" }, "Filter"),
            (openBlock(), createBlock("svg", {
              class: "w-2 h-2 fill-gray-700 md:ml-2",
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 961.243 599.998"
            }, [
              createVNode("path", { d: "M239.998 239.999L0 0h961.243L721.246 240c-131.999 132-240.28 240-240.624 239.999-.345-.001-108.625-108.001-240.624-240z" })
            ]))
          ])
        ];
      }
    }),
    dropdown: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl" style="${ssrRenderStyle({ maxWidth: `${$props.maxWidth}px` })}"${_scopeId}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
        _push2(`</div>`);
      } else {
        return [
          createVNode("div", {
            class: "mt-2 px-4 py-6 w-screen bg-white rounded shadow-xl",
            style: { maxWidth: `${$props.maxWidth}px` }
          }, [
            renderSlot(_ctx.$slots, "default")
          ], 4)
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(`<input class="relative px-6 py-3 w-full rounded-r focus:shadow-outline" autocomplete="off" type="text" name="search" placeholder="Search…"${ssrRenderAttr("value", $props.modelValue)}></div><button class="ml-3 text-gray-500 hover:text-gray-700 focus:text-indigo-500 text-sm" type="button">Reset</button></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/SearchFilter.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const SearchFilter = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a]]);
const _sfc_main$9 = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    contacts: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/contacts", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Contacts" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Contacts</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/contacts/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Contact</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Contact")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">Organization</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr><!--[-->`);
  ssrRenderList($props.contacts.data, (contact) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/contacts/${contact.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.name)} `);
          if (contact.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(contact.name) + " ", 1),
            contact.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (contact.organization) {
            _push2(`<div${_scopeId}>${ssrInterpolate(contact.organization.name)}</div>`);
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            contact.organization ? (openBlock(), createBlock("div", { key: 0 }, toDisplayString(contact.organization.name), 1)) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.contacts.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No contacts found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.contacts.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contacts/Index.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Index$4 = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9]]);
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {
  components: {
    Head
  },
  layout: Layout
};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Dashboard" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Dashboard</h1><p class="mb-8 leading-normal">Hey there! Welcome to Ping CRM, a demo app designed to help illustrate how <a class="text-indigo-500 hover:text-orange-600 underline" href="https://inertiajs.com">Inertia.js</a> works.</p></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Dashboard/Index.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Index$3 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {
  components: {
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: null,
        email: null,
        phone: null,
        address: null,
        city: null,
        region: null,
        country: null,
        postal_code: null
      })
    };
  },
  methods: {
    store() {
      this.form.post("/organizations");
    }
  }
};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create Organization" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/organizations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Organizations`);
      } else {
        return [
          createTextVNode("Organizations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create Organization`);
      } else {
        return [
          createTextVNode("Create Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organizations/Create.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Create$1 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {
  components: {
    Head,
    Icon,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: Layout,
  props: {
    organization: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        name: this.organization.name,
        email: this.organization.email,
        phone: this.organization.phone,
        address: this.organization.address,
        city: this.organization.city,
        region: this.organization.region,
        country: this.organization.country,
        postal_code: this.organization.postal_code
      })
    };
  },
  methods: {
    update() {
      this.form.put(`/organizations/${this.organization.id}`);
    },
    destroy() {
      if (confirm("Are you sure you want to delete this organization?")) {
        this.$inertia.delete(`/organizations/${this.organization.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this organization?")) {
        this.$inertia.put(`/organizations/${this.organization.id}/restore`);
      }
    }
  }
};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_loading_button = resolveComponent("loading-button");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: $data.form.name
  }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/organizations"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Organizations`);
      } else {
        return [
          createTextVNode("Organizations")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.name)}</h1>`);
  if ($props.organization.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This organization has been deleted. `);
        } else {
          return [
            createTextVNode(" This organization has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.name,
    "onUpdate:modelValue": ($event) => $data.form.name = $event,
    error: $data.form.errors.name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.phone,
    "onUpdate:modelValue": ($event) => $data.form.phone = $event,
    error: $data.form.errors.phone,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Phone"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.address,
    "onUpdate:modelValue": ($event) => $data.form.address = $event,
    error: $data.form.errors.address,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Address"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.city,
    "onUpdate:modelValue": ($event) => $data.form.city = $event,
    error: $data.form.errors.city,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "City"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.region,
    "onUpdate:modelValue": ($event) => $data.form.region = $event,
    error: $data.form.errors.region,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Province/State"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.country,
    "onUpdate:modelValue": ($event) => $data.form.country = $event,
    error: $data.form.errors.country,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Country"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", null)}${_scopeId}></option><option value="CA"${_scopeId}>Canada</option><option value="US"${_scopeId}>United States</option>`);
      } else {
        return [
          createVNode("option", { value: null }),
          createVNode("option", { value: "CA" }, "Canada"),
          createVNode("option", { value: "US" }, "United States")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.postal_code,
    "onUpdate:modelValue": ($event) => $data.form.postal_code = $event,
    error: $data.form.errors.postal_code,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Postal code"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$props.organization.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete Organization</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update Organization`);
      } else {
        return [
          createTextVNode("Update Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div><h2 class="mt-12 text-2xl font-bold">Contacts</h2><div class="mt-6 bg-white rounded shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr><!--[-->`);
  ssrRenderList($props.organization.contacts, (contact) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/contacts/${contact.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.name)} `);
          if (contact.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(contact.name) + " ", 1),
            contact.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(contact.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(contact.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/contacts/${contact.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.organization.contacts.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No contacts found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organizations/Edit.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Edit$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const __vite_glob_0_6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {
  components: {
    Head,
    Icon,
    Link,
    Pagination,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    organizations: Object
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/organizations", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  const _component_pagination = resolveComponent("pagination");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Organizations" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Organizations</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/organizations/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> Organization</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " Organization")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><thead><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">City</th><th class="pb-4 pt-6 px-6" colspan="2">Phone</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.organizations.data, (organization) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/organizations/${organization.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.name)} `);
          if (organization.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            createTextVNode(toDisplayString(organization.name) + " ", 1),
            organization.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 0,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/organizations/${organization.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.city)}`);
        } else {
          return [
            createTextVNode(toDisplayString(organization.city), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/organizations/${organization.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(organization.phone)}`);
        } else {
          return [
            createTextVNode(toDisplayString(organization.phone), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/organizations/${organization.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.organizations.data.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No organizations found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</tbody></table></div>`);
  _push(ssrRenderComponent(_component_pagination, {
    class: "mt-6",
    links: $props.organizations.links
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Organizations/Index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Index$2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const __vite_glob_0_7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {
  components: {
    Head
  },
  layout: Layout
};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Reports" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Reports</h1></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Reports/Index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Index$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const __vite_glob_0_8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {
  props: {
    modelValue: File,
    label: String,
    accept: String,
    errors: {
      type: Array,
      default: () => []
    }
  },
  emits: ["update:modelValue"],
  watch: {
    modelValue(value) {
      if (!value) {
        this.$refs.file.value = "";
      }
    }
  },
  methods: {
    filesize(size) {
      var i = Math.floor(Math.log(size) / Math.log(1024));
      return (size / Math.pow(1024, i)).toFixed(2) * 1 + " " + ["B", "kB", "MB", "GB", "TB"][i];
    },
    browse() {
      this.$refs.file.click();
    },
    change(e) {
      this.$emit("update:modelValue", e.target.files[0]);
    },
    remove() {
      this.$emit("update:modelValue", null);
    }
  }
};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  if ($props.label) {
    _push(`<label class="form-label">${ssrInterpolate($props.label)}:</label>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="${ssrRenderClass([{ error: $props.errors.length }, "form-input p-0"])}"><input type="file"${ssrRenderAttr("accept", $props.accept)} class="hidden">`);
  if (!$props.modelValue) {
    _push(`<div class="p-2"><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Browse</button></div>`);
  } else {
    _push(`<div class="flex items-center justify-between p-2"><div class="flex-1 pr-1">${ssrInterpolate($props.modelValue.name)} <span class="text-gray-500 text-xs">(${ssrInterpolate($options.filesize($props.modelValue.size))})</span></div><button type="button" class="px-4 py-1 text-white text-xs font-medium bg-gray-500 hover:bg-gray-700 rounded-sm">Remove</button></div>`);
  }
  _push(`</div>`);
  if ($props.errors.length) {
    _push(`<div class="form-error">${ssrInterpolate($props.errors[0])}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Shared/FileInput.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const FileInput = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput
  },
  layout: Layout,
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        owner: false,
        photo: null
      })
    };
  },
  methods: {
    store() {
      this.form.post("/users");
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_file_input = resolveComponent("file-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Create User" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> Create </h1><div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "password",
    autocomplete: "new-password",
    label: "Password"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.owner,
    "onUpdate:modelValue": ($event) => $data.form.owner = $event,
    error: $data.form.errors.owner,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Owner"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", true)}${_scopeId}>Yes</option><option${ssrRenderAttr("value", false)}${_scopeId}>No</option>`);
      } else {
        return [
          createVNode("option", { value: true }, "Yes"),
          createVNode("option", { value: false }, "No")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.photo,
    "onUpdate:modelValue": ($event) => $data.form.photo = $event,
    error: $data.form.errors.photo,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "file",
    accept: "image/*",
    label: "Photo"
  }, null, _parent));
  _push(`</div><div class="flex items-center justify-end px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Create User`);
      } else {
        return [
          createTextVNode("Create User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Create.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Create = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const __vite_glob_0_9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Create
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {
  components: {
    FileInput,
    Head,
    Link,
    LoadingButton,
    SelectInput,
    TextInput,
    TrashedMessage
  },
  layout: Layout,
  props: {
    user: Object
  },
  remember: "form",
  data() {
    return {
      form: this.$inertia.form({
        _method: "put",
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        email: this.user.email,
        password: "",
        owner: this.user.owner,
        photo: null
      })
    };
  },
  methods: {
    update() {
      this.form.post(`/users/${this.user.id}`, {
        onSuccess: () => this.form.reset("password", "photo")
      });
    },
    destroy() {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$inertia.delete(`/users/${this.user.id}`);
      }
    },
    restore() {
      if (confirm("Are you sure you want to restore this user?")) {
        this.$inertia.put(`/users/${this.user.id}/restore`);
      }
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_Link = resolveComponent("Link");
  const _component_trashed_message = resolveComponent("trashed-message");
  const _component_text_input = resolveComponent("text-input");
  const _component_select_input = resolveComponent("select-input");
  const _component_file_input = resolveComponent("file-input");
  const _component_loading_button = resolveComponent("loading-button");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, {
    title: `${$data.form.first_name} ${$data.form.last_name}`
  }, null, _parent));
  _push(`<div class="flex justify-start mb-8 max-w-3xl"><h1 class="text-3xl font-bold">`);
  _push(ssrRenderComponent(_component_Link, {
    class: "text-indigo-400 hover:text-indigo-600",
    href: "/users"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Users`);
      } else {
        return [
          createTextVNode("Users")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<span class="text-indigo-400 font-medium">/</span> ${ssrInterpolate($data.form.first_name)} ${ssrInterpolate($data.form.last_name)}</h1>`);
  if ($props.user.photo) {
    _push(`<img class="block ml-4 w-8 h-8 rounded-full"${ssrRenderAttr("src", $props.user.photo)}>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
  if ($props.user.deleted_at) {
    _push(ssrRenderComponent(_component_trashed_message, {
      class: "mb-6",
      onRestore: $options.restore
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` This user has been deleted. `);
        } else {
          return [
            createTextVNode(" This user has been deleted. ")
          ];
        }
      }),
      _: 1
    }, _parent));
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="max-w-3xl bg-white rounded-md shadow overflow-hidden"><form><div class="flex flex-wrap -mb-8 -mr-6 p-8">`);
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.first_name,
    "onUpdate:modelValue": ($event) => $data.form.first_name = $event,
    error: $data.form.errors.first_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "First name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.last_name,
    "onUpdate:modelValue": ($event) => $data.form.last_name = $event,
    error: $data.form.errors.last_name,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Last name"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.email,
    "onUpdate:modelValue": ($event) => $data.form.email = $event,
    error: $data.form.errors.email,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Email"
  }, null, _parent));
  _push(ssrRenderComponent(_component_text_input, {
    modelValue: $data.form.password,
    "onUpdate:modelValue": ($event) => $data.form.password = $event,
    error: $data.form.errors.password,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "password",
    autocomplete: "new-password",
    label: "Password"
  }, null, _parent));
  _push(ssrRenderComponent(_component_select_input, {
    modelValue: $data.form.owner,
    "onUpdate:modelValue": ($event) => $data.form.owner = $event,
    error: $data.form.errors.owner,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    label: "Owner"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<option${ssrRenderAttr("value", true)}${_scopeId}>Yes</option><option${ssrRenderAttr("value", false)}${_scopeId}>No</option>`);
      } else {
        return [
          createVNode("option", { value: true }, "Yes"),
          createVNode("option", { value: false }, "No")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_file_input, {
    modelValue: $data.form.photo,
    "onUpdate:modelValue": ($event) => $data.form.photo = $event,
    error: $data.form.errors.photo,
    class: "pb-8 pr-6 w-full lg:w-1/2",
    type: "file",
    accept: "image/*",
    label: "Photo"
  }, null, _parent));
  _push(`</div><div class="flex items-center px-8 py-4 bg-gray-50 border-t border-gray-100">`);
  if (!$props.user.deleted_at) {
    _push(`<button class="text-red-600 hover:underline" tabindex="-1" type="button">Delete User</button>`);
  } else {
    _push(`<!---->`);
  }
  _push(ssrRenderComponent(_component_loading_button, {
    loading: $data.form.processing,
    class: "btn-indigo ml-auto",
    type: "submit"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Update User`);
      } else {
        return [
          createTextVNode("Update User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Edit.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Edit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const __vite_glob_0_10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Edit
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {
  components: {
    Head,
    Icon,
    Link,
    SearchFilter
  },
  layout: Layout,
  props: {
    filters: Object,
    users: Array
  },
  data() {
    return {
      form: {
        search: this.filters.search,
        role: this.filters.role,
        trashed: this.filters.trashed
      }
    };
  },
  watch: {
    form: {
      deep: true,
      handler: throttle(function() {
        this.$inertia.get("/users", pickBy(this.form), { preserveState: true });
      }, 150)
    }
  },
  methods: {
    reset() {
      this.form = mapValues(this.form, () => null);
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Head = resolveComponent("Head");
  const _component_search_filter = resolveComponent("search-filter");
  const _component_Link = resolveComponent("Link");
  const _component_icon = resolveComponent("icon");
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_Head, { title: "Users" }, null, _parent));
  _push(`<h1 class="mb-8 text-3xl font-bold">Users</h1><div class="flex items-center justify-between mb-6">`);
  _push(ssrRenderComponent(_component_search_filter, {
    modelValue: $data.form.search,
    "onUpdate:modelValue": ($event) => $data.form.search = $event,
    class: "mr-4 w-full max-w-md",
    onReset: $options.reset
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<label class="block text-gray-700"${_scopeId}>Role:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, null) : ssrLooseEqual($data.form.role, null)) ? " selected" : ""}${_scopeId}></option><option value="user"${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, "user") : ssrLooseEqual($data.form.role, "user")) ? " selected" : ""}${_scopeId}>User</option><option value="owner"${ssrIncludeBooleanAttr(Array.isArray($data.form.role) ? ssrLooseContain($data.form.role, "owner") : ssrLooseEqual($data.form.role, "owner")) ? " selected" : ""}${_scopeId}>Owner</option></select><label class="block mt-4 text-gray-700"${_scopeId}>Trashed:</label><select class="form-select mt-1 w-full"${_scopeId}><option${ssrRenderAttr("value", null)}${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, null) : ssrLooseEqual($data.form.trashed, null)) ? " selected" : ""}${_scopeId}></option><option value="with"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "with") : ssrLooseEqual($data.form.trashed, "with")) ? " selected" : ""}${_scopeId}>With Trashed</option><option value="only"${ssrIncludeBooleanAttr(Array.isArray($data.form.trashed) ? ssrLooseContain($data.form.trashed, "only") : ssrLooseEqual($data.form.trashed, "only")) ? " selected" : ""}${_scopeId}>Only Trashed</option></select>`);
      } else {
        return [
          createVNode("label", { class: "block text-gray-700" }, "Role:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.role = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "user" }, "User"),
            createVNode("option", { value: "owner" }, "Owner")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.role]
          ]),
          createVNode("label", { class: "block mt-4 text-gray-700" }, "Trashed:"),
          withDirectives(createVNode("select", {
            "onUpdate:modelValue": ($event) => $data.form.trashed = $event,
            class: "form-select mt-1 w-full"
          }, [
            createVNode("option", { value: null }),
            createVNode("option", { value: "with" }, "With Trashed"),
            createVNode("option", { value: "only" }, "Only Trashed")
          ], 8, ["onUpdate:modelValue"]), [
            [vModelSelect, $data.form.trashed]
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Link, {
    class: "btn-indigo",
    href: "/users/create"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span${_scopeId}>Create</span><span class="hidden md:inline"${_scopeId}> User</span>`);
      } else {
        return [
          createVNode("span", null, "Create"),
          createVNode("span", { class: "hidden md:inline" }, " User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="bg-white rounded-md shadow overflow-x-auto"><table class="w-full whitespace-nowrap"><tr class="text-left font-bold"><th class="pb-4 pt-6 px-6">Name</th><th class="pb-4 pt-6 px-6">Email</th><th class="pb-4 pt-6 px-6" colspan="2">Role</th></tr><!--[-->`);
  ssrRenderList($props.users, (user) => {
    _push(`<tr class="hover:bg-gray-100 focus-within:bg-gray-100"><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4 focus:text-indigo-500",
      href: `/users/${user.id}/edit`
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          if (user.photo) {
            _push2(`<img class="block -my-2 mr-2 w-5 h-5 rounded-full"${ssrRenderAttr("src", user.photo)}${_scopeId}>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(` ${ssrInterpolate(user.name)} `);
          if (user.deleted_at) {
            _push2(ssrRenderComponent(_component_icon, {
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            }, null, _parent2, _scopeId));
          } else {
            _push2(`<!---->`);
          }
        } else {
          return [
            user.photo ? (openBlock(), createBlock("img", {
              key: 0,
              class: "block -my-2 mr-2 w-5 h-5 rounded-full",
              src: user.photo
            }, null, 8, ["src"])) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(user.name) + " ", 1),
            user.deleted_at ? (openBlock(), createBlock(_component_icon, {
              key: 1,
              name: "trash",
              class: "shrink-0 ml-2 w-3 h-3 fill-gray-400"
            })) : createCommentVNode("", true)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.email)}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.email), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-6 py-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(user.owner ? "Owner" : "User")}`);
        } else {
          return [
            createTextVNode(toDisplayString(user.owner ? "Owner" : "User"), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td><td class="w-px border-t">`);
    _push(ssrRenderComponent(_component_Link, {
      class: "flex items-center px-4",
      href: `/users/${user.id}/edit`,
      tabindex: "-1"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_icon, {
            name: "cheveron-right",
            class: "block w-6 h-6 fill-gray-400"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_icon, {
              name: "cheveron-right",
              class: "block w-6 h-6 fill-gray-400"
            })
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</td></tr>`);
  });
  _push(`<!--]-->`);
  if ($props.users.length === 0) {
    _push(`<tr><td class="px-6 py-4 border-t" colspan="4">No users found.</td></tr>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</table></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Users/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __vite_glob_0_11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index
}, Symbol.toStringTag, { value: "Module" }));
createServer((page) => createInertiaApp({
  page,
  render: renderToString,
  resolve: (name) => {
    const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/Login.vue": __vite_glob_0_0, "./Pages/Contacts/Create.vue": __vite_glob_0_1, "./Pages/Contacts/Edit.vue": __vite_glob_0_2, "./Pages/Contacts/Index.vue": __vite_glob_0_3, "./Pages/Dashboard/Index.vue": __vite_glob_0_4, "./Pages/Organizations/Create.vue": __vite_glob_0_5, "./Pages/Organizations/Edit.vue": __vite_glob_0_6, "./Pages/Organizations/Index.vue": __vite_glob_0_7, "./Pages/Reports/Index.vue": __vite_glob_0_8, "./Pages/Users/Create.vue": __vite_glob_0_9, "./Pages/Users/Edit.vue": __vite_glob_0_10, "./Pages/Users/Index.vue": __vite_glob_0_11 });
    return pages[`./Pages/${name}.vue`];
  },
  title: (title) => title ? `${title} - Ping CRM` : "Ping CRM",
  setup({ app, props, plugin }) {
    return createSSRApp({
      render: () => h(app, props)
    }).use(plugin);
  }
}));
