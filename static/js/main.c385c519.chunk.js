(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,s){},32:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),n=s(15),a=s.n(n),o=(s(26),s.p,s(32),s(0)),r=function(){return Object(o.jsxs)("nav",{class:"navbar navbar-light sticky-top",children:[Object(o.jsx)("a",{class:"navbar-brand title",style:{fontSize:20,fontFamily:"MuseoModerno"},href:"/",children:"genuine"}),Object(o.jsxs)("ul",{class:"nav justify-content-end navOpt",children:[Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",style:{fontSize:20,fontFamily:"Crimson Text, serif"},href:"",children:" about"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",style:{fontSize:20,fontFamily:"Crimson Text, serif"},href:"",children:"trending"})})]})]})},l=function(e){e.navigation,e.route;return Object(o.jsxs)("div",{class:"middleContainer",children:[Object(o.jsxs)("div",{class:"row intro",children:[Object(o.jsxs)("div",{class:"col-lg-6",children:[Object(o.jsx)("h1",{class:"question",children:"Having trouble finding the perfect gift?"}),Object(o.jsx)("h4",{class:"desc col-lg-6",children:"Find popular suggestions or get unique gift ideas for that special someone."}),Object(o.jsx)("h5",{class:"desc col-lg-6",children:Object(o.jsx)("a",{href:"#",children:"To use as a guest, click on the add icon."})})]}),Object(o.jsx)("div",{class:"col-lg-6 add",children:Object(o.jsx)("a",{href:"/questions",children:Object(o.jsx)("img",{class:"col-lg-6 added",src:"/Genuine/add500.png"})})})]}),Object(o.jsxs)("div",{class:"bottomContainer",children:[Object(o.jsx)("a",{children:Object(o.jsx)("button",{disabled:!0,class:"btn btn-outline-secondary",children:"Login"})}),Object(o.jsx)("a",{children:Object(o.jsx)("button",{disabled:!0,class:"btn btn-outline-dark",children:"Signup"})}),Object(o.jsx)("p",{class:"forgot",children:Object(o.jsx)("a",{href:"",children:"Forgot email or password?"})})]})]})},d=s(19),h=s(18),j=function e(t,s,i){Object(h.a)(this,e),this.questionName=t,this.question=s,this.answer=i},b=[new j("personality-type","What is the persons personality type?",["introvert","extrovert"]),new j("interest","What interest is the person leaning towards the most?",["music","fashion","athletics","technology","aesthetic"]),new j("time","How often do you see the person?",["everyday","weekly","not often"]),new j("age","What is the age range of the recepient?",["< 10","10-14","15-20","21-35","> 35"]),new j("budget","What is your budget for a gift?",["30","60","200","500","2000"])],p=(s(34),s(12)),g=s(10),m="SELECT_OPTION",u=s(9),f=function(e){var t,s=Object(u.c)((function(e){return e.selectedOption.choices})),c=Object(i.useState)({}),n=Object(d.a)(c,2),a=n[0],r=n[1],l=Object(u.b)(),h=function(e){var t=e.target.value,s=e.target.name;r(Object(g.a)(Object(g.a)({},a),{},Object(p.a)({},s,t))),l(function(e,t){return{type:m,name:e,value:t}}(s,t))};return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{class:"card thecard",children:[Object(o.jsx)("div",{class:"card-header ",children:e.description}),Object(o.jsxs)("div",{class:"card-body cardbody",children:[Object(o.jsxs)("h5",{class:"card-title",children:[e.title," "]}),(t=e.option,console.log(s),t.map((function(t,s){return Object(o.jsxs)("div",{class:"form-check",children:[Object(o.jsx)("input",{value:t,onChange:h,class:"form-check-input",type:"radio",name:e.name,id:s.toString(),color:"#fff"}),Object(o.jsx)("label",{class:"form-check-label",for:s.toString(),children:t}),Object(o.jsx)("div",{})]})})))]})]})})},x=s(4),O=function(e){var t=Object(i.useState)("phase 1"),s=Object(d.a)(t,2),c=s[0],n=s[1],a=Object(u.c)((function(e){return e.selectedOption.choices})),r=Object(x.f)();return["phase 1"==c?Object(o.jsxs)("div",{className:"screen",children:[Object(o.jsx)(f,{description:"Select Gender",option:["male","female"],name:"gender"}),Object(o.jsx)(f,{description:"Select relationship to recepient",option:["parent","sibling","close-friend","distant-relative","spouse/ partner"],name:"relationship"}),Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("button",{disabled:void 0===a.gender||void 0===a.relationship,onClick:function(){return n("phase 2")},className:"btn btn-outline-success",children:"Next \u27a3 "})})]}):Object(o.jsxs)("div",{children:[b.map((function(e){return Object(o.jsx)(f,{description:e.question,option:e.answer,name:e.questionName})})),Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("button",{disabled:function(){var e=0;for(var t in a)e++;return console.log(e),e<7}(),onClick:function(){return r.push("/gifts")},className:"btn btn-outline-success",children:"Next \u27a3 "})})]})]},v=function(e){return Object(o.jsxs)("div",{class:"card bg-dark text-white gift-item",children:[Object(o.jsx)("img",{src:e.img,class:"card-img",alt:"..."}),Object(o.jsxs)("div",{class:"item-inner",children:[Object(o.jsxs)("div",{class:"card-img-overlay",children:[Object(o.jsx)("h5",{class:"card-title",children:e.name}),Object(o.jsxs)("p",{class:"card-text",children:[" ",e.desc]})]}),Object(o.jsx)("div",{class:"text-bottom",children:Object(o.jsxs)("p",{children:["$",e.cost]})})]})]})},w=function e(t,s,i,c,n){Object(h.a)(this,e),this.name=t,this.imgUrl=s,this.description=i,this.price=c,this.tags=n},y=[new w("Vinyl","https://i5.walmartimages.com/asr/1988b006-b2e2-4d50-8d73-dea4a4e9510f.4f7152260db1c1c856bfea731ffe5131.jpeg","A vinyl machine, classical way to deliver music.",60,["music","technology","aesthetic"]),new w("A Jewelry set","https://ae01.alicdn.com/kf/Hb9e4715005874f968fa53fe0ab3a3725K/COlOR-BEST-QUALITY-BRILLIANT-CRYSTAL-ZIRCON-EARRINGS-AND-NECKLACE-JEWELRY-SET-WEDDING-DRESS-ACCESSARIES.jpg_Q90.jpg_.webp","Diamonds and gold always get sold.",1600,["fashion","aesthetic"]),new w("Nike Jordan Retro 2021","https://s3.amazonaws.com/nikeinc/assets/100361/AJ_I_RETRO_HIGH_OG_555088-134_A1_Lateral_HR_hd_1600.jpg?1605198450","A vey cool looking pair of shoes",450,["fashion","athletics","aesthetic"]),new w("Lamp Speaker","https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1311500-894&recipeName=680","Bluetooth portable lamp speaker.",99.99,["music","technology","aesthetic"]),new w("Headphones","https://cdn.luxe.digital/media/2020/06/03164207/best-over-ear-headphones-master-dynamic-MW65-review-luxe-digital%402x.jpg","Brown Leather classic headphones.",249.99,["music","technology","aesthetic"]),new w("Flexispot Bike chair-desk","https://m.media-amazon.com/images/I/81YXI9KcClS._AC_SL1500_.jpg","Exercise and work at the same time.",399.99,["athletics","technology"]),new w("PS5","https://media.wired.com/photos/601dde27f1bf194f33695d95/4:3/w_2396,h_1797,c_limit/Gear-PS5-2-src-Sony-teal.jpg","Latest gaming console.",499.99,["gaming","technology"]),new w("Arsenal retro jacket","https://www.footballshirtculture.com/images/stories/arsenal-90-92-adidas-retro-track-jacket/arsenal_90_92_adidas_retro_track_jacket_e.jpg","90/92 Arsenal jacket. Fashion for winners",299.99,["sports","aesthetic","athletics","fashion"]),new w("Rose Sweatshirt","https://img.ltwebstatic.com/images3_pi/2020/09/04/159920530285d853cf5a1a40108ea241b2fc018300_thumbnail_600x.webp","Black and Pink.",18.95,["aesthetic","fashion"]),new w("Modern Nike Fleece Sweatpants","https://pa.namshicdn.com/product/A6/77127W/1-zoom-desktop.jpg","",49.99,["aesthetic","athletics","fashion"]),new w("Polaroid","https://pyxis.nymag.com/v1/imgs/29d/08b/bcdea27b1074c845663690281c1c434058-11-polaroid.rsquare.w700.jpg","Instant pictures, instant memories.",99.99,["technology"]),new w("Air Jordan: Travis Scott","https://images.stockx.com/360/Air-Jordan-6-Retro-Travis-Scott/Images/Air-Jordan-6-Retro-Travis-Scott/Lv2/img01.jpg?auto=compress&w=1140&q=90&dpr=2&updated_at=1611191963&fit=clip&fm=jpg&ixlib=react-9.1.5","Travis scott signature shoes.",399.99,["fashion","aesthetic"]),new w("Map Pendant","https://i.pinimg.com/originals/18/a7/30/18a7304173d8076830cefb15abeb3dfb.jpg","A reminder of origin.",399.99,["aesthetic"]),new w("Hat","https://static.nike.com/a/images/t_default/00e255fe-fc64-4cb1-9f47-d01e554ec69a/sportswear-cap-4c3dXh.png","",31.99,["fashion","aesthetic"]),new w("Fitbit","https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/inspire2/herostatic/black/proxima-black-device-3qt.png","Monitor biometrics during workouts.",139.99,["technology","athletics"]),new w("Dressy Watch","https://cdn.luxe.digital/media/2020/06/06175223/best-dress-watches-luxe-digital%402x.jpg","Tell time differently.",249.99,["fashion","aesthetic"]),new w("Book","https://robbreport.com/wp-content/uploads/2021/05/Group_Color_Pop.png?w=1000","A novel, fiction, drama or sci-fi story.",29.99,["aesthetic"]),new w("Airfryer","https://m.ninjakitchen.com/include/images/products/hero-DZ201WBKT.jpg","Make frying easier.",179.99,["technology"]),new w("Concert  Tickets","https://media.istockphoto.com/vectors/two-pair-vector-ticket-isolated-isolated-on-white-background-cinema-vector-id1179416950?k=20&m=1179416950&s=612x612&w=0&h=GxQTRUfcHQ-2vhjymO9XaZn5zNht4AX6ZcYX5Cmx0Vk=","Enjoy live music",199.99,["music"]),new w("Beanie","https://img.hatshopping.com/Skate-Beanie-with-Cuff-grey.46534_rf13.jpg","Best way to keep your head warm",24.99,["fashion","aesthetic"]),new w("Windbreaker","https://s7d5.scene7.com/is/image/UrbanOutfitters/61558862_040_b?$xlarge$&fit=constrain&qlt=80&wid=640","Break the wind",72.99,["aesthetic","fashion"]),new w("Adidas running shoes","https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/32cd21bed32344f38f50ab7a011d2044_9366/FortaRun_Running_Shoes_2020_Black_FW3719_01_standard.jpg","Run in style",65,["athletics"]),new w("Ocoopa USB fan","https://cdn.shopify.com/s/files/1/0363/4783/8597/products/F04USBdeskfan-1_1024x.jpg?v=1591934630","Portable fan for the summers heat",30,["technology"]),new w("Les Paul Guitar","https://static.gibson.com/product-images/Epiphone/EPIEMA551/Honeyburst/front-banner-1600_900.png","",1999.99,["technology","music"])],k=function(e){var t=e.ratio.toFixed(1).toString()+"%",s=e.index;return Object(i.useEffect)((function(){document.getElementsByClassName("rating-bar-inner")[s].style.width=t}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"rating-bar-outer",id:"outer",children:Object(o.jsx)("div",{className:"rating-bar-inner",id:"inner",children:Object(o.jsx)("p",{className:"rating",children:t})})})})},_=function(){var e=Object(u.c)((function(e){return e.selectedOption.choices})),t=[],s={music:0,athletics:0,aesthetic:0,technology:0,fashion:0,homesense:0},i=[],c=function(e){var t=0;for(var i in e)for(var c in e[i].tags)e[i].tags[c]in s&&(s[e[i].tags[c]]=s[e[i].tags[c]]+1,t++);console.log(s),n(t)},n=function(e){for(var t in console.log("Number of Interests =>",e),s)console.log(s[t]),s[t]=s[t]/e*100,console.log(s[t])};return function(){for(var s in console.log("BUDGET IS : ",e.budget),y)e.budget>=y[s].price?t.push(y[s]):console.log("too expensive");!function(t){for(var s in t)for(var n in t[s].tags)if(e.interest==t[s].tags[n]){i.push(t[s]);break}c(i)}(t)}(),Object(o.jsxs)("div",{id:"recommendations",children:[Object(o.jsxs)("h3",{id:"suggestion",children:["Suggestions for ",Object(o.jsx)("span",{class:"name",children:"Recepient"}),"."]}),Object(o.jsxs)("div",{class:"row ",children:[Object(o.jsxs)("div",{class:"col col-lg-3 col-md-3 col-sm-3 col-5 left-rw",children:[Object(o.jsx)("h3",{children:"Analytics"}),Object(o.jsx)("div",{class:"abs","data-tooltip":"Credit @SocialBakers Giphy ",children:Object(o.jsx)("img",{class:"person",src:"https://media1.giphy.com/media/JrXas5ecb4FkwbFpIE/giphy.gif?cid=790b76114a57c0e40ad78346daa2e8240f6cb513693c3e11&rid=giphy.gif&ct=g"})}),Object(o.jsx)("h4",{children:"Interests"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Music"}),Object(o.jsx)(k,{index:0,ratio:s.music}),Object(o.jsx)("p",{children:"Fashion & style"}),Object(o.jsx)(k,{index:1,ratio:s.fashion}),Object(o.jsx)("p",{children:"Technology"}),Object(o.jsx)(k,{index:2,ratio:s.technology}),Object(o.jsx)("p",{children:"Aesthetics"}),Object(o.jsx)(k,{index:3,ratio:s.aesthetic}),Object(o.jsx)("p",{children:"Athletics"}),Object(o.jsx)(k,{index:4,ratio:s.athletics})]})]}),Object(o.jsx)("div",{className:"col suggestion-list",children:Object(o.jsx)("div",{className:"row",children:i.map((function(e){return Object(o.jsx)("div",{className:"col col-lg-4 col-md-6 col-sm-12 col-12",children:Object(o.jsx)(v,{name:e.name,img:e.imgUrl,desc:e.description,cost:e.price})})}))})})]})]})},S=s(17),A=function(){return Object(o.jsxs)(S.a,{children:[Object(o.jsx)(r,{}),Object(o.jsxs)(x.c,{children:[Object(o.jsx)(x.a,{path:"/",exact:!0,children:Object(o.jsx)(l,{})}),Object(o.jsx)(x.a,{path:"/questions",exact:!0,children:Object(o.jsx)(O,{})}),Object(o.jsx)(x.a,{path:"/gifts",exact:!0,children:Object(o.jsx)(_,{})})]})]})},N=(s(42),s(11)),C=s(20);N.b.add(C.a,C.b,C.c);var E=s(25),I={choices:{}},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var s=t.name,i=t.value;return Object(g.a)(Object(g.a)({},e),{},{choices:Object(g.a)(Object(g.a)({},e.choices),{},Object(p.a)({},s,i))})}return e};var R=function(){var e=Object(E.a)({selectedOption:T}),t=Object(E.b)(e);return Object(o.jsx)(u.a,{store:t,children:Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(A,{})})})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),i(e),c(e),n(e),a(e)}))};a.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(R,{})}),document.getElementById("root")),B()}},[[43,1,2]]]);
//# sourceMappingURL=main.c385c519.chunk.js.map