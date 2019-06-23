<template>
    <!--    按钮式触发下拉菜单-->
    <el-select class="btn" v-model="value3" placeholder="专家状态">
        <el-option v-for="item in status" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "btnBox",
        data() {
            return {
                value3: '',
                status: [{
                    value: '选项1',
                    label: '编制'
                }, {
                    value: '选项2',
                    label: '审核中'
                }, {
                    value: '选项3',
                    label: '审核驳回'
                }, {
                    value: '选项4',
                    label: '正常'
                }, {
                    value: '选项5',
                    label: '已退库'
                }],
            }
        },
    }
</script>

<style scoped>

</style>
