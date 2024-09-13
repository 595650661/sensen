<template>

  <!-- <img src="./assets/images/sensen.jpg" mode="scaleToFill"
        style="width: 200px; height: 200px;background-color: red" /> -->
  <div style="text-align:center; width: 100%; height: 100%">
    <el-carousel trigger="click" type="card" height="600px">
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
    { url: "http://gips3.baidu.com/it/u=3886271102,3123389489&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960" },
    { url: "http://gips3.baidu.com/it/u=100751361,1567855012&fm=3028&app=3028&f=JPEG&fmt=auto?w=960&h=1280" },
    { url: "http://gips1.baidu.com/it/u=1746086795,2510875842&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024" },
    { url: "http://gips2.baidu.com/it/u=3944689179,983354166&fm=3028&app=3028&f=JPEG&fmt=auto?w=1024&h=1024" }]

</script>
<style scoped
  lang="scss"></style>
