<template>
  <div id="app">
    <!-- 头部 -->
    <Header/>
    <!-- 内容部分 -->
    <div class="container">
      <router-view></router-view>
    </div>
    <!-- 底部 -->
    <!-- <Footer/> -->
  </div>
</template>

<script>
import Header from '@/components/Head.vue'
// import Footer from '@/components/footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    // Footer
  },
  created(){
  }
}
</script>

<style>
body {
    color: #424242;
    font-size: 14px;
    line-height: 1.75;
}

* {
  font-family:"Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #424242;
}
#app .container {
  width: 100%;
  /* width: 1262px; */
  margin: 0 auto;
  position: relative;
  /* top: 10px; */
}
</style>
