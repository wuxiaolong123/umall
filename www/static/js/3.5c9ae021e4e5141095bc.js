webpackJsonp([3],{MWAP:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("Dd8w"),o=n.n(i),l=n("NYxO"),a=n("D/cR"),s={computed:o()({},Object(l.c)({list:"menu/list"})),data:function(){return{}},methods:o()({},Object(l.b)({requestMenuList:"menu/requestMenuList"}),{edit:function(t){this.$emit("edit",t)},del:function(t){var e=this;this.$confirm("此操作将永久删除此条信息, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.q)({id:t}).then(function(t){200==t.data.code?e.$message({type:"success",message:t.data.msg}):e.$message({type:"info",message:t.data.msg}),e.requestMenuList()})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})}}),mounted:function(){this.requestMenuList()}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.list,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[n("el-table-column",{attrs:{prop:"id",label:"菜单编号",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"title",label:"菜单名称",width:"180"}}),t._v(" "),n("el-table-column",{attrs:{prop:"icon",label:"菜单图标"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("i",{class:t.row.icon})]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"url",label:"菜单地址"}}),t._v(" "),n("el-table-column",{attrs:{prop:"status",label:"状态",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[1==e.row.status?n("el-button",{attrs:{type:"primary"}},[t._v("启动")]):n("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"address",label:"操作",width:"264"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary"},on:{click:function(n){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),n("el-button",{attrs:{type:"danger"},on:{click:function(n){return t.del(e.row.id)}}},[t._v("删除")])]}}])})],1)],1)},staticRenderFns:[]};var c=n("VU/8")(s,r,!1,function(t){n("W/Jg")},"data-v-44f9d780",null).exports,u=n("BGi1"),d=n("YaEn"),f={props:["info"],computed:o()({},Object(l.c)({list:"menu/list"})),components:{},data:function(){return{indexRouters:d.b,width:"120px",form:{pid:0,title:"",icon:"",type:"",url:"",status:1},icons:["el-icon-s-tools","el-icon-message-solid","el-icon-s-check","el-icon-s-data"]}},methods:o()({cancel:function(){this.$emit("cancel")},changePid:function(){0===this.form.pid?this.form.type=1:this.form.type=2},empty:function(){this.form={pid:"",title:"",icon:"",type:0,url:"",status:1}},add:function(){var t=this;Object(a.p)(this.form).then(function(e){200==e.data.code?(Object(u.a)(e.data.msg),t.cancel(),t.requestMenuList(),t.empty()):Object(u.b)(e.data.msg)})},look:function(t){var e=this;Object(a.s)({id:t}).then(function(n){e.form=n.data.list,e.form.id=t})}},Object(l.b)({requestMenuList:"menu/requestMenuList"}),{updata:function(){var t=this;Object(a.t)(this.form).then(function(e){200==e.data.code?(Object(u.a)(e.data.msg),t.requestMenuList(),t.cancel(),t.empty()):Object(u.a)(e.data.msg)})}}),mounted:function(){}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-dialog",{attrs:{title:t.info.title,visible:t.info.isShow},on:{"update:visible":function(e){return t.$set(t.info,"isShow",e)}}},[n("el-form",{attrs:{model:t.form}},[n("el-form-item",{attrs:{label:"菜单名称","label-width":t.width}},[n("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.title,callback:function(e){t.$set(t.form,"title",e)},expression:"form.title"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"上级菜单","label-width":"120px"}},[n("el-select",{attrs:{placeholder:"请选择活动区域"},on:{change:t.changePid},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[n("el-option",{attrs:{label:"--请选择--",value:"",disabled:""}}),t._v(" "),n("el-option",{attrs:{label:"顶级菜单",value:0}}),t._v(" "),t._l(t.list,function(t){return n("el-option",{key:t.id,attrs:{label:t.title,value:t.id}})})],2)],1),t._v(" "),n("el-form-item",{attrs:{label:"菜单类型","label-width":t.width}},[n("el-radio",{attrs:{label:1,disabled:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("目录")]),t._v(" "),n("el-radio",{attrs:{label:2,disabled:""},model:{value:t.form.type,callback:function(e){t.$set(t.form,"type",e)},expression:"form.type"}},[t._v("菜单")])],1),t._v(" "),1==t.form.type?n("el-form-item",{attrs:{label:"菜单图标","label-width":t.width}},[n("el-select",{attrs:{placeholder:"请选择图标"},model:{value:t.form.icon,callback:function(e){t.$set(t.form,"icon",e)},expression:"form.icon"}},t._l(t.icons,function(t){return n("el-option",{key:t,attrs:{value:t}},[n("i",{class:t})])}),1)],1):n("el-form-item",{attrs:{label:"菜单地址","label-width":t.width}},[n("el-select",{attrs:{placeholder:"请选择地址"},model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}},t._l(t.indexRouters,function(t){return n("el-option",{key:t.path,attrs:{label:t.name,value:"/"+t.path}})}),1)],1),t._v(" "),n("el-form-item",{attrs:{label:"状态","label-width":t.width}},[n("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),t.info.isAdd?n("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添加")]):n("el-button",{attrs:{type:"primary"},on:{click:t.updata}},[t._v("修改")])],1)],1)],1)},staticRenderFns:[]};var p={components:{vList:c,vAdd:n("VU/8")(f,m,!1,function(t){n("zEz8")},"data-v-f99ed4de",null).exports},data:function(){return{info:{isShow:!1,title:"菜单添加",btn:"添加"}}},methods:{willadd:function(){this.$refs.add.empty(),this.info={isShow:!0,title:"菜单添加",btn:"添加",isAdd:!0}},cancel:function(){this.info.isShow=!1},edit:function(t){this.info={isShow:!0,title:"菜单编辑",btn:"修改"},this.$refs.add.look(t)}},mounted:function(){}},b={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-button",{attrs:{type:"primary"},on:{click:t.willadd}},[t._v("添加")]),t._v(" "),n("v-add",{ref:"add",attrs:{info:t.info},on:{cancel:t.cancel}}),t._v(" "),n("v-list",{on:{edit:function(e){return t.edit(e)}}})],1)},staticRenderFns:[]};var h=n("VU/8")(p,b,!1,function(t){n("hI52")},"data-v-3fa3e8d0",null);e.default=h.exports},"W/Jg":function(t,e){},hI52:function(t,e){},zEz8:function(t,e){}});
//# sourceMappingURL=3.5c9ae021e4e5141095bc.js.map