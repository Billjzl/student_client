<template>
  <div>
    <el-container>
      <el-header>
        <div style="text-align: center; font-size: 25px; font-weight: bolder">
          <i class="el-icon-s-home" style="margin-right: 25px"></i>
          学生选课管理系统
        </div>
      </el-header>
      <el-main>
        <el-card class="login-module" shadow="hover">
          <div slot="header" class="clearfix">
            <span style="text-align: center; font-size: 40px; font-family: 'Microsoft YaHei'">
              <p><i class="el-icon-office-building" style="margin-right: 18px"></i>登录</p>
            </span>
          </div>
          <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-form-item label="账号" prop="username">
                <el-input v-model="ruleForm.username" prefix-icon="el-icon-lollipop" placeholder="请输入账号"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" placeholder="请输入密码" show-password
                  prefix-icon="el-icon-ice-cream-round"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { getProfileApi, login } from '../../api/auth';
import { setToken } from '@/utils/auth'
export default {
  data() {
    return {
      ruleForm: {
        username: null,
        password: null,
      },
      rules: {
        username: [
          { required: true, message: '请输入用户 id', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ],
      }
    };
  },
  methods: {
    async submitForm() {
      const { username, password } = this.ruleForm
      const { data } = await login(username, password)
      setToken(data.access_token)
      const profile = await getProfileApi()
      localStorage.setItem('userInfo', JSON.stringify(profile))
      console.log(profile);
      this.$message.success('登录成功！')
      if (profile.data.role == '01') {
        this.$router.push({ name: 'admin' })
      } else if (profile.data.role == '02') {
        this.$router.push({ name: 'editor' })
      } else if (profile.data.role == '03') {
        this.$router.push({ name: 'subscriber' })
      }
      // login(username, password).then(res => {
      //   const { data } = res
      //   setToken(data.access_token)
      //   this.$message.success('登录成功！')
      //   this.$router.push({ name: 'admin' })
      // }).catch(error => { })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

  }
}
</script>

<style>
.login-module {
  /*width: 380px;*/
  /*height: 325px;*/
  margin-top: 60px;
  /*border: none;*/
  position: absolute;
  right: 500px;
  text-align: center;
  width: 30%;
}

.el-header {
  background-color: #B3C0D1;
  color: #333;
  line-height: 60px;
}
</style>