<template>
<!--     带斑马纹表格   -->
    <div>
<!--        使用带斑马纹的表格，可以更容易区分出不同行的数据。-->
        <el-table :data="this.arr.tableData" stripe style="width: 100%">
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
        name: "tab2",
        // props: {
        //     tableData: {
        //         type: Array,
        //         default: () => {
        //             return [];
        //         }
        //     }
        // }
        data() {
            return {
                // tab:require('../../mock/tab').tableData
                tableData: [],
                url: '',
            }
        },
        created() {
            this.getData();
        },
        methods: {
            getData() {
                // 第一种写法
                // this.$http({
                //         method:'get',
                //         url:'../../../static/tab.json',
                //         dataType:'json',
                //
                //     }).then((res) => {
                //         console.log('请求成功咯')
                // })
                //第二种写法
                this.url = '../../../static/tab.json',
                    this.$http.get(this.url, {}).then((res) => {
                        let arr = [];//定义一个变量来接收获取到的数据
                        console.log(res.data.tableData);
                        console.log('请求成功')
                        // this.tableData = res.data.tableData;
                        arr = res.data;
                        console.log(arr)
                    })

                // props: {
                //     tableData: {
                //         type: Array,
                //     default:
                //         () => {
                //             return [];
                //         }
                //     }
                // }
            }
        }
    }
</script>

<style scoped>

</style>
