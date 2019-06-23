<template>
    <!--    固定表头和列-->
    <div>
        <p>横纵内容过多时，可选择固定列和表头。</p>
        <el-table :data="tableData" style="width: 100%" height="250">
            <el-table-column fixed prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="province" label="省份" width="120">
            </el-table-column>
            <el-table-column prop="city" label="市区" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="300">
            </el-table-column>
            <el-table-column prop="zip" label="邮编" width="120">
            </el-table-column>
        </el-table>
    </div>

</template>

<script>
    export default {
        name: "tab8",
        props: {
            tableData: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>

</style>
