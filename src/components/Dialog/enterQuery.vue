<template>
    <el-autocomplete
        class="inline-input"
        v-model="state"
        :fetch-suggestions="querySearch"
        placeholder="请输入内容"
        @select="handleSelect">
    </el-autocomplete>
</template>

<script>
    export default {
        name: "enterQuery",
        data(){
            return {
                state:'',
                restaurants:[]
            }
        },
        methods:{
            loadAll() {
                return [{
                    "value": "潘老板炸鸡（雨花西路店）",
                    "address": "长宁区新渔路144号"
                }, {
                    "value": "潘老板炸鸡分店（仙霞路）",
                    "address": "上海市长宁区淞虹路661号"
                }, {
                    "value": "新旺角茶餐厅",
                    "address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
                }, {
                    "value": "潘老板炸鸡(天山西路店)",
                    "address": "天山西路438号"
                }, {
                    "value": "胖仙女纸杯蛋糕（上海凌空店）",
                    "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
                }, {
                    "value": "贡茶",
                    "address": "上海市长宁区金钟路633号"
                }];
            },
            //支持enter查询
            querySearch(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            querySearchAsync(queryString, cb) {
                var restaurants = this.restaurants;
                var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
                // 调用 callback 返回建议列表的数据
                cb(results);
            },
            createFilter(queryString) {
                return(restaurant) => {
                    return(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
                }
            },
            handleSelect(item) {
                console.log(item);
            },
        },
        mounted() {
            this.restaurants = this.loadAll();
        }
    }
</script>

<style scoped>

</style>
