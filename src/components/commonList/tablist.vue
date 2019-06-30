<template>
    <div>
        <div>
            <p>基础表格的展示和用法</p>
            <v-tab1 :tableData="arrList"></v-tab1>
        </div>
        <div>
            <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
            <v-tab3></v-tab3>
        </div>
    </div>
</template>

<script>
    import tab1 from '../BasedTables/tab1'
    import tab3 from '../BasedTables/tab3'

    export default {
        name: "tablist",
        data() {
            return {
                arrList: {
                    data:[],
                    name:[{
                        name:"时间",
                        prop:"date"
                    },{
                        name:"姓名",
                        prop:"name"
                    },{
                        name:"地址",
                        prop:"address"
                    }]
                },
                url: ''
            }
        },
        components: {
            'v-tab1': tab1,
            'v-tab3': tab3
        },
        methods: {
            getData() {
                this.url = '/api/table/list';
                this.$http.post(this.url, {
                    page: 1
                }).then((res) => {
                    this.arrList.data = res.data.list;
                    console.log(this.arrList);
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
