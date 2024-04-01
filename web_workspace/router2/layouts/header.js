//header.js

let template= `
    <header>
        <!-- <router-link to="/home"> Home </router-link> -->
        <router-link v-bind:to= "{ name : 'home' }"> Home </router-link> 
        ||  <router-link v-bind:to= "{ path : '/userList' }"> 전체조회 </router-link> 
        ||  <router-link v-bind:to= "{ path : '/userInsert' }"> 등록 </router-link>
    </header>
`;

export default {
    template,
    name : 'headers'
}