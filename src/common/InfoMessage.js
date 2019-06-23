/*封装小组件
*/
import { Message,Alert,Confirm,keyup } from 'element-ui'


// 成功
function ok1(message='成功') {
    Message({
        message: message,
        type: 'success',
        duration: 3000,
        showClose: 'true'
    })
}

//错误
function error(message='错误') {
    Message({
        message: message,
        type: 'error',
        duration: 3000,
        showClose: 'true'
    })
}

//警告
function warn() {
    this.$message({
        message: '警告',
        type: 'warning',
        duration: 3000,
        showClose: 'true'
    })
}

//alert
function alertInfo() {
    this.$alert('内容', '标题', {
        confirmButtonText: '确定',
        callback: action => {
            this.$message({
                type: 'info',
                message: `action:${action}`
            })
        }
    })
}

//confirm
function confirm() {
    this.$confirm('提示内容', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(() => {
        this.$message({
            type: 'success',
            message: '删除成功!'
        });
    }).catch(() => {
        this.$message({
            type: 'info',
            message: '已取消删除'
        })
    }
)}
//特殊字符校验
// Vue.directive('filter-special',{
//     keydown:function(el){
//         if(!Number.isInteger(el)){
//             return false;
//         }
//     }
// })
//*字符校验
function check(e,a){
    console.log(1244)
    console.log(e);
    console.log(a)
    if(e.keyCode == 56 || e.keyCode == 106){
        a = a.substring(0,a.length-1);
    }
    return a;
}
// 指令

export {
    ok1,
    warn,
    error,
    alertInfo,
    confirm,
    check
}
