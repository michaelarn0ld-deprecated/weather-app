(this["webpackJsonpcoinstats-app"]=this["webpackJsonpcoinstats-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(7),r=n.n(a),c=n(5),l=n.n(c),o=n(8),s=n(3),d=(n(14),n(15),n(1));var u=function(e){var t,n,a,r,c,l,o,u,v,h,j,b,m,O,p,f,x,y,w,N,g,M,_,k=e.data,S=Object(i.useState)(!1),D=Object(s.a)(S,2),F=D[0],A=D[1],I=new Date(null===k||void 0===k||null===(t=k.location)||void 0===t?void 0:t.localtime),E=function(e){var t=e.split(" "),n=Object(s.a)(t,2),i=n[0],a=n[1],r=i.split(":"),c=Object(s.a)(r,2),l=c[0],o=c[1];return"12"===l&&(l="00"),"PM"===a&&(l=parseInt(l,10)+12),"".concat(l,":").concat(o)};return Object(d.jsxs)("div",{className:"current-weather",children:[Object(d.jsxs)("div",{className:"current-weather-header",children:[Object(d.jsxs)("div",{className:"current-weather-header-location",children:[Object(d.jsxs)("h2",{children:[null===k||void 0===k||null===(n=k.location)||void 0===n?void 0:n.name,", ",null===k||void 0===k||null===(a=k.location)||void 0===a?void 0:a.region,","," ",null===k||void 0===k||null===(r=k.location)||void 0===r?void 0:r.country]}),Object(d.jsxs)("h2",{children:[["January","February","March","April","May","June","July","August","September","October","November","December"][I.getMonth()]," ",I.getDate(),", ",I.getFullYear()," ","| ",["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][I.getDay()]," ",null===k||void 0===k||null===(c=k.location)||void 0===c?void 0:c.localtime.slice((null===k||void 0===k||null===(l=k.location)||void 0===l?void 0:l.localtime.length)-5)]})]}),Object(d.jsxs)("div",{className:"current-weather-header-units",children:[Object(d.jsx)("h1",{onClick:function(){return A(!1)},className:F?"current-weather-header-degrees":"current-weather-header-degrees active",children:"\xb0C"}),Object(d.jsx)("h2",{className:"unit-seperator",children:"|"}),Object(d.jsx)("h1",{onClick:function(){return A(!0)},className:F?"current-weather-header-degrees active":"current-weather-header-degrees",children:"\xb0F"})]})]}),Object(d.jsxs)("div",{className:"current-weather-conditions",children:[Object(d.jsx)("div",{className:"current-weather-conditions-temperature",children:Object(d.jsx)("h1",{children:F?Math.round(null===k||void 0===k||null===(o=k.current)||void 0===o?void 0:o.temp_f)+"\xb0":Math.round(null===k||void 0===k||null===(u=k.current)||void 0===u?void 0:u.temp_c)+"\xb0"})}),Object(d.jsxs)("div",{className:"current-weather-conditions-icon",children:[Object(d.jsx)("img",{src:null===k||void 0===k||null===(v=k.current)||void 0===v||null===(h=v.condition)||void 0===h?void 0:h.icon,alt:"None"}),Object(d.jsx)("h2",{children:null===k||void 0===k||null===(j=k.current)||void 0===j||null===(b=j.condition)||void 0===b?void 0:b.text})]}),Object(d.jsxs)("div",{className:"current-weather-conditions-measure",children:[Object(d.jsxs)("h3",{children:["Wind:"," ",F?Math.round(null===k||void 0===k||null===(m=k.current)||void 0===m?void 0:m.wind_mph)+" mph":Math.round(null===k||void 0===k||null===(O=k.current)||void 0===O?void 0:O.wind_kph)+" kph"]}),Object(d.jsxs)("h3",{children:["Humidity: ",null===k||void 0===k||null===(p=k.current)||void 0===p?void 0:p.humidity,"%"]}),Object(d.jsxs)("h3",{children:["Feels Like:"," ",F?Math.round(null===k||void 0===k||null===(f=k.current)||void 0===f?void 0:f.feelslike_f)+"\xb0":Math.round(null===k||void 0===k||null===(x=k.current)||void 0===x?void 0:x.feelslike_c)+"\xb0"]})]}),Object(d.jsxs)("div",{className:"current-weather-conditions-measure",children:[Object(d.jsxs)("h3",{children:["Visibility:"," ",F?(null===k||void 0===k||null===(y=k.current)||void 0===y?void 0:y.vis_miles)+" mi":(null===k||void 0===k||null===(w=k.current)||void 0===w?void 0:w.vis_km)+" km"]}),Object(d.jsxs)("h3",{children:["Pressure:"," ",F?(null===k||void 0===k||null===(N=k.current)||void 0===N?void 0:N.pressure_in)+" in":(.1*(null===k||void 0===k||null===(g=k.current)||void 0===g?void 0:g.pressure_mb)).toFixed(1)+" kPa"]}),Object(d.jsxs)("h3",{children:["Air Quality: ",null===k||void 0===k||null===(M=k.current)||void 0===M?void 0:M.air_quality["us-epa-index"]]})]})]}),Object(d.jsx)("div",{className:"forecast-weather",children:null===k||void 0===k||null===(_=k.forecast)||void 0===_?void 0:_.forecastday.map((function(e){var t,n,i,a,r,c,l,o,s=new Date(null===e||void 0===e?void 0:e.date);return Object(d.jsxs)("div",{className:"forecast-wrapper",children:[Object(d.jsx)("h1",{children:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][s.getDay()]}),Object(d.jsx)("img",{src:null===e||void 0===e||null===(t=e.day)||void 0===t||null===(n=t.condition)||void 0===n?void 0:n.icon,alt:"None"}),Object(d.jsxs)("div",{className:"forecast-high-low",children:[F?Math.round(null===e||void 0===e||null===(i=e.day)||void 0===i?void 0:i.maxtemp_f)+"\xb0":Math.round(null===e||void 0===e||null===(a=e.day)||void 0===a?void 0:a.maxtemp_c)+"\xb0"," ","|"," ",F?Math.round(null===e||void 0===e||null===(r=e.day)||void 0===r?void 0:r.mintemp_f)+"\xb0":Math.round(null===e||void 0===e||null===(c=e.day)||void 0===c?void 0:c.mintemp_c)+"\xb0"]}),Object(d.jsxs)("h2",{children:[E(null===e||void 0===e||null===(l=e.astro)||void 0===l?void 0:l.sunrise)," ",Object(d.jsx)("i",{class:"fas fa-sun"})]}),Object(d.jsxs)("h2",{children:[E(null===e||void 0===e||null===(o=e.astro)||void 0===o?void 0:o.sunset)," ",Object(d.jsx)("i",{class:"fas fa-moon"})]})]})}))})]})},v=n(6),h=n(0);n(17);var j=function(){var e=Object(i.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(i.useState)([]),c=Object(s.a)(r,2),j=c[0],b=c[1],m=Object(i.useState)(""),O=Object(s.a)(m,2),p=O[0],f=O[1],x=Object(i.useState)("Los Angeles"),y=Object(s.a)(x,2),w=y[0],N=y[1],g=Object(i.useState)(0),M=Object(s.a)(g,2),_=M[0],k=M[1],S=Object(i.useState)(0),D=Object(s.a)(S,2),F=D[0],A=D[1];Object(i.useEffect)((function(){I()}),[w]),Object(i.useEffect)((function(){return function(){var e=v.a.timeline();e.to(".current-weather",{ease:h.b.easeInOut,opacity:0,duration:.5}),e.to(".current-weather",{ease:h.b.easeInOut,opacity:1,duration:.5,delay:.8})}}),[_]),Object(i.useEffect)((function(){return function(){var e=v.a.timeline();e.to(".upper-content-header",{opacity:0,y:-100,delay:.5}),e.to(".search-bar",{ease:h.b.easeInOut,y:"-45vh",duration:1}),e.to(".current-weather",{ease:h.b.easeInOut,opacity:1,duration:.5})}}),[n]);var I=function(){var e=Object(o.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.weatherapi.com/v1/forecast.json?key=".concat("d7e8027877484293a6a40033211803","&q=").concat(w,"&days=3&aqi=yes&alerts=no"));case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,b(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("div",{className:"upper-content",children:Object(d.jsx)("h1",{className:"upper-content-header",children:"Weather App"})}),Object(d.jsxs)("form",{className:"search-bar",onSubmit:function(e){e.preventDefault(),f(""),a(!0),A(F+1),F>0&&k(_+1),setTimeout((function(){return N(p)}),290)},children:[Object(d.jsx)("input",{type:"text",name:"",value:p,onChange:function(e){f(e.target.value)},className:"search-bar-input",placeholder:"Enter a city..."}),Object(d.jsx)("button",{className:"search-bar-submit",children:Object(d.jsx)("i",{className:"fas fa-search"})})]}),n&&Object(d.jsx)(u,{data:j})]})};r.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.1540f800.chunk.js.map