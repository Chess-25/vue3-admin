export const menuList = [
  {
    id: "11", 
    label: "首页", 
    icon: 'Monitor',
    sort: 1,
    type: 1, 
    path: '/main/home',
    children: [ 
      // { id: "11", children: undefined, label: "首页", type: 2 ,icon: '',path: '/main/home'}
    ],
  },
  { 
    id: "1", 
    label: "系统总览", 
    icon: 'Monitor',
    sort: 1,
    type: 1, 
    path: '/main/analysis',
    children: [
      { id: "1-1", children: undefined, label: "核心技术", type: 2 ,icon: '',path: '/main/analysis/overview',},
      { id: "1-2", children: undefined, label: "商品统计", type: 2 ,icon: '',path: '/main/analysis/dashboard',},
    ], 
  },
  { 
    id: "2", 
    label: "系统管理", 
    icon: 'Setting',
    sort: 2,
    type: 1, 
    path: "/main/system",
    children: [
      { id: "2-1", children: undefined, label: "用户管理", type: 2 ,icon: '',path: "/main/system/user"},
      { id: "2-2", children: undefined, label: "部门管理", type: 2 ,icon: '',path: "/main/system/department"},
      { id: "2-3", children: undefined, label: "菜单管理", type: 2 ,icon: '',path: "/main/system/menu"},
      { id: "2-4", children: undefined, label: "角色管理", type: 2 ,icon: '',path: "/main/system/role"},
    ], 
  },
  {
    id: "3",
    label: "商品中心",
    icon: 'Goods',
    sort: 3,
    type: 1,
    path: "/main/product",
    children: [
      { id: "3-1", children: undefined, label: "商品类别", type: 2 ,icon: '',path: "/main/product/category"},
      { id: "3-2", children: undefined, label: "商品信息", type: 2 ,icon: '',path: "/main/product/goods"},
    ],
  },
  {
    id: "4",
    label: "随便聊聊",
    icon: 'ChatDotRound',
    sort: 4,
    type: 1,
    path: "/main/story",
    children: [
      { id: "4-1", children: undefined, label: "你的故事", type: 2 ,icon: '',path: "/main/story/chat"},
      { id: "4-2", children: undefined, label: "故事列表", type: 2 ,icon: '',path: "/main/story/list"},
    ],
  },
]