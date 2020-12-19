<template>
  <div class="qingwu">
    <div class="admin_main_block">
      <div class="admin_main_block_top">
        <div class="admin_main_block_right">
          <div>
            <el-button v-if="isAuth('module:organization:squad:delete')" type="danger" icon="el-icon-delete" @click="deleteHandle()">
              {{ $t('common.batch_delete') }}
            </el-button>
          </div>
        </div>
      </div>

      <div class="admin_main_block_top">
        <div class="admin_main_block_left">
          <div>
            <el-select v-model="dataForm.organization_id" :placeholder="$t('common.please_select') + $t('organization.title')" clearable>
              <el-option :label="$t('common.all')" value=""></el-option>
              <el-option v-for="(v,k) in organizationList" :label="v.title" :key="k" :value="v.id">
              </el-option>
            </el-select>
          </div>
          <div>
            <el-input v-model="dataForm.title" :placeholder="$t('common.please_input') + $t('squad.title')" clearable>
            </el-input>
          </div>
          <div>
            <el-input v-model="dataForm.teacher_name" :placeholder="$t('common.please_input') + $t('squad.teacher_name')" clearable>
            </el-input>
          </div>
          <div>
            <el-select v-model="dataForm.audit_status" :placeholder="$t('common.please_select') + $t('common.audit_status')" clearable>
              <el-option :label="$t('common.all')" value=""></el-option>
              <el-option :label="$t('common.wait_pass')" value="0"></el-option>
              <el-option :label="$t('common.pass')" value="1"></el-option>
              <el-option :label="$t('common.no_pass')" value="2"></el-option>
            </el-select>
          </div>
          <div>
            <el-button icon="el-icon-search" @click="getDataList(true)">
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

          <el-table-column :label="$t('squad.info')" width="300px">
            <template slot-scope="scope">
              <dl class="table_dl">
                <dd class="table_dl_dd_all_30">
                  {{ $t('squad.title') }}： {{ scope.row.title }}
                </dd>
                <dd class="table_dl_dd_all_16_gray">
                  {{ $t('squad.start_time') }}： {{ scope.row.start_time }}
                </dd>
                <dd class="table_dl_dd_all_16_gray mt10">
                  {{ $t('squad.end_time') }}： {{ scope.row.end_time }}
                </dd>
              </dl>
            </template>
          </el-table-column>

          <el-table-column prop="description" :label="$t('squad.description')">
            <template slot-scope="scope">
              <el-popover placement="top-start"
                width="500"
                trigger="hover"
                :content="scope.row.description">
                <el-button type="warning" slot="reference">
                  {{ $t('squad.description') }}
                </el-button>
              </el-popover>
            </template>
          </el-table-column>

          <el-table-column prop="teacher_name" :label="$t('squad.teacher_name')">
            <template slot-scope="scope">
              {{ scope.row.teacher_name }}
            </template>
          </el-table-column>

          <el-table-column prop="number" :label="$t('squad.number')">
          </el-table-column>

          <el-table-column prop="sort" :label="$t('common.sort')">
          </el-table-column>

          <el-table-column :label="$t('organization.audit_status')">
            <template slot-scope="scope">
              <el-tag effect="dark" :type=" scope.row.audit_status.value == 1 ? 'success' : 'danger' ">
                {{ scope.row.audit_status.text }}
              </el-tag>
            </template>
          </el-table-column>

          <el-table-column prop="create_time" :label="$t('common.create_time')" width="140">
          </el-table-column>

          <el-table-column :label="$t('common.handle')" fixed="right" width="380">
            <template slot-scope="scope">
              <el-button v-if="isAuth('module:organization:squad:view')" type="info" icon="el-icon-view" @click="$router.push({name: 'module_organization_squad_view', query: {id : scope.row.id}})">
                {{ $t('common.view') }}
              </el-button>

              <el-button v-if="isAuth('module:organization:squad:audit') && scope.row.audit_status.value != 1" type="success" icon="el-icon-check" @click="$router.push({name: 'module_organization_squad_audit', query: {id: scope.row.id}})">
                {{ $t('common.audit') }}
              </el-button>

              <el-button v-if="isAuth('module:organization:squad:form')" type="primary" icon="el-icon-edit" @click="$router.push({name: 'module_organization_squad_form', query: {id : scope.row.id}})">
                {{ $t('common.update') }}
              </el-button>

              <el-button v-if="isAuth('module:organization:squad:delete')" type="danger" icon="el-icon-delete" @click="deleteHandle(scope.row.id)">
                <span class="delete">{{$t('common.delete')}}</span>
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
        model: 'organization/squad',
        organizationList: [],
        dataForm: [
          'title',
          'teacher_name',
          'organization_id',
        ]
      };
    },
    created() {
      this.getDataList()
    },
    methods: {
      loadOrganizationList () {
        this.$http({
          url: this.$http.adornUrl('/organization/select'),
          method: 'get'
        }).then(({data}) => {
          if (data && data.status === 200) {
            this.organizationList = data.data
          } else {
            this.$message.error(this.$t(data.message))
          }
        })
      }
    },
    mounted () {
      this.loadOrganizationList();
    },
  };
</script>
<style lang="scss" scoped>
  .mt10 {
    margin-top: 5px;
  }
</style>
