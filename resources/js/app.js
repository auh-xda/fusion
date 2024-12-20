import '../css/app.css'
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import 'admin-lte/dist/css/adminlte.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/js/adminlte.min.js';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import $ from 'jquery';

window.$ = $;
window.jQuery = $;


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  title: title => title ? `${title} - k3d` : 'k3d',
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})
