const routes = [
  {
    path: "/:jobid",
    component: () => import("layouts/MainLayout.vue"),

    // children: [
    //   {
    //     path: "",
    //     component: () => import("pages/IndexPage.vue"),
    //     props: (route) => ({ jobid: route.params.jobid }),
    //   },
    // ],
    props: true,
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
