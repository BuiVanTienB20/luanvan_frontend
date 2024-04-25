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
        path: "/listtrain/user",
        name: "listtrain",
        component: () => import("@/views/user/listtrain.vue"),
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
        path: "hotel/province/:id",
        name: "admin-hotel",
        component: () => import("@/admin/hotel.vue"),
      },
      {
        path: "room/hotel/:id",
        name: "admin-room",
        component: () => import("@/admin/room.vue"),
      },
      {
        path: "Bookingmanagement",
        name: "Bookingmanagement",
        component: () => import("@/admin/Bookingmanagement.vue"),
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
        path: "addhotel/province/:id",
        name: "addhotel",
        component: () => import("@/admin/hotel/addhotel.vue"),
      },
      {
        path: "edithotel/province/:provinceId/:hotelId",
        name: "edithotel",
        component: () => import("@/admin/hotel/edithotel.vue"),
        props: true,
      },
      {
        path: "addroom/hotel/:id",
        name: "addroom",
        component: () => import("@/admin/room/addroom.vue"),
      },
      {
        path: "editroom/hotel/:hotelId/:roomId",
        name: "editroom",
        component: () => import("@/admin/room/editroom.vue"),
        props: true,
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
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      // Nếu có hash trong URL, cuộn đến phần tử có id tương ứng
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else {
      // Cuộn lên đầu trang khi chuyển đến trang mới hoặc trở về
      return { left: 0, top: 0 };
    }
  },
});

export default router;
