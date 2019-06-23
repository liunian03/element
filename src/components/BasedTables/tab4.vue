<template>
<!--    多选表格-->
    <div>
        <p>选择多行数据时使用 Checkbox</p>
        <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip>
            </el-table-column>
        </el-table>
    </div>


</template>

<script>
    export default {
        name: "tab4",
        methods:{
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
        },
        props:{
            tableData:{
                type:Array,
                default:()=>{
                    return [];
                }
            }
        }
    }
</script>

<style scoped>

</style>
