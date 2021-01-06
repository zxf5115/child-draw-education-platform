export const course = {
  list: '课程列表',
  from: '课程操作',
  view: '查看课程',
  create: '新建课程',

  course_category_info: '课程类型',
  course_level_info: '课程级别',


  basic_info: '基本信息',
  question_info: '课程练习题',
  resource_info: '课程资料',
  emphasis_info: '课程重点',

  info: '课程信息',
  type: '课程类型',
  title: '课程标题',
  course_point: '课程知识点',
  course_unit: '课程单元',
  course_label: '课程标签',
  course_resource: '课程资料',
  course_intensify: '考前强化',
  picture: '课程封面',
  time_length: '课程学习课时',
  money: '课程费用',
  description: '课程介绍',
  create_time: '添加时间',
  is_recommend: '首页推荐',
  is_hidden: '是否显示',






  status: '课程状态',

  enable: '已推荐',
  disable: '未推荐',

  rules: {
    title: {
      require: '课程标题不能为空',
    },
    picture: {
      require: '课程封面不能为空',
    },
    money: {
      require: '课程费用不能为空',
    },
  },

  category: {
    list: '课程类型列表',
    from: '课程类型操作',
    view: '课程类型详情',

    title: '课程类型标题',
    description: '课程类型介绍',
    is_permanent: '是否永久',
    time_limit: '课程限时',
    enable: '启用',
    disable: '停用',

    permanent: '永久',
    cycle: '限时',

    rules: {
      title: {
        require: '课程类型标题不能为空',
        length: '课程类型标题最大长度为20',
      }
    }
  },

  level: {
    list: '课程级别列表',
    from: '课程级别操作',
    view: '课程级别详情',

    level: '课程级别',
    minimum_age: '最小年龄',
    largest_age: '最大年龄',
    description: '课程级别介绍',
    enable: '启用',
    disable: '停用',

    rules: {
      minimum_age: {
        require: '最小年龄不能为空',
      },
      largest_age: {
        require: '最大年龄不能为空',
      },
    }
  }
}
