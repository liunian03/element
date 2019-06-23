<template>
<!--    带状态表格-->
    <div>
        <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
        <el-table :data="tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "tab3",
        props:{
            tableData:{
                type:Array,
                default:()=>{
                    return [];
                }
            }
        },
        methods:{
            tableRowClassName({
                                  row,
                                  rowIndex
                              }) {
                if(rowIndex === 1) {
                    return 'warning-row';
                } else if(rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            },
        }
    }
</script>

<style scoped>

</style>
