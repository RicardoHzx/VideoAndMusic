<template>
    <div class="play">
        <div class="playNav">
            <div id="z1">
                <div id="bt"><p>热门歌曲:</p></div>
                <div id="z1q" v-for="item in songs" :key="item.id">
                    <a href=""><img id="songImg1" :src="item.headImage" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center" id="songName1"></p></a></div>
                    <div><p align="center">{{item.songName}}</p></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/我最亲爱的.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">我最亲爱的</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/非攻.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">非攻</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/所见之日.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">所见之日乃是终止之时</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/不可能.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">不可能</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/第一顺位.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">第一顺位</p></a></div>
                </div>
            </div>
            <div id="y1">
            <div id="bt"><p>分类:</p></div>
            <div id="ya">
                <div id="au"><el-button round><router-link to="/play">情歌</router-link></el-button></div>
                <div id="au"><el-button round>红歌</el-button></div>
                <div id="au"><el-button round>劲爆</el-button></div>
                <div id="au"><el-button round>伤感</el-button></div>
                <div id="au"><el-button round>经典老歌</el-button></div>
                <div id="au"><el-button round>欧美</el-button></div>
                <div id="au"><el-button round>网络歌曲</el-button></div>
                <div id="au"><el-button round>民歌</el-button></div>
                <div id="au"><el-button round>80后</el-button></div>
                <div id="au"><el-button round>儿歌</el-button></div>
                <div id="au"><el-button round>安静</el-button></div>
            <router-view></router-view>
            </div>
            </div>
            <div id="y2">
                <div id="bt2"><p>今日推荐:</p></div>
                <div id="rt">
                    <el-table
                    :data="tableData"
                    height="200"
                    border
                    @row-click="toPlay"
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    width="40">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="音乐标题"
                    width="200"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="address"
                    label="歌手"
                    >
                    </el-table-column>
                </el-table>
                </div>
            </div>
            <div id="c">
                <el-carousel :interval-position="outside" type="card" height="280px">
                <el-carousel-item>
                    <img src="http://business.cdn.qianqian.com/qianqian/pic/bos_client_15769082803adc75162f1b798b66120a962d079913.jpg@s_2,w_750,h_300" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/m_banner1.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                    <img src="@/assets/m_banner2.jpg" alt="">
                </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <router-view class="playContent"/>
        <div id="z2">
                <div id="bt"><p>新曲速递:</p></div>
                <div id="z1q">
                    <a href=""><img id="songImg4"  style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center" id="songName4"></p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/过去了.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">过去了</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/其实好想她.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">其实好想她</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/红尘不恋.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">红尘不恋</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/剑器行.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">剑器行</p></a></div>
                </div>
            </div>
            <div id="z2">
                <div id="bt"><p>精品推广:</p></div>
                <div id="z1q">
                    <a href=""><img id="songImg5"  style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center" id="songName5"></p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/无处可逃.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">无处可逃</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/亘古如斯.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">亘古如斯</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/梦回嘉峪关.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">梦回嘉峪关</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img  src="@/assets/标准答案.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">标准答案</p></a></div>
                </div>
            </div>
    </div>
    
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data () {
    return {
      tableData: [{
        date: '1',
        name: 'MEGALOVENIA',
        address: 'Toby Fox'
      }, {
        date: '2',
        name: 'Kronos',
        address: '消除'
      }, {
        date: '3',
        name: 'Re:make',
        address: 'ONE OK ROCK'
      }, {
        date: '4',
        name: 'Revenge',
        address: 'TryHardNinja'
      }, {
        date: '5',
        name: '無人区',
        address: '米線p.'
      }, {
        date: '6',
        name: 'Rightfully',
        address: 'Mili'
      }, {
        date: '7',
        name: 'world.execute(me)',
        address: 'Mili'
      }]
    }
  },
  computed:{
      ...mapState('music',['songs']),
  },
  created(){
      this.findAllSong()
  },
  methods:{
      ...mapActions('music',['findAllSong']),
        toPlay(){
            console.log(111)
            this.$router.push({path:'/play'})
        },
        
        // 普通方法
        // toPlayHandler(customer){
        //     this.$router.push({
        //         path:"/music/Toplay",
        //         query:{id:songs.id}
        //     })
        // },
  }
}

</script>

<style scoped>
    .play{
        margin-top: 30px;
        float: left;
    }
    #z1{
        float: left;
        width: 70%;
        height: 500px;
    }
    #bt{
        float: left;
        width: 100%;
        height: 30px;
        margin: 0% 0% 0% 3%;
        font-size: 24px;
        line-height: 20px;
    }
    #z1q{
        float: left;
        width: 166px;
        height: 200px;
        margin:2% 0% 5% 5%;
        line-height: 10px;
    }
    #y1{
        float: left;
        width: 30%;
        height: 270px;
    }
    #ya{
        float: left;
    }
    #au{
        float: left;
        margin: 6% 0% 0% 3%;
    }
    #y2{
        float: left;
        width: 30%;
        height: 300px;
    }
    #bt2{
        float: left;
        width: 100%;
        height: 70px;
        margin: 0% 0% 0% 3%;
        font-size: 24px;
        line-height: 20px;
    }
    #c{
        margin-top: 2%;
        float: left;
        width: 100%;
    }
    .el-carousel__item h3 {
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  #z2{
        float: left;
        width: 100%;
        height: 320px;
    }
  #gqm{
      margin-top: 23px;
  }
</style>
