<template>
    <!--        下拉框多选-->
    <el-select v-model="value5" multiple placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "multipBox",
        data() {
            return {
                value5: ''
            }
        },
        props:{
            options:{
                type:Array,
                default:()=>{
                    return [];
                }
            }
        }
    }
</script>

<style scoped>

</style>
