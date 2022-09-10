import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"

import "./assets/main.css"
import "./assets/style.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { faBolt } from "@fortawesome/free-solid-svg-icons"
library.add(faBolt)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount("#app")
