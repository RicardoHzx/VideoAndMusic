<template>
    <div class="play">
        <div class="table">
            <el-table
                :data="tableData"
                style="width: 60%;margin-top:5px">
                <el-table-column
                    prop="date"
                    label="歌曲"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="歌手"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="专辑">
                </el-table-column>
                 <el-table-column
                    prop="set"
                    label="播放">
                    <template >
                        <el-button type="text" size="medium "><i class="el-icon-video-play"></i></el-button>
                        <el-button type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="nav_left">
            
        </div>
        <div>
            <aplayer autoplay
                :music="{
                    title: 'Preparation',
                    author: 'Hans Zimmer/Richard Harvey',
                    url: 'http://devtest.qiniudn.com/Preparation.mp3',
                    pic: 'http://devtest.qiniudn.com/Preparation.jpg',
                    lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
                }"
                />
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
 export default {
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路',     
            
          }]
        }
      }
    }
    </script>
<style scoped>

</style>