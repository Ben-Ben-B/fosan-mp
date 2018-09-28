<template>
  <div class="detail">
    <div class='list'>
      <span>姓名：{{detail.personnel_name}}</span>
      <span>性别：{{detail.genderName}}</span>
    </div>
    <div class='list'>
      <span>年龄：{{detail.age}}</span>
      <span>学历：{{detail.education}}</span>
    </div>
    <div class='list'>
      <span>QQ：{{detail.qq}}</span>
    </div>
    <div class='list'>
      <span>e-mail：{{detail.mail}}</span>
    </div>
    <div class='list'>
      <span>手机号：{{detail.mobile}}</span>
    </div>
    <div class='list'>
      <span>身份证：{{detail.identity_card}}</span>
    </div>
    <div>
      <div>图片：</div>
      <div @click="previewImage(detail.photo)">
        <image :src='detail.photo'></image>
      </div>
      <div @click="previewImage(detail.positive_photo)">
        <image :src='detail.positive_photo'></image>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail:{
             education: "大专",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "191287675@qq.com",
             batch_number: "013",
             audit_date: "2018-05-31",
             auditing: "2",
             identity_card: "440681199605160028",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180507/ChenMeiXin.JPG_V259.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180507/ChenMeiXin2.JPG_PMF7.jpg",
             id: "3955",
             is_print: "2",
             archives_date: "2018-05-31 16:41:20",
             grade_date: "NULL",
             qq: "NULL",
             gradeName: "暂无数据",
             suggestion: "NULL",
             mobile: "15015527868",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180511/ChenMeiXin3.JPG_6ZCU.jpg",
             grade_by: "NULL",
             webchart: "NULL",
             personnel_name: "陈美欣",
             organization_name: "佛山市名策房地产顾问有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "陈美欣",
             personnel_sn: "SFX002692",
             user_id: "5286",
             organization_id: "737",
             grade: "NULL",
             application_date: "2018-05-07",
             is_dimission: "2",
             reviewed_date: "2018-05-31 16:41:20",
             new_items: "NULL"
             }
    }
  },
  onShow(){
    console.log(this.$root.$mp.query.id)
  },
  methods: {
     previewImage(img){
      wx.previewImage({
           current: img, // 当前显示图片的http链接
           urls: [this.detail.photo,this.detail.positive_photo] // 需要预览的图片http链接列表
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  padding: 30rpx;
  .list {
    display: flex;
    justify-content: space-between;
    padding: 20rpx 0;
  }
}
</style>
