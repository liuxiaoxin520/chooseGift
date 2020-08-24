// pages/component/loading-animation.js
Component({
  properties: {
    bannerList: { // 属性名
      type: Array,
      value: ''
    },

    bannerConfig: {
      type: Object,
      value: ''
    }
  },

  observers: {

  },

  data: {

  },
  ready() {

  },

  methods: {
    //预览图片
    previewImage(e, url = this.data.bannerList) {
      var _arrimg = []
      var index = e.currentTarget.dataset["index"]
      for (let i in url) {
        var newimg = url[i].src
        _arrimg.push(newimg)
      }
      wx.previewImage({
        current: _arrimg[index],
        urls: _arrimg
      })
    }
  }
})