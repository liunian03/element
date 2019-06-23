<template>
    <div>
        <el-button @click='open1'>成功</el-button>
        <el-button @click='open2'>错误</el-button>
        <input type="text" @keyup="checked($event)" v-model="value1">
        <input type="text" v-special v-model="value">
    </div>
</template>

<script>
    import {ok1,error,check} from '../common/InfoMessage.js'
    export default {
        name: "test1",
        data(){
            return {
                value:'miss',
                value1:''
            }
        },
        methods: {
            open1() {
                ok1('成功公里')
            },
            open2() {
                error('失败了')
            },
            checked($event){
                console.log(121)
                this.value = check($event,this.value);
            }
            // check(e){
            //     console.log(e)
            //     if(e.keyCode == 56 || e.keyCode == 106){
            //         this.value = this.value.substring(0,this.value.length-1);
            //     }
            // }


        },

    }

</script>

<style scoped>

</style>
