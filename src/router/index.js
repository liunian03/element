import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/components/demo'
import user from "../components/UserMana2"
import useres from "../components/UserMana"
import err from "../components/404"
import message from "../components/message"

// table
import tab1 from '@/components/BasedTables/tab1'
import tab2 from '@/components/BasedTables/tab2'
import tab3 from '@/components/BasedTables/tab3'
import tab4 from '@/components/BasedTables/tab4'
import tab5 from '@/components/BasedTables/tab5'
import tab6 from '@/components/BasedTables/tab6'
import tab7 from '@/components/BasedTables/tab7'
import tab8 from '@/components/BasedTables/tab8'
import tab9 from '@/components/BasedTables/tab9'
import tab10 from '@/components/BasedTables/tab10'
import tab11 from '@/components/BasedTables/tab11'
import editTable from '@/components/EditTable/editTable'
import treeTable from '@/components/TreeGrid/treeTable'
//分页
import bac from '@/components/BacPaging/bacPaging'
import bacCom from '@/components/BacPaging/complexPaging'
//下拉列表框
import comTree from '@/components/ComBox/comTreeBox'
import btn from '@/components/ComBox/btnBox'
import base from '@/components/ComBox/baseBox'
import multip from '@/components/ComBox/multipBox'
//日期和时间范围
import date from '@/components/TimeDate/timeDate'
//对话框
import dialog from '@/components/Dialog/dialog'
import pinyin from '@/components/Dialog/dialogPinyinQuery'
import enter from '@/components/Dialog/enterQuery'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'demo'
        },
        {
            path: '/demo',
            name: 'demo',
            component: demo,
            children: [
                {
                    path: '/',
                    redirect: '/demo/BasedTables/tab1'
                },
                {
                    path: '/demo/BasedTables/tab1',
                    name: 'tab1',
                    component: tab1
                },
                {
                    path: '/demo/BasedTables/tab2',
                    name: 'tab2',
                    component: tab2
                },
                {
                    path: '/demo/BasedTables/tab3',
                    name: 'tab3',
                    component: tab3
                },
                {
                    path: '/demo/BasedTables/tab4',
                    name: 'tab4',
                    component: tab4
                },
                {
                    path: '/demo/BasedTables/tab5',
                    name: 'tab5',
                    component: tab5
                },
                {
                    path: '/demo/BasedTables/tab6',
                    name: 'tab6',
                    component: tab6
                },
                {
                    path: '/demo/BasedTables/tab7',
                    name: 'tab7',
                    component: tab7
                },
                {
                    path: '/demo/BasedTables/tab8',
                    name: 'tab8',
                    component: tab8
                },
                {
                    path: '/demo/BasedTables/tab9',
                    name: 'tab9',
                    component: tab9
                },
                {
                    path: '/demo/BasedTables/tab10',
                    name: 'tab10',
                    component: tab10
                },
                {
                    path: '/demo/BasedTables/tab11',
                    name: 'tab11',
                    component: tab11
                },
                {
                    path: '/demo/EditTable/editTable',
                    name: 'editTable',
                    component: editTable
                },
                {
                    path: '/demo/TreeGrid/treeTable',
                    name: 'treeTable',
                    component: treeTable
                },
                {
                    path: '/demo/BacPaging/bacPaging',
                    name: 'bacPaging',
                    component: bac
                },
                {
                    path: '/demo/BacPaging/complexPaging',
                    name: 'complexPaging',
                    component: bacCom
                },
                {
                    path: '/demo/ComBox/multipBox',
                    name: 'multipBox',
                    component: multip
                },
                {
                    path: '/demo/ComBox/baseBox',
                    name: 'baseBox',
                    component: base
                },
                {
                    path: '/demo/ComBox/btnBox',
                    name: 'btnBox',
                    component: btn
                },
                {
                    path: '/demo/ComBox/comTreeBox',
                    name: 'comTreeBox',
                    component: comTree
                },
                {
                    path: '/demo/TimeDate/timeDate',
                    name: 'timeDate',
                    component: date
                },
                {
                    path: '/demo/Dialog/dialog',
                    name: 'dialog',
                    component: dialog
                },
                {
                    path: '/demo/Dialog/dialogPinyinQuery',
                    name: 'dialogPinyinQuery',
                    component: pinyin
                },
                {
                    path: '/demo/Dialog/enterQuery',
                    name: 'enterQuery',
                    component: enter
                },
            ],
        },
        {
            path: '/Hello',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path:'/user',
            name:'UserMana2',
            component:user,
        },
        {
            path:'/useres',
            name:'UserMana',
            component:useres,
        },
        {
            path:'/message',
            name:'message',
            component:message,
        },
        {
            path:'/404',
            name:'404',
            component:err
        },
        // {
        //     path:'*',
        //     redirect:'/404'
        // }
    ]
})
