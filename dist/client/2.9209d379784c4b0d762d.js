webpackJsonp([2,3],{990:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function r(e){return l("div",{},void 0,l(u["default"],{title:e.post.title}),l("div",{className:p["default"]["single-post"]+" "+p["default"]["post-detail"]},void 0,l("h3",{className:p["default"]["post-title"]},void 0,e.post.title),l("p",{className:p["default"]["author-name"]},void 0,y," ",e.post.name),l("p",{className:p["default"]["post-desc"]},void 0,e.post.content)))}function i(e,t){return{post:(0,m.getPost)(e,t.params.cuid)}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){var e="function"==typeof Symbol&&Symbol["for"]&&Symbol["for"]("react.element")||60103;return function(t,o,n,r){var i=t&&t.defaultProps,l=arguments.length-3;if(o||0===l||(o={}),o&&i)for(var a in i)void 0===o[a]&&(o[a]=i[a]);else o||(o=i||{});if(1===l)o.children=r;else if(l>1){for(var s=Array(l),d=0;d<l;d++)s[d]=arguments[d+3];o.children=s}return{$$typeof:e,type:t,key:void 0===n?null:""+n,ref:null,props:o,_owner:null}}}();t.PostDetailPage=r;var a=o(1),s=(n(a),o(106)),d=o(376),u=n(d),c=o(105),f=o(993),p=n(f),v=o(373),m=o(374),y=l(c.FormattedMessage,{id:"by"});r.need=[function(e){return(0,v.fetchPost)(e.cuid)}],t["default"]=(0,s.connect)(i)(r)},993:function(e,t){e.exports={"single-post":"_3B15Q62CNe0LaxJ8BUZr5W","post-title":"_3mZF-WLrnBUxaWr9zFi6Q_","author-name":"_1cSDPptMi8rvUEB2tAonlW","post-desc":"_3D8Fgk2edKTkFyBDsUEZ2u","post-action":"_3S84cKmlvGO49pK1biPlXr",divider:"y2SIF3ydn02JYMgeklO7S","post-detail":"_3W9vrxIdnQ93EmH-x2UgJR"}}});