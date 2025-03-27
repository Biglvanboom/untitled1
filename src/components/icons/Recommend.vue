<template>
  <div class="recommend-container">
    <h2>旅游推荐</h2>
    <el-form :inline="true" class="search-form">
      <el-form-item label="名称">
        <el-input v-model="searchQuery.name" placeholder="请输入景点或学校名称" />
      </el-form-item>
      <el-form-item label="类别">
        <el-select v-model="searchQuery.category" placeholder="请选择类别">
          <el-option label="景点" value="景点" />
          <el-option label="学校" value="学校" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="search">查询</el-button>
      </el-form-item>
    </el-form>

    <el-divider />
    <h3>推荐列表</h3>
    <el-table :data="recommendations" style="width: 100%">
      <el-table-column prop="name" label="名称" width="180" />
      <el-table-column prop="category" label="类别" width="120" />
      <el-table-column prop="rating" label="评分" width="100" />
      <el-table-column prop="popularity" label="热度" width="100" />
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { ElMessage } from 'element-plus';

const searchQuery = ref({ name: '', category: '' });
const recommendations = ref([]);

const search = () => {
  ElMessage.info(`搜索：${searchQuery.value.name}, 类别：${searchQuery.value.category}`);
  fetchRecommendations();
};

const fetchRecommendations = () => {
  recommendations.value = [
    { name: '故宫', category: '景点', rating: 4.8, popularity: 95 },
    { name: '北京大学', category: '学校', rating: 4.7, popularity: 90 }
  ];
};

onMounted(() => {
  fetchRecommendations();
});
</script>

<style scoped>
.recommend-container {
  padding: 20px;
}
.search-form {
  margin-bottom: 20px;
}
</style>
