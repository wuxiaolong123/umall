webpackJsonp([10],{JFwY:function(t,e){},P2Xi:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("Dd8w"),i=n.n(o),s=n("mvHQ"),r=n.n(s),l=n("//Fk"),a=n.n(l),c=n("D/cR"),u=n("NYxO"),d=n("BGi1"),f={computed:i()({},Object(u.c)({list:"menu/list"})),props:["info"],components:{},data:function(){return{width:"120px",form:{rolename:"",menus:"",status:1}}},methods:i()({checked:function(){var t=this;return new a.a(function(e,n){""!==t.form.rolename?0!==t.$refs.tree.getCheckedKeys().length?e():Object(d.b)("选择不能为空"):Object(d.b)("角色名称不能为空")})}},Object(u.b)({requestMenuList:"menu/requestMenuList",requestRoleList:"role/requsetRoleList"}),{look:function(t){var e=this;Object(c.G)({id:t}).then(function(n){e.form=n.data.list,e.form.id=t,e.$refs.tree.setCheckedKeys(JSON.parse(n.data.list.menus))})},empty:function(){this.form={rolename:"",menus:"",status:1}},cancel:function(){this.$emit("cancel")},update:function(){var t=this;this.checked().then(function(){t.form.menus=r()(t.$refs.tree.getCheckedKeys()),Object(c.H)(t.form).then(function(e){Object(d.a)(e.data.msg),t.info.isShow=!1,t.requestMenuList(),t.requestRoleList()})})},add:function(){var t=this;this.checked().then(function(){t.form.menus=r()(t.$refs.tree.getCheckedKeys()),Object(c.D)(t.form).then(function(e){Object(d.a)(e.data.msg),t.info.isShow=!1,t.requestMenuList(),t.empty(),t.requestRoleList()})})}}),mounted:function(){this.requestMenuList()}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.info.title,visible:t.info.isShow},on:{"update:visible":function(e){return t.$set(t.info,"isShow",e)}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"角色名称","label-width":t.width}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.rolename,callback:function(e){t.$set(t.form,"rolename",e)},expression:"form.rolename"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"角色权限","label-width":t.width}},[n("el-tree",{ref:"tree",attrs:{data:t.list,"show-checkbox":"","node-key":"id",props:{children:"children",label:"title"}}})],1),t._v(" "),n("el-form-item",{attrs:{label:"状态","label-width":t.width}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]):n("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修改")])],1)],1)],1)},staticRenderFns:[]};var h=n("VU/8")(f,m,!1,function(t){n("QIeM")},"data-v-0b8f874e",null).exports,p={computed:i()({},Object(u.c)({roleList:"role/role"})),components:{vAdd:h},data:function(){return{info:{isShow:!1,title:"",isAdd:!0}}},methods:i()({willAdd:function(){this.$refs.add.empty(),this.info={isShow:!0,title:"角色添加",isAdd:!0}}},Object(u.b)({requsetRoleList:"role/requsetRoleList"}),{cancel:function(){this.info.isShow=!1},del:function(t){var e=this;this.$confirm("是否删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(c.E)({id:t}).then(function(t){200==t.data.code&&(e.$message({type:"success",message:"删除成功!"}),e.requsetRoleList())})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},edit:function(t){this.info={isShow:!0,title:"角色修改",isAdd:!1},this.$refs.add.look(t)}}),mounted:function(){this.requsetRoleList()}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:t.willAdd}},[t._v("添加")]),t._v(" "),n("v-add",{ref:"add",attrs:{info:t.info},on:{cancel:t.cancel}}),t._v(" "),n("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.roleList,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"id",label:"角色编号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"rolename",label:"角色名称",width:"230"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{type:"primary"}},[t._v("启用")]):n("el-button",{attrs:{type:"danger"}},[t._v("禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var v=n("VU/8")(p,b,!1,function(t){n("JFwY")},"data-v-17160828",null);e.default=v.exports},QIeM:function(t,e){}});
//# sourceMappingURL=10.b3bbc7ad53d523800dbe.js.map