// app.js
import router from './router/router.js';
import HeaderComponent from './layouts/header.js';
import FooterComponentComponent from './layouts/footer.js';
const { createApp } = Vue

let template =`
<div>
    <HeaderComponent/>
    <router-view :key="$route.fullPath" /> 
    <FooterComponentComponent/>
</div>
`;
createApp({
    template,
    components :{
        HeaderComponent,
        FooterComponentComponent
    } 
})
.use(router)
.mount('#app');