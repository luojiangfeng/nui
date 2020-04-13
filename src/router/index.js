import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/demo/installation.vue")
  },
  {
    path: "/installation",
    name: "nui-installation",
    component: () => import("@/demo/installation.vue")
  },
  {
    path: "/quickstart",
    name: "nui-quickstart",
    component: () => import("@/demo/quickstart.vue")
  },
  {
    path: "/layout",
    name: "nui-layout",
    component: () => import("@/demo/layoutDemo.vue")
  },
  {
    path: "/container",
    name: "nui-container",
    component: () => import("@/demo/containerDemo.vue")
  },
  {
    path: "/button",
    name: "nui-button",
    component: () => import("@/demo/buttonDemo.vue")
  },
  {
    path: "/link",
    name: "nui-link",
    component: () => import("@/demo/linkDemo.vue")
  },

  {
    path: "/form",
    name: "nui-form",
    component: () => import("@/demo/formDemo.vue")
  },
  {
    path: "/radio",
    name: "nui-radio",
    component: () => import("@/demo/radioDemo.vue")
  },
  {
    path: "/checkbox",
    name: "nui-checkbox",
    component: () => import("@/demo/checkboxDemo.vue")
  },
  {
    path: "/input",
    name: "nui-input",
    component: () => import("@/demo/inputDemo.vue")
  },
  {
    path: "/inputNumber",
    name: "nui-input-number",
    component: () => import("@/demo/inputNumberDemo.vue")
  },
  {
    path: "/select",
    name: "nui-select",
    component: () => import("@/demo/selectDemo.vue")
  },
  {
    path: "/cascader",
    name: "nui-cascader",
    component: () => import("@/demo/cascaderDemo.vue")
  },
  {
    path: "/switch",
    name: "nui-switch",
    component: () => import("@/demo/switchDemo.vue")
  },
  {
    path: "/slider",
    name: "nui-slider",
    component: () => import("@/demo/sliderDemo.vue")
  },
  {
    path: "/datePicker",
    name: "nui-datePicker",
    component: () => import("@/demo/datePickerDemo.vue")
  },
  {
    path: "/timePicker",
    name: "nui-timePicker",
    component: () => import("@/demo/timePickerDemo.vue")
  },
  {
    path: "/upload",
    name: "nui-upload",
    component: () => import("@/demo/uploadDemo.vue")
  },
  {
    path: "/rate",
    name: "nui-rate",
    component: () => import("@/demo/rateDemo.vue")
  },
  {
    path: "/transfer",
    name: "nui-transfer",
    component: () => import("@/demo/transferDemo.vue")
  },
  {
    path: "/table",
    name: "nui-table",
    component: () => import("@/demo/tableDemo.vue")
  },
  {
    path: "/tag",
    name: "nui-tag",
    component: () => import("@/demo/tagDemo.vue")
  },
  {
    path: "/progress",
    name: "nui-progress",
    component: () => import("@/demo/progressDemo.vue")
  },
  {
    path: "/tree",
    name: "nui-tree",
    component: () => import("@/demo/treeDemo.vue")
  },
  {
    path: "/badge",
    name: "nui-badge",
    component: () => import("@/demo/badgeDemo.vue")
  },
  {
    path: "/menu",
    name: "nui-menu",
    component: () => import("@/demo/menuDemo.vue")
  },
  {
    path: "/tabs",
    name: "nui-tabs",
    component: () => import("@/demo/tabsDemo.vue")
  },
  // {
  //   path: "/dropdown",
  //   name: "nui-dropdown",
  //   component: () => import("@/demo/dropdownDemo.vue"),
  // },
  {
    path: "/dialog",
    name: "nui-dialog",
    component: () => import("@/demo/dialogDemo.vue")
  },
  {
    path: "/drawer",
    name: "nui-drawer",
    component: () => import("@/demo/drawerDemo.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
