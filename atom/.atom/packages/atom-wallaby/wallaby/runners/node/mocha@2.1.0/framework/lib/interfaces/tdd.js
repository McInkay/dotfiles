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
var Suite=require("../suite"),Test=require("../test"),escapeRe=require("escape-string-regexp"),utils=require("../utils");module.exports=function(e){var t=[e];e.on("pre-require",function(e,i,n){e.setup=function(e,i){t[0].beforeEach(e,i)},e.teardown=function(e,i){t[0].afterEach(e,i)},e.suiteSetup=function(e,i){t[0].beforeAll(e,i)},e.suiteTeardown=function(e,i){t[0].afterAll(e,i)},e.suite=function(e,n){var s=Suite.create(t[0],e);return s.file=i,t.unshift(s),n.call(s),t.shift(),s},e.suite.skip=function(e,i){var n=Suite.create(t[0],e);n.pending=!0,t.unshift(n),i.call(n),t.shift()},e.suite.only=function(t,i){var s=e.suite(t,i);n.grep(s.fullTitle())},e.test=function(e,n){var s=t[0];s.pending&&(n=null);var r=new Test(e,n);return r.file=i,s.addTest(r),r},e.test.only=function(t,i){var s=e.test(t,i),r="^"+escapeRe(s.fullTitle())+"$";n.grep(new RegExp(r))},e.test.skip=function(t){e.test(t)}})};