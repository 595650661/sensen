<template>
  <div style="width: 100%;  text-align: center">
    <el-carousel trigger="click" type="card" height="400px">
      <el-carousel-item v-for="item in imageUrls" :key="item">
        <!-- <img :src="getAssetsFile(item.url)" alt="" style="height: 100%;" /> -->
        <img :src="item.url" alt="" style="height: 100%;" />
      </el-carousel-item>
    </el-carousel>
  </div>

</template>
<script setup
  lang="ts">
  import { ref, reactive } from 'vue'
  import { getAssetsFile } from './utils/pubUse'
  // const imageUrls = [
  //   { url: "sensen.jpg" },
  //   { url: "kaixin.jpg" },
  //   { url: "keai.jpg" },
  // ]
  const imageUrls = [
    { url: "https://tse1-mm.cn.bing.net/th/id/OIP-C.7Ppn3n3SF64oWnIBAKcrGAHaNK?rs=1&pid=ImgDetMain" },
    { url: "https://n.sinaimg.cn/sinacn10113/332/w1024h1708/20190806/73d1-iatixpm8624905.jpg" },
    { url: "https://tse2-mm.cn.bing.net/th/id/OIP-C.2zd6VjunSEhgIOVfmMFXZAHaNK?rs=1&pid=ImgDetMain" },
  ];

</script>
<style scoped
  lang="scss"></style>
