// pages/index/components/noticeDetail/index.js
const app = getApp();
const domainName = app.globalData.domainName;
var WxParse = require('../../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      noticeList:{
        content:""
      },
      htmlData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this
    const noticeId = options.noticeId
    const isRead = options.isRead
    this.getNotice(noticeId,isRead)
  },

  getNotice(noticeId,isRead){
    const that = this
    wx.request({
      url: domainName+'/notice/getNotice',
      method: 'GET',
      header: {},
      data:{
        noticeId,
      },
      credentials: 'omit',
      success(res) {
        console.log(res.data)
        that.setData({noticeList:res.data})
        if(isRead === "0"){
          that.setRead(noticeId)
        }
        var temp = res.data.content;
        WxParse.wxParse('htmlData', 'html', temp, that);
      }
    })
  },

  setRead(noticeId){
    wx.request({
      url: domainName+'/notice/readNotice',
      method: 'POST',
      header: {},
      data:{
        noticeId,
        userId:wx.getStorageSync('openid'),
      },
      credentials: 'omit',
      success(res) {
      }
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})