"use strict";

// nav
module.exports = [{
  text: '首页',
  link: '/'
}, {
  text: '前端',
  link: '/web/',
  //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  items: [// 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
  {
    text: '前端基础笔记',
    items: [{
      text: 'JavaScript文章',
      link: '/note/Js/'
    }, {
      text: 'CSS文章',
      link: '/note/css/'
    }]
  }, {
    text: '前端框架笔记',
    items: [{
      text: 'Vue3笔记',
      link: '/note/vue3/'
    }, {
      text: 'Vue源码(理)笔记',
      link: '/note/vueRead/'
    }, {
      text: 'echarts使用笔记',
      link: '/note/echarts/'
    }]
  }, {
    text: '前端架构笔记',
    items: [{
      text: 'Vite文章',
      link: '/note/vite/'
    }]
  }]
}, {
  text: '后端',
  link: '/be/',
  items: [{
    text: 'Node',
    link: '/pages/7c4f32/'
  }]
}, {
  text: '技术',
  link: '/technology/',
  items: [{
    text: 'Git',
    link: '/pages/afde55/'
  }]
}, {
  text: '更多',
  link: '/more/',
  items: [{
    text: '学习规划',
    link: '/plan/'
  }, {
    text: '友情链接',
    link: '/friends/'
  }, {
    text: '面试记录',
    link: '/interview/'
  }]
}, {
  text: '索引',
  link: '/archives/',
  items: [{
    text: '分类',
    link: '/categories/'
  }, {
    text: '标签',
    link: '/tags/'
  }, {
    text: '归档',
    link: '/archives/'
  }]
}];