// pages/school/components/detail/index.js
const app = getApp();
const domainName = app.globalData.domainName;
var WxParse = require('../../../wxParse/wxParse.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
      htmlData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      console.log(options.id);
      switch(options.id){
        case "1":
          this.getTeachPower();
          break;
        case "2":
          this.toAllDepartments();
            break;
        case "3":
          this.getLearningExperience();
            break;
        case "4":
          this.getCourseIntroduction();
            break;
        case "5":
          this.getDepartment(options.departmentId);
          break;
      }
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

  getTeachPower(){
    const that = this
    wx.request({
      url: domainName+'/information/getInforContent/TeachPower',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        var temp = res.data;
        WxParse.wxParse('htmlData', 'html', temp, that);
      }
    })
  },

  getCourseIntroduction(){
    const that = this
      wx.request({
        url: domainName+'/information/getInforContent/CourseIntroduction',
        method: 'GET',
        header: {},
        credentials: 'omit',
        success(res) {
          var temp = res.data;
        WxParse.wxParse('htmlData', 'html', temp, that);
        }
      })
  },
  
  getLearningExperience(){
    const that = this
    wx.request({
      url: domainName+'/information/getInforContent/LearningExperience',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        var temp = res.data;
        WxParse.wxParse('htmlData', 'html', temp, that);
      }
    })
  },

  getDepartment(id){
    const that = this
    wx.request({
      url: domainName+'/department/getDepartment?departmentId='+id,
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        var temp = res.data.content;
        WxParse.wxParse('htmlData', 'html', temp, that);
      }
    })
  },

  toAllDepartments(){
    wx.navigateTo({
      url: '../deprtments/index',
    })
  },
})