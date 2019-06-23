<template>
    <!-- 组合表头 -->
    <div>
        <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
        <div class="table-item" type="flex;" justify="center">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="300" align="center">
                </el-table-column>
                <el-table-column label="配送信息" align="center">
                    <el-table-column prop="name" label="姓名" width="200">
                    </el-table-column>
                    <el-table-column label="地址" align="center">
                        <el-table-column prop="province" label="省份" width="200">
                        </el-table-column>
                        <el-table-column prop="city" label="市区" width="200">
                        </el-table-column>
                        <el-table-column prop="address" label="地址" width="300">
                        </el-table-column>
                        <el-table-column prop="zip" label="邮编" width="150">
                        </el-table-column>
                    </el-table-column>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tab9",
        data() {
            return {}
        },
        props: {
            tableData: {
                type: Array,
                default: () => {
                    return [];
                }
            },
        }
    }
</script>

<style scoped>

</style>
