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
function Landing(e){function t(){var e=Array(n).join("-");return"  "+color("runway",e)}Base.call(this,e);var i=this,n=(this.stats,.75*Base.window.width|0),s=e.total,r=process.stdout,a=color("plane","✈"),o=-1,l=0;e.on("start",function(){r.write("\n\n\n  "),cursor.hide()}),e.on("test end",function(e){var i=-1==o?n*++l/s|0:o;"failed"==e.state&&(a=color("plane crash","✈"),o=i),r.write("["+(n+1)+"D[2A"),r.write(t()),r.write("\n  "),r.write(color("runway",Array(i).join("⋅"))),r.write(a),r.write(color("runway",Array(n-i).join("⋅")+"\n")),r.write(t()),r.write("[0m")}),e.on("end",function(){cursor.show(),console.log(),i.epilogue()})}var Base=require("./base"),cursor=Base.cursor,color=Base.color;exports=module.exports=Landing,Base.colors.plane=0,Base.colors["plane crash"]=31,Base.colors.runway=90,Landing.prototype.__proto__=Base.prototype;