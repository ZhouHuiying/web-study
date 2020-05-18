import Vue from 'vue';
import router from 'vue-router';

Vue.use(router);

export default new router({
    routes: [
        {
            path: '/tableTest',
            component: () =>import('../Page/tableTest.vue')
        },
        {
            path: '/test',
            component: () =>import('../Page/test.vue')
        },
        {
            path: '/login',
            component: () =>import('../Page/login.vue')
        },
        {
            path: '/',
            redirect: '/login'
        },
        
        {
            path: '/home',
            component: () =>import('../components/home.vue'),
            children: [
                {
                    path: '/systemHomepage',
                    name: '系统首页',
                    component: () =>import('../Page/systemHomepage.vue'),
                },
                {
                    path: '/allCustome',
                    name: '所有客户',
                    component: () =>import('../Page/customManagement/allCustome.vue'),
                },
                {
                    path: '/documentaryManagement',
                    name: '跟单管理',
                    component: () =>import('../Page/customManagement/documentaryManagement.vue'),
                },
                {
                    path: '/orderManagement',
                    name: '订单管理',
                    component: () =>import('../Page/customManagement/orderManagement.vue'),
                },
                {
                    path: '/contractManagement',
                    name: '合同管理',
                    component: () =>import('../Page/customManagement/contractManagement.vue'),
                },
                {
                    path: '/afterSaleManagement',
                    name: '售后管理',
                    component: () =>import('../Page/customManagement/afterSaleManagement.vue'),
                },
                {
                    path: '/feeManagement',
                    name: '费用管理',
                    component: () =>import('../Page/customManagement/feeManagement.vue'),
                },
                {
                    path: '/dataExport',
                    name: '数据导出',
                    component: () =>import('../Page/customManagement/dataExport.vue'),
                },
                {
                    path: '/dataInport',
                    name: '数据导入',
                    component: () =>import('../Page/customManagement/dataInport.vue'),
                },
                {
                    path: '/systemSea',
                    name: '系统公海',
                    component: () =>import('../Page/customManagement/systemSea.vue'),
                },
                {
                    path: '/innerFile',
                    name: '内部公文',
                    component: () =>import('../Page/officeOA/innerFile.vue'),
                },
                {
                    path: '/innerMessage',
                    name: '站内短信',
                    component: () =>import('../Page/officeOA/innerMessage.vue'),
                },
                {
                    path: '/workReport',
                    name: '工作报告',
                    component: () =>import('../Page/officeOA/workReport.vue'),
                },
                {
                    path: '/fileCabinet',
                    name: '文件柜',
                    component: () =>import('../Page/officeOA/fileCabinet.vue'),
                },
                {
                    path: '/addressBook',
                    name: '通讯录',
                    component: () =>import('../Page/officeOA/addressBook.vue'),
                },
                {
                    path: '/selfCalendar',
                    name: '个人日历',
                    component: () =>import('../Page/officeOA/selfCalendar.vue'),
                },
                {
                    path: '/dataAnalyze',
                    name: '数据统计',
                    component: () =>import('../Page/functionPlugin/dataAnalyze.vue'),
                },
                {
                    path: '/allSetting',
                    name: '全局设置',
                    component: () =>import('../Page/systemSetting/allSetting.vue'),
                },
                {
                    path: '/employeeManagement',
                    name: '员工管理',
                    component: () =>import('../Page/systemSetting/employeeManagement.vue'),
                },
                {
                    path: '/Address',
                    name: '通讯录',
                    component: () =>import('../Page/functionPlugin/Address.vue'),
                },
                {
                    path: '/pluginManage',
                    name: '员工管理',
                    component: () =>import('../Page/functionPlugin/pluginManage.vue'),
                },
                
            ]
        },
        {
            path: '/subHome',
            component: () =>import('../components/subHome.vue'),
            children: [
                {
                    path: '/lookDetail',
                    name: '查看',
                    component: () =>import('../Page/subPage/lookDetail.vue'),
                },
                {
                    path: '/goAlter',
                    name: '查看',
                    component: () =>import('../Page/subPage/goAlter.vue'),
                }
            ]
        }
    ]
})