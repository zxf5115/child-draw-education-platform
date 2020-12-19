<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>工资设置</div>
        </div>
      </div>

      <div class="admin_form_main">

        <form-component ref="dataComponentForm" :width="width" :urlInit="urlInit" :urlSubmit="urlSubmit" :dataForm="dataForm" :dataRule="dataRule">

          <el-form-item label="注意：">
            <el-tag type="info">根据统计利润的比例计算司机工资</el-tag>
          </el-form-item>

        </form-component>

      </div>
    </div>
  </div>
</template>

<script>
  import formComponent from "@/views/common/component/form-component";
  export default {
    components: {
      formComponent
    },
    data() {
      return {
        width: '150px',
        urlInit: '/setting/distribution',
        urlSubmit: '/setting/distribution',
        dataForm:
        {
          distribution_status: '',
          withdrawal_rate: '',
          wage_cycle: '',
        },
        dataRule:
        {
        }
      };
    }
  };
</script>

<style lang="scss" scoped>
  .admin_form_main >>> .el-form-item {
    width: 100%;
  }
  .admin_form_main >>> .form-input-item {
    width: 400px;
    float: left;
  }
  .admin_form_main >>> .form-input-description {
    width: 60%;
    float: left;
    color: red;
    margin-left: 20px;
  }
</style>
