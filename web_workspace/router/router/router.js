// router.js
import HomeComponent from '../views/home.js';
import PostListComponent from '../views/postList.js';
import PostInfoComponent from '../views/postInfo.js';
import PostInsertComponent from '../views/postInsert.js ';
import UpdateComponent from '../views/postUpdate.js';
import postFormComponent from '../views/postForm.js';

const { createRouter, createWebHistory } = VueRouter 

let routes = [
    {
        path : '/index.html', // 정규식. 
        redirect : '/'
    },
    {
        path : '/', // 엔드포인트에 해당하는 uri 가 필요하다. 
        name : 'home', // 이름으로 호출하는 경우가있어서
        component : HomeComponent // 열어줄 컴포너트에 대한 정보   
    },
    {
        path :'/postList',
        name : 'postList',
        component : PostListComponent
    },
    {
        path :'/postInfo',
        name : 'postInfo',
        component : PostInfoComponent
    },
    {
        path :'/postInsert',
        name : 'postInsert',
        component : PostInsertComponent
    },
    {
        path :'/postUpdate',
        name : 'postUpdate',
        component : UpdateComponent
    },
    {
        path :'/postForm',
        name : 'postForm',
        component : postFormComponent
    }
]


const router = createRouter({
    history : createWebHistory(), // 열리는 시점에 그 브라우저를 기반으로 히스토리 시작. 고정으로두기.
    routes // 라우팅. 응대하고자하는 uri 컴포넌트 매핑. 기본 배열
});

export default router;