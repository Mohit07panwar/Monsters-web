(this["webpackJsonpmonsters-web"]=this["webpackJsonpmonsters-web"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(1),c=n.n(s),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),l=(n(13),n(14),n(15),n(0)),j=function(e){return Object(l.jsxs)("div",{className:"css",children:[Object(l.jsx)("img",{src:"https://robohash.org/".concat(e.Monsters.id,"?set=set2&size=180x180"),alt:"Monsters"}),Object(l.jsx)("h1",{children:e.Monsters.name}),Object(l.jsx)("p",{children:e.Monsters.email})]})},d=function(e){return Object(l.jsx)("div",{className:"card-list",children:e.Monsters.map((function(e){return Object(l.jsx)(j,{Monsters:e})}))})},b=(n(17),function(e){var t=e.placeholder,n=e.handleChange;return Object(l.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={Monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({Monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.Monsters,s=t.searchField,c=n.filter((function(e){return e.name.includes(s)}));return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("h1",{children:"Monsters Rolodex"}),Object(l.jsx)(b,{placeholder:"search Monster",handleChange:function(t){return e.setState({searchField:t.target.value})}}),Object(l.jsx)(d,{Monsters:c})]})}}]),n}(s.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.28f18bc0.chunk.js.map