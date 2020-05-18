<template>
  <div class="sidebar">
    <el-menu
      :default-active="onRouter"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      unique-opened
      router
    >
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="subItem in item.subs">
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>
              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>

export default {
  data() {
    return {
       items: [
        {
          index: 'systemHomepage',
          title: "系统首页",
        },
        {
          index: '2',
          title: "客户管理",
          subs: [
            {
              index: "allCustome",
              title: "所有客户"
            },
            {
              index: "documentaryManagement",
              title: "跟单管理"
            },
            {
              index: "orderManagement",
              title: "订单管理"
            },
            {
              index: "contractManagement",
              title: "合同管理"
            },
            {
              index: "afterSaleManagement",
              title: "售后管理"
            },
            {
              index: "feeManagement",
              title: "费用管理"
            },
            {
              index: "dataExport",
              title: "数据导出"
            },
            {
              index: "dataInport",
              title: "数据导入"
            },
            {
              index: "systemSea",
              title: "系统公海"
            },
          ]
        },
        {
          index: '3',
          title: "办公OA",
          subs: [
          // {
          //   index: "innerFile",
          //   title: "内部公文"
          // },
          // {
          //   index: "innerMessage",
          //   title: "站内短信"
          // },
          // {
          //   index: "workReport",
          //   title: "工作报告"
          // },
          // {
          //   index: "fileCabient",
          //   title: "文件柜"
          // },
          {
            index: "addressBook",
            title: "通讯录"
          },
          {
            index: "selfCalendar",
            title: "个人日历"
          },
        ]
        },
        {
          index: '4',
          title: "功能插件",
          subs: [
          {
            index: "dataAnalyze",
            title: "数据统计"
          },
          // {
          //   index: "innerChat",
          //   title: "内部聊天"
          // },
          {
            index: "Address",
            title: "通讯录"
          },
           {
            index: "plugin",
            title: "插件管理"
          },
        ]
        },
        {
          index: '5',
          title: "系统设置",
          subs: [
          {
            index: "1",
            title: "系统管理",
            subs: [
              {
                index: "allSetting",
                title: "全局设置"
              },
              {
                index: "menu",
                title: "快捷菜单"
              },
              {
                index: "dropDownBox",
                title: "下拉框"
              },
              {
                index: "productManagement",
                title: "产品管理"
              },
              {
                index: "regionManagement",
                title: "地区管理"
              },
              {
                index: "customeField",
                title: "自定义字段"
              },
              {
                index: "language",
                title: "语言包"
              },
              {
                index: "databaseManagement",
                title: "数据库管理"
              }
            ]
          },
          {
            index: "2",
            title: "用户管理",
            subs: [
              {
                index: "employeeManagement",
                title: "员工管理"
              },
              {
                index: "departmentSetting",
                title: "部门设置"
              },
              {
                index: "roleManagement",
                title: "角色管理"
              }
            ]
          },
          {
            index: "3",
            title: "日志管理",
            subs: [
              {
              index: "log",
              title: "登录日志"
              },
              {
                index: "actionLog",
                title: "操作记录"
              }
            ]
          },
          ]
        }
      ] 
      };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    //当前激活的
    onRouter() {
      return this.$route.path.replace("/", "");
    }
  }
};
</script>

<style>
.sidebar {
  position: absolute;
  top: 60px;
  bottom: 0;
  left: 0;
  width: 230px;
  overflow: scroll;
}
.sidebar::-webkit-scrollbar {
  display: none;
}
.el-menu-vertical-demo {
  height: 100%;
  text-align: center;
  font-size: 15px;
}
</style>