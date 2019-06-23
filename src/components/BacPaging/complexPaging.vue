<template>
    <!--    复杂分页-->
    <div class="block">
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :curr-page.sync="currentPage"
            layout="prev, pager, next,sizes,total,jumper"
            :page-size="pagesize"
            :page-sizes='[5,10,15,20]'
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
    export default {
        name: "complexPaging",
        data() {
            return {
                // total:1000,//总条数
                pagesize: 5,//每页的数据条数
                currentPage: 1,//当前页码
            }
        },
        methods: {
            //分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.currentPage = 1;
                this.pagesize = val;
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.currentPage = val;
            },
        },
        //接收从父组件传过来的值
        // props:{
        //     total:{
        //         type:String,
        //         require:true
        //     },
        // }
        // props:['total']
    }
</script>

<style scoped>

</style>
