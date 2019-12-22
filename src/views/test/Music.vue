<template>
    <div class="play">
        <div class="playNav">
            <div id="z1">
                <div id="bt"><p>热门歌曲:</p></div>
                <div id="z1q">
                    <a href=""><img id="songImg1"  style="height:100%; width:100%"/></a>
					          <a href=""><p align="center" id="songName1"></p></a>
                    <div id="z1q">
                    <a href=""><img id="songImg2" style="height:100%; width:100%"/></a>
				            <a href=""><p align="center" id="songName2"></p></a>
                </div>
                </div>
                <div id="z1q">
                    <a href=""><img id="songImg3" style="height:100%; width:100%"/></a>
					<a href=""><p align="center" id="songName3"></p></a>
                </div>
                <div id="z1q">
                    <a href=""><img id="songImg4" style="height:100%; width:100%"/></a>
					<a href=""><p align="center" id="songName4"></p></a>
                </div>
                <div id="z1q">
                    <a href=""><img id="songImg6" style="height:100%; width:100%"/></a>
					<a href=""><p align="center" id="songName5"></p></a>
                </div>
                <div id="z1q">
                    <a href=""><img id="songImg6" style="height:100%; width:100%"/></a>
					<a href=""><p align="center" id="songName6"></p></a>
                </div>
                <div id="z1q">
                    <a href=""><img id="songImg7" style="height:100%; width:100%"/></a>
					<a href=""><p align="center" id="songName7"></p></a>
                </div>
                <div id="z1q">
                    <a href=""><img  id="songImg8" style="height:100%; width:100%"/></a>
					<a href=""><p align="center" id="songName8"></p></a>
                </div>
            </div>
            <div id="y1">
            <div id="bt"><p>分类:</p></div>
            <div id="ya">
                <div id="au"><el-button round>情歌</el-button></div>
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
            </div>
            </div>
            <div id="y2">
                <div id="bt2"><p>今日推荐:</p></div>
                <div id="rt">
                    <el-table
                    :data="tableData"
                    height="200"
                    border
                    style="width: 100%">
                    <el-table-column
                    prop="date"
                    width="40">
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="音乐标题"
                    width="200">
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
    </div>
</template>

<!--<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>-->

<script>

// import $ from 'jquery';

// let HOST="http://player.wicp.vip";
// $(function(){
//    $.ajax({
//      url:HOST+"videos/getAllVideos",
//      type:"GET",
//      dataType:"json",
//      success:function(ret){
//          console.log(" "+ret.data);
//      }
//    })
// });


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
  }
}

</script>

<style scoped>
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
        width: 18%;
        height: 40%;
        margin:5% 0% 0% 5%;
        line-height: 10px;
    }
    #y1{
        float: left;
        width: 30%;
        height: 270px;
    }
    #ya{
        float: left;
        margin: 5% 0% 0% 0%;
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
</style>
