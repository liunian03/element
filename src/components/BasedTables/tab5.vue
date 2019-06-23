<template>
<!--    表格自定义列模板-->
    <div>
        <p>自定义列的显示内容，可组合其他组件使用。</p>
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="日期" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" width="180">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <p>姓名: {{ scope.row.name }}</p>
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                            <el-tag size="medium">{{ scope.row.name }}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
        </el-table>
    </div>


</template>

<script>
    export default {
        name: "tab5",
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
