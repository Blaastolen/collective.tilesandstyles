/* == malihu jquery thumbnail scroller plugin == Version: 2.0.3, License: MIT License (MIT) */
!function(t,e,n){var a,i="mThumbnailScroller",o="mTS",r=".mThumbnailScroller",l={setTop:0,setLeft:0,type:"hover-50",axis:"x",speed:15,contentTouchScroll:25,markup:{buttonsPlaceholder:!1,buttonsHTML:{up:"SVG set 1",down:"SVG set 1",left:"SVG set 1",right:"SVG set 1"}},advanced:{autoExpandHorizontalScroll:!0,updateOnContentResize:!0,updateOnImageLoad:!0},theme:"none",callbacks:{onTotalScrollOffset:0,onTotalScrollBackOffset:0,alwaysTriggerOffsets:!0}},s=0,c={},d=e.attachEvent&&!e.addEventListener?1:0,u=!1,h=["mTS_disabled","mTS_destroyed","mTS_no_scroll"],f={init:function(e){var e=t.extend(!0,{},l,e),n=p.call(this);if(e.live){var a=e.liveSelector||this.selector||r,i=t(a);if("off"===e.live)return void v(a);c[a]=setTimeout(function(){i.mThumbnailScroller(e),"once"===e.live&&i.length&&v(a)},500)}else v(a);return e.speed=0===e.speed?100:e.speed,m(e),t(n).each(function(){var n=t(this);if(!n.data(o)){n.data(o,{idx:++s,opt:e,html:null,overflowed:null,bindEvents:!1,tweenRunning:!1,langDir:n.css("direction"),cbOffsets:null,trigger:null});var a=n.data(o).opt,i=n.data("mts-axis"),r=n.data("mts-type"),l=n.data("mts-theme");i&&(a.axis=i),r&&(a.type=r),l&&(a.theme=l,m(a)),x.call(this),f.update.call(null,n)}})},update:function(e){var n=e||p.call(this);return t(n).each(function(){var e=t(this);if(e.data(o)){var n=e.data(o),a=n.opt,i=t("#mTS_"+n.idx+"_container");if(!i.length)return;n.tweenRunning&&R(e),e.hasClass(h[0])&&e.removeClass(h[0]),e.hasClass(h[1])&&e.removeClass(h[1]),b.call(this),g.call(this),n.overflowed=_.call(this),k.call(this),M.call(this);var r=[i[0].offsetTop,i[0].offsetLeft];"x"!==a.axis&&(n.overflowed[0]?U(e,r[0].toString(),{dir:"y",dur:0,overwrite:"none"}):(y.call(this),"y"===a.axis?(U(e,"0",{dir:"y",dur:0,overwrite:"none"}),C.call(this)):"yx"===a.axis&&n.overflowed[1]&&U(e,r[1].toString(),{dir:"x",dur:0,overwrite:"none"}))),"y"!==a.axis&&(n.overflowed[1]?U(e,r[1].toString(),{dir:"x",dur:0,overwrite:"none"}):(y.call(this),"x"===a.axis?(U(e,"0",{dir:"x",dur:0,overwrite:"none"}),C.call(this)):"yx"===a.axis&&n.overflowed[0]&&U(e,r[0].toString(),{dir:"y",dur:0,overwrite:"none"}))),n.overflowed[0]||n.overflowed[1]?e.removeClass(h[2]):e.addClass(h[2]),F.call(this)}})},scrollTo:function(e,n){if("undefined"!=typeof e&&null!=e){var a=p.call(this);return t(a).each(function(){var a=t(this);if(a.data(o)){var i=a.data(o),r=i.opt,l={trigger:"external",speed:r.speed,duration:1e3,easing:"easeInOut",timeout:60,callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},s=t.extend(!0,{},l,n),c=E.call(this,e),d=s.duration?s.duration:7e3/(s.speed||1);c[0]=D.call(this,c[0],"y"),c[1]=D.call(this,c[1],"x"),s.dur=d>0&&17>d?17:d,setTimeout(function(){null!==c[0]&&"undefined"!=typeof c[0]&&"x"!==r.axis&&i.overflowed[0]&&(s.dir="y",s.overwrite="all",U(a,-c[0].toString(),s)),null!==c[1]&&"undefined"!=typeof c[1]&&"y"!==r.axis&&i.overflowed[1]&&(s.dir="x",s.overwrite="none",U(a,-c[1].toString(),s))},s.timeout)}})}},stop:function(){var e=p.call(this);return t(e).each(function(){var e=t(this);e.data(o)&&R(e)})},disable:function(e){var n=p.call(this);return t(n).each(function(){var n=t(this);if(n.data(o)){{var a=n.data(o);a.opt}F.call(this,"remove"),C.call(this),e&&y.call(this),k.call(this,!0),n.addClass(h[0])}})},destroy:function(){var e=p.call(this);return t(e).each(function(){var n=t(this);if(n.data(o)){var a=n.data(o),r=a.opt,l=t("#mTS_"+a.idx),s=(t("#mTS_"+a.idx+"_container"),t("#mTS_"+a.idx+"_buttonUp,#mTS_"+a.idx+"_buttonDown,#mTS_"+a.idx+"_buttonLeft,#mTS_"+a.idx+"_buttonRight"));r.live&&v(e),F.call(this,"remove"),C.call(this),y.call(this),n.removeData(o),H(this,"mts"),s.remove(),l.replaceWith(a.html),n.removeClass(i+" _"+o+"_"+a.idx+" "+o+"-"+r.theme+" "+h[2]+" "+h[0]).addClass(h[1])}})}},p=function(){return"object"!=typeof t(this)||t(this).length<1?r:this},m=function(e){var n=["buttons-out"],a=["buttons-in"],i=["buttons-out"],o=["hover-classic"],r=["hover-full"];e.markup.buttonsPlaceholder=t.inArray(e.theme,n)>-1?"outside":e.markup.buttonsPlaceholder,e.markup.buttonsHTML=t.inArray(e.theme,a)>-1?{up:"SVG set 2",down:"SVG set 2",left:"SVG set 2",right:"SVG set 2"}:t.inArray(e.theme,i)>-1?{up:"SVG set 3",down:"SVG set 3",left:"SVG set 3",right:"SVG set 3"}:e.markup.buttonsHTML,e.type=t.inArray(e.theme,o)>-1?"hover-85":t.inArray(e.theme,r)>-1?"hover-precise":e.type,e.speed=t.inArray(e.theme,o)>-1?60:t.inArray(e.theme,r)>-1?10:e.speed},v=function(t){c[t]&&(clearTimeout(c[t]),H(c,t))},x=function(){var e=t(this),n=e.data(o),a=n.opt,r="yx"===a.axis?"mTS_vertical_horizontal":"x"===a.axis?"mTS_horizontal":"mTS_vertical",l=a.markup.thumbnailsContainer||"ul",s=a.markup.thumbnailContainer||"li",c=a.markup.thumbnailElement||"img";if(n.html=e.children().clone(!0,!0),!e.find(l).length){var d=e.find("li").length?"<ul class='"+o+"AutoContainer' />":"<div class='"+o+"AutoContainer' />";e.wrapInner(d),l="."+o+"AutoContainer"}a.setWidth&&e.css("width",a.setWidth),a.setHeight&&e.css("height",a.setHeight),a.setLeft="y"!==a.axis&&"rtl"===n.langDir?"-989999px":a.setLeft,e.addClass(i+" _"+o+"_"+n.idx+" "+o+"-"+a.theme).find(l).wrap("<div id='mTS_"+n.idx+"' class='mTSWrapper "+r+"' />").addClass(o+"Container").attr("id","mTS_"+n.idx+"_container").css({position:"relative",top:a.setTop,left:a.setLeft}).find(s).addClass(o+"ThumbContainer").find(c).addClass(o+"Thumb"),T.call(this)},g=function(){var e=t(this),n=e.data(o),a=n.opt,i=t("#mTS_"+n.idx+"_container");a.advanced.autoExpandHorizontalScroll&&"y"!==a.axis&&i.css({position:"absolute",width:"auto"}).wrap("<div class='mTS_h_wrapper' style='position:relative; left:0; width:999999px;' />").css({width:Math.ceil(i[0].getBoundingClientRect().right)-Math.floor(i[0].getBoundingClientRect().left),position:"relative"}).unwrap()},T=function(){{var e=t(this),n=e.data(o),a=n.opt,r=a.markup.buttonsPlaceholder?"outside"===a.markup.buttonsPlaceholder?e:t(a.markup.buttonsPlaceholder):t("#mTS_"+n.idx),l=["<a href='#' id='mTS_"+n.idx+"_buttonUp' class='mTSButton mTSButtonUp'><span class='mTSButtonIconContainer'>"+S.call(this,"up")+"</span></a>","<a href='#' id='mTS_"+n.idx+"_buttonDown' class='mTSButton mTSButtonDown'><span class='mTSButtonIconContainer'>"+S.call(this,"down")+"</span></a>","<a href='#' id='mTS_"+n.idx+"_buttonLeft' class='mTSButton mTSButtonLeft'><span class='mTSButtonIconContainer'>"+S.call(this,"left")+"</span></a>","<a href='#' id='mTS_"+n.idx+"_buttonRight' class='mTSButton mTSButtonRight'><span class='mTSButtonIconContainer'>"+S.call(this,"right")+"</span></a>"];["x"===a.axis?l[2]:l[0],"x"===a.axis?l[3]:l[1]]}r.hasClass(i)&&"static"===r.css("position")&&r.css("position","relative"),-1!==a.type.indexOf("click")&&("x"!==a.axis&&r.append(l[0]+l[1]),"y"!==a.axis&&r.append(l[2]+l[3]))},S=function(e){var n=t(this),a=n.data(o),i=a.opt,r=i.markup.buttonsHTML,l="SVG set 1"===r[e]?0:"SVG set 2"===r[e]?1:"SVG set 3"===r[e]?2:"SVG set 4"===r[e]?3:"SVG set 5"===r[e]?4:null;switch(e){case"up":return null===l?r[e]:d?"&uarr;":w(r[e])[l][0];case"down":return null===l?r[e]:d?"&darr;":w(r[e])[l][1];case"left":return null===l?r[e]:d?"&larr;":w(r[e])[l][2];case"right":return null===l?r[e]:d?"&rarr;":w(r[e])[l][3]}},w=function(){var t="<svg version='1.1' viewBox='0 0 24 24' preserveAspectRatio='xMinYMin meet' class='mTSButtonIcon'><g><line stroke-width='1' x1='' y1='' x2='' y2='' stroke='#449FDB' opacity=''></line></g>",e="</svg>";return[[t+"<path d='M20.561 9.439l-7.5-7.5c-0.586-0.586-1.535-0.586-2.121 0l-7.5 7.5c-0.586 0.586-0.586 1.536 0 2.121s1.536 0.586 2.121 0l4.939-4.939v14.379c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5v-14.379l4.939 4.939c0.293 0.293 0.677 0.439 1.061 0.439s0.768-0.146 1.061-0.439c0.586-0.586 0.586-1.535 0-2.121z'></path>"+e,t+"<path d='M3.439 14.561l7.5 7.5c0.586 0.586 1.536 0.586 2.121 0l7.5-7.5c0.586-0.586 0.586-1.536 0-2.121s-1.536-0.586-2.121 0l-4.939 4.939v-14.379c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5v14.379l-4.939-4.939c-0.293-0.293-0.677-0.439-1.061-0.439s-0.768 0.146-1.061 0.439c-0.586 0.586-0.586 1.536 0 2.121z'></path>"+e,t+"<path d='M9.439 3.439l-7.5 7.5c-0.586 0.586-0.586 1.536 0 2.121l7.5 7.5c0.586 0.586 1.536 0.586 2.121 0s0.586-1.536 0-2.121l-4.939-4.939h14.379c0.828 0 1.5-0.672 1.5-1.5s-0.672-1.5-1.5-1.5h-14.379l4.939-4.939c0.293-0.293 0.439-0.677 0.439-1.061s-0.146-0.768-0.439-1.061c-0.586-0.586-1.536-0.586-2.121 0z'></path>"+e,t+"<path d='M14.561 20.561l7.5-7.5c0.586-0.586 0.586-1.536 0-2.121l-7.5-7.5c-0.586-0.586-1.536-0.586-2.121 0s-0.586 1.536 0 2.121l4.939 4.939h-14.379c-0.828 0-1.5 0.672-1.5 1.5s0.672 1.5 1.5 1.5h14.379l-4.939 4.939c-0.293 0.293-0.439 0.677-0.439 1.061s0.146 0.768 0.439 1.061c0.586 0.586 1.536 0.586 2.121 0z'></path>"+e],[t+"<path d='M18.58 13.724c-0.488-0.502-5.634-5.402-5.634-5.402-0.262-0.268-0.604-0.402-0.946-0.402-0.343 0-0.685 0.134-0.946 0.402 0 0-5.146 4.901-5.635 5.402-0.488 0.502-0.522 1.404 0 1.939 0.523 0.534 1.252 0.577 1.891 0l4.69-4.496 4.688 4.496c0.641 0.577 1.37 0.534 1.891 0 0.523-0.536 0.491-1.439 0-1.939z'</path>"+e,t+"<path d='M18.58 10.276c-0.488 0.502-5.634 5.404-5.634 5.404-0.262 0.268-0.604 0.401-0.946 0.401-0.343 0-0.685-0.133-0.946-0.401 0 0-5.146-4.902-5.635-5.404-0.488-0.502-0.522-1.403 0-1.939 0.523-0.535 1.252-0.577 1.891 0l4.69 4.498 4.688-4.496c0.641-0.577 1.37-0.535 1.891 0 0.523 0.535 0.491 1.438 0 1.938z'></path>"+e,t+"<path d='M13.724 5.419c-0.502 0.49-5.402 5.635-5.402 5.635-0.268 0.262-0.401 0.604-0.401 0.946s0.133 0.684 0.401 0.946c0 0 4.901 5.146 5.402 5.634 0.502 0.49 1.404 0.523 1.939 0 0.534-0.522 0.576-1.25-0.001-1.89l-4.496-4.69 4.496-4.69c0.577-0.641 0.535-1.369 0.001-1.891-0.536-0.522-1.439-0.49-1.939 0z'></path>"+e,t+"<path d='M10.276 5.419c0.502 0.49 5.402 5.635 5.402 5.635 0.269 0.262 0.402 0.604 0.402 0.946s-0.133 0.684-0.402 0.946c0 0-4.901 5.146-5.402 5.634-0.502 0.49-1.403 0.523-1.939 0-0.535-0.522-0.577-1.25 0-1.89l4.498-4.69-4.496-4.69c-0.577-0.641-0.535-1.369 0-1.891s1.438-0.49 1.938 0z'></path>"+e],[t+"<path d='M20.902 17.279c0.325 0.322 0.851 0.322 1.175 0 0.325-0.322 0.325-0.841 0-1.163l-9.49-9.396c-0.324-0.322-0.85-0.322-1.174 0l-9.49 9.396c-0.324 0.322-0.325 0.841 0 1.163s0.85 0.322 1.175 0l8.902-8.569 8.902 8.569z'></path>"+e,t+"<path d='M3.098 6.721c-0.325-0.322-0.851-0.322-1.175 0-0.324 0.32-0.324 0.841 0 1.163l9.49 9.396c0.325 0.322 0.85 0.322 1.175 0l9.49-9.396c0.324-0.322 0.325-0.841 0-1.163s-0.852-0.322-1.175-0.001l-8.903 8.569-8.902-8.568z'></path>"+e,t+"<path d='M17.279 20.902c0.322 0.325 0.322 0.85 0 1.175s-0.841 0.325-1.163 0l-9.396-9.488c-0.322-0.325-0.322-0.851 0-1.175l9.396-9.49c0.322-0.325 0.841-0.325 1.163 0s0.322 0.85 0 1.175l-8.568 8.902 8.568 8.902z'</path>"+e,t+"<path d='M6.72 20.902c-0.322 0.325-0.322 0.85 0 1.175s0.841 0.325 1.163 0l9.396-9.488c0.322-0.325 0.322-0.851 0-1.175l-9.396-9.49c-0.322-0.325-0.841-0.325-1.163 0s-0.322 0.85 0 1.175l8.568 8.902-8.568 8.902z'</path>"+e],[t+"<path d='M12 0l-12 12h7.5v12l9 0v-12h7.5z'></path>"+e,t+"<path d='M12 24l12-12h-7.5v-12l-9-0v12h-7.5z'></path>"+e,t+"<path d='M0 12l12 12v-7.5h12l0-9h-12v-7.5z'></path>"+e,t+"<path d='M24 12l-12-12v7.5h-12l-0 9h12v7.5z'></path>"+e],[t+"<path d='M6.48 16.8h11.040l-5.521-9.6z'></path>"+e,t+"<path d='M17.52 7.201l-11.040-0.001 5.52 9.6z'></path>"+e,t+"<path d='M16.799 6.48l0.001 11.040-9.6-5.52z'></path>"+e,t+"<path d='M7.201 6.48l-0.001 11.040 9.6-5.52z'></path>"+e]]},b=function(){var e=t(this),n=e.data(o),a=(n.opt,t("#mTS_"+n.idx)),i=e.css("max-height"),r=-1!==i.indexOf("%"),l=e.css("box-sizing");if("none"!==i){var s=r?e.parent().height()*parseInt(i)/100:parseInt(i);"border-box"===l&&(s-=e.innerHeight()-e.height()+(e.outerHeight()-e.innerHeight())),a.css("max-height",Math.round(s))}},_=function(){var e=t(this),n=e.data(o),a=t("#mTS_"+n.idx),i=t("#mTS_"+n.idx+"_container");return[i.height()>a.height(),i.width()>a.width()]},y=function(){var e=t(this),n=e.data(o),a=n.opt,i=t("#mTS_"+n.idx),r=t("#mTS_"+n.idx+"_container");if(R(e),("x"!==a.axis&&!n.overflowed[0]||"y"===a.axis&&n.overflowed[0])&&r.css("top",0),"y"!==a.axis&&!n.overflowed[1]||"x"===a.axis&&n.overflowed[1]){var l="rtl"===n.langDir?i.width()-r.width():0;r.css("left",l)}},M=function(){var e=t(this),n=e.data(o),a=n.opt;n.bindEvents||(a.contentTouchScroll&&L.call(this),-1!==a.type.indexOf("hover")?"hover-precise"===a.type?A.call(this):B.call(this):-1!==a.type.indexOf("click")&&z.call(this),n.bindEvents=!0)},C=function(){var e=t(this),n=e.data(o),a=o+"_"+n.idx,i=t("#mTS_"+n.idx+",#mTS_"+n.idx+"_container,#mTS_"+n.idx+"_buttonUp,#mTS_"+n.idx+"_buttonDown,#mTS_"+n.idx+"_buttonLeft,#mTS_"+n.idx+"_buttonRight"),r=t("#mTS_"+n.idx+"_container");n.bindEvents&&(i.each(function(){t(this).unbind("."+a)}),clearTimeout(r[0].onCompleteTimeout),H(r[0],"onCompleteTimeout"),n.bindEvents=!1)},k=function(e,n,a){var i=t(this),r=i.data(o),l=r.opt;if(-1!==l.type.indexOf("click")){a||(a=l.axis);var s=[t("#mTS_"+r.idx+"_buttonUp"),t("#mTS_"+r.idx+"_buttonDown"),t("#mTS_"+r.idx+"_buttonLeft"),t("#mTS_"+r.idx+"_buttonRight")],c=o+"-hidden";"x"!==a&&(!r.overflowed[0]||e||n?sel=1===n?[s[0],s[1]]:2===n?[s[1],s[0]]:[s[0].add(s[1]),null]:sel=[r.overflowed[1]?null:s[2].add(s[3]),s[0].add(s[1])]),"y"!==a&&(!r.overflowed[1]||e||n?sel=1===n?[s[2],s[3]]:2===n?[s[3],s[2]]:[s[2].add(s[3]),null]:sel=[r.overflowed[0]?null:s[0].add(s[1]),s[2].add(s[3])]),sel[0]&&sel[0].addClass(c),sel[1]&&sel[1].removeClass(c)}},O=function(t){var e=t.type;switch(e){case"pointerdown":case"MSPointerDown":case"pointermove":case"MSPointerMove":case"pointerup":case"MSPointerUp":return[t.originalEvent.pageY,t.originalEvent.pageX];case"touchstart":case"touchmove":case"touchend":var n=t.originalEvent.touches[0]||t.originalEvent.changedTouches[0];return[n.pageY,n.pageX];default:return[t.pageY,t.pageX]}},I=function(t){return a||-1!==t.type.indexOf("touch")||"undefined"!=typeof t.pointerType&&(2===t.pointerType||"touch"===t.pointerType)?"touch":"mouse"},L=function(){function e(t,e){var n=[1.5*e,2*e,e/1.5,e/2];return t>90?e>4?n[0]:n[3]:t>60?e>3?n[3]:n[2]:t>30?e>8?n[1]:e>6?n[0]:e>4?e:n[2]:e>8?e:n[3]}function n(t,e,n,a,i){t&&U(x,-t.toString(),{dur:e,easing:n,dir:a,overwrite:i})}var i,r,l,s,c,d,h,f,p,m,v,x=t(this),g=x.data(o),T=g.opt,S=o+"_"+g.idx,w=t("#mTS_"+g.idx),b=t("#mTS_"+g.idx+"_container"),_=[],y=[],M=0,C="yx"===T.axis?"none":"all",k=[];b.bind("touchstart."+S+" pointerdown."+S+" MSPointerDown."+S,function(t){if(N(t)&&!u){x.removeClass("mTS_touch_action");var e=b.offset();i=O(t)[0]-e.top,r=O(t)[1]-e.left,k=[O(t)[0],O(t)[1]]}}).bind("touchmove."+S+" pointermove."+S+" MSPointerMove."+S,function(t){if(N(t)&&!u){t.stopImmediatePropagation(),d=G();var e=w.offset(),a=O(t)[0]-e.top,o=O(t)[1]-e.left,l="linearOut";if(_.push(a),y.push(o),k[2]=Math.abs(O(t)[0]-k[0]),k[3]=Math.abs(O(t)[1]-k[1]),g.overflowed[0])var s=w.height()-b.height(),c=i-a>0&&a-i>s&&2*k[3]<k[2];if(g.overflowed[1])var h=w.width()-b.width(),f=r-o>0&&o-r>h&&2*k[2]<k[3];c||f?t.preventDefault():x.addClass("mTS_touch_action"),m="yx"===T.axis?[i-a,r-o]:"x"===T.axis?[null,r-o]:[i-a,null],b[0].idleTimer=250,g.overflowed[0]&&n(m[0],M,l,"y","all"),g.overflowed[1]&&n(m[1],M,l,"x",C)}}),w.bind("touchstart."+S+" pointerdown."+S+" MSPointerDown."+S,function(t){if(N(t)&&!u){t.stopImmediatePropagation(),a=!0,R(x),c=G();var e=w.offset();l=O(t)[0]-e.top,s=O(t)[1]-e.left,_=[],y=[]}}).bind("touchend."+S+" pointerup."+S+" MSPointerUp."+S,function(t){if(N(t)&&!u){t.stopImmediatePropagation(),h=G();var a=w.offset(),i=O(t)[0]-a.top,o=O(t)[1]-a.left;if(!(h-d>30)){p=1e3/(h-c);var r="easeOut",x=2.5>p,S=x?[_[_.length-2],y[y.length-2]]:[0,0];f=x?[i-S[0],o-S[1]]:[i-l,o-s];var M=[Math.abs(f[0]),Math.abs(f[1])];p=x?[Math.abs(f[0]/4),Math.abs(f[1]/4)]:[p,p];var k=[Math.abs(b[0].offsetTop)-f[0]*e(M[0]/p[0],p[0]),Math.abs(b[0].offsetLeft)-f[1]*e(M[1]/p[1],p[1])];m="yx"===T.axis?[k[0],k[1]]:"x"===T.axis?[null,k[1]]:[k[0],null],v=[4*M[0]+60*T.speed,4*M[1]+60*T.speed];var I=parseInt(T.contentTouchScroll)||0;m[0]=M[0]>I?m[0]:0,m[1]=M[1]>I?m[1]:0,g.overflowed[0]&&n(m[0],v[0],r,"y",C),g.overflowed[1]&&n(m[1],v[1],r,"x",C)}}})},A=function(){var n,a,i,r=t(this),l=r.data(o),s=l.opt,c=o+"_"+l.idx,d=t("#mTS_"+l.idx),u=t("#mTS_"+l.idx+"_container"),h=e.navigator.pointerEnabled?"pointermove":e.navigator.msPointerEnabled?"MSPointerMove":"mousemove";d.bind(h+"."+c,function(t){if("touch"!==I(t.originalEvent||t)&&(l.overflowed[0]||l.overflowed[1])){t.preventDefault();var e=d.height(),o=u.height(),c=d.width(),h=u.width(),f=h/c*7e3/(s.speed||1);n=[O(t)[0]-d.offset().top,O(t)[1]-d.offset().left],a=[n[0]/d.height(),n[1]/d.width()],i=[Math.round(-((o-e)*a[0])),Math.round(-((h-c)*a[1]))],"x"!==s.axis&&l.overflowed[0]&&U(r,i[0].toString(),{dir:"y",dur:f,easing:"easeOut"}),"y"!==s.axis&&l.overflowed[1]&&U(r,i[1].toString(),{dir:"x",dur:f,easing:"easeOut"})}})},B=function(){function n(){v[0].rAF||(l=e.requestAnimationFrame?e.requestAnimationFrame:function(t){return setTimeout(t,17)},v[0].rAF=l(r))}function i(){null!=v[0].rAF&&(e.requestAnimationFrame?e.cancelAnimationFrame(v[0].rAF):clearTimeout(v[0].rAF),clearTimeout(u),v[0].rAF=null)}function r(){if(!a){d=[c[0]+x[0].offsetTop,c[1]+x[0].offsetLeft];var t=[v.height()-x.height(),v.width()-x.width()];"x"!==p.axis&&f.overflowed[0]&&(d[0]=d[0]>0?0:d[0]<t[0]?t[0]:d[0],c[0]&&!_[0]&&U(h,d[0],{dir:"y",dur:0,easing:"linear"}),(d[0]>=0||d[0]<=t[0])&&(_[0]=1)),"y"!==p.axis&&f.overflowed[1]&&(d[1]=d[1]>0?0:d[1]<t[1]?t[1]:d[1],c[1]&&!_[1]&&U(h,d[1],{dir:"x",dur:0,easing:"linear"}),(d[1]>=0||d[1]<=t[1])&&(_[1]=1)),u=setTimeout(function(){v[0].rAF=l(r)},T)}}var l,s,c,d,u,h=t(this),f=h.data(o),p=f.opt,m=o+"_"+f.idx,v=t("#mTS_"+f.idx),x=t("#mTS_"+f.idx+"_container"),g=e.navigator.pointerEnabled?["pointerover","pointermove","pointerout"]:e.navigator.msPointerEnabled?["MSPointerOver","MSPointerMove","MSPointerOut"]:["mouseenter","mousemove","mouseleave"],T=e.requestAnimationFrame?0:17,S=p.speed,w=parseInt(p.type.split("hover-")[1])||1,b=S*w/100,_=[0,0];v.bind(g[0]+"."+m,function(t){"touch"!==I(t.originalEvent||t)&&(f.overflowed[0]||f.overflowed[1])&&n()}).bind(g[1]+"."+m,function(t){"touch"!==I(t.originalEvent||t)&&(f.overflowed[0]||f.overflowed[1])&&(s=[O(t)[0]-v.offset().top,O(t)[1]-v.offset().left],c=[Math.round(Math.cos(s[0]/v.height()*Math.PI)*S),Math.round(Math.cos(s[1]/v.width()*Math.PI)*S)],c[0]=c[0]<=-b?c[0]+=b:c[0]>=b?c[0]-=b:c[0]=0,c[1]=c[1]<=-b?c[1]+=b:c[1]>=b?c[1]-=b:c[1]=0,_=[0,0])}).bind(g[2]+"."+m,function(t){"touch"!==I(t.originalEvent||t)&&(f.overflowed[0]||f.overflowed[1])&&i()})},z=function(){var e=t(this),n=e.data(o),a=n.opt,i=o+"_"+n.idx,r=t("#mTS_"+n.idx),l=t("#mTS_"+n.idx+"_container"),s=[t("#mTS_"+n.idx+"_buttonUp"),t("#mTS_"+n.idx+"_buttonDown"),t("#mTS_"+n.idx+"_buttonLeft"),t("#mTS_"+n.idx+"_buttonRight")],c=s[0].add(s[1]).add(s[2]).add(s[3]);c.bind("click."+i,function(i){if(j(i)&&(n.overflowed[0]||n.overflowed[1])&&(i.preventDefault(),!n.tweenRunning)){if("x"!==a.axis&&n.overflowed[0]){var o=r.height(),s="click-thumb"===a.type?0:t(this).hasClass("mTSButtonUp")?"+=":t(this).hasClass("mTSButtonDown")?"-=":0;if("click-thumb"!==a.type)var c=parseInt(a.type.split("click-")[1])||1,d=s?[s+o*c/100,null]:0;else{var u=P.call(e[0])[0],h=P.call(e[0])[1];if(t(this).hasClass("mTSButtonDown"))var d=h?h[0].offsetTop-parseInt(h.css("margin-bottom"))-o:989999;else if(t(this).hasClass("mTSButtonUp")){var d=u?u[0].offsetTop-parseInt(u.css("margin-top")):0;if(0===l[0].offsetTop)return}}}if("y"!==a.axis&&n.overflowed[1]){var p=r.width(),s="click-thumb"===a.type?0:t(this).hasClass("mTSButtonLeft")?"+=":t(this).hasClass("mTSButtonRight")?"-=":0;if("click-thumb"!==a.type)var c=parseInt(a.type.split("click-")[1])||1,d=s?[null,s+p*c/100]:d;else{var u=P.call(e[0])[2],h=P.call(e[0])[3];if(t(this).hasClass("mTSButtonRight"))var d=h?h[0].offsetLeft-parseInt(h.css("margin-right"))-p:989999;else if(t(this).hasClass("mTSButtonLeft")){var d=u?u[0].offsetLeft-parseInt(u.css("margin-left")):0;if(0===l[0].offsetLeft)return}}}null!==d&&f.scrollTo.call(e[0],d,{duration:0})}})},P=function(){var e,n,a,i,r=t(this),l=r.data(o),s=(l.opt,t("#mTS_"+l.idx+"_container")),c=t("#mTS_"+l.idx),d=s.find(".mTSThumbContainer");return d.each(function(){var o=t(this),r=[Math.round(o.offset().top-s.offset().top+s[0].offsetTop),Math.round(o.offset().left-s.offset().left+s[0].offsetLeft)];if(r[0]<=0-parseInt(o.css("margin-top")))e=d.eq(0===r[0]?o.index()-1:o.index());else if(r[0]<=c.height()+parseInt(o.css("margin-bottom"))){var l=d.eq(o.index()+1);n=l.length?l:null}if(r[1]<=0-parseInt(o.css("margin-left")))a=d.eq(0===r[1]?o.index()-1:o.index());else if(r[1]<=c.width()+parseInt(o.css("margin-right"))){var u=d.eq(o.index()+1);i=u.length?u:null}}),[e,n,a,i]},E=function(e){var n=t(this).data(o).opt,a=[];return"function"==typeof e&&(e=e()),e instanceof Array?a=e.length>1?[e[0],e[1]]:"x"===n.axis?[null,e[0]]:[e[0],null]:(a[0]=e.y?e.y:e.x||"x"===n.axis?null:e,a[1]=e.x?e.x:e.y||"y"===n.axis?null:e),"function"==typeof a[0]&&(a[0]=a[0]()),"function"==typeof a[1]&&(a[1]=a[1]()),a},D=function(e,n){if(null!=e&&"undefined"!=typeof e){var a=t(this),i=a.data(o),r=i.opt,l=t("#mTS_"+i.idx),s=t("#mTS_"+i.idx+"_container"),c=typeof e;n||(n="x"===r.axis?"x":"y");var d="x"===n?s.width():s.height(),u="x"===n?s.offset().left:s.offset().top,h="x"===n?s[0].offsetLeft:s[0].offsetTop,p="x"===n?"left":"top";switch(c){case"function":return e();case"object":if(e.nodeType)var m="x"===n?t(e).offset().left:t(e).offset().top;else if(e.jquery){if(!e.length)return;var m="x"===n?e.offset().left:e.offset().top}return m-u;case"string":case"number":if(W(e))return Math.abs(e);if(-1!==e.indexOf("%"))return Math.abs(d*parseInt(e)/100);if(-1!==e.indexOf("-="))return Math.abs(h-parseInt(e.split("-=")[1]));if(-1!==e.indexOf("+=")){var v=h+parseInt(e.split("+=")[1]);return v>=0?0:Math.abs(v)}if(-1!==e.indexOf("px")&&W(e.split("px")[0]))return Math.abs(e.split("px")[0]);if("top"===e||"left"===e)return 0;if("bottom"===e)return Math.abs(l.height()-s.height());if("right"===e)return Math.abs(l.width()-s.width());if("first"===e||"last"===e){var x=s.find(":"+e),m="x"===n?t(x).offset().left:t(x).offset().top;return m-u}if(t(e).length){var m="x"===n?t(e).offset().left:t(e).offset().top;return m-u}return s.css(p,e),void f.update.call(null,a[0])}}},F=function(e){function n(){return clearTimeout(h[0].autoUpdate),0===s.parents("html").length?void(s=null):void(h[0].autoUpdate=setTimeout(function(){return d.advanced.updateOnSelectorChange&&(p=r(),p!==x)?(l(),void(x=p)):(d.advanced.updateOnContentResize&&(m=[h.height(),h.width(),u.height(),u.width(),s.height(),s.width()],(m[0]!==g[0]||m[1]!==g[1]||m[2]!==g[2]||m[3]!==g[3]||m[4]!==g[4]||m[5]!==g[5])&&(l(),g=m)),d.advanced.updateOnImageLoad&&(v=a(),v!==T&&(h.find("img").each(function(){i(this.src)}),T=v)),void((d.advanced.updateOnSelectorChange||d.advanced.updateOnContentResize||d.advanced.updateOnImageLoad)&&n()))},60))}function a(){var t=0;return d.advanced.updateOnImageLoad&&(t=h.find("img").length),t}function i(t){function e(t,e){return function(){return e.apply(t,arguments)}}function n(){this.onload=null,l()}var a=new Image;a.onload=e(a,n),a.src=t}function r(){d.advanced.updateOnSelectorChange===!0&&(d.advanced.updateOnSelectorChange="*");var e=0,n=h.find(d.advanced.updateOnSelectorChange);return d.advanced.updateOnSelectorChange&&n.length>0&&n.each(function(){e+=t(this).height()+t(this).width()}),e}function l(){clearTimeout(h[0].autoUpdate),f.update.call(null,s[0])}var s=t(this),c=s.data(o),d=c.opt,u=t("#mTS_"+c.idx),h=t("#mTS_"+c.idx+"_container");if(e)return clearTimeout(h[0].autoUpdate),void H(h[0],"autoUpdate");var p,m,v,x=r(),g=[h.height(),h.width(),u.height(),u.width(),s.height(),s.width()],T=a();n()},R=function(e){var n=e.data(o),a=t("#mTS_"+n.idx+"_container");a.each(function(){q.call(this)})},U=function(e,n,a){function i(t){return s&&c.callbacks[t]&&"function"==typeof c.callbacks[t]}function r(){return[c.callbacks.alwaysTriggerOffsets||v>=x+T,c.callbacks.alwaysTriggerOffsets||-S>=v]}function l(){var t=[h[0].offsetTop,h[0].offsetLeft],n=[h.height(),h.width()],i=[u.height(),u.width()];e[0].mts={content:h,top:t[0],left:t[1],topPct:Math.round(100*Math.abs(t[0])/(Math.abs(n[0])-i[0])),leftPct:Math.round(100*Math.abs(t[1])/(Math.abs(n[1])-i[1])),direction:a.dir}}var s=e.data(o),c=s.opt,d={trigger:"internal",dir:"y",easing:"easeOut",dur:60*c.speed,overwrite:"all",callbacks:!0,onStart:!0,onUpdate:!0,onComplete:!0},a=t.extend(d,a),u=t("#mTS_"+s.idx),h=t("#mTS_"+s.idx+"_container"),f=c.callbacks.onTotalScrollOffset?E.call(e,c.callbacks.onTotalScrollOffset):[0,0],p=c.callbacks.onTotalScrollBackOffset?E.call(e,c.callbacks.onTotalScrollBackOffset):[0,0];switch(s.trigger=a.trigger,(0!==u.scrollTop()||0!==u.scrollLeft())&&u.scrollTop(0).scrollLeft(0),a.dir){case"x":var m="left",v=h[0].offsetLeft,x=u.width()-h.width(),g=n,T=f[1],S=p[1],w=T>0?T:0,b=S>0?S:0;break;case"y":var m="top",v=h[0].offsetTop,x=u.height()-h.height(),g=n,T=f[0],S=p[0],w=T>0?T:0,b=S>0?S:0}g>=0?(g=0,k.call(e,!1,1,a.dir)):x>=g?(g=x,k.call(e,!1,2,a.dir)):(g=g,k.call(e,!1,0,a.dir)),e[0].mts||(l(),i("onInit")&&c.callbacks.onInit.call(e[0])),clearTimeout(h[0].onCompleteTimeout),(s.tweenRunning||!(0===v&&g>=0||v===x&&x>=g))&&V(h[0],m,Math.round(g),a.dur,a.easing,a.overwrite,{onStart:function(){a.callbacks&&a.onStart&&!s.tweenRunning&&(i("onScrollStart")&&(l(),c.callbacks.onScrollStart.call(e[0])),s.tweenRunning=!0,s.cbOffsets=r())},onUpdate:function(){a.callbacks&&a.onUpdate&&i("whileScrolling")&&(l(),c.callbacks.whileScrolling.call(e[0]))},onComplete:function(){if(a.callbacks&&a.onComplete){"yx"===c.axis&&clearTimeout(h[0].onCompleteTimeout);var t=h[0].idleTimer||0;h[0].onCompleteTimeout=setTimeout(function(){i("onScroll")&&(l(),c.callbacks.onScroll.call(e[0])),i("onTotalScroll")&&x+w>=g&&s.cbOffsets[0]&&(l(),c.callbacks.onTotalScroll.call(e[0])),i("onTotalScrollBack")&&g>=-b&&s.cbOffsets[1]&&(l(),c.callbacks.onTotalScrollBack.call(e[0])),s.tweenRunning=!1,h[0].idleTimer=0},t)}}})},V=function(t,n,a,i,o,r,l){function s(){b.stop||(T||m.call(),T=G()-g,c(),T>=b.time&&(b.time=T>b.time?T+f-(T-b.time):T+f-1,b.time<T+1&&(b.time=T+1)),b.time<i?b.id=p(s):x.call())}function c(){i>0?(b.currVal=h(b.time,S,_,i,o),w[n]=Math.round(b.currVal)+"px"):w[n]=a+"px",v.call()}function d(){f=1e3/60,b.time=T+f,p=e.requestAnimationFrame?e.requestAnimationFrame:function(t){return c(),setTimeout(t,.01)},b.id=p(s)}function u(){null!=b.id&&(e.requestAnimationFrame?e.cancelAnimationFrame(b.id):clearTimeout(b.id),b.id=null)}function h(t,e,n,a,i){switch(i){case"linear":return n*t/a+e;case"linearOut":return t/=a,t--,n*Math.sqrt(1-t*t)+e;case"easeInOutSmooth":return t/=a/2,1>t?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e);case"easeInOutStrong":return t/=a/2,1>t?n/2*Math.pow(2,10*(t-1))+e:(t--,n/2*(-Math.pow(2,-10*t)+2)+e);case"easeInOut":return t/=a/2,1>t?n/2*t*t*t+e:(t-=2,n/2*(t*t*t+2)+e);case"easeOutSmooth":return t/=a,t--,-n*(t*t*t*t-1)+e;case"easeOutStrong":return n*(-Math.pow(2,-10*t/a)+1)+e;case"easeOut":default:var o=(t/=a)*t,r=o*t;return e+n*(.499999999999997*r*o+-2.5*o*o+5.5*r+-6.5*o+4*t)}}t._mTween||(t._mTween={top:{},left:{}});var f,p,l=l||{},m=l.onStart||function(){},v=l.onUpdate||function(){},x=l.onComplete||function(){},g=G(),T=0,S=t.offsetTop,w=t.style,b=t._mTween[n];"left"===n&&(S=t.offsetLeft);var _=a-S;b.stop=0,"none"!==r&&u(),d()},G=function(){return e.performance&&e.performance.now?e.performance.now():e.performance&&e.performance.webkitNow?e.performance.webkitNow():Date.now?Date.now():(new Date).getTime()},q=function(){var t=this;t._mTween||(t._mTween={top:{},left:{}});for(var n=["top","left"],a=0;a<n.length;a++){var i=n[a];t._mTween[i].id&&(e.requestAnimationFrame?e.cancelAnimationFrame(t._mTween[i].id):clearTimeout(t._mTween[i].id),t._mTween[i].id=null,t._mTween[i].stop=1)}},H=function(t,e){try{delete t[e]}catch(n){t[e]=null}},j=function(t){return!(t.which&&1!==t.which)},N=function(t){var e=t.originalEvent.pointerType;return!(e&&"touch"!==e&&2!==e)},W=function(t){return!isNaN(parseFloat(t))&&isFinite(t)};t.fn[i]=function(e){return f[e]?f[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist"):f.init.apply(this,arguments)},t[i]=function(e){return f[e]?f[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist"):f.init.apply(this,arguments)},t[i].defaults=l,e[i]=!0,t(e).load(function(){var e=t(r),n=[];if(e.length){e.each(function(){var e=t(this),a=e.data("mts-axis")||l.axis,i=e.data("mts-type")||l.type,r=e.data("mts-theme")||l.theme,s="auto-"+o+"-"+a+"-"+i+"-"+r,c=[s,a,i];e.addClass(s),-1===t.inArray(s,n)&&n.push(c)});for(var a=0;a<n.length;a++)t("."+n[a][0])[i]({axis:n[a][1],type:n[a][2]})}})}(jQuery,window,document);


$(window).load(function(){
          $(".horisontallisting").mThumbnailScroller({
            axis:"x" //change to "y" for vertical scroller
          });
      });
