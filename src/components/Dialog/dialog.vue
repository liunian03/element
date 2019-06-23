<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
        <el-dialog title="组织结构-新增" :visible.sync="dialogFormVisible">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="单位名称" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="业务组织" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择">
                        <el-option label="业务一" value=""></el-option>
                        <el-option label="业务二" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="所属地市" prop="city">
                    <el-select v-model="ruleForm.city" placeholder="请选择">
                        <el-option label="南京市" value=""></el-option>
                        <el-option label="徐州市" value=""></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="员工人数" prop="people">
                    <el-select v-model="ruleForm.people" placeholder="请选择">
                        <el-option label="100" value=""></el-option>
                        <el-option label="200" value=""></el-option>
                        <el-option label="300" value=""></el-option>
                        <el-option label="400" value=""></el-option>
                        <el-option label="500" value=""></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>

</template>

<script>
    export default {
        name: "dialogs",
        data(){
            return {
                dialogFormVisible: false,
                dialogForm: false,
                ruleForm: {
                    name: '',
                    city: '',
                    region:'',
                    people: '',
                    itemNumber:'',
                    itemName:'',
                    itemState:'',
                    itemMethod:'',
                    itemRe:''
                },
                rules: {
                    name: [{
                        required: true,
                        message: '请输入单位名称',
                        trigger: 'blur'
                    }, {
                        min: 3,
                        max: 5,
                        message: '长度在 3 到 5 个字符',
                        trigger: 'blur'
                    }],
                    region: [{
                        required: true,
                        message: '请选择活动区域',
                        trigger: 'change'
                    }],
                    city: [{
                        required: true,
                        message: '请选择所属地市',
                        trigger: 'change'
                    }],
                    people: [{
                        required: true,
                        message: '请选择员工人数',
                        trigger: 'change'
                    }],
                    itemNumber: [{
                        required:true,
                        message:'请输入项目编号',
                        trigger:'blur'
                    }],
                    itemName: [{
                        required:true,
                        message:'请输入项目名称',
                        trigger:'change'
                    }],
                    itemState:[{
                        required: true,
                        message: '请选择状态',
                        trigger: 'change'
                    }],
                    itemMethod:[{
                        required: true,
                        message: '请选择招标方式',
                        trigger: 'change'
                    }]
                },
            }
        }
    }
</script>

<style scoped>

</style>
