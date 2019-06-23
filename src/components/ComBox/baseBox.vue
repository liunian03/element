<template>
    <!--        普通下拉框-->
    <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "baseBox",
        data() {
            return {
                value: ''
            }
        },
        props: {
            options: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>

</style>
