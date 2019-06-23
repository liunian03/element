<template>
    <el-select v-model="value" filterable placeholder="请选择" :filter-method="PinyinMatch">
        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
        </el-option>
    </el-select>
</template>

<script>
    export default {
        name: "dialogSearch",
        data() {
            return {
                value: '',
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
                copyoptions: [{
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

        },
        methods: {
            PinyinMatch(val) {
                // const PinyinMatch = require('pinyin-match');
                if (val) {
                    var result = []
                    this.copyoptions.forEach(i => {
                        var m = PinyinMatch.match(i.label, val)
                        if (m) {
                            result.push(i);
                        }
                    })
                    this.options = result;
                } else {
                    this.options = this.copyoptions;
                }
            },
        }
    }
</script>

<style scoped>

</style>
