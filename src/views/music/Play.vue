<template>
    <div class="play">
        <div class="song">
            <!-- {{songs}} -->
            <el-table
            :data="songs"
            style="width: 60%;margin-top:5px">
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
                        移除
                        </el-button>
                    </template>
                    <!-- <template slot-scope="scope">
                     
                        <el-button type="text"><i class="el-icon-video-play" @click="toPlay(record.row)"></i></el-button>
                    </template> -->
                </el-table-column>
            </el-table>
        </div>
        <audio :src="songSrc[0]" controls="controls" autoplay></audio>

    </div>
</template>
<script>
import {mapState,mapActions,mapGetters} from 'vuex'

 export default {
      data() {
        return {
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

</style>