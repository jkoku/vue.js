//header.js

let template= `
    <header>
        <!-- <router-link to="/home"> Home </router-link> -->
        <router-link v-bind:to= "{ name : 'home' }"> Home </router-link> 
        ||  <router-link v-bind:to= "{ path : '/boardList' }"> 전체조회 </router-link> 
        ||  <router-link v-bind:to= "{ path : '/boardInsert' }"> 글 등록 </router-link>
    </header>
`;

export default {
    template,
    name : 'headers'
}