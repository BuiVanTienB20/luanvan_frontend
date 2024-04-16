import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",

    component: () => import("@/layouts/Base.vue"),

    children: [
      {
        path: "",
        name: "trangchu",
        component: () => import("@/views/TrangChu.vue"),
      },
      {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
      },

      {
        path: "/auth",
        name: "auth",
        component: () => import("@/views/Auth.vue"),
      },

      {
        path: "/loginuser",
        name: "login",
        component: () => import("@/views/Login.vue"),
      },
      {
        path: "/users",
        name: "user.register",
        component: () => import("@/views/Register.vue"),
      },
      {
        path: "/events",
        name: "events",
        component: () => import("@/views/Event.vue"),
      },
      {
        path: "/localhotelPro",
        name: "localhotelPro",
        component: () => import("@/views/localhotelPro.vue"),
      },
      {
        path: "/hotel/province/:id", // Thêm tham số động :id vào đường dẫn
        name: "hotel",
        component: () => import("@/views/hotel.vue"),
        props: true, // Cho phép truyền props từ route vào component
      },

      {
        path: "/bookroom/hotel/:id",
        name: "bookroom",
        component: () => import("@/views/bookroom.vue"),
        props: true,
      },
      {
        path: "/test",
        name: "test",
        component: () => import("@/views/test.vue"),
      },
      {
        path: "/comfirm",
        name: "comfirm",
        component: () => import("@/views/comfirm.vue"),
      },
      {
        path: "/bookdetail/room/:id",
        name: "bookdetail",
        component: () => import("@/views/bookdetail.vue"),
        props: true,
      },
      {
        path: "/pay",
        name: "pay",
        component: () => import("@/views/pay.vue"),
      },

      {
        path: "/psuccess",
        name: "psuccess",
        component: () => import("@/views/Psuccess.vue"),
      },
    ],
  },
  {
    path: "/admin",
    name: "admin",
    component: () => import("@/layouts/Admin.vue"),
    children: [
      {
        path: "",
        name: "awelcome",
        component: () => import("@/admin/AWelcome.vue"),
      },
      {
        path: "user",
        name: "admin-user",
        component: () => import("@/admin/User.vue"),
      },

      {
        path: "position",
        name: "admin-position",
        component: () => import("@/admin/Position.vue"),
      },
      {
        path: "dire",
        name: "dire",
        component: () => import("@/admin/Directcard.vue"),
      },
      {
        path: "statistical",
        name: "statistical",
        component: () => import("@/admin/statistical.vue"),
      },
      {
        path: "addposition",
        name: "addposition",
        component: () => import("@/admin/position/addposition.vue"),
      },
      {
        path: "editposition/:id",
        name: "editposition",
        component: () => import("@/admin/position/editposition.vue"),
      },
      {
        path: "myseft",
        name: "myseft",
        component: () => import("@/components/position/myseft.vue"),
      },
      {
        path: "Cancel",
        name: "Cancel",
        component: () => import("@/components/position/Cancel.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
