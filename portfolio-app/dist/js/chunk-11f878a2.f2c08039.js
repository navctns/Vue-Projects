(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11f878a2"],{"00e2":function(e,t,n){"use strict";n("c2e4")},"018f":function(e,t,n){"use strict";n("c837")},1276:function(e,t,n){"use strict";var c=n("d784"),l=n("44e7"),r=n("825a"),i=n("1d80"),a=n("4840"),s=n("8aa5"),o=n("50c4"),u=n("14c3"),f=n("9263"),d=n("9f7f"),b=d.UNSUPPORTED_Y,m=[].push,p=Math.min,j=4294967295;c("split",2,(function(e,t,n){var c;return c="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var c=String(i(this)),r=void 0===n?j:n>>>0;if(0===r)return[];if(void 0===e)return[c];if(!l(e))return t.call(c,e,r);var a,s,o,u=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),b=0,p=new RegExp(e.source,d+"g");while(a=f.call(p,c)){if(s=p.lastIndex,s>b&&(u.push(c.slice(b,a.index)),a.length>1&&a.index<c.length&&m.apply(u,a.slice(1)),o=a[0].length,b=s,u.length>=r))break;p.lastIndex===a.index&&p.lastIndex++}return b===c.length?!o&&p.test("")||u.push(""):u.push(c.slice(b)),u.length>r?u.slice(0,r):u}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var l=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,l,n):c.call(String(l),t,n)},function(e,l){var i=n(c,e,this,l,c!==t);if(i.done)return i.value;var f=r(e),d=String(this),m=a(f,RegExp),g=f.unicode,O=(f.ignoreCase?"i":"")+(f.multiline?"m":"")+(f.unicode?"u":"")+(b?"g":"y"),v=new m(b?"^(?:"+f.source+")":f,O),h=void 0===l?j:l>>>0;if(0===h)return[];if(0===d.length)return null===u(v,d)?[d]:[];var x=0,k=0,w=[];while(k<d.length){v.lastIndex=b?0:k;var y,S=u(v,b?d.slice(k):d);if(null===S||(y=p(o(v.lastIndex+(b?k:0)),d.length))===x)k=s(d,k,g);else{if(w.push(d.slice(x,k)),w.length===h)return w;for(var _=1;_<=S.length-1;_++)if(w.push(S[_]),w.length===h)return w;k=x=y}}return w.push(d.slice(x)),w}]}),b)},"14c3":function(e,t,n){var c=n("c6b6"),l=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var r=n.call(e,t);if("object"!==typeof r)throw TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==c(e))throw TypeError("RegExp#exec called on incompatible receiver");return l.call(e,t)}},"2ed7":function(e,t,n){"use strict";n("b0c0");var c=n("7a23"),l=Object(c["fb"])("data-v-62549e69");Object(c["G"])("data-v-62549e69");var r={key:0,class:"imgSmContainer"},i={class:"btn-container"},a=Object(c["l"])("View Projects");Object(c["E"])();var s=l((function(e,t,n,s,o,u){var f=Object(c["M"])("el-button"),d=Object(c["M"])("el-card");return Object(c["D"])(),Object(c["i"])(d,null,{default:l((function(){return[Object(c["m"])("div",{class:{twoItemContainer:n.skillTwo}},[Object(c["m"])("div",{class:{imgSmContainer:s.smImgContainer,imgContainer:s.imgContainer,smSizeContainer:s.smSizeContainer}},[Object(c["m"])("h3",null,Object(c["Q"])(n.skillOne.name),1),Object(c["m"])("img",{src:n.skillOne.imgUrl,class:{resizeIcon:"Python"===n.skillOne.name},alt:""},null,10,["src"])],2),s.secondSkillVisibility?(Object(c["D"])(),Object(c["i"])("div",r,[Object(c["m"])("h3",null,Object(c["Q"])(n.skillTwo.name),1),Object(c["m"])("img",{src:n.skillTwo.imgUrl,alt:""},null,8,["src"])])):Object(c["j"])("",!0)],2),Object(c["m"])("div",i,[Object(c["m"])(f,{onClick:s.viewProjects},{default:l((function(){return[a]})),_:1},8,["onClick"])])]})),_:1})})),o=(n("a15b"),n("ac1f"),n("1276"),{emits:["set-skill"],props:{skillOne:{type:Object,required:!0},skillTwo:{type:Object,required:!1},size:{type:String,required:!1,default:"sm"}},setup:function(e,t){function n(n){var c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.skillOne.name.toLowerCase().split(" ").join("");console.log("skill term",c),t.emit("set-skill",c)}var l=Object(c["g"])((function(){return e.skillTwo&&"lg"===e.size})),r=Object(c["g"])((function(){return!e.skillTwo&&"lg"===e.size})),i=Object(c["g"])((function(){return"sm"===e.size})),a=Object(c["g"])((function(){return e.skillTwo&&"lg"===e.size}));return{viewProjects:n,smImgContainer:l,imgContainer:r,smSizeContainer:i,secondSkillVisibility:a}}});n("ee95");o.render=s,o.__scopeId="data-v-62549e69";t["a"]=o},"44e7":function(e,t,n){var c=n("861d"),l=n("c6b6"),r=n("b622"),i=r("match");e.exports=function(e){var t;return c(e)&&(void 0!==(t=e[i])?!!t:"RegExp"==l(e))}},6158:function(e,t,n){},"78a7":function(e,t,n){"use strict";n.r(t);var c=n("7a23"),l=Object(c["fb"])("data-v-5a3d5cad");Object(c["G"])("data-v-5a3d5cad");var r={class:"showcase-item"},i={class:"demo-basic--circle"},a={class:"block"},s=Object(c["m"])("h3",null,"Naveen V",-1),o=Object(c["m"])("h4",null,"(Frontend Developer)",-1),u=Object(c["m"])("div",{class:"skills-header"},[Object(c["m"])("h3",null,"Skills")],-1),f={class:"tags-container"},d={class:"tag-group"},b={class:"showcase-item"},m=Object(c["m"])("div",{class:"showcase-text"},[Object(c["m"])("span",null,[Object(c["m"])("h1",null,"As a Frontend Developer"),Object(c["m"])("p",null," i work with technologies HTML5,CSS3,Javascirpt,Vue Js, Firebase and Python. My philosophy about software development is that simple and maintainable development is to be prefered over complex UIs and unwanted features. ")])],-1);Object(c["E"])();var p=l((function(e,t,n,p,j,g){var O=Object(c["M"])("el-avatar"),v=Object(c["M"])("el-card"),h=Object(c["M"])("app-tag"),x=Object(c["M"])("el-col"),k=Object(c["M"])("el-row"),w=Object(c["M"])("el-main"),y=Object(c["M"])("el-container");return Object(c["D"])(),Object(c["i"])(y,null,{default:l((function(){return[Object(c["m"])(w,null,{default:l((function(){return[Object(c["m"])(k,null,{default:l((function(){return[Object(c["m"])(x,{xs:24,sm:24,md:8,lg:8},{default:l((function(){return[Object(c["m"])("div",r,[Object(c["m"])(v,null,{default:l((function(){return[Object(c["m"])("div",i,[Object(c["m"])(v,{class:"inner-card"},{default:l((function(){return[Object(c["m"])("div",a,[Object(c["m"])(O,{size:200,src:j.circleUrl},null,8,["src"])]),s,o]})),_:1}),Object(c["m"])(v,{class:"inner-card"},{default:l((function(){return[u,Object(c["m"])("div",f,[Object(c["m"])("div",d,[Object(c["m"])(h,{type:"danger",effect:"dark",label:"html/css",size:"medium"}),Object(c["m"])(h,{type:"",effect:"dark",label:"Bootstrap",size:"medium"}),Object(c["m"])(h,{type:"warning",effect:"dark",label:"Javascript",size:"medium"}),Object(c["m"])(h,{type:"success",effect:"dark",label:"Vue Js",size:"medium"}),Object(c["m"])(h,{type:"warning",effect:"dark",label:"Python/Django",size:"medium"})])])]})),_:1})])]})),_:1})])]})),_:1}),Object(c["m"])(x,{xs:24,sm:24,md:16,lg:16},{default:l((function(){return[Object(c["m"])("div",b,[Object(c["m"])(v,null,{default:l((function(){return[m]})),_:1})])]})),_:1})]})),_:1})]})),_:1})]})),_:1})})),j=(n("b0c0"),n("a4d3"),n("e01a"),Object(c["fb"])("data-v-490fcf16")),g=j((function(e,t,n,l,r,i){var a=Object(c["M"])("app-skill-card"),s=Object(c["M"])("el-col"),o=Object(c["M"])("el-row"),u=Object(c["M"])("app-project-card"),f=Object(c["M"])("el-card"),d=Object(c["M"])("el-main"),b=Object(c["M"])("el-container");return Object(c["D"])(),Object(c["i"])(b,null,{default:j((function(){return[Object(c["m"])(d,null,{default:j((function(){return[Object(c["m"])(o,{type:"flex"},{default:j((function(){return[Object(c["m"])(s,{xs:24,sm:24,md:12,lg:6},{default:j((function(){return[Object(c["m"])(a,{"skill-one":l.skills.html,"skill-two":l.skills.css,onSetSkill:l.switchProjectType},null,8,["skill-one","skill-two","onSetSkill"])]})),_:1}),Object(c["m"])(s,{xs:24,sm:24,md:12,lg:6},{default:j((function(){return[Object(c["m"])(a,{"skill-one":l.skills.javascript,onSetSkill:l.switchProjectType},null,8,["skill-one","onSetSkill"])]})),_:1}),Object(c["m"])(s,{xs:24,sm:24,md:12,lg:6},{default:j((function(){return[Object(c["m"])(a,{"skill-one":l.skills.vuejs,onSetSkill:l.switchProjectType},null,8,["skill-one","onSetSkill"])]})),_:1}),Object(c["m"])(s,{xs:24,sm:24,md:12,lg:6},{default:j((function(){return[Object(c["m"])(a,{"skill-one":l.skills.python,onSetSkill:l.switchProjectType},null,8,["skill-one","onSetSkill"])]})),_:1})]})),_:1}),Object(c["m"])(o,{type:"flex"},{default:j((function(){return[Object(c["m"])(f,{class:"projects-container"},{default:j((function(){return[Object(c["m"])("h3",null,Object(c["Q"])(l.projectsHeading)+" Projects",1),Object(c["m"])(o,null,{default:j((function(){return[(Object(c["D"])(!0),Object(c["i"])(c["b"],null,Object(c["K"])(l.projects,(function(e){return Object(c["D"])(),Object(c["i"])(u,{key:e.name,"project-name":e.name,"img-url":e.imgUrl,description:e.description,github:e.github,"show-git":e.showGit},null,8,["project-name","img-url","description","github","show-git"])})),128))]})),_:1})]})),_:1})]})),_:1})]})),_:1})]})),_:1})})),O=n("5502"),v=n("2ed7"),h={components:{AppSkillCard:v["a"]},setup:function(){var e=Object(O["b"])(),t=e.getters.contentsData("projects"),n=Object(c["I"])("html");function l(e){console.log("project",e),n.value=e}var r=Object(c["I"])(t.htmlCss),i=Object(c["Z"])(n,(function(){r.value=t[n],console.log("projects-current",t.html,t[n])})),a=Object(c["g"])((function(){return t[n.value]})),s=e.getters.contentsData("skills"),o=Object(c["g"])((function(){return s[n.value].label}));return{projects:a,switchProjectType:l,watchProjectType:i,skills:s,projectsHeading:o}}};n("00e2");h.render=g,h.__scopeId="data-v-490fcf16";var x=h,k={component:{SkillsPage:x},data:function(){return{circleUrl:"https://raw.githubusercontent.com/navctns/FrontEndDevelopment/50Days50Projects/Vue-Js/Projects/portfolio-app-element-plus-ui/src/assets/img/5301-A.jpg",squareUrl:"https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",sizeList:["large","medium","small"]}}};n("018f");k.render=p,k.__scopeId="data-v-5a3d5cad";t["default"]=k},"8aa5":function(e,t,n){"use strict";var c=n("6547").charAt;e.exports=function(e,t,n){return t+(n?c(e,t).length:1)}},9263:function(e,t,n){"use strict";var c=n("ad6d"),l=n("9f7f"),r=n("5692"),i=RegExp.prototype.exec,a=r("native-string-replace",String.prototype.replace),s=i,o=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=l.UNSUPPORTED_Y||l.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],d=o||f||u;d&&(s=function(e){var t,n,l,r,s=this,d=u&&s.sticky,b=c.call(s),m=s.source,p=0,j=e;return d&&(b=b.replace("y",""),-1===b.indexOf("g")&&(b+="g"),j=String(e).slice(s.lastIndex),s.lastIndex>0&&(!s.multiline||s.multiline&&"\n"!==e[s.lastIndex-1])&&(m="(?: "+m+")",j=" "+j,p++),n=new RegExp("^(?:"+m+")",b)),f&&(n=new RegExp("^"+m+"$(?!\\s)",b)),o&&(t=s.lastIndex),l=i.call(d?n:s,j),d?l?(l.input=l.input.slice(p),l[0]=l[0].slice(p),l.index=s.lastIndex,s.lastIndex+=l[0].length):s.lastIndex=0:o&&l&&(s.lastIndex=s.global?l.index+l[0].length:t),f&&l&&l.length>1&&a.call(l[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(l[r]=void 0)})),l}),e.exports=s},"9f7f":function(e,t,n){"use strict";var c=n("d039");function l(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=c((function(){var e=l("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=c((function(){var e=l("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a15b:function(e,t,n){"use strict";var c=n("23e7"),l=n("44ad"),r=n("fc6a"),i=n("a640"),a=[].join,s=l!=Object,o=i("join",",");c({target:"Array",proto:!0,forced:s||!o},{join:function(e){return a.call(r(this),void 0===e?",":e)}})},a640:function(e,t,n){"use strict";var c=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&c((function(){n.call(null,t||function(){throw 1},1)}))}},ac1f:function(e,t,n){"use strict";var c=n("23e7"),l=n("9263");c({target:"RegExp",proto:!0,forced:/./.exec!==l},{exec:l})},ad6d:function(e,t,n){"use strict";var c=n("825a");e.exports=function(){var e=c(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var c=n("83ab"),l=n("9bf2").f,r=Function.prototype,i=r.toString,a=/^\s*function ([^ (]*)/,s="name";c&&!(s in r)&&l(r,s,{configurable:!0,get:function(){try{return i.call(this).match(a)[1]}catch(e){return""}}})},c2e4:function(e,t,n){},c837:function(e,t,n){},d784:function(e,t,n){"use strict";n("ac1f");var c=n("6eeb"),l=n("9263"),r=n("d039"),i=n("b622"),a=n("9112"),s=i("species"),o=RegExp.prototype,u=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),d=i("replace"),b=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),m=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,d){var p=i(e),j=!r((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),g=j&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!j||!g||"replace"===e&&(!u||!f||b)||"split"===e&&!m){var O=/./[p],v=n(p,""[e],(function(e,t,n,c,r){var i=t.exec;return i===l||i===o.exec?j&&!r?{done:!0,value:O.call(t,n,c)}:{done:!0,value:e.call(n,t,c)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:b}),h=v[0],x=v[1];c(String.prototype,e,h),c(o,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}d&&a(o[p],"sham",!0)}},ee95:function(e,t,n){"use strict";n("6158")}}]);
//# sourceMappingURL=chunk-11f878a2.f2c08039.js.map