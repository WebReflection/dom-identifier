self.domIdentifier=function(e){"use strict";const{indexOf:t}=[];return e.getNode=(e,t)=>e.reduceRight(((e,t)=>e.childNodes[t]),t||document.documentElement),e.getPath=(e,n)=>{const d=[];let c;for(;(c=e.parentElement)&&(d.push(t.call(c.childNodes,e)),(e=c)!=n););return d},e}({}).default;