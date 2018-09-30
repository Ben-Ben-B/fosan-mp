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
import { getApiDetail } from '@/service/index'
export default {
  data() {
    return {
      detail:{}
    }
  },
  onShow(){
    this.getData()
  },
  methods: {
    showError(title){
       wx.showToast({ title, duration: 1000, icon: 'none' })
    },
     getData(){
       wx.showLoading({ title: '加载中' })
       getApiDetail({id:this.$root.$mp.query.id}).then(res=>{
         wx.hideLoading()
         if(res.code===0){
           this.detail = res.data
         }else{
           this.showError(res.msg)
         }
       })
     },
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
