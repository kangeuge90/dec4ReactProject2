(this.webpackJsonpreactproject2=this.webpackJsonpreactproject2||[]).push([[0],{16:function(e,t,c){},27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var i=c(1),a=c.n(i),s=c(28),n=c.n(s),r=(c(33),c(34),c(3)),j=c(9),l=c.n(j),d=c(11),o=c(17),b=c(18),u=c.n(b),O=c(10),h=function(){var e=Object(o.a)(l.a.mark((function e(t){var c,i,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"",c=t,"","",i="https://api.edamam.com/api/recipes/v2?type=public&q=".concat(t,"&app_id=5469f054&app_key=79d6e8b780f2ca65225e9566f8ac5b28"),e.next=7,u.a.get(i,{params:{type:O.type,q:c,app_id:"",app_key:""}});case 7:return a=e.sent,console.log(a.data.hits),e.abrupt("return",a.data.hits.map((function(e){var t,c;return Object(d.a)(Object(d.a)({},e.recipe),{},{thumbNail:(null===(t=e.recipe.images)||void 0===t||null===(c=t.REGULAR)||void 0===c?void 0:c.url)||"No Image Available"})})));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=h,m=(c(27),c(4)),f={favorites:[],addFavorite:function(){},removeFavorite:function(){}},p=Object(i.createContext)(f),v=c.p+"static/media/rmfavunselected.cc7c0c61.png",g=c.p+"static/media/rmfavselected2.eb0c6caa.png",C=c.p+"static/media/fullrecipe.f6124d9e.png",y=c.p+"static/media/moredetails.ac66ecd3.png",J=c(0);var S=function(e){var t,c=e.recipe,a=Object(i.useState)(!1),s=Object(r.a)(a,2),n=s[0],j=s[1],l=Object(J.jsxs)("div",{children:["Health Labels: ",c.healthLabels[3],",",c.healthLabels[4],",",c.healthLabels[5],Object(J.jsxs)("p",{children:["Dish Type: ",c.dishType]}),Object(J.jsxs)("p",{children:["Calories: ",(t=c.calories,0|t)]})]}),d=Object(i.useContext)(p),o=d.addFavorite,b=d.removeFavorite,u=d.favorites,O=u.some((function(e){return e.url===c.url}));function h(){if(!0===O){var e=u.findIndex((function(e){return e.url===c.url}));b(e)}else o(c)}return console.log(u.some((function(e){return e.url===c.url}))),Object(J.jsx)("div",{className:"recipeListContainer",children:Object(J.jsxs)("div",{className:"recipeContainer",children:[Object(J.jsx)("p",{children:c.hits}),Object(J.jsxs)("p",{children:[c.label,!1===O?Object(J.jsx)("span",{onClick:h,className:"favoritesButton",children:Object(J.jsx)("img",{src:v})}):Object(J.jsx)("span",{onClick:h,className:"favoritesButton",children:Object(J.jsx)("img",{src:g})})]}),Object(J.jsxs)("p",{children:["Cuisine Type: ",c.cuisineType]}),Object(J.jsxs)("p",{children:[c.healthLabels[0],", ",c.healthLabels[1],", ",c.healthLabels[2]]}),Object(J.jsx)("img",{src:c.thumbNail}),Object(J.jsxs)("div",{className:"detailsContainer",children:[Object(J.jsx)("a",{target:"_blank",href:c.url,children:Object(J.jsx)("img",{src:C})}),Object(J.jsx)("img",{onClick:function(){j(!n)},src:y}),n&&l]})]})})};var k=function(){var e=Object(m.c)(),t=Object(r.a)(e,2),c=t[0],a=(t[1],c.get("query")||"");Object(i.useEffect)((function(){x(a).then((function(e){return l(e)}))}),[a]);var s=Object(i.useState)([]),n=Object(r.a)(s,2),j=n[0],l=n[1],d=(Object(i.useContext)(p).addFavorite,Object(i.useMemo)((function(){return j.map((function(e,t){return Object(J.jsx)(S,{recipe:e},t)}))}),[j]));return Object(J.jsx)("div",{children:d})},N=c(2),E=(c(55),c(16),c.p+"static/media/peanutAllergy.5c8c50d5.jpg"),R=c.p+"static/media/glutenFree.0b67d860.jpg",Q=c.p+"static/media/eggFree.80c47f8f.png",A=c.p+"static/media/soyFree.9e856f88.png";var I=function(){var e=Object(m.c)(),t=Object(r.a)(e,2),c=(t[0],t[1]),i=function(e){c({query:e})};return Object(J.jsx)("div",{children:Object(J.jsxs)("div",{className:"categoryPicturesContainer",children:[Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"dairy-free"')},children:[Object(J.jsx)("h3",{children:"Dairy Allergy"}),Object(J.jsx)("img",{src:"data:image/png;base64,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",alt:"dairy allergy"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"egg-free"')},children:[Object(J.jsx)("h3",{children:"Egg Allergy"}),Object(J.jsx)("img",{src:Q,alt:"egg free"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"gluten-free"')},children:[Object(J.jsx)("h3",{children:"Gluten Free"}),Object(J.jsx)("img",{src:R,alt:"gluten free"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"nut-free"')},children:[Object(J.jsx)("h3",{children:"Nut Allergies"}),Object(J.jsx)("img",{src:E,alt:"nut allergies"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"soy-free"')},children:[Object(J.jsx)("h3",{children:"Soy Allergy"}),Object(J.jsx)("img",{src:A,alt:"soy allergy"})]})]})})},K=c.p+"static/media/keto.afd376fd.jpg",L=c.p+"static/media/pescatarian.f74ea890.jpg",D=c.p+"static/media/vegan.cd2b83ca.jpg",B=c.p+"static/media/vegetarian.aa820d4e.jpg",T=c.p+"static/media/kosher.e5055464.png";var U=function(){var e=Object(m.c)(),t=Object(r.a)(e,2),c=(t[0],t[1]),i=function(e){c({query:e})};return Object(J.jsx)("div",{children:Object(J.jsxs)("div",{className:"categoryPicturesContainer",children:[Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i("keto")},children:[Object(J.jsx)("h3",{children:"Keto"}),Object(J.jsx)("img",{src:K,alt:"keto diet"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i("kosher")},children:[Object(J.jsx)("h3",{children:"Kosher"}),Object(J.jsx)("img",{src:T,alt:"kosher diet"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i("Pescatarian")},children:[Object(J.jsx)("h3",{children:"Pescatarian"}),Object(J.jsx)("img",{src:L,alt:"pescatarian diet"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i("vegan")},children:[Object(J.jsx)("h3",{children:"Vegan"}),Object(J.jsx)("img",{src:D,alt:"vegan diet"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i("vegetarian")},children:[Object(J.jsx)("h3",{children:"Vegetarian"}),Object(J.jsx)("img",{src:B,alt:"vegetarian diet"})]})]})})},q=c.p+"static/media/americanCuisine.f7618218.jpg",P=c.p+"static/media/indianCuisine.fc9a3f02.jpg",V=c.p+"static/media/mexicanCuisine.cfaab9eb.jpg",z=c.p+"static/media/italianCuisine.32fedd98.png",F=c.p+"static/media/asianCuisine.9e334744.jpg";var w=function(){var e=Object(m.c)(),t=Object(r.a)(e,2),c=(t[0],t[1]),i=function(e){c({query:e})};return Object(J.jsx)("div",{children:Object(J.jsxs)("div",{className:"categoryPicturesContainer",children:[Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"American"')},children:[Object(J.jsx)("h3",{children:"American"}),Object(J.jsx)("img",{src:q,alt:"american cuisine"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"Asian"')},children:[Object(J.jsx)("h3",{children:"Asian"}),Object(J.jsx)("img",{src:F,alt:"asian cuisine"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"Indian"')},children:[Object(J.jsx)("h3",{children:"Indian"}),Object(J.jsx)("img",{src:P,alt:"indian cuisine"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"Italian"')},children:[Object(J.jsx)("h3",{children:"Italian"}),Object(J.jsx)("img",{src:z,alt:"italian cuisine"})]}),Object(J.jsxs)("div",{className:"categoryPicture",onClick:function(){i('"Mexican"')},children:[Object(J.jsx)("h3",{children:"Mexican"}),Object(J.jsx)("img",{src:V,alt:"mexican cuisine"})]})]})})},H=c.p+"static/media/rmheader2.b607e7d4.png",G=c.p+"static/media/rmlogo2.0bd4b918.png",M=c.p+"static/media/rmhome2.a9bbf622.png",W=c.p+"static/media/rmsearch2.d694b74e.png",Z=c.p+"static/media/cuisinetype.a0d9701a.png",X=c.p+"static/media/diettype.d323dd37.png",Y=c.p+"static/media/allergies.f283dbde.png";var _=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(m.c)(),n=Object(r.a)(s,2),j=(n[0],n[1]),l=Object(i.useState)(""),d=Object(r.a)(l,2),o=d[0],b=d[1],u=Object(i.useState)(!1),O=Object(r.a)(u,2),h=O[0],x=O[1],f=Object(i.useState)(!1),p=Object(r.a)(f,2),v=p[0],C=p[1],y=Object(i.useState)(!1),S=Object(r.a)(y,2),k=S[0],N=S[1];return Object(J.jsxs)("div",{className:"headerContainer",children:[Object(J.jsxs)("div",{className:"titleContainer",children:[Object(J.jsx)("div",{className:"recimeTitle",children:Object(J.jsx)("img",{src:H,alt:"title"})}),Object(J.jsx)("div",{className:"recimeLogo",children:Object(J.jsx)("img",{src:G,alt:"logo"})})]}),Object(J.jsx)("form",{className:"searchBarContainer",onSubmit:function(e){e.preventDefault(),j({query:o})},children:Object(J.jsxs)("div",{className:"searchBar",children:[Object(J.jsx)("section",{className:"favoritesSection",children:Object(J.jsxs)("div",{className:"favoritesInnerSection",children:[Object(J.jsx)(m.b,{to:"/",children:Object(J.jsx)("img",{alt:"home",onClick:function(){a(!1),x(!1),C(!1),N(!1)},src:M})}),Object(J.jsx)(m.b,{to:"/favorites",children:Object(J.jsx)("img",{alt:"favorites",src:g})})]})}),Object(J.jsx)("img",{src:W,alt:"search"}),Object(J.jsx)("input",{className:"searchInput",value:o,onChange:function(e){return b(e.target.value)}})]})}),Object(J.jsx)("div",{className:"categoriesContainer",children:Object(J.jsxs)("ul",{className:"categoryButtons",children:[!1===c?Object(J.jsx)("img",{src:Z,onClick:function(){C(!1),N(!1),x(!0),a(!0)}}):Object(J.jsx)("img",{src:Z,onClick:function(){x(!1),a(!1)}}),!1===c?Object(J.jsx)("img",{src:X,onClick:function(){N(!1),x(!1),C(!0),a(!0)}}):Object(J.jsx)("img",{src:X,onClick:function(){C(!1),a(!1)}}),!1===c?Object(J.jsx)("img",{src:Y,onClick:function(){C(!1),x(!1),N(!0),a(!0)}}):Object(J.jsx)("img",{src:Y,onClick:function(){N(!1),a(!1)}})]})}),Object(J.jsxs)("div",{className:"subCategoriesContainer",children:[!0===h&&Object(J.jsx)(w,{}),!0===v&&Object(J.jsx)(U,{}),!0===k&&Object(J.jsx)(I,{})]})]})};var $=function(e){var t=e.recipeItem,c=e.index,a=Object(i.useContext)(p).removeFavorite;return Object(J.jsxs)("tr",{className:"favoriteRowContainer",children:[Object(J.jsx)("td",{children:t.label}),Object(J.jsxs)("td",{children:[t.healthLabels[0],", ",t.healthLabels[1],", ",t.healthLabels[2]]}),Object(J.jsx)("td",{children:t.cuisineType}),Object(J.jsx)("td",{children:Object(J.jsx)("a",{href:t.url,children:t.url})}),Object(J.jsx)("td",{children:Object(J.jsx)("img",{src:g,onClick:function(){return a(c)}})})]})},ee=c.p+"static/media/favorites.0211bfc3.png",te=c.p+"static/media/rmprint.3b5a5bbe.png",ce=c.p+"static/media/rmsave.4c5c3d4f.png";c(56);var ie=function(){var e=Object(i.useState)([{label:"Peyton Manning",healthLabels:"012",cuisineType:"American"}]),t=Object(r.a)(e,2),c=(t[0],t[1],Object(i.useContext)(p));return Object(J.jsxs)("div",{className:"favoritesListContainer",children:[Object(J.jsxs)("div",{className:"favoritesListTitle",children:[Object(J.jsx)("img",{src:ee}),Object(J.jsxs)("div",{className:"iconContainer",children:[Object(J.jsx)("img",{src:ce}),Object(J.jsx)("img",{src:te})]})]}),Object(J.jsxs)("table",{children:[Object(J.jsxs)("thead",{children:[Object(J.jsx)("td",{children:"Label"}),Object(J.jsx)("td",{children:"Health Labels"}),Object(J.jsx)("td",{children:"Cuisine Type"}),Object(J.jsx)("td",{children:"Full Recipe Link"}),Object(J.jsx)("td",{children:"Remove Favorite"})]}),c.favorites.map((function(e,t){return Object(J.jsx)($,{recipeItem:e,index:t})}))]})]})},ae=c.p+"static/media/madeby.4bf636b5.png",se=c.p+"static/media/rmcredits.2b978262.png";c(57);var ne=function(){return Object(J.jsx)("div",{className:"footerContainer",children:Object(J.jsxs)("div",{className:"madeBy",children:[Object(J.jsx)("img",{src:ae}),Object(J.jsx)("div",{className:"ourNames",children:Object(J.jsx)("img",{src:se})})]})})};var re=function(){return Object(J.jsx)(m.a,{children:Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)(_,{}),Object(J.jsxs)(N.c,{children:[Object(J.jsx)(N.a,{path:"/",element:Object(J.jsx)(k,{})}),Object(J.jsx)(N.a,{path:"/favorites",element:Object(J.jsx)(ie,{})})]}),Object(J.jsx)(ne,{})]})})},je=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,59)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),s(e),n(e)}))},le=c(14);var de=function(e){var t=e.children,c=Object(i.useState)([]),a=Object(r.a)(c,2),s=a[0],n=a[1];return Object(J.jsx)(p.Provider,{value:{favorites:s,addFavorite:function(e){n((function(t){return[].concat(Object(le.a)(t),[e])}))},removeFavorite:function(e){n((function(t){return[].concat(Object(le.a)(t.slice(0,e)),Object(le.a)(t.slice(e+1)))}))}},children:t})};n.a.render(Object(J.jsx)(a.a.StrictMode,{children:Object(J.jsx)(de,{children:Object(J.jsx)(re,{})})}),document.getElementById("root")),je()}},[[58,1,2]]]);
//# sourceMappingURL=main.3e458a71.chunk.js.map