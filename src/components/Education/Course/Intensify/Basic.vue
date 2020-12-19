<template>
  <el-form label-width="100px" ref="dataForm" :model="dataForm" :rules="dataRule">
    <el-form-item :label="$t('course.title')" prop="course_id">
      <el-select v-model="dataForm.course_id"  :placeholder="$t('common.please_select')+$t('course.title')" @change="loadCategoryList()">
        <el-option v-for="(v,k) in courseList" :label="v.title" :key="k" :value="v.id">
        </el-option>
      </el-select>
    </el-form-item>

    <el-form-item :label="$t('course.intensify.category.title')" prop="category_id">
      <el-cascader :key="isResouceShow" v-model="dataForm.category_id" :placeholder="$t('common.please_select')+$t('course.intensify.category.title')" :show-all-levels="false" :options="level" :props="levelProps" clearable></el-cascader>
    </el-form-item>

    <el-form-item :label="$t('course.intensify.title')" prop="title">
      <el-input :placeholder="$t('course.intensify.title')" v-model="dataForm.title"></el-input>
    </el-form-item>

    <el-form-item class="mavon" prop="content" :label="$t('course.intensify.content')">
      <div id="vditor"></div>
    </el-form-item>

    <el-form-item :label="$t('common.sort')" prop="sort">
      <el-input-number :placeholder="$t('common.please_input')+$t('common.sort')" v-model="dataForm.sort"></el-input-number>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="dataFormSubmit()">
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
  import { isNotEmpty } from '@/utils/validate'
  import Vditor from "vditor"
  import "vditor/dist/index.css"
  export default
  {
    extends: common,
    components: {
      Vditor
    },
    data()
    {
      return {
        model: 'education/course/intensify',
        contentEditor: '',
        upload_headers:{},
        level: [],
        isResouceShow: 0,
        courseList: [],
        levelProps: {
          label: 'title',
          value: 'id',
          checkStrictly: true
        },
        dataForm:
        {
          id: 0,
          course_id: '',
          category_id: '',
          type: '1',
          title: '',
          content: '',
          sort: 0,
        },
        dataRule:
        {
          title: [
            { required: true, message: this.$t('course.intensify.rules.title.require'), trigger: 'blur' },
            { min: 1, max: 50, message: this.$t('course.intensify.rules.title.length'), trigger: 'blur' }
          ]
        }
      };
    },
    methods:
    {
      init ()
      {
        let query = this.$route.query
        let id = query.id

        this.dataForm.id = id || 0
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/education/course/intensify/view/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.status === 200) {
                this.dataForm.course_id   = data.data.course_id
                this.dataForm.category_id = data.data.category_id
                this.dataForm.title       = data.data.title
                this.dataForm.content     = data.data.content
                this.dataForm.sort        = data.data.sort

                this.contentEditor.setValue(data.data.content)

                this.loadCategoryList();
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.$http({
              url: this.$http.adornUrl(`/education/course/intensify/handle`),
              method: 'post',
              data: this.$http.adornData({
                'id': this.dataForm.id || undefined,
                'course_id': this.dataForm.course_id,
                'category_id': this.dataForm.category_id,
                'type': this.dataForm.type,
                'title': this.dataForm.title,
                'content': this.contentEditor.getValue(),
                'sort': this.dataForm.sort,
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
      handleSuccess(res, file) {
        this.dataForm.url = res.data;
      },
      resetForm:function()
      {
        this.$refs['dataForm'].resetFields();
      },
      initVditor () {
        this.contentEditor = new Vditor("vditor",{
          multiple: false,
          height: 500,
          "mode": "sv",
          "preview": {
            "mode": "both"
          },
          toolbarConfig:{
            pin:true
          },
          cache:{
            enable:false
          },
          upload: {
            accept: 'image/*, .mp3, .wav, .mov, .mp4',
            token: 'test',
            headers: {
              'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            url: this.$http.adornUrl('/file/file')
          },
        })
      },
      loadCourseList () {
        this.$http({
          url: this.$http.adornUrl('/education/course/select'),
          method: 'get'
        }).then(({data}) => {
          if (data && data.status === 200) {
            this.courseList = data.data
          } else {
            this.$message.error(this.$t(data.message))
          }
        })
      },
      loadCategoryList () {
        this.$http({
          url: this.$http.adornUrl('/education/course/intensify/category/select'),
          method: 'get',
          params: this.$http.adornParams({
            'course_id': this.dataForm.course_id
          })
        }).then(({data}) => {
          if (data && data.status === 200) {
            ++this.isResouceShow
            this.dataForm.category_id = ''
            this.level = data.data
          } else {
            this.$message.error(this.$t(data.message))
          }
        })
      },
    },
    created(request)
    {
      this.init();

      this.loadCourseList();

      // 要保证取到
      this.upload_headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    },
    mounted () {
      this.initVditor();
    },
  };
</script>
<style lang="scss" scoped>
  .mavon {
    width: 95% !important;
  }
  .v-note-op {
    padding: 0 !important;
  }
</style>
