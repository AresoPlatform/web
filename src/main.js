import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store'
import axios from "axios";
// import "./plugins/axios";
Vue.config.productionTip = false
    // import lottie from 'vue-lottie';
    // Vue.component('lottie', lottie)
    // axios.defaults.withCredentials = true;
import {
    Button,
    Select,
    Container,
    Header,
    Main,
    Footer,
    Loading,
    MessageBox,
    Message,
    Dialog,
    Input,
    Checkbox,
    Tabs,
    TabPane,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    Pagination,
    Tooltip,
    Popover,
    Dropdown,
    DropdownMenu,
    DropdownItem
} from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Select);
Vue.use(Container);
Vue.use(Header);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Loading);
Vue.use(Dialog);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Tabs);
Vue.use(TabPane);
Vue.use(ButtonGroup);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(DatePicker);
Vue.use(Pagination);
Vue.use(Tooltip);
Vue.use(Popover);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Dropdown);
Vue.prototype.$MessageBox = MessageBox;
Vue.prototype.$message = Message;


// Vue.prototype.$axios = axios;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')