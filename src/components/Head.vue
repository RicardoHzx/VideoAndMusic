<template>
  <div class="header">
    <el-container>
      <el-header>
         <el-row>
          <el-col class="logo" :span="3">
            <a href="/">
              <img src="@/assets/logo-video.svg" alt="">
            </a>
          </el-col>
          <el-col class="nav" :span="10">
              <el-row>
                <el-col :span="3"><router-link to="/movie">影音</router-link></el-col>
                <el-col :span="3"><router-link to="/music">音乐</router-link></el-col>
              </el-row>
          </el-col>
         <el-col class="input" :span="5">
           <div style="margin-top: 17px; margin-left:-300px;">
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
              <el-select v-model="select" slot="prepend" placeholder="选择类型">
                <el-option label="视频" value="1"></el-option>
                <el-option label="音乐" value="2"></el-option>
              </el-select>
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
           </div>
         </el-col>
          <el-col class="login-bar" :span="5">
            <el-row>
              <el-col class="cart-ico" :span="9">
                <router-link to="">
                  <img class="cart-icon" src="" alt="">
                  <!-- <img class="cart-icon" src="@/assets/cart.svg" alt=""> -->
                  <span><router-link to="/equipment">情景模式</router-link></span>
                </router-link>
              </el-col>
              <el-col class="study" :span="8" :offset="2"><router-link to="control">设备控制</router-link></el-col>
              <el-col class="member" :span="5">
                <el-menu class="el-menu-demo" mode="horizontal">
                  <el-submenu index="2">
                    <template slot="title">
                            <router-link to="/user">
                                <img src="" alt="">
                                <!-- <img src="@/assets/logo@2x.png" alt=""> -->
                            </router-link>
                        </template>
                    <!-- <el-menu-item index="2-1">我的账户</el-menu-item>
                    <el-menu-item index="2-2">我的订单</el-menu-item>
                    <el-menu-item index="2-3">我的优惠卷</el-menu-item> -->
                    <el-menu-item index="2-3">退出登录</el-menu-item>
                  </el-submenu>
                </el-menu>
              </el-col>
            </el-row>
          </el-col>
        </el-row> 
      </el-header>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      input3: '',
      select: '',
      // 设置一个登录标识，表示是否登录
      token: false
    }
  }
}
</script>

<style scoped>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-submenu__title{
    line-height: 0 !important;
  }
  .header{
    box-shadow: 0 0.5px 0.5px 0 #c9c9c9;
  }
  .header .el-container{
    width: 1200px;
    margin: 0 auto;
  }
  .el-header{
    height: 80px!important;
    padding:0;
  }
  .logo{

  }
  .logo img{
    padding-top: 11px;
  }

  .nav{
    margin-top: 20px;
  }

  .nav .el-col a{
    display: block;
    text-align: center;
    padding-bottom: 16px;
    padding-left: 5px;
    padding-right: 5px;
    position: relative;
    font-size: 16px;
  }

  .login-bar{
    margin-top: 20px;
  }
  .cart-ico{
    position: relative;
    border-radius: 17px;
  }
  .cart-ico:hover{
    background: #f0f0f0;
  }
  .goods-number{
    width: 16px;
    height: 16px;
    line-height: 17px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    background: #fa6240;
    border-radius: 50%;
    transform: scale(.8);
    position: absolute;
    left: 16px;
    top: -1px;
  }
  .cart-icon{
    width: 15px;
    height: auto;
    margin-left: 6px;
  }
  .cart-ico span{
    margin-left: 12px;
  }
  .member img{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: inline-block;
  }
  .member img:hover{
    border: 1px solid yellow;
  }

</style>
