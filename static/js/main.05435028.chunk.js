(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],[,,,,,function(a,e,t){a.exports={soundsLibrary:"SoundsLibrary_soundsLibrary__1wqDs",text:"SoundsLibrary_text__1XUFn",buttonsBlock:"SoundsLibrary_buttonsBlock__1gBj1"}},,,function(a,e,t){a.exports={button:"Button_button__3QF_k"}},function(a,e,t){a.exports={scrollBar:"ScrollBar_scrollBar__1HorZ",input:"ScrollBar_input__X1H4I"}},function(a,e,t){a.exports={sideMenu:"SideMenu_sideMenu__2Qg5Y",display:"SideMenu_display__2hoHc"}},,function(a,e,t){a.exports={"drum-pad":"Pad_drum-pad__7l5DU"}},function(a,e,t){a.exports={padBox:"PadBox_padBox__3gjNj"}},,,,,,,,,,,,,function(a,e,t){},function(a,e,t){"use strict";t.r(e);var i=t(3),c=t(2),s=t(11),o=t.n(s),_=t(12),n=t.n(_),r=t(0);var d=function(a){var e=a.id,t=a.content,i=a.src,s=a.soundName,o=a.mouseListener,_=Object(c.useRef)();return Object(r.jsxs)("button",{id:e,className:n.a["drum-pad"],onMouseDown:function(a){o(_,a)},children:[t,Object(r.jsx)("audio",{ref:_,id:t,src:i,className:"clip",preload:"true",title:s})]})},m=t(13),u=t.n(m);var l=function(a){var e,t=a.lettersArr,i=a.soundSet,c=a.mouseListener,s=a.soundNames;return e=t.map((function(a,e){return Object(r.jsx)(d,{id:"Key".concat(a),src:i[e],content:a,mouseListener:c,soundName:s[e]},a)})),Object(r.jsx)("div",{className:u.a.padBox,children:e})},p=t(14),b=t(8),f=t.n(b);var h=function(a){return Object(r.jsxs)("button",{id:a.id,onClick:a.onClick,value:a.value,className:a.colorizedButtonId===a.id?"".concat(f.a.button," radial-accent"):f.a.button,children:[Object(r.jsx)(p.a,{icon:a.icon,pointerEvents:"none"}),a.children]})},j=t(15),g=t(5),v=t.n(g);var k=function(a){for(var e=[],t=1;t<=7;t++)e.push(Object(r.jsx)(h,{id:"SET_"+t,onClick:a.changeSoundSet,children:" "+t,icon:j.a,colorizedButtonId:a.colorizedButtonId},"SET_"+t));return Object(r.jsxs)("div",{className:v.a.soundsLibrary,children:[Object(r.jsx)("p",{className:v.a.text,children:"Sound library"}),Object(r.jsx)("div",{className:v.a.buttonsBlock,children:e})]})},S=t(9),O=t.n(S);var x=function(a){return Object(r.jsxs)("div",{className:O.a.scrollBar,children:[Object(r.jsx)("p",{children:"Sound volume"}),Object(r.jsx)("input",{className:O.a.input,type:"range",min:"0",max:"100",value:a.volume,step:"1",name:"scrollbar",onChange:a.handleVolumeChange})]})},y=t(10),B=t.n(y);var E=function(a){var e=a.displayInfo,t=a.colorizedButtonId,i=a.changeSoundSet,c=a.volume,s=a.handleVolumeChange;return Object(r.jsxs)("div",{className:B.a.sideMenu,children:[Object(r.jsx)("div",{id:"display",className:B.a.display,children:e}),Object(r.jsx)(x,{volume:c,handleVolumeChange:s}),Object(r.jsx)(k,{colorizedButtonId:t,changeSoundSet:i})]})},w=(t(26),{"piano A":t.p+"static/media/528004__blakengouda__a-piano-chord.8a45da67.m4a",bass:t.p+"static/media/56801__esformouse__bass01.0c718156.m4a",tone:t.p+"static/media/56827__esformouse__tone01.837ba223.m4a","guitar A":t.p+"static/media/8450__speedy__a-full-up.9cbdc2ee.m4a","guitar A SUS":t.p+"static/media/8458__speedy__asus-full-ok.9c796c04.m4a","guitar Cadd9":t.p+"static/media/8473__speedy__cadd9-full-up.ca142f40.m4a",chinese:t.p+"static/media/209868__veiler__sabian-aax-chinese-3.07f81689.m4a","hi-hat":t.p+"static/media/133935__hesed23__hihat2.3165c831.m4a","tom 16":t.p+"static/media/16320__ltibbits__tom-16-tight-high-vol.195713f9.m4a"}),N={bass:t.p+"static/media/56805__esformouse__bass05.afa10c46.m4a",clap:t.p+"static/media/56807__esformouse__clap01.86b67655.m4a",snare:t.p+"static/media/56822__esformouse__snare03.21e25060.m4a","guitar G":t.p+"static/media/58074__noisecollector__chord-g.542ea92a.m4a","guitar Gm":t.p+"static/media/58081__noisecollector__chord-gm.6c3ac1ad.m4a","guitar Gm7":t.p+"static/media/58083__noisecollector__chord-gm7.2efffd1a.m4a","left Crash":t.p+"static/media/209872__veiler__left-crash.91c182f5.m4a",sticks:t.p+"static/media/320255__vihaleipa__drumstick-hit-05.54e5efd7.m4a","swish Knocker":t.p+"static/media/209869__veiler__nice-swish-knocker.f94a378c.m4a"},C={"piano C":t.p+"static/media/528012__blakengouda__c-piano-chord.e1b5867f.m4a","guitar D":t.p+"static/media/8477__speedy__d-full-up-ok.a232e0bd.m4a","guitar E":t.p+"static/media/8490__speedy__e-full-up.f5f574c1.m4a","guitar F":t.p+"static/media/8495__speedy__f-min-low-d.071e79a2.m4a",snare:t.p+"static/media/56823__esformouse__snare04.48ac00d9.m4a",hats:t.p+"static/media/56809__esformouse__hats01.9253181b.m4a","heavy Kick":t.p+"static/media/56813__esformouse__heavy-kick04.62c8df66.m4a","small Crash":t.p+"static/media/209870__veiler__right-x-small-crash.3a3f1041.m4a",tambourine:t.p+"static/media/320264__vihaleipa__tambourine-hit-03.5c4b885b.m4a"},L={"piano G":t.p+"static/media/528015__blakengouda__g-piano-chord.b750b013.m4a",bass:t.p+"static/media/56803__esformouse__bass03.3e7269ee.m4a",clap:t.p+"static/media/56808__esformouse__clap02.b41b11c6.m4a","guitar D9":t.p+"static/media/58031__noisecollector__chord-dflat9.1bfd3896.m4a","guitar Fm":t.p+"static/media/58063__noisecollector__chord-fmin.1998938d.m4a","guitar F sharp":t.p+"static/media/58066__noisecollector__chord-fsharp.f066391f.m4a","right Crash":t.p+"static/media/209871__veiler__right-crash.fd150775.m4a",bongo:t.p+"static/media/482592__joao-janz__bongo-1-1.260d4f66.m4a",maraca:t.p+"static/media/482603__joao-janz__maraca-1-5.5a42966c.m4a"},T={kicker:t.p+"static/media/56816__esformouse__kicker03.fbaef79c.m4a",glitch:t.p+"static/media/56795__esformouse__glitch01.cb768d81.m4a",snare:t.p+"static/media/56826__esformouse__snare07.827669b4.m4a","guitar D add":t.p+"static/media/8481__speedy__dadd2-thin-strings-ok.32978459.m4a","guitar D min":t.p+"static/media/8482__speedy__dmin-full-ok.13eef753.m4a","guitar Open":t.p+"static/media/8503__speedy__open-strs.0618d811.m4a",sticks:t.p+"static/media/16297__ltibbits__sticks-low-pitch.7936820d.m4a","snare ":t.p+"static/media/16300__ltibbits__snare-2-high-vol.a48f6b04.m4a",crash:t.p+"static/media/209873__veiler__swiss-thumbtack-crash-1.597638f0.m4a"},z={"piano F":t.p+"static/media/528026__blakengouda__f-piano-chord.55cf0660.m4a","guitar F":t.p+"static/media/58056__noisecollector__chord-f.73c2332d.m4a","guitar E":t.p+"static/media/58038__noisecollector__chord-e.4322f4c0.m4a",snare:t.p+"static/media/16306__ltibbits__snare-5-tight-high-vol.d238e75f.m4a",kicker:t.p+"static/media/56818__esformouse__kicker05.37c911c6.m4a",tone:t.p+"static/media/56830__esformouse__tone04.5821d4e7.m4a",cabasa:t.p+"static/media/482539__joao-janz__cabasa-1-4.550e7e87.m4a",clap:t.p+"static/media/482548__joao-janz__clap-1-3.3c00e751.m4a","guitar Em":t.p+"static/media/58053__noisecollector__chord-em.f1ef6dc4.m4a"},I={kicker:t.p+"static/media/56817__esformouse__kicker04.595930e9.m4a","guitar Dm7":t.p+"static/media/58035__noisecollector__chord-dflatm7.476a8012.m4a","guitar F7":t.p+"static/media/58058__noisecollector__chord-f7.6827f026.m4a","guitar F sharp m":t.p+"static/media/58071__noisecollector__chord-fsharpm.c6d00bb4.m4a","water Splash":t.p+"static/media/320268__vihaleipa__water-splash-02.4ca67f0e.m4a",clava:t.p+"static/media/482628__joao-janz__clava-1-6.e3ce28ba.m4a","wood Scrape":t.p+"static/media/482634__joao-janz__wood-scrape-1-1.7d50dcf5.m4a","piano D":t.p+"static/media/528020__blakengouda__d-piano-chord.c9d4a8c2.m4a",snare:t.p+"static/media/16298__ltibbits__snare-1-high-vol.b0262f55.m4a"};function D(){var a,e=Object(c.useState)(Object.values(w)),t=Object(i.a)(e,2),s=t[0],o=t[1],_=Object(c.useState)(Object.keys(w)),n=Object(i.a)(_,2),d=n[0],m=n[1],u=Object(c.useState)(null),p=Object(i.a)(u,2),b=p[0],f=p[1],h=Object(c.useState)("SET_1"),j=Object(i.a)(h,2),g=j[0],v=j[1],k=Object(c.useState)(70),S=Object(i.a)(k,2),O=S[0],x=S[1],y=Object(c.useState)(!1),B=Object(i.a)(y,2),D=B[0],F=B[1],M=["Q","W","E","A","S","D","Z","X","C"],A=function(a){var e=a.code[a.code.length-1],t=a.code;if(M.includes(e)){var i=document.getElementById(e),c=document.getElementById(t);G(i),H(c)}};function G(e){(a=e).volume=O/100,a.pause(),a.currentTime=0,a.play(),V(a.title)}function V(a){f((function(){return D&&clearTimeout(D),F(setTimeout((function(){return f("")}),1e3)),a}))}function H(a){a.classList.add("radial-accent"),setTimeout((function(){return a.classList.remove("radial-accent")}),100)}return Object(c.useEffect)((function(){return window.addEventListener("keydown",A),function(){window.removeEventListener("keydown",A)}})),Object(r.jsxs)("div",{id:"drum-machine",className:"drumMachine",children:[Object(r.jsx)(l,{soundSet:s,soundNames:d,lettersArr:M,mouseListener:function(a,e){G(a.current),H(e.target)}}),Object(r.jsx)(E,{displayInfo:b,colorizedButtonId:g,changeSoundSet:function(a){var e;switch(a.target.id){case"SET_1":e=w;break;case"SET_2":e=N;break;case"SET_3":e=C;break;case"SET_4":e=L;break;case"SET_5":e=T;break;case"SET_6":e=z;break;case"SET_7":e=I;break;default:e=w}o(Object.values(e)),m(Object.keys(e)),v(a.target.id)},volume:O,handleVolumeChange:function(a){x(a.target.value),V("Sound volume: ".concat(a.target.value))}})]})}o.a.render(Object(r.jsx)(D,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.05435028.chunk.js.map