<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>
            <el-button v-if="isAuth('module:education:course:form')" type="success" icon="el-icon-plus" @click="$router.push({name: 'module_education_course_form'})">
              {{ $t('common.create') }}
            </el-button>
          </div>
        </div>
        <div class="admin_main_block_right">
          <div>
            <el-button v-if="isAuth('module:education:course:delete')" type="danger" icon="el-icon-delete" @click="deleteHandle()">
              {{ $t('common.batch_delete') }}
            </el-button>
          </div>
        </div>
      </div>

      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>
            <el-input v-model="dataForm.title" :placeholder="$t('common.please_input') + $t('course.title')" clearable>
            </el-input>
          </div>
          <div>
            <el-select v-model="dataForm.is_recommend" :placeholder="$t('common.please_select') + $t('course.is_recommend')" clearable>
              <el-option :label="$t('common.all')" value=""></el-option>
              <el-option :label="$t('course.enable')" value="1"></el-option>
              <el-option :label="$t('course.disable')" value="2"></el-option>
            </el-select>
          </div>
          <div>
            <el-select v-model="dataForm.is_hidden" :placeholder="$t('common.please_select') + $t('course.is_hidden')" clearable>
              <el-option :label="$t('common.all')" value=""></el-option>
              <el-option :label="$t('common.hidden')" value="1"></el-option>
              <el-option :label="$t('common.show')" value="2"></el-option>
            </el-select>
          </div>
          <div>
            <el-date-picker format="yyyy-MM-dd HH:mm" v-model="dataForm.create_time" type="daterange" :range-separator="$t('common.to')" :start-placeholder="$t('common.start_time')" :end-placeholder="$t('common.end_time')" clearable>
            </el-date-picker>
          </div>
          <div>
            <el-button icon="el-icon-search" @click="getDataList()">
              {{ $t('common.search') }}
            </el-button>
          </div>
        </div>
      </div>
      <div class="admin_table_main">
        <el-table :data="dataList" v-loading="dataListLoading" @selection-change="selectionChangeHandle">
          <el-table-column type="selection" header-align="center" align="center">
          </el-table-column>

          <el-table-column prop="id" :label="$t('common.id')" width="70">
          </el-table-column>

          <el-table-column :label="$t('course.info')" width="400">
            <template slot-scope="scope">
              <dl class="table_dl">
                <dt>
                  <el-image :src="scope.row.picture" style="width: 54px;height: 48px;">
                    <div slot="error" class="image-slot">
                      <i class="el-icon-picture-outline"></i>
                    </div>
                  </el-image>
                </dt>
                <dd class="table_dl_dd_all_30">
                  {{ $t('course.title') }}：
                  {{ scope.row.title }}
                </dd>
                <dd class="table_dl_dd_all_16_gray">
                  {{ $t('course.create_time') }}：
                  {{ scope.row.create_time }}
                </dd>
              </dl>
            </template>
          </el-table-column>

          <el-table-column prop="is_recommend" :label="$t('course.is_recommend')">
            <template slot-scope="scope">
              {{ scope.row.is_recommend.text }}
            </template>
          </el-table-column>

          <el-table-column prop="is_hidden" :label="$t('course.is_hidden')">
            <template slot-scope="scope">
              {{ scope.row.is_hidden.text }}
            </template>
          </el-table-column>

          <el-table-column prop="sort" :label="$t('common.sort')">
          </el-table-column>

          <el-table-column :label="$t('course.status')">
            <template slot-scope="scope">
              <el-tag effect="dark" :type=" scope.row.status.value == 1 ? 'success' : 'danger' ">
                {{ scope.row.status.text }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column :label="$t('common.handle')" fixed="right" width="320px">
            <template slot-scope="scope">
              <el-button v-if="isAuth('module:education:course:form')" type="primary" icon="el-icon-edit" @click="$router.push({name: 'module_education_course_form', query: {id: scope.row.id}})">
                {{ $t('common.update') }}
              </el-button>

              <el-button v-if="isAuth('module:education:course:unit:list')" icon="el-icon-copy-document" @click="$router.push({name: 'module_education_course_unit_list', query: {course_id: scope.row.id}})">
                {{ $t('course.course_unit') }}
              </el-button>

              <el-button v-if="isAuth('module:education:course:point:list')" icon="el-icon-copy-document" @click="$router.push({name: 'module_education_course_point_list', query: {course_id: scope.row.id}})">
                {{ $t('course.course_point') }}
              </el-button>

              <el-button v-if="isAuth('module:education:course:delete')" type="danger" icon="el-icon-delete" @click="deleteHandle(scope.row.id)">
                {{ $t('common.delete') }}
              </el-button>
            </template>
          </el-table-column>

        </el-table>
        <div class="admin_table_main_pagination">
          <el-pagination
            @size-change="sizeChangeHandle"
            @current-change="currentChangeHandle"
            :page-size="pageSize"
            :total="totalPage"
            :current-page="pageIndex"
            background layout="prev, pager, next,jumper,total">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import common from '@/views/common/base'
  export default {
    extends: common,
    data() {
      return {
        model: 'education/course',
        dataForm: [
          'title',
          'is_recommend',
          'is_hidden',
          'create_time',
        ],
      };
    },
    created() {
      this.getDataList()
    }
  };
</script>
