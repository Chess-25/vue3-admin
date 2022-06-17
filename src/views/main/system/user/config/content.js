
export const contentConfig = {
  type:'user',
  title: "用户",
  createText: "新建用户",
  module: "systemModule",
  propList: [
    { title: "操作", prop: 'operate',minwidth: 100,fixed: 'left',align: 'center',icon:'',type:'operate',
      operateBtns:[
        {type:'primary',text:'详情',icon:'View',clickFn:'detail'},
        {type:'danger',text:'删除',icon:'Delete',clickFn:'delete'},
      ]
    },
    { title: "用户头像", minwidth: 70,prop: 'img',align: 'center',key: 'img',type:'img'},
    { title: "id", minwidth: 70 ,prop: 'iid',key: 'iid',align: 'center',ellipsis: true,type:'text'},
    { title: "用户名", minwidth: 100 ,prop: 'username',key: 'username',align: 'center',ellipsis: true,search:'input',type:'text'},
    { title: "真实姓名", minwidth: 80 ,prop: 'realname',key: 'realname',align: 'center',ellipsis: true,type:'text'},
    { title: "部门", minwidth: 70 ,prop: 'departmentId',key: 'departmentId',align: 'center',ellipsis: true,type:'text'},
    { title: "岗位", minwidth: 70 ,prop: 'roleId',key: 'roleId',align: 'center',ellipsis: true,type:'text'},
    { title: "手机号码", minwidth: 100 ,prop: 'cellphone',key:'cellphone',ellipsis: true,type:'text'},
    { title: "状态", width: 70, prop:'status',align: 'center',key:'status',ellipsis: true,search:'filter',type:'text',
      filters: [
        {
          text: '全部',
          value: '全部',
        },
        {
          text: '启用',
          value: '启用',
        },
        {
          text: '禁用',
          value: '禁用',
        },
      ],
      // onFilter: (value, record) => record.status.indexOf(value) === 0,
      // filterSearch: true,
    },
    { title: "创建时间",minwidth: 150,prop:'createAt',key:'createAt',ellipsis: true,type:'text',
      sorter: {compare: (a, b) => a.createAt - b.createAt ? 1 : -1,multiple: 1,}
    },
    { title: "更新时间",minwidth: 150,prop:'updateAt',key:'updateAt',ellipsis: true,type:'text',
      sorter: {compare: (a, b) => a.updateAt - b.updateAt ? 1 : -1,multiple: 1,}
    },
  ],
  operateList:[
    {
      type:'primary',
      text:'搜索',
      icon:'Search',
      clickFn:'search',
    },
    {
      type:'success',
      text:'导出',
      icon:'Download',
      clickFn:'downLoad',
    },
    {
      type:'warning',
      text:'重置',
      icon:'Refresh',
      clickFn:'reset',
    },
    {
      type:'primary',
      text:'添加',
      icon:'CirclePlus',
      clickFn:'add',
    },
    {
      type:'danger',
      text:'删除',
      icon:'Delete',
      clickFn:'batch_delete',
    },
  ],
  showIndexColumn: true,
  showSelectColumn: false
}
