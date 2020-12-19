<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>模板配置</div>
        </div>
      </div>

      <div class="admin_form_main">

        <form-component ref="dataComponentForm" :width="width" :urlInit="urlInit" :urlSubmit="urlSubmit" :dataForm="dataForm" :dataRule="dataRule">

          <el-form-item label="注意：">
            <el-tag type="info">用户接收到的模板消息内容</el-tag>
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
        urlInit: '/setting/template',
        urlSubmit: '/setting/template',
        dataForm:
        {
          sms_status: 2,
          sms_key: '',
          sms_secret: '',
          sms_sign_name: '',
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
