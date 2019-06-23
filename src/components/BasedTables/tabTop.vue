<template>
    <div>
        <el-row :gutter="20" type="flex" justify="space-between">
            <el-col :span='8'>
                <span>项目编号：</span>
                <el-input v-model="input" placholder="请输入内容" class="grid"></el-input>
            </el-col>
            <el-col :span='8'>
                <span>项目名称：</span>
                <el-input v-model="input" placholder="请输入内容" class="grid"></el-input>
            </el-col>
            <el-col :span='8'>
                <span>状态：</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <!-- 第二行 -->
        <el-row :gutter="20" type="flex" justify="space-around">
            <el-col :span='8'>
                <span>起始时间：</span>
                <el-time-select v-model="startTime" placeholder="请选择起始时间" class="grid" :picker-options="{
                                start:'08:30',
                                step:'00:15',
                                end:'18:30'
                            }">
                </el-time-select>
            </el-col>
            <el-col :span='8'>
                <span>截止时间：</span>
                <el-time-select v-model="endTime" placeholder="请选择结束时间" class="grid" :picker-options="{
                                start:'08:30',
                                step:'00:15',
                                end:'18:30',
                                minTime:startTime
                            }">
                </el-time-select>
            </el-col>
            <el-col :span='8'>
                <!-- 按钮 -->
                <el-button type="primary">查询</el-button>
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "tabTop",
        data(){
            return{
                input:'',
                value:'',
                startTime:'',
                endTime: '',
                options: [{
                    value: '选项1',
                    label: '龙眼'
                }, {
                    value: '选项2',
                    label: '双皮奶'
                }, {
                    value: '选项3',
                    label: '蚵仔煎'
                }, {
                    value: '选项4',
                    label: '龙须面'
                }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        }
    }
</script>

<style scoped>

</style>
