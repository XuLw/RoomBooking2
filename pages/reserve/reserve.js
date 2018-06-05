Page({

  /**
   * 页面的初始数据
   */
  data: {
        notice:null,
        date: '2018-05-23',
        time_start: '08:00',
        time_end: '14:00',
        group: ['全部','生科楼', '信息楼', '建筑楼', '文管楼'],
        group_value: 0,
        people_value:5,
        items: [
            {  value: '多媒体'  ,checked: 'true'},
            {  value: '空调' },
            {  value: '黑板' },
        ],
        src:'/image/预订.png',
        building : '信息楼',
        room: 'A209',
        pNum:'50',
        
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  bindDateChange: function (e) {
      this.setData({
          date: e.detail.value
      })
  },

  bindTimeChange_start: function (e) {
      this.setData({
          time_start: e.detail.value
      })
  },

  bindTimeChange_end: function (e) {
      this.setData({
          time_end: e.detail.value
      })
  },

  bindGroupChange: function (e) {
      this.setData({
          group_value: e.detail.value
      })
  },

  bindPeopleChange:function (e) {
      console.log( e)
  },

  checkboxChange: function (e) {
      console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  }
})


