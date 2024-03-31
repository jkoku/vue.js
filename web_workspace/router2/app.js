// app.js
import router from './router/router.js';

const { createApp } = Vue

let template =`
<div>
    <!-- <router-link to="/home"> Home </router-link> -->
    <router-link v-bind:to= "{ name : 'home' }"> Home </router-link> 
    ||  <router-link v-bind:to= "{ path : '/userList' }"> 전체조회 </router-link> 
    ||  <router-link v-bind:to= "{ path : '/userInfo' }"> 단건조회 </router-link> 
    <router-view :key="$route.fullPath" /> 
</div>
`;
createApp({
    template
})
.use(router)
.mount('#app');