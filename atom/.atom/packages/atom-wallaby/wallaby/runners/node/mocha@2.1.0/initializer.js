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
var Mocha=global.wallaby._testFrameworkPath?require(global.wallaby._testFrameworkPath):require("./framework/index.js"),mocha,tracer=global.$_$tracer;tracer.start(function(){var e,t=tracer.initialSpecId(),i=[],n=global.$_$session,s=function(){return n!==global.$_$session};mocha.reporter(function(n){if(n.grepTotal=function(){return!0},n.runTest=function(e){if(!s()){var t=this.test,i=this;this.asyncOnly&&(t.asyncOnly=!0);try{t.on("error",function(e){i.fail(t,e)}),tracer.specSyncStart();try{t.run(e)}finally{tracer.specSyncEnd()}}catch(n){e(n)}}},n._grep={test:function(e){if(!tracer.hasSpecFilter())return!0;var t=i.slice(1);return t.push(e.substr(t.join(" ").length+1)),tracer.specFilter(t)}},tracer.needToNotifySingleTestRun()){var r=n.hook;n.hook=function(e,t){if(!s()){if("afterEach"!==e)return Function.prototype.apply.call(r,this,arguments);var i=arguments,a=this;tracer.notifySingleTestAfterEach(function(){Function.prototype.apply.call(r,a,i)}),n.hook=r}}}n.on("start",function(){s()||tracer.started({total:n.total})}),n.on("end",function(){s()||tracer.complete()}),n.on("suite",function(t){s()||(i.push(t.title),e=t)}),n.on("suite end",function(){s()||i.pop()}),n.on("test",function(e){s()||(e._id=++t,e._failures=[],e._time=(new tracer._Date).getTime(),tracer.specStart(e._id,e.title))}),n.on("fail",function(e,t){s()||("hook"===e.type||e._finished?(e._hook="hook"===e.type&&e.title||!0,e._failures=[t],n.emit("test end",e)):e._failures.push(t))}),n.on("test end",function(e){if(!s()){e._finished=!0;var t=tracer.specEnd(),n=e.pending===!0,r={id:e._id,timeRange:t,name:e.title,suite:i.slice(1),success:"passed"===e.state,skipped:n,time:n?0:(new tracer._Date).getTime()-e._time,log:[],hook:e._hook};if(!r.success&&!r.skipped)for(var a=e._failures,o=0;o<a.length;o++){var l=a[o];r.log.push(tracer.setAssertionData(l,{message:l.message,stack:l.stack}))}r.log.length||delete r.log,tracer.result(r)}})}),mocha.run(function(){})}),module.exports={init:function(e){return mocha=new Mocha,mocha.files=e,mocha}};