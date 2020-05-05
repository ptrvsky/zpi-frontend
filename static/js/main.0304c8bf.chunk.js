(this["webpackJsonpzpi-frontend"]=this["webpackJsonpzpi-frontend"]||[]).push([[0],{30:function(e,t,a){},65:function(e,t,a){e.exports=a(86)},70:function(e,t,a){},76:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(31),o=a.n(i),l=(a(70),a(9)),s=a(26),c=a(10),m=a(11),u=a(12),d=a(13),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.location.pathname!==e.location.pathname&&window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(r.a.Component),h=Object(s.e)(p),E=a(29),f=a(97),v=a(96),b=a(94),z=a(95),g=a(48),y=(a(76),function(e){var t=e.children;return Object(g.useMediaQuery)({minWidth:992})?t:null}),w=function(e){var t=e.children;return Object(g.useMediaQuery)({maxWidth:991})?t:null},N=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={user:{status:"NOT_LOGGED"}},n.handleLogout=n.handleLogout.bind(Object(E.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){localStorage.getItem("user")&&this.setState({user:JSON.parse(localStorage.getItem("user"))})}},{key:"handleLogout",value:function(){localStorage.removeItem("user"),this.setState({user:{status:"NOT_LOGGED"}})}},{key:"render",value:function(){return r.a.createElement("div",{className:"Navbar"},r.a.createElement("div",{className:"navbar-container"},r.a.createElement(f.a,{variant:"light",expand:"lg"},r.a.createElement(l.b,{to:"/zpi-frontend/"},r.a.createElement(f.a.Brand,null,r.a.createElement("div",{className:"logo-text d-inline-block align-top"},r.a.createElement("span",{className:"dark-gray"},r.a.createElement("span",{role:"img","aria-label":"logo"},"\ud83c\udf55")," Pizzeria"),r.a.createElement("span",{className:"red"}," Online")))),r.a.createElement(w,null,"LOGGED"===this.state.user.status?r.a.createElement(v.a,{alignRight:!0,title:r.a.createElement(b.a,null),className:"user-button-mobile ml-auto"},r.a.createElement(l.b,{to:"/zpi-frontend/oreders",className:"dropdown-item"},"Zamowienia"),r.a.createElement(l.b,{to:"/zpi-frontend/cart",className:"dropdown-item"},"Koszyk"),r.a.createElement(l.b,{to:"/zpi-frontend/account",className:"dropdown-item"},"Dane konta"),r.a.createElement(v.a.Divider,null),r.a.createElement("div",{className:"dropdown-item",onClick:this.handleLogout},"Wyloguj")):r.a.createElement(l.b,{to:"/zpi-frontend/login",className:"login-button-mobile ml-auto"},r.a.createElement(z.a,null)),r.a.createElement(f.a.Toggle,null),r.a.createElement(f.a.Collapse,{className:"links"},r.a.createElement(l.b,{to:"/zpi-frontend/menu",className:"nav-link"},"Menu"),r.a.createElement(l.b,{to:"/zpi-frontend/about",className:"nav-link"},"O nas"),r.a.createElement(l.b,{to:"/zpi-frontend/contact",className:"nav-link"},"Kontakt"))),r.a.createElement(y,null,r.a.createElement("div",{className:"desktop-links"},r.a.createElement(l.b,{to:"/zpi-frontend/menu",className:"nav-link"},"Menu"),r.a.createElement(l.b,{to:"/zpi-frontend/about",className:"nav-link"},"O nas"),r.a.createElement(l.b,{to:"/zpi-frontend/contact",className:"nav-link"},"Kontakt")),"LOGGED"===this.state.user.status?r.a.createElement(v.a,{alignRight:!0,title:r.a.createElement(b.a,null),className:"ml-auto"},r.a.createElement(l.b,{to:"/zpi-frontend/oreders",className:"dropdown-item"},"Zamowienia"),r.a.createElement(l.b,{to:"/zpi-frontend/cart",className:"dropdown-item"},"Koszyk"),r.a.createElement(l.b,{to:"/zpi-frontend/account",className:"dropdown-item"},"Dane konta"),r.a.createElement(v.a.Divider,null),r.a.createElement("div",{className:"dropdown-item",onClick:this.handleLogout},"Wyloguj")):r.a.createElement(l.b,{to:"/zpi-frontend/login"},r.a.createElement(z.a,null)))),r.a.createElement("div",{className:"navbar-underline"})))}}]),a}(r.a.Component),k=Object(s.e)(N);a(78);var j=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"footer-overline"}),r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-flexbox"},r.a.createElement("div",{className:"footer-copyright"},"Copyright \xa9 2020"))))},O=(a(30),a(79),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"index-wrapper"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"p1"},"Najlepsza pizza w mie\u015bcie"),r.a.createElement("div",{className:"p2"},"Na serio, nie k\u0142amiemy"),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement(l.b,{to:"/zpi-frontend/menu"},r.a.createElement("button",{className:"btn-primary btn-order"},"Zam\xf3w teraz")))))}}]),a}(r.a.Component)),S=(a(80),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"handleOrderClick",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",{className:"menu-element-wrapper"},r.a.createElement("div",{className:"id-element"},this.props.index+1),r.a.createElement("div",{className:"name-element"},this.props.details.typeName),r.a.createElement("div",{className:"ingridients-element"},this.props.details.pizzaIngredients[0]?this.props.details.pizzaIngredients.map((function(e){return e.ingredient.name})):null),r.a.createElement("div",{className:"crust-element"},this.props.details.crust),r.a.createElement("div",{className:"diameter-element"},this.props.details.diameter+" cm"),r.a.createElement("div",{className:"button-element"},r.a.createElement("button",{className:" menu-element-order-button",id:this.props.details.id,onClick:this.handleOrderClick},r.a.createElement("span",null,"Add to cart"))))}}]),a}(r.a.Component)),C=(a(81),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this)).state={pizzas:[],ingredients:[]},n}return Object(m.a)(a,[{key:"fetchPizzas",value:function(){var e=this;fetch("https://pizzeria-backend-zpi.herokuapp.com/v1/pizza").then((function(e){return e.json()})).then((function(t){e.setState({pizzas:t})})).catch((function(e){return console.log(e)}))}},{key:"fetchIngredients",value:function(){var e=this;fetch("https://pizzeria-backend-zpi.herokuapp.com/v1/ingredient").then((function(e){return e.json()})).then((function(t){e.setState({ingredients:t})})).catch((function(e){return console.log(e)}))}},{key:"componentDidMount",value:function(){this.fetchIngredients(),this.fetchPizzas()}},{key:"render",value:function(){return r.a.createElement("div",{className:"menu-wrapper"},r.a.createElement("div",{className:"menu-content-wrapper"},r.a.createElement("div",{className:"menu-filters"},r.a.createElement("div",{className:"menu-title"},"Filters"),r.a.createElement("div",{className:"menu-filters-buttons"},this.state.ingredients?this.state.ingredients.map((function(e){return r.a.createElement("label",{className:"btn-filter",id:e.id,key:e.id},e.name)})):null)),r.a.createElement("div",{className:"menu-content"},r.a.createElement("div",{className:"menu-title"},"Menu"),this.state.pizzas?this.state.pizzas.map((function(e,t){return r.a.createElement(S,{details:e,key:e.id,index:t})})):null)))}}]),a}(r.a.Component)),D=(a(82),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-wrapper"},r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"photo"},r.a.createElement("img",{className:"three",src:"/zpi-frontend/images/aboutThree.jpg",alt:""})),r.a.createElement("div",{className:"title"},"O nas"),r.a.createElement("div",{className:"text"},"Farfalla to prawdziwa w\u0142oska kuchnia. Lokal powsta\u0142 zar\xf3wno z pasji, jak i potrzeby, poniewa\u017c do tej pory brakowa\u0142o takiego miejsca na mapie Bydgoszczy. Nie chcieli\u015bmy stworzy\u0107 kolejnej, zwyk\u0142ej pizzerii, kt\xf3rych pe\u0142no jest w naszym mie\u015bcie i ka\u017cda oferuje niemal identyczne smaki. Zale\u017ca\u0142o nam na tym, aby do Bydgoszczy przenie\u015b\u0107 prawdziwy, w\u0142oski klimat i smaki rodem z Italii. Tak zrodzi\u0142 si\u0119 pomys\u0142 na Farfall\u0119. To, co wyr\xf3\u017cnia nas na tle konkurencji, to najwy\u017cszej jako\u015bci sk\u0142adniki, kt\xf3re pochodz\u0105 z Italii. Dzi\u0119ki temu mamy prawo nazywa\u0107 si\u0119 prawdziw\u0105, w\u0142osk\u0105 pizzeri\u0105. Niczego nie udajemy. Zapomnijcie tak\u017ce o tradycyjnych sosach do pizzy \u2013 czosnkowym lub pomidorowym. Dla W\u0142ocha by\u0142aby to prawdziwa profanacja :) Zamiast tego stawiamy na w\u0142asnej roboty oliwy smakowe, przygotowywane na bazie w\u0142oskiej oliwy Venturi. Daj\u0105 one niezwyk\u0142y aromat i smak, kt\xf3rego nie u\u015bwiadczysz w \u017cadnej innej pizzerii w Bydgoszczy. W przytulnym wn\u0119trzu Farfalli mo\u017cesz przygotowa\u0107 kameraln\u0105 imprez\u0119 rodzinn\u0105 czy firmow\u0105. Stawiamy nie tylko na smak, ale tak\u017ce niepowtarzalny klimat i go\u015bcinno\u015b\u0107. Na miejscu, na wynos, z dowozem (ju\u017c od 3 z\u0142otych). Ciesz si\u0119 smakami s\u0142onecznej Italii gdzie chcesz.")))}}]),a}(r.a.Component)),L=(a(83),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"contact-wrapper"},r.a.createElement("div",{className:"contact-title"},"Kontakt"),r.a.createElement("div",{className:"contact-pizza-name"},"Pizzeria Farfalla  "),r.a.createElement("div",{className:"contact-address"},"ul. Kolejowa 14 ",r.a.createElement("br",null)," 53-508 Wroc\u0142aw  "),r.a.createElement("div",{className:"contact-contact"},"Numer telefonu: 887 336 885",r.a.createElement("br",null)," Adres e-mail:pizzeria@email.com "))}}]),a}(r.a.Component)),I=(a(84),function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={registerError:null,loginError:null},n.handleRegisterSubmit=n.handleRegisterSubmit.bind(Object(E.a)(n)),n.handleLoginSubmit=n.handleLoginSubmit.bind(Object(E.a)(n)),n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e={status:"NOT_LOGGED"};localStorage.getItem("user")&&(e=JSON.parse(localStorage.getItem("user"))),"LOGGED"===e.status&&this.props.history.push("/")}},{key:"handleRegisterSubmit",value:function(e){var t=this;e.preventDefault(),fetch("https://pizzeria-backend-zpi.herokuapp.com/v1/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:e.target[0].value,password:e.target[1].value})}).then((function(e){201===e.status?(document.getElementById("registration-form").reset(),t.props.history.push("/zpi-frontend/login?registrationRedirect=true")):e.json().then((function(e){return t.setState({loginError:null,registerError:e.message})}))}))}},{key:"handleLoginSubmit",value:function(e){var t=this;e.preventDefault();var a=e.target[0].value,n=e.target[1].value;fetch("https://pizzeria-backend-zpi.herokuapp.com/v1/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({mail:a,password:n})}).then((function(e){if(200===e.status){var n={status:"LOGGED",mail:a};e.json().then((function(e){return n.token=e.token})).then((function(){return localStorage.setItem("user",JSON.stringify(n))})).then((function(){return window.location.reload(!0)}))}else e.json().then((function(e){return t.setState({loginError:e.message,registerError:null})}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-subpage-wrapper"},r.a.createElement("div",{className:"forms-position-wrapper"},r.a.createElement("div",{className:"register-wrapper"},r.a.createElement("h1",null,"Register"),"?registrationRedirect=true"===this.props.location.search?r.a.createElement("div",{className:"success"},"Your account has been created. Now you can log in."):null,this.state.registerError?r.a.createElement("div",{className:"error"}," ",this.state.registerError," "):null,r.a.createElement("form",{onSubmit:this.handleRegisterSubmit,id:"registration-form"},r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"E-mail"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter your e-mail adress",autoComplete:"new-password"})),r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password",autoComplete:"new-password"})),r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"Confirm password"),r.a.createElement("input",{type:"password",name:"password2",placeholder:"Enter your password again"})),r.a.createElement("button",{type:"submit",className:"btn-primary"},"Register"))),r.a.createElement("div",{className:"login-wrapper"},r.a.createElement("h1",null,"Log in"),"?logout=true"===this.props.location.search?r.a.createElement("div",{className:"success"},"You are logged out."):null,"?unauthenticatedOrderTry=true"===this.props.location.search?r.a.createElement("div",{className:"error"},"You have to be logged in to make an order."):null,"?unauthenticatedAccessTry=true"===this.props.location.search?r.a.createElement("div",{className:"error"},"You have to be logged in to see this page."):null,this.state.loginError?r.a.createElement("div",{className:"error"}," ",this.state.loginError," "):null,r.a.createElement("form",{onSubmit:this.handleLoginSubmit,id:"login-form"},r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"E-mail"),r.a.createElement("input",{type:"email",name:"email",placeholder:"Enter your e-mail"})),r.a.createElement("div",{className:"form-element"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",placeholder:"Enter your password"})),r.a.createElement("button",{type:"submit",className:"btn-primary"},"Log in")))))}}]),a}(r.a.Component));a(85);var x=function(){return r.a.createElement(l.a,null,r.a.createElement(h,null),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"bg"},r.a.createElement("div",{className:"wrapper"},r.a.createElement(k,null),r.a.createElement(s.a,{path:"/zpi-frontend/",exact:!0,component:O}),r.a.createElement(s.a,{path:"/zpi-frontend/menu",exact:!0,component:C}),r.a.createElement(s.a,{path:"/zpi-frontend/about",exact:!0,component:D}),r.a.createElement(s.a,{path:"/zpi-frontend/contact",exact:!0,component:L}),r.a.createElement(s.a,{path:"/zpi-frontend/login",component:I}))),r.a.createElement(j,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[65,1,2]]]);
//# sourceMappingURL=main.0304c8bf.chunk.js.map