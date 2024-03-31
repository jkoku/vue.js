// router.js
import HomeComponent from '../views/home.js';
import UserListComponent from '../views/userList.js';
import UserInfoComponent from '../views/userInfo.js';

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
        path :'/userList',
        name : 'userList',
        component : UserListComponent
    },
    {
        path :'/userInfo',
        name : 'userInfo',
        component : UserInfoComponent
    }
]


const router = createRouter({
    history : createWebHistory(), // 열리는 시점에 그 브라우저를 기반으로 히스토리 시작. 고정으로두기.
    routes // 라우팅. 응대하고자하는 uri 컴포넌트 매핑. 기본 배열
});

export default router;