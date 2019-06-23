// import {post,get} from 'http'
import { Message } from 'element-ui'
export default {
    name: 'userMana',
    data () {
        return {
            total: 1,
            pageSize: 5, // 每页的数据条数
            currentPage: 1, // 当前页码
            searchText: '',
            dialogForm: false,
            formName: 'deptForm',
            editData: false,
            multipleSelection: [],
            deptForm: {
                deptNo: '',
                dname: '',
                loc: ''
            },
            rules: {
                deptNo: [{
                    required: true,
                    message: '单位编号为空',
                    trigger: 'blur'
                }, {
                    min: 1,
                    max: 10,
                    message: '单位编号长度在 1 到 10 个字符',
                    trigger: 'blur'
                }],
                dname: [{
                    required: true,
                    message: '单位名称为空',
                    trigger: 'blur'
                }]
            },
            arrList: []
        }
    },
    methods: {
        submitForm () {
            this.$refs[this.formName].validate((valid) => {
                if (!valid) {
                    if (this.editData) {
                        this.editDept(this.deptForm)
                    } else {
                        this.saveDept(this.deptForm)
                    }
                }
            })
        },
        resetForm () {
            console.log(this.$refs[this.formName])
            if (this.$refs[this.formName]) {
                console.log(this.deptForm)
                this.$refs[this.formName].resetFields();
                console.log(this.deptForm)
            }
        },
        saveDept (dept) {
            post('/sys/dept/add', dept, 0)
                .then(resp => {
                    this.loadData()
                    this.dialogForm = false
                })
        },
        editDept (dept) {
            post('/sys/dept/edit', dept, 0)
                .then(resp => {
                    this.loadData()
                    this.dialogForm = false
                })
        },
        handleSelectionChange (val) {
            this.multipleSelection = val
        },
        handleCreate () {
            this.dialogForm = true
            this.editData = false
            this.resetForm()
        },
        handleEdit () {
            if (this.multipleSelection.length === 0) {
                Message({
                    message: '请选择要处理的数据',
                    type: 'warning'
                })
                return false
            }
            if (this.multipleSelection.length > 1) {
                Message({
                    message: '请选择要单条数据进行编辑',
                    type: 'warning'
                })
                return false
            }
            this.dialogForm = true
            this.editData = true
            this.deptForm = this.multipleSelection[0]
        },
        handleDel () {
            if (this.multipleSelection.length === 0) {
                Message({
                    message: '请选择要处理的数据',
                    type: 'warning'
                })
                return false
            }
            this.$confirm('确定删除选择的部门信息吗？', '确认信息', {
                distinguishCancelAndClose: true,
                confirmButtonText: '保存',
                cancelButtonText: '取消'
            }).then(() => {
                const deptNos = this.multipleSelection.map(d => {
                    return d.deptNo
                })
                post('/sys/dept/del', {deptNos: deptNos}, 0)
                    .then(resp => {
                        this.loadData()
                        this.dialogForm = false
                    })
            })
        },
        // 分页
        handleSizeChange (size) {
            this.pageSize = size
            this.loadData()
        },
        handlePageChange (page) {
            this.currentPage = page
            this.loadData()
        },
        loadData(){
            // post('/sys/dept/list', {page: this.currentPage, size: this.pageSize, searchText: this.searchText}, 0)
            //     .then(resp => {
            //         this.arrList = resp.data.rows
            //         this.total = resp.data.recordNum
            //     })
            this.$http.get('../../static/tab.json').then(res => {
                console.log(res.data)
                 this.arrList = res.data.tableData;
            })
        }
    },
    mounted () {
        this.loadData()
    }
}
