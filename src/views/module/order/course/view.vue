<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>{{ $t('order.course.view') }}</div>
        </div>

        <div class="admin_main_block_right">
          <div class="mr10">
            <el-button icon="el-icon-back" @click="$router.push({name: 'module_production_list'})">
              {{ $t('common.return') }}
            </el-button>
          </div>
        </div>
      </div>

      <div class="admin_form_main color">
        <el-card class="box-card" shadow="never">
          <div slot="header" class="clearfix">
            <span>{{ $t('order.course.basic_info') }}</span>
          </div>
          <div class="text item">
            <el-form ref="form" :model="dataForm" label-width="80">
              <el-row>
                <el-col :span="24">
                  <el-form-item :label="$t('order.course.order_no')" label-width="120">
                    {{ dataForm.order_no }}
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item :label="$t('course.title')" label-width="100">
                    <span v-if="dataForm.course">
                      {{ dataForm.course.title }}
                    </span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('courseware.title')" label-width="80">
                    <span v-if="dataForm.courseware">
                      {{ dataForm.courseware.title }}
                    </span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('course.semester')" label-width="80">
                    <span v-if="dataForm.course">
                      {{ dataForm.course.semester.text }}
                    </span>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item :label="$t('order.course.nickname')" label-width="80">
                    <span v-if="dataForm.member">
                      {{ dataForm.member.nickname }}
                    </span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-col :span="8">
                  <el-form-item :label="$t('order.course.username')" label-width="80">
                    <span v-if="dataForm.member">
                      {{ dataForm.member.username }}
                    </span>
                  </el-form-item>
                </el-col>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('order.course.create_time')" label-width="80">
                    {{ dataForm.create_time }}
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item :label="$t('order.course.pay_money')" label-width="80">
                    <span class="red">
                      {{ dataForm.pay_money }}
                    </span>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('order.course.pay_type')" label-width="80">
                      {{ dataForm.pay_type.text }}
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('order.course.order_status')" label-width="80">
                    {{ dataForm.order_status.text }}
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <el-form-item :label="$t('course.present.title')" label-width="80">
                    <span class="orange" v-if="dataForm.course.present">
                      {{ dataForm.course.present.title }}
                    </span>
                  </el-form-item>
                </el-col>
                <el-col :span="16">
                  <el-form-item :label="$t('order.course.description')" label-width="100"></el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-card>

        <el-card class="box-card mt10" shadow="never">
          <div slot="header" class="clearfix">
            <span>{{ $t('order.course.address_info') }}</span>
          </div>
          <div class="text item">
            <el-form ref="form" v-if="dataForm.address" label-width="80">
              <el-row>
                <el-col :span="8">
                  <el-form-item :label="$t('member.address.name')" label-width="100">
                    {{ dataForm.address.name }}
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('member.address.mobile')" label-width="80">
                    {{ dataForm.address.mobile }}
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item :label="$t('member.address.address')" label-width="80">
                    {{ dataForm.address.province_id.text }} {{ dataForm.address.city_id.text }} {{ dataForm.address.region_id.text }} {{ dataForm.address.address }}
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </el-card>

        <el-card class="box-card mt10" shadow="never">
          <div slot="header" class="clearfix">
            <span>{{ $t('order.course.course_present_info') }}</span>
          </div>
          <div class="text item">
            <el-table :data="dataList" v-loading="dataListLoading">
              <el-table-column :label="$t('member.avatar')" width="120">
                <template slot-scope="scope">
                  <el-avatar :size="45" v-if="scope.row.member" :src="scope.row.member.avatar">
                    <img src="@/assets/images/default/circle.png"/>
                  </el-avatar>
                </template>
              </el-table-column>

              <el-table-column prop="title" :label="$t('member.nickname')" width="200">
                <template slot-scope="scope">
                  <span v-if="scope.row.member">
                    {{ scope.row.member.nickname }}
                  </span>
                </template>
              </el-table-column>

              <el-table-column prop="content" :label="$t('production.comment.content')">
                <template slot-scope="scope">
                  <span v-if="scope.row.suffix.value == 1">
                    {{ scope.row.content }}
                  </span>
                  <span v-else>
                    <m-audio :src="scope.row.content"></m-audio>
                  </span>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
  import common from '@/views/common/base'
  export default
  {
    extends: common,
    data()
    {
      return {
        model: 'order/course',
        dataForm:
        {
          id: 0
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
          if (this.dataForm.id) {
            this.$http({
              url: this.$http.adornUrl(`/order/course/view/${this.dataForm.id}`),
              method: 'get',
              params: this.$http.adornParams()
            }).then(({data}) => {
              if (data && data.status === 200) {
                this.dataForm   = data.data
              }
            })
          }
        })
      },
      // 获取数据列表
      getDataList () {
        this.dataListLoading = true
        this.$http({
          url: this.$http.adornUrl('/production/comment/list'),
          method: 'get',
          params: this.$http.adornParams({
            'page': this.pageIndex,
            'limit': this.pageSize,
          })
        }).then(({data}) => {
          if (data && data.status === 200)
          {
            this.dataList = data.data.data
            this.totalPage = data.data.total
          }
          else
          {
            this.dataList = []
            this.totalPage = 0
            this.$message.error(data.message)
          }
          this.dataListLoading = false
        })
      },
    },
    created(request)
    {
      this.init();
      this.getDataList();
    }
  };
</script>
