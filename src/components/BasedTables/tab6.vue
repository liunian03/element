<template>
<!--    固定表头-->
    <div>
        <p>纵向内容过多时，可选择固定表头。</p>
        <el-table :data="tableData" height="250" border style="width: 100%">
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
        name: "tab6",
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
