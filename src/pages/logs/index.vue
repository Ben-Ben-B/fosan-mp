<template>
  <div class="logs">
    <div class="com-fix">
          <div class="task task-status">
             <span>
                  <picker @change="genderPickerChange" :value="gender" :range="genderList" class="header-text">
                   <span class="house-text">{{!genderName?'性别':genderName}}</span>
                  </picker>
              </span>
             <span>
                   <span class="house-text" @click="reset">重置搜索</span>
              </span>
              <span>
                  <picker mode='multiSelector' @change="ageChange" :value="ageIndex" :range="ageList" class="header-text">
                   {{!age?'年龄段':age}}
                  </picker>
              </span>
          </div>
    </div>
    <div class="re-nodata" v-if="noMore&&!list.length">
      <image src="/static/images/no-data.png" class="repair-nodata"></image>
      <div>暂无数据</div>
     </div>
    <div class="list" v-for="item in list" :key="item.id">
      <div @click="previewImage(item.photo,list)" class="photo">
        <image :src="item.photo"></image>
      </div>
      <div class="introduce">
        <div>
          <div class="text">姓名：{{item.personnel_name}}</div>
          <div class="text">年龄：{{item.age}}</div>
          <div class="text">性别：{{item.genderName}}</div>
          <div class="text">学历：{{item.education}}</div>
          <div class="text">手机：***********</div>
        </div >
        <div class='jump' @click="jump(item.id)">
          跳转详情
        </div>
      </div>
    </div>
    <div class="loading gary-font" v-if="noMore&&!!list.length">已全部加载</div>
    <div class="loading" v-if="loading">加载中...</div>
  </div>
</template>

<script>
import { getDataList } from '@/service/index'
export default {
  data () {
    return {
      total:0,
      ageList:[],
      ageIndex:[0,0],
      age:'',
      genderList:['全部','女','男'],
      gender:0,
      page:1,
      size:10,
      startTime:'',
      endTime:'',
      genderName:'',
      loading: false,
      noMore: false,
      list:[]  
    }
  },
  mounted () {
      let age = 1980
      let arr = []
    for(let i=0;i<30;i++){
      arr.push(age+i+'')
    }
    this.ageList[0] = arr
    this.ageList[1] = arr
    this.getData()
  },
  onReachBottom(){
    this.getNextPageData()
  },
  methods: {
    reset(){
      this.page = 1
      this.age = ''
      this.genderName = ''
      this.startTime = ''
      this.endTime = ''
      this.gender = ''
      this.getData()
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
      let gender = this.gender > 0 ? this.gender - 1 : ''
      let startTime = this.startTime
      let endTime = this.endTime
      let data = {gender,startTime,endTime,page:this.page,size:this.size}
      getDataList(data).then(res=>{
        wx.hideLoading()
        this.noMore = res.data.list && res.data.list.length < this.size ||!res.data.list ? true :false
        this.loading = false
        if(res.code===0){
          this.list = this.list.concat(res.data.list)
        }else{
          this.showError(res.msg)
        }
      })
    },
    showError(title){
       wx.showToast({ title, duration: 1000, icon: 'none' })
    },
    getData(){
      this.total = 0
      wx.showLoading({ title: '加载中' })
      let gender = this.gender > 0 ? this.gender - 1 : ''
      let startTime = this.startTime
      let endTime = this.endTime
      let data = {gender,startTime,endTime,page:this.page,size:this.size}
      getDataList(data).then(res=>{
        wx.hideLoading()
        this.noMore = res.data.list && res.data.list.length < this.size ||!res.data.list ? true :false
        if(res.code===0){
          this.total = res.data.count
          this.list = res.data.list
        }else{
          this.showError(res.msg)
        }
      })
    },
    jump(id){
      if(wx.getStorageSync('permissions')==1){
        wx.navigateTo({url:'/pages/logs/detail?id='+id})
      }else{
        this.showError('你没有查看权限')
      }
    },
    ageChange(e){
      this.ageIndex = ''
      let indexArr = e.mp.detail.value
      let arr = indexArr + ''
      this.ageIndex = arr.split(',')
      this.ageIndex[0] > this.ageIndex[1] ? this.ageIndex[1] = this.ageIndex[0] : ''
      this.age = this.ageList[0][this.ageIndex[0]] +  ' ~ ' + this.ageList[1][this.ageIndex[1]]
      this.startTime = this.ageList[0][this.ageIndex[0]]
      this.endTime = this.ageList[1][this.ageIndex[1]]
      this.getData()
    },
    genderPickerChange(e){
      let index = e.mp.detail.value
      this.gender = index
      this.genderName = this.genderList[index]
      this.getData()
    },
    previewImage(img,imgs){
      imgs = imgs.map(item=>{return item.photo})
      wx.previewImage({
           current: img, // 当前显示图片的http链接
           urls: imgs // 需要预览的图片http链接列表
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.logs {
  padding: 30rpx;
  padding-top: 108rpx;
  background-color: #f7f7f7;
  min-height: 100vh;
  box-sizing: border-box;
   .com-fix{
       width: 100%;
       box-sizing: border-box;
       position: fixed;
       top: 0rpx;
       left: 0rpx;
       z-index: 1000;
       padding-top: 20rpx;
       background: $bac-color;
       >div {
         background-color: #fff;
       }
       .task {
           width: 100%;
           height: 88rpx;
           box-sizing: border-box;
           display: flex;
           padding: 0 10rpx;
           line-height: 88rpx;
           padding:0rpx 36rpx;
           border-bottom: 1rpx solid $border-color;
           justify-content: space-between;
       }
       .task-list {
           border-top: 1rpx solid $border-color;
           .header-more {
               width: 40rpx;
               height: 40rpx;
           }
           span:nth-of-type(1) {
             color: $gary-font;
           }
           span:nth-of-type(2) {
             display: inline-block;
             color: $bt-color;
           }
       }
      //  .task-status {
      //     span {
      //       // margin-right:10rpx;
      //     }
      //  }
    }
  .list{
    width:100%;
    min-height:334rpx;
    display: flex;
    background-color:#fff;
    margin-top:20rpx;
    box-sizing:border-box;
    padding:30rpx 30rpx;
    border-radius:6rpx;
    justify-content: flex-start;
    .photo{
      image{
        width:242rpx;
        height:272rpx;
      }
    }  
    .introduce {
      display: flex;
      justify-content: flex-start;
      padding-left: 20rpx;
      .text {
        padding:10rpx 0rpx;
        min-width: 254rpx;
      }
      .jump{
        display: flex;
        align-items: center;
        align-content: center;
        justify-content: center;
        color: red;
      }
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
