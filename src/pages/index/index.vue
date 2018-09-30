<template>
  <div class="login">
    <div class="bind-phone">
      <form report-submit="true">
        <view class="input-cont">
          <input type="text" class="input" :maxlength="11" placeholder="用户名" v-model="name"
            placeholder-style="color: #B2B2B2" required />
        </view>
        <view class="input-cont">
          <input type="text" :maxlength="11" placeholder="请输入密码" v-model="password" placeholder-style="color: #B2B2B2" required />
        </view>
        <view>
          <button open-type="getUserInfo" lang="zh_CN" size="32rpx" class="next-button" :class="name&&password? 'allow-btn':''" @getuserinfo="onGotUserInfo">授权登录</button>
        </view>
      </form>
      <div>此数据仅供学习使用，不能用作其他用途，初始账号为<span class="text-world">admin</span>,密码为<span class="text-world">123456</span>，如果不正确，请联系管理员，谢谢</div>
    </div>
  </div>
</template>

<script>
import { login } from '@/service/index'
export default {
  data() {
    return {
      name:'',
      password:'',
     isAllowBtn:false
    }
  },
  onShow: function() {
  },
  methods: {
    showError(title){
      wx.showToast({ title, icon: 'none', duration: 1000 })
    },
    onGotUserInfo(e){
       let nickName = e.mp.detail.userInfo.nickName
       if(!this.name){
         this.showError('请填写账号')
         return
       }
       if(!this.password){
         this.showError('请填写密码')
         return
       }
       if(nickName){ 
         wx.showLoading({ title: '加载中' })
         login({name:this.name,password:this.password}).then(res=>{
           wx.hideLoading()
           console.log(res,e.mp.detail)
           if(res.code===0){
             wx.setStorageSync('createTime',+new Date())
             wx.setStorageSync('permissions',res.data.permissions)
             wx.setStorageSync('token',res.data.token)
             wx.redirectTo({url:'/pages/logs/index'})
           }else{
             this.showError(res.msg)
           }
         })
         
       }else{
         wx.showToast({
            title: '请先授权',
            duration: 1000,
            icon: 'none'
          })
       }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../styles/config';
.login{
  padding-top: 20rpx;
  height: 100%;
  box-sizing: border-box;
}
.bind-phone {
  padding: 40rpx 30rpx 0 30rpx;
  height: 100%;
  background-color: #fff;
  .text-world {
    font-size: 40rpx;
    color: red;
  }
  .input-cont {
    display: flex;
    align-items: center;
    border-bottom: 1rpx solid #e1e1e6;
    margin: 20rpx 0;
    padding: 10rpx 0;
    color: $theme-bgc-black;
    font-size: 28rpx;
    .input {
      width: 400rpx important;
    }
    .code-btn {
      color: #808080;
      line-height: 1.8;
      min-width: 160rpx;
      &.f-green {
        color: $green;
      }
    }
    .input-label {
      width: 160rpx;
    }
    > input {
      flex: 1 1 auto;
      font-size: 28rpx;
      color: #333;
    }
  }

  .next-button {
    display: block;
    margin: 70rpx auto;
    width: 600rpx;
    height: 90rpx;
    border-radius: 60rpx;
    line-height: 90rpx;
    background-color: #cecece;
    font-size: 32rpx;
    text-align: center;
    color: #808080;
    &.allow-btn {
      color: #fff;
      background-image: linear-gradient(-90deg, #00A8BC 0%, #00DDC3 100%);
      box-shadow: 0 8rpx 12rpx #b8dbd6;
    }
  }

  .hide-area {
    display: none;
  }
  .tr {
    text-align: right;
  }
}
</style>

