(this["webpackJsonpcoinstats-app"]=this["webpackJsonpcoinstats-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(7),a=n.n(c),r=n(6),o=n.n(r),l=n(8),s=n(3),d=(n(14),n(15),n(1));var u=function(e){var t,n,c,a,r,o,l,u,v,h,j,b,O,m,p,x,f,y,w,N,g,k,M,_,S,I=e.data,D=Object(i.useState)(!1),F=Object(s.a)(D,2),A=F[0],W=F[1],E=new Date(null===I||void 0===I||null===(t=I.location)||void 0===t?void 0:t.localtime),J=window.innerWidth;console.log(J);var T=function(e){var t=e.split(" "),n=Object(s.a)(t,2),i=n[0],c=n[1],a=i.split(":"),r=Object(s.a)(a,2),o=r[0],l=r[1];return"12"===o&&(o="00"),"PM"===c&&(o=parseInt(o,10)+12),"".concat(o,":").concat(l)};return Object(d.jsx)("div",{className:"current-weather",children:void 0===(null===I||void 0===I?void 0:I.error)?Object(d.jsxs)("div",{className:"return-data",children:[Object(d.jsxs)("div",{className:"current-weather-header",children:[Object(d.jsxs)("div",{className:"current-weather-header-location",children:[Object(d.jsxs)("h2",{children:[null===I||void 0===I||null===(n=I.location)||void 0===n?void 0:n.name,", ",null===I||void 0===I||null===(c=I.location)||void 0===c?void 0:c.region,","," ",J<=960?"":null===I||void 0===I||null===(a=I.location)||void 0===a?void 0:a.country]}),Object(d.jsx)("h2",{children:J>960?"":null===I||void 0===I||null===(r=I.location)||void 0===r?void 0:r.country}),Object(d.jsx)("h2",{children:J>960?"".concat(["January","February","March","April","May","June","July","August","September","October","November","December"][E.getMonth()]," ").concat(E.getDate(),",\n                ").concat(E.getFullYear()," | ").concat(["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][E.getDay()],"\n                ").concat(null===I||void 0===I||null===(o=I.location)||void 0===o?void 0:o.localtime.slice((null===I||void 0===I||null===(l=I.location)||void 0===l?void 0:l.localtime.length)-5)):null===I||void 0===I||null===(u=I.location)||void 0===u?void 0:u.localtime})]}),Object(d.jsxs)("div",{className:"current-weather-header-units",children:[Object(d.jsx)("h1",{onClick:function(){return W(!1)},className:A?"current-weather-header-degrees":"current-weather-header-degrees active",children:"\xb0C"}),Object(d.jsx)("h2",{className:"unit-seperator",children:"|"}),Object(d.jsx)("h1",{onClick:function(){return W(!0)},className:A?"current-weather-header-degrees active":"current-weather-header-degrees",children:"\xb0F"})]})]}),Object(d.jsxs)("div",{className:"current-weather-conditions",children:[Object(d.jsx)("div",{className:"current-weather-conditions-temperature",children:Object(d.jsx)("h1",{children:A?Math.round(null===I||void 0===I||null===(v=I.current)||void 0===v?void 0:v.temp_f)+"\xb0":Math.round(null===I||void 0===I||null===(h=I.current)||void 0===h?void 0:h.temp_c)+"\xb0"})}),Object(d.jsxs)("div",{className:"current-weather-conditions-icon",children:[Object(d.jsx)("img",{src:null===I||void 0===I||null===(j=I.current)||void 0===j||null===(b=j.condition)||void 0===b?void 0:b.icon,alt:"None"}),Object(d.jsx)("h2",{children:J<=960?"":null===I||void 0===I||null===(O=I.current)||void 0===O||null===(m=O.condition)||void 0===m?void 0:m.text})]}),Object(d.jsxs)("div",{className:"current-weather-conditions-measure",children:[Object(d.jsxs)("h3",{children:["Wind:"," ",A?Math.round(null===I||void 0===I||null===(p=I.current)||void 0===p?void 0:p.wind_mph)+" mph":Math.round(null===I||void 0===I||null===(x=I.current)||void 0===x?void 0:x.wind_kph)+" kph"]}),Object(d.jsxs)("h3",{children:["Humidity: ",null===I||void 0===I||null===(f=I.current)||void 0===f?void 0:f.humidity,"%"]}),Object(d.jsxs)("h3",{children:["Feels Like:"," ",A?Math.round(null===I||void 0===I||null===(y=I.current)||void 0===y?void 0:y.feelslike_f)+"\xb0":Math.round(null===I||void 0===I||null===(w=I.current)||void 0===w?void 0:w.feelslike_c)+"\xb0"]})]}),Object(d.jsxs)("div",{className:"current-weather-conditions-measure",children:[Object(d.jsxs)("h3",{children:["Visibility:"," ",A?(null===I||void 0===I||null===(N=I.current)||void 0===N?void 0:N.vis_miles)+" mi":(null===I||void 0===I||null===(g=I.current)||void 0===g?void 0:g.vis_km)+" km"]}),Object(d.jsxs)("h3",{children:["Pressure:"," ",A?(null===I||void 0===I||null===(k=I.current)||void 0===k?void 0:k.pressure_in)+" in":(.1*(null===I||void 0===I||null===(M=I.current)||void 0===M?void 0:M.pressure_mb)).toFixed(1)+" kPa"]}),Object(d.jsxs)("h3",{children:["Air Quality: ",null===I||void 0===I||null===(_=I.current)||void 0===_?void 0:_.air_quality["us-epa-index"]]})]})]}),Object(d.jsx)("div",{className:"forecast-weather",children:null===I||void 0===I||null===(S=I.forecast)||void 0===S?void 0:S.forecastday.map((function(e,t){var n,i,c,a,r,o,l,s,u=new Date(null===e||void 0===e?void 0:e.date);return Object(d.jsxs)("div",{className:"forecast-wrapper",children:[Object(d.jsx)("h1",{children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][u.getDay()]}),Object(d.jsx)("img",{src:null===e||void 0===e||null===(n=e.day)||void 0===n||null===(i=n.condition)||void 0===i?void 0:i.icon,alt:"None"}),Object(d.jsxs)("div",{className:"forecast-high-low",children:[A?Math.round(null===e||void 0===e||null===(c=e.day)||void 0===c?void 0:c.maxtemp_f)+"\xb0":Math.round(null===e||void 0===e||null===(a=e.day)||void 0===a?void 0:a.maxtemp_c)+"\xb0"," ","|"," ",A?Math.round(null===e||void 0===e||null===(r=e.day)||void 0===r?void 0:r.mintemp_f)+"\xb0":Math.round(null===e||void 0===e||null===(o=e.day)||void 0===o?void 0:o.mintemp_c)+"\xb0"]}),Object(d.jsxs)("h2",{children:[T(null===e||void 0===e||null===(l=e.astro)||void 0===l?void 0:l.sunrise)," ",Object(d.jsx)("i",{class:"fas fa-sun"})]}),Object(d.jsxs)("h2",{children:[T(null===e||void 0===e||null===(s=e.astro)||void 0===s?void 0:s.sunset)," ",Object(d.jsx)("i",{class:"fas fa-moon"})]})]},t)}))})," "]}):Object(d.jsxs)("div",{className:"error",children:[Object(d.jsx)("i",{class:"far fa-frown"}),Object(d.jsx)("h1",{children:"Whoops! It looks like you entered an invalid city, please try again."})]})})},v=n(4),h=n(0);n(17);var j=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)([]),r=Object(s.a)(a,2),j=r[0],b=r[1],O=Object(i.useState)(""),m=Object(s.a)(O,2),p=m[0],x=m[1],f=Object(i.useState)("Los Angeles"),y=Object(s.a)(f,2),w=y[0],N=y[1],g=Object(i.useState)(0),k=Object(s.a)(g,2),M=k[0],_=k[1],S=Object(i.useState)(0),I=Object(s.a)(S,2),D=I[0],F=I[1],A=v.a.timeline();Object(i.useEffect)((function(){W()}),[w]),Object(i.useEffect)((function(){return function(){v.a.timeline().to(".current-weather",{ease:h.b.easeInOut,opacity:0,duration:.4})}}),[M]),Object(i.useEffect)((function(){return function(){var e=v.a.timeline();e.to(".upper-content-header",{opacity:0,y:-100,delay:.5}),e.to(".search-bar",{ease:h.b.easeInOut,y:"-45vh",duration:1}),e.to(".current-weather",{ease:h.b.easeInOut,opacity:1,duration:.5})}}),[n,M]);var W=function(){var e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat("d7e8027877484293a6a40033211803","&q=").concat(w,"&days=3&aqi=yes&alerts=no"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n),M<1?A.to(".current-weather",{ease:h.b.easeInOut,opacity:1,duration:.4,delay:2}):A.to(".current-weather",{ease:h.b.easeInOut,opacity:1,duration:.4});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"upper-content",children:Object(d.jsx)("h1",{className:"upper-content-header",children:"Weather App"})}),Object(d.jsxs)("form",{className:"search-bar",onSubmit:function(e){e.preventDefault(),x(""),c(!0),F(D+1),D>0&&_(M+1),setTimeout((function(){return N(p)}),290)},children:[Object(d.jsx)("input",{type:"text",name:"",value:p,onChange:function(e){x(e.target.value)},className:"search-bar-input",placeholder:"Enter a city..."}),Object(d.jsx)("button",{className:"search-bar-submit",children:Object(d.jsx)("i",{className:"fas fa-search"})})]}),n&&Object(d.jsx)(u,{data:j})]})};a.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.6ef2099e.chunk.js.map