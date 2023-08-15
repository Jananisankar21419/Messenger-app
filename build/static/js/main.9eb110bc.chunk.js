(this.webpackJsonpchat_app_project=this.webpackJsonpchat_app_project||[]).push([[0],{117:function(e,t,a){},118:function(e,t,a){"use strict";a.r(t);var s=a(1),c=a(0),n=a(17),r=a.n(n),i=a(14),l=a(10),o=function(e){var t=e.message;return t.attachments&&t.attachments.length>0?Object(s.jsx)("img",{src:t.attachments[0].file,alt:"message-attachment",className:"message-image",style:{float:"right"}}):Object(s.jsx)("div",{className:"message",style:{float:"right",marginRight:"18px",color:"white",backgroundColor:"#3B2A50"},children:t.text})},u=function(e){var t=e.lastMessage,a=e.message,c=!t||t.sender.username!==a.sender.username;return Object(s.jsxs)("div",{className:"message-row",children:[c&&Object(s.jsx)("div",{className:"message-avatar",style:{backgroundImage:a.sender&&"url(".concat(a.sender.avatar,")")}}),a.attachments&&a.attachments.length>0?Object(s.jsx)("img",{src:a.attachments[0].file,alt:"message-attachment",className:"message-image",style:{marginLeft:c?"4px":"48px"}}):Object(s.jsx)("div",{className:"message",style:{float:"left",backgroundColor:"#CABCDC",marginLeft:c?"4px":"48px"},children:a.text})]})},j=a(11),m=a(120),d=a(121),b=function(e){var t=Object(c.useState)(""),a=Object(j.a)(t,2),n=a[0],r=a[1],i=e.chatId,o=e.creds,u=function(e){e.preventDefault();var t=n.trim();t.length>0&&Object(l.i)(o,i,{text:t}),r("")};return Object(s.jsxs)("form",{className:"message-form",onSubmit:u,children:[Object(s.jsx)("input",{className:"message-input",placeholder:"Send a message...",value:n,onChange:function(t){r(t.target.value),Object(l.f)(e,i)},onSubmit:u}),Object(s.jsx)("label",{htmlFor:"upload-button",children:Object(s.jsx)("span",{className:"image-button",children:Object(s.jsx)(m.a,{className:"picture-icon"})})}),Object(s.jsx)("input",{type:"file",multiple:!1,id:"upload-button",style:{display:"none"},onChange:function(e){Object(l.i)(o,i,{files:e.target.files,text:""})}.bind(undefined)}),Object(s.jsx)("button",{type:"submit",className:"send-button",children:Object(s.jsx)(d.a,{className:"send-icon"})})]})},h=function(e){var t=e.chats,a=e.activeChat,c=e.userName,n=e.messages,r=t&&t[a],l=function(e,t){return r.people.map((function(a,c){return a.last_read===e.id&&Object(s.jsx)("div",{className:"read-receipt",style:{float:t?"right":"left",backgroundImage:a.person.avatar&&"url(".concat(a.person.avatar,")")}},"read_".concat(c))}))};return r?Object(s.jsxs)("div",{className:"chat-feed",children:[Object(s.jsxs)("div",{className:"chat-title-container",children:[Object(s.jsx)("div",{className:"chat-title",children:null===r||void 0===r?void 0:r.title}),Object(s.jsx)("div",{className:"chat-subtitle",children:r.people.map((function(e){return" ".concat(e.person.username)}))})]}),function(){var e=Object.keys(n);return e.map((function(t,a){var r=n[t],i=0===a?null:e[a-1],j=c===r.sender.username;return Object(s.jsxs)("div",{style:{width:"100%"},children:[Object(s.jsx)("div",{className:"message-block",children:j?Object(s.jsx)(o,{message:r}):Object(s.jsx)(u,{message:r,lastMessage:n[i]})}),Object(s.jsx)("div",{className:"read-receipts",style:{marginRight:j?"18px":"0px",marginLeft:j?"0px":"68px"},children:l(r,j)})]},"msg_".concat(a))}))}(),Object(s.jsx)("div",{style:{height:"100px"}}),Object(s.jsx)("div",{className:"message-form-container",children:Object(s.jsx)(b,Object(i.a)(Object(i.a)({},e),{},{chatId:a}))})]}):Object(s.jsx)("div",{})},p=a(24),g=a.n(p),x=a(52),O=a(53),f=a.n(O),v=function(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(""),i=Object(j.a)(r,2),l=i[0],o=i[1],u=Object(c.useState)(""),m=Object(j.a)(u,2),d=m[0],b=m[1],h=function(){var e=Object(x.a)(g.a.mark((function e(t){var s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s={"Project-ID":"b97272b0-bbe5-40d9-9299-6c4a1846e8fb","User-Name":a,"User-Secret":l},e.prev=2,e.next=5,f.a.get("https://api.chatengine.io/chats",{headers:s});case 5:localStorage.setItem("username",a),localStorage.setItem("password",l),window.location.reload(),b(""),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),b("Oops, incorrect credentials.");case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsx)("div",{className:"wrapper",children:Object(s.jsxs)("div",{className:"form",children:[Object(s.jsx)("h1",{className:"title",children:"Chat Application"}),Object(s.jsxs)("form",{onSubmit:h,children:[Object(s.jsx)("input",{type:"text",value:a,onChange:function(e){return n(e.target.value)},className:"input",placeholder:"Username",required:!0}),Object(s.jsx)("input",{type:"password",value:l,onChange:function(e){return o(e.target.value)},className:"input",placeholder:"Password",required:!0}),Object(s.jsx)("div",{align:"center",children:Object(s.jsx)("button",{type:"submit",className:"button",children:Object(s.jsx)("span",{children:"Start chatting"})})})]}),Object(s.jsx)("h1",{children:d})]})})},N=(a(117),function(){return localStorage.getItem("username")?Object(s.jsx)(l.a,{height:"100vh",projectID:"6c1668d8-8da0-45b0-8a7c-aa195c9e3914",userName:localStorage.getItem("username"),userSecret:localStorage.getItem("password"),renderChatFeed:function(e){return Object(s.jsx)(h,Object(i.a)({},e))},onNewMessage:function(){return new Audio("https://chat-engine-assets.s3.amazonaws.com/click.mp3").play()}}):Object(s.jsx)(v,{})});r.a.render(Object(s.jsx)(N,{}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.9eb110bc.chunk.js.map