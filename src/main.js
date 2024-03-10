import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import { Icon } from "@iconify/vue";
import App from "./App.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import go from "highlight.js/lib/languages/go";
import php from "highlight.js/lib/languages/php";
import java from "highlight.js/lib/languages/java";
import hljsVuePlugin from "@highlightjs/vue-plugin";

const app = createApp(App);

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("go", go);
hljs.registerLanguage("php", php);
hljs.registerLanguage("java", java);

app.use(createPinia());
app.component("Icon", Icon);
app.use(hljsVuePlugin);

app.mount("#app");
