<template>
    <div class="play">
        <div class="song">
            <!-- {{songs}} -->
            <div id="lb">
            <!-- 表格 -->
            <el-table
            :data="songs"
            stripe
            height="430px"
            style="width: 95%;margin:20px 0 0 70px; ">
                <!-- <el-table-column type="selection" width="55"></el-table-column> -->
                <el-table-column prop="id" label="编号"></el-table-column>
                <el-table-column prop="songName" label="歌曲名"></el-table-column>
                <el-table-column prop="author" label="作者"></el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button
                        @click.native.prevent="toPlay(scope.row)"
                        type="text"
                        size="small">
                        播放
                        </el-button>
                    </template>
                    <!-- <template slot-scope="scope">
                     
                        <el-button type="text"><i class="el-icon-video-play" @click="toPlay(record.row)"></i></el-button>
                    </template> -->
                </el-table-column>
            </el-table>
            </div>
            <div id="y1">
                <h2 id="bt">播放设备：</h2>
                    <div id="dx">
                    <el-checkbox-group v-model="checkList">
                        <el-checkbox label="电视"></el-checkbox>
                        <el-checkbox label="音响"></el-checkbox>
                        <el-checkbox label="投影"></el-checkbox>
                    </el-checkbox-group>
                    <br/>
                    <el-button type="primary">获取播放设备</el-button>
                    <el-button type="primary">设置场景模式</el-button>
                    </div>
            </div>
        </div>
    <div id="bft">
        <div id="gm"><p>歌曲1</p></div>
        <div id="zz"><p>作者1</p></div>
      <audio :src="songSrc[0]" controls="controls" style="width:60%; height:60px; margin:0px 0px 0px 50px; position: absolute;" autoplay ></audio>
      <div id="sc"><img src="@/assets/收 藏.png" width="100%"  height="100%"/></div>
    </div>
    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex' 

 export default {
      data() {
        return {
            checkList: [],
          song:{},
        //   songs:[{
        //       id:8,
        //       songName:'樱花草',
        //       author:'Swerty',
        //       src:'http://172.20.10.6:9001/play/playSong/8'
        //   }],
          songSrc:[],
        }
      },
        computed:{
            ...mapState("music",["songs"]),
        },
        created(){
            this.findAllSong();
        },
        methods:{
            ...mapActions("music",["findAllSong"]),

            toPlay(item){
                console.log(item,"aaaa")
                this.songSrc.push(item.src)
            }
            
        }
    }
    </script>


<style scoped>
    #bft{
        float: left;
        background-color: #1b1b1b;
        height: 84px;
        width: 100%;
        margin: 85px 0 0 0;
    }
    #lb{
        float: left;
        width: 65%;
    }
    #sc{
        float: right;
        height: 30px;
        width: 30px;
        margin: 26px 130px 0 0px;
    }
    #y1{
        float: left;
        width: 22%;
        height: 340px;
        margin: 3% 0% 0% 5%;
        border:solid thin;
    }
    #bt{
        margin-left: 4%;
    }
    #dx{
        margin-left: 4%;
    }
    #gm{
        float: left;
        font-size: 20px;
        width: 70px;
        height: 20px;
        color: rgb(223, 223, 223);
        margin: 20px 0 0 40px;
    }
    #zz{
        float: left;
        font-size: 15px;
        width: 70px;
        height: 20px;
        color: rgb(223, 223, 223);
        margin: 25px 0 0 100px;
    }
</style>