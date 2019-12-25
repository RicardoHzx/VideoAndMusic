<template>
    <div id="all">
    <div id="kz">
      <p id="bt">播放设备：</p><el-button type="primary" id="gg">刷新当前状态</el-button>
      <div id="sb1">
        <div id="sbk">
             <h3 id="sbm">音响1</h3>
             <img id="sbt" src="@/assets/yinxiang.jpg" width="100%" height="100%"/>
             <h3 class="demonstration">音量</h3>
             <el-slider v-model="v1"></el-slider>
             <h3>当前播放内容:<p id="bfnr"></p></h3>
        </div>
        <div id="sbk">
            <h3 id="sbm">电视1</h3>
            <img id="sbt" src="@/assets/dianshi.jpg" width="100%" height="100%"/>
            <h3 class="demonstration">音量</h3>
            <el-slider v-model="v2"></el-slider>
            <h3>当前播放内容:<p id="bfnr"></p></h3>
        </div>
        <div id="sbk">
            <h3 id="sbm">投影1</h3>
            <img id="sbt" src="@/assets/touying.jpg" width="100%" height="100%"/>
            <h3 class="demonstration">音量</h3>
            <el-slider v-model="v3"></el-slider>
            <h3>当前播放内容:<p id="bfnr"></p></h3>
        </div>
      </div>
    </div>
              <p id="bt">场景设备：</p>
              <div id="kz">
                  <div id="sb2">
                      <h3 id="cjsbm">一路灯</h3>
                      <div id="kg"><el-switch v-model="value1" active-color="#13ce66" inactive-color="#ff4949" @change='openLight_1($event,1)'>
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">二路灯</h3>
                      <div id="kg"><el-switch v-model="value2" active-color="#13ce66" inactive-color="#ff4949" @change='openLight_2($event,1)'>
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">三路灯</h3>
                      <div id="kg"><el-switch v-model="value3" active-color="#13ce66" inactive-color="#ff4949" @change='openLight_3($event,1)'>
                      </el-switch>
                      </div>
                      <h3 id="cjsbm">窗帘</h3>
                      <div id="kg"><el-switch v-model="value4" active-color="#13ce66" inactive-color="#ff4949" @change='opencurtain($event,1)'>
                      </el-switch>
                      </div>
                  </div>
              </div>
    </div>
</template>

<script>
  import {mapState,mapActions,mapGetters} from 'vuex'
  export default {
    data() {
      return {
        v1:0,
        v2:0,
        v3:0,

        value1: false,
        value2: false,
        value3: false,
        value4: false
      }
    },
  created(){
    
  },
  computed:{
    
  },
  methods:{
    ...mapActions('Control',['openLight1','closeLight1','openLight2','closeLight2','openLight3','closeLight3','opencurtain','closecurtain']),

    openLight_1(a,b){
        console.log(this.value1,b)
    if(!this.value1){
        this.openLight1(b)
    }else{
        this.closeLight1(b)
    }
    },
    openLight_2(a,b){
        console.log(this.value2,b)
    if(!this.value2){
        this.openLight2(b)
    }else{
        this.closeLight2(b)
    }
    },
    openLight_3(a,b){
        console.log(this.value3,b)
    if(!this.value3){
        this.openLight3(b)
    }else{
        this.closeLight3(b)
    }
    },
    opencurtain(a,b){
        console.log(this.value4,b)
    if(!this.value4){
        this.opencurtain(b)
    }else{
        this.closecurtain(b)
    }
    }
  },
}
  
</script>

<style scoped>
    #all{
        float: left ;
        margin: 3% 0% 0% 10%;
    }
    #kz{
        float: left ;
    }
    #bt{
        float: left;
        width: 65%;
        font-size: 20px;
        margin-top: -20px;
        margin-bottom: 30px;
        margin-left: 0%;
    }
    #sb1{
        float: left;
        width: 1140px;
        height: 330px;
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
        margin-top: -20px;
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
</style>