<template>

  <!-- <img src="./assets/images/sensen.jpg" mode="scaleToFill"
        style="width: 200px; height: 200px;background-color: red" /> -->
  <div style="width: 100%; height: 100%; text-align: center">
    <el-carousel trigger="click" type="card" height="600px">
      <el-carousel-item v-for="item in imageUrl" :key="item">
        <img :src="getAssetsFile(item.url)" alt="" style="height: 100%;" />
      </el-carousel-item>
    </el-carousel>
  </div>

</template>
<script setup
  lang="ts">
  import { ref, reactive } from 'vue'
  import { getAssetsFile } from '@/utils/pubUse'
  const imageUrl = [
    { url: "sensen.jpg" },
    { url: "kaixin.jpg" },
    { url: "keai.jpg" },
    { url: "baitian.jpg" },]

</script>
<style scoped
  lang="scss"></style>
