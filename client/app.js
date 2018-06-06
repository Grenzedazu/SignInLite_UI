//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

App({
    onLaunch: function () {
        qcloud.setLoginUrl(config.service.loginUrl)
        try {
          var value = wx.getStorageSync('userData')
          if(value === '') {
            value = []
          }
            this.globalData.userInfo = value
        } catch (e) {
        }
    },
    globalData: {
      userInfo: ['Levin', '364875', '7836194'],
      names: ["stu_name", "stu_ID", "Class"],
      tags: ['姓名', '学号', '班级']
    }
  ,
  onHide: function(){
    wx.removeStorage({
      key: 'Baseline',
      success: function(res) {
      },
    })
  }
})