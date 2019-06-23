<template>
    <!--        下拉弹出树形结构-->
    <el-select v-model="value10" multiple filterable allow-create default-first-option placeholder="请选择文章标签">
        <el-option :value="value10">
            <el-tree show-checkbox @check-change="fn" id="tree-option" ref="selectTree" :data="options1" :props="props"
                     :node-key="props.value"></el-tree>
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "comBox",
        //下拉菜单弹出树形结构
        //name: "el-tree-select",
        data() {
            return {
                value10: [],
            }
        },
        props: {
            /* 配置项 */
            props: {
                type: Object,
                default: () => {
                    return {
                        value: 'id', // ID字段名
                        label: 'label', // 显示名称
                        children: 'children' // 子级字段名
                    }
                }
            },
            /* 选项列表数据(树形结构的对象数组) */
            options1: {
                type: Array,
                default: () => {
                    return [{
                        label: '蔬菜',
                        children: [{
                            label: '种类',
                            children: [{
                                label: '叶子类'
                            }]
                        }]
                    },
                        {
                            label: '水果',
                            children: [{
                                label: '圆的',
                                children: [{
                                    label: '苹果'
                                }]
                            }]
                        },
                        {
                            label: '省',
                            children: [{
                                label: '南京市',
                                children: [{
                                    label: '雨花台区',
                                }, {
                                    label: '六合区'
                                }]
                            }, {
                                label: '徐州市',
                                children: [{
                                    label: '沛县'
                                }]
                            }]
                        }
                    ]
                }
            },
            filterText: '',
        },
        methods: {
            fn() {
                var checkedNodes = this.$refs.selectTree.getCheckedNodes(); //获取选中的值
                console.log(checkedNodes)
                console.log(this.value10)
                this.value10 = [];
                if (checkedNodes.length > 0) {
                    for (var i = 0; i < checkedNodes.length; i++) {
                        console.log(checkedNodes[i].label)
                        this.value10.push(checkedNodes[i].label)
                    }
                    console.log(this.value10)
                }
            },
        },
        watch:{
            value() {
                this.valueId = this.value
            },
        },
    }
</script>

<style scoped>

</style>
