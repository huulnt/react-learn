(this["webpackJsonpreactjs-guide"]=this["webpackJsonpreactjs-guide"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports={"cart-items":"cart_cart-items__1OXIt",total:"cart_total__2fyXC",actions:"cart_actions__2FOoN","button--alt":"cart_button--alt__1HrCO",button:"cart_button__3xhR-"}},,,,,,function(e,t,n){e.exports={backdrop:"modal_backdrop__2LQFf",modal:"modal_modal__1Urcz","slide-down":"modal_slide-down__3gya6"}},function(e,t,n){e.exports={button:"header-cart-button_button__3Pseg",icon:"header-cart-button_icon__2ULRF",badge:"header-cart-button_badge__1fUG7",bump:"header-cart-button_bump__1Zg6Q"}},function(e,t,n){e.exports={header:"header_header__Wm5kt","header-content":"header_header-content__1ib8C","main-image":"header_main-image__e01Pz"}},function(e,t,n){e.exports={meal:"meal-item_meal__pIiTj",description:"meal-item_description__-dyND",price:"meal-item_price__3Dsxu"}},,,,function(e,t,n){e.exports={meals:"available-meals_meals__2uni_","meals-appear":"available-meals_meals-appear__2SJA1"}},,,,function(e,t,n){e.exports={summary:"meals-summary_summary__1STvO"}},function(e,t,n){e.exports={input:"input_input__3NTcU"}},function(e,t,n){e.exports={form:"meal-item-form_form__3XaE7"}},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(9),i=n.n(s),l=(n(33),n(5)),r=n(12),o=n(2),j=(n(34),n(13)),d=n.n(j),u=n(0),b=function(e){return Object(u.jsx)("div",{className:d.a.backdrop,onClick:e.onClose})},m=function(e){return Object(u.jsx)("div",{className:d.a.modal,children:Object(u.jsx)("div",{className:d.a.content,children:e.children})})},x=document.getElementById("overlays"),h=function(e){return Object(u.jsxs)(a.Fragment,{children:[i.a.createPortal(Object(u.jsx)(b,{onClose:e.onClose}),x),i.a.createPortal(Object(u.jsx)(m,{children:e.children}),x)]})},O=n(7),p=n.n(O),v=function(e){var t=Object(u.jsx)("ul",{className:p.a["cart-items"],children:[{id:"c1",name:"Shushi",amount:2,price:12.99}].map((function(e){return Object(u.jsx)("li",{children:e.name})}))});return Object(u.jsx)(h,{onClose:e.onClose,children:Object(u.jsxs)("div",{children:[t,Object(u.jsxs)("div",{className:p.a.total,children:[Object(u.jsx)("span",{children:"Total Amount"}),Object(u.jsx)("span",{children:"33.33"})]}),Object(u.jsxs)("div",{className:p.a.actions,children:[Object(u.jsx)("button",{className:p.a["button--alt"],onClick:e.onClose,children:"Close"}),Object(u.jsx)("button",{className:p.a.button,children:"Order"})]})]})})},_=(n(36),function(e){return Object(u.jsx)("div",{className:"expenses-filter",children:Object(u.jsxs)("div",{className:"expenses-filter__control",children:[Object(u.jsx)("label",{children:"Filter by year"}),Object(u.jsxs)("select",{value:e.selected,onChange:function(t){e.onFilterChange(t.target.value)},children:[Object(u.jsx)("option",{value:"2022",children:"2022"}),Object(u.jsx)("option",{value:"2021",children:"2021"}),Object(u.jsx)("option",{value:"2020",children:"2020"}),Object(u.jsx)("option",{value:"2019",children:"2019"})]})]})})});n(37);var f=function(e){var t="card ".concat(e.className);return Object(u.jsx)("div",{className:t,children:e.children})};n(38);var g=function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(u.jsxs)("div",{className:"expense-date",children:[Object(u.jsx)("div",{className:"expense-date__day",children:n}),Object(u.jsx)("div",{className:"expense-date__month",children:t}),Object(u.jsx)("div",{className:"expense-date__year",children:a})]})};n(39);var N=function(e){return Object(u.jsx)("li",{children:Object(u.jsxs)(f,{className:"expense-item",children:[Object(u.jsx)(g,{date:e.date}),Object(u.jsxs)("div",{className:"expense-item__description",children:[Object(u.jsx)("h2",{children:e.title}),Object(u.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},y=(n(40),function(e){return 0===e.items.length?Object(u.jsx)("h2",{className:"expenses-list__fallback",children:" Found no item."}):Object(u.jsx)("ul",{className:"expenses-list",children:e.items.map((function(e){return Object(u.jsx)(N,{title:e.title,date:e.date,amount:e.amount},e.id)}))})}),C=n(23),w=(n(41),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),console.log("barFillHeight",t),Object(u.jsxs)("div",{className:"chart-bar",children:[Object(u.jsx)("div",{className:"chart-bar__inner",children:Object(u.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(u.jsxs)("div",{className:"char-bar__label",children:[" ",e.label]})]})}),S=(n(42),function(e){var t=e.dataPoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(r.a)(t));return Object(u.jsx)("div",{className:"chart",children:e.dataPoints.map((function(e){return Object(u.jsx)(w,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),F=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dev",value:0}],a=Object(C.a)(e.expense);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(u.jsx)(S,{dataPoints:n})};n(43);var A=function(e){var t=Object(a.useState)("2021"),n=Object(l.a)(t,2),c=n[0],s=n[1],i=(e.items||[]).filter((function(e){return e.date.getFullYear().toString()===c}));return Object(u.jsxs)(f,{className:"expenses",children:[Object(u.jsx)(_,{selected:c,onFilterChange:function(e){s(e)}}),Object(u.jsx)(F,{expense:i}),Object(u.jsx)(y,{items:i})]})},D=n(11),k=(n(44),n(45),function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useState)(""),r=Object(l.a)(i,2),o=r[0],j=r[1],d=Object(a.useState)(""),b=Object(l.a)(d,2),m=b[0],x=b[1];return Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={title:c,amount:+o,date:m?new Date(m):new Date};e.onSaveExpenseData(n),s(""),j(""),x("")},children:[Object(u.jsxs)("div",{className:"new-expense__controls",children:[Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Title"}),Object(u.jsx)("input",{type:"text",value:c,onChange:function(e){s(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Amount"}),Object(u.jsx)("input",{type:"number",min:"0.01",step:"0.01",value:o,onChange:function(e){j(e.target.value)}})]}),Object(u.jsxs)("div",{className:"new-expense__control",children:[Object(u.jsx)("label",{children:"Date"}),Object(u.jsx)("input",{type:"date",min:"2019-01-01",max:"2022-12-31",value:m,onChange:function(e){x(e.target.value)}})]})]}),Object(u.jsx)("div",{className:"new-expense__action",children:Object(u.jsx)("button",{type:"submit",children:"Add Expense"})})]})}),M=function(e){return Object(u.jsx)("div",{className:"new-expense",children:Object(u.jsx)(k,{onSaveExpenseData:function(t){var n=Object(D.a)(Object(D.a)({},t),{},{id:Math.random().toString()});e.onAddExpense(n)}})})},H=function(){return Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},P=n(14),T=n.n(P),E=function(e){return Object(u.jsxs)("button",{className:T.a.button,onClick:e.onClick,children:[Object(u.jsx)("span",{className:T.a.icon,children:Object(u.jsx)(H,{})}),Object(u.jsx)("span",{children:"Your Cart"}),Object(u.jsx)("span",{className:T.a.badge,children:" 3"})]})},B=n(15),L=n.n(B),z=function(e){return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)("header",{className:L.a.header,children:Object(u.jsxs)("div",{className:L.a["header-content"],children:[Object(u.jsx)("h1",{children:"HuuLNT Meals"}),Object(u.jsx)("div",{children:Object(u.jsx)(E,{onClick:e.onShowCart})})]})}),Object(u.jsx)("div",{className:L.a["main-image"],children:Object(u.jsx)("img",{src:"https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg",alt:"A table fill of delicious food!"})})]})},U=n(24),I=n.n(U),J=function(){return Object(u.jsxs)("section",{className:I.a.summary,children:[Object(u.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(u.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(u.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},V=n(20),Y=n.n(V),X=n(25),G=n.n(X),Q=function(e){return Object(u.jsxs)("div",{className:G.a.input,children:[Object(u.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(u.jsx)("input",Object(D.a)({},e.input))]})},R=n(26),$=n.n(R),q=function(e){return Object(u.jsxs)("form",{className:$.a.form,children:[Object(u.jsx)(Q,{label:"Amount",input:{id:"amount",type:"number",min:1,max:5,step:1,defaultValue:1}}),Object(u.jsx)("button",{children:"+ Add"})]})},W=n(16),Z=n.n(W),K=function(e){var t="$".concat(e.price.toFixed(2));return Object(u.jsxs)("li",{className:Z.a.meal,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:e.name}),Object(u.jsx)("div",{className:Z.a.description,children:e.description}),Object(u.jsx)("div",{className:Z.a.price,children:t})]}),Object(u.jsx)("div",{children:Object(u.jsx)(q,{})})]})},ee=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],te=function(){var e=ee.map((function(e){return Object(u.jsx)(K,{name:e.name,description:e.description,price:e.price},e.id)}));return Object(u.jsx)("section",{className:Y.a.meals,children:Object(u.jsx)(f,{children:Object(u.jsx)("ul",{className:Y.a.ul,children:e})})})},ne=function(){return Object(u.jsxs)(a.Fragment,{children:[Object(u.jsx)(J,{}),Object(u.jsx)(te,{})]})},ae=[{id:1,title:"huulnt",date:new Date,amount:50},{id:2,title:"huulnt 2",date:new Date,amount:50}];var ce=function(){var e=Object(a.useState)(ae),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),j=i[0],d=i[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)(o.a,{path:"/",children:[j&&Object(u.jsx)(v,{onClose:function(){d(!1)}}),Object(u.jsx)(z,{onShowCart:function(){d(!0)}}),Object(u.jsx)("main",{children:Object(u.jsx)(ne,{})})]}),Object(u.jsxs)(o.a,{path:"/expenses",children:[Object(u.jsx)(M,{onAddExpense:function(e){c((function(t){return[e].concat(Object(r.a)(t))}))}}),Object(u.jsx)(A,{items:n})]})]})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))},ie=n(19);i.a.render(Object(u.jsx)(ie.a,{children:Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(ce,{})})}),document.getElementById("root")),se()}],[[54,1,2]]]);
//# sourceMappingURL=main.d5b509ab.chunk.js.map