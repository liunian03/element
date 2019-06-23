<template>
    <div>
        <h1>带背景分页</h1>
        <p>为分页按钮添加背景色</p>
        <p></p>
        <div class="block container-item">
            <el-pagination background layout="prev, pager, next" :total="1000" style="text-align:left;">
            </el-pagination>
        </div>
    </div>

</template>

<script>
    export default {
        name: "bacPaging",

    }

</script>

<style scoped>

</style>
