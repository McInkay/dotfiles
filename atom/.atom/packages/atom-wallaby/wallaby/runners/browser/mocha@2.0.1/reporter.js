/*
 * Wallaby.js - v1.0.249
 * http://wallabyjs.com
 * Copyright (c) 2014-2016 Wallaby.js - All Rights Reserved.
 *
 * This source code file is a part of Wallaby.js and is a proprietary (closed source) software.

 * IMPORTANT:
 * Wallaby.js is a tool made by software developers for software developers with passion and love for what we do.
 * Pirating the tool is not only illegal and just morally wrong,
 * it is also unfair to other fellow programmers who are using it legally,
 * and very harmful for the tool and its future.
 */
!function(e){var t,i=e.$_$tracer,n=i.initialSpecId(),s=[];mocha.setup({ui:"bdd",reporter:function(e){if(e.grepTotal=function(){return!0},e.runTest=function(e){var t=this.test,n=this;this.asyncOnly&&(t.asyncOnly=!0);try{t.on("error",function(e){n.fail(t,e)}),i.specSyncStart();try{t.run(e)}finally{i.specSyncEnd()}}catch(s){e(s)}},e._grep={test:function(e){if(!i.hasSpecFilter())return!0;var t=s.slice(1);return t.push(e.substr(t.join(" ").length+1)),i.specFilter(t)}},i.needToNotifySingleTestRun()){var r=e.hook;e.hook=function(t,n){if("afterEach"!==t)return Function.prototype.apply.call(r,this,arguments);var s=arguments,a=this;i.notifySingleTestAfterEach(function(){Function.prototype.apply.call(r,a,s)}),e.hook=r}}e.on("start",function(){i.started({total:e.total})}),e.on("end",function(){i.complete()}),e.on("suite",function(e){s.push(e.title),t=e}),e.on("suite end",function(){s.pop()}),e.on("test",function(e){e._id=++n,e._failures=[],e._time=(new i._Date).getTime(),i.specStart(e._id,e.title)}),e.on("fail",function(t,i){"hook"===t.type||t._finished?(t._hook="hook"===t.type&&t.title||!0,t._failures=[i],e.emit("test end",t)):t._failures.push(i)}),e.on("test end",function(e){e._finished=!0;var t=i.specEnd(),n=e.pending===!0,r={id:e._id,timeRange:t,name:e.title,suite:s.slice(1),success:"passed"===e.state,skipped:n,time:n?0:(new i._Date).getTime()-e._time,log:[],hook:e._hook};if(!r.success&&!r.skipped)for(var a=e._failures,o=0;o<a.length;o++){var l=a[o],u=l.uncaught&&l.message,c={message:u?l.message.substr(0,l.message.lastIndexOf(" (")):l.message,stack:l.stack||u&&l.message.substring(l.message.lastIndexOf("(")+1,l.message.length-1)};i.setAssertionData(l,c),r.log.push(c)}r.log.length||delete r.log,i.result(r)})}})}(window);