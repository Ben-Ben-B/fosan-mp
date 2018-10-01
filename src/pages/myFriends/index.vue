<template>
  <div class="my-list">
      <div class="re-nodata" v-if="noMore&&!list.length">
          <image src="/static/images/no-data.png" class="repair-nodata"></image>
          <div>暂无数据</div>
      </div>
    <div class="list" @click="jump(item.id)" v-for="(item, index) in list" :key="index">
      <image :src='item.img'></image>
      <div class="title">{{item.title}}</div>
    </div>
    <div class="loading gary-font" v-if="noMore&&!!list.length">已全部加载</div>
    <div class="loading" v-if="loading">加载中...</div>
  </div>
</template>

<script>
import { getMyfriList } from '@/service/index'
export default {
  data() {
    return {
      page:1,
      size:10,
      loading: false,
      noMore: false,
      list:[]
    }
  },
  onShow(){
  },
  mounted() {
    this.getData()
  },
  onReachBottom(){
    this.getNextPageData()
  },
  onPullDownRefresh(){
    this.page = 1
    this.getData()
  },
  methods: {
    showError(title){
       wx.showToast({ title, duration: 1000, icon: 'none' })
    },
    getNextPageData(){
      if (this.loading) {
        return
      }
      if (this.noMore) {
        return
      }
      this.loading = true
      this.page++
      getMyfriList({page:this.page,size:this.size}).then(res=>{
        this.noMore = res.data.list && res.data.list.length < this.size ||!res.data.list ? true :false
        this.loading = false
        if(res.code===0){
          this.list = this.list.concat(res.data.list)
        }else{
          this.showError(res.msg)
        }
      })
    },
    getData(){
      wx.showLoading({ title: '加载中' })
      getMyfriList({page:this.page,size:this.size}).then(res=>{
        wx.hideLoading()
        wx.stopPullDownRefresh()
        this.noMore = res.data.list && res.data.list.length < this.size ||!res.data.list ? true :false
        if(res.code===0){
          this.list = res.data.list
        }else{
          this.showError(res.msg)
        }
      })
    },
    jump(id){
      wx.navigateTo({url:'/pages/myFriends/detail?id='+id})
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.my-list{
  padding: 30rpx;
  background-color: #f7f7f7;
  min-height: 100vh;
  box-sizing: border-box;
  .list{
    background-color: #fff;
    margin-bottom: 30rpx;
    position: relative;
    image {
      width:100%;
      height:350rpx;
    }
    .title {
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, .5);
      width: 100%;
      padding: 20rpx;
      box-sizing: border-box;
      color: #fff;
      white-space:nowrap; 
      overflow:hidden; 
      text-overflow:ellipsis;
    }
  }
  .loading {
    height: 70rpx;
    text-align: center;
    line-height: 70rpx;
  }
  .gary-font {
    color: $gary-font;
  }
   .re-nodata {
    text-align: center;
    > div {
      color: $gary-font;
    }
    .repair-nodata {
      width: 388rpx;
      height: 298rpx;
      margin: 200rpx auto;
      margin-bottom: 50rpx;
    }
  }
}
</style>
