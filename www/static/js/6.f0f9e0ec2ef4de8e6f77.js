webpackJsonp([6],{"2Bvk":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("Dd8w"),a=i.n(n),s=i("BGi1"),l=i("NYxO"),o=i("D/cR"),r={components:{},computed:a()({},Object(l.c)({list:"classify/classify"})),data:function(){return{}},methods:a()({},Object(l.b)({requsetClassifyList:"classify/requsetClassifyList"}),{del:function(t){var e=this;this.$confirm("你确定要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(o.b)(t).then(function(t){200===t.data.code&&(Object(s.a)(t.data.msg),e.requsetClassifyList())})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},edit:function(t){this.$emit("edit",t)}}),mounted:function(){this.requsetClassifyList()}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:t.list,"row-key":"id",border:"","tree-props":{children:"children",hasChildren:"hasChildren"}}},[i("el-table-column",{attrs:{prop:"id",label:"分类编号"}}),t._v(" "),i("el-table-column",{attrs:{prop:"catename",label:"分类名称"}}),t._v(" "),i("el-table-column",{attrs:{label:"图片"},scopedSlots:t._u([{key:"default",fn:function(e){return["null"!==e.row.img?i("img",{attrs:{src:t.$imgPre+e.row.img,alt:""}}):t._e()]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"状态"},scopedSlots:t._u([{key:"default",fn:function(e){return[1===e.row.status?i("el-button",{attrs:{type:"primary"}},[t._v("启用")]):i("el-button",{attrs:{type:"info"}},[t._v("禁用")])]}}])}),t._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("el-button",{attrs:{type:"primary"},on:{click:function(i){return t.edit(e.row.id)}}},[t._v("编辑")]),t._v(" "),i("el-button",{attrs:{type:"danger"},on:{click:function(i){return t.del(e.row.id)}}},[t._v("删 除")])]}}])})],1)],1)},staticRenderFns:[]};var f=i("VU/8")(r,c,!1,function(t){i("9GlH")},"data-v-0231d4df",null).exports,u={props:["info"],components:{},computed:a()({},Object(l.c)({list:"classify/classify"})),data:function(){return{form:{pid:"",catename:"",img:null,status:1},imgUrl:""}},methods:a()({changeFile:function(t){var e=t.target.files[0];if(e.size>5242880)Object(s.b)("文件太大了");else{var i=e.name,n=i.slice(i.lastIndexOf("."));[".jpg",".jpeg",".png",".gif"].includes(n)?(this.imgUrl=URL.createObjectURL(e),this.form.img=e):Object(s.b)("文件格式不正确")}},cancel:function(){this.info.isshow=!1},empty:function(){this.form={pid:"",catename:"",img:null,status:1},this.imgUrl=""},add:function(){var t=this,e=new FormData;for(var i in this.form)e.append(i,this.form[i]);Object(o.a)(e).then(function(e){200==e.data.code&&(Object(s.a)(e.data.msg),t.empty(),t.cancel(),t.requsetClassifyList())})},getOne:function(t){var e=this;Object(o.d)(t).then(function(i){200===i.data.code&&(e.form=i.data.list,e.form.id=t,e.imgUrl=e.$imgPre+e.form.img)})},update:function(){var t=this,e=new FormData;for(var i in this.form)e.append(i,this.form[i]);Object(o.e)(e).then(function(e){200===e.data.code&&(Object(s.a)(e.data.msg),t.cancel(),t.empty(),t.requsetClassifyList())})}},Object(l.b)({requsetClassifyList:"classify/requsetClassifyList"})),mounted:function(){this.requsetClassifyList()}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-dialog",{attrs:{title:t.info.title,visible:t.info.isshow},on:{"update:visible":function(e){return t.$set(t.info,"isshow",e)}}},[i("el-form",{attrs:{model:t.form}},[i("el-form-item",{attrs:{label:"上级分类","label-width":"120px"}},[i("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.form.pid,callback:function(e){t.$set(t.form,"pid",e)},expression:"form.pid"}},[i("el-option",{attrs:{label:"--请选择--",value:"",disabled:""}}),t._v(" "),i("el-option",{attrs:{label:"顶级菜单",value:0}}),t._v(" "),t._l(t.list,function(t){return i("el-option",{key:t.id,attrs:{label:t.catename,value:t.id}})})],2)],1),t._v(" "),i("el-form-item",{attrs:{label:"分类名称","label-width":"120px"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.form.catename,callback:function(e){t.$set(t.form,"catename",e)},expression:"form.catename"}})],1),t._v(" "),"0"!=t.form.pid?i("el-form-item",{attrs:{label:"图片","label-width":"120px"}},[i("div",{staticClass:"my-upload"},[i("h3",[t._v("+")]),t._v(" "),t.imgUrl?i("img",{attrs:{src:t.imgUrl,alt:""}}):t._e(),t._v(" "),i("input",{staticClass:"ipt",attrs:{type:"file"},on:{change:t.changeFile}})])]):t._e(),t._v(" "),i("el-form-item",{attrs:{label:"状态","label-width":"120px"}},[i("el-switch",{attrs:{"active-value":1,"inactive-value":2},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:t.cancel}},[t._v("取 消")]),t._v(" "),"商品分类添加"==t.info.title?i("el-button",{attrs:{type:"primary"},on:{click:t.add}},[t._v("添 加")]):i("el-button",{attrs:{type:"primary"},on:{click:t.update}},[t._v("修 改")])],1)],1)],1)},staticRenderFns:[]};var m={components:{vAdd:i("VU/8")(u,d,!1,function(t){i("8dnm")},"data-v-6cf4db0a",null).exports,vList:f},data:function(){return{info:{isshow:!1,title:"商品分类添加"}}},methods:{willAdd:function(){this.info={isshow:!0,title:"商品分类添加"},this.$refs.add.empty()},willUpdate:function(t){this.info={isshow:!0,title:"商品分类修改"},this.$refs.add.getOne(t)}},mounted:function(){}},p={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-button",{attrs:{type:"primary"},on:{click:t.willAdd}},[t._v("添加")]),t._v(" "),i("v-add",{ref:"add",attrs:{info:t.info}}),t._v(" "),i("v-list",{attrs:{info:t.info},on:{edit:function(e){return t.willUpdate(e)}}})],1)},staticRenderFns:[]};var v=i("VU/8")(m,p,!1,function(t){i("EpWf")},"data-v-6b86f5fc",null);e.default=v.exports},"8dnm":function(t,e){},"9GlH":function(t,e){},EpWf:function(t,e){}});
//# sourceMappingURL=6.f0f9e0ec2ef4de8e6f77.js.map