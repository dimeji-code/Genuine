(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{26:function(e,t,s){},32:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var i=s(1),c=s.n(i),a=s(16),n=s.n(a),o=(s(26),s.p,s(32),s(0)),r=function(){return Object(o.jsxs)("nav",{class:"navbar navbar-light sticky-top",children:[Object(o.jsx)("a",{class:"navbar-brand title",style:{fontSize:20,fontFamily:"MuseoModerno"},href:"/Genuine",children:"genuine"}),Object(o.jsxs)("ul",{class:"nav justify-content-end navOpt",children:[Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",style:{fontSize:20,fontFamily:"Crimson Text, serif"},href:"",children:" about"})}),Object(o.jsx)("li",{class:"nav-item",children:Object(o.jsx)("a",{class:"nav-link",style:{fontSize:20,fontFamily:"Crimson Text, serif"},href:"",children:"trending"})})]})]})},l=s(13),d=function(){return Object(o.jsxs)("div",{class:"middleContainer",children:[Object(o.jsxs)("div",{class:"row intro",children:[Object(o.jsxs)("div",{class:"col-lg-6",children:[Object(o.jsx)("h1",{class:"question",children:"Having trouble finding the perfect gift?"}),Object(o.jsx)("h4",{class:"desc col-lg-6",children:"Find popular suggestions or get unique gift ideas for that special someone."}),Object(o.jsx)("h5",{class:"desc col-lg-6",children:Object(o.jsx)("a",{href:"",children:"To use as a guest, click on the add icon"})})]}),Object(o.jsx)("div",{class:"col-lg-6 add",children:Object(o.jsx)(l.b,{to:"/questions",children:Object(o.jsx)("img",{class:"col-lg-6 added",src:"/Genuine/add500.png"})})})]}),Object(o.jsxs)("div",{class:"bottomContainer",children:[Object(o.jsx)("a",{children:Object(o.jsx)("button",{disabled:!0,class:"btn btn-outline-secondary",children:"Login"})}),Object(o.jsx)("a",{children:Object(o.jsx)("button",{disabled:!0,class:"btn btn-outline-dark",children:"Signup"})}),Object(o.jsx)("p",{class:"forgot",children:Object(o.jsx)("a",{href:"",children:"Forgot email or password?"})})]})]})},h=s(19),j=s(18),p=function e(t,s,i){Object(j.a)(this,e),this.questionName=t,this.question=s,this.answer=i},b=[new p("personality-type","What is the persons personality type?",["introvert","extrovert"]),new p("interest","What interest is the person leaning towards the most?",["music","fashion","athletics","technology","aesthetic"]),new p("time","How often do you see the person?",["everyday","weekly","not often"]),new p("age","What is the age range of the recepient?",["< 10","10-14","15-20","21-35","> 35"]),new p("budget","What is your budget for a gift?",["30","60","200","500","2000"])],m=(s(38),s(12)),g=s(10),u="SELECT_OPTION",f=s(9),x=function(e){var t,s=Object(f.c)((function(e){return e.selectedOption.choices})),c=Object(i.useState)({}),a=Object(h.a)(c,2),n=a[0],r=a[1],l=Object(f.b)(),d=function(e){var t=e.target.value,s=e.target.name;r(Object(g.a)(Object(g.a)({},n),{},Object(m.a)({},s,t))),l(function(e,t){return{type:u,name:e,value:t}}(s,t))};return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{class:"card thecard",children:[Object(o.jsx)("div",{class:"card-header ",children:e.description}),Object(o.jsxs)("div",{class:"card-body cardbody",children:[Object(o.jsxs)("h5",{class:"card-title",children:[e.title," "]}),(t=e.option,console.log(s),t.map((function(t,s){return Object(o.jsxs)("div",{class:"form-check",children:[Object(o.jsx)("input",{value:t,onChange:d,class:"form-check-input",type:"radio",name:e.name,id:s.toString(),color:"#fff"}),Object(o.jsx)("label",{class:"form-check-label",for:s.toString(),children:t}),Object(o.jsx)("div",{})]})})))]})]})})},O=s(4),v=function(e){var t=Object(i.useState)("phase 1"),s=Object(h.a)(t,2),c=s[0],a=s[1],n=Object(f.c)((function(e){return e.selectedOption.choices})),r=Object(O.f)();return["phase 1"==c?Object(o.jsxs)("div",{className:"screen",children:[Object(o.jsx)(x,{description:"Select Gender",option:["male","female"],name:"gender"}),Object(o.jsx)(x,{description:"Select relationship to recepient",option:["parent","sibling","close-friend","distant-relative","spouse/ partner"],name:"relationship"}),Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("button",{disabled:void 0===n.gender||void 0===n.relationship,onClick:function(){return a("phase 2")},className:"btn btn-outline-success",children:"Next \u27a3 "})})]}):Object(o.jsxs)("div",{children:[b.map((function(e){return Object(o.jsx)(x,{description:e.question,option:e.answer,name:e.questionName})})),Object(o.jsx)("div",{className:"centered",children:Object(o.jsx)("button",{disabled:function(){var e=0;for(var t in n)e++;return console.log(e),e<7}(),onClick:function(){return r.push("/gifts")},className:"btn btn-outline-success",children:"Next \u27a3 "})})]})]},w=function(e){return Object(o.jsxs)("div",{class:"card bg-dark text-white gift-item",children:[Object(o.jsx)("img",{src:e.img,class:"card-img",alt:"..."}),Object(o.jsxs)("div",{class:"item-inner",children:[Object(o.jsxs)("div",{class:"card-img-overlay",children:[Object(o.jsx)("h5",{class:"card-title",children:e.name}),Object(o.jsxs)("p",{class:"card-text card-desc",children:[" ",e.desc]})]}),Object(o.jsx)("div",{class:"text-bottom",children:Object(o.jsxs)("p",{children:["$",e.cost]})})]})]})},y=function e(t,s,i,c,a){Object(j.a)(this,e),this.name=t,this.imgUrl=s,this.description=i,this.price=c,this.tags=a},_=[new y("Vinyl","https://i5.walmartimages.com/asr/1988b006-b2e2-4d50-8d73-dea4a4e9510f.4f7152260db1c1c856bfea731ffe5131.jpeg","A vinyl machine, classical way to deliver music.",60,["music","technology","aesthetic"]),new y("A Jewelry set","https://ae01.alicdn.com/kf/Hb9e4715005874f968fa53fe0ab3a3725K/COlOR-BEST-QUALITY-BRILLIANT-CRYSTAL-ZIRCON-EARRINGS-AND-NECKLACE-JEWELRY-SET-WEDDING-DRESS-ACCESSARIES.jpg_Q90.jpg_.webp","Diamonds and gold always get sold.",1600,["fashion","aesthetic"]),new y("Nike Jordan Retro 2021","https://s3.amazonaws.com/nikeinc/assets/100361/AJ_I_RETRO_HIGH_OG_555088-134_A1_Lateral_HR_hd_1600.jpg?1605198450","A vey cool looking pair of shoes",450,["fashion","athletics","aesthetic"]),new y("Lamp Speaker","https://images.costco-static.com/ImageDelivery/imageService?profileId=12026539&itemId=1311500-894&recipeName=680","Bluetooth portable lamp speaker.",99.99,["music","technology","aesthetic"]),new y("Headphones","https://cdn.luxe.digital/media/2020/06/03164207/best-over-ear-headphones-master-dynamic-MW65-review-luxe-digital%402x.jpg","Brown Leather classic headphones.",249.99,["music","technology","aesthetic"]),new y("Flexispot Bike chair-desk","https://m.media-amazon.com/images/I/81YXI9KcClS._AC_SL1500_.jpg","Exercise and work at the same time.",399.99,["athletics","technology"]),new y("PS5","https://media.wired.com/photos/601dde27f1bf194f33695d95/4:3/w_2396,h_1797,c_limit/Gear-PS5-2-src-Sony-teal.jpg","Latest gaming console.",499.99,["gaming","technology"]),new y("Arsenal retro jacket","https://www.footballshirtculture.com/images/stories/arsenal-90-92-adidas-retro-track-jacket/arsenal_90_92_adidas_retro_track_jacket_e.jpg","90/92 Arsenal jacket. Fashion for winners",299.99,["sports","aesthetic","athletics","fashion"]),new y("Rose Sweatshirt","https://img.ltwebstatic.com/images3_pi/2020/09/04/159920530285d853cf5a1a40108ea241b2fc018300_thumbnail_600x.webp","Black and Pink.",18.95,["aesthetic","fashion"]),new y("Modern Nike Fleece Sweatpants","https://pa.namshicdn.com/product/A6/77127W/1-zoom-desktop.jpg","",49.99,["aesthetic","athletics","fashion"]),new y("Polaroid","https://pyxis.nymag.com/v1/imgs/29d/08b/bcdea27b1074c845663690281c1c434058-11-polaroid.rsquare.w700.jpg","Instant pictures, instant memories.",99.99,["technology"]),new y("Air Jordan: Travis Scott","https://images.stockx.com/360/Air-Jordan-6-Retro-Travis-Scott/Images/Air-Jordan-6-Retro-Travis-Scott/Lv2/img01.jpg?auto=compress&w=1140&q=90&dpr=2&updated_at=1611191963&fit=clip&fm=jpg&ixlib=react-9.1.5","Travis scott signature shoes.",399.99,["fashion","aesthetic"]),new y("Map Pendant","https://i.pinimg.com/originals/18/a7/30/18a7304173d8076830cefb15abeb3dfb.jpg","A reminder of origin.",399.99,["aesthetic"]),new y("Hat","https://static.nike.com/a/images/t_default/00e255fe-fc64-4cb1-9f47-d01e554ec69a/sportswear-cap-4c3dXh.png","",31.99,["fashion","aesthetic"]),new y("Fitbit","https://www.fitbit.com/global/content/dam/fitbit/global/pdp/devices/inspire2/herostatic/black/proxima-black-device-3qt.png","Monitor biometrics during workouts.",139.99,["technology","athletics"]),new y("Dressy Watch","https://cdn.luxe.digital/media/2020/06/06175223/best-dress-watches-luxe-digital%402x.jpg","Tell time differently.",249.99,["fashion","aesthetic"]),new y("Book","https://robbreport.com/wp-content/uploads/2021/05/Group_Color_Pop.png?w=1000","A novel, fiction, drama or sci-fi story.",29.99,["aesthetic"]),new y("Airfryer","https://m.ninjakitchen.com/include/images/products/hero-DZ201WBKT.jpg","Make frying easier.",179.99,["technology"]),new y("Concert  Tickets","https://media.istockphoto.com/vectors/two-pair-vector-ticket-isolated-isolated-on-white-background-cinema-vector-id1179416950?k=20&m=1179416950&s=612x612&w=0&h=GxQTRUfcHQ-2vhjymO9XaZn5zNht4AX6ZcYX5Cmx0Vk=","Enjoy live music",199.99,["music"]),new y("Beanie","https://img.hatshopping.com/Skate-Beanie-with-Cuff-grey.46534_rf13.jpg","Best way to keep your head warm",24.99,["fashion","aesthetic"]),new y("Windbreaker","https://s7d5.scene7.com/is/image/UrbanOutfitters/61558862_040_b?$xlarge$&fit=constrain&qlt=80&wid=640","Break the wind",72.99,["aesthetic","fashion"]),new y("Adidas running shoes","https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/32cd21bed32344f38f50ab7a011d2044_9366/FortaRun_Running_Shoes_2020_Black_FW3719_01_standard.jpg","Run in style",65,["athletics"]),new y("Ocoopa USB fan","https://cdn.shopify.com/s/files/1/0363/4783/8597/products/F04USBdeskfan-1_1024x.jpg?v=1591934630","Portable fan for the summers heat",30,["technology"]),new y("Les Paul Guitar","https://static.gibson.com/product-images/Epiphone/EPIEMA551/Honeyburst/front-banner-1600_900.png","or any other instrument of your choice",1999.99,["technology","music"]),new y("Lava Lamp","https://images.unsplash.com/photo-1574882225022-5f45b99d4966?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80","Light up your room colorfully",29.99,["technology","lamp"]),new y("VGazer floating bulb","https://m.media-amazon.com/images/I/51N1Nd3u+ML._AC_SL1000_.jpg","Use science or sorcery to brighten your life",69.99,["technology","lamp","aesthetic"]),new y("Sports Jersey (Liverpool)","https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/24/27b5eee2dfc7a1ea805b0b25862780b9702a6d1d.jpeg","Represent a stylish team",199.99,["athletics","fashion"]),new y("Blendjet","https://m.media-amazon.com/images/I/71R3exZUUVL._AC_SL1500_.jpg","Smoothie on the go",64.99,["technology","appliance"]),new y("Miseyo roller stamp","https://m.media-amazon.com/images/I/71s0wmGOvxL._AC_SL1500_.jpg","Cover sensitive information conveniently",19.99,["household","appliance"]),new y("Laptop","https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/rfb-macbook-air-gold-select-201902?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1548454547923","So much you can do with this one",1599.99,["technology"]),new y("Rollerblades","https://www.rollerblade.com/files/15390/_2000x2000r_07958600816_ZETRABLADE_PHOTO-PRIMARY_ANGLED_VIEW.jpg","CSkate through life",219.99,["athletics"]),new y("Desk Plants","https://refer.althemist.com/wp-content/uploads/2018/01/mapple-desk-planter_prod2.jpg","Add life to your desk",59.99,["household","aesthetic"])],k=function(e){var t=e.ratio.toFixed(1).toString()+"%",s=e.index;return Object(i.useEffect)((function(){document.getElementsByClassName("rating-bar-inner")[s].style.width=t}),[]),Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"rating-bar-outer",id:"outer",children:Object(o.jsx)("div",{className:"rating-bar-inner",id:"inner",children:Object(o.jsx)("p",{className:"rating",children:t})})})})},S=function(){return Object(o.jsx)("div",{className:"card disclaimer",children:Object(o.jsxs)("p",{className:"card-body disclaim",children:["Disclaimer: ",Object(o.jsx)("span",{className:"disclaimer-text",children:" This is solely a suggestion tool. Prices noted on items are not of particular brands but are an estimation based on the variety of options in the broad market. None of the images are due to paid advertisement."})]})})},A=function(){var e=Object(f.c)((function(e){return e.selectedOption.choices})),t=[],s={music:0,athletics:0,aesthetic:0,technology:0,fashion:0,homesense:0},i=[],c=function(e){var t=0;for(var i in e)for(var c in e[i].tags)e[i].tags[c]in s&&(s[e[i].tags[c]]=s[e[i].tags[c]]+1,t++);console.log(s),a(t)},a=function(e){for(var t in console.log("Number of Interests =>",e),s)console.log(s[t]),s[t]=s[t]/e*100,console.log(s[t])};return function(){for(var s in console.log("BUDGET IS : ",e.budget),_)e.budget>=_[s].price?t.push(_[s]):console.log("too expensive");!function(t){for(var s in t)for(var a in t[s].tags)if(e.interest==t[s].tags[a]){i.push(t[s]);break}c(i)}(t)}(),Object(o.jsxs)("div",{id:"recommendations",children:[Object(o.jsxs)("h3",{id:"suggestion",children:["Suggestions for ",Object(o.jsx)("span",{class:"name",children:"Recepient"}),"."]}),Object(o.jsx)(S,{}),Object(o.jsxs)("div",{class:"row",children:[Object(o.jsxs)("div",{class:"col col-lg-3 col-md-3 col-sm-3 col-5 left-rw",children:[Object(o.jsx)("h3",{children:"Analytics"}),Object(o.jsx)("div",{class:"abs","data-tooltip":"Credit @SocialBakers Giphy ",children:Object(o.jsx)("img",{class:"person",src:"https://media1.giphy.com/media/JrXas5ecb4FkwbFpIE/giphy.gif?cid=790b76114a57c0e40ad78346daa2e8240f6cb513693c3e11&rid=giphy.gif&ct=g"})}),Object(o.jsx)("h4",{children:"Interests"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:"Music"}),Object(o.jsx)(k,{index:0,ratio:s.music}),Object(o.jsx)("p",{children:"Fashion & style"}),Object(o.jsx)(k,{index:1,ratio:s.fashion}),Object(o.jsx)("p",{children:"Technology"}),Object(o.jsx)(k,{index:2,ratio:s.technology}),Object(o.jsx)("p",{children:"Aesthetics"}),Object(o.jsx)(k,{index:3,ratio:s.aesthetic}),Object(o.jsx)("p",{children:"Athletics"}),Object(o.jsx)(k,{index:4,ratio:s.athletics})]})]}),Object(o.jsx)("div",{className:"col suggestion-list",children:Object(o.jsx)("div",{className:"row",children:i.map((function(e){return Object(o.jsx)("div",{className:"col col-lg-4 col-md-6 col-sm-12 col-12",children:Object(o.jsx)(w,{name:e.name,img:e.imgUrl,desc:e.description,cost:e.price})})}))})})]})]})},N=function(){return Object(o.jsxs)(l.a,{children:[Object(o.jsx)(r,{}),Object(o.jsxs)(O.c,{children:[Object(o.jsx)(O.a,{exact:!0,path:"/Genuine",children:Object(o.jsx)(d,{})}),Object(o.jsx)(O.a,{exact:!0,path:"/questions",children:Object(o.jsx)(v,{})}),Object(o.jsx)(O.a,{exact:!0,path:"/gifts",component:A})]})]})},C=(s(42),s(11)),L=s(20);C.b.add(L.a,L.b,L.c);var I=s(25),E={choices:{}},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:var s=t.name,i=t.value;return Object(g.a)(Object(g.a)({},e),{},{choices:Object(g.a)(Object(g.a)({},e.choices),{},Object(m.a)({},s,i))})}return e};var T=function(){var e=Object(I.a)({selectedOption:R}),t=Object(I.b)(e);return Object(o.jsx)(f.a,{store:t,children:Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(N,{})})})},B=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,n=t.getTTFB;s(e),i(e),c(e),a(e),n(e)}))};n.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(T,{})}),document.getElementById("root")),B()}},[[43,1,2]]]);
//# sourceMappingURL=main.89f40eec.chunk.js.map