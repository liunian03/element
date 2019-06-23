<template>
    <div class="container-item">
        <el-row :gutter="20" type="flex" justify="space-between">
            <el-col :span='12'>
                <span class="search-label">单位名称：</span>
                <el-input v-model="searchText" placholder="请输入单位编号" class="grid check"></el-input>
            </el-col>
            <el-col :span="12">
                <div class="grid-content">
                    <div class="btnCheck">
                        <el-button type="primary" @click="loadData">查询</el-button>
                        <el-button type="success" @click="handleCreate">新增</el-button>
                        <el-button type="success" @click="handleEdit">编辑</el-button>
                        <el-button type="warning" @click="handleDel">删除</el-button>
                    </div>
                    <el-dialog title="新增单位信息" :visible.sync="dialogForm">
                        <el-form v-model="deptForm" ref="deptForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="单位编号" prop="name">
                                <el-input v-model="deptForm.name" placeholder="请输入单位编号"></el-input>
                            </el-form-item>
                            <el-form-item label="城市" prop="city">
                                <el-input v-model="deptForm.city" placeholder="请输入城市"></el-input>
                            </el-form-item>
                            <el-form-item label="单位地址" prop="address">
                                <el-input v-model="deptForm.address" placeholder="请输入单位地址"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogForm = false">取消</el-button>
                            <el-button type="primary" @click="submitForm('deptForm')">保存</el-button>
                        </div>
                    </el-dialog>
                </div>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table id="tableData6" ref="multipleTable" :data="arrList" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"/>
                    <el-table-column prop='name' label="单位编号" width="150"/>
                    <el-table-column prop='city' label="城市" width="300"/>
                    <el-table-column prop='address' label="地址"/>
                </el-table>
            </el-col>
        </el-row>
        <!-- 分页 -->
        <div class="block">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handlePageChange"
                    :curr-page.sync="currentPage"
                    layout="prev, pager, next, sizes, total, jumper"
                    :page-size="pageSize"
                    :page-sizes='[5,10,15,20]'
                    :total="total">
            </el-pagination>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                total: 1,
                pageSize: 5, // 每页的数据条数
                currentPage: 1, // 当前页码
                searchText: '',
                dialogForm: false,
                arrList:[],
                editData:false,
                Name:'deptForm',
                deptForm: {
                    name: '',
                    city: '',
                    address: ''
                },
                rules: {
                    name: [{
                        required: true,
                        message: '单位编号为空',
                        trigger: 'blur'
                    }, {
                        min: 1,
                        max: 10,
                        message: '单位编号长度在 1 到 10 个字符',
                        trigger: 'blur'
                    }],
                    city: [{
                        required: true,
                        message: '单位名称为空',
                        trigger: 'blur'
                    }]
                },
            }
        },
        methods:{
            loadData(){
                this.$http.get('../../static/tab.json',{})
                    .then((res) => {
                        this.arrList = res.data.tableData;
                    })
            },
            handleCreate(){
                this.dialogForm = true;
                this.resetForm();
            },
            handleEdit(){

            },
            handleDel(){

            },
            //保存
            submitForm(){
                if(this.editData){
                    //编辑
                    // console.log(55565)
                    // this.editData = true;
                    // console.log(this.deptForm);
                }else {
                    //新增
                    this.arrList.push(this.deptForm)
                    this.dialogForm = false;
                }
            },
            //清除重置
            resetForm(){

                console.log(this.$refs[this.Name])

                if(this.$refs[this.Name]){
                    console.log(this.$refs[this.Name].resetFields)
                    this.$refs[this.Name].resetFields()
                    console.log(this.deptForm)
                }
            },
            handleSelectionChange(){

            },
            handleSizeChange(){

            },
            handlePageChange(){

            }
        },
        mounted() {
            this.loadData();
        }
    }
</script>
<style src="../common/user.css" scoped></style>
