//header.js

let template= `
    <header>
        <!-- <router-link to="/home"> Home </router-link> -->
        <router-link v-bind:to= "{ name : 'home' }"> Home </router-link> 
        ||  <router-link v-bind:to= "{ path : '/postList' }"> 전체조회 </router-link> 
        ||  <router-link v-bind:to= "{ path : '/postForm' }"> 등록 </router-link>
    </header>
`;

export default {
    template,
    name : 'headers'
}

// 라우터에 연결되지않는다. 페이지가 아니라 하나의페이지의 조각에 해당하기때문에. 자식컴포넌트. 
// app.js에서 import