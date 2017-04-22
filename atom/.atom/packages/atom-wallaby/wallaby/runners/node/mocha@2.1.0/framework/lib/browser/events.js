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
function isArray(e){return"[object Array]"=={}.toString.call(e)}function EventEmitter(){}exports.EventEmitter=EventEmitter,EventEmitter.prototype.on=function(e,t){return this.$events||(this.$events={}),this.$events[e]?isArray(this.$events[e])?this.$events[e].push(t):this.$events[e]=[this.$events[e],t]:this.$events[e]=t,this},EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prototype.once=function(e,t){function i(){n.removeListener(e,i),t.apply(this,arguments)}var n=this;return i.listener=t,this.on(e,i),this},EventEmitter.prototype.removeListener=function(e,t){if(this.$events&&this.$events[e]){var i=this.$events[e];if(isArray(i)){for(var n=-1,s=0,r=i.length;r>s;s++)if(i[s]===t||i[s].listener&&i[s].listener===t){n=s;break}if(0>n)return this;i.splice(n,1),i.length||delete this.$events[e]}else(i===t||i.listener&&i.listener===t)&&delete this.$events[e]}return this},EventEmitter.prototype.removeAllListeners=function(e){return void 0===e?(this.$events={},this):(this.$events&&this.$events[e]&&(this.$events[e]=null),this)},EventEmitter.prototype.listeners=function(e){return this.$events||(this.$events={}),this.$events[e]||(this.$events[e]=[]),isArray(this.$events[e])||(this.$events[e]=[this.$events[e]]),this.$events[e]},EventEmitter.prototype.emit=function(e){if(!this.$events)return!1;var t=this.$events[e];if(!t)return!1;var i=[].slice.call(arguments,1);if("function"==typeof t)t.apply(this,i);else{if(!isArray(t))return!1;for(var n=t.slice(),s=0,r=n.length;r>s;s++)n[s].apply(this,i)}return!0};