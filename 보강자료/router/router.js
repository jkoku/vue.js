//router.js

import HomeComponent from '../views/home.js';
import BoardListComponent from '../views/boardList.js';
import BoardInfoComponent from '../views/boardInfo.js';
import BoardFormComponent from '../views/boardForm.js';

const { createRouter, createWebHistory } = VueRouter

let routes = [
    {
        path : '/index.html', 
        redirect : '/'
    },
    {
        path : '/',
        name : 'home',
        component : HomeComponent
    },
    {
        path : '/boardList',
        name : 'boardList',
        component : BoardListComponent
    },
    {
        path : '/boardInfo',
        name : 'boardInfo',
        component : BoardInfoComponent
    },
    {
        path : '/boardForm',
        name : 'boardForm',
        component : BoardFormComponent
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes
})

export default router;