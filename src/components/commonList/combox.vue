<template>
    <div>
        <p>普通下拉框</p>
        <v-base></v-base>
        <p>基础表格2</p>
        <v-tab1 :tableData="listData"></v-tab1>
    </div>
</template>

<script>
    import basebox from '../ComBox/baseBox'
    import tab1 from '../BasedTables/tab1'
    export default {
        name: "combox",
        data(){
            return{
                listData: {
                    data: [],
                    name: [{
                        name: "编号",
                        prop: "date"
                    }, {
                        name: "信息",
                        prop: "name"
                    }, {
                        name: "部门",
                        prop: "address"
                    }]
                }
            }
        },
        components:{
            'v-base':basebox,
            'v-tab1':tab1
        },
        methods: {
            getData() {
                this.url = '/api/table/list';
                this.$http.post(this.url, {
                    page: 1
                }).then((res) => {
                    this.listData.data= res.data.list;
                    console.log(this.listData);
                })
            }
        },
        mounted() {
            this.getData()
        }
    }
</script>

<style scoped>

</style>
