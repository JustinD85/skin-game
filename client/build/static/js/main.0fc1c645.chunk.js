(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(2),l=a.n(i),r=(a(13),a(3)),o=a(4),c=a(6),m=a(5),u=a(7),d=(a(15),function(e){return s.a.createElement("div",{style:{marginLeft:"5%"}},s.a.createElement("p",{className:"Container"},s.a.createElement("text",null,"Profile Icon"),s.a.createElement("img",null),s.a.createElement("div",{style:{fontWeight:"bold"}},e.name," ",s.a.createElement("span",{style:{float:"right"}},"Points")),s.a.createElement("div",null,"Kills:  ",e.kills,s.a.createElement("span",{className:"Points"},e.kills)),s.a.createElement("div",null,s.a.createElement("span",null,"Dmg Dealt:  ",e.dmg2Champ),s.a.createElement("span",{className:"Points"},parseInt(4e-4*e.dmg2Champ))),s.a.createElement("div",null,"Dmg Taken:  ",e.dmgTaken,s.a.createElement("span",{className:"Points"},parseInt(e.dmgTaken/e.deaths*.002))),s.a.createElement("div",null,"Deaths:  ",e.deaths),s.a.createElement("div",null,"Assists:  ",e.assists)))}),p=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={},a.findNameHandler=function(){var e=document.querySelector("#input").value;fetch("../../users?name=".concat(e),{mode:"no-cors"}).then(function(e){console.log(e.data),e.json()}).then(function(e){return a.setState({data:e})}).catch(function(e){return console.error(e)})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t={marginLeft:"5%",fontWeight:10,textAlign:"left"};return s.a.createElement("div",null,s.a.createElement("h1",{style:{textAlign:"center",fontWeight:10}},"Skin Game"),s.a.createElement("h2",{style:t},"Enter Name of Summoner in Party"),s.a.createElement("input",{id:"input",style:t}),s.a.createElement("button",{onClick:this.findNameHandler},"PressMe"),this.state.data&&this.state.data.participantIdentities.map(function(t,a){return s.a.createElement(d,{name:t.player.summonerName,kills:e.state.data.participants[a].stats.kills,dmg2Champ:e.state.data.participants[a].stats.totalDamageDealtToChampions,dmgTaken:e.state.data.participants[a].stats.totalDamageTaken,deaths:e.state.data.participants[a].stats.deaths,assists:e.state.data.participants[a].stats.assists})}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(17)}},[[8,2,1]]]);
//# sourceMappingURL=main.0fc1c645.chunk.js.map