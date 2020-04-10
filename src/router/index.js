import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/views/tableDemo.vue"),
  },
  {
    path: "/layout",
    name: "nui-layout",
    component: () => import("@/views/layoutDemo.vue"),
  },
  {
    path: "/container",
    name: "nui-container",
    component: () => import("@/views/containerDemo.vue"),
  },
  {
    path: "/button",
    name: "nui-button",
    component: () => import("@/views/buttonDemo.vue"),
  },
  {
    path: "/link",
    name: "nui-link",
    component: () => import("@/views/linkDemo.vue"),
  },

  {
    path: "/form",
    name: "nui-form",
    component: () => import("@/views/formDemo.vue"),
  },
  {
    path: "/radio",
    name: "nui-radio",
    component: () => import("@/views/radioDemo.vue"),
  },
  {
    path: "/checkbox",
    name: "nui-checkbox",
    component: () => import("@/views/checkboxDemo.vue"),
  },
  {
    path: "/input",
    name: "nui-input",
    component: () => import("@/views/inputDemo.vue"),
  },
  {
    path: "/inputNumber",
    name: "nui-input-number",
    component: () => import("@/views/inputNumberDemo.vue"),
  },
  {
    path: "/select",
    name: "nui-select",
    component: () => import("@/views/selectDemo.vue"),
  },
  {
    path: "/cascader",
    name: "nui-cascader",
    component: () => import("@/views/cascaderDemo.vue"),
  },
  {
    path: "/switch",
    name: "nui-switch",
    component: () => import("@/views/switchDemo.vue"),
  },
  {
    path: "/slider",
    name: "nui-slider",
    component: () => import("@/views/sliderDemo.vue"),
  },
  {
    path: "/datePicker",
    name: "nui-datePicker",
    component: () => import("@/views/datePickerDemo.vue"),
  },
  {
    path: "/timePicker",
    name: "nui-timePicker",
    component: () => import("@/views/timePickerDemo.vue"),
  },
  {
    path: "/upload",
    name: "nui-upload",
    component: () => import("@/views/uploadDemo.vue"),
  },
  {
    path: "/rate",
    name: "nui-rate",
    component: () => import("@/views/rateDemo.vue"),
  },
  {
    path: "/transfer",
    name: "nui-transfer",
    component: () => import("@/views/transferDemo.vue"),
  },
  {
    path: "/table",
    name: "nui-table",
    component: () => import("@/views/tableDemo.vue"),
  },
  {
    path: "/tag",
    name: "nui-tag",
    component: () => import("@/views/tagDemo.vue"),
  },
  {
    path: "/progress",
    name: "nui-progress",
    component: () => import("@/views/progressDemo.vue"),
  },
  {
    path: "/tree",
    name: "nui-tree",
    component: () => import("@/views/treeDemo.vue"),
  },
  {
    path: "/badge",
    name: "nui-badge",
    component: () => import("@/views/badgeDemo.vue"),
  },
  {
    path: "/menu",
    name: "nui-menu",
    component: () => import("@/views/menuDemo.vue"),
  },
  {
    path: "/tabs",
    name: "nui-tabs",
    component: () => import("@/views/tabsDemo.vue"),
  },
  // {
  //   path: "/dropdown",
  //   name: "nui-dropdown",
  //   component: () => import("@/views/dropdownDemo.vue"),
  // },
  {
    path: "/dialog",
    name: "nui-dialog",
    component: () => import("@/views/dialogDemo.vue"),
  },
  {
    path: "/drawer",
    name: "nui-drawer",
    component: () => import("@/views/drawerDemo.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes,
})

export default router
