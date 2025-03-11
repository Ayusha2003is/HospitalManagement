"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[86132,47739],{983272:(e,t,n)=>{function i(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,{Z:()=>r});let a=new class{constructor(){i(this,"onResumeListeners",[]),i(this,"onPauseListeners",[]),i(this,"inExp",!1),i(this,"windowInFocus",!0)}setExperiment(e=!1){this.inExp=e}onSessionResume(e){return this.onResumeListeners.push(e),this}onSessionPause(e){return this.onPauseListeners.push(e),this}removeResumeListener(e){this.onResumeListeners.filter(t=>t!==e)}removePauseListener(e){this.onPauseListeners=this.onPauseListeners.filter(t=>t!==e)}getAppState(){return this.windowInFocus?0:void 0}},o=e=>{if(e.isHidden){let{reason:t}=e;a.windowInFocus=!1,a.onPauseListeners.forEach(e=>e(t))}else a.windowInFocus=!0,a.onResumeListeners.forEach(e=>e())};setTimeout(()=>{window.addEventListener("beforeunload",()=>o({isHidden:!0,reason:"beforeunload"})),window.addEventListener("focus",()=>o({isHidden:!1})),window.addEventListener("blur",()=>o({isHidden:!0,reason:"blur"})),window.addEventListener("pageshow",()=>o({isHidden:!1})),window.addEventListener("pagehide",()=>o({isHidden:!0,reason:"pagehide"})),void 0!==document.hidden?document.addEventListener("visibilitychange",()=>o(document.hidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1):void 0!==document.webkitHidden&&document.addEventListener("webkitvisibilitychange",()=>o(document.webkitHidden?{isHidden:!0,reason:"visibilitychange"}:{isHidden:!1}),!1)},0);let r=a},770975:(e,t,n)=>{n.d(t,{E:()=>a,S:()=>i});let{Provider:i,useMaybeHook:a}=(0,n(498490).Z)("pwtSurfaceContext")},301567:(e,t,n)=>{n.d(t,{F9:()=>m,LM:()=>d,VZ:()=>o,cQ:()=>p,rZ:()=>r});var i=n(10306),a=n(248750);let o=()=>"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&!!document.querySelector&&!!document.querySelectorAll,r=e=>e instanceof HTMLDivElement||e instanceof HTMLVideoElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null,s=({top:e,height:t},{foldY:n,pageYOffset:i})=>{let a=e+i;if(a>=n)return!1;let o=Math.min(t,n-a);return o>.5*t||o>.2*n},l=e=>{if(e instanceof HTMLImageElement)return e.src;if(e instanceof HTMLVideoElement)return e.attributes.poster.value;let t=((e.style||{}).backgroundImage||"").match(/^url\(["'](.*)["']\)$/);return t&&t[1]||null},d=()=>document.querySelector?document.querySelectorAll(i.wc).length:((0,a.H)("missing_document_query_selector"),0),u=()=>{if(!document.querySelector)return(0,a.H)("missing_document_query_selector"),null;let e=document.querySelectorAll(i.wc);return e[e.length-1]||null},c=(e,t)=>{let n=r(e);if(!n)return(0,a.H)("missing_client_rect"),!1;if(n.width<70&&n.height<70){if(e instanceof HTMLImageElement)return!1;let t=l(e);if(t?.endsWith("svg"))return!1}return s(n,t)},m=()=>{let e=u();if(!e)return!1;let t=window.innerHeight||0,n=window.pageYOffset||0;return e.getBoundingClientRect().top+n>=t},p=(e,t,n)=>{if(!document.querySelector)return(0,a.H)("missing_document_query_selector"),[];let o={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},r=[i.Wf,...e?[i.fF]:[],...t?[i.$N]:[]].join(","),s=[...document.querySelectorAll(r)];if(n){let e=[...document.querySelectorAll('div[data-test-id="board-section"]')],t=e=>{let n=[...e.children];!n.length&&e.style.backgroundImage?s.push(e):n.length&&n.forEach(e=>{t(e)})};e.forEach(e=>{t(e)})}return s.reduce((e,n)=>{if((n instanceof HTMLImageElement||n instanceof HTMLDivElement||n instanceof HTMLVideoElement&&t)&&c(n,o)){let t=l(n);if(t){let i=(t||"").replace(/.*\//,"");return e.concat([{element:n,fileName:i}])}}return e},[])}},10306:(e,t,n)=>{n.d(t,{$N:()=>l,Kb:()=>i,Wf:()=>r,fF:()=>s,wc:()=>o});let i="pwt-grid-item",a=['div[data-grid-item="true"]',"div.Grid__Item",`div[data-test-id="${i}"]`],o=a.join(","),r=a.map(e=>`${e} img`).join(","),s=a.map(e=>`${e} div[style*=background-image]`).join(","),l=a.map(e=>`${e} video`).join(",")},886132:(e,t,n)=>{n.d(t,{Z:()=>T,v:()=>f});var i=n(667294),a=n(297728),o=n(630118),r=n(845729),s=n(301567),l=n(248750),d=n(353168),u=n(770975),c=n(202953),m=n(636506),p=n(438973),g=n(415787);let _=(0,r.XV)("GridProfiler"),f=()=>!!window.addEventListener&&!!window.removeEventListener&&(0,s.VZ)(),h=e=>"LAYOUT"===e.status&&500||"TIMING"===e.status&&100||null,v=(e,t)=>{if(!t){let t=(0,s.LM)();if(t===e)return _("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!(0,s.F9)())return _("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}},E=(e,t)=>{let n=0,i=0,a=0,o=0,r=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,s)=>{let l;let d=t.fileName.split(".")[0];l=e[s],d!==l?.image_signature&&(l=e.find(e=>d===e?.image_signature)),void 0===l?r+=1:l.is_promoted||l.recommendation_reason?.reason==="PROMOTED_PIN"||l?.promoter?.length?a+=1:null!==l.story_pin_data_id&&void 0!==l.story_pin_data_id?n+=1:l?.videos?.video_list?i+=1:o+=1}),{storyPinCount:n,videoCount:i,adCount:a,imageCount:o,unknownCount:r}},w=(e,t)=>{let n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)};function T({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:n,includeVideos:f=!1,includeSections:T,isPlaceholderGrid:L,stopwatchSetVisuallyCompleteResult:P,stopwatchContext:I,isAuth:A}){let y=(0,u.E)(),R=y?.getId(),C=y?.setVisuallyCompleteResult,N=({imageTimings:e})=>{P&&P(),C&&C({imageTimings:e}),(0,m.cB)(e)},[b,S]=(0,i.useState)({status:"DISABLED"}),O=(0,a.F)();(0,i.useEffect)(()=>{C||P?S({status:"LAYOUT",failedCount:0,numOfItemsChecked:0}):S({status:"DISABLED"})},[R,C,P]),(0,i.useEffect)(()=>{if("DISABLED"!==b.status&&(0,d.ZP)(`GridVisuallyCompleteProfiler_${b.status}`),_("new status",b),"LAYOUT"===b.status){let e=w("scroll",()=>{(0,d.ZP)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[b.status]),(0,p.Z)(()=>{if(!C&&!y&&!P&&!I)return;let i="",a="",d=()=>{},u=e=>{y?y.abort(e):I?.abort()};if(y){let{getMetricId:e}=y,t=e();a=t.surface,i=(0,o.KJ)(t),d=y.addBinaryAnnotation}else a="stopwatch",i=`${a}_${I?.name}`,I?.addBinaryAnnotation&&(d=I?.addBinaryAnnotation);let p=(0,s.cQ)(n,f,T);if(L&&!p.length){_("bypassing PWT run due to skeleton pin grid");return}switch(b.status){case"LAYOUT":{let t=v(b.numOfItemsChecked,e);t.complete?S({status:"TIMING",failedCount:0,pinElements:p}):500*b.failedCount>6e4?((0,l.A9)(`images.${i}.visuallyComplete.maxLayoutAttempt`),u("visuallyComplete_layoutTimeout"),S({status:"DISABLED"})):S({...b,failedCount:b.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{let e=(0,c.Cg)(),n=b.pinElements.length,o=[],s=0,p=0,f=0,h=1/0,v=0;if(b.pinElements.forEach(({element:t,fileName:n})=>{let i=e.find(e=>e.name.endsWith(n));i?i.responseEnd?(o.push(i),(0,r.v5)(t,"green"),"search"===a&&(h=Math.min(h,i.requestStart),v=Math.max(v,i.responseEnd))):(f+=1,(0,r.v5)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(p+=1,(0,r.v5)(t,"red")):(s+=1,(0,r.v5)(t,"greenyellow"))}),s||f)100*b.failedCount>6e4?((0,l.A9)(`images.${i}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:n,incompleteCount:s,noTimingCount:p,noTimingResponseEndCount:f}}),u("visuallyComplete_timingTimeout"),S({status:"DISABLED"})):S({...b,failedCount:b.failedCount+1});else{if(_(`All ${o.length} images are fetched`),t&&t.length){let e=E(t,b.pinElements);if(Object.entries(e).forEach(([e,t])=>{d(e,t,"I16"),(0,m.XJ)(e,t,"I16")}),(0,l.A9)(`${i}.pinTypes`,{tags:e}),"search"===a){let e=v-h;t[0].display_options?.num_columns_requested===0?(0,g.LY)("full_width_story_image_fetch_time_true",e,{sampleRate:1}):(0,g.LY)("full_width_story_image_fetch_time_false",e,{sampleRate:.05})}}if(A&&"search"===a){let{group:e}=O.checkExperiment("dweb_grid_loading_state");e&&(0,g.S0)("webapp.gridVisuallyComplete.loadingState",n,{sampleRate:1,tags:{group:e}})}N({imageTimings:o}),S({status:"DISABLED"}),(0,l.A9)(`images.${i}.visuallyComplete.complete`,{tags:{totalImageCount:n,noTimingCount:p}})}}}},h(b))}},2171:(e,t,n)=>{n.d(t,{N:()=>P,W:()=>L});var i=n(353168),a=n(294726),o=n(348595),r=n(192307),s=n(69118);let l=({constraintMap:e,initialNavTiming:t,annotations:n})=>({...n,...(0,s.jh)("constraint_",e),...(0,s.jh)("mark_",(0,i.gQ)()),...(0,s.jh)("browser_",{...t?(0,s.D3)(t):{},...(0,s.rX)()})});var d=n(914495);let u=(e,t,n)=>[...e.map(e=>(0,d.Z)(e,n)).filter(Boolean),...t];var c=n(326081),m=n(317683),p=n(415787);let g=e=>e<=2500?"Good":e>2500&&e<=4e3?"Needs Improvement":"Poor",_=({eventPrefix:e,endTime:t,tags:n,resourceArr:i,resourceType:a="allResources"})=>{let o=i.length;if(o>0&&"object"==typeof i[0]&&!Array.isArray(i[0])){let r=[...i].sort((e,t)=>e.fetchStart-t.fetchStart),s=[...i].sort((e,t)=>e.responseEnd-t.responseEnd),l=1,d=t/5,u=0;for(;l<=5;){let t=0;for(;u<=o-1&&r[u].fetchStart<=d*l;)u+=1,t+=1;(0,p.S0)(`${e}.tags.${a}.fetchStartInterval${l}of5`,t,{sampleRate:.2,tags:n}),(0,p.S0)(`${e}.${a}.fetchStartInterval${l}of5`,t,{sampleRate:.2}),l+=1}let c={zeroPercentInFlight:r[0].fetchStart,twentyFivePercentInFlight:r[Math.floor(o/4)].fetchStart,fiftyPercentInFlight:r[2*Math.floor(o/4)].fetchStart,seventyFivePercentInFlight:r[3*Math.floor(o/4)].fetchStart,hundredPercentInFlight:r[o-1].fetchStart,twentyFivePercentComplete:s[Math.floor(o/4)].responseEnd,fiftyPercentComplete:s[2*Math.floor(o/4)].responseEnd,seventyFivePercentComplete:s[3*Math.floor(o/4)].responseEnd,hundredPercentComplete:s[o-1].responseEnd};for(let t in c)c[t]&&((0,p.LY)(`${e}.tags.${a}.${t}`,c[t],{sampleRate:.2,tags:n}),(0,p.LY)(`${e}.${a}.${t}`,c[t],{sampleRate:.2}))}},f=({annotateExperiments:e,endTime:t,entries:n,metricId:i,pwtStaticContext:a})=>{let o=`${(0,m.Z)(a)}.${i.surface}`,r=[o];e&&e.forEach(e=>{let t=a.getExperimentGroup(e)||"null";r.push(`${o}.${e}.${t}`)});let s={lcpTimingBucket:g((0,c.Bn)())||"unknown",isAuthenticated:a.isAuthenticated,navigationType:i.navigationType},l=Array.from(n.filter(e=>"number"==typeof e.encodedBodySize&&e.encodedBodySize>=1e4&&e.responseEnd<=t)),d=[],u=[],p=[],f=[],h=[];l.forEach(e=>{"img"===e.initiatorType?d.push(e):"css"===e.initiatorType?u.push(e):"script"===e.initiatorType?p.push(e):"xmlhttprequest"===e.initiatorType?f.push(e):"link"===e.initiatorType&&e.name.includes("i.pinimg.com")&&h.push(e)}),r.forEach(e=>{_({eventPrefix:e,endTime:t,tags:s,resourceArr:l}),_({eventPrefix:e,endTime:t,tags:s,resourceArr:d,resourceType:"image"}),_({eventPrefix:e,endTime:t,tags:s,resourceArr:u,resourceType:"css"}),_({eventPrefix:e,endTime:t,tags:s,resourceArr:p,resourceType:"scripts"}),_({eventPrefix:e,endTime:t,tags:s,resourceArr:f,resourceType:"xhr"}),_({eventPrefix:e,endTime:t,tags:s,resourceArr:h,resourceType:"preloadedImage"})})};var h=n(147921),v=n(202953);let E=({startTime:e,responseEnd:t},n)=>e>n.endTime||!!t&&t<n.startTime,w=({startTime:e,endTime:t},n)=>e>n.endTime||!!t&&t<n.startTime,T=({type:e,annotateExperiments:t,annotations:n,binaryAnnotations:s,constraintMap:d,endTime:c,imageTimings:m,isV4Logger:p,metricId:g,pwtStaticContext:_,startTime:T,traceId:L,spans:P})=>{let I;let A=(0,v.Cg)();"initial_app_load"===g.navigationType&&(I=(0,o.Z)());let y=m.map(({name:e})=>e),R=A.map(e=>(0,r.p)(e,y)).filter(({timing:e})=>!E(e,{startTime:T,endTime:c})),C=((0,i.E3)()||[]).map(e=>({name:e.name,id:(0,h.Z)(),parentId:L,startTime:e.startTime||T,endTime:e.endTime,annotationMap:{},binaryAnnotationMap:{}})).filter(e=>!w(e,{startTime:T,endTime:c}));return("board"===g.surface||"pin_closeup"===g.surface)&&f({annotateExperiments:t,endTime:c,entries:A,metricId:g,pwtStaticContext:_}),{traceId:L,startTime:T,endTime:c,spans:u(R,C,L).concat(P),annotationMap:l({constraintMap:d,initialNavTiming:I,annotations:n}),binaryAnnotationMap:(0,a.rA)({type:e,annotateExperiments:t,binaryAnnotations:s,entries:A,isV4Logger:p,metricId:g,performanceResources:R,pwtEndTime:c,pwtStaticContext:_})}},L=({annotateExperiments:e,annotations:t,binaryAnnotations:n,constraintMap:i,endTime:a,imageTimings:o,isV4Logger:r=!1,metricId:s,pwtStaticContext:l,startTime:d,traceId:u,spans:c})=>({type:"COMPLETE",...T({type:"COMPLETE",annotateExperiments:e,annotations:t,binaryAnnotations:n,constraintMap:i,endTime:a,imageTimings:o,isV4Logger:r,metricId:s,pwtStaticContext:l,startTime:d,traceId:u,spans:c})}),P=({reason:e,annotateExperiments:t,annotations:n,binaryAnnotations:i,constraintMap:a,endTime:o,imageTimings:r,isV4Logger:s=!1,metricId:l,pwtStaticContext:d,startTime:u,traceId:c,spans:m})=>({type:"ABORT",reason:e,...T({type:"ABORT",annotateExperiments:t,annotations:n,binaryAnnotations:i,constraintMap:a,endTime:o,imageTimings:r,isV4Logger:s,metricId:l,pwtStaticContext:d,startTime:u,traceId:c,spans:m})})},317683:(e,t,n)=>{n.d(t,{Z:()=>i});let i=e=>{let{deviceType:t,isBot:n,isSocialBot:i}=e;return`coreWebVitalsLite.v1.${i&&"socialBot"||n&&"bot"||"nonbot"}.${t}`}},636506:(e,t,n)=>{let i,a,o;n.d(t,{JG:()=>O,XJ:()=>b,ZP:()=>H,Ly:()=>N,ep:()=>M,l7:()=>S,Lg:()=>$,cB:()=>D});var r=n(2171),s=n(201930),l=n(920301),d=n(983272),u=n(836686);let c=()=>{let e=(0,u.b)(),t=window.innerHeight,n=window.innerWidth,i=Math.abs(window.innerHeight-t),a=window.innerHeight!==t,o=window.innerWidth!==n;window.removeEventListener("resize",c),("phone"!==e.deviceType||(o||!a||!(i<=150))&&(a||o))&&("desktop"!==e.deviceType||a||o)&&(O("windowResized"),window.removeEventListener("resize",c))};var m=n(334287);let p={name:"STERLING_ADSEDIT_MAIN_PAGELOAD",id:204,constraints:["NavigationCompletev4","editFlowRendered","createFlowRendered"]};var g=n(917977),_=n(493651);let f=[{handler:"www/pin/[id].js",config:{mWeb:{unauth:{initialPageLoad:{name:"PIN_PAGE_INTERACTIVE",id:113,constraints:["NavigationCompletev4","PinPageMainImageRendered"]},clientNavigation:{name:"client_route_push_unauth_pin",id:null,constraints:["NavigationCompletev4","PinPageMainImageRendered"]}},auth:{initialPageLoad:{name:"initial_page_load_auth_pin",id:null,constraints:["NavigationCompletev4","PinPageMainImageRendered"],segments:{product_detail_page:"PRODUCT_DETAILS_INTERACTIVE",product_detail_page_plus:"PRODUCT_DETAILS_PLUS_INTERACTIVE"},annotateExperiments:["auth_mweb_graphql_pin_page"]},clientNavigation:{name:"PIN_CLOSEUP_DETAILS",id:13,constraints:["NavigationCompletev4","PinPageMainImageRendered"],segments:{story_pin:"STORY_PIN_CLOSEUP",product_detail_page:"PRODUCT_DETAILS_RENDER",product_detail_page_plus:"PRODUCT_DETAILS_PLUS_RENDER"},annotateExperiments:["auth_mweb_graphql_pin_page"]}}},dWeb:{unauth:{initialPageLoad:{name:"PIN_PAGE_INTERACTIVE",id:113,constraints:["NavigationCompletev4","PinPageMainImageRendered"]},clientNavigation:{name:"client_route_push_unauth_pin",id:null,constraints:["NavigationCompletev4","PinPageMainImageRendered"]}},auth:{initialPageLoad:{name:"initial_page_load_auth_pin",id:null,constraints:["NavigationCompletev4","image","resource","button"],segments:{product_detail_page:"PRODUCT_DETAILS_INTERACTIVE",product_detail_page_plus:"PRODUCT_DETAILS_PLUS_INTERACTIVE"}},clientNavigation:{name:"PIN_CLOSEUP_DETAILS",id:13,constraints:["NavigationCompletev4","button","video","description","shopButton","thumbnailsLoaded","image","resource"],segments:{story_pin:"STORY_PIN_CLOSEUP",product_detail_page:"PRODUCT_DETAILS_RENDER",product_detail_page_plus:"PRODUCT_DETAILS_PLUS_RENDER"}}}}}},{handler:"www/index.js",config:{unified:{auth:{initialPageLoad:{name:"HOME_FEED_PINTERACTIVE",id:19,constraints:["NavigationCompletev4","VisuallyComplete"]},clientNavigation:{name:"HOME_FEED_RENDER",id:2,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/search/[scope].js",config:{unified:{auth:{clientNavigation:{name:"SEARCH_FEED_RENDER",id:3,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/search.js",config:{mWeb:{auth:{clientNavigation:{name:"SEARCH_TAB_RENDER",id:25,constraints:["NavigationCompletev4","RenderSearchLandingPageBubbles"]}}}}},{handler:"www/[username]/[slug].js",config:{unified:{unauth:{initialPageLoad:{name:"BOARD_PAGE_INTERACTIVE",id:114,constraints:["NavigationCompletev4","VisuallyComplete"]}},auth:{initialPageLoad:{name:"BOARD_PAGE_INTERACTIVE",id:114,constraints:["NavigationCompletev4","VisuallyComplete"]}}},dWeb:{auth:{clientNavigation:{name:"client_route_push_auth_board",id:null,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/ideas/[interest]/[id].js",config:{unified:{unauth:{initialPageLoad:{name:"TOPIC_PAGE_INTERACTIVE",id:119,constraints:["NavigationCompletev4","idea_module_loaded"]}}}}},{handler:"www/business/hub.js",config:{dWeb:{auth:{initialPageLoad:{name:"BIZHUB_PINTERACTIVE",id:607,constraints:["NavigationCompletev4"]},clientNavigation:{name:"BIZHUB_PAGE_RENDER",id:608,constraints:["NavigationCompletev4"]}}}}},{handler:"www/pin/_id_/visual-search.js",config:{dWeb:{auth:{clientNavigation:{name:"VISUAL_SEARCH_PAGE_RENDER",id:44,constraints:["NavigationCompletev4","visualSearchMainPinImageRender"]}}}}},{handler:"www/[username].js",config:{unified:{auth:{initialPageLoad:{name:"OTHER_PROFILE",id:15,constraints:["NavigationCompletev4","VisuallyComplete"],segments:{self_profile:"SELF_PROFILE_PAGE_LOAD"}},clientNavigation:{name:"OTHER_PROFILE",id:15,constraints:["NavigationCompletev4","VisuallyComplete"],segments:{self_profile:"SELF_PROFILE",own_profile:"OWN_PROFILE",own_profile_no_pins:"OWN_PROFILE_NO_PINS",other_profile_no_pins:"OTHER_PROFILE_NO_PINS"}}},unauth:{initialPageLoad:{name:"USER_PAGE_INTERACTIVE",id:115,constraints:["NavigationCompletev4","VisuallyComplete"]}}}}},{handler:"www/business/catalogs/_catalog_id_/data-sources_js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_DATA_SOURCES_USER_NAV",id:228,constraints:["NavigationCompletev4"]}}}}},{handler:"www/business/catalogs/_catalog_id_/product-groups_js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_PRODUCT_GROUPS_USER_NAV",id:229,constraints:["NavigationCompletev4"]}}}}},{handler:"www/business/catalogs/_catalog_id_/listings_js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_LISTINGS_USER_NAV",id:230,constraints:["NavigationCompletev4"]}}}}},{handler:"www/business/catalogs/_catalog_id_/products_js",config:{dWeb:{auth:{clientNavigation:{name:"MERCHANT_CATALOGS_LISTINGS_USER_NAV",id:230,constraints:["NavigationCompletev4"]}}}}},{handler:"sterling/advertiser/[advertiserId]/ads/create.js",config:{dWeb:{auth:{initialPageLoad:p}}}},{handler:"sterling/advertiser/[advertiserId]/ads/duplicate.js",config:{dWeb:{auth:{initialPageLoad:p}}}},{handler:"sterling/advertiser/[advertiserId]/ads/review_draft.js",config:{dWeb:{auth:{initialPageLoad:p}}}},{handler:"sterling/advertiser/[advertiserId]/ads/edit_draft.js",config:{dWeb:{auth:{initialPageLoad:p}}}},{handler:"sterling/advertiser/[advertiserId]/ads/edit.js",config:{dWeb:{auth:{initialPageLoad:p}}}},{handler:"sterling/advertiser/[advertiserId]/reporting/[entityType].js",config:{dWeb:{auth:{initialPageLoad:{name:"STERLING_REPORTING_DETAILS_PAGELOAD",id:218,constraints:["NavigationCompletev4","reportingTableRendered","reportingMetricsGraphDataFetched"]}}}}},{handler:"sterling/index.js",config:{dWeb:{auth:{initialPageLoad:{name:"STERLING_REPORTING_OVERVIEW_PAGELOAD",id:219,constraints:["NavigationCompletev4","activeCampaignsTableRendered","accountActivityRendered"]}}}}}];function h({isAuthenticated:e,isInitialPageLoad:t,isMobile:n}){let i=(0,_.H)(),a=f.find(e=>i===e.handler),o=a?.config,r=o?.unified;if(r||(r=n?o?.mWeb:o?.dWeb),r){let n=e?r.auth:r.unauth;if(n){if(t&&n.initialPageLoad)return(0,g.qu)("Found isInitialPageLoad config"),(0,g.qu)(n.initialPageLoad),n.initialPageLoad;if(!t&&n.clientNavigation)return(0,g.qu)("Found clientNavigation config"),(0,g.qu)(n.clientNavigation),n.clientNavigation}}return(0,g.qu)("No config found :("),null}let v=({isAuthenticated:e,isInitialPageLoad:t,isMobile:n,segment:i})=>{let a=h({isAuthenticated:e,isInitialPageLoad:t,isMobile:n});return a?.segments?.[i]??null},E=[],w={},T=[],L={},P=[],I=!0,A=0,y=0,R=0;function C(){(0,g.qu)("Reset PWT configs"),E=[],T=[],w={},i=null,y=0,R=0,L={}}function N(){return i?i.name:""}function b(e,t,n){let i;if((0,m.Z)()){switch(n){case"BOOL":i={type:"BOOL",value:"boolean"==typeof t?t:null};break;case"STRING":i={type:"STRING",value:"string"==typeof t?t:null};break;case"I16":case"I32":case"I64":i={type:n,value:"number"==typeof t?t:null};break;default:(0,g.qu)("Invalid binary annotation type");return}if(null===i.value){(0,g.qu)("Invalid binary annotation value");return}L={...L,[e]:i},(0,g.qu)(`Add binary annotation: { ${e}: ${i.value} }`)}}function S(e){if((0,m.Z)()){if(i){let t=E.indexOf(e);if(t>-1){if(E.splice(t,1),(0,g.qu)(`Remove constraint: ${e}`),(0,g.qu)(`Remaining constraints: [ ${E.join(", ")} ]`),0===E.length){let e=y-R;(0,g.fv)(i.name),(0,g.$v)({eventName:i.name,value:e}),(0,g.$v)({eventName:"complete",value:e,tags:{handler:(0,_.H)()}});let t=(0,u.b)(),n={type:"surface",surface:i.name,id:i.id,navigationType:a,isAuthenticated:t.isAuthenticated},s=(0,r.W)({annotateExperiments:["web_perf_logger_v4",...i.annotateExperiments||[]],annotations:{},binaryAnnotations:L,constraintMap:w,endTime:y,imageTimings:P,isV4Logger:!0,metricId:n,pwtStaticContext:t,startTime:R,traceId:o,spans:[]});(0,g.qu)(`All constraints complete. ${i.name} PWT completed at ${Math.floor(y)}ms. PWT duration: ${Math.floor(e)}ms`),(0,g.qu)("Result:",s),(0,l.Z)({metricId:n,pwtStaticContext:t,result:s,isV4Logger:!0}),C()}}else(0,g.jn)("constraint_completed_not_in_PWT_constraint_list")}else(0,g.jn)("remove_constraint_while_no_PWT_in_progress"),T.push(e)}}function O(e){if((0,m.Z)()&&i){(0,g.T0)(e,i.name),E.forEach(e=>{(0,g.yi)(e,i?.name)});let t=(0,u.b)(),n={type:"surface",surface:i.name,id:i.id,navigationType:a,isAuthenticated:t.isAuthenticated},s=(0,r.N)({reason:e,annotateExperiments:["web_perf_logger_v4",...i.annotateExperiments||[]],annotations:{},binaryAnnotations:L,constraintMap:w,endTime:performance.now(),imageTimings:P,isV4Logger:!0,metricId:n,pwtStaticContext:t,startTime:R,traceId:o,spans:[]});(0,g.qu)(`Abort ${i.name} PWT. Abort reason: ${e}`),(0,g.qu)("Result:",s),(0,l.Z)({metricId:n,pwtStaticContext:t,result:s,isV4Logger:!0}),C()}}function D(e){(0,m.Z)()&&i&&E.includes("VisuallyComplete")&&((0,g.qu)("Set visually complete result"),(0,g.qu)("Image resource timings: ",e),0===(P=e).length&&O("visuallyComplete_noImages"))}function $(e){if((0,m.Z)()){if(i){(0,g.T0)("segmentChange",i.name);let{isAuthenticated:t,deviceType:n}=(0,u.b)(),a=v({isAuthenticated:t,isInitialPageLoad:I,isMobile:"phone"===n,segment:e});if(!a){(0,g.jn)("segment_action_name_not_found");return}i.name=a,(0,g.qu)(`Set segment to ${e}. PWT action name: ${a}`),(0,g.sd)(i.name)}else(0,g.jn)("set_segment_while_no_PWT_in_progress")}}function M(e,t){if((0,m.Z)()){if(A+=1,i&&O("routeChange"),"POP"===e&&!1===I);else{let{isAuthenticated:n,deviceType:r,serverData:l}=(0,u.b)();if(i=h({isAuthenticated:n,isInitialPageLoad:I,isMobile:"phone"===r})){if(R=t,I)a="initial_app_load";else switch(e){case"PUSH":a="client_route_push";break;case"REPLACE":a="client_route_replace"}(0,g.sd)(i.name),(0,g.qu)(`Start ${i.name} PWT`),i?.constraints.forEach(e=>{!function(e){if((0,m.Z)()){if(i){(0,g.DM)(e,i.name);let t=T.indexOf(e);t>-1?(T.splice(t,1),(0,g.qu)(`Add constraint: ${e}. Found constraint in completed constraint buffer`)):E.includes(e)||(E.push(e),(0,g.qu)(`Add constraint: ${e}`))}else(0,g.jn)("add_constraint_while_no_PWT_in_progress")}}(e)}),o=(0,s.Vd)()||(0,s.ZP)("initial_app_load"===a,l?.trace_id)}1===A&&(I=!1)}}}function H({requestContext:e,traceLoggerData:t,isForcedReload:n}){try{if(!(0,m.Z)())return;d.Z.onSessionPause(O),window.addEventListener("resize",c),(0,u.Z)({requestContext:e,traceLoggerData:t,isForcedReload:n});let a=new PerformanceObserver(e=>{e&&e.getEntries&&e.getEntries().forEach(e=>{if(e&&e.name&&!e.name.startsWith("--")&&e.name.includes("constraint")){var t;!function(e,t){if(!(0,m.Z)())return;let n=E.indexOf(e);n>-1&&(y<t&&(y=t),w[e]=t,(0,g.eR)(E[n],i?.name),(0,g.$v)({eventName:`${i?.name}.constraint.${e}`,value:t}),(0,g.$v)({eventName:`constraint.${e}`,value:t,tags:{handler:(0,_.H)()}}),(0,g.qu)(`Complete constraint: ${e} at ${Math.floor(t)}ms`),S(e))}((t=e.name).includes("constraint_")?t.split("_")[1]||"":t,e.startTime)}})});a.observe&&a.observe({type:"mark",buffered:!0}),window.addEventListener("beforeunload",()=>{a.disconnect()})}catch(e){(0,g.jn)(e)}}},438973:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(667294);let a=(e,t)=>{let n=(0,i.useRef)(()=>{});(0,i.useEffect)(()=>{n.current=e},[e]),(0,i.useEffect)(()=>{if(null===t)return()=>{};let e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/86132-1e99488cc3f5001d.mjs.map