(this.webpackJsonpclick=this.webpackJsonpclick||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Fry","image":"https://upload.wikimedia.org/wikipedia/en/thumb/2/28/Philip_Fry.png/220px-Philip_Fry.png"},{"id":2,"name":"Leela","image":"https://upload.wikimedia.org/wikipedia/en/d/d4/Turanga_Leela.png"},{"id":3,"name":"Zoidberg","image":"https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/Dr_John_Zoidberg.png/200px-Dr_John_Zoidberg.png"},{"id":4,"name":"Amy","image":"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/amy-wong-futurama-64.8.jpg"},{"id":5,"name":"Professor","image":"http://3.bp.blogspot.com/_jON_zf57gnk/TJuo1REkewI/AAAAAAAAAB0/spkV3x1q_ko/s1600/professor.jpg"},{"id":6,"name":"Hermes","image":"https://vignette.wikia.nocookie.net/en.futurama/images/0/0d/Hermes.png/revision/latest?cb=20170719011119"},{"id":7,"name":"Zapp","image":"https://theinfosphere.org/images/d/d8/Zapp_promo.png"},{"id":8,"name":"Kif","image":"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/kif-kroker-futurama-the-beast-with-a-billion-backs-8.01.jpg"},{"id":9,"name":"Nibbler","image":"https://immatureteddybear.files.wordpress.com/2015/10/images-1.jpg"},{"id":10,"name":"Bender","image":"https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Bender_Rodriguez.png/220px-Bender_Rodriguez.png"},{"id":11,"name":"Mom","image":"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/mom-futurama-34.1.jpg"},{"id":12,"name":"Robot devil","image":"https://statici.behindthevoiceactors.com/behindthevoiceactors/_img/chars/robot-devil-futurama-the-beast-with-a-billion-backs-10.8.jpg"},{"id":13,"name":"Scruffy","image":"https://vignette.wikia.nocookie.net/inkagames-english/images/1/10/Scruffy.png/revision/latest?cb=20161205130758"},{"id":14,"name":"Clamps","image":"https://gamepedia.cursecdn.com/futuramaworldsoftomorrow_gamepedia_en/1/17/Clamps.png"}]')},,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),r=t.n(i),n=t(3),o=t.n(n),c=(t(14),t(4)),s=t(5),m=t(7),h=t(6),l=t(8),p=(t(15),t(1));var g=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)};t(16);var d=function(e){return r.a.createElement("div",{className:"card",onClick:function(){return e.clickPic(e.id)}},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{alt:e.name,src:e.image})))},u=function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,r=new Array(i),n=0;n<i;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={characters:p,score:0,highscore:0,chosenArray:[],alertMessage:"",shakeit:!1},t.clickPic=function(e){var a=t.shuffledArray(p);t.setState({characters:a}),t.state.chosenArray.includes(e)?t.setState({score:0,chosenArray:[],alertMessage:"Incorrect Choice. Try Again.",shakeit:!0}):t.setState({chosenArray:t.state.chosenArray.concat([e]),score:t.state.score+1,alertMessage:"Correct!",shakeit:!1}),t.state.score>t.state.highscore&&(t.setState({highscore:t.state.score}),console.log({highscore:t.state.score}))},t.shuffledArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e},t}return Object(l.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{className:"App-logo"}),r.a.createElement("h1",{className:"App-title"},"Welcome to Pic it and Click it!")),r.a.createElement("h3",{className:"App-intro"},r.a.createElement("p",{className:"score"},"Score: ",this.state.score," | Highscore: ",this.state.highscore)),r.a.createElement(g,null,this.state.characters.map((function(a){return r.a.createElement(d,{id:a.id,key:a.id,name:a.name,image:a.image,clickPic:e.clickPic})}))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.d1cce4d5.chunk.js.map