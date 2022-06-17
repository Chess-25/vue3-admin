import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
      count: 0 ,
      menuList: [
        {
          id: "11",
          key: "11", 
          label: "首页", 
          icon: 'Monitor',
          sort: 1,
          type: 1, 
          url: '/main/home',
          children: [ 
            { id: "11", children: undefined, label: "首页", type: 2 ,icon: '',url: '/main/home'}
          ],
        },
        { 
          id: "1", 
          key: "1",
          label: "系统总览", 
          icon: 'Monitor',
          sort: 1,
          type: 1, 
          url: '/main/analysis',
          children: [
            { id: "1-1",key: "1-1", children: undefined, label: "核心技术", type: 2 ,icon: '',url: '/main/analysis/overview',},
            { id: "1-2",key: "1-2", children: undefined, label: "商品统计", type: 2 ,icon: '',url: '/main/analysis/dashboard',},
          ], 
        },
        { 
          id: "2", 
          key: "2",
          label: "系统管理", 
          icon: 'Setting',
          sort: 2,
          type: 1, 
          url: "/main/system",
          children: [
            { id: "2-1",key: "2-1", children: undefined, label: "用户管理", type: 2 ,icon: '',url: "/main/system/user"},
            { id: "2-2",key: "2-2", children: undefined, label: "部门管理", type: 2 ,icon: '',url: "/main/system/department"},
            { id: "2-3",key: "2-3", children: undefined, label: "菜单管理", type: 2 ,icon: '',url: "/main/system/menu"},
            { id: "2-4",key: "2-4", children: undefined, label: "角色管理", type: 2 ,icon: '',url: "/main/system/role"},
          ], 
        },
        {
          id: "3",
          key: "3",
          label: "商品中心",
          icon: 'Goods',
          sort: 3,
          type: 1,
          url: "/main/product",
          children: [
            { id: "3-1",key: "3-1", children: undefined, label: "商品类别", type: 2 ,icon: '',url: "/main/product/category"},
            { id: "3-2",key: "3-2", children: undefined, label: "商品信息", type: 2 ,icon: '',url: "/main/product/goods"},
          ],
        },
        {
          id: "4",
          key: "4",
          label: "随便聊聊",
          icon: 'ChatDotRound',
          sort: 4,
          type: 1,
          url: "/main/story",
          children: [
            { id: "4-1",key: "4-1", children: undefined, label: "你的故事", type: 2 ,icon: '',url: "/main/story/chat"},
            { id: "4-2",key: "4-1", children: undefined, label: "故事列表", type: 2 ,icon: '',url: "/main/story/list"},
          ],
        },
      ],
      tagsList: [
        {name: '首页',id:'11', url: '/main/home',},
        // {name: '核心技术',id:'1-1', url: '/main/analysis/overview'},
        // {name: '商品统计',id:'1-2', url: '/main/analysis/dashboard'},
        // {name: '用户管理',id:'2-1', url: '/main/system/user'},
        // {name: '部门管理',id:'2-2', url: '/main/system/department'},
        // {name: '菜单管理',id:'2-3', url: '/main/system/menu'},
        // {name: '角色管理',id:'2-4', url: '/main/system/role'},
      ],
      bread:[
        {id:'11'},{id:'11'}
      ]
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    change(){
      
    }
  },
})