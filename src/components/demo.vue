<template>
    <el-container>
        <el-aside>
            <el-menu
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-s-grid"></i>
                        <span>
                            <router-link to="/demo/BasedTables/tab1">Table表格</router-link>
                        </span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="1-1">
                        <router-link to="/demo/BasedTables/tab1">基础表格</router-link>
                    </el-menu-item>
                        <el-menu-item index="1-2">
                            <router-link to="/demo/BasedTables/tab2">带斑马纹表格</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-3">
                            <router-link to="/demo/BasedTables/tab3">带状态表格</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-4">
                            <router-link to="/demo/BasedTables/tab4">多选表格</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-5">
                            <router-link to="/demo/BasedTables/tab5">表格自定义列模板</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-6">
                            <router-link to="/demo/BasedTables/tab6">固定表头</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-7">
                            <router-link to="/demo/BasedTables/tab7">固定列</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-8">
                            <router-link to="/demo/BasedTables/tab8">固定表头和列</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-9">
                            <router-link to="/demo/BasedTables/tab9">组合(多级)表头</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-10">
                            <router-link to="/demo/BasedTables/tab10">按序排列</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-11">
                            <router-link to="/demo/BasedTables/tab11">表格换行</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-12">
                            <router-link to="/demo/EditTable/editTable">可编辑表格</router-link>
                        </el-menu-item>
                        <el-menu-item index="1-13">
                            <router-link to="/demo/TreeGrid/treeTable">树形表格</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title">
                        <i class="el-icon-c-scale-to-original"></i>
                        <span><router-link to="/demo/BacPaging/bacPaging">分页</router-link></span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="2-1">
                            <router-link to="/demo/BacPaging/bacPaging">带背景分页</router-link>
                        </el-menu-item>
                        <el-menu-item index="2-2">
                            <router-link to="/demo/BacPaging/complexPaging">复杂分页效果</router-link>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title">
                        <i class="el-icon-tickets"></i>
                        <span><router-link to="/demo/ComBox/comTreeBox">下拉弹出树形结构</router-link></span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">
                            <el-menu-item index="3-1">
                                <router-link to="/demo/ComBox/comTreeBox">下拉弹出树形结构</router-link>
                            </el-menu-item>
                            <el-menu-item index="3-2">
                                <router-link to="/demo/ComBox/baseBox">普通下拉框</router-link>
                            </el-menu-item>
                            <el-menu-item index="3-3">
                                <router-link to="/demo/ComBox/btnBox">按钮式下拉框</router-link>
                            </el-menu-item>
                            <el-menu-item index="3-4">
                                <router-link to="/demo/ComBox/multipBox">多选下拉框</router-link>
                            </el-menu-item>
                        </template>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="4" class="has-time">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span><router-link to="/demo/TimeDate/timeDate">日期和时间范围</router-link></span>
                    </template>
<!--                    <el-menu-item-group default-active="4-1">-->
<!--                        <template slot="title">-->
<!--                            <el-menu-item index="4-1">-->
<!--                                <router-link to="/demo/TimeDate/timeDate">日期和时间范围</router-link>-->
<!--                            </el-menu-item>-->
<!--                        </template>-->

<!--                    </el-menu-item-group>-->

                </el-submenu>
                <el-submenu index="5">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span>Tree树形控件</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="5-1">基础用法</el-menu-item>
                        <el-menu-item index="5-2">多选</el-menu-item>
                        <el-menu-item index="5-3">树节点的选择</el-menu-item>
                        <el-menu-item index="5-4">节点过滤</el-menu-item>
                        <el-menu-item index="5-5">可拖拽节点</el-menu-item>
                        <el-menu-item index="5-6">树结构换行</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="6">
                    <template slot="title">
                        <i class="el-icon-date"></i>
                        <span><router-link to="/demo/Dialog/dialog">对话框</router-link></span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">
                            <el-menu-item index="6-1">
                                <router-link to="/demo/Dialog/dialog">表单对话框</router-link>
                            </el-menu-item>
                            <el-menu-item index="6-2">
                                <router-link to="/demo/Dialog/dialogPinyinQuery">支持拼音缩写查询</router-link>
                            </el-menu-item>
                            <el-menu-item index="6-3">
                                <router-link to="/demo/Dialog/enterQuery">支持ENTER查询</router-link>
                            </el-menu-item>
                        </template>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-main>
            <div class="container-list">
                <h1>{{description.a}}</h1>
                <p>{{description.b}}</p>
                <div class="container-item">
                    <div v-if="tree">
                        <!--基础用法-->
                        <div v-if="show==1">
                            <p>基础的树形结构展示。</p>
                            <el-tree :data="data1" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
                        </div>
                        <!--                    多选-->
                        <div v-if="show==2">
                            <p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
                            <el-tree :data="data1" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
                        </el-tree>
                        </div>
                        <!--                    树节点的选择-->
                        <div v-if="show==3">
                            <p>树节点的选择</p>
                            <el-tree :data="data1" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps">
                            </el-tree>
                        </div>
                        <!--                    树节点过滤-->
                        <div v-if="show==4">
                            <p>通过关键字过滤树节点</p>
                            <el-input placeholder="输入关键字进行过滤" v-model="filterText"></el-input>
                            <el-tree class="filter-tree" :data="data1" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2">
                            </el-tree>
                        </div>
                        <!--                    可拖拽节点-->
                        <div v-if="show==5">
                            <p>通过 draggable 属性可让节点变为可拖拽</p>
                            <el-tree :data="data1" node-key="id"
                                     default-expand-all
                                     @node-drag-start="handleDragStart"
                                     @node-drag-enter="handleDragEnter"
                                     @node-drag-leave="handleDragLeave"
                                     @node-drag-over="handleDragOver"
                                     @node-drag-end="handleDragEnd"
                                     @node-drop="handleDrop" draggable :allow-drop="allowDrop" :allow-drag="allowDrag">
                            </el-tree>
                        </div>
                        <!--                    树结构换行-->
                        <div v-if="show==6">
                            <p>节点字数过多可以支持换行</p>
                            <el-tree :data="data9" :props="defaultProps" @node-click="handleNodeClick" class="lineFeed"></el-tree>
                        </div>
                        <div v-if="show==7"></div>
                    </div>
                    <div v-else>
                        <router-view :tableData="tableData" :options="options"/>
                    </div>
                </div>
            </div>
        </el-main>
    </el-container>

</template>

<script>
    export default {
        name: "demo",
        data(){
            return {
                title:[{
                        a:'Table表格',
                        b:'用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。'
                    },
                    {
                        a:'分页',
                        b:'当数据量过多时，使用分页分解数据'
                    },
                    {
                        a:'下拉列表框',
                        b:'当选项过多时，使用下拉菜单展示并选择内容。'
                    },
                    {
                        a:'日期时间和范围',
                        b:'在同一个选择器里选择日期和时间。'
                    },
                    {
                        a:'Tree树形控件',
                        b:'用清晰的层级结构展示信息，可展开或折叠。'
                    },
                    {
                        a:'对话框',
                        b:''
                    }
                ],
                description:{
                    a:'Table表格',
                    b:'用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。'
                },
                //表格数据
                Datas:'',
                tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                //下拉列表框数据
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                //tree树形控件
                tree:false,
                dialog:false,
                data1: [{
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }, {
                    label: '一级 3',
                    children: [{
                        label: '二级 3-1',
                        children: [{
                            label: '三级 3-1-1'
                        }]
                    }, {
                        label: '二级 3-2',
                        children: [{
                            label: '三级 3-2-1'
                        }]
                    }]
                }],
                //树结构换行
                data9: [{
                    label: '一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1',
                    children: [{
                        label: '二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }, {
                    label: '一级 2',
                    children: [{
                        label: '二级 2-1',
                        children: [{
                            label: '三级 2-1-1'
                        }]
                    }, {
                        label: '二级 2-2',
                        children: [{
                            label: '三级 2-2-1'
                        }]
                    }]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },
                filterText:'',
                show:1,
                dia:'',
                state:'',
            }
        },
        methods:{
            //导航开始
            handleOpen(key, keyPath) {
                  // console.log(key);
                  // console.log( keyPath);
                this.description=this.title[key-1];
                if(key == 5){
                    this.tree = true;
                }else{
                    this.tree = false;
                }
            },
            handleClose(key, keyPath) {
                // console.log(key, keyPath);
            },
            handleSelect(index){
                // console.log(index,indexPath);
                // let str1 = '';
                // str1 = index.slice(0,1);
                // console.log(str1);
                let str = '';
                str = index.slice(-1);
                this.show = str;

                // console.log(str)
            },
            //导航结束
            //排序排列
            formatter(row, column) {
                return row.address;
            },//排序排列结束
            //tree树形控件
            handleNodeClick(data) {
                console.log(data);
            },
            // 切换选项
            handleNodeClick(node) {
                this.valueTitle = node[this.props.label]
                this.valueId = node[this.props.value]
                this.$emit('getValue', this.valueId)
                this.defaultExpandedKey = []
            },
            // 清除选中
            clearHandle() {
                this.valueTitle = ''
                this.valueId = null
                this.defaultExpandedKey = []
                this.clearSelected()
                this.$emit('getValue', null)
            },
            /* 清空选中样式 */
            clearSelected() {
                let allNode = document.querySelectorAll('#tree-option .el-tree-node')
                allNode.forEach((element) => element.classList.remove('is-current'))
            },
            //节点过滤
            filterNode(value, data) {
                if(!value) return true;
                return data.label.indexOf(value) !== -1;
            },
            //可拖拽节点
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode, type) {
                if(dropNode.data.label === '二级 3-1') {
                    return type !== 'inner';
                } else {
                    return true;
                }
            },
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            },
            // 清除选中
            clearHandle() {
                this.valueTitle = ''
                this.valueId = null
                this.defaultExpandedKey = []
                this.clearSelected()
                this.$emit('getValue', null)
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.currentPage = 1;
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
            },
        },
        mounted() {
            this.Datas=this.tableData;
        },
        watch:{
            filterText(val){
                this.$refs.tree.filter(val);
            }
        },
    }
</script>

<style>
    .el-submenu__title a{
        color:#333;
        text-decoration: none;
    }
    .has-time .el-submenu__icon-arrow{
        display: none;
    }
    .el-container .el-aside{
        overflow:inherit;
    }
    .container-list h1{
        margin-top:0;
    }
    .el-menu-item a{
        color:#333;
        text-decoration: none;
    }
    .el-menu-item a:visited{
        color:#333;
    }
    .el-menu-item.is-active a{
        color: #409EFF;
        text-decoration: none;
    }
    .el-table {
        text-align: center;
    }
    .table-item {
        width: 100%;
        margin: 0 auto;
        margin-top: 30px;
    }
    .container-item {
        margin-bottom: 30px;
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .el-row {
        margin-bottom: 10px;
    }

    .el-col > span {
        float: left;
        margin-top: 10px;
    }

    .el-col .grid {
        float: left;
        width: 75%;
    }

    .el-table .el-input {
        display: none
    }

    .table-item .active .el-input {
        display: block;
    }

    .table-item .active .el-input + span {
        display: none;
    }

    #tableData6 .el-input {
        display: none
    }

    #tableData6 .active .el-input {
        display: block;
    }

    #tableData6 .active .el-input + span {
        display: none;
    }

    .el-select.btn .el-input--suffix .el-input__inner {
        background: #409eff;
        color: #fff;
        text-align: center;
        width: 120px;
    }

    .el-select .el-input .el-select__caret {
        color: #fff;
    }

    .container-item {
        border: 1px solid #ddd;
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 20px;
        box-sizing: border-box;
    }

    .lineFeed .el-tree-node__content {
        width: 600px;
        height: auto;
    }

    .lineFeed .el-tree-node__content .el-tree-node__label {
        white-space: initial;
    }

    .span-ellipsis {
        display: block;
        width: 500px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .el-select .el-input .el-select__caret {
        color: #dcdfe6;
    }

    .el-select.btn input::-webkit-input-placeholder {
        color: #fff !important;
    }
</style>
