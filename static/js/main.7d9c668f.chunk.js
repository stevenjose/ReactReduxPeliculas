(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/reactMovie_logo.08494abf.png"},28:function(e,a){},29:function(e,a,t){e.exports=t(75)},43:function(e,a,t){},47:function(e,a,t){},50:function(e,a,t){},52:function(e,a,t){},54:function(e,a,t){},56:function(e,a,t){},58:function(e,a,t){},60:function(e,a,t){},62:function(e,a,t){},64:function(e,a,t){},66:function(e,a,t){},68:function(e,a,t){},70:function(e,a,t){},73:function(e,a,t){},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(13),o=t.n(c),l=t(15),i=t(7),m=t(25),s=t.n(m),u=t(77),d=t(78),v=t(79),p=t(76),g=(t(43),t(26)),h=t.n(g),f=function(){return r.a.createElement("div",{className:"rmdb-header"},r.a.createElement("div",{className:"rmdb-header-content"},r.a.createElement(p.a,{to:"/"},r.a.createElement("img",{className:"rmdb-logo",src:h.a,alt:"rmdb-logo"})),r.a.createElement("img",{className:"rmdb-tmdb-logo",src:"/images/tmdb_logo.png",alt:"tmdb-logo"})))},b=t(8),E=t(9),N=t(11),y=t(10),O=t(12),j=t(5),_="https://api.themoviedb.org/3/",k="844dba0bfd8f3a4f3799f6130ef9e335",M="http://image.tmdb.org/t/p/",S="GET_POPULAR_MOVIES",I="SEARCH_MOVIES",w="LOAD_MORE_MOVIES",P="CLEAR_MOVIES",x="SHOW_LOADING_SPINNER";t(47);var T=function(e){var a=e.image,t=e.title,n=e.text;return r.a.createElement("div",{className:"rmdb-heroimage",style:{background:"linear-gradient(to bottom, rgba(0,0,0,0)\n        39%,rgba(0,0,0,0)\n        41%,rgba(0,0,0,0.65)\n        100%),\n        url('".concat(a,"'), #1c1c1c")}},r.a.createElement("div",{className:"rmdb-heroimage-content"},r.a.createElement("div",{className:"rmdb-heroimage-text"},r.a.createElement("h1",null,t),r.a.createElement("p",null,n))))},R=t(6),C=t.n(R),A=(t(50),function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).state={value:""},t.timeout=null,t.doSearch=function(e){var a=e.target.value;t.setState({value:a}),clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.props.callback(a)},500)},t}return Object(O.a)(a,e),Object(E.a)(a,[{key:"render",value:function(){var e=this.state.value;return r.a.createElement("div",{className:"rmdb-searchbar"},r.a.createElement("div",{className:"rmdb-searchbar-content"},r.a.createElement(C.a,{className:"rmdb-fa-search",name:"search",size:"2x"}),r.a.createElement("input",{type:"text",className:"rmdb-searchbar-input",placeholder:"Buscar",onChange:this.doSearch,value:e})))}}]),a}(n.Component)),D=(t(52),function(e){var a=e.header,t=e.loading,n=e.children;return r.a.createElement("div",{className:"rmdb-grid"},a&&!t?r.a.createElement("h1",null,a):null,r.a.createElement("div",{className:"rmdb-grid-content"},n.map(function(e,a){return r.a.createElement("div",{key:a,className:"rmdb-grid-element"},e)})))}),L=(t(54),function(e){var a=e.image,t=e.movieId,n=e.movieName,c=e.clickable;return r.a.createElement("div",{className:"rmdb-moviethumb"},c?r.a.createElement(p.a,{to:{pathname:"/".concat(t),movieName:"".concat(n)}},r.a.createElement("img",{className:"clickable",src:a,alt:"moviethumb"})):r.a.createElement("img",{src:a,alt:"moviethumb"}))}),z=(t(56),function(e){var a=e.text,t=e.onClick;return r.a.createElement("div",{className:"rmdb-loadmorebtn",onClick:t},r.a.createElement("p",null,a))}),B=(t(58),function(){return r.a.createElement("div",{className:"loader"})}),J=(t(60),function(e){var a=e.movies,t=e.heroImage,n=e.loading,c=e.currentPage,o=e.totalPages,l=e.searchTerm,i=e.searchMovies,m=e.loadMoreMovies;return r.a.createElement("div",{className:"rmdb-home"},t?r.a.createElement("div",null,r.a.createElement(T,{image:"".concat(M).concat("w1280").concat(t.backdrop_path),title:t.original_title,text:t.overview}),r.a.createElement(A,{callback:i})):null,r.a.createElement("div",{className:"rmdb-home-grid"},r.a.createElement(D,{header:l?"Buscar Resultados":"Pel\xedculas Populares",loading:n},a.map(function(e,a){return r.a.createElement(L,{key:a,clickable:!0,image:e.poster_path?"".concat(M).concat("w500").concat(e.poster_path):"./images/no_image.jpg",movieId:e.id,movieName:e.original_title})})),n?r.a.createElement(B,null):null,c<=o&&!n?r.a.createElement(z,{text:"Carga m\xe1s",onClick:m}):null))}),V=function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).searchMovies=function(e){t.props.clearMovies(),t.props.showLoadingSpinner(),t.props.searchMovies(e)},t.loadMoreMovies=function(){var e=t.props,a=e.searchTerm,n=e.currentPage;t.props.showLoadingSpinner(),t.props.loadMoreMovies(a,n)},t}return Object(O.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"getMovies",value:function(){this.props.showLoadingSpinner(),this.props.getPopularMovies()}},{key:"render",value:function(){return r.a.createElement(J,Object.assign({},this.props,{searchMovies:this.searchMovies,loadMoreMovies:this.loadMoreMovies}))}}]),a}(n.Component),F={getPopularMovies:function(){var e="".concat(_,"movie/popular?api_key=").concat(k,"&language=es-ES&page=1"),a=fetch(e).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.error("Error:",e)});return{type:S,payload:a}},showLoadingSpinner:function(){return{type:x,payload:null}},searchMovies:function(e){var a;a=e?"".concat(_,"search/movie?api_key=").concat(k,"&language=es-ES&query=").concat(e):"".concat(_,"movie/popular?api_key=").concat(k,"&language=es-ES&page=1");var t=fetch(a).then(function(e){return e.json()}).then(function(a){return Object(j.a)({},a,{searchTerm:e})}).catch(function(e){return console.error("Error:",e)});return{type:I,payload:t}},clearMovies:function(){return{type:P,payload:null}},loadMoreMovies:function(e,a){var t;t=e?"".concat(_,"search/movie?api_key=").concat(k,"&language=es-ES&query=").concat(e,"&page=").concat(a+1):"".concat(_,"movie/popular?api_key=").concat(k,"&language=es-ES&page=").concat(a+1);var n=fetch(t).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return console.error("Error:",e)});return{type:w,payload:n}}},G=Object(l.b)(function(e){return e.home},F)(V),H=(t(62),function(e){var a=e.movie;return r.a.createElement("div",{className:"rmdb-navigation"},r.a.createElement("div",{className:"rmdb-navigation-content"},r.a.createElement(p.a,{to:"/"},r.a.createElement("p",null,"Home")),r.a.createElement("p",null,"/"),r.a.createElement("p",null,a)))}),U=(t(64),function(e){var a=e.movie,t=e.directors;return r.a.createElement("div",{className:"rmdb-movieinfo",style:{background:a.backdrop_path?"url('".concat(M).concat("w1280").concat(a.backdrop_path,"')"):"#000"}},r.a.createElement("div",{className:"rmdb-movieinfo-content"},r.a.createElement("div",{className:"rmdb-movieinfo-thumb"},r.a.createElement(L,{image:a.poster_path?"".concat(M).concat("w500").concat(a.poster_path):"./images/no_image.jpg",clickable:!1})),r.a.createElement("div",{className:"rmdb-movieinfo-text"},r.a.createElement("h1",null,a.title),r.a.createElement("h3",null,"PLOT"),r.a.createElement("p",null,a.overview),r.a.createElement("h3",null,"IMDB RATING"),r.a.createElement("div",{className:"rmdb-rating"},r.a.createElement("meter",{min:"0",max:"100",optimum:"100",low:"40",high:"70",value:10*a.vote_average}),r.a.createElement("p",{className:"rmdb-score"},a.vote_average)),t.length>1?r.a.createElement("h3",null,"DIRECTORS"):r.a.createElement("h3",null,"DIRECTOR"),t.map(function(e,a){return r.a.createElement("p",{key:a,className:"rmdb-director"},e.name)})),r.a.createElement(C.a,{className:"fa-film",name:"film",size:"5x"})))}),q=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:0}).format(e)},W=(t(66),function(e){var a=e.time,t=e.budget,n=e.revenue;return r.a.createElement("div",{className:"rmdb-movieinfobar"},r.a.createElement("div",{className:"rmdb-movieinfobar-content"},r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(C.a,{className:"fa-time",name:"clock-o",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Running time: ",function(e){var a=Math.floor(e/60),t=e%60;return"".concat(a,"h ").concat(t,"m")}(a))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(C.a,{className:"fa-budget",name:"money",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Budget: ",q(t))),r.a.createElement("div",{className:"rmdb-movieinfobar-content-col"},r.a.createElement(C.a,{className:"fa-revenue",name:"ticket",size:"2x"}),r.a.createElement("span",{className:"rmdb-movieinfobar-info"},"Revenue: ",q(n)))))}),K=(t(68),function(e){var a=e.actor;return r.a.createElement("div",{className:"rmdb-actor"},r.a.createElement("img",{src:a.profile_path?"".concat(M).concat("w154").concat(a.profile_path):"./images/no_image.jpg",alt:"actorthumb"}),r.a.createElement("span",{className:"rmdb-actor-name"},a.name),r.a.createElement("span",{className:"rmdb-actor-character"},a.character))}),Q=(t(70),function(e){function a(){var e,t;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(N.a)(this,(e=Object(y.a)(a)).call.apply(e,[this].concat(r)))).state={movie:null,actors:null,directors:[],loading:!1},t.fetchItems=function(e){var a=t.props.match.params.movieId;fetch(e).then(function(e){return e.json()}).then(function(e){e.status_code?t.setState({loading:!1}):t.setState({movie:e},function(){var e="".concat(_,"movie/").concat(a,"/credits?api_key=").concat(k);fetch(e).then(function(e){return e.json()}).then(function(e){var n=e.crew.filter(function(e){return"Director"===e.job});t.setState({actors:e.cast,directors:n,loading:!1},function(){localStorage.setItem("".concat(a),JSON.stringify(t.state))})})})}).catch(function(e){return console.error("Error:",e)})},t}return Object(O.a)(a,e),Object(E.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.movieId;if(localStorage.getItem("".concat(e))){var a=JSON.parse(localStorage.getItem("".concat(e)));this.setState(Object(j.a)({},a))}else{this.setState({loading:!0});var t="".concat(_,"movie/").concat(e,"?api_key=").concat(k,"&language=es-ES");this.fetchItems(t)}}},{key:"render",value:function(){var e=this.props.location.movieName,a=this.state,t=a.movie,n=a.directors,c=a.actors,o=a.loading;return r.a.createElement("div",{className:"rmdb-movie"},t?r.a.createElement("div",null,r.a.createElement(H,{movie:e}),r.a.createElement(U,{movie:t,directors:n}),r.a.createElement(W,{time:t.runtime,budget:t.budget,revenue:t.revenue})):null,c?r.a.createElement("div",{className:"rmdb-movie-grid"},r.a.createElement(D,{header:"Actors"},c.map(function(e,a){return r.a.createElement(K,{key:a,actor:e})}))):null,c||o?null:r.a.createElement("h1",null,"No movie found"),o?r.a.createElement(B,null):null)}}]),a}(n.Component)),X=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Whooops. This page doesn't exist"))},Y=function(){return r.a.createElement(u.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement(d.a,null,r.a.createElement(v.a,{path:"/",component:G,exact:!0}),r.a.createElement(v.a,{path:"/:movieId",component:Q,exact:!0}),r.a.createElement(v.a,{component:X}))))},Z=t(21),$={movies:[],heroImage:null,loading:!1,currentPage:0,totalPages:0,searchTerm:""},ee=t(28),ae=t.n(ee),te=Object(i.c)({home:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case S:return Object(j.a)({},e,{movies:a.payload.results,heroImage:e.heroImage||a.payload.results[0],loading:!1,currentPage:a.payload.page,totalPages:a.payload.total_pages,searchTerm:""});case w:return Object(j.a)({},e,{movies:[].concat(Object(Z.a)(e.movies),Object(Z.a)(a.payload.results)),loading:!1,currentPage:a.payload.page,totalPages:a.payload.total_pages});case I:return Object(j.a)({},e,{movies:a.payload.results,loading:!1,currentPage:a.payload.page,totalPages:a.payload.total_pages,searchTerm:a.payload.searchTerm});case P:return Object(j.a)({},e,{movies:[]});case x:return Object(j.a)({},e,{loading:!0});default:return e}},movie:ae.a}),ne=(t(73),Object(i.a)(s.a)(i.d));o.a.render(r.a.createElement(l.a,{store:ne(te)},r.a.createElement(Y,null)),document.getElementById("root"))}},[[29,2,1]]]);
//# sourceMappingURL=main.7d9c668f.chunk.js.map