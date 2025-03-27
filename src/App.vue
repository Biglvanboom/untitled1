<template>
  <div class="app-container">
    <template v-if="isLoggedIn">
      <el-container>
        <el-aside width="200px">
          <el-menu :default-active="activeMenu" router>
            <el-menu-item index="/recommend">旅游推荐</el-menu-item>
            <el-menu-item index="/route-planning">旅游路线规划</el-menu-item>
            <el-menu-item index="/place-search">场所查询</el-menu-item>
            <el-menu-item index="/diary-management">旅游日记管理</el-menu-item>
            <el-menu-item index="/diary-exchange">旅游日记交流</el-menu-item>
            <el-menu-item index="/profile">个人中心</el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </template>
    <template v-else>
      <div class="login-container">
        <div class="login-box">
          <h2>用户登录</h2>
          <el-form :model="loginForm" @submit.prevent="handleLogin">
            <el-form-item>
              <el-input v-model="loginForm.username" placeholder="请输入用户名" />
            </el-form-item>
            <el-form-item>
              <el-input v-model="loginForm.password" type="password" placeholder="请输入密码" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="handleLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';

const router = useRouter();
const activeMenu = ref('/recommend');
const loginForm = ref({ username: '', password: '' });
const isLoggedIn = ref(false);

const handleLogin = () => {
  if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
    ElMessage.success('登录成功');
    isLoggedIn.value = true;
    router.push('/recommend');
  } else {
    ElMessage.error('用户名或密码错误');
  }
};
</script>

<style scoped>
.app-container {
  height: 100vh;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.login-box {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.el-aside {
  background: #2c3e50;
  color: white;
  min-height: 100vh;
}

.el-main {
  padding: 20px;
  background: #f5f5f5;
}
</style>
