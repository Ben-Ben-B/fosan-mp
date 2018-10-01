<template>
  <div class="my-detail">
    <div style="padding-left:50rpx;">
      <swiper :indicator-dots="true"
        :autoplay="true" :interval="5000" :duration="1000">
          <block v-for="(item, index) in detail.images" :key="index">
            <swiper-item>
              <image :src="item" class="slide-image" width="355" height="150"/>
            </swiper-item>
          </block>
      </swiper>
    </div>
    <div class="title">{{detail.title}}</div>
    <div class="content">{{detail.content}}</div>
  </div>
</template>

<script>
import { getMyfriDetail } from '@/service/index'
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
      getMyfriDetail({id:this.$root.$mp.query.id}).then(res=>{
        wx.hideLoading()
        if(res.code===0){
          this.detail = res.data
        }else{
          this.showError(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.my-detail{
  .title{
    padding: 30rpx;
  }
  .content{
    padding: 30rpx;
  }
}
</style>
