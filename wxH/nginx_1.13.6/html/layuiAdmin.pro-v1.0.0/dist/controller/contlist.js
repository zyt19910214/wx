/** layuiAdmin.pro-v1.0.0 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(["table","form","laydate"],function(t){function e(t){var e=a(".layui-laypage-curr em:eq(1)").text(),n=a(".layui-table tbody tr").length;console.log(n);var i=a(t.tr[0]).attr("data-index");return 0==i&&3==n&&(e=1==e?e:e-1),e}function n(t){var e=a(".layui-laypage-curr em:eq(1)").text();return t.isAll&&(e=1==e?e:e-1),e}var a=layui.$,i=layui.admin,o=layui.setter,c=layui.view,l=layui.table,r=(layui.laydate,layui.layer),d=layui.form;l.render({elem:"#LAY-app-content-list",url:o.http+"listGood/",where:{access_token:layui.data("layuiAdmin").access_token},cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"商品ID",sort:!0,align:"center"},{field:"name",title:"商品名称",minWidth:100,align:"center"},{field:"price",title:"商品价格(元)",minWidth:100,align:"center"},{field:"origin_price",title:"商品原价(元)",minWidth:100,align:"center"},{field:"type",title:"商品分类",align:"center"},{field:"uploadtime",width:170,title:"最近一次上货时间",sort:!0,align:"center"},{field:"status",title:"库存",templet:"#buttonTpl",minWidth:80,align:"center"},{title:"操作",minWidth:150,align:"center",fixed:"right",toolbar:"#table-content-list"}]],page:!0,limit:10,limits:[10,15,20,25,30],done:function(t){if(data_len=t.data.length,0==data_len){a(".layui-none").html("无商品数据")}},text:"对不起，加载出现异常！"}),d.on("submit(LAY-app-contlist-search)",function(t){var e=t.field;l.reload("LAY-app-content-list",{where:e,page:1})});var u={batchdel:function(){var t=l.checkStatus("LAY-app-content-list"),e=t.data;if(0===e.length)return r.msg("请选择数据",{icon:5});for(var c=[],d=0;d<e.length;d++)c.push(e[d].id);var u=(e[0].id,{});u.checkData=c.toString(),u.access_token=layui.data("layuiAdmin").access_token,r.confirm("确定删除吗？",function(e){a.ajax({url:o.http+"delGood/",type:"POST",data:u,error:function(t){r.alert("商品删除失败",{icon:2})},success:function(e){0==e.code?(r.msg("商品删除成功",{icon:1}),l.reload("LAY-app-content-list",{page:{curr:n(t)}})):"1001"==e.code?i.exit():r.alert("商品删除失败!",{icon:2})}})})},add:function(t){i.popup({title:"添加商品",area:["550px","450px"],id:"LAY-popup-content-add",success:function(t,e){c(this.id).render("app/content/listform").done(function(){d.render(null,"layuiadmin-app-form-list"),d.on("submit(layuiadmin-app-form-submit)",function(t){var n=t.field;n.access_token=layui.data("layuiAdmin").access_token,a.ajax({url:o.http+"addGood/",type:"POST",data:n,error:function(t){r.alert("商品添加失败",{icon:2})},success:function(t){0==t.code?(r.msg("商品添加成功",{icon:1}),l.reload("LAY-app-content-list")):2==t.code?r.alert("商品已存在,添加失败!",{icon:2}):3==t.code?r.alert("售价低于原价,添加失败!",{icon:2}):"1001"==t.code?i.exit():r.alert("商品添加失败!",{icon:2})}}),r.close(e)})})}})}};a(".layui-btn.layuiadmin-btn-list").on("click",function(){var t=a(this).data("type");u[t]?u[t].call(this):""}),l.on("tool(LAY-app-content-list)",function(t){var n=t.data;if("del"===t.event){var u={};u.checkData=n.id,u.access_token=layui.data("layuiAdmin").access_token,r.confirm("确定删除此商品？",function(n){a.ajax({url:o.http+"delGood/",type:"POST",data:u,error:function(t){r.alert("商品删除失败",{icon:2})},success:function(n){0==n.code?(r.msg("商品删除成功",{icon:1}),l.reload("LAY-app-content-list",{page:{curr:e(t)}})):"1001"==n.code?i.exit():r.alert("商品删除失败!",{icon:2})}}),r.close(n)})}else"edit"===t.event&&i.popup({title:"编辑商品",area:["550px","550px"],id:"LAY-popup-content-edit",success:function(t,e){c(this.id).render("app/content/listform",n).done(function(){d.render(null,"layuiadmin-app-form-list"),d.on("submit(layuiadmin-app-form-submit)",function(t){var n=t.field;n.access_token=layui.data("layuiAdmin").access_token,parseInt(n.add_count)<0?r.msg("失败！上货数量不能为负数",{icon:2}):a.ajax({url:o.http+"editGood/",type:"POST",data:n,error:function(t){r.alert("更新失败",{icon:2})},success:function(t){0==t.code?(l.reload("LAY-app-content-list"),r.msg("更新成功",{icon:1})):2==t.code?r.alert("商品已存在,更新失败!",{icon:2}):3==t.code?r.alert("售价低于原价,请重新更新!",{icon:2}):"1001"==t.code?i.exit():r.alert("更新失败!",{icon:2})}}),r.close(e)})})}})}),l.render({elem:"#LAY-app-content-comm",url:o.http+"listServer/",where:{access_token:layui.data("layuiAdmin").access_token},cols:[[{type:"checkbox",fixed:"left"},{field:"id",width:100,title:"服务ID",sort:!0},{field:"name",title:"服务名称",minWidth:100},{field:"price",title:"服务价格(元)"},{field:"type",title:"服务分类"},{title:"操作",minWidth:150,align:"center",fixed:"right",toolbar:"#table-content-com"}]],page:!0,limit:10,limits:[10,15,20,25,30],done:function(t){if(data_len=t.data.length,0==data_len){a(".layui-none").html("无服务数据")}},text:"对不起，加载出现异常！"}),l.on("tool(LAY-app-content-comm)",function(t){var n=t.data;if("del"===t.event){var u={};u.checkData=n.id,u.access_token=layui.data("layuiAdmin").access_token,r.confirm("确定删除此服务？",function(n){a.ajax({url:o.http+"delServer/",type:"POST",data:u,error:function(t){r.alert("服务删除失败",{icon:2})},success:function(n){0==n.code?(r.msg("服务删除成功",{icon:1}),l.reload("LAY-app-content-comm",{page:{curr:e(t)}})):"1001"==n.code?i.exit():r.alert("服务删除失败!",{icon:2})}}),r.close(n)})}else"edit"===t.event&&i.popup({title:"编辑服务",area:["550px","550px"],id:"LAY-popup-content-edit",success:function(t,e){c(this.id).render("app/content/serverform",n).done(function(){console.log(n),d.render(null,"layuiadmin-form-comment"),d.on("submit(layuiadmin-app-com-submit)",function(t){var n=t.field;n.access_token=layui.data("layuiAdmin").access_token,a.ajax({url:o.http+"editServer/",type:"POST",data:n,error:function(t){r.alert("服务修改失败",{icon:2})},success:function(t){0==t.code?(r.msg("服务编辑成功",{icon:1}),l.reload("LAY-app-content-comm")):2==t.code?r.msg("无变化，无需更新",{icon:1}):"1001"==t.code?i.exit():r.alert("服务编辑失败!",{icon:2})}}),layui.table.reload("LAY-app-content-comm"),r.close(e)})})}})}),d.on("submit(LAY-app-contcomm-search)",function(t){var e=t.field;l.reload("LAY-app-content-comm",{where:e,page:1})});var s={batchdel2:function(){var t=l.checkStatus("LAY-app-content-comm"),e=t.data;if(0===e.length)return r.msg("请选择数据");for(var c=[],d=0;d<e.length;d++)c.push(e[d].id);var u=(e[0].id,{});u.checkData=c.toString(),u.access_token=layui.data("layuiAdmin").access_token,r.confirm("确定删除吗？",function(e){a.ajax({url:o.http+"delServer/",type:"POST",data:u,error:function(t){r.alert("服务删除失败",{icon:2})},success:function(e){0==e.code?(r.msg("服务删除成功",{icon:1}),l.reload("LAY-app-content-comm",{page:{curr:n(t)}})):"1001"==e.code?i.exit():r.alert("服务删除失败!",{icon:2})}})})},add2:function(t){i.popup({title:"添加服务",area:["400px","450px"],id:"LAY-popup-content-add",success:function(t,e){c(this.id).render("app/content/serverform").done(function(){d.render(null,"layuiadmin-form-comment"),d.on("submit(layuiadmin-app-com-submit)",function(t){var n=t.field;n.access_token=layui.data("layuiAdmin").access_token,a.ajax({url:o.http+"addServer/",type:"POST",data:n,error:function(t){r.alert("服务添加失败",{icon:2})},success:function(t){0==t.code?(r.msg("服务添加成功",{icon:1}),l.reload("LAY-app-content-comm")):2==t.code?r.alert("服务已存在,添加失败!",{icon:2}):"1001"==t.code?i.exit():r.alert("服务添加失败!",{icon:2})}}),r.close(e)})})}})}};a(".layui-btn.layuiadmin-btn-comm").on("click",function(){var t=a(this).data("type");s[t]?s[t].call(this):""}),t("contlist",{})});