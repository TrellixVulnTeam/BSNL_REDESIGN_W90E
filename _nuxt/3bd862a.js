(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{361:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{items:[{text:"Select State",disabled:!0,href:"http://localhost:3000/BSNL_REDESIGN/stateselection"},{text:"Browse Plans",disabled:!1},{text:"Confirmation Page",disabled:!0,href:"breadcrumbs_link_2"}]}}},o=n(55),c=n(82),r=n.n(c),d=n(364),v=n(144),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-breadcrumbs",{staticStyle:{color:"#3588C4","font-family":"Futura Std, sans-serif"},attrs:{items:t.items,light:""},scopedSlots:t._u([{key:"divider",fn:function(){return[n("v-icon",[t._v("mdi-chevron-right")])]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{VBreadcrumbs:d.a,VIcon:v.a})},382:function(t,e,n){"use strict";n.r(e);var l={data:function(){return{keys:["Price low to high","Price high to low","Data high to low","Data low to high"],items:[{text:"Popular Plans"},{text:"DATA"},{text:"Talktime"},{text:"General Top-up"}]}}},o=n(55),c=n(82),r=n.n(c),d=n(375),v=n(376),f=n(307),x=n(337),y=n(384),m=n(310),_=n(311),h=n(312),C=n(313),w=n(143),S=n(94),V=n(100),B=n(146),D=n(308),k=n(330),P=n(377),j=n(297),A=n(48),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("browsebread"),t._v(" "),n("spacer"),t._v(" "),n("h1",{staticClass:"font-weight-bold pa-sm-2",staticStyle:{color:"#3588C4","font-family":"Futura Std, sans-serif"}},[t._v(" Prepaid > View Plans > Select your state ")]),t._v(" "),n("br"),n("br"),t._v(" "),n("v-row",[n("v-card",{staticClass:"col-md-3 col-xs-5 col-sm-7",attrs:{light:"",color:"white",width:"700px",height:"230px"}},[n("v-list",[n("v-list-item-group",{attrs:{color:"#3588C4"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.items,(function(e,i){return n("v-list-item",{key:i},[n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),t._v(" "),n("v-col",[n("v-data-iterator",{attrs:{items:t.items,page:t.page,search:t.search,"sort-desc":t.sortDesc,"hide-default-footer":""},scopedSlots:t._u([{key:"header",fn:function(){return[n("v-toolbar",{attrs:{color:"#A5F2EA",width:"860px",height:"60px",rounded:""}},[n("v-text-field",{attrs:{clearable:"",flat:"","hide-details":"",label:"Search"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),[n("v-spacer"),t._v(" "),n("v-select",{attrs:{flat:"","solo-inverted":"","hide-details":"","prepend-inner-icon":"mdi-magnify",items:t.keys,label:"Sort by"},model:{value:t.sortBy,callback:function(e){t.sortBy=e},expression:"sortBy"}}),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.sortDesc,callback:function(e){t.sortDesc=e},expression:"sortDesc"}})]],2)]},proxy:!0}])}),t._v(" "),n("br"),t._v(" "),n("v-expansion-panels",{staticStyle:{height:"145px"},attrs:{accordion:"",light:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"d-flex justify-space-around caption",staticStyle:{color:"#0161B0"}},[n("div",{staticClass:"d-flex justify-space-between caption"},[n("div",{staticClass:"grey--text",staticStyle:{"font-size":"20px"}},[t._v("\n                      Rs. 16/-\n                    ")]),t._v(" "),n("div",{staticClass:"grey--text ",staticStyle:{"font-size":"20px"}},[t._v("\n                      1 day\n                    ")]),t._v(" "),n("div",{staticClass:"grey--text ",staticStyle:{"font-size":"20px"}},[t._v("\n                     1 GB/day")])])]),t._v(" "),n("v-expansion-panel-content",[n("div",{staticClass:"d-flex justify-space-between caption"},[n("div",{staticClass:"font-weight-medium"},[t._v("\n                      DATAtsunami\n                    ")]),t._v(" "),n("div",{staticClass:"font-weight-medium"},[t._v("\n                    (Calendar days) Validity  \n                ")]),t._v(" "),n("div",{staticClass:"font-weight-medium"},[t._v("\n                        Unlimited Data speed reduced to 40 Kbps after 2GB/day \n                        ")])])])],1)],1),t._v(" "),n("br"),t._v(" "),n("v-expansion-panels",{staticStyle:{height:"145px"},attrs:{accordion:"",light:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"d-flex justify-space-around caption",staticStyle:{color:"#0161B0"}},[n("div",{staticClass:"d-flex justify-space-between caption"},[n("div",{staticClass:"grey--text",staticStyle:{"font-size":"20px"}},[t._v("\n                      Rs. 16/-\n                    ")]),t._v(" "),n("div",{staticClass:"grey--text ",staticStyle:{"font-size":"20px"}},[t._v("\n                      1 day\n                    ")]),t._v(" "),n("div",{staticClass:"grey--text ",staticStyle:{"font-size":"20px"}},[t._v("\n                     1 GB/day")])])]),t._v(" "),n("v-expansion-panel-content",[n("div",{staticClass:"d-flex justify-space-between caption"},[n("div",{staticClass:"font-weight-medium"},[t._v("\n                      DATAtsunami\n                    ")]),t._v(" "),n("div",{staticClass:"font-weight-medium"},[t._v(" (Calendar days) validity\n \n                 ")]),t._v(" "),n("div",{staticClass:"font-weight-medium"},[t._v("\n                        Unlimited Data speed reduced to 40 Kbps \nafter 2GB/day \n                \n                  \n                    ")])])])],1)],1),t._v(" "),n("br"),t._v(" "),n("v-expansion-panels",{staticStyle:{height:"145px"},attrs:{accordion:"",light:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"d-flex justify-space-around caption",staticStyle:{color:"#0161B0"}},[n("div",{staticClass:"d-flex justify-space-between caption"},[n("div",{staticClass:"grey--text",staticStyle:{"font-size":"20px"}},[t._v("\n                      Rs. 16/-\n                    ")]),t._v(" "),n("div",{staticClass:"grey--text ",staticStyle:{"font-size":"20px"}},[t._v("\n                      1 day\n                    ")]),t._v(" "),n("div",{staticClass:"grey--text ",staticStyle:{"font-size":"20px"}},[t._v("\n                     1 GB/day")])])]),t._v(" "),n("v-expansion-panel-content",[n("div",{staticClass:"d-flex justify-space-between caption"},[n("div",{staticClass:"font-weight-medium"},[t._v("\n                      DATAtsunami\n                    ")]),t._v(" "),n("div",{staticClass:"font-weight-medium"},[t._v("\n(Calendar days)\nValidity                  ")]),t._v(" "),n("div",{staticClass:"font-weight-medium"},[t._v("\n                        Unlimited Data speed reduced to 40 Kbps \nafter 2GB/day \n                \n                  \n                    ")])])])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;r()(component,{Browsebread:n(361).default}),r()(component,{VBtnToggle:d.a,VCard:v.a,VCol:f.a,VContainer:x.a,VDataIterator:y.a,VExpansionPanel:m.a,VExpansionPanelContent:_.a,VExpansionPanelHeader:h.a,VExpansionPanels:C.a,VList:w.a,VListItem:S.a,VListItemContent:V.a,VListItemGroup:B.a,VListItemTitle:V.b,VRow:D.a,VSelect:k.a,VSpacer:P.a,VTextField:j.a,VToolbar:A.a})}}]);