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
// view 라우터가 제어하는 태그. 선택된 라우터에대한 결과를 이 위치에 보여주겠다.
// link 보여주고자 하는 대상에 대해서 링크.  두 개의 기준을 기준삼아서 라우트가 동작한다. 
// href 속성으로 전환되서 들어간다. routerlink 는 a태그. path  이용할 경우는 위처럼.  { name : 'home' } 도 가능 
// 가능한 router링크 사용할것..
// 새로고침하면 에러,..주소직접치는거랑같아서 
// router view의 키속성을 사용. 

// 수정..은 반드시 단건조회 안에 연결되어야한다. 

createApp({
    template,
    components :{
        HeaderComponent,
        FooterComponentComponent
    } 
    
})
.use(router)
.mount('#app');

// use메소드 전역..?
//    ||  <router-link v-bind:to= "{ path : '/postList' }"> 전체조회 </router-link>  단건조회를 등록으로 