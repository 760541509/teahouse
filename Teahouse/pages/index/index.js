// pages/index/index.js
// const indexUrl = 'http://demo001.free.idcfengye.com'
// const indexUrl = 'http://localhost:8080'

const app = getApp()
const indexUrl = app.globalData.url

Page({

  data: {
    index_img: indexUrl + '/images/teahouse.png'
  },

  formSubmit: function(e) {
    let {
      iphone,
      pwd
    } = e.detail.value;
    wx.request({
      url: indexUrl + '/login',
      method: 'GET',
      data: {
        iphone: iphone,
        pwd: pwd
      },
      success: function(res) {
        if (res.data.role == 'a3') {
          wx.navigateTo({
            url: '/pages/boss/boss',
          })
        } else if (res.data.role == "a2") {
          wx.navigateTo({
            url: '/pages/admin/admin',
          })
        } else {
          wx.navigateTo({
            url: '/pages/index/index',
          })
        }
      }
    })
  }
































  // /**
  //  * 页面的初始数据
  //  */
  // data: {

  // },

  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  // onLoad: function (options) {

  // },

  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function () {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function () {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function () {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function () {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function () {

  // }
})