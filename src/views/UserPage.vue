<template>
    <div id="all">
        <div id="center">
            <div id="top">
                <h1 id="username">用户1</h1>
            </div>
          <div id="mb">
          <div id="mba"> 
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="收藏的电影" name="1">
                    <el-table :data="movie" style="width: 100%">
                    <el-table-column  prop="date" label="" width="40">
                    </el-table-column>
                    <el-table-column  prop="name"  label="名称"  width="180">
                    </el-table-column>
                    <el-table-column  prop="address"  label="操作">
                    </el-table-column>
                    </el-table>
                </el-collapse-item>
                <el-collapse-item title="收藏的音乐" name="2">
                    <el-table :data="tableData2" style="width: 100%">
                    <el-table-column  prop="date2" label="" width="40">
                    </el-table-column>
                    <el-table-column  prop="name2"  label="名称"  width="180">
                    </el-table-column>
                    <el-table-column  prop="address2"  label="操作">
                    </el-table-column>
                    </el-table>
                </el-collapse-item>
                <el-collapse-item title="浏览历史" name="3">
                    <div>浏览历史说它鸽了</div>
                    <div>真的鸽了</div>
                    <div>真的真的鸽了</div>
                    <div>真的真的真的鸽了</div>
                    <div>真的真的真的真的鸽了</div>
                </el-collapse-item>
            </el-collapse>
          </div>
          </div>
          <div id="y1">
              <div id="y1t">
                  <h2>个性签名：</h2>
                  <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="每日一签，享受蜕变！"
                    v-model="textarea">
                  </el-input>
                <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
                <el-form-item size="large">
                    <el-button type="primary" @click="onSubmit">保存更改</el-button>
                    <el-button>取消</el-button>
                </el-form-item>
                </el-form>
              </div>
          </div>
          <div id="y2">
              <div id="y2t">
                  <img src="@/assets/xqx.jpg" width="100%" height="100%">
              </div>
          </div>
          <div id="y3">
              <div id="y3t">
                  <h3>对本软件有什么意见或建议请发给我们：</h3>
                  <el-input
                    type="textarea"
                    :rows="2"
                    placeholder="感谢您的支持与帮助！"
                    v-model="textarea">
                  </el-input>
                  <el-button type="primary" @click="onSubmit" id="fs">发送</el-button>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeNames: ['1'],
          tableData1: [{
            date: '1',
            name: '鸽舞升平',
          }]
      };
    },
    methods: {
      onSubmit() {
      console.log('submit!');
      },
      handleChange(val) {
        console.log(val);
      }
    }
  }
</script>

<style >
    .el-collapse-item__header{
        font-size: 28px;
    }
    #center{
        margin: 0px 8% 0px 10%;
        width: 88%;
        height: 1000px;
    }
    #top{
        width: 90%;
        height: 80px;
        border: solid thin;
    }
    #username{
        margin: 17px 0 0 30px;
    }
    #mb{
        float: left;
        width: 700px;
        border: solid thin;
    }
    #mba{
        float: left;
        width: 96%;
        margin: 5px 0 150px 20px;
    }
    #y1{
        float: left;
        width: 316px;
        height: 210px;
        margin-left: 50px;
        border: solid thin;
    }
    #y1t{
        margin-top: 10px;
        margin-left: 23px;
        float: left;
    }
    #y2{
        float: left;
        width: 316px;
        height: 120px;
        margin-left: 50px;
        margin-top: 20px;
    }
    #y2t{
        height: 120px;
        margin: 0 0px 20px 0px; 
    }   
    #y3{
        float: left;
        width: 316px;
        height: 180px;
        margin-left: 50px;
        margin-top: 20px;
        border: solid thin;
    }
    #y3t{
        margin-top: 10px;
        margin-left: 23px;
        float: left;
    }
    #fs{
        float: right;
    }
</style>