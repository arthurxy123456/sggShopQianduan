import Mock from 'mockjs'

// 默认对外暴露  JSON 图片
import banner from './banner.json'
import floor from './floor.json'

Mock.mock("/mock/banner", { code: 200, data: banner })
Mock.mock("/mock/floor", { code: 200, data: floor })