(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,a){t.exports=a(44)},20:function(t,e,a){},22:function(t,e,a){},44:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),l=a(9),i=a.n(l),r=(a(20),a(10)),o=a(11),c=a(13),m=a(12),d=a(14),u=(a(22),function(t){return s.a.createElement("div",{style:{marginLeft:"5%"}},s.a.createElement("p",{className:"Container"},s.a.createElement("text",null,"Profile Icon"),s.a.createElement("img",null),s.a.createElement("div",{style:{fontWeight:"bold"}},t.name," ",s.a.createElement("span",{style:{float:"right"}},"Points")),s.a.createElement("div",null,"Kills:  ",t.kills,s.a.createElement("span",{className:"Points"},t.kills)),s.a.createElement("div",null,s.a.createElement("span",null,"Dmg Dealt:  ",t.dmg2Champ),s.a.createElement("span",{className:"Points"},parseInt(4e-4*t.dmg2Champ))),s.a.createElement("div",null,"Dmg Taken:  ",t.dmgTaken,s.a.createElement("span",{className:"Points"},parseInt(t.dmgTaken/t.deaths*.002))),s.a.createElement("div",null,"Deaths:  ",t.deaths),s.a.createElement("div",null,"Assists:  ",t.assists)))}),p=a(24),h=function(t){function e(){var t,a;Object(r.a)(this,e);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(c.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(s)))).state={},a.findNameHandler=function(){var t=document.querySelector("#input").value;p("https://172.31.0.40:3131/?name=".concat(t)).then(function(t){console.log(t.data),a.setState({data:t.data})}).catch(function(t){return console.error(t)})},a}return Object(d.a)(e,t),Object(o.a)(e,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var t=this,e={marginLeft:"5%",fontWeight:10,textAlign:"left"};return s.a.createElement("div",null,s.a.createElement("h1",{style:{textAlign:"center",fontWeight:10}},"Skin Game"),s.a.createElement("h2",{style:e},"Enter Name of Summoner in Party"),s.a.createElement("input",{id:"input",style:e}),s.a.createElement("button",{onClick:this.findNameHandler},"PressMe"),this.state.data&&this.state.data.participantIdentities.map(function(e,a){return s.a.createElement(u,{name:e.player.summonerName,kills:t.state.data.participants[a].stats.kills,dmg2Champ:t.state.data.participants[a].stats.totalDamageDealtToChampions,dmgTaken:t.state.data.participants[a].stats.totalDamageTaken,deaths:t.state.data.participants[a].stats.deaths,assists:t.state.data.participants[a].stats.assists})}))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.030b7c54.chunk.js.map