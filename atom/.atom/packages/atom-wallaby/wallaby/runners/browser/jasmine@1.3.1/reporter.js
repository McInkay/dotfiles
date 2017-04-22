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
var JasmineReporter=function(e){var t=e.initialSpecId();this.reportRunnerStarting=function(t){e.started({total:t.specs().length})},this.reportRunnerResults=function(){e.complete()},this.reportSpecStarting=function(i){i.id=++t,e.specStart(i.id,i.description),i.results_.time=(new e._Date).getTime()},this.reportSpecResults=function(t){for(var i=e.specEnd(),n={id:t.id,timeRange:i,name:t.description,suite:[],success:0===t.results_.failedCount,skipped:t.results_.skipped,time:t.results_.skipped?0:(new e._Date).getTime()-t.results_.time,log:[]},s=t.suite;s;)n.suite.unshift(s.description),s=s.parentSuite;if(!n.success&&!n.skipped)for(var r=t.results_.items_,a=0;a<r.length;a++){var o=r[a];o.passed_||(o.showDiff=o.showDiff||"toEqual"===o.matcherName,n.log.push(e.setAssertionData(o,{message:o.message,stack:o.trace&&o.trace.stack?o.trace.stack:e._undefined})))}n.log.length||delete n.log,e.result(n)};var i=jasmine.getEnv();this.specFilter=function(t){if(!(i.exclusive_<=t.exclusive_))return!1;if(!e.hasSpecFilter())return!0;for(var n=[t.description],s=t.suite;s;)n.unshift(s.description),s=s.parentSuite;return e.specFilter(n)}};