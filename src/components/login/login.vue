<template>
  <div class="login-wrap">
    <el-form
    class="login-form"
    label-position="top"
    label-width="80px"
    :model="formdata">
    <h2>用户登录</h2>
      <el-form-item label="用户名">
        <el-input v-model="formdata.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="formdata.password"></el-input>
      </el-form-item>
      <el-button @click.prevent = "handleLogin()" class="login-button" type="primary">登录</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      formdata: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    // 请求登录
    async handleLogin () {
      // 第二种方法是异步操作看起来像同步的 async
      // const res = await this.$http.post('login', this.formdata)
      // console.log(res)
      // 配置了一下baseurl的基本路径
      console.log('执行登录', this.formdata)
      // this.formdata.username = '成功'
      if (this.formdata.username === this.formdata.password) {
        // 设置tonken查看登录
        const token = 'whdhwhdwhdhwdhwhwhd'
        localStorage.setItem = ('token', token)
        // 路由跳转
        this.$router.push({name: 'home'})

        this.$message({
          message: '登陆成功',
          type: 'success'
        })
      } else {
        this.$message.error('用户名或密码不正确')
      }
      //  const {
      //       data,
      //       meta: {
      //         msg, status
      //       }
      //     } = res.data
      //     if (res.status === '200') {
      //       // 登陆成功路由跳转
      //       this.$router.push({name: 'home'})
      //     }
      // 第一种方法是异步的不好看
      // this.$http.post('login', this.formdata)
      //   .then(res => {
      //     console.log(res)
      // 对象的解构赋值
      //     const {
      //       data,
      //       meta: {
      //         msg, status
      //       }
      //     } = res.data
      //     if (res.status === '200') {
      //       // 登陆成功路由跳转
      //       this.$router.push({name: 'home'})
      //     }
      //   })
    }
  }
}
</script>
<style>
  .login-wrap {
    height: 100%;
    background-color: #324152;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .login-wrap .login-form {
    background-color: #fff;
    width: 400px;
    border-radius: 5px;
    padding: 30px;
  }
  .login-button {
    width: 100%;
  }
</style>
