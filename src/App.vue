<template>

  <!-- <img src="./assets/images/sensen.jpg" mode="scaleToFill"
        style="width: 200px; height: 200px;background-color: red" /> -->
  <div class="block text-center" style="text-align:center; width: 100%; height: 100%">
    <el-carousel trigger="click" type="card">
      <el-carousel-item v-for="item in imageUrl" :key="item">
        <img :src="item.url" alt="" />
      </el-carousel-item>
    </el-carousel>
  </div>

</template>
<script setup
  lang="ts">
  import { ref, reactive } from 'vue'
  const imageUrl = [
    { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921323441.jpg" },
    { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921333114.jpg" },
    { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921323441.jpg" },
    { url: "http://www.gengdan.cn/wp-content/uploads/2023/03/2023030921325368.jpg" }]

</script>
<style scoped
  lang="scss"></style>
