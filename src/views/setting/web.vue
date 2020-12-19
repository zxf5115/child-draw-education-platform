<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>
            {{ $t('setting.web.list') }}
          </div>
        </div>
      </div>

      <div class="admin_form_main">

        <form-component ref="dataComponentForm" :width="width" :upload_url="upload_url" :urlInit="urlInit" :urlSubmit="urlSubmit" :dataForm="dataForm" :dataRule="dataRule">
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
        width: '120px',
        upload_url: this.$http.adornUrl('/file/image'),
        urlInit: '/setting/web',
        urlSubmit: '/setting/web',
        dataForm:
        {
          web_name: '',
          web_url: '',
          logo: '',
          qr_code: '',
          contact_mobile: '',
          keywords: '',
          description: '',
          mobile: '',
          email: '',
          icp: '',
          web_status: '',
          web_close_info: '',
        },
        dataRule:
        {
        }
      };
    },
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
