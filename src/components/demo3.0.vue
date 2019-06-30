<template>
   <el-container>
       <el-header>
           <el-row :gutter="20">
               <el-col :span="4">
                   <div class="tab-item">
                       <router-link to="/newdemo/commonList/tablist">tab表格</router-link>
                   </div>
               </el-col>
               <el-col :span="4">
                   <div class="tab-item">
                       <router-link to="/newdemo/commonList/combox">下拉框列表</router-link>
                   </div>
               </el-col>
               <el-col :span="4">
                   <div class="tab-item">分页</div>
               </el-col>
               <el-col :span="4">
                   <div class="tab-item">日期时间</div>
               </el-col>
               <el-col :span="4">
                   <div class="tab-item">tree树形控件</div>
               </el-col>
               <el-col :span="4">
                   <div class="tab-item">对话框</div>
               </el-col>
           </el-row>
       </el-header>
       <el-main>
           <router-view/>
       </el-main>
   </el-container>
</template>

<script>
    export default {
        name: "demo3.0"
    }
</script>

<style scoped>
.tab-item{
    cursor:pointer;
    text-align: center;
    background:#ddd;
    border-radius:4px;
    height:40px;
    line-height: 40px;
}
.tab-item a{
    color:#333;
    text-decoration:none;
}
.tab-item a.active{
    color:red;
    border:1px solid #ddd;
}
</style>
