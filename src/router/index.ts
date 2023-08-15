import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: ()=> import("../layouts/Layout.vue"),
      redirect:"/dashboard",
      children: [
        {
          path: "dashboard",
          component: ()=>import("../views/dashboard/DashboardView.vue")
        },
        {
          path: "categories",
          component: ()=>import("../views/categories/CategoriesView.vue")
        },
        {
          path: "companies",
          component: ()=>import("../views/companies/CompaniesView.vue")
        },
        {
          path: "orders",
          component: ()=>import("../views/orders/OrdersView.vue")
        },
        {
          path: "products",
          component: ()=>import("../views/products/ProductsView.vue")
        },
        {
          path: "users",
          component: ()=>import("../views/users/UsersView.vue")
        },
        {
          path: "settings",
          component: ()=>import("../views/settings/SettingsView.vue")
        }
      ]
    },
    {
      path: "/auth",
      component: ()=>import("../layouts/AuthLayout.vue"),
      redirect: "/auth/login",
      children: [
        {
          path: "login",
          component: ()=>import("../views/auth/LoginView.vue")
        }
      ]
    }
  ]
})

export default router
