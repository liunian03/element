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
                        <el-form :model="deptForm"  ref="deptForm" label-width="100px" class="demo-ruleForm">
                            <el-form-item label="单位编号" prop="deptNo">
                                <el-input v-model="deptForm.deptNo" placeholder="请输入单位编号"></el-input>
                            </el-form-item>
                            <el-form-item label="单位名称" prop="dname">
                                <el-input v-model="deptForm.dname" placeholder="请输入单位名称"></el-input>
                            </el-form-item>
                            <el-form-item label="单位地址" prop="loc">
                                <el-input v-model="deptForm.loc" placeholder="请输入单位地址"></el-input>
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
                    <el-table-column prop='deptNo' label="单位编号" width="150"/>
                    <el-table-column prop='dname' label="单位名称" width="300"/>
                    <el-table-column prop='loc' label="地址"/>
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

<script src="../common/user.js"></script>
<style src="../common/user.css" scoped></style>
