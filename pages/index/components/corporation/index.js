// pages/index/components/corporation/index.js
const app = getApp();
const domainName = app.globalData.domainName;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    corporationList:[
      {
        title:'武汉理工大学合作政策',
        time:'2020-3-5',
        image:''
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.getCooperation();
  },
  todetail(e){
   console.log(e)
   const {interCooperId} = e.currentTarget.dataset.item;
   wx.navigateTo({
     url: `../../detailExpress/index?id=${interCooperId}&key=${"interCooperId"}`,
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

  getCooperation(){
    const that = this
    wx.request({
      url: domainName+'/interCooperation/getAllUseInterCoopers',
      method: 'GET',
      header: {},
      credentials: 'omit',
      success(res) {
        console.log(res.data);
        that.setData({corporationList:res.data})
      }
    })
  }
})