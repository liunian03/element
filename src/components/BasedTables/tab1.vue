<template>
<!--    table基础表格-->
    <div>
<!--        <p>基础的表格展示用法。</p>-->
        <el-table :data="tableData.data" style="width: 100%">
            <el-table-column v-for="obj in tableData.name" :prop=obj.prop :label="obj.name" width="180">
            </el-table-column>
            <!--<el-table-column prop="date" label= "时间" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>-->
        </el-table>
    </div>

</template>

<script type="text/ecmascript-6">
    export default {
        name: "tab-1",
        data(){
            return{

            }
        },
        // created(){
        //   this.getData();
        // },
        // methods:{
          // getData(){
          //     this.url = '/api/table/list';
          //     this.$http.post(this.url,{
          //         page:1
          //     }).then((res) => {
          //         this.tableData = res.data.list;
          //         console.log(this.tableData);
          //     })
          // }
        // },
        props:['tableData'],
        // props:{
        //     tableData:{
        //         type:Array,
        //         default:() => {
        //             return [];
        //         }
        //     },
        // }
    }
</script>

<style scoped>

</style>
