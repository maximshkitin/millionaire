(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8828:function(e,n,t){Promise.resolve().then(t.bind(t,8287)),Promise.resolve().then(t.bind(t,3873)),Promise.resolve().then(t.bind(t,8753)),Promise.resolve().then(t.bind(t,3928))},8287:function(e,n,t){"use strict";t.r(n),t.d(n,{Quiz:function(){return p}});var i=t(7437),r=t(2265),l=t(3639);let s=(e,n)=>{let t=null==e?void 0:e.map(e=>e.id);if(console.log(t),t.length!==n.length)return!1;let i=t.slice().sort(),r=n.slice().sort();return i.every((e,n)=>e===r[n])};var u=[{level:1,score:500,question:{id:"12345",type:"singular",value:"What is the largest mammal on Earth?",options:[{id:"54321",value:"Elephant"},{id:"67890",value:"Blue Whale"},{id:"98765",value:"Giraffe"},{id:"43210",value:"Lion"}],correctAnswer:["67890"]}},{level:2,score:1e3,question:{id:"23456",type:"singular",value:"Which planet is known as the Red Planet?",options:[{id:"54321",value:"Venus"},{id:"67890",value:"Mars"},{id:"98765",value:"Jupiter"},{id:"43210",value:"Saturn"}],correctAnswer:["67890"]}},{level:3,score:2e3,question:{id:"56789",type:"multiselect",value:"Which of the following is a primary color?",options:[{id:"54321",value:"Green"},{id:"67890",value:"Blue"},{id:"98765",value:"Yellow"},{id:"43210",value:"Purple"}],correctAnswer:["67890","54321"]}},{level:4,score:4e3,question:{id:"34567",type:"singular",value:"Which of the following programming languages is not statically typed?",options:[{id:"54321",value:"Java"},{id:"67890",value:"C++"},{id:"98765",value:"Python"},{id:"43210",value:"C#"}],correctAnswer:["98765"]}},{level:5,score:8e3,question:{id:"45678",type:"singular",value:"Which famous scientist developed the theory of general relativity?",options:[{id:"54321",value:"Isaac Newton"},{id:"67890",value:"Galileo Galilei"},{id:"98765",value:"Albert Einstein"},{id:"43210",value:"Stephen Hawking"}],correctAnswer:["98765"]}}];let o=()=>new Promise(e=>{setTimeout(()=>{e(u)},4e3)}),c=async()=>{try{return await o()}catch(e){throw console.error("Error fetching data:",e),e}};var a=t(6491);let d={id:"",type:a.A.default,value:"",options:[],correctAnswer:[]};var v=t(3928);t(1740),t(717),t(6843);var h=t(1436);let f=e=>{let{className:n,handleClick:t,buttonText:r,children:l}=e;return(0,i.jsxs)("div",{className:n,children:[(0,i.jsx)(h.mm,{}),l,(0,i.jsx)(h.Ub,{handleClick:t,children:r})]})},p=()=>{var e,n;let t=(0,l.I0)(),[u,o]=(0,r.useState)([]);(0,r.useEffect)(()=>{let e=async()=>{let e=await c();e&&o(e)};e()},[]);let{currentLevel:a,currentScore:p,isOngoing:m}=(0,l.v9)(e=>e.quiz),g=null!==(n=null==u?void 0:null===(e=u[a-1])||void 0===e?void 0:e.question)&&void 0!==n?n:d,{options:w,correctAnswer:x,type:j,value:y}=g,b=(e,n)=>s(e,n);return(0,i.jsxs)("div",{className:"content-wrapper",children:[null===m&&(0,i.jsx)(f,{className:"kek",buttonText:"Start!",handleClick:()=>{t((0,l.ve)())},children:(0,i.jsx)(h._b,{className:"QuizTitle",children:"Who wants to be?"})}),m&&(0,i.jsx)(v.QuizView,{className:"QuizView",type:j,answerOptions:w,currentScore:p,scoreList:null==u?void 0:u.map(e=>e.score),handleSubmitAnswer:e=>{if(t((0,l.Oy)({question:g,answer:e})),b(e,x)){var n;(null===(n=u[a])||void 0===n?void 0:n.score)?(t((0,l.EE)()),t((0,l.Vs)(u[a-1].score))):t((0,l.e2)())}else t((0,l.e2)())},children:(0,i.jsx)(h._b,{className:"QuizQuestion",children:y})}),null!==m&&!m&&(0,i.jsxs)(f,{className:"kek",buttonText:"Try Again",handleClick:()=>{t((0,l.MW)())},children:[(0,i.jsx)(h._b,{className:"QuizSubtitle",children:"Total score:"}),(0,i.jsxs)(h._b,{className:"QuizTitle",children:[p," ","earned."]})]})]})}},3873:function(e,n,t){"use strict";t.r(n),t.d(n,{QuizOptions:function(){return l}});var i=t(7437);t(2265);let r=()=>Array.from({length:26},(e,n)=>String.fromCharCode(65+n)),l=e=>{let{options:n,handleClick:t}=e;return(0,i.jsx)(i.Fragment,{children:n.map((e,n)=>(0,i.jsx)("div",{children:(0,i.jsxs)("div",{id:e.id,onClick:()=>t([e]),children:[(0,i.jsx)("span",{className:"QuizOptionChar",children:r()[n]}),e.value]})},e.id))})}},8753:function(e,n,t){"use strict";t.r(n),t.d(n,{QuizOptionsMultiselect:function(){return u}});var i=t(7437),r=t(2265),l=t(3873),s=t(1436);let u=e=>{let{options:n,handleSubmitAnswer:t}=e,[u,o]=(0,r.useState)([]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.QuizOptions,{options:n,handleClick:e=>{let n=[...u],t=n.findIndex(n=>n.id===e[0].id);-1!==t?n.splice(t,1):n.push(...e),o(n)}}),(0,i.jsx)(s.Ub,{handleClick:()=>t(u),children:"Answer"})]})}},717:function(e,n,t){"use strict";t.d(n,{C:function(){return i.QuizOptions},f:function(){return r.QuizOptionsMultiselect}});var i=t(3873),r=t(8753)},1740:function(e,n,t){"use strict";t.d(n,{n:function(){return r}});var i=t(7437);function r(e){let{scoreList:n,currentScore:t}=e;return(0,i.jsxs)("div",{children:["d",null==n?void 0:n.join(" "),", ",t," "]})}t(2265)},3928:function(e,n,t){"use strict";t.r(n),t.d(n,{QuizView:function(){return u}});var i=t(7437);t(2265);var r=t(6491),l=t(1740),s=t(717);let u=e=>{let{className:n,type:t,answerOptions:u,scoreList:o,currentScore:c,handleSubmitAnswer:a,children:d}=e;return(0,i.jsxs)("div",{className:n,children:[d,t===r.A.multiselect?(0,i.jsx)(s.f,{options:u,handleSubmitAnswer:a}):(0,i.jsx)(s.C,{options:u,handleClick:a}),(0,i.jsx)("div",{className:"QuizScore-wrapper",children:(0,i.jsx)(l.n,{scoreList:o,currentScore:c})})]})}},6843:function(e,n,t){"use strict";t.d(n,{m:function(){return r}});var i=t(7437);function r(){return(0,i.jsx)("div",{children:"icon"})}t(2265)},1436:function(e,n,t){"use strict";t.d(n,{Ub:function(){return l},mm:function(){return i.m},_b:function(){return s}});var i=t(6843),r=t(7437);function l(e){let{handleClick:n,className:t="",children:i}=e;return(0,r.jsx)("div",{className:"button-wrapper",children:(0,r.jsx)("button",{className:t,onClick:n,children:i})})}function s(e){let{className:n,children:t}=e;return(0,r.jsx)("div",{className:n,children:t})}t(2265)},6491:function(e,n,t){"use strict";t.d(n,{A:function(){return i}});let i={default:"singular",multiselect:"multiselect"}},3639:function(e,n,t){"use strict";t.d(n,{e2:function(){return u},EE:function(){return o},Oy:function(){return s},tO:function(){return h},MW:function(){return d},ve:function(){return a},Vs:function(){return c},I0:function(){return f},v9:function(){return p}});var i=t(64),r=t(3198);let l=(0,i.oM)({name:"quiz",initialState:{currentLevel:1,currentScore:0,answerLogs:[],isOngoing:null},reducers:{startQuiz(e){e.isOngoing=!0},resetQuiz(e){e.currentLevel=1,e.currentScore=0,e.answerLogs=[],e.isOngoing=!0},gameOver(e){e.isOngoing=!1},incrementLevel(e){e.currentLevel+=1},updateScore(e,n){e.currentScore=n.payload},logAnswer(e,n){e.answerLogs=[...e.answerLogs,n.payload]}}}),{logAnswer:s,gameOver:u,incrementLevel:o,updateScore:c,startQuiz:a,resetQuiz:d}=l.actions,v={quiz:l.reducer},h=(0,i.xC)({reducer:v}),f=()=>(0,r.I0)(),p=r.v9}},function(e){e.O(0,[713,971,472,744],function(){return e(e.s=8828)}),_N_E=e.O()}]);