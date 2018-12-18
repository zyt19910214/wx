/** layuiAdmin.pro-v1.0.0 LPPL License By http://www.layui.com/admin/ */
 ;layui.define(["table","form","element"],function(e){var t=layui.$,a=layui.admin,l=layui.setter,r=layui.laytpl,l=layui.setter,i=layui.view,n=layui.table,o=(layui.slider,layui.form),s=layui.element;n.render({elem:"#LAY-app-workorder",url:l.http+"listOrder/",where:{access_token:layui.data("layuiAdmin").access_token},cols:[[{type:"numbers",fixed:"left"},{field:"order_serial_number",width:150,title:"订单号",sort:!0,align:"center"},{field:"name",width:150,title:"订单人",align:"center"},{field:"phone",width:150,title:"手机号",align:"center"},{field:"type",width:100,title:"订单类型",align:"center"},{field:"all_value",width:100,title:"结算费用",align:"center"},{field:"progress",title:"进度",width:200,align:"center",templet:"#progressTpl"},{field:"notes",width:160,title:"备注",align:"center"},{field:"state",width:120,title:"订单状态",templet:"#buttonTpl",align:"center"},{title:"操作",align:"center",minWidth:350,fixed:"right",toolbar:"#table-system-order"}]],page:!0,limit:10,limits:[10,15,20,25,30],text:"对不起，加载出现异常！",done:function(e){if(s.render("progress"),data_len=e.data.length,"1001"==e.code)a.exit();else if(0==data_len){t(".layui-none").html("无订单数据")}}}),n.on("tool(LAY-app-workorder)",function(e){var s=e.data;"view"===e.event?a.popup({title:"订单信息",id:"LAY-popup-workorder-add",area:["750px","750px"],success:function(e,r){i(this.id).render("app/workorder/listform").done(function(){t.ajax({url:l.http+"orderDetail/",type:"get",data:{order_serial_number:s.order_serial_number,access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("获取订单详情失败",{icon:2})},success:function(e){if(0==e.code){o.render(null,"layuiadmin-form-workorder"),t("#orderid").val(e.order_serial_number),t("#attr").val(e.name),t("#type").val(e.type),0==e.state?t("#status").val("待结账"):1==e.state?t("#status").val("已结账"):t("#status").val("已废弃"),t("#time").val(e.start_time),t("#end_time").val(e.end_time),t("#site_money").val(e.site_money),t("#money").val(e.money),t("#lay_value").val(e.lay_value),t("#free_value").val(e.free_value),t("#jf").val(e.integration),t("#all").attr("style","display:none;");var l=e.server,r=e.good;if(0!=l.length){for(var i='<table  class="layui-table" lay-size="sm" align="center"><th>服务名</th><th>单价</th><th>数量</th>',n=0;n<l.length;n++)i+="<tr><td>"+l[n].name+"</td><td>"+l[n].price+"</td><td>"+l[n].server_count+"</td></tr>";i+="</table>"}else i='<table  class="layui-table" lay-size="sm" align="center"><th>服务名</th><th>单价</th><th>数量</th><tr><td style="font-size:8px;" colspan = "3" align="center">未消费</td></tr></table>';if(0!=r.length){for(var s='<table  class="layui-table" lay-size="sm"><th>商品名</th><th>单价</th><th>数量</th>',n=0;n<r.length;n++)s+="<tr><td>"+r[n].name+"</td><td>"+r[n].price+"</td><td>"+r[n].good_count+"</td></tr>";s+="</table>"}else s='<table  class="layui-table" lay-size="sm"><th>商品名</th><th>单价</th><th>数量</th><tr><td style="font-size:8px;" colspan="3" align="center">未消费</td><tr></table>';t("#serverlist").html(i),t("#goodlist").html(s)}else"1001"==e.code&&a.exit()}}),o.on("submit(LAY-app-workorder-submit)",function(e){layer.close(r)})})}}):"complete"===e.event?layer.prompt({formType:1,title:"敏感操作，请验证口令"},function(e,r){"111111"==e?(layer.close(r),a.popup({title:"订单信息",id:"LAY-popup-workorder-add",area:["750px","750px"],success:function(e,r){i(this.id).render("app/workorder/listform").done(function(){t.ajax({url:l.http+"orderDetail/",type:"get",data:{order_serial_number:s.order_serial_number,access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("获取订单详情失败",{icon:2})},success:function(e){if(0==e.code){o.render(null,"layuiadmin-form-workorder"),t("#orderid").val(e.order_serial_number),t("#attr").val(e.name),t("#type").val(e.type),0==e.state?t("#status").val("待结账"):1==e.state?t("#status").val("已结账"):t("#status").val("已废弃"),t("#time").val(e.start_time),t("#end_time").val(e.end_time),t("#site_money").val(e.site_money),t("#money").val(e.money),t("#lay_value").removeAttr("disabled"),t("#free_value").removeAttr("disabled"),t("#jf").val(e.integration),t("#end").val("结账"),point="<div >目前可用积分为："+e.valid_point+"分</div>",t("#point").html(point);var l=e.server,r=e.good;if(0!=l.length){for(var i='<table  class="layui-table" lay-size="sm" align="center"><th>服务名</th><th>单价</th><th>数量</th>',n=0;n<l.length;n++)i+="<tr><td>"+l[n].name+"</td><td>"+l[n].price+"</td><td>"+l[n].server_count+"</td></tr>";i+="</table>"}else i='<table  class="layui-table" lay-size="sm" align="center"><th>服务名</th><th>单价</th><th>数量</th><tr><td style="font-size:8px;" colspan = "3" align="center">未消费</td></tr></table>';if(0!=r.length){for(var s='<table  class="layui-table" lay-size="sm"><th>商品名</th><th>单价</th><th>数量</th>',n=0;n<r.length;n++)s+="<tr><td>"+r[n].name+"</td><td>"+r[n].price+"</td><td>"+r[n].good_count+"</td></tr>";s+="</table>"}else s='<table  class="layui-table" lay-size="sm"><th>商品名</th><th>单价</th><th>数量</th><tr><td style="font-size:8px;" colspan="3" align="center">未消费</td><tr></table>';t("#serverlist").html(i),t("#goodlist").html(s),0==e.valid_point?t("#point_type").attr("style","display:none;"):(o.on("radio(gis)",function(e){layer.msg("请在下方文本框中输入本次使用的积分"),t("#my_point").attr("style","display:inline;width:250px;"),t("#my_point").attr("lay-verify","required"),t("#my_point").attr("placeholder","可用积分取整到10位数")}),o.on("radio(gis1)",function(e){t("#my_point").attr("style","display:none;"),t("#my_point").removeAttr("lay-verify")}),o.on("radio(gis2)",function(e){t("#my_point").attr("style","display:none;"),t("#my_point").removeAttr("lay-verify")}))}else"1001"==e.code&&a.exit()}}),o.on("submit(LAY-app-workorder-submit)",function(e){console.log(s),field=e.field,field.access_token=layui.data("layuiAdmin").access_token,t.ajax({url:l.http+"endOrder/",type:"post",data:field,error:function(e){layer.msg("订单结算失败",{icon:2})},success:function(e){0==e.code?(layer.msg("结账成功",{icon:1}),n.reload("LAY-app-workorder")):"1001"==e.code?a.exit():2==e.code?layer.msg("可用积分不足",{icon:2}):layer.msg("结账失败，请稍后重试",{icon:2}),layer.close(r)}})})})}})):(layer.close(r),layer.alert("密码错误",{icon:2}))}):"new_add"==e.event?a.popup({title:"已有未结算订单时新增订单",area:["800px","600px"],id:"LAY-popup-user-add",success:function(e,n){i(this.id).render("app/workorder/new_dd",s).done(function(){o.render(null,"layuiadmin-form-new-dd"),t("#vip_id").val(s.person_id),t("#vip_name").val(s.name),t("#vip_phone").val(s.phone),t.ajax({url:l.http+"listServer/",type:"GET",data:{access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("获取服务列表失败")},success:function(e){if(0==e.code){var t=demo.innerHTML,l=document.getElementById("server");r(t).render(e,function(e){l.innerHTML=e}),o.render("checkbox")}else"1001"==e.code&&a.exit()}}),t.ajax({url:l.http+"listGood/",type:"GET",data:{title:"",label:"1",access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("获取饮料列表失败")},success:function(e){if(0==e.code){var t=demo2.innerHTML,l=document.getElementById("drink");r(t).render(e,function(e){l.innerHTML=e})}else"1001"==e.code&&a.exit()}}),t.ajax({url:l.http+"listGood/",type:"GET",data:{title:"",label:"2",access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("获取酒水列表失败")},success:function(e){if(0==e.code){var t=demo2.innerHTML,l=document.getElementById("wine");r(t).render(e,function(e){l.innerHTML=e})}else"1001"==e.code&&a.exit()}}),t.ajax({url:l.http+"listGood/",type:"GET",data:{title:"",label:"3",access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("获取简餐列表失败")},success:function(e){if(0==e.code){var t=demo2.innerHTML,l=document.getElementById("snack");r(t).render(e,function(e){l.innerHTML=e})}else"1001"==e.code&&a.exit()}}),t.ajax({url:l.http+"listGood/",type:"GET",data:{title:"",label:"4",access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("获取火锅列表失败")},success:function(e){if(0==e.code){var t=demo2.innerHTML,l=document.getElementById("hot_pot");r(t).render(e,function(e){l.innerHTML=e})}else"1001"==e.code&&a.exit()}})})}}):"reback"==e.event&&layer.prompt({formType:1,title:"敏感操作，请验证口令"},function(e,r){"111111"==e?(layer.close(r),layer.confirm("确定废弃该订单吗？",function(e){t.ajax({url:l.http+"delOrder/",type:"get",data:{order_serial_number:s.order_serial_number,access_token:layui.data("layuiAdmin").access_token},error:function(e){layer.msg("订单废弃失败",{icon:2})},success:function(t){0==t.code?(layer.msg("订单已废弃",{icon:1}),n.reload("LAY-app-workorder")):"1001"==t.code?a.exit():layer.msg("订单废弃失败",{icon:2}),layer.close(e)}})})):(layer.close(r),layer.alert("密码错误",{icon:2}))})}),e("workorder",{})});