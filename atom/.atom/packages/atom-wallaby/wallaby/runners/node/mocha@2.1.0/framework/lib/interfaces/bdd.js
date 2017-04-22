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
var Suite=require("../suite"),Test=require("../test"),utils=require("../utils"),escapeRe=require("escape-string-regexp");module.exports=function(e){var t=[e];e.on("pre-require",function(e,i,n){e.before=function(e,i){t[0].beforeAll(e,i)},e.after=function(e,i){t[0].afterAll(e,i)},e.beforeEach=function(e,i){t[0].beforeEach(e,i)},e.afterEach=function(e,i){t[0].afterEach(e,i)},e.describe=e.context=function(e,n){var s=Suite.create(t[0],e);return s.file=i,t.unshift(s),n.call(s),t.shift(),s},e.xdescribe=e.xcontext=e.describe.skip=function(e,i){var n=Suite.create(t[0],e);n.pending=!0,t.unshift(n),i.call(n),t.shift()},e.describe.only=function(t,i){var s=e.describe(t,i);return n.grep(s.fullTitle()),s},e.it=e.specify=function(e,n){var s=t[0];s.pending&&(n=null);var r=new Test(e,n);return r.file=i,s.addTest(r),r},e.it.only=function(t,i){var s=e.it(t,i),r="^"+escapeRe(s.fullTitle())+"$";return n.grep(new RegExp(r)),s},e.xit=e.xspecify=e.it.skip=function(t){e.it(t)}})};