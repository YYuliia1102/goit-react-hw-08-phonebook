"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[321],{4321:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(2791),s=n(9434),c=n(1418),r=n(9439),l="ContactForm_formContainer__cUmnd",o="ContactForm_label__khzlp",i="ContactForm_inputField__7rAUh",u="ContactForm_submitButton__-UL++",m=n(184),_=function(){var e=(0,a.useState)(""),t=(0,r.Z)(e,2),n=t[0],_=t[1],h=(0,a.useState)(""),d=(0,r.Z)(h,2),f=d[0],x=d[1],j=(0,s.v9)(c.xm),N=(0,s.I0)();return(0,m.jsxs)("form",{className:l,onSubmit:function(e){e.preventDefault(),j.some((function(e){return e.name===n}))?alert("Contact with name ".concat(n," already exists!")):(N((0,c.je)({name:n,number:f})),_(""),x(""))},children:[(0,m.jsxs)("label",{className:o,children:[(0,m.jsx)("p",{children:"Name:"}),(0,m.jsx)("input",{className:i,name:"contactName",type:"text",placeholder:"John Doe",value:n,onChange:function(e){return _(e.target.value)},required:!0})]}),(0,m.jsxs)("label",{className:o,children:[(0,m.jsx)("p",{children:"Number:"}),(0,m.jsx)("input",{className:i,name:"contactNumber",type:"tel",placeholder:"+1-123-456-7890",value:f,onChange:function(e){return x(e.target.value)},required:!0})]}),(0,m.jsx)("button",{type:"submit",className:u,children:"Add Contact"})]})},h="ContactList_listContainer__FcosH",d="ContactList_listItem__S1xIO",f="ContactList_contactInfo__UjXrk",x="ContactList_name__cNujs",j="ContactList_number__mqp98",N="ContactList_deleteButton__N9Edw",p=function(){var e=(0,s.I0)(),t=(0,s.v9)(c.DI);(0,a.useEffect)((function(){e((0,c.nQ)())}),[e]);return(0,m.jsx)("ul",{className:h,children:t.map((function(t){return(0,m.jsxs)("li",{className:d,children:[(0,m.jsxs)("div",{className:f,children:[(0,m.jsxs)("h3",{className:x,children:["Name: ",t.name]}),(0,m.jsxs)("p",{className:j,children:["Number: ",t.number]})]}),(0,m.jsx)("button",{onClick:function(){return n=t.id,void e((0,c.xX)(n));var n},className:N,type:"button","aria-label":"Delete contact",children:"\xd7"})]},t.id)}))})},C="Filter_searchContainer__Zvv2z",v="Filter_searchInput__UJmuf",b="Filter_searchIcon__m90l2",F=function(){var e=(0,s.I0)();return(0,m.jsxs)("div",{className:C,children:[(0,m.jsx)("input",{type:"text",className:v,onChange:function(t){e((0,c.Tv)(t.target.value))}}),(0,m.jsx)("span",{className:b,children:"\ud83d\udd0d"})]})},I="ContactsPage_content__sDIHp",g="ContactsPage_title__X03js",k="ContactsPage_formLabel__swUOr",L="ContactsPage_formFind__TxVXG",w=function(){var e=(0,s.v9)((function(e){return e.auth.authentificated})),t=(0,s.I0)();return(0,a.useEffect)((function(){e&&t((0,c.nQ)())}),[e,t]),(0,m.jsxs)("div",{className:I,children:[(0,m.jsx)("h1",{className:g,children:"Phonebook"}),(0,m.jsx)(_,{}),(0,m.jsx)("h2",{className:k,children:"Contacts"}),(0,m.jsx)("h5",{className:L,children:"Find contacts by name"}),(0,m.jsx)(F,{}),(0,m.jsx)(p,{})]})}}}]);
//# sourceMappingURL=321.77b20694.chunk.js.map