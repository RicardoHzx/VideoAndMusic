<template>
    <div class="model">
        <el-carousel trigger="click" height="600px" :autoplay="false">
      <el-carousel-item >
          <div id="wk">
              <p id="dbt">聚会模式</p>
              <el-button type="primary" id="gg">保存更改</el-button>
              <p id="bt">播放设备：</p><p id="bfnr">播放内容：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v1"></el-slider>
                          
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v2"></el-slider>
                          
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v3"></el-slider>
                         
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949">
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
              <el-button type="primary" id="gg">保存更改</el-button>
              <p id="bt">播放设备：</p><p id="bfnr">播放内容：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v4"></el-slider>
                         
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v5"></el-slider>
                          
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v6"></el-slider>
                          
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value5" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value6" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value7" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value8" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                  </div>
              </div>
          </div>
      </el-carousel-item>
      <el-carousel-item>
          <div id="wk">
              <p id="dbt">阅读模式</p>
              <el-button type="primary" id="gg">保存更改</el-button>
              <p id="bt">播放设备：</p><p id="bfnr">播放内容：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v7"></el-slider>
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v8"></el-slider>
                          
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v9"></el-slider>
                          
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value9" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value10" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value11" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value12" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                  </div>
              </div>
          </div>
      </el-carousel-item>
       <el-carousel-item>
         <div id="wk">
              <p id="dbt">儿童模式</p>
              <el-button type="primary" id="gg">保存更改</el-button>
              <p id="bt">播放设备：</p><p id="bfnr">播放内容：</p>
              <div id="kz">
                  <div id="sb1">
                      <div id="sbk">
                          <h3 id="sbm">音响1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v10"></el-slider>
                          
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">电视1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v11"></el-slider>
                          
                      </div>
                      <div id="sbk">
                          <h3 id="sbm">投影1</h3>
                          <el-checkbox id="gx" label="开启"></el-checkbox>
                          <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
                          <h3 class="demonstration">音量</h3>
                          <el-slider v-model="v12"></el-slider>
                          
                      </div>
                  </div>
              </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
<<<<<<< HEAD
                      <div id="kg"><el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949" @change='openLight_1($event,1)'>
=======
                      <div id="kg"><el-switch v-model="value13" active-color="#13ce66" inactive-color="#ff4949">
>>>>>>> dc47a95ddb276af364069745bd95edcecd566e36
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value14" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value15" active-color="#13ce66" inactive-color="#ff4949">
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value16" active-color="#13ce66" inactive-color="#ff4949">
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
<<<<<<< HEAD
        value1: 0,
        value: false,
=======
        v1: 0,
        v2: 36,
        v3: 0,

        value1: true,
>>>>>>> dc47a95ddb276af364069745bd95edcecd566e36
        value2: false,
        value3: false,
        value4: true,

        v4:40,
        v5:0,
        v6:0,

        value5: true,
        value6: true,
        value7: true,
        value8: false,

        v7:0,
        v8:0,
        v9:60,

        value9: false,
        value10: true,
        value11: true,
        value12: true,

        v10:10,
        V11:10,
        V12:0,

        value13: true,
        value14: true,
        value15: false,
        value16: true,
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
        width: 80%;
        font-size: 30px;
        line-height: 40px;
    }
    #bt{
        float: left;
        width: 65%;
        font-size: 20px;
        margin-left: 0%;
    }
    #sb1{
        float: left;
        width: 1140px;
        height: 290px;
    }
    #sbk{
        float: left;
        margin-right: 10%;
        width: 250px;
        height: 260px;
    }
    #sbm{
        margin-top: -15px;
        width: 190px;
        float: left;
    }
    #gx{
        float: left;
        margin-top: -13px;
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
    #gg{
        float: left;
    }
    #bfnr{
        float: left;
        font-size: 20px;
    }
</style>