(function(){"use strict";var e={8064:function(e,t,n){var s=n(5130),a=n(6768),o=n(4232);const i={id:"app",ref:"chatContainer"},r={class:"App",ref:"chatContent"},l=(0,a.Lk)("div",{class:"menu-line"},null,-1),u=(0,a.Lk)("div",{class:"menu-line"},null,-1),p=(0,a.Lk)("div",{class:"menu-line"},null,-1),c=[l,u,p],d={key:0,class:"expanded-content"},h={class:"profile-section"},g={class:"grade-dropdown"},m=["value"],f={key:0,class:"profile-menu"},y={key:0},v=(0,a.Lk)("h2",null,"Login",-1),k=(0,a.Lk)("button",{type:"submit"},"Login",-1),L={key:1},C=(0,a.Lk)("h2",null,"Sign Up",-1),w=(0,a.Lk)("button",{type:"submit"},"Sign Up",-1),E={key:2},O=(0,a.Lk)("h2",null,"Profile Information",-1),D={class:"text-area",ref:"chatMessages"},b={class:"chat-input"},M=["disabled"];function A(e,t,n,l,u,p){return(0,a.uX)(),(0,a.CE)("div",i,[(0,a.Lk)("div",r,[(0,a.Lk)("div",{class:(0,o.C4)(["menu-bar",{expanded:u.menuOpen}])},[(0,a.Lk)("div",{class:"menu-button",onClick:t[0]||(t[0]=(...e)=>p.toggleMenu&&p.toggleMenu(...e))},c),u.menuOpen?((0,a.uX)(),(0,a.CE)("div",d,"Made by Wilson Li :)")):(0,a.Q3)("",!0)],2),(0,a.Lk)("div",h,[(0,a.Lk)("select",g,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(u.grades,(e=>((0,a.uX)(),(0,a.CE)("option",{key:e,value:e},(0,o.v_)(e)+"th Grade",9,m)))),128))])]),(0,a.Lk)("div",{class:"profile-button",onClick:t[1]||(t[1]=(...e)=>p.toggleProfileMenu&&p.toggleProfileMenu(...e))}),u.profileMenuOpen?((0,a.uX)(),(0,a.CE)("div",f,["login"===u.currentForm?((0,a.uX)(),(0,a.CE)("div",y,[v,(0,a.Lk)("form",{onSubmit:t[5]||(t[5]=(0,s.D$)(((...e)=>p.handleLogin&&p.handleLogin(...e)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[2]||(t[2]=e=>u.loginData.email=e),placeholder:"Email",required:""},null,512),[[s.Jo,u.loginData.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=e=>u.loginData.password=e),placeholder:"Password",required:""},null,512),[[s.Jo,u.loginData.password]]),k,(0,a.Lk)("p",{onClick:t[4]||(t[4]=e=>p.switchForm("signup"))},"Don't have an account? Sign up")],32)])):(0,a.Q3)("",!0),"signup"===u.currentForm?((0,a.uX)(),(0,a.CE)("div",L,[C,(0,a.Lk)("form",{onSubmit:t[10]||(t[10]=(0,s.D$)(((...e)=>p.handleSignup&&p.handleSignup(...e)),["prevent"]))},[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":t[6]||(t[6]=e=>u.signupData.fullName=e),placeholder:"Full Name",required:""},null,512),[[s.Jo,u.signupData.fullName]]),(0,a.bo)((0,a.Lk)("input",{type:"email","onUpdate:modelValue":t[7]||(t[7]=e=>u.signupData.email=e),placeholder:"Email",required:""},null,512),[[s.Jo,u.signupData.email]]),(0,a.bo)((0,a.Lk)("input",{type:"password","onUpdate:modelValue":t[8]||(t[8]=e=>u.signupData.password=e),placeholder:"Password",required:""},null,512),[[s.Jo,u.signupData.password]]),w,(0,a.Lk)("p",{onClick:t[9]||(t[9]=e=>p.switchForm("login"))},"Already have an account? Login")],32)])):(0,a.Q3)("",!0),"profile"===u.currentForm?((0,a.uX)(),(0,a.CE)("div",E,[O,(0,a.Lk)("p",null,"Full Name: "+(0,o.v_)(u.profileData.fullName),1),(0,a.Lk)("p",null,"Email: "+(0,o.v_)(u.profileData.email),1),(0,a.Lk)("button",{onClick:t[11]||(t[11]=(...e)=>p.handleLogout&&p.handleLogout(...e))},"Logout")])):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0),(0,a.Lk)("div",D,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(u.responses,(e=>((0,a.uX)(),(0,a.CE)("div",{key:e.id,class:(0,o.C4)(p.isUserMessage(e.text)?"user-message":"ai-message")},[(0,a.Lk)("p",null,(0,o.v_)(e.text),1)],2)))),128))],512)],512),(0,a.Lk)("div",b,[(0,a.bo)((0,a.Lk)("input",{ref:"inputField",class:"text-box",type:"text","onUpdate:modelValue":t[12]||(t[12]=e=>u.inputValue=e),onKeyup:t[13]||(t[13]=(0,s.jR)(((...e)=>p.sendMessage&&p.sendMessage(...e)),["enter"])),disabled:u.sendingMessage,placeholder:"Type your message here..."},null,40,M),[[s.Jo,u.inputValue]])])],512)}n(4114);var _=n(114),x=n(6400),N=n(7844),S=n(8704),F=n(6288);const T={apiKey:"AIzaSyCDg3rEFIVLueBFCm3zDtuZQnM1B0_kLMo",authDomain:"eeee-e75c9.firebaseapp.com",projectId:"eeee-e75c9",storageBucket:"eeee-e75c9.appspot.com",messagingSenderId:"589198895448",appId:"1:589198895448:web:7e45f45ad7bfefa1fc9d2d",measurementId:"G-J0X59J3JNX"},I=(0,x.Wp)(T),V=(0,_.xI)(I),X=(0,N.c7)(I);var B={name:"App",data(){return{menuOpen:!1,profileMenuOpen:!1,inputValue:"",responses:[],sendingMessage:!1,genAI:null,model:null,grades:[5,6,7,8,9,10,11,12],generationConfig:{temperature:1,topP:.95,topK:64,maxOutputTokens:8192},safetySettings:[{category:F.DE.HARM_CATEGORY_HARASSMENT,threshold:F.vk.BLOCK_LOW_AND_ABOVE},{category:F.DE.HARM_CATEGORY_HATE_SPEECH,threshold:F.vk.BLOCK_LOW_AND_ABOVE},{category:F.DE.HARM_CATEGORY_SEXUALLY_EXPLICIT,threshold:F.vk.BLOCK_LOW_AND_ABOVE},{category:F.DE.HARM_CATEGORY_DANGEROUS_CONTENT,threshold:F.vk.BLOCK_LOW_AND_ABOVE}],currentForm:"login",loginData:{email:"",password:""},signupData:{fullName:"",email:"",password:""},profileData:{fullName:"",email:""},errorMessage:""}},methods:{toggleMenu(){this.menuOpen=!this.menuOpen},toggleProfileMenu(){this.profileMenuOpen=!this.profileMenuOpen},switchForm(e){this.currentForm=e,this.errorMessage=""},async handleSignup(){const{fullName:e,email:t,password:n}=this.signupData;try{const s=await(0,_.eJ)(V,t,n),a=s.user;await(0,_.r7)(a,{displayName:e}),this.profileData={fullName:a.displayName,email:a.email},this.switchForm("profile")}catch(s){"auth/email-already-in-use"===s.code?this.errorMessage="The email address is already in use.":this.errorMessage="Signup error. Please try again."}},async handleLogin(){const{email:e,password:t}=this.loginData;try{const n=await(0,_.x9)(V,e,t),s=n.user;this.profileData={fullName:s.displayName,email:s.email},this.switchForm("profile"),this.loadChatHistory(s.uid)}catch(n){this.errorMessage="Login error. Please try again."}},async handleLogout(){try{await(0,_.CI)(V),this.profileData={fullName:"",email:""},this.switchForm("login")}catch(e){console.error("Logout error:",e)}},async sendMessage(){if(""===this.inputValue.trim())return;this.sendingMessage=!0;const e=this.inputValue,t={id:Date.now(),text:`You: ${e}`};this.responses.push(t),this.inputValue="";try{const t=this.model.startChat({generationConfig:this.generationConfig,safetySettings:this.safetySettings,history:this.responses.map((e=>({role:"user",parts:[{text:e.text.slice(5)}]})))}),n=await t.sendMessage(e),s={id:Date.now(),text:`Gemini: ${await n.response.text()}`};this.responses.push(s)}catch(n){console.error("Error:",n)}finally{this.sendingMessage=!1,this.$nextTick((()=>{this.$refs.inputField.focus(),this.scrollToBottom()}))}this.saveChatHistory()},scrollToBottom(){this.$nextTick((()=>{const e=this.$refs.chatContainer;e.scrollTop=e.scrollHeight}))},isUserMessage(e){return e.startsWith("You:")},async saveChatHistory(){const e=V.currentUser;if(!e)return;const t=JSON.stringify(this.responses);S.A.set("chatHistory",t);const n=(0,N.KR)(X,`chats/${e.uid}.json`);try{await(0,N.ls)(n,t)}catch(s){console.error("Error saving chat history:",s)}},async loadChatHistory(e){const t=S.A.get("chatHistory");if(t)return void(this.responses=JSON.parse(t));const n=(0,N.KR)(X,`chats/${e}.json`);try{const e=await(0,N.qk)(n),t=await fetch(e),s=await t.json();this.responses=s}catch(s){console.error("Error loading chat history:",s)}}},async mounted(){const e="AIzaSyBQhziKC8Xmq59IX48qJnx4E7m7oxG9lJs";this.genAI=new F.ij(e),this.model=this.genAI.getGenerativeModel({model:"gemini-1.5-flash",systemInstruction:"",history:this.responses.map((e=>({role:"user",parts:[{text:e.text.slice(5)}]})))}),this.scrollToBottom()}},j=n(1241);const H=(0,j.A)(B,[["render",A]]);var J=H,P=n(1387);const R=[{path:"/",component:J}],U=(0,P.aE)({history:(0,P.LA)(),routes:R});(0,s.Ef)(J).use(U).mount("#app")}},t={};function n(s){var a=t[s];if(void 0!==a)return a.exports;var o=t[s]={exports:{}};return e[s].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,s,a,o){if(!s){var i=1/0;for(p=0;p<e.length;p++){s=e[p][0],a=e[p][1],o=e[p][2];for(var r=!0,l=0;l<s.length;l++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](s[l])}))?s.splice(l--,1):(r=!1,o<i&&(i=o));if(r){e.splice(p--,1);var u=a();void 0!==u&&(t=u)}}return t}o=o||0;for(var p=e.length;p>0&&e[p-1][2]>o;p--)e[p]=e[p-1];e[p]=[s,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,o,i=s[0],r=s[1],l=s[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var p=l(n)}for(t&&t(s);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(p)},s=self["webpackChunkai_project"]=self["webpackChunkai_project"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=n.O(void 0,[504],(function(){return n(8064)}));s=n.O(s)})();
//# sourceMappingURL=app.d042befb.js.map