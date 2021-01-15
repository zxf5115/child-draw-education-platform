export const course = {
  list: '课程列表',
  from: '课程操作',
  view: '查看课程',
  create: '新建课程',

  present_info: '课程礼包',
  unlock_info: '课程解锁',
  teacher_info: '招生老师',

  title: '课程名字',
  picture: '课程封面',
  semester: '课程周期',
  description: '优惠说明',
  apply_time: '报名时间',
  course_start_time: '开课时间',
  line_price: '课程原价(元)',
  real_price: '课程价格(元)',
  recruitment: '招生老师',
  management_number: '管理数量',
  apply_number: '报名人数',
  class_size: '管理人数',
  content: '课程详情',
  plan: '课程安排',
  level: '课程级别',

  rules: {
    courseware_id:{
      require: '课件名称不能为空',
    },
    title: {
      require: '课程标题不能为空',
    },
    semester: {
      require: '课程周期不能为空',
    },
    apply_time: {
      require: '报名时间不能为空',
    },
    course_start_time: {
      require: '开课时间不能为空',
    },
    line_price: {
      require: '课程原价不能为空',
    },
    real_price: {
      require: '课程价格不能为空',
    },
    class_size: {
      require: '管理人数不能为空',
    },
  },

  present: {
    list: '礼包列表',
    from: '礼包操作',
    view: '礼包详情',

    title: '礼包名称',
    description: '礼包介绍',

    rules: {
      title: {
        require: '礼包名称不能为空',
      }
    }
  },

  unlock: {
    list: '解锁列表',
    from: '解锁操作',
    view: '解锁详情',

    title: '课程解锁',
    section: '解锁章节',
    duration: '解锁时长',

    rules: {
      section: {
        require: '章节不能为空',
      },
      duration: {
        require: '时长不能为空',
      }
    }
  },

  teacher: {
    list: '老师列表',
    from: '老师操作',
    view: '老师详情',

    sort: '老师排序',

    rules: {
      level_id: {
        require: '课件级别不能为空',
      },
      teacher_id: {
        require: '招聘老师不能为空',
      }
    }
  }
}
