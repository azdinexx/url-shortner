!function(){function q(a){var c=[],b=[],e=function(g){for(var h={},d=0;d<u.length;d++){var f=u[d];if(f.Tag===g){h=f;break}var l=void 0,k=f.Tag;var C=(k=-1!==k.indexOf("http:")?k.replace("http:",""):k.replace("https:",""),-1!==(l=k.indexOf("?"))?k.replace(k.substring(l),""):k);if(g&&(-1!==g.indexOf(C)||-1!==f.Tag.indexOf(g))){h=f;break}}return h}(a);return e.CategoryId&&(c=e.CategoryId),e.Vendor&&(b=e.Vendor.split(":")),!e.Tag&&D&&(b=c=function(g){var h=[],d=function(f){var l=document.createElement("a");
return l.href=f,-1!==(f=l.hostname.split(".")).indexOf("www")||2<f.length?f.slice(1).join("."):l.hostname}(g);v.some(function(f){return f===d})&&(h=["C0004"]);return h}(a)),{categoryIds:c,vsCatIds:b}}function w(a){return!a||!a.length||(a&&window.OptanonActiveGroups?a.every(function(c){return-1!==window.OptanonActiveGroups.indexOf(","+c+",")}):void 0)}function m(a,c){void 0===c&&(c=null);var b=window,e=b.OneTrust&&b.OneTrust.IsVendorServiceEnabled;b=e&&b.OneTrust.IsVendorServiceEnabled();return"Categories"===
r||"All"===r&&e&&!b?w(a):("Vendors"===r||"All"===r&&e&&b)&&w(c)}function n(a){a=a.getAttribute("class")||"";return-1!==a.indexOf("optanon-category")||-1!==a.indexOf("ot-vscat")}function p(a){return a.hasAttribute("data-ot-ignore")}function x(a,c,b){void 0===b&&(b=null);var e=a.join("-"),g=b&&b.join("-"),h=c.getAttribute("class")||"",d="",f=!1;a&&a.length&&-1===h.indexOf("optanon-category-"+e)&&(d=("optanon-category-"+e).trim(),f=!0);b&&b.length&&-1===h.indexOf("ot-vscat-"+g)&&(d+=" "+("ot-vscat-"+
g).trim(),f=!0);f&&c.setAttribute("class",d+" "+h)}function y(a,c,b){void 0===b&&(b=null);var e;a=a.join("-");b=b&&b.join("-");return-1===c.indexOf("optanon-category-"+a)&&(e=("optanon-category-"+a).trim()),-1===c.indexOf("ot-vscat-"+b)&&(e+=" "+("ot-vscat-"+b).trim()),e+" "+c}function z(a){var c,b=q(a.src||"");(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.type="text/plain"),a.addEventListener("beforescriptexecute",c=function(e){"text/plain"===
a.getAttribute("type")&&e.preventDefault();a.removeEventListener("beforescriptexecute",c)}))}function A(a){var c=a.src||"",b=q(c);(b.categoryIds.length||b.vsCatIds.length)&&(x(b.categoryIds,a,b.vsCatIds),m(b.categoryIds,b.vsCatIds)||(a.removeAttribute("src"),a.setAttribute("data-src",c)))}var u=JSON.parse('[{"Tag":"https://www.youtube.com/embed/u-MS8HGvq04","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4mmpLXsIom0","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtm.js","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680118800000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/bnAW2EiNie0","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/rkgKfMk7FK4","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680112800000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680111000000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680107400000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680114600000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680120600000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680111900000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js.qualified.com/qualified.js?token\x3ds3IbMN4fxgnkq7YJ","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680125700000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://12389169.fls.doubleclick.net/activityi","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/a9bqyPVK92Q","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680119700000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680117900000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://dl6fh5ptkejqa.cloudfront.net/b1eaafb48b055f33a360d6e77586bc0f.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/NcI4hP9wNug","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://px.ads.linkedin.com/collect","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680109200000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/836472287062344","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/Dxqt7TGjVfA","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.g2.com/products/bitly/testimonials/14599.embed","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/3wcPEbzjdw8","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680108000000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680105600000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js","CategoryId":["C0002","C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/lcCEpdQrjP8","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680126900000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://connect.facebook.net/signals/config/575684804151769","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680127200000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680120900000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680112200000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://cdn.optimizely.com/js/21506360176.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680105900000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680112500000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/THtoZDtCWNU","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/A96HIFSrQao","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680110400000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4lEYD5bksXA","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://cdn.jsdelivr.net/npm/@snowplow/javascript-tracker@3.4.0/dist/sp.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680107700000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680110700000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.google-analytics.com/analytics.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680105300000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/qIJHpNNxT3g","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://docrdsfx76ssb.cloudfront.net/static/1675956644/pages/wp-content/themes/JointsWP-CSS-master/assets/scripts/jquery.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680120300000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/763E-TrZO68","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/8R4ejTjoDYM","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680111600000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680119100000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680113100000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://googleads.g.doubleclick.net/pagead/viewthroughconversion/768371374/","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/4XxL6eTIN2s","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://cdn.optimizely.com/js/16488430484.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.linkedin.com/px/li_sync","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680107100000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/VpGpLGscnPQ","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://static.formstack.com/forms/js/3/jquery-3.5.1.min_dc5e7f18c8.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680106200000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/fdze464-ojo","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680114900000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/XIHeIL0DoJs","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/7_K6ynAFQro","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://snap.licdn.com/li.lms-analytics/insight.min.js","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680120000000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680119400000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://analytics.twitter.com/i/adsct","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680111300000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://t.co/i/adsct","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-scripts.com/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.googletagmanager.com/gtag/js","CategoryId":["C0002","C0007"],"Vendor":null},{"Tag":"https://www.facebook.com/tr/","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube-nocookie.com/embed/ErxrmNRgb8E","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/SMDcIKHWJRs","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680106500000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680108900000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/myTB2HTj65o","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://www.slideshare.net/slideshow/embed_code/key/pOOcCxEOVXmqYh","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://docrdsfx76ssb.cloudfront.net/static/1679596991/pages/wp-content/themes/JointsWP-CSS-master/assets/scripts/jquery.min.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://www.youtube.com/embed/Js1245qHKPc","CategoryId":["C0007"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680106800000/26740822.js","CategoryId":["C0002"],"Vendor":null},{"Tag":"https://js-eu1.hs-analytics.net/analytics/1680108600000/26740822.js","CategoryId":["C0002"],"Vendor":null}]'),
D=JSON.parse("true"),r=JSON.parse('"Categories"'),v=(v=[""]).filter(function(a){if("null"!==a&&a.trim().length)return a}),t=["embed","iframe","img","script"],B=((new MutationObserver(function(a){Array.prototype.forEach.call(a,function(c){Array.prototype.forEach.call(c.addedNodes,function(e){1!==e.nodeType||-1===t.indexOf(e.tagName.toLowerCase())||n(e)||p(e)||("script"===e.tagName.toLowerCase()?z:A)(e)});var b=c.target;!c.attributeName||n(b)&&p(b)||("script"===b.nodeName.toLowerCase()?z(b):-1!==t.indexOf(c.target.nodeName.toLowerCase())&&
A(b))})})).observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["src"]}),document.createElement);document.createElement=function(){for(var a,c,b=[],e=0;e<arguments.length;e++)b[e]=arguments[e];return"script"===b[0].toLowerCase()||-1!==t.indexOf(b[0].toLowerCase())?(a=B.bind(document).apply(void 0,b),c=a.setAttribute.bind(a),Object.defineProperties(a,{src:{get:function(){return a.getAttribute("src")||""},set:function(g){var h,d="";d=("string"==typeof g?d=g:g instanceof
Object&&(d=g.toString()),q(d));return!d.categoryIds.length&&!d.vsCatIds.length||"script"!==b[0].toLowerCase()||n(a)||m(d.categoryIds,d.vsCatIds)||p(a)?!d.categoryIds.length||-1===t.indexOf(b[0].toLowerCase())||n(a)||m(d.categoryIds,d.vsCatIds)||p(a)?c("src",g):(a.removeAttribute("src"),c("data-src",g),(h=a.getAttribute("class"))||(h=y(d.categoryIds,h||"",d.vsCatIds),c("class",h))):(c("type","text/plain"),c("src",g)),!0}},type:{get:function(){return a.getAttribute("type")||""},set:function(g){return d=
c,f=q((h=a).src||""),d("type",!f.categoryIds.length&&!f.vsCatIds.length||n(h)||m(f.categoryIds,f.vsCatIds)||p(h)?g:"text/plain"),!0;var h,d,f}},class:{set:function(g){return d=c,!(f=q((h=a).src)).categoryIds.length&&!f.vsCatIds.length||n(h)||m(f.categoryIds,f.vsCatIds)||p(h)?d("class",g):d("class",y(f.categoryIds,g,f.vsCatIds)),!0;var h,d,f}}}),a.setAttribute=function(g,h,d){"type"!==g&&"src"!==g||d?c(g,h):a[g]=h},a):B.bind(document).apply(void 0,b)}}();