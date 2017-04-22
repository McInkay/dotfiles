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
var JasmineReporter=function(e){var t=e.initialSpecId(),i=[];this.jasmineStarted=function(t){e.started({total:t.totalSpecsDefined})},this.jasmineDone=function(){e.complete()},this.suiteStarted=function(e){i.push(e.description)},this.suiteDone=function(){i.pop()},this.specStarted=function(i){i.id=++t,e.specStart(i.id,i.description),i._time=(new e._Date).getTime()},this.specDone=function(t){var n=e.specEnd(),s="disabled"===t.status||"pending"===t.status,r={id:t.id,timeRange:n,name:t.description,suite:i.slice(),success:"passed"===t.status,skipped:s,time:s?0:(new e._Date).getTime()-t._time,log:[]};if(!r.success&&!r.skipped)for(var a=t.failedExpectations,o=0;o<a.length;o++){var l=a[o];l.showDiff=l.showDiff||"toEqual"===l.matcherName,r.log.push(e.setAssertionData(l,{message:l.message,stack:l.stack}))}r.log.length||delete r.log,e.result(r)}},jasmineEnv=jasmine.getEnv(),tracer=window.$_$tracer,adapter=new JasmineReporter(tracer);jasmineEnv.addReporter(adapter);