<template>
  <div class="index">
    <!-- 轮播 -->
     <el-carousel :interval-position="outside" height="520px">
      <el-carousel-item>
          <img src="@/assets/h_banner.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
          <img src="@/assets/h_banner1.jpg" alt="">
      </el-carousel-item>
      <el-carousel-item>
          <img src="@/assets/h_banner2.jpg" alt="">
      </el-carousel-item>
       <el-carousel-item>
          <img src="@/assets/h_banner3.jpg" alt="">
      </el-carousel-item>
      </el-carousel>
      <!-- 猜你喜欢 -->
      <div class="likeDiv">
        <div class="header">
          <span class="text">猜你喜欢</span>
        </div>
        <div class="list">
          <ul>
            <li>
            <!-- <li @click="toDetail(ite.id)"> -->
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <!-- <span>少年的你</span> -->
                <router-link to="/sence">少年的你</router-link>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>       
          </ul>
        </div>
      </div>
      <div>
        <div class="header">
          <span class="text">经典必看</span>
        </div>
        <div class="list">
          <ul>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <router-link to="/sence">少年的你</router-link>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>
            <li>
              <div>
                <img src="@/assets/4.jpg" alt="">
                <span>少年的你</span>
              </div>
            </li>       
          </ul>
        </div>
      </div>
      <div id="bottom">
			<div id="bo1">
				<div id="bo11"><a href=""><p align="center">营业执照</p></a></div>
				<div id="bo12"><a href="https://www.itrust.org.cn/yz/pjwx.asp?wm=1660527705"><p align="center">中国互联网诚信联盟</p></a></div>
				<div id="bo13"><a href=""><p align="center">经营性网站备案信息</p></a></div>
				<div id="bo14"><a href=""><p align="center">增值电信业务许可证</p></a></div>
				<div id="bo15"><a href=""><p align="center">网络电视节目制作经营许可证</p></a></div>
			</div>
			<div id="bo2">
				<div id="bo21"><a href="http://www.12377.cn/"><p align="center">中国互联网举报中心</p></a></div>
				<div id="bo22"><a href=""><p align="center">网络举报APP下载</p></a></div>
				<div id="bo23"><a href=""><p align="center">反盗版和反盗链权利声明</p></a></div>
				<div id="bo24"><a href=""><p align="center">违法和不良信息举报电话</p></a></div>
				<div id="bo25"><a href=""><p align="center">举报邮箱</p></a></div>
			</div>
		</div>
  </div>
</template>

<script>


export default {
  name: 'home',
  components: {

  },
  methods:{
    // toDetail(id){
    //   this.$router.push({
    //     path:'/',
    //     query:{id:Id}
    //   })
    // }
  }
}
</script>
<style scoped>
.el-carousel{
  width:1200px;
  margin: 0 auto;
}
.likeDiv{
  width: 1200px;
  margin: 0 auto;
}
.list ul li{
  display: inline-block
}
/* .text{
  display: inline-block;
  line-height: 28px;
  font-size: 24px;
  padding-top: 30px;
  padding-left: 50px;
}
ul {
  list-style: none;
}
li{
  display: inline;
  float: left;
  margin-right: 15px;
}
.list{
  display: block;
  padding-top: 30px;
  padding-left: 50px;
} */
h2{
  font-weight: 400;
}
.qy-mod-header .qy-mod-title .link-txt{
    color: #222;
}
.qy-mod-header .qy-mod-title .front-icon {
    float: left;
    display: inline-block;
    position: relative;
    padding-left: 38px;
}
.qy-mod-header .qy-mod-icon {
    position: absolute;
    top: 50%;
    left: 0;
    margin-top: -14px;
}
.qy-mod-icon.contshow {
    background-position: -40px 0;
}
.qy-mod-icon {
    width: 28px;
    height: 28px;
    background-size: 400px 120px;
}
.qy-mod-header .qy-mod-title .qy-mod-text {
    display: inline-block;
    font-size: 24px;
}
.qy-mod-header .qy-mod-title .qy-mod-text {
    display: inline-block;
    font-size: 26px;
    line-height: 28px;
}
 .index img{
    display: block;
  }

 .index .pointer{
    cursor: pointer;
  }

  .index .index_list_title{
    padding:30px 0 15px;
    font-weight: 900;
  }
  .index .index_hot_list .index_list_content{
    overflow: hidden;
    padding-bottom:5px;
  }
  .index .index_hot_list .index_list_content .index_list_video{
    float:left;
    width: 1005px;
  }
  .index .index_hot_list .index_list_content .index_list_doc{
    margin-left:1020px;
    width: 210px;
    box-shadow: #aaa 5px 5px 5px; 
    border-left:1px solid #F6F6F6;
  }
  .index .index_hot_list .index_list_content .index_list_video >ul li{
    width: 230px;
    height: 185px;
    float: left;
    box-shadow: #aaa 5px 5px 5px; 
    position: relative;
  }
  .index .index_hot_list .index_list_content .index_list_video >ul li:nth-child(2),.index .index_hot_list .index_list_content .index_list_video >ul li:nth-child(3){
    margin-bottom: 13px;
  }
  .index .index_hot_list .index_list_content .index_list_video >ul li:nth-child(2),.index .index_hot_list .index_list_content .index_list_video >ul li:nth-child(4){
    margin-right:15px;
  }
  .index .index_hot_list .index_list_content .index_list_video img{
    width: 100%;
    height: 140px;
  }
  .index .index_hot_list .index_list_content .index_list_video >ul li:first-child{
    width: 515px;
    height: 383px;
    margin-right: 15px;
  }
  .index .index_hot_list .index_list_content .index_list_video >ul li:first-child img{
    width: 100%;
    height: 100%;
  }
  #bottom{
	width:100%;
	height:20%;
  margin-top: 30px;
	float:left;
	background:#778899;
}
#bo1，#bo2{
	width:100%;
	height:5%;
	float:left;
	margin:2% 0% 0% 0%;
}
#bo11,#bo12,#bo13,#bo14,#bo15,#bo21,#bo22,#bo23,#bo24,#bo25{
	width:19%;
	height:45%;
	float:left;
	}
</style>