// pages/alumn/index.js
const app = getApp();
const domainName = app.globalData.domainName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
     mateList:[
       {img:'../../icons/abroad.png',name:'彼得多兰',info:'1234567685454545454545454545'},
       {img:'../../icons/abroad.png',name:'彼得多兰',info:'1234567685454545454545454545'},
     ],
     htmlData1:"",
     htmlData2:"",
     htmlData3:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getAgent1();
      this.getAgent2();
      this.getAgent3()
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
  toEvents(){
   wx.navigateTo({
     url: './event/index',
   })
  },
  toStruct(){
    wx.navigateTo({
      url: './struct/index',
    })
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
  
  getAgent1(){
    const that = this
      wx.request({
        url: domainName+'/information/getInforContent/AgentRight1',
        method: 'GET',
        header: {},
        credentials: 'omit',
        success(res) {
          console.log(res.data)
          that.setData({htmlData1:res.data})
        }
      })
  },

  getAgent2(){
    const that = this
      wx.request({
        url: domainName+'/information/getInforContent/AgentRight2',
        method: 'GET',
        header: {},
        credentials: 'omit',
        success(res) {
          console.log(res.data)
          that.setData({htmlData2:res.data})
        }
      })
  },

  getAgent3(){
    const that = this
      wx.request({
        url: domainName+'/information/getInforContent/AgentRight3',
        method: 'GET',
        header: {},
        credentials: 'omit',
        success(res) {
          console.log(res.data)
          that.setData({htmlData3:res.data})
        }
      })
  }
})