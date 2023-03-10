import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Layout from '@/layout/index.vue'

const {
  GithubOutlined, TableOutlined, HomeOutlined, BlockOutlined, ExportOutlined, FireOutlined,
  DotChartOutlined, BarChartOutlined, LineChartOutlined, PieChartOutlined, BranchesOutlined
} = useIcon([
  'GithubOutlined', 'TableOutlined', 'HomeOutlined', 'BlockOutlined', 'ExportOutlined', 'FireOutlined',
  'DotChartOutlined', 'BarChartOutlined', 'LineChartOutlined', 'PieChartOutlined', 'BranchesOutlined',
])

export const dashboardRoute: RouteRecordRaw = {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  meta: { breadcrumb: false },
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard.vue'),
      meta: { title: '首页', icon: HomeOutlined, searchKeywords: ['dashboard', 'home', 'shouye', 'sy'] }
    }
  ]
}

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: { hidden: true, title: '页面跳转', hiddenTab: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect.vue')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/404.vue'),
    meta: { hidden: true, title: '404' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
    meta: { hidden: true },
  }
]

export const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login.vue'),
    meta: { hidden: true, title: '登录' }
  },
  // {
  //   path: '/layout-funcs',
  //   name: 'LayoutFuncs',
  //   component: Layout,
  //   redirect: { name: 'layoutFuncs' },
  //   meta: { breadcrumb: false },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'layoutFuncs',
  //       component: () => import('@/views/layoutFuncs.vue'),
  //       meta: { title: '布局功能函数', icon: FireOutlined, keepAlive: true, searchKeywords: ['bujugongnenghanshu', 'bjgnhs'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/modal',
  //   name: 'Modal',
  //   component: Layout,
  //   redirect: { name: 'modal' },
  //   meta: { breadcrumb: false },
  //   children: [
  //     {
  //       path: 'index',
  //       name: 'modal',
  //       component: () => import('@/views/modal.vue'),
  //       meta: { title: '模态框1', icon: BlockOutlined, keepAlive: true, searchKeywords: ['mutaikuang', 'mtk'] }
  //     }
  //   ]
  // },
  {
    path: '/chart',
    name: 'Chart',
    component: Layout,
    redirect: { name: 'dynamicRoute' },
    meta: { title: '详情', icon: DotChartOutlined },
    children: [
      {
        path: 'systemGraph',
        name: 'systemGraph',
        component: () => import('@/views/charts/systemGraph.vue'),
        meta: { title: '系统概览', icon: BranchesOutlined, searchKeywords: ['systemGraph', 'xitong', 'bt'] }
      },
      {
        path: 'pie',
        name: 'pie',
        component: () => import('@/views/charts/pie.vue'),
        meta: { title: '饼图', icon: PieChartOutlined, searchKeywords: ['pie', 'bingtu', 'bt'] }
      },
      {
        path: 'line',
        name: 'line',
        component: () => import('@/views/charts/line.vue'),
        meta: { title: '折线图', icon: LineChartOutlined, searchKeywords: ['line', 'zhexiantu', 'zxt'] }
      },
      {
        path: 'keyboard',
        name: 'keyboard',
        component: () => import('@/views/charts/keyboard.vue'),
        meta: { title: '键盘', icon: BarChartOutlined, searchKeywords: ['keyboard', 'jianpan', 'jp'] }
      },
    ]
  },
  {
    path: '/table',
    name: 'Table',
    component: Layout,
    redirect: { name: 'tableList' },
    meta: { title: '表格导出', icon: TableOutlined },
    children: [
      {
        path: 'index',
        name: 'tableList',
        component: () => import('@/views/table/tableList.vue'),
        meta: { title: '表格列表', icon: TableOutlined, keepAlive: true, searchKeywords: ['biaogeliebiao', 'bglb'] }
      },
      {
        path: 'export',
        name: 'tableExport',
        component: () => import('@/views/table/tableExport.vue'),
        meta: { title: '表格导出', icon: ExportOutlined, keepAlive: true, searchKeywords: ['biaogedaochu', 'bgdc'] }
      }
    ]
  },
  // {
  //   path: '/route',
  //   name: 'Route',
  //   component: Layout,
  //   redirect: { name: 'dynamicRoute' },
  //   meta: { title: '路由管理', icon: FireOutlined },
  //   children: [
  //     {
  //       path: 'dynamicRoute',
  //       name: 'dynamicRoute',
  //       component: () => import('@/views/route/dynamicRoute.vue'),
  //       meta: { title: '动态路由', icon: FireOutlined, keepAlive: true, searchKeywords: ['dongtailuyou', 'dtlu'] }
  //     },
  //     {
  //       path: 'dynamicMenu',
  //       name: 'dynamicMenu',
  //       component: () => import('@/views/route/dynamicMenu.vue'),
  //       meta: { title: '动态菜单', icon: FireOutlined, keepAlive: true, searchKeywords: ['dongtaicaidan', 'dtcd'] }
  //     }
  //   ]
  // },
  // {
  //   path: '/chart',
  //   name: 'Chart',
  //   component: Layout,
  //   redirect: { name: 'dynamicRoute' },
  //   meta: { title: '图表', icon: DotChartOutlined },
  //   children: [
  //     {
  //       path: 'systemGraph',
  //       name: 'systemGraph',
  //       component: () => import('@/views/charts/systemGraph.vue'),
  //       meta: { title: '系统概览', icon: BranchesOutlined, searchKeywords: ['systemGraph', 'xitong', 'bt'] }
  //     },
  //     {
  //       path: 'pie',
  //       name: 'pie',
  //       component: () => import('@/views/charts/pie.vue'),
  //       meta: { title: '饼图', icon: PieChartOutlined, searchKeywords: ['pie', 'bingtu', 'bt'] }
  //     },
  //     {
  //       path: 'line',
  //       name: 'line',
  //       component: () => import('@/views/charts/line.vue'),
  //       meta: { title: '折线图', icon: LineChartOutlined, searchKeywords: ['line', 'zhexiantu', 'zxt'] }
  //     },
  //     {
  //       path: 'keyboard',
  //       name: 'keyboard',
  //       component: () => import('@/views/charts/keyboard.vue'),
  //       meta: { title: '键盘', icon: BarChartOutlined, searchKeywords: ['keyboard', 'jianpan', 'jp'] }
  //     },
  //   ]
  // },
  {
    path: '/https://github.com/marshcoldboy/myDIspatcher',
    component: undefined,
    redirect: 'https://github.com/marshcoldboy/myDIspatcher',
    meta: { title: 'github', icon: GithubOutlined, external: true }
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [dashboardRoute, ...routes, ...constantRoutes]
})

export default router
