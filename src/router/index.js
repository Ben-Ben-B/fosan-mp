module.exports = [
    {
        path: "pages/index/index",
        config: {
            "navigationBarTitleText": "登陆"
        }
    },
    {
        path: "pages/logs/index",
        config: {
            "navigationBarTitleText": "数据列表",
            "onReachBottomDistance":50
        }
    },
    {
        path: "pages/logs/detail",
        config: {
            "navigationBarTitleText": "数据详情",
        }
    },
    {
        path: "pages/counter/index",
        config: {
            "navigationBarTitleText": "example"
        }
    },
    {
        path: "pages/myFriends/index",
        config: {
            "navigationBarTitleText": "我的朋友圈",
            "onReachBottomDistance":50,
            "enablePullDownRefresh": true
        }
    },
    {
        path: "pages/myFriends/detail",
        config: {
            "navigationBarTitleText": "朋友介绍"
        }
    }
]