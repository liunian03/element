<template>
    <!--    表格单元格内容过多支持换行-->
   <!-- <div>
        <p>表格单元格内容过多支持换行</p>
    </div>-->
    <div class="table-item" type="flex" justify="center">
        <el-table :data="tableData" style="width: 100%;margin-bottom: 20px;" border row-key="id">
            <el-table-column prop="date" label="日期" sortable width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" sortable width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "tab11",
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
