//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bannerList: [{
        id: 1,
        src: 'https://mp.gtpbox.com/Uploads/zgsyhbxs/slider_904.png'
      },
      {
        id: 2,
        src: 'https://mp.gtpbox.com/Uploads/zgsyhbxs/slider_902.png'
      },
      {
        id: 3,
        src: 'https://mp.gtpbox.com/Uploads/zgsyhbxs/slider_904.png'
      }
    ],
    bannerConfig: {
      height: 340, //swiper高度
      width: 700, //swiper宽度
      borderRadius: 20, //圆角大小
      defaultImg: 'https://mp.gtpbox.com/Uploads/zgsyhbxs/slider_902.png', //默认占位图
      isPreview: true, //开启预览
      duration: '700', //切换间隙时长
      indicatorDots: true, //显示dot
      autoplay: true, //自动切换
      circular: true, //无限循环
      activeColor: "#666", //激活页dot颜色
      interval: "5000", //轮播间隔时间
    },

    menuList: [{
        icon: 'https://mp.gtpbox.com/Uploads/zgsyhbxs/slider_902.png',
        name: '测试菜单'
      },
      {
        icon: 'https://mp.gtpbox.com/Uploads/zgsyhbxs/slider_902.png',
        name: '测试菜单'
      }
    ],
    menuListConfig: {
      num: 4,
      maxWidthSize: '76',
      minWidthSize: '76',
      maxHeightSize:'68',
      minHeightSize: '68'
    }
  },

  onLoad: function() {

  }
})