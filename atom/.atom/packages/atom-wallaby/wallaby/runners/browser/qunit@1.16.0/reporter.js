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
!function(e){var t,i=e.$_$tracer,n=i.initialSpecId();QUnit.begin(function(e){i.started({total:e.totalTests})}),QUnit.done(function(){i.complete()}),QUnit.testStart(function(e){var s=QUnit.config;if(i.hasSpecFilter()){var r=[e.name.replace(/\s\s*$/,"")];if(e.module&&r.unshift(e.module),!i.specFilter(r)){for(;s.queue.length;){var a=s.queue.shift();if(a&&~a.toString().indexOf(".finish();"))return}return}}s.current.run=function(){var e;i.needToNotifySingleTestRun()&&s.queue.unshift(function(){i.notifySingleTestAfterEach(function(){s.current&&QUnit.start()}),QUnit.stop()}),s.current=this,delete s.current.stack,this.async&&QUnit.stop(),this.callbackStarted=(new Date).getTime();try{i.specSyncStart(),e=this.callback.call(this.testEnvironment,this.assert),this.resolvePromise(e)}catch(t){this.pushFailure(t.message,t.stack),s.blocking&&s.current&&QUnit.start()}finally{i.specSyncEnd()}},t={success:!0,errors:[],id:++n,start:(new i._Date).getTime()},i.specStart(t.id,e.name)}),QUnit.log(function(e){if(!e.result){var n="",s=e.expected,r=e.actual;e.message&&(n+=e.message),t.success=!1,e.showDiff=!0;var a=i.setAssertionData(e,{message:n,stack:e.source});delete e.showDiff,t.errors.push(a),(!e.message||"undefined"!=typeof e.expected&&a.expected)&&(a.message+=(e.message?"\n":"")+"Expected: "+i._inspect(s,3)+"\nActual: "+i._inspect(r,3))}}),QUnit.testDone(function(e){var n=i.specEnd(),s={id:t.id,timeRange:n,name:e.name,suite:e.module&&[e.module]||[],success:t.success,skipped:!1,time:(new i._Date).getTime()-t.start,log:t.errors||[]};s.log.length||delete s.log,i.result(s)})}(window);