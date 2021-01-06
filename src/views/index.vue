<template>
  <div class="qingwu color">

    <el-row :gutter="20">
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日新增用户</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">111</font>
            <div class="unline"></div>
            <div class="default_day_sale">用户总数：11111</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日新增课程订单</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">111</font>
            <div class="unline"></div>
            <div class="default_day_sale">课程订单总数：11111</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日新增商品订单</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">111</font>
            <div class="unline"></div>
            <div class="default_day_sale">商品订单总数：11111</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日销售额（元）</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">111</font>
            <div class="unline"></div>
            <div class="default_day_sale">销售总额：11111</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>红包提现审核</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">111</font>
            <div class="unline"></div>
            <div class="default_day_sale blue right">去审核</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>收到投诉</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">111</font>
            <div class="unline"></div>
            <div class="default_day_sale blue right">去查看</div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>待发货订单</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">111</font>
            <div class="unline"></div>
            <div class="default_day_sale blue right">去查看</div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import VeHistogram from 'v-charts/lib/histogram.common'
  import VePie from 'v-charts/lib/pie.common'
  import VeBar from 'v-charts/lib/bar.common'
  import VeRing from 'v-charts/lib/ring.common'
  import VeLine from 'v-charts/lib/line.common'
  import VeFunnel from 'v-charts/lib/funnel.common'
  export default {
    components: {
      VeHistogram,
      VePie,
      VeBar,
      VeRing,
      VeLine,
      VeFunnel,
    },
    data() {
      return {
        courseData: {
          columns: ['title', 'value'],
          rows: []
        },

        userColors: ['#00978b','#ff6600'],
        userData: {
          columns: ['title', '会员数', '机构数'],
          rows: []
        },

        keywordSettings: {
          roseType: 'radius'
        },
        keywordData: {
          columns: ['title', 'value'],
          rows: []
        },

        equipmentData: {
          columns: ['title', 'value'],
          rows: []
        },

        questionSettings: {
          useDefaultOrder: true,
          filterZero: true
        },
        questionData: {
          columns: ['title', 'value'],
          rows: []
        },

        studySettings: {
          area: true
        },
        studyColors: ['#ff2211'],
        studyData: {
          columns: ['title', '学习人数'],
          rows: []
        }
      };
    },
    methods: {
    },
    mounted(){
    }
  };
</script>
<style lang="scss" scoped>
  .unline {
    margin: 15px 0;
  }
  .default_program {
    text-align: center;
    width: 100%;
  }
  .default_program ul li {
    float: left;
    width: 22%;
    background: #f9f9f9;
    margin-right: 4%;
    margin-bottom: 10px;
  }
  .default_program ul li:nth-child(4n) {
    margin-right: 0;
  }
  .default_program ul li:hover {
    background: #f1f1f1;
  }
  .default_program2 ul li {
    float: left;
    width: 48%;
    background: #f9f9f9;
    margin-right: 4%;
    margin-bottom: 18px;
    height: 82px;
    padding: 10px;
    box-sizing: border-box;
    font-size: 12px;
    color: #999;
  }
  .default_program2 ul li:nth-child(2n) {
    margin-right: 0;
  }
  .default_program2 ul li:nth-child(3) {
    width: 100%;
  }
  .default_program2 ul li:hover {
    background: #f3f3f3;
  }
  .default_program .i_backgraounds {
    text-align: center;
    margin: 0 auto;
    display: block;
    padding: 5px 0;
  }
  .default_program2 p {
    line-height: 55px;
    font-size: 22px;
    color: #303133;
  }
  .i_backgraounds i {
    font-size: 28px;
  }
  .default_program p {
    text-align: center;
    background: #fff;
    line-height: 30px;
    font-size: 12px;
    clear: both;
  }
  .default_block_col {
    margin-bottom: 20px;
  }
  .default_copyright ul li {
    line-height: 66px;
    border-bottom: 1px solid #efefef;
  }
  .default_copyright ul li:nth-child(3) {
    border-bottom: none;
  }
  .default_copyright ul li span {
    margin-right: 60px;
  }
  .default_tongbi_left {
    float: left;
  }
  .default_tongbi_right {
    float: left;
    margin-left: 40px;
  }
  .default_tongbi:after {
    clear: both;
    content: "";
    display: block;
  }
  .default_total:after {
    clear: both;
    content: "";
    display: block;
  }
  .default_tongbi {
    margin-top: 20px;
  }
  .default_day_sale {
    margin-top: 30px;
    margin-bottom: 45px;
  }
  .default_tubiao {
    width: 100%;
    margin-bottom: 20px;
  }
  .default_hot_goods ul li {
    margin-top: 20px;
    overflow: hidden;
  }
  .default_hot_goods ul li span {
    border-radius: 50%;
    background: #f5f5f5;
    width: 20px;
    height: 20px;
    text-align: center;
    display: block;
    float: left;
    margin-right: 8px;
  }
  .default_hot_goods ul li:nth-child(1) span {
    background: #314659;
    color: #fff;
  }
  .default_hot_goods ul li:nth-child(2) span {
    background: #314659;
    color: #fff;
  }
  .default_hot_goods ul li:nth-child(3) span {
    background: #314659;
    color: #fff;
  }
</style>
