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
var Suite=require("../suite"),Test=require("../test");module.exports=function(e){function t(e,n){var s;for(var r in e)if("function"==typeof e[r]){var a=e[r];switch(r){case"before":i[0].beforeAll(a);break;case"after":i[0].afterAll(a);break;case"beforeEach":i[0].beforeEach(a);break;case"afterEach":i[0].afterEach(a);break;default:var o=new Test(r,a);o.file=n,i[0].addTest(o)}}else s=Suite.create(i[0],r),i.unshift(s),t(e[r]),i.shift()}var i=[e];e.on("require",t)};