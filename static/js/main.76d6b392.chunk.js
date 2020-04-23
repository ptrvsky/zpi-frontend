(this["webpackJsonpzpi-frontend"]=this["webpackJsonpzpi-frontend"]||[]).push([[0],{34:function(e,a,t){},64:function(e,a,t){e.exports=t(84)},69:function(e,a,t){},75:function(e,a,t){},77:function(e,a,t){},78:function(e,a,t){},79:function(e,a,t){},80:function(e,a,t){},81:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(29),c=t.n(r),l=(t(69),t(9)),o=t(26),s=t(13),m=t(14),u=t(16),d=t(17),p=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),t}(i.a.Component),z=Object(o.e)(p),E=t(95),f=t(94),h=t(92),v=t(93),b=t(47),k=(t(75),function(e){var a=e.children;return Object(b.useMediaQuery)({minWidth:992})?a:null}),y=function(e){var a=e.children;return Object(b.useMediaQuery)({maxWidth:991})?a:null},w=function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={user:{status:"NOT_LOGGED"}},n}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Navbar"},i.a.createElement("div",{className:"navbar-container"},i.a.createElement(E.a,{variant:"light",expand:"lg"},i.a.createElement(l.b,{to:"/zpi-frontend/"},i.a.createElement(E.a.Brand,null,i.a.createElement("div",{className:"logo-text d-inline-block align-top"},i.a.createElement("span",{className:"dark-gray"},i.a.createElement("span",{role:"img","aria-label":"logo"},"\ud83c\udf55")," Pizzeria"),i.a.createElement("span",{className:"red"}," Online")))),i.a.createElement(y,null,"LOGGED"===this.state.user.status?i.a.createElement(f.a,{alignRight:!0,title:i.a.createElement(h.a,null),className:"user-button-mobile ml-auto"},i.a.createElement(l.b,{to:"/zpi-frontend/oreders",className:"dropdown-item"},"Zamowienia"),i.a.createElement(l.b,{to:"/zpi-frontend/cart",className:"dropdown-item"},"Koszyk"),i.a.createElement(l.b,{to:"/zpi-frontend/account",className:"dropdown-item"},"Dane konta"),i.a.createElement(f.a.Divider,null),i.a.createElement("div",{className:"dropdown-item",onClick:this.handleLogout},"Wyloguj")):i.a.createElement(l.b,{to:"/zpi-frontend/login",className:"login-button-mobile ml-auto"},i.a.createElement(v.a,null)),i.a.createElement(E.a.Toggle,null),i.a.createElement(E.a.Collapse,{className:"links"},i.a.createElement(l.b,{to:"/zpi-frontend/menu",className:"nav-link"},"Menu"),i.a.createElement(l.b,{to:"/zpi-frontend/about",className:"nav-link"},"O nas"),i.a.createElement(l.b,{to:"/zpi-frontend/contact",className:"nav-link"},"Kontakt"))),i.a.createElement(k,null,i.a.createElement("div",{className:"desktop-links"},i.a.createElement(l.b,{to:"/zpi-frontend/menu",className:"nav-link"},"Menu"),i.a.createElement(l.b,{to:"/zpi-frontend/about",className:"nav-link"},"O nas"),i.a.createElement(l.b,{to:"/zpi-frontend/contact",className:"nav-link"},"Kontakt")),"LOGGED"===this.state.user.status?i.a.createElement(f.a,{alignRight:!0,title:i.a.createElement(h.a,null),className:"ml-auto"},i.a.createElement(l.b,{to:"/zpi-frontend/oreders",className:"dropdown-item"},"Zamowienia"),i.a.createElement(l.b,{to:"/zpi-frontend/cart",className:"dropdown-item"},"Koszyk"),i.a.createElement(l.b,{to:"/zpi-frontend/account",className:"dropdown-item"},"Dane konta"),i.a.createElement(f.a.Divider,null),i.a.createElement("div",{className:"dropdown-item",onClick:this.handleLogout},"Wyloguj")):i.a.createElement(l.b,{to:"/zpi-frontend/login"},i.a.createElement(v.a,null)))),i.a.createElement("div",{className:"navbar-underline"})))}}]),t}(i.a.Component),N=Object(o.e)(w);t(77);var j=function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"footer-overline"}),i.a.createElement("div",{className:"footer-container"},i.a.createElement("div",{className:"footer-flexbox"},i.a.createElement("div",{className:"footer-copyright"},"Copyright \xa9 2020"))))},g=(t(34),t(78),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"index-wrapper"},i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"p1"},"Najlepsza pizza w mie\u015bcie"),i.a.createElement("div",{className:"p2"},"Na serio, nie k\u0142amiemy"),i.a.createElement("div",{className:"button-wrapper"},i.a.createElement(l.b,{to:"/zpi-frontend/menu"},i.a.createElement("button",{className:"btn-primary btn-order"},"Zam\xf3w teraz")))))}}]),t}(i.a.Component)),O=(t(79),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"handleOrderClick",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:"menu-element-wrapper"},i.a.createElement("div",{className:"id-element"},this.props.index+1),i.a.createElement("div",{className:"name-element"},this.props.details.typeName),i.a.createElement("div",{className:"ingridients-element"},this.props.details.pizzaIngredients[0]?this.props.details.pizzaIngredients.map((function(e){return e.ingredient.name})):null),i.a.createElement("div",{className:"crust-element"},this.props.details.crust),i.a.createElement("div",{className:"diameter-element"},this.props.details.diameter+" cm"),i.a.createElement("div",{className:"button-element"},i.a.createElement("button",{className:" menu-element-order-button",id:this.props.details.id,onClick:this.handleOrderClick},i.a.createElement("span",null,"Add to cart"))))}}]),t}(i.a.Component)),C=(t(80),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this)).state={pizzas:[],ingredients:[]},n}return Object(m.a)(t,[{key:"fetchPizzas",value:function(){var e=this;fetch("https://pizzeria-backend-zpi.herokuapp.com/v1/pizza").then((function(e){return e.json()})).then((function(a){e.setState({pizzas:a})})).catch((function(e){return console.log(e)}))}},{key:"fetchIngredients",value:function(){var e=this;fetch("https://pizzeria-backend-zpi.herokuapp.com/v1/ingredient").then((function(e){return e.json()})).then((function(a){e.setState({ingredients:a})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.fetchIngredients(),this.fetchPizzas()}},{key:"render",value:function(){return i.a.createElement("div",{className:"menu-wrapper"},i.a.createElement("div",{className:"menu-content-wrapper"},i.a.createElement("div",{className:"menu-filters"},i.a.createElement("div",{className:"menu-title"},"Filters"),i.a.createElement("div",{className:"menu-filters-buttons"},this.state.ingredients?this.state.ingredients.map((function(e){return i.a.createElement("label",{className:"btn-filter",id:e.id,key:e.id},e.name)})):null)),i.a.createElement("div",{className:"menu-content"},i.a.createElement("div",{className:"menu-title"},"Menu"),this.state.pizzas?this.state.pizzas.map((function(e,a){return i.a.createElement(O,{details:e,key:e.id,index:a})})):null)))}}]),t}(i.a.Component)),x=(t(81),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"about-wrapper"},i.a.createElement("div",{className:"grid-container"},i.a.createElement("div",{className:"photo"},i.a.createElement("img",{className:"three",src:"/zpi-frontend/images/aboutThree.jpg",alt:""})),i.a.createElement("div",{className:"title"},"O nas"),i.a.createElement("div",{className:"text"},"Farfalla to prawdziwa w\u0142oska kuchnia. Lokal powsta\u0142 zar\xf3wno z pasji, jak i potrzeby, poniewa\u017c do tej pory brakowa\u0142o takiego miejsca na mapie Bydgoszczy. Nie chcieli\u015bmy stworzy\u0107 kolejnej, zwyk\u0142ej pizzerii, kt\xf3rych pe\u0142no jest w naszym mie\u015bcie i ka\u017cda oferuje niemal identyczne smaki. Zale\u017ca\u0142o nam na tym, aby do Bydgoszczy przenie\u015b\u0107 prawdziwy, w\u0142oski klimat i smaki rodem z Italii. Tak zrodzi\u0142 si\u0119 pomys\u0142 na Farfall\u0119. To, co wyr\xf3\u017cnia nas na tle konkurencji, to najwy\u017cszej jako\u015bci sk\u0142adniki, kt\xf3re pochodz\u0105 z Italii. Dzi\u0119ki temu mamy prawo nazywa\u0107 si\u0119 prawdziw\u0105, w\u0142osk\u0105 pizzeri\u0105. Niczego nie udajemy. Zapomnijcie tak\u017ce o tradycyjnych sosach do pizzy \u2013 czosnkowym lub pomidorowym. Dla W\u0142ocha by\u0142aby to prawdziwa profanacja :) Zamiast tego stawiamy na w\u0142asnej roboty oliwy smakowe, przygotowywane na bazie w\u0142oskiej oliwy Venturi. Daj\u0105 one niezwyk\u0142y aromat i smak, kt\xf3rego nie u\u015bwiadczysz w \u017cadnej innej pizzerii w Bydgoszczy. W przytulnym wn\u0119trzu Farfalli mo\u017cesz przygotowa\u0107 kameraln\u0105 imprez\u0119 rodzinn\u0105 czy firmow\u0105. Stawiamy nie tylko na smak, ale tak\u017ce niepowtarzalny klimat i go\u015bcinno\u015b\u0107. Na miejscu, na wynos, z dowozem (ju\u017c od 3 z\u0142otych). Ciesz si\u0119 smakami s\u0142onecznej Italii gdzie chcesz.")))}}]),t}(i.a.Component)),D=(t(82),function(e){Object(d.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"contact-wrapper"},i.a.createElement("div",{className:"contact-title"},"Kontakt"),i.a.createElement("div",{className:"contact-pizza-name"},"Pizzeria Farfalla  "),i.a.createElement("div",{className:"contact-address"},"ul. Kolejowa 14 ",i.a.createElement("br",null)," 53-508 Wroc\u0142aw  "),i.a.createElement("div",{className:"contact-contact"},"Numer telefonu: 887 336 885",i.a.createElement("br",null)," Adres e-mail:pizzeria@email.com "))}}]),t}(i.a.Component));t(83);var W=function(){return i.a.createElement(l.a,null,i.a.createElement(z,null),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"bg"},i.a.createElement("div",{className:"wrapper"},i.a.createElement(N,null),i.a.createElement(o.a,{path:"/zpi-frontend/",exact:!0,component:g}),i.a.createElement(o.a,{path:"/zpi-frontend/menu",exact:!0,component:C}),i.a.createElement(o.a,{path:"/zpi-frontend/about",exact:!0,component:x}),i.a.createElement(o.a,{path:"/zpi-frontend/contact",exact:!0,component:D}))),i.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[64,1,2]]]);
//# sourceMappingURL=main.76d6b392.chunk.js.map