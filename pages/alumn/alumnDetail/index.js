// pages/alumn/alumnDetail/index.js
const app = getApp();
const domainName = app.globalData.domainName;
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    schoolmateId:0,
    data:"",
    htmlData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({schoolmateId:options.id});
    this.getDetail(options.id);
  },
  getDetail(schoolmateId){
    const that = this
      wx.request({
        url: domainName+'/schoolmate/getSchoolmate',
        method: 'GET',
        data:{schoolmateId},
        header: {},
        credentials: 'omit',
        success(res) {
          console.log(res.data)
          that.setData({data:res.data})
          var temp = res.data.content;
          WxParse.wxParse('htmlData', 'html', temp, that);
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

  },


  
})