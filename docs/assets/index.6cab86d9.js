var Tu=Object.defineProperty;var gl=Object.getOwnPropertySymbols;var Au=Object.prototype.hasOwnProperty,Cu=Object.prototype.propertyIsEnumerable;var Eo=(r,t,e)=>t in r?Tu(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e,xl=(r,t)=>{for(var e in t||(t={}))Au.call(t,e)&&Eo(r,e,t[e]);if(gl)for(var e of gl(t))Cu.call(t,e)&&Eo(r,e,t[e]);return r};var Jt=(r,t,e)=>(Eo(r,typeof t!="symbol"?t+"":t,e),e),_l=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var st=(r,t,e)=>(_l(r,t,"read from private field"),e?e.call(r):t.get(r)),$t=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},oe=(r,t,e,n)=>(_l(r,t,"write to private field"),n?n.call(r,e):t.set(r,e),e);const Lu=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};Lu();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ba="139",Ru=0,vl=1,Pu=2,hh=1,uh=2,Ds=3,Ns=0,Ze=1,os=2,dh=1,Wn=0,ns=1,yl=2,wl=3,Ml=4,Du=5,ji=100,Iu=101,ku=102,bl=103,Sl=104,zu=200,Fu=201,Nu=202,Bu=203,fh=204,ph=205,Ou=206,Uu=207,Hu=208,Vu=209,Gu=210,Wu=0,qu=1,Xu=2,_a=3,ju=4,Zu=5,Ju=6,Yu=7,lo=0,$u=1,Ku=2,Sn=0,Qu=1,td=2,ed=3,nd=4,id=5,mh=300,as=301,ls=302,va=303,ya=304,co=306,wa=1e3,Xe=1001,Ma=1002,me=1003,El=1004,Tl=1005,Ce=1006,sd=1007,ho=1008,vi=1009,rd=1010,od=1011,Bs=1012,ad=1013,Wr=1014,oi=1015,is=1016,ld=1017,cd=1018,ss=1020,hd=1021,ud=1022,je=1023,dd=1024,fd=1025,gi=1026,cs=1027,pd=1028,md=1029,gd=1030,xd=1031,_d=1033,To=33776,Ao=33777,Co=33778,Lo=33779,Al=35840,Cl=35841,Ll=35842,Rl=35843,vd=36196,Pl=37492,Dl=37496,Il=37808,kl=37809,zl=37810,Fl=37811,Nl=37812,Bl=37813,Ol=37814,Ul=37815,Hl=37816,Vl=37817,Gl=37818,Wl=37819,ql=37820,Xl=37821,jl=36492,yd=2200,wd=2201,Md=2202,Jr=2300,Yr=2301,Ro=2302,Ji=2400,Yi=2401,$r=2402,Oa=2500,gh=2501,bd=0,Tn=3e3,Qt=3001,Sd=3200,Ed=3201,fs=0,Td=1,_n="srgb",ai="srgb-linear",Po=7680,Ad=519,Os=35044,Kr=35048,Zl="300 es",ba=1035;class wi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const _e=[];for(let r=0;r<256;r++)_e[r]=(r<16?"0":"")+r.toString(16);const Do=Math.PI/180,Sa=180/Math.PI;function ln(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_e[r&255]+_e[r>>8&255]+_e[r>>16&255]+_e[r>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]).toLowerCase()}function Me(r,t,e){return Math.max(t,Math.min(e,r))}function Cd(r,t){return(r%t+t)%t}function Io(r,t,e){return(1-e)*r+e*t}function Jl(r){return(r&r-1)===0&&r!==0}function Ea(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}class Y{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Y.prototype.isVector2=!0;class ve{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],m=i[0],p=i[3],x=i[6],y=i[1],E=i[4],S=i[7],v=i[2],L=i[5],P=i[8];return s[0]=o*m+a*y+l*v,s[3]=o*p+a*E+l*L,s[6]=o*x+a*S+l*P,s[1]=c*m+h*y+u*v,s[4]=c*p+h*E+u*L,s[7]=c*x+h*S+u*P,s[2]=d*m+f*y+g*v,s[5]=d*p+f*E+g*L,s[8]=d*x+f*S+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=d*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=f*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*o+n*c,i[6]=e*a+n*h,i[1]=-n*s+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}ve.prototype.isMatrix3=!0;function xh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>65535)return!0;return!1}function Us(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ko={[_n]:{[ai]:xi},[ai]:{[_n]:qr}},He={legacyMode:!0,get workingColorSpace(){return ai},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(ko[t]&&ko[t][e]!==void 0){const n=ko[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},he={r:0,g:0,b:0},Ve={h:0,s:0,l:0},ar={h:0,s:0,l:0};function zo(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function lr(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class mt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=_n){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,He.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ai){return this.r=t,this.g=e,this.b=n,He.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ai){if(t=Cd(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=zo(o,s,t+1/3),this.g=zo(o,s,t),this.b=zo(o,s,t-1/3)}return He.toWorkingColorSpace(this,i),this}setStyle(t,e=_n){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,He.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,He.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,He.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,He.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=_n){const n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=xi(t.r),this.g=xi(t.g),this.b=xi(t.b),this}copyLinearToSRGB(t){return this.r=qr(t.r),this.g=qr(t.g),this.b=qr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=_n){return He.fromWorkingColorSpace(lr(this,he),t),Me(he.r*255,0,255)<<16^Me(he.g*255,0,255)<<8^Me(he.b*255,0,255)<<0}getHexString(t=_n){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ai){He.fromWorkingColorSpace(lr(this,he),e);const n=he.r,i=he.g,s=he.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ai){return He.fromWorkingColorSpace(lr(this,he),e),t.r=he.r,t.g=he.g,t.b=he.b,t}getStyle(t=_n){return He.fromWorkingColorSpace(lr(this,he),t),t!==_n?`color(${t} ${he.r} ${he.g} ${he.b})`:`rgb(${he.r*255|0},${he.g*255|0},${he.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Ve),Ve.h+=t,Ve.s+=e,Ve.l+=n,this.setHSL(Ve.h,Ve.s,Ve.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ve),t.getHSL(ar);const n=Io(Ve.h,ar.h,e),i=Io(Ve.s,ar.s,e),s=Io(Ve.l,ar.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}mt.NAMES=_h;mt.prototype.isColor=!0;mt.prototype.r=1;mt.prototype.g=1;mt.prototype.b=1;let Ci;class Mi{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ci===void 0&&(Ci=Us("canvas")),Ci.width=t.width,Ci.height=t.height;const n=Ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=Us("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(xi(e[n]/255)*255):e[n]=xi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class vh{constructor(t=null){this.uuid=ln(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Fo(i[o].image)):s.push(Fo(i[o]))}else s=Fo(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Fo(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?Mi.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}vh.prototype.isSource=!0;let Ld=0;class xe extends wi{constructor(t=xe.DEFAULT_IMAGE,e=xe.DEFAULT_MAPPING,n=Xe,i=Xe,s=Ce,o=ho,a=je,l=vi,c=1,h=Tn){super();Object.defineProperty(this,"id",{value:Ld++}),this.uuid=ln(),this.name="",this.source=new vh(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case wa:t.x=t.x-Math.floor(t.x);break;case Xe:t.x=t.x<0?0:1;break;case Ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case wa:t.y=t.y-Math.floor(t.y);break;case Xe:t.y=t.y<0?0:1;break;case Ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}xe.DEFAULT_IMAGE=null;xe.DEFAULT_MAPPING=mh;xe.prototype.isTexture=!0;class jt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],m=l[2],p=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(f+1)/2,v=(x+1)/2,L=(h+d)/4,P=(u+m)/4,N=(g+p)/4;return E>S&&E>v?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=L/n,s=P/n):S>v?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=L/i,s=N/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=P/s,i=N/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-m)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}jt.prototype.isVector4=!0;class Ie extends wi{constructor(t,e,n={}){super();this.width=t,this.height=e,this.depth=1,this.scissor=new jt(0,0,t,e),this.scissorTest=!1,this.viewport=new jt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new xe(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ce,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Ie.prototype.isWebGLRenderTarget=!0;class uo extends xe{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=me,this.minFilter=me,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}uo.prototype.isDataArrayTexture=!0;class Rd extends Ie{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new uo(null,t,e,n),this.texture.isRenderTargetTexture=!0}}Rd.prototype.isWebGLArrayRenderTarget=!0;class Ua extends xe{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=me,this.minFilter=me,this.wrapR=Xe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}Ua.prototype.isData3DTexture=!0;class Pd extends Ie{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new Ua(null,t,e,n),this.texture.isRenderTargetTexture=!0}}Pd.prototype.isWebGL3DRenderTarget=!0;class Dd extends Ie{constructor(t,e,n,i={}){super(t,e,i);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}Dd.prototype.isWebGLMultipleRenderTargets=!0;class Le{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==d||c!==f||h!==g){let p=1-a;const x=l*d+c*f+h*g+u*m,y=x>=0?1:-1,E=1-x*x;if(E>Number.EPSILON){const v=Math.sqrt(E),L=Math.atan2(v,x*y);p=Math.sin(p*L)/v,a=Math.sin(a*L)/v}const S=a*y;if(l=l*p+d*S,c=c*p+f*S,h=h*p+g*S,u=u*p+m*S,p===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Le.prototype.isQuaternion=!0;class T{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(Yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-s*i,u=l*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return No.copy(this).projectOnVector(t),this.sub(No)}reflect(t){return this.sub(No.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}T.prototype.isVector3=!0;const No=new T,Yl=new Le;class $e{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)$n.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint($n)}else n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox),Bo.applyMatrix4(t.matrixWorld),this.union(Bo);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,$n),$n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),cr.subVectors(this.max,Ms),Li.subVectors(t.a,Ms),Ri.subVectors(t.b,Ms),Pi.subVectors(t.c,Ms),Rn.subVectors(Ri,Li),Pn.subVectors(Pi,Ri),Kn.subVectors(Li,Pi);let e=[0,-Rn.z,Rn.y,0,-Pn.z,Pn.y,0,-Kn.z,Kn.y,Rn.z,0,-Rn.x,Pn.z,0,-Pn.x,Kn.z,0,-Kn.x,-Rn.y,Rn.x,0,-Pn.y,Pn.x,0,-Kn.y,Kn.x,0];return!Oo(e,Li,Ri,Pi,cr)||(e=[1,0,0,0,1,0,0,0,1],!Oo(e,Li,Ri,Pi,cr))?!1:(hr.crossVectors(Rn,Pn),e=[hr.x,hr.y,hr.z],Oo(e,Li,Ri,Pi,cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return $n.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize($n).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}$e.prototype.isBox3=!0;const un=[new T,new T,new T,new T,new T,new T,new T,new T],$n=new T,Bo=new $e,Li=new T,Ri=new T,Pi=new T,Rn=new T,Pn=new T,Kn=new T,Ms=new T,cr=new T,hr=new T,Qn=new T;function Oo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Qn.fromArray(r,s);const a=i.x*Math.abs(Qn.x)+i.y*Math.abs(Qn.y)+i.z*Math.abs(Qn.z),l=t.dot(Qn),c=e.dot(Qn),h=n.dot(Qn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Id=new $e,$l=new T,ur=new T,Uo=new T;class ps{constructor(t=new T,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Id.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){Uo.subVectors(t,this.center);const e=Uo.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(Uo.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?ur.set(0,0,1).multiplyScalar(t.radius):ur.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint($l.copy(t.center).add(ur)),this.expandByPoint($l.copy(t.center).sub(ur)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const dn=new T,Ho=new T,dr=new T,Dn=new T,Vo=new T,fr=new T,Go=new T;class ms{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.direction).multiplyScalar(e).add(this.origin),dn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ho.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub(Ho);const s=t.distanceTo(e)*.5,o=-this.direction.dot(dr),a=Dn.dot(this.direction),l=-Dn.dot(dr),c=Dn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(dr).multiplyScalar(d).add(Ho),f}intersectSphere(t,e){dn.subVectors(t.center,this.origin);const n=dn.dot(this.direction),i=dn.dot(dn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,n,i,s){Vo.subVectors(e,t),fr.subVectors(n,t),Go.crossVectors(Vo,fr);let o=this.direction.dot(Go),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);const l=a*this.direction.dot(fr.crossVectors(Dn,fr));if(l<0)return null;const c=a*this.direction.dot(Vo.cross(Dn));if(c<0||l+c>o)return null;const h=-a*Dn.dot(Go);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,m,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),o=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-m*c,e[9]=-a*l,e[2]=m-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d+m*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=m+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d-m*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-m*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kd,t,zd)}lookAt(t,e,n){const i=this.elements;return Re.subVectors(t,e),Re.lengthSq()===0&&(Re.z=1),Re.normalize(),In.crossVectors(n,Re),In.lengthSq()===0&&(Math.abs(n.z)===1?Re.x+=1e-4:Re.z+=1e-4,Re.normalize(),In.crossVectors(n,Re)),In.normalize(),pr.crossVectors(Re,In),i[0]=In.x,i[4]=pr.x,i[8]=Re.x,i[1]=In.y,i[5]=pr.y,i[9]=Re.y,i[2]=In.z,i[6]=pr.z,i[10]=Re.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],m=n[6],p=n[10],x=n[14],y=n[3],E=n[7],S=n[11],v=n[15],L=i[0],P=i[4],N=i[8],et=i[12],z=i[1],_=i[5],C=i[9],q=i[13],R=i[2],B=i[6],F=i[10],O=i[14],D=i[3],X=i[7],J=i[11],K=i[15];return s[0]=o*L+a*z+l*R+c*D,s[4]=o*P+a*_+l*B+c*X,s[8]=o*N+a*C+l*F+c*J,s[12]=o*et+a*q+l*O+c*K,s[1]=h*L+u*z+d*R+f*D,s[5]=h*P+u*_+d*B+f*X,s[9]=h*N+u*C+d*F+f*J,s[13]=h*et+u*q+d*O+f*K,s[2]=g*L+m*z+p*R+x*D,s[6]=g*P+m*_+p*B+x*X,s[10]=g*N+m*C+p*F+x*J,s[14]=g*et+m*q+p*O+x*K,s[3]=y*L+E*z+S*R+v*D,s[7]=y*P+E*_+S*B+v*X,s[11]=y*N+E*C+S*F+v*J,s[15]=y*et+E*q+S*O+v*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],m=t[7],p=t[11],x=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+m*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+x*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],m=t[13],p=t[14],x=t[15],y=u*p*c-m*d*c+m*l*f-a*p*f-u*l*x+a*d*x,E=g*d*c-h*p*c-g*l*f+o*p*f+h*l*x-o*d*x,S=h*m*c-g*u*c+g*a*f-o*m*f-h*a*x+o*u*x,v=g*u*l-h*m*l-g*a*d+o*m*d+h*a*p-o*u*p,L=e*y+n*E+i*S+s*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=y*P,t[1]=(m*d*s-u*p*s-m*i*f+n*p*f+u*i*x-n*d*x)*P,t[2]=(a*p*s-m*l*s+m*i*c-n*p*c-a*i*x+n*l*x)*P,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*P,t[4]=E*P,t[5]=(h*p*s-g*d*s+g*i*f-e*p*f-h*i*x+e*d*x)*P,t[6]=(g*l*s-o*p*s-g*i*c+e*p*c+o*i*x-e*l*x)*P,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*P,t[8]=S*P,t[9]=(g*u*s-h*m*s-g*n*f+e*m*f+h*n*x-e*u*x)*P,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*x+e*a*x)*P,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*P,t[12]=v*P,t[13]=(h*m*i-g*u*i+g*n*d-e*m*d-h*n*p+e*u*p)*P,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*p-e*a*p)*P,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,m=o*h,p=o*u,x=a*u,y=l*c,E=l*h,S=l*u,v=n.x,L=n.y,P=n.z;return i[0]=(1-(m+x))*v,i[1]=(f+S)*v,i[2]=(g-E)*v,i[3]=0,i[4]=(f-S)*L,i[5]=(1-(d+x))*L,i[6]=(p+y)*L,i[7]=0,i[8]=(g+E)*P,i[9]=(p-y)*P,i[10]=(1-(d+m))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Di.set(i[0],i[1],i[2]).length();const o=Di.set(i[4],i[5],i[6]).length(),a=Di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Ge.copy(this);const c=1/s,h=1/o,u=1/a;return Ge.elements[0]*=c,Ge.elements[1]*=c,Ge.elements[2]*=c,Ge.elements[4]*=h,Ge.elements[5]*=h,Ge.elements[6]*=h,Ge.elements[8]*=u,Ge.elements[9]*=u,Ge.elements[10]*=u,e.setFromRotationMatrix(Ge),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),u=(e+t)*l,d=(n+i)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}_t.prototype.isMatrix4=!0;const Di=new T,Ge=new _t,kd=new T(0,0,0),zd=new T(1,1,1),In=new T,pr=new T,Re=new T,Kl=new _t,Ql=new Le;class bi{constructor(t=0,e=0,n=0,i=bi.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Me(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Kl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ql.setFromEuler(this),this.setFromQuaternion(Ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}bi.prototype.isEuler=!0;bi.DefaultOrder="XYZ";bi.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class yh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fd=0;const tc=new T,Ii=new Le,fn=new _t,mr=new T,bs=new T,Nd=new T,Bd=new Le,ec=new T(1,0,0),nc=new T(0,1,0),ic=new T(0,0,1),Od={type:"added"},sc={type:"removed"};class Gt extends wi{constructor(){super();Object.defineProperty(this,"id",{value:Fd++}),this.uuid=ln(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DefaultUp.clone();const t=new T,e=new bi,n=new Le,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new _t},normalMatrix:{value:new ve}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new yh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(ec,t)}rotateY(t){return this.rotateOnAxis(nc,t)}rotateZ(t){return this.rotateOnAxis(ic,t)}translateOnAxis(t,e){return tc.copy(t).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ec,t)}translateY(t){return this.translateOnAxis(nc,t)}translateZ(t){return this.translateOnAxis(ic,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?mr.copy(t):mr.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fn.lookAt(bs,mr,this.up):fn.lookAt(mr,bs,this.up),this.quaternion.setFromRotationMatrix(fn),i&&(fn.extractRotation(i.matrixWorld),Ii.setFromRotationMatrix(fn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Od)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(sc)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(sc)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(fn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bs,Bd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Gt.DefaultUp=new T(0,1,0);Gt.DefaultMatrixAutoUpdate=!0;Gt.prototype.isObject3D=!0;const We=new T,pn=new T,Wo=new T,mn=new T,ki=new T,zi=new T,rc=new T,qo=new T,Xo=new T,jo=new T;class le{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),We.subVectors(t,e),i.cross(We);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){We.subVectors(i,e),pn.subVectors(n,e),Wo.subVectors(t,e);const o=We.dot(We),a=We.dot(pn),l=We.dot(Wo),c=pn.dot(pn),h=pn.dot(Wo),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mn),mn.x>=0&&mn.y>=0&&mn.x+mn.y<=1}static getUV(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,mn),l.set(0,0),l.addScaledVector(s,mn.x),l.addScaledVector(o,mn.y),l.addScaledVector(a,mn.z),l}static isFrontFacing(t,e,n,i){return We.subVectors(n,e),pn.subVectors(t,e),We.cross(pn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return We.subVectors(this.c,this.b),pn.subVectors(this.a,this.b),We.cross(pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return le.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return le.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return le.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return le.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return le.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;ki.subVectors(i,n),zi.subVectors(s,n),qo.subVectors(t,n);const l=ki.dot(qo),c=zi.dot(qo);if(l<=0&&c<=0)return e.copy(n);Xo.subVectors(t,i);const h=ki.dot(Xo),u=zi.dot(Xo);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ki,o);jo.subVectors(t,s);const f=ki.dot(jo),g=zi.dot(jo);if(g>=0&&f<=g)return e.copy(s);const m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(zi,a);const p=h*g-f*u;if(p<=0&&u-h>=0&&f-g>=0)return rc.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(rc,a);const x=1/(p+m+d);return o=m*x,a=d*x,e.copy(n).addScaledVector(ki,o).addScaledVector(zi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Ud=0;class de extends wi{constructor(){super();Object.defineProperty(this,"id",{value:Ud++}),this.uuid=ln(),this.name="",this.type="Material",this.fog=!0,this.blending=ns,this.side=Ns,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=fh,this.blendDst=ph,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Po,this.stencilZFail=Po,this.stencilZPass=Po,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===dh;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ns&&(n.blending=this.blending),this.side!==Ns&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}de.prototype.isMaterial=!0;de.fromType=function(){return null};class yi extends de{constructor(t){super();this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}yi.prototype.isMeshBasicMaterial=!0;const ae=new T,gr=new Y;class ue{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=Os,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new mt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Y),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new T),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new jt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Os&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}ue.prototype.isBufferAttribute=!0;class wh extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Mh extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Hd extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}Hd.prototype.isFloat16BufferAttribute=!0;class se extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vd=0;const ke=new _t,Zo=new Gt,Fi=new T,Pe=new $e,Ss=new $e,fe=new T;class Kt extends wi{constructor(){super();Object.defineProperty(this,"id",{value:Vd++}),this.uuid=ln(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Mh:wh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new ve().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fi).negate(),this.translate(Fi.x,Fi.y,Fi.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $e);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Pe.setFromBufferAttribute(s),this.morphTargetsRelative?(fe.addVectors(this.boundingBox.min,Pe.min),this.boundingBox.expandByPoint(fe),fe.addVectors(this.boundingBox.max,Pe.max),this.boundingBox.expandByPoint(fe)):(this.boundingBox.expandByPoint(Pe.min),this.boundingBox.expandByPoint(Pe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Pe.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Ss.setFromBufferAttribute(a),this.morphTargetsRelative?(fe.addVectors(Pe.min,Ss.min),Pe.expandByPoint(fe),fe.addVectors(Pe.max,Ss.max),Pe.expandByPoint(fe)):(Pe.expandByPoint(Ss.min),Pe.expandByPoint(Ss.max))}Pe.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)fe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(fe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)fe.fromBufferAttribute(a,c),l&&(Fi.fromBufferAttribute(t,c),fe.add(Fi)),i=Math.max(i,n.distanceToSquared(fe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let z=0;z<a;z++)c[z]=new T,h[z]=new T;const u=new T,d=new T,f=new T,g=new Y,m=new Y,p=new Y,x=new T,y=new T;function E(z,_,C){u.fromArray(i,z*3),d.fromArray(i,_*3),f.fromArray(i,C*3),g.fromArray(o,z*2),m.fromArray(o,_*2),p.fromArray(o,C*2),d.sub(u),f.sub(u),m.sub(g),p.sub(g);const q=1/(m.x*p.y-p.x*m.y);!isFinite(q)||(x.copy(d).multiplyScalar(p.y).addScaledVector(f,-m.y).multiplyScalar(q),y.copy(f).multiplyScalar(m.x).addScaledVector(d,-p.x).multiplyScalar(q),c[z].add(x),c[_].add(x),c[C].add(x),h[z].add(y),h[_].add(y),h[C].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let z=0,_=S.length;z<_;++z){const C=S[z],q=C.start,R=C.count;for(let B=q,F=q+R;B<F;B+=3)E(n[B+0],n[B+1],n[B+2])}const v=new T,L=new T,P=new T,N=new T;function et(z){P.fromArray(s,z*3),N.copy(P);const _=c[z];v.copy(_),v.sub(P.multiplyScalar(P.dot(_))).normalize(),L.crossVectors(N,_);const q=L.dot(h[z])<0?-1:1;l[z*4]=v.x,l[z*4+1]=v.y,l[z*4+2]=v.z,l[z*4+3]=q}for(let z=0,_=S.length;z<_;++z){const C=S[z],q=C.start,R=C.count;for(let B=q,F=q+R;B<F;B+=3)et(n[B+0]),et(n[B+1]),et(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),m=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],l=a.array,c=a.itemSize*e,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)fe.fromBufferAttribute(t,e),fe.normalize(),t.setXYZ(e,fe.x,fe.y,fe.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let m=0,p=l.length;m<p;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let x=0;x<h;x++)d[g++]=c[f++]}return new ue(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Kt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.prototype.isBufferGeometry=!0;const oc=new _t,Ni=new ms,Jo=new ps,kn=new T,zn=new T,Fn=new T,Yo=new T,$o=new T,Ko=new T,xr=new T,_r=new T,vr=new T,yr=new Y,wr=new Y,Mr=new Y,Qo=new T,br=new T;class ge extends Gt{constructor(t=new Kt,e=new yi){super();this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(s),t.ray.intersectsSphere(Jo)===!1)||(oc.copy(s).invert(),Ni.copy(t.ray).applyMatrix4(oc),n.boundingBox!==null&&Ni.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,g=n.drawRange;if(a!==null)if(Array.isArray(i))for(let m=0,p=f.length;m<p;m++){const x=f[m],y=i[x.materialIndex],E=Math.max(x.start,g.start),S=Math.min(a.count,Math.min(x.start+x.count,g.start+g.count));for(let v=E,L=S;v<L;v+=3){const P=a.getX(v),N=a.getX(v+1),et=a.getX(v+2);o=Sr(this,y,t,Ni,l,c,h,u,d,P,N,et),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(a.count,g.start+g.count);for(let x=m,y=p;x<y;x+=3){const E=a.getX(x),S=a.getX(x+1),v=a.getX(x+2);o=Sr(this,i,t,Ni,l,c,h,u,d,E,S,v),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let m=0,p=f.length;m<p;m++){const x=f[m],y=i[x.materialIndex],E=Math.max(x.start,g.start),S=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let v=E,L=S;v<L;v+=3){const P=v,N=v+1,et=v+2;o=Sr(this,y,t,Ni,l,c,h,u,d,P,N,et),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const m=Math.max(0,g.start),p=Math.min(l.count,g.start+g.count);for(let x=m,y=p;x<y;x+=3){const E=x,S=x+1,v=x+2;o=Sr(this,i,t,Ni,l,c,h,u,d,E,S,v),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}ge.prototype.isMesh=!0;function Gd(r,t,e,n,i,s,o,a){let l;if(t.side===Ze?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side!==os,a),l===null)return null;br.copy(a),br.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(br);return c<e.near||c>e.far?null:{distance:c,point:br.clone(),object:r}}function Sr(r,t,e,n,i,s,o,a,l,c,h,u){kn.fromBufferAttribute(i,c),zn.fromBufferAttribute(i,h),Fn.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){xr.set(0,0,0),_r.set(0,0,0),vr.set(0,0,0);for(let g=0,m=s.length;g<m;g++){const p=d[g],x=s[g];p!==0&&(Yo.fromBufferAttribute(x,c),$o.fromBufferAttribute(x,h),Ko.fromBufferAttribute(x,u),o?(xr.addScaledVector(Yo,p),_r.addScaledVector($o,p),vr.addScaledVector(Ko,p)):(xr.addScaledVector(Yo.sub(kn),p),_r.addScaledVector($o.sub(zn),p),vr.addScaledVector(Ko.sub(Fn),p)))}kn.add(xr),zn.add(_r),Fn.add(vr)}r.isSkinnedMesh&&(r.boneTransform(c,kn),r.boneTransform(h,zn),r.boneTransform(u,Fn));const f=Gd(r,t,e,n,kn,zn,Fn,Qo);if(f){a&&(yr.fromBufferAttribute(a,c),wr.fromBufferAttribute(a,h),Mr.fromBufferAttribute(a,u),f.uv=le.getUV(Qo,kn,zn,Fn,yr,wr,Mr,new Y)),l&&(yr.fromBufferAttribute(l,c),wr.fromBufferAttribute(l,h),Mr.fromBufferAttribute(l,u),f.uv2=le.getUV(Qo,kn,zn,Fn,yr,wr,Mr,new Y));const g={a:c,b:h,c:u,normal:new T,materialIndex:0};le.getNormal(kn,zn,Fn,g.normal),f.face=g}return f}class Ks extends Kt{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new se(c,3)),this.setAttribute("normal",new se(h,3)),this.setAttribute("uv",new se(u,2));function g(m,p,x,y,E,S,v,L,P,N,et){const z=S/P,_=v/N,C=S/2,q=v/2,R=L/2,B=P+1,F=N+1;let O=0,D=0;const X=new T;for(let J=0;J<F;J++){const K=J*_-q;for(let Q=0;Q<B;Q++){const ht=Q*z-C;X[m]=ht*y,X[p]=K*E,X[x]=R,c.push(X.x,X.y,X.z),X[m]=0,X[p]=0,X[x]=L>0?1:-1,h.push(X.x,X.y,X.z),u.push(Q/P),u.push(1-J/N),O+=1}}for(let J=0;J<N;J++)for(let K=0;K<P;K++){const Q=d+K+B*J,ht=d+K+B*(J+1),Nt=d+(K+1)+B*(J+1),St=d+(K+1)+B*J;l.push(Q,ht,St),l.push(ht,Nt,St),D+=6}a.addGroup(f,D,et),f+=D,d+=O}}static fromJSON(t){return new Ks(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function hs(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function we(r){const t={};for(let e=0;e<r.length;e++){const n=hs(r[e]);for(const i in n)t[i]=n[i]}return t}const Wd={clone:hs,merge:we};var qd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Xd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ye extends de{constructor(t){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qd,this.fragmentShader=Xd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=hs(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}Ye.prototype.isShaderMaterial=!0;class Ha extends Gt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}Ha.prototype.isCamera=!0;class Ee extends Ha{constructor(t=50,e=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Do*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Sa*2*Math.atan(Math.tan(Do*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Do*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}Ee.prototype.isPerspectiveCamera=!0;const Bi=90,Oi=1;class Va extends Gt{constructor(t,e,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new Ee(Bi,Oi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);const s=new Ee(Bi,Oi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new T(-1,0,0)),this.add(s);const o=new Ee(Bi,Oi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new T(0,1,0)),this.add(o);const a=new Ee(Bi,Oi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new T(0,-1,0)),this.add(a);const l=new Ee(Bi,Oi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);const c=new Ee(Bi,Oi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.outputEncoding,d=t.toneMapping,f=t.xr.enabled;t.outputEncoding=Tn,t.toneMapping=Sn,t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=g,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.outputEncoding=u,t.toneMapping=d,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class fo extends xe{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:as;super(t,e,n,i,s,o,a,l,c,h);this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}fo.prototype.isCubeTexture=!0;class bh extends Ie{constructor(t,e={}){super(t,t,e);const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ce}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ks(5,5,5),s=new Ye({name:"CubemapFromEquirect",uniforms:hs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:Wn});s.uniforms.tEquirect.value=e;const o=new ge(i,s),a=e.minFilter;return e.minFilter===ho&&(e.minFilter=Ce),new Va(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}bh.prototype.isWebGLCubeRenderTarget=!0;const ta=new T,jd=new T,Zd=new ve;class wn{constructor(t=new T(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ta.subVectors(n,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(ta),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Zd.getNormalMatrix(t),i=this.coplanarPoint(ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}wn.prototype.isPlane=!0;const Ui=new ps,Er=new T;class po{constructor(t=new wn,e=new wn,n=new wn,i=new wn,s=new wn,o=new wn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],g=n[10],m=n[11],p=n[12],x=n[13],y=n[14],E=n[15];return e[0].setComponents(a-i,u-l,m-d,E-p).normalize(),e[1].setComponents(a+i,u+l,m+d,E+p).normalize(),e[2].setComponents(a+s,u+c,m+f,E+x).normalize(),e[3].setComponents(a-s,u-c,m-f,E-x).normalize(),e[4].setComponents(a-o,u-h,m-g,E-y).normalize(),e[5].setComponents(a+o,u+h,m+g,E+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),Ui.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSprite(t){return Ui.center.set(0,0,0),Ui.radius=.7071067811865476,Ui.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ui)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Er.x=i.normal.x>0?t.max.x:t.min.x,Er.y=i.normal.y>0?t.max.y:t.min.y,Er.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Er)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sh(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Jd(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Qs extends Kt{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],m=[],p=[];for(let x=0;x<h;x++){const y=x*d-o;for(let E=0;E<c;E++){const S=E*u-s;g.push(S,-y,0),m.push(0,0,1),p.push(E/a),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<a;y++){const E=y+c*x,S=y+c*(x+1),v=y+1+c*(x+1),L=y+1+c*x;f.push(E,S,L),f.push(S,v,L)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(m,3)),this.setAttribute("uv",new se(p,2))}static fromJSON(t){return new Qs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,$d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nf="vec3 transformed = vec3( position );",sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,of=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,pf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,gf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 1.0 ) + 0.5;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,_f=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,yf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Mf="gl_FragColor = linearToOutputTexel( gl_FragColor );",bf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Af=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Rf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,If=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,zf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,Nf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Bf=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Of=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,Gf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,Wf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	vec3 FssEss = specularColor * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,qf=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Zf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,$f=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,np=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ip=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,op=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,ap=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,cp=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,pp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,mp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,gp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_p=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ep=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Tp=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ap=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Cp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Pp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Fp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,Bp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Op=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Up=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Hp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Vp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Gp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Wp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Yp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$p=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Qp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,em=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sm=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,um=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_m=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ym=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ft={alphamap_fragment:Yd,alphamap_pars_fragment:$d,alphatest_fragment:Kd,alphatest_pars_fragment:Qd,aomap_fragment:tf,aomap_pars_fragment:ef,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,bumpmap_pars_fragment:of,clipping_planes_fragment:af,clipping_planes_pars_fragment:lf,clipping_planes_pars_vertex:cf,clipping_planes_vertex:hf,color_fragment:uf,color_pars_fragment:df,color_pars_vertex:ff,color_vertex:pf,common:mf,cube_uv_reflection_fragment:gf,defaultnormal_vertex:xf,displacementmap_pars_vertex:_f,displacementmap_vertex:vf,emissivemap_fragment:yf,emissivemap_pars_fragment:wf,encodings_fragment:Mf,encodings_pars_fragment:bf,envmap_fragment:Sf,envmap_common_pars_fragment:Ef,envmap_pars_fragment:Tf,envmap_pars_vertex:Af,envmap_physical_pars_fragment:Bf,envmap_vertex:Cf,fog_vertex:Lf,fog_pars_vertex:Rf,fog_fragment:Pf,fog_pars_fragment:Df,gradientmap_pars_fragment:If,lightmap_fragment:kf,lightmap_pars_fragment:zf,lights_lambert_vertex:Ff,lights_pars_begin:Nf,lights_toon_fragment:Of,lights_toon_pars_fragment:Uf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Vf,lights_physical_fragment:Gf,lights_physical_pars_fragment:Wf,lights_fragment_begin:qf,lights_fragment_maps:Xf,lights_fragment_end:jf,logdepthbuf_fragment:Zf,logdepthbuf_pars_fragment:Jf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:$f,map_fragment:Kf,map_pars_fragment:Qf,map_particle_fragment:tp,map_particle_pars_fragment:ep,metalnessmap_fragment:np,metalnessmap_pars_fragment:ip,morphcolor_vertex:sp,morphnormal_vertex:rp,morphtarget_pars_vertex:op,morphtarget_vertex:ap,normal_fragment_begin:lp,normal_fragment_maps:cp,normal_pars_fragment:hp,normal_pars_vertex:up,normal_vertex:dp,normalmap_pars_fragment:fp,clearcoat_normal_fragment_begin:pp,clearcoat_normal_fragment_maps:mp,clearcoat_pars_fragment:gp,output_fragment:xp,packing:_p,premultiplied_alpha_fragment:vp,project_vertex:yp,dithering_fragment:wp,dithering_pars_fragment:Mp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Ep,shadowmap_pars_vertex:Tp,shadowmap_vertex:Ap,shadowmask_pars_fragment:Cp,skinbase_vertex:Lp,skinning_pars_vertex:Rp,skinning_vertex:Pp,skinnormal_vertex:Dp,specularmap_fragment:Ip,specularmap_pars_fragment:kp,tonemapping_fragment:zp,tonemapping_pars_fragment:Fp,transmission_fragment:Np,transmission_pars_fragment:Bp,uv_pars_fragment:Op,uv_pars_vertex:Up,uv_vertex:Hp,uv2_pars_fragment:Vp,uv2_pars_vertex:Gp,uv2_vertex:Wp,worldpos_vertex:qp,background_vert:Xp,background_frag:jp,cube_vert:Zp,cube_frag:Jp,depth_vert:Yp,depth_frag:$p,distanceRGBA_vert:Kp,distanceRGBA_frag:Qp,equirect_vert:tm,equirect_frag:em,linedashed_vert:nm,linedashed_frag:im,meshbasic_vert:sm,meshbasic_frag:rm,meshlambert_vert:om,meshlambert_frag:am,meshmatcap_vert:lm,meshmatcap_frag:cm,meshnormal_vert:hm,meshnormal_frag:um,meshphong_vert:dm,meshphong_frag:fm,meshphysical_vert:pm,meshphysical_frag:mm,meshtoon_vert:gm,meshtoon_frag:xm,points_vert:_m,points_frag:vm,shadow_vert:ym,shadow_frag:wm,sprite_vert:Mm,sprite_frag:bm},ot={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new ve},uv2Transform:{value:new ve},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new ve}}},an={basic:{uniforms:we([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Ft.meshbasic_vert,fragmentShader:Ft.meshbasic_frag},lambert:{uniforms:we([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.fog,ot.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ft.meshlambert_vert,fragmentShader:Ft.meshlambert_frag},phong:{uniforms:we([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Ft.meshphong_vert,fragmentShader:Ft.meshphong_frag},standard:{uniforms:we([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag},toon:{uniforms:we([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new mt(0)}}]),vertexShader:Ft.meshtoon_vert,fragmentShader:Ft.meshtoon_frag},matcap:{uniforms:we([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Ft.meshmatcap_vert,fragmentShader:Ft.meshmatcap_frag},points:{uniforms:we([ot.points,ot.fog]),vertexShader:Ft.points_vert,fragmentShader:Ft.points_frag},dashed:{uniforms:we([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ft.linedashed_vert,fragmentShader:Ft.linedashed_frag},depth:{uniforms:we([ot.common,ot.displacementmap]),vertexShader:Ft.depth_vert,fragmentShader:Ft.depth_frag},normal:{uniforms:we([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Ft.meshnormal_vert,fragmentShader:Ft.meshnormal_frag},sprite:{uniforms:we([ot.sprite,ot.fog]),vertexShader:Ft.sprite_vert,fragmentShader:Ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null}},vertexShader:Ft.background_vert,fragmentShader:Ft.background_frag},cube:{uniforms:we([ot.envmap,{opacity:{value:1}}]),vertexShader:Ft.cube_vert,fragmentShader:Ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ft.equirect_vert,fragmentShader:Ft.equirect_frag},distanceRGBA:{uniforms:we([ot.common,ot.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ft.distanceRGBA_vert,fragmentShader:Ft.distanceRGBA_frag},shadow:{uniforms:we([ot.lights,ot.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Ft.shadow_vert,fragmentShader:Ft.shadow_frag}};an.physical={uniforms:we([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ft.meshphysical_vert,fragmentShader:Ft.meshphysical_frag};function Sm(r,t,e,n,i,s){const o=new mt(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(m,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=t.get(y));const E=r.xr,S=E.getSession&&E.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?g(o,a):y&&y.isColor&&(g(y,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===co)?(c===void 0&&(c=new ge(new Ks(1,1,1),new Ye({name:"BackgroundCubeMaterial",uniforms:hs(an.cube.uniforms),vertexShader:an.cube.vertexShader,fragmentShader:an.cube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ge(new Qs(2,2),new Ye({name:"BackgroundMaterial",uniforms:hs(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Ns,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),m.unshift(l,l.geometry,l.material,0,0,null))}function g(m,p){e.buffers.color.setClear(m.r,m.g,m.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(m,p=1){o.set(m),a=p,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,g(o,a)},render:f}}function Em(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(R,B,F,O,D){let X=!1;if(o){const J=m(O,F,B);c!==J&&(c=J,f(c.object)),X=x(O,D),X&&y(O,D)}else{const J=B.wireframe===!0;(c.geometry!==O.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=O.id,c.program=F.id,c.wireframe=J,X=!0)}R.isInstancedMesh===!0&&(X=!0),D!==null&&e.update(D,34963),(X||h)&&(h=!1,N(R,B,F,O),D!==null&&r.bindBuffer(34963,e.get(D).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function m(R,B,F){const O=F.wireframe===!0;let D=a[R.id];D===void 0&&(D={},a[R.id]=D);let X=D[B.id];X===void 0&&(X={},D[B.id]=X);let J=X[O];return J===void 0&&(J=p(d()),X[O]=J),J}function p(R){const B=[],F=[],O=[];for(let D=0;D<i;D++)B[D]=0,F[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:O,object:R,attributes:{},index:null}}function x(R,B){const F=c.attributes,O=R.attributes;let D=0;for(const X in O){const J=F[X],K=O[X];if(J===void 0||J.attribute!==K||J.data!==K.data)return!0;D++}return c.attributesNum!==D||c.index!==B}function y(R,B){const F={},O=R.attributes;let D=0;for(const X in O){const J=O[X],K={};K.attribute=J,J.data&&(K.data=J.data),F[X]=K,D++}c.attributes=F,c.attributesNum=D,c.index=B}function E(){const R=c.newAttributes;for(let B=0,F=R.length;B<F;B++)R[B]=0}function S(R){v(R,0)}function v(R,B){const F=c.newAttributes,O=c.enabledAttributes,D=c.attributeDivisors;F[R]=1,O[R]===0&&(r.enableVertexAttribArray(R),O[R]=1),D[R]!==B&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),D[R]=B)}function L(){const R=c.newAttributes,B=c.enabledAttributes;for(let F=0,O=B.length;F<O;F++)B[F]!==R[F]&&(r.disableVertexAttribArray(F),B[F]=0)}function P(R,B,F,O,D,X){n.isWebGL2===!0&&(F===5124||F===5125)?r.vertexAttribIPointer(R,B,F,D,X):r.vertexAttribPointer(R,B,F,O,D,X)}function N(R,B,F,O){if(n.isWebGL2===!1&&(R.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const D=O.attributes,X=F.getAttributes(),J=B.defaultAttributeValues;for(const K in X){const Q=X[K];if(Q.location>=0){let ht=D[K];if(ht===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ht=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ht=R.instanceColor)),ht!==void 0){const Nt=ht.normalized,St=ht.itemSize,W=e.get(ht);if(W===void 0)continue;const Ht=W.buffer,Ct=W.type,Lt=W.bytesPerElement;if(ht.isInterleavedBufferAttribute){const nt=ht.data,zt=nt.stride,G=ht.offset;if(nt.isInstancedInterleavedBuffer){for(let Z=0;Z<Q.locationSize;Z++)v(Q.location+Z,nt.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<Q.locationSize;Z++)S(Q.location+Z);r.bindBuffer(34962,Ht);for(let Z=0;Z<Q.locationSize;Z++)P(Q.location+Z,St/Q.locationSize,Ct,Nt,zt*Lt,(G+St/Q.locationSize*Z)*Lt)}else{if(ht.isInstancedBufferAttribute){for(let nt=0;nt<Q.locationSize;nt++)v(Q.location+nt,ht.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let nt=0;nt<Q.locationSize;nt++)S(Q.location+nt);r.bindBuffer(34962,Ht);for(let nt=0;nt<Q.locationSize;nt++)P(Q.location+nt,St/Q.locationSize,Ct,Nt,St*Lt,St/Q.locationSize*nt*Lt)}}else if(J!==void 0){const Nt=J[K];if(Nt!==void 0)switch(Nt.length){case 2:r.vertexAttrib2fv(Q.location,Nt);break;case 3:r.vertexAttrib3fv(Q.location,Nt);break;case 4:r.vertexAttrib4fv(Q.location,Nt);break;default:r.vertexAttrib1fv(Q.location,Nt)}}}}L()}function et(){C();for(const R in a){const B=a[R];for(const F in B){const O=B[F];for(const D in O)g(O[D].object),delete O[D];delete B[F]}delete a[R]}}function z(R){if(a[R.id]===void 0)return;const B=a[R.id];for(const F in B){const O=B[F];for(const D in O)g(O[D].object),delete O[D];delete B[F]}delete a[R.id]}function _(R){for(const B in a){const F=a[B];if(F[R.id]===void 0)continue;const O=F[R.id];for(const D in O)g(O[D].object),delete O[D];delete F[R.id]}}function C(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:q,dispose:et,releaseStatesOfGeometry:z,releaseStatesOfProgram:_,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function Tm(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function Am(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),g=r.getParameter(34076),m=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),y=r.getParameter(36349),E=d>0,S=o||t.has("OES_texture_float"),v=E&&S,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:L}}function Cm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new wn,a=new ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||n!==0||i;return i=d,e=h(u,f,0),n=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,m=u.clipIntersection,p=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,E=y*4;let S=x.clippingState||null;l.value=S,S=h(g,d,E,f);for(let v=0;v!==E;++v)S[v]=e[v];x.clippingState=S,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const m=u!==null?u.length:0;let p=null;if(m!==0){if(p=l.value,g!==!0||p===null){const x=f+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<x)&&(p=new Float32Array(x));for(let E=0,S=f;E!==m;++E,S+=4)o.copy(u[E]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function Lm(r){let t=new WeakMap;function e(o,a){return a===va?o.mapping=as:a===ya&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===va||a===ya)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bh(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Ga extends Ha{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}Ga.prototype.isOrthographicCamera=!0;const $i=4,ac=[.125,.215,.35,.446,.526,.582],ni=20,ea=new Ga,lc=new mt;let na=null;const ti=(1+Math.sqrt(5))/2,Hi=1/ti,cc=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,ti,Hi),new T(0,ti,-Hi),new T(Hi,0,ti),new T(-Hi,0,ti),new T(ti,Hi,0),new T(-ti,Hi,0)];class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){na=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na),t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===as||t.mapping===ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize-32,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:is,format:je,encoding:Tn,depthBuffer:!1},i=uc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rm(s)),this._blurMaterial=Pm(s,t,e)}return i}_compileMaterial(t){const e=new ge(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,i){const a=new Ee(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(lc),h.toneMapping=Sn,h.autoClear=!1;const f=new yi({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),g=new ge(new Ks,f);let m=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,m=!0):(f.color.copy(lc),m=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):y===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const E=this._cubeSize;Tr(i,y*E,x>2?E:0,E,E),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===as||t.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=fc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Tr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=cc[(i-1)%cc.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ge(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*ni-1),m=s/g,p=isFinite(s)?1+Math.floor(h*m):ni;p>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ni}`);const x=[];let y=0;for(let P=0;P<ni;++P){const N=P/m,et=Math.exp(-N*N/2);x.push(et),P===0?y+=et:P<p&&(y+=2*et)}for(let P=0;P<x.length;P++)x[P]=x[P]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const S=this._sizeLods[i],v=3*S*(i>E-$i?i-E+$i:0),L=4*(this._cubeSize-S);Tr(e,v,L,3*S,2*S),l.setRenderTarget(e),l.render(u,ea)}}function Rm(r){const t=[],e=[],n=[];let i=r;const s=r-$i+1+ac.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-$i?l=ac[o-r+$i-1]:o===0&&(l=0),n.push(l);const c=1/(a-1),h=-c/2,u=1+c/2,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,p=2,x=1,y=new Float32Array(m*g*f),E=new Float32Array(p*g*f),S=new Float32Array(x*g*f);for(let L=0;L<f;L++){const P=L%3*2/3-1,N=L>2?0:-1,et=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];y.set(et,m*g*L),E.set(d,p*g*L);const z=[L,L,L,L,L,L];S.set(z,x*g*L)}const v=new Kt;v.setAttribute("position",new ue(y,m)),v.setAttribute("uv",new ue(E,p)),v.setAttribute("faceIndex",new ue(S,x)),t.push(v),i>$i&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function uc(r,t,e){const n=new Ie(r,t,e);return n.texture.mapping=co,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Pm(r,t,e){const n=new Float32Array(ni),i=new T(0,1,0);return new Ye({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function dc(){return new Ye({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function fc(){return new Ye({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Wa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===va||l===ya,h=l===as||l===ls;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new hc(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new hc(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Im(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function km(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const m=f[g];for(let p=0,x=m.length;p<x;p++)t.update(m[p],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let m=0;if(f!==null){const y=f.array;m=f.version;for(let E=0,S=y.length;E<S;E+=3){const v=y[E+0],L=y[E+1],P=y[E+2];d.push(v,L,L,P,P,v)}}else{const y=g.array;m=g.version;for(let E=0,S=y.length/3-1;E<S;E+=3){const v=E+0,L=E+1,P=E+2;d.push(v,L,L,P,P,v)}}const p=new(xh(d)?Mh:wh)(d,1);p.version=m;const x=s.get(u);x&&t.remove(x),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function zm(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),e.update(f,s,1)}function u(d,f,g){if(g===0)return;let m,p;if(i)m=r,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](s,f,a,d*l,g),e.update(f,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function Fm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Nm(r,t){return r[0]-t[0]}function Bm(r,t){return Math.abs(t[1])-Math.abs(r[1])}function ia(r,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(e)}function Om(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new jt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=m!==void 0?m.length:0;let x=s.get(h);if(x===void 0||x.count!==p){let F=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var g=F;x!==void 0&&x.texture.dispose();const S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],et=h.morphAttributes.color||[];let z=0;S===!0&&(z=1),v===!0&&(z=2),L===!0&&(z=3);let _=h.attributes.position.count*z,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const q=new Float32Array(_*C*4*p),R=new uo(q,_,C,p);R.type=oi,R.needsUpdate=!0;const B=z*4;for(let O=0;O<p;O++){const D=P[O],X=N[O],J=et[O],K=_*C*4*O;for(let Q=0;Q<D.count;Q++){const ht=Q*B;S===!0&&(o.fromBufferAttribute(D,Q),D.normalized===!0&&ia(o,D),q[K+ht+0]=o.x,q[K+ht+1]=o.y,q[K+ht+2]=o.z,q[K+ht+3]=0),v===!0&&(o.fromBufferAttribute(X,Q),X.normalized===!0&&ia(o,X),q[K+ht+4]=o.x,q[K+ht+5]=o.y,q[K+ht+6]=o.z,q[K+ht+7]=0),L===!0&&(o.fromBufferAttribute(J,Q),J.normalized===!0&&ia(o,J),q[K+ht+8]=o.x,q[K+ht+9]=o.y,q[K+ht+10]=o.z,q[K+ht+11]=J.itemSize===4?o.w:1)}}x={count:p,texture:R,size:new Y(_,C)},s.set(h,x),h.addEventListener("dispose",F)}let y=0;for(let S=0;S<f.length;S++)y+=f[S];const E=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const m=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==m){p=[];for(let v=0;v<m;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<m;v++){const L=p[v];L[0]=v,L[1]=f[v]}p.sort(Bm);for(let v=0;v<8;v++)v<m&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Nm);const x=h.morphAttributes.position,y=h.morphAttributes.normal;let E=0;for(let v=0;v<8;v++){const L=a[v],P=L[0],N=L[1];P!==Number.MAX_SAFE_INTEGER&&N?(x&&h.getAttribute("morphTarget"+v)!==x[P]&&h.setAttribute("morphTarget"+v,x[P]),y&&h.getAttribute("morphNormal"+v)!==y[P]&&h.setAttribute("morphNormal"+v,y[P]),i[v]=N,E+=N):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),y&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Um(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Eh=new xe,Th=new uo,Ah=new Ua,Ch=new fo,pc=[],mc=[],gc=new Float32Array(16),xc=new Float32Array(9),_c=new Float32Array(4);function gs(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=pc[i];if(s===void 0&&(s=new Float32Array(i),pc[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Te(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function be(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function mo(r,t){let e=mc[t];e===void 0&&(e=new Int32Array(t),mc[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Hm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Vm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Te(e,t))return;r.uniform2fv(this.addr,t),be(e,t)}}function Gm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Te(e,t))return;r.uniform3fv(this.addr,t),be(e,t)}}function Wm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Te(e,t))return;r.uniform4fv(this.addr,t),be(e,t)}}function qm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;_c.set(n),r.uniformMatrix2fv(this.addr,!1,_c),be(e,n)}}function Xm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;xc.set(n),r.uniformMatrix3fv(this.addr,!1,xc),be(e,n)}}function jm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Te(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),be(e,t)}else{if(Te(e,n))return;gc.set(n),r.uniformMatrix4fv(this.addr,!1,gc),be(e,n)}}function Zm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Jm(r,t){const e=this.cache;Te(e,t)||(r.uniform2iv(this.addr,t),be(e,t))}function Ym(r,t){const e=this.cache;Te(e,t)||(r.uniform3iv(this.addr,t),be(e,t))}function $m(r,t){const e=this.cache;Te(e,t)||(r.uniform4iv(this.addr,t),be(e,t))}function Km(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Qm(r,t){const e=this.cache;Te(e,t)||(r.uniform2uiv(this.addr,t),be(e,t))}function tg(r,t){const e=this.cache;Te(e,t)||(r.uniform3uiv(this.addr,t),be(e,t))}function eg(r,t){const e=this.cache;Te(e,t)||(r.uniform4uiv(this.addr,t),be(e,t))}function ng(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Eh,i)}function ig(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Ah,i)}function sg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ch,i)}function rg(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Th,i)}function og(r){switch(r){case 5126:return Hm;case 35664:return Vm;case 35665:return Gm;case 35666:return Wm;case 35674:return qm;case 35675:return Xm;case 35676:return jm;case 5124:case 35670:return Zm;case 35667:case 35671:return Jm;case 35668:case 35672:return Ym;case 35669:case 35673:return $m;case 5125:return Km;case 36294:return Qm;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function ag(r,t){r.uniform1fv(this.addr,t)}function lg(r,t){const e=gs(t,this.size,2);r.uniform2fv(this.addr,e)}function cg(r,t){const e=gs(t,this.size,3);r.uniform3fv(this.addr,e)}function hg(r,t){const e=gs(t,this.size,4);r.uniform4fv(this.addr,e)}function ug(r,t){const e=gs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function dg(r,t){const e=gs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function fg(r,t){const e=gs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function pg(r,t){r.uniform1iv(this.addr,t)}function mg(r,t){r.uniform2iv(this.addr,t)}function gg(r,t){r.uniform3iv(this.addr,t)}function xg(r,t){r.uniform4iv(this.addr,t)}function _g(r,t){r.uniform1uiv(this.addr,t)}function vg(r,t){r.uniform2uiv(this.addr,t)}function yg(r,t){r.uniform3uiv(this.addr,t)}function wg(r,t){r.uniform4uiv(this.addr,t)}function Mg(r,t,e){const n=t.length,i=mo(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||Eh,i[s])}function bg(r,t,e){const n=t.length,i=mo(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||Ah,i[s])}function Sg(r,t,e){const n=t.length,i=mo(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||Ch,i[s])}function Eg(r,t,e){const n=t.length,i=mo(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||Th,i[s])}function Tg(r){switch(r){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return dg;case 35676:return fg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return _g;case 36294:return vg;case 36295:return yg;case 36296:return wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Mg;case 35679:case 36299:case 36307:return bg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return Eg}}function Ag(r,t,e){this.id=r,this.addr=e,this.cache=[],this.setValue=og(t.type)}function Lh(r,t,e){this.id=r,this.addr=e,this.cache=[],this.size=t.size,this.setValue=Tg(t.type)}Lh.prototype.updateCache=function(r){const t=this.cache;r instanceof Float32Array&&t.length!==r.length&&(this.cache=new Float32Array(r.length)),be(t,r)};function Rh(r){this.id=r,this.seq=[],this.map={}}Rh.prototype.setValue=function(r,t,e){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,t[o.id],e)}};const sa=/(\w+)(\])?(\[|\.)?/g;function vc(r,t){r.seq.push(t),r.map[t.id]=t}function Cg(r,t,e){const n=r.name,i=n.length;for(sa.lastIndex=0;;){const s=sa.exec(n),o=sa.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){vc(e,c===void 0?new Ag(a,r,t):new Lh(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Rh(a),vc(e,u)),e=u}}}function qn(r,t){this.seq=[],this.map={};const e=r.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=r.getActiveUniform(t,n),s=r.getUniformLocation(t,i.name);Cg(i,s,this)}}qn.prototype.setValue=function(r,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(r,e,n)};qn.prototype.setOptional=function(r,t,e){const n=t[e];n!==void 0&&this.setValue(r,e,n)};qn.upload=function(r,t,e,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],a=e[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};qn.seqWithValue=function(r,t){const e=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in t&&e.push(s)}return e};function yc(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let Lg=0;function Rg(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++)n.push(o+1+": "+e[o]);return n.join(`
`)}function Pg(r){switch(r){case Tn:return["Linear","( value )"];case Qt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function wc(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return e.toUpperCase()+`

`+i+`

`+Rg(r.getShaderSource(t),s)}function Dg(r,t){const e=Pg(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function Ig(r,t){let e;switch(t){case Qu:e="Linear";break;case td:e="Reinhard";break;case ed:e="OptimizedCineon";break;case nd:e="ACESFilmic";break;case id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function kg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Is).join(`
`)}function zg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Fg(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Is(r){return r!==""}function Mc(r,t){return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function bc(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ng=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(r){return r.replace(Ng,Bg)}function Bg(r,t){const e=Ft[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Ta(e)}const Og=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(r){return r.replace(Ug,Ph).replace(Og,Hg)}function Hg(r,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Ph(r,t,e,n)}function Ph(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ec(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Vg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ds&&(t="SHADOWMAP_TYPE_VSM"),t}function Gg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case as:case ls:t="ENVMAP_TYPE_CUBE";break;case co:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ls:t="ENVMAP_MODE_REFRACTION";break}return t}function qg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case lo:t="ENVMAP_BLENDING_MULTIPLY";break;case $u:t="ENVMAP_BLENDING_MIX";break;case Ku:t="ENVMAP_BLENDING_ADD";break}return t}function Xg(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t/32+1)+3,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function jg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Vg(e),c=Gg(e),h=Wg(e),u=qg(e),d=Xg(e),f=e.isWebGL2?"":kg(e),g=zg(s),m=i.createProgram();let p,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(Is).join(`
`),p.length>0&&(p+=`
`),x=[f,g].filter(Is).join(`
`),x.length>0&&(x+=`
`)):(p=[Ec(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Is).join(`
`),x=[f,Ec(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Sn?"#define TONE_MAPPING":"",e.toneMapping!==Sn?Ft.tonemapping_pars_fragment:"",e.toneMapping!==Sn?Ig("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ft.encodings_pars_fragment,Dg("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Is).join(`
`)),o=Ta(o),o=Mc(o,e),o=bc(o,e),a=Ta(a),a=Mc(a,e),a=bc(a,e),o=Sc(o),a=Sc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=y+p+o,S=y+x+a,v=yc(i,35633,E),L=yc(i,35632,S);if(i.attachShader(m,v),i.attachShader(m,L),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),r.debug.checkShaderErrors){const et=i.getProgramInfoLog(m).trim(),z=i.getShaderInfoLog(v).trim(),_=i.getShaderInfoLog(L).trim();let C=!0,q=!0;if(i.getProgramParameter(m,35714)===!1){C=!1;const R=wc(i,v,"vertex"),B=wc(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+et+`
`+R+`
`+B)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(z===""||_==="")&&(q=!1);q&&(this.diagnostics={runnable:C,programLog:et,vertexShader:{log:z,prefix:p},fragmentShader:{log:_,prefix:x}})}i.deleteShader(v),i.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new qn(i,m)),P};let N;return this.getAttributes=function(){return N===void 0&&(N=Fg(i,m)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=Lg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=v,this.fragmentShader=L,this}let Zg=0;class Jg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new Yg(t);e.set(t,n)}return e.get(t)}}class Yg{constructor(t){this.id=Zg++,this.code=t,this.usedTimes=0}}function $g(r,t,e,n,i,s,o){const a=new yh,l=new Jg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,g=i.vertexTextures;let m=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){const q=_.skeleton.bones;if(d)return 1024;{const B=Math.floor((f-20)/4),F=Math.min(B,q.length);return F<q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+q.length+" bones. This GPU supports "+F+"."),0):F}}function y(_,C,q,R,B){const F=R.fog,O=B.geometry,D=_.isMeshStandardMaterial?R.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||D),J=!!X&&X.mapping===co?X.image.height:null,K=p[_.type],Q=B.isSkinnedMesh?x(B):0;_.precision!==null&&(m=i.getMaxPrecision(_.precision),m!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",m,"instead."));const ht=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Nt=ht!==void 0?ht.length:0;let St=0;O.morphAttributes.position!==void 0&&(St=1),O.morphAttributes.normal!==void 0&&(St=2),O.morphAttributes.color!==void 0&&(St=3);let W,Ht,Ct,Lt;if(K){const tt=an[K];W=tt.vertexShader,Ht=tt.fragmentShader}else W=_.vertexShader,Ht=_.fragmentShader,l.update(_),Ct=l.getVertexShaderID(_),Lt=l.getFragmentShaderID(_);const nt=r.getRenderTarget(),zt=_.alphaTest>0,G=_.clearcoat>0;return{isWebGL2:h,shaderID:K,shaderName:_.type,vertexShader:W,fragmentShader:Ht,defines:_.defines,customVertexShaderID:Ct,customFragmentShaderID:Lt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:m,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:g,outputEncoding:nt===null?r.outputEncoding:nt.isXRRenderTarget===!0?nt.texture.encoding:Tn,map:!!_.map,matcap:!!_.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:J,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Td,tangentSpaceNormalMap:_.normalMapType===fs,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Qt,clearcoat:G,clearcoatMap:G&&!!_.clearcoatMap,clearcoatRoughnessMap:G&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:G&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===ns,alphaMap:!!_.alphaMap,alphaTest:zt,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!O.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!F,useFog:_.fog,fogExp2:F&&F.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0&&Q>0,maxBones:Q,useVertexTexture:d,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:St,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:Sn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===os,flipSided:_.side===Ze,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function E(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const q in _.defines)C.push(q),C.push(_.defines[q]);return _.isRawShaderMaterial===!1&&(S(C,_),v(C,_),C.push(r.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function S(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.maxBones),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection)}function v(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.displacementMap&&a.enable(18),C.specularMap&&a.enable(19),C.roughnessMap&&a.enable(20),C.metalnessMap&&a.enable(21),C.gradientMap&&a.enable(22),C.alphaMap&&a.enable(23),C.alphaTest&&a.enable(24),C.vertexColors&&a.enable(25),C.vertexAlphas&&a.enable(26),C.vertexUvs&&a.enable(27),C.vertexTangents&&a.enable(28),C.uvsVertexOnly&&a.enable(29),C.fog&&a.enable(30),_.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.useVertexTexture&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.depthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),_.push(a.mask)}function L(_){const C=p[_.type];let q;if(C){const R=an[C];q=Wd.clone(R.uniforms)}else q=_.uniforms;return q}function P(_,C){let q;for(let R=0,B=c.length;R<B;R++){const F=c[R];if(F.cacheKey===C){q=F,++q.usedTimes;break}}return q===void 0&&(q=new jg(r,C,_,s),c.push(q)),q}function N(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function et(_){l.remove(_)}function z(){l.dispose()}return{getParameters:y,getProgramCacheKey:E,getUniforms:L,acquireProgram:P,releaseProgram:N,releaseShaderCache:et,programs:c,dispose:z}}function Kg(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Qg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Tc(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ac(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,m,p){let x=r[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:p},r[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=f,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=m,x.group=p),t++,x}function a(u,d,f,g,m,p){const x=o(u,d,f,g,m,p);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):e.push(x)}function l(u,d,f,g,m,p){const x=o(u,d,f,g,m,p);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):e.unshift(x)}function c(u,d){e.length>1&&e.sort(u||Qg),n.length>1&&n.sort(d||Tc),i.length>1&&i.sort(d||Tc)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function t0(){let r=new WeakMap;function t(n,i){let s;return r.has(n)===!1?(s=new Ac,r.set(n,[s])):i>=r.get(n).length?(s=new Ac,r.get(n).push(s)):s=r.get(n)[i],s}function e(){r=new WeakMap}return{get:t,dispose:e}}function e0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new mt};break;case"SpotLight":e={position:new T,direction:new T,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":e={color:new mt,position:new T,halfWidth:new T,halfHeight:new T};break}return r[t.id]=e,e}}}function n0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let i0=0;function s0(r,t){return(t.castShadow?1:0)-(r.castShadow?1:0)}function r0(r,t){const e=new e0,n=n0(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new T);const s=new T,o=new _t,a=new _t;function l(h,u){let d=0,f=0,g=0;for(let et=0;et<9;et++)i.probe[et].set(0,0,0);let m=0,p=0,x=0,y=0,E=0,S=0,v=0,L=0;h.sort(s0);const P=u!==!0?Math.PI:1;for(let et=0,z=h.length;et<z;et++){const _=h[et],C=_.color,q=_.intensity,R=_.distance,B=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)d+=C.r*q*P,f+=C.g*q*P,g+=C.b*q*P;else if(_.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(_.sh.coefficients[F],q);else if(_.isDirectionalLight){const F=e.get(_);if(F.color.copy(_.color).multiplyScalar(_.intensity*P),_.castShadow){const O=_.shadow,D=n.get(_);D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.directionalShadow[m]=D,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=_.shadow.matrix,S++}i.directional[m]=F,m++}else if(_.isSpotLight){const F=e.get(_);if(F.position.setFromMatrixPosition(_.matrixWorld),F.color.copy(C).multiplyScalar(q*P),F.distance=R,F.coneCos=Math.cos(_.angle),F.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),F.decay=_.decay,_.castShadow){const O=_.shadow,D=n.get(_);D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=B,i.spotShadowMatrix[x]=_.shadow.matrix,L++}i.spot[x]=F,x++}else if(_.isRectAreaLight){const F=e.get(_);F.color.copy(C).multiplyScalar(q),F.halfWidth.set(_.width*.5,0,0),F.halfHeight.set(0,_.height*.5,0),i.rectArea[y]=F,y++}else if(_.isPointLight){const F=e.get(_);if(F.color.copy(_.color).multiplyScalar(_.intensity*P),F.distance=_.distance,F.decay=_.decay,_.castShadow){const O=_.shadow,D=n.get(_);D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=_.shadow.matrix,v++}i.point[p]=F,p++}else if(_.isHemisphereLight){const F=e.get(_);F.skyColor.copy(_.color).multiplyScalar(q*P),F.groundColor.copy(_.groundColor).multiplyScalar(q*P),i.hemi[E]=F,E++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_FLOAT_1,i.rectAreaLTC2=ot.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ot.LTC_HALF_1,i.rectAreaLTC2=ot.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=g;const N=i.hash;(N.directionalLength!==m||N.pointLength!==p||N.spotLength!==x||N.rectAreaLength!==y||N.hemiLength!==E||N.numDirectionalShadows!==S||N.numPointShadows!==v||N.numSpotShadows!==L)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=y,i.point.length=p,i.hemi.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=L,N.directionalLength=m,N.pointLength=p,N.spotLength=x,N.rectAreaLength=y,N.hemiLength=E,N.numDirectionalShadows=S,N.numPointShadows=v,N.numSpotShadows=L,i.version=i0++)}function c(h,u){let d=0,f=0,g=0,m=0,p=0;const x=u.matrixWorldInverse;for(let y=0,E=h.length;y<E;y++){const S=h[y];if(S.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(S.isSpotLight){const v=i.spot[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),g++}else if(S.isRectAreaLight){const v=i.rectArea[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(x),a.identity(),o.copy(S.matrixWorld),o.premultiply(x),a.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),m++}else if(S.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(x),f++}else if(S.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(x),v.direction.normalize(),p++}}}return{setup:l,setupView:c,state:i}}function Cc(r,t){const e=new r0(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function o0(r,t){let e=new WeakMap;function n(s,o=0){let a;return e.has(s)===!1?(a=new Cc(r,t),e.set(s,[a])):o>=e.get(s).length?(a=new Cc(r,t),e.get(s).push(a)):a=e.get(s)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class qa extends de{constructor(t){super();this.type="MeshDepthMaterial",this.depthPacking=Sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}qa.prototype.isMeshDepthMaterial=!0;class Xa extends de{constructor(t){super();this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}Xa.prototype.isMeshDistanceMaterial=!0;const a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Dh(r,t,e){let n=new po;const i=new Y,s=new Y,o=new jt,a=new qa({depthPacking:Ed}),l=new Xa,c={},h=e.maxTextureSize,u={0:Ze,1:Ns,2:os},d=new Ye({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:a0,fragmentShader:l0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Kt;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ge(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh,this.render=function(S,v,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=r.getRenderTarget(),N=r.getActiveCubeFace(),et=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Wn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let _=0,C=S.length;_<C;_++){const q=S[_],R=q.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===Ds&&(R.map=new Ie(i.x,i.y),R.map.texture.name=q.name+".shadowMap",R.mapPass=new Ie(i.x,i.y),R.camera.updateProjectionMatrix()),R.map===null){const O={minFilter:me,magFilter:me,format:je};R.map=new Ie(i.x,i.y,O),R.map.texture.name=q.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const F=R.getViewportCount();for(let O=0;O<F;O++){const D=R.getViewport(O);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),z.viewport(o),R.updateMatrices(q,O),n=R.getFrustum(),E(v,L,R.camera,q,this.type)}!R.isPointLightShadow&&this.type===Ds&&x(R,L),R.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(P,N,et)};function x(S,v){const L=t.update(m);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(v,null,L,d,m,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(v,null,L,f,m,null)}function y(S,v,L,P,N,et){let z=null;const _=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(_!==void 0?z=_:z=L.isPointLight===!0?l:a,r.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const C=z.uuid,q=v.uuid;let R=c[C];R===void 0&&(R={},c[C]=R);let B=R[q];B===void 0&&(B=z.clone(),R[q]=B),z=B}return z.visible=v.visible,z.wireframe=v.wireframe,et===Ds?z.side=v.shadowSide!==null?v.shadowSide:v.side:z.side=v.shadowSide!==null?v.shadowSide:u[v.side],z.alphaMap=v.alphaMap,z.alphaTest=v.alphaTest,z.clipShadows=v.clipShadows,z.clippingPlanes=v.clippingPlanes,z.clipIntersection=v.clipIntersection,z.displacementMap=v.displacementMap,z.displacementScale=v.displacementScale,z.displacementBias=v.displacementBias,z.wireframeLinewidth=v.wireframeLinewidth,z.linewidth=v.linewidth,L.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(L.matrixWorld),z.nearDistance=P,z.farDistance=N),z}function E(S,v,L,P,N){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===Ds)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const _=t.update(S),C=S.material;if(Array.isArray(C)){const q=_.groups;for(let R=0,B=q.length;R<B;R++){const F=q[R],O=C[F.materialIndex];if(O&&O.visible){const D=y(S,O,P,L.near,L.far,N);r.renderBufferDirect(L,null,_,D,S,F)}}}else if(C.visible){const q=y(S,C,P,L.near,L.far,N);r.renderBufferDirect(L,null,_,q,S,null)}}const z=S.children;for(let _=0,C=z.length;_<C;_++)E(z[_],v,L,P,N)}}function c0(r,t,e){const n=e.isWebGL2;function i(){let A=!1;const at=new jt;let rt=null;const wt=new jt(0,0,0,0);return{setMask:function(dt){rt!==dt&&!A&&(r.colorMask(dt,dt,dt,dt),rt=dt)},setLocked:function(dt){A=dt},setClear:function(dt,Mt,it,Et,Yt){Yt===!0&&(dt*=Et,Mt*=Et,it*=Et),at.set(dt,Mt,it,Et),wt.equals(at)===!1&&(r.clearColor(dt,Mt,it,Et),wt.copy(at))},reset:function(){A=!1,rt=null,wt.set(-1,0,0,0)}}}function s(){let A=!1,at=null,rt=null,wt=null;return{setTest:function(dt){dt?St(2929):W(2929)},setMask:function(dt){at!==dt&&!A&&(r.depthMask(dt),at=dt)},setFunc:function(dt){if(rt!==dt){if(dt)switch(dt){case Wu:r.depthFunc(512);break;case qu:r.depthFunc(519);break;case Xu:r.depthFunc(513);break;case _a:r.depthFunc(515);break;case ju:r.depthFunc(514);break;case Zu:r.depthFunc(518);break;case Ju:r.depthFunc(516);break;case Yu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);rt=dt}},setLocked:function(dt){A=dt},setClear:function(dt){wt!==dt&&(r.clearDepth(dt),wt=dt)},reset:function(){A=!1,at=null,rt=null,wt=null}}}function o(){let A=!1,at=null,rt=null,wt=null,dt=null,Mt=null,it=null,Et=null,Yt=null;return{setTest:function(Bt){A||(Bt?St(2960):W(2960))},setMask:function(Bt){at!==Bt&&!A&&(r.stencilMask(Bt),at=Bt)},setFunc:function(Bt,Ke,Qe){(rt!==Bt||wt!==Ke||dt!==Qe)&&(r.stencilFunc(Bt,Ke,Qe),rt=Bt,wt=Ke,dt=Qe)},setOp:function(Bt,Ke,Qe){(Mt!==Bt||it!==Ke||Et!==Qe)&&(r.stencilOp(Bt,Ke,Qe),Mt=Bt,it=Ke,Et=Qe)},setLocked:function(Bt){A=Bt},setClear:function(Bt){Yt!==Bt&&(r.clearStencil(Bt),Yt=Bt)},reset:function(){A=!1,at=null,rt=null,wt=null,dt=null,Mt=null,it=null,Et=null,Yt=null}}}const a=new i,l=new s,c=new o;let h={},u={},d=new WeakMap,f=[],g=null,m=!1,p=null,x=null,y=null,E=null,S=null,v=null,L=null,P=!1,N=null,et=null,z=null,_=null,C=null;const q=r.getParameter(35661);let R=!1,B=0;const F=r.getParameter(7938);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),R=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),R=B>=2);let O=null,D={};const X=r.getParameter(3088),J=r.getParameter(2978),K=new jt().fromArray(X),Q=new jt().fromArray(J);function ht(A,at,rt){const wt=new Uint8Array(4),dt=r.createTexture();r.bindTexture(A,dt),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let Mt=0;Mt<rt;Mt++)r.texImage2D(at+Mt,0,6408,1,1,0,6408,5121,wt);return dt}const Nt={};Nt[3553]=ht(3553,3553,1),Nt[34067]=ht(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),St(2929),l.setFunc(_a),tt(!1),ft(vl),St(2884),G(Wn);function St(A){h[A]!==!0&&(r.enable(A),h[A]=!0)}function W(A){h[A]!==!1&&(r.disable(A),h[A]=!1)}function Ht(A,at){return u[A]!==at?(r.bindFramebuffer(A,at),u[A]=at,n&&(A===36009&&(u[36160]=at),A===36160&&(u[36009]=at)),!0):!1}function Ct(A,at){let rt=f,wt=!1;if(A)if(rt=d.get(at),rt===void 0&&(rt=[],d.set(at,rt)),A.isWebGLMultipleRenderTargets){const dt=A.texture;if(rt.length!==dt.length||rt[0]!==36064){for(let Mt=0,it=dt.length;Mt<it;Mt++)rt[Mt]=36064+Mt;rt.length=dt.length,wt=!0}}else rt[0]!==36064&&(rt[0]=36064,wt=!0);else rt[0]!==1029&&(rt[0]=1029,wt=!0);wt&&(e.isWebGL2?r.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Lt(A){return g!==A?(r.useProgram(A),g=A,!0):!1}const nt={[ji]:32774,[Iu]:32778,[ku]:32779};if(n)nt[bl]=32775,nt[Sl]=32776;else{const A=t.get("EXT_blend_minmax");A!==null&&(nt[bl]=A.MIN_EXT,nt[Sl]=A.MAX_EXT)}const zt={[zu]:0,[Fu]:1,[Nu]:768,[fh]:770,[Gu]:776,[Hu]:774,[Ou]:772,[Bu]:769,[ph]:771,[Vu]:775,[Uu]:773};function G(A,at,rt,wt,dt,Mt,it,Et){if(A===Wn){m===!0&&(W(3042),m=!1);return}if(m===!1&&(St(3042),m=!0),A!==Du){if(A!==p||Et!==P){if((x!==ji||S!==ji)&&(r.blendEquation(32774),x=ji,S=ji),Et)switch(A){case ns:r.blendFuncSeparate(1,771,1,771);break;case yl:r.blendFunc(1,1);break;case wl:r.blendFuncSeparate(0,769,0,1);break;case Ml:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case ns:r.blendFuncSeparate(770,771,1,771);break;case yl:r.blendFunc(770,1);break;case wl:r.blendFuncSeparate(0,769,0,1);break;case Ml:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}y=null,E=null,v=null,L=null,p=A,P=Et}return}dt=dt||at,Mt=Mt||rt,it=it||wt,(at!==x||dt!==S)&&(r.blendEquationSeparate(nt[at],nt[dt]),x=at,S=dt),(rt!==y||wt!==E||Mt!==v||it!==L)&&(r.blendFuncSeparate(zt[rt],zt[wt],zt[Mt],zt[it]),y=rt,E=wt,v=Mt,L=it),p=A,P=null}function Z(A,at){A.side===os?W(2884):St(2884);let rt=A.side===Ze;at&&(rt=!rt),tt(rt),A.blending===ns&&A.transparent===!1?G(Wn):G(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const wt=A.stencilWrite;c.setTest(wt),wt&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Tt(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?St(32926):W(32926)}function tt(A){N!==A&&(A?r.frontFace(2304):r.frontFace(2305),N=A)}function ft(A){A!==Ru?(St(2884),A!==et&&(A===vl?r.cullFace(1029):A===Pu?r.cullFace(1028):r.cullFace(1032))):W(2884),et=A}function ct(A){A!==z&&(R&&r.lineWidth(A),z=A)}function Tt(A,at,rt){A?(St(32823),(_!==at||C!==rt)&&(r.polygonOffset(at,rt),_=at,C=rt)):W(32823)}function yt(A){A?St(3089):W(3089)}function xt(A){A===void 0&&(A=33984+q-1),O!==A&&(r.activeTexture(A),O=A)}function ee(A,at){O===null&&xt();let rt=D[O];rt===void 0&&(rt={type:void 0,texture:void 0},D[O]=rt),(rt.type!==A||rt.texture!==at)&&(r.bindTexture(A,at||Nt[A]),rt.type=A,rt.texture=at)}function Zt(){const A=D[O];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function w(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function lt(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ut(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function vt(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Rt(A){K.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function Dt(A){Q.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),Q.copy(A))}function pt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},O=null,D={},u={},d=new WeakMap,f=[],g=null,m=!1,p=null,x=null,y=null,E=null,S=null,v=null,L=null,P=!1,N=null,et=null,z=null,_=null,C=null,K.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:St,disable:W,bindFramebuffer:Ht,drawBuffers:Ct,useProgram:Lt,setBlending:G,setMaterial:Z,setFlipSided:tt,setCullFace:ft,setLineWidth:ct,setPolygonOffset:Tt,setScissorTest:yt,activeTexture:xt,bindTexture:ee,unbindTexture:Zt,compressedTexImage2D:b,texImage2D:vt,texImage3D:V,texStorage2D:lt,texStorage3D:ut,texSubImage2D:w,texSubImage3D:H,compressedTexSubImage2D:$,scissor:Rt,viewport:Dt,reset:pt}}function h0(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,w){return x?new OffscreenCanvas(b,w):Us("canvas")}function E(b,w,H,$){let lt=1;if((b.width>$||b.height>$)&&(lt=$/Math.max(b.width,b.height)),lt<1||w===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){const ut=w?Ea:Math.floor,vt=ut(lt*b.width),V=ut(lt*b.height);m===void 0&&(m=y(vt,V));const Rt=H?y(vt,V):m;return Rt.width=vt,Rt.height=V,Rt.getContext("2d").drawImage(b,0,0,vt,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+vt+"x"+V+")."),Rt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Jl(b.width)&&Jl(b.height)}function v(b){return a?!1:b.wrapS!==Xe||b.wrapT!==Xe||b.minFilter!==me&&b.minFilter!==Ce}function L(b,w){return b.generateMipmaps&&w&&b.minFilter!==me&&b.minFilter!==Ce}function P(b){r.generateMipmap(b)}function N(b,w,H,$,lt=!1){if(a===!1)return w;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ut=w;return w===6403&&(H===5126&&(ut=33326),H===5131&&(ut=33325),H===5121&&(ut=33321)),w===33319&&(H===5126&&(ut=33328),H===5131&&(ut=33327),H===5121&&(ut=33323)),w===6408&&(H===5126&&(ut=34836),H===5131&&(ut=34842),H===5121&&(ut=$===Qt&&lt===!1?35907:32856),H===32819&&(ut=32854),H===32820&&(ut=32855)),(ut===33325||ut===33326||ut===33327||ut===33328||ut===34842||ut===34836)&&t.get("EXT_color_buffer_float"),ut}function et(b,w,H){return L(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==me&&b.minFilter!==Ce?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function z(b){return b===me||b===El||b===Tl?9728:9729}function _(b){const w=b.target;w.removeEventListener("dispose",_),q(w),w.isVideoTexture&&g.delete(w)}function C(b){const w=b.target;w.removeEventListener("dispose",C),B(w)}function q(b){const w=n.get(b);if(w.__webglInit===void 0)return;const H=b.source,$=p.get(H);if($){const lt=$[w.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&R(b),Object.keys($).length===0&&p.delete(H)}n.remove(b)}function R(b){const w=n.get(b);r.deleteTexture(w.__webglTexture);const H=b.source,$=p.get(H);delete $[w.__cacheKey],o.memory.textures--}function B(b){const w=b.texture,H=n.get(b),$=n.get(w);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let lt=0;lt<6;lt++)r.deleteFramebuffer(H.__webglFramebuffer[lt]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[lt]);else r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer&&r.deleteRenderbuffer(H.__webglColorRenderbuffer),H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer);if(b.isWebGLMultipleRenderTargets)for(let lt=0,ut=w.length;lt<ut;lt++){const vt=n.get(w[lt]);vt.__webglTexture&&(r.deleteTexture(vt.__webglTexture),o.memory.textures--),n.remove(w[lt])}n.remove(w),n.remove(b)}let F=0;function O(){F=0}function D(){const b=F;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),F+=1,b}function X(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.encoding),w.join()}function J(b,w){const H=n.get(b);if(b.isVideoTexture&&ee(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ct(H,b,w);return}}e.activeTexture(33984+w),e.bindTexture(3553,H.__webglTexture)}function K(b,w){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Ct(H,b,w);return}e.activeTexture(33984+w),e.bindTexture(35866,H.__webglTexture)}function Q(b,w){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Ct(H,b,w);return}e.activeTexture(33984+w),e.bindTexture(32879,H.__webglTexture)}function ht(b,w){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Lt(H,b,w);return}e.activeTexture(33984+w),e.bindTexture(34067,H.__webglTexture)}const Nt={[wa]:10497,[Xe]:33071,[Ma]:33648},St={[me]:9728,[El]:9984,[Tl]:9986,[Ce]:9729,[sd]:9985,[ho]:9987};function W(b,w,H){if(H?(r.texParameteri(b,10242,Nt[w.wrapS]),r.texParameteri(b,10243,Nt[w.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,Nt[w.wrapR]),r.texParameteri(b,10240,St[w.magFilter]),r.texParameteri(b,10241,St[w.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(w.wrapS!==Xe||w.wrapT!==Xe)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,z(w.magFilter)),r.texParameteri(b,10241,z(w.minFilter)),w.minFilter!==me&&w.minFilter!==Ce&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const $=t.get("EXT_texture_filter_anisotropic");if(w.type===oi&&t.has("OES_texture_float_linear")===!1||a===!1&&w.type===is&&t.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||n.get(w).__currentAnisotropy)&&(r.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy)}}function Ht(b,w){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",_));const $=w.source;let lt=p.get($);lt===void 0&&(lt={},p.set($,lt));const ut=X(w);if(ut!==b.__cacheKey){lt[ut]===void 0&&(lt[ut]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),lt[ut].usedTimes++;const vt=lt[b.__cacheKey];vt!==void 0&&(lt[b.__cacheKey].usedTimes--,vt.usedTimes===0&&R(w)),b.__cacheKey=ut,b.__webglTexture=lt[ut].texture}return H}function Ct(b,w,H){let $=3553;w.isDataArrayTexture&&($=35866),w.isData3DTexture&&($=32879);const lt=Ht(b,w),ut=w.source;if(e.activeTexture(33984+H),e.bindTexture($,b.__webglTexture),ut.version!==ut.__currentVersion||lt===!0){r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const vt=v(w)&&S(w.image)===!1;let V=E(w.image,vt,!1,h);V=Zt(w,V);const Rt=S(V)||a,Dt=s.convert(w.format,w.encoding);let pt=s.convert(w.type),A=N(w.internalFormat,Dt,pt,w.encoding,w.isVideoTexture);W($,w,Rt);let at;const rt=w.mipmaps,wt=a&&w.isVideoTexture!==!0,dt=b.__version===void 0,Mt=et(w,V,Rt);if(w.isDepthTexture)A=6402,a?w.type===oi?A=36012:w.type===Wr?A=33190:w.type===ss?A=35056:A=33189:w.type===oi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===gi&&A===6402&&w.type!==Bs&&w.type!==Wr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=Bs,pt=s.convert(w.type)),w.format===cs&&A===6402&&(A=34041,w.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ss,pt=s.convert(w.type))),wt&&dt?e.texStorage2D(3553,1,A,V.width,V.height):e.texImage2D(3553,0,A,V.width,V.height,0,Dt,pt,null);else if(w.isDataTexture)if(rt.length>0&&Rt){wt&&dt&&e.texStorage2D(3553,Mt,A,rt[0].width,rt[0].height);for(let it=0,Et=rt.length;it<Et;it++)at=rt[it],wt?e.texSubImage2D(3553,it,0,0,at.width,at.height,Dt,pt,at.data):e.texImage2D(3553,it,A,at.width,at.height,0,Dt,pt,at.data);w.generateMipmaps=!1}else wt?(dt&&e.texStorage2D(3553,Mt,A,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,Dt,pt,V.data)):e.texImage2D(3553,0,A,V.width,V.height,0,Dt,pt,V.data);else if(w.isCompressedTexture){wt&&dt&&e.texStorage2D(3553,Mt,A,rt[0].width,rt[0].height);for(let it=0,Et=rt.length;it<Et;it++)at=rt[it],w.format!==je?Dt!==null?wt?e.compressedTexSubImage2D(3553,it,0,0,at.width,at.height,Dt,at.data):e.compressedTexImage2D(3553,it,A,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):wt?e.texSubImage2D(3553,it,0,0,at.width,at.height,Dt,pt,at.data):e.texImage2D(3553,it,A,at.width,at.height,0,Dt,pt,at.data)}else if(w.isDataArrayTexture)wt?(dt&&e.texStorage3D(35866,Mt,A,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,Dt,pt,V.data)):e.texImage3D(35866,0,A,V.width,V.height,V.depth,0,Dt,pt,V.data);else if(w.isData3DTexture)wt?(dt&&e.texStorage3D(32879,Mt,A,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,Dt,pt,V.data)):e.texImage3D(32879,0,A,V.width,V.height,V.depth,0,Dt,pt,V.data);else if(w.isFramebufferTexture)wt&&dt?e.texStorage2D(3553,Mt,A,V.width,V.height):e.texImage2D(3553,0,A,V.width,V.height,0,Dt,pt,null);else if(rt.length>0&&Rt){wt&&dt&&e.texStorage2D(3553,Mt,A,rt[0].width,rt[0].height);for(let it=0,Et=rt.length;it<Et;it++)at=rt[it],wt?e.texSubImage2D(3553,it,0,0,Dt,pt,at):e.texImage2D(3553,it,A,Dt,pt,at);w.generateMipmaps=!1}else wt?(dt&&e.texStorage2D(3553,Mt,A,V.width,V.height),e.texSubImage2D(3553,0,0,0,Dt,pt,V)):e.texImage2D(3553,0,A,Dt,pt,V);L(w,Rt)&&P($),ut.__currentVersion=ut.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function Lt(b,w,H){if(w.image.length!==6)return;const $=Ht(b,w),lt=w.source;if(e.activeTexture(33984+H),e.bindTexture(34067,b.__webglTexture),lt.version!==lt.__currentVersion||$===!0){r.pixelStorei(37440,w.flipY),r.pixelStorei(37441,w.premultiplyAlpha),r.pixelStorei(3317,w.unpackAlignment),r.pixelStorei(37443,0);const ut=w.isCompressedTexture||w.image[0].isCompressedTexture,vt=w.image[0]&&w.image[0].isDataTexture,V=[];for(let it=0;it<6;it++)!ut&&!vt?V[it]=E(w.image[it],!1,!0,c):V[it]=vt?w.image[it].image:w.image[it],V[it]=Zt(w,V[it]);const Rt=V[0],Dt=S(Rt)||a,pt=s.convert(w.format,w.encoding),A=s.convert(w.type),at=N(w.internalFormat,pt,A,w.encoding),rt=a&&w.isVideoTexture!==!0,wt=b.__version===void 0;let dt=et(w,Rt,Dt);W(34067,w,Dt);let Mt;if(ut){rt&&wt&&e.texStorage2D(34067,dt,at,Rt.width,Rt.height);for(let it=0;it<6;it++){Mt=V[it].mipmaps;for(let Et=0;Et<Mt.length;Et++){const Yt=Mt[Et];w.format!==je?pt!==null?rt?e.compressedTexSubImage2D(34069+it,Et,0,0,Yt.width,Yt.height,pt,Yt.data):e.compressedTexImage2D(34069+it,Et,at,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?e.texSubImage2D(34069+it,Et,0,0,Yt.width,Yt.height,pt,A,Yt.data):e.texImage2D(34069+it,Et,at,Yt.width,Yt.height,0,pt,A,Yt.data)}}}else{Mt=w.mipmaps,rt&&wt&&(Mt.length>0&&dt++,e.texStorage2D(34067,dt,at,V[0].width,V[0].height));for(let it=0;it<6;it++)if(vt){rt?e.texSubImage2D(34069+it,0,0,0,V[it].width,V[it].height,pt,A,V[it].data):e.texImage2D(34069+it,0,at,V[it].width,V[it].height,0,pt,A,V[it].data);for(let Et=0;Et<Mt.length;Et++){const Bt=Mt[Et].image[it].image;rt?e.texSubImage2D(34069+it,Et+1,0,0,Bt.width,Bt.height,pt,A,Bt.data):e.texImage2D(34069+it,Et+1,at,Bt.width,Bt.height,0,pt,A,Bt.data)}}else{rt?e.texSubImage2D(34069+it,0,0,0,pt,A,V[it]):e.texImage2D(34069+it,0,at,pt,A,V[it]);for(let Et=0;Et<Mt.length;Et++){const Yt=Mt[Et];rt?e.texSubImage2D(34069+it,Et+1,0,0,pt,A,Yt.image[it]):e.texImage2D(34069+it,Et+1,at,pt,A,Yt.image[it])}}}L(w,Dt)&&P(34067),lt.__currentVersion=lt.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function nt(b,w,H,$,lt){const ut=s.convert(H.format,H.encoding),vt=s.convert(H.type),V=N(H.internalFormat,ut,vt,H.encoding);n.get(w).__hasExternalTextures||(lt===32879||lt===35866?e.texImage3D(lt,0,V,w.width,w.height,w.depth,0,ut,vt,null):e.texImage2D(lt,0,V,w.width,w.height,0,ut,vt,null)),e.bindFramebuffer(36160,b),xt(w)?d.framebufferTexture2DMultisampleEXT(36160,$,lt,n.get(H).__webglTexture,0,yt(w)):r.framebufferTexture2D(36160,$,lt,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function zt(b,w,H){if(r.bindRenderbuffer(36161,b),w.depthBuffer&&!w.stencilBuffer){let $=33189;if(H||xt(w)){const lt=w.depthTexture;lt&&lt.isDepthTexture&&(lt.type===oi?$=36012:lt.type===Wr&&($=33190));const ut=yt(w);xt(w)?d.renderbufferStorageMultisampleEXT(36161,ut,$,w.width,w.height):r.renderbufferStorageMultisample(36161,ut,$,w.width,w.height)}else r.renderbufferStorage(36161,$,w.width,w.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(w.depthBuffer&&w.stencilBuffer){const $=yt(w);H&&xt(w)===!1?r.renderbufferStorageMultisample(36161,$,35056,w.width,w.height):xt(w)?d.renderbufferStorageMultisampleEXT(36161,$,35056,w.width,w.height):r.renderbufferStorage(36161,34041,w.width,w.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const $=w.isWebGLMultipleRenderTargets===!0?w.texture[0]:w.texture,lt=s.convert($.format,$.encoding),ut=s.convert($.type),vt=N($.internalFormat,lt,ut,$.encoding),V=yt(w);H&&xt(w)===!1?r.renderbufferStorageMultisample(36161,V,vt,w.width,w.height):xt(w)?d.renderbufferStorageMultisampleEXT(36161,V,vt,w.width,w.height):r.renderbufferStorage(36161,vt,w.width,w.height)}r.bindRenderbuffer(36161,null)}function G(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),J(w.depthTexture,0);const $=n.get(w.depthTexture).__webglTexture,lt=yt(w);if(w.depthTexture.format===gi)xt(w)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,lt):r.framebufferTexture2D(36160,36096,3553,$,0);else if(w.depthTexture.format===cs)xt(w)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,lt):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Z(b){const w=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");G(w.__webglFramebuffer,b)}else if(H){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]=r.createRenderbuffer(),zt(w.__webglDepthbuffer[$],b,!1)}else e.bindFramebuffer(36160,w.__webglFramebuffer),w.__webglDepthbuffer=r.createRenderbuffer(),zt(w.__webglDepthbuffer,b,!1);e.bindFramebuffer(36160,null)}function tt(b,w,H){const $=n.get(b);w!==void 0&&nt($.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&Z(b)}function ft(b){const w=b.texture,H=n.get(b),$=n.get(w);b.addEventListener("dispose",C),b.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=w.version,o.memory.textures++);const lt=b.isWebGLCubeRenderTarget===!0,ut=b.isWebGLMultipleRenderTargets===!0,vt=S(b)||a;if(lt){H.__webglFramebuffer=[];for(let V=0;V<6;V++)H.__webglFramebuffer[V]=r.createFramebuffer()}else if(H.__webglFramebuffer=r.createFramebuffer(),ut)if(i.drawBuffers){const V=b.texture;for(let Rt=0,Dt=V.length;Rt<Dt;Rt++){const pt=n.get(V[Rt]);pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&b.samples>0&&xt(b)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer);const V=s.convert(w.format,w.encoding),Rt=s.convert(w.type),Dt=N(w.internalFormat,V,Rt,w.encoding),pt=yt(b);r.renderbufferStorageMultisample(36161,pt,Dt,b.width,b.height),e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,H.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),zt(H.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(36160,null)}if(lt){e.bindTexture(34067,$.__webglTexture),W(34067,w,vt);for(let V=0;V<6;V++)nt(H.__webglFramebuffer[V],b,w,36064,34069+V);L(w,vt)&&P(34067),e.unbindTexture()}else if(ut){const V=b.texture;for(let Rt=0,Dt=V.length;Rt<Dt;Rt++){const pt=V[Rt],A=n.get(pt);e.bindTexture(3553,A.__webglTexture),W(3553,pt,vt),nt(H.__webglFramebuffer,b,pt,36064+Rt,3553),L(pt,vt)&&P(3553)}e.unbindTexture()}else{let V=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?V=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(V,$.__webglTexture),W(V,w,vt),nt(H.__webglFramebuffer,b,w,36064,V),L(w,vt)&&P(V),e.unbindTexture()}b.depthBuffer&&Z(b)}function ct(b){const w=S(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0,lt=H.length;$<lt;$++){const ut=H[$];if(L(ut,w)){const vt=b.isWebGLCubeRenderTarget?34067:3553,V=n.get(ut).__webglTexture;e.bindTexture(vt,V),P(vt),e.unbindTexture()}}}function Tt(b){if(a&&b.samples>0&&xt(b)===!1){const w=b.width,H=b.height;let $=16384;const lt=[36064],ut=b.stencilBuffer?33306:36096;b.depthBuffer&&lt.push(ut);const vt=n.get(b),V=vt.__ignoreDepthValues!==void 0?vt.__ignoreDepthValues:!1;V===!1&&(b.depthBuffer&&($|=256),b.stencilBuffer&&($|=1024)),e.bindFramebuffer(36008,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,vt.__webglFramebuffer),V===!0&&(r.invalidateFramebuffer(36008,[ut]),r.invalidateFramebuffer(36009,[ut])),r.blitFramebuffer(0,0,w,H,0,0,w,H,$,9728),f&&r.invalidateFramebuffer(36008,lt),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,vt.__webglMultisampledFramebuffer)}}function yt(b){return Math.min(u,b.samples)}function xt(b){const w=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ee(b){const w=o.render.frame;g.get(b)!==w&&(g.set(b,w),b.update())}function Zt(b,w){const H=b.encoding,$=b.format,lt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===ba||H!==Tn&&(H===Qt?a===!1?t.has("EXT_sRGB")===!0&&$===je?(b.format=ba,b.minFilter=Ce,b.generateMipmaps=!1):w=Mi.sRGBToLinear(w):($!==je||lt!==vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),w}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=ht,this.rebindTextures=tt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=xt}function u0(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===vi)return 5121;if(s===ld)return 32819;if(s===cd)return 32820;if(s===rd)return 5120;if(s===od)return 5122;if(s===Bs)return 5123;if(s===ad)return 5124;if(s===Wr)return 5125;if(s===oi)return 5126;if(s===is)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===hd)return 6406;if(s===je)return 6408;if(s===dd)return 6409;if(s===fd)return 6410;if(s===gi)return 6402;if(s===cs)return 34041;if(s===pd)return 6403;if(s===ud)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ba)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===md)return 36244;if(s===gd)return 33319;if(s===xd)return 33320;if(s===_d)return 36249;if(s===To||s===Ao||s===Co||s===Lo)if(o===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===To)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ao)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Co)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Lo)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===To)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ao)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Co)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Lo)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Al||s===Cl||s===Ll||s===Rl)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Al)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cl)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Ll)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Rl)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===vd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pl||s===Dl)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Pl)return o===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Dl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Il||s===kl||s===zl||s===Fl||s===Nl||s===Bl||s===Ol||s===Ul||s===Hl||s===Vl||s===Gl||s===Wl||s===ql||s===Xl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Il)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===kl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===zl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ol)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ul)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Hl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Vl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Gl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ql)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xl)return o===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===jl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===jl)return o===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===ss)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Ih extends Ee{constructor(t=[]){super();this.cameras=t}}Ih.prototype.isArrayCamera=!0;class Ki extends Gt{constructor(){super();this.type="Group"}}Ki.prototype.isGroup=!0;const d0={type:"move"};class ra{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ki,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ki,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ki,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(d0))),c&&t.hand){o=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n);if(c.joints[m.jointName]===void 0){const y=new Ki;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[m.jointName]=y,c.add(y)}const x=c.joints[m.jointName];p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class kh extends xe{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:gi,h!==gi&&h!==cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=Bs),n===void 0&&h===cs&&(n=ss);super(null,i,s,o,a,l,h,n,c);this.image={width:t,height:e},this.magFilter=a!==void 0?a:me,this.minFilter=l!==void 0?l:me,this.flipY=!1,this.generateMipmaps=!1}}kh.prototype.isDepthTexture=!0;class f0 extends wi{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null;const f=e.getContextAttributes();let g=null,m=null;const p=[],x=new Map,y=new Ee;y.layers.enable(1),y.viewport=new jt;const E=new Ee;E.layers.enable(2),E.viewport=new jt;const S=[y,E],v=new Ih;v.layers.enable(1),v.layers.enable(2);let L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let X=p[D];return X===void 0&&(X=new ra,p[D]=X),X.getTargetRaySpace()},this.getControllerGrip=function(D){let X=p[D];return X===void 0&&(X=new ra,p[D]=X),X.getGripSpace()},this.getHand=function(D){let X=p[D];return X===void 0&&(X=new ra,p[D]=X),X.getHandSpace()};function N(D){const X=x.get(D.inputSource);X&&X.dispatchEvent({type:D.type,data:D.inputSource})}function et(){x.forEach(function(D,X){D.disconnect(X)}),x.clear(),L=null,P=null,t.setRenderTarget(g),u=null,h=null,c=null,i=null,m=null,O.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return c},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",et),i.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:u}),m=new Ie(u.framebufferWidth,u.framebufferHeight,{format:je,type:vi,encoding:t.outputEncoding})}else{let X=null,J=null,K=null;f.depth&&(K=f.stencil?35056:33190,X=f.stencil?cs:gi,J=f.stencil?ss:Bs);const Q={colorFormat:t.outputEncoding===Qt?35907:32856,depthFormat:K,scaleFactor:s};c=new XRWebGLBinding(i,e),h=c.createProjectionLayer(Q),i.updateRenderState({layers:[h]}),m=new Ie(h.textureWidth,h.textureHeight,{format:je,type:vi,depthTexture:new kh(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const ht=t.properties.get(m);ht.__ignoreDepthValues=h.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),O.setContext(i),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(D){const X=i.inputSources;for(let J=0;J<p.length;J++)x.set(X[J],p[J]);for(let J=0;J<D.removed.length;J++){const K=D.removed[J],Q=x.get(K);Q&&(Q.dispatchEvent({type:"disconnected",data:K}),x.delete(K))}for(let J=0;J<D.added.length;J++){const K=D.added[J],Q=x.get(K);Q&&Q.dispatchEvent({type:"connected",data:K})}}const _=new T,C=new T;function q(D,X,J){_.setFromMatrixPosition(X.matrixWorld),C.setFromMatrixPosition(J.matrixWorld);const K=_.distanceTo(C),Q=X.projectionMatrix.elements,ht=J.projectionMatrix.elements,Nt=Q[14]/(Q[10]-1),St=Q[14]/(Q[10]+1),W=(Q[9]+1)/Q[5],Ht=(Q[9]-1)/Q[5],Ct=(Q[8]-1)/Q[0],Lt=(ht[8]+1)/ht[0],nt=Nt*Ct,zt=Nt*Lt,G=K/(-Ct+Lt),Z=G*-Ct;X.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Z),D.translateZ(G),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const tt=Nt+G,ft=St+G,ct=nt-Z,Tt=zt+(K-Z),yt=W*St/ft*tt,xt=Ht*St/ft*tt;D.projectionMatrix.makePerspective(ct,Tt,yt,xt,tt,ft)}function R(D,X){X===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(X.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;v.near=E.near=y.near=D.near,v.far=E.far=y.far=D.far,(L!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,P=v.far);const X=D.parent,J=v.cameras;R(v,X);for(let Q=0;Q<J.length;Q++)R(J[Q],X);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),D.position.copy(v.position),D.quaternion.copy(v.quaternion),D.scale.copy(v.scale),D.matrix.copy(v.matrix),D.matrixWorld.copy(v.matrixWorld);const K=D.children;for(let Q=0,ht=K.length;Q<ht;Q++)K[Q].updateMatrixWorld(!0);J.length===2?q(v,y,E):v.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(D){h!==null&&(h.fixedFoveation=D),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=D)};let B=null;function F(D,X){if(l=X.getViewerPose(o),d=X,l!==null){const K=l.views;u!==null&&(t.setRenderTargetFramebuffer(m,u.framebuffer),t.setRenderTarget(m));let Q=!1;K.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let ht=0;ht<K.length;ht++){const Nt=K[ht];let St=null;if(u!==null)St=u.getViewport(Nt);else{const Ht=c.getViewSubImage(h,Nt);St=Ht.viewport,ht===0&&(t.setRenderTargetTextures(m,Ht.colorTexture,h.ignoreDepthValues?void 0:Ht.depthStencilTexture),t.setRenderTarget(m))}const W=S[ht];W.matrix.fromArray(Nt.transform.matrix),W.projectionMatrix.fromArray(Nt.projectionMatrix),W.viewport.set(St.x,St.y,St.width,St.height),ht===0&&v.matrix.copy(W.matrix),Q===!0&&v.cameras.push(W)}}const J=i.inputSources;for(let K=0;K<p.length;K++){const Q=p[K],ht=J[K];Q.update(ht,X,o)}B&&B(D,X),d=null}const O=new Sh;O.setAnimationLoop(F),this.setAnimationLoop=function(D){B=D},this.dispose=function(){}}}function p0(r,t){function e(m,p){m.fogColor.value.copy(p.color),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),h(m,p)):p.isMeshPhongMaterial?(i(m,p),c(m,p)):p.isMeshStandardMaterial?(i(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,E)):p.isMeshMatcapMaterial?(i(m,p),f(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,x,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const S=r.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),m.uvTransform.value.copy(y.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uv2Transform.value.copy(E.matrix))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),m.uvTransform.value.copy(E.matrix))}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function c(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function f(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function m0(){const r=Us("canvas");return r.style.display="block",r}function Xt(r={}){const t=r.canvas!==void 0?r.canvas:m0(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;r.context!==void 0?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Tn,this.physicallyCorrectLights=!1,this.toneMapping=Sn,this.toneMappingExposure=1;const m=this;let p=!1,x=0,y=0,E=null,S=-1,v=null;const L=new jt,P=new jt;let N=null,et=t.width,z=t.height,_=1,C=null,q=null;const R=new jt(0,0,et,z),B=new jt(0,0,et,z);let F=!1;const O=new po;let D=!1,X=!1,J=null;const K=new _t,Q=new Y,ht=new T,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function St(){return E===null?_:1}let W=e;function Ht(M,I){for(let U=0;U<M.length;U++){const k=M[U],j=t.getContext(k,I);if(j!==null)return j}return null}try{const M={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ba}`),t.addEventListener("webglcontextlost",A,!1),t.addEventListener("webglcontextrestored",at,!1),W===null){const I=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&I.shift(),W=Ht(I,M),W===null)throw Ht(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ct,Lt,nt,zt,G,Z,tt,ft,ct,Tt,yt,xt,ee,Zt,b,w,H,$,lt,ut,vt,V,Rt;function Dt(){Ct=new Im(W),Lt=new Am(W,Ct,r),Ct.init(Lt),V=new u0(W,Ct,Lt),nt=new c0(W,Ct,Lt),zt=new Fm(W),G=new Kg,Z=new h0(W,Ct,nt,G,Lt,V,zt),tt=new Lm(m),ft=new Dm(m),ct=new Jd(W,Lt),Rt=new Em(W,Ct,ct,Lt),Tt=new km(W,ct,zt,Rt),yt=new Um(W,Tt,ct,zt),lt=new Om(W,Lt,Z),w=new Cm(G),xt=new $g(m,tt,ft,Ct,Lt,Rt,w),ee=new p0(m,G),Zt=new t0,b=new o0(Ct,Lt),$=new Sm(m,tt,nt,yt,h,o),H=new Dh(m,yt,Lt),ut=new Tm(W,Ct,zt,Lt),vt=new zm(W,Ct,zt,Lt),zt.programs=xt.programs,m.capabilities=Lt,m.extensions=Ct,m.properties=G,m.renderLists=Zt,m.shadowMap=H,m.state=nt,m.info=zt}Dt();const pt=new f0(m,W);this.xr=pt,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const M=Ct.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ct.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(M){M!==void 0&&(_=M,this.setSize(et,z,!1))},this.getSize=function(M){return M.set(et,z)},this.setSize=function(M,I,U){if(pt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=M,z=I,t.width=Math.floor(M*_),t.height=Math.floor(I*_),U!==!1&&(t.style.width=M+"px",t.style.height=I+"px"),this.setViewport(0,0,M,I)},this.getDrawingBufferSize=function(M){return M.set(et*_,z*_).floor()},this.setDrawingBufferSize=function(M,I,U){et=M,z=I,_=U,t.width=Math.floor(M*U),t.height=Math.floor(I*U),this.setViewport(0,0,M,I)},this.getCurrentViewport=function(M){return M.copy(L)},this.getViewport=function(M){return M.copy(R)},this.setViewport=function(M,I,U,k){M.isVector4?R.set(M.x,M.y,M.z,M.w):R.set(M,I,U,k),nt.viewport(L.copy(R).multiplyScalar(_).floor())},this.getScissor=function(M){return M.copy(B)},this.setScissor=function(M,I,U,k){M.isVector4?B.set(M.x,M.y,M.z,M.w):B.set(M,I,U,k),nt.scissor(P.copy(B).multiplyScalar(_).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(M){nt.setScissorTest(F=M)},this.setOpaqueSort=function(M){C=M},this.setTransparentSort=function(M){q=M},this.getClearColor=function(M){return M.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(M=!0,I=!0,U=!0){let k=0;M&&(k|=16384),I&&(k|=256),U&&(k|=1024),W.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",A,!1),t.removeEventListener("webglcontextrestored",at,!1),Zt.dispose(),b.dispose(),G.dispose(),tt.dispose(),ft.dispose(),yt.dispose(),Rt.dispose(),xt.dispose(),pt.dispose(),pt.removeEventListener("sessionstart",Et),pt.removeEventListener("sessionend",Yt),J&&(J.dispose(),J=null),Bt.stop()};function A(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function at(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const M=zt.autoReset,I=H.enabled,U=H.autoUpdate,k=H.needsUpdate,j=H.type;Dt(),zt.autoReset=M,H.enabled=I,H.autoUpdate=U,H.needsUpdate=k,H.type=j}function rt(M){const I=M.target;I.removeEventListener("dispose",rt),wt(I)}function wt(M){dt(M),G.remove(M)}function dt(M){const I=G.get(M).programs;I!==void 0&&(I.forEach(function(U){xt.releaseProgram(U)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,I,U,k,j,bt){I===null&&(I=Nt);const At=j.isMesh&&j.matrixWorld.determinant()<0,It=bu(M,I,U,k,j);nt.setMaterial(k,At);let Pt=U.index;const Wt=U.attributes.position;if(Pt===null){if(Wt===void 0||Wt.count===0)return}else if(Pt.count===0)return;let Ot=1;k.wireframe===!0&&(Pt=Tt.getWireframeAttribute(U),Ot=2),Rt.setup(j,k,It,U,Pt);let Ut,ie=ut;Pt!==null&&(Ut=ct.get(Pt),ie=vt,ie.setIndex(Ut));const Yn=Pt!==null?Pt.count:Wt.count,Ei=U.drawRange.start*Ot,Ti=U.drawRange.count*Ot,tn=bt!==null?bt.start*Ot:0,Vt=bt!==null?bt.count*Ot:1/0,Ai=Math.max(Ei,tn),re=Math.min(Yn,Ei+Ti,tn+Vt)-1,en=Math.max(0,re-Ai+1);if(en!==0){if(j.isMesh)k.wireframe===!0?(nt.setLineWidth(k.wireframeLinewidth*St()),ie.setMode(1)):ie.setMode(4);else if(j.isLine){let Ln=k.linewidth;Ln===void 0&&(Ln=1),nt.setLineWidth(Ln*St()),j.isLineSegments?ie.setMode(1):j.isLineLoop?ie.setMode(2):ie.setMode(3)}else j.isPoints?ie.setMode(0):j.isSprite&&ie.setMode(4);if(j.isInstancedMesh)ie.renderInstances(Ai,en,j.count);else if(U.isInstancedBufferGeometry){const Ln=Math.min(U.instanceCount,U._maxInstanceCount);ie.renderInstances(Ai,en,Ln)}else ie.render(Ai,en)}},this.compile=function(M,I){d=b.get(M),d.init(),g.push(d),M.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(m.physicallyCorrectLights),M.traverse(function(U){const k=U.material;if(k)if(Array.isArray(k))for(let j=0;j<k.length;j++){const bt=k[j];Mo(bt,M,U)}else Mo(k,M,U)}),g.pop(),d=null};let Mt=null;function it(M){Mt&&Mt(M)}function Et(){Bt.stop()}function Yt(){Bt.start()}const Bt=new Sh;Bt.setAnimationLoop(it),typeof self!="undefined"&&Bt.setContext(self),this.setAnimationLoop=function(M){Mt=M,pt.setAnimationLoop(M),M===null?Bt.stop():Bt.start()},pt.addEventListener("sessionstart",Et),pt.addEventListener("sessionend",Yt),this.render=function(M,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;M.autoUpdate===!0&&M.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),pt.enabled===!0&&pt.isPresenting===!0&&(pt.cameraAutoUpdate===!0&&pt.updateCamera(I),I=pt.getCamera()),M.isScene===!0&&M.onBeforeRender(m,M,I,E),d=b.get(M,g.length),d.init(),g.push(d),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),O.setFromProjectionMatrix(K),X=this.localClippingEnabled,D=w.init(this.clippingPlanes,X,I),u=Zt.get(M,f.length),u.init(),f.push(u),Ke(M,I,0,m.sortObjects),u.finish(),m.sortObjects===!0&&u.sort(C,q),D===!0&&w.beginShadows();const U=d.state.shadowsArray;if(H.render(U,M,I),D===!0&&w.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(u,M),d.setupLights(m.physicallyCorrectLights),I.isArrayCamera){const k=I.cameras;for(let j=0,bt=k.length;j<bt;j++){const At=k[j];Qe(u,M,At,At.viewport)}}else Qe(u,M,I);E!==null&&(Z.updateMultisampleRenderTarget(E),Z.updateRenderTargetMipmap(E)),M.isScene===!0&&M.onAfterRender(m,M,I),Rt.resetDefaultState(),S=-1,v=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function Ke(M,I,U,k){if(M.visible===!1)return;if(M.layers.test(I.layers)){if(M.isGroup)U=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(I);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||O.intersectsSprite(M)){k&&ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const At=yt.update(M),It=M.material;It.visible&&u.push(M,At,It,U,ht.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(M.isSkinnedMesh&&M.skeleton.frame!==zt.render.frame&&(M.skeleton.update(),M.skeleton.frame=zt.render.frame),!M.frustumCulled||O.intersectsObject(M))){k&&ht.setFromMatrixPosition(M.matrixWorld).applyMatrix4(K);const At=yt.update(M),It=M.material;if(Array.isArray(It)){const Pt=At.groups;for(let Wt=0,Ot=Pt.length;Wt<Ot;Wt++){const Ut=Pt[Wt],ie=It[Ut.materialIndex];ie&&ie.visible&&u.push(M,At,ie,U,ht.z,Ut)}}else It.visible&&u.push(M,At,It,U,ht.z,null)}}const bt=M.children;for(let At=0,It=bt.length;At<It;At++)Ke(bt[At],I,U,k)}function Qe(M,I,U,k){const j=M.opaque,bt=M.transmissive,At=M.transparent;d.setupLightsView(U),bt.length>0&&wu(j,I,U),k&&nt.viewport(L.copy(k)),j.length>0&&or(j,I,U),bt.length>0&&or(bt,I,U),At.length>0&&or(At,I,U),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function wu(M,I,U){const k=Lt.isWebGL2;J===null&&(J=new Ie(1,1,{generateMipmaps:!0,type:V.convert(is)!==null?is:vi,minFilter:ho,samples:k&&s===!0?4:0})),m.getDrawingBufferSize(Q),k?J.setSize(Q.x,Q.y):J.setSize(Ea(Q.x),Ea(Q.y));const j=m.getRenderTarget();m.setRenderTarget(J),m.clear();const bt=m.toneMapping;m.toneMapping=Sn,or(M,I,U),m.toneMapping=bt,Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J),m.setRenderTarget(j)}function or(M,I,U){const k=I.isScene===!0?I.overrideMaterial:null;for(let j=0,bt=M.length;j<bt;j++){const At=M[j],It=At.object,Pt=At.geometry,Wt=k===null?At.material:k,Ot=At.group;It.layers.test(U.layers)&&Mu(It,I,U,Pt,Wt,Ot)}}function Mu(M,I,U,k,j,bt){M.onBeforeRender(m,I,U,k,j,bt),M.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),j.onBeforeRender(m,I,U,k,M,bt),j.transparent===!0&&j.side===os?(j.side=Ze,j.needsUpdate=!0,m.renderBufferDirect(U,I,k,j,M,bt),j.side=Ns,j.needsUpdate=!0,m.renderBufferDirect(U,I,k,j,M,bt),j.side=os):m.renderBufferDirect(U,I,k,j,M,bt),M.onAfterRender(m,I,U,k,j,bt)}function Mo(M,I,U){I.isScene!==!0&&(I=Nt);const k=G.get(M),j=d.state.lights,bt=d.state.shadowsArray,At=j.state.version,It=xt.getParameters(M,j.state,bt,I,U),Pt=xt.getProgramCacheKey(It);let Wt=k.programs;k.environment=M.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(M.isMeshStandardMaterial?ft:tt).get(M.envMap||k.environment),Wt===void 0&&(M.addEventListener("dispose",rt),Wt=new Map,k.programs=Wt);let Ot=Wt.get(Pt);if(Ot!==void 0){if(k.currentProgram===Ot&&k.lightsStateVersion===At)return ml(M,It),Ot}else It.uniforms=xt.getUniforms(M),M.onBuild(U,It,m),M.onBeforeCompile(It,m),Ot=xt.acquireProgram(It,Pt),Wt.set(Pt,Ot),k.uniforms=It.uniforms;const Ut=k.uniforms;(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ut.clippingPlanes=w.uniform),ml(M,It),k.needsLights=Eu(M),k.lightsStateVersion=At,k.needsLights&&(Ut.ambientLightColor.value=j.state.ambient,Ut.lightProbe.value=j.state.probe,Ut.directionalLights.value=j.state.directional,Ut.directionalLightShadows.value=j.state.directionalShadow,Ut.spotLights.value=j.state.spot,Ut.spotLightShadows.value=j.state.spotShadow,Ut.rectAreaLights.value=j.state.rectArea,Ut.ltc_1.value=j.state.rectAreaLTC1,Ut.ltc_2.value=j.state.rectAreaLTC2,Ut.pointLights.value=j.state.point,Ut.pointLightShadows.value=j.state.pointShadow,Ut.hemisphereLights.value=j.state.hemi,Ut.directionalShadowMap.value=j.state.directionalShadowMap,Ut.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ut.spotShadowMap.value=j.state.spotShadowMap,Ut.spotShadowMatrix.value=j.state.spotShadowMatrix,Ut.pointShadowMap.value=j.state.pointShadowMap,Ut.pointShadowMatrix.value=j.state.pointShadowMatrix);const ie=Ot.getUniforms(),Yn=qn.seqWithValue(ie.seq,Ut);return k.currentProgram=Ot,k.uniformsList=Yn,Ot}function ml(M,I){const U=G.get(M);U.outputEncoding=I.outputEncoding,U.instancing=I.instancing,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function bu(M,I,U,k,j){I.isScene!==!0&&(I=Nt),Z.resetTextureUnits();const bt=I.fog,At=k.isMeshStandardMaterial?I.environment:null,It=E===null?m.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:Tn,Pt=(k.isMeshStandardMaterial?ft:tt).get(k.envMap||At),Wt=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Ot=!!k.normalMap&&!!U.attributes.tangent,Ut=!!U.morphAttributes.position,ie=!!U.morphAttributes.normal,Yn=!!U.morphAttributes.color,Ei=k.toneMapped?m.toneMapping:Sn,Ti=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,tn=Ti!==void 0?Ti.length:0,Vt=G.get(k),Ai=d.state.lights;if(D===!0&&(X===!0||M!==v)){const Ue=M===v&&k.id===S;w.setState(k,M,Ue)}let re=!1;k.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==Ai.state.version||Vt.outputEncoding!==It||j.isInstancedMesh&&Vt.instancing===!1||!j.isInstancedMesh&&Vt.instancing===!0||j.isSkinnedMesh&&Vt.skinning===!1||!j.isSkinnedMesh&&Vt.skinning===!0||Vt.envMap!==Pt||k.fog&&Vt.fog!==bt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==w.numPlanes||Vt.numIntersection!==w.numIntersection)||Vt.vertexAlphas!==Wt||Vt.vertexTangents!==Ot||Vt.morphTargets!==Ut||Vt.morphNormals!==ie||Vt.morphColors!==Yn||Vt.toneMapping!==Ei||Lt.isWebGL2===!0&&Vt.morphTargetsCount!==tn)&&(re=!0):(re=!0,Vt.__version=k.version);let en=Vt.currentProgram;re===!0&&(en=Mo(k,I,j));let Ln=!1,ys=!1,bo=!1;const ye=en.getUniforms(),ws=Vt.uniforms;if(nt.useProgram(en.program)&&(Ln=!0,ys=!0,bo=!0),k.id!==S&&(S=k.id,ys=!0),Ln||v!==M){if(ye.setValue(W,"projectionMatrix",M.projectionMatrix),Lt.logarithmicDepthBuffer&&ye.setValue(W,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),v!==M&&(v=M,ys=!0,bo=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Ue=ye.map.cameraPosition;Ue!==void 0&&Ue.setValue(W,ht.setFromMatrixPosition(M.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ye.setValue(W,"isOrthographic",M.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||j.isSkinnedMesh)&&ye.setValue(W,"viewMatrix",M.matrixWorldInverse)}if(j.isSkinnedMesh){ye.setOptional(W,j,"bindMatrix"),ye.setOptional(W,j,"bindMatrixInverse");const Ue=j.skeleton;Ue&&(Lt.floatVertexTextures?(Ue.boneTexture===null&&Ue.computeBoneTexture(),ye.setValue(W,"boneTexture",Ue.boneTexture,Z),ye.setValue(W,"boneTextureSize",Ue.boneTextureSize)):ye.setOptional(W,Ue,"boneMatrices"))}const So=U.morphAttributes;return(So.position!==void 0||So.normal!==void 0||So.color!==void 0&&Lt.isWebGL2===!0)&&lt.update(j,U,k,en),(ys||Vt.receiveShadow!==j.receiveShadow)&&(Vt.receiveShadow=j.receiveShadow,ye.setValue(W,"receiveShadow",j.receiveShadow)),ys&&(ye.setValue(W,"toneMappingExposure",m.toneMappingExposure),Vt.needsLights&&Su(ws,bo),bt&&k.fog&&ee.refreshFogUniforms(ws,bt),ee.refreshMaterialUniforms(ws,k,_,z,J),qn.upload(W,Vt.uniformsList,ws,Z)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qn.upload(W,Vt.uniformsList,ws,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ye.setValue(W,"center",j.center),ye.setValue(W,"modelViewMatrix",j.modelViewMatrix),ye.setValue(W,"normalMatrix",j.normalMatrix),ye.setValue(W,"modelMatrix",j.matrixWorld),en}function Su(M,I){M.ambientLightColor.needsUpdate=I,M.lightProbe.needsUpdate=I,M.directionalLights.needsUpdate=I,M.directionalLightShadows.needsUpdate=I,M.pointLights.needsUpdate=I,M.pointLightShadows.needsUpdate=I,M.spotLights.needsUpdate=I,M.spotLightShadows.needsUpdate=I,M.rectAreaLights.needsUpdate=I,M.hemisphereLights.needsUpdate=I}function Eu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(M,I,U){G.get(M.texture).__webglTexture=I,G.get(M.depthTexture).__webglTexture=U;const k=G.get(M);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||Ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(M,I){const U=G.get(M);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(M,I=0,U=0){E=M,x=I,y=U;let k=!0;if(M){const Pt=G.get(M);Pt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(36160,null),k=!1):Pt.__webglFramebuffer===void 0?Z.setupRenderTarget(M):Pt.__hasExternalTextures&&Z.rebindTextures(M,G.get(M.texture).__webglTexture,G.get(M.depthTexture).__webglTexture)}let j=null,bt=!1,At=!1;if(M){const Pt=M.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture)&&(At=!0);const Wt=G.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(j=Wt[I],bt=!0):Lt.isWebGL2&&M.samples>0&&Z.useMultisampledRTT(M)===!1?j=G.get(M).__webglMultisampledFramebuffer:j=Wt,L.copy(M.viewport),P.copy(M.scissor),N=M.scissorTest}else L.copy(R).multiplyScalar(_).floor(),P.copy(B).multiplyScalar(_).floor(),N=F;if(nt.bindFramebuffer(36160,j)&&Lt.drawBuffers&&k&&nt.drawBuffers(M,j),nt.viewport(L),nt.scissor(P),nt.setScissorTest(N),bt){const Pt=G.get(M.texture);W.framebufferTexture2D(36160,36064,34069+I,Pt.__webglTexture,U)}else if(At){const Pt=G.get(M.texture),Wt=I||0;W.framebufferTextureLayer(36160,36064,Pt.__webglTexture,U||0,Wt)}S=-1},this.readRenderTargetPixels=function(M,I,U,k,j,bt,At){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let It=G.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&At!==void 0&&(It=It[At]),It){nt.bindFramebuffer(36160,It);try{const Pt=M.texture,Wt=Pt.format,Ot=Pt.type;if(Wt!==je&&V.convert(Wt)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ut=Ot===is&&(Ct.has("EXT_color_buffer_half_float")||Lt.isWebGL2&&Ct.has("EXT_color_buffer_float"));if(Ot!==vi&&V.convert(Ot)!==W.getParameter(35738)&&!(Ot===oi&&(Lt.isWebGL2||Ct.has("OES_texture_float")||Ct.has("WEBGL_color_buffer_float")))&&!Ut){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=M.width-k&&U>=0&&U<=M.height-j&&W.readPixels(I,U,k,j,V.convert(Wt),V.convert(Ot),bt)}finally{const Pt=E!==null?G.get(E).__webglFramebuffer:null;nt.bindFramebuffer(36160,Pt)}}},this.copyFramebufferToTexture=function(M,I,U=0){if(I.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const k=Math.pow(2,-U),j=Math.floor(I.image.width*k),bt=Math.floor(I.image.height*k);Z.setTexture2D(I,0),W.copyTexSubImage2D(3553,U,0,0,M.x,M.y,j,bt),nt.unbindTexture()},this.copyTextureToTexture=function(M,I,U,k=0){const j=I.image.width,bt=I.image.height,At=V.convert(U.format),It=V.convert(U.type);Z.setTexture2D(U,0),W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment),I.isDataTexture?W.texSubImage2D(3553,k,M.x,M.y,j,bt,At,It,I.image.data):I.isCompressedTexture?W.compressedTexSubImage2D(3553,k,M.x,M.y,I.mipmaps[0].width,I.mipmaps[0].height,At,I.mipmaps[0].data):W.texSubImage2D(3553,k,M.x,M.y,At,It,I.image),k===0&&U.generateMipmaps&&W.generateMipmap(3553),nt.unbindTexture()},this.copyTextureToTexture3D=function(M,I,U,k,j=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const bt=M.max.x-M.min.x+1,At=M.max.y-M.min.y+1,It=M.max.z-M.min.z+1,Pt=V.convert(k.format),Wt=V.convert(k.type);let Ot;if(k.isData3DTexture)Z.setTexture3D(k,0),Ot=32879;else if(k.isDataArrayTexture)Z.setTexture2DArray(k,0),Ot=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,k.flipY),W.pixelStorei(37441,k.premultiplyAlpha),W.pixelStorei(3317,k.unpackAlignment);const Ut=W.getParameter(3314),ie=W.getParameter(32878),Yn=W.getParameter(3316),Ei=W.getParameter(3315),Ti=W.getParameter(32877),tn=U.isCompressedTexture?U.mipmaps[0]:U.image;W.pixelStorei(3314,tn.width),W.pixelStorei(32878,tn.height),W.pixelStorei(3316,M.min.x),W.pixelStorei(3315,M.min.y),W.pixelStorei(32877,M.min.z),U.isDataTexture||U.isData3DTexture?W.texSubImage3D(Ot,j,I.x,I.y,I.z,bt,At,It,Pt,Wt,tn.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Ot,j,I.x,I.y,I.z,bt,At,It,Pt,tn.data)):W.texSubImage3D(Ot,j,I.x,I.y,I.z,bt,At,It,Pt,Wt,tn),W.pixelStorei(3314,Ut),W.pixelStorei(32878,ie),W.pixelStorei(3316,Yn),W.pixelStorei(3315,Ei),W.pixelStorei(32877,Ti),j===0&&k.generateMipmaps&&W.generateMipmap(Ot),nt.unbindTexture()},this.initTexture=function(M){Z.setTexture2D(M,0),nt.unbindTexture()},this.resetState=function(){x=0,y=0,E=null,nt.reset(),Rt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Xt.prototype.isWebGLRenderer=!0;class g0 extends Xt{}g0.prototype.isWebGL1Renderer=!0;class go{constructor(t,e=1,n=1e3){this.name="",this.color=new mt(t),this.near=e,this.far=n}clone(){return new go(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}go.prototype.isFog=!0;class ja extends Gt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}ja.prototype.isScene=!0;class tr{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Os,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=ln()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ln()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}tr.prototype.isInterleavedBuffer=!0;const Se=new T;class Hs{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}Hs.prototype.isInterleavedBufferAttribute=!0;class Za extends de{constructor(t){super();this.type="SpriteMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}Za.prototype.isSpriteMaterial=!0;let Vi;const Es=new T,Gi=new T,Wi=new T,qi=new Y,Ts=new Y,zh=new _t,Ar=new T,As=new T,Cr=new T,Lc=new Y,oa=new Y,Rc=new Y;class x0 extends Gt{constructor(t){super();if(this.type="Sprite",Vi===void 0){Vi=new Kt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tr(e,5);Vi.setIndex([0,1,2,0,2,3]),Vi.setAttribute("position",new Hs(n,3,0,!1)),Vi.setAttribute("uv",new Hs(n,2,3,!1))}this.geometry=Vi,this.material=t!==void 0?t:new Za,this.center=new Y(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),zh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;Lr(Ar.set(-.5,-.5,0),Wi,o,Gi,i,s),Lr(As.set(.5,-.5,0),Wi,o,Gi,i,s),Lr(Cr.set(.5,.5,0),Wi,o,Gi,i,s),Lc.set(0,0),oa.set(1,0),Rc.set(1,1);let a=t.ray.intersectTriangle(Ar,As,Cr,!1,Es);if(a===null&&(Lr(As.set(-.5,.5,0),Wi,o,Gi,i,s),oa.set(0,1),a=t.ray.intersectTriangle(Ar,Cr,As,!1,Es),a===null))return;const l=t.ray.origin.distanceTo(Es);l<t.near||l>t.far||e.push({distance:l,point:Es.clone(),uv:le.getUV(Es,Ar,As,Cr,Lc,oa,Rc,new Y),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}x0.prototype.isSprite=!0;function Lr(r,t,e,n,i,s){qi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ts.x=s*qi.x-i*qi.y,Ts.y=i*qi.x+s*qi.y):Ts.copy(qi),r.copy(t),r.x+=Ts.x,r.y+=Ts.y,r.applyMatrix4(zh)}const Pc=new T,Dc=new jt,Ic=new jt,_0=new T,kc=new _t;class Fh extends ge{constructor(t,e){super(t,e);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new _t,this.bindMatrixInverse=new _t}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new jt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;Dc.fromBufferAttribute(i.attributes.skinIndex,t),Ic.fromBufferAttribute(i.attributes.skinWeight,t),Pc.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Ic.getComponent(s);if(o!==0){const a=Dc.getComponent(s);kc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(_0.copy(Pc).applyMatrix4(kc),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}Fh.prototype.isSkinnedMesh=!0;class v0 extends Gt{constructor(){super();this.type="Bone"}}v0.prototype.isBone=!0;class y0 extends xe{constructor(t=null,e=1,n=1,i,s,o,a,l,c=me,h=me,u,d){super(null,o,a,l,c,h,i,s,u,d);this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}y0.prototype.isDataTexture=!0;class Aa extends ue{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(t,e,n);this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Aa.prototype.isInstancedBufferAttribute=!0;const zc=new _t,Fc=new _t,Rr=[],Cs=new ge;class w0 extends ge{constructor(t,e,n){super(t,e);this.instanceMatrix=new Aa(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,zc),Fc.multiplyMatrices(n,zc),Cs.matrixWorld=Fc,Cs.raycast(t,Rr);for(let o=0,a=Rr.length;o<a;o++){const l=Rr[o];l.instanceId=s,l.object=this,e.push(l)}Rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Aa(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}w0.prototype.isInstancedMesh=!0;class xs extends de{constructor(t){super();this.type="LineBasicMaterial",this.color=new mt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}xs.prototype.isLineBasicMaterial=!0;const Nc=new T,Bc=new T,Oc=new _t,aa=new ms,Pr=new ps;class Ja extends Gt{constructor(t=new Kt,e=new xs){super();this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Nc.fromBufferAttribute(e,i-1),Bc.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Nc.distanceTo(Bc);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Pr.copy(n.boundingSphere),Pr.applyMatrix4(i),Pr.radius+=s,t.ray.intersectsSphere(Pr)===!1)return;Oc.copy(i).invert(),aa.copy(t.ray).applyMatrix4(Oc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new T,h=new T,u=new T,d=new T,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const g=n.index,p=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),y=Math.min(g.count,o.start+o.count);for(let E=x,S=y-1;E<S;E+=f){const v=g.getX(E),L=g.getX(E+1);if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,L),aa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let E=x,S=y-1;E<S;E+=f){if(c.fromBufferAttribute(p,E),h.fromBufferAttribute(p,E+1),aa.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(d);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}Ja.prototype.isLine=!0;const Uc=new T,Hc=new T;class Ya extends Ja{constructor(t,e){super(t,e);this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Uc.fromBufferAttribute(e,i),Hc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Uc.distanceTo(Hc);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}Ya.prototype.isLineSegments=!0;class M0 extends Ja{constructor(t,e){super(t,e);this.type="LineLoop"}}M0.prototype.isLineLoop=!0;class $a extends de{constructor(t){super();this.type="PointsMaterial",this.color=new mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}$a.prototype.isPointsMaterial=!0;const Vc=new _t,Ca=new ms,Dr=new ps,Ir=new T;class b0 extends Gt{constructor(t=new Kt,e=new $a){super();this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=s,t.ray.intersectsSphere(Dr)===!1)return;Vc.copy(i).invert(),Ca.copy(t.ray).applyMatrix4(Vc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,m=f;g<m;g++){const p=c.getX(g);Ir.fromBufferAttribute(u,p),Gc(Ir,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,m=f;g<m;g++)Ir.fromBufferAttribute(u,g),Gc(Ir,g,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}b0.prototype.isPoints=!0;function Gc(r,t,e,n,i,s,o){const a=Ca.distanceSqToPoint(r);if(a<e){const l=new T;Ca.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class S0 extends xe{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c);this.minFilter=o!==void 0?o:Ce,this.magFilter=s!==void 0?s:Ce,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}S0.prototype.isVideoTexture=!0;class E0 extends xe{constructor(t,e,n){super({width:t,height:e});this.format=n,this.magFilter=me,this.minFilter=me,this.generateMipmaps=!1,this.needsUpdate=!0}}E0.prototype.isFramebufferTexture=!0;class T0 extends xe{constructor(t,e,n,i,s,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,s,u,d);this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}T0.prototype.isCompressedTexture=!0;class Ka extends xe{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c);this.needsUpdate=!0}}Ka.prototype.isCanvasTexture=!0;class Oe{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Y:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],s=[],o=[],a=new T,l=new _t;for(let f=0;f<=t;f++){const g=f/t;i[f]=this.getTangentAt(g,new T)}s[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Me(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Me(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class xo extends Oe{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new Y,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}xo.prototype.isEllipseCurve=!0;class Nh extends xo{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o);this.type="ArcCurve"}}Nh.prototype.isArcCurve=!0;function Qa(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const kr=new T,la=new Qa,ca=new Qa,ha=new Qa;class Bh extends Oe{constructor(t=[],e=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(kr.subVectors(i[0],i[1]).add(i[0]),c=kr);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(kr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=kr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),g<1e-4&&(g=m),p<1e-4&&(p=m),la.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,p),ca.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,p),ha.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,p)}else this.curveType==="catmullrom"&&(la.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ca.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ha.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(la.calc(l),ca.calc(l),ha.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}Bh.prototype.isCatmullRomCurve3=!0;function Wc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function A0(r,t){const e=1-r;return e*e*t}function C0(r,t){return 2*(1-r)*r*t}function L0(r,t){return r*r*t}function ks(r,t,e,n){return A0(r,t)+C0(r,e)+L0(r,n)}function R0(r,t){const e=1-r;return e*e*e*t}function P0(r,t){const e=1-r;return 3*e*e*r*t}function D0(r,t){return 3*(1-r)*r*r*t}function I0(r,t){return r*r*r*t}function zs(r,t,e,n,i){return R0(r,t)+P0(r,e)+D0(r,n)+I0(r,i)}class tl extends Oe{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super();this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,i.x,s.x,o.x,a.x),zs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}tl.prototype.isCubicBezierCurve=!0;class Oh extends Oe{constructor(t=new T,e=new T,n=new T,i=new T){super();this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zs(t,i.x,s.x,o.x,a.x),zs(t,i.y,s.y,o.y,a.y),zs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}Oh.prototype.isCubicBezierCurve3=!0;class _o extends Oe{constructor(t=new Y,e=new Y){super();this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new Y;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}_o.prototype.isLineCurve=!0;class k0 extends Oe{constructor(t=new T,e=new T){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class el extends Oe{constructor(t=new Y,e=new Y,n=new Y){super();this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ks(t,i.x,s.x,o.x),ks(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}el.prototype.isQuadraticBezierCurve=!0;class Uh extends Oe{constructor(t=new T,e=new T,n=new T){super();this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ks(t,i.x,s.x,o.x),ks(t,i.y,s.y,o.y),ks(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Uh.prototype.isQuadraticBezierCurve3=!0;class nl extends Oe{constructor(t=[]){super();this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Wc(a,l.x,c.x,h.x,u.x),Wc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Y().fromArray(i))}return this}}nl.prototype.isSplineCurve=!0;var Hh=Object.freeze({__proto__:null,ArcCurve:Nh,CatmullRomCurve3:Bh,CubicBezierCurve:tl,CubicBezierCurve3:Oh,EllipseCurve:xo,LineCurve:_o,LineCurve3:k0,QuadraticBezierCurve:el,QuadraticBezierCurve3:Uh,SplineCurve:nl});class z0 extends Oe{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new _o(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new Hh[i.type]().fromJSON(i))}return this}}class Qr extends z0{constructor(t){super();this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _o(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new el(this.currentPoint.clone(),new Y(t,e),new Y(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new tl(this.currentPoint.clone(),new Y(t,e),new Y(n,i),new Y(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new nl(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new xo(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}new T;new T;new T;new le;class Xn extends Qr{constructor(t){super(t);this.uuid=ln(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Qr().fromJSON(i))}return this}}const F0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=Vh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=H0(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return Vs(s,o,e,a,l,f),o}};function Vh(r,t,e,n,i){let s,o;if(i===K0(r,t,e,n)>0)for(s=t;s<e;s+=n)o=qc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=qc(s,r[s],r[s+1],o);return o&&vo(o,o.next)&&(Ws(o),o=o.next),o}function jn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(vo(e,e.next)||ne(e.prev,e,e.next)===0)){if(Ws(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Vs(r,t,e,n,i,s,o){if(!r)return;!o&&s&&X0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?B0(r,n,i,s):N0(r)){t.push(l.i/e),t.push(r.i/e),t.push(c.i/e),Ws(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=O0(jn(r),t,e),Vs(r,t,e,n,i,s,2)):o===2&&U0(r,t,e,n,i,s):Vs(jn(r),t,e,n,i,s,1);break}}}function N0(r){const t=r.prev,e=r,n=r.next;if(ne(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Qi(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&ne(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function B0(r,t,e,n){const i=r.prev,s=r,o=r.next;if(ne(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=La(a,l,t,e,n),d=La(c,h,t,e,n);let f=r.prevZ,g=r.nextZ;for(;f&&f.z>=u&&g&&g.z<=d;){if(f!==r.prev&&f!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ne(f.prev,f,f.next)>=0||(f=f.prevZ,g!==r.prev&&g!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ne(g.prev,g,g.next)>=0))return!1;g=g.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&ne(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;g&&g.z<=d;){if(g!==r.prev&&g!==r.next&&Qi(i.x,i.y,s.x,s.y,o.x,o.y,g.x,g.y)&&ne(g.prev,g,g.next)>=0)return!1;g=g.nextZ}return!0}function O0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!vo(i,s)&&Gh(i,n,n.next,s)&&Gs(i,s)&&Gs(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),Ws(n),Ws(n.next),n=r=s),n=n.next}while(n!==r);return jn(n)}function U0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&J0(o,a)){let l=Wh(o,a);o=jn(o,o.next),l=jn(l,l.next),Vs(o,t,e,n,i,s),Vs(l,t,e,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function H0(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Vh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Z0(c));for(i.sort(V0),s=0;s<i.length;s++)G0(i[s],e),e=jn(e,e.next);return e}function V0(r,t){return r.x-t.x}function G0(r,t){if(t=W0(r,t),t){const e=Wh(t,r);jn(t,t.next),jn(e,e.next)}}function W0(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s){if(s=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&Qi(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),Gs(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&q0(o,e)))&&(o=e,h=u)),e=e.next;while(e!==a);return o}function q0(r,t){return ne(r.prev,r,t.prev)<0&&ne(t.next,r,r.next)<0}function X0(r,t,e,n){let i=r;do i.z===null&&(i.z=La(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,j0(i)}function j0(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function La(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Z0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Qi(r,t,e,n,i,s,o,a){return(i-o)*(t-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(i-o)*(n-a)>=0}function J0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Y0(r,t)&&(Gs(r,t)&&Gs(t,r)&&$0(r,t)&&(ne(r.prev,r,t.prev)||ne(r,t.prev,t))||vo(r,t)&&ne(r.prev,r,r.next)>0&&ne(t.prev,t,t.next)>0)}function ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function vo(r,t){return r.x===t.x&&r.y===t.y}function Gh(r,t,e,n){const i=Fr(ne(r,t,e)),s=Fr(ne(r,t,n)),o=Fr(ne(e,n,r)),a=Fr(ne(e,n,t));return!!(i!==s&&o!==a||i===0&&zr(r,e,t)||s===0&&zr(r,n,t)||o===0&&zr(e,r,n)||a===0&&zr(e,t,n))}function zr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Fr(r){return r>0?1:r<0?-1:0}function Y0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Gh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Gs(r,t){return ne(r.prev,r,r.next)<0?ne(r,t,r.next)>=0&&ne(r,r.prev,t)>=0:ne(r,t,r.prev)<0||ne(r,r.next,t)<0}function $0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Wh(r,t){const e=new Ra(r.i,r.x,r.y),n=new Ra(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function qc(r,t,e,n){const i=new Ra(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ws(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Ra(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function K0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class En{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return En.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];Xc(t),jc(n,t);let o=t.length;e.forEach(Xc);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,jc(n,e[l]);const a=F0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function Xc(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function jc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Si extends Kt{constructor(t=new Xn([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new se(i,3)),this.setAttribute("uv",new se(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Q0;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let E,S=!1,v,L,P,N;x&&(E=x.getSpacedPoints(h),S=!0,d=!1,v=x.computeFrenetFrames(h,!1),L=new T,P=new T,N=new T),d||(p=0,f=0,g=0,m=0);const et=a.extractPoints(c);let z=et.shape;const _=et.holes;if(!En.isClockWise(z)){z=z.reverse();for(let G=0,Z=_.length;G<Z;G++){const tt=_[G];En.isClockWise(tt)&&(_[G]=tt.reverse())}}const q=En.triangulateShape(z,_),R=z;for(let G=0,Z=_.length;G<Z;G++){const tt=_[G];z=z.concat(tt)}function B(G,Z,tt){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(tt).add(G)}const F=z.length,O=q.length;function D(G,Z,tt){let ft,ct,Tt;const yt=G.x-Z.x,xt=G.y-Z.y,ee=tt.x-G.x,Zt=tt.y-G.y,b=yt*yt+xt*xt,w=yt*Zt-xt*ee;if(Math.abs(w)>Number.EPSILON){const H=Math.sqrt(b),$=Math.sqrt(ee*ee+Zt*Zt),lt=Z.x-xt/H,ut=Z.y+yt/H,vt=tt.x-Zt/$,V=tt.y+ee/$,Rt=((vt-lt)*Zt-(V-ut)*ee)/(yt*Zt-xt*ee);ft=lt+yt*Rt-G.x,ct=ut+xt*Rt-G.y;const Dt=ft*ft+ct*ct;if(Dt<=2)return new Y(ft,ct);Tt=Math.sqrt(Dt/2)}else{let H=!1;yt>Number.EPSILON?ee>Number.EPSILON&&(H=!0):yt<-Number.EPSILON?ee<-Number.EPSILON&&(H=!0):Math.sign(xt)===Math.sign(Zt)&&(H=!0),H?(ft=-xt,ct=yt,Tt=Math.sqrt(b)):(ft=yt,ct=xt,Tt=Math.sqrt(b/2))}return new Y(ft/Tt,ct/Tt)}const X=[];for(let G=0,Z=R.length,tt=Z-1,ft=G+1;G<Z;G++,tt++,ft++)tt===Z&&(tt=0),ft===Z&&(ft=0),X[G]=D(R[G],R[tt],R[ft]);const J=[];let K,Q=X.concat();for(let G=0,Z=_.length;G<Z;G++){const tt=_[G];K=[];for(let ft=0,ct=tt.length,Tt=ct-1,yt=ft+1;ft<ct;ft++,Tt++,yt++)Tt===ct&&(Tt=0),yt===ct&&(yt=0),K[ft]=D(tt[ft],tt[Tt],tt[yt]);J.push(K),Q=Q.concat(K)}for(let G=0;G<p;G++){const Z=G/p,tt=f*Math.cos(Z*Math.PI/2),ft=g*Math.sin(Z*Math.PI/2)+m;for(let ct=0,Tt=R.length;ct<Tt;ct++){const yt=B(R[ct],X[ct],ft);Ht(yt.x,yt.y,-tt)}for(let ct=0,Tt=_.length;ct<Tt;ct++){const yt=_[ct];K=J[ct];for(let xt=0,ee=yt.length;xt<ee;xt++){const Zt=B(yt[xt],K[xt],ft);Ht(Zt.x,Zt.y,-tt)}}}const ht=g+m;for(let G=0;G<F;G++){const Z=d?B(z[G],Q[G],ht):z[G];S?(P.copy(v.normals[0]).multiplyScalar(Z.x),L.copy(v.binormals[0]).multiplyScalar(Z.y),N.copy(E[0]).add(P).add(L),Ht(N.x,N.y,N.z)):Ht(Z.x,Z.y,0)}for(let G=1;G<=h;G++)for(let Z=0;Z<F;Z++){const tt=d?B(z[Z],Q[Z],ht):z[Z];S?(P.copy(v.normals[G]).multiplyScalar(tt.x),L.copy(v.binormals[G]).multiplyScalar(tt.y),N.copy(E[G]).add(P).add(L),Ht(N.x,N.y,N.z)):Ht(tt.x,tt.y,u/h*G)}for(let G=p-1;G>=0;G--){const Z=G/p,tt=f*Math.cos(Z*Math.PI/2),ft=g*Math.sin(Z*Math.PI/2)+m;for(let ct=0,Tt=R.length;ct<Tt;ct++){const yt=B(R[ct],X[ct],ft);Ht(yt.x,yt.y,u+tt)}for(let ct=0,Tt=_.length;ct<Tt;ct++){const yt=_[ct];K=J[ct];for(let xt=0,ee=yt.length;xt<ee;xt++){const Zt=B(yt[xt],K[xt],ft);S?Ht(Zt.x,Zt.y+E[h-1].y,E[h-1].x+tt):Ht(Zt.x,Zt.y,u+tt)}}}Nt(),St();function Nt(){const G=i.length/3;if(d){let Z=0,tt=F*Z;for(let ft=0;ft<O;ft++){const ct=q[ft];Ct(ct[2]+tt,ct[1]+tt,ct[0]+tt)}Z=h+p*2,tt=F*Z;for(let ft=0;ft<O;ft++){const ct=q[ft];Ct(ct[0]+tt,ct[1]+tt,ct[2]+tt)}}else{for(let Z=0;Z<O;Z++){const tt=q[Z];Ct(tt[2],tt[1],tt[0])}for(let Z=0;Z<O;Z++){const tt=q[Z];Ct(tt[0]+F*h,tt[1]+F*h,tt[2]+F*h)}}n.addGroup(G,i.length/3-G,0)}function St(){const G=i.length/3;let Z=0;W(R,Z),Z+=R.length;for(let tt=0,ft=_.length;tt<ft;tt++){const ct=_[tt];W(ct,Z),Z+=ct.length}n.addGroup(G,i.length/3-G,1)}function W(G,Z){let tt=G.length;for(;--tt>=0;){const ft=tt;let ct=tt-1;ct<0&&(ct=G.length-1);for(let Tt=0,yt=h+p*2;Tt<yt;Tt++){const xt=F*Tt,ee=F*(Tt+1),Zt=Z+ft+xt,b=Z+ct+xt,w=Z+ct+ee,H=Z+ft+ee;Lt(Zt,b,w,H)}}}function Ht(G,Z,tt){l.push(G),l.push(Z),l.push(tt)}function Ct(G,Z,tt){nt(G),nt(Z),nt(tt);const ft=i.length/3,ct=y.generateTopUV(n,i,ft-3,ft-2,ft-1);zt(ct[0]),zt(ct[1]),zt(ct[2])}function Lt(G,Z,tt,ft){nt(G),nt(Z),nt(ft),nt(Z),nt(tt),nt(ft);const ct=i.length/3,Tt=y.generateSideWallUV(n,i,ct-6,ct-3,ct-2,ct-1);zt(Tt[0]),zt(Tt[1]),zt(Tt[3]),zt(Tt[1]),zt(Tt[2]),zt(Tt[3])}function nt(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function zt(G){s.push(G.x),s.push(G.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return tx(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Hh[i.type]().fromJSON(i)),new Si(n,t.options)}}const Q0={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Y(s,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],m=t[s*3],p=t[s*3+1],x=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Y(o,1-l),new Y(c,1-u),new Y(d,1-g),new Y(m,1-x)]:[new Y(a,1-l),new Y(h,1-u),new Y(f,1-g),new Y(p,1-x)]}};function tx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class il extends Kt{constructor(t=new Xn([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new se(i,3)),this.setAttribute("normal",new se(s,3)),this.setAttribute("uv",new se(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const g=d.holes;En.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,x=g.length;p<x;p++){const y=g[p];En.isClockWise(y)===!0&&(g[p]=y.reverse())}const m=En.triangulateShape(f,g);for(let p=0,x=g.length;p<x;p++){const y=g[p];f=f.concat(y)}for(let p=0,x=f.length;p<x;p++){const y=f[p];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let p=0,x=m.length;p<x;p++){const y=m[p],E=y[0]+u,S=y[1]+u,v=y[2]+u;n.push(E,S,v),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return ex(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new il(n,t.curveSegments)}}function ex(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class sl extends Kt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],g=[],m=[],p=[];for(let x=0;x<=n;x++){const y=[],E=x/n;let S=0;x==0&&o==0?S=.5/e:x==n&&l==Math.PI&&(S=-.5/e);for(let v=0;v<=e;v++){const L=v/e;u.x=-t*Math.cos(i+L*s)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(i+L*s)*Math.sin(o+E*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),p.push(L+S,1-E),y.push(c++)}h.push(y)}for(let x=0;x<n;x++)for(let y=0;y<e;y++){const E=h[x][y+1],S=h[x][y],v=h[x+1][y],L=h[x+1][y+1];(x!==0||o>0)&&f.push(E,S,L),(x!==n-1||l<Math.PI)&&f.push(S,v,L)}this.setIndex(f),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(m,3)),this.setAttribute("uv",new se(p,2))}static fromJSON(t){return new sl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class qh extends de{constructor(t){super();this.type="ShadowMaterial",this.color=new mt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}qh.prototype.isShadowMaterial=!0;class Xh extends Ye{constructor(t){super(t);this.type="RawShaderMaterial"}}Xh.prototype.isRawShaderMaterial=!0;class rl extends de{constructor(t){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}rl.prototype.isMeshStandardMaterial=!0;class jh extends rl{constructor(t){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new mt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}jh.prototype.isMeshPhysicalMaterial=!0;class yo extends de{constructor(t){super();this.type="MeshPhongMaterial",this.color=new mt(16777215),this.specular=new mt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}yo.prototype.isMeshPhongMaterial=!0;class Zh extends de{constructor(t){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new mt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Zh.prototype.isMeshToonMaterial=!0;class Jh extends de{constructor(t){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}Jh.prototype.isMeshNormalMaterial=!0;class Yh extends de{constructor(t){super();this.type="MeshLambertMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=lo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Yh.prototype.isMeshLambertMaterial=!0;class $h extends de{constructor(t){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new mt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=fs,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}$h.prototype.isMeshMatcapMaterial=!0;class Kh extends xs{constructor(t){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}Kh.prototype.isLineDashedMaterial=!0;const nx={ShadowMaterial:qh,SpriteMaterial:Za,RawShaderMaterial:Xh,ShaderMaterial:Ye,PointsMaterial:$a,MeshPhysicalMaterial:jh,MeshStandardMaterial:rl,MeshPhongMaterial:yo,MeshToonMaterial:Zh,MeshNormalMaterial:Jh,MeshLambertMaterial:Yh,MeshDepthMaterial:qa,MeshDistanceMaterial:Xa,MeshBasicMaterial:yi,MeshMatcapMaterial:$h,LineDashedMaterial:Kh,LineBasicMaterial:xs,Material:de};de.fromType=function(r){return new nx[r]};const te={arraySlice:function(r,t,e){return te.isTypedArray(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)},convertArray:function(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,t,e,n,i=30){const s=r.clone();s.name=t;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const g=c.times[f]*i;if(!(g<e||g>=n)){u.push(c.times[f]);for(let m=0;m<h;++m)d.push(c.values[f*h+m])}}u.length!==0&&(c.times=te.convertArray(u,c.times.constructor),c.values=te.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,t=0,e=r,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const g=a.times.length-1;let m;if(s<=a.times[0]){const x=h,y=u-h;m=te.arraySlice(a.values,x,y)}else if(s>=a.times[g]){const x=g*u+h,y=x+u-h;m=te.arraySlice(a.values,x,y)}else{const x=a.createInterpolant(),y=h,E=u-h;x.evaluate(s),m=te.arraySlice(x.resultBuffer,y,E)}l==="quaternion"&&new Le().fromArray(m).normalize().conjugate().toArray(m);const p=c.times.length;for(let x=0;x<p;++x){const y=x*f+d;if(l==="quaternion")Le.multiplyQuaternionsFlat(c.values,y,m,0,c.values,y);else{const E=f-d*2;for(let S=0;S<E;++S)c.values[y+S]-=m[S]}}}return r.blendMode=gh,r}};class Zn{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,s)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,s,t)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}Zn.prototype.beforeStart_=Zn.prototype.copySampleValue_;Zn.prototype.afterEnd_=Zn.prototype.copySampleValue_;class ix extends Zn{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ji,endingEnd:Ji}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Yi:s=t,a=2*e-n;break;case $r:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Yi:o=t,l=2*n-e;break;case $r:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),m=g*g,p=m*g,x=-d*p+2*d*m-d*g,y=(1+d)*p+(-1.5-2*d)*m+(-.5+d)*g+1,E=(-1-f)*p+(1.5+f)*m+.5*g,S=f*p-f*m;for(let v=0;v!==a;++v)s[v]=x*o[h+v]+y*o[c+v]+E*o[l+v]+S*o[u+v];return s}}class Qh extends Zn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class sx extends Zn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class hn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=te.convertArray(e,this.TimeBufferType),this.values=te.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:te.convertArray(t.times,Array),values:te.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new sx(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Qh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ix(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Jr:e=this.InterpolantFactoryMethodDiscrete;break;case Yr:e=this.InterpolantFactoryMethodLinear;break;case Ro:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Jr;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Ro}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=te.arraySlice(n,s,o),this.values=te.arraySlice(this.values,s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&te.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=te.arraySlice(this.times),e=te.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===Ro,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){const m=e[u+g];if(m!==e[d+g]||m!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=te.arraySlice(t,0,o),this.values=te.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=te.arraySlice(this.times,0),e=te.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Yr;class _s extends hn{}_s.prototype.ValueTypeName="bool";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=Jr;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;class tu extends hn{}tu.prototype.ValueTypeName="color";class to extends hn{}to.prototype.ValueTypeName="number";class rx extends Zn{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Le.slerpFlat(s,0,o,c-a,o,c,l);return s}}class er extends hn{InterpolantFactoryMethodLinear(t){return new rx(this.times,this.values,this.getValueSize(),t)}}er.prototype.ValueTypeName="quaternion";er.prototype.DefaultInterpolation=Yr;er.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends hn{}vs.prototype.ValueTypeName="string";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=Jr;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;class eo extends hn{}eo.prototype.ValueTypeName="vector";class Zc{constructor(t,e=-1,n,i=Oa){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=ln(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(ax(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(hn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=te.getKeyframeOrder(l);l=te.sortedArray(l,1,h),c=te.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new to(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,g,m){if(f.length!==0){const p=[],x=[];te.flattenJSON(f,p,x,g),p.length!==0&&m.push(new u(d,p,x))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let m=0;m<d[g].morphTargets.length;m++)f[d[g].morphTargets[m]]=-1;for(const m in f){const p=[],x=[];for(let y=0;y!==d[g].morphTargets.length;++y){const E=d[g];p.push(E.time),x.push(E.morphTarget===m?1:0)}i.push(new to(".morphTargetInfluence["+m+"]",p,x))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(eo,f+".position",d,"pos",i),n(er,f+".quaternion",d,"rot",i),n(eo,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ox(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return to;case"vector":case"vector2":case"vector3":case"vector4":return eo;case"color":return tu;case"quaternion":return er;case"bool":case"boolean":return _s;case"string":return vs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function ax(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=ox(r.type);if(r.times===void 0){const e=[],n=[];te.flattenJSON(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const us={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class lx{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const cx=new lx;class Cn{constructor(t){this.manager=t!==void 0?t:cx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const gn={};class eu extends Cn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=us.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(gn[t]!==void 0){gn[t].push({onLoad:e,onProgress:n,onError:i});return}gn[t]=[],gn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=gn[t],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let m=0;const p=new ReadableStream({start(x){y();function y(){u.read().then(({done:E,value:S})=>{if(E)x.close();else{m+=S.byteLength;const v=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:f});for(let L=0,P=h.length;L<P;L++){const N=h[L];N.onProgress&&N.onProgress(v)}x.enqueue(S),y()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{us.add(t,c);const h=gn[t];delete gn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=gn[t];if(h===void 0)throw this.manager.itemError(t),c;delete gn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class nu extends Cn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=us.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Us("img");function l(){h(),us.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class hx extends Cn{constructor(t){super(t)}load(t,e,n,i){const s=new fo,o=new nu(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class ux extends Cn{constructor(t){super(t)}load(t,e,n,i){const s=new xe,o=new nu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class cn extends Gt{constructor(t,e=1){super();this.type="Light",this.color=new mt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}cn.prototype.isLight=!0;class dx extends cn{constructor(t,e,n){super(t,n);this.type="HemisphereLight",this.position.copy(Gt.DefaultUp),this.updateMatrix(),this.groundColor=new mt(e)}copy(t){return cn.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}dx.prototype.isHemisphereLight=!0;const Jc=new _t,Yc=new T,$c=new T;class ol{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new po,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Yc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Yc),$c.setFromMatrixPosition(t.target.matrixWorld),e.lookAt($c),e.updateMatrixWorld(),Jc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class iu extends ol{constructor(){super(new Ee(50,1,.5,500));this.focus=1}updateMatrices(t){const e=this.camera,n=Sa*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}iu.prototype.isSpotLightShadow=!0;class al extends cn{constructor(t,e,n=0,i=Math.PI/3,s=0,o=1){super(t,e);this.type="SpotLight",this.position.copy(Gt.DefaultUp),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new iu}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}al.prototype.isSpotLight=!0;const Kc=new _t,Ls=new T,ua=new T;class su extends ol{constructor(){super(new Ee(90,1,.5,500));this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new jt(2,1,1,1),new jt(0,1,1,1),new jt(3,1,1,1),new jt(1,1,1,1),new jt(3,0,1,1),new jt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ls.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ls),ua.copy(n.position),ua.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ua),n.updateMatrixWorld(),i.makeTranslation(-Ls.x,-Ls.y,-Ls.z),Kc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kc)}}su.prototype.isPointLightShadow=!0;class ll extends cn{constructor(t,e,n=0,i=1){super(t,e);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}ll.prototype.isPointLight=!0;class ru extends ol{constructor(){super(new Ga(-5,5,5,-5,.5,500))}}ru.prototype.isDirectionalLightShadow=!0;class fx extends cn{constructor(t,e){super(t,e);this.type="DirectionalLight",this.position.copy(Gt.DefaultUp),this.updateMatrix(),this.target=new Gt,this.shadow=new ru}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}fx.prototype.isDirectionalLight=!0;class px extends cn{constructor(t,e){super(t,e);this.type="AmbientLight"}}px.prototype.isAmbientLight=!0;class mx extends cn{constructor(t,e,n=10,i=10){super(t,e);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}mx.prototype.isRectAreaLight=!0;class ou{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new T)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*s),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*s)),e.addScaledVector(o[6],.315392*(3*s*s-1)),e.addScaledVector(o[7],1.092548*(n*s)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*s),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*s),e.addScaledVector(o[6],.743125*s*s-.247708),e.addScaledVector(o[7],2*.429043*n*s),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}ou.prototype.isSphericalHarmonics3=!0;class cl extends cn{constructor(t=new ou,e=1){super(void 0,e);this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}cl.prototype.isLightProbe=!0;class gx{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class xx extends Kt{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}xx.prototype.isInstancedBufferGeometry=!0;class _x extends Cn{constructor(t){super(t);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=us.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){us.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){i&&i(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}_x.prototype.isImageBitmapLoader=!0;let Nr;const vx={getContext:function(){return Nr===void 0&&(Nr=new(window.AudioContext||window.webkitAudioContext)),Nr},setContext:function(r){Nr=r}};class yx extends Cn{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new eu(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const l=a.slice(0);vx.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}}class wx extends cl{constructor(t,e,n=1){super(void 0,n);const i=new mt().set(t),s=new mt().set(e),o=new T(i.r,i.g,i.b),a=new T(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}wx.prototype.isHemisphereLightProbe=!0;class Mx extends cl{constructor(t,e=1){super(void 0,e);const n=new mt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}Mx.prototype.isAmbientLightProbe=!0;class bx extends Gt{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class Sx{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Le.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Le.multiplyQuaternionsFlat(t,o,t,e,t,n),Le.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const hl="\\[\\]\\.:\\/",Ex=new RegExp("["+hl+"]","g"),ul="[^"+hl+"]",Tx="[^"+hl.replace("\\.","")+"]",Ax=/((?:WC+[\/:])*)/.source.replace("WC",ul),Cx=/(WCOD+)?/.source.replace("WCOD",Tx),Lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ul),Rx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ul),Px=new RegExp("^"+Ax+Cx+Lx+Rx+"$"),Dx=["material","materials","bones"];class Ix{constructor(t,e,n){const i=n||qt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class qt{constructor(t,e,n){this.path=e,this.parsedPath=n||qt.parseTrackName(e),this.node=qt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new qt.Composite(t,e,n):new qt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ex,"")}static parseTrackName(t){const e=Px.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);Dx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=qt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}qt.Composite=Ix;qt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};qt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};qt.prototype.GetterByBindingType=[qt.prototype._getValue_direct,qt.prototype._getValue_array,qt.prototype._getValue_arrayElement,qt.prototype._getValue_toArray];qt.prototype.SetterByBindingTypeAndVersioning=[[qt.prototype._setValue_direct,qt.prototype._setValue_direct_setNeedsUpdate,qt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_array,qt.prototype._setValue_array_setNeedsUpdate,qt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_arrayElement,qt.prototype._setValue_arrayElement_setNeedsUpdate,qt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[qt.prototype._setValue_fromArray,qt.prototype._setValue_fromArray_setNeedsUpdate,qt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class kx{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Ji,endingEnd:Ji};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=wd,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case gh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Oa:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Md;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===yd){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Yi,i.endingEnd=Yi):(t?i.endingStart=this.zeroSlopeAtStart?Yi:Ji:i.endingStart=$r,e?i.endingEnd=this.zeroSlopeAtEnd?Yi:Ji:i.endingEnd=$r)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}class zx extends wi{constructor(t){super();this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const m=e&&e._propertyBindings[u].binding.parsedPath;g=new Sx(qt.create(n,f,m),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new Qh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?Zc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Oa),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new kx(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?Zc.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}zx.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class Fx extends tr{constructor(t,e,n=1){super(t,e);this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}Fx.prototype.isInstancedInterleavedBuffer=!0;const Nn=new T,Br=new _t,da=new _t;class Nx extends Ya{constructor(t){const e=au(t),n=new Kt,i=[],s=[],o=new mt(0,0,1),a=new mt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new se(i,3)),n.setAttribute("color",new se(s,3));const l=new xs({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");da.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<e.length;s++){const a=e[s];a.parent&&a.parent.isBone&&(Br.multiplyMatrices(da,a.matrixWorld),Nn.setFromMatrixPosition(Br),i.setXYZ(o,Nn.x,Nn.y,Nn.z),Br.multiplyMatrices(da,a.parent.matrixWorld),Nn.setFromMatrixPosition(Br),i.setXYZ(o+1,Nn.x,Nn.y,Nn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function au(r){const t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push.apply(t,au(r.children[e]));return t}class Bx extends Ya{constructor(t=10,e=10,n=4473924,i=8947848){n=new mt(n),i=new mt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const m=d===s?n:i;m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3,m.toArray(c,f),f+=3}const h=new Kt;h.setAttribute("position",new se(l,3)),h.setAttribute("color",new se(c,3));const u=new xs({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}class Ox{constructor(){this.type="ShapePath",this.color=new mt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Qr,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t,e){function n(y){const E=[];for(let S=0,v=y.length;S<v;S++){const L=y[S],P=new Xn;P.curves=L.curves,E.push(P)}return E}function i(y,E){const S=E.length;let v=!1;for(let L=S-1,P=0;P<S;L=P++){let N=E[L],et=E[P],z=et.x-N.x,_=et.y-N.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(N=E[P],z=-z,et=E[L],_=-_),y.y<N.y||y.y>et.y)continue;if(y.y===N.y){if(y.x===N.x)return!0}else{const C=_*(y.x-N.x)-z*(y.y-N.y);if(C===0)return!0;if(C<0)continue;v=!v}}else{if(y.y!==N.y)continue;if(et.x<=y.x&&y.x<=N.x||N.x<=y.x&&y.x<=et.x)return!0}}return v}const s=En.isClockWise,o=this.subPaths;if(o.length===0)return[];if(e===!0)return n(o);let a,l,c;const h=[];if(o.length===1)return l=o[0],c=new Xn,c.curves=l.curves,h.push(c),h;let u=!s(o[0].getPoints());u=t?!u:u;const d=[],f=[];let g=[],m=0,p;f[m]=void 0,g[m]=[];for(let y=0,E=o.length;y<E;y++)l=o[y],p=l.getPoints(),a=s(p),a=t?!a:a,a?(!u&&f[m]&&m++,f[m]={s:new Xn,p},f[m].s.curves=l.curves,u&&m++,g[m]=[]):g[m].push({h:l,p:p[0]});if(!f[0])return n(o);if(f.length>1){let y=!1,E=0;for(let S=0,v=f.length;S<v;S++)d[S]=[];for(let S=0,v=f.length;S<v;S++){const L=g[S];for(let P=0;P<L.length;P++){const N=L[P];let et=!0;for(let z=0;z<f.length;z++)i(N.p,f[z].p)&&(S!==z&&E++,et?(et=!1,d[z].push(N)):y=!0);et&&d[S].push(N)}}E>0&&y===!1&&(g=d)}let x;for(let y=0,E=f.length;y<E;y++){c=f[y].s,h.push(c),x=g[y];for(let S=0,v=x.length;S<v;S++)c.holes.push(x[S].h)}return h}}const nn=new Uint32Array(512),sn=new Uint32Array(512);for(let r=0;r<256;++r){const t=r-127;t<-27?(nn[r]=0,nn[r|256]=32768,sn[r]=24,sn[r|256]=24):t<-14?(nn[r]=1024>>-t-14,nn[r|256]=1024>>-t-14|32768,sn[r]=-t-1,sn[r|256]=-t-1):t<=15?(nn[r]=t+15<<10,nn[r|256]=t+15<<10|32768,sn[r]=13,sn[r|256]=13):t<128?(nn[r]=31744,nn[r|256]=64512,sn[r]=24,sn[r|256]=24):(nn[r]=31744,nn[r|256]=64512,sn[r]=13,sn[r|256]=13)}const lu=new Uint32Array(2048),nr=new Uint32Array(64),Ux=new Uint32Array(64);for(let r=1;r<1024;++r){let t=r<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,lu[r]=t|e}for(let r=1024;r<2048;++r)lu[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)nr[r]=r<<23;nr[31]=1199570944;nr[32]=2147483648;for(let r=33;r<63;++r)nr[r]=2147483648+(r-32<<23);nr[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(Ux[r]=1024);Oe.create=function(r,t){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(Oe.prototype),r.prototype.constructor=r,r.prototype.getPoint=t,r};Qr.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Bx.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};Nx.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Cn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),gx.extractUrlBase(r)};Cn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};$e.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};$e.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};$e.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};$e.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};$e.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};bi.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};ps.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};po.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};ve.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};ve.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};ve.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};ve.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};ve.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};ve.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};_t.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};_t.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};_t.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new T().setFromMatrixColumn(this,3)};_t.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};_t.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};_t.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_t.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_t.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};_t.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};_t.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_t.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};_t.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};_t.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};_t.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};_t.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};_t.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};_t.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};_t.prototype.makeFrustum=function(r,t,e,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,t,n,e,i,s)};_t.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};wn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Le.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Le.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};ms.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};ms.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};ms.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};le.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};le.prototype.barycoordFromPoint=function(r,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,t)};le.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};le.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};le.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};le.barycoordFromPoint=function(r,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),le.getBarycoord(r,t,e,n,i)};le.normal=function(r,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),le.getNormal(r,t,e,n)};Xn.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};Xn.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Si(this,r)};Xn.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new il(this,r)};Y.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};Y.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};Y.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};T.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};T.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};T.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};T.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};T.prototype.getColumnFromMatrix=function(r,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,r)};T.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};T.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};T.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};T.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};jt.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};jt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Gt.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Gt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Gt.prototype.translate=function(r,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,r)};Gt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Gt.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Gt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});ge.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(ge.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),bd},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Fh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Ee.prototype.setLens=function(r,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(r)};Object.defineProperties(cn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(ue.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===Kr},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(Kr)}}});ue.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Kr:Os),this};ue.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},ue.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Kt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Kt.prototype.addAttribute=function(r,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new ue(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(r,t)};Kt.prototype.addDrawCall=function(r,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,t)};Kt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Kt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Kt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Kt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Kt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});tr.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?Kr:Os),this};tr.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Si.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Si.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Si.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};ja.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(de.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new mt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===dh}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(Ye.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Xt.prototype.clearTarget=function(r,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(t,e,n)};Xt.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Xt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Xt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Xt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Xt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Xt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Xt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Xt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Xt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Xt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Xt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Xt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Xt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Xt.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Xt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Xt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Xt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Xt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Xt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Xt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Xt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Xt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Xt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Xt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Xt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Qt:Tn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Dh.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Ie.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});bx.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new yx().load(r,function(n){t.setBuffer(n)}),this};Va.prototype.updateCubeMap=function(r,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,t)};Va.prototype.clear=function(r,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,t,e,n)};Mi.crossOrigin=void 0;Mi.loadTexture=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new ux;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};Mi.loadTextureCube=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new hx;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};Mi.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Mi.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ba}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ba);class Hx extends Cn{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new eu(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){let l;try{l=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(a.substring(65,a.length-2))}const c=s.parse(l);e&&e(c)},n,i)}parse(t){return new cu(t)}}class cu{constructor(t){this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Vx(t,e,this.data);for(let s=0,o=i.length;s<o;s++)Array.prototype.push.apply(n,i[s].toShapes());return n}}function Vx(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=Gx(h,i,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function Gx(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new Ox;let a,l,c,h,u,d,f,g;if(s.o){const m=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,x=m.length;p<x;)switch(m[p++]){case"m":a=m[p++]*t+e,l=m[p++]*t+n,o.moveTo(a,l);break;case"l":a=m[p++]*t+e,l=m[p++]*t+n,o.lineTo(a,l);break;case"q":c=m[p++]*t+e,h=m[p++]*t+n,u=m[p++]*t+e,d=m[p++]*t+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=m[p++]*t+e,h=m[p++]*t+n,u=m[p++]*t+e,d=m[p++]*t+n,f=m[p++]*t+e,g=m[p++]*t+n,o.bezierCurveTo(u,d,f,g,c,h);break}}return{offsetX:s.ha*t,path:o}}cu.prototype.isFont=!0;class Wx extends Si{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1);super(i,e)}this.type="TextGeometry"}}function fa(r,t,e){if(r&&r.length){const[n,i]=t,s=Math.PI/180*e,o=Math.cos(s),a=Math.sin(s);r.forEach(l=>{const[c,h]=l;l[0]=(c-n)*o-(h-i)*a+n,l[1]=(c-n)*a+(h-i)*o+i})}}function wo(r){const t=r[0],e=r[1];return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function ir(r,t){const e=t.hachureAngle+90;let n=t.hachureGap;n<0&&(n=4*t.strokeWidth),n=Math.max(n,.1);const i=[0,0];if(e)for(const o of r)fa(o,i,e);const s=function(o,a){const l=[];for(const f of o){const g=[...f];g[0].join(",")!==g[g.length-1].join(",")&&g.push([g[0][0],g[0][1]]),g.length>2&&l.push(g)}const c=[];a=Math.max(a,.1);const h=[];for(const f of l)for(let g=0;g<f.length-1;g++){const m=f[g],p=f[g+1];if(m[1]!==p[1]){const x=Math.min(m[1],p[1]);h.push({ymin:x,ymax:Math.max(m[1],p[1]),x:x===m[1]?m[0]:p[0],islope:(p[0]-m[0])/(p[1]-m[1])})}}if(h.sort((f,g)=>f.ymin<g.ymin?-1:f.ymin>g.ymin?1:f.x<g.x?-1:f.x>g.x?1:f.ymax===g.ymax?0:(f.ymax-g.ymax)/Math.abs(f.ymax-g.ymax)),!h.length)return c;let u=[],d=h[0].ymin;for(;u.length||h.length;){if(h.length){let f=-1;for(let g=0;g<h.length&&!(h[g].ymin>d);g++)f=g;h.splice(0,f+1).forEach(g=>{u.push({s:d,edge:g})})}if(u=u.filter(f=>!(f.edge.ymax<=d)),u.sort((f,g)=>f.edge.x===g.edge.x?0:(f.edge.x-g.edge.x)/Math.abs(f.edge.x-g.edge.x)),u.length>1)for(let f=0;f<u.length;f+=2){const g=f+1;if(g>=u.length)break;const m=u[f].edge,p=u[g].edge;c.push([[Math.round(m.x),d],[Math.round(p.x),d]])}d+=a,u.forEach(f=>{f.edge.x=f.edge.x+a*f.edge.islope})}return c}(r,n);if(e){for(const o of r)fa(o,i,-e);(function(o,a,l){const c=[];o.forEach(h=>c.push(...h)),fa(c,a,l)})(s,i,-e)}return s}class dl{constructor(t){this.helper=t}fillPolygons(t,e){return this._fillPolygons(t,e)}_fillPolygons(t,e){const n=ir(t,e);return{type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const n=[];for(const i of t)n.push(...this.helper.doubleLineOps(i[0][0],i[0][1],i[1][0],i[1][1],e));return n}}class qx extends dl{fillPolygons(t,e){let n=e.hachureGap;n<0&&(n=4*e.strokeWidth),n=Math.max(n,.1);const i=ir(t,Object.assign({},e,{hachureGap:n})),s=Math.PI/180*e.hachureAngle,o=[],a=.5*n*Math.cos(s),l=.5*n*Math.sin(s);for(const[c,h]of i)wo([c,h])&&o.push([[c[0]-a,c[1]+l],[...h]],[[c[0]+a,c[1]-l],[...h]]);return{type:"fillSketch",ops:this.renderLines(o,e)}}}class Xx extends dl{fillPolygons(t,e){const n=this._fillPolygons(t,e),i=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),s=this._fillPolygons(t,i);return n.ops=n.ops.concat(s.ops),n}}class jx{constructor(t){this.helper=t}fillPolygons(t,e){const n=ir(t,e=Object.assign({},e,{hachureAngle:0}));return this.dotsOnLines(n,e)}dotsOnLines(t,e){const n=[];let i=e.hachureGap;i<0&&(i=4*e.strokeWidth),i=Math.max(i,.1);let s=e.fillWeight;s<0&&(s=e.strokeWidth/2);const o=i/4;for(const a of t){const l=wo(a),c=l/i,h=Math.ceil(c)-1,u=l-h*i,d=(a[0][0]+a[1][0])/2-i/4,f=Math.min(a[0][1],a[1][1]);for(let g=0;g<h;g++){const m=f+u+g*i,p=d-o+2*Math.random()*o,x=m-o+2*Math.random()*o,y=this.helper.ellipse(p,x,s,s,e);n.push(...y.ops)}}return{type:"fillSketch",ops:n}}}class Zx{constructor(t){this.helper=t}fillPolygons(t,e){const n=ir(t,e);return{type:"fillSketch",ops:this.dashedLine(n,e)}}dashedLine(t,e){const n=e.dashOffset<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashOffset,i=e.dashGap<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashGap,s=[];return t.forEach(o=>{const a=wo(o),l=Math.floor(a/(n+i)),c=(a+i-l*(n+i))/2;let h=o[0],u=o[1];h[0]>u[0]&&(h=o[1],u=o[0]);const d=Math.atan((u[1]-h[1])/(u[0]-h[0]));for(let f=0;f<l;f++){const g=f*(n+i),m=g+n,p=[h[0]+g*Math.cos(d)+c*Math.cos(d),h[1]+g*Math.sin(d)+c*Math.sin(d)],x=[h[0]+m*Math.cos(d)+c*Math.cos(d),h[1]+m*Math.sin(d)+c*Math.sin(d)];s.push(...this.helper.doubleLineOps(p[0],p[1],x[0],x[1],e))}}),s}}class Jx{constructor(t){this.helper=t}fillPolygons(t,e){const n=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,i=e.zigzagOffset<0?n:e.zigzagOffset,s=ir(t,e=Object.assign({},e,{hachureGap:n+i}));return{type:"fillSketch",ops:this.zigzagLines(s,i,e)}}zigzagLines(t,e,n){const i=[];return t.forEach(s=>{const o=wo(s),a=Math.round(o/(2*e));let l=s[0],c=s[1];l[0]>c[0]&&(l=s[1],c=s[0]);const h=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let u=0;u<a;u++){const d=2*u*e,f=2*(u+1)*e,g=Math.sqrt(2*Math.pow(e,2)),m=[l[0]+d*Math.cos(h),l[1]+d*Math.sin(h)],p=[l[0]+f*Math.cos(h),l[1]+f*Math.sin(h)],x=[m[0]+g*Math.cos(h+Math.PI/4),m[1]+g*Math.sin(h+Math.PI/4)];i.push(...this.helper.doubleLineOps(m[0],m[1],x[0],x[1],n),...this.helper.doubleLineOps(x[0],x[1],p[0],p[1],n))}}),i}}const Ae={};class Yx{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const Or={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function pa(r,t){return r.type===t}function Pa(r){const t=[],e=function(o){const a=new Array;for(;o!=="";)if(o.match(/^([ \t\r\n,]+)/))o=o.substr(RegExp.$1.length);else if(o.match(/^([aAcChHlLmMqQsStTvVzZ])/))a[a.length]={type:0,text:RegExp.$1},o=o.substr(RegExp.$1.length);else{if(!o.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];a[a.length]={type:1,text:`${parseFloat(RegExp.$1)}`},o=o.substr(RegExp.$1.length)}return a[a.length]={type:2,text:""},a}(r);let n="BOD",i=0,s=e[i];for(;!pa(s,2);){let o=0;const a=[];if(n==="BOD"){if(s.text!=="M"&&s.text!=="m")return Pa("M0,0"+r);i++,o=Or[s.text],n=s.text}else pa(s,1)?o=Or[n]:(i++,o=Or[s.text],n=s.text);if(!(i+o<e.length))throw new Error("Path data ended short");for(let l=i;l<i+o;l++){const c=e[l];if(!pa(c,1))throw new Error("Param not a number: "+n+","+c.text);a[a.length]=+c.text}if(typeof Or[n]!="number")throw new Error("Bad segment: "+n);{const l={key:n,data:a};t.push(l),i+=o,s=e[i],n==="M"&&(n="L"),n==="m"&&(n="l")}}return t}function Qc(r){let t=0,e=0,n=0,i=0;const s=[];for(const{key:o,data:a}of r)switch(o){case"M":s.push({key:"M",data:[...a]}),[t,e]=a,[n,i]=a;break;case"m":t+=a[0],e+=a[1],s.push({key:"M",data:[t,e]}),n=t,i=e;break;case"L":s.push({key:"L",data:[...a]}),[t,e]=a;break;case"l":t+=a[0],e+=a[1],s.push({key:"L",data:[t,e]});break;case"C":s.push({key:"C",data:[...a]}),t=a[4],e=a[5];break;case"c":{const l=a.map((c,h)=>h%2?c+e:c+t);s.push({key:"C",data:l}),t=l[4],e=l[5];break}case"Q":s.push({key:"Q",data:[...a]}),t=a[2],e=a[3];break;case"q":{const l=a.map((c,h)=>h%2?c+e:c+t);s.push({key:"Q",data:l}),t=l[2],e=l[3];break}case"A":s.push({key:"A",data:[...a]}),t=a[5],e=a[6];break;case"a":t+=a[5],e+=a[6],s.push({key:"A",data:[a[0],a[1],a[2],a[3],a[4],t,e]});break;case"H":s.push({key:"H",data:[...a]}),t=a[0];break;case"h":t+=a[0],s.push({key:"H",data:[t]});break;case"V":s.push({key:"V",data:[...a]}),e=a[0];break;case"v":e+=a[0],s.push({key:"V",data:[e]});break;case"S":s.push({key:"S",data:[...a]}),t=a[2],e=a[3];break;case"s":{const l=a.map((c,h)=>h%2?c+e:c+t);s.push({key:"S",data:l}),t=l[2],e=l[3];break}case"T":s.push({key:"T",data:[...a]}),t=a[0],e=a[1];break;case"t":t+=a[0],e+=a[1],s.push({key:"T",data:[t,e]});break;case"Z":case"z":s.push({key:"Z",data:[]}),t=n,e=i}return s}function th(r){const t=[];let e="",n=0,i=0,s=0,o=0,a=0,l=0;for(const{key:c,data:h}of r){switch(c){case"M":t.push({key:"M",data:[...h]}),[n,i]=h,[s,o]=h;break;case"C":t.push({key:"C",data:[...h]}),n=h[4],i=h[5],a=h[2],l=h[3];break;case"L":t.push({key:"L",data:[...h]}),[n,i]=h;break;case"H":n=h[0],t.push({key:"L",data:[n,i]});break;case"V":i=h[0],t.push({key:"L",data:[n,i]});break;case"S":{let u=0,d=0;e==="C"||e==="S"?(u=n+(n-a),d=i+(i-l)):(u=n,d=i),t.push({key:"C",data:[u,d,...h]}),a=h[0],l=h[1],n=h[2],i=h[3];break}case"T":{const[u,d]=h;let f=0,g=0;e==="Q"||e==="T"?(f=n+(n-a),g=i+(i-l)):(f=n,g=i);const m=n+2*(f-n)/3,p=i+2*(g-i)/3,x=u+2*(f-u)/3,y=d+2*(g-d)/3;t.push({key:"C",data:[m,p,x,y,u,d]}),a=f,l=g,n=u,i=d;break}case"Q":{const[u,d,f,g]=h,m=n+2*(u-n)/3,p=i+2*(d-i)/3,x=f+2*(u-f)/3,y=g+2*(d-g)/3;t.push({key:"C",data:[m,p,x,y,f,g]}),a=u,l=d,n=f,i=g;break}case"A":{const u=Math.abs(h[0]),d=Math.abs(h[1]),f=h[2],g=h[3],m=h[4],p=h[5],x=h[6];u===0||d===0?(t.push({key:"C",data:[n,i,p,x,p,x]}),n=p,i=x):(n!==p||i!==x)&&(hu(n,i,p,x,u,d,f,g,m).forEach(function(y){t.push({key:"C",data:y})}),n=p,i=x);break}case"Z":t.push({key:"Z",data:[]}),n=s,i=o}e=c}return t}function Rs(r,t,e){return[r*Math.cos(e)-t*Math.sin(e),r*Math.sin(e)+t*Math.cos(e)]}function hu(r,t,e,n,i,s,o,a,l,c){const h=(u=o,Math.PI*u/180);var u;let d=[],f=0,g=0,m=0,p=0;if(c)[f,g,m,p]=c;else{[r,t]=Rs(r,t,-h),[e,n]=Rs(e,n,-h);const q=(r-e)/2,R=(t-n)/2;let B=q*q/(i*i)+R*R/(s*s);B>1&&(B=Math.sqrt(B),i*=B,s*=B);const F=i*i,O=s*s,D=F*O-F*R*R-O*q*q,X=F*R*R+O*q*q,J=(a===l?-1:1)*Math.sqrt(Math.abs(D/X));m=J*i*R/s+(r+e)/2,p=J*-s*q/i+(t+n)/2,f=Math.asin(parseFloat(((t-p)/s).toFixed(9))),g=Math.asin(parseFloat(((n-p)/s).toFixed(9))),r<m&&(f=Math.PI-f),e<m&&(g=Math.PI-g),f<0&&(f=2*Math.PI+f),g<0&&(g=2*Math.PI+g),l&&f>g&&(f-=2*Math.PI),!l&&g>f&&(g-=2*Math.PI)}let x=g-f;if(Math.abs(x)>120*Math.PI/180){const q=g,R=e,B=n;g=l&&g>f?f+120*Math.PI/180*1:f+120*Math.PI/180*-1,d=hu(e=m+i*Math.cos(g),n=p+s*Math.sin(g),R,B,i,s,o,0,l,[g,q,m,p])}x=g-f;const y=Math.cos(f),E=Math.sin(f),S=Math.cos(g),v=Math.sin(g),L=Math.tan(x/4),P=4/3*i*L,N=4/3*s*L,et=[r,t],z=[r+P*E,t-N*y],_=[e+P*v,n-N*S],C=[e,n];if(z[0]=2*et[0]-z[0],z[1]=2*et[1]-z[1],c)return[z,_,C].concat(d);{d=[z,_,C].concat(d);const q=[];for(let R=0;R<d.length;R+=3){const B=Rs(d[R][0],d[R][1],h),F=Rs(d[R+1][0],d[R+1][1],h),O=Rs(d[R+2][0],d[R+2][1],h);q.push([B[0],B[1],F[0],F[1],O[0],O[1]])}return q}}const $x={randOffset:function(r,t){return gt(r,t)},randOffsetWithRange:function(r,t,e){return no(r,t,e)},ellipse:function(r,t,e,n,i){const s=du(e,n,i);return Da(r,t,i,s).opset},doubleLineOps:function(r,t,e,n,i){return An(r,t,e,n,i,!0)}};function uu(r,t,e,n,i){return{type:"path",ops:An(r,t,e,n,i)}}function Xr(r,t,e){const n=(r||[]).length;if(n>2){const i=[];for(let s=0;s<n-1;s++)i.push(...An(r[s][0],r[s][1],r[s+1][0],r[s+1][1],e));return t&&i.push(...An(r[n-1][0],r[n-1][1],r[0][0],r[0][1],e)),{type:"path",ops:i}}return n===2?uu(r[0][0],r[0][1],r[1][0],r[1][1],e):{type:"path",ops:[]}}function Kx(r,t,e,n,i){return function(s,o){return Xr(s,!0,o)}([[r,t],[r+e,t],[r+e,t+n],[r,t+n]],i)}function Qx(r,t){let e=ih(r,1*(1+.2*t.roughness),t);if(!t.disableMultiStroke){const n=ih(r,1.5*(1+.22*t.roughness),function(i){const s=Object.assign({},i);return s.randomizer=void 0,i.seed&&(s.seed=i.seed+1),s}(t));e=e.concat(n)}return{type:"path",ops:e}}function du(r,t,e){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(r/2,2)+Math.pow(t/2,2))/2)),i=Math.ceil(Math.max(e.curveStepCount,e.curveStepCount/Math.sqrt(200)*n)),s=2*Math.PI/i;let o=Math.abs(r/2),a=Math.abs(t/2);const l=1-e.curveFitting;return o+=gt(o*l,e),a+=gt(a*l,e),{increment:s,rx:o,ry:a}}function Da(r,t,e,n){const[i,s]=sh(n.increment,r,t,n.rx,n.ry,1,n.increment*no(.1,no(.4,1,e),e),e);let o=io(i,null,e);if(!e.disableMultiStroke&&e.roughness!==0){const[a]=sh(n.increment,r,t,n.rx,n.ry,1.5,0,e),l=io(a,null,e);o=o.concat(l)}return{estimatedPoints:s,opset:{type:"path",ops:o}}}function eh(r,t,e,n,i,s,o,a,l){const c=r,h=t;let u=Math.abs(e/2),d=Math.abs(n/2);u+=gt(.01*u,l),d+=gt(.01*d,l);let f=i,g=s;for(;f<0;)f+=2*Math.PI,g+=2*Math.PI;g-f>2*Math.PI&&(f=0,g=2*Math.PI);const m=2*Math.PI/l.curveStepCount,p=Math.min(m/2,(g-f)/2),x=rh(p,c,h,u,d,f,g,1,l);if(!l.disableMultiStroke){const y=rh(p,c,h,u,d,f,g,1.5,l);x.push(...y)}return o&&(a?x.push(...An(c,h,c+u*Math.cos(f),h+d*Math.sin(f),l),...An(c,h,c+u*Math.cos(g),h+d*Math.sin(g),l)):x.push({op:"lineTo",data:[c,h]},{op:"lineTo",data:[c+u*Math.cos(f),h+d*Math.sin(f)]})),{type:"path",ops:x}}function Ur(r,t){const e=[];for(const n of r)if(n.length){const i=t.maxRandomnessOffset||0,s=n.length;if(s>2){e.push({op:"move",data:[n[0][0]+gt(i,t),n[0][1]+gt(i,t)]});for(let o=1;o<s;o++)e.push({op:"lineTo",data:[n[o][0]+gt(i,t),n[o][1]+gt(i,t)]})}}return{type:"fillPath",ops:e}}function Xi(r,t){return function(e,n){let i=e.fillStyle||"hachure";if(!Ae[i])switch(i){case"zigzag":Ae[i]||(Ae[i]=new qx(n));break;case"cross-hatch":Ae[i]||(Ae[i]=new Xx(n));break;case"dots":Ae[i]||(Ae[i]=new jx(n));break;case"dashed":Ae[i]||(Ae[i]=new Zx(n));break;case"zigzag-line":Ae[i]||(Ae[i]=new Jx(n));break;case"hachure":default:i="hachure",Ae[i]||(Ae[i]=new dl(n))}return Ae[i]}(t,$x).fillPolygons(r,t)}function fu(r){return r.randomizer||(r.randomizer=new Yx(r.seed||0)),r.randomizer.next()}function no(r,t,e,n=1){return e.roughness*n*(fu(e)*(t-r)+r)}function gt(r,t,e=1){return no(-r,r,t,e)}function An(r,t,e,n,i,s=!1){const o=s?i.disableMultiStrokeFill:i.disableMultiStroke,a=nh(r,t,e,n,i,!0,!1);if(o)return a;const l=nh(r,t,e,n,i,!0,!0);return a.concat(l)}function nh(r,t,e,n,i,s,o){const a=Math.pow(r-e,2)+Math.pow(t-n,2),l=Math.sqrt(a);let c=1;c=l<200?1:l>500?.4:-.0016668*l+1.233334;let h=i.maxRandomnessOffset||0;h*h*100>a&&(h=l/10);const u=h/2,d=.2+.2*fu(i);let f=i.bowing*i.maxRandomnessOffset*(n-t)/200,g=i.bowing*i.maxRandomnessOffset*(r-e)/200;f=gt(f,i,c),g=gt(g,i,c);const m=[],p=()=>gt(u,i,c),x=()=>gt(h,i,c),y=i.preserveVertices;return s&&(o?m.push({op:"move",data:[r+(y?0:p()),t+(y?0:p())]}):m.push({op:"move",data:[r+(y?0:gt(h,i,c)),t+(y?0:gt(h,i,c))]})),o?m.push({op:"bcurveTo",data:[f+r+(e-r)*d+p(),g+t+(n-t)*d+p(),f+r+2*(e-r)*d+p(),g+t+2*(n-t)*d+p(),e+(y?0:p()),n+(y?0:p())]}):m.push({op:"bcurveTo",data:[f+r+(e-r)*d+x(),g+t+(n-t)*d+x(),f+r+2*(e-r)*d+x(),g+t+2*(n-t)*d+x(),e+(y?0:x()),n+(y?0:x())]}),m}function ih(r,t,e){const n=[];n.push([r[0][0]+gt(t,e),r[0][1]+gt(t,e)]),n.push([r[0][0]+gt(t,e),r[0][1]+gt(t,e)]);for(let i=1;i<r.length;i++)n.push([r[i][0]+gt(t,e),r[i][1]+gt(t,e)]),i===r.length-1&&n.push([r[i][0]+gt(t,e),r[i][1]+gt(t,e)]);return io(n,null,e)}function io(r,t,e){const n=r.length,i=[];if(n>3){const s=[],o=1-e.curveTightness;i.push({op:"move",data:[r[1][0],r[1][1]]});for(let a=1;a+2<n;a++){const l=r[a];s[0]=[l[0],l[1]],s[1]=[l[0]+(o*r[a+1][0]-o*r[a-1][0])/6,l[1]+(o*r[a+1][1]-o*r[a-1][1])/6],s[2]=[r[a+1][0]+(o*r[a][0]-o*r[a+2][0])/6,r[a+1][1]+(o*r[a][1]-o*r[a+2][1])/6],s[3]=[r[a+1][0],r[a+1][1]],i.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[3][0],s[3][1]]})}if(t&&t.length===2){const a=e.maxRandomnessOffset;i.push({op:"lineTo",data:[t[0]+gt(a,e),t[1]+gt(a,e)]})}}else n===3?(i.push({op:"move",data:[r[1][0],r[1][1]]}),i.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):n===2&&i.push(...An(r[0][0],r[0][1],r[1][0],r[1][1],e));return i}function sh(r,t,e,n,i,s,o,a){const l=[],c=[];if(a.roughness===0){r/=4,c.push([t+n*Math.cos(-r),e+i*Math.sin(-r)]);for(let h=0;h<=2*Math.PI;h+=r){const u=[t+n*Math.cos(h),e+i*Math.sin(h)];l.push(u),c.push(u)}c.push([t+n*Math.cos(0),e+i*Math.sin(0)]),c.push([t+n*Math.cos(r),e+i*Math.sin(r)])}else{const h=gt(.5,a)-Math.PI/2;c.push([gt(s,a)+t+.9*n*Math.cos(h-r),gt(s,a)+e+.9*i*Math.sin(h-r)]);const u=2*Math.PI+h-.01;for(let d=h;d<u;d+=r){const f=[gt(s,a)+t+n*Math.cos(d),gt(s,a)+e+i*Math.sin(d)];l.push(f),c.push(f)}c.push([gt(s,a)+t+n*Math.cos(h+2*Math.PI+.5*o),gt(s,a)+e+i*Math.sin(h+2*Math.PI+.5*o)]),c.push([gt(s,a)+t+.98*n*Math.cos(h+o),gt(s,a)+e+.98*i*Math.sin(h+o)]),c.push([gt(s,a)+t+.9*n*Math.cos(h+.5*o),gt(s,a)+e+.9*i*Math.sin(h+.5*o)])}return[c,l]}function rh(r,t,e,n,i,s,o,a,l){const c=s+gt(.1,l),h=[];h.push([gt(a,l)+t+.9*n*Math.cos(c-r),gt(a,l)+e+.9*i*Math.sin(c-r)]);for(let u=c;u<=o;u+=r)h.push([gt(a,l)+t+n*Math.cos(u),gt(a,l)+e+i*Math.sin(u)]);return h.push([t+n*Math.cos(o),e+i*Math.sin(o)]),h.push([t+n*Math.cos(o),e+i*Math.sin(o)]),io(h,null,l)}function t_(r,t,e,n,i,s,o,a){const l=[],c=[a.maxRandomnessOffset||1,(a.maxRandomnessOffset||1)+.3];let h=[0,0];const u=a.disableMultiStroke?1:2,d=a.preserveVertices;for(let f=0;f<u;f++)f===0?l.push({op:"move",data:[o[0],o[1]]}):l.push({op:"move",data:[o[0]+(d?0:gt(c[0],a)),o[1]+(d?0:gt(c[0],a))]}),h=d?[i,s]:[i+gt(c[f],a),s+gt(c[f],a)],l.push({op:"bcurveTo",data:[r+gt(c[f],a),t+gt(c[f],a),e+gt(c[f],a),n+gt(c[f],a),h[0],h[1]]});return l}function Ps(r){return[...r]}function jr(r,t){return Math.pow(r[0]-t[0],2)+Math.pow(r[1]-t[1],2)}function e_(r,t,e){const n=jr(t,e);if(n===0)return jr(r,t);let i=((r[0]-t[0])*(e[0]-t[0])+(r[1]-t[1])*(e[1]-t[1]))/n;return i=Math.max(0,Math.min(1,i)),jr(r,ei(t,e,i))}function ei(r,t,e){return[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e]}function Ia(r,t,e,n){const i=n||[];if(function(a,l){const c=a[l+0],h=a[l+1],u=a[l+2],d=a[l+3];let f=3*h[0]-2*c[0]-d[0];f*=f;let g=3*h[1]-2*c[1]-d[1];g*=g;let m=3*u[0]-2*d[0]-c[0];m*=m;let p=3*u[1]-2*d[1]-c[1];return p*=p,f<m&&(f=m),g<p&&(g=p),f+g}(r,t)<e){const a=r[t+0];i.length?(s=i[i.length-1],o=a,Math.sqrt(jr(s,o))>1&&i.push(a)):i.push(a),i.push(r[t+3])}else{const l=r[t+0],c=r[t+1],h=r[t+2],u=r[t+3],d=ei(l,c,.5),f=ei(c,h,.5),g=ei(h,u,.5),m=ei(d,f,.5),p=ei(f,g,.5),x=ei(m,p,.5);Ia([l,d,m,x],0,e,i),Ia([x,p,g,u],0,e,i)}var s,o;return i}function n_(r,t){return so(r,0,r.length,t)}function so(r,t,e,n,i){const s=i||[],o=r[t],a=r[e-1];let l=0,c=1;for(let h=t+1;h<e-1;++h){const u=e_(r[h],o,a);u>l&&(l=u,c=h)}return Math.sqrt(l)>n?(so(r,t,c+1,n,s),so(r,c,e,n,s)):(s.length||s.push(o),s.push(a)),s}function oh(r,t=.15,e){const n=[],i=(r.length-1)/3;for(let s=0;s<i;s++)Ia(r,3*s,t,n);return e&&e>0?so(n,0,n.length,e):n}const De="none";class ro{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,n){return{shape:t,sets:e||[],options:n||this.defaultOptions}}line(t,e,n,i,s){const o=this._o(s);return this._d("line",[uu(t,e,n,i,o)],o)}rectangle(t,e,n,i,s){const o=this._o(s),a=[],l=Kx(t,e,n,i,o);if(o.fill){const c=[[t,e],[t+n,e],[t+n,e+i],[t,e+i]];o.fillStyle==="solid"?a.push(Ur([c],o)):a.push(Xi([c],o))}return o.stroke!==De&&a.push(l),this._d("rectangle",a,o)}ellipse(t,e,n,i,s){const o=this._o(s),a=[],l=du(n,i,o),c=Da(t,e,o,l);if(o.fill)if(o.fillStyle==="solid"){const h=Da(t,e,o,l).opset;h.type="fillPath",a.push(h)}else a.push(Xi([c.estimatedPoints],o));return o.stroke!==De&&a.push(c.opset),this._d("ellipse",a,o)}circle(t,e,n,i){const s=this.ellipse(t,e,n,n,i);return s.shape="circle",s}linearPath(t,e){const n=this._o(e);return this._d("linearPath",[Xr(t,!1,n)],n)}arc(t,e,n,i,s,o,a=!1,l){const c=this._o(l),h=[],u=eh(t,e,n,i,s,o,a,!0,c);if(a&&c.fill)if(c.fillStyle==="solid"){const d=Object.assign({},c);d.disableMultiStroke=!0;const f=eh(t,e,n,i,s,o,!0,!1,d);f.type="fillPath",h.push(f)}else h.push(function(d,f,g,m,p,x,y){const E=d,S=f;let v=Math.abs(g/2),L=Math.abs(m/2);v+=gt(.01*v,y),L+=gt(.01*L,y);let P=p,N=x;for(;P<0;)P+=2*Math.PI,N+=2*Math.PI;N-P>2*Math.PI&&(P=0,N=2*Math.PI);const et=(N-P)/y.curveStepCount,z=[];for(let _=P;_<=N;_+=et)z.push([E+v*Math.cos(_),S+L*Math.sin(_)]);return z.push([E+v*Math.cos(N),S+L*Math.sin(N)]),z.push([E,S]),Xi([z],y)}(t,e,n,i,s,o,c));return c.stroke!==De&&h.push(u),this._d("arc",h,c)}curve(t,e){const n=this._o(e),i=[],s=Qx(t,n);if(n.fill&&n.fill!==De&&t.length>=3){const o=oh(function(a,l=0){const c=a.length;if(c<3)throw new Error("A curve must have at least three points.");const h=[];if(c===3)h.push(Ps(a[0]),Ps(a[1]),Ps(a[2]),Ps(a[2]));else{const u=[];u.push(a[0],a[0]);for(let g=1;g<a.length;g++)u.push(a[g]),g===a.length-1&&u.push(a[g]);const d=[],f=1-l;h.push(Ps(u[0]));for(let g=1;g+2<u.length;g++){const m=u[g];d[0]=[m[0],m[1]],d[1]=[m[0]+(f*u[g+1][0]-f*u[g-1][0])/6,m[1]+(f*u[g+1][1]-f*u[g-1][1])/6],d[2]=[u[g+1][0]+(f*u[g][0]-f*u[g+2][0])/6,u[g+1][1]+(f*u[g][1]-f*u[g+2][1])/6],d[3]=[u[g+1][0],u[g+1][1]],h.push(d[1],d[2],d[3])}}return h}(t),10,(1+n.roughness)/2);n.fillStyle==="solid"?i.push(Ur([o],n)):i.push(Xi([o],n))}return n.stroke!==De&&i.push(s),this._d("curve",i,n)}polygon(t,e){const n=this._o(e),i=[],s=Xr(t,!0,n);return n.fill&&(n.fillStyle==="solid"?i.push(Ur([t],n)):i.push(Xi([t],n))),n.stroke!==De&&i.push(s),this._d("polygon",i,n)}path(t,e){const n=this._o(e),i=[];if(!t)return this._d("path",i,n);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const s=n.fill&&n.fill!=="transparent"&&n.fill!==De,o=n.stroke!==De,a=!!(n.simplification&&n.simplification<1),l=function(c,h,u){const d=th(Qc(Pa(c))),f=[];let g=[],m=[0,0],p=[];const x=()=>{p.length>=4&&g.push(...oh(p,h)),p=[]},y=()=>{x(),g.length&&(f.push(g),g=[])};for(const{key:S,data:v}of d)switch(S){case"M":y(),m=[v[0],v[1]],g.push(m);break;case"L":x(),g.push([v[0],v[1]]);break;case"C":if(!p.length){const L=g.length?g[g.length-1]:m;p.push([L[0],L[1]])}p.push([v[0],v[1]]),p.push([v[2],v[3]]),p.push([v[4],v[5]]);break;case"Z":x(),g.push([m[0],m[1]])}if(y(),!u)return f;const E=[];for(const S of f){const v=n_(S,u);v.length&&E.push(v)}return E}(t,1,a?4-4*n.simplification:(1+n.roughness)/2);return s&&(n.fillStyle==="solid"?i.push(Ur(l,n)):i.push(Xi(l,n))),o&&(a?l.forEach(c=>{i.push(Xr(c,!1,n))}):i.push(function(c,h){const u=th(Qc(Pa(c))),d=[];let f=[0,0],g=[0,0];for(const{key:m,data:p}of u)switch(m){case"M":{const x=1*(h.maxRandomnessOffset||0),y=h.preserveVertices;d.push({op:"move",data:p.map(E=>E+(y?0:gt(x,h)))}),g=[p[0],p[1]],f=[p[0],p[1]];break}case"L":d.push(...An(g[0],g[1],p[0],p[1],h)),g=[p[0],p[1]];break;case"C":{const[x,y,E,S,v,L]=p;d.push(...t_(x,y,E,S,v,L,g,h)),g=[v,L];break}case"Z":d.push(...An(g[0],g[1],f[0],f[1],h)),g=[f[0],f[1]]}return{type:"path",ops:d}}(t,n))),this._d("path",i,n)}opsToPath(t,e){let n="";for(const i of t.ops){const s=typeof e=="number"&&e>=0?i.data.map(o=>+o.toFixed(e)):i.data;switch(i.op){case"move":n+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":n+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":n+=`L${s[0]} ${s[1]} `}}return n.trim()}toPaths(t){const e=t.sets||[],n=t.options||this.defaultOptions,i=[];for(const s of e){let o=null;switch(s.type){case"path":o={d:this.opsToPath(s),stroke:n.stroke,strokeWidth:n.strokeWidth,fill:De};break;case"fillPath":o={d:this.opsToPath(s),stroke:De,strokeWidth:0,fill:n.fill||De};break;case"fillSketch":o=this.fillSketch(s,n)}o&&i.push(o)}return i}fillSketch(t,e){let n=e.fillWeight;return n<0&&(n=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||De,strokeWidth:n,fill:De}}}class i_{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new ro(e)}draw(t){const e=t.sets||[],n=t.options||this.getDefaultOptions(),i=this.ctx,s=t.options.fixedDecimalPlaceDigits;for(const o of e)switch(o.type){case"path":i.save(),i.strokeStyle=n.stroke==="none"?"transparent":n.stroke,i.lineWidth=n.strokeWidth,n.strokeLineDash&&i.setLineDash(n.strokeLineDash),n.strokeLineDashOffset&&(i.lineDashOffset=n.strokeLineDashOffset),this._drawToContext(i,o,s),i.restore();break;case"fillPath":{i.save(),i.fillStyle=n.fill||"";const a=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(i,o,s,a),i.restore();break}case"fillSketch":this.fillSketch(i,o,n)}}fillSketch(t,e,n){let i=n.fillWeight;i<0&&(i=n.strokeWidth/2),t.save(),n.fillLineDash&&t.setLineDash(n.fillLineDash),n.fillLineDashOffset&&(t.lineDashOffset=n.fillLineDashOffset),t.strokeStyle=n.fill||"",t.lineWidth=i,this._drawToContext(t,e,n.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,e,n,i="nonzero"){t.beginPath();for(const s of e.ops){const o=typeof n=="number"&&n>=0?s.data.map(a=>+a.toFixed(n)):s.data;switch(s.op){case"move":t.moveTo(o[0],o[1]);break;case"bcurveTo":t.bezierCurveTo(o[0],o[1],o[2],o[3],o[4],o[5]);break;case"lineTo":t.lineTo(o[0],o[1])}}e.type==="fillPath"?t.fill(i):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,n,i,s){const o=this.gen.line(t,e,n,i,s);return this.draw(o),o}rectangle(t,e,n,i,s){const o=this.gen.rectangle(t,e,n,i,s);return this.draw(o),o}ellipse(t,e,n,i,s){const o=this.gen.ellipse(t,e,n,i,s);return this.draw(o),o}circle(t,e,n,i){const s=this.gen.circle(t,e,n,i);return this.draw(s),s}linearPath(t,e){const n=this.gen.linearPath(t,e);return this.draw(n),n}polygon(t,e){const n=this.gen.polygon(t,e);return this.draw(n),n}arc(t,e,n,i,s,o,a=!1,l){const c=this.gen.arc(t,e,n,i,s,o,a,l);return this.draw(c),c}curve(t,e){const n=this.gen.curve(t,e);return this.draw(n),n}path(t,e){const n=this.gen.path(t,e);return this.draw(n),n}}const Hr="http://www.w3.org/2000/svg";class s_{constructor(t,e){this.svg=t,this.gen=new ro(e)}draw(t){const e=t.sets||[],n=t.options||this.getDefaultOptions(),i=this.svg.ownerDocument||window.document,s=i.createElementNS(Hr,"g"),o=t.options.fixedDecimalPlaceDigits;for(const a of e){let l=null;switch(a.type){case"path":l=i.createElementNS(Hr,"path"),l.setAttribute("d",this.opsToPath(a,o)),l.setAttribute("stroke",n.stroke),l.setAttribute("stroke-width",n.strokeWidth+""),l.setAttribute("fill","none"),n.strokeLineDash&&l.setAttribute("stroke-dasharray",n.strokeLineDash.join(" ").trim()),n.strokeLineDashOffset&&l.setAttribute("stroke-dashoffset",`${n.strokeLineDashOffset}`);break;case"fillPath":l=i.createElementNS(Hr,"path"),l.setAttribute("d",this.opsToPath(a,o)),l.setAttribute("stroke","none"),l.setAttribute("stroke-width","0"),l.setAttribute("fill",n.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||l.setAttribute("fill-rule","evenodd");break;case"fillSketch":l=this.fillSketch(i,a,n)}l&&s.appendChild(l)}return s}fillSketch(t,e,n){let i=n.fillWeight;i<0&&(i=n.strokeWidth/2);const s=t.createElementNS(Hr,"path");return s.setAttribute("d",this.opsToPath(e,n.fixedDecimalPlaceDigits)),s.setAttribute("stroke",n.fill||""),s.setAttribute("stroke-width",i+""),s.setAttribute("fill","none"),n.fillLineDash&&s.setAttribute("stroke-dasharray",n.fillLineDash.join(" ").trim()),n.fillLineDashOffset&&s.setAttribute("stroke-dashoffset",`${n.fillLineDashOffset}`),s}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,e){return this.gen.opsToPath(t,e)}line(t,e,n,i,s){const o=this.gen.line(t,e,n,i,s);return this.draw(o)}rectangle(t,e,n,i,s){const o=this.gen.rectangle(t,e,n,i,s);return this.draw(o)}ellipse(t,e,n,i,s){const o=this.gen.ellipse(t,e,n,i,s);return this.draw(o)}circle(t,e,n,i){const s=this.gen.circle(t,e,n,i);return this.draw(s)}linearPath(t,e){const n=this.gen.linearPath(t,e);return this.draw(n)}polygon(t,e){const n=this.gen.polygon(t,e);return this.draw(n)}arc(t,e,n,i,s,o,a=!1,l){const c=this.gen.arc(t,e,n,i,s,o,a,l);return this.draw(c)}curve(t,e){const n=this.gen.curve(t,e);return this.draw(n)}path(t,e){const n=this.gen.path(t,e);return this.draw(n)}}var r_={canvas:(r,t)=>new i_(r,t),svg:(r,t)=>new s_(r,t),generator:r=>new ro(r),newSeed:()=>ro.newSeed()},o_="./assets/optimer_bold.typeface.d690a5f4.json",a_="./assets/optimer_regular.typeface.17e5e14d.json",l_="./assets/droid_sans_bold.typeface.ec40f077.json",c_="./assets/droid_sans_regular.typeface.8f0570e6.json",h_="./assets/droid_serif_bold.typeface.e9a71de5.json",u_="./assets/droid_serif_regular.typeface.99ff855b.json",d_="./assets/gentilis_bold.typeface.c028fd9c.json",f_="./assets/gentilis_regular.typeface.7ed95f2f.json",p_="./assets/helvetiker_bold.typeface.bd68159e.json",m_="./assets/helvetiker_regular.typeface.d5c54676.json";function ah(r){return r[Math.random()*r.length|0]}const g_="\u2007";function Vr(r,t){const e=[];for(let n=0;n<r;n++)e.push(t(n));return e}function Je(r,t,e,n){const i=(n-t)/(e-r);return function(s){return(s-r)*i+t}}function lh(r,t,e,n){e<r&&([r,t,e,n]=[e,n,r,t]);const i=(n-t)/(e-r);return function(s){return s<=r?t:s>=e?n:(s-r)*i+t}}function x_(r,t){return{x:Math.sin(t)*r,y:Math.cos(t)*r}}function Ne(r,t){const e=document.getElementById(r);if(!e)throw new Error("Could not find element with id "+r+".  Expected type:  "+t.name);if(e instanceof t)return e;throw new Error("Element with id "+r+" has type "+e.constructor.name+".  Expected type:  "+t.name)}function __(){const r=new Map;return/^#?(.*)$/.exec(location.hash.replace("+","%20"))[1].split("&").forEach(n=>{const i=n.split("=",2);if(i.length==2){const s=decodeURIComponent(i[0]),o=decodeURIComponent(i[1]);r.set(s,o)}}),r}var v_=["krunch","zlonk","klonk","bam","kapow","ouch","whamm","zap","kapow","urkkk","zok","biff","zzzzzwap","pow","ooooff","clunk","crraack","ooooff","thwapp","awk","bam","crunch","eee-yow","crr-aaack","ooooff","pow","crash","thwapp","biff","whamm","sock","pow","zam","crunch","zlonk","pow","whack","zlopp","boff","zap","krunch","zap","boff","zlott","crash","zlopp","zzzzzwap","bam","zok","pow","kapow","biff","pam","thunk","whamm","biff","pow","zap","kapow","whamm","klonk","zap","crash","boff","pow","zzzzzwap","zap","crraack","crunch","bonk","rakkk","ooooff","thwack","thwack","zap","crunch","ooooff","bonk","awkkkkkk","zzzzzwap","zgruppp","kapow","pow","powie","crunch","boff","crraack","boff","****","pow","awkkkkkk","zok","biff","crunch","qunckkk","bam","thwapp","pow","zlonk","pow","sock","ooooff","aiieee","biff","sock","thunk","bam","crunch","whap","swoosh","swoosh","swoosh","swoosh","pow","zamm","biff","crraack","clunk","sock","kapow","sock","pow","zap","thwapp","crash","owww","zamm","zowie","crraack","eee-yow","qunckkk","sock","clank","thwack","bonk","ouch","*****","biff","clank","clash","touch\xE9","kayo","ooooff","rip","pow","zap","sock","crash","ooooff","klonk","thunk","whap","zok","zam","whamm","eee-yow","ooooff","biff","boff","pow","klonk","whap","zap","sock","zamm","kapow","whamm","clank","clank","crash","eee-yow","pow","whap","swish","zamm","uggh","swoosh","pam","zap","flrbbbbb","pow","whap","thwack","biff","bap","bap","zwapp","sploosh","klonk","urkk","swoosh","swa-a-p","eee-yow","ouch","kapow","ker-sploosh","spla-a-t","plop","urkkk","blurp","ker-plop","zapeth","thwacke","wham-eth","clunk-eth","thwape","bang-eth","whack-eth","thwacke","clank-est","clange","crunch-eth","ouch-eth","wham-eth","zap","boff","thwack","whamm","kapow","z-zwap","eee-yow","ooooff","bam","crunch","thunk","cr-r-a-a-ck","whamm","pow","biff","boff","kapow","bam","uggh","ooooff","zamm","kayo","thunk","sock","whamm","vronk","bonk","clunk","zlopp","z-zwap","klonk","zamm","powie","bam","splatt","bam","urkkk","glipp","ooooff","sock","boff","pow","bonk","ooooff","rakkk","powie","bam","touch\xE9","crash","zap","zlonk","bam","powie","zowie","vronk","cr-r-a-a-ck","splatt","boff","awk","splatt","whamm","z-zwap","splatt","flrbbbbb","kapow","kayo","aieee","uggh","pow","ooooff","awkkkkkk","bonk","kapow","thwack","bonk","whamm","kapow","bam","splatt","ooooff","sock","splatt","boff","zamm","whap","bonk","z-zwap","bam","kapow","whamm","bam","pow","zlopp","zlonk","sock","whack","zowie","biff","boff","kapow","whack","bonk","z-zwap","bam","splatt","whamm","whack","z-zwap","boff","zowie","boff","whamm","sock","kapow","splatt","crash","zamm","bam","zap","boff","whack","zamm","pam","sock","pow","whamm","rakkk","kapow","z-zwap","zap","kapow","splatt","pow","z-zwap","kapow","klonk","pow","ooooff","uggh","awkkkkkk","bonk","urkkk","clank","klonk","clash","clank","ooooff","whack","crash","eee-yow","splatt","boff","sock","splatt","zap","zowie","biff","pow","kapow","boff","zap","splatt","sock","whamm","eee-yow","ooooff","zowie","thunk","kayo","cr-r-a-a-ck","ooooff","ouch","eee-yow","biff","kayo","boff","pow","boff","kapow","z-zwap","bonk","whamm","boff","z-zwap","cr-r-a-a-ck","ooooff","whap","zamm","pam","eee-yow","kapow","ooooff","pow","splatt","zlopp","rakkk","ooooff","thunk","whap","splatt","biff","bam","boff","klonk","clash","zlopp","vronk","uggh","zowie","crunch","zlonk","touch\xE9","flrbbbbb","z-zwap","zowie","whamm","kapow","sock","kayo","ooooff","boff","zap","crash","sock","kapow","whack","pam","biff","sock","kapow","clunk","vronk","zap","sock","zlopp","whap","ooooff","boff","ooooff","zamm","zap","ooooff","klonk","whack","vronk","thwack","kapow","thunk","whamm","bam","zamm","whack","pam","sock","vronk","kapow","rakkk","ooooff","zap","boff","splatt","splatt","zlonk","zlopp","kapow","sock","kapow","sock","whack","clank","sock","whap","clash","zlonk","whamm","bloop","glurpp","ooooff","slosh","pow","thunk","boff","ooooff","zap","kapow","whap","kayo","biff","boff","eee-yow","kapow","boff","eee-yow","sock","whack","biff","zowie","zap","zamm","kapow","boff","biff","zamm","crash","vronk","whamm","bam","zlonk","zlopp","zap","ouch","crash","whack","zamm","whap","vronk","pow","zamm","ooooff","zlopp","zap","awk","biff","whap","zamm","pow","crash","ouch","crash","urkkk","whap","kapow","pow","vronk","sock","whamm","zamm","ooooff","kapow","z-zwap","eee-yow","whap","awk","bam","pow","zamm","zowie","boff","kapow","flrbbbbb","ouch","ooooff","biff","boff","kapow","ooooff","biff","splatt","whamm","sock","kapow","zowie","crash","clunk","boff","whamm","zap","whack","whap","biff","boff","pow","zowie","splatt","pow","splatt","boff","whamm","bam","zap","biff","pow","crash","kapow","sock","pow","splatt","kapow","sock","bam","whack","biff","whap","boff","kapow","splatt","pow","crash","whap","kapow","crash","zap","kapow","kapow","whack","pow","whap","clunk","sock","bam","biff","boff","zowie","zap","pow","sock","splatt","boff","kapow","whack","biff","zap","crunch","splatt","bam","splatt","crash","pow","whack","whamm","zowie","zap","sock","kapow","crunch","bam","boff","sock","crash","whamm","pow","zap","splatt","zowie","clunk","biff","boff","splatt","crash","bam","pow","zap","whack","sock","kapow","crash","boff","bam","crash","whack","crash","zap","whap","bam","kapow","pow","biff","boff","sock","bam","sock","crunch","kapow","whack","clunk","zowie","whack","biff","boff","crash","splatt","crunch","zap","whap","whamm","zowie","biff","splatt","biff","bam","boff","pow","crash","whap","zap","bang","whamm","biff","sock","splatt","crash","pow","whack","whap","zap","zowie","clunk","kapow","crash","bang","sock","biff","bam","zap","crunch","boff","zowie","bang","splatt","zap","sock","pow","kapow","crunch","crash","pow","sock","zap","crash","zowie","whamm","zowie","crash","zap","sock","whap","zowie","splatt"];const pu=__(),y_=pu.get("shadows")==="1",ce=14,Be=-ce,qs=ce-Be,Jn=new ja,es=class{constructor(){Jt(this,"canvas",document.createElement("canvas"));Jt(this,"context",this.canvas.getContext("2d"));Jt(this,"roughCanvas",r_.canvas(this.canvas));Jt(this,"texture",new Ka(this.canvas));Jt(this,"drawStar",(t,e,n)=>{const i=es.canvasSize/14*(Math.random()+1),s=Math.random()*2*Math.PI,o=2*Math.PI/5*2,a=[];for(let l=0;l<5;l++){const c=x_(i,s+l*o);a.push([t+c.x,e+c.y])}this.roughCanvas.polygon(a,{stroke:n,strokeWidth:5+Math.random()*5,roughness:2*Math.random()*2,disableMultiStroke:Math.random()>.5}),this.forceUpdate()})}forceUpdate(){this.texture.needsUpdate=!0}};let kt=es;Jt(kt,"canvasSize",600),Jt(kt,"margin",es.canvasSize/20),Jt(kt,"xToCanvas",Je(Be,0,ce,es.canvasSize)),Jt(kt,"yToCanvas",Je(Be,es.canvasSize,ce,0));const Gr={innerR:.2,outerR:.5};var qe,Mn;const ze=class extends kt{constructor(){super();$t(this,qe,new ge(new Qs(qs,qs),new yi({map:this.texture,transparent:!0})));$t(this,Mn,void 0);this.canvas.width=kt.canvasSize,this.canvas.height=kt.canvasSize,st(this,qe).position.z=ce,Jn.add(st(this,qe))}highlightPoint(t,e){var a;(a=st(this,Mn))==null||a.end();const n=kt.xToCanvas(t.x),i=kt.yToCanvas(t.y),s="white";if(Math.random()<.5){this.startSimpleFade(e);const l=Math.random();if(l<.3333)this.drawStar(n,i,s);else{const c=_i.findCell(n,i);l<.666667?_i.drawX(this.roughCanvas,s,c):_i.drawO(this.roughCanvas,s,c)}}else this.startCrackedGlassEffect(e,n,i)}startSimpleFade(t){st(this,qe).material.opacity=1,this.context.clearRect(0,0,kt.canvasSize,kt.canvasSize),this.texture.needsUpdate=!0;const e=t+1500,n=t+3e3,i=Je(e,1,n,0),s=a=>{a>n?o():a>=e&&(st(this,qe).material.opacity=i(a))},o=()=>{st(this,qe).material.opacity=0,oe(this,Mn,void 0)};oe(this,Mn,{doAnimationFrame:s,end:o})}startCrackedGlassEffect(t,e,n){const i=ze.randomToGlass(Math.random()),s=Math.min(ze.MAX_GLASS_SIZE,Math.max(ze.MIN_GLASS_SIZE,i*(Math.random()*.2+.9))),o=this.context,a=ze.img.naturalHeight;if(a<=0)return;const l=e-i/2,c=n-s/2;let h=!1,u=!1;const d=t+300,f=t+200,g=lh(f,i/2*Gr.innerR,d,i/2*Gr.outerR),m=lh(f,s/2*Gr.innerR,d,s/2*Gr.outerR),p=t+1500,x=t+3e3,y=Je(p,1,x,0),E=v=>{if(v>x){S();return}h||(st(this,qe).material.opacity=1,h=!0),u||(this.texture.needsUpdate=!0,o.clearRect(0,0,kt.canvasSize,kt.canvasSize),o.save(),v>=d?u=!0:(o.beginPath(),o.ellipse(e,n,g(v),m(v),0,0,Math.PI*2),o.clip()),o.drawImage(ze.img,0,0,a,a,l,c,i,s),o.restore()),v>=p&&(st(this,qe).material.opacity=y(v))},S=()=>{st(this,qe).material.opacity=0,oe(this,Mn,void 0)};oe(this,Mn,{doAnimationFrame:E,end:S})}doAnimationFrame(t){var e;(e=st(this,Mn))==null||e.doAnimationFrame(t)}};let Bn=ze;qe=new WeakMap,Mn=new WeakMap,Jt(Bn,"img",Ne("bulletGlass",HTMLImageElement)),Jt(Bn,"MAX_GLASS_SIZE",250/704*ze.canvasSize),Jt(Bn,"MIN_GLASS_SIZE",ze.MAX_GLASS_SIZE*.66),Jt(Bn,"randomToGlass",Je(0,ze.MIN_GLASS_SIZE,1,ze.MAX_GLASS_SIZE)),Jt(Bn,"instance",new ze);var rn,li,js,Zs,Un;const vn=class{constructor(t){$t(this,li,document.createElement("canvas"));$t(this,js,st(this,li).getContext("2d"));$t(this,Zs,new Ka(st(this,li)));$t(this,Un,void 0);if(this.material=t,!st(this,js))throw new Error("wtf");st(this,li).height=st(vn,rn),st(this,li).width=st(vn,rn)}fillCanvas(t,e,n){const i=st(this,js),s=i.createRadialGradient(t,e,0,t,e,n);for(let o=0;o<16;o++){const a="#"+o.toString(16).repeat(3),l=Math.acos(o/15*2-1)/Math.PI;s.addColorStop(l,a)}i.fillStyle=s,i.fillRect(0,0,st(vn,rn),st(vn,rn)),st(this,Zs).needsUpdate=!0}isActive(){return st(this,Un)!=null}doAnimationFrame(t){var e;(e=st(this,Un))==null||e.doAnimationFrame(t)}end(){var t;(t=st(this,Un))==null||t.end(),oe(this,Un,void 0)}start(t,e,n){e*=st(vn,rn)/kt.canvasSize,n*=st(vn,rn)/kt.canvasSize,this.end();const i=t+1500,s=Je(t,3,i,0),o=Je(t,0,i,-Math.PI*3);this.fillCanvas(e,n,st(vn,rn)/10),this.material.displacementMap=st(this,Zs),this.material.displacementScale=0,oe(this,Un,{doAnimationFrame:a=>{const l=s(a);l<=0?this.end():(this.material.displacementScale=l*Math.sin(o(a)),this.material.needsUpdate=!0)},end:()=>{this.material.displacementMap=null,this.material.needsUpdate=!0}})}};let ka=vn;rn=new WeakMap,li=new WeakMap,js=new WeakMap,Zs=new WeakMap,Un=new WeakMap,$t(ka,rn,300);var Hn,Vn;const yn=class{constructor(t,e){$t(this,Hn,void 0);$t(this,Vn,void 0);this.roughCanvas=t,this.wallInfo=e,this.reset()}reset(){oe(this,Vn,Array.from(new Array(9))),oe(this,Hn,Math.random()>=.5?"X":"O")}canAddMore(){return st(this,Hn)!==void 0}disable(){oe(this,Hn,void 0)}static toIndex(t){return t.row*3+t.column}canAdd(t){return this.canAddMore()&&st(this,Vn)[yn.toIndex(t)]===void 0}static cellCenter(t){return t*kt.canvasSize/3+kt.canvasSize/6}add(t){if(this.canAdd(t)){const e=st(this,Hn);st(this,Vn)[yn.toIndex(t)]=e,oe(this,Hn,e=="X"?"O":"X"),e=="O"?yn.drawO(this.roughCanvas,this.wallInfo.strokeColor,t):yn.drawX(this.roughCanvas,this.wallInfo.strokeColor,t),st(this,Vn).every(l=>l)&&this.disable();const n=l=>{const c=l.map(h=>st(this,Vn)[yn.toIndex(h)]);return c.every(h=>h=="X")?(this.disable(),"X"):c.every(h=>h=="O")?(this.disable(),"O"):void 0},i=(l,c,h,u)=>{const d={stroke:this.wallInfo.strokeColor,strokeWidth:20,roughness:4,bowing:8,disableMultiStroke:!0},f=()=>(Math.random()-.5)*kt.margin;this.roughCanvas.line(l+f(),c+f(),h+f(),u+f(),d)},s=kt.margin/2;for(let l=0;l<3;l++){const c=Vr(3,h=>({row:l,column:h}));if(n(c)){const h=yn.cellCenter(l);i(s,h,kt.canvasSize-s,h)}}for(let l=0;l<3;l++){const c=Vr(3,h=>({row:h,column:l}));if(n(c)){const h=yn.cellCenter(l);i(h,s,h,kt.canvasSize-s)}}const o=Vr(3,l=>({row:l,column:l}));n(o)&&i(s,s,kt.canvasSize-s,kt.canvasSize-s);const a=Vr(3,l=>({row:l,column:2-l}));return n(a)&&i(s,kt.canvasSize-s,kt.canvasSize-s,s),!0}else return console.log("Can't add tic tac toe move."),!1}static findCell(t,e){function n(i){return Math.floor(i*3/kt.canvasSize)}return{row:n(e),column:n(t)}}static drawX(t,e,n){const i={x:this.cellCenter(n.column),y:this.cellCenter(n.row)},s=this.radius,o=i.x-s,a=i.x+s,l=i.y-s,c=i.y+s,h={stroke:e,strokeWidth:7+Math.random()*2,roughness:4,bowing:4,disableMultiStroke:!0};t.line(o,l,a,c,h),t.line(o,c,a,l,h)}static drawO(t,e,n){const i={x:this.cellCenter(n.column),y:this.cellCenter(n.row)};t.circle(i.x,i.y,this.radius*2,{stroke:e,strokeWidth:7+Math.random()*2,roughness:3,disableMultiStroke:!0})}};let _i=yn;Hn=new WeakMap,Vn=new WeakMap,Jt(_i,"radius",kt.canvasSize/6-kt.margin);const Xs=Ne("canvas",HTMLCanvasElement),mu=Ne("canvasHolder",HTMLDivElement),bn=new Ee(45,Xs.offsetWidth/Xs.offsetHeight,.1,1e3),ds=new Xt({canvas:Xs});y_&&(ds.shadowMap.enabled=!0,ds.shadowMap.type=uh);ds.setPixelRatio(window.devicePixelRatio);ds.setSize(Xs.offsetWidth,Xs.offsetHeight);const w_=["x","y","z"];Jn.fog=new go(0,250,1400);const gu=pu.get("spotlight")==="1",sr=gu?new al(16777215,2/3,0,Math.PI/2):new ll(16777215,2/3);sr.position.set(ce/2,ce/4,ce*1.5);sr.castShadow=!0;sr.shadow.radius=8;Jn.add(sr);const rr=gu?new al(16777215,1,0,Math.PI/2):new ll(16777215,1);rr.position.set(-ce/2,ce/2,ce*1.5);rr.castShadow=!0;rr.shadow.radius=8;Jn.add(rr);var ci,Na,oo,Js,hi;const Fe=class{constructor(t){$t(this,Js,{});$t(this,hi,void 0);this.group=t,Fe.debug.all.push(this),t.rotation.x==0&&t.rotation.y==0&&oe(this,Js,{bevelEnabled:!0,bevelSize:.25,bevelThickness:.1})}isActive(){return st(this,hi)!==void 0}end(){var t;(t=st(this,hi))==null||t.call(this),oe(this,hi,void 0)}canDraw(){return st(Fe,ci).length>0}draw(t,e){var d,f,g;if(this.end(),!this.canDraw())return!1;const n=(d=Fe.debug.height)!=null?d:.4+Math.random()*.4,i=(f=Fe.debug.text)!=null?f:ah(v_)+"!".repeat(Math.floor(Math.random()*3)+1),s=(g=st(Fe,ci)[Fe.debug.font])!=null?g:ah(st(Fe,ci)),o=new Wx(i,xl({font:s,size:3,height:n,curveSegments:4},st(this,Js)));if(o.computeBoundingBox(),!o.boundingBox)throw new Error("wtf");const a=new ge(o,st(Fe,oo)),l=o.boundingBox.max.x-o.boundingBox.min.x;let c=t-l/2;{const p=c+o.boundingBox.max.x-ce;p>0&&(c-=p)}{const m=c+o.boundingBox.min.x,p=Be-m;p>0&&(c+=p)}let h=e;{const p=h+o.boundingBox.max.y-ce;p>0&&(h-=p)}{const m=h+o.boundingBox.min.y,p=Be-m;p>0&&(h+=p)}const u=Fe.debug.extraZ-o.boundingBox.min.z;return a.position.set(c,h,u),a.receiveShadow=!0,this.group.add(a),oe(this,hi,()=>{this.group.remove(a),o.dispose()}),!0}};let ii=Fe;ci=new WeakMap,Na=new WeakMap,oo=new WeakMap,Js=new WeakMap,hi=new WeakMap,$t(ii,ci,[]),$t(ii,Na,[o_,a_,l_,c_,h_,u_,d_,f_,p_,m_].forEach(t=>{new Hx().load(t,function(e){st(Fe,ci).push(e)})})),$t(ii,oo,[new yi({color:16777215}),new yi({color:4210752})]),Jt(ii,"debug",{extraZ:0,font:-1,text:void 0,height:void 0,freeze(){this.text="Debug!",this.font=0,this.height=.3},all:[]});var ui,Ys;class M_{constructor(){$t(this,ui,[]);$t(this,Ys,0)}add(t,e){if(e<=0||!isFinite(e))throw new Error("wtf");st(this,ui).push({value:t,weight:e}),oe(this,Ys,st(this,Ys)+e)}isEmpty(){return st(this,ui).length==0}pick(){if(this.isEmpty())throw new Error("wtf");let t=Math.random()*st(this,Ys);for(const{value:e,weight:n}of st(this,ui))if(t-=n,t<=0)return e;return console.log("Round off error?",this),st(this,ui)[0].value}}ui=new WeakMap,Ys=new WeakMap;var $s,Gn;const ao=class{constructor(t,e,n,i){$t(this,Gn,void 0);this.context=t,this.roughCanvas=e,this.colors=n,this.forceUpdate=i,this.drawComplete()}drawComplete(){oe(this,Gn,void 0),this.context.globalAlpha=1,this.context.fillStyle=this.colors.fillColor;const t=kt.canvasSize;this.context.fillRect(0,0,t,t),this.drawForeground(st(ao,$s)),this.forceUpdate()}startAnimation(t){const e=t,n=e+1e3+Math.random()*500;let i=0;const s=Je(e,10,n,st(ao,$s)),o=Je(e,0,n,1),a=Je(e,.6,n,1),l=this.context,c=pe.canvasSize,h=l.getImageData(0,0,c,c);oe(this,Gn,u=>{if(u>=n)this.drawComplete();else if(u>=i){l.putImageData(h,0,0),l.globalAlpha=o(u),this.context.fillStyle=this.colors.fillColor,this.context.fillRect(0,0,c,c),l.globalAlpha=a(u),this.drawForeground(s(u)),this.forceUpdate();const d=n-u,f=150,g=250;if(d<f*2)i=n;else{const m=u+f,p=Math.min(n-f,u+g);i=m+Math.random()*(p-m)}}this.context.globalAlpha=1}),st(this,Gn).call(this,t)}isActive(){return st(this,Gn)!=null}doAnimationFrame(t){var e;(e=st(this,Gn))==null||e.call(this,t)}drawForeground(t){const e=this.roughCanvas,n=kt.margin,i=kt.canvasSize,s=kt.canvasSize,o={stroke:this.colors.strokeColor,strokeWidth:10,roughness:t,bowing:t};e.line(n,s/3,i-n,s/3,o),e.line(n,s*2/3,i-n,s*2/3,o),e.line(i/3,n,i/3,s-n,o),e.line(i*2/3,n,i*2/3,s-n,o)}};let za=ao;$s=new WeakMap,Gn=new WeakMap,$t(za,$s,3);const si=class{static isReady(){return this.img.naturalHeight>0&&this.img.naturalWidth>0}static getHeight(t,e){const n=this.img.naturalHeight,i=this.img.naturalWidth;return n*(t/i)/e}static draw(t,e,n,i,s){const o=e-si.xCenter*i,a=this.getHeight(i,s),l=n-si.yCenter*a;t.drawImage(si.img,o,l,i,a)}static drawLines(t,e,n,i,s,o="#FF00FF"){t.save(),t.lineWidth=2.5,t.strokeStyle=o;const a=this.getHeight(i,s),l=n-a/2,c=n+a/2,h=e-i/2,u=e+i/2;t.beginPath(),t.moveTo(h,l),t.lineTo(u,c),t.moveTo(u,l),t.lineTo(h,c),t.stroke(),t.restore()}constructor(){throw new Error("wtf")}};let On=si;Jt(On,"img",Ne("bulletBig",HTMLImageElement)),Jt(On,"xCenterOffset",-2.5/120),Jt(On,"yCenterOffset",10/120),Jt(On,"xCenter",.5+si.xCenterOffset),Jt(On,"yCenter",.5+si.yCenterOffset);var di,fi,rs,pi,on,mi;const ri=class extends kt{constructor(t){super();$t(this,di,new Ki);$t(this,fi,new ge(new Qs(qs,qs,50,50),new yo({map:this.texture})));$t(this,rs,new ka(st(this,fi).material));$t(this,pi,void 0);$t(this,on,void 0);$t(this,mi,void 0);this.info=t,oe(this,on,new _i(this.roughCanvas,this.info)),t.init(st(this,di)),oe(this,pi,new ii(st(this,di))),Jn.add(st(this,di)),this.canvas.width=kt.canvasSize,this.canvas.height=kt.canvasSize,oe(this,mi,new za(this.context,this.roughCanvas,this.info,()=>this.forceUpdate())),st(this,di).add(st(this,fi)),st(this,fi).castShadow=!0,st(this,fi).receiveShadow=!0}highlightPoint(t,e){const{x:n,y:i}=this.info.flatten(t),s=kt.xToCanvas(n),o=kt.yToCanvas(i),a=_i.findCell(s,o),l=!st(this,mi).isActive(),c=new M_;l&&(st(this,on).canAddMore()?(st(this,on).canAdd(a)&&c.add("ttt",20),c.add("star",2),c.add("wall",.2)):(c.add("star",5),c.add("wall",1))),st(this,pi).canDraw()&&!st(this,rs).isActive()&&c.add("words",5),c.add("bump",5);const h=c.pick();switch(st(this,pi).end(),h){case"bump":{st(this,rs).start(e,s,o);break}case"star":{this.drawStar(s,o,this.info.strokeColor),st(this,on).disable();break}case"ttt":{st(this,on).add(a),this.forceUpdate();break}case"words":{st(this,pi).draw(n,i);break}case"wall":{st(this,mi).startAnimation(e),st(this,on).reset();break}case"bullet":{On.draw(this.context,s,o,200,1),st(this,on).disable();break}}}doAnimationFrame(t){st(this,rs).doAnimationFrame(t),st(this,mi).doAnimationFrame(t)}};let pe=ri;di=new WeakMap,fi=new WeakMap,rs=new WeakMap,pi=new WeakMap,on=new WeakMap,mi=new WeakMap,Jt(pe,"rear",new ri({fillColor:"hsl(0, 100%, 25%)",strokeColor:"hsl(0, 100%, 66%)",flatten(t){return new Y(t.x,t.y)},init(t){t.position.z=Be}})),Jt(pe,"left",new ri({fillColor:"hsl(120, 100%, 45%)",strokeColor:"hsl(120, 100%, 83%)",flatten(t){return new Y(-t.z,t.y)},init(t){t.position.x=Be,t.rotation.y=Math.PI/2}})),Jt(pe,"right",new ri({fillColor:"hsl(240, 100%, 45%)",strokeColor:"hsl(240, 100%, 83%)",flatten(t){return new Y(t.z,t.y)},init(t){t.position.x=ce,t.rotation.y=-Math.PI/2}})),Jt(pe,"top",new ri({fillColor:"hsl(60, 100%, 45%)",strokeColor:"hsl(60, 100%, 83%)",flatten(t){return new Y(t.x,t.z)},init(t){t.position.y=ce,t.rotation.x=Math.PI/2}})),Jt(pe,"bottom",new ri({fillColor:"hsl(180, 100%, 45%)",strokeColor:"hsl(180, 100%, 83%)",flatten(t){return new Y(t.x,-t.z)},init(t){t.position.y=Be,t.rotation.x=-Math.PI/2}}));const Fa={all:[pe.top,pe.bottom,pe.left,pe.right,pe.rear,Bn.instance],find(r,t){return t<0?r=="x"?pe.left:r=="y"?pe.bottom:pe.rear:r=="x"?pe.right:r=="y"?pe.top:Bn.instance}},fl=1;function xu(r=0,t=0,e=0){r instanceof Gt&&(e=r.position.z,t=r.position.y,r=r.position.x);const n=new sl(fl,24,24),i=new yo({color:16719904}),s=new ge(n,i);return s.position.set(r,t,e),s.castShadow=!0,Jn.add(s),s}const xn=xu();let Zi={y:0,x:0,z:0};window.phil={rightLight:sr,leftLight:rr,scene:Jn,makeMarker:xu,ball:xn,FightWordEffect:ii,SolidWall:pe,BulletDrawer:On};let ma;const ga=Be+fl,xa=ce-fl;function b_(r){if(ma!==void 0){const t=(r-ma)/1e3;if(t<=0)return;for(const n of w_){let i=xn.position[n];i=xn.position[n]+Zi[n]*t,i<ga?(i=ga,Zi[n]=Math.abs(Zi[n]),Fa.find(n,ga).highlightPoint(xn.position,r)):i>xa&&(i=xa,Zi[n]=-Math.abs(Zi[n]),Fa.find(n,xa).highlightPoint(xn.position,r)),xn.position[n]=i}ts.cx.baseVal.value=xn.position.x,ts.cy.baseVal.value=xn.position.z;const e=xn.position.y/ce+2;ts.rx.baseVal.value=e,ts.ry.baseVal.value=e}ma=r}function pl(r=50){const e=r/360*2*Math.PI/2,n=ce/Math.tan(e);bn.position.set(0,0,ce+n),bn.fov=r,bn.near=n/2,bn.far=n+qs*1.1,bn.updateProjectionMatrix()}pl();bn.lookAt(0,0,0);const S_=Ne("fovPath",SVGPathElement),ch=Ne("cubeRect",SVGRectElement),ts=Ne("miniBall",SVGEllipseElement);window.miniBall=ts;function E_(r){const i=r/360*2*Math.PI/2,s=35,o=(100-s)/2;ch.setAttribute("x",o.toString());const a=s/Math.tan(i)/2,l=95-a-s;ch.setAttribute("y",l.toString());const c=Math.hypot(50-o,95-l)+s/10,h=95-Math.cos(i)*c,u=Math.sin(i)*c,d=50-u,f=50+u,g=+(r>180),m=1;S_.setAttribute("d",`M ${50} ${95} L ${d} ${h} A ${c} ${c} ${r} ${g} ${m} ${f} ${h} L ${50} ${95}`),ts.setAttribute("transform",`translate(${o}, ${l}) scale(${s/(ce-Be)}) translate(${-Be}, ${-Be})`)}const Zr=Ne("dollyZoomInput",HTMLInputElement),T_=Ne("dollyZoomSpan",HTMLSpanElement);function _u(){pl(parseInt(Zr.value)),T_.innerText=Zr.value.padStart(3,g_)+"\xB0",E_(+Zr.value)}Zr.addEventListener("input",_u);_u();function vu(r){requestAnimationFrame(vu),Fs==null||Fs(),b_(r),Fa.all.forEach(t=>t.doAnimationFrame(r)),ds.render(Jn,bn)}requestAnimationFrame(vu);let Fs;const yu=new ResizeObserver(r=>{for(const t of r)if(t.contentBoxSize.length!=1)console.log("Ignoring unexpected resize info",t);else{const e=t.contentBoxSize[0],n=e.blockSize,i=e.inlineSize;let s=3;Fs=()=>{if(s<1){Fs=void 0,bn.aspect=1,bn.updateProjectionMatrix();const o=Math.min(i,n);ds.setSize(o,o),pl()}else s--}}});yu.observe(mu,{box:"content-box"});yu.observe(mu,{box:"device-pixel-content-box"});{const r=Je(0,0,5,21.7),t=Ne("speed",HTMLInputElement),e=Ne("turtle",HTMLSpanElement),n=Ne("rabbit",HTMLSpanElement),i=parseInt(t.min),s=parseInt(t.max),o=()=>{const a=parseInt(t.value);e.style.cursor=a>i?"w-resize":"",n.style.cursor=a<s?"e-resize":"";const l=r(a);Zi=A_(l)};o(),t.addEventListener("input",o),e.addEventListener("click",()=>{const a=parseInt(t.value);a>i&&(t.value=(a-1).toString(),o())}),n.addEventListener("click",()=>{const a=parseInt(t.value);a<s&&(t.value=(a+1).toString(),o())})}function A_(r=1){function t(){return Math.random()+Math.random()+Math.random()+Math.random()-2}const e={x:t(),y:t(),z:t()},n=Math.hypot(e.x,e.y,e.z),i=r/n;return e.x*=i,e.y*=i,e.z*=i,e}
