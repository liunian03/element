<template>
    <!-- 可编辑表格 -->
    <div>
        <p>对表格可以进行编辑删除等操作</p>
        <div class="table-item" type="flex;" justify="center" id="table-item">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column label="日期" width="180">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.date" placeholder="请输入内容" class="editInput"></el-input>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="姓名" width="180">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.name" placeholder="请输入内容" class="editInput"></el-input>
                        <span style="margin-left: 10px">{{ scope.row.name }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="地址" width="280">
                    <template slot-scope="scope">
                        <el-input v-model="scope.row.address" placeholder="请输入内容" class="editInput"></el-input>
                        <span style="margin-left: 10px">{{ scope.row.address }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" class="edit">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
    export default {
        name: "editTable",
        data(){
            return{
                editData: true,
            }
        },
        methods:{
            handleEdit(index, row) {
                var oBox = document.getElementById('table-item');
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
            handleDelete(index, row) {
                var oBox = document.getElementById('table-item');
                var oDiv = oBox.getElementsByClassName('el-table__row')[index];
                oDiv.style.display = 'none';
            },
        },
        props:{
            tableData:{
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
