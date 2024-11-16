(function(){"use strict";var e={5022:function(e,t,s){var o=s(3751),i=s(641);const a={id:"app"},r={key:0},l={class:"nav-links"};function n(e,t,s,o,n,d){const c=(0,i.g2)("router-link"),u=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",a,[d.isSignInPage?(0,i.Q3)("",!0):((0,i.uX)(),(0,i.CE)("header",r,[(0,i.Lk)("nav",null,[(0,i.Lk)("div",l,[(0,i.bF)(c,{to:"/",class:"nav-link"},{default:(0,i.k6)((()=>t[1]||(t[1]=[(0,i.eW)("Home")]))),_:1}),(0,i.bF)(c,{to:"/popular",class:"nav-link"},{default:(0,i.k6)((()=>t[2]||(t[2]=[(0,i.eW)("Popular")]))),_:1}),(0,i.bF)(c,{to:"/search",class:"nav-link"},{default:(0,i.k6)((()=>t[3]||(t[3]=[(0,i.eW)("Search")]))),_:1}),(0,i.bF)(c,{to:"/wishlist",class:"nav-link"},{default:(0,i.k6)((()=>t[4]||(t[4]=[(0,i.eW)("Wishlist")]))),_:1})]),(0,i.Lk)("button",{class:"icon-button",onClick:t[0]||(t[0]=(...e)=>d.goToSignIn&&d.goToSignIn(...e))},t[5]||(t[5]=[(0,i.Lk)("i",{class:"icon-user"},null,-1)]))])])),(0,i.bF)(u)])}s(4114);var d={name:"App",computed:{isSignInPage(){return this.$route.path.startsWith("/signin")}},methods:{goToSignIn(){this.$router.push("/signin")}}},c=s(6262);const u=(0,c.A)(d,[["render",n]]);var m=u,v=s(5220),g=s(33);const p={class:"container"},h={id:"phone"},k={id:"content-wrapper"},L={class:"checkbox remember"},f=["disabled"],b={class:"checkbox remember"},w=["disabled"];function P(e,t,s,a,r,l){return(0,i.uX)(),(0,i.CE)("div",null,[t[32]||(t[32]=(0,i.Lk)("div",{class:"bg-image"},null,-1)),(0,i.Lk)("div",p,[(0,i.Lk)("div",h,[(0,i.Lk)("div",k,[(0,i.Lk)("div",{class:(0,g.C4)(["card",{hidden:!a.isLoginVisible}]),id:"login"},[(0,i.Lk)("form",{onSubmit:t[7]||(t[7]=(0,o.D$)(((...e)=>a.handleLogin&&a.handleLogin(...e)),["prevent"]))},[t[24]||(t[24]=(0,i.Lk)("h1",null,"Sign in",-1)),(0,i.Lk)("div",{class:(0,g.C4)(["input",{active:a.isEmailFocused||a.email}])},[(0,i.bo)((0,i.Lk)("input",{id:"email",type:"email","onUpdate:modelValue":t[0]||(t[0]=e=>a.email=e),onFocus:t[1]||(t[1]=e=>a.focusInput("email")),onBlur:t[2]||(t[2]=e=>a.blurInput("email"))},null,544),[[o.Jo,a.email]]),t[21]||(t[21]=(0,i.Lk)("label",{for:"email"},"Username or Email",-1))],2),(0,i.Lk)("div",{class:(0,g.C4)(["input",{active:a.isPasswordFocused||a.password}])},[(0,i.bo)((0,i.Lk)("input",{id:"password",type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>a.password=e),onFocus:t[4]||(t[4]=e=>a.focusInput("password")),onBlur:t[5]||(t[5]=e=>a.blurInput("password"))},null,544),[[o.Jo,a.password]]),t[22]||(t[22]=(0,i.Lk)("label",{for:"password"},"Password",-1))],2),(0,i.Lk)("span",L,[(0,i.bo)((0,i.Lk)("input",{type:"checkbox",id:"remember","onUpdate:modelValue":t[6]||(t[6]=e=>a.rememberMe=e)},null,512),[[o.lH,a.rememberMe]]),t[23]||(t[23]=(0,i.Lk)("label",{for:"remember",class:"read-text"},"Remember me",-1))]),(0,i.Lk)("button",{disabled:!a.isLoginFormValid},"Login",8,f)],32),(0,i.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:t[8]||(t[8]=(...e)=>a.toggleCard&&a.toggleCard(...e))},t[25]||(t[25]=[(0,i.eW)(" Don't have an account? "),(0,i.Lk)("b",null,"Sign up",-1)]))],2),(0,i.Lk)("div",{class:(0,g.C4)(["card",{hidden:a.isLoginVisible}]),id:"register"},[(0,i.Lk)("form",{onSubmit:t[19]||(t[19]=(0,o.D$)(((...e)=>a.handleRegister&&a.handleRegister(...e)),["prevent"]))},[t[30]||(t[30]=(0,i.Lk)("h1",null,"Sign up",-1)),(0,i.Lk)("div",{class:(0,g.C4)(["input",{active:a.isRegisterEmailFocused||a.registerEmail}])},[(0,i.bo)((0,i.Lk)("input",{id:"register-email",type:"email","onUpdate:modelValue":t[9]||(t[9]=e=>a.registerEmail=e),onFocus:t[10]||(t[10]=e=>a.focusInput("registerEmail")),onBlur:t[11]||(t[11]=e=>a.blurInput("registerEmail"))},null,544),[[o.Jo,a.registerEmail]]),t[26]||(t[26]=(0,i.Lk)("label",{for:"register-email"},"Email",-1))],2),(0,i.Lk)("div",{class:(0,g.C4)(["input",{active:a.isRegisterPasswordFocused||a.registerPassword}])},[(0,i.bo)((0,i.Lk)("input",{id:"register-password",type:"password","onUpdate:modelValue":t[12]||(t[12]=e=>a.registerPassword=e),onFocus:t[13]||(t[13]=e=>a.focusInput("registerPassword")),onBlur:t[14]||(t[14]=e=>a.blurInput("registerPassword"))},null,544),[[o.Jo,a.registerPassword]]),t[27]||(t[27]=(0,i.Lk)("label",{for:"register-password"},"Password",-1))],2),(0,i.Lk)("div",{class:(0,g.C4)(["input",{active:a.isConfirmPasswordFocused||a.confirmPassword}])},[(0,i.bo)((0,i.Lk)("input",{id:"confirm-password",type:"password","onUpdate:modelValue":t[15]||(t[15]=e=>a.confirmPassword=e),onFocus:t[16]||(t[16]=e=>a.focusInput("confirmPassword")),onBlur:t[17]||(t[17]=e=>a.blurInput("confirmPassword"))},null,544),[[o.Jo,a.confirmPassword]]),t[28]||(t[28]=(0,i.Lk)("label",{for:"confirm-password"},"Confirm Password",-1))],2),(0,i.Lk)("span",b,[(0,i.bo)((0,i.Lk)("input",{type:"checkbox",id:"terms","onUpdate:modelValue":t[18]||(t[18]=e=>a.acceptTerms=e)},null,512),[[o.lH,a.acceptTerms]]),t[29]||(t[29]=(0,i.Lk)("label",{for:"terms",class:"read-text"},[(0,i.eW)(" I have read "),(0,i.Lk)("b",null,"Terms and Conditions")],-1))]),(0,i.Lk)("button",{disabled:!a.isRegisterFormValid},"Register",8,w)],32),(0,i.Lk)("a",{href:"javascript:void(0)",class:"account-check",onClick:t[20]||(t[20]=(...e)=>a.toggleCard&&a.toggleCard(...e))},t[31]||(t[31]=[(0,i.eW)(" Already have an account? "),(0,i.Lk)("b",null,"Sign in",-1)]))],2)])])])])}var S=s(953),y={name:"SignIn",setup(){const e=(0,v.rd)(),t="338afe18473748636f29d4cb0fedaa87",s=(0,S.KR)(!0),o=(0,S.KR)(""),a=(0,S.KR)(""),r=(0,S.KR)(""),l=(0,S.KR)(""),n=(0,S.KR)(""),d=(0,S.KR)(!1),c=(0,S.KR)(!1),u=(0,S.KR)(!1),m=(0,S.KR)(!1),g=(0,S.KR)(!1),p=(0,S.KR)(!1),h=(0,S.KR)(!1),k=(0,i.EW)((()=>o.value&&a.value)),L=(0,i.EW)((()=>r.value&&l.value&&n.value&&l.value===n.value&&c.value)),f=()=>{s.value=!s.value},b=e=>{"email"===e&&(u.value=!0),"password"===e&&(m.value=!0),"registerEmail"===e&&(g.value=!0),"registerPassword"===e&&(p.value=!0),"confirmPassword"===e&&(h.value=!0)},w=e=>{"email"===e&&(u.value=!1),"password"===e&&(m.value=!1),"registerEmail"===e&&(g.value=!1),"registerPassword"===e&&(p.value=!1),"confirmPassword"===e&&(h.value=!1)},P=()=>{const t=localStorage.getItem(o.value);t&&t===a.value?(alert("Login successful!"),localStorage.setItem("isLoggedIn","true"),e.push("/")):alert("Invalid email or password.")},y=async()=>{if(l.value!==n.value)return void alert("Passwords do not match!");const e=await fetch(`https://api.themoviedb.org/3/authentication/token/new?api_key=${t}`),s=await e.json();s.success?(localStorage.setItem(r.value,l.value),alert("Registration successful!"),f()):alert("Registration failed.")};return{isLoginVisible:s,email:o,password:a,registerEmail:r,registerPassword:l,confirmPassword:n,rememberMe:d,acceptTerms:c,isEmailFocused:u,isPasswordFocused:m,isRegisterEmailFocused:g,isRegisterPasswordFocused:p,isConfirmPasswordFocused:h,isLoginFormValid:k,isRegisterFormValid:L,toggleCard:f,focusInput:b,blurInput:w,handleLogin:P,handleRegister:y}}};const C=(0,c.A)(y,[["render",P],["__scopeId","data-v-465aef98"]]);var _=C;const M={class:"home"},I={key:0,class:"loading"},F={key:1},E=["src","alt"];function R(e,t,s,o,a,r){const l=(0,i.g2)("swiper-slide"),n=(0,i.g2)("swiper");return(0,i.uX)(),(0,i.CE)("div",M,[t[0]||(t[0]=(0,i.Lk)("h1",null,"영화 정보 얻는 사이트",-1)),a.loading?((0,i.uX)(),(0,i.CE)("div",I,"Loading movies...")):((0,i.uX)(),(0,i.CE)("section",F,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.movieSections,(e=>((0,i.uX)(),(0,i.CE)("div",{class:"movie-section",key:e.title},[(0,i.Lk)("h2",null,(0,g.v_)(e.title),1),(0,i.bF)(n,{"slides-per-view":5,"space-between":"20",navigation:"",pagination:"",class:"movie-slider"},{default:(0,i.k6)((()=>[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(e.movies,(e=>((0,i.uX)(),(0,i.Wv)(l,{key:e.id,class:(0,g.C4)(r.getCardClass(e)),onClick:t=>r.toggleRecommendation(e)},{default:(0,i.k6)((()=>[(0,i.Lk)("img",{src:r.getPosterUrl(e.poster_path),alt:e.title,class:"movie-poster"},null,8,E),(0,i.Lk)("h3",null,(0,g.v_)(e.title),1),(0,i.Lk)("p",null,(0,g.v_)(r.truncateDescription(e.overview)),1),(0,i.Lk)("p",null,"⭐ Rating: "+(0,g.v_)(e.vote_average),1),(0,i.Lk)("p",null,"📅 Release: "+(0,g.v_)(e.release_date),1)])),_:2},1032,["class","onClick"])))),128))])),_:2},1024)])))),128))]))])}s(8992),s(4520),s(7550);var W=s(4335),O=s(8660),X={name:"HomePage",components:{Swiper:O.RC,SwiperSlide:O.qr},data(){return{movieSections:[{title:"인기 급상승 영화",movies:[]},{title:"최고 평점 영화",movies:[]},{title:"개봉 예정 영화",movies:[]},{title:"인기 영화",movies:[]}],recommendedMovies:[],loading:!0}},methods:{async fetchMovies(e,t){try{const s=await W.A.get(e,{params:{api_key:"338afe18473748636f29d4cb0fedaa87"}});this.movieSections[t].movies=s.data.results}catch(s){console.error(`Failed to fetch movies for ${this.movieSections[t].title}`,s)}},getPosterUrl(e){return`https://image.tmdb.org/t/p/w500${e}`},truncateDescription(e){return e.length>100?e.substring(0,100)+"...":e},toggleRecommendation(e){const t=this.recommendedMovies.some((t=>t.id===e.id));t?(this.recommendedMovies=this.recommendedMovies.filter((t=>t.id!==e.id)),alert(`${e.title} has been removed from your Wishlist.`)):(this.recommendedMovies.push(e),alert(`${e.title} has been added to your Wishlist.`)),this.saveToLocalStorage()},loadFromLocalStorage(){const e=localStorage.getItem("recommendedMovies");this.recommendedMovies=e?JSON.parse(e):[]},saveToLocalStorage(){localStorage.setItem("recommendedMovies",JSON.stringify(this.recommendedMovies))},getCardClass(e){const t=this.recommendedMovies.some((t=>t.id===e.id));return t?"movie-card recommended-card":"movie-card"}},async created(){const e=["https://api.themoviedb.org/3/trending/movie/day","https://api.themoviedb.org/3/movie/top_rated","https://api.themoviedb.org/3/movie/upcoming","https://api.themoviedb.org/3/movie/popular"],t=e.map(((e,t)=>this.fetchMovies(e,t)));await Promise.all(t),this.loadFromLocalStorage(),this.loading=!1}};const K=(0,c.A)(X,[["render",R],["__scopeId","data-v-4c12d855"]]);var U=K;const T={class:"popular"},V={class:"table-view"},A=["onClick"],x={class:"poster-container"},J=["src","alt"],j={class:"pagination"},$=["disabled"],N=["disabled"];function G(e,t,s,o,a,r){return(0,i.uX)(),(0,i.CE)("div",T,[t[3]||(t[3]=(0,i.Lk)("h1",null,"인기 영화",-1)),(0,i.Lk)("div",V,[(0,i.Lk)("table",null,[t[2]||(t[2]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"포스터"),(0,i.Lk)("th",null,"제목"),(0,i.Lk)("th",null,"개봉일"),(0,i.Lk)("th",null,"평점")])],-1)),(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.currentPageMovies,(e=>((0,i.uX)(),(0,i.CE)("tr",{key:e.id,onClick:t=>r.toggleWishlist(e),class:(0,g.C4)({added:r.isInWishlist(e)})},[(0,i.Lk)("td",null,[(0,i.Lk)("div",x,[(0,i.Lk)("img",{src:r.getPosterUrl(e.poster_path),alt:e.title},null,8,J)])]),(0,i.Lk)("td",null,(0,g.v_)(e.title),1),(0,i.Lk)("td",null,(0,g.v_)(e.release_date),1),(0,i.Lk)("td",null,(0,g.v_)(e.vote_average),1)],10,A)))),128))])]),(0,i.Lk)("div",j,[(0,i.Lk)("button",{disabled:1===a.currentPage,onClick:t[0]||(t[0]=(...t)=>e.prevPage&&e.prevPage(...t))}," Previous ",8,$),(0,i.Lk)("span",null,"Page "+(0,g.v_)(a.currentPage),1),(0,i.Lk)("button",{disabled:a.currentPage===a.totalPages,onClick:t[1]||(t[1]=(...t)=>e.nextPage&&e.nextPage(...t))}," Next ",8,N)])])])}var H={name:"PopularMovies",data(){return{movies:[],currentPage:1,totalPages:0,moviesPerPage:10,recommendedMovies:[]}},computed:{currentPageMovies(){const e=(this.currentPage-1)*this.moviesPerPage,t=e+this.moviesPerPage;return this.movies.slice(e,t)}},methods:{async fetchMovies(){const e=await W.A.get("https://api.themoviedb.org/3/movie/popular",{params:{api_key:"338afe18473748636f29d4cb0fedaa87"}});this.movies=e.data.results,this.totalPages=Math.ceil(this.movies.length/this.moviesPerPage)},getPosterUrl(e){return`https://image.tmdb.org/t/p/w500${e}`},isInWishlist(e){return this.recommendedMovies.some((t=>t.id===e.id))},toggleWishlist(e){const t=this.isInWishlist(e);t?this.recommendedMovies=this.recommendedMovies.filter((t=>t.id!==e.id)):this.recommendedMovies.push(e),this.saveToLocalStorage()},loadFromLocalStorage(){const e=localStorage.getItem("recommendedMovies");this.recommendedMovies=e?JSON.parse(e):[]},saveToLocalStorage(){localStorage.setItem("recommendedMovies",JSON.stringify(this.recommendedMovies))}},async created(){await this.fetchMovies(),this.loadFromLocalStorage()}};const D=(0,c.A)(H,[["render",G],["__scopeId","data-v-55304be2"]]);var B=D;const q={class:"search-page"},Q={class:"filters"},z={class:"filter-group"},Y=["value"],Z={class:"filter-group"},ee=["value"],te={class:"filter-group"},se={class:"movie-table"},oe=["onClick"],ie=["src","alt"];function ae(e,t,s,a,r,l){return(0,i.uX)(),(0,i.CE)("div",q,[t[11]||(t[11]=(0,i.Lk)("h1",null,"영화 찾기",-1)),(0,i.Lk)("div",Q,[(0,i.Lk)("div",z,[t[5]||(t[5]=(0,i.Lk)("label",{for:"genre"},"장르",-1)),(0,i.bo)((0,i.Lk)("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedGenre=e),id:"genre"},[t[4]||(t[4]=(0,i.Lk)("option",{value:""},"All",-1)),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.genres,(e=>((0,i.uX)(),(0,i.CE)("option",{key:e.id,value:e.id},(0,g.v_)(e.name),9,Y)))),128))],512),[[o.u1,r.selectedGenre]])]),(0,i.Lk)("div",Z,[t[7]||(t[7]=(0,i.Lk)("label",{for:"rating"},"평점",-1)),(0,i.bo)((0,i.Lk)("select",{"onUpdate:modelValue":t[1]||(t[1]=e=>r.selectedRating=e),id:"rating"},[t[6]||(t[6]=(0,i.Lk)("option",{value:""},"All",-1)),((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(r.ratingOptions,(e=>((0,i.uX)(),(0,i.CE)("option",{key:e,value:e},(0,g.v_)(e)+"+ ",9,ee)))),128))],512),[[o.u1,r.selectedRating]])]),(0,i.Lk)("div",te,[t[9]||(t[9]=(0,i.Lk)("label",{for:"sort"},"정렬",-1)),(0,i.bo)((0,i.Lk)("select",{"onUpdate:modelValue":t[2]||(t[2]=e=>r.selectedSort=e),id:"sort"},t[8]||(t[8]=[(0,i.Fv)('<option value="popularity.desc" data-v-4f7a90ce>Popularity (High to Low)</option><option value="popularity.asc" data-v-4f7a90ce>Popularity (Low to High)</option><option value="release_date.desc" data-v-4f7a90ce>Release Date (New to Old)</option><option value="release_date.asc" data-v-4f7a90ce>Release Date (Old to New)</option><option value="vote_average.desc" data-v-4f7a90ce>Rating (High to Low)</option><option value="vote_average.asc" data-v-4f7a90ce>Rating (Low to High)</option>',6)]),512),[[o.u1,r.selectedSort]])]),(0,i.Lk)("button",{class:"reset-btn",onClick:t[3]||(t[3]=(...e)=>l.resetFilters&&l.resetFilters(...e))},"초기화")]),(0,i.Lk)("div",se,[(0,i.Lk)("table",null,[t[10]||(t[10]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"포스터"),(0,i.Lk)("th",null,"제목"),(0,i.Lk)("th",null,"장르"),(0,i.Lk)("th",null,"평점"),(0,i.Lk)("th",null,"개봉일")])],-1)),(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(l.filteredMovies,(e=>((0,i.uX)(),(0,i.CE)("tr",{key:e.id,onClick:t=>l.toggleWishlist(e),class:(0,g.C4)({added:l.isInWishlist(e)})},[(0,i.Lk)("td",null,[(0,i.Lk)("img",{src:l.getPosterUrl(e.poster_path),alt:e.title},null,8,ie)]),(0,i.Lk)("td",null,(0,g.v_)(e.title),1),(0,i.Lk)("td",null,(0,g.v_)(l.getMovieGenres(e.genre_ids)),1),(0,i.Lk)("td",null,(0,g.v_)(e.vote_average),1),(0,i.Lk)("td",null,(0,g.v_)(e.release_date),1)],10,oe)))),128))])])])])}s(2577),s(1454);var re={name:"SearchMovies",data(){return{movies:[],genres:[],recommendedMovies:[],selectedGenre:"",selectedRating:"",selectedSort:"popularity.desc",ratingOptions:[1,2,3,4,5,6,7,8,9,10]}},computed:{filteredMovies(){let e=[...this.movies];return this.selectedGenre&&(e=e.filter((e=>e.genre_ids.includes(parseInt(this.selectedGenre))))),this.selectedRating&&(e=e.filter((e=>e.vote_average>=this.selectedRating))),e.sort(((e,t)=>{const s=this.selectedSort.split(".")[0],o=this.selectedSort.includes(".desc")?-1:1;return(e[s]-t[s])*o})),e}},methods:{async fetchMovies(){const e=await W.A.get("https://api.themoviedb.org/3/discover/movie",{params:{api_key:"338afe18473748636f29d4cb0fedaa87"}});this.movies=e.data.results},async fetchGenres(){const e=await W.A.get("https://api.themoviedb.org/3/genre/movie/list",{params:{api_key:"338afe18473748636f29d4cb0fedaa87"}});this.genres=e.data.genres},getPosterUrl(e){return`https://image.tmdb.org/t/p/w500${e}`},getMovieGenres(e){return e.map((e=>this.genres.find((t=>t.id===e))?.name||"Unknown")).join(", ")},isInWishlist(e){return this.recommendedMovies.some((t=>t.id===e.id))},toggleWishlist(e){const t=this.isInWishlist(e);t?this.recommendedMovies=this.recommendedMovies.filter((t=>t.id!==e.id)):this.recommendedMovies.push(e),this.saveToLocalStorage()},loadFromLocalStorage(){const e=localStorage.getItem("recommendedMovies");this.recommendedMovies=e?JSON.parse(e):[]},saveToLocalStorage(){localStorage.setItem("recommendedMovies",JSON.stringify(this.recommendedMovies))},resetFilters(){this.selectedGenre="",this.selectedRating="",this.selectedSort="popularity.desc"}},async created(){await Promise.all([this.fetchMovies(),this.fetchGenres()]),this.loadFromLocalStorage()}};const le=(0,c.A)(re,[["render",ae],["__scopeId","data-v-4f7a90ce"]]);var ne=le;const de={class:"wishlist"},ce={key:0,class:"wishlist-table"},ue={class:"poster-container"},me=["src","alt"],ve={class:"movie-title"},ge={class:"movie-rating"},pe={class:"movie-release"},he=["onClick"],ke={key:1,class:"empty-message"};function Le(e,t,s,o,a,r){return(0,i.uX)(),(0,i.CE)("div",de,[t[1]||(t[1]=(0,i.Lk)("h1",null,"즐겨찾기",-1)),a.recommendedMovies.length?((0,i.uX)(),(0,i.CE)("table",ce,[t[0]||(t[0]=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"#"),(0,i.Lk)("th",null,"포스터"),(0,i.Lk)("th",null,"제목"),(0,i.Lk)("th",null,"평점"),(0,i.Lk)("th",null,"개봉일"),(0,i.Lk)("th",null,"상태")])],-1)),(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(a.recommendedMovies,((e,t)=>((0,i.uX)(),(0,i.CE)("tr",{key:e.id,class:"wishlist-row"},[(0,i.Lk)("td",null,(0,g.v_)(t+1),1),(0,i.Lk)("td",null,[(0,i.Lk)("div",ue,[(0,i.Lk)("img",{src:r.getPosterUrl(e.poster_path),alt:e.title,class:"movie-poster"},null,8,me)])]),(0,i.Lk)("td",ve,(0,g.v_)(e.title),1),(0,i.Lk)("td",ge,"⭐ "+(0,g.v_)(e.vote_average),1),(0,i.Lk)("td",pe,(0,g.v_)(e.release_date),1),(0,i.Lk)("td",null,[(0,i.Lk)("button",{onClick:t=>r.removeFromWishlist(e),class:"remove-button"}," 제거 ",8,he)])])))),128))])])):((0,i.uX)(),(0,i.CE)("div",ke,"즐겨찾기 한 영화가 없습니다."))])}var fe={name:"MovieWishlist",data(){return{recommendedMovies:[]}},methods:{getPosterUrl(e){return`https://image.tmdb.org/t/p/w500${e}`},removeFromWishlist(e){this.recommendedMovies=this.recommendedMovies.filter((t=>t.id!==e.id)),this.saveToLocalStorage()},loadFromLocalStorage(){const e=localStorage.getItem("recommendedMovies");e&&(this.recommendedMovies=JSON.parse(e))},saveToLocalStorage(){localStorage.setItem("recommendedMovies",JSON.stringify(this.recommendedMovies))}},created(){this.loadFromLocalStorage()}};const be=(0,c.A)(fe,[["render",Le],["__scopeId","data-v-4aebf4fb"]]);var we=be;const Pe=[{path:"/",name:"Home",component:U},{path:"/signin",name:"SignIn",component:_},{path:"/popular",name:"Popular",component:B},{path:"/search",name:"Search",component:ne},{path:"/wishlist",name:"Wishlist",component:we}],Se=(0,v.aE)({history:(0,v.LA)("/WSD2/"),routes:Pe});var ye=Se,Ce=s(5246);s(7917);const _e=(0,o.Ef)(m);_e.use(ye),_e.use(Ce.Ay,{position:"top-right",timeout:3e3}),_e.mount("#app")}},t={};function s(o){var i=t[o];if(void 0!==i)return i.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,s),a.exports}s.m=e,function(){var e=[];s.O=function(t,o,i,a){if(!o){var r=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],a=e[c][2];for(var l=!0,n=0;n<o.length;n++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](o[n])}))?o.splice(n--,1):(l=!1,a<r&&(r=a));if(l){e.splice(c--,1);var d=i();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[o,i,a]}}(),function(){s.d=function(e,t){for(var o in t)s.o(t,o)&&!s.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};s.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,a,r=o[0],l=o[1],n=o[2],d=0;if(r.some((function(t){return 0!==e[t]}))){for(i in l)s.o(l,i)&&(s.m[i]=l[i]);if(n)var c=n(s)}for(t&&t(o);d<r.length;d++)a=r[d],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(c)},o=self["webpackChunkassign2"]=self["webpackChunkassign2"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=s.O(void 0,[504],(function(){return s(5022)}));o=s.O(o)})();
//# sourceMappingURL=app.bd20c7e8.js.map