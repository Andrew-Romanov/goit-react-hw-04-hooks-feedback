(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={Statistics__StatsList:"Statistics_Statistics__StatsList__26mxS",Statistics__StatsListItem:"Statistics_Statistics__StatsListItem__13DU8",Statistics__StatsListItemLabel:"Statistics_Statistics__StatsListItemLabel__2WImI",Statistics__StatsListItemPercentage:"Statistics_Statistics__StatsListItemPercentage__38D6d"}},,,,function(t,e,a){t.exports={Section:"Section_Section__2IWK3",Section__Title:"Section_Section__Title__3D-0j"}},,function(t,e,a){t.exports={MainContainer:"MainContainer_MainContainer__1piRu"}},function(t,e,a){t.exports={PageHeader:"PageHeader_PageHeader__flQwl"}},function(t,e,a){t.exports={Button:"Button_Button__aim_h"}},function(t,e,a){t.exports={FeedbackOptions__Title:"FeedbackOptions_FeedbackOptions__Title__3IRhv",FeedbackOptions__ButtonList:"FeedbackOptions_FeedbackOptions__ButtonList__24NRo"}},function(t,e,a){t.exports={Notification:"Notification_Notification__3SdW9"}},,,,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var i=a(1),n=a.n(i),s=a(7),c=a.n(s),o=(a(18),a(19),a(3)),r=a(5),l=a(13),u=a(8),_=a.n(u),d=a(0),b=function(t){var e=t.children;return Object(d.jsx)("div",{className:_.a.MainContainer,children:e})};b.defaultProps={children:Object(d.jsx)(d.Fragment,{})};var j=b,h=a(9),f=a.n(h),S=function(t){var e=t.title;return Object(d.jsx)("div",{className:f.a.PageHeader,children:e})};S.defaultProps={title:"Where is your title?"};var O=S,p=a(6),m=a.n(p),x=function(t){var e=t.title,a=t.children;return Object(d.jsxs)("section",{className:m.a.Section,children:[Object(d.jsx)("h2",{className:m.a.Section__Title,children:e}),a]})};x.defaultProps={title:"Where is your title?",children:Object(d.jsx)(d.Fragment,{})};var k=x,g=a(10),v=a.n(g),L=function(t){var e=t.type,a=t.width,i=t.label,n=t.whenClicked;return Object(d.jsx)("button",{className:v.a.Button,type:e,style:{width:a},onClick:function(){return n(i)},children:i})};L.defaultProps={type:"button",label:"Button",width:"80px",whenClicked:function(){alert("Button clicked")}};var N=L,F=a(11),I=a.n(F),P=function(t){var e=t.options,a=t.onLeaveFeedback;return Object(d.jsx)("ul",{className:I.a.FeedbackOptions__ButtonList,children:e.map((function(t){return Object(d.jsx)("li",{children:Object(d.jsx)(N,{type:"button",label:t,width:"80px",whenClicked:a})},t)}))})},w=function(){return"rgba(".concat(Math.floor(255*Math.random()),", \n  ").concat(Math.floor(255*Math.random()),", \n  ").concat(Math.floor(255*Math.random()),", 0.8)")},M=a(2),y=a.n(M),B=function(t){return Object(d.jsx)("ul",{className:y.a.Statistics__StatsList,children:Object.entries(t).map((function(t){return Object(d.jsxs)("li",{className:y.a.Statistics__StatsListItem,style:{backgroundColor:w()},children:[Object(d.jsx)("span",{className:y.a.Statistics__StatsListItemLabel,children:t[0]}),Object(d.jsxs)("span",{className:y.a.Statistics__StatsListItemPercentage,children:[t[1],"likes"===t[0]&&"%"]})]},t[0])}))})};B.defaultProps={good:0,neutral:0,bad:0,likes:0};var C=B,W=a(12),H=a.n(W),T=function(t){var e=t.message;return Object(d.jsx)("h3",{className:H.a.Notification,children:e})};T.defaultProps={message:"Where is your message?"};var R=T,D=function(){var t=Object(i.useState)({good:0,neutral:0,bad:0}),e=Object(l.a)(t,2),a=e[0],n=e[1],s=function(){return Object.values(a).reduce((function(t,e){return t+e}),0)};return Object(d.jsxs)(j,{children:[Object(d.jsx)(O,{title:"React Homework 04. Feedback"}),Object(d.jsx)(k,{title:"Please Leave Feedback",children:Object(d.jsx)(P,{options:Object.keys(a),onLeaveFeedback:function(t){n((function(e){return Object(r.a)(Object(r.a)({},e),{},Object(o.a)({},t,e[t]+1))}))}})}),Object(d.jsx)(k,{title:"Feedback Statistics",children:s()>0?Object(d.jsx)(C,{good:a.good,neutral:a.neutral,bad:a.bad,total:s(),likes:s()?Math.round(a.good/s()*100):0}):Object(d.jsx)(R,{message:"No feedback given"})})]})};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.75c4ab73.chunk.js.map