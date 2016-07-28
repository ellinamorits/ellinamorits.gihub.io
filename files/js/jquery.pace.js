(function(){var e,t,n,r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y,b,w,E,S,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q,R,U,z,W,X,V,$,J=[].slice,K={}.hasOwnProperty,Q=function(e,t){function r(){this.constructor=e}for(var n in t){if(K.call(t,n))e[n]=t[n]}r.prototype=t.prototype;e.prototype=new r;e.__super__=t.prototype;return e},G=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++){if(t in this&&this[t]===e)return t}return-1};b={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:true,restartOnPushState:true,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:true,ignoreURLs:[]}};k=function(){var e;return(e=typeof performance!=="undefined"&&performance!==null?typeof performance.now==="function"?performance.now():void 0:void 0)!=null?e:+(new Date)};A=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;y=window.cancelAnimationFrame||window.mozCancelAnimationFrame;if(A==null){A=function(e){return setTimeout(e,50)};y=function(e){return clearTimeout(e)}}M=function(e){var t,n;t=k();n=function(){var r;r=k()-t;if(r>=33){t=k();return e(r,function(){return A(n)})}else{return setTimeout(n,33-r)}};return n()};O=function(){var e,t,n;n=arguments[0],t=arguments[1],e=3<=arguments.length?J.call(arguments,2):[];if(typeof n[t]==="function"){return n[t].apply(n,e)}else{return n[t]}};w=function(){var e,t,n,r,i,s,o;t=arguments[0],r=2<=arguments.length?J.call(arguments,1):[];for(s=0,o=r.length;s<o;s++){n=r[s];if(n){for(e in n){if(!K.call(n,e))continue;i=n[e];if(t[e]!=null&&typeof t[e]==="object"&&i!=null&&typeof i==="object"){w(t[e],i)}else{t[e]=i}}}}return t};v=function(e){var t,n,r,i,s;n=t=0;for(i=0,s=e.length;i<s;i++){r=e[i];n+=Math.abs(r);t++}return n/t};S=function(e,t){var n,r,i;if(e==null){e="options"}if(t==null){t=true}i=document.querySelector("[data-pace-"+e+"]");if(!i){return}n=i.getAttribute("data-pace-"+e);if(!t){return n}try{return JSON.parse(n)}catch(s){r=s;return typeof console!=="undefined"&&console!==null?console.error("Error parsing inline pace options",r):void 0}};o=function(){function e(){}e.prototype.on=function(e,t,n,r){var i;if(r==null){r=false}if(this.bindings==null){this.bindings={}}if((i=this.bindings)[e]==null){i[e]=[]}return this.bindings[e].push({handler:t,ctx:n,once:r})};e.prototype.once=function(e,t,n){return this.on(e,t,n,true)};e.prototype.off=function(e,t){var n,r,i;if(((r=this.bindings)!=null?r[e]:void 0)==null){return}if(t==null){return delete this.bindings[e]}else{n=0;i=[];while(n<this.bindings[e].length){if(this.bindings[e][n].handler===t){i.push(this.bindings[e].splice(n,1))}else{i.push(n++)}}return i}};e.prototype.trigger=function(){var e,t,n,r,i,s,o,u,a;n=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];if((o=this.bindings)!=null?o[n]:void 0){i=0;a=[];while(i<this.bindings[n].length){u=this.bindings[n][i],r=u.handler,t=u.ctx,s=u.once;r.apply(t!=null?t:this,e);if(s){a.push(this.bindings[n].splice(i,1))}else{a.push(i++)}}return a}};return e}();if(window.Pace==null){window.Pace={}}w(Pace,o.prototype);L=Pace.options=w({},b,window.paceOptions,S());X=["ajax","document","eventLag","elements"];for(R=0,z=X.length;R<z;R++){H=X[R];if(L[H]===true){L[H]=b[H]}}a=function(e){function t(){V=t.__super__.constructor.apply(this,arguments);return V}Q(t,e);return t}(Error);t=function(){function e(){this.progress=0}e.prototype.getElement=function(){var e;if(this.el==null){e=document.querySelector(L.target);if(!e){throw new a}this.el=document.createElement("div");this.el.className="pace pace-active";document.body.className=document.body.className.replace(/pace-done/g,"");document.body.className+=" pace-running";this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>';if(e.firstChild!=null){e.insertBefore(this.el,e.firstChild)}else{e.appendChild(this.el)}}return this.el};e.prototype.finish=function(){var e;e=this.getElement();e.className=e.className.replace("pace-active","");e.className+=" pace-inactive";document.body.className=document.body.className.replace("pace-running","");return document.body.className+=" pace-done"};e.prototype.update=function(e){this.progress=e;return this.render()};e.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(e){a=e}return this.el=void 0};e.prototype.render=function(){var e,t;if(document.querySelector(L.target)==null){return false}e=this.getElement();e.children[0].style.width=""+this.progress+"%";if(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0){e.children[0].setAttribute("data-progress-text",""+(this.progress|0)+"%");if(this.progress>=100){t="99"}else{t=this.progress<10?"0":"";t+=this.progress|0}e.children[0].setAttribute("data-progress",""+t)}return this.lastRenderedProgress=this.progress};e.prototype.done=function(){return this.progress>=100};return e}();u=function(){function e(){this.bindings={}}e.prototype.trigger=function(e,t){var n,r,i,s,o;if(this.bindings[e]!=null){s=this.bindings[e];o=[];for(r=0,i=s.length;r<i;r++){n=s[r];o.push(n.call(this,t))}return o}};e.prototype.on=function(e,t){var n;if((n=this.bindings)[e]==null){n[e]=[]}return this.bindings[e].push(t)};return e}();q=window.XMLHttpRequest;I=window.XDomainRequest;F=window.WebSocket;E=function(e,t){var n,r,i,s;s=[];for(r in t.prototype){try{i=t.prototype[r];if(e[r]==null&&typeof i!=="function"){s.push(e[r]=i)}else{s.push(void 0)}}catch(o){n=o}}return s};N=[];Pace.ignore=function(){var e,t,n;t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];N.unshift("ignore");n=t.apply(null,e);N.shift();return n};Pace.track=function(){var e,t,n;t=arguments[0],e=2<=arguments.length?J.call(arguments,1):[];N.unshift("track");n=t.apply(null,e);N.shift();return n};P=function(e){var t;if(e==null){e="GET"}if(N[0]==="track"){return"force"}if(!N.length&&L.ajax){if(e==="socket"&&L.ajax.trackWebSockets){return true}else if(t=e.toUpperCase(),G.call(L.ajax.trackMethods,t)>=0){return true}}return false};f=function(e){function t(){var e,n=this;t.__super__.constructor.apply(this,arguments);e=function(e){var t;t=e.open;return e.open=function(r,i,s){if(P(r)){n.trigger("request",{type:r,url:i,request:e})}return t.apply(e,arguments)}};window.XMLHttpRequest=function(t){var n;n=new q(t);e(n);return n};try{E(window.XMLHttpRequest,q)}catch(r){}if(I!=null){window.XDomainRequest=function(){var t;t=new I;e(t);return t};try{E(window.XDomainRequest,I)}catch(r){}}if(F!=null&&L.ajax.trackWebSockets){window.WebSocket=function(e,t){var r;if(t!=null){r=new F(e,t)}else{r=new F(e)}if(P("socket")){n.trigger("request",{type:"socket",url:e,protocols:t,request:r})}return r};try{E(window.WebSocket,F)}catch(r){}}}Q(t,e);return t}(u);U=null;x=function(){if(U==null){U=new f}return U};D=function(e){var t,n,r,i;i=L.ajax.ignoreURLs;for(n=0,r=i.length;n<r;n++){t=i[n];if(typeof t==="string"){if(e.indexOf(t)!==-1){return true}}else{if(t.test(e)){return true}}}return false};x().on("request",function(t){var n,r,i,s,o;s=t.type,i=t.request,o=t.url;if(D(o)){return}if(!Pace.running&&(L.restartOnRequestAfter!==false||P(s)==="force")){r=arguments;n=L.restartOnRequestAfter||0;if(typeof n==="boolean"){n=0}return setTimeout(function(){var t,n,o,u,a,f;if(s==="socket"){t=i.readyState<2}else{t=0<(u=i.readyState)&&u<4}if(t){Pace.restart();a=Pace.sources;f=[];for(n=0,o=a.length;n<o;n++){H=a[n];if(H instanceof e){H.watch.apply(H,r);break}else{f.push(void 0)}}return f}},n)}});e=function(){function e(){var e=this;this.elements=[];x().on("request",function(){return e.watch.apply(e,arguments)})}e.prototype.watch=function(e){var t,n,r,i;r=e.type,t=e.request,i=e.url;if(D(i)){return}if(r==="socket"){n=new h(t)}else{n=new p(t)}return this.elements.push(n)};return e}();p=function(){function e(e){var t,n,r,i,s,o,u=this;this.progress=0;if(window.ProgressEvent!=null){n=null;e.addEventListener("progress",function(e){if(e.lengthComputable){return u.progress=100*e.loaded/e.total}else{return u.progress=u.progress+(100-u.progress)/2}});o=["load","abort","timeout","error"];for(r=0,i=o.length;r<i;r++){t=o[r];e.addEventListener(t,function(){return u.progress=100})}}else{s=e.onreadystatechange;e.onreadystatechange=function(){var t;if((t=e.readyState)===0||t===4){u.progress=100}else if(e.readyState===3){u.progress=50}return typeof s==="function"?s.apply(null,arguments):void 0}}}return e}();h=function(){function e(e){var t,n,r,i,s=this;this.progress=0;i=["error","open"];for(n=0,r=i.length;n<r;n++){t=i[n];e.addEventListener(t,function(){return s.progress=100})}}return e}();r=function(){function e(e){var t,n,r,s;if(e==null){e={}}this.elements=[];if(e.selectors==null){e.selectors=[]}s=e.selectors;for(n=0,r=s.length;n<r;n++){t=s[n];this.elements.push(new i(t))}}return e}();i=function(){function e(e){this.selector=e;this.progress=0;this.check()}e.prototype.check=function(){var e=this;if(document.querySelector(this.selector)){return this.done()}else{return setTimeout(function(){return e.check()},L.elements.checkInterval)}};e.prototype.done=function(){return this.progress=100};return e}();n=function(){function e(){var e,t,n=this;this.progress=(t=this.states[document.readyState])!=null?t:100;e=document.onreadystatechange;document.onreadystatechange=function(){if(n.states[document.readyState]!=null){n.progress=n.states[document.readyState]}return typeof e==="function"?e.apply(null,arguments):void 0}}e.prototype.states={loading:0,interactive:50,complete:100};return e}();s=function(){function e(){var e,t,n,r,i,s=this;this.progress=0;e=0;i=[];r=0;n=k();t=setInterval(function(){var o;o=k()-n-50;n=k();i.push(o);if(i.length>L.eventLag.sampleCount){i.shift()}e=v(i);if(++r>=L.eventLag.minSamples&&e<L.eventLag.lagThreshold){s.progress=100;return clearInterval(t)}else{return s.progress=100*(3/(e+3))}},50)}return e}();c=function(){function e(e){this.source=e;this.last=this.sinceLastUpdate=0;this.rate=L.initialRate;this.catchup=0;this.progress=this.lastProgress=0;if(this.source!=null){this.progress=O(this.source,"progress")}}e.prototype.tick=function(e,t){var n;if(t==null){t=O(this.source,"progress")}if(t>=100){this.done=true}if(t===this.last){this.sinceLastUpdate+=e}else{if(this.sinceLastUpdate){this.rate=(t-this.last)/this.sinceLastUpdate}this.catchup=(t-this.progress)/L.catchupTime;this.sinceLastUpdate=0;this.last=t}if(t>this.progress){this.progress+=this.catchup*e}n=1-Math.pow(this.progress/100,L.easeFactor);this.progress+=n*this.rate*e;this.progress=Math.min(this.lastProgress+L.maxProgressPerFrame,this.progress);this.progress=Math.max(0,this.progress);this.progress=Math.min(100,this.progress);this.lastProgress=this.progress;return this.progress};return e}();B=null;_=null;m=null;j=null;d=null;g=null;Pace.running=false;T=function(){if(L.restartOnPushState){return Pace.restart()}};if(window.history.pushState!=null){W=window.history.pushState;window.history.pushState=function(){T();return W.apply(window.history,arguments)}}if(window.history.replaceState!=null){$=window.history.replaceState;window.history.replaceState=function(){T();return $.apply(window.history,arguments)}}l={ajax:e,elements:r,document:n,eventLag:s};(C=function(){var e,n,r,i,s,o,u,a;Pace.sources=B=[];o=["ajax","elements","document","eventLag"];for(n=0,i=o.length;n<i;n++){e=o[n];if(L[e]!==false){B.push(new l[e](L[e]))}}a=(u=L.extraSources)!=null?u:[];for(r=0,s=a.length;r<s;r++){H=a[r];B.push(new H(L))}Pace.bar=m=new t;_=[];return j=new c})();Pace.stop=function(){Pace.trigger("stop");Pace.running=false;m.destroy();g=true;if(d!=null){if(typeof y==="function"){y(d)}d=null}return C()};Pace.restart=function(){Pace.trigger("restart");Pace.stop();return Pace.start()};Pace.go=function(){var e;Pace.running=true;m.render();e=k();g=false;return d=M(function(t,n){var r,i,s,o,u,a,f,l,h,p,d,v,y,b,w,E;l=100-m.progress;i=d=0;s=true;for(a=v=0,b=B.length;v<b;a=++v){H=B[a];p=_[a]!=null?_[a]:_[a]=[];u=(E=H.elements)!=null?E:[H];for(f=y=0,w=u.length;y<w;f=++y){o=u[f];h=p[f]!=null?p[f]:p[f]=new c(o);s&=h.done;if(h.done){continue}i++;d+=h.tick(t)}}r=d/i;m.update(j.tick(t,r));if(m.done()||s||g){m.update(100);Pace.trigger("done");return setTimeout(function(){m.finish();Pace.running=false;return Pace.trigger("hide")},Math.max(L.ghostTime,Math.max(L.minTime-(k()-e),0)))}else{return n()}})};Pace.start=function(e){w(L,e);Pace.running=true;try{m.render()}catch(t){a=t}if(!document.querySelector(".pace")){return setTimeout(Pace.start,50)}else{Pace.trigger("start");return Pace.go()}};if(typeof define==="function"&&define.amd){define(function(){return Pace})}else if(typeof exports==="object"){module.exports=Pace}else{if(L.startOnPageLoad){Pace.start()}}}).call(this)
