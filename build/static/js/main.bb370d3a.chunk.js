(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){e.exports=a(283)},140:function(e,t,a){},142:function(e,t,a){},258:function(e,t,a){e.exports=a.p+"static/media/profile.a57a717e.jpg"},259:function(e,t,a){e.exports=a.p+"static/media/kwitter.a8ff30f9.png"},260:function(e,t,a){e.exports=a.p+"static/media/birdnerd.f1a7f6fd.png"},261:function(e,t,a){e.exports=a.p+"static/media/sokoban.f0ec01a9.png"},262:function(e,t,a){e.exports=a.p+"static/media/connectfour.c2f04d24.png"},263:function(e,t,a){e.exports=a.p+"static/media/rockpaperscissors.f475a74a.png"},283:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(30),i=a.n(l),c=(a(140),a(64)),o=a(65),s=a(116),m=a(66),u=a(117),d=(a(142),a(290)),h=a(296),E=a(294),p=a(297),f=a(300),g=a(292),b=a(295),v=a(298),x=a(284),w=a(299),y=function(e){var t=e.mobile;return r.a.createElement(d.a,{text:!0},r.a.createElement(h.a,{as:"h1",className:"title",content:"Doug Enas",inverted:!0,style:{fontSize:t?"1em":"2em",fontWeight:"normal",marginBottom:0,marginTop:t?"1.5em":"3em",textAlign:"center"}}))},k=function(){return r.a.createElement(E.a,{src:a(258),size:"small",className:"mainPhoto"})},O=function(){return r.a.createElement(d.a,{text:!0},r.a.createElement(p.a,{className:"projects"},r.a.createElement("h2",null,"Kwitter"),r.a.createElement("h4",null,"React, Redux"),r.a.createElement("a",{href:"https://dougenas.github.io/kwitter/"},r.a.createElement(E.a,{src:a(259)})),r.a.createElement("br",null),r.a.createElement("h2",null,"Bird Nerd"),r.a.createElement("h4",null,"React, Postgres"),r.a.createElement("a",{href:"https://mhoelzer.github.io/birdNerd/"},r.a.createElement(E.a,{src:a(260)})),r.a.createElement("br",null),r.a.createElement("h2",null,"Sokoban"),r.a.createElement("h4",null,"Javascript"),r.a.createElement("a",{href:"https://dougenas.github.io/sokoban/"},r.a.createElement(E.a,{src:a(261)})),r.a.createElement("br",null),r.a.createElement("h2",null,"Connect Four"),r.a.createElement("h4",null,"Javascript"),r.a.createElement("a",{href:"https://dougenas.github.io/connectfour/"},r.a.createElement(E.a,{src:a(262)})),r.a.createElement("br",null),r.a.createElement("h2",null,"Rock Paper Scissors"),r.a.createElement("h4",null,"Javascript"),r.a.createElement("a",{href:"https://dougenas.github.io/rockpaperscissors/"},r.a.createElement(E.a,{src:a(263)})),r.a.createElement("br",null)))},j=function(){return r.a.createElement(d.a,{text:!0},r.a.createElement(p.a,{className:"bio"},r.a.createElement("p",null,"Hi, I'm a Front End Software Developer living in Indianapolis, IN. On this page you will find the most recent projects I have worked on. Feel free to contact me via email at ",r.a.createElement("a",{href:"mailto:douglassenas@gmail.com"},"douglassenas@gmail.com"),".")))},S=function(e){var t=e.mobile;return r.a.createElement(d.a,{text:!0},r.a.createElement(h.a,{as:"h2",className:"title",content:"Contact",style:{fontSize:t?"1.5em":"1.7em",fontWeight:"normal",marginTop:t?"0.5em":"1.5em",textAlign:"center"}}),r.a.createElement("p",{className:"bio"},r.a.createElement("a",{href:"mailto:douglassenas@gmail.com"},"douglassenas@gmail.com")))},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.hideFixedMenu=function(){return a.setState({fixed:!1})},a.showFixedMenu=function(){return a.setState({fixed:!0})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.fixed;return r.a.createElement(f.a,{minWidth:f.a.onlyTablet.minWidth},r.a.createElement(g.a,{once:!1,onBottomPassed:this.showFixedMenu,onBottomPassedReverse:this.hideFixedMenu},r.a.createElement(p.a,{inverted:!0,textAlign:"center",style:{minHeight:700,padding:"1em 0em"},vertical:!0},r.a.createElement(b.a,{fixed:t?"top":null,inverted:!t,pointing:!t,secondary:!t,size:"large"}),r.a.createElement(y,null),r.a.createElement(k,null),r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(S,null))),e)}}]),t}(n.Component),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={},a.handleSidebarHide=function(){return a.setState({sidebarOpened:!1})},a.handleToggle=function(){return a.setState({sidebarOpened:!0})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children,t=this.state.sidebarOpened;return r.a.createElement(f.a,{as:v.a.Pushable,maxWidth:f.a.onlyMobile.maxWidth},r.a.createElement(v.a,{as:b.a,animation:"push",inverted:!0,onHide:this.handleSidebarHide,vertical:!0,visible:t}),r.a.createElement(v.a.Pusher,{dimmed:t},r.a.createElement(p.a,{inverted:!0,textAlign:"center",style:{minHeight:350,padding:"1em 0em"},vertical:!0},r.a.createElement(d.a,null,r.a.createElement(b.a,{inverted:!0,pointing:!0,secondary:!0,size:"large"},r.a.createElement(b.a.Item,{onClick:this.handleToggle},r.a.createElement(x.a,{name:"sidebar"})),r.a.createElement(b.a.Item,{position:"right"}),r.a.createElement(y,null),r.a.createElement(k,null),r.a.createElement(j,null),r.a.createElement(O,null),r.a.createElement(S,null)))),e))}}]),t}(n.Component),A=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement(N,null,t),r.a.createElement(W,null,t))},F=function(){return r.a.createElement(A,null,r.a.createElement(p.a,{style:{padding:"8em 0em"},vertical:!0},r.a.createElement(w.a,{container:!0,stackable:!0,verticalAlign:"middle"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(293);i.a.render(r.a.createElement(I.a,null,r.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,2,1]]]);
//# sourceMappingURL=main.bb370d3a.chunk.js.map