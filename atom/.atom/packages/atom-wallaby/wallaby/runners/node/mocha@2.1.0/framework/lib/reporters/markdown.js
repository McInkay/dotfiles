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
function Markdown(e){function t(e){return Array(r).join("#")+" "+e}function i(e,t){var n=t,s=SUITE_PREFIX+e.title;return t=t[s]=t[s]||{suite:e},e.suites.forEach(function(e){i(e,t)}),n}function n(e,t){++t;var i,s="";for(var r in e)"suite"!=r&&(r!==SUITE_PREFIX&&(i=" - ["+r.substring(1)+"]",i+="(#"+utils.slug(e[r].suite.fullTitle())+")\n",s+=Array(t).join("  ")+i),s+=n(e[r],t));return s}function s(e){var t=i(e,{});return n(t,0)}Base.call(this,e);var r=(this.stats,0),a="";s(e.suite),e.on("suite",function(e){++r;var i=utils.slug(e.fullTitle());a+='<a name="'+i+'"></a>\n',a+=t(e.title)+"\n"}),e.on("suite end",function(e){--r}),e.on("pass",function(e){var t=utils.clean(e.fn.toString());a+=e.title+".\n",a+="\n```js\n",a+=t+"\n",a+="```\n\n"}),e.on("end",function(){process.stdout.write("# TOC\n"),process.stdout.write(s(e.suite)),process.stdout.write(a)})}var Base=require("./base"),utils=require("../utils"),SUITE_PREFIX="$";exports=module.exports=Markdown;