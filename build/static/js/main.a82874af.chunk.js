(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(3),a=n.n(r),o=(n(15),n(4)),s=n(5),l=n(6),d=n(10),u=n(9),j=n(7),b=n.n(j),h=n(0);function O(e){var t=e.children;return Object(h.jsx)("div",{className:b.a.container,children:t})}var f=function(e){var t=e.good,n=e.neutral,c=e.bad,i=e.total,r=e.positivePercentage;return Object(h.jsxs)("ul",{children:[Object(h.jsxs)("li",{children:["Good: ",t]}),Object(h.jsxs)("li",{children:["Neutral: ",n]}),Object(h.jsxs)("li",{children:["Bad: ",c]}),Object(h.jsxs)("li",{children:["Total: ",i]}),Object(h.jsxs)("li",{children:["Positive feedback: ",r,"%"]})]})},x=n(8),v=n.n(x),k=function(e){var t=e.options,n=e.handleClick;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{className:v.a.btn,type:"button",onClick:function(){return n(e)},children:e},e)}))})};function p(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[t&&Object(h.jsx)("h2",{children:t}),n]})}function g(e){var t=e.title;return Object(h.jsx)("section",{children:t&&Object(h.jsx)("h3",{children:t})})}var P=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,i=new Array(c),r=0;r<c;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={good:0,neutral:0,bad:0},e.handleClick=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)})),console.log("\u041a\u043b\u0438\u043a\u043d\u0443\u043b\u0438 \u043d\u0430 \u043a\u043d\u043e\u043f\u043a\u0443")},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.round(e.state.good/e.countTotalFeedback()*100)},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,i=Object.keys(this.state),r=this.handleClick,a=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage();return Object(h.jsxs)(O,{children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(k,{options:i,handleClick:r})}),Object(h.jsx)("h2",{title:"Statistics",children:" "}),Object(h.jsx)(p,{title:"Statistics",children:a>0?Object(h.jsx)(f,{good:t,neutral:n,bad:c,total:a,positivePercentage:o}):Object(h.jsx)(g,{title:"No feedback given"})})]})}}]),n}(c.Component),m=P;a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},7:function(e,t,n){e.exports={container:"Container_container__1sJYh"}},8:function(e,t,n){e.exports={btn:"FeedbackOptions_btn__XaKHj"}}},[[17,1,2]]]);
//# sourceMappingURL=main.a82874af.chunk.js.map