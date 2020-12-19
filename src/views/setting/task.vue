<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>任务配置</div>
        </div>
      </div>

      <div class="admin_form_main">

        <form-component ref="dataComponentForm" :width="width" :urlInit="urlInit" :urlSubmit="urlSubmit" :dataForm="dataForm" :dataRule="dataRule">

          <el-form-item label="注意：">
            <el-tag type="info">
              定时任务，自动评价为 确认收货未评价自动执行|允许售后时间 为用户确认收货前后申请售后的时间
            </el-tag>
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
        urlInit: '/setting/task',
        urlSubmit: '/setting/task',
        dataForm:
        {
          task_status: 1,
          auto_confirm: 0,
          auto_comment: 0,
          auto_cancel: 0
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
    float: left;
  }
  .admin_form_main >>> .form-input-description {
    width: 60%;
    float: left;
    color: red;
    margin-left: 20px;
  }
</style>
