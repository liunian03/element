<template>
	<div class="hello">
		<el-tabs :tab-position="tabPosition">
			<!-- Table表格 -->
			<el-tab-pane label="Table表格">
				<h1>Table表格</h1>
				<p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他自定义操作。</p>
                <div class="container-item">
                    <div class="content-item">
                        <h3>基础表格</h3>
                        <p>基础的表格展示用法。</p>
                        <v-tab1 :tableData="tableData"></v-tab1>
                    </div>
                    <div class="content-item">
                        <h3>带斑马纹表格</h3>
                        <p>使用带斑马纹的表格，可以更容易区分出不同行的数据。</p>
                        <v-tab2 :tableData="tableData"></v-tab2>
                    </div>
                    <div class="content-item">
                        <h3>带状态表格</h3>
                        <p>可将表格内容 highlight 显示，方便区分「成功、信息、警告、危险」等内容。</p>
                        <v-tab3 :tableData="tableData"></v-tab3>
                    </div>
                    <div class="content-item">
                        <h3>多选表格</h3>
                        <p>选择多行数据时使用 Checkbox</p>
                        <v-tab4 :tableData="tableData"></v-tab4>
                    </div>
                    <div class="content-item">
                        <h3>表格自定义列模板</h3>
                        <p>自定义列的显示内容，可组合其他组件使用。</p>
                        <v-tab5 :tableData="tableData"></v-tab5>
                    </div>
                </div>
			</el-tab-pane>
			<!-- 固定表头 -->
			<el-tab-pane label="固定表头">
                <h1>固定表头</h1>
                <p>纵向内容过多时，可选择固定表头。</p>
                <div class="container-item">
                    <v-tab6 :tableData="tableData"></v-tab6>
                </div>
			</el-tab-pane>
			<!-- 固定列 -->
			<el-tab-pane label="固定列">
                <h1>固定列</h1>
                <p>横向内容过多时，可选择固定列。</p>
                <div class="container-item" style="width:800px;">
                    <v-tab7 :tableData="tableData"></v-tab7>
                </div>
			</el-tab-pane>
			<!-- 固定表头和列 -->
			<el-tab-pane label="固定表头和列">
                <h1>固定表头和列</h1>
                <p>横纵内容过多时，可选择固定列和表头。</p>
                <div class="container-item" style="width:800px;">
                    <v-tab8 :tableData="tableData"></v-tab8>
                </div>
			</el-tab-pane>
			<!-- 组合表头 -->
			<el-tab-pane label="组合表头">
                <h1>组合(多级)表头</h1>
                <p>数据结构比较复杂的时候，可使用多级表头来展现数据的层次关系。</p>
                <div class="container-item">
                    <v-tabTop></v-tabTop>
                    <v-tab9 :tableData="tableData"></v-tab9>
                </div>
			</el-tab-pane>
			<!-- 按序排列 -->
			<el-tab-pane label="按序排列">
                <h1>按序排列</h1>
                <p>对表格进行排序，可快速查找或对比数据。</p>
                <div class="container-item">
                    <div class="content-item">
                        <v-tabTop></v-tabTop>
                        <v-tab10 :tableData="tableData"></v-tab10>
                    </div>
                    <div class="content-item">
                        <h3>表格单元格内容过多支持换行</h3>
                        <v-tab11 :tableData="tableData"></v-tab11>
                    </div>
                    <!-- 分页 -->
                    <div class="block">
                        <el-pagination layout="prev, pager, next" :total="1000">
                        </el-pagination>
                    </div>
                </div>

			</el-tab-pane>
			<!-- 可编辑表格 -->
			<el-tab-pane label="可编辑表格">
                <h1>可编辑表格</h1>
                <p>对表格可以进行编辑删除等操作</p>
                <div class="container-item">
                    <v-tabTop></v-tabTop>
                    <v-editTable :tableData="tableData"></v-editTable>
                    <!-- 分页 -->
                    <div class="block">
                        <el-pagination layout="prev, pager, next" :total="1000">
                        </el-pagination>
                    </div>
                </div>
			</el-tab-pane>
			<!-- 树形表格 -->
			<el-tab-pane label="树形表格">
                <h1>树形表格</h1>
				<div class="container-item">
                    <div class="content-item">
                        <v-tabTop></v-tabTop>
                        <v-treeTable></v-treeTable>
                    </div>
				</div>
			</el-tab-pane>
			<!-- 带背景分页 -->
			<el-tab-pane label="带背景分页">
                <v-bacPaging></v-bacPaging>
			</el-tab-pane>
			<!-- 下拉列表框 -->
			<el-tab-pane label="下拉列表框">
				<h1>下拉列表框</h1>
				<p>当选项过多时，使用下拉菜单展示并选择内容。</p>
				<div class="container-item">
                    <div class="content-item">
                        <h3>下拉弹出树形结构</h3>
                        <v-comTreeBox></v-comTreeBox>
                    </div>
                    <div class="content-item">
                        <h3>普通下拉框</h3>
                        <p>适用广泛的基础单选</p>
                        <v-baseBox :options="options"></v-baseBox>
                    </div>
                    <div class="content-item">
                        <h3>按钮式触发下拉框</h3>
                        <v-btnBox></v-btnBox>
                    </div>
                    <div class="content-item">
                        <h3>下拉框多选</h3>
                        <p>适用性较广的基础多选，用 Tag 展示已选项</p>
                        <v-multipBox :options="options"></v-multipBox>
                    </div>
				</div>
			</el-tab-pane>
			<!-- 日期和时间范围 -->
			<el-tab-pane label="日期和时间范围">
                <h1>日期和时间范围</h1>
                <p>在同一个选择器里选择日期和时间</p>
                 <v-timeDate></v-timeDate>
			</el-tab-pane>
			<!-- Tree树形控件 -->
			<el-tab-pane label="Tree树形控件">
				<h1>Tree树形控件</h1>
				<p>用清晰的层级结构展示信息，可展开或折叠。</p>
				<div class="tree-item container-item">
					<div class="content-item">
						<h3>基础用法</h3>
						<p>基础的树形结构展示。</p>
						<el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
					</div>
					<div class="content-item">
						<h3>多选</h3>
						<p>可将 Tree 的某些节点设置为默认展开或默认选中</p>
						<el-tree :data="data" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps">
						</el-tree>
					</div>
					<div class="content-item">
						<h3>树节点的选择</h3>
						<el-tree :data="data" show-checkbox default-expand-all node-key="id" ref="tree" highlight-current :props="defaultProps">
						</el-tree>
					</div>
					<div class="content-item">
						<h3>节点过滤</h3>
						<p>通过关键字过滤树节点</p>
						<el-input placeholder="输入关键字进行过滤" v-model="filterText">
						</el-input>
						<el-tree class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree2">
						</el-tree>
					</div>
					<div class="content-item">
						<h3>可拖拽节点</h3>
						<p>通过 draggable 属性可让节点变为可拖拽</p>
						<el-tree :data="data" node-key="id" default-expand-all @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop" :allow-drag="allowDrag">
						</el-tree>
					</div>
					<div class="content-item">
						<h3>树结构换行</h3>
						<p>节点字数过多可以支持换行</p>
						<el-tree :data="data9" :props="defaultProps" @node-click="handleNodeClick" class="lineFeed"></el-tree>
					</div>
				</div>
			</el-tab-pane>
			<!-- 对话框 -->
			<el-tab-pane label="对话框">
				<h1>对话框</h1>
				<div class="container-item">
					<div class="content-item">
                        <h3>表单对话框</h3>
                        <v-dialog></v-dialog>
					</div>
					<div class="content-item">
						<h3>支持ENTER查询</h3>
						<el-autocomplete class="inline-input" v-model="state" :fetch-suggestions="querySearch" placeholder="请输入内容" @select="handleSelect"></el-autocomplete>
					</div>
                    <div class="content-item">
                        <h3>支持拼音缩写查询</h3>
                        <v-dialogPinyinQuery></v-dialogPinyinQuery>
                    </div>
				</div>
			</el-tab-pane>
			<!-- 布局 -->
			<el-tab-pane label="布局">
				<h1>布局</h1>
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
					<div class="block">
						<el-pagination 
							@size-change="handleSizeChange"
							@current-change="handleCurrentChange"
							:curr-page.sync="currentPage"
							layout="prev, pager, next,sizes,total,jumper" 
							:page-size="pagesize"
							:page-sizes='[5,10,15,20]'
							:total="tableData.length">
						</el-pagination>
					</div>
				</div>
			</el-tab-pane>
		</el-tabs>
	</div>
</template>

<script>
    import tab1 from './BasedTables/tab1';
    import tab2 from './BasedTables/tab2';
    import tab3 from './BasedTables/tab3';
    import tab4 from './BasedTables/tab4';
    import tab5 from './BasedTables/tab5';
    import tab6 from './BasedTables/tab6';
    import tab7 from './BasedTables/tab7';
    import tab8 from './BasedTables/tab8';
    import tab9 from './BasedTables/tab9';
    import tab10 from './BasedTables/tab10';
    import tab11 from './BasedTables/tab11';
    import tabTop from './BasedTables/tabTop';
    import editTable from './EditTable/editTable';
    import treeTable from './TreeGrid/treeTable';
    import bacPaging from './BacPaging/bacPaging';
    import baseBox from './ComBox/baseBox';
    import comTreeBox from './ComBox/comTreeBox';
    import multipBox from './ComBox/multipBox';
    import btnBox from './ComBox/btnBox';
    import timeDate from './TimeDate/timeDate';
    import dialog from './Dialog/dialog';
    import dialogPinyinQuery from './Dialog/dialogPinyinQuery';

	export default {
		name: 'HelloWord',
        components:{
            'v-tab1':tab1,
            'v-tab2':tab2,
            'v-tab3':tab3,
            'v-tab4':tab4,
            'v-tab5':tab5,
            'v-tab6':tab6,
            'v-tab7':tab7,
            'v-tab8':tab8,
            'v-tab9':tab9,
            'v-tab10':tab10,
            'v-tab11':tab11,
            'v-tabTop':tabTop,
            'v-editTable':editTable,
            'v-treeTable':treeTable,
            'v-bacPaging':bacPaging,
            'v-baseBox':baseBox,
            'v-comTreeBox':comTreeBox,
            'v-multipBox':multipBox,
            'v-btnBox':btnBox,
            'v-timeDate':timeDate,
            'v-dialog':dialog,
            'v-dialogPinyinQuery':dialogPinyinQuery,
        },
		data() {
			return {
				input: '',
				input2:'',
                tabPosition: 'left',
				dialogForm: false,
				fileList: [],
				filterText: '',
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
				options: [{
					value: '选项1',
					label: '黄金糕'
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
				value: '',
				tableData: [{
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }, {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333
                }],
                //日期时间
				pickerOptions: {
					shortcuts: [{
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
							picker.$emit('pick', [start, end]);
						}
					}, {
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
							picker.$emit('pick', [start, end]);
						}
					}, {
						onClick(picker) {
							const end = new Date();
							const start = new Date();
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
							picker.$emit('pick', [start, end]);
						}
					}]
				},
                //Tree树形控件
				data: [{
					label: '一级 1',
					children: [{
						label: '二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}, {
					label: '一级 3',
					children: [{
						label: '二级 3-1',
						children: [{
							label: '三级 3-1-1'
						}]
					}, {
						label: '二级 3-2',
						children: [{
							label: '三级 3-2-1'
						}]
					}]
				}],
				data9: [{
					label: '一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1一级 1',
					children: [{
						label: '二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1二级 1-1',
						children: [{
							label: '三级 1-1-1'
						}]
					}]
				}, {
					label: '一级 2',
					children: [{
						label: '二级 2-1',
						children: [{
							label: '三级 2-1-1'
						}]
					}, {
						label: '二级 2-2',
						children: [{
							label: '三级 2-2-1'
						}]
					}]
				}],
				defaultProps: {
					children: 'children',
					label: 'label'
				},
				restaurants: [],
				state: '',
				//布局
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
				multipleSelection: [],
				value7:'',
				value11:'',
				value12:''
			}
		},
		methods: {
			//menu导航开始
			handleOpen(key, keyPath) {
				console.log(key, keyPath);
			},
			handleClose(key, keyPath) {
				console.log(key, keyPath);
			},//menu导航结束
		    //Tree树形控件-基础用法
			handleNodeClick(data) {
				console.log(data);
			},
			toggleSelection(rows) {
				if(rows) {
					rows.forEach(row => {
						this.$refs.multipleTable.toggleRowSelection(row);
					});
				} else {
					this.$refs.multipleTable.clearSelection();
				}
			},
            //布局
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
            //布局新增
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
            //支持enter查询
			loadAll() {
				return [{
					"value": "潘老板炸鸡（雨花西路店）",
					"address": "长宁区新渔路144号"
				}, {
					"value": "潘老板炸鸡分店（仙霞路）",
					"address": "上海市长宁区淞虹路661号"
				}, {
					"value": "新旺角茶餐厅",
					"address": "上海市普陀区真北路988号创邑金沙谷6号楼113"
				}, {
					"value": "潘老板炸鸡(天山西路店)",
					"address": "天山西路438号"
				}, {
					"value": "胖仙女纸杯蛋糕（上海凌空店）",
					"address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101"
				}, {
					"value": "贡茶",
					"address": "上海市长宁区金钟路633号"
				}];
			},
			querySearch(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			querySearchAsync(queryString, cb) {
				var restaurants = this.restaurants;
				var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
				// 调用 callback 返回建议列表的数据
				cb(results);
			},
			createFilter(queryString) {
				return(restaurant) => {
					return(restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
				}
			},
			handleSelect(item) {
				console.log(item);
			},
			//下拉菜单弹出树形结构
			// 切换选项
			handleNodeClick(node) {
				this.valueTitle = node[this.props.label]
				this.valueId = node[this.props.value]
				this.$emit('getValue', this.valueId)
				this.defaultExpandedKey = []
			},
			// 清除选中
			clearHandle() {
				this.valueTitle = ''
				this.valueId = null
				this.defaultExpandedKey = []
				this.clearSelected()
				this.$emit('getValue', null)
			},
			/* 清空选中样式 */
			clearSelected() {
				let allNode = document.querySelectorAll('#tree-option .el-tree-node')
				allNode.forEach((element) => element.classList.remove('is-current'))
			},
			//节点过滤
			filterNode(value, data) {
				if(!value) return true;
				return data.label.indexOf(value) !== -1;
			},
			//可拖拽节点
			handleDragStart(node, ev) {
				console.log('drag start', node);
			},
			handleDragEnter(draggingNode, dropNode, ev) {
				console.log('tree drag enter: ', dropNode.label);
			},
			handleDragLeave(draggingNode, dropNode, ev) {
				console.log('tree drag leave: ', dropNode.label);
			},
			handleDragOver(draggingNode, dropNode, ev) {
				console.log('tree drag over: ', dropNode.label);
			},
			handleDragEnd(draggingNode, dropNode, dropType, ev) {
				console.log('tree drag end: ', dropNode && dropNode.label, dropType);
			},
			handleDrop(draggingNode, dropNode, dropType, ev) {
				console.log('tree drop: ', dropNode.label, dropType);
			},
			allowDrop(draggingNode, dropNode, type) {
				if(dropNode.data.label === '二级 3-1') {
					return type !== 'inner';
				} else {
					return true;
				}
			},
			allowDrag(draggingNode) {
				return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
			},
			// 清除选中
			clearHandle() {
				this.valueTitle = ''
				this.valueId = null
				this.defaultExpandedKey = []
				this.clearSelected()
				this.$emit('getValue', null)
			},
			handleSizeChange(val) {
				console.log(`每页 ${val} 条`);
				this.currentPage = 1;
				this.pagesize = val;
			},
			handleCurrentChange(val) {
				console.log(`当前页: ${val}`);
				this.currentPage = val;
			},

			//布局查询
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
			}
		},
		watch: {
			//节点过滤
			filterText(val) {
				this.$refs.tree2.filter(val);
			}
		},
		mounted() {
			this.restaurants = this.loadAll();
		}
	}
</script>
<style>
    .el-table {
        text-align: center;
    }
    .table-item {
        width: 100%;
        margin: 0 auto;
        margin-top: 30px;
    }
    .container-item {
        margin-bottom: 30px;
    }
    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

    .el-table .warning-row {
        background: oldlace;
    }

    .el-table .success-row {
        background: #f0f9eb;
    }

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

    .el-select.btn .el-input--suffix .el-input__inner {
        background: #409eff;
        color: #fff;
        text-align: center;
        width: 120px;
    }

    .el-select .el-input .el-select__caret {
        color: #fff;
    }

    .container-item {
        border: 1px solid #ddd;
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 20px;
        box-sizing: border-box;
    }

    .lineFeed .el-tree-node__content {
        width: 600px;
        height: auto;
    }

    .lineFeed .el-tree-node__content .el-tree-node__label {
        white-space: initial;
    }

    .span-ellipsis {
        display: block;
        width: 500px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .el-select .el-input .el-select__caret {
        color: #dcdfe6;
    }

    .el-select.btn input::-webkit-input-placeholder {
        color: #fff !important;
    }
</style>

