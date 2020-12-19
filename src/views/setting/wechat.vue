<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>微信配置</div>
        </div>
        <div class="admin_main_block_right">
          <div><el-button type="primary" icon="el-icon-menu" >微信菜单</el-button></div>
        </div>
      </div>

      <div class="admin_form_main">

        <form-component ref="dataComponentForm" :width="width" :urlInit="urlInit" :urlSubmit="urlSubmit" :dataForm="dataForm" :dataRule="dataRule">
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
        urlInit: '/setting/wechat',
        urlSubmit: '/setting/wechat',
        dataForm:
        {
          wechat_status: 2,
          wechat_url: '',
          wechat_token: '',
          wechat_appid: '',
          wechat_secret: '',
          mini_appid: '',
          mini_secret: '',
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
