<template>
  <div class="qingwu color">

    <el-row :gutter="20">
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日新增用户</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">
              {{ statistical.today_member_total }}
            </font>
            <div class="unline"></div>
            <div class="default_day_sale">用户总数：<span class="blue">{{ statistical.member_total }}</span></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日新增课程订单</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">
              {{ statistical.today_course_total }}
            </font>
            <div class="unline"></div>
            <div class="default_day_sale">课程订单总数：<span class="blue">{{ statistical.course_total }}</span></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日新增商品订单</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">
              {{ statistical.today_goods_total }}
            </font>
            <div class="unline"></div>
            <div class="default_day_sale">商品订单总数：<span class="blue">{{ statistical.goods_total }}</span></div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>今日销售额（元）</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">
              {{ statistical.today_money_total }}
            </font>
            <div class="unline"></div>
            <div class="default_day_sale">销售总额：<span class="blue">{{ statistical.money_total }}</span></div>
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
            <font style="font-size:30px;">
              {{ statistical.complain_total }}
            </font>
            <div class="unline"></div>
            <div class="default_day_sale blue right">
              <el-button type="text" @click="$router.push({name: 'module_complain_list'})">
                去查看
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="8" class="default_block_col">
        <el-card shadow="hover" :body-style="{padding:'15px 20px'}">
          <div>待发货订单</div>
          <div class="unline"></div>
          <div class="default_total">
            <font style="font-size:30px;">
              {{ statistical.wait_order_total }}
            </font>
            <div class="unline"></div>
            <div class="default_day_sale blue right">
              <el-button type="text" @click="$router.push({name: 'module_order_goods_list', query: {pay_status: 1, order_status: 0}})">
                去查看
              </el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        statistical: {
          today_member_total: 0,
          member_total: 0,
          today_course_total: 0,
          course_total: 0,
          today_goods_total: 0,
          goods_total: 0,
          today_money_total: 0,
          money_total: 0,
          complain_total: 0,
          wait_order_total: 0,
        },
      };
    },
    methods: {
      init() {
        this.$http({
          url: this.$http.adornUrl(`/index/data`),
          method: 'get',
          params: this.$http.adornParams()
        }).then(({data}) => {
          if (data && data.status === 200) {
            this.statistical.today_member_total = data.data.today_member_total
            this.statistical.member_total       = data.data.member_total
            this.statistical.today_course_total = data.data.today_course_total
            this.statistical.course_total       = data.data.course_total
            this.statistical.today_goods_total  = data.data.today_goods_total
            this.statistical.goods_total        = data.data.goods_total
            this.statistical.today_money_total  = data.data.today_money_total
            this.statistical.money_total        = data.data.money_total
            this.statistical.complain_total     = data.data.complain_total
            this.statistical.wait_order_total   = data.data.wait_order_total
          }
        })
      }
    },
    created(request)
    {
      this.init();
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
