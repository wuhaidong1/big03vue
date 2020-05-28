<template>
  <el-card class="box-card">
    <!-- 面包學 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索框 -->
    <el-row class="searchRow">
      <el-col>
        <el-input
          placeholder="请输入内容"
          v-model="query"
          class="input-with-select colSearch">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="success" @click="handleAddUsers()">添加用户</el-button>
      </el-col>
    </el-row>
    <!-- 用户列表 -->
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="index"
        label="序号"
        width="60">
      </el-table-column>
      <el-table-column
        prop="username"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="incerno"
        label="邮箱"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="时间"
        width="180"
        >
          <template slot-scope="tableData">
            {{tableData.row.date | fmtdate}}
          </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        label="状态">
        <template slot-scope="tableData">
          <el-switch
            @change="changeStatus"
            v-model="tableData.row.status"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="tableData">
          <!-- 修改用户按钮 -->
          <el-button size="mini" plain type="primary" icon="el-icon-edit" circle @click="showEditUser(tableData.row)"></el-button>
          <!-- 删除用户按钮 -->
          <el-button size="mini" plain type="danger" icon="el-icon-delete" circle @click="deleteUsers(tableData.row.username)"></el-button>
          <el-button size="mini" plain type="success" icon="el-icon-check" circle></el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page = "pageNum"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="2"
        layout = "total, sizes, prev, pager, next, jumper"
        :total = "total">
      </el-pagination>

      <!-- 添加框 -->
      <el-dialog
        title="添加用户"
        :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="用户名" label-width="100px" >
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密 码" label-width="100px">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮 箱" label-width="100px">
            <el-input v-model="form.incerno" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地 址" label-width="100px">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addUsers">确 定</el-button>
        </div>
      </el-dialog>

      <!-- 编辑框 -->
      <el-dialog
        title="编辑用户"
        :visible.sync="dialogFormVisibleEdit">
        <el-form :model="form">
          <el-form-item label="用户名" label-width="100px" >
            <el-input disabled v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮 箱" label-width="100px">
            <el-input v-model="form.incerno" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地 址" label-width="100px">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <!-- <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item> -->
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
          <el-button type="primary" @click="editUsers()">确 定</el-button>
        </div>
      </el-dialog>
  </el-card>
</template>
<script>
export default ({
  data () {
    return {
      query: '',
      pageNum: 1,
      pageSize: 2,
      total: 2,
      tableData: [{
        incerno: 'qq.com',
        date: '20160502',
        username: '王小虎2',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        incerno: 'qq.com',
        date: '20160503',
        username: '王小虎1',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      dialogFormVisible: false,
      dialogFormVisibleEdit: false,

      form: {
        username: '',
        password: '',
        incerno: '',
        address: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  created () {
    // this.getUserList()
  },
  methods: {
    // 编辑用户
    editUsers () {
      // console.log('为什么', this.form.username)
      this.tableData.map((item, index) => {
        console.log(item, index)
        if (item.username === this.form.username) {
          this.tableData.splice(index, 1, this.form)
          this.dialogFormVisibleEdit = false
          this.form = {}
        }
      })
    },
    showEditUser (user) {
      this.dialogFormVisibleEdit = true
      this.form = user
    },
    // 删除用户
    deleteUsers (deleteId) {
      // console.log('为什么', deleteId)
      this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.tableData.map((item, index) => {
          console.log(item, index)
          if (item.username === deleteId) {
            this.tableData.splice(index, 1)
          }
        })
        // this.tableData
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    // 添加用户
    handleAddUsers () {
      this.dialogFormVisible = true
    },
    addUsers () {
      // console.log('为什么', this.form)
      this.tableData.push(this.form)
      this.dialogFormVisible = false
      this.form = {}
    },
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    // 调用接口获取用户列表
    async getUserList () {
      // query 搜索框的查询内容 可为空
      // pagenum 当前页码 不可为空
      // pagesize 每页显示数量 不可为空
      console.log('获取到了用户列表数据')
      const res = await this.$http.get(
        `users?query${this.query}&pageNum=${this.pageNum}&pageSize=${this.pageSize}`
      )
      console.log(res)
      // 这样请求不会成功需要 专业的api必修在请求头中添加令牌
      const auth = localStorage.getItem('token')
      this.$http.defaults.headers.common['Authorization'] = auth
    }
  }
})
</script>
<style>
  .box-card {
    height: 100%;
  }
  .searchRow {
    margin-top: 20px;
  }
  .colSearch {
    width: 400px;
  }

</style>
