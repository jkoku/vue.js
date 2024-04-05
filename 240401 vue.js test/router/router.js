// router.js
import HomeComponent from '../views/home.js';
import BoardListComponent from '../views/boardList.js';
import BoardInfoComponent from '../views/boardInfo.js';
import BoardInsertComponent from '../views/boardInsert.js';
import BoardUpdateComponent from '../views/boardUpdate.js';
import BoardFormComponent from '../views/boardForm.js';

const { createRouter, createWebHistory } = VueRouter 

let routes = [
    {
        path : '/index.html', // 정규식. 
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
        path : '/boardInsert', 
        name : 'boardInsert', 
        component : BoardInsertComponent
    },
    {
        path : '/boardUpdate', 
        name : 'boardUpdate', 
        component : BoardUpdateComponent
    },
    {
        path : '/boardForm', 
        name : 'boardForm', 
        component : BoardFormComponent
    },

]

const router = createRouter({
    history : createWebHistory(), 
    routes 
});

export default router;