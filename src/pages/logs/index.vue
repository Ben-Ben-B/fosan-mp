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
                  <picker mode='multiSelector' @change="ageChange" :value="ageIndex" :range="ageList" class="header-text">
                   {{!age?'年龄段':age}}
                  </picker>
              </span>
          </div>
    </div>
    <div class="list" v-for="item in list" :key="item.id">
      <div @click="previewImage(item.photo,list)" class="photo">
        <image :src="item.photo"></image>
      </div>
      <div class="introduce">
        <div>
          <div class="text">姓名：{{item.personnel_name}}</div>
          <div class="text">年龄：*****</div>
          <div class="text">性别：{{item.genderName}}</div>
          <div class="text">学历：{{item.education}}</div>
          <div class="text">手机：1501****868</div>
        </div >
        <div class='jump' @click="jump(item.id)">
          跳转详情
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {deepcopy} from '@/config/utils'
export default {
  data () {
    return {
      ageList:[],
      ageIndex:[0,0],
      age:'',
      genderList:['全部','女','男'],
      gender:'',
      genderName:'',
      list:[
             {
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
             },
             {
             education: "高中",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "929761348@qq.com",
             batch_number: "乐有家2018.5.15-16",
             audit_date: "2018-05-31",
             auditing: "2",
             identity_card: "441882199612245749",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180426/WeiXinTuPian_20180426155327.JPG_VT3A.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180426/WeiXinTuPian_20180426155337.JPG_C59S.jpg",
             id: "3852",
             is_print: "2",
             archives_date: "2018-05-31 17:34:04",
             grade_date: "NULL",
             qq: "929761348",
             gradeName: "暂无数据",
             suggestion: "批量审核通过",
             mobile: "15816201273",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180426/LeLiaoTuPian20180426154723.PNG_XP4W.png",
             grade_by: "NULL",
             webchart: "NULL",
             personnel_name: "邓爱珍",
             organization_name: "佛山市乐有家房产经纪有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "邓爱珍",
             personnel_sn: "SFX002813",
             user_id: "5160",
             organization_id: "111",
             grade: "NULL",
             application_date: "2018-04-26",
             is_dimission: "2",
             reviewed_date: "2018-05-31 17:34:04",
             new_items: "NULL"
             },
             {
             education: "中专",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "835493372@qq.com",
             batch_number: "012",
             audit_date: "2018-05-31",
             auditing: "2",
             identity_card: "440881199603116120",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180428/WEIXINTUPIAN_20180417223749.JPG_EPMY.JPG_FS9D.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180428/WEIXINTUPIAN_20180417223801.JPG_E8G2.JPG_SJMA.jpg",
             id: "3741",
             is_print: "2",
             archives_date: "2018-05-31 16:00:45",
             grade_date: "NULL",
             qq: "NULL",
             gradeName: "暂无数据",
             suggestion: "NULL",
             mobile: "13246546609",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180428/WeiXinTuPian_20180428161739.PNG_X98J.png",
             grade_by: "NULL",
             webchart: "NULL",
             personnel_name: "阮月花",
             organization_name: "佛山市和记裕丰房地产代理有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "阮月花",
             personnel_sn: "SFX002634",
             user_id: "4849",
             organization_id: "713",
             grade: "NULL",
             application_date: "2018-04-17",
             is_dimission: "2",
             reviewed_date: "2018-05-31 16:00:45",
             new_items: "NULL"
             },
             {
             education: "中专",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "2206722911@qq.com",
             batch_number: "乐有家2018.4.12",
             audit_date: "2018-04-17",
             auditing: "2",
             identity_card: "441823199603100441",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180328/WeiXinTuPian_20180328181206.PNG_QC5W.png",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180328/WeiXinTuPian_20180328181220.PNG_T8D5.png",
             id: "3529",
             is_print: "2",
             archives_date: "2018-04-17 11:35:17",
             grade_date: "NULL",
             qq: "2206722911",
             gradeName: "暂无数据",
             suggestion: "批量审核通过",
             mobile: "13612577750",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180327/WeiXinTuPian_20180327182939_FuBen.JPG_HQWK.jpg",
             grade_by: "NULL",
             webchart: "LYR2206722911",
             personnel_name: "李燕容",
             organization_name: "佛山市乐有家房产经纪有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "李燕容",
             personnel_sn: "SFX002129",
             user_id: "4739",
             organization_id: "111",
             grade: "NULL",
             application_date: "2018-03-27",
             is_dimission: "2",
             reviewed_date: "2018-04-17 11:35:17",
             new_items: "NULL"
             },
             {
             education: "高中",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "1902069783@qq.com",
             batch_number: "补2018.6.6",
             audit_date: "2018-05-07",
             auditing: "2",
             identity_card: "362426199611028441",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180328/1.JPG_L7HU.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180328/XIAO.JPG_KGBQ.jpg",
             id: "3534",
             is_print: "2",
             archives_date: "2018-05-07 10:51:19",
             grade_date: "NULL",
             qq: "NULL",
             gradeName: "暂无数据",
             suggestion: "NULL",
             mobile: "15718403034",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180507/WeiXinTuPian_20180507104001.PNG_K524.png",
             grade_by: "NULL",
             webchart: "NULL",
             personnel_name: "宋倩",
             organization_name: "佛山市合富置业房地产顾问有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "宋倩",
             personnel_sn: "SFX002527",
             user_id: "4724",
             organization_id: "32",
             grade: "NULL",
             application_date: "2018-03-27",
             is_dimission: "2",
             reviewed_date: "2018-05-07 10:51:19",
             new_items: "NULL"
             },
             {
             education: "高中",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "476630125@QQ.COM",
             batch_number: "乐有家2018.5.15-16",
             audit_date: "2018-05-31",
             auditing: "2",
             identity_card: "440923199609164440",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180326/WeiXinTuPian_20180326174805_FuBen.JPG_BYMZ.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180326/WeiXinTuPian_20180326174811_FuBen.JPG_CBPL.jpg",
             id: "3500",
             is_print: "2",
             archives_date: "2018-05-31 17:37:30",
             grade_date: "NULL",
             qq: "476630125",
             gradeName: "暂无数据",
             suggestion: "批量审核通过",
             mobile: "13425631570",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180326/WeiXinTuPian_20180326174759_FuBen.JPG_5SPI.jpg",
             grade_by: "NULL",
             webchart: "13425631570",
             personnel_name: "蔡海珠",
             organization_name: "佛山市乐有家房产经纪有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "蔡海珠",
             personnel_sn: "SFX002832",
             user_id: "4702",
             organization_id: "111",
             grade: "NULL",
             application_date: "2018-03-25",
             is_dimission: "2",
             reviewed_date: "2018-05-31 17:37:30",
             new_items: "NULL"
             },
             {
             education: "大专",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "1162459741@qq.com",
             batch_number: "012",
             audit_date: "2018-05-31",
             auditing: "2",
             identity_card: "441224199609241425",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180313/WeiXinTuPian_20180313094658.JPG_HJKD.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180313/WeiXinTuPian_20180313094708.JPG_HOT8.jpg",
             id: "3397",
             is_print: "2",
             archives_date: "2018-05-31 15:42:28",
             grade_date: "NULL",
             qq: "NULL",
             gradeName: "暂无数据",
             suggestion: "NULL",
             mobile: "13660978815",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180313/JiHongMei.JPG_4K6P.jpg",
             grade_by: "NULL",
             webchart: "NULL",
             personnel_name: "纪红梅",
             organization_name: "佛山市昇盈房地产中介有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "纪红梅",
             personnel_sn: "SFX002585",
             user_id: "4578",
             organization_id: "807",
             grade: "NULL",
             application_date: "2018-03-13",
             is_dimission: "2",
             reviewed_date: "2018-05-31 15:42:28",
             new_items: "NULL"
             },
             {
             education: "职中",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "928289063@qq.com",
             batch_number: "补2018.4.28",
             audit_date: "2018-05-02",
             auditing: "2",
             identity_card: "441223199611182026",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20180107/WeiXinTuPian_20180107120403.JPG_ZTAO.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20180107/WeiXinTuPian_20180107120359 - FuBen.JPG_WJBU.jpg",
             id: "3298",
             is_print: "2",
             archives_date: "2018-05-02 15:05:33",
             grade_date: "NULL",
             qq: "NULL",
             gradeName: "暂无数据",
             suggestion: "NULL",
             mobile: "13144707317",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180427/WeiXinTuPian_20180427162533_KanTuWang.JPG_4UX7.jpg",
             grade_by: "NULL",
             webchart: "NULL",
             personnel_name: "杨玉婷",
             organization_name: "佛山市万众置业有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "杨玉婷",
             personnel_sn: "SFX002408",
             user_id: "4370",
             organization_id: "202",
             grade: "NULL",
             application_date: "2018-01-07",
             is_dimission: "2",
             reviewed_date: "2018-05-02 15:05:33",
             new_items: "NULL"
             },
             {
             education: "自考大专",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "269292818@qq.com",
             batch_number: "乐有家18.12",
             audit_date: "2018-01-23",
             auditing: "2",
             identity_card: "441226199606034044",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20171221/ZHENG.PNG_7O8X.png",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20171221/BEI.PNG_2VC6.png",
             id: "3219",
             is_print: "2",
             archives_date: "2018-01-23 11:34:47",
             grade_date: "NULL",
             qq: "26292818",
             gradeName: "暂无数据",
             suggestion: "NULL",
             mobile: "18824842930",
             photo: "http://image.kamfat.net/house/upload/image/Common/20171221/8.JPG_5PLS.jpg",
             grade_by: "NULL",
             webchart: "18824842930",
             personnel_name: "蔡嘉怡",
             organization_name: "佛山市乐有家房产经纪有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "蔡嘉怡",
             personnel_sn: "SFX001279",
             user_id: "1161",
             organization_id: "111",
             grade: "NULL",
             application_date: "2017-12-21",
             is_dimission: "2",
             reviewed_date: "2018-01-23 11:34:47",
             new_items: "NULL"
             },
             {
             education: "中专",
             reviewed_by: "fsfxzj",
             gender: "0",
             mail: "1287840550@qq.com",
             batch_number: "补2018.4.28",
             audit_date: "2018-05-02",
             auditing: "2",
             identity_card: "441223199605141121",
             positive_photo: "http://image.kamfat.net/house/upload/image/Common/20171215/AA.JPG_FI7K.jpg",
             score: "0",
             opposite_photo: "http://image.kamfat.net/house/upload/image/Common/20171215/BB.JPG_GFKI.jpg",
             id: "3145",
             is_print: "2",
             archives_date: "2018-05-02 15:05:26",
             grade_date: "NULL",
             qq: "NULL",
             gradeName: "暂无数据",
             suggestion: "NULL",
             mobile: "13288298895",
             photo: "http://image.kamfat.net/house/upload/image/Common/20180427/WeiXinTuPian_20180427170842.PNG_WULB.png",
             grade_by: "NULL",
             webchart: "NULL",
             personnel_name: "钱楚晴",
             organization_name: "佛山市万众置业有限公司",
             genderName: "女",
             is_show: "1",
             applicant: "钱楚晴",
             personnel_sn: "SFX002407",
             user_id: "4198",
             organization_id: "202",
             grade: "NULL",
             application_date: "2017-12-15",
             is_dimission: "2",
             reviewed_date: "2018-05-02 15:05:26",
             new_items: "NULL"
             }
      ]   
    }
  },
  onShow () {
      let age = 1980
      let arr = []
    for(let i=0;i<30;i++){
      arr.push(age+i+'')
    }
    this.ageList[0] = arr
    this.ageList[1] = arr
  },
  methods: {
    jump(id){
      wx.navigateTo({url:'/pages/logs/detail?id='+id})
    },
    ageChange(e){
      this.ageIndex = ''
      let indexArr = e.mp.detail.value
      let arr = indexArr + ''
      this.ageIndex = arr.split(',')
      this.ageIndex[0] > this.ageIndex[1] ? this.ageIndex[1] = this.ageIndex[0] : ''
      this.age = this.ageList[0][this.ageIndex[0]] +  ' ~ ' + this.ageList[1][this.ageIndex[1]]
    },
    genderPickerChange(e){
      let index = e.mp.detail.value
      this.gender = index
      this.genderName = this.genderList[index]
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
}
</style>
