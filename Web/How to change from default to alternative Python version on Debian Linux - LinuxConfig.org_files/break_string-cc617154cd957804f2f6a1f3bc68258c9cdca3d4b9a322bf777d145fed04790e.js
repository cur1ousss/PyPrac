(function(){var t="<wbr>&#8203;",r=function(t){this.string=t};r.prototype.break=function(r){var a=[],h=this.string;if(r){r=r.toLowerCase().split(/\s+/).reverse();for(var s=0;r.length>0;){var e=r.pop();if(e!==h.substr(s,e.length).toLowerCase())break;s+=e.length,a.push(s)}}var n=[],i=h[0];n.push(i);for(var p=1;p<h.length;p++){var o=h[p];i.match(/[^0-9]/)&&o.match(/[0-9]/)?n.push(t):p>1&&i.match(/[A-Z]/)&&o.match(/[a-z]/)?(n.pop(),n.push(t),n.push(i)):i.match(/[^A-Za-z0-9]/)&&o.match(/[a-zA-Z0-9]/)?n.push(t):a.indexOf(p)>-1&&n.push(t),n.push(o),i=o}return n.join("")},this.BreakString=r}).call(this);
//# sourceMappingURL=/assets/break_string-cc617154cd957804f2f6a1f3bc68258c9cdca3d4b9a322bf777d145fed04790e.js.map