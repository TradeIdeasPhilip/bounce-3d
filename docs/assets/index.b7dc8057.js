var qh=Object.defineProperty;var Xh=(r,t,e)=>t in r?qh(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var $e=(r,t,e)=>(Xh(r,typeof t!="symbol"?t+"":t,e),e),jh=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var re=(r,t,e)=>(jh(r,t,"read from private field"),e?e.call(r):t.get(r)),ii=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)};const Zh=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}};Zh();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ra="139",Yh=0,ka=1,Jh=2,Ac=1,$h=2,lr=3,mr=0,Ge=1,Fi=2,Cc=1,Cn=0,Pi=1,za=2,Fa=3,Na=4,Kh=5,bi=100,Qh=101,tu=102,Ba=103,Oa=104,eu=200,nu=201,iu=202,ru=203,Lc=204,Rc=205,su=206,ou=207,au=208,lu=209,cu=210,hu=0,uu=1,du=2,Vo=3,fu=4,pu=5,mu=6,gu=7,Ds=0,xu=1,_u=2,fn=0,yu=1,vu=2,Mu=3,wu=4,bu=5,Pc=300,Ni=301,Bi=302,Go=303,Wo=304,Is=306,qo=1e3,He=1001,Xo=1002,ce=1003,Ua=1004,Ha=1005,Se=1006,Su=1007,ks=1008,Yn=1009,Eu=1010,Tu=1011,gr=1012,Au=1013,ps=1014,Wn=1015,Di=1016,Cu=1017,Lu=1018,Ii=1020,Ru=1021,Pu=1022,Ve=1023,Du=1024,Iu=1025,jn=1026,Oi=1027,ku=1028,zu=1029,Fu=1030,Nu=1031,Bu=1033,Js=33776,$s=33777,Ks=33778,Qs=33779,Va=35840,Ga=35841,Wa=35842,qa=35843,Ou=36196,Xa=37492,ja=37496,Za=37808,Ya=37809,Ja=37810,$a=37811,Ka=37812,Qa=37813,tl=37814,el=37815,nl=37816,il=37817,rl=37818,sl=37819,ol=37820,al=37821,ll=36492,Uu=2200,Hu=2201,Vu=2202,ys=2300,vs=2301,to=2302,Ei=2400,Ti=2401,Ms=2402,sa=2500,Dc=2501,Gu=0,mn=3e3,Yt=3001,Wu=3200,qu=3201,Gi=0,Xu=1,un="srgb",qn="srgb-linear",eo=7680,ju=519,xr=35044,ws=35048,cl="300 es",jo=1035;class Jn{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const ue=[];for(let r=0;r<256;r++)ue[r]=(r<16?"0":"")+r.toString(16);let hl=1234567;const hr=Math.PI/180,_r=180/Math.PI;function We(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ue[r&255]+ue[r>>8&255]+ue[r>>16&255]+ue[r>>24&255]+"-"+ue[t&255]+ue[t>>8&255]+"-"+ue[t>>16&15|64]+ue[t>>24&255]+"-"+ue[e&63|128]+ue[e>>8&255]+"-"+ue[e>>16&255]+ue[e>>24&255]+ue[n&255]+ue[n>>8&255]+ue[n>>16&255]+ue[n>>24&255]).toLowerCase()}function fe(r,t,e){return Math.max(t,Math.min(e,r))}function oa(r,t){return(r%t+t)%t}function Zu(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Yu(r,t,e){return r!==t?(e-r)/(t-r):0}function ur(r,t,e){return(1-e)*r+e*t}function Ju(r,t,e,n){return ur(r,t,1-Math.exp(-e*n))}function $u(r,t=1){return t-Math.abs(oa(r,t*2)-t)}function Ku(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Qu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function td(r,t){return r+Math.floor(Math.random()*(t-r+1))}function ed(r,t){return r+Math.random()*(t-r)}function nd(r){return r*(.5-Math.random())}function id(r){r!==void 0&&(hl=r);let t=hl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function rd(r){return r*hr}function sd(r){return r*_r}function Zo(r){return(r&r-1)===0&&r!==0}function od(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function bs(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function ad(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ld(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function cd(r,t){switch(t.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var no=Object.freeze({__proto__:null,DEG2RAD:hr,RAD2DEG:_r,generateUUID:We,clamp:fe,euclideanModulo:oa,mapLinear:Zu,inverseLerp:Yu,lerp:ur,damp:Ju,pingpong:$u,smoothstep:Ku,smootherstep:Qu,randInt:td,randFloat:ed,randFloatSpread:nd,seededRandom:id,degToRad:rd,radToDeg:sd,isPowerOfTwo:Zo,ceilPowerOfTwo:od,floorPowerOfTwo:bs,setQuaternionFromProperEuler:ad,normalize:cd,denormalize:ld});class Y{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this)}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this)}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}Y.prototype.isVector2=!0;class pe{constructor(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=i[0],p=i[3],x=i[6],y=i[1],E=i[4],S=i[7],v=i[2],L=i[5],P=i[8];return s[0]=o*g+a*y+l*v,s[3]=o*p+a*E+l*L,s[6]=o*x+a*S+l*P,s[1]=c*g+h*y+u*v,s[4]=c*p+h*E+u*L,s[7]=c*x+h*S+u*P,s[2]=d*g+f*y+m*v,s[5]=d*p+f*E+m*L,s[8]=d*x+f*S+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=e,n[4]*=e,n[7]*=e,this}rotate(t){const e=Math.cos(t),n=Math.sin(t),i=this.elements,s=i[0],o=i[3],a=i[6],l=i[1],c=i[4],h=i[7];return i[0]=e*s+n*l,i[3]=e*o+n*c,i[6]=e*a+n*h,i[1]=-n*s+e*l,i[4]=-n*o+e*c,i[7]=-n*a+e*h,this}translate(t,e){const n=this.elements;return n[0]+=t*n[2],n[3]+=t*n[5],n[6]+=t*n[8],n[1]+=e*n[2],n[4]+=e*n[5],n[7]+=e*n[8],this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}pe.prototype.isMatrix3=!0;function Ic(r){for(let t=r.length-1;t>=0;--t)if(r[t]>65535)return!0;return!1}function yr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ms(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const io={[un]:{[qn]:Zn},[qn]:{[un]:ms}},Ne={legacyMode:!0,get workingColorSpace(){return qn},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,t,e){if(this.legacyMode||t===e||!t||!e)return r;if(io[t]&&io[t][e]!==void 0){const n=io[t][e];return r.r=n(r.r),r.g=n(r.g),r.b=n(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)}},kc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},se={r:0,g:0,b:0},Be={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function ro(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}function Ir(r,t){return t.r=r.r,t.g=r.g,t.b=r.b,t}class pt{constructor(t,e,n){return e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=un){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qn){return this.r=t,this.g=e,this.b=n,Ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qn){if(t=oa(t,1),e=fe(e,0,1),n=fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ro(o,s,t+1/3),this.g=ro(o,s,t),this.b=ro(o,s,t-1/3)}return Ne.toWorkingColorSpace(this,i),this}setStyle(t,e=un){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ne.toWorkingColorSpace(this,e),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ne.toWorkingColorSpace(this,e),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseInt(s[2],10)/100,h=parseInt(s[3],10)/100;return n(s[4]),this.setHSL(l,c,h,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ne.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ne.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=un){const n=kc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=un){return Ne.fromWorkingColorSpace(Ir(this,se),t),fe(se.r*255,0,255)<<16^fe(se.g*255,0,255)<<8^fe(se.b*255,0,255)<<0}getHexString(t=un){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qn){Ne.fromWorkingColorSpace(Ir(this,se),e);const n=se.r,i=se.g,s=se.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qn){return Ne.fromWorkingColorSpace(Ir(this,se),e),t.r=se.r,t.g=se.g,t.b=se.b,t}getStyle(t=un){return Ne.fromWorkingColorSpace(Ir(this,se),t),t!==un?`color(${t} ${se.r} ${se.g} ${se.b})`:`rgb(${se.r*255|0},${se.g*255|0},${se.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(Be),Be.h+=t,Be.s+=e,Be.l+=n,this.setHSL(Be.h,Be.s,Be.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Be),t.getHSL(Dr);const n=ur(Be.h,Dr.h,e),i=ur(Be.s,Dr.s,e),s=ur(Be.l,Dr.l,e);return this.setHSL(n,i,s),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),t.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this}toJSON(){return this.getHex()}}pt.NAMES=kc;pt.prototype.isColor=!0;pt.prototype.r=1;pt.prototype.g=1;pt.prototype.b=1;let ri;class $n{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement=="undefined")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=yr("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement!="undefined"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&t instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&t instanceof ImageBitmap){const e=yr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Zn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class zc{constructor(t=null){this.uuid=We(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(so(i[o].image)):s.push(so(i[o]))}else s=so(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function so(r){return typeof HTMLImageElement!="undefined"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&r instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&r instanceof ImageBitmap?$n.getDataURL(r):r.data?{data:Array.prototype.slice.call(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}zc.prototype.isSource=!0;let hd=0;class he extends Jn{constructor(t=he.DEFAULT_IMAGE,e=he.DEFAULT_MAPPING,n=He,i=He,s=Se,o=ks,a=Ve,l=Yn,c=1,h=mn){super();Object.defineProperty(this,"id",{value:hd++}),this.uuid=We(),this.name="",this.source=new zc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Y(0,0),this.repeat=new Y(1,1),this.center=new Y(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qo:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case Xo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qo:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case Xo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}he.DEFAULT_IMAGE=null;he.DEFAULT_MAPPING=Pc;he.prototype.isTexture=!0;class qt{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],p=l[6],x=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(c+1)/2,S=(f+1)/2,v=(x+1)/2,L=(h+d)/4,P=(u+g)/4,N=(m+p)/4;return E>S&&E>v?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=L/n,s=P/n):S>v?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=L/i,s=N/i):v<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(v),n=P/s,i=N/s),this.set(n,i,s,e),this}let y=Math.sqrt((p-m)*(p-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(u-g)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}qt.prototype.isVector4=!0;class Re extends Jn{constructor(t,e,n={}){super();this.width=t,this.height=e,this.depth=1,this.scissor=new qt(0,0,t,e),this.scissorTest=!1,this.viewport=new qt(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new he(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Se,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0,this.texture.image=Object.assign({},t.texture.image),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}Re.prototype.isWebGLRenderTarget=!0;class zs extends he{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=ce,this.minFilter=ce,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}zs.prototype.isDataArrayTexture=!0;class ud extends Re{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new zs(null,t,e,n),this.texture.isRenderTargetTexture=!0}}ud.prototype.isWebGLArrayRenderTarget=!0;class aa extends he{constructor(t=null,e=1,n=1,i=1){super(null);this.image={data:t,width:e,height:n,depth:i},this.magFilter=ce,this.minFilter=ce,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}aa.prototype.isData3DTexture=!0;class dd extends Re{constructor(t,e,n){super(t,e);this.depth=n,this.texture=new aa(null,t,e,n),this.texture.isRenderTargetTexture=!0}}dd.prototype.isWebGL3DRenderTarget=!0;class fd extends Re{constructor(t,e,n,i={}){super(t,e,i);const s=this.texture;this.texture=[];for(let o=0;o<n;o++)this.texture[o]=s.clone(),this.texture[o].isRenderTargetTexture=!0}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.texture.length;i<s;i++)this.texture[i].image.width=t,this.texture[i].image.height=e,this.texture[i].image.depth=n;this.dispose()}return this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e),this}copy(t){this.dispose(),this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.set(0,0,this.width,this.height),this.scissor.set(0,0,this.width,this.height),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.depthTexture=t.depthTexture,this.texture.length=0;for(let e=0,n=t.texture.length;e<n;e++)this.texture[e]=t.texture[e].clone();return this}}fd.prototype.isWebGLMultipleRenderTargets=!0;class Te{constructor(t=0,e=0,n=0,i=1){this._x=t,this._y=e,this._z=n,this._w=i}static slerp(t,e,n,i){return console.warn("THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."),n.slerpQuaternions(t,e,i)}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let p=1-a;const x=l*d+c*f+h*m+u*g,y=x>=0?1:-1,E=1-x*x;if(E>Number.EPSILON){const v=Math.sqrt(E),L=Math.atan2(v,x*y);p=Math.sin(p*L)/v,a=Math.sin(a*L)/v}const S=a*y;if(l=l*p+d*S,c=c*p+f*S,h=h*p+m*S,u=u*p+g*S,p===1-a){const v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){if(!(t&&t.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t,e){return e!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(t,e)):this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(s),n*Math.cos(s),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Te.prototype.isQuaternion=!0;class T{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t,e){return e!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(t,e)):(this.x+=t.x,this.y+=t.y,this.z+=t.z,this)}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t,e){return e!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(t,e)):(this.x-=t.x,this.y-=t.y,this.z-=t.z,this)}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(t,e)):(this.x*=t.x,this.y*=t.y,this.z*=t.z,this)}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return t&&t.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=l*e+o*i-a*n,h=l*n+a*e-s*i,u=l*i+s*n-o*e,d=-s*e-o*n-a*i;return this.x=c*l+d*-s+h*-a-u*-o,this.y=h*l+d*-o+u*-s-c*-a,this.z=u*l+d*-a+c*-o-h*-s,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t,e){return e!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(t,e)):this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oo.copy(this).projectOnVector(t),this.sub(oo)}reflect(t){return this.sub(oo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e,n){return n!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}T.prototype.isVector3=!0;const oo=new T,ul=new Te;class Xe{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.length;l<c;l+=3){const h=t[l],u=t[l+1],d=t[l+2];h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,s=-1/0,o=-1/0,a=-1/0;for(let l=0,c=t.count;l<c;l++){const h=t.getX(l),u=t.getY(l),d=t.getZ(l);h<e&&(e=h),u<n&&(n=u),d<i&&(i=d),h>s&&(s=h),u>o&&(o=u),d>a&&(a=d)}return this.min.set(e,n,i),this.max.set(s,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Nn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)Nn.fromBufferAttribute(s,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Nn)}else n.boundingBox===null&&n.computeBoundingBox(),ao.copy(n.boundingBox),ao.applyMatrix4(t.matrixWorld),this.union(ao);const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Nn),Nn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ki),kr.subVectors(this.max,Ki),si.subVectors(t.a,Ki),oi.subVectors(t.b,Ki),ai.subVectors(t.c,Ki),yn.subVectors(oi,si),vn.subVectors(ai,oi),Bn.subVectors(si,ai);let e=[0,-yn.z,yn.y,0,-vn.z,vn.y,0,-Bn.z,Bn.y,yn.z,0,-yn.x,vn.z,0,-vn.x,Bn.z,0,-Bn.x,-yn.y,yn.x,0,-vn.y,vn.x,0,-Bn.y,Bn.x,0];return!lo(e,si,oi,ai,kr)||(e=[1,0,0,0,1,0,0,0,1],!lo(e,si,oi,ai,kr))?!1:(zr.crossVectors(yn,vn),e=[zr.x,zr.y,zr.z],lo(e,si,oi,ai,kr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Nn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Nn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}Xe.prototype.isBox3=!0;const sn=[new T,new T,new T,new T,new T,new T,new T,new T],Nn=new T,ao=new Xe,si=new T,oi=new T,ai=new T,yn=new T,vn=new T,Bn=new T,Ki=new T,kr=new T,zr=new T,On=new T;function lo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){On.fromArray(r,s);const a=i.x*Math.abs(On.x)+i.y*Math.abs(On.y)+i.z*Math.abs(On.z),l=t.dot(On),c=e.dot(On),h=n.dot(On);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const pd=new Xe,dl=new T,Fr=new T,co=new T;class Wi{constructor(t=new T,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):pd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){co.subVectors(t,this.center);const e=co.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.add(co.multiplyScalar(i/n)),this.radius+=i}return this}union(t){return this.center.equals(t.center)===!0?Fr.set(0,0,1).multiplyScalar(t.radius):Fr.subVectors(t.center,this.center).normalize().multiplyScalar(t.radius),this.expandByPoint(dl.copy(t.center).add(Fr)),this.expandByPoint(dl.copy(t.center).sub(Fr)),this}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new T,ho=new T,Nr=new T,Mn=new T,uo=new T,Br=new T,fo=new T;class qi{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,on)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=on.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(on.copy(this.direction).multiplyScalar(e).add(this.origin),on.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ho.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),Mn.copy(this.origin).sub(ho);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=Mn.dot(this.direction),l=-Mn.dot(Nr),c=Mn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.direction).multiplyScalar(u).add(this.origin),i&&i.copy(Nr).multiplyScalar(d).add(ho),f}intersectSphere(t,e){on.subVectors(t.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return a<0&&l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||n!==n)&&(n=s),(o<i||i!==i)&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,on)!==null}intersectTriangle(t,e,n,i,s){uo.subVectors(e,t),Br.subVectors(n,t),fo.crossVectors(uo,Br);let o=this.direction.dot(fo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Mn.subVectors(this.origin,t);const l=a*this.direction.dot(Br.crossVectors(Mn,Br));if(l<0)return null;const c=a*this.direction.dot(uo.cross(Mn));if(c<0||l+c>o)return null;const h=-a*Mn.dot(fo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,g,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=l,x[2]=c,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=m,x[11]=g,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/li.setFromMatrixColumn(t,0).length(),s=1/li.setFromMatrixColumn(t,1).length(),o=1/li.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){t&&t.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;e[0]=d+g*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,g=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-g*u}else if(t.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(md,t,gd)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),wn.crossVectors(n,Ae),wn.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),wn.crossVectors(n,Ae)),wn.normalize(),Or.crossVectors(Ae,wn),i[0]=wn.x,i[4]=Or.x,i[8]=Ae.x,i[1]=wn.y,i[5]=Or.y,i[9]=Ae.y,i[2]=wn.z,i[6]=Or.z,i[10]=Ae.z,this}multiply(t,e){return e!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(t,e)):this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],p=n[10],x=n[14],y=n[3],E=n[7],S=n[11],v=n[15],L=i[0],P=i[4],N=i[8],et=i[12],z=i[1],_=i[5],C=i[9],q=i[13],R=i[2],B=i[6],F=i[10],O=i[14],D=i[3],X=i[7],J=i[11],K=i[15];return s[0]=o*L+a*z+l*R+c*D,s[4]=o*P+a*_+l*B+c*X,s[8]=o*N+a*C+l*F+c*J,s[12]=o*et+a*q+l*O+c*K,s[1]=h*L+u*z+d*R+f*D,s[5]=h*P+u*_+d*B+f*X,s[9]=h*N+u*C+d*F+f*J,s[13]=h*et+u*q+d*O+f*K,s[2]=m*L+g*z+p*R+x*D,s[6]=m*P+g*_+p*B+x*X,s[10]=m*N+g*C+p*F+x*J,s[14]=m*et+g*q+p*O+x*K,s[3]=y*L+E*z+S*R+v*D,s[7]=y*P+E*_+S*B+v*X,s[11]=y*N+E*C+S*F+v*J,s[15]=y*et+E*q+S*O+v*K,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],g=t[7],p=t[11],x=t[15];return m*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+g*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+p*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+x*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],g=t[13],p=t[14],x=t[15],y=u*p*c-g*d*c+g*l*f-a*p*f-u*l*x+a*d*x,E=m*d*c-h*p*c-m*l*f+o*p*f+h*l*x-o*d*x,S=h*g*c-m*u*c+m*a*f-o*g*f-h*a*x+o*u*x,v=m*u*l-h*g*l-m*a*d+o*g*d+h*a*p-o*u*p,L=e*y+n*E+i*S+s*v;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=y*P,t[1]=(g*d*s-u*p*s-g*i*f+n*p*f+u*i*x-n*d*x)*P,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*x+n*l*x)*P,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*P,t[4]=E*P,t[5]=(h*p*s-m*d*s+m*i*f-e*p*f-h*i*x+e*d*x)*P,t[6]=(m*l*s-o*p*s-m*i*c+e*p*c+o*i*x-e*l*x)*P,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*P,t[8]=S*P,t[9]=(m*u*s-h*g*s-m*n*f+e*g*f+h*n*x-e*u*x)*P,t[10]=(o*g*s-m*a*s+m*n*c-e*g*c-o*n*x+e*a*x)*P,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*P,t[12]=v*P,t[13]=(h*g*i-m*u*i+m*n*d-e*g*d-h*n*p+e*u*p)*P,t[14]=(m*a*i-o*g*i-m*n*l+e*g*l+o*n*p-e*a*p)*P,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*P,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,g=o*h,p=o*u,x=a*u,y=l*c,E=l*h,S=l*u,v=n.x,L=n.y,P=n.z;return i[0]=(1-(g+x))*v,i[1]=(f+S)*v,i[2]=(m-E)*v,i[3]=0,i[4]=(f-S)*L,i[5]=(1-(d+x))*L,i[6]=(p+y)*L,i[7]=0,i[8]=(m+E)*P,i[9]=(p-y)*P,i[10]=(1-(d+g))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=li.set(i[0],i[1],i[2]).length();const o=li.set(i[4],i[5],i[6]).length(),a=li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],Oe.copy(this);const c=1/s,h=1/o,u=1/a;return Oe.elements[0]*=c,Oe.elements[1]*=c,Oe.elements[2]*=c,Oe.elements[4]*=h,Oe.elements[5]*=h,Oe.elements[6]*=h,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o){o===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const a=this.elements,l=2*s/(e-t),c=2*s/(n-i),h=(e+t)/(e-t),u=(n+i)/(n-i),d=-(o+s)/(o-s),f=-2*o*s/(o-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,s,o){const a=this.elements,l=1/(e-t),c=1/(n-i),h=1/(o-s),u=(e+t)*l,d=(n+i)*c,f=(o+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}xt.prototype.isMatrix4=!0;const li=new T,Oe=new xt,md=new T(0,0,0),gd=new T(1,1,1),wn=new T,Or=new T,Ae=new T,fl=new xt,pl=new Te;class Kn{constructor(t=0,e=0,n=0,i=Kn.DefaultOrder){this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(fe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return pl.setFromEuler(this),this.setFromQuaternion(pl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}}Kn.prototype.isEuler=!0;Kn.DefaultOrder="XYZ";Kn.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class Fc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let xd=0;const ml=new T,ci=new Te,an=new xt,Ur=new T,Qi=new T,_d=new T,yd=new Te,gl=new T(1,0,0),xl=new T(0,1,0),_l=new T(0,0,1),vd={type:"added"},yl={type:"removed"};class Gt extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:xd++}),this.uuid=We(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DefaultUp.clone();const t=new T,e=new Kn,n=new Te,i=new T(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new xt},normalMatrix:{value:new pe}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Gt.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new Fc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.multiply(ci),this}rotateOnWorldAxis(t,e){return ci.setFromAxisAngle(t,e),this.quaternion.premultiply(ci),this}rotateX(t){return this.rotateOnAxis(gl,t)}rotateY(t){return this.rotateOnAxis(xl,t)}rotateZ(t){return this.rotateOnAxis(_l,t)}translateOnAxis(t,e){return ml.copy(t).applyQuaternion(this.quaternion),this.position.add(ml.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gl,t)}translateY(t){return this.translateOnAxis(xl,t)}translateZ(t){return this.translateOnAxis(_l,t)}localToWorld(t){return t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return t.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Qi,Ur,this.up):an.lookAt(Ur,Qi,this.up),this.quaternion.setFromRotationMatrix(an),i&&(an.extractRotation(i.matrixWorld),ci.setFromRotationMatrix(an),this.quaternion.premultiply(ci.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(yl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),an.multiply(t.parent.matrixWorld)),t.applyMatrix4(an),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qi,yd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}Gt.DefaultUp=new T(0,1,0);Gt.DefaultMatrixAutoUpdate=!0;Gt.prototype.isObject3D=!0;const Ue=new T,ln=new T,po=new T,cn=new T,hi=new T,ui=new T,vl=new T,mo=new T,go=new T,xo=new T;class ie{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ue.subVectors(t,e),i.cross(Ue);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ue.subVectors(i,e),ln.subVectors(n,e),po.subVectors(t,e);const o=Ue.dot(Ue),a=Ue.dot(ln),l=Ue.dot(po),c=ln.dot(ln),h=ln.dot(po),u=o*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,cn),cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getUV(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,cn),l.set(0,0),l.addScaledVector(s,cn.x),l.addScaledVector(o,cn.y),l.addScaledVector(a,cn.z),l}static isFrontFacing(t,e,n,i){return Ue.subVectors(n,e),ln.subVectors(t,e),Ue.cross(ln).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ue.subVectors(this.c,this.b),ln.subVectors(this.a,this.b),Ue.cross(ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ie.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ie.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,s){return ie.getUV(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ie.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ie.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;hi.subVectors(i,n),ui.subVectors(s,n),mo.subVectors(t,n);const l=hi.dot(mo),c=ui.dot(mo);if(l<=0&&c<=0)return e.copy(n);go.subVectors(t,i);const h=hi.dot(go),u=ui.dot(go);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(hi,o);xo.subVectors(t,s);const f=hi.dot(xo),m=ui.dot(xo);if(m>=0&&f<=m)return e.copy(s);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(ui,a);const p=h*m-f*u;if(p<=0&&u-h>=0&&f-m>=0)return vl.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(vl,a);const x=1/(p+g+d);return o=g*x,a=d*x,e.copy(n).addScaledVector(hi,o).addScaledVector(ui,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let Md=0;class ae extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:Md++}),this.uuid=We(),this.name="",this.type="Material",this.fog=!0,this.blending=Pi,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Lc,this.blendDst=Rc,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}if(e==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=n===Cc;continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pi&&(n.blending=this.blending),this.side!==mr&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.fog=t.fog,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}ae.prototype.isMaterial=!0;ae.fromType=function(){return null};class Er extends ae{constructor(t){super();this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}Er.prototype.isMeshBasicMaterial=!0;const ne=new T,Hr=new Y;class oe{constructor(t,e,n){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n===!0,this.usage=xr,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}copyColorsArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",i),o=new pt),e[n++]=o.r,e[n++]=o.g,e[n++]=o.b}return this}copyVector2sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",i),o=new Y),e[n++]=o.x,e[n++]=o.y}return this}copyVector3sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",i),o=new T),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z}return this}copyVector4sArray(t){const e=this.array;let n=0;for(let i=0,s=t.length;i<s;i++){let o=t[i];o===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",i),o=new qt),e[n++]=o.x,e[n++]=o.y,e[n++]=o.z,e[n++]=o.w}return this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix3(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyMatrix4(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.applyNormalMatrix(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ne.fromBufferAttribute(this,e),ne.transformDirection(t),this.setXYZ(e,ne.x,ne.y,ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){return this.array[t*this.itemSize]}setX(t,e){return this.array[t*this.itemSize]=e,this}getY(t){return this.array[t*this.itemSize+1]}setY(t,e){return this.array[t*this.itemSize+1]=e,this}getZ(t){return this.array[t*this.itemSize+2]}setZ(t,e){return this.array[t*this.itemSize+2]=e,this}getW(t){return this.array[t*this.itemSize+3]}setW(t,e){return this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xr&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}oe.prototype.isBufferAttribute=!0;class Nc extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Bc extends oe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class wd extends oe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}wd.prototype.isFloat16BufferAttribute=!0;class te extends oe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let bd=0;const Pe=new xt,_o=new Gt,di=new T,Ce=new Xe,tr=new Xe,le=new T;class Zt extends Jn{constructor(){super();Object.defineProperty(this,"id",{value:bd++}),this.uuid=We(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ic(t)?Bc:Nc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new pe().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Pe.makeRotationFromQuaternion(t),this.applyMatrix4(Pe),this}rotateX(t){return Pe.makeRotationX(t),this.applyMatrix4(Pe),this}rotateY(t){return Pe.makeRotationY(t),this.applyMatrix4(Pe),this}rotateZ(t){return Pe.makeRotationZ(t),this.applyMatrix4(Pe),this}translate(t,e,n){return Pe.makeTranslation(t,e,n),this.applyMatrix4(Pe),this}scale(t,e,n){return Pe.makeScale(t,e,n),this.applyMatrix4(Pe),this}lookAt(t){return _o.lookAt(t),_o.updateMatrix(),this.applyMatrix4(_o.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new te(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Ce.setFromBufferAttribute(s),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];tr.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(Ce.min,tr.min),Ce.expandByPoint(le),le.addVectors(Ce.max,tr.max),Ce.expandByPoint(le)):(Ce.expandByPoint(tr.min),Ce.expandByPoint(tr.max))}Ce.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)le.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(le));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)le.fromBufferAttribute(a,c),l&&(di.fromBufferAttribute(t,c),le.add(di)),i=Math.max(i,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,s=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oe(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let z=0;z<a;z++)c[z]=new T,h[z]=new T;const u=new T,d=new T,f=new T,m=new Y,g=new Y,p=new Y,x=new T,y=new T;function E(z,_,C){u.fromArray(i,z*3),d.fromArray(i,_*3),f.fromArray(i,C*3),m.fromArray(o,z*2),g.fromArray(o,_*2),p.fromArray(o,C*2),d.sub(u),f.sub(u),g.sub(m),p.sub(m);const q=1/(g.x*p.y-p.x*g.y);!isFinite(q)||(x.copy(d).multiplyScalar(p.y).addScaledVector(f,-g.y).multiplyScalar(q),y.copy(f).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(q),c[z].add(x),c[_].add(x),c[C].add(x),h[z].add(y),h[_].add(y),h[C].add(y))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let z=0,_=S.length;z<_;++z){const C=S[z],q=C.start,R=C.count;for(let B=q,F=q+R;B<F;B+=3)E(n[B+0],n[B+1],n[B+2])}const v=new T,L=new T,P=new T,N=new T;function et(z){P.fromArray(s,z*3),N.copy(P);const _=c[z];v.copy(_),v.sub(P.multiplyScalar(P.dot(_))).normalize(),L.crossVectors(N,_);const q=L.dot(h[z])<0?-1:1;l[z*4]=v.x,l[z*4+1]=v.y,l[z*4+2]=v.z,l[z*4+3]=q}for(let z=0,_=S.length;z<_;++z){const C=S[z],q=C.start,R=C.count;for(let B=q,F=q+R;B<F;B+=3)et(n[B+0]),et(n[B+1]),et(n[B+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new T,s=new T,o=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),g=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(t,e){if(!(t&&t.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",t);return}e===void 0&&(e=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const n=this.attributes;for(const i in n){if(t.attributes[i]===void 0)continue;const o=n[i].array,a=t.attributes[i],l=a.array,c=a.itemSize*e,h=Math.min(l.length,o.length-c);for(let u=0,d=c;u<h;u++,d++)o[d]=l[u]}return this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let x=0;x<h;x++)d[m++]=c[f++]}return new oe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Zt,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.prototype.isBufferGeometry=!0;const Ml=new xt,fi=new qi,yo=new Wi,bn=new T,Sn=new T,En=new T,vo=new T,Mo=new T,wo=new T,Vr=new T,Gr=new T,Wr=new T,qr=new Y,Xr=new Y,jr=new Y,bo=new T,Zr=new T;class me extends Gt{constructor(t=new Zt,e=new Er){super();this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(s),t.ray.intersectsSphere(yo)===!1)||(Ml.copy(s).invert(),fi.copy(t.ray).applyMatrix4(Ml),n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1))return;let o;if(n.isBufferGeometry){const a=n.index,l=n.attributes.position,c=n.morphAttributes.position,h=n.morphTargetsRelative,u=n.attributes.uv,d=n.attributes.uv2,f=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(i))for(let g=0,p=f.length;g<p;g++){const x=f[g],y=i[x.materialIndex],E=Math.max(x.start,m.start),S=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let v=E,L=S;v<L;v+=3){const P=a.getX(v),N=a.getX(v+1),et=a.getX(v+2);o=Yr(this,y,t,fi,l,c,h,u,d,P,N,et),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const g=Math.max(0,m.start),p=Math.min(a.count,m.start+m.count);for(let x=g,y=p;x<y;x+=3){const E=a.getX(x),S=a.getX(x+1),v=a.getX(x+2);o=Yr(this,i,t,fi,l,c,h,u,d,E,S,v),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}else if(l!==void 0)if(Array.isArray(i))for(let g=0,p=f.length;g<p;g++){const x=f[g],y=i[x.materialIndex],E=Math.max(x.start,m.start),S=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let v=E,L=S;v<L;v+=3){const P=v,N=v+1,et=v+2;o=Yr(this,y,t,fi,l,c,h,u,d,P,N,et),o&&(o.faceIndex=Math.floor(v/3),o.face.materialIndex=x.materialIndex,e.push(o))}}else{const g=Math.max(0,m.start),p=Math.min(l.count,m.start+m.count);for(let x=g,y=p;x<y;x+=3){const E=x,S=x+1,v=x+2;o=Yr(this,i,t,fi,l,c,h,u,d,E,S,v),o&&(o.faceIndex=Math.floor(x/3),e.push(o))}}}else n.isGeometry&&console.error("THREE.Mesh.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}}me.prototype.isMesh=!0;function Sd(r,t,e,n,i,s,o,a){let l;if(t.side===Ge?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side!==Fi,a),l===null)return null;Zr.copy(a),Zr.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Zr);return c<e.near||c>e.far?null:{distance:c,point:Zr.clone(),object:r}}function Yr(r,t,e,n,i,s,o,a,l,c,h,u){bn.fromBufferAttribute(i,c),Sn.fromBufferAttribute(i,h),En.fromBufferAttribute(i,u);const d=r.morphTargetInfluences;if(s&&d){Vr.set(0,0,0),Gr.set(0,0,0),Wr.set(0,0,0);for(let m=0,g=s.length;m<g;m++){const p=d[m],x=s[m];p!==0&&(vo.fromBufferAttribute(x,c),Mo.fromBufferAttribute(x,h),wo.fromBufferAttribute(x,u),o?(Vr.addScaledVector(vo,p),Gr.addScaledVector(Mo,p),Wr.addScaledVector(wo,p)):(Vr.addScaledVector(vo.sub(bn),p),Gr.addScaledVector(Mo.sub(Sn),p),Wr.addScaledVector(wo.sub(En),p)))}bn.add(Vr),Sn.add(Gr),En.add(Wr)}r.isSkinnedMesh&&(r.boneTransform(c,bn),r.boneTransform(h,Sn),r.boneTransform(u,En));const f=Sd(r,t,e,n,bn,Sn,En,bo);if(f){a&&(qr.fromBufferAttribute(a,c),Xr.fromBufferAttribute(a,h),jr.fromBufferAttribute(a,u),f.uv=ie.getUV(bo,bn,Sn,En,qr,Xr,jr,new Y)),l&&(qr.fromBufferAttribute(l,c),Xr.fromBufferAttribute(l,h),jr.fromBufferAttribute(l,u),f.uv2=ie.getUV(bo,bn,Sn,En,qr,Xr,jr,new Y));const m={a:c,b:h,c:u,normal:new T,materialIndex:0};ie.getNormal(bn,Sn,En,m.normal),f.face=m}return f}class Tr extends Zt{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super();this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(g,p,x,y,E,S,v,L,P,N,et){const z=S/P,_=v/N,C=S/2,q=v/2,R=L/2,B=P+1,F=N+1;let O=0,D=0;const X=new T;for(let J=0;J<F;J++){const K=J*_-q;for(let Q=0;Q<B;Q++){const ct=Q*z-C;X[g]=ct*y,X[p]=K*E,X[x]=R,c.push(X.x,X.y,X.z),X[g]=0,X[p]=0,X[x]=L>0?1:-1,h.push(X.x,X.y,X.z),u.push(Q/P),u.push(1-J/N),O+=1}}for(let J=0;J<N;J++)for(let K=0;K<P;K++){const Q=d+K+B*J,ct=d+K+B*(J+1),zt=d+(K+1)+B*(J+1),bt=d+(K+1)+B*J;l.push(Q,ct,bt),l.push(ct,zt,bt),D+=6}a.addGroup(f,D,et),f+=D,d+=O}}static fromJSON(t){return new Tr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function xe(r){const t={};for(let e=0;e<r.length;e++){const n=Ui(r[e]);for(const i in n)t[i]=n[i]}return t}const Ed={clone:Ui,merge:xe};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ad=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends ae{constructor(t){super();this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=Td,this.fragmentShader=Ad,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&(t.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(t))}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}qe.prototype.isShaderMaterial=!0;class la extends Gt{constructor(){super();this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}la.prototype.isCamera=!0;class ve extends la{constructor(t=50,e=1,n=.1,i=2e3){super();this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(hr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}ve.prototype.isPerspectiveCamera=!0;const pi=90,mi=1;class ca extends Gt{constructor(t,e,n){super();if(this.type="CubeCamera",n.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=n;const i=new ve(pi,mi,t,e);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new T(1,0,0)),this.add(i);const s=new ve(pi,mi,t,e);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new T(-1,0,0)),this.add(s);const o=new ve(pi,mi,t,e);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new T(0,1,0)),this.add(o);const a=new ve(pi,mi,t,e);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new T(0,-1,0)),this.add(a);const l=new ve(pi,mi,t,e);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new T(0,0,1)),this.add(l);const c=new ve(pi,mi,t,e);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new T(0,0,-1)),this.add(c)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,a,l,c]=this.children,h=t.getRenderTarget(),u=t.outputEncoding,d=t.toneMapping,f=t.xr.enabled;t.outputEncoding=mn,t.toneMapping=fn,t.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,s),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,l),n.texture.generateMipmaps=m,t.setRenderTarget(n,5),t.render(e,c),t.setRenderTarget(h),t.outputEncoding=u,t.toneMapping=d,t.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Fs extends he{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ni;super(t,e,n,i,s,o,a,l,c,h);this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}Fs.prototype.isCubeTexture=!0;class Oc extends Re{constructor(t,e={}){super(t,t,e);const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Fs(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Se}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tr(5,5,5),s=new qe({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:Cn});s.uniforms.tEquirect.value=e;const o=new me(i,s),a=e.minFilter;return e.minFilter===ks&&(e.minFilter=Se),new ca(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}Oc.prototype.isWebGLCubeRenderTarget=!0;const So=new T,Cd=new T,Ld=new pe;class dn{constructor(t=new T(1,0,0),e=0){this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=So.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(So),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(n).multiplyScalar(s).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Ld.getNormalMatrix(t),i=this.coplanarPoint(So).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}dn.prototype.isPlane=!0;const gi=new Wi,Jr=new T;class Ns{constructor(t=new dn,e=new dn,n=new dn,i=new dn,s=new dn,o=new dn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7],d=n[8],f=n[9],m=n[10],g=n[11],p=n[12],x=n[13],y=n[14],E=n[15];return e[0].setComponents(a-i,u-l,g-d,E-p).normalize(),e[1].setComponents(a+i,u+l,g+d,E+p).normalize(),e[2].setComponents(a+s,u+c,g+f,E+x).normalize(),e[3].setComponents(a-s,u-c,g-f,E-x).normalize(),e[4].setComponents(a-o,u-h,g-m,E-y).normalize(),e[5].setComponents(a+o,u+h,g+m,E+y).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Jr.x=i.normal.x>0?t.max.x:t.min.x,Jr.y=i.normal.y>0?t.max.y:t.min.y,Jr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Jr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Uc(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Rd(r,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,d=c.usage,f=r.createBuffer();r.bindBuffer(h,f),r.bufferData(h,u,d),c.onUploadCallback();let m;if(u instanceof Float32Array)m=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(u instanceof Int16Array)m=5122;else if(u instanceof Uint32Array)m=5125;else if(u instanceof Int32Array)m=5124;else if(u instanceof Int8Array)m=5120;else if(u instanceof Uint8Array)m=5121;else if(u instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;r.bindBuffer(u,c),f.count===-1?r.bufferSubData(u,0,d):(e?r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):r.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1)}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(r.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=n.get(c);(!d||d.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u===void 0?n.set(c,i(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:o,remove:a,update:l}}class Bs extends Zt{constructor(t=1,e=1,n=1,i=1){super();this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],g=[],p=[];for(let x=0;x<h;x++){const y=x*d-o;for(let E=0;E<c;E++){const S=E*u-s;m.push(S,-y,0),g.push(0,0,1),p.push(E/a),p.push(1-x/l)}}for(let x=0;x<l;x++)for(let y=0;y<a;y++){const E=y+c*x,S=y+c*(x+1),v=y+1+c*(x+1),L=y+1+c*x;f.push(E,S,L),f.push(S,v,L)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(p,2))}static fromJSON(t){return new Bs(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Id=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nd="vec3 transformed = vec3( position );",Bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Od=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,Ud=`#ifdef USE_BUMPMAP
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
#endif`,Hd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Vd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Zd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Yd=`#define PI 3.141592653589793
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
}`,Jd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$d=`vec3 transformedNormal = objectNormal;
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
#endif`,Kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,tf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ef=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nf="gl_FragColor = linearToOutputTexel( gl_FragColor );",rf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sf=`#ifdef USE_ENVMAP
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
#endif`,of=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,af=`#ifdef USE_ENVMAP
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
#endif`,lf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cf=`#ifdef USE_ENVMAP
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
#endif`,hf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ff=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pf=`#ifdef USE_GRADIENTMAP
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
}`,mf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,gf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xf=`vec3 diffuse = vec3( 1.0 );
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
#endif`,_f=`uniform bool receiveShadow;
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
#endif`,yf=`#if defined( USE_ENVMAP )
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
#endif`,vf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
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
#define Material_LightProbeLOD( material )	(0)`,Sf=`PhysicalMaterial material;
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
#endif`,Ef=`struct PhysicalMaterial {
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
}`,Tf=`
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
#endif`,Af=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Lf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Rf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Df=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,If=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Of=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uf=`#ifdef USE_MORPHNORMALS
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
#endif`,Hf=`#ifdef USE_MORPHTARGETS
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
#endif`,Vf=`#ifdef USE_MORPHTARGETS
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
#endif`,Gf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,Wf=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zf=`#ifdef USE_NORMALMAP
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
#endif`,Yf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Jf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Kf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ip=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,op=`#ifdef USE_SHADOWMAP
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
#endif`,ap=`#ifdef USE_SHADOWMAP
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
#endif`,lp=`#ifdef USE_SHADOWMAP
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
#endif`,cp=`float getShadowMask() {
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
}`,hp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
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
#endif`,dp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
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
#endif`,pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
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
#endif`,yp=`#ifdef USE_TRANSMISSION
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
#endif`,vp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Mp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,Sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Ep=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Tp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ap=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`#include <envmap_common_pars_fragment>
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
}`,Pp=`#include <common>
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
}`,Dp=`#if DEPTH_PACKING == 3200
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
}`,Ip=`#define DISTANCE
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
}`,kp=`#define DISTANCE
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Np=`uniform float scale;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Op=`#include <common>
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
}`,Up=`uniform vec3 diffuse;
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
}`,Hp=`#define LAMBERT
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
}`,Vp=`uniform vec3 diffuse;
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
}`,Gp=`#define MATCAP
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
}`,Wp=`#define MATCAP
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
}`,qp=`#define NORMAL
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
}`,Xp=`#define NORMAL
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
}`,jp=`#define PHONG
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
}`,Zp=`#define PHONG
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
}`,Yp=`#define STANDARD
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
}`,Jp=`#define STANDARD
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
}`,$p=`#define TOON
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
}`,Kp=`#define TOON
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
}`,Qp=`uniform float size;
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
}`,tm=`uniform vec3 diffuse;
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
}`,em=`#include <common>
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
}`,nm=`uniform vec3 color;
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
}`,im=`uniform float rotation;
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
}`,rm=`uniform vec3 diffuse;
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
}`,kt={alphamap_fragment:Pd,alphamap_pars_fragment:Dd,alphatest_fragment:Id,alphatest_pars_fragment:kd,aomap_fragment:zd,aomap_pars_fragment:Fd,begin_vertex:Nd,beginnormal_vertex:Bd,bsdfs:Od,bumpmap_pars_fragment:Ud,clipping_planes_fragment:Hd,clipping_planes_pars_fragment:Vd,clipping_planes_pars_vertex:Gd,clipping_planes_vertex:Wd,color_fragment:qd,color_pars_fragment:Xd,color_pars_vertex:jd,color_vertex:Zd,common:Yd,cube_uv_reflection_fragment:Jd,defaultnormal_vertex:$d,displacementmap_pars_vertex:Kd,displacementmap_vertex:Qd,emissivemap_fragment:tf,emissivemap_pars_fragment:ef,encodings_fragment:nf,encodings_pars_fragment:rf,envmap_fragment:sf,envmap_common_pars_fragment:of,envmap_pars_fragment:af,envmap_pars_vertex:lf,envmap_physical_pars_fragment:yf,envmap_vertex:cf,fog_vertex:hf,fog_pars_vertex:uf,fog_fragment:df,fog_pars_fragment:ff,gradientmap_pars_fragment:pf,lightmap_fragment:mf,lightmap_pars_fragment:gf,lights_lambert_vertex:xf,lights_pars_begin:_f,lights_toon_fragment:vf,lights_toon_pars_fragment:Mf,lights_phong_fragment:wf,lights_phong_pars_fragment:bf,lights_physical_fragment:Sf,lights_physical_pars_fragment:Ef,lights_fragment_begin:Tf,lights_fragment_maps:Af,lights_fragment_end:Cf,logdepthbuf_fragment:Lf,logdepthbuf_pars_fragment:Rf,logdepthbuf_pars_vertex:Pf,logdepthbuf_vertex:Df,map_fragment:If,map_pars_fragment:kf,map_particle_fragment:zf,map_particle_pars_fragment:Ff,metalnessmap_fragment:Nf,metalnessmap_pars_fragment:Bf,morphcolor_vertex:Of,morphnormal_vertex:Uf,morphtarget_pars_vertex:Hf,morphtarget_vertex:Vf,normal_fragment_begin:Gf,normal_fragment_maps:Wf,normal_pars_fragment:qf,normal_pars_vertex:Xf,normal_vertex:jf,normalmap_pars_fragment:Zf,clearcoat_normal_fragment_begin:Yf,clearcoat_normal_fragment_maps:Jf,clearcoat_pars_fragment:$f,output_fragment:Kf,packing:Qf,premultiplied_alpha_fragment:tp,project_vertex:ep,dithering_fragment:np,dithering_pars_fragment:ip,roughnessmap_fragment:rp,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:op,shadowmap_pars_vertex:ap,shadowmap_vertex:lp,shadowmask_pars_fragment:cp,skinbase_vertex:hp,skinning_pars_vertex:up,skinning_vertex:dp,skinnormal_vertex:fp,specularmap_fragment:pp,specularmap_pars_fragment:mp,tonemapping_fragment:gp,tonemapping_pars_fragment:xp,transmission_fragment:_p,transmission_pars_fragment:yp,uv_pars_fragment:vp,uv_pars_vertex:Mp,uv_vertex:wp,uv2_pars_fragment:bp,uv2_pars_vertex:Sp,uv2_vertex:Ep,worldpos_vertex:Tp,background_vert:Ap,background_frag:Cp,cube_vert:Lp,cube_frag:Rp,depth_vert:Pp,depth_frag:Dp,distanceRGBA_vert:Ip,distanceRGBA_frag:kp,equirect_vert:zp,equirect_frag:Fp,linedashed_vert:Np,linedashed_frag:Bp,meshbasic_vert:Op,meshbasic_frag:Up,meshlambert_vert:Hp,meshlambert_frag:Vp,meshmatcap_vert:Gp,meshmatcap_frag:Wp,meshnormal_vert:qp,meshnormal_frag:Xp,meshphong_vert:jp,meshphong_frag:Zp,meshphysical_vert:Yp,meshphysical_frag:Jp,meshtoon_vert:$p,meshtoon_frag:Kp,points_vert:Qp,points_frag:tm,shadow_vert:em,shadow_frag:nm,sprite_vert:im,sprite_frag:rm},st={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new pe},uv2Transform:{value:new pe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Y(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Y(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new pe}}},en={basic:{uniforms:xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.fog,st.lights,{emissive:{value:new pt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:xe([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:xe([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:xe([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new pt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:xe([st.points,st.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:xe([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:xe([st.common,st.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:xe([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:xe([st.sprite,st.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},cube:{uniforms:xe([st.envmap,{opacity:{value:1}}]),vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:xe([st.common,st.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:xe([st.lights,st.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};en.physical={uniforms:xe([en.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Y(1,1)},clearcoatNormalMap:{value:null},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Y},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};function sm(r,t,e,n,i,s){const o=new pt(0);let a=i===!0?0:1,l,c,h=null,u=0,d=null;function f(g,p){let x=!1,y=p.isScene===!0?p.background:null;y&&y.isTexture&&(y=t.get(y));const E=r.xr,S=E.getSession&&E.getSession();S&&S.environmentBlendMode==="additive"&&(y=null),y===null?m(o,a):y&&y.isColor&&(m(y,1),x=!0),(r.autoClear||x)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),y&&(y.isCubeTexture||y.mapping===Is)?(c===void 0&&(c=new me(new Tr(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:Ui(en.cube.uniforms),vertexShader:en.cube.vertexShader,fragmentShader:en.cube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(v,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,(h!==y||u!==y.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new me(new Bs(2,2),new qe({name:"BackgroundMaterial",uniforms:Ui(en.background.uniforms),vertexShader:en.background.vertexShader,fragmentShader:en.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||u!==y.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,h=y,u=y.version,d=r.toneMapping),g.unshift(l,l.geometry,l.material,0,0,null))}function m(g,p){e.buffers.color.setClear(g.r,g.g,g.b,p,s)}return{getClearColor:function(){return o},setClearColor:function(g,p=1){o.set(g),a=p,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(g){a=g,m(o,a)},render:f}}function om(r,t,e,n){const i=r.getParameter(34921),s=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},l=p(null);let c=l,h=!1;function u(R,B,F,O,D){let X=!1;if(o){const J=g(O,F,B);c!==J&&(c=J,f(c.object)),X=x(O,D),X&&y(O,D)}else{const J=B.wireframe===!0;(c.geometry!==O.id||c.program!==F.id||c.wireframe!==J)&&(c.geometry=O.id,c.program=F.id,c.wireframe=J,X=!0)}R.isInstancedMesh===!0&&(X=!0),D!==null&&e.update(D,34963),(X||h)&&(h=!1,N(R,B,F,O),D!==null&&r.bindBuffer(34963,e.get(D).buffer))}function d(){return n.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function f(R){return n.isWebGL2?r.bindVertexArray(R):s.bindVertexArrayOES(R)}function m(R){return n.isWebGL2?r.deleteVertexArray(R):s.deleteVertexArrayOES(R)}function g(R,B,F){const O=F.wireframe===!0;let D=a[R.id];D===void 0&&(D={},a[R.id]=D);let X=D[B.id];X===void 0&&(X={},D[B.id]=X);let J=X[O];return J===void 0&&(J=p(d()),X[O]=J),J}function p(R){const B=[],F=[],O=[];for(let D=0;D<i;D++)B[D]=0,F[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:F,attributeDivisors:O,object:R,attributes:{},index:null}}function x(R,B){const F=c.attributes,O=R.attributes;let D=0;for(const X in O){const J=F[X],K=O[X];if(J===void 0||J.attribute!==K||J.data!==K.data)return!0;D++}return c.attributesNum!==D||c.index!==B}function y(R,B){const F={},O=R.attributes;let D=0;for(const X in O){const J=O[X],K={};K.attribute=J,J.data&&(K.data=J.data),F[X]=K,D++}c.attributes=F,c.attributesNum=D,c.index=B}function E(){const R=c.newAttributes;for(let B=0,F=R.length;B<F;B++)R[B]=0}function S(R){v(R,0)}function v(R,B){const F=c.newAttributes,O=c.enabledAttributes,D=c.attributeDivisors;F[R]=1,O[R]===0&&(r.enableVertexAttribArray(R),O[R]=1),D[R]!==B&&((n.isWebGL2?r:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,B),D[R]=B)}function L(){const R=c.newAttributes,B=c.enabledAttributes;for(let F=0,O=B.length;F<O;F++)B[F]!==R[F]&&(r.disableVertexAttribArray(F),B[F]=0)}function P(R,B,F,O,D,X){n.isWebGL2===!0&&(F===5124||F===5125)?r.vertexAttribIPointer(R,B,F,D,X):r.vertexAttribPointer(R,B,F,O,D,X)}function N(R,B,F,O){if(n.isWebGL2===!1&&(R.isInstancedMesh||O.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;E();const D=O.attributes,X=F.getAttributes(),J=B.defaultAttributeValues;for(const K in X){const Q=X[K];if(Q.location>=0){let ct=D[K];if(ct===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(ct=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(ct=R.instanceColor)),ct!==void 0){const zt=ct.normalized,bt=ct.itemSize,W=e.get(ct);if(W===void 0)continue;const Ot=W.buffer,At=W.type,Ct=W.bytesPerElement;if(ct.isInterleavedBufferAttribute){const nt=ct.data,It=nt.stride,G=ct.offset;if(nt.isInstancedInterleavedBuffer){for(let Z=0;Z<Q.locationSize;Z++)v(Q.location+Z,nt.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let Z=0;Z<Q.locationSize;Z++)S(Q.location+Z);r.bindBuffer(34962,Ot);for(let Z=0;Z<Q.locationSize;Z++)P(Q.location+Z,bt/Q.locationSize,At,zt,It*Ct,(G+bt/Q.locationSize*Z)*Ct)}else{if(ct.isInstancedBufferAttribute){for(let nt=0;nt<Q.locationSize;nt++)v(Q.location+nt,ct.meshPerAttribute);R.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let nt=0;nt<Q.locationSize;nt++)S(Q.location+nt);r.bindBuffer(34962,Ot);for(let nt=0;nt<Q.locationSize;nt++)P(Q.location+nt,bt/Q.locationSize,At,zt,bt*Ct,bt/Q.locationSize*nt*Ct)}}else if(J!==void 0){const zt=J[K];if(zt!==void 0)switch(zt.length){case 2:r.vertexAttrib2fv(Q.location,zt);break;case 3:r.vertexAttrib3fv(Q.location,zt);break;case 4:r.vertexAttrib4fv(Q.location,zt);break;default:r.vertexAttrib1fv(Q.location,zt)}}}}L()}function et(){C();for(const R in a){const B=a[R];for(const F in B){const O=B[F];for(const D in O)m(O[D].object),delete O[D];delete B[F]}delete a[R]}}function z(R){if(a[R.id]===void 0)return;const B=a[R.id];for(const F in B){const O=B[F];for(const D in O)m(O[D].object),delete O[D];delete B[F]}delete a[R.id]}function _(R){for(const B in a){const F=a[B];if(F[R.id]===void 0)continue;const O=F[R.id];for(const D in O)m(O[D].object),delete O[D];delete F[R.id]}}function C(){q(),h=!0,c!==l&&(c=l,f(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:C,resetDefaultState:q,dispose:et,releaseStatesOfGeometry:z,releaseStatesOfProgram:_,initAttributes:E,enableAttribute:S,disableUnusedAttributes:L}}function am(r,t,e,n){const i=n.isWebGL2;let s;function o(c){s=c}function a(c,h){r.drawArrays(s,c,h),e.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(i)d=r,f="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),e.update(h,s,u)}this.setMode=o,this.render=a,this.renderInstances=l}function lm(r,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");n=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(P){if(P==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext!="undefined"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!="undefined"&&r instanceof WebGL2ComputeRenderingContext;let a=e.precision!==void 0?e.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=r.getParameter(34930),d=r.getParameter(35660),f=r.getParameter(3379),m=r.getParameter(34076),g=r.getParameter(34921),p=r.getParameter(36347),x=r.getParameter(36348),y=r.getParameter(36349),E=d>0,S=o||t.has("OES_texture_float"),v=E&&S,L=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:y,vertexTextures:E,floatFragmentTextures:S,floatVertexTextures:v,maxSamples:L}}function cm(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new dn,a=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const m=u.length!==0||d||n!==0||i;return i=d,e=h(u,f,0),n=u.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,p=u.clipShadows,x=r.get(u);if(!i||m===null||m.length===0||s&&!p)s?h(null):c();else{const y=s?0:n,E=y*4;let S=x.clippingState||null;l.value=S,S=h(m,d,E,f);for(let v=0;v!==E;++v)S[v]=e[v];x.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let p=null;if(g!==0){if(p=l.value,m!==!0||p===null){const x=f+g*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<x)&&(p=new Float32Array(x));for(let E=0,S=f;E!==g;++E,S+=4)o.copy(u[E]).applyMatrix4(y,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function hm(r){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=Ni:a===Wo&&(o.mapping=Bi),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Go||a===Wo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Oc(l.height/2);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class ha extends la{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super();this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}ha.prototype.isOrthographicCamera=!0;const Ai=4,wl=[.125,.215,.35,.446,.526,.582],Gn=20,Eo=new ha,bl=new pt;let To=null;const Un=(1+Math.sqrt(5))/2,xi=1/Un,Sl=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Un,xi),new T(0,Un,-xi),new T(xi,0,Un),new T(-xi,0,Un),new T(Un,xi,0),new T(-Un,xi,0)];class El{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){To=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Al(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To),t.scissorTest=!1,$r(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ni||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize-32,n={magFilter:Se,minFilter:Se,generateMipmaps:!1,type:Di,format:Ve,encoding:mn,depthBuffer:!1},i=Tl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=um(s)),this._blurMaterial=dm(s,t,e)}return i}_compileMaterial(t){const e=new me(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,i){const a=new ve(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(bl),h.toneMapping=fn,h.autoClear=!1;const f=new Er({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),m=new me(new Tr,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(bl),g=!0);for(let x=0;x<6;x++){const y=x%3;y===0?(a.up.set(0,l[x],0),a.lookAt(c[x],0,0)):y===1?(a.up.set(0,0,l[x]),a.lookAt(0,c[x],0)):(a.up.set(0,l[x],0),a.lookAt(0,0,c[x]));const E=this._cubeSize;$r(i,y*E,x>2?E:0,E,E),h.setRenderTarget(i),g&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Ni||t.mapping===Bi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Al());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new me(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;$r(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=Sl[(i-1)%Sl.length];this._blur(t,i-1,i,s,o)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new me(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Gn-1),g=s/m,p=isFinite(s)?1+Math.floor(h*g):Gn;p>Gn&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Gn}`);const x=[];let y=0;for(let P=0;P<Gn;++P){const N=P/g,et=Math.exp(-N*N/2);x.push(et),P===0?y+=et:P<p&&(y+=2*et)}for(let P=0;P<x.length;P++)x[P]=x[P]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-n;const S=this._sizeLods[i],v=3*S*(i>E-Ai?i-E+Ai:0),L=4*(this._cubeSize-S);$r(e,v,L,3*S,2*S),l.setRenderTarget(e),l.render(u,Eo)}}function um(r){const t=[],e=[],n=[];let i=r;const s=r-Ai+1+wl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ai?l=wl[o-r+Ai-1]:o===0&&(l=0),n.push(l);const c=1/(a-1),h=-c/2,u=1+c/2,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,p=2,x=1,y=new Float32Array(g*m*f),E=new Float32Array(p*m*f),S=new Float32Array(x*m*f);for(let L=0;L<f;L++){const P=L%3*2/3-1,N=L>2?0:-1,et=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];y.set(et,g*m*L),E.set(d,p*m*L);const z=[L,L,L,L,L,L];S.set(z,x*m*L)}const v=new Zt;v.setAttribute("position",new oe(y,g)),v.setAttribute("uv",new oe(E,p)),v.setAttribute("faceIndex",new oe(S,x)),t.push(v),i>Ai&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Tl(r,t,e){const n=new Re(r,t,e);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $r(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function dm(r,t,e){const n=new Float32Array(Gn),i=new T(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Gn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Al(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ua(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Cl(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ua(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ua(){return`

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
	`}function fm(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Go||l===Wo,h=l===Ni||l===Bi;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new El(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new El(r));const d=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function pm(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function mm(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)t.update(d[m],34962);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let p=0,x=g.length;p<x;p++)t.update(g[p],34962)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const y=f.array;g=f.version;for(let E=0,S=y.length;E<S;E+=3){const v=y[E+0],L=y[E+1],P=y[E+2];d.push(v,L,L,P,P,v)}}else{const y=m.array;g=m.version;for(let E=0,S=y.length/3-1;E<S;E+=3){const v=E+0,L=E+1,P=E+2;d.push(v,L,L,P,P,v)}}const p=new(Ic(d)?Bc:Nc)(d,1);p.version=g;const x=s.get(u);x&&t.remove(x),s.set(u,p)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function gm(r,t,e,n){const i=n.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){r.drawElements(s,f,a,d*l),e.update(f,s,1)}function u(d,f,m){if(m===0)return;let g,p;if(i)g=r,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,f,a,d*l,m),e.update(f,s,m)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u}function xm(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(s/3);break;case 1:e.lines+=a*(s/2);break;case 3:e.lines+=a*(s-1);break;case 2:e.lines+=a*s;break;case 0:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function _m(r,t){return r[0]-t[0]}function ym(r,t){return Math.abs(t[1])-Math.abs(r[1])}function Ao(r,t){let e=1;const n=t.isInterleavedBufferAttribute?t.data.array:t.array;n instanceof Int8Array?e=127:n instanceof Int16Array?e=32767:n instanceof Int32Array?e=2147483647:console.error("THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",n),r.divideScalar(e)}function vm(r,t,e){const n={},i=new Float32Array(8),s=new WeakMap,o=new qt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,p=g!==void 0?g.length:0;let x=s.get(h);if(x===void 0||x.count!==p){let F=function(){R.dispose(),s.delete(h),h.removeEventListener("dispose",F)};var m=F;x!==void 0&&x.texture.dispose();const S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,L=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],N=h.morphAttributes.normal||[],et=h.morphAttributes.color||[];let z=0;S===!0&&(z=1),v===!0&&(z=2),L===!0&&(z=3);let _=h.attributes.position.count*z,C=1;_>t.maxTextureSize&&(C=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);const q=new Float32Array(_*C*4*p),R=new zs(q,_,C,p);R.type=Wn,R.needsUpdate=!0;const B=z*4;for(let O=0;O<p;O++){const D=P[O],X=N[O],J=et[O],K=_*C*4*O;for(let Q=0;Q<D.count;Q++){const ct=Q*B;S===!0&&(o.fromBufferAttribute(D,Q),D.normalized===!0&&Ao(o,D),q[K+ct+0]=o.x,q[K+ct+1]=o.y,q[K+ct+2]=o.z,q[K+ct+3]=0),v===!0&&(o.fromBufferAttribute(X,Q),X.normalized===!0&&Ao(o,X),q[K+ct+4]=o.x,q[K+ct+5]=o.y,q[K+ct+6]=o.z,q[K+ct+7]=0),L===!0&&(o.fromBufferAttribute(J,Q),J.normalized===!0&&Ao(o,J),q[K+ct+8]=o.x,q[K+ct+9]=o.y,q[K+ct+10]=o.z,q[K+ct+11]=J.itemSize===4?o.w:1)}}x={count:p,texture:R,size:new Y(_,C)},s.set(h,x),h.addEventListener("dispose",F)}let y=0;for(let S=0;S<f.length;S++)y+=f[S];const E=h.morphTargetsRelative?1:1-y;d.getUniforms().setValue(r,"morphTargetBaseInfluence",E),d.getUniforms().setValue(r,"morphTargetInfluences",f),d.getUniforms().setValue(r,"morphTargetsTexture",x.texture,e),d.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const g=f===void 0?0:f.length;let p=n[h.id];if(p===void 0||p.length!==g){p=[];for(let v=0;v<g;v++)p[v]=[v,0];n[h.id]=p}for(let v=0;v<g;v++){const L=p[v];L[0]=v,L[1]=f[v]}p.sort(ym);for(let v=0;v<8;v++)v<g&&p[v][1]?(a[v][0]=p[v][0],a[v][1]=p[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(_m);const x=h.morphAttributes.position,y=h.morphAttributes.normal;let E=0;for(let v=0;v<8;v++){const L=a[v],P=L[0],N=L[1];P!==Number.MAX_SAFE_INTEGER&&N?(x&&h.getAttribute("morphTarget"+v)!==x[P]&&h.setAttribute("morphTarget"+v,x[P]),y&&h.getAttribute("morphNormal"+v)!==y[P]&&h.setAttribute("morphNormal"+v,y[P]),i[v]=N,E+=N):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),y&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),i[v]=0)}const S=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(r,"morphTargetBaseInfluence",S),d.getUniforms().setValue(r,"morphTargetInfluences",i)}}return{update:l}}function Mm(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);return i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),e.update(l.instanceMatrix,34962),l.instanceColor!==null&&e.update(l.instanceColor,34962)),u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}const Hc=new he,Vc=new zs,Gc=new aa,Wc=new Fs,Ll=[],Rl=[],Pl=new Float32Array(16),Dl=new Float32Array(9),Il=new Float32Array(4);function Xi(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Ll[i];if(s===void 0&&(s=new Float32Array(i),Ll[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Me(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function _e(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Os(r,t){let e=Rl[t];e===void 0&&(e=new Int32Array(t),Rl[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function wm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function bm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Me(e,t))return;r.uniform2fv(this.addr,t),_e(e,t)}}function Sm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Me(e,t))return;r.uniform3fv(this.addr,t),_e(e,t)}}function Em(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Me(e,t))return;r.uniform4fv(this.addr,t),_e(e,t)}}function Tm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),_e(e,t)}else{if(Me(e,n))return;Il.set(n),r.uniformMatrix2fv(this.addr,!1,Il),_e(e,n)}}function Am(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),_e(e,t)}else{if(Me(e,n))return;Dl.set(n),r.uniformMatrix3fv(this.addr,!1,Dl),_e(e,n)}}function Cm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Me(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),_e(e,t)}else{if(Me(e,n))return;Pl.set(n),r.uniformMatrix4fv(this.addr,!1,Pl),_e(e,n)}}function Lm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Rm(r,t){const e=this.cache;Me(e,t)||(r.uniform2iv(this.addr,t),_e(e,t))}function Pm(r,t){const e=this.cache;Me(e,t)||(r.uniform3iv(this.addr,t),_e(e,t))}function Dm(r,t){const e=this.cache;Me(e,t)||(r.uniform4iv(this.addr,t),_e(e,t))}function Im(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function km(r,t){const e=this.cache;Me(e,t)||(r.uniform2uiv(this.addr,t),_e(e,t))}function zm(r,t){const e=this.cache;Me(e,t)||(r.uniform3uiv(this.addr,t),_e(e,t))}function Fm(r,t){const e=this.cache;Me(e,t)||(r.uniform4uiv(this.addr,t),_e(e,t))}function Nm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||Hc,i)}function Bm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Gc,i)}function Om(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Wc,i)}function Um(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Vc,i)}function Hm(r){switch(r){case 5126:return wm;case 35664:return bm;case 35665:return Sm;case 35666:return Em;case 35674:return Tm;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Lm;case 35667:case 35671:return Rm;case 35668:case 35672:return Pm;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return km;case 36295:return zm;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Nm;case 35679:case 36299:case 36307:return Bm;case 35680:case 36300:case 36308:case 36293:return Om;case 36289:case 36303:case 36311:case 36292:return Um}}function Vm(r,t){r.uniform1fv(this.addr,t)}function Gm(r,t){const e=Xi(t,this.size,2);r.uniform2fv(this.addr,e)}function Wm(r,t){const e=Xi(t,this.size,3);r.uniform3fv(this.addr,e)}function qm(r,t){const e=Xi(t,this.size,4);r.uniform4fv(this.addr,e)}function Xm(r,t){const e=Xi(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function jm(r,t){const e=Xi(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Zm(r,t){const e=Xi(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Ym(r,t){r.uniform1iv(this.addr,t)}function Jm(r,t){r.uniform2iv(this.addr,t)}function $m(r,t){r.uniform3iv(this.addr,t)}function Km(r,t){r.uniform4iv(this.addr,t)}function Qm(r,t){r.uniform1uiv(this.addr,t)}function tg(r,t){r.uniform2uiv(this.addr,t)}function eg(r,t){r.uniform3uiv(this.addr,t)}function ng(r,t){r.uniform4uiv(this.addr,t)}function ig(r,t,e){const n=t.length,i=Os(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2D(t[s]||Hc,i[s])}function rg(r,t,e){const n=t.length,i=Os(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture3D(t[s]||Gc,i[s])}function sg(r,t,e){const n=t.length,i=Os(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTextureCube(t[s]||Wc,i[s])}function og(r,t,e){const n=t.length,i=Os(e,n);r.uniform1iv(this.addr,i);for(let s=0;s!==n;++s)e.setTexture2DArray(t[s]||Vc,i[s])}function ag(r){switch(r){case 5126:return Vm;case 35664:return Gm;case 35665:return Wm;case 35666:return qm;case 35674:return Xm;case 35675:return jm;case 35676:return Zm;case 5124:case 35670:return Ym;case 35667:case 35671:return Jm;case 35668:case 35672:return $m;case 35669:case 35673:return Km;case 5125:return Qm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return og}}function lg(r,t,e){this.id=r,this.addr=e,this.cache=[],this.setValue=Hm(t.type)}function qc(r,t,e){this.id=r,this.addr=e,this.cache=[],this.size=t.size,this.setValue=ag(t.type)}qc.prototype.updateCache=function(r){const t=this.cache;r instanceof Float32Array&&t.length!==r.length&&(this.cache=new Float32Array(r.length)),_e(t,r)};function Xc(r){this.id=r,this.seq=[],this.map={}}Xc.prototype.setValue=function(r,t,e){const n=this.seq;for(let i=0,s=n.length;i!==s;++i){const o=n[i];o.setValue(r,t[o.id],e)}};const Co=/(\w+)(\])?(\[|\.)?/g;function kl(r,t){r.seq.push(t),r.map[t.id]=t}function cg(r,t,e){const n=r.name,i=n.length;for(Co.lastIndex=0;;){const s=Co.exec(n),o=Co.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){kl(e,c===void 0?new lg(a,r,t):new qc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Xc(a),kl(e,u)),e=u}}}function Ln(r,t){this.seq=[],this.map={};const e=r.getProgramParameter(t,35718);for(let n=0;n<e;++n){const i=r.getActiveUniform(t,n),s=r.getUniformLocation(t,i.name);cg(i,s,this)}}Ln.prototype.setValue=function(r,t,e,n){const i=this.map[t];i!==void 0&&i.setValue(r,e,n)};Ln.prototype.setOptional=function(r,t,e){const n=t[e];n!==void 0&&this.setValue(r,e,n)};Ln.upload=function(r,t,e,n){for(let i=0,s=t.length;i!==s;++i){const o=t[i],a=e[o.id];a.needsUpdate!==!1&&o.setValue(r,a.value,n)}};Ln.seqWithValue=function(r,t){const e=[];for(let n=0,i=r.length;n!==i;++n){const s=r[n];s.id in t&&e.push(s)}return e};function zl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}let hg=0;function ug(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++)n.push(o+1+": "+e[o]);return n.join(`
`)}function dg(r){switch(r){case mn:return["Linear","( value )"];case Yt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function Fl(r,t,e){const n=r.getShaderParameter(t,35713),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=parseInt(/ERROR: 0:(\d+)/.exec(i)[1]);return e.toUpperCase()+`

`+i+`

`+ug(r.getShaderSource(t),s)}function fg(r,t){const e=dg(t);return"vec4 "+r+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function pg(r,t){let e;switch(t){case yu:e="Linear";break;case vu:e="Reinhard";break;case Mu:e="OptimizedCineon";break;case wu:e="ACESFilmic";break;case bu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function mg(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function gg(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function xg(r,t){const e={},n=r.getProgramParameter(t,35721);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function cr(r){return r!==""}function Nl(r,t){return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Bl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(r){return r.replace(_g,yg)}function yg(r,t){const e=kt[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Yo(e)}const vg=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Mg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ol(r){return r.replace(Mg,jc).replace(vg,wg)}function wg(r,t,e,n){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),jc(r,t,e,n)}function jc(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ul(r){let t="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ac?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$h?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===lr&&(t="SHADOWMAP_TYPE_VSM"),t}function Sg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ni:case Bi:t="ENVMAP_TYPE_CUBE";break;case Is:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Eg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Tg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Ds:t="ENVMAP_BLENDING_MULTIPLY";break;case xu:t="ENVMAP_BLENDING_MIX";break;case _u:t="ENVMAP_BLENDING_ADD";break}return t}function Ag(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t/32+1)+3,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Cg(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=bg(e),c=Sg(e),h=Eg(e),u=Tg(e),d=Ag(e),f=e.isWebGL2?"":mg(e),m=gg(s),g=i.createProgram();let p,x,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[m].filter(cr).join(`
`),p.length>0&&(p+=`
`),x=[f,m].filter(cr).join(`
`),x.length>0&&(x+=`
`)):(p=[Ul(e),"#define SHADER_NAME "+e.shaderName,m,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define MAX_BONES "+e.maxBones,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.useVertexTexture?"#define BONE_TEXTURE":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),x=[f,Ul(e),"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fn?"#define TONE_MAPPING":"",e.toneMapping!==fn?kt.tonemapping_pars_fragment:"",e.toneMapping!==fn?pg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.encodings_pars_fragment,fg("linearToOutputTexel",e.outputEncoding),e.depthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(cr).join(`
`)),o=Yo(o),o=Nl(o,e),o=Bl(o,e),a=Yo(a),a=Nl(a,e),a=Bl(a,e),o=Ol(o),a=Ol(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const E=y+p+o,S=y+x+a,v=zl(i,35633,E),L=zl(i,35632,S);if(i.attachShader(g,v),i.attachShader(g,L),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g),r.debug.checkShaderErrors){const et=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(v).trim(),_=i.getShaderInfoLog(L).trim();let C=!0,q=!0;if(i.getProgramParameter(g,35714)===!1){C=!1;const R=Fl(i,v,"vertex"),B=Fl(i,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,35715)+`

Program Info Log: `+et+`
`+R+`
`+B)}else et!==""?console.warn("THREE.WebGLProgram: Program Info Log:",et):(z===""||_==="")&&(q=!1);q&&(this.diagnostics={runnable:C,programLog:et,vertexShader:{log:z,prefix:p},fragmentShader:{log:_,prefix:x}})}i.deleteShader(v),i.deleteShader(L);let P;this.getUniforms=function(){return P===void 0&&(P=new Ln(i,g)),P};let N;return this.getAttributes=function(){return N===void 0&&(N=xg(i,g)),N},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.name=e.shaderName,this.id=hg++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=v,this.fragmentShader=L,this}let Lg=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;return e.has(t)===!1&&e.set(t,new Set),e.get(t)}_getShaderStage(t){const e=this.shaderCache;if(e.has(t)===!1){const n=new Pg(t);e.set(t,n)}return e.get(t)}}class Pg{constructor(t){this.id=Lg++,this.code=t,this.usedTimes=0}}function Dg(r,t,e,n,i,s,o){const a=new Fc,l=new Rg,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,d=i.floatVertexTextures,f=i.maxVertexUniforms,m=i.vertexTextures;let g=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){const q=_.skeleton.bones;if(d)return 1024;{const B=Math.floor((f-20)/4),F=Math.min(B,q.length);return F<q.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+q.length+" bones. This GPU supports "+F+"."),0):F}}function y(_,C,q,R,B){const F=R.fog,O=B.geometry,D=_.isMeshStandardMaterial?R.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||D),J=!!X&&X.mapping===Is?X.image.height:null,K=p[_.type],Q=B.isSkinnedMesh?x(B):0;_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const ct=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,zt=ct!==void 0?ct.length:0;let bt=0;O.morphAttributes.position!==void 0&&(bt=1),O.morphAttributes.normal!==void 0&&(bt=2),O.morphAttributes.color!==void 0&&(bt=3);let W,Ot,At,Ct;if(K){const tt=en[K];W=tt.vertexShader,Ot=tt.fragmentShader}else W=_.vertexShader,Ot=_.fragmentShader,l.update(_),At=l.getVertexShaderID(_),Ct=l.getFragmentShaderID(_);const nt=r.getRenderTarget(),It=_.alphaTest>0,G=_.clearcoat>0;return{isWebGL2:h,shaderID:K,shaderName:_.type,vertexShader:W,fragmentShader:Ot,defines:_.defines,customVertexShaderID:At,customFragmentShaderID:Ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,instancing:B.isInstancedMesh===!0,instancingColor:B.isInstancedMesh===!0&&B.instanceColor!==null,supportsVertexTextures:m,outputEncoding:nt===null?r.outputEncoding:nt.isXRRenderTarget===!0?nt.texture.encoding:mn,map:!!_.map,matcap:!!_.matcap,envMap:!!X,envMapMode:X&&X.mapping,envMapCubeUVHeight:J,lightMap:!!_.lightMap,aoMap:!!_.aoMap,emissiveMap:!!_.emissiveMap,bumpMap:!!_.bumpMap,normalMap:!!_.normalMap,objectSpaceNormalMap:_.normalMapType===Xu,tangentSpaceNormalMap:_.normalMapType===Gi,decodeVideoTexture:!!_.map&&_.map.isVideoTexture===!0&&_.map.encoding===Yt,clearcoat:G,clearcoatMap:G&&!!_.clearcoatMap,clearcoatRoughnessMap:G&&!!_.clearcoatRoughnessMap,clearcoatNormalMap:G&&!!_.clearcoatNormalMap,displacementMap:!!_.displacementMap,roughnessMap:!!_.roughnessMap,metalnessMap:!!_.metalnessMap,specularMap:!!_.specularMap,specularIntensityMap:!!_.specularIntensityMap,specularColorMap:!!_.specularColorMap,opaque:_.transparent===!1&&_.blending===Pi,alphaMap:!!_.alphaMap,alphaTest:It,gradientMap:!!_.gradientMap,sheen:_.sheen>0,sheenColorMap:!!_.sheenColorMap,sheenRoughnessMap:!!_.sheenRoughnessMap,transmission:_.transmission>0,transmissionMap:!!_.transmissionMap,thicknessMap:!!_.thicknessMap,combine:_.combine,vertexTangents:!!_.normalMap&&!!O.attributes.tangent,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatMap||!!_.clearcoatRoughnessMap||!!_.clearcoatNormalMap||!!_.displacementMap||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||!!_.sheenColorMap||!!_.sheenRoughnessMap,uvsVertexOnly:!(!!_.map||!!_.bumpMap||!!_.normalMap||!!_.specularMap||!!_.alphaMap||!!_.emissiveMap||!!_.roughnessMap||!!_.metalnessMap||!!_.clearcoatNormalMap||_.transmission>0||!!_.transmissionMap||!!_.thicknessMap||!!_.specularIntensityMap||!!_.specularColorMap||_.sheen>0||!!_.sheenColorMap||!!_.sheenRoughnessMap)&&!!_.displacementMap,fog:!!F,useFog:_.fog,fogExp2:F&&F.isFogExp2,flatShading:!!_.flatShading,sizeAttenuation:_.sizeAttenuation,logarithmicDepthBuffer:u,skinning:B.isSkinnedMesh===!0&&Q>0,maxBones:Q,useVertexTexture:d,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:zt,morphTextureStride:bt,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&q.length>0,shadowMapType:r.shadowMap.type,toneMapping:_.toneMapped?r.toneMapping:fn,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fi,flipSided:_.side===Ge,depthPacking:_.depthPacking!==void 0?_.depthPacking:!1,index0AttributeName:_.index0AttributeName,extensionDerivatives:_.extensions&&_.extensions.derivatives,extensionFragDepth:_.extensions&&_.extensions.fragDepth,extensionDrawBuffers:_.extensions&&_.extensions.drawBuffers,extensionShaderTextureLOD:_.extensions&&_.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:_.customProgramCacheKey()}}function E(_){const C=[];if(_.shaderID?C.push(_.shaderID):(C.push(_.customVertexShaderID),C.push(_.customFragmentShaderID)),_.defines!==void 0)for(const q in _.defines)C.push(q),C.push(_.defines[q]);return _.isRawShaderMaterial===!1&&(S(C,_),v(C,_),C.push(r.outputEncoding)),C.push(_.customProgramCacheKey),C.join()}function S(_,C){_.push(C.precision),_.push(C.outputEncoding),_.push(C.envMapMode),_.push(C.envMapCubeUVHeight),_.push(C.combine),_.push(C.vertexUvs),_.push(C.fogExp2),_.push(C.sizeAttenuation),_.push(C.maxBones),_.push(C.morphTargetsCount),_.push(C.morphAttributeCount),_.push(C.numDirLights),_.push(C.numPointLights),_.push(C.numSpotLights),_.push(C.numHemiLights),_.push(C.numRectAreaLights),_.push(C.numDirLightShadows),_.push(C.numPointLightShadows),_.push(C.numSpotLightShadows),_.push(C.shadowMapType),_.push(C.toneMapping),_.push(C.numClippingPlanes),_.push(C.numClipIntersection)}function v(_,C){a.disableAll(),C.isWebGL2&&a.enable(0),C.supportsVertexTextures&&a.enable(1),C.instancing&&a.enable(2),C.instancingColor&&a.enable(3),C.map&&a.enable(4),C.matcap&&a.enable(5),C.envMap&&a.enable(6),C.lightMap&&a.enable(7),C.aoMap&&a.enable(8),C.emissiveMap&&a.enable(9),C.bumpMap&&a.enable(10),C.normalMap&&a.enable(11),C.objectSpaceNormalMap&&a.enable(12),C.tangentSpaceNormalMap&&a.enable(13),C.clearcoat&&a.enable(14),C.clearcoatMap&&a.enable(15),C.clearcoatRoughnessMap&&a.enable(16),C.clearcoatNormalMap&&a.enable(17),C.displacementMap&&a.enable(18),C.specularMap&&a.enable(19),C.roughnessMap&&a.enable(20),C.metalnessMap&&a.enable(21),C.gradientMap&&a.enable(22),C.alphaMap&&a.enable(23),C.alphaTest&&a.enable(24),C.vertexColors&&a.enable(25),C.vertexAlphas&&a.enable(26),C.vertexUvs&&a.enable(27),C.vertexTangents&&a.enable(28),C.uvsVertexOnly&&a.enable(29),C.fog&&a.enable(30),_.push(a.mask),a.disableAll(),C.useFog&&a.enable(0),C.flatShading&&a.enable(1),C.logarithmicDepthBuffer&&a.enable(2),C.skinning&&a.enable(3),C.useVertexTexture&&a.enable(4),C.morphTargets&&a.enable(5),C.morphNormals&&a.enable(6),C.morphColors&&a.enable(7),C.premultipliedAlpha&&a.enable(8),C.shadowMapEnabled&&a.enable(9),C.physicallyCorrectLights&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.depthPacking&&a.enable(13),C.dithering&&a.enable(14),C.specularIntensityMap&&a.enable(15),C.specularColorMap&&a.enable(16),C.transmission&&a.enable(17),C.transmissionMap&&a.enable(18),C.thicknessMap&&a.enable(19),C.sheen&&a.enable(20),C.sheenColorMap&&a.enable(21),C.sheenRoughnessMap&&a.enable(22),C.decodeVideoTexture&&a.enable(23),C.opaque&&a.enable(24),_.push(a.mask)}function L(_){const C=p[_.type];let q;if(C){const R=en[C];q=Ed.clone(R.uniforms)}else q=_.uniforms;return q}function P(_,C){let q;for(let R=0,B=c.length;R<B;R++){const F=c[R];if(F.cacheKey===C){q=F,++q.usedTimes;break}}return q===void 0&&(q=new Cg(r,C,_,s),c.push(q)),q}function N(_){if(--_.usedTimes===0){const C=c.indexOf(_);c[C]=c[c.length-1],c.pop(),_.destroy()}}function et(_){l.remove(_)}function z(){l.dispose()}return{getParameters:y,getProgramCacheKey:E,getUniforms:L,acquireProgram:P,releaseProgram:N,releaseShaderCache:et,programs:c,dispose:z}}function Ig(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function kg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Hl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Vl(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,g,p){let x=r[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:p},r[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=f,x.groupOrder=m,x.renderOrder=u.renderOrder,x.z=g,x.group=p),t++,x}function a(u,d,f,m,g,p){const x=o(u,d,f,m,g,p);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):e.push(x)}function l(u,d,f,m,g,p){const x=o(u,d,f,m,g,p);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):e.unshift(x)}function c(u,d){e.length>1&&e.sort(u||kg),n.length>1&&n.sort(d||Hl),i.length>1&&i.sort(d||Hl)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function zg(){let r=new WeakMap;function t(n,i){let s;return r.has(n)===!1?(s=new Vl,r.set(n,[s])):i>=r.get(n).length?(s=new Vl,r.get(n).push(s)):s=r.get(n)[i],s}function e(){r=new WeakMap}return{get:t,dispose:e}}function Fg(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new pt};break;case"SpotLight":e={position:new T,direction:new T,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":e={color:new pt,position:new T,halfWidth:new T,halfHeight:new T};break}return r[t.id]=e,e}}}function Ng(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Y,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Bg=0;function Og(r,t){return(t.castShadow?1:0)-(r.castShadow?1:0)}function Ug(r,t){const e=new Fg,n=Ng(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)i.probe.push(new T);const s=new T,o=new xt,a=new xt;function l(h,u){let d=0,f=0,m=0;for(let et=0;et<9;et++)i.probe[et].set(0,0,0);let g=0,p=0,x=0,y=0,E=0,S=0,v=0,L=0;h.sort(Og);const P=u!==!0?Math.PI:1;for(let et=0,z=h.length;et<z;et++){const _=h[et],C=_.color,q=_.intensity,R=_.distance,B=_.shadow&&_.shadow.map?_.shadow.map.texture:null;if(_.isAmbientLight)d+=C.r*q*P,f+=C.g*q*P,m+=C.b*q*P;else if(_.isLightProbe)for(let F=0;F<9;F++)i.probe[F].addScaledVector(_.sh.coefficients[F],q);else if(_.isDirectionalLight){const F=e.get(_);if(F.color.copy(_.color).multiplyScalar(_.intensity*P),_.castShadow){const O=_.shadow,D=n.get(_);D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.directionalShadow[g]=D,i.directionalShadowMap[g]=B,i.directionalShadowMatrix[g]=_.shadow.matrix,S++}i.directional[g]=F,g++}else if(_.isSpotLight){const F=e.get(_);if(F.position.setFromMatrixPosition(_.matrixWorld),F.color.copy(C).multiplyScalar(q*P),F.distance=R,F.coneCos=Math.cos(_.angle),F.penumbraCos=Math.cos(_.angle*(1-_.penumbra)),F.decay=_.decay,_.castShadow){const O=_.shadow,D=n.get(_);D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,i.spotShadow[x]=D,i.spotShadowMap[x]=B,i.spotShadowMatrix[x]=_.shadow.matrix,L++}i.spot[x]=F,x++}else if(_.isRectAreaLight){const F=e.get(_);F.color.copy(C).multiplyScalar(q),F.halfWidth.set(_.width*.5,0,0),F.halfHeight.set(0,_.height*.5,0),i.rectArea[y]=F,y++}else if(_.isPointLight){const F=e.get(_);if(F.color.copy(_.color).multiplyScalar(_.intensity*P),F.distance=_.distance,F.decay=_.decay,_.castShadow){const O=_.shadow,D=n.get(_);D.shadowBias=O.bias,D.shadowNormalBias=O.normalBias,D.shadowRadius=O.radius,D.shadowMapSize=O.mapSize,D.shadowCameraNear=O.camera.near,D.shadowCameraFar=O.camera.far,i.pointShadow[p]=D,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=_.shadow.matrix,v++}i.point[p]=F,p++}else if(_.isHemisphereLight){const F=e.get(_);F.skyColor.copy(_.color).multiplyScalar(q*P),F.groundColor.copy(_.groundColor).multiplyScalar(q*P),i.hemi[E]=F,E++}}y>0&&(t.isWebGL2||r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=st.LTC_FLOAT_1,i.rectAreaLTC2=st.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=st.LTC_HALF_1,i.rectAreaLTC2=st.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=m;const N=i.hash;(N.directionalLength!==g||N.pointLength!==p||N.spotLength!==x||N.rectAreaLength!==y||N.hemiLength!==E||N.numDirectionalShadows!==S||N.numPointShadows!==v||N.numSpotShadows!==L)&&(i.directional.length=g,i.spot.length=x,i.rectArea.length=y,i.point.length=p,i.hemi.length=E,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=L,i.spotShadowMap.length=L,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=v,i.spotShadowMatrix.length=L,N.directionalLength=g,N.pointLength=p,N.spotLength=x,N.rectAreaLength=y,N.hemiLength=E,N.numDirectionalShadows=S,N.numPointShadows=v,N.numSpotShadows=L,i.version=Bg++)}function c(h,u){let d=0,f=0,m=0,g=0,p=0;const x=u.matrixWorldInverse;for(let y=0,E=h.length;y<E;y++){const S=h[y];if(S.isDirectionalLight){const v=i.directional[d];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),d++}else if(S.isSpotLight){const v=i.spot[m];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(x),m++}else if(S.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(x),a.identity(),o.copy(S.matrixWorld),o.premultiply(x),a.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=i.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(x),f++}else if(S.isHemisphereLight){const v=i.hemi[p];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(x),v.direction.normalize(),p++}}}return{setup:l,setupView:c,state:i}}function Gl(r,t){const e=new Ug(r,t),n=[],i=[];function s(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Hg(r,t){let e=new WeakMap;function n(s,o=0){let a;return e.has(s)===!1?(a=new Gl(r,t),e.set(s,[a])):o>=e.get(s).length?(a=new Gl(r,t),e.get(s).push(a)):a=e.get(s)[o],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class da extends ae{constructor(t){super();this.type="MeshDepthMaterial",this.depthPacking=Wu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}da.prototype.isMeshDepthMaterial=!0;class fa extends ae{constructor(t){super();this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}fa.prototype.isMeshDistanceMaterial=!0;const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
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
}`;function Zc(r,t,e){let n=new Ns;const i=new Y,s=new Y,o=new qt,a=new da({depthPacking:qu}),l=new fa,c={},h=e.maxTextureSize,u={0:Ge,1:mr,2:Fi},d=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Y},radius:{value:4}},vertexShader:Vg,fragmentShader:Gg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Zt;m.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new me(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac,this.render=function(S,v,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const P=r.getRenderTarget(),N=r.getActiveCubeFace(),et=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Cn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);for(let _=0,C=S.length;_<C;_++){const q=S[_],R=q.shadow;if(R===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(R.autoUpdate===!1&&R.needsUpdate===!1)continue;i.copy(R.mapSize);const B=R.getFrameExtents();if(i.multiply(B),s.copy(R.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/B.x),i.x=s.x*B.x,R.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/B.y),i.y=s.y*B.y,R.mapSize.y=s.y)),R.map===null&&!R.isPointLightShadow&&this.type===lr&&(R.map=new Re(i.x,i.y),R.map.texture.name=q.name+".shadowMap",R.mapPass=new Re(i.x,i.y),R.camera.updateProjectionMatrix()),R.map===null){const O={minFilter:ce,magFilter:ce,format:Ve};R.map=new Re(i.x,i.y,O),R.map.texture.name=q.name+".shadowMap",R.camera.updateProjectionMatrix()}r.setRenderTarget(R.map),r.clear();const F=R.getViewportCount();for(let O=0;O<F;O++){const D=R.getViewport(O);o.set(s.x*D.x,s.y*D.y,s.x*D.z,s.y*D.w),z.viewport(o),R.updateMatrices(q,O),n=R.getFrustum(),E(v,L,R.camera,q,this.type)}!R.isPointLightShadow&&this.type===lr&&x(R,L),R.needsUpdate=!1}p.needsUpdate=!1,r.setRenderTarget(P,N,et)};function x(S,v){const L=t.update(g);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(v,null,L,d,g,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(v,null,L,f,g,null)}function y(S,v,L,P,N,et){let z=null;const _=L.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(_!==void 0?z=_:z=L.isPointLight===!0?l:a,r.localClippingEnabled&&v.clipShadows===!0&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0){const C=z.uuid,q=v.uuid;let R=c[C];R===void 0&&(R={},c[C]=R);let B=R[q];B===void 0&&(B=z.clone(),R[q]=B),z=B}return z.visible=v.visible,z.wireframe=v.wireframe,et===lr?z.side=v.shadowSide!==null?v.shadowSide:v.side:z.side=v.shadowSide!==null?v.shadowSide:u[v.side],z.alphaMap=v.alphaMap,z.alphaTest=v.alphaTest,z.clipShadows=v.clipShadows,z.clippingPlanes=v.clippingPlanes,z.clipIntersection=v.clipIntersection,z.displacementMap=v.displacementMap,z.displacementScale=v.displacementScale,z.displacementBias=v.displacementBias,z.wireframeLinewidth=v.wireframeLinewidth,z.linewidth=v.linewidth,L.isPointLight===!0&&z.isMeshDistanceMaterial===!0&&(z.referencePosition.setFromMatrixPosition(L.matrixWorld),z.nearDistance=P,z.farDistance=N),z}function E(S,v,L,P,N){if(S.visible===!1)return;if(S.layers.test(v.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&N===lr)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,S.matrixWorld);const _=t.update(S),C=S.material;if(Array.isArray(C)){const q=_.groups;for(let R=0,B=q.length;R<B;R++){const F=q[R],O=C[F.materialIndex];if(O&&O.visible){const D=y(S,O,P,L.near,L.far,N);r.renderBufferDirect(L,null,_,D,S,F)}}}else if(C.visible){const q=y(S,C,P,L.near,L.far,N);r.renderBufferDirect(L,null,_,q,S,null)}}const z=S.children;for(let _=0,C=z.length;_<C;_++)E(z[_],v,L,P,N)}}function Wg(r,t,e){const n=e.isWebGL2;function i(){let A=!1;const ot=new qt;let rt=null;const vt=new qt(0,0,0,0);return{setMask:function(ut){rt!==ut&&!A&&(r.colorMask(ut,ut,ut,ut),rt=ut)},setLocked:function(ut){A=ut},setClear:function(ut,Mt,it,St,jt){jt===!0&&(ut*=St,Mt*=St,it*=St),ot.set(ut,Mt,it,St),vt.equals(ot)===!1&&(r.clearColor(ut,Mt,it,St),vt.copy(ot))},reset:function(){A=!1,rt=null,vt.set(-1,0,0,0)}}}function s(){let A=!1,ot=null,rt=null,vt=null;return{setTest:function(ut){ut?bt(2929):W(2929)},setMask:function(ut){ot!==ut&&!A&&(r.depthMask(ut),ot=ut)},setFunc:function(ut){if(rt!==ut){if(ut)switch(ut){case hu:r.depthFunc(512);break;case uu:r.depthFunc(519);break;case du:r.depthFunc(513);break;case Vo:r.depthFunc(515);break;case fu:r.depthFunc(514);break;case pu:r.depthFunc(518);break;case mu:r.depthFunc(516);break;case gu:r.depthFunc(517);break;default:r.depthFunc(515)}else r.depthFunc(515);rt=ut}},setLocked:function(ut){A=ut},setClear:function(ut){vt!==ut&&(r.clearDepth(ut),vt=ut)},reset:function(){A=!1,ot=null,rt=null,vt=null}}}function o(){let A=!1,ot=null,rt=null,vt=null,ut=null,Mt=null,it=null,St=null,jt=null;return{setTest:function(Ft){A||(Ft?bt(2960):W(2960))},setMask:function(Ft){ot!==Ft&&!A&&(r.stencilMask(Ft),ot=Ft)},setFunc:function(Ft,je,Ze){(rt!==Ft||vt!==je||ut!==Ze)&&(r.stencilFunc(Ft,je,Ze),rt=Ft,vt=je,ut=Ze)},setOp:function(Ft,je,Ze){(Mt!==Ft||it!==je||St!==Ze)&&(r.stencilOp(Ft,je,Ze),Mt=Ft,it=je,St=Ze)},setLocked:function(Ft){A=Ft},setClear:function(Ft){jt!==Ft&&(r.clearStencil(Ft),jt=Ft)},reset:function(){A=!1,ot=null,rt=null,vt=null,ut=null,Mt=null,it=null,St=null,jt=null}}}const a=new i,l=new s,c=new o;let h={},u={},d=new WeakMap,f=[],m=null,g=!1,p=null,x=null,y=null,E=null,S=null,v=null,L=null,P=!1,N=null,et=null,z=null,_=null,C=null;const q=r.getParameter(35661);let R=!1,B=0;const F=r.getParameter(7938);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),R=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),R=B>=2);let O=null,D={};const X=r.getParameter(3088),J=r.getParameter(2978),K=new qt().fromArray(X),Q=new qt().fromArray(J);function ct(A,ot,rt){const vt=new Uint8Array(4),ut=r.createTexture();r.bindTexture(A,ut),r.texParameteri(A,10241,9728),r.texParameteri(A,10240,9728);for(let Mt=0;Mt<rt;Mt++)r.texImage2D(ot+Mt,0,6408,1,1,0,6408,5121,vt);return ut}const zt={};zt[3553]=ct(3553,3553,1),zt[34067]=ct(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),bt(2929),l.setFunc(Vo),tt(!1),dt(ka),bt(2884),G(Cn);function bt(A){h[A]!==!0&&(r.enable(A),h[A]=!0)}function W(A){h[A]!==!1&&(r.disable(A),h[A]=!1)}function Ot(A,ot){return u[A]!==ot?(r.bindFramebuffer(A,ot),u[A]=ot,n&&(A===36009&&(u[36160]=ot),A===36160&&(u[36009]=ot)),!0):!1}function At(A,ot){let rt=f,vt=!1;if(A)if(rt=d.get(ot),rt===void 0&&(rt=[],d.set(ot,rt)),A.isWebGLMultipleRenderTargets){const ut=A.texture;if(rt.length!==ut.length||rt[0]!==36064){for(let Mt=0,it=ut.length;Mt<it;Mt++)rt[Mt]=36064+Mt;rt.length=ut.length,vt=!0}}else rt[0]!==36064&&(rt[0]=36064,vt=!0);else rt[0]!==1029&&(rt[0]=1029,vt=!0);vt&&(e.isWebGL2?r.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Ct(A){return m!==A?(r.useProgram(A),m=A,!0):!1}const nt={[bi]:32774,[Qh]:32778,[tu]:32779};if(n)nt[Ba]=32775,nt[Oa]=32776;else{const A=t.get("EXT_blend_minmax");A!==null&&(nt[Ba]=A.MIN_EXT,nt[Oa]=A.MAX_EXT)}const It={[eu]:0,[nu]:1,[iu]:768,[Lc]:770,[cu]:776,[au]:774,[su]:772,[ru]:769,[Rc]:771,[lu]:775,[ou]:773};function G(A,ot,rt,vt,ut,Mt,it,St){if(A===Cn){g===!0&&(W(3042),g=!1);return}if(g===!1&&(bt(3042),g=!0),A!==Kh){if(A!==p||St!==P){if((x!==bi||S!==bi)&&(r.blendEquation(32774),x=bi,S=bi),St)switch(A){case Pi:r.blendFuncSeparate(1,771,1,771);break;case za:r.blendFunc(1,1);break;case Fa:r.blendFuncSeparate(0,769,0,1);break;case Na:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}else switch(A){case Pi:r.blendFuncSeparate(770,771,1,771);break;case za:r.blendFunc(770,1);break;case Fa:r.blendFuncSeparate(0,769,0,1);break;case Na:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",A);break}y=null,E=null,v=null,L=null,p=A,P=St}return}ut=ut||ot,Mt=Mt||rt,it=it||vt,(ot!==x||ut!==S)&&(r.blendEquationSeparate(nt[ot],nt[ut]),x=ot,S=ut),(rt!==y||vt!==E||Mt!==v||it!==L)&&(r.blendFuncSeparate(It[rt],It[vt],It[Mt],It[it]),y=rt,E=vt,v=Mt,L=it),p=A,P=null}function Z(A,ot){A.side===Fi?W(2884):bt(2884);let rt=A.side===Ge;ot&&(rt=!rt),tt(rt),A.blending===Pi&&A.transparent===!1?G(Cn):G(A.blending,A.blendEquation,A.blendSrc,A.blendDst,A.blendEquationAlpha,A.blendSrcAlpha,A.blendDstAlpha,A.premultipliedAlpha),l.setFunc(A.depthFunc),l.setTest(A.depthTest),l.setMask(A.depthWrite),a.setMask(A.colorWrite);const vt=A.stencilWrite;c.setTest(vt),vt&&(c.setMask(A.stencilWriteMask),c.setFunc(A.stencilFunc,A.stencilRef,A.stencilFuncMask),c.setOp(A.stencilFail,A.stencilZFail,A.stencilZPass)),Et(A.polygonOffset,A.polygonOffsetFactor,A.polygonOffsetUnits),A.alphaToCoverage===!0?bt(32926):W(32926)}function tt(A){N!==A&&(A?r.frontFace(2304):r.frontFace(2305),N=A)}function dt(A){A!==Yh?(bt(2884),A!==et&&(A===ka?r.cullFace(1029):A===Jh?r.cullFace(1028):r.cullFace(1032))):W(2884),et=A}function lt(A){A!==z&&(R&&r.lineWidth(A),z=A)}function Et(A,ot,rt){A?(bt(32823),(_!==ot||C!==rt)&&(r.polygonOffset(ot,rt),_=ot,C=rt)):W(32823)}function yt(A){A?bt(3089):W(3089)}function gt(A){A===void 0&&(A=33984+q-1),O!==A&&(r.activeTexture(A),O=A)}function $t(A,ot){O===null&&gt();let rt=D[O];rt===void 0&&(rt={type:void 0,texture:void 0},D[O]=rt),(rt.type!==A||rt.texture!==ot)&&(r.bindTexture(A,ot||zt[A]),rt.type=A,rt.texture=ot)}function Xt(){const A=D[O];A!==void 0&&A.type!==void 0&&(r.bindTexture(A.type,null),A.type=void 0,A.texture=void 0)}function b(){try{r.compressedTexImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function M(){try{r.texSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function H(){try{r.texSubImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function $(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function at(){try{r.texStorage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function ht(){try{r.texStorage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function _t(){try{r.texImage2D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function V(){try{r.texImage3D.apply(r,arguments)}catch(A){console.error("THREE.WebGLState:",A)}}function Lt(A){K.equals(A)===!1&&(r.scissor(A.x,A.y,A.z,A.w),K.copy(A))}function Pt(A){Q.equals(A)===!1&&(r.viewport(A.x,A.y,A.z,A.w),Q.copy(A))}function ft(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),n===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},O=null,D={},u={},d=new WeakMap,f=[],m=null,g=!1,p=null,x=null,y=null,E=null,S=null,v=null,L=null,P=!1,N=null,et=null,z=null,_=null,C=null,K.set(0,0,r.canvas.width,r.canvas.height),Q.set(0,0,r.canvas.width,r.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:bt,disable:W,bindFramebuffer:Ot,drawBuffers:At,useProgram:Ct,setBlending:G,setMaterial:Z,setFlipSided:tt,setCullFace:dt,setLineWidth:lt,setPolygonOffset:Et,setScissorTest:yt,activeTexture:gt,bindTexture:$t,unbindTexture:Xt,compressedTexImage2D:b,texImage2D:_t,texImage3D:V,texStorage2D:at,texStorage3D:ht,texSubImage2D:M,texSubImage3D:H,compressedTexSubImage2D:$,scissor:Lt,viewport:Pt,reset:ft}}function qg(r,t,e,n,i,s,o){const a=i.isWebGL2,l=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,u=i.maxSamples,d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,f=/OculusBrowser/g.test(navigator.userAgent),m=new WeakMap;let g;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas!="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,M){return x?new OffscreenCanvas(b,M):yr("canvas")}function E(b,M,H,$){let at=1;if((b.width>$||b.height>$)&&(at=$/Math.max(b.width,b.height)),at<1||M===!0)if(typeof HTMLImageElement!="undefined"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement!="undefined"&&b instanceof HTMLCanvasElement||typeof ImageBitmap!="undefined"&&b instanceof ImageBitmap){const ht=M?bs:Math.floor,_t=ht(at*b.width),V=ht(at*b.height);g===void 0&&(g=y(_t,V));const Lt=H?y(_t,V):g;return Lt.width=_t,Lt.height=V,Lt.getContext("2d").drawImage(b,0,0,_t,V),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+_t+"x"+V+")."),Lt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function S(b){return Zo(b.width)&&Zo(b.height)}function v(b){return a?!1:b.wrapS!==He||b.wrapT!==He||b.minFilter!==ce&&b.minFilter!==Se}function L(b,M){return b.generateMipmaps&&M&&b.minFilter!==ce&&b.minFilter!==Se}function P(b){r.generateMipmap(b)}function N(b,M,H,$,at=!1){if(a===!1)return M;if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ht=M;return M===6403&&(H===5126&&(ht=33326),H===5131&&(ht=33325),H===5121&&(ht=33321)),M===33319&&(H===5126&&(ht=33328),H===5131&&(ht=33327),H===5121&&(ht=33323)),M===6408&&(H===5126&&(ht=34836),H===5131&&(ht=34842),H===5121&&(ht=$===Yt&&at===!1?35907:32856),H===32819&&(ht=32854),H===32820&&(ht=32855)),(ht===33325||ht===33326||ht===33327||ht===33328||ht===34842||ht===34836)&&t.get("EXT_color_buffer_float"),ht}function et(b,M,H){return L(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==ce&&b.minFilter!==Se?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function z(b){return b===ce||b===Ua||b===Ha?9728:9729}function _(b){const M=b.target;M.removeEventListener("dispose",_),q(M),M.isVideoTexture&&m.delete(M)}function C(b){const M=b.target;M.removeEventListener("dispose",C),B(M)}function q(b){const M=n.get(b);if(M.__webglInit===void 0)return;const H=b.source,$=p.get(H);if($){const at=$[M.__cacheKey];at.usedTimes--,at.usedTimes===0&&R(b),Object.keys($).length===0&&p.delete(H)}n.remove(b)}function R(b){const M=n.get(b);r.deleteTexture(M.__webglTexture);const H=b.source,$=p.get(H);delete $[M.__cacheKey],o.memory.textures--}function B(b){const M=b.texture,H=n.get(b),$=n.get(M);if($.__webglTexture!==void 0&&(r.deleteTexture($.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let at=0;at<6;at++)r.deleteFramebuffer(H.__webglFramebuffer[at]),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer[at]);else r.deleteFramebuffer(H.__webglFramebuffer),H.__webglDepthbuffer&&r.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&r.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer&&r.deleteRenderbuffer(H.__webglColorRenderbuffer),H.__webglDepthRenderbuffer&&r.deleteRenderbuffer(H.__webglDepthRenderbuffer);if(b.isWebGLMultipleRenderTargets)for(let at=0,ht=M.length;at<ht;at++){const _t=n.get(M[at]);_t.__webglTexture&&(r.deleteTexture(_t.__webglTexture),o.memory.textures--),n.remove(M[at])}n.remove(M),n.remove(b)}let F=0;function O(){F=0}function D(){const b=F;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),F+=1,b}function X(b){const M=[];return M.push(b.wrapS),M.push(b.wrapT),M.push(b.magFilter),M.push(b.minFilter),M.push(b.anisotropy),M.push(b.internalFormat),M.push(b.format),M.push(b.type),M.push(b.generateMipmaps),M.push(b.premultiplyAlpha),M.push(b.flipY),M.push(b.unpackAlignment),M.push(b.encoding),M.join()}function J(b,M){const H=n.get(b);if(b.isVideoTexture&&$t(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const $=b.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{At(H,b,M);return}}e.activeTexture(33984+M),e.bindTexture(3553,H.__webglTexture)}function K(b,M){const H=n.get(b);if(b.version>0&&H.__version!==b.version){At(H,b,M);return}e.activeTexture(33984+M),e.bindTexture(35866,H.__webglTexture)}function Q(b,M){const H=n.get(b);if(b.version>0&&H.__version!==b.version){At(H,b,M);return}e.activeTexture(33984+M),e.bindTexture(32879,H.__webglTexture)}function ct(b,M){const H=n.get(b);if(b.version>0&&H.__version!==b.version){Ct(H,b,M);return}e.activeTexture(33984+M),e.bindTexture(34067,H.__webglTexture)}const zt={[qo]:10497,[He]:33071,[Xo]:33648},bt={[ce]:9728,[Ua]:9984,[Ha]:9986,[Se]:9729,[Su]:9985,[ks]:9987};function W(b,M,H){if(H?(r.texParameteri(b,10242,zt[M.wrapS]),r.texParameteri(b,10243,zt[M.wrapT]),(b===32879||b===35866)&&r.texParameteri(b,32882,zt[M.wrapR]),r.texParameteri(b,10240,bt[M.magFilter]),r.texParameteri(b,10241,bt[M.minFilter])):(r.texParameteri(b,10242,33071),r.texParameteri(b,10243,33071),(b===32879||b===35866)&&r.texParameteri(b,32882,33071),(M.wrapS!==He||M.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(b,10240,z(M.magFilter)),r.texParameteri(b,10241,z(M.minFilter)),M.minFilter!==ce&&M.minFilter!==Se&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const $=t.get("EXT_texture_filter_anisotropic");if(M.type===Wn&&t.has("OES_texture_float_linear")===!1||a===!1&&M.type===Di&&t.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(r.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ot(b,M){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",_));const $=M.source;let at=p.get($);at===void 0&&(at={},p.set($,at));const ht=X(M);if(ht!==b.__cacheKey){at[ht]===void 0&&(at[ht]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,H=!0),at[ht].usedTimes++;const _t=at[b.__cacheKey];_t!==void 0&&(at[b.__cacheKey].usedTimes--,_t.usedTimes===0&&R(M)),b.__cacheKey=ht,b.__webglTexture=at[ht].texture}return H}function At(b,M,H){let $=3553;M.isDataArrayTexture&&($=35866),M.isData3DTexture&&($=32879);const at=Ot(b,M),ht=M.source;if(e.activeTexture(33984+H),e.bindTexture($,b.__webglTexture),ht.version!==ht.__currentVersion||at===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const _t=v(M)&&S(M.image)===!1;let V=E(M.image,_t,!1,h);V=Xt(M,V);const Lt=S(V)||a,Pt=s.convert(M.format,M.encoding);let ft=s.convert(M.type),A=N(M.internalFormat,Pt,ft,M.encoding,M.isVideoTexture);W($,M,Lt);let ot;const rt=M.mipmaps,vt=a&&M.isVideoTexture!==!0,ut=b.__version===void 0,Mt=et(M,V,Lt);if(M.isDepthTexture)A=6402,a?M.type===Wn?A=36012:M.type===ps?A=33190:M.type===Ii?A=35056:A=33189:M.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===jn&&A===6402&&M.type!==gr&&M.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=gr,ft=s.convert(M.type)),M.format===Oi&&A===6402&&(A=34041,M.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Ii,ft=s.convert(M.type))),vt&&ut?e.texStorage2D(3553,1,A,V.width,V.height):e.texImage2D(3553,0,A,V.width,V.height,0,Pt,ft,null);else if(M.isDataTexture)if(rt.length>0&&Lt){vt&&ut&&e.texStorage2D(3553,Mt,A,rt[0].width,rt[0].height);for(let it=0,St=rt.length;it<St;it++)ot=rt[it],vt?e.texSubImage2D(3553,it,0,0,ot.width,ot.height,Pt,ft,ot.data):e.texImage2D(3553,it,A,ot.width,ot.height,0,Pt,ft,ot.data);M.generateMipmaps=!1}else vt?(ut&&e.texStorage2D(3553,Mt,A,V.width,V.height),e.texSubImage2D(3553,0,0,0,V.width,V.height,Pt,ft,V.data)):e.texImage2D(3553,0,A,V.width,V.height,0,Pt,ft,V.data);else if(M.isCompressedTexture){vt&&ut&&e.texStorage2D(3553,Mt,A,rt[0].width,rt[0].height);for(let it=0,St=rt.length;it<St;it++)ot=rt[it],M.format!==Ve?Pt!==null?vt?e.compressedTexSubImage2D(3553,it,0,0,ot.width,ot.height,Pt,ot.data):e.compressedTexImage2D(3553,it,A,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):vt?e.texSubImage2D(3553,it,0,0,ot.width,ot.height,Pt,ft,ot.data):e.texImage2D(3553,it,A,ot.width,ot.height,0,Pt,ft,ot.data)}else if(M.isDataArrayTexture)vt?(ut&&e.texStorage3D(35866,Mt,A,V.width,V.height,V.depth),e.texSubImage3D(35866,0,0,0,0,V.width,V.height,V.depth,Pt,ft,V.data)):e.texImage3D(35866,0,A,V.width,V.height,V.depth,0,Pt,ft,V.data);else if(M.isData3DTexture)vt?(ut&&e.texStorage3D(32879,Mt,A,V.width,V.height,V.depth),e.texSubImage3D(32879,0,0,0,0,V.width,V.height,V.depth,Pt,ft,V.data)):e.texImage3D(32879,0,A,V.width,V.height,V.depth,0,Pt,ft,V.data);else if(M.isFramebufferTexture)vt&&ut?e.texStorage2D(3553,Mt,A,V.width,V.height):e.texImage2D(3553,0,A,V.width,V.height,0,Pt,ft,null);else if(rt.length>0&&Lt){vt&&ut&&e.texStorage2D(3553,Mt,A,rt[0].width,rt[0].height);for(let it=0,St=rt.length;it<St;it++)ot=rt[it],vt?e.texSubImage2D(3553,it,0,0,Pt,ft,ot):e.texImage2D(3553,it,A,Pt,ft,ot);M.generateMipmaps=!1}else vt?(ut&&e.texStorage2D(3553,Mt,A,V.width,V.height),e.texSubImage2D(3553,0,0,0,Pt,ft,V)):e.texImage2D(3553,0,A,Pt,ft,V);L(M,Lt)&&P($),ht.__currentVersion=ht.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function Ct(b,M,H){if(M.image.length!==6)return;const $=Ot(b,M),at=M.source;if(e.activeTexture(33984+H),e.bindTexture(34067,b.__webglTexture),at.version!==at.__currentVersion||$===!0){r.pixelStorei(37440,M.flipY),r.pixelStorei(37441,M.premultiplyAlpha),r.pixelStorei(3317,M.unpackAlignment),r.pixelStorei(37443,0);const ht=M.isCompressedTexture||M.image[0].isCompressedTexture,_t=M.image[0]&&M.image[0].isDataTexture,V=[];for(let it=0;it<6;it++)!ht&&!_t?V[it]=E(M.image[it],!1,!0,c):V[it]=_t?M.image[it].image:M.image[it],V[it]=Xt(M,V[it]);const Lt=V[0],Pt=S(Lt)||a,ft=s.convert(M.format,M.encoding),A=s.convert(M.type),ot=N(M.internalFormat,ft,A,M.encoding),rt=a&&M.isVideoTexture!==!0,vt=b.__version===void 0;let ut=et(M,Lt,Pt);W(34067,M,Pt);let Mt;if(ht){rt&&vt&&e.texStorage2D(34067,ut,ot,Lt.width,Lt.height);for(let it=0;it<6;it++){Mt=V[it].mipmaps;for(let St=0;St<Mt.length;St++){const jt=Mt[St];M.format!==Ve?ft!==null?rt?e.compressedTexSubImage2D(34069+it,St,0,0,jt.width,jt.height,ft,jt.data):e.compressedTexImage2D(34069+it,St,ot,jt.width,jt.height,0,jt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?e.texSubImage2D(34069+it,St,0,0,jt.width,jt.height,ft,A,jt.data):e.texImage2D(34069+it,St,ot,jt.width,jt.height,0,ft,A,jt.data)}}}else{Mt=M.mipmaps,rt&&vt&&(Mt.length>0&&ut++,e.texStorage2D(34067,ut,ot,V[0].width,V[0].height));for(let it=0;it<6;it++)if(_t){rt?e.texSubImage2D(34069+it,0,0,0,V[it].width,V[it].height,ft,A,V[it].data):e.texImage2D(34069+it,0,ot,V[it].width,V[it].height,0,ft,A,V[it].data);for(let St=0;St<Mt.length;St++){const Ft=Mt[St].image[it].image;rt?e.texSubImage2D(34069+it,St+1,0,0,Ft.width,Ft.height,ft,A,Ft.data):e.texImage2D(34069+it,St+1,ot,Ft.width,Ft.height,0,ft,A,Ft.data)}}else{rt?e.texSubImage2D(34069+it,0,0,0,ft,A,V[it]):e.texImage2D(34069+it,0,ot,ft,A,V[it]);for(let St=0;St<Mt.length;St++){const jt=Mt[St];rt?e.texSubImage2D(34069+it,St+1,0,0,ft,A,jt.image[it]):e.texImage2D(34069+it,St+1,ot,ft,A,jt.image[it])}}}L(M,Pt)&&P(34067),at.__currentVersion=at.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function nt(b,M,H,$,at){const ht=s.convert(H.format,H.encoding),_t=s.convert(H.type),V=N(H.internalFormat,ht,_t,H.encoding);n.get(M).__hasExternalTextures||(at===32879||at===35866?e.texImage3D(at,0,V,M.width,M.height,M.depth,0,ht,_t,null):e.texImage2D(at,0,V,M.width,M.height,0,ht,_t,null)),e.bindFramebuffer(36160,b),gt(M)?d.framebufferTexture2DMultisampleEXT(36160,$,at,n.get(H).__webglTexture,0,yt(M)):r.framebufferTexture2D(36160,$,at,n.get(H).__webglTexture,0),e.bindFramebuffer(36160,null)}function It(b,M,H){if(r.bindRenderbuffer(36161,b),M.depthBuffer&&!M.stencilBuffer){let $=33189;if(H||gt(M)){const at=M.depthTexture;at&&at.isDepthTexture&&(at.type===Wn?$=36012:at.type===ps&&($=33190));const ht=yt(M);gt(M)?d.renderbufferStorageMultisampleEXT(36161,ht,$,M.width,M.height):r.renderbufferStorageMultisample(36161,ht,$,M.width,M.height)}else r.renderbufferStorage(36161,$,M.width,M.height);r.framebufferRenderbuffer(36160,36096,36161,b)}else if(M.depthBuffer&&M.stencilBuffer){const $=yt(M);H&&gt(M)===!1?r.renderbufferStorageMultisample(36161,$,35056,M.width,M.height):gt(M)?d.renderbufferStorageMultisampleEXT(36161,$,35056,M.width,M.height):r.renderbufferStorage(36161,34041,M.width,M.height),r.framebufferRenderbuffer(36160,33306,36161,b)}else{const $=M.isWebGLMultipleRenderTargets===!0?M.texture[0]:M.texture,at=s.convert($.format,$.encoding),ht=s.convert($.type),_t=N($.internalFormat,at,ht,$.encoding),V=yt(M);H&&gt(M)===!1?r.renderbufferStorageMultisample(36161,V,_t,M.width,M.height):gt(M)?d.renderbufferStorageMultisampleEXT(36161,V,_t,M.width,M.height):r.renderbufferStorage(36161,_t,M.width,M.height)}r.bindRenderbuffer(36161,null)}function G(b,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,b),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),J(M.depthTexture,0);const $=n.get(M.depthTexture).__webglTexture,at=yt(M);if(M.depthTexture.format===jn)gt(M)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,$,0,at):r.framebufferTexture2D(36160,36096,3553,$,0);else if(M.depthTexture.format===Oi)gt(M)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,$,0,at):r.framebufferTexture2D(36160,33306,3553,$,0);else throw new Error("Unknown depthTexture format")}function Z(b){const M=n.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");G(M.__webglFramebuffer,b)}else if(H){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)e.bindFramebuffer(36160,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]=r.createRenderbuffer(),It(M.__webglDepthbuffer[$],b,!1)}else e.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),It(M.__webglDepthbuffer,b,!1);e.bindFramebuffer(36160,null)}function tt(b,M,H){const $=n.get(b);M!==void 0&&nt($.__webglFramebuffer,b,b.texture,36064,3553),H!==void 0&&Z(b)}function dt(b){const M=b.texture,H=n.get(b),$=n.get(M);b.addEventListener("dispose",C),b.isWebGLMultipleRenderTargets!==!0&&($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=M.version,o.memory.textures++);const at=b.isWebGLCubeRenderTarget===!0,ht=b.isWebGLMultipleRenderTargets===!0,_t=S(b)||a;if(at){H.__webglFramebuffer=[];for(let V=0;V<6;V++)H.__webglFramebuffer[V]=r.createFramebuffer()}else if(H.__webglFramebuffer=r.createFramebuffer(),ht)if(i.drawBuffers){const V=b.texture;for(let Lt=0,Pt=V.length;Lt<Pt;Lt++){const ft=n.get(V[Lt]);ft.__webglTexture===void 0&&(ft.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");else if(a&&b.samples>0&&gt(b)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=r.createRenderbuffer(),r.bindRenderbuffer(36161,H.__webglColorRenderbuffer);const V=s.convert(M.format,M.encoding),Lt=s.convert(M.type),Pt=N(M.internalFormat,V,Lt,M.encoding),ft=yt(b);r.renderbufferStorageMultisample(36161,ft,Pt,b.width,b.height),e.bindFramebuffer(36160,H.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064,36161,H.__webglColorRenderbuffer),r.bindRenderbuffer(36161,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),It(H.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(36160,null)}if(at){e.bindTexture(34067,$.__webglTexture),W(34067,M,_t);for(let V=0;V<6;V++)nt(H.__webglFramebuffer[V],b,M,36064,34069+V);L(M,_t)&&P(34067),e.unbindTexture()}else if(ht){const V=b.texture;for(let Lt=0,Pt=V.length;Lt<Pt;Lt++){const ft=V[Lt],A=n.get(ft);e.bindTexture(3553,A.__webglTexture),W(3553,ft,_t),nt(H.__webglFramebuffer,b,ft,36064+Lt,3553),L(ft,_t)&&P(3553)}e.unbindTexture()}else{let V=3553;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?V=b.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(V,$.__webglTexture),W(V,M,_t),nt(H.__webglFramebuffer,b,M,36064,V),L(M,_t)&&P(V),e.unbindTexture()}b.depthBuffer&&Z(b)}function lt(b){const M=S(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0,at=H.length;$<at;$++){const ht=H[$];if(L(ht,M)){const _t=b.isWebGLCubeRenderTarget?34067:3553,V=n.get(ht).__webglTexture;e.bindTexture(_t,V),P(_t),e.unbindTexture()}}}function Et(b){if(a&&b.samples>0&&gt(b)===!1){const M=b.width,H=b.height;let $=16384;const at=[36064],ht=b.stencilBuffer?33306:36096;b.depthBuffer&&at.push(ht);const _t=n.get(b),V=_t.__ignoreDepthValues!==void 0?_t.__ignoreDepthValues:!1;V===!1&&(b.depthBuffer&&($|=256),b.stencilBuffer&&($|=1024)),e.bindFramebuffer(36008,_t.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,_t.__webglFramebuffer),V===!0&&(r.invalidateFramebuffer(36008,[ht]),r.invalidateFramebuffer(36009,[ht])),r.blitFramebuffer(0,0,M,H,0,0,M,H,$,9728),f&&r.invalidateFramebuffer(36008,at),e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,_t.__webglMultisampledFramebuffer)}}function yt(b){return Math.min(u,b.samples)}function gt(b){const M=n.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function $t(b){const M=o.render.frame;m.get(b)!==M&&(m.set(b,M),b.update())}function Xt(b,M){const H=b.encoding,$=b.format,at=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===jo||H!==mn&&(H===Yt?a===!1?t.has("EXT_sRGB")===!0&&$===Ve?(b.format=jo,b.minFilter=Se,b.generateMipmaps=!1):M=$n.sRGBToLinear(M):($!==Ve||at!==Yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",H)),M}this.allocateTextureUnit=D,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=K,this.setTexture3D=Q,this.setTextureCube=ct,this.rebindTextures=tt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Et,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=gt}function Xg(r,t,e){const n=e.isWebGL2;function i(s,o=null){let a;if(s===Yn)return 5121;if(s===Cu)return 32819;if(s===Lu)return 32820;if(s===Eu)return 5120;if(s===Tu)return 5122;if(s===gr)return 5123;if(s===Au)return 5124;if(s===ps)return 5125;if(s===Wn)return 5126;if(s===Di)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ru)return 6406;if(s===Ve)return 6408;if(s===Du)return 6409;if(s===Iu)return 6410;if(s===jn)return 6402;if(s===Oi)return 34041;if(s===ku)return 6403;if(s===Pu)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===jo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===zu)return 36244;if(s===Fu)return 33319;if(s===Nu)return 33320;if(s===Bu)return 36249;if(s===Js||s===$s||s===Ks||s===Qs)if(o===Yt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Js)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ks)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Js)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$s)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ks)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Va||s===Ga||s===Wa||s===qa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Va)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ga)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Wa)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ou)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Xa||s===ja)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Xa)return o===Yt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ja)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Za||s===Ya||s===Ja||s===$a||s===Ka||s===Qa||s===tl||s===el||s===nl||s===il||s===rl||s===sl||s===ol||s===al)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Za)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ya)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ja)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===$a)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ka)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Qa)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===tl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===el)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===nl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===il)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===rl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===sl)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ol)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===al)return o===Yt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ll)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===ll)return o===Yt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Ii)return n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:i}}class Yc extends ve{constructor(t=[]){super();this.cameras=t}}Yc.prototype.isArrayCamera=!0;class Ci extends Gt{constructor(){super();this.type="Group"}}Ci.prototype.isGroup=!0;const jg={type:"move"};class Lo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred")if(a!==null&&(i=e.getPose(t.targetRaySpace,n),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jg))),c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n);if(c.joints[g.jointName]===void 0){const y=new Ci;y.matrixAutoUpdate=!1,y.visible=!1,c.joints[g.jointName]=y,c.add(y)}const x=c.joints[g.jointName];p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}}class Jc extends he{constructor(t,e,n,i,s,o,a,l,c,h){if(h=h!==void 0?h:jn,h!==jn&&h!==Oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===jn&&(n=gr),n===void 0&&h===Oi&&(n=Ii);super(null,i,s,o,a,l,h,n,c);this.image={width:t,height:e},this.magFilter=a!==void 0?a:ce,this.minFilter=l!==void 0?l:ce,this.flipY=!1,this.generateMipmaps=!1}}Jc.prototype.isDepthTexture=!0;class Zg extends Jn{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=null,c=null,h=null,u=null,d=null;const f=e.getContextAttributes();let m=null,g=null;const p=[],x=new Map,y=new ve;y.layers.enable(1),y.viewport=new qt;const E=new ve;E.layers.enable(2),E.viewport=new qt;const S=[y,E],v=new Yc;v.layers.enable(1),v.layers.enable(2);let L=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let X=p[D];return X===void 0&&(X=new Lo,p[D]=X),X.getTargetRaySpace()},this.getControllerGrip=function(D){let X=p[D];return X===void 0&&(X=new Lo,p[D]=X),X.getGripSpace()},this.getHand=function(D){let X=p[D];return X===void 0&&(X=new Lo,p[D]=X),X.getHandSpace()};function N(D){const X=x.get(D.inputSource);X&&X.dispatchEvent({type:D.type,data:D.inputSource})}function et(){x.forEach(function(D,X){D.disconnect(X)}),x.clear(),L=null,P=null,t.setRenderTarget(m),u=null,h=null,c=null,i=null,g=null,O.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){s=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){a=D,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return c},this.getFrame=function(){return d},this.getSession=function(){return i},this.setSession=async function(D){if(i=D,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",et),i.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const X={antialias:i.renderState.layers===void 0?f.antialias:!0,alpha:f.alpha,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,e,X),i.updateRenderState({baseLayer:u}),g=new Re(u.framebufferWidth,u.framebufferHeight,{format:Ve,type:Yn,encoding:t.outputEncoding})}else{let X=null,J=null,K=null;f.depth&&(K=f.stencil?35056:33190,X=f.stencil?Oi:jn,J=f.stencil?Ii:gr);const Q={colorFormat:t.outputEncoding===Yt?35907:32856,depthFormat:K,scaleFactor:s};c=new XRWebGLBinding(i,e),h=c.createProjectionLayer(Q),i.updateRenderState({layers:[h]}),g=new Re(h.textureWidth,h.textureHeight,{format:Ve,type:Yn,depthTexture:new Jc(h.textureWidth,h.textureHeight,J,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:f.stencil,encoding:t.outputEncoding,samples:f.antialias?4:0});const ct=t.properties.get(g);ct.__ignoreDepthValues=h.ignoreDepthValues}g.isXRRenderTarget=!0,this.setFoveation(1),o=await i.requestReferenceSpace(a),O.setContext(i),O.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function z(D){const X=i.inputSources;for(let J=0;J<p.length;J++)x.set(X[J],p[J]);for(let J=0;J<D.removed.length;J++){const K=D.removed[J],Q=x.get(K);Q&&(Q.dispatchEvent({type:"disconnected",data:K}),x.delete(K))}for(let J=0;J<D.added.length;J++){const K=D.added[J],Q=x.get(K);Q&&Q.dispatchEvent({type:"connected",data:K})}}const _=new T,C=new T;function q(D,X,J){_.setFromMatrixPosition(X.matrixWorld),C.setFromMatrixPosition(J.matrixWorld);const K=_.distanceTo(C),Q=X.projectionMatrix.elements,ct=J.projectionMatrix.elements,zt=Q[14]/(Q[10]-1),bt=Q[14]/(Q[10]+1),W=(Q[9]+1)/Q[5],Ot=(Q[9]-1)/Q[5],At=(Q[8]-1)/Q[0],Ct=(ct[8]+1)/ct[0],nt=zt*At,It=zt*Ct,G=K/(-At+Ct),Z=G*-At;X.matrixWorld.decompose(D.position,D.quaternion,D.scale),D.translateX(Z),D.translateZ(G),D.matrixWorld.compose(D.position,D.quaternion,D.scale),D.matrixWorldInverse.copy(D.matrixWorld).invert();const tt=zt+G,dt=bt+G,lt=nt-Z,Et=It+(K-Z),yt=W*bt/dt*tt,gt=Ot*bt/dt*tt;D.projectionMatrix.makePerspective(lt,Et,yt,gt,tt,dt)}function R(D,X){X===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(X.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(i===null)return;v.near=E.near=y.near=D.near,v.far=E.far=y.far=D.far,(L!==v.near||P!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),L=v.near,P=v.far);const X=D.parent,J=v.cameras;R(v,X);for(let Q=0;Q<J.length;Q++)R(J[Q],X);v.matrixWorld.decompose(v.position,v.quaternion,v.scale),D.position.copy(v.position),D.quaternion.copy(v.quaternion),D.scale.copy(v.scale),D.matrix.copy(v.matrix),D.matrixWorld.copy(v.matrixWorld);const K=D.children;for(let Q=0,ct=K.length;Q<ct;Q++)K[Q].updateMatrixWorld(!0);J.length===2?q(v,y,E):v.projectionMatrix.copy(y.projectionMatrix)},this.getCamera=function(){return v},this.getFoveation=function(){if(h!==null)return h.fixedFoveation;if(u!==null)return u.fixedFoveation},this.setFoveation=function(D){h!==null&&(h.fixedFoveation=D),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=D)};let B=null;function F(D,X){if(l=X.getViewerPose(o),d=X,l!==null){const K=l.views;u!==null&&(t.setRenderTargetFramebuffer(g,u.framebuffer),t.setRenderTarget(g));let Q=!1;K.length!==v.cameras.length&&(v.cameras.length=0,Q=!0);for(let ct=0;ct<K.length;ct++){const zt=K[ct];let bt=null;if(u!==null)bt=u.getViewport(zt);else{const Ot=c.getViewSubImage(h,zt);bt=Ot.viewport,ct===0&&(t.setRenderTargetTextures(g,Ot.colorTexture,h.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(g))}const W=S[ct];W.matrix.fromArray(zt.transform.matrix),W.projectionMatrix.fromArray(zt.projectionMatrix),W.viewport.set(bt.x,bt.y,bt.width,bt.height),ct===0&&v.matrix.copy(W.matrix),Q===!0&&v.cameras.push(W)}}const J=i.inputSources;for(let K=0;K<p.length;K++){const Q=p[K],ct=J[K];Q.update(ct,X,o)}B&&B(D,X),d=null}const O=new Uc;O.setAnimationLoop(F),this.setAnimationLoop=function(D){B=D},this.dispose=function(){}}}function Yg(r,t){function e(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,x,y,E){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(g,p):p.isMeshToonMaterial?(i(g,p),h(g,p)):p.isMeshPhongMaterial?(i(g,p),c(g,p)):p.isMeshStandardMaterial?(i(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,E)):p.isMeshMatcapMaterial?(i(g,p),f(g,p)):p.isMeshDepthMaterial?i(g,p):p.isMeshDistanceMaterial?(i(g,p),m(g,p)):p.isMeshNormalMaterial?i(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?a(g,p,x,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===Ge&&(g.bumpScale.value*=-1)),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===Ge&&g.normalScale.value.negate()),p.specularMap&&(g.specularMap.value=p.specularMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(g.envMap.value=x,g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const S=r.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*S}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uvTransform.value.copy(y.matrix));let E;p.aoMap?E=p.aoMap:p.lightMap&&(E=p.lightMap),E!==void 0&&(E.isWebGLRenderTarget&&(E=E.texture),E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uv2Transform.value.copy(E.matrix))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function a(g,p,x,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*x,g.scale.value=y*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let E;p.map?E=p.map:p.alphaMap&&(E=p.alphaMap),E!==void 0&&(E.matrixAutoUpdate===!0&&E.updateMatrix(),g.uvTransform.value.copy(E.matrix))}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),g.uvTransform.value.copy(x.matrix))}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function h(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,x){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Ge&&g.clearcoatNormalScale.value.negate())),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap)}function f(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function Jg(){const r=yr("canvas");return r.style.display="block",r}function Wt(r={}){const t=r.canvas!==void 0?r.canvas:Jg(),e=r.context!==void 0?r.context:null,n=r.depth!==void 0?r.depth:!0,i=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,a=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,l=r.powerPreference!==void 0?r.powerPreference:"default",c=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let h;r.context!==void 0?h=e.getContextAttributes().alpha:h=r.alpha!==void 0?r.alpha:!1;let u=null,d=null;const f=[],m=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=mn,this.physicallyCorrectLights=!1,this.toneMapping=fn,this.toneMappingExposure=1;const g=this;let p=!1,x=0,y=0,E=null,S=-1,v=null;const L=new qt,P=new qt;let N=null,et=t.width,z=t.height,_=1,C=null,q=null;const R=new qt(0,0,et,z),B=new qt(0,0,et,z);let F=!1;const O=new Ns;let D=!1,X=!1,J=null;const K=new xt,Q=new Y,ct=new T,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function bt(){return E===null?_:1}let W=e;function Ot(w,I){for(let U=0;U<w.length;U++){const k=w[U],j=t.getContext(k,I);if(j!==null)return j}return null}try{const w={alpha:!0,depth:n,stencil:i,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ra}`),t.addEventListener("webglcontextlost",A,!1),t.addEventListener("webglcontextrestored",ot,!1),W===null){const I=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&I.shift(),W=Ot(I,w),W===null)throw Ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}W.getShaderPrecisionFormat===void 0&&(W.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let At,Ct,nt,It,G,Z,tt,dt,lt,Et,yt,gt,$t,Xt,b,M,H,$,at,ht,_t,V,Lt;function Pt(){At=new pm(W),Ct=new lm(W,At,r),At.init(Ct),V=new Xg(W,At,Ct),nt=new Wg(W,At,Ct),It=new xm(W),G=new Ig,Z=new qg(W,At,nt,G,Ct,V,It),tt=new hm(g),dt=new fm(g),lt=new Rd(W,Ct),Lt=new om(W,At,lt,Ct),Et=new mm(W,lt,It,Lt),yt=new Mm(W,Et,lt,It),at=new vm(W,Ct,Z),M=new cm(G),gt=new Dg(g,tt,dt,At,Ct,Lt,M),$t=new Yg(g,G),Xt=new zg,b=new Hg(At,Ct),$=new sm(g,tt,nt,yt,h,o),H=new Zc(g,yt,Ct),ht=new am(W,At,It,Ct),_t=new gm(W,At,It,Ct),It.programs=gt.programs,g.capabilities=Ct,g.extensions=At,g.properties=G,g.renderLists=Xt,g.shadowMap=H,g.state=nt,g.info=It}Pt();const ft=new Zg(g,W);this.xr=ft,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const w=At.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=At.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return _},this.setPixelRatio=function(w){w!==void 0&&(_=w,this.setSize(et,z,!1))},this.getSize=function(w){return w.set(et,z)},this.setSize=function(w,I,U){if(ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}et=w,z=I,t.width=Math.floor(w*_),t.height=Math.floor(I*_),U!==!1&&(t.style.width=w+"px",t.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(et*_,z*_).floor()},this.setDrawingBufferSize=function(w,I,U){et=w,z=I,_=U,t.width=Math.floor(w*U),t.height=Math.floor(I*U),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(L)},this.getViewport=function(w){return w.copy(R)},this.setViewport=function(w,I,U,k){w.isVector4?R.set(w.x,w.y,w.z,w.w):R.set(w,I,U,k),nt.viewport(L.copy(R).multiplyScalar(_).floor())},this.getScissor=function(w){return w.copy(B)},this.setScissor=function(w,I,U,k){w.isVector4?B.set(w.x,w.y,w.z,w.w):B.set(w,I,U,k),nt.scissor(P.copy(B).multiplyScalar(_).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(w){nt.setScissorTest(F=w)},this.setOpaqueSort=function(w){C=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(w=!0,I=!0,U=!0){let k=0;w&&(k|=16384),I&&(k|=256),U&&(k|=1024),W.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",A,!1),t.removeEventListener("webglcontextrestored",ot,!1),Xt.dispose(),b.dispose(),G.dispose(),tt.dispose(),dt.dispose(),yt.dispose(),Lt.dispose(),gt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",St),ft.removeEventListener("sessionend",jt),J&&(J.dispose(),J=null),Ft.stop()};function A(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ot(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=It.autoReset,I=H.enabled,U=H.autoUpdate,k=H.needsUpdate,j=H.type;Pt(),It.autoReset=w,H.enabled=I,H.autoUpdate=U,H.needsUpdate=k,H.type=j}function rt(w){const I=w.target;I.removeEventListener("dispose",rt),vt(I)}function vt(w){ut(w),G.remove(w)}function ut(w){const I=G.get(w).programs;I!==void 0&&(I.forEach(function(U){gt.releaseProgram(U)}),w.isShaderMaterial&&gt.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,U,k,j,wt){I===null&&(I=zt);const Tt=j.isMesh&&j.matrixWorld.determinant()<0,Dt=Vh(w,I,U,k,j);nt.setMaterial(k,Tt);let Rt=U.index;const Ht=U.attributes.position;if(Rt===null){if(Ht===void 0||Ht.count===0)return}else if(Rt.count===0)return;let Nt=1;k.wireframe===!0&&(Rt=Et.getWireframeAttribute(U),Nt=2),Lt.setup(j,k,Dt,U,Rt);let Bt,Qt=ht;Rt!==null&&(Bt=lt.get(Rt),Qt=_t,Qt.setIndex(Bt));const Fn=Rt!==null?Rt.count:Ht.count,ti=U.drawRange.start*Nt,ei=U.drawRange.count*Nt,Ye=wt!==null?wt.start*Nt:0,Ut=wt!==null?wt.count*Nt:1/0,ni=Math.max(ti,Ye),ee=Math.min(Fn,ti+ei,Ye+Ut)-1,Je=Math.max(0,ee-ni+1);if(Je!==0){if(j.isMesh)k.wireframe===!0?(nt.setLineWidth(k.wireframeLinewidth*bt()),Qt.setMode(1)):Qt.setMode(4);else if(j.isLine){let _n=k.linewidth;_n===void 0&&(_n=1),nt.setLineWidth(_n*bt()),j.isLineSegments?Qt.setMode(1):j.isLineLoop?Qt.setMode(2):Qt.setMode(3)}else j.isPoints?Qt.setMode(0):j.isSprite&&Qt.setMode(4);if(j.isInstancedMesh)Qt.renderInstances(ni,Je,j.count);else if(U.isInstancedBufferGeometry){const _n=Math.min(U.instanceCount,U._maxInstanceCount);Qt.renderInstances(ni,Je,_n)}else Qt.render(ni,Je)}},this.compile=function(w,I){d=b.get(w),d.init(),m.push(d),w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights(g.physicallyCorrectLights),w.traverse(function(U){const k=U.material;if(k)if(Array.isArray(k))for(let j=0;j<k.length;j++){const wt=k[j];js(wt,w,U)}else js(k,w,U)}),m.pop(),d=null};let Mt=null;function it(w){Mt&&Mt(w)}function St(){Ft.stop()}function jt(){Ft.start()}const Ft=new Uc;Ft.setAnimationLoop(it),typeof self!="undefined"&&Ft.setContext(self),this.setAnimationLoop=function(w){Mt=w,ft.setAnimationLoop(w),w===null?Ft.stop():Ft.start()},ft.addEventListener("sessionstart",St),ft.addEventListener("sessionend",jt),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.autoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(I),I=ft.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,I,E),d=b.get(w,m.length),d.init(),m.push(d),K.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),O.setFromProjectionMatrix(K),X=this.localClippingEnabled,D=M.init(this.clippingPlanes,X,I),u=Xt.get(w,f.length),u.init(),f.push(u),je(w,I,0,g.sortObjects),u.finish(),g.sortObjects===!0&&u.sort(C,q),D===!0&&M.beginShadows();const U=d.state.shadowsArray;if(H.render(U,w,I),D===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(u,w),d.setupLights(g.physicallyCorrectLights),I.isArrayCamera){const k=I.cameras;for(let j=0,wt=k.length;j<wt;j++){const Tt=k[j];Ze(u,w,Tt,Tt.viewport)}}else Ze(u,w,I);E!==null&&(Z.updateMultisampleRenderTarget(E),Z.updateRenderTargetMipmap(E)),w.isScene===!0&&w.onAfterRender(g,w,I),Lt.resetDefaultState(),S=-1,v=null,m.pop(),m.length>0?d=m[m.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function je(w,I,U,k){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)U=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)d.pushLight(w),w.castShadow&&d.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||O.intersectsSprite(w)){k&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const Tt=yt.update(w),Dt=w.material;Dt.visible&&u.push(w,Tt,Dt,U,ct.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==It.render.frame&&(w.skeleton.update(),w.skeleton.frame=It.render.frame),!w.frustumCulled||O.intersectsObject(w))){k&&ct.setFromMatrixPosition(w.matrixWorld).applyMatrix4(K);const Tt=yt.update(w),Dt=w.material;if(Array.isArray(Dt)){const Rt=Tt.groups;for(let Ht=0,Nt=Rt.length;Ht<Nt;Ht++){const Bt=Rt[Ht],Qt=Dt[Bt.materialIndex];Qt&&Qt.visible&&u.push(w,Tt,Qt,U,ct.z,Bt)}}else Dt.visible&&u.push(w,Tt,Dt,U,ct.z,null)}}const wt=w.children;for(let Tt=0,Dt=wt.length;Tt<Dt;Tt++)je(wt[Tt],I,U,k)}function Ze(w,I,U,k){const j=w.opaque,wt=w.transmissive,Tt=w.transparent;d.setupLightsView(U),wt.length>0&&Uh(j,I,U),k&&nt.viewport(L.copy(k)),j.length>0&&Pr(j,I,U),wt.length>0&&Pr(wt,I,U),Tt.length>0&&Pr(Tt,I,U),nt.buffers.depth.setTest(!0),nt.buffers.depth.setMask(!0),nt.buffers.color.setMask(!0),nt.setPolygonOffset(!1)}function Uh(w,I,U){const k=Ct.isWebGL2;J===null&&(J=new Re(1,1,{generateMipmaps:!0,type:V.convert(Di)!==null?Di:Yn,minFilter:ks,samples:k&&s===!0?4:0})),g.getDrawingBufferSize(Q),k?J.setSize(Q.x,Q.y):J.setSize(bs(Q.x),bs(Q.y));const j=g.getRenderTarget();g.setRenderTarget(J),g.clear();const wt=g.toneMapping;g.toneMapping=fn,Pr(w,I,U),g.toneMapping=wt,Z.updateMultisampleRenderTarget(J),Z.updateRenderTargetMipmap(J),g.setRenderTarget(j)}function Pr(w,I,U){const k=I.isScene===!0?I.overrideMaterial:null;for(let j=0,wt=w.length;j<wt;j++){const Tt=w[j],Dt=Tt.object,Rt=Tt.geometry,Ht=k===null?Tt.material:k,Nt=Tt.group;Dt.layers.test(U.layers)&&Hh(Dt,I,U,Rt,Ht,Nt)}}function Hh(w,I,U,k,j,wt){w.onBeforeRender(g,I,U,k,j,wt),w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(g,I,U,k,w,wt),j.transparent===!0&&j.side===Fi?(j.side=Ge,j.needsUpdate=!0,g.renderBufferDirect(U,I,k,j,w,wt),j.side=mr,j.needsUpdate=!0,g.renderBufferDirect(U,I,k,j,w,wt),j.side=Fi):g.renderBufferDirect(U,I,k,j,w,wt),w.onAfterRender(g,I,U,k,j,wt)}function js(w,I,U){I.isScene!==!0&&(I=zt);const k=G.get(w),j=d.state.lights,wt=d.state.shadowsArray,Tt=j.state.version,Dt=gt.getParameters(w,j.state,wt,I,U),Rt=gt.getProgramCacheKey(Dt);let Ht=k.programs;k.environment=w.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(w.isMeshStandardMaterial?dt:tt).get(w.envMap||k.environment),Ht===void 0&&(w.addEventListener("dispose",rt),Ht=new Map,k.programs=Ht);let Nt=Ht.get(Rt);if(Nt!==void 0){if(k.currentProgram===Nt&&k.lightsStateVersion===Tt)return Ia(w,Dt),Nt}else Dt.uniforms=gt.getUniforms(w),w.onBuild(U,Dt,g),w.onBeforeCompile(Dt,g),Nt=gt.acquireProgram(Dt,Rt),Ht.set(Rt,Nt),k.uniforms=Dt.uniforms;const Bt=k.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Bt.clippingPlanes=M.uniform),Ia(w,Dt),k.needsLights=Wh(w),k.lightsStateVersion=Tt,k.needsLights&&(Bt.ambientLightColor.value=j.state.ambient,Bt.lightProbe.value=j.state.probe,Bt.directionalLights.value=j.state.directional,Bt.directionalLightShadows.value=j.state.directionalShadow,Bt.spotLights.value=j.state.spot,Bt.spotLightShadows.value=j.state.spotShadow,Bt.rectAreaLights.value=j.state.rectArea,Bt.ltc_1.value=j.state.rectAreaLTC1,Bt.ltc_2.value=j.state.rectAreaLTC2,Bt.pointLights.value=j.state.point,Bt.pointLightShadows.value=j.state.pointShadow,Bt.hemisphereLights.value=j.state.hemi,Bt.directionalShadowMap.value=j.state.directionalShadowMap,Bt.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Bt.spotShadowMap.value=j.state.spotShadowMap,Bt.spotShadowMatrix.value=j.state.spotShadowMatrix,Bt.pointShadowMap.value=j.state.pointShadowMap,Bt.pointShadowMatrix.value=j.state.pointShadowMatrix);const Qt=Nt.getUniforms(),Fn=Ln.seqWithValue(Qt.seq,Bt);return k.currentProgram=Nt,k.uniformsList=Fn,Nt}function Ia(w,I){const U=G.get(w);U.outputEncoding=I.outputEncoding,U.instancing=I.instancing,U.skinning=I.skinning,U.morphTargets=I.morphTargets,U.morphNormals=I.morphNormals,U.morphColors=I.morphColors,U.morphTargetsCount=I.morphTargetsCount,U.numClippingPlanes=I.numClippingPlanes,U.numIntersection=I.numClipIntersection,U.vertexAlphas=I.vertexAlphas,U.vertexTangents=I.vertexTangents,U.toneMapping=I.toneMapping}function Vh(w,I,U,k,j){I.isScene!==!0&&(I=zt),Z.resetTextureUnits();const wt=I.fog,Tt=k.isMeshStandardMaterial?I.environment:null,Dt=E===null?g.outputEncoding:E.isXRRenderTarget===!0?E.texture.encoding:mn,Rt=(k.isMeshStandardMaterial?dt:tt).get(k.envMap||Tt),Ht=k.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,Nt=!!k.normalMap&&!!U.attributes.tangent,Bt=!!U.morphAttributes.position,Qt=!!U.morphAttributes.normal,Fn=!!U.morphAttributes.color,ti=k.toneMapped?g.toneMapping:fn,ei=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,Ye=ei!==void 0?ei.length:0,Ut=G.get(k),ni=d.state.lights;if(D===!0&&(X===!0||w!==v)){const Fe=w===v&&k.id===S;M.setState(k,w,Fe)}let ee=!1;k.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==ni.state.version||Ut.outputEncoding!==Dt||j.isInstancedMesh&&Ut.instancing===!1||!j.isInstancedMesh&&Ut.instancing===!0||j.isSkinnedMesh&&Ut.skinning===!1||!j.isSkinnedMesh&&Ut.skinning===!0||Ut.envMap!==Rt||k.fog&&Ut.fog!==wt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==M.numPlanes||Ut.numIntersection!==M.numIntersection)||Ut.vertexAlphas!==Ht||Ut.vertexTangents!==Nt||Ut.morphTargets!==Bt||Ut.morphNormals!==Qt||Ut.morphColors!==Fn||Ut.toneMapping!==ti||Ct.isWebGL2===!0&&Ut.morphTargetsCount!==Ye)&&(ee=!0):(ee=!0,Ut.__version=k.version);let Je=Ut.currentProgram;ee===!0&&(Je=js(k,I,j));let _n=!1,Ji=!1,Zs=!1;const ge=Je.getUniforms(),$i=Ut.uniforms;if(nt.useProgram(Je.program)&&(_n=!0,Ji=!0,Zs=!0),k.id!==S&&(S=k.id,Ji=!0),_n||v!==w){if(ge.setValue(W,"projectionMatrix",w.projectionMatrix),Ct.logarithmicDepthBuffer&&ge.setValue(W,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),v!==w&&(v=w,Ji=!0,Zs=!0),k.isShaderMaterial||k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshStandardMaterial||k.envMap){const Fe=ge.map.cameraPosition;Fe!==void 0&&Fe.setValue(W,ct.setFromMatrixPosition(w.matrixWorld))}(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ge.setValue(W,"isOrthographic",w.isOrthographicCamera===!0),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial||k.isShadowMaterial||j.isSkinnedMesh)&&ge.setValue(W,"viewMatrix",w.matrixWorldInverse)}if(j.isSkinnedMesh){ge.setOptional(W,j,"bindMatrix"),ge.setOptional(W,j,"bindMatrixInverse");const Fe=j.skeleton;Fe&&(Ct.floatVertexTextures?(Fe.boneTexture===null&&Fe.computeBoneTexture(),ge.setValue(W,"boneTexture",Fe.boneTexture,Z),ge.setValue(W,"boneTextureSize",Fe.boneTextureSize)):ge.setOptional(W,Fe,"boneMatrices"))}const Ys=U.morphAttributes;return(Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0&&Ct.isWebGL2===!0)&&at.update(j,U,k,Je),(Ji||Ut.receiveShadow!==j.receiveShadow)&&(Ut.receiveShadow=j.receiveShadow,ge.setValue(W,"receiveShadow",j.receiveShadow)),Ji&&(ge.setValue(W,"toneMappingExposure",g.toneMappingExposure),Ut.needsLights&&Gh($i,Zs),wt&&k.fog&&$t.refreshFogUniforms($i,wt),$t.refreshMaterialUniforms($i,k,_,z,J),Ln.upload(W,Ut.uniformsList,$i,Z)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(Ln.upload(W,Ut.uniformsList,$i,Z),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ge.setValue(W,"center",j.center),ge.setValue(W,"modelViewMatrix",j.modelViewMatrix),ge.setValue(W,"normalMatrix",j.normalMatrix),ge.setValue(W,"modelMatrix",j.matrixWorld),Je}function Gh(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function Wh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(w,I,U){G.get(w.texture).__webglTexture=I,G.get(w.depthTexture).__webglTexture=U;const k=G.get(w);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=U===void 0,k.__autoAllocateDepthBuffer||At.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,I){const U=G.get(w);U.__webglFramebuffer=I,U.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,U=0){E=w,x=I,y=U;let k=!0;if(w){const Rt=G.get(w);Rt.__useDefaultFramebuffer!==void 0?(nt.bindFramebuffer(36160,null),k=!1):Rt.__webglFramebuffer===void 0?Z.setupRenderTarget(w):Rt.__hasExternalTextures&&Z.rebindTextures(w,G.get(w.texture).__webglTexture,G.get(w.depthTexture).__webglTexture)}let j=null,wt=!1,Tt=!1;if(w){const Rt=w.texture;(Rt.isData3DTexture||Rt.isDataArrayTexture)&&(Tt=!0);const Ht=G.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(j=Ht[I],wt=!0):Ct.isWebGL2&&w.samples>0&&Z.useMultisampledRTT(w)===!1?j=G.get(w).__webglMultisampledFramebuffer:j=Ht,L.copy(w.viewport),P.copy(w.scissor),N=w.scissorTest}else L.copy(R).multiplyScalar(_).floor(),P.copy(B).multiplyScalar(_).floor(),N=F;if(nt.bindFramebuffer(36160,j)&&Ct.drawBuffers&&k&&nt.drawBuffers(w,j),nt.viewport(L),nt.scissor(P),nt.setScissorTest(N),wt){const Rt=G.get(w.texture);W.framebufferTexture2D(36160,36064,34069+I,Rt.__webglTexture,U)}else if(Tt){const Rt=G.get(w.texture),Ht=I||0;W.framebufferTextureLayer(36160,36064,Rt.__webglTexture,U||0,Ht)}S=-1},this.readRenderTargetPixels=function(w,I,U,k,j,wt,Tt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=G.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Tt!==void 0&&(Dt=Dt[Tt]),Dt){nt.bindFramebuffer(36160,Dt);try{const Rt=w.texture,Ht=Rt.format,Nt=Rt.type;if(Ht!==Ve&&V.convert(Ht)!==W.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Bt=Nt===Di&&(At.has("EXT_color_buffer_half_float")||Ct.isWebGL2&&At.has("EXT_color_buffer_float"));if(Nt!==Yn&&V.convert(Nt)!==W.getParameter(35738)&&!(Nt===Wn&&(Ct.isWebGL2||At.has("OES_texture_float")||At.has("WEBGL_color_buffer_float")))&&!Bt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-k&&U>=0&&U<=w.height-j&&W.readPixels(I,U,k,j,V.convert(Ht),V.convert(Nt),wt)}finally{const Rt=E!==null?G.get(E).__webglFramebuffer:null;nt.bindFramebuffer(36160,Rt)}}},this.copyFramebufferToTexture=function(w,I,U=0){if(I.isFramebufferTexture!==!0){console.error("THREE.WebGLRenderer: copyFramebufferToTexture() can only be used with FramebufferTexture.");return}const k=Math.pow(2,-U),j=Math.floor(I.image.width*k),wt=Math.floor(I.image.height*k);Z.setTexture2D(I,0),W.copyTexSubImage2D(3553,U,0,0,w.x,w.y,j,wt),nt.unbindTexture()},this.copyTextureToTexture=function(w,I,U,k=0){const j=I.image.width,wt=I.image.height,Tt=V.convert(U.format),Dt=V.convert(U.type);Z.setTexture2D(U,0),W.pixelStorei(37440,U.flipY),W.pixelStorei(37441,U.premultiplyAlpha),W.pixelStorei(3317,U.unpackAlignment),I.isDataTexture?W.texSubImage2D(3553,k,w.x,w.y,j,wt,Tt,Dt,I.image.data):I.isCompressedTexture?W.compressedTexSubImage2D(3553,k,w.x,w.y,I.mipmaps[0].width,I.mipmaps[0].height,Tt,I.mipmaps[0].data):W.texSubImage2D(3553,k,w.x,w.y,Tt,Dt,I.image),k===0&&U.generateMipmaps&&W.generateMipmap(3553),nt.unbindTexture()},this.copyTextureToTexture3D=function(w,I,U,k,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=w.max.x-w.min.x+1,Tt=w.max.y-w.min.y+1,Dt=w.max.z-w.min.z+1,Rt=V.convert(k.format),Ht=V.convert(k.type);let Nt;if(k.isData3DTexture)Z.setTexture3D(k,0),Nt=32879;else if(k.isDataArrayTexture)Z.setTexture2DArray(k,0),Nt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W.pixelStorei(37440,k.flipY),W.pixelStorei(37441,k.premultiplyAlpha),W.pixelStorei(3317,k.unpackAlignment);const Bt=W.getParameter(3314),Qt=W.getParameter(32878),Fn=W.getParameter(3316),ti=W.getParameter(3315),ei=W.getParameter(32877),Ye=U.isCompressedTexture?U.mipmaps[0]:U.image;W.pixelStorei(3314,Ye.width),W.pixelStorei(32878,Ye.height),W.pixelStorei(3316,w.min.x),W.pixelStorei(3315,w.min.y),W.pixelStorei(32877,w.min.z),U.isDataTexture||U.isData3DTexture?W.texSubImage3D(Nt,j,I.x,I.y,I.z,wt,Tt,Dt,Rt,Ht,Ye.data):U.isCompressedTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),W.compressedTexSubImage3D(Nt,j,I.x,I.y,I.z,wt,Tt,Dt,Rt,Ye.data)):W.texSubImage3D(Nt,j,I.x,I.y,I.z,wt,Tt,Dt,Rt,Ht,Ye),W.pixelStorei(3314,Bt),W.pixelStorei(32878,Qt),W.pixelStorei(3316,Fn),W.pixelStorei(3315,ti),W.pixelStorei(32877,ei),j===0&&k.generateMipmaps&&W.generateMipmap(Nt),nt.unbindTexture()},this.initTexture=function(w){Z.setTexture2D(w,0),nt.unbindTexture()},this.resetState=function(){x=0,y=0,E=null,nt.reset(),Lt.reset()},typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Wt.prototype.isWebGLRenderer=!0;class $g extends Wt{}$g.prototype.isWebGL1Renderer=!0;class Us{constructor(t,e=1,n=1e3){this.name="",this.color=new pt(t),this.near=e,this.far=n}clone(){return new Us(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}Us.prototype.isFog=!0;class pa extends Gt{constructor(){super();this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.autoUpdate=t.autoUpdate,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e}}pa.prototype.isScene=!0;class Ar{constructor(t,e){this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xr,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=We()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=We()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=We()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}Ar.prototype.isInterleavedBuffer=!0;const ye=new T;class vr{constructor(t,e,n,i=!1){this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}setX(t,e){return this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){return this.data.array[t*this.data.stride+this.offset]}getY(t){return this.data.array[t*this.data.stride+this.offset+1]}getZ(t){return this.data.array[t*this.data.stride+this.offset+2]}getW(t){return this.data.array[t*this.data.stride+this.offset+3]}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new oe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new vr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}vr.prototype.isInterleavedBufferAttribute=!0;class ma extends ae{constructor(t){super();this.type="SpriteMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this}}ma.prototype.isSpriteMaterial=!0;let _i;const er=new T,yi=new T,vi=new T,Mi=new Y,nr=new Y,$c=new xt,Kr=new T,ir=new T,Qr=new T,Wl=new Y,Ro=new Y,ql=new Y;class Kg extends Gt{constructor(t){super();if(this.type="Sprite",_i===void 0){_i=new Zt;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ar(e,5);_i.setIndex([0,1,2,0,2,3]),_i.setAttribute("position",new vr(n,3,0,!1)),_i.setAttribute("uv",new vr(n,2,3,!1))}this.geometry=_i,this.material=t!==void 0?t:new ma,this.center=new Y(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),yi.setFromMatrixScale(this.matrixWorld),$c.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&yi.multiplyScalar(-vi.z);const n=this.material.rotation;let i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));const o=this.center;ts(Kr.set(-.5,-.5,0),vi,o,yi,i,s),ts(ir.set(.5,-.5,0),vi,o,yi,i,s),ts(Qr.set(.5,.5,0),vi,o,yi,i,s),Wl.set(0,0),Ro.set(1,0),ql.set(1,1);let a=t.ray.intersectTriangle(Kr,ir,Qr,!1,er);if(a===null&&(ts(ir.set(-.5,.5,0),vi,o,yi,i,s),Ro.set(0,1),a=t.ray.intersectTriangle(Kr,Qr,ir,!1,er),a===null))return;const l=t.ray.origin.distanceTo(er);l<t.near||l>t.far||e.push({distance:l,point:er.clone(),uv:ie.getUV(er,Kr,ir,Qr,Wl,Ro,ql,new Y),face:null,object:this})}copy(t){return super.copy(t),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}Kg.prototype.isSprite=!0;function ts(r,t,e,n,i,s){Mi.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(nr.x=s*Mi.x-i*Mi.y,nr.y=i*Mi.x+s*Mi.y):nr.copy(Mi),r.copy(t),r.x+=nr.x,r.y+=nr.y,r.applyMatrix4($c)}const Xl=new T,jl=new qt,Zl=new qt,Qg=new T,Yl=new xt;class Kc extends me{constructor(t,e){super(t,e);this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new xt,this.bindMatrixInverse=new xt}copy(t){return super.copy(t),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,this}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new qt,e=this.geometry.attributes.skinWeight;for(let n=0,i=e.count;n<i;n++){t.fromBufferAttribute(e,n);const s=1/t.manhattanLength();s!==1/0?t.multiplyScalar(s):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(t,e){const n=this.skeleton,i=this.geometry;jl.fromBufferAttribute(i.attributes.skinIndex,t),Zl.fromBufferAttribute(i.attributes.skinWeight,t),Xl.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let s=0;s<4;s++){const o=Zl.getComponent(s);if(o!==0){const a=jl.getComponent(s);Yl.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),e.addScaledVector(Qg.copy(Xl).applyMatrix4(Yl),o)}}return e.applyMatrix4(this.bindMatrixInverse)}}Kc.prototype.isSkinnedMesh=!0;class t0 extends Gt{constructor(){super();this.type="Bone"}}t0.prototype.isBone=!0;class e0 extends he{constructor(t=null,e=1,n=1,i,s,o,a,l,c=ce,h=ce,u,d){super(null,o,a,l,c,h,i,s,u,d);this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}e0.prototype.isDataTexture=!0;class Jo extends oe{constructor(t,e,n,i=1){typeof n=="number"&&(i=n,n=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument."));super(t,e,n);this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}Jo.prototype.isInstancedBufferAttribute=!0;const Jl=new xt,$l=new xt,es=[],rr=new me;class n0 extends me{constructor(t,e,n){super(t,e);this.instanceMatrix=new Jo(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1}copy(t){return super.copy(t),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){const n=this.matrixWorld,i=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0)for(let s=0;s<i;s++){this.getMatrixAt(s,Jl),$l.multiplyMatrices(n,Jl),rr.matrixWorld=$l,rr.raycast(t,es);for(let o=0,a=es.length;o<a;o++){const l=es[o];l.instanceId=s,l.object=this,e.push(l)}es.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Jo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}n0.prototype.isInstancedMesh=!0;class ji extends ae{constructor(t){super();this.type="LineBasicMaterial",this.color=new pt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this}}ji.prototype.isLineBasicMaterial=!0;const Kl=new T,Ql=new T,tc=new xt,Po=new qi,ns=new Wi;class ga extends Gt{constructor(t=new Zt,e=new ji){super();this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Kl.fromBufferAttribute(e,i-1),Ql.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Kl.distanceTo(Ql);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.Line.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ns.copy(n.boundingSphere),ns.applyMatrix4(i),ns.radius+=s,t.ray.intersectsSphere(ns)===!1)return;tc.copy(i).invert(),Po.copy(t.ray).applyMatrix4(tc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new T,h=new T,u=new T,d=new T,f=this.isLineSegments?2:1;if(n.isBufferGeometry){const m=n.index,p=n.attributes.position;if(m!==null){const x=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let E=x,S=y-1;E<S;E+=f){const v=m.getX(E),L=m.getX(E+1);if(c.fromBufferAttribute(p,v),h.fromBufferAttribute(p,L),Po.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const N=t.ray.origin.distanceTo(d);N<t.near||N>t.far||e.push({distance:N,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let E=x,S=y-1;E<S;E+=f){if(c.fromBufferAttribute(p,E),h.fromBufferAttribute(p,E+1),Po.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const L=t.ray.origin.distanceTo(d);L<t.near||L>t.far||e.push({distance:L,point:u.clone().applyMatrix4(this.matrixWorld),index:E,face:null,faceIndex:null,object:this})}}}else n.isGeometry&&console.error("THREE.Line.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}ga.prototype.isLine=!0;const ec=new T,nc=new T;class xa extends ga{constructor(t,e){super(t,e);this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.isBufferGeometry)if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ec.fromBufferAttribute(e,i),nc.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ec.distanceTo(nc);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else t.isGeometry&&console.error("THREE.LineSegments.computeLineDistances() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");return this}}xa.prototype.isLineSegments=!0;class i0 extends ga{constructor(t,e){super(t,e);this.type="LineLoop"}}i0.prototype.isLineLoop=!0;class _a extends ae{constructor(t){super();this.type="PointsMaterial",this.color=new pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this}}_a.prototype.isPointsMaterial=!0;const ic=new xt,$o=new qi,is=new Wi,rs=new T;class r0 extends Gt{constructor(t=new Zt,e=new _a){super();this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t){return super.copy(t),this.material=t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),is.copy(n.boundingSphere),is.applyMatrix4(i),is.radius+=s,t.ray.intersectsSphere(is)===!1)return;ic.copy(i).invert(),$o.copy(t.ray).applyMatrix4(ic);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a;if(n.isBufferGeometry){const c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const p=c.getX(m);rs.fromBufferAttribute(u,p),rc(rs,p,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)rs.fromBufferAttribute(u,m),rc(rs,m,l,i,t,e,this)}}else console.error("THREE.Points.raycast() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}updateMorphTargets(){const t=this.geometry;if(t.isBufferGeometry){const e=t.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}else{const e=t.morphTargets;e!==void 0&&e.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}}r0.prototype.isPoints=!0;function rc(r,t,e,n,i,s,o){const a=$o.distanceSqToPoint(r);if(a<e){const l=new T;$o.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class s0 extends he{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c);this.minFilter=o!==void 0?o:Se,this.magFilter=s!==void 0?s:Se,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,t.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}s0.prototype.isVideoTexture=!0;class o0 extends he{constructor(t,e,n){super({width:t,height:e});this.format=n,this.magFilter=ce,this.minFilter=ce,this.generateMipmaps=!1,this.needsUpdate=!0}}o0.prototype.isFramebufferTexture=!0;class a0 extends he{constructor(t,e,n,i,s,o,a,l,c,h,u,d){super(null,o,a,l,c,h,i,s,u,d);this.image={width:e,height:n},this.mipmaps=t,this.flipY=!1,this.generateMipmaps=!1}}a0.prototype.isCompressedTexture=!0;class Qc extends he{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c);this.needsUpdate=!0}}Qc.prototype.isCanvasTexture=!0;class ze{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Y:new T);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new T,i=[],s=[],o=[],a=new T,l=new xt;for(let f=0;f<=t;f++){const m=f/t;i[f]=this.getTangentAt(m,new T)}s[0]=new T,o[0]=new T;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(fe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(fe(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hs extends ze{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super();this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e){const n=e||new Y,i=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);const a=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}Hs.prototype.isEllipseCurve=!0;class th extends Hs{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o);this.type="ArcCurve"}}th.prototype.isArcCurve=!0;function ya(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){const o=s*s,a=o*s;return r+t*s+e*o+n*a}}}const ss=new T,Do=new ya,Io=new ya,ko=new ya;class eh extends ze{constructor(t=[],e=!1,n="centripetal",i=.5){super();this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new T){const n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ss.subVectors(i[0],i[1]).add(i[0]),c=ss);const u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ss.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ss),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),p=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),p<1e-4&&(p=g),Do.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,g,p),Io.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,g,p),ko.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,g,p)}else this.curveType==="catmullrom"&&(Do.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Io.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),ko.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Do.calc(l),Io.calc(l),ko.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new T().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}eh.prototype.isCatmullRomCurve3=!0;function sc(r,t,e,n,i){const s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function l0(r,t){const e=1-r;return e*e*t}function c0(r,t){return 2*(1-r)*r*t}function h0(r,t){return r*r*t}function dr(r,t,e,n){return l0(r,t)+c0(r,e)+h0(r,n)}function u0(r,t){const e=1-r;return e*e*e*t}function d0(r,t){const e=1-r;return 3*e*e*r*t}function f0(r,t){return 3*(1-r)*r*r*t}function p0(r,t){return r*r*r*t}function fr(r,t,e,n,i){return u0(r,t)+d0(r,e)+f0(r,n)+p0(r,i)}class va extends ze{constructor(t=new Y,e=new Y,n=new Y,i=new Y){super();this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Y){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,s.x,o.x,a.x),fr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}va.prototype.isCubicBezierCurve=!0;class nh extends ze{constructor(t=new T,e=new T,n=new T,i=new T){super();this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new T){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(fr(t,i.x,s.x,o.x,a.x),fr(t,i.y,s.y,o.y,a.y),fr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}nh.prototype.isCubicBezierCurve3=!0;class Vs extends ze{constructor(t=new Y,e=new Y){super();this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Y){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e){const n=e||new Y;return n.copy(this.v2).sub(this.v1).normalize(),n}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Vs.prototype.isLineCurve=!0;class m0 extends ze{constructor(t=new T,e=new T){super();this.type="LineCurve3",this.isLineCurve3=!0,this.v1=t,this.v2=e}getPoint(t,e=new T){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ma extends ze{constructor(t=new Y,e=new Y,n=new Y){super();this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Y){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(dr(t,i.x,s.x,o.x),dr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}Ma.prototype.isQuadraticBezierCurve=!0;class ih extends ze{constructor(t=new T,e=new T,n=new T){super();this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new T){const n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(dr(t,i.x,s.x,o.x),dr(t,i.y,s.y,o.y),dr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}ih.prototype.isQuadraticBezierCurve3=!0;class wa extends ze{constructor(t=[]){super();this.type="SplineCurve",this.points=t}getPoint(t,e=new Y){const n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(sc(a,l.x,c.x,h.x,u.x),sc(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const i=t.points[e];this.points.push(new Y().fromArray(i))}return this}}wa.prototype.isSplineCurve=!0;var rh=Object.freeze({__proto__:null,ArcCurve:th,CatmullRomCurve3:eh,CubicBezierCurve:va,CubicBezierCurve3:nh,EllipseCurve:Hs,LineCurve:Vs,LineCurve3:m0,QuadraticBezierCurve:Ma,QuadraticBezierCurve3:ih,SplineCurve:wa});class g0 extends ze{constructor(){super();this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);t.equals(e)||this.curves.push(new Vs(e,t))}getPoint(t,e){const n=t*this.getLength(),i=this.getCurveLengths();let s=0;for(;s<i.length;){if(i[s]>=n){const o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let i=0,s=this.curves;i<s.length;i++){const o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const i=t.curves[e];this.curves.push(new rh[i.type]().fromJSON(i))}return this}}class Ss extends g0{constructor(t){super();this.type="Path",this.currentPoint=new Y,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vs(this.currentPoint.clone(),new Y(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){const s=new Ma(this.currentPoint.clone(),new Y(t,e),new Y(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){const a=new va(this.currentPoint.clone(),new Y(t,e),new Y(n,i),new Y(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new wa(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){const c=new Hs(t,e,n,i,s,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}new T;new T;new T;new ie;class Rn extends Ss{constructor(t){super(t);this.uuid=We(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const i=t.holes[e];this.holes.push(new Ss().fromJSON(i))}return this}}const x0={triangulate:function(r,t,e=2){const n=t&&t.length,i=n?t[0]*e:r.length;let s=sh(r,0,i,e,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=w0(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let m=e;m<i;m+=e)u=r[m],d=r[m+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?1/f:0}return Mr(s,o,e,a,l,f),o}};function sh(r,t,e,n,i){let s,o;if(i===I0(r,t,e,n)>0)for(s=t;s<e;s+=n)o=oc(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=oc(s,r[s],r[s+1],o);return o&&Gs(o,o.next)&&(br(o),o=o.next),o}function Dn(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Gs(e,e.next)||Kt(e.prev,e,e.next)===0)){if(br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Mr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&A0(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?y0(r,n,i,s):_0(r)){t.push(l.i/e),t.push(r.i/e),t.push(c.i/e),br(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=v0(Dn(r),t,e),Mr(r,t,e,n,i,s,2)):o===2&&M0(r,t,e,n,i,s):Mr(Dn(r),t,e,n,i,s,1);break}}}function _0(r){const t=r.prev,e=r,n=r.next;if(Kt(t,e,n)>=0)return!1;let i=r.next.next;for(;i!==r.prev;){if(Li(t.x,t.y,e.x,e.y,n.x,n.y,i.x,i.y)&&Kt(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function y0(r,t,e,n){const i=r.prev,s=r,o=r.next;if(Kt(i,s,o)>=0)return!1;const a=i.x<s.x?i.x<o.x?i.x:o.x:s.x<o.x?s.x:o.x,l=i.y<s.y?i.y<o.y?i.y:o.y:s.y<o.y?s.y:o.y,c=i.x>s.x?i.x>o.x?i.x:o.x:s.x>o.x?s.x:o.x,h=i.y>s.y?i.y>o.y?i.y:o.y:s.y>o.y?s.y:o.y,u=Ko(a,l,t,e,n),d=Ko(c,h,t,e,n);let f=r.prevZ,m=r.nextZ;for(;f&&f.z>=u&&m&&m.z<=d;){if(f!==r.prev&&f!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Kt(f.prev,f,f.next)>=0||(f=f.prevZ,m!==r.prev&&m!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Kt(m.prev,m,m.next)>=0))return!1;m=m.nextZ}for(;f&&f.z>=u;){if(f!==r.prev&&f!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,f.x,f.y)&&Kt(f.prev,f,f.next)>=0)return!1;f=f.prevZ}for(;m&&m.z<=d;){if(m!==r.prev&&m!==r.next&&Li(i.x,i.y,s.x,s.y,o.x,o.y,m.x,m.y)&&Kt(m.prev,m,m.next)>=0)return!1;m=m.nextZ}return!0}function v0(r,t,e){let n=r;do{const i=n.prev,s=n.next.next;!Gs(i,s)&&oh(i,n,n.next,s)&&wr(i,s)&&wr(s,i)&&(t.push(i.i/e),t.push(n.i/e),t.push(s.i/e),br(n),br(n.next),n=r=s),n=n.next}while(n!==r);return Dn(n)}function M0(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&R0(o,a)){let l=ah(o,a);o=Dn(o,o.next),l=Dn(l,l.next),Mr(o,t,e,n,i,s),Mr(l,t,e,n,i,s);return}a=a.next}o=o.next}while(o!==r)}function w0(r,t,e,n){const i=[];let s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=sh(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(L0(c));for(i.sort(b0),s=0;s<i.length;s++)S0(i[s],e),e=Dn(e,e.next);return e}function b0(r,t){return r.x-t.x}function S0(r,t){if(t=E0(r,t),t){const e=ah(t,r);Dn(t,t.next),Dn(e,e.next)}}function E0(r,t){let e=t;const n=r.x,i=r.y;let s=-1/0,o;do{if(i<=e.y&&i>=e.next.y&&e.next.y!==e.y){const d=e.x+(i-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s){if(s=d,d===n){if(i===e.y)return e;if(i===e.next.y)return e.next}o=e.x<e.next.x?e:e.next}}e=e.next}while(e!==t);if(!o)return null;if(n===s)return o;const a=o,l=o.x,c=o.y;let h=1/0,u;e=o;do n>=e.x&&e.x>=l&&n!==e.x&&Li(i<c?n:s,i,l,c,i<c?s:n,i,e.x,e.y)&&(u=Math.abs(i-e.y)/(n-e.x),wr(e,r)&&(u<h||u===h&&(e.x>o.x||e.x===o.x&&T0(o,e)))&&(o=e,h=u)),e=e.next;while(e!==a);return o}function T0(r,t){return Kt(r.prev,r,t.prev)<0&&Kt(t.next,r,r.next)<0}function A0(r,t,e,n){let i=r;do i.z===null&&(i.z=Ko(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,C0(i)}function C0(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Ko(r,t,e,n,i){return r=32767*(r-e)*i,t=32767*(t-n)*i,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function L0(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Li(r,t,e,n,i,s,o,a){return(i-o)*(t-a)-(r-o)*(s-a)>=0&&(r-o)*(n-a)-(e-o)*(t-a)>=0&&(e-o)*(s-a)-(i-o)*(n-a)>=0}function R0(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!P0(r,t)&&(wr(r,t)&&wr(t,r)&&D0(r,t)&&(Kt(r.prev,r,t.prev)||Kt(r,t.prev,t))||Gs(r,t)&&Kt(r.prev,r,r.next)>0&&Kt(t.prev,t,t.next)>0)}function Kt(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Gs(r,t){return r.x===t.x&&r.y===t.y}function oh(r,t,e,n){const i=as(Kt(r,t,e)),s=as(Kt(r,t,n)),o=as(Kt(e,n,r)),a=as(Kt(e,n,t));return!!(i!==s&&o!==a||i===0&&os(r,e,t)||s===0&&os(r,n,t)||o===0&&os(e,r,n)||a===0&&os(e,t,n))}function os(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function as(r){return r>0?1:r<0?-1:0}function P0(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&oh(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function wr(r,t){return Kt(r.prev,r,r.next)<0?Kt(r,t,r.next)>=0&&Kt(r,r.prev,t)>=0:Kt(r,t,r.prev)<0||Kt(r,r.next,t)<0}function D0(r,t){let e=r,n=!1;const i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function ah(r,t){const e=new Qo(r.i,r.x,r.y),n=new Qo(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function oc(r,t,e,n){const i=new Qo(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function br(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Qo(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function I0(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}class pn{static area(t){const e=t.length;let n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return pn.area(t)<0}static triangulateShape(t,e){const n=[],i=[],s=[];ac(t),lc(n,t);let o=t.length;e.forEach(ac);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,lc(n,e[l]);const a=x0.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function ac(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function lc(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}class Qn extends Zt{constructor(t=new Rn([new Y(.5,.5),new Y(-.5,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e={}){super();this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){const c=t[a];o(c)}this.setAttribute("position",new te(i,3)),this.setAttribute("uv",new te(s,2)),this.computeVertexNormals();function o(a){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1;let u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,g=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3;const x=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:k0;e.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),u=e.amount);let E,S=!1,v,L,P,N;x&&(E=x.getSpacedPoints(h),S=!0,d=!1,v=x.computeFrenetFrames(h,!1),L=new T,P=new T,N=new T),d||(p=0,f=0,m=0,g=0);const et=a.extractPoints(c);let z=et.shape;const _=et.holes;if(!pn.isClockWise(z)){z=z.reverse();for(let G=0,Z=_.length;G<Z;G++){const tt=_[G];pn.isClockWise(tt)&&(_[G]=tt.reverse())}}const q=pn.triangulateShape(z,_),R=z;for(let G=0,Z=_.length;G<Z;G++){const tt=_[G];z=z.concat(tt)}function B(G,Z,tt){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().multiplyScalar(tt).add(G)}const F=z.length,O=q.length;function D(G,Z,tt){let dt,lt,Et;const yt=G.x-Z.x,gt=G.y-Z.y,$t=tt.x-G.x,Xt=tt.y-G.y,b=yt*yt+gt*gt,M=yt*Xt-gt*$t;if(Math.abs(M)>Number.EPSILON){const H=Math.sqrt(b),$=Math.sqrt($t*$t+Xt*Xt),at=Z.x-gt/H,ht=Z.y+yt/H,_t=tt.x-Xt/$,V=tt.y+$t/$,Lt=((_t-at)*Xt-(V-ht)*$t)/(yt*Xt-gt*$t);dt=at+yt*Lt-G.x,lt=ht+gt*Lt-G.y;const Pt=dt*dt+lt*lt;if(Pt<=2)return new Y(dt,lt);Et=Math.sqrt(Pt/2)}else{let H=!1;yt>Number.EPSILON?$t>Number.EPSILON&&(H=!0):yt<-Number.EPSILON?$t<-Number.EPSILON&&(H=!0):Math.sign(gt)===Math.sign(Xt)&&(H=!0),H?(dt=-gt,lt=yt,Et=Math.sqrt(b)):(dt=yt,lt=gt,Et=Math.sqrt(b/2))}return new Y(dt/Et,lt/Et)}const X=[];for(let G=0,Z=R.length,tt=Z-1,dt=G+1;G<Z;G++,tt++,dt++)tt===Z&&(tt=0),dt===Z&&(dt=0),X[G]=D(R[G],R[tt],R[dt]);const J=[];let K,Q=X.concat();for(let G=0,Z=_.length;G<Z;G++){const tt=_[G];K=[];for(let dt=0,lt=tt.length,Et=lt-1,yt=dt+1;dt<lt;dt++,Et++,yt++)Et===lt&&(Et=0),yt===lt&&(yt=0),K[dt]=D(tt[dt],tt[Et],tt[yt]);J.push(K),Q=Q.concat(K)}for(let G=0;G<p;G++){const Z=G/p,tt=f*Math.cos(Z*Math.PI/2),dt=m*Math.sin(Z*Math.PI/2)+g;for(let lt=0,Et=R.length;lt<Et;lt++){const yt=B(R[lt],X[lt],dt);Ot(yt.x,yt.y,-tt)}for(let lt=0,Et=_.length;lt<Et;lt++){const yt=_[lt];K=J[lt];for(let gt=0,$t=yt.length;gt<$t;gt++){const Xt=B(yt[gt],K[gt],dt);Ot(Xt.x,Xt.y,-tt)}}}const ct=m+g;for(let G=0;G<F;G++){const Z=d?B(z[G],Q[G],ct):z[G];S?(P.copy(v.normals[0]).multiplyScalar(Z.x),L.copy(v.binormals[0]).multiplyScalar(Z.y),N.copy(E[0]).add(P).add(L),Ot(N.x,N.y,N.z)):Ot(Z.x,Z.y,0)}for(let G=1;G<=h;G++)for(let Z=0;Z<F;Z++){const tt=d?B(z[Z],Q[Z],ct):z[Z];S?(P.copy(v.normals[G]).multiplyScalar(tt.x),L.copy(v.binormals[G]).multiplyScalar(tt.y),N.copy(E[G]).add(P).add(L),Ot(N.x,N.y,N.z)):Ot(tt.x,tt.y,u/h*G)}for(let G=p-1;G>=0;G--){const Z=G/p,tt=f*Math.cos(Z*Math.PI/2),dt=m*Math.sin(Z*Math.PI/2)+g;for(let lt=0,Et=R.length;lt<Et;lt++){const yt=B(R[lt],X[lt],dt);Ot(yt.x,yt.y,u+tt)}for(let lt=0,Et=_.length;lt<Et;lt++){const yt=_[lt];K=J[lt];for(let gt=0,$t=yt.length;gt<$t;gt++){const Xt=B(yt[gt],K[gt],dt);S?Ot(Xt.x,Xt.y+E[h-1].y,E[h-1].x+tt):Ot(Xt.x,Xt.y,u+tt)}}}zt(),bt();function zt(){const G=i.length/3;if(d){let Z=0,tt=F*Z;for(let dt=0;dt<O;dt++){const lt=q[dt];At(lt[2]+tt,lt[1]+tt,lt[0]+tt)}Z=h+p*2,tt=F*Z;for(let dt=0;dt<O;dt++){const lt=q[dt];At(lt[0]+tt,lt[1]+tt,lt[2]+tt)}}else{for(let Z=0;Z<O;Z++){const tt=q[Z];At(tt[2],tt[1],tt[0])}for(let Z=0;Z<O;Z++){const tt=q[Z];At(tt[0]+F*h,tt[1]+F*h,tt[2]+F*h)}}n.addGroup(G,i.length/3-G,0)}function bt(){const G=i.length/3;let Z=0;W(R,Z),Z+=R.length;for(let tt=0,dt=_.length;tt<dt;tt++){const lt=_[tt];W(lt,Z),Z+=lt.length}n.addGroup(G,i.length/3-G,1)}function W(G,Z){let tt=G.length;for(;--tt>=0;){const dt=tt;let lt=tt-1;lt<0&&(lt=G.length-1);for(let Et=0,yt=h+p*2;Et<yt;Et++){const gt=F*Et,$t=F*(Et+1),Xt=Z+dt+gt,b=Z+lt+gt,M=Z+lt+$t,H=Z+dt+$t;Ct(Xt,b,M,H)}}}function Ot(G,Z,tt){l.push(G),l.push(Z),l.push(tt)}function At(G,Z,tt){nt(G),nt(Z),nt(tt);const dt=i.length/3,lt=y.generateTopUV(n,i,dt-3,dt-2,dt-1);It(lt[0]),It(lt[1]),It(lt[2])}function Ct(G,Z,tt,dt){nt(G),nt(Z),nt(dt),nt(Z),nt(tt),nt(dt);const lt=i.length/3,Et=y.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);It(Et[0]),It(Et[1]),It(Et[3]),It(Et[1]),It(Et[2]),It(Et[3])}function nt(G){i.push(l[G*3+0]),i.push(l[G*3+1]),i.push(l[G*3+2])}function It(G){s.push(G.x),s.push(G.y)}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return z0(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,o=t.shapes.length;s<o;s++){const a=e[t.shapes[s]];n.push(a)}const i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new rh[i.type]().fromJSON(i)),new Qn(n,t.options)}}const k0={generateTopUV:function(r,t,e,n,i){const s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new Y(s,o),new Y(a,l),new Y(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){const o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],m=t[i*3+2],g=t[s*3],p=t[s*3+1],x=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new Y(o,1-l),new Y(c,1-u),new Y(d,1-m),new Y(g,1-x)]:[new Y(a,1-l),new Y(h,1-u),new Y(f,1-m),new Y(p,1-x)]}};function z0(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){const s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ba extends Zt{constructor(t=new Rn([new Y(0,.5),new Y(-.5,-.5),new Y(.5,-.5)]),e=12){super();this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],i=[],s=[],o=[];let a=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new te(i,3)),this.setAttribute("normal",new te(s,3)),this.setAttribute("uv",new te(o,2));function c(h){const u=i.length/3,d=h.extractPoints(e);let f=d.shape;const m=d.holes;pn.isClockWise(f)===!1&&(f=f.reverse());for(let p=0,x=m.length;p<x;p++){const y=m[p];pn.isClockWise(y)===!0&&(m[p]=y.reverse())}const g=pn.triangulateShape(f,m);for(let p=0,x=m.length;p<x;p++){const y=m[p];f=f.concat(y)}for(let p=0,x=f.length;p<x;p++){const y=f[p];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let p=0,x=g.length;p<x;p++){const y=g[p],E=y[0]+u,S=y[1]+u,v=y[2]+u;n.push(E,S,v),l+=3}}}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return F0(e,t)}static fromJSON(t,e){const n=[];for(let i=0,s=t.shapes.length;i<s;i++){const o=e[t.shapes[i]];n.push(o)}return new ba(n,t.curveSegments)}}function F0(r,t){if(t.shapes=[],Array.isArray(r))for(let e=0,n=r.length;e<n;e++){const i=r[e];t.shapes.push(i.uuid)}else t.shapes.push(r.uuid);return t}class Sa extends Zt{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super();this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new T,d=new T,f=[],m=[],g=[],p=[];for(let x=0;x<=n;x++){const y=[],E=x/n;let S=0;x==0&&o==0?S=.5/e:x==n&&l==Math.PI&&(S=-.5/e);for(let v=0;v<=e;v++){const L=v/e;u.x=-t*Math.cos(i+L*s)*Math.sin(o+E*a),u.y=t*Math.cos(o+E*a),u.z=t*Math.sin(i+L*s)*Math.sin(o+E*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),p.push(L+S,1-E),y.push(c++)}h.push(y)}for(let x=0;x<n;x++)for(let y=0;y<e;y++){const E=h[x][y+1],S=h[x][y],v=h[x+1][y],L=h[x+1][y+1];(x!==0||o>0)&&f.push(E,S,L),(x!==n-1||l<Math.PI)&&f.push(S,v,L)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(g,3)),this.setAttribute("uv",new te(p,2))}static fromJSON(t){return new Sa(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lh extends ae{constructor(t){super();this.type="ShadowMaterial",this.color=new pt(0),this.transparent=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this}}lh.prototype.isShadowMaterial=!0;class ch extends qe{constructor(t){super(t);this.type="RawShaderMaterial"}}ch.prototype.isRawShaderMaterial=!0;class Ws extends ae{constructor(t){super();this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Ws.prototype.isMeshStandardMaterial=!0;class hh extends Ws{constructor(t){super();this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Y(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return fe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._transmission=0,this.setValues(t)}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}hh.prototype.isMeshPhysicalMaterial=!0;class Hi extends ae{constructor(t){super();this.type="MeshPhongMaterial",this.color=new pt(16777215),this.specular=new pt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this}}Hi.prototype.isMeshPhongMaterial=!0;class uh extends ae{constructor(t){super();this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new pt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}uh.prototype.isMeshToonMaterial=!0;class dh extends ae{constructor(t){super();this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}dh.prototype.isMeshNormalMaterial=!0;class fh extends ae{constructor(t){super();this.type="MeshLambertMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ds,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this}}fh.prototype.isMeshLambertMaterial=!0;class ph extends ae{constructor(t){super();this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new pt(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Gi,this.normalScale=new Y(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.defines={MATCAP:""},this.color.copy(t.color),this.matcap=t.matcap,this.map=t.map,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.flatShading=t.flatShading,this}}ph.prototype.isMeshMatcapMaterial=!0;class mh extends ji{constructor(t){super();this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}}mh.prototype.isLineDashedMaterial=!0;const N0={ShadowMaterial:lh,SpriteMaterial:ma,RawShaderMaterial:ch,ShaderMaterial:qe,PointsMaterial:_a,MeshPhysicalMaterial:hh,MeshStandardMaterial:Ws,MeshPhongMaterial:Hi,MeshToonMaterial:uh,MeshNormalMaterial:dh,MeshLambertMaterial:fh,MeshDepthMaterial:da,MeshDistanceMaterial:fa,MeshBasicMaterial:Er,MeshMatcapMaterial:ph,LineDashedMaterial:mh,LineBasicMaterial:ji,Material:ae};ae.fromType=function(r){return new N0[r]};const Jt={arraySlice:function(r,t,e){return Jt.isTypedArray(r)?new r.constructor(r.subarray(t,e!==void 0?e:r.length)):r.slice(t,e)},convertArray:function(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)},isTypedArray:function(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)},getKeyframeOrder:function(r){function t(i,s){return r[i]-r[s]}const e=r.length,n=new Array(e);for(let i=0;i!==e;++i)n[i]=i;return n.sort(t),n},sortedArray:function(r,t,e){const n=r.length,i=new r.constructor(n);for(let s=0,o=0;o!==n;++s){const a=e[s]*t;for(let l=0;l!==t;++l)i[o++]=r[a+l]}return i},flattenJSON:function(r,t,e,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(t.push(s.time),e.push.apply(e,o)),s=r[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(t.push(s.time),o.toArray(e,e.length)),s=r[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(t.push(s.time),e.push(o)),s=r[i++];while(s!==void 0)},subclip:function(r,t,e,n,i=30){const s=r.clone();s.name=t;const o=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],h=c.getValueSize(),u=[],d=[];for(let f=0;f<c.times.length;++f){const m=c.times[f]*i;if(!(m<e||m>=n)){u.push(c.times[f]);for(let g=0;g<h;++g)d.push(c.values[f*h+g])}}u.length!==0&&(c.times=Jt.convertArray(u,c.times.constructor),c.values=Jt.convertArray(d,c.values.constructor),o.push(c))}s.tracks=o;let a=1/0;for(let l=0;l<s.tracks.length;++l)a>s.tracks[l].times[0]&&(a=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*a);return s.resetDuration(),s},makeClipAdditive:function(r,t=0,e=r,n=30){n<=0&&(n=30);const i=e.tracks.length,s=t/n;for(let o=0;o<i;++o){const a=e.tracks[o],l=a.ValueTypeName;if(l==="bool"||l==="string")continue;const c=r.tracks.find(function(x){return x.name===a.name&&x.ValueTypeName===l});if(c===void 0)continue;let h=0;const u=a.getValueSize();a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(h=u/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const m=a.times.length-1;let g;if(s<=a.times[0]){const x=h,y=u-h;g=Jt.arraySlice(a.values,x,y)}else if(s>=a.times[m]){const x=m*u+h,y=x+u-h;g=Jt.arraySlice(a.values,x,y)}else{const x=a.createInterpolant(),y=h,E=u-h;x.evaluate(s),g=Jt.arraySlice(x.resultBuffer,y,E)}l==="quaternion"&&new Te().fromArray(g).normalize().conjugate().toArray(g);const p=c.times.length;for(let x=0;x<p;++x){const y=x*f+d;if(l==="quaternion")Te.multiplyQuaternionsFlat(c.values,y,g,0,c.values,y);else{const E=f-d*2;for(let S=0;S<E;++S)c.values[y+S]-=g[S]}}}return r.blendMode=Dc,r}};class In{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,i=e[n],s=e[n-1];t:{e:{let o;n:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,t,s)}if(n===a)break;if(s=i,i=e[++n],t<i)break e}o=e.length;break n}if(!(t>=s)){const a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break e}o=n,n=0;break n}break t}for(;n<o;){const a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.beforeStart_(0,t,i);if(i===void 0)return n=e.length,this._cachedIndex=n,this.afterEnd_(n-1,s,t)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}In.prototype.beforeStart_=In.prototype.copySampleValue_;In.prototype.afterEnd_=In.prototype.copySampleValue_;class B0 extends In{constructor(t,e,n,i){super(t,e,n,i);this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ei,endingEnd:Ei}}intervalChanged_(t,e,n){const i=this.parameterPositions;let s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ti:s=t,a=2*e-n;break;case Ms:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ti:o=t,l=2*n-e;break;case Ms:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),g=m*m,p=g*m,x=-d*p+2*d*g-d*m,y=(1+d)*p+(-1.5-2*d)*g+(-.5+d)*m+1,E=(-1-f)*p+(1.5+f)*g+.5*m,S=f*p-f*g;for(let v=0;v!==a;++v)s[v]=x*o[h+v]+y*o[c+v]+E*o[l+v]+S*o[u+v];return s}}class gh extends In{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}}class O0 extends In{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}}class rn{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Jt.convertArray(e,this.TimeBufferType),this.values=Jt.convertArray(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Jt.convertArray(t.times,Array),values:Jt.convertArray(t.values,Array)};const i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new O0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new B0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ys:e=this.InterpolantFactoryMethodDiscrete;break;case vs:e=this.InterpolantFactoryMethodLinear;break;case to:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ys;case this.InterpolantFactoryMethodLinear:return vs;case this.InterpolantFactoryMethodSmooth:return to}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=Jt.arraySlice(n,s,o),this.values=Jt.arraySlice(this.values,s*a,o*a)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Jt.isTypedArray(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){const t=Jt.arraySlice(this.times),e=Jt.arraySlice(this.values),n=this.getValueSize(),i=this.getInterpolation()===to,s=t.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const g=e[u+m];if(g!==e[d+m]||g!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=Jt.arraySlice(t,0,o),this.values=Jt.arraySlice(e,0,o*n)):(this.times=t,this.values=e),this}clone(){const t=Jt.arraySlice(this.times,0),e=Jt.arraySlice(this.values,0),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}}rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=vs;class Zi extends rn{}Zi.prototype.ValueTypeName="bool";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ys;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class xh extends rn{}xh.prototype.ValueTypeName="color";class Es extends rn{}Es.prototype.ValueTypeName="number";class U0 extends In{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e);let c=t*a;for(let h=c+a;c!==h;c+=4)Te.slerpFlat(s,0,o,c-a,o,c,l);return s}}class Cr extends rn{InterpolantFactoryMethodLinear(t){return new U0(this.times,this.values,this.getValueSize(),t)}}Cr.prototype.ValueTypeName="quaternion";Cr.prototype.DefaultInterpolation=vs;Cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Yi extends rn{}Yi.prototype.ValueTypeName="string";Yi.prototype.ValueBufferType=Array;Yi.prototype.DefaultInterpolation=ys;Yi.prototype.InterpolantFactoryMethodLinear=void 0;Yi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ts extends rn{}Ts.prototype.ValueTypeName="vector";class cc{constructor(t,e=-1,n,i=sa){this.name=t,this.tracks=n,this.duration=e,this.blendMode=i,this.uuid=We(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,i=1/(t.fps||1);for(let o=0,a=n.length;o!==a;++o)e.push(V0(n[o]).scale(i));const s=new this(t.name,t.duration,e,t.blendMode);return s.uuid=t.uuid,s}static toJSON(t){const e=[],n=t.tracks,i={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let s=0,o=n.length;s!==o;++s)e.push(rn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(t,e,n,i){const s=e.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=Jt.getKeyframeOrder(l);l=Jt.sortedArray(l,1,h),c=Jt.sortedArray(c,1,h),!i&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new Es(".morphTargetInfluences["+e[a].name+"]",l,c).scale(1/n))}return new this(t,-1,o)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const i=t;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===e)return n[i];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=t.length;a<l;a++){const c=t[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],e,n));return o}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,g){if(f.length!==0){const p=[],x=[];Jt.flattenJSON(f,p,x,m),p.length!==0&&g.push(new u(d,p,x))}},i=[],s=t.name||"default",o=t.fps||30,a=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const p=[],x=[];for(let y=0;y!==d[m].morphTargets.length;++y){const E=d[m];p.push(E.time),x.push(E.morphTarget===g?1:0)}i.push(new Es(".morphTargetInfluence["+g+"]",p,x))}l=f.length*o}else{const f=".bones["+e[u].name+"]";n(Ts,f+".position",d,"pos",i),n(Cr,f+".quaternion",d,"rot",i),n(Ts,f+".scale",d,"scl",i)}}return i.length===0?null:new this(s,l,i,a)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,i=t.length;n!==i;++n){const s=this.tracks[n];e=Math.max(e,s.times[s.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function H0(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Es;case"vector":case"vector2":case"vector3":case"vector4":return Ts;case"color":return xh;case"quaternion":return Cr;case"bool":case"boolean":return Zi;case"string":return Yi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function V0(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=H0(r.type);if(r.times===void 0){const e=[],n=[];Jt.flattenJSON(r.keys,e,n,"value"),r.times=e,r.values=n}return t.parse!==void 0?t.parse(r):new t(r.name,r.times,r.values,r.interpolation)}const Vi={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class G0{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const W0=new G0;class xn{constructor(t){this.manager=t!==void 0?t:W0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const hn={};class _h extends xn{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Vi.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(hn[t]!==void 0){hn[t].push({onLoad:e,onProgress:n,onError:i});return}hn[t]=[],hn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream=="undefined"||c.body===void 0||c.body.getReader===void 0)return c;const h=hn[t],u=c.body.getReader(),d=c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const p=new ReadableStream({start(x){y();function y(){u.read().then(({done:E,value:S})=>{if(E)x.close();else{g+=S.byteLength;const v=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let L=0,P=h.length;L<P;L++){const N=h[L];N.onProgress&&N.onProgress(v)}x.enqueue(S),y()}})}}});return new Response(p)}else throw Error(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Vi.add(t,c);const h=hn[t];delete hn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hn[t];if(h===void 0)throw this.manager.itemError(t),c;delete hn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class yh extends xn{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Vi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=yr("img");function l(){h(),Vi.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class q0 extends xn{constructor(t){super(t)}load(t,e,n,i){const s=new Fs,o=new yh(this.manager);o.setCrossOrigin(this.crossOrigin),o.setPath(this.path);let a=0;function l(c){o.load(t[c],function(h){s.images[c]=h,a++,a===6&&(s.needsUpdate=!0,e&&e(s))},void 0,i)}for(let c=0;c<t.length;++c)l(c);return s}}class X0 extends xn{constructor(t){super(t)}load(t,e,n,i){const s=new he,o=new yh(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class nn extends Gt{constructor(t,e=1){super();this.type="Light",this.color=new pt(t),this.intensity=e}dispose(){}copy(t){return super.copy(t),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}nn.prototype.isLight=!0;class j0 extends nn{constructor(t,e,n){super(t,n);this.type="HemisphereLight",this.position.copy(Gt.DefaultUp),this.updateMatrix(),this.groundColor=new pt(e)}copy(t){return nn.prototype.copy.call(this,t),this.groundColor.copy(t.groundColor),this}}j0.prototype.isHemisphereLight=!0;const hc=new xt,uc=new T,dc=new T;class Ea{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Y(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ns,this._frameExtents=new Y(1,1),this._viewportCount=1,this._viewports=[new qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(uc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),hc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(e.projectionMatrix),n.multiply(e.matrixWorldInverse)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class vh extends Ea{constructor(){super(new ve(50,1,.5,500));this.focus=1}updateMatrices(t){const e=this.camera,n=_r*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}vh.prototype.isSpotLightShadow=!0;class Z0 extends nn{constructor(t,e,n=0,i=Math.PI/3,s=0,o=1){super(t,e);this.type="SpotLight",this.position.copy(Gt.DefaultUp),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.shadow=new vh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}Z0.prototype.isSpotLight=!0;const fc=new xt,sr=new T,zo=new T;class Mh extends Ea{constructor(){super(new ve(90,1,.5,500));this._frameExtents=new Y(4,2),this._viewportCount=6,this._viewports=[new qt(2,1,1,1),new qt(0,1,1,1),new qt(3,1,1,1),new qt(1,1,1,1),new qt(3,0,1,1),new qt(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),zo.copy(n.position),zo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(zo),n.updateMatrixWorld(),i.makeTranslation(-sr.x,-sr.y,-sr.z),fc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fc)}}Mh.prototype.isPointLightShadow=!0;class Ta extends nn{constructor(t,e,n=0,i=1){super(t,e);this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Mh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}Ta.prototype.isPointLight=!0;class wh extends Ea{constructor(){super(new ha(-5,5,5,-5,.5,500))}}wh.prototype.isDirectionalLightShadow=!0;class bh extends nn{constructor(t,e){super(t,e);this.type="DirectionalLight",this.position.copy(Gt.DefaultUp),this.updateMatrix(),this.target=new Gt,this.shadow=new wh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}bh.prototype.isDirectionalLight=!0;class Sh extends nn{constructor(t,e){super(t,e);this.type="AmbientLight"}}Sh.prototype.isAmbientLight=!0;class Y0 extends nn{constructor(t,e,n=10,i=10){super(t,e);this.type="RectAreaLight",this.width=n,this.height=i}get power(){return this.intensity*this.width*this.height*Math.PI}set power(t){this.intensity=t/(this.width*this.height*Math.PI)}copy(t){return super.copy(t),this.width=t.width,this.height=t.height,this}toJSON(t){const e=super.toJSON(t);return e.object.width=this.width,e.object.height=this.height,e}}Y0.prototype.isRectAreaLight=!0;class Eh{constructor(){this.coefficients=[];for(let t=0;t<9;t++)this.coefficients.push(new T)}set(t){for(let e=0;e<9;e++)this.coefficients[e].copy(t[e]);return this}zero(){for(let t=0;t<9;t++)this.coefficients[t].set(0,0,0);return this}getAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.282095),e.addScaledVector(o[1],.488603*i),e.addScaledVector(o[2],.488603*s),e.addScaledVector(o[3],.488603*n),e.addScaledVector(o[4],1.092548*(n*i)),e.addScaledVector(o[5],1.092548*(i*s)),e.addScaledVector(o[6],.315392*(3*s*s-1)),e.addScaledVector(o[7],1.092548*(n*s)),e.addScaledVector(o[8],.546274*(n*n-i*i)),e}getIrradianceAt(t,e){const n=t.x,i=t.y,s=t.z,o=this.coefficients;return e.copy(o[0]).multiplyScalar(.886227),e.addScaledVector(o[1],2*.511664*i),e.addScaledVector(o[2],2*.511664*s),e.addScaledVector(o[3],2*.511664*n),e.addScaledVector(o[4],2*.429043*n*i),e.addScaledVector(o[5],2*.429043*i*s),e.addScaledVector(o[6],.743125*s*s-.247708),e.addScaledVector(o[7],2*.429043*n*s),e.addScaledVector(o[8],.429043*(n*n-i*i)),e}add(t){for(let e=0;e<9;e++)this.coefficients[e].add(t.coefficients[e]);return this}addScaledSH(t,e){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(t.coefficients[n],e);return this}scale(t){for(let e=0;e<9;e++)this.coefficients[e].multiplyScalar(t);return this}lerp(t,e){for(let n=0;n<9;n++)this.coefficients[n].lerp(t.coefficients[n],e);return this}equals(t){for(let e=0;e<9;e++)if(!this.coefficients[e].equals(t.coefficients[e]))return!1;return!0}copy(t){return this.set(t.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(t,e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].fromArray(t,e+i*3);return this}toArray(t=[],e=0){const n=this.coefficients;for(let i=0;i<9;i++)n[i].toArray(t,e+i*3);return t}static getBasisAt(t,e){const n=t.x,i=t.y,s=t.z;e[0]=.282095,e[1]=.488603*i,e[2]=.488603*s,e[3]=.488603*n,e[4]=1.092548*n*i,e[5]=1.092548*i*s,e[6]=.315392*(3*s*s-1),e[7]=1.092548*n*s,e[8]=.546274*(n*n-i*i)}}Eh.prototype.isSphericalHarmonics3=!0;class Aa extends nn{constructor(t=new Eh,e=1){super(void 0,e);this.sh=t}copy(t){return super.copy(t),this.sh.copy(t.sh),this}fromJSON(t){return this.intensity=t.intensity,this.sh.fromArray(t.sh),this}toJSON(t){const e=super.toJSON(t);return e.object.sh=this.sh.toArray(),e}}Aa.prototype.isLightProbe=!0;class J0{static decodeText(t){if(typeof TextDecoder!="undefined")return new TextDecoder().decode(t);let e="";for(let n=0,i=t.length;n<i;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class $0 extends Zt{constructor(){super();this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}clone(){return new this.constructor().copy(this)}toJSON(){const t=super.toJSON(this);return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}}$0.prototype.isInstancedBufferGeometry=!0;class K0 extends xn{constructor(t){super(t);typeof createImageBitmap=="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch=="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Vi.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(t,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Vi.add(t,l),e&&e(l),s.manager.itemEnd(t)}).catch(function(l){i&&i(l),s.manager.itemError(t),s.manager.itemEnd(t)}),s.manager.itemStart(t)}}K0.prototype.isImageBitmapLoader=!0;let ls;const Q0={getContext:function(){return ls===void 0&&(ls=new(window.AudioContext||window.webkitAudioContext)),ls},setContext:function(r){ls=r}};class tx extends xn{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new _h(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{const l=a.slice(0);Q0.getContext().decodeAudioData(l,function(h){e(h)})}catch(l){i?i(l):console.error(l),s.manager.itemError(t)}},n,i)}}class ex extends Aa{constructor(t,e,n=1){super(void 0,n);const i=new pt().set(t),s=new pt().set(e),o=new T(i.r,i.g,i.b),a=new T(s.r,s.g,s.b),l=Math.sqrt(Math.PI),c=l*Math.sqrt(.75);this.sh.coefficients[0].copy(o).add(a).multiplyScalar(l),this.sh.coefficients[1].copy(o).sub(a).multiplyScalar(c)}}ex.prototype.isHemisphereLightProbe=!0;class nx extends Aa{constructor(t,e=1){super(void 0,e);const n=new pt().set(t);this.sh.coefficients[0].set(n.r,n.g,n.b).multiplyScalar(2*Math.sqrt(Math.PI))}}nx.prototype.isAmbientLightProbe=!0;class ix extends Gt{constructor(t){super();this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}class rx{constructor(t,e,n){this.binding=t,this.valueSize=n;let i,s,o;switch(e){case"quaternion":i=this._slerp,s=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,s=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,s=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=s,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,i=this.valueSize,s=t*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[s+a]=n[a];o=e}else{o+=e;const a=e/o;this._mixBufferRegion(n,s,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,i,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,i=t*e+e,s=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=e*this._origIndex;this._mixBufferRegion(n,i,l,1-s,e)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){a.setValue(n,i);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,i=n*this._origIndex;t.getValue(e,i);for(let s=n,o=i;s!==o;++s)e[s]=e[i+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,i,s){if(i>=.5)for(let o=0;o!==s;++o)t[e+o]=t[n+o]}_slerp(t,e,n,i){Te.slerpFlat(t,e,t,e,t,n,i)}_slerpAdditive(t,e,n,i,s){const o=this._workIndex*s;Te.multiplyQuaternionsFlat(t,o,t,e,t,n),Te.slerpFlat(t,e,t,e,t,o,i)}_lerp(t,e,n,i,s){const o=1-i;for(let a=0;a!==s;++a){const l=e+a;t[l]=t[l]*o+t[n+a]*i}}_lerpAdditive(t,e,n,i,s){for(let o=0;o!==s;++o){const a=e+o;t[a]=t[a]+t[n+o]*i}}}const Ca="\\[\\]\\.:\\/",sx=new RegExp("["+Ca+"]","g"),La="[^"+Ca+"]",ox="[^"+Ca.replace("\\.","")+"]",ax=/((?:WC+[\/:])*)/.source.replace("WC",La),lx=/(WCOD+)?/.source.replace("WCOD",ox),cx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",La),hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",La),ux=new RegExp("^"+ax+lx+cx+hx+"$"),dx=["material","materials","bones"];class fx{constructor(t,e,n){const i=n||Vt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Vt{constructor(t,e,n){this.path=e,this.parsedPath=n||Vt.parseTrackName(e),this.node=Vt.findNode(t,this.parsedPath.nodeName)||t,this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Vt.Composite(t,e,n):new Vt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(t){const e=ux.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);dx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===e||a.uuid===e)return a;const l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,i=e.propertyName;let s=e.propertyIndex;if(t||(t=Vt.findNode(this.rootNode,e.nodeName)||this.rootNode,this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const o=t[i];if(o===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(t.geometry.isBufferGeometry){if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=fx;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class px{constructor(t,e,n=null,i=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=i;const s=e.tracks,o=s.length,a=new Array(o),l={endingStart:Ei,endingEnd:Ei};for(let c=0;c!==o;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Hu,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const i=this._clip.duration,s=t._clip.duration,o=s/i,a=i/s;t.warp(1,o,e),this.warp(a,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const i=this._mixer,s=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+n,c[0]=t/o,c[1]=e/o,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,i){if(!this.enabled){this._updateWeight(t);return}const s=this._startTime;if(s!==null){const l=(t-s)*n;if(l<0||n===0)return;this._startTime=null,e=n*l}e*=this._updateTimeScale(t);const o=this._updateTime(e),a=this._updateWeight(t);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Dc:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case sa:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(t)[0];e*=i,t>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;n!==null&&(e*=n.evaluate(t)[0],t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e))}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let i=this.time+t,s=this._loopCount;const o=n===Vu;if(t===0)return s===-1?i:o&&(s&1)===1?e-i:i;if(n===Uu){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(i>=e)i=e;else if(i<0)i=0;else{this.time=i;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(s===-1&&(t>=0?(s=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=e||i<0){const a=Math.floor(i/e);i-=e*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=t>0?e:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=s,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(s&1)===1)return e-i}return i}_setEndings(t,e,n){const i=this._interpolantSettings;n?(i.endingStart=Ti,i.endingEnd=Ti):(t?i.endingStart=this.zeroSlopeAtStart?Ti:Ei:i.endingStart=Ms,e?i.endingEnd=this.zeroSlopeAtEnd?Ti:Ei:i.endingEnd=Ms)}_scheduleFading(t,e,n){const i=this._mixer,s=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=s,l[0]=e,a[1]=s+t,l[1]=n,this}}class mx extends Jn{constructor(t){super();this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,i=t._clip.tracks,s=i.length,o=t._propertyBindings,a=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=i[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const g=e&&e._propertyBindings[u].binding.parsedPath;m=new rx(Vt.create(n,f,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,i=t._clip.uuid,s=this._actionsByClip[i];this._bindAction(t,s&&s.knownActions[0]),this._addInactiveAction(t,i,n)}const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const i=this._actions,s=this._actionsByClip;let o=s[e];if(o===void 0)o={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,s[e]=o;else{const a=o.knownActions;t._byClipCacheIndex=a.length,a.push(t)}t._cacheIndex=i.length,i.push(t),o.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],i=t._cacheIndex;n._cacheIndex=i,e[i]=n,e.pop(),t._cacheIndex=null;const s=t._clip.uuid,o=this._actionsByClip,a=o[s],l=a.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const u=a.actionByRoot,d=(t._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[s],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,i=e.length;n!==i;++n){const s=e[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,i=this._nActiveActions++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,i=--this._nActiveActions,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_addInactiveBinding(t,e,n){const i=this._bindingsByRootAndName,s=this._bindings;let o=i[e];o===void 0&&(o={},i[e]=o),o[n]=t,t._cacheIndex=s.length,s.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,i=n.rootNode.uuid,s=n.path,o=this._bindingsByRootAndName,a=o[i],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete a[s],Object.keys(a).length===0&&delete o[i]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,i=this._nActiveBindings++,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,i=--this._nActiveBindings,s=e[i];t._cacheIndex=i,e[i]=t,s._cacheIndex=n,e[n]=s}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new gh(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,i=--this._nActiveControlInterpolants,s=e[i];t.__cacheIndex=i,e[i]=t,s.__cacheIndex=n,e[n]=s}clipAction(t,e,n){const i=e||this._root,s=i.uuid;let o=typeof t=="string"?cc.findByName(i,t):t;const a=o!==null?o.uuid:t,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=sa),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new px(this,o,e,n);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(t,e){const n=e||this._root,i=n.uuid,s=typeof t=="string"?cc.findByName(n,t):t,o=s?s.uuid:t,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,i=this.time+=t,s=Math.sign(t),o=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(i,t,s,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,i=this._actionsByClip,s=i[n];if(s!==void 0){const o=s.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,e[h]=u,e.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,s=i[e];if(s!==void 0)for(const o in s){const a=s[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}mx.prototype._controlInterpolantsResultBuffer=new Float32Array(1);class gx extends Ar{constructor(t,e,n=1){super(t,e);this.meshPerAttribute=n}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){const e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){const e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}}gx.prototype.isInstancedInterleavedBuffer=!0;const Tn=new T,cs=new xt,Fo=new xt;class xx extends xa{constructor(t){const e=Th(t),n=new Zt,i=[],s=[],o=new pt(0,0,1),a=new pt(0,1,0);for(let c=0;c<e.length;c++){const h=e[c];h.parent&&h.parent.isBone&&(i.push(0,0,0),i.push(0,0,0),s.push(o.r,o.g,o.b),s.push(a.r,a.g,a.b))}n.setAttribute("position",new te(i,3)),n.setAttribute("color",new te(s,3));const l=new ji({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l);this.type="SkeletonHelper",this.isSkeletonHelper=!0,this.root=t,this.bones=e,this.matrix=t.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(t){const e=this.bones,n=this.geometry,i=n.getAttribute("position");Fo.copy(this.root.matrixWorld).invert();for(let s=0,o=0;s<e.length;s++){const a=e[s];a.parent&&a.parent.isBone&&(cs.multiplyMatrices(Fo,a.matrixWorld),Tn.setFromMatrixPosition(cs),i.setXYZ(o,Tn.x,Tn.y,Tn.z),cs.multiplyMatrices(Fo,a.parent.matrixWorld),Tn.setFromMatrixPosition(cs),i.setXYZ(o+1,Tn.x,Tn.y,Tn.z),o+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(t)}}function Th(r){const t=[];r.isBone===!0&&t.push(r);for(let e=0;e<r.children.length;e++)t.push.apply(t,Th(r.children[e]));return t}class Hn extends xa{constructor(t=10,e=10,n=4473924,i=8947848){n=new pt(n),i=new pt(i);const s=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){l.push(-a,0,m,a,0,m),l.push(m,0,-a,m,0,a);const g=d===s?n:i;g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3,g.toArray(c,f),f+=3}const h=new Zt;h.setAttribute("position",new te(l,3)),h.setAttribute("color",new te(c,3));const u=new ji({vertexColors:!0,toneMapped:!1});super(h,u);this.type="GridHelper"}}class _x{constructor(){this.type="ShapePath",this.color=new pt,this.subPaths=[],this.currentPath=null}moveTo(t,e){return this.currentPath=new Ss,this.subPaths.push(this.currentPath),this.currentPath.moveTo(t,e),this}lineTo(t,e){return this.currentPath.lineTo(t,e),this}quadraticCurveTo(t,e,n,i){return this.currentPath.quadraticCurveTo(t,e,n,i),this}bezierCurveTo(t,e,n,i,s,o){return this.currentPath.bezierCurveTo(t,e,n,i,s,o),this}splineThru(t){return this.currentPath.splineThru(t),this}toShapes(t,e){function n(y){const E=[];for(let S=0,v=y.length;S<v;S++){const L=y[S],P=new Rn;P.curves=L.curves,E.push(P)}return E}function i(y,E){const S=E.length;let v=!1;for(let L=S-1,P=0;P<S;L=P++){let N=E[L],et=E[P],z=et.x-N.x,_=et.y-N.y;if(Math.abs(_)>Number.EPSILON){if(_<0&&(N=E[P],z=-z,et=E[L],_=-_),y.y<N.y||y.y>et.y)continue;if(y.y===N.y){if(y.x===N.x)return!0}else{const C=_*(y.x-N.x)-z*(y.y-N.y);if(C===0)return!0;if(C<0)continue;v=!v}}else{if(y.y!==N.y)continue;if(et.x<=y.x&&y.x<=N.x||N.x<=y.x&&y.x<=et.x)return!0}}return v}const s=pn.isClockWise,o=this.subPaths;if(o.length===0)return[];if(e===!0)return n(o);let a,l,c;const h=[];if(o.length===1)return l=o[0],c=new Rn,c.curves=l.curves,h.push(c),h;let u=!s(o[0].getPoints());u=t?!u:u;const d=[],f=[];let m=[],g=0,p;f[g]=void 0,m[g]=[];for(let y=0,E=o.length;y<E;y++)l=o[y],p=l.getPoints(),a=s(p),a=t?!a:a,a?(!u&&f[g]&&g++,f[g]={s:new Rn,p},f[g].s.curves=l.curves,u&&g++,m[g]=[]):m[g].push({h:l,p:p[0]});if(!f[0])return n(o);if(f.length>1){let y=!1,E=0;for(let S=0,v=f.length;S<v;S++)d[S]=[];for(let S=0,v=f.length;S<v;S++){const L=m[S];for(let P=0;P<L.length;P++){const N=L[P];let et=!0;for(let z=0;z<f.length;z++)i(N.p,f[z].p)&&(S!==z&&E++,et?(et=!1,d[z].push(N)):y=!0);et&&d[S].push(N)}}E>0&&y===!1&&(m=d)}let x;for(let y=0,E=f.length;y<E;y++){c=f[y].s,h.push(c),x=m[y];for(let S=0,v=x.length;S<v;S++)c.holes.push(x[S].h)}return h}}const Ke=new Uint32Array(512),Qe=new Uint32Array(512);for(let r=0;r<256;++r){const t=r-127;t<-27?(Ke[r]=0,Ke[r|256]=32768,Qe[r]=24,Qe[r|256]=24):t<-14?(Ke[r]=1024>>-t-14,Ke[r|256]=1024>>-t-14|32768,Qe[r]=-t-1,Qe[r|256]=-t-1):t<=15?(Ke[r]=t+15<<10,Ke[r|256]=t+15<<10|32768,Qe[r]=13,Qe[r|256]=13):t<128?(Ke[r]=31744,Ke[r|256]=64512,Qe[r]=24,Qe[r|256]=24):(Ke[r]=31744,Ke[r|256]=64512,Qe[r]=13,Qe[r|256]=13)}const Ah=new Uint32Array(2048),Lr=new Uint32Array(64),yx=new Uint32Array(64);for(let r=1;r<1024;++r){let t=r<<13,e=0;for(;(t&8388608)===0;)t<<=1,e-=8388608;t&=-8388609,e+=947912704,Ah[r]=t|e}for(let r=1024;r<2048;++r)Ah[r]=939524096+(r-1024<<13);for(let r=1;r<31;++r)Lr[r]=r<<23;Lr[31]=1199570944;Lr[32]=2147483648;for(let r=33;r<63;++r)Lr[r]=2147483648+(r-32<<23);Lr[63]=3347054592;for(let r=1;r<64;++r)r!==32&&(yx[r]=1024);ze.create=function(r,t){return console.log("THREE.Curve.create() has been deprecated"),r.prototype=Object.create(ze.prototype),r.prototype.constructor=r,r.prototype.getPoint=t,r};Ss.prototype.fromPoints=function(r){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(r)};Hn.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};xx.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};xn.prototype.extractUrlBase=function(r){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),J0.extractUrlBase(r)};xn.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Xe.prototype.center=function(r){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(r)};Xe.prototype.empty=function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Xe.prototype.isIntersectionBox=function(r){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};Xe.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};Xe.prototype.size=function(r){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(r)};Kn.prototype.toVector3=function(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")};Wi.prototype.empty=function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()};Ns.prototype.setFromMatrix=function(r){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(r)};pe.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};pe.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};pe.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")};pe.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),r.applyMatrix3(this)};pe.prototype.applyToVector3Array=function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")};pe.prototype.getInverse=function(r){return console.warn("THREE.Matrix3: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};xt.prototype.extractPosition=function(r){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(r)};xt.prototype.flattenToArrayOffset=function(r,t){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(r,t)};xt.prototype.getPosition=function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new T().setFromMatrixColumn(this,3)};xt.prototype.setRotationFromQuaternion=function(r){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(r)};xt.prototype.multiplyToArray=function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")};xt.prototype.multiplyVector3=function(r){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xt.prototype.multiplyVector4=function(r){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xt.prototype.multiplyVector3Array=function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")};xt.prototype.rotateAxis=function(r){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),r.transformDirection(this)};xt.prototype.crossVector=function(r){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xt.prototype.translate=function(){console.error("THREE.Matrix4: .translate() has been removed.")};xt.prototype.rotateX=function(){console.error("THREE.Matrix4: .rotateX() has been removed.")};xt.prototype.rotateY=function(){console.error("THREE.Matrix4: .rotateY() has been removed.")};xt.prototype.rotateZ=function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")};xt.prototype.rotateByAxis=function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")};xt.prototype.applyToBufferAttribute=function(r){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),r.applyMatrix4(this)};xt.prototype.applyToVector3Array=function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")};xt.prototype.makeFrustum=function(r,t,e,n,i,s){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(r,t,n,e,i,s)};xt.prototype.getInverse=function(r){return console.warn("THREE.Matrix4: .getInverse() has been removed. Use matrixInv.copy( matrix ).invert(); instead."),this.copy(r).invert()};dn.prototype.isIntersectionLine=function(r){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(r)};Te.prototype.multiplyVector3=function(r){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),r.applyQuaternion(this)};Te.prototype.inverse=function(){return console.warn("THREE.Quaternion: .inverse() has been renamed to invert()."),this.invert()};qi.prototype.isIntersectionBox=function(r){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(r)};qi.prototype.isIntersectionPlane=function(r){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(r)};qi.prototype.isIntersectionSphere=function(r){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(r)};ie.prototype.area=function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()};ie.prototype.barycoordFromPoint=function(r,t){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(r,t)};ie.prototype.midpoint=function(r){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(r)};ie.prototypenormal=function(r){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(r)};ie.prototype.plane=function(r){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(r)};ie.barycoordFromPoint=function(r,t,e,n,i){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),ie.getBarycoord(r,t,e,n,i)};ie.normal=function(r,t,e,n){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),ie.getNormal(r,t,e,n)};Rn.prototype.extractAllPoints=function(r){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(r)};Rn.prototype.extrude=function(r){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Qn(this,r)};Rn.prototype.makeGeometry=function(r){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new ba(this,r)};Y.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};Y.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};Y.prototype.lengthManhattan=function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};T.prototype.setEulerFromRotationMatrix=function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")};T.prototype.setEulerFromQuaternion=function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")};T.prototype.getPositionFromMatrix=function(r){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(r)};T.prototype.getScaleFromMatrix=function(r){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(r)};T.prototype.getColumnFromMatrix=function(r,t){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(t,r)};T.prototype.applyProjection=function(r){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(r)};T.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};T.prototype.distanceToManhattan=function(r){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(r)};T.prototype.lengthManhattan=function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};qt.prototype.fromAttribute=function(r,t,e){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(r,t,e)};qt.prototype.lengthManhattan=function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()};Gt.prototype.getChildByName=function(r){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(r)};Gt.prototype.renderDepth=function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")};Gt.prototype.translate=function(r,t){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(t,r)};Gt.prototype.getWorldRotation=function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")};Gt.prototype.applyMatrix=function(r){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Gt.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(r){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=r}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});me.prototype.setDrawMode=function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")};Object.defineProperties(me.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Gu},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Kc.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};ve.prototype.setLens=function(r,t){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),t!==void 0&&(this.filmGauge=t),this.setFocalLength(r)};Object.defineProperties(nn.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(r){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=r}},shadowCameraLeft:{set:function(r){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=r}},shadowCameraRight:{set:function(r){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=r}},shadowCameraTop:{set:function(r){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=r}},shadowCameraBottom:{set:function(r){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=r}},shadowCameraNear:{set:function(r){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=r}},shadowCameraFar:{set:function(r){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=r}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(r){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=r}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(r){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=r}},shadowMapHeight:{set:function(r){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=r}}});Object.defineProperties(oe.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ws},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ws)}}});oe.prototype.setDynamic=function(r){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?ws:xr),this};oe.prototype.copyIndicesArray=function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},oe.prototype.setArray=function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Zt.prototype.addIndex=function(r){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(r)};Zt.prototype.addAttribute=function(r,t){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(t&&t.isBufferAttribute)&&!(t&&t.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(r,new oe(arguments[1],arguments[2]))):r==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(t),this):this.setAttribute(r,t)};Zt.prototype.addDrawCall=function(r,t,e){e!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(r,t)};Zt.prototype.clearDrawCalls=function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()};Zt.prototype.computeOffsets=function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")};Zt.prototype.removeAttribute=function(r){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(r)};Zt.prototype.applyMatrix=function(r){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(r)};Object.defineProperties(Zt.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Ar.prototype.setDynamic=function(r){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(r===!0?ws:xr),this};Ar.prototype.setArray=function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")};Qn.prototype.getArrays=function(){console.error("THREE.ExtrudeGeometry: .getArrays() has been removed.")};Qn.prototype.addShapeList=function(){console.error("THREE.ExtrudeGeometry: .addShapeList() has been removed.")};Qn.prototype.addShape=function(){console.error("THREE.ExtrudeGeometry: .addShape() has been removed.")};pa.prototype.dispose=function(){console.error("THREE.Scene: .dispose() has been removed.")};Object.defineProperties(ae.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new pt}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(r){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=r===Cc}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(r){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=r}},vertexTangents:{get:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")},set:function(){console.warn("THREE."+this.type+": .vertexTangents has been removed.")}}});Object.defineProperties(qe.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(r){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=r}}});Wt.prototype.clearTarget=function(r,t,e,n){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(r),this.clear(t,e,n)};Wt.prototype.animate=function(r){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(r)};Wt.prototype.getCurrentRenderTarget=function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()};Wt.prototype.getMaxAnisotropy=function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()};Wt.prototype.getPrecision=function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision};Wt.prototype.resetGLState=function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()};Wt.prototype.supportsFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")};Wt.prototype.supportsHalfFloatTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")};Wt.prototype.supportsStandardDerivatives=function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")};Wt.prototype.supportsCompressedTextureS3TC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")};Wt.prototype.supportsCompressedTexturePVRTC=function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")};Wt.prototype.supportsBlendMinMax=function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")};Wt.prototype.supportsVertexTextures=function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures};Wt.prototype.supportsInstancedArrays=function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")};Wt.prototype.enableScissorTest=function(r){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(r)};Wt.prototype.initMaterial=function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")};Wt.prototype.addPrePlugin=function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")};Wt.prototype.addPostPlugin=function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")};Wt.prototype.updateShadowMap=function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")};Wt.prototype.setFaceCulling=function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")};Wt.prototype.allocTextureUnit=function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")};Wt.prototype.setTexture=function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")};Wt.prototype.setTexture2D=function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")};Wt.prototype.setTextureCube=function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")};Wt.prototype.getActiveMipMapLevel=function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()};Object.defineProperties(Wt.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=r}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(r){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=r}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(r){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=r===!0?Yt:mn}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}},gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});Object.defineProperties(Zc.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Re.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=r}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(r){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=r}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=r}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(r){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=r}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(r){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=r}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(r){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=r}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(r){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=r}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(r){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=r}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(r){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=r}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(r){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=r}}});ix.prototype.load=function(r){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const t=this;return new tx().load(r,function(n){t.setBuffer(n)}),this};ca.prototype.updateCubeMap=function(r,t){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(r,t)};ca.prototype.clear=function(r,t,e,n){return console.warn("THREE.CubeCamera: .clear() is now .renderTarget.clear()."),this.renderTarget.clear(r,t,e,n)};$n.crossOrigin=void 0;$n.loadTexture=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const i=new X0;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};$n.loadTextureCube=function(r,t,e,n){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const i=new q0;i.setCrossOrigin(this.crossOrigin);const s=i.load(r,e,void 0,n);return t&&(s.mapping=t),s};$n.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};$n.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ra}}));typeof window!="undefined"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ra);class vx extends xn{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new _h(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(s.withCredentials),o.load(t,function(a){let l;try{l=JSON.parse(a)}catch{console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),l=JSON.parse(a.substring(65,a.length-2))}const c=s.parse(l);e&&e(c)},n,i)}parse(t){return new Ch(t)}}class Ch{constructor(t){this.type="Font",this.data=t}generateShapes(t,e=100){const n=[],i=Mx(t,e,this.data);for(let s=0,o=i.length;s<o;s++)Array.prototype.push.apply(n,i[s].toShapes());return n}}function Mx(r,t,e){const n=Array.from(r),i=t/e.resolution,s=(e.boundingBox.yMax-e.boundingBox.yMin+e.underlineThickness)*i,o=[];let a=0,l=0;for(let c=0;c<n.length;c++){const h=n[c];if(h===`
`)a=0,l-=s;else{const u=wx(h,i,a,l,e);a+=u.offsetX,o.push(u.path)}}return o}function wx(r,t,e,n,i){const s=i.glyphs[r]||i.glyphs["?"];if(!s){console.error('THREE.Font: character "'+r+'" does not exists in font family '+i.familyName+".");return}const o=new _x;let a,l,c,h,u,d,f,m;if(s.o){const g=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let p=0,x=g.length;p<x;)switch(g[p++]){case"m":a=g[p++]*t+e,l=g[p++]*t+n,o.moveTo(a,l);break;case"l":a=g[p++]*t+e,l=g[p++]*t+n,o.lineTo(a,l);break;case"q":c=g[p++]*t+e,h=g[p++]*t+n,u=g[p++]*t+e,d=g[p++]*t+n,o.quadraticCurveTo(u,d,c,h);break;case"b":c=g[p++]*t+e,h=g[p++]*t+n,u=g[p++]*t+e,d=g[p++]*t+n,f=g[p++]*t+e,m=g[p++]*t+n,o.bezierCurveTo(u,d,f,m,c,h);break}}return{offsetX:s.ha*t,path:o}}Ch.prototype.isFont=!0;class bx extends Qn{constructor(t,e={}){const n=e.font;if(n===void 0)super();else{const i=n.generateShapes(t,e.size);e.depth=e.height!==void 0?e.height:50,e.bevelThickness===void 0&&(e.bevelThickness=10),e.bevelSize===void 0&&(e.bevelSize=8),e.bevelEnabled===void 0&&(e.bevelEnabled=!1);super(i,e)}this.type="TextGeometry"}}function No(r,t,e){if(r&&r.length){const[n,i]=t,s=Math.PI/180*e,o=Math.cos(s),a=Math.sin(s);r.forEach(l=>{const[c,h]=l;l[0]=(c-n)*o-(h-i)*a+n,l[1]=(c-n)*a+(h-i)*o+i})}}function qs(r){const t=r[0],e=r[1];return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function Rr(r,t){const e=t.hachureAngle+90;let n=t.hachureGap;n<0&&(n=4*t.strokeWidth),n=Math.max(n,.1);const i=[0,0];if(e)for(const o of r)No(o,i,e);const s=function(o,a){const l=[];for(const f of o){const m=[...f];m[0].join(",")!==m[m.length-1].join(",")&&m.push([m[0][0],m[0][1]]),m.length>2&&l.push(m)}const c=[];a=Math.max(a,.1);const h=[];for(const f of l)for(let m=0;m<f.length-1;m++){const g=f[m],p=f[m+1];if(g[1]!==p[1]){const x=Math.min(g[1],p[1]);h.push({ymin:x,ymax:Math.max(g[1],p[1]),x:x===g[1]?g[0]:p[0],islope:(p[0]-g[0])/(p[1]-g[1])})}}if(h.sort((f,m)=>f.ymin<m.ymin?-1:f.ymin>m.ymin?1:f.x<m.x?-1:f.x>m.x?1:f.ymax===m.ymax?0:(f.ymax-m.ymax)/Math.abs(f.ymax-m.ymax)),!h.length)return c;let u=[],d=h[0].ymin;for(;u.length||h.length;){if(h.length){let f=-1;for(let m=0;m<h.length&&!(h[m].ymin>d);m++)f=m;h.splice(0,f+1).forEach(m=>{u.push({s:d,edge:m})})}if(u=u.filter(f=>!(f.edge.ymax<=d)),u.sort((f,m)=>f.edge.x===m.edge.x?0:(f.edge.x-m.edge.x)/Math.abs(f.edge.x-m.edge.x)),u.length>1)for(let f=0;f<u.length;f+=2){const m=f+1;if(m>=u.length)break;const g=u[f].edge,p=u[m].edge;c.push([[Math.round(g.x),d],[Math.round(p.x),d]])}d+=a,u.forEach(f=>{f.edge.x=f.edge.x+a*f.edge.islope})}return c}(r,n);if(e){for(const o of r)No(o,i,-e);(function(o,a,l){const c=[];o.forEach(h=>c.push(...h)),No(c,a,l)})(s,i,-e)}return s}class Ra{constructor(t){this.helper=t}fillPolygons(t,e){return this._fillPolygons(t,e)}_fillPolygons(t,e){const n=Rr(t,e);return{type:"fillSketch",ops:this.renderLines(n,e)}}renderLines(t,e){const n=[];for(const i of t)n.push(...this.helper.doubleLineOps(i[0][0],i[0][1],i[1][0],i[1][1],e));return n}}class Sx extends Ra{fillPolygons(t,e){let n=e.hachureGap;n<0&&(n=4*e.strokeWidth),n=Math.max(n,.1);const i=Rr(t,Object.assign({},e,{hachureGap:n})),s=Math.PI/180*e.hachureAngle,o=[],a=.5*n*Math.cos(s),l=.5*n*Math.sin(s);for(const[c,h]of i)qs([c,h])&&o.push([[c[0]-a,c[1]+l],[...h]],[[c[0]+a,c[1]-l],[...h]]);return{type:"fillSketch",ops:this.renderLines(o,e)}}}class Ex extends Ra{fillPolygons(t,e){const n=this._fillPolygons(t,e),i=Object.assign({},e,{hachureAngle:e.hachureAngle+90}),s=this._fillPolygons(t,i);return n.ops=n.ops.concat(s.ops),n}}class Tx{constructor(t){this.helper=t}fillPolygons(t,e){const n=Rr(t,e=Object.assign({},e,{hachureAngle:0}));return this.dotsOnLines(n,e)}dotsOnLines(t,e){const n=[];let i=e.hachureGap;i<0&&(i=4*e.strokeWidth),i=Math.max(i,.1);let s=e.fillWeight;s<0&&(s=e.strokeWidth/2);const o=i/4;for(const a of t){const l=qs(a),c=l/i,h=Math.ceil(c)-1,u=l-h*i,d=(a[0][0]+a[1][0])/2-i/4,f=Math.min(a[0][1],a[1][1]);for(let m=0;m<h;m++){const g=f+u+m*i,p=d-o+2*Math.random()*o,x=g-o+2*Math.random()*o,y=this.helper.ellipse(p,x,s,s,e);n.push(...y.ops)}}return{type:"fillSketch",ops:n}}}class Ax{constructor(t){this.helper=t}fillPolygons(t,e){const n=Rr(t,e);return{type:"fillSketch",ops:this.dashedLine(n,e)}}dashedLine(t,e){const n=e.dashOffset<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashOffset,i=e.dashGap<0?e.hachureGap<0?4*e.strokeWidth:e.hachureGap:e.dashGap,s=[];return t.forEach(o=>{const a=qs(o),l=Math.floor(a/(n+i)),c=(a+i-l*(n+i))/2;let h=o[0],u=o[1];h[0]>u[0]&&(h=o[1],u=o[0]);const d=Math.atan((u[1]-h[1])/(u[0]-h[0]));for(let f=0;f<l;f++){const m=f*(n+i),g=m+n,p=[h[0]+m*Math.cos(d)+c*Math.cos(d),h[1]+m*Math.sin(d)+c*Math.sin(d)],x=[h[0]+g*Math.cos(d)+c*Math.cos(d),h[1]+g*Math.sin(d)+c*Math.sin(d)];s.push(...this.helper.doubleLineOps(p[0],p[1],x[0],x[1],e))}}),s}}class Cx{constructor(t){this.helper=t}fillPolygons(t,e){const n=e.hachureGap<0?4*e.strokeWidth:e.hachureGap,i=e.zigzagOffset<0?n:e.zigzagOffset,s=Rr(t,e=Object.assign({},e,{hachureGap:n+i}));return{type:"fillSketch",ops:this.zigzagLines(s,i,e)}}zigzagLines(t,e,n){const i=[];return t.forEach(s=>{const o=qs(s),a=Math.round(o/(2*e));let l=s[0],c=s[1];l[0]>c[0]&&(l=s[1],c=s[0]);const h=Math.atan((c[1]-l[1])/(c[0]-l[0]));for(let u=0;u<a;u++){const d=2*u*e,f=2*(u+1)*e,m=Math.sqrt(2*Math.pow(e,2)),g=[l[0]+d*Math.cos(h),l[1]+d*Math.sin(h)],p=[l[0]+f*Math.cos(h),l[1]+f*Math.sin(h)],x=[g[0]+m*Math.cos(h+Math.PI/4),g[1]+m*Math.sin(h+Math.PI/4)];i.push(...this.helper.doubleLineOps(g[0],g[1],x[0],x[1],n),...this.helper.doubleLineOps(x[0],x[1],p[0],p[1],n))}}),i}}const we={};class Lx{constructor(t){this.seed=t}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}}const hs={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Bo(r,t){return r.type===t}function ta(r){const t=[],e=function(o){const a=new Array;for(;o!=="";)if(o.match(/^([ \t\r\n,]+)/))o=o.substr(RegExp.$1.length);else if(o.match(/^([aAcChHlLmMqQsStTvVzZ])/))a[a.length]={type:0,text:RegExp.$1},o=o.substr(RegExp.$1.length);else{if(!o.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];a[a.length]={type:1,text:`${parseFloat(RegExp.$1)}`},o=o.substr(RegExp.$1.length)}return a[a.length]={type:2,text:""},a}(r);let n="BOD",i=0,s=e[i];for(;!Bo(s,2);){let o=0;const a=[];if(n==="BOD"){if(s.text!=="M"&&s.text!=="m")return ta("M0,0"+r);i++,o=hs[s.text],n=s.text}else Bo(s,1)?o=hs[n]:(i++,o=hs[s.text],n=s.text);if(!(i+o<e.length))throw new Error("Path data ended short");for(let l=i;l<i+o;l++){const c=e[l];if(!Bo(c,1))throw new Error("Param not a number: "+n+","+c.text);a[a.length]=+c.text}if(typeof hs[n]!="number")throw new Error("Bad segment: "+n);{const l={key:n,data:a};t.push(l),i+=o,s=e[i],n==="M"&&(n="L"),n==="m"&&(n="l")}}return t}function pc(r){let t=0,e=0,n=0,i=0;const s=[];for(const{key:o,data:a}of r)switch(o){case"M":s.push({key:"M",data:[...a]}),[t,e]=a,[n,i]=a;break;case"m":t+=a[0],e+=a[1],s.push({key:"M",data:[t,e]}),n=t,i=e;break;case"L":s.push({key:"L",data:[...a]}),[t,e]=a;break;case"l":t+=a[0],e+=a[1],s.push({key:"L",data:[t,e]});break;case"C":s.push({key:"C",data:[...a]}),t=a[4],e=a[5];break;case"c":{const l=a.map((c,h)=>h%2?c+e:c+t);s.push({key:"C",data:l}),t=l[4],e=l[5];break}case"Q":s.push({key:"Q",data:[...a]}),t=a[2],e=a[3];break;case"q":{const l=a.map((c,h)=>h%2?c+e:c+t);s.push({key:"Q",data:l}),t=l[2],e=l[3];break}case"A":s.push({key:"A",data:[...a]}),t=a[5],e=a[6];break;case"a":t+=a[5],e+=a[6],s.push({key:"A",data:[a[0],a[1],a[2],a[3],a[4],t,e]});break;case"H":s.push({key:"H",data:[...a]}),t=a[0];break;case"h":t+=a[0],s.push({key:"H",data:[t]});break;case"V":s.push({key:"V",data:[...a]}),e=a[0];break;case"v":e+=a[0],s.push({key:"V",data:[e]});break;case"S":s.push({key:"S",data:[...a]}),t=a[2],e=a[3];break;case"s":{const l=a.map((c,h)=>h%2?c+e:c+t);s.push({key:"S",data:l}),t=l[2],e=l[3];break}case"T":s.push({key:"T",data:[...a]}),t=a[0],e=a[1];break;case"t":t+=a[0],e+=a[1],s.push({key:"T",data:[t,e]});break;case"Z":case"z":s.push({key:"Z",data:[]}),t=n,e=i}return s}function mc(r){const t=[];let e="",n=0,i=0,s=0,o=0,a=0,l=0;for(const{key:c,data:h}of r){switch(c){case"M":t.push({key:"M",data:[...h]}),[n,i]=h,[s,o]=h;break;case"C":t.push({key:"C",data:[...h]}),n=h[4],i=h[5],a=h[2],l=h[3];break;case"L":t.push({key:"L",data:[...h]}),[n,i]=h;break;case"H":n=h[0],t.push({key:"L",data:[n,i]});break;case"V":i=h[0],t.push({key:"L",data:[n,i]});break;case"S":{let u=0,d=0;e==="C"||e==="S"?(u=n+(n-a),d=i+(i-l)):(u=n,d=i),t.push({key:"C",data:[u,d,...h]}),a=h[0],l=h[1],n=h[2],i=h[3];break}case"T":{const[u,d]=h;let f=0,m=0;e==="Q"||e==="T"?(f=n+(n-a),m=i+(i-l)):(f=n,m=i);const g=n+2*(f-n)/3,p=i+2*(m-i)/3,x=u+2*(f-u)/3,y=d+2*(m-d)/3;t.push({key:"C",data:[g,p,x,y,u,d]}),a=f,l=m,n=u,i=d;break}case"Q":{const[u,d,f,m]=h,g=n+2*(u-n)/3,p=i+2*(d-i)/3,x=f+2*(u-f)/3,y=m+2*(d-m)/3;t.push({key:"C",data:[g,p,x,y,f,m]}),a=u,l=d,n=f,i=m;break}case"A":{const u=Math.abs(h[0]),d=Math.abs(h[1]),f=h[2],m=h[3],g=h[4],p=h[5],x=h[6];u===0||d===0?(t.push({key:"C",data:[n,i,p,x,p,x]}),n=p,i=x):(n!==p||i!==x)&&(Lh(n,i,p,x,u,d,f,m,g).forEach(function(y){t.push({key:"C",data:y})}),n=p,i=x);break}case"Z":t.push({key:"Z",data:[]}),n=s,i=o}e=c}return t}function or(r,t,e){return[r*Math.cos(e)-t*Math.sin(e),r*Math.sin(e)+t*Math.cos(e)]}function Lh(r,t,e,n,i,s,o,a,l,c){const h=(u=o,Math.PI*u/180);var u;let d=[],f=0,m=0,g=0,p=0;if(c)[f,m,g,p]=c;else{[r,t]=or(r,t,-h),[e,n]=or(e,n,-h);const q=(r-e)/2,R=(t-n)/2;let B=q*q/(i*i)+R*R/(s*s);B>1&&(B=Math.sqrt(B),i*=B,s*=B);const F=i*i,O=s*s,D=F*O-F*R*R-O*q*q,X=F*R*R+O*q*q,J=(a===l?-1:1)*Math.sqrt(Math.abs(D/X));g=J*i*R/s+(r+e)/2,p=J*-s*q/i+(t+n)/2,f=Math.asin(parseFloat(((t-p)/s).toFixed(9))),m=Math.asin(parseFloat(((n-p)/s).toFixed(9))),r<g&&(f=Math.PI-f),e<g&&(m=Math.PI-m),f<0&&(f=2*Math.PI+f),m<0&&(m=2*Math.PI+m),l&&f>m&&(f-=2*Math.PI),!l&&m>f&&(m-=2*Math.PI)}let x=m-f;if(Math.abs(x)>120*Math.PI/180){const q=m,R=e,B=n;m=l&&m>f?f+120*Math.PI/180*1:f+120*Math.PI/180*-1,d=Lh(e=g+i*Math.cos(m),n=p+s*Math.sin(m),R,B,i,s,o,0,l,[m,q,g,p])}x=m-f;const y=Math.cos(f),E=Math.sin(f),S=Math.cos(m),v=Math.sin(m),L=Math.tan(x/4),P=4/3*i*L,N=4/3*s*L,et=[r,t],z=[r+P*E,t-N*y],_=[e+P*v,n-N*S],C=[e,n];if(z[0]=2*et[0]-z[0],z[1]=2*et[1]-z[1],c)return[z,_,C].concat(d);{d=[z,_,C].concat(d);const q=[];for(let R=0;R<d.length;R+=3){const B=or(d[R][0],d[R][1],h),F=or(d[R+1][0],d[R+1][1],h),O=or(d[R+2][0],d[R+2][1],h);q.push([B[0],B[1],F[0],F[1],O[0],O[1]])}return q}}const Rx={randOffset:function(r,t){return mt(r,t)},randOffsetWithRange:function(r,t,e){return As(r,t,e)},ellipse:function(r,t,e,n,i){const s=Ph(e,n,i);return ea(r,t,i,s).opset},doubleLineOps:function(r,t,e,n,i){return gn(r,t,e,n,i,!0)}};function Rh(r,t,e,n,i){return{type:"path",ops:gn(r,t,e,n,i)}}function gs(r,t,e){const n=(r||[]).length;if(n>2){const i=[];for(let s=0;s<n-1;s++)i.push(...gn(r[s][0],r[s][1],r[s+1][0],r[s+1][1],e));return t&&i.push(...gn(r[n-1][0],r[n-1][1],r[0][0],r[0][1],e)),{type:"path",ops:i}}return n===2?Rh(r[0][0],r[0][1],r[1][0],r[1][1],e):{type:"path",ops:[]}}function Px(r,t,e,n,i){return function(s,o){return gs(s,!0,o)}([[r,t],[r+e,t],[r+e,t+n],[r,t+n]],i)}function Dx(r,t){let e=_c(r,1*(1+.2*t.roughness),t);if(!t.disableMultiStroke){const n=_c(r,1.5*(1+.22*t.roughness),function(i){const s=Object.assign({},i);return s.randomizer=void 0,i.seed&&(s.seed=i.seed+1),s}(t));e=e.concat(n)}return{type:"path",ops:e}}function Ph(r,t,e){const n=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(r/2,2)+Math.pow(t/2,2))/2)),i=Math.ceil(Math.max(e.curveStepCount,e.curveStepCount/Math.sqrt(200)*n)),s=2*Math.PI/i;let o=Math.abs(r/2),a=Math.abs(t/2);const l=1-e.curveFitting;return o+=mt(o*l,e),a+=mt(a*l,e),{increment:s,rx:o,ry:a}}function ea(r,t,e,n){const[i,s]=yc(n.increment,r,t,n.rx,n.ry,1,n.increment*As(.1,As(.4,1,e),e),e);let o=Cs(i,null,e);if(!e.disableMultiStroke&&e.roughness!==0){const[a]=yc(n.increment,r,t,n.rx,n.ry,1.5,0,e),l=Cs(a,null,e);o=o.concat(l)}return{estimatedPoints:s,opset:{type:"path",ops:o}}}function gc(r,t,e,n,i,s,o,a,l){const c=r,h=t;let u=Math.abs(e/2),d=Math.abs(n/2);u+=mt(.01*u,l),d+=mt(.01*d,l);let f=i,m=s;for(;f<0;)f+=2*Math.PI,m+=2*Math.PI;m-f>2*Math.PI&&(f=0,m=2*Math.PI);const g=2*Math.PI/l.curveStepCount,p=Math.min(g/2,(m-f)/2),x=vc(p,c,h,u,d,f,m,1,l);if(!l.disableMultiStroke){const y=vc(p,c,h,u,d,f,m,1.5,l);x.push(...y)}return o&&(a?x.push(...gn(c,h,c+u*Math.cos(f),h+d*Math.sin(f),l),...gn(c,h,c+u*Math.cos(m),h+d*Math.sin(m),l)):x.push({op:"lineTo",data:[c,h]},{op:"lineTo",data:[c+u*Math.cos(f),h+d*Math.sin(f)]})),{type:"path",ops:x}}function us(r,t){const e=[];for(const n of r)if(n.length){const i=t.maxRandomnessOffset||0,s=n.length;if(s>2){e.push({op:"move",data:[n[0][0]+mt(i,t),n[0][1]+mt(i,t)]});for(let o=1;o<s;o++)e.push({op:"lineTo",data:[n[o][0]+mt(i,t),n[o][1]+mt(i,t)]})}}return{type:"fillPath",ops:e}}function wi(r,t){return function(e,n){let i=e.fillStyle||"hachure";if(!we[i])switch(i){case"zigzag":we[i]||(we[i]=new Sx(n));break;case"cross-hatch":we[i]||(we[i]=new Ex(n));break;case"dots":we[i]||(we[i]=new Tx(n));break;case"dashed":we[i]||(we[i]=new Ax(n));break;case"zigzag-line":we[i]||(we[i]=new Cx(n));break;case"hachure":default:i="hachure",we[i]||(we[i]=new Ra(n))}return we[i]}(t,Rx).fillPolygons(r,t)}function Dh(r){return r.randomizer||(r.randomizer=new Lx(r.seed||0)),r.randomizer.next()}function As(r,t,e,n=1){return e.roughness*n*(Dh(e)*(t-r)+r)}function mt(r,t,e=1){return As(-r,r,t,e)}function gn(r,t,e,n,i,s=!1){const o=s?i.disableMultiStrokeFill:i.disableMultiStroke,a=xc(r,t,e,n,i,!0,!1);if(o)return a;const l=xc(r,t,e,n,i,!0,!0);return a.concat(l)}function xc(r,t,e,n,i,s,o){const a=Math.pow(r-e,2)+Math.pow(t-n,2),l=Math.sqrt(a);let c=1;c=l<200?1:l>500?.4:-.0016668*l+1.233334;let h=i.maxRandomnessOffset||0;h*h*100>a&&(h=l/10);const u=h/2,d=.2+.2*Dh(i);let f=i.bowing*i.maxRandomnessOffset*(n-t)/200,m=i.bowing*i.maxRandomnessOffset*(r-e)/200;f=mt(f,i,c),m=mt(m,i,c);const g=[],p=()=>mt(u,i,c),x=()=>mt(h,i,c),y=i.preserveVertices;return s&&(o?g.push({op:"move",data:[r+(y?0:p()),t+(y?0:p())]}):g.push({op:"move",data:[r+(y?0:mt(h,i,c)),t+(y?0:mt(h,i,c))]})),o?g.push({op:"bcurveTo",data:[f+r+(e-r)*d+p(),m+t+(n-t)*d+p(),f+r+2*(e-r)*d+p(),m+t+2*(n-t)*d+p(),e+(y?0:p()),n+(y?0:p())]}):g.push({op:"bcurveTo",data:[f+r+(e-r)*d+x(),m+t+(n-t)*d+x(),f+r+2*(e-r)*d+x(),m+t+2*(n-t)*d+x(),e+(y?0:x()),n+(y?0:x())]}),g}function _c(r,t,e){const n=[];n.push([r[0][0]+mt(t,e),r[0][1]+mt(t,e)]),n.push([r[0][0]+mt(t,e),r[0][1]+mt(t,e)]);for(let i=1;i<r.length;i++)n.push([r[i][0]+mt(t,e),r[i][1]+mt(t,e)]),i===r.length-1&&n.push([r[i][0]+mt(t,e),r[i][1]+mt(t,e)]);return Cs(n,null,e)}function Cs(r,t,e){const n=r.length,i=[];if(n>3){const s=[],o=1-e.curveTightness;i.push({op:"move",data:[r[1][0],r[1][1]]});for(let a=1;a+2<n;a++){const l=r[a];s[0]=[l[0],l[1]],s[1]=[l[0]+(o*r[a+1][0]-o*r[a-1][0])/6,l[1]+(o*r[a+1][1]-o*r[a-1][1])/6],s[2]=[r[a+1][0]+(o*r[a][0]-o*r[a+2][0])/6,r[a+1][1]+(o*r[a][1]-o*r[a+2][1])/6],s[3]=[r[a+1][0],r[a+1][1]],i.push({op:"bcurveTo",data:[s[1][0],s[1][1],s[2][0],s[2][1],s[3][0],s[3][1]]})}if(t&&t.length===2){const a=e.maxRandomnessOffset;i.push({op:"lineTo",data:[t[0]+mt(a,e),t[1]+mt(a,e)]})}}else n===3?(i.push({op:"move",data:[r[1][0],r[1][1]]}),i.push({op:"bcurveTo",data:[r[1][0],r[1][1],r[2][0],r[2][1],r[2][0],r[2][1]]})):n===2&&i.push(...gn(r[0][0],r[0][1],r[1][0],r[1][1],e));return i}function yc(r,t,e,n,i,s,o,a){const l=[],c=[];if(a.roughness===0){r/=4,c.push([t+n*Math.cos(-r),e+i*Math.sin(-r)]);for(let h=0;h<=2*Math.PI;h+=r){const u=[t+n*Math.cos(h),e+i*Math.sin(h)];l.push(u),c.push(u)}c.push([t+n*Math.cos(0),e+i*Math.sin(0)]),c.push([t+n*Math.cos(r),e+i*Math.sin(r)])}else{const h=mt(.5,a)-Math.PI/2;c.push([mt(s,a)+t+.9*n*Math.cos(h-r),mt(s,a)+e+.9*i*Math.sin(h-r)]);const u=2*Math.PI+h-.01;for(let d=h;d<u;d+=r){const f=[mt(s,a)+t+n*Math.cos(d),mt(s,a)+e+i*Math.sin(d)];l.push(f),c.push(f)}c.push([mt(s,a)+t+n*Math.cos(h+2*Math.PI+.5*o),mt(s,a)+e+i*Math.sin(h+2*Math.PI+.5*o)]),c.push([mt(s,a)+t+.98*n*Math.cos(h+o),mt(s,a)+e+.98*i*Math.sin(h+o)]),c.push([mt(s,a)+t+.9*n*Math.cos(h+.5*o),mt(s,a)+e+.9*i*Math.sin(h+.5*o)])}return[c,l]}function vc(r,t,e,n,i,s,o,a,l){const c=s+mt(.1,l),h=[];h.push([mt(a,l)+t+.9*n*Math.cos(c-r),mt(a,l)+e+.9*i*Math.sin(c-r)]);for(let u=c;u<=o;u+=r)h.push([mt(a,l)+t+n*Math.cos(u),mt(a,l)+e+i*Math.sin(u)]);return h.push([t+n*Math.cos(o),e+i*Math.sin(o)]),h.push([t+n*Math.cos(o),e+i*Math.sin(o)]),Cs(h,null,l)}function Ix(r,t,e,n,i,s,o,a){const l=[],c=[a.maxRandomnessOffset||1,(a.maxRandomnessOffset||1)+.3];let h=[0,0];const u=a.disableMultiStroke?1:2,d=a.preserveVertices;for(let f=0;f<u;f++)f===0?l.push({op:"move",data:[o[0],o[1]]}):l.push({op:"move",data:[o[0]+(d?0:mt(c[0],a)),o[1]+(d?0:mt(c[0],a))]}),h=d?[i,s]:[i+mt(c[f],a),s+mt(c[f],a)],l.push({op:"bcurveTo",data:[r+mt(c[f],a),t+mt(c[f],a),e+mt(c[f],a),n+mt(c[f],a),h[0],h[1]]});return l}function ar(r){return[...r]}function xs(r,t){return Math.pow(r[0]-t[0],2)+Math.pow(r[1]-t[1],2)}function kx(r,t,e){const n=xs(t,e);if(n===0)return xs(r,t);let i=((r[0]-t[0])*(e[0]-t[0])+(r[1]-t[1])*(e[1]-t[1]))/n;return i=Math.max(0,Math.min(1,i)),xs(r,Vn(t,e,i))}function Vn(r,t,e){return[r[0]+(t[0]-r[0])*e,r[1]+(t[1]-r[1])*e]}function na(r,t,e,n){const i=n||[];if(function(a,l){const c=a[l+0],h=a[l+1],u=a[l+2],d=a[l+3];let f=3*h[0]-2*c[0]-d[0];f*=f;let m=3*h[1]-2*c[1]-d[1];m*=m;let g=3*u[0]-2*d[0]-c[0];g*=g;let p=3*u[1]-2*d[1]-c[1];return p*=p,f<g&&(f=g),m<p&&(m=p),f+m}(r,t)<e){const a=r[t+0];i.length?(s=i[i.length-1],o=a,Math.sqrt(xs(s,o))>1&&i.push(a)):i.push(a),i.push(r[t+3])}else{const l=r[t+0],c=r[t+1],h=r[t+2],u=r[t+3],d=Vn(l,c,.5),f=Vn(c,h,.5),m=Vn(h,u,.5),g=Vn(d,f,.5),p=Vn(f,m,.5),x=Vn(g,p,.5);na([l,d,g,x],0,e,i),na([x,p,m,u],0,e,i)}var s,o;return i}function zx(r,t){return Ls(r,0,r.length,t)}function Ls(r,t,e,n,i){const s=i||[],o=r[t],a=r[e-1];let l=0,c=1;for(let h=t+1;h<e-1;++h){const u=kx(r[h],o,a);u>l&&(l=u,c=h)}return Math.sqrt(l)>n?(Ls(r,t,c+1,n,s),Ls(r,c,e,n,s)):(s.length||s.push(o),s.push(a)),s}function Mc(r,t=.15,e){const n=[],i=(r.length-1)/3;for(let s=0;s<i;s++)na(r,3*s,t,n);return e&&e>0?Ls(n,0,n.length,e):n}const Le="none";class Rs{constructor(t){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,disableMultiStroke:!1,disableMultiStrokeFill:!1,preserveVertices:!1},this.config=t||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(t){return t?Object.assign({},this.defaultOptions,t):this.defaultOptions}_d(t,e,n){return{shape:t,sets:e||[],options:n||this.defaultOptions}}line(t,e,n,i,s){const o=this._o(s);return this._d("line",[Rh(t,e,n,i,o)],o)}rectangle(t,e,n,i,s){const o=this._o(s),a=[],l=Px(t,e,n,i,o);if(o.fill){const c=[[t,e],[t+n,e],[t+n,e+i],[t,e+i]];o.fillStyle==="solid"?a.push(us([c],o)):a.push(wi([c],o))}return o.stroke!==Le&&a.push(l),this._d("rectangle",a,o)}ellipse(t,e,n,i,s){const o=this._o(s),a=[],l=Ph(n,i,o),c=ea(t,e,o,l);if(o.fill)if(o.fillStyle==="solid"){const h=ea(t,e,o,l).opset;h.type="fillPath",a.push(h)}else a.push(wi([c.estimatedPoints],o));return o.stroke!==Le&&a.push(c.opset),this._d("ellipse",a,o)}circle(t,e,n,i){const s=this.ellipse(t,e,n,n,i);return s.shape="circle",s}linearPath(t,e){const n=this._o(e);return this._d("linearPath",[gs(t,!1,n)],n)}arc(t,e,n,i,s,o,a=!1,l){const c=this._o(l),h=[],u=gc(t,e,n,i,s,o,a,!0,c);if(a&&c.fill)if(c.fillStyle==="solid"){const d=Object.assign({},c);d.disableMultiStroke=!0;const f=gc(t,e,n,i,s,o,!0,!1,d);f.type="fillPath",h.push(f)}else h.push(function(d,f,m,g,p,x,y){const E=d,S=f;let v=Math.abs(m/2),L=Math.abs(g/2);v+=mt(.01*v,y),L+=mt(.01*L,y);let P=p,N=x;for(;P<0;)P+=2*Math.PI,N+=2*Math.PI;N-P>2*Math.PI&&(P=0,N=2*Math.PI);const et=(N-P)/y.curveStepCount,z=[];for(let _=P;_<=N;_+=et)z.push([E+v*Math.cos(_),S+L*Math.sin(_)]);return z.push([E+v*Math.cos(N),S+L*Math.sin(N)]),z.push([E,S]),wi([z],y)}(t,e,n,i,s,o,c));return c.stroke!==Le&&h.push(u),this._d("arc",h,c)}curve(t,e){const n=this._o(e),i=[],s=Dx(t,n);if(n.fill&&n.fill!==Le&&t.length>=3){const o=Mc(function(a,l=0){const c=a.length;if(c<3)throw new Error("A curve must have at least three points.");const h=[];if(c===3)h.push(ar(a[0]),ar(a[1]),ar(a[2]),ar(a[2]));else{const u=[];u.push(a[0],a[0]);for(let m=1;m<a.length;m++)u.push(a[m]),m===a.length-1&&u.push(a[m]);const d=[],f=1-l;h.push(ar(u[0]));for(let m=1;m+2<u.length;m++){const g=u[m];d[0]=[g[0],g[1]],d[1]=[g[0]+(f*u[m+1][0]-f*u[m-1][0])/6,g[1]+(f*u[m+1][1]-f*u[m-1][1])/6],d[2]=[u[m+1][0]+(f*u[m][0]-f*u[m+2][0])/6,u[m+1][1]+(f*u[m][1]-f*u[m+2][1])/6],d[3]=[u[m+1][0],u[m+1][1]],h.push(d[1],d[2],d[3])}}return h}(t),10,(1+n.roughness)/2);n.fillStyle==="solid"?i.push(us([o],n)):i.push(wi([o],n))}return n.stroke!==Le&&i.push(s),this._d("curve",i,n)}polygon(t,e){const n=this._o(e),i=[],s=gs(t,!0,n);return n.fill&&(n.fillStyle==="solid"?i.push(us([t],n)):i.push(wi([t],n))),n.stroke!==Le&&i.push(s),this._d("polygon",i,n)}path(t,e){const n=this._o(e),i=[];if(!t)return this._d("path",i,n);t=(t||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");const s=n.fill&&n.fill!=="transparent"&&n.fill!==Le,o=n.stroke!==Le,a=!!(n.simplification&&n.simplification<1),l=function(c,h,u){const d=mc(pc(ta(c))),f=[];let m=[],g=[0,0],p=[];const x=()=>{p.length>=4&&m.push(...Mc(p,h)),p=[]},y=()=>{x(),m.length&&(f.push(m),m=[])};for(const{key:S,data:v}of d)switch(S){case"M":y(),g=[v[0],v[1]],m.push(g);break;case"L":x(),m.push([v[0],v[1]]);break;case"C":if(!p.length){const L=m.length?m[m.length-1]:g;p.push([L[0],L[1]])}p.push([v[0],v[1]]),p.push([v[2],v[3]]),p.push([v[4],v[5]]);break;case"Z":x(),m.push([g[0],g[1]])}if(y(),!u)return f;const E=[];for(const S of f){const v=zx(S,u);v.length&&E.push(v)}return E}(t,1,a?4-4*n.simplification:(1+n.roughness)/2);return s&&(n.fillStyle==="solid"?i.push(us(l,n)):i.push(wi(l,n))),o&&(a?l.forEach(c=>{i.push(gs(c,!1,n))}):i.push(function(c,h){const u=mc(pc(ta(c))),d=[];let f=[0,0],m=[0,0];for(const{key:g,data:p}of u)switch(g){case"M":{const x=1*(h.maxRandomnessOffset||0),y=h.preserveVertices;d.push({op:"move",data:p.map(E=>E+(y?0:mt(x,h)))}),m=[p[0],p[1]],f=[p[0],p[1]];break}case"L":d.push(...gn(m[0],m[1],p[0],p[1],h)),m=[p[0],p[1]];break;case"C":{const[x,y,E,S,v,L]=p;d.push(...Ix(x,y,E,S,v,L,m,h)),m=[v,L];break}case"Z":d.push(...gn(m[0],m[1],f[0],f[1],h)),m=[f[0],f[1]]}return{type:"path",ops:d}}(t,n))),this._d("path",i,n)}opsToPath(t,e){let n="";for(const i of t.ops){const s=typeof e=="number"&&e>=0?i.data.map(o=>+o.toFixed(e)):i.data;switch(i.op){case"move":n+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":n+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":n+=`L${s[0]} ${s[1]} `}}return n.trim()}toPaths(t){const e=t.sets||[],n=t.options||this.defaultOptions,i=[];for(const s of e){let o=null;switch(s.type){case"path":o={d:this.opsToPath(s),stroke:n.stroke,strokeWidth:n.strokeWidth,fill:Le};break;case"fillPath":o={d:this.opsToPath(s),stroke:Le,strokeWidth:0,fill:n.fill||Le};break;case"fillSketch":o=this.fillSketch(s,n)}o&&i.push(o)}return i}fillSketch(t,e){let n=e.fillWeight;return n<0&&(n=e.strokeWidth/2),{d:this.opsToPath(t),stroke:e.fill||Le,strokeWidth:n,fill:Le}}}class Fx{constructor(t,e){this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.gen=new Rs(e)}draw(t){const e=t.sets||[],n=t.options||this.getDefaultOptions(),i=this.ctx,s=t.options.fixedDecimalPlaceDigits;for(const o of e)switch(o.type){case"path":i.save(),i.strokeStyle=n.stroke==="none"?"transparent":n.stroke,i.lineWidth=n.strokeWidth,n.strokeLineDash&&i.setLineDash(n.strokeLineDash),n.strokeLineDashOffset&&(i.lineDashOffset=n.strokeLineDashOffset),this._drawToContext(i,o,s),i.restore();break;case"fillPath":{i.save(),i.fillStyle=n.fill||"";const a=t.shape==="curve"||t.shape==="polygon"||t.shape==="path"?"evenodd":"nonzero";this._drawToContext(i,o,s,a),i.restore();break}case"fillSketch":this.fillSketch(i,o,n)}}fillSketch(t,e,n){let i=n.fillWeight;i<0&&(i=n.strokeWidth/2),t.save(),n.fillLineDash&&t.setLineDash(n.fillLineDash),n.fillLineDashOffset&&(t.lineDashOffset=n.fillLineDashOffset),t.strokeStyle=n.fill||"",t.lineWidth=i,this._drawToContext(t,e,n.fixedDecimalPlaceDigits),t.restore()}_drawToContext(t,e,n,i="nonzero"){t.beginPath();for(const s of e.ops){const o=typeof n=="number"&&n>=0?s.data.map(a=>+a.toFixed(n)):s.data;switch(s.op){case"move":t.moveTo(o[0],o[1]);break;case"bcurveTo":t.bezierCurveTo(o[0],o[1],o[2],o[3],o[4],o[5]);break;case"lineTo":t.lineTo(o[0],o[1])}}e.type==="fillPath"?t.fill(i):t.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(t,e,n,i,s){const o=this.gen.line(t,e,n,i,s);return this.draw(o),o}rectangle(t,e,n,i,s){const o=this.gen.rectangle(t,e,n,i,s);return this.draw(o),o}ellipse(t,e,n,i,s){const o=this.gen.ellipse(t,e,n,i,s);return this.draw(o),o}circle(t,e,n,i){const s=this.gen.circle(t,e,n,i);return this.draw(s),s}linearPath(t,e){const n=this.gen.linearPath(t,e);return this.draw(n),n}polygon(t,e){const n=this.gen.polygon(t,e);return this.draw(n),n}arc(t,e,n,i,s,o,a=!1,l){const c=this.gen.arc(t,e,n,i,s,o,a,l);return this.draw(c),c}curve(t,e){const n=this.gen.curve(t,e);return this.draw(n),n}path(t,e){const n=this.gen.path(t,e);return this.draw(n),n}}const ds="http://www.w3.org/2000/svg";class Nx{constructor(t,e){this.svg=t,this.gen=new Rs(e)}draw(t){const e=t.sets||[],n=t.options||this.getDefaultOptions(),i=this.svg.ownerDocument||window.document,s=i.createElementNS(ds,"g"),o=t.options.fixedDecimalPlaceDigits;for(const a of e){let l=null;switch(a.type){case"path":l=i.createElementNS(ds,"path"),l.setAttribute("d",this.opsToPath(a,o)),l.setAttribute("stroke",n.stroke),l.setAttribute("stroke-width",n.strokeWidth+""),l.setAttribute("fill","none"),n.strokeLineDash&&l.setAttribute("stroke-dasharray",n.strokeLineDash.join(" ").trim()),n.strokeLineDashOffset&&l.setAttribute("stroke-dashoffset",`${n.strokeLineDashOffset}`);break;case"fillPath":l=i.createElementNS(ds,"path"),l.setAttribute("d",this.opsToPath(a,o)),l.setAttribute("stroke","none"),l.setAttribute("stroke-width","0"),l.setAttribute("fill",n.fill||""),t.shape!=="curve"&&t.shape!=="polygon"||l.setAttribute("fill-rule","evenodd");break;case"fillSketch":l=this.fillSketch(i,a,n)}l&&s.appendChild(l)}return s}fillSketch(t,e,n){let i=n.fillWeight;i<0&&(i=n.strokeWidth/2);const s=t.createElementNS(ds,"path");return s.setAttribute("d",this.opsToPath(e,n.fixedDecimalPlaceDigits)),s.setAttribute("stroke",n.fill||""),s.setAttribute("stroke-width",i+""),s.setAttribute("fill","none"),n.fillLineDash&&s.setAttribute("stroke-dasharray",n.fillLineDash.join(" ").trim()),n.fillLineDashOffset&&s.setAttribute("stroke-dashoffset",`${n.fillLineDashOffset}`),s}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(t,e){return this.gen.opsToPath(t,e)}line(t,e,n,i,s){const o=this.gen.line(t,e,n,i,s);return this.draw(o)}rectangle(t,e,n,i,s){const o=this.gen.rectangle(t,e,n,i,s);return this.draw(o)}ellipse(t,e,n,i,s){const o=this.gen.ellipse(t,e,n,i,s);return this.draw(o)}circle(t,e,n,i){const s=this.gen.circle(t,e,n,i);return this.draw(s)}linearPath(t,e){const n=this.gen.linearPath(t,e);return this.draw(n)}polygon(t,e){const n=this.gen.polygon(t,e);return this.draw(n)}arc(t,e,n,i,s,o,a=!1,l){const c=this.gen.arc(t,e,n,i,s,o,a,l);return this.draw(c)}curve(t,e){const n=this.gen.curve(t,e);return this.draw(n)}path(t,e){const n=this.gen.path(t,e);return this.draw(n)}}var Bx={canvas:(r,t)=>new Fx(r,t),svg:(r,t)=>new Nx(r,t),generator:r=>new Rs(r),newSeed:()=>Rs.newSeed()},Ox="./assets/optimer_bold.typeface.d690a5f4.json",Ux="./assets/optimer_regular.typeface.17e5e14d.json",Hx="./assets/droid_sans_bold.typeface.ec40f077.json",Vx="./assets/droid_sans_regular.typeface.8f0570e6.json",Gx="./assets/droid_serif_bold.typeface.e9a71de5.json",Wx="./assets/droid_serif_regular.typeface.99ff855b.json",qx="./assets/gentilis_bold.typeface.c028fd9c.json",Xx="./assets/gentilis_regular.typeface.7ed95f2f.json",jx="./assets/helvetiker_bold.typeface.bd68159e.json",Zx="./assets/helvetiker_regular.typeface.d5c54676.json";function wc(r){return r[Math.random()*r.length|0]}const Yx="\u2007";function bc(r,t,e,n){const i=(n-t)/(e-r);return function(s){return(s-r)*i+t}}function zn(r,t){const e=document.getElementById(r);if(!e)throw new Error("Could not find element with id "+r+".  Expected type:  "+t.name);if(e instanceof t)return e;throw new Error("Element with id "+r+" has type "+e.constructor.name+".  Expected type:  "+t.name)}var Jx=["krunch","zlonk","klonk","bam","kapow","ouch","whamm","zap","kapow","urkkk","zok","biff","zzzzzwap","pow","ooooff","clunk","crraack","ooooff","thwapp","awk","bam","crunch","eee-yow","crr-aaack","ooooff","pow","crash","thwapp","biff","whamm","sock","pow","zam","crunch","zlonk","pow","whack","zlopp","boff","zap","krunch","zap","boff","zlott","crash","zlopp","zzzzzwap","bam","zok","pow","kapow","biff","pam","thunk","whamm","biff","pow","zap","kapow","whamm","klonk","zap","crash","boff","pow","zzzzzwap","zap","crraack","crunch","bonk","rakkk","ooooff","thwack","thwack","zap","crunch","ooooff","bonk","awkkkkkk","zzzzzwap","zgruppp","kapow","pow","powie","crunch","boff","crraack","boff","****","pow","awkkkkkk","zok","biff","crunch","qunckkk","bam","thwapp","pow","zlonk","pow","sock","ooooff","aiieee","biff","sock","thunk","bam","crunch","whap","swoosh","swoosh","swoosh","swoosh","pow","zamm","biff","crraack","clunk","sock","kapow","sock","pow","zap","thwapp","crash","owww","zamm","zowie","crraack","eee-yow","qunckkk","sock","clank","thwack","bonk","ouch","*****","biff","clank","clash","touch\xE9","kayo","ooooff","rip","pow","zap","sock","crash","ooooff","klonk","thunk","whap","zok","zam","whamm","eee-yow","ooooff","biff","boff","pow","klonk","whap","zap","sock","zamm","kapow","whamm","clank","clank","crash","eee-yow","pow","whap","swish","zamm","uggh","swoosh","pam","zap","flrbbbbb","pow","whap","thwack","biff","bap","bap","zwapp","sploosh","klonk","urkk","swoosh","swa-a-p","eee-yow","ouch","kapow","ker-sploosh","spla-a-t","plop","urkkk","blurp","ker-plop","zapeth","thwacke","wham-eth","clunk-eth","thwape","bang-eth","whack-eth","thwacke","clank-est","clange","crunch-eth","ouch-eth","wham-eth","zap","boff","thwack","whamm","kapow","z-zwap","eee-yow","ooooff","bam","crunch","thunk","cr-r-a-a-ck","whamm","pow","biff","boff","kapow","bam","uggh","ooooff","zamm","kayo","thunk","sock","whamm","vronk","bonk","clunk","zlopp","z-zwap","klonk","zamm","powie","bam","splatt","bam","urkkk","glipp","ooooff","sock","boff","pow","bonk","ooooff","rakkk","powie","bam","touch\xE9","crash","zap","zlonk","bam","powie","zowie","vronk","cr-r-a-a-ck","splatt","boff","awk","splatt","whamm","z-zwap","splatt","flrbbbbb","kapow","kayo","aieee","uggh","pow","ooooff","awkkkkkk","bonk","kapow","thwack","bonk","whamm","kapow","bam","splatt","ooooff","sock","splatt","boff","zamm","whap","bonk","z-zwap","bam","kapow","whamm","bam","pow","zlopp","zlonk","sock","whack","zowie","biff","boff","kapow","whack","bonk","z-zwap","bam","splatt","whamm","whack","z-zwap","boff","zowie","boff","whamm","sock","kapow","splatt","crash","zamm","bam","zap","boff","whack","zamm","pam","sock","pow","whamm","rakkk","kapow","z-zwap","zap","kapow","splatt","pow","z-zwap","kapow","klonk","pow","ooooff","uggh","awkkkkkk","bonk","urkkk","clank","klonk","clash","clank","ooooff","whack","crash","eee-yow","splatt","boff","sock","splatt","zap","zowie","biff","pow","kapow","boff","zap","splatt","sock","whamm","eee-yow","ooooff","zowie","thunk","kayo","cr-r-a-a-ck","ooooff","ouch","eee-yow","biff","kayo","boff","pow","boff","kapow","z-zwap","bonk","whamm","boff","z-zwap","cr-r-a-a-ck","ooooff","whap","zamm","pam","eee-yow","kapow","ooooff","pow","splatt","zlopp","rakkk","ooooff","thunk","whap","splatt","biff","bam","boff","klonk","clash","zlopp","vronk","uggh","zowie","crunch","zlonk","touch\xE9","flrbbbbb","z-zwap","zowie","whamm","kapow","sock","kayo","ooooff","boff","zap","crash","sock","kapow","whack","pam","biff","sock","kapow","clunk","vronk","zap","sock","zlopp","whap","ooooff","boff","ooooff","zamm","zap","ooooff","klonk","whack","vronk","thwack","kapow","thunk","whamm","bam","zamm","whack","pam","sock","vronk","kapow","rakkk","ooooff","zap","boff","splatt","splatt","zlonk","zlopp","kapow","sock","kapow","sock","whack","clank","sock","whap","clash","zlonk","whamm","bloop","glurpp","ooooff","slosh","pow","thunk","boff","ooooff","zap","kapow","whap","kayo","biff","boff","eee-yow","kapow","boff","eee-yow","sock","whack","biff","zowie","zap","zamm","kapow","boff","biff","zamm","crash","vronk","whamm","bam","zlonk","zlopp","zap","ouch","crash","whack","zamm","whap","vronk","pow","zamm","ooooff","zlopp","zap","awk","biff","whap","zamm","pow","crash","ouch","crash","urkkk","whap","kapow","pow","vronk","sock","whamm","zamm","ooooff","kapow","z-zwap","eee-yow","whap","awk","bam","pow","zamm","zowie","boff","kapow","flrbbbbb","ouch","ooooff","biff","boff","kapow","ooooff","biff","splatt","whamm","sock","kapow","zowie","crash","clunk","boff","whamm","zap","whack","whap","biff","boff","pow","zowie","splatt","pow","splatt","boff","whamm","bam","zap","biff","pow","crash","kapow","sock","pow","splatt","kapow","sock","bam","whack","biff","whap","boff","kapow","splatt","pow","crash","whap","kapow","crash","zap","kapow","kapow","whack","pow","whap","clunk","sock","bam","biff","boff","zowie","zap","pow","sock","splatt","boff","kapow","whack","biff","zap","crunch","splatt","bam","splatt","crash","pow","whack","whamm","zowie","zap","sock","kapow","crunch","bam","boff","sock","crash","whamm","pow","zap","splatt","zowie","clunk","biff","boff","splatt","crash","bam","pow","zap","whack","sock","kapow","crash","boff","bam","crash","whack","crash","zap","whap","bam","kapow","pow","biff","boff","sock","bam","sock","crunch","kapow","whack","clunk","zowie","whack","biff","boff","crash","splatt","crunch","zap","whap","whamm","zowie","biff","splatt","biff","bam","boff","pow","crash","whap","zap","bang","whamm","biff","sock","splatt","crash","pow","whack","whap","zap","zowie","clunk","kapow","crash","bang","sock","biff","bam","zap","crunch","boff","zowie","bang","splatt","zap","sock","pow","kapow","crunch","crash","pow","sock","zap","crash","zowie","whamm","zowie","crash","zap","sock","whap","zowie","splatt"];const Sr=zn("canvas",HTMLCanvasElement),Ih=zn("canvasHolder",HTMLDivElement),ke=new pa,Pn=new ve(45,Sr.offsetWidth/Sr.offsetHeight,.1,1e3);window.camera=Pn;const Xs=new Wt({canvas:Sr});Xs.setPixelRatio(window.devicePixelRatio);Xs.setSize(Sr.offsetWidth,Sr.offsetHeight);const Pa=new Ta(16777215);Pa.position.set(5,5,5);const $x=new Sh(16777215);ke.add(Pa,$x);const Ie=14,Ee=-Ie,An=Ie-Ee,kh=["x","y","z"],kn={x:{min:new Hn(An,19,16746700,16746700),max:new Hn(An,19,16746700,16746700)},y:{min:new Hn(An,19,16746700,16746700),max:new Hn(An,19,16746700,16746700)},z:{min:new Hn(An,19,16746700,16746700),max:new Hn(An,19,16746700,16746700)}};kn.x.min.rotation.z=Math.PI/2;kn.x.max.rotation.z=Math.PI/2;kn.z.min.rotation.x=Math.PI/2;kn.z.max.rotation.x=Math.PI/2;kh.forEach(r=>{kn[r].min.position[r]=Ee,kn[r].max.position[r]=Ie});const Kx=[new Hi({color:16777215,flatShading:!0}),new Hi({color:0})],Qx=[new Hi({color:16777215,flatShading:!0}),new Hi({color:16777215})];ke.fog=new Us(0,250,1400);const zh=new bh(16777215,.125);zh.position.set(0,0,1).normalize();ke.add(zh);const t_=new Ta(16777215,1.5);Pa.position.set(0,100,90);ke.add(t_);const ia=[];[Ox,Ux,Hx,Vx,Gx,Wx,qx,Xx,jx,Zx].forEach(r=>{new vx().load(r,function(t){ia.push(t)})});const Sc=new Map;function Ec(r,t){if(ia.length==0||r=="z"&&t=="max")return;const e=r+t;{const c=Sc.get(e);c&&c()}const n=.2,i=r=="z"?20:n,s=wc(Jx)+"!".repeat(Math.floor(Math.random()*3)+1),o=new bx(s,{font:wc(ia),size:3,height:i,curveSegments:4,bevelEnabled:!1});o.computeBoundingBox();const a=-.5*(o.boundingBox.max.x-o.boundingBox.min.x),l=new me(o,r=="z"?Qx:Kx);if(r=="z")l.position.x=a+be.position.x,l.position.y=be.position.y,l.position.z=Ee-i+n;else if(r=="x"){const c=t=="min"?1:-1;l.position.z=be.position.z-c*a,l.position.y=be.position.y,l.position.x=c*(Ee-i+n),l.rotation.y=c*(Math.PI/2)}else{const c=t=="min"?-1:1;l.position.x=be.position.x+a,l.position.z=be.position.z,l.position.y=-c*(Ee-i+n),l.rotation.x=c*(Math.PI/2)}ke.add(l),Sc.set(e,()=>{ke.remove(l),o.dispose()})}var ki,tn,Xn,zi,Ps;const de=class{constructor(t){ii(this,ki,new Ci);ii(this,tn,document.createElement("canvas"));ii(this,Xn,Bx.canvas(re(this,tn)));ii(this,zi,new Qc(re(this,tn)));ii(this,Ps,new me(new Bs(An,An),new Er({map:re(this,zi),opacity:.5,transparent:!0})));this.info=t,t.init(re(this,ki)),ke.add(re(this,ki)),re(this,tn).width=de.canvasSize,re(this,tn).height=de.canvasSize,this.makeWall(),re(this,ki).add(re(this,Ps))}flatten(t){const{x:e,y:n}=this.info.flatten(t);return new Y(de.xToCanvas(e),de.yToCanvas(n))}highlightPoint(t){const{x:e,y:n}=this.flatten(t),i=de.canvasSize;function s(){function a(l){return l<i/3?i/6:l<i*(2/3)?i/2:i*(5/6)}return{x:a(e),y:a(n)}}(()=>{const a=de.margin,l=i/6-a,c=s();if(Math.random()<.5)re(this,Xn).circle(c.x,c.y,l*2,{stroke:this.info.strokeColor,strokeWidth:7+Math.random()*2,roughness:3,disableMultiStroke:!0});else{const h=c.x-l,u=c.x+l,d=c.y-l,f=c.y+l,m={stroke:this.info.strokeColor,strokeWidth:7+Math.random()*2,roughness:3,disableMultiStroke:!0};re(this,Xn).line(h,d,u,f,m),re(this,Xn).line(h,f,u,d,m)}})(),re(this,zi).needsUpdate=!0}makeWall(){const t=re(this,tn).getContext("2d");t.fillStyle=this.info.fillColor;const e=de.margin,n=re(this,tn).width,i=re(this,tn).height;t.fillRect(0,0,n,i);const s={stroke:this.info.strokeColor,strokeWidth:10,roughness:3,bowing:3},o=re(this,Xn);o.line(e,i/3,n-e,i/3,s),o.line(e,i*2/3,n-e,i*2/3,s),o.line(n/3,e,n/3,i-e,s),o.line(n*2/3,e,n*2/3,i-e,s),re(this,zi).needsUpdate=!0}static find(t,e){if(e<0){if(t=="x")return this.left;if(t=="y")return this.bottom;if(t=="z")return this.rear}else{if(t=="x")return this.right;if(t=="y")return this.top}}};let De=de;ki=new WeakMap,tn=new WeakMap,Xn=new WeakMap,zi=new WeakMap,Ps=new WeakMap,$e(De,"canvasSize",600),$e(De,"margin",de.canvasSize/20),$e(De,"xToCanvas",bc(Ee,0,Ie,de.canvasSize)),$e(De,"yToCanvas",bc(Ee,de.canvasSize,Ie,0)),$e(De,"rear",new de({fillColor:"#ff0000",strokeColor:"#ff8080",flatten(t){return new Y(t.x,t.y)},init(t){t.position.z=Ee}})),$e(De,"left",new de({fillColor:"#00ff00",strokeColor:"#c0ffc0",flatten(t){return new Y(-t.z,t.y)},init(t){t.position.x=Ee,t.rotation.y=Math.PI/2}})),$e(De,"right",new de({fillColor:"#0000ff",strokeColor:"#c0c0ff",flatten(t){return new Y(t.z,t.y)},init(t){t.position.x=Ie,t.rotation.y=-Math.PI/2}})),$e(De,"top",new de({fillColor:"#ffff00",strokeColor:"#ffffc0",flatten(t){return new Y(t.x,t.z)},init(t){t.position.y=Ie,t.rotation.x=Math.PI/2}})),$e(De,"bottom",new de({fillColor:"#00ffff",strokeColor:"#c0ffff",flatten(t){return new Y(t.x,-t.z)},init(t){t.position.y=Ee,t.rotation.x=-Math.PI/2}}));function Fh(r=0,t=0,e=0){const n=new Sa(1,24,24),i=new Ws({color:16719904}),s=new me(n,i);return s.position.set(r,t,e),ke.add(s),s}window.makeMarker=Fh;const be=Fh(),Si={x:no.randFloatSpread(50),y:no.randFloatSpread(50),z:no.randFloatSpread(50)};let Oo;const Uo=Ee+.5,Ho=Ie-.5,fs=new Map;function e_(r){var t,e;if(fs.forEach((n,i)=>{r>n&&(ke.remove(i),fs.delete(i))}),Oo!==void 0){const n=(r-Oo)/1e3;if(n<=0)return;for(const s of kh){let o=be.position[s];if(o=be.position[s]+Si[s]*n,o<Uo){o=Uo,Si[s]=Math.abs(Si[s]);const a=kn[s].min;ke.add(a),fs.set(a,r+100),Ec(s,"min"),(t=De.find(s,Uo))==null||t.highlightPoint(be.position)}else if(o>Ho){o=Ho,Si[s]=-Math.abs(Si[s]);const a=kn[s].max;ke.add(a),fs.set(a,r+100),Ec(s,"max"),(e=De.find(s,Ho))==null||e.highlightPoint(be.position)}be.position[s]=o}Ri.cx.baseVal.value=be.position.x,Ri.cy.baseVal.value=be.position.z;const i=be.position.y/Ie+2;Ri.rx.baseVal.value=i,Ri.ry.baseVal.value=i}Oo=r}function Da(r=50){Pn.fov=r,Pn.updateProjectionMatrix();const e=r/360*2*Math.PI/2,n=Ie/Math.tan(e);Pn.position.set(0,0,Ie+n)}Da();Pn.lookAt(0,0,0);const n_=zn("fovPath",SVGPathElement),Tc=zn("cubeRect",SVGRectElement),Ri=zn("miniBall",SVGEllipseElement);window.miniBall=Ri;function i_(r){const i=r/360*2*Math.PI/2,s=35,o=(100-s)/2;Tc.setAttribute("x",o.toString());const a=s/Math.tan(i)/2,l=95-a-s;Tc.setAttribute("y",l.toString());const c=Math.hypot(50-o,95-l)+s/10,h=95-Math.cos(i)*c,u=Math.sin(i)*c,d=50-u,f=50+u,m=+(r>180),g=1;n_.setAttribute("d",`M ${50} ${95} L ${d} ${h} A ${c} ${c} ${r} ${m} ${g} ${f} ${h} L ${50} ${95}`),Ri.setAttribute("transform",`translate(${o}, ${l}) scale(${s/(Ie-Ee)}) translate(${-Ee}, ${-Ee})`)}const _s=zn("dollyZoomInput",HTMLInputElement),r_=zn("dollyZoomSpan",HTMLSpanElement);function Nh(){Da(parseInt(_s.value)),r_.innerText=_s.value.padStart(3,Yx)+"\xB0",i_(+_s.value)}_s.addEventListener("input",Nh);Nh();function Bh(r){requestAnimationFrame(Bh),pr==null||pr(),e_(r),Xs.render(ke,Pn)}requestAnimationFrame(Bh);[["Left","x",-1],["Right","x",1],["Down","y",-1],["Up","y",1],["Away","z",-1],["Toward","z",1]].forEach(([r,t,e])=>{zn("nudge"+r,HTMLButtonElement).addEventListener("click",()=>{Si[t]+=e})});let pr;const Oh=new ResizeObserver(r=>{for(const t of r)if(t.contentBoxSize.length!=1)console.log("Ignoring unexpected resize info",t);else{const e=t.contentBoxSize[0],n=e.blockSize,i=e.inlineSize;let s=3;pr=()=>{if(s<1){pr=void 0,Pn.aspect=1,Pn.updateProjectionMatrix();const o=Math.min(i,n);Xs.setSize(o,o),Da()}else s--}}});Oh.observe(Ih,{box:"content-box"});Oh.observe(Ih,{box:"device-pixel-content-box"});