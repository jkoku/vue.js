//app.js

import router from './router/router.js';

import HeaderComponent from './layouts/header.js';
import FooterComponent from './layouts/footer.js';

const { createApp } = Vue

const template=`
    <div>
        <HeaderComponent />
        <router-view :key="$route.fullPath" />
        <FooterComponent />
    </div>
`;

createApp({
    template,
    components : {
        HeaderComponent,
        FooterComponent
    }
})
.use(router)
.mount('#app');