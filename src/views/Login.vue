<template>
  <div class="login">
    <el-card class="box-card">
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="user">
          <el-input type="text" v-model="ruleForm.user" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
    data() {
        return {
            ruleForm: {
                user: "",
                pass: "",
            },
            rules: {
                user: [
                    {required: true, trigger: "blur"}
                ],
                pass: [
                    {required: true, trigger: "blur"}
                ]
            }
        }
    },
    methods: {
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    this.$store.dispatch("user/login", {username: this.ruleForm.user, password: this.ruleForm.pass}).then(() => {
                        this.$router.push("/")
                    }
                    )
                } else {
                    console.log("error");
                }
            })
        }
    },
};
</script>

<style>
.box-card {
  width: 480px;
  height: 220px;
  position: relative;
  top: 50%;
  margin: 0 auto;
  margin-top: -110px;
}
.login {
    width: 100%;
    height: 100%;
}
</style>