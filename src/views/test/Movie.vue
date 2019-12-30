<template>
    <div id="all">
        <!-- <div id="ry">
          <div id="bt"><p>正在热映:</p></div> 
        </div> -->
        {{movies}}
        <div id="f1"></div>
        <h2 id="tbq">正在热映:</h2>
        <div id="z1"><el-carousel :interval-position="outside" height="270px" >
            <el-carousel-item>
                <div id="z1q"  v-for="item in videos" :key="item.id">
                    <a href=""><img id="movie1" :src="item.headImage" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center" id="movie1"></p></a></div>
                    <div><p align="center">{{item.videoName}}</p></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/ys1.jpg" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">蜘蛛侠-英雄归来</p></a></div>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div id="z1q">
                    <a href=""><img src="@/assets/ys2.jpg" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">千与千寻</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/yx2.jpg" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">阿丽塔 战斗天使</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/ys5.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">误杀</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/ys4.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">半个喜剧</p></a></div>
                </div>
            </el-carousel-item>
            </el-carousel>
        </div>
        <div id="r1">
            <h2>一周口碑榜</h2>
            <el-table :data="tableData" style="width: 250%">
            <el-table-column prop="number" label="Top" width="60">
            </el-table-column>
            <el-table-column prop="name" label="影片名" width="150">
            </el-table-column>
            </el-table>
        </div>
        <div id="z2">
            <h2>热门电影:</h2>
            <div id="z2t">
            <div id="z1q">
                    <a href=""><img id="movie2"  style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center" id="movie2"></p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/q1.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">82年生的金智英</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/q2.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">小丑</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/q3.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">原钻</p></a></div>
                </div>
            </div>
        </div>
        <div id="z3">
            <h2>热门电视剧:</h2>
            <div id="z2t">
             <div id="z1q">
                    <a href=""><img src="@/assets/w1.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">庆余年</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/w2.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">爱的迫降</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/w3.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">精英律师</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/w4.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">生活如沸</p></a></div>
                </div>
            <div id="z1q">
                    <a href=""><img src="@/assets/w5.png"  style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">大明风华</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/w6.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">剑王朝</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/w7.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">明星大侦探 第五季</p></a></div>
                </div>
                <div id="z1q">
                    <a href=""><img src="@/assets/w8.png" style="height:100%; width:100%"/></a>
					<div id="gqm"><a href=""><p align="center">精神变态日记</p></a></div>
                </div>
            </div>
        </div>
        <div id="r2">
            <h2>今日强推：</h2>
            <br/>
            <a href=""><img src="@/assets/e1.png" id="e1"/></a>
            <h2>寂静之地2首曝预告！</h2>
            <p id="awsl">艾米莉·布朗特、诺亚·尤佩、米莉森·西蒙斯回归出演！前作导演兼男主约翰·卡拉辛斯基继续执导！</p>
        </div>
    </div>
</template>

<script>
 import {mapActions,mapState} from 'vuex'
  export default {
    data() {
      return {
        tableData: [{
          number: '1',
          name: '婚姻故事',

        }, {
          number: '2',
          name: '燃烧女子的雕像',
        }, {
          number: '3',
          name: '野名留史又如何',
        }, {
          number: '4',
          name: '漫长的告白',
        }, {
          number: '5',
          name: '猴子',
        }, {
          number: '6',
          name: '外出偷马',
        }, {
          number: '7',
          name: '朱迪',
        }, {
          number: '8',
          name: '丧尸乐园2',
        }, {
          number: '9',
          name: '抗拒：柳宽顺的故事',
        }, {
          number: '10',
          name: '怪胎',
        }]
      }
    },
    computed:{
        ...mapState('movie',['videos']),
    },
    created(){
        this.findAllVideo()
    },
    methods:{
      ...mapActions('movie',['findAllVideo']),
        toPlay(){
            console.log(111)
            this.$router.push({path:'/play'})
        },
       
  }
}
</script>


<style scoped>
    #all{
        float: left;
        margin-left: 50px;
        margin-right: 50px;
    }
    #f1{
        width: 100%;
        height: 13px;
    }
    #tbq{
        float: left;
        width: 380px;
        height: 30px;
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
    #gqm{
      margin-top: 23px;
    }
    #z1{
       width: 900px;
       height: 100%;
       float: left;
       margin-top: 5px;
       margin-left: -30px;
    }
    #r1{
        float: left;
        width:260px;
        height: 600px;
        margin-left: 70px;
        margin-top: -30px;
    }
    #z2{
        float: left;
        width: 900px;
        height: 320px;
        margin-top: -280px;
    }
    #z2t{
        float: left;
        margin-left: -20px;
        width: 900px;
    }
    #z3{
        float: left;
        width: 900px;
        height: 320px;

    }
    #r2{
        float: left;
        width:260px;
        height: 400px;
        margin-left: 70px;
    }
    #e1{
        float: left;
        width: 280px;
        height: 240px;
    }
    #awsl{
        text-indent: 15px;
    }
</style>
