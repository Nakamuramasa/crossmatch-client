import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const page = path => () => import(`~/pages/${path}`).then(m => m.default || m);

const routes = [
    { path: '/', name: 'index', component: page('index.vue') },
    { path: '/login', name: 'login', component: page('auth/login.vue') },
    { path: '/register', name: 'register', component: page('auth/register.vue') },
    { path: '/verification/verify/:id', name: 'verify', component: page('auth/verification/verify.vue') },
    { path: '/verification/resend', name: 'verification.resend', component: page('auth/verification/resend.vue') },
    { path: '/password/email', name: 'password.email', component: page('auth/password/reset-email.vue') },
    { path: '/password/reset/:token', name: 'password.reset', component: page('auth/password/password-reset.vue') },
    { path: '/user/profile', name: 'user.profile', component: page('user/profile.vue') },
    { path: '/user/detail/:id', name: 'user.detail', component: page('user/detail.vue') },
    { path: '/user/edit', name: 'user.edit', component: page('user/edit.vue') },
    { path: '/user/password', name: 'user.password', component: page('user/password.vue') },
    { path: '/user/match', name: 'user.match', component: page('user/match.vue') },
    { path: '/user/reaction', name: 'user.reaction', component: page('user/reaction.vue') },
    { path: '/chat', name: 'chat', component: page('chat/chat.vue'), props: true },
];

export function createRouter(){
    return new Router({
        routes,
        mode: 'history'
    });
}
