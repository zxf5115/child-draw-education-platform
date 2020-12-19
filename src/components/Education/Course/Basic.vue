<template>
  <el-form label-width="100px" ref="dataForm" :model="dataForm" :rules="dataRule">

    <el-form-item :label="$t('course.title')" prop="title">
      <el-input v-model="dataForm.title" :placeholder="$t('common.please_input')+$t('course.title')"></el-input>
    </el-form-item>

    <el-form-item :label="$t('course.course_label')" prop="label_id">
      <el-select v-model="dataForm.label_id" filterable clearable multiple collapse-tags>
        <el-option v-for="(v,k) in labelList" :label="v.title" :key="k" :value="v.id">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item :label="$t('course.type')" prop="type">
      <el-select v-model="dataForm.type">
        <el-option v-for="(v,k) in typeList" :label="v.title" :key="k" :value="v.id">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item :label="$t('course.picture')" prop="picture">
      <el-upload class="avatar-uploader" :action="this.$http.adornUrl('/file/picture')" :show-file-list="false" :headers="upload_headers" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
        <img v-if="dataForm.picture" :src="dataForm.picture" class="avatar-upload">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </el-form-item>

    <el-form-item :label="$t('course.description')" prop="description">
      <el-input type="textarea" rows="5" v-model="dataForm.description" :placeholder="$t('common.please_input')+$t('course.description')"></el-input>
    </el-form-item>

    <el-form-item :label="$t('course.time_length')" prop="time_length">
      <el-input-number v-model="dataForm.time_length" :min="0"></el-input-number>
    </el-form-item>

    <el-form-item :label="$t('course.money')" prop="money">
      <el-col :span="12">
        <el-input-number :precision="2" v-model="dataForm.money" :min="0"></el-input-number>
      </el-col>
    </el-form-item>

    <el-form-item :label="$t('common.sort')" prop="sort">
      <el-input-number :placeholder="$t('common.please_input')+$t('common.sort')" v-model="dataForm.sort"></el-input-number>
    </el-form-item>

    <el-form-item :label="$t('course.is_recommend')" prop="is_recommend">
      <el-switch v-model="dataForm.is_recommend" active-value="1" :active-text="$t('course.enable')" inactive-value="2" :inactive-text="$t('course.disable')">
      </el-switch>
    </el-form-item>

    <el-form-item :label="$t('course.is_hidden')" prop="is_hidden">
      <el-switch v-model="dataForm.is_hidden" active-value="1" :active-text="$t('common.hidden')" inactive-value="2" :inactive-text="$t('common.show')">
      </el-switch>
    </el-form-item>

    <el-form-item :label="$t('common.status')" prop="status">
      <el-switch v-model="dataForm.status" active-value="1" :active-text="$t('common.enable')" inactive-value="2" :inactive-text="$t('common.disable')">
      </el-switch>
    </el-form-item>

    <el-form-item>
      <el-button v-if="isAuth('module:member:handle')" type="primary" @click="dataFormSubmit()">
        {{ $t('common.confirm') }}
      </el-button>
      <el-button @click="resetForm()">
        {{ $t('common.reset') }}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  import common from '@/views/common/base'
  export default {
    extends: common,
    data() {
      return {
        model: 'education/course',
        upload_headers:{},
        labelList: [],
        typeList: [],
        dataForm:
        {
          id: 0,
          label_id : '',
          type : 1,
          title: '',
          picture: '',
          description: '',
          time_length: 0,
          money: 0,
          sort: '',
          is_recommend: '2',
          is_hidden: '2',
          status: '1',
        },
        dataRule:
        {
          title: [
            { required: true, message: this.$t('course.rules.title.require'), trigger: 'blur' },
          ],
          picture: [
            { required: true, message: this.$t('course.rules.picture.require'), trigger: 'blur' },
          ],
          money: [
            { required: true, message: this.$t('course.rules.money.require'), trigger: 'blur' },
          ],
        }
      };
    },
    methods: {
      init ()
      {
        let query = this.$route.query
        let id = query.id

        this.dataForm.id = id || 0
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/education/course/view/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.status === 200) {
                this.dataForm.label_id     = data.data.label_id
                this.dataForm.type         = data.data.type.value
                this.dataForm.title        = data.data.title
                this.dataForm.picture      = data.data.picture
                this.dataForm.description  = data.data.description
                this.dataForm.time_length  = data.data.time_length
                this.dataForm.money        = data.data.money
                this.dataForm.sort         = data.data.sort
                this.dataForm.is_recommend = data.data.is_recommend.value + ''
                this.dataForm.is_hidden    = data.data.is_hidden.value + ''
                this.dataForm.status       = data.data.status.value + ''
              }
            }).then(() => {
              this.$http({
                url: this.$http.adornUrl(`/education/course/label/${this.dataForm.id}`),
                method: 'get',
                params: this.$http.adornParams()
              }).then(({data}) => {
                if (data && data.status === 200) {
                  this.dataForm.label_id = data.data
                }
              })
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/education/course/handle`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                'type': this.dataForm.type,
                'label_id': this.dataForm.label_id,
                'title': this.dataForm.title,
                'picture': this.dataForm.picture,
                'description': this.dataForm.description,
                'time_length': this.dataForm.time_length,
                'money': this.dataForm.money,
                'sort': this.dataForm.sort,
                'is_recommend': this.dataForm.is_recommend,
                'is_hidden': this.dataForm.is_hidden,
                'status': this.dataForm.status,
              })
            }).then(({data}) => {
              if (data && data.status === 200) {
                this.$message.success(this.$t('common.handle_success'));
                this.$router.go(-1);
              } else {
                this.$message.error(this.$t(data.message))
              }
            })
          }
        })
      },
      loadLabelList () {
        this.$http({
          url: this.$http.adornUrl('/education/course/label/select'),
          method: 'get'
        }).then(({data}) => {
          if (data && data.status === 200) {
            this.labelList = data.data
          } else {
            this.$message.error(this.$t(data.message))
          }
        })
      },
      loadTypeList () {
        this.$http({
          url: this.$http.adornUrl('/education/course/type'),
          method: 'get'
        }).then(({data}) => {
          if (data && data.status === 200) {
            this.typeList = data.data
          } else {
            this.$message.error(this.$t(data.message))
          }
        })
      },
      resetForm:function()
      {
        this.$refs['dataForm'].resetFields();
      },
      handleAvatarSuccess(res, file) {
        this.dataForm.picture = res.data;
      },
      beforeAvatarUpload(file) {
        const isPicture = (file.type === 'image/jpeg' || file.type === 'image/png');
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isPicture) {
          var message = this.$t('common.rules.picture.picture_type');
          this.$message.error(this.$t(data.message))
        }
        if (!isLt2M) {
          var message = this.$t('common.rules.picture.picture_size');
          this.$message.error(this.$t(data.message))
        }

        return isPicture && isLt2M;
      },
    },
    created() {
      this.init();

      // 要保证取到
      this.upload_headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    },
    mounted () {
      this.loadLabelList();
      this.loadTypeList();
    },
  };
</script>
