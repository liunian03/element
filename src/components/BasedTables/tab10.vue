<template>
    <!-- 按序排列表格 -->
    <div>
        <p>对表格进行排序，可快速查找或对比数据。</p>
        <div class="table-item" type="flex;" justify="center">
            <el-table :data="tableData" style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">
                <el-table-column prop="date" label="日期" sortable width="180">
                </el-table-column>
                <el-table-column prop="name" label="姓名" sortable width="180">
                </el-table-column>
                <el-table-column prop="address" label="地址" :formatter="formatter">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tab10",
        props:['tableData'],
            /*{
            tableData:'datas'
               /!* {
                type:Array,
                default:()=>{
                    return [];
                }
            }*!/
        },*/
        methods:{
            formatter(row, column) {
                return row.address;
            }
        }
    }
</script>

<style scoped>

</style>
