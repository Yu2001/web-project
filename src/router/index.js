import{createRouter,createWebHashHistory} from "vue-router/dist/vue-router";

const routes =[
    {
        path: '/',
        redirect: '/indexPage'
    },
    {
        path:'/indexPage',
        name:'indexPage',
        component:()=>import("@/views/index.vue")
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
