<template>
    <div class="model">
        <el-carousel trigger="click" height="600px" :autoplay="false">
      <el-carousel-item >
          <div id="wk">
              <p id="dbt">聚会模式</p>
              <p id="bt">播放设备：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                  </div>
              </div>
          </div>
      </el-carousel-item>
      <el-carousel-item>
          <div id="wk">
              <p id="dbt">睡眠模式</p>
              <p id="bt">播放设备：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                  </div>
              </div>
          </div>
      </el-carousel-item>
      <el-carousel-item>
          <div id="wk">
              <p id="dbt">阅读模式</p>
              <p id="bt">播放设备：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                  </div>
              </div>
          </div>
      </el-carousel-item>
       <el-carousel-item>
         <div id="wk">
              <p id="dbt">儿童模式</p>
              <p id="bt">播放设备：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="value1"></el-slider>
                          <h3>播放内容:<p id="bfnr"></p></h3><el-button id="gg">更改</el-button>
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" @change='openLight_1($event,1)'>
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                  </div>
              </div>
          </div>
      </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
import {mapState,mapActions,mapGetters} from 'vuex'
  export default {
    data() {
      return {
        value1: 0,
        value: false,
        value2: false,
        value3: false,
        value4: true,
      }
    },
  created(){
    
  },
  computed:{
    
  },
  methods:{
    ...mapActions('equipment',['openLight1','closeLight1']),

    openLight_1(a,b){
        console.log(this.value,b)
    //   this.openLight1(true);
    if(!this.value){
        this.openLight1(b)
    }else{
        this.closeLight1(b)
    }
      console.log("aaaaaaaaaa")
    }
  },
  }
</script>

<style scoped>
    .el-carousel__item is-active is-animating {
    opacity: 0.75;
    line-height: 1200px;
    margin: 0;
    }
    #wk{
        float: left;
        margin: 2% 8% 0% 8%;
    }
    #dbt{
        float: left;
        width: 100%;
        font-size: 30px;
        line-height: 40px;
    }
    #bt{
        float: left;
        width: 100%;
        font-size: 20px;
        margin-left: 0%;
    }
    #sb1{
        float: left;
        width: 1140px;
        height: 360px;
    }
    #sbk{
        float: left;
        margin-right: 10%;
        width: 250px;
        height: 260px;
    }
    #sbm{
        margin-top: -15px;
    }
    #sbt{
        
        width: 250px;
        height: 200px;
    }
    .el-slider{
        margin-left: 60px;
        margin-top: -30px;
    }
    .demonstration{
        width:40px;
    }
    #gg{
        margin-left: 90px;
    }
    #sb2{
        float: left;
    }
    #cjsbm{
        float: left;
        margin-left: 10px;
    }
    #kg{
        float: left;
        margin-left: 80px;
        margin-right: 100px;
    }
    #kz{
        float: left;
        margin-top:20px; 
    }
</style>