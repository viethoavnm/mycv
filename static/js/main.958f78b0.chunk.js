(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(7),r=t.n(c),s=t(1),m=t(5),i=t(3),o=t(2),u=t(4),d=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("a",{href:"#home",className:"logo"},n.a.createElement("small",{className:"logo__icon"},"VH"),n.a.createElement("h1",{className:"logo__text"},"@viethoavnm"))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),E=window.$,h=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("header",{className:"header"},n.a.createElement("nav",{className:"navbar"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"navbar-header"},n.a.createElement("button",{type:"button",className:"navbar-toggle collapsed","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"},n.a.createElement("span",{className:"sr-only"},"Toggle navigation"),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"}),n.a.createElement("span",{className:"icon-bar"})),n.a.createElement(d,null)),n.a.createElement("div",{id:"navbar",className:"collapse navbar-collapse"},n.a.createElement("ul",{className:"nav navbar-nav navbar-right"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{href:"#home"},"Home")),n.a.createElement("li",{className:""},n.a.createElement("a",{href:"#about"},"About")),n.a.createElement("li",{className:""},n.a.createElement("a",{href:"#services"},"Services")),n.a.createElement("li",{className:""},n.a.createElement("a",{href:"#resume"},"Resume")),n.a.createElement("li",{className:""},n.a.createElement("a",{href:"#our-work"},"My Work")),n.a.createElement("li",{className:""},n.a.createElement("a",{href:"#blog"},"Blog")),n.a.createElement("li",{className:""},n.a.createElement("a",{href:"#contact"},"Contact")))))))},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){E(window).scroll(function(){E(window).scrollTop()>=100?E("header").addClass("fixed-header"):E("header").removeClass("fixed-header")}),E(".header .navbar").onePageNav({currentClass:"current",changeHash:!1,scrollSpeed:750})}}]),a}(n.a.PureComponent),p=window.$,v=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{id:"home",className:"home-banner","data-parallax":"scroll"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"welcome-text"},n.a.createElement("h3",null,"Hello! i'm"),n.a.createElement("h2",null,"Tran Viet Hoa"),n.a.createElement("p",null,"FRONT-END WEB DEVELOPMENT"),n.a.createElement("div",{className:"wt-actions"},n.a.createElement("button",{className:"m-btn lets-talk"},"Let's talk New")))))},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){p(".lets-talk").click(function(){p("html,body").animate({scrollTop:p("#contact").offset().top},"slow")}),p(".home-banner").height(p(window).height()),p(window).resize(function(){p(".home-banner").height(p(window).height())}),p(".home-banner").parallax({imageSrc:"./images/figma.jpg"}),window.particlesJS("home",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0,config_demo:{hide_card:!1,background_color:"#b61924",background_image:"",background_position:"50% 50%",background_repeat:"no-repeat",background_size:"cover"}})}}]),a}(n.a.PureComponent),f=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{id:"about",className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-xs-12 col-sm-5"},n.a.createElement("div",{className:"personal-pic"},n.a.createElement("img",{src:"./images/me.jpg",title:"",alt:""}))),n.a.createElement("div",{className:"col-xs-12 col-sm-7"},n.a.createElement("div",{className:"personal-info"},n.a.createElement("div",{className:"section-title left"},n.a.createElement("h2",null,"About ",n.a.createElement("span",null,"Me"))),n.a.createElement("h3",null,"Hello! i'm Tran Viet Hoa"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."),n.a.createElement("div",{className:"social-link"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#fb"},n.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#tw"},n.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#in"},n.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#ytb"},n.a.createElement("i",{className:"fa fa-youtube-play","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#pin"},n.a.createElement("i",{className:"fa fa-pinterest","aria-hidden":"true"}))))),n.a.createElement("div",{className:"about-actions"},n.a.createElement("button",{className:"m-btn lets-talk"},"Contact me")))))))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{id:"services",className:"section grey-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,n.a.createElement("span",null,"My"),"Services")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"service-box"},n.a.createElement("span",{className:"sb-icon"},n.a.createElement("i",{className:"fa fa-heart fa-2x","aria-hidden":"true"})),n.a.createElement("h4",null,"WEB DESIGN"),n.a.createElement("div",{className:"sb-desc"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.")))),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"service-box"},n.a.createElement("span",{className:"sb-icon"},n.a.createElement("i",{className:"fa fa-mobile fa-2x","aria-hidden":"true"})),n.a.createElement("h4",null,"MOBILE APPS"),n.a.createElement("div",{className:"sb-desc"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.")))),n.a.createElement("div",{className:"col-sm-4"},n.a.createElement("div",{className:"service-box"},n.a.createElement("span",{className:"sb-icon"},n.a.createElement("i",{className:"fa fa-code fa-2x","aria-hidden":"true"})),n.a.createElement("h4",null,"WEB DEVELOPMENT"),n.a.createElement("div",{className:"sb-desc"},n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.")))))))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),g=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{id:"resume",className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,n.a.createElement("span",null,"My"),"Resume")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 col-xs-12"},n.a.createElement("div",{className:"resume-box"},n.a.createElement("h4",null,"WORK"),n.a.createElement("div",{className:"resume-row"},n.a.createElement("h5",null,"Apple"),n.a.createElement("label",null,"OCT 2015 - JUNE 2016"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.")),n.a.createElement("div",{className:"resume-row"},n.a.createElement("h5",null,"Google"),n.a.createElement("label",null,"OCT 2016 - JUNE 2017"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.")))),n.a.createElement("div",{className:"col-sm-6 col-xs-12"},n.a.createElement("div",{className:"resume-box"},n.a.createElement("h4",null,"EDUCATION"),n.a.createElement("div",{className:"resume-row"},n.a.createElement("h5",null,"University"),n.a.createElement("label",null,"OCT 2010 - JUNE 2013"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.")),n.a.createElement("div",{className:"resume-row"},n.a.createElement("h5",null,"Design and Art"),n.a.createElement("label",null,"OCT 2013 - JUNE 2015"),n.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.")))))))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),N=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("footer",{className:"footer"},n.a.createElement("div",{className:"main-footer text-center"},n.a.createElement("h4",{className:"footer-logo"},"@viethoavnm"),n.a.createElement("div",{className:"social-link"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#/fb"},n.a.createElement("i",{className:"fa fa-facebook","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#/tw"},n.a.createElement("i",{className:"fa fa-twitter","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#/lk"},n.a.createElement("i",{className:"fa fa-linkedin","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#/pin"},n.a.createElement("i",{className:"fa fa-pinterest","aria-hidden":"true"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"#/ins"},n.a.createElement("i",{className:"fa fa-instagram","aria-hidden":"true"})))))),n.a.createElement("div",{className:"sub-footer text-center"},n.a.createElement("p",null,"Copyright \xa9 By Tran Viet Hoa 2019 | All Rights Reserved.")))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),w=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{className:"call-to-action"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",null,"I am Available for Freelance"),n.a.createElement("button",{className:"m-btn m-btn-white"},"hire me Now")))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),y=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{id:"our-work",className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,n.a.createElement("span",null,"My"),"Portfolio")),n.a.createElement("div",{className:"portfolio-box"},n.a.createElement("div",{className:"filter"},n.a.createElement("button",{type:"button",className:"control","data-filter":"all"},"Web Apps")),n.a.createElement("div",{className:"portfolio-filter"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4 col-xs-6 mix illustration"},n.a.createElement("div",{className:"portfolio-col"},n.a.createElement("img",{src:"./images/illustration.jpg",title:"",alt:""}),n.a.createElement("div",{className:"hover"},n.a.createElement("h4",null,"Illustration Work"),n.a.createElement("label",null,"illustration")))),n.a.createElement("div",{className:"col-sm-4 col-xs-6 mix photoshop"},n.a.createElement("div",{className:"portfolio-col"},n.a.createElement("img",{src:"./images/photoshop.jpg",title:"",alt:""}),n.a.createElement("div",{className:"hover"},n.a.createElement("h4",null,"Photoshop Work"),n.a.createElement("label",null,"photoshop")))),n.a.createElement("div",{className:"col-sm-4 col-xs-6 mix illustration"},n.a.createElement("div",{className:"portfolio-col"},n.a.createElement("img",{src:"./images/illustration1.jpg",title:"",alt:""}),n.a.createElement("div",{className:"hover"},n.a.createElement("h4",null,"Illustration Work"),n.a.createElement("label",null,"illustration")))),n.a.createElement("div",{className:"col-sm-4 col-xs-6 mix photoshop"},n.a.createElement("div",{className:"portfolio-col"},n.a.createElement("img",{src:"./images/photoshop1.jpg",title:"",alt:""}),n.a.createElement("div",{className:"hover"},n.a.createElement("h4",null,"Photoshop Work"),n.a.createElement("label",null,"photoshop")))),n.a.createElement("div",{className:"col-sm-4 col-xs-6 mix website"},n.a.createElement("div",{className:"portfolio-col"},n.a.createElement("img",{src:"./images/website.jpg",title:"",alt:""}),n.a.createElement("div",{className:"hover"},n.a.createElement("h4",null,"Website Work"),n.a.createElement("label",null,"Website")))),n.a.createElement("div",{className:"col-sm-4 col-xs-6 mix apps"},n.a.createElement("div",{className:"portfolio-col"},n.a.createElement("img",{src:"./images/apps.jpg",title:"",alt:""}),n.a.createElement("div",{className:"hover"},n.a.createElement("h4",null,"Apps Work"),n.a.createElement("label",null,"App")))))))))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),O=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{className:"section testimonial-area grey-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"owl-carousel testimonial-slider"},n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"single-testimonial text-center"},n.a.createElement("div",{className:"avtar"},n.a.createElement("img",{src:"./images/project2.jpg",alt:""})),n.a.createElement("p",null,"The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact."),n.a.createElement("div",{className:"clearfix"}),n.a.createElement("h4",null,"- Ms. Mandy Doe"),n.a.createElement("p",{className:"desg"},"Founder of Mandy"))),n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"single-testimonial text-center"},n.a.createElement("div",{className:"avtar"},n.a.createElement("img",{src:"./images/photoshop1.jpg",alt:""})),n.a.createElement("p",null,"The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact."),n.a.createElement("div",{className:"clearfix"}),n.a.createElement("h4",null,"- Ms. Mandy Doe"),n.a.createElement("p",{className:"desg"},"Founder of Mandy"))),n.a.createElement("div",{className:"item"},n.a.createElement("div",{className:"single-testimonial text-center"},n.a.createElement("div",{className:"avtar"},n.a.createElement("img",{src:"./images/photoshop.jpg",alt:""})),n.a.createElement("p",null,"The new common language will be more simple and regular than. It will be more Occidental in fact. The new common language will be more simple and regular than. It will be more Occidental in fact."),n.a.createElement("div",{className:"clearfix"}),n.a.createElement("h4",null,"- Ms. Mandy Doe"),n.a.createElement("p",{className:"desg"},"Founder of Mandy"))))))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{id:"blog",className:"section"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,n.a.createElement("span",null,"My"),"Blogs")),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-4 col-sm-12"},n.a.createElement("div",{className:"blog-item"},n.a.createElement("div",{className:"blog-img"},n.a.createElement("img",{src:"./images/blog3.jpg",title:"Blog",alt:"Blog"})),n.a.createElement("div",{className:"blog-contents"},n.a.createElement("h3",null,n.a.createElement("a",{href:"blog-details.html"},"New Bog For Web Designer")),n.a.createElement("div",{className:"blog-meta"},n.a.createElement("p",null,"Posted On 25th Oct 2017")),n.a.createElement("div",{className:"blog-desc"},n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...")),n.a.createElement("div",{className:"blog-action"},n.a.createElement("a",{href:"#more",className:"m-btn"},"Read More"))))),n.a.createElement("div",{className:"col-sm-4 col-sm-12"},n.a.createElement("div",{className:"blog-item"},n.a.createElement("div",{className:"blog-img"},n.a.createElement("img",{src:"./images/blog2.jpg",title:"Blog",alt:"Blog"})),n.a.createElement("div",{className:"blog-contents"},n.a.createElement("h3",null,n.a.createElement("a",{href:"blog-details.html"},"Latest Mobile Apps")),n.a.createElement("div",{className:"blog-meta"},n.a.createElement("p",null,"Posted On 25th Oct 2017")),n.a.createElement("div",{className:"blog-desc"},n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...")),n.a.createElement("div",{className:"blog-action"},n.a.createElement("a",{href:"#more",className:"m-btn"},"Read More"))))),n.a.createElement("div",{className:"col-sm-4 col-sm-12"},n.a.createElement("div",{className:"blog-item"},n.a.createElement("div",{className:"blog-img"},n.a.createElement("img",{src:"./images/blog1.jpg",title:"Blog",alt:"Blog"})),n.a.createElement("div",{className:"blog-contents"},n.a.createElement("h3",null,n.a.createElement("a",{href:"blog-details.html"},"You Need Website For Your Business")),n.a.createElement("div",{className:"blog-meta"},n.a.createElement("p",null,"Posted On 25th Oct 2017")),n.a.createElement("div",{className:"blog-desc"},n.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ...")),n.a.createElement("div",{className:"blog-action"},n.a.createElement("a",{href:"#more",className:"m-btn"},"Read More"))))),n.a.createElement("div",{className:"col-md-12 col-xs-12 text-center mt-30"},n.a.createElement("div",{className:"blog-action mt-30"},n.a.createElement("a",{href:"blog.html",className:"m-btn"},"View All"))))))},t}return Object(u.a)(a,e),a}(n.a.PureComponent),x=function(e){function a(){var e,t;Object(s.a)(this,a);for(var l=arguments.length,c=new Array(l),r=0;r<l;r++)c[r]=arguments[r];return(t=Object(i.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(c)))).render=function(){return n.a.createElement("section",{id:"contact",className:"section contact-us grey-bg"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement("h2",null,"Contact",n.a.createElement("span",null,"Me"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-4 col-sm-6 col-xs-12"},n.a.createElement("div",{className:"contact-info"},n.a.createElement("i",{className:"fa fa-map-marker"}),n.a.createElement("h4",null,"Adress:"),n.a.createElement("p",null,"No 22, 322/90 My Dinh Street ",n.a.createElement("br",null),"My Dinh 1, Nam Tu Liem, Hanoi"))),n.a.createElement("div",{className:"col-md-4 col-sm-6 col-xs-12"},n.a.createElement("div",{className:"contact-info"},n.a.createElement("i",{className:"fa fa-envelope"}),n.a.createElement("h4",null,"Email:"),n.a.createElement("p",null,n.a.createElement("a",{href:"mailto:viethoavnm@gmail.com"},"viethoavnm@gmail.com"),n.a.createElement("br",null),n.a.createElement("a",{href:"mailto:viethoavnm@hotmail.com"},"viethoavnm@hotmail.com")))),n.a.createElement("div",{className:"col-md-4 col-sm-6 col-xs-12"},n.a.createElement("div",{className:"contact-info"},n.a.createElement("i",{className:"fa fa-phone"}),n.a.createElement("h4",null,"Phone:"),n.a.createElement("p",null,"Mob: +84 978 114 250",n.a.createElement("br",null),"Home: +84 868 353 2967"))))))},t}return Object(u.a)(a,e),a}(n.a.PureComponent);t(14);var A=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,null),n.a.createElement(v,null),n.a.createElement(f,null),n.a.createElement(b,null),n.a.createElement(g,null),n.a.createElement(w,null),n.a.createElement(y,null),n.a.createElement(O,null),n.a.createElement(j,null),n.a.createElement(x,null),n.a.createElement(N,null))},k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(n.a.createElement(A,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/me",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("/me","/service-worker.js");k?(function(e,a){fetch(e).then(function(t){var l=t.headers.get("content-type");404===t.status||null!=l&&-1===l.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(a,e)})}}()},8:function(e,a,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.958f78b0.chunk.js.map