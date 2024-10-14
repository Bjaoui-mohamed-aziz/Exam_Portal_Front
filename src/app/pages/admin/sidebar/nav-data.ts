import { RouterLink } from "@angular/router";
export const navbarData = [
    {
        RouteLink: '/admin',
        icon: 'fas fa-home',
        label: 'Home',
    },
    {
        RouteLink: '/admin/profile',
        icon: 'fa-solid fa-user',
        label: 'Profile',
    },
    {
        RouteLink: '/admin/categories',
        icon: 'fa-solid fa-list',
        label: 'Categories',
    },
    {
        RouteLink: '/admin/add-category',
        icon: 'fas fa-plus',
        label: 'Add Categories',
    },
    {
        RouteLink: '/admin/quizzes',
        icon: 'fa-solid fa-circle-question',
        label: 'Quizzes',
    },
    {
        RouteLink: '/admin/add-quiz',
        icon: 'fas fa-plus',
        label: 'Add Quiz',
    },
    {
        RouteLink: '',
        icon: 'fa-solid fa-right-from-bracket',
        label: 'Logout',
    },

];