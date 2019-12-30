<template>
    <div id="yybf">
    <div id="video">
			<video id="play" width="100%" height="100%" controls="controls">
			</video>
	</div>
    <div id="right">
    <h2 id="bt">播放设备：</h2>
        <div id="dx">
        <br/>
        <el-button type="primary">获取当前播放设备</el-button>
        <el-button type="primary">设置场景模式</el-button>
        </div>
    <h2 id="bt">播放列表：</h2>
        <div id="lb">
        <el-table :data="tableData" style="width: 100%" height="250">
        <el-table-column fixedprop="date" label="" width="40"> </el-table-column>
        <el-table-column prop="name" label="内容标题" width="80"></el-table-column>
        <el-table-column  prop="province" label="演员" width="120"></el-table-column>
        <el-table-column prop="city"  label="时长" width="80"></el-table-column>
        </el-table>
        </div>
        
        <el-button type="primary" style="margin:50px 30px 0 20px; float:right">添加收藏</el-button>
    </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      checkList: []
    }
    return {
      tableData: [{
      }, {

      }]
    }
  }
}

</script>

<style>
    #video{
        width:60%;
        height: 500px;
        float: left;
        margin: 3% 0% 0% 5%;
    }
    #right{
        float: left;
        width: 27%;
        height: 500px;
        margin: 3% 0% 0% 5%;
        border:solid thin;
    }
    #bt{
        margin-left: 4%;
    }
    #dx{
        margin-left: 4%;
    }
    #lb{
        margin: 0% 2% 0% 2%;
        float: left;
        width: 95%;
        height: 200px;
    }
</style>
