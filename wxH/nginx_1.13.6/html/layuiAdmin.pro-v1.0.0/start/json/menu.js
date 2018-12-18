{
  "code": 0
  ,"msg": ""
  ,"data": [ {
    "name": "user"
    ,"title": "用户"
    ,"icon": "layui-icon-user"
    ,"list": [{
      "name": "user"
      ,"title": "授权用户"
      ,"jump": "user/user/list"
    }]
  }, {
    "name": "app"
    ,"title": "营销"
    ,"icon": "layui-icon-app"
    ,"list": [{
      "name": "content"
      ,"title": "商城管理"
      ,"spread": true
      ,"list": [{
        "name": "list"
        ,"title": "商品管理"
      },{
        "name": "serverList"
        ,"title": "分类管理"
      },{
        "name": "adList"
        ,"title": "公告管理"
      }]

    }]
  }]
}