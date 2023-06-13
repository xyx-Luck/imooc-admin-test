<template>
  <div class="loginPage">
    <div>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
        :size="formSize"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" :prefix-icon="Avatar" />
        </el-form-item>
        <el-form-item label="密码" prop="password" class="password">
          <el-input
            v-model="ruleForm.password"
            :prefix-icon="Lock"
            :type="showPwdorText"
          />
          <div @click="isPwd">
            <el-icon v-if="showPwd"><Hide /></el-icon>
            <el-icon v-else><View /></el-icon>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { Avatar, Lock, Hide } from "@element-plus/icons-vue";
import store from "@/store";
const showPwd = ref(true);
const showPwdorText = ref("password");
const ruleFormRef = ref(null);
const ruleForm = ref({
  username: "super-admin",
  password: "123456",
});
const rules = ref({
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
});
// 密码显示点还是显示文本
const isPwd = () => {
  showPwd.value = !showPwd.value;
  // showPwd.value
  showPwd.value
    ? (showPwdorText.value = "password")
    : (showPwdorText.value = "text");
};
// 登录逻辑
const doLogin = () => {
  console.log(store)
  store.dispatch("user/login", ruleForm.value);
};
</script>
<style lang="scss" scoped>
.loginPage {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(184, 184, 233);
  & > div {
    width: 500px;
    height: 300px;
    margin: 0 auto;
  }
  .el-button {
    width: 100%;
  }
  .password {
    position: relative;
    .el-icon {
      position: absolute;
      right: 8px;
      top: 9px;
    }
  }
}
</style>
