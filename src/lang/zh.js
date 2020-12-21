import  {common}  from './system/platform/common/zh'
import  {login}  from './system/platform/login/zh'
import  {user}  from './system/platform/user/zh'
import  {menu}  from './system/platform/menu/zh'
import  {message}  from './system/platform/message/zh'
import  {config}  from './system/platform/config/zh'
import  {setting}  from './system/platform/setting/zh'
import  {log}  from './system/platform/log/zh'




// ---------------------------------------
// 模块

import  {organization}  from './module/platform/organization/zh'
import  {squad}  from './module/platform/organization/squad/zh'

import  {member}  from './module/platform/member/zh'
import  {teacher}  from './module/platform/teacher/zh'

import  {advertising}  from './module/platform/advertising/zh'
import  {course}  from './module/platform/education/course/zh'
import  {graduation}  from './module/platform/education/graduation/zh'
import  {homework}  from './module/platform/education/homework/zh'
import  {paper}  from './module/platform/education/paper/zh'
import  {keyword}  from './module/platform/keyword/zh'



export default {

  // 公共
  common: {
    ...common
  },

  // 登录
  login: {
    ...login
  },

  // 用户
  user: {
    ...user
  },

  // 菜单
  menu: {
    ...menu
  },

  // 消息
  message: {
    ...message
  },

  // 配置
  config: {
    ...config
  },

  // 设置
  setting: {
    ...setting
  },

  // 日志
  log: {
    ...log
  },

  // ------------------------------------

  // 广告
  advertising: {
    ...advertising
  },

  // 机构
  organization: {
    ...organization
  },

  // 学员
  member: {
    ...member
  },

  // 老师
  teacher: {
    ...teacher
  },

  // 课程
  course: {
    ...course
  },

  // 班级
  squad: {
    ...squad
  },

  // 结业
  graduation: {
    ...graduation
  },

  // 作业
  homework: {
    ...homework
  },

  // 试卷
  paper: {
    ...paper
  },

  keyword: {
    ...keyword
  },
}
