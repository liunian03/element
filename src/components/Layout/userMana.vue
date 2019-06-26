<template>
    <div class="container-item">
        <el-row>
            <el-col :span="24">
                <div class="grid-content">
                    <el-button type="primary" @click="dialogForm = true">新增</el-button>
                    <el-dialog title="表格数据-新增" :visible.sync="dialogForm">
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="项目编号" prop="itemNumber">
                                <el-input v-model="ruleForm.itemNumber" placeholder="请输入项目编号"></el-input>
                            </el-form-item>
                            <el-form-item label="项目名称" prop="itemName">
                                <el-input v-model="ruleForm.itemName" placeholder="请输入项目名称"></el-input>
                            </el-form-item>
                            <el-form-item label="项目时间" prop="itemTie">
                                <div class="block">
                                    <el-date-picker
                                        v-model="value7"
                                        type="date"
                                        placeholder="选择日期">
                                    </el-date-picker>
                                </div>
                            </el-form-item>
                            <el-form-item label="状态" prop="itemState">
                                <el-select v-model="ruleForm.itemState" placeholder="请选择项目状态">
                                    <el-option label="草稿" value="草稿">草稿</el-option>
                                    <el-option label="已开标" value="已开标">已开标</el-option>
                                    <el-option label="归档" value="归档">归档</el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="招标方式" prop="itemMethod">
                                <el-select v-model="ruleForm.itemMethod" placeholder="请选择招标方式">
                                    <el-option label="邀请招标" value="邀请招标">邀请招标</el-option>
                                    <el-option label="待审批" value="待审批">待审批</el-option>
                                    <el-option label="公开招标" value="公开招标">公开招标</el-option>
                                    <el-option label="其他" value="其他">其他</el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="时限要求" prop="itemRe">
                                <el-select v-model="ruleForm.itemRe" placeholder="请选择项目状态">
                                    <el-option label="正常" value="正常">正常</el-option>
                                    <el-option label="其他" value="其他">其他</el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogForm = false">取 消</el-button>
                            <el-button type="primary" @click="clickdialogForm">保存</el-button>
                        </div>
                    </el-dialog>
                    <!--<el-button type="info">编辑</el-button>
                    <el-button type="danger">删除</el-button>-->
                    <el-button type="success">查看流程流转情况</el-button>
                </div>
            </el-col>
        </el-row>
        <h3>筛选条件</h3>
        <el-row :gutter="20" type="flex" justify="space-between">
            <el-col :span='8'>
                <span>项目编号：</span>
                <el-input v-model="input" placholder="请输入内容" class="grid check"></el-input>
            </el-col>
            <el-col :span='8'>
                <span>项目名称：</span>
                <el-input v-model="input2" placholder="请输入内容" class="grid"></el-input>
            </el-col>
            <el-col :span='8'>
                <span>状态：</span>
                <el-select v-model="value" placeholder="请选择">
                    <el-option v-for="item in options3" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                </el-select>
            </el-col>
        </el-row>
        <el-row :gutter="20" type="flex" justify="space-around">
            <el-col :span='8'>
                <span>起始时间：</span>
                <div class="block" style="float:left;width:75%">
                    <el-date-picker
                        v-model="value11"
                        type="datetime"
                        placeholder="选择日期时间"
                        style="width:100%">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span='8'>
                <span>截止时间：</span>
                <div class="block" style="float:left;width:75%">
                    <el-date-picker
                        v-model="value12"
                        type="datetime"
                        placeholder="选择日期时间"
                        style="width:100%"
                        :picker-options="{
								  	minTime:'value11'
								  }">
                    </el-date-picker>
                </div>
            </el-col>
            <el-col :span='8'>
                <!-- 按钮 -->
                <el-button type="primary" @click="checkOut">查询</el-button>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="24">
                <el-table id="tableData6" ref="multipleTable" :data="tableData6.slice((currentPage-1)*pagesize,currentPage*pagesize)" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55">
                        <!--把id值赋给checkbox-->
                        <!--<template scope='scope'>
                            <input type="checkbox" name="" id="" v-bind:value="scope.row.id" />
                        </template>-->
                    </el-table-column>
                    <el-table-column label="项目日期" width="250">
                        <template slot-scope="scope">
                            <el-date-picker
                                v-model="value7"
                                type="date"
                                placeholder="选择日期">
                            </el-date-picker>
                            <span>{{ scope.row.date }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop='address' label="项目编号" show-overflow-tooltip widht="150">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.address" placeholder="请输入内容" class="editInput"></el-input>
                            <span>{{ scope.row.address }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop='name' label="项目名称">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.name" placeholder="请输入内容" class="editInput"></el-input>
                            <span>{{ scope.row.name }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop='state' label="状态">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.state" placeholder="请输入内容" class="editInput"></el-input>
                            <span>{{ scope.row.state }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop='way' label="招标方式">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.way" placeholder="请输入内容" class="editInput"></el-input>
                            <span>{{ scope.row.way }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop='longway' label="时限要求">
                        <template slot-scope="scope">
                            <el-input v-model="scope.row.longway" placeholder="请输入内容" class="editInput"></el-input>
                            <span>{{ scope.row.longway }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit1(scope.$index, scope.row)" class="edit">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete1(scope.$index, scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </el-col>
        </el-row>
        <!-- 分页 -->

    </div>
</template>

<script>
    export default {
        name: "userMana",
        data(){
            return {
                value:'',
                value7:'',
                value11:'',
                value12:'',
                input:'',
                input2:'',
                dialogForm: false,
                pagesize: 5,//每页的数据条数
                currentPage: 1,//当前页码
                editData: true,
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
                options3: [{
                    value: '选项1',
                    label: '草稿'
                }, {
                    value: '选项2',
                    label: '已开标'
                }, {
                    value: '选项3',
                    label: '待审批'
                }, {
                    value: '选项4',
                    label: '已通过'
                }],
                tableData6: [
                    {
                        date: '2016-05-01',
                        name: 'fx_邀请招标+102481',
                        address: 'JSJT-XSDF-W20150',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-02',
                        name: 'fx_邀请招标+102482',
                        address: 'JSJT-SDFA-W20151',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-03',
                        name: 'fx_邀请招标+102483',
                        address: 'JSJT-WERS-W20152',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-04',
                        name: 'fx_邀请招标+102484',
                        address: 'JSJT-HJKF-W20153',
                        state: '已开标',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-05',
                        name: 'fx_邀请招标+102485',
                        address: 'JSJT-GHFX-W20154',
                        state: '草稿',
                        way: '待审批',
                        longway: '正常',
                    }, {
                        date: '2016-05-06',
                        name: 'fx_邀请招标+102486',
                        address: 'JSJT-DREY-W20155',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-07',
                        name: 'fx_邀请招标+102487',
                        address: 'JSJT-SDSH-W20156',
                        state: '归档',
                        way: '邀请招标',
                        longway: '正常',
                    },{
                        date: '2016-05-01',
                        name: 'fx_邀请招标+102481',
                        address: 'JSJT-XSDF-W20150',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-02',
                        name: 'fx_邀请招标+102482',
                        address: 'JSJT-SDFA-W20151',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-03',
                        name: 'fx_邀请招标+102483',
                        address: 'JSJT-WERS-W20152',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-04',
                        name: 'fx_邀请招标+102484',
                        address: 'JSJT-HJKF-W20153',
                        state: '已开标',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-05',
                        name: 'fx_邀请招标+102485',
                        address: 'JSJT-GHFX-W20154',
                        state: '草稿',
                        way: '待审批',
                        longway: '正常',
                    }, {
                        date: '2016-05-06',
                        name: 'fx_邀请招标+102486',
                        address: 'JSJT-DREY-W20155',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-07',
                        name: 'fx_邀请招标+102487',
                        address: 'JSJT-SDSH-W20156',
                        state: '归档',
                        way: '邀请招标',
                        longway: '正常',
                    },{
                        date: '2016-05-01',
                        name: 'fx_邀请招标+102481',
                        address: 'JSJT-XSDF-W20150',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-02',
                        name: 'fx_邀请招标+102482',
                        address: 'JSJT-SDFA-W20151',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-03',
                        name: 'fx_邀请招标+102483',
                        address: 'JSJT-WERS-W20152',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-04',
                        name: 'fx_邀请招标+102484',
                        address: 'JSJT-HJKF-W20153',
                        state: '已开标',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-05',
                        name: 'fx_邀请招标+102485',
                        address: 'JSJT-GHFX-W20154',
                        state: '草稿',
                        way: '待审批',
                        longway: '正常',
                    }, {
                        date: '2016-05-06',
                        name: 'fx_邀请招标+102486',
                        address: 'JSJT-DREY-W20155',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-07',
                        name: 'fx_邀请招标+102487',
                        address: 'JSJT-SDSH-W20156',
                        state: '归档',
                        way: '邀请招标',
                        longway: '正常',
                    }
                ],
                arrList: [
                    {
                        date: '2016-05-01',
                        name: 'fx_邀请招标+102481',
                        address: 'JSJT-XSDF-W20150',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-02',
                        name: 'fx_邀请招标+102482',
                        address: 'JSJT-SDFA-W20151',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-03',
                        name: 'fx_邀请招标+102483',
                        address: 'JSJT-WERS-W20152',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-04',
                        name: 'fx_邀请招标+102484',
                        address: 'JSJT-HJKF-W20153',
                        state: '已开标',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-05',
                        name: 'fx_邀请招标+102485',
                        address: 'JSJT-GHFX-W20154',
                        state: '草稿',
                        way: '待审批',
                        longway: '正常',
                    }, {
                        date: '2016-05-06',
                        name: 'fx_邀请招标+102486',
                        address: 'JSJT-DREY-W20155',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-07',
                        name: 'fx_邀请招标+102487',
                        address: 'JSJT-SDSH-W20156',
                        state: '归档',
                        way: '邀请招标',
                        longway: '正常',
                    },{
                        date: '2016-05-01',
                        name: 'fx_邀请招标+102481',
                        address: 'JSJT-XSDF-W20150',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-02',
                        name: 'fx_邀请招标+102482',
                        address: 'JSJT-SDFA-W20151',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-03',
                        name: 'fx_邀请招标+102483',
                        address: 'JSJT-WERS-W20152',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-04',
                        name: 'fx_邀请招标+102484',
                        address: 'JSJT-HJKF-W20153',
                        state: '已开标',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-05',
                        name: 'fx_邀请招标+102485',
                        address: 'JSJT-GHFX-W20154',
                        state: '草稿',
                        way: '待审批',
                        longway: '正常',
                    }, {
                        date: '2016-05-06',
                        name: 'fx_邀请招标+102486',
                        address: 'JSJT-DREY-W20155',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-07',
                        name: 'fx_邀请招标+102487',
                        address: 'JSJT-SDSH-W20156',
                        state: '归档',
                        way: '邀请招标',
                        longway: '正常',
                    },{
                        date: '2016-05-01',
                        name: 'fx_邀请招标+102481',
                        address: 'JSJT-XSDF-W20150',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-02',
                        name: 'fx_邀请招标+102482',
                        address: 'JSJT-SDFA-W20151',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-03',
                        name: 'fx_邀请招标+102483',
                        address: 'JSJT-WERS-W20152',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-04',
                        name: 'fx_邀请招标+102484',
                        address: 'JSJT-HJKF-W20153',
                        state: '已开标',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-05',
                        name: 'fx_邀请招标+102485',
                        address: 'JSJT-GHFX-W20154',
                        state: '草稿',
                        way: '待审批',
                        longway: '正常',
                    }, {
                        date: '2016-05-06',
                        name: 'fx_邀请招标+102486',
                        address: 'JSJT-DREY-W20155',
                        state: '草稿',
                        way: '邀请招标',
                        longway: '正常',
                    }, {
                        date: '2016-05-07',
                        name: 'fx_邀请招标+102487',
                        address: 'JSJT-SDSH-W20156',
                        state: '归档',
                        way: '邀请招标',
                        longway: '正常',
                    }
                ],
            }
        },
        methods:{
            clickdialogForm(){
                //console.log(this.ruleForm.itemMethod)
                if(this.ruleForm.itemNumber === ''){
                    this.dialogForm = true;
                    this.$message('请输入内容！');
                }else{
                    this.dialogForm = false;
                    this.tableData6.unshift({
                        address:this.ruleForm.itemNumber,
                        name:this.ruleForm.itemName,
                        state:this.ruleForm.itemState,
                        way:this.ruleForm.itemMethod,
                        longway:this.ruleForm.itemRe
                    })
                }
            },
            submitForm(formName) {
                this.$refs[formName].validateChen((valid) => {
                    if(valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            // 查询
            checkOut(){
//				this.tableData6 = this.arrList;//复制数组
                const oInput = document.getElementsByClassName('check')[0];
                const oIn = oInput.getElementsByClassName('el-input__inner')[0];
                const $value = (oIn.value).toUpperCase();//转换为大写
                const arr = [];
                for (let i=0;i<this.arrList.length;i++) {//永远查询旧数组，就可以重复查询
                    //console.log(this.tableData6[i].address)
                    if(this.arrList[i].address.indexOf($value) >= 0)
                    {
                        arr.push(this.arrList[i]);
                    }
                }
                //console.log(arr)
                this.tableData6 = arr;//新数组用来显示查询到的数据
                //console.log(this.tableData6)
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit1(index, row) {
                var oBox = document.getElementById('tableData6');
                var oDiv = oBox.getElementsByClassName('el-table__row')[index];
                var oEdit = oDiv.getElementsByClassName('edit')[0];
                if(this.editData) {
                    oDiv.classList.add('active');
                    oEdit.innerHTML = '保存';
                    this.editData = false;
                } else if(this.editData == false) {
                    oDiv.classList.remove('active');
                    oEdit.innerHTML = '编辑';
                    this.editData = true;
                }
                console.log(oDiv);
            },
            handleDelete1(index, row) {
                var oBox = document.getElementById('tableData6');
                var oDiv = oBox.getElementsByClassName('el-table__row')[index];
                oDiv.style.display = 'none';
            },
        }
    }
</script>

<style scoped>
    .el-row {
        margin-bottom: 10px;
    }

    .el-col > span {
        float: left;
        margin-top: 10px;
    }

    .el-col .grid {
        float: left;
        width: 75%;
    }

    .el-table .el-input {
        display: none
    }

    .table-item .active .el-input {
        display: block;
    }

    .table-item .active .el-input + span {
        display: none;
    }

    #tableData6 .el-input {
        display: none
    }

    #tableData6 .active .el-input {
        display: block;
    }

    #tableData6 .active .el-input + span {
        display: none;
    }
</style>
