// app.js
import router from './router/router.js';
import HeaderComponent from './layouts/header.js';
import SectionComponent from './layouts/section.js';
import FooterComponentComponent from './layouts/footer.js';


const { createApp } = Vue

let template=`
<HeaderComponent/>
<router-view :key="$route.fullPath" /> 
<SectionComponent/>
<FooterComponentComponent/>
`;

createApp({
    template,
    components :{
        HeaderComponent,
        SectionComponent,
        FooterComponentComponent
    } 
    
})
.use(router)
.mount('#app');