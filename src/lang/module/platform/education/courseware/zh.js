export const courseware = {
  list: '课件列表',
  from: '课件操作',
  view: '课件详情',
  level_info: '课件级别',

  title: '课件标题',
  description: '课件介绍',
  is_permanent: '是否永久',
  time_limit: '课件限时',
  enable: '启用',
  disable: '停用',

  permanent: '永久',
  cycle: '限时',

  rules: {
    title: {
      require: '课件标题不能为空',
      length: '课件标题最大长度为20',
    }
  },

  level: {
    list: '课件级别列表',
    from: '课件级别操作',
    view: '课件级别详情',

    level: '课件级别',
    minimum_age: '最小年龄',
    largest_age: '最大年龄',
    description: '课件级别介绍',
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
