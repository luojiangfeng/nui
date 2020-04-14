import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("@/demoViews/installation.vue")
  },
  {
    path: "/installation",
    name: "nui-installation",
    component: () => import("@/demoViews/installation.vue")
  },
  {
    path: "/quickstart",
    name: "nui-quickstart",
    component: () => import("@/demoViews/quickstart.vue")
  },
  {
    path: "/layout",
    name: "nui-layout",
    component: () => import("@/demoViews/layoutDemo.vue")
  },
  {
    path: "/container",
    name: "nui-container",
    component: () => import("@/demoViews/containerDemo.vue")
  },
  {
    path: "/button",
    name: "nui-button",
    component: () => import("@/demoViews/buttonDemo.vue")
  },
  {
    path: "/link",
    name: "nui-link",
    component: () => import("@/demoViews/linkDemo.vue")
  },

  {
    path: "/form",
    name: "nui-form",
    component: () => import("@/demoViews/formDemo.vue")
  },
  {
    path: "/radio",
    name: "nui-radio",
    component: () => import("@/demoViews/radioDemo.vue")
  },
  {
    path: "/checkbox",
    name: "nui-checkbox",
    component: () => import("@/demoViews/checkboxDemo.vue")
  },
  {
    path: "/input",
    name: "nui-input",
    component: () => import("@/demoViews/inputDemo.vue")
  },
  {
    path: "/inputNumber",
    name: "nui-input-number",
    component: () => import("@/demoViews/inputNumberDemo.vue")
  },
  {
    path: "/select",
    name: "nui-select",
    component: () => import("@/demoViews/selectDemo.vue")
  },
  {
    path: "/cascader",
    name: "nui-cascader",
    component: () => import("@/demoViews/cascaderDemo.vue")
  },
  {
    path: "/switch",
    name: "nui-switch",
    component: () => import("@/demoViews/switchDemo.vue")
  },
  {
    path: "/slider",
    name: "nui-slider",
    component: () => import("@/demoViews/sliderDemo.vue")
  },
  {
    path: "/datePicker",
    name: "nui-datePicker",
    component: () => import("@/demoViews/datePickerDemo.vue")
  },
  {
    path: "/timePicker",
    name: "nui-timePicker",
    component: () => import("@/demoViews/timePickerDemo.vue")
  },
  {
    path: "/upload",
    name: "nui-upload",
    component: () => import("@/demoViews/uploadDemo.vue")
  },
  {
    path: "/rate",
    name: "nui-rate",
    component: () => import("@/demoViews/rateDemo.vue")
  },
  {
    path: "/transfer",
    name: "nui-transfer",
    component: () => import("@/demoViews/transferDemo.vue")
  },
  {
    path: "/table",
    name: "nui-table",
    component: () => import("@/demoViews/tableDemo.vue")
  },
  {
    path: "/tag",
    name: "nui-tag",
    component: () => import("@/demoViews/tagDemo.vue")
  },
  {
    path: "/progress",
    name: "nui-progress",
    component: () => import("@/demoViews/progressDemo.vue")
  },
  {
    path: "/tree",
    name: "nui-tree",
    component: () => import("@/demoViews/treeDemo.vue")
  },
  {
    path: "/badge",
    name: "nui-badge",
    component: () => import("@/demoViews/badgeDemo.vue")
  },
  {
    path: "/menu",
    name: "nui-menu",
    component: () => import("@/demoViews/menuDemo.vue")
  },
  {
    path: "/tabs",
    name: "nui-tabs",
    component: () => import("@/demoViews/tabsDemo.vue")
  },
  // {
  //   path: "/dropdown",
  //   name: "nui-dropdown",
  //   component: () => import("@/demoViews/dropdownDemo.vue"),
  // },
  {
    path: "/dialog",
    name: "nui-dialog",
    component: () => import("@/demoViews/dialogDemo.vue")
  },
  {
    path: "/drawer",
    name: "nui-drawer",
    component: () => import("@/demoViews/drawerDemo.vue")
  }
]

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router
