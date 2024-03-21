"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[520],{2984:(e,a,t)=>{t.d(a,{Gq:()=>p,I5:()=>o,Md:()=>d,Ul:()=>u,Y2:()=>c,kR:()=>n,sD:()=>l});var s=t(8372),i=t(2156),r=t(4836);const o=(e,a,t)=>async o=>{try{const c=await s.c.get("".concat(r.c.instance.baseURL,"/api/provider?").concat(a,"=").concat(t,"&page=").concat(e),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:i.GS,payload:{...c.data,filters:{filter:a,value:t}}})}catch(c){o({type:i.r4,payload:{msg:c.response.statusText,status:c.response.status}})}},c=(e,a)=>async t=>{try{const o=await s.c.post("".concat(r.c.instance.baseURL,"/api/provider"),e,{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:i.uC,payload:o.data.data}),a(o.data)}catch(o){t({type:i.r4,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},n=(e,a,t)=>async o=>{try{const c=await s.c.put("".concat(r.c.instance.baseURL,"/api/provider/").concat(a),e,{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:i.wJ,payload:c.data.data}),t(c.data)}catch(c){o({type:i.r4,payload:{msg:c.response.statusText,status:c.response.status}}),t({success:!1,message:c.message})}},l=(e,a)=>async t=>{try{const o=await s.c.delete("".concat(r.c.instance.baseURL,"/api/provider/").concat(e),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:i.KY,payload:e}),a(o.data)}catch(o){t({type:i.r4,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},d=(e,a)=>async t=>{try{const o=await s.c.get("".concat(r.c.instance.baseURL,"/api/excel/provider/export?").concat(e,"=").concat(a),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")},responseType:"blob"}),c=window.URL.createObjectURL(new Blob([o.data])),n=document.createElement("a");n.href=c,n.setAttribute("download","Proveedores.xlsx"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(c),t({type:i.iA})}catch(o){t({type:i.r4,payload:{msg:o.response.statusText,status:o.response.status}})}},u=()=>async e=>{try{const a=await s.c.get("".concat(r.c.instance.baseURL,"/api/select/provider"),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:i.qK,payload:a.data})}catch(a){e({type:i.r4,payload:{msg:a.response.statusText,status:a.response.status}})}},p=e=>async a=>{try{const t=await s.c.get("".concat(r.c.instance.baseURL,"/api/select/account/provider/").concat(e),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:i.WY,payload:t.data})}catch(t){a({type:i.r4,payload:{msg:t.response.statusText,status:t.response.status}})}}},868:(e,a,t)=>{t.d(a,{Im:()=>h,OO:()=>c,SU:()=>d,Sk:()=>n,UT:()=>u,YD:()=>p,_x:()=>l,iy:()=>r,my:()=>o});var s=t(9427),i=t(8044);const r=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),o=e=>s.CS.fromISO(e).toLocaleString(s.CS.DATE_SHORT),c=e=>s.CS.fromISO(e).toLocaleString(s.CS.DATETIME_SHORT),n=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:a?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:a?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},l={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},d={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},u={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},p={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},h=(e,a)=>{const t=(0,i.w1)((e=>e.auth.permissions)),s=(0,i.w1)((e=>e.auth.modules)).find((a=>a.submodule===e));return!!s&&!!t.find((e=>e.submodule===s.submodule&&e.permission===a))}},8128:(e,a,t)=>{t.d(a,{i:()=>s});const s={provider:"provider",purchaseRequest:"purchaseRequest",quote:"quote",user:"user"}},2520:(e,a,t)=>{t.r(a),t.d(a,{default:()=>N});var s=t(9060),i=t(3084),r=t(5564),o=t(2276),c=t(3088),n=t(4904),l=t(8044),d=t(9012),u=t.n(d),p=t(6552),h=t(686),m=t(8128),g=t(7316),x=t(868),v=t(2984),y=t(8372),j=t(2156),b=t(4836);const f=(e,a,t)=>async s=>{try{const i=await y.c.get("".concat(b.c.instance.baseURL,"/api/purchaseRequest?").concat(a,"=").concat(t,"&page=").concat(e),{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:j.c3,payload:{...i.data,filters:{filter:a,value:t}}})}catch(i){s({type:j.E3,payload:{msg:i.response.statusText,status:i.response.status}})}};var S=t(5064),C=["512 512","<rect width='368' height='32' x='72' y='240' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/>"],k=t(2496);const w=e=>{let{onAddDetailPending:a,onRemoveDetailPending:t,detailPendingID:c}=e;const{pendingPayments:n}=(0,l.w1)((e=>e.purchaseRequest)),[d,u]=(0,s.useState)([]);return(0,s.useEffect)((()=>{u(n)}),[n]),(0,k.jsxs)(i.k7,{striped:!0,responsive:!0,children:[(0,k.jsx)(i.Iy,{children:(0,k.jsxs)(i.uH,{children:[(0,k.jsx)(i.Qr,{scope:"col",children:"Opciones"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Cargo"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Concepto"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Obs."}),(0,k.jsx)(i.Qr,{scope:"col",children:"Saldo pendiente"})]})}),(0,k.jsx)(i.g7,{children:d.map(((e,s)=>(0,k.jsxs)(i.uH,{children:[(0,k.jsx)(i.kz,{children:c!==e.id?(0,k.jsx)(i.uE,{color:"primary",variant:"outline",title:"Agregar",onClick:()=>a(e),children:(0,k.jsx)(r.c,{icon:o.O,size:"sm"})}):(0,k.jsx)(i.uE,{color:"danger",variant:"outline",title:"Quitar",onClick:()=>t(),children:(0,k.jsx)(r.c,{icon:C,size:"sm"})})}),(0,k.jsx)(i.kz,{children:e.quote.quote_concept.charge}),(0,k.jsx)(i.kz,{children:e.quote.quote_concept.concept}),(0,k.jsx)(i.kz,{children:e.title}),(0,k.jsxs)(i.kz,{children:["$",(0,x.iy)(e.balance)]})]},e.id)))})]})},z=e=>{var a,t,r;let{visible:o,onClose:c,purchaseData:n,view:d}=e;const[C,z]=(0,s.useState)(1),[R,I]=(0,s.useState)(""),[N,q]=(0,s.useState)(null),[E,A]=(0,s.useState)(""),[_,F]=(0,s.useState)(0),[Q,O]=(0,s.useState)(0),[T,U]=(0,s.useState)([]),[B,P]=(0,s.useState)(null),[D,L]=(0,s.useState)(null),[M,W]=(0,s.useState)(!1),[Y,H]=(0,s.useState)(!1),[G,V]=(0,s.useState)(!1),[$,K]=(0,s.useState)(""),[J,X]=(0,s.useState)(""),[Z,ee]=(0,s.useState)(""),[ae,te]=(0,s.useState)(""),se=(0,l.OY)(),{progress:ie}=(0,l.w1)((e=>e.file)),re=(0,x.Im)("purchaseRequest","pay"),oe=(0,x.Im)("purchaseRequest","reject"),ce=(0,x.Im)("purchaseRequest","authorize"),ne=null===(a=(0,l.w1)((e=>e.auth.user)))||void 0===a||null===(t=a.data)||void 0===t?void 0:t.user,le=(0,s.useRef)(),de=(0,s.useRef)(),ue=(0,l.w1)((e=>e.provider.providers)),pe=(0,l.w1)((e=>e.provider.accounts)),{purchaseRequests:he,filters:me,pendingPayments:ge}=(0,l.w1)((e=>e.purchaseRequest));(0,s.useEffect)((()=>{se((0,v.Ul)())}),[se]),(0,s.useEffect)((()=>{Z&&se((0,v.Gq)(Z))}),[se,Z]),(0,s.useEffect)((()=>{var e;se((e=ne.id,async a=>{try{const t=await y.c.get("".concat(b.c.instance.baseURL,"/api/pending/details/purchaseRequest?user_id=").concat(e),{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:j.CO,payload:t.data})}catch(t){a({type:j.E3,payload:{msg:t.response.statusText,status:t.response.status}})}}))}),[se,ne]),(0,s.useEffect)((()=>{var e,a,t,s;n&&(I(n.id),X(null===n||void 0===n||null===(e=n.quote)||void 0===e?void 0:e.id),U(null===(a=n.files)||void 0===a?void 0:a.filter((e=>e.tag===p.k.img))),P(null===(t=n.files)||void 0===t?void 0:t.find((e=>e.tag===p.k.invoice))),L(null===(s=n.files)||void 0===s?void 0:s.find((e=>e.tag===p.k.receipt))),A(n.title),F(n.totalAmount),O(n.paymentAmount),W(!!n.totalPaymentApproved),H(!!n.totalPaymentModified),ee(n.provider_id),te(n.provider_account_id),V(n.paymentWithoutInvoice),K(n.paymentDate),q(n.purchase_request_pending_id))}),[n]);const xe=(0,s.useCallback)((()=>{I(""),X(""),A(""),F(""),O(""),U([])}),[]),ve=e=>{T.length>0?Promise.all(T.map((a=>{if(!a.id)return se((0,h.S_)(a.file,a.tag,null,e.id,m.i.purchaseRequest,(()=>{})));c(),xe()}))).finally((()=>{se(f(he.current_page,me.filter,me.value))})):(c(),xe())},ye=e=>{try{se((0,h.S_)(D.file,D.tag,null,e.id,m.i.purchaseRequest,(()=>{se(f(he.current_page,me.filter,me.value))})))}catch(a){console.log(a)}};return(0,s.useEffect)((()=>{100===ie&&setTimeout((()=>{c(),xe()}),3e3)}),[ie,c,xe]),(0,s.useEffect)((()=>{M&&(H(!1),O(_))}),[M,_]),(0,s.useEffect)((()=>{Y&&W(!1)}),[Y]),(0,k.jsxs)(i.U5,{visible:o,onClose:c,"aria-labelledby":"ModalForm",size:"xl",children:[(0,k.jsx)(i.gO,{onClose:c,children:(0,k.jsx)(i._K,{id:"ModalForm",children:n?"".concat(d?"":"Editar"," Solicitud ").concat(n.title):"Nueva Solicitud"})}),(0,k.jsxs)(i.EB,{children:[T.length>0&&T.some((e=>!e.id))&&(0,k.jsxs)(i.a4,{value:ie,className:"mb-2",children:[ie,"%"]}),D&&!D.id&&(0,k.jsxs)(i.a4,{value:ie,className:"mb-2",children:[ie,"%"]}),(0,k.jsxs)(i.wx,{variant:"tabs",role:"tablist",className:"mt-1",children:[(0,k.jsx)(i.SU,{role:"presentation",children:(0,k.jsx)(i.QJ,{active:1===C,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===C,onClick:()=>z(1),children:"General"})}),!ce&&!d&&!(null!==n&&void 0!==n&&n.fromQuote)&&(0,k.jsx)(i.SU,{role:"presentation",children:(0,k.jsx)(i.QJ,{active:2===C,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":2===C,onClick:()=>z(2),children:"Pagos pendientes"})}),(d&&"approved"===n.status&&re||d&&"paid"===n.status)&&(0,k.jsx)(i.SU,{role:"presentation",children:(0,k.jsx)(i.QJ,{active:3===C,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":3===C,onClick:()=>z(3),children:"Tramite de pago"})})]}),(0,k.jsxs)(i.CY,{children:[(0,k.jsx)(i.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===C,children:(0,k.jsxs)(i.YR,{className:"mt-3",children:[n&&n.fromQuote&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)("div",{className:"mb-3 d-flex",children:[(0,k.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,k.jsx)(i.Q5,{children:"Proveedor"}),(0,k.jsxs)(i.Wc,{"aria-label":"provider",onChange:e=>ee(e.target.value),value:Z,disabled:d||(null===n||void 0===n?void 0:n.fromQuote),children:[(0,k.jsx)("option",{value:"",children:"Selecciona..."}),ue.data.map((e=>{let{id:a,name:t}=e;return(0,k.jsx)("option",{value:a,children:t},a)}))]})]}),(0,k.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,k.jsx)(i.Q5,{children:"Cuenta"}),(0,k.jsxs)(i.Wc,{"aria-label":"providerAccount",onChange:e=>te(e.target.value),value:ae,disabled:d,children:[(0,k.jsx)("option",{value:"",children:"Selecciona..."}),null===pe||void 0===pe||null===(r=pe.data)||void 0===r?void 0:r.map((e=>{let{id:a,clabe:t,bank:s}=e;return(0,k.jsxs)("option",{value:a,children:[s.name," - ",t]},a)}))]})]})]}),B&&(0,k.jsx)("div",{className:"mb-3 d-flex",children:(0,k.jsx)(g.S_,{file:B,onDelete:e=>{P(null)},viewMode:n})}),(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(i.e0,{id:"paymentWithoutInvoice",label:"Tramitar pago sin factura",checked:G,onChange:e=>V(e.target.checked),disabled:d||(null===n||void 0===n?void 0:n.fromQuote)})})]}),(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)(i.Q5,{children:"T\xedtulo"}),(0,k.jsx)(i.Ip,{type:"text",id:"title",placeholder:"T\xedtulo de la solicitud",value:E,onChange:e=>A(e.target.value),disabled:d})]}),(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)(i.Q5,{children:"Monto"}),(0,k.jsx)(i.Ip,{type:"number",id:"totalAmount",placeholder:"0",value:_,onChange:e=>F(e.target.value),disabled:d||(null===n||void 0===n?void 0:n.fromQuote)||N})]}),!d&&(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsxs)(i.Q5,{children:["Sube ",(0,k.jsx)("b",{children:"im\xe1genes"})," para la solicitud (opcional)"]}),(0,k.jsx)(i.Ip,{ref:le,type:"file",id:"imgFile",onChange:e=>{if(!e.target.files[0])return;let a={localName:e.target.files[0].name,tag:p.k.img,file:e.target.files[0]};U([...T,a]),le.current.value=""},accept:"image/*",text:"Archivos permitidos jpg, png, jpeg (10 MB)"})]}),(0,k.jsx)("div",{className:"mb-3 d-flex",children:T.map(((e,a)=>(0,k.jsx)(g.S_,{file:e,onDelete:t=>e.id?U(T.filter((e=>e.id!==t))):U(T.filter(((e,t)=>a!==t))),viewMode:d},e.tag)))}),(d&&ce||"approved"===(null===n||void 0===n?void 0:n.status)||"paid"===(null===n||void 0===n?void 0:n.status))&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(i.e0,{id:"totalPaymentApproved",label:"Se aprueba monto de pago",checked:M,onChange:e=>W(e.target.checked),disabled:d&&"approved"===n.status||"paid"===n.status})}),(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(i.e0,{id:"totalPaymentModified",label:"Se modifica monto de pago",checked:Y,onChange:e=>H(e.target.checked),disabled:d&&"approved"===n.status||"paid"===n.status})}),Y&&(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)(i.Q5,{children:"Monto"}),(0,k.jsx)(i.Ip,{type:"number",id:"amount",placeholder:"0",value:Q,onChange:e=>O(e.target.value),disabled:d&&"approved"===n.status||"paid"===n.status})]}),Y&&(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsxs)(i.Q5,{className:"fw-bold",children:["Saldo $",(0,x.iy)(_-Q)]})})]})]})}),(0,k.jsx)(i.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:2===C,children:ge.length>0?(0,k.jsx)(w,{detailPendingID:N,onAddDetailPending:e=>{return q((a=e).id),F(a.balance),O(a.balance),A(a.title),z(1),null!==a&&void 0!==a&&a.quote&&X(a.quote.id),ee(a.provider_id),void te(a.provider_account_id);var a},onRemoveDetailPending:()=>{q(null),F(0),O(0),A(""),z(1)}}):(0,k.jsx)("h3",{className:"text-center text-primary font-monospace",children:"No hay pagos pendientes"})}),(0,k.jsx)(i.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:3===C,children:(0,k.jsxs)(i.YR,{className:"mt-3",children:[(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)(i.Q5,{children:"Dia de pago"}),(0,k.jsx)(i.Ip,{type:"date",id:"paymentDate",value:$,onChange:e=>K(e.target.value),disabled:d&&"paid"===n.status})]}),d&&"paid"!==n.status&&(0,k.jsxs)("div",{className:"mb-3",children:[(0,k.jsx)(i.Q5,{children:"Adjuntar comprobante de pago"}),(0,k.jsx)(i.Ip,{type:"file",ref:de,id:"receiptFile",onChange:e=>L({file:e.target.files[0],tag:p.k.receipt,localName:e.target.files[0].name}),text:"Archivos permitidos jpg, pdf, png, xlxs (10 MB)"})]}),(0,k.jsx)("div",{className:"mb-3 d-flex",children:D&&(0,k.jsx)(g.S_,{file:D,onDelete:e=>{L(null),de.current.value=""},viewMode:d&&"paid"===n.status})})]})})]})]}),(0,k.jsxs)(i.yI,{children:[(0,k.jsx)(i.uE,{color:"secondary",onClick:c,children:"Cerrar"}),"approved"!==(null===n||void 0===n?void 0:n.status)&&!re&&"paid"!==(null===n||void 0===n?void 0:n.status)&&(0,k.jsx)(i.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();try{let e={quote_id:J,title:E,paymentAmount:Q,totalAmount:_,provider_id:Z,provider_account_id:ae,paymentWithoutInvoice:G,totalPaymentApproved:M,totalPaymentModified:Y,purchase_request_pending_id:N};se(n?((e,a,t)=>async s=>{try{const i=await y.c.put("".concat(b.c.instance.baseURL,"/api/purchaseRequest/").concat(a),e,{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:j.yW,payload:i.data.data}),t(i.data)}catch(i){s({type:j.E3,payload:{msg:i.response.statusText,status:i.response.status}}),t({success:!1,message:i.message})}})(e,R,(e=>{e.success?(se((0,S.I)((0,g.oN)({msg:"Solicitud actualizada correctamente.",title:"Solicitudes de compra",type:"success"}))),ve(e.data)):se((0,S.I)((0,g.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})):((e,a)=>async t=>{try{const s=await y.c.post("".concat(b.c.instance.baseURL,"/api/purchaseRequest"),e,{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:j.o9,payload:s.data.data}),a(s.data)}catch(s){t({type:j.E3,payload:{msg:s.response.statusText,status:s.response.status}}),a({success:!1,message:s.message})}})({...e,petitioner_id:ne.id},(e=>{e.success?(se((0,S.I)((0,g.oN)({msg:"Solicitud realizada correctamente.",title:"Solicitudes de compra",type:"success"}))),ve(e.data)):se((0,S.I)((0,g.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})))}catch(a){console.log(a)}},children:"Guardar"}),d&&(0,k.jsxs)(k.Fragment,{children:["approved"===n.status&&re&&(0,k.jsx)(i.uE,{color:"info",className:"text-light fw-semibold",onClick:()=>{try{if(!$)return void alert("Selecciona fecha de pago");if(!D)return void alert("Adjunta comprobante de pago");se((e={paymentDate:$,user_id:ne.id},a=n.id,t=e=>{e.success&&(ye(e.data),se((0,S.I)((0,g.oN)({msg:e.message,type:"success"}))),u().fire({title:"Solicitud pagada"}))},async s=>{try{const i=await y.c.put("".concat(b.c.instance.baseURL,"/api/pay/purchaseRequest/").concat(a),e,{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:j.yW,payload:i.data.data}),t(i.data)}catch(i){s({type:j.E3,payload:{msg:i.response.statusText,status:i.response.status}}),t({success:!1,message:i.message})}}))}catch(s){u().showValidationMessage("Request failed: ".concat(s))}var e,a,t},children:"Pagar"}),"paid"!==n.status&&oe&&"approved"!==n.status&&!n.fromQuote&&(0,k.jsx)(i.uE,{color:"danger",className:"text-light fw-semibold",onClick:()=>{u().fire({title:"Escribe un motivo del rechazo",input:"textarea",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Enviar",confirmButtonColor:"#E94834",showLoaderOnConfirm:!0,preConfirm:async e=>{try{if(!e)return void u().showValidationMessage("\n            Escribe una observacion\n          ");se((a={observation:e,user_id:ne.id},t=n.id,s=e=>{e.success&&se((0,S.I)((0,g.oN)({msg:"Solicitud rechazada",type:"success"})))},async e=>{try{const i=await y.c.put("".concat(b.c.instance.baseURL,"/api/reject/purchaseRequest/").concat(t),a,{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:j.yW,payload:i.data.data}),s(i.data)}catch(i){e({type:j.E3,payload:{msg:i.response.statusText,status:i.response.status}}),s({success:!1,message:i.message})}}))}catch(i){u().showValidationMessage("\n            Request failed: ".concat(i,"\n          "))}var a,t,s},allowOutsideClick:()=>!u().isLoading()}).then((e=>{e.isConfirmed&&u().fire({title:"Solicitud rechazada correctamente"})}))},children:"Rechazar"})]})]})]})},R=e=>{var a,t;let{visible:r,onClose:o,purchaseRequestID:c}=e;const n=(0,l.OY)(),[d,u]=(0,s.useState)(""),{observations:p,loadingObservations:h}=(0,l.w1)((e=>e.purchaseRequest)),m=null===(a=(0,l.w1)((e=>e.auth.user)))||void 0===a||null===(t=a.data)||void 0===t?void 0:t.user;(0,s.useEffect)((()=>{var e;n((e=c,async a=>{try{const t=await y.c.get("".concat(b.c.instance.baseURL,"/api/purchaseRequestObservation?purchase_request_id=").concat(e),{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:j.I9,payload:t.data})}catch(t){a({type:j.E3,payload:{msg:t.response.statusText,status:t.response.status}})}}))}),[n,c]);return(0,k.jsxs)(i.U5,{visible:r,onClose:o,"aria-labelledby":"ModalForm",children:[(0,k.jsx)(i.gO,{onClose:o,children:(0,k.jsx)(i._K,{id:"ModalForm",children:"Observaciones"})}),(0,k.jsx)(i.EB,{children:h?(0,k.jsx)("div",{className:"d-flex justify-content-center",children:(0,k.jsx)(i.GG,{color:"primary",variant:"grow"})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.k7,{striped:!0,responsive:!0,children:[(0,k.jsx)(i.Iy,{children:(0,k.jsxs)(i.uH,{children:[(0,k.jsx)(i.Qr,{scope:"col",children:"Usuario"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Observaci\xf3n"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Fecha"})]})}),(0,k.jsx)(i.g7,{children:null===p||void 0===p?void 0:p.map((e=>(0,k.jsxs)(i.uH,{children:[(0,k.jsx)(i.kz,{children:e.user.name}),(0,k.jsx)(i.kz,{children:e.message}),(0,k.jsx)(i.kz,{children:(0,x.OO)(e.created_at)})]},e.id)))})]}),(0,k.jsx)(i.YR,{className:"mt-3",children:(0,k.jsx)("div",{className:"mb-3",children:(0,k.jsx)(i.cF,{id:"obs",label:"Observaci\xf3n",rows:2,text:"Debe tener entre 8 y 20 palabras.",value:d,onChange:e=>u(e.target.value)})})})]})}),(0,k.jsxs)(i.yI,{children:[(0,k.jsx)(i.uE,{color:"secondary",onClick:o,children:"Cerrar"}),(0,k.jsx)(i.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();try{if(!d||""===d)return void n((0,S.I)((0,g.oN)({msg:"Escribe un mensaje",title:"Error",type:"error"})));let e={message:d,user_id:m.id,purchase_request_id:c};n(((e,a)=>async t=>{try{const s=await y.c.post("".concat(b.c.instance.baseURL,"/api/purchaseRequestObservation"),e,{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:j.qD,payload:s.data.data}),a(s.data)}catch(s){t({type:j.E3,payload:{msg:s.response.statusText,status:s.response.status}}),a({success:!1,message:s.message})}})(e,(e=>{e.success?n((0,S.I)((0,g.oN)({msg:"Mensaje guardado con exito",title:"Observacion",type:"success"}))):n((0,S.I)((0,g.oN)({msg:"Ha ocurrido un error",title:"Observacion",type:"error"})))})))}catch(a){console.log(a)}u("")},children:"Guardar"})]})]})},I=e=>{let{data:a}=e;const[t,o]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1),[p,v]=(0,s.useState)(null),[f,C]=(0,s.useState)(!1),w=(0,l.OY)(),I=(0,x.Im)("purchaseRequest","delete"),N=(0,x.Im)("purchaseRequest","edit"),q=(0,x.Im)("purchaseRequest","show"),E=e=>{u().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((a=>{a.isConfirmed&&(w(((e,a)=>async t=>{try{const s=await y.c.delete("".concat(b.c.instance.baseURL,"/api/purchaseRequest/").concat(e),{headers:{...b.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:j.Sc,payload:e}),a(s.data)}catch(s){t({type:j.E3,payload:{msg:s.response.statusText,status:s.response.status}}),a({success:!1,message:s.message})}})(e,(a=>{a.success?(w((0,S.I)((0,g.oN)({msg:"Solicitud eliminada correctamente.",title:"Solicitudes de pago",type:"success"}))),w((0,h.sr)(e,m.i.purchaseRequest))):w((0,S.I)((0,g.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de pago",type:"error"})))}))),u().fire({title:"Eliminado!",text:"La solicitud ha sido eliminada.",icon:"success"}))}))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.k7,{striped:!0,responsive:!0,children:[(0,k.jsx)(i.Iy,{children:(0,k.jsxs)(i.uH,{children:[(0,k.jsx)(i.Qr,{scope:"col",children:"Folio"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Solicitante"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Titulo"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Fecha de solicitud"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Monto"}),(0,k.jsx)(i.Qr,{scope:"col",children:"Status"}),(0,k.jsx)(i.Qr,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,k.jsx)(i.g7,{children:null===a||void 0===a?void 0:a.map((e=>(0,k.jsxs)(i.uH,{children:[(0,k.jsx)(i.Qr,{scope:"row",children:e.id}),(0,k.jsx)(i.kz,{children:e.petitioner.name}),(0,k.jsx)(i.kz,{children:e.title}),(0,k.jsx)(i.kz,{children:(0,x.my)(e.created_at)}),(0,k.jsxs)(i.kz,{children:["$",(0,x.iy)(e.paymentAmount)]}),(0,k.jsx)(i.kz,{children:(0,k.jsx)(i.oh,{style:{backgroundColor:x.UT[e.status]},children:x.SU[e.status]})}),(0,k.jsx)(i.kz,{className:"text-center overflow-visible",children:(0,k.jsxs)(i.Cg,{variant:"dropdown",children:[(0,k.jsx)(i.uw,{href:"#",color:"light",children:(0,k.jsx)(r.c,{icon:n.i,title:"Opciones",size:"lg"})}),(0,k.jsxs)(i.cI,{className:"position-fixed",children:[q&&(0,k.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>{v(e),C(!0),o(!t)},children:"Ver solicitud"}),N&&"approved"!==e.status&&"paid"!==e.status&&(0,k.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>{v(e),o(!t)},children:"Editar"}),I&&"approved"!==e.status&&"paid"!==e.status&&!e.fromQuote&&(0,k.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>E(e.id),children:"Eliminar"}),(0,k.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>{v(e),d(!c)},children:"Ver observaciones"})]})]})})]},e.id)))})]}),t&&(0,k.jsx)(z,{visible:t,onClose:()=>{o(!1),C(!1)},purchaseData:p,view:f}),c&&(0,k.jsx)(R,{purchaseRequestID:null===p||void 0===p?void 0:p.id,visible:c,onClose:()=>d(!1)})]})},N=()=>{const[e,a]=(0,s.useState)(!1),[t,n]=(0,s.useState)("provider"),[d,u]=(0,s.useState)(""),[p,h]=(0,s.useState)(1),m=(0,l.OY)(),{currentPage:v,last_page:y,data:j}=(0,l.w1)((e=>e.purchaseRequest.purchaseRequests)),b=(0,l.w1)((e=>e.purchaseRequest.loading));return(0,s.useEffect)((()=>{m(f(p,t,d))}),[p,m]),(0,s.useEffect)((()=>{v&&h(v)}),[v]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(i.u0,{children:[(0,k.jsxs)(i.Q_,{className:"d-flex justify-content-between align-items-center",children:[(0,k.jsx)("h4",{children:"Solicitudes de pago"}),(0,k.jsxs)("div",{className:"d-flex gap-2",children:[(0,x.Im)("purchaseRequest","create")&&(0,k.jsxs)(i.uE,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>a(!e),children:[(0,k.jsx)(r.c,{icon:o.O,size:"xl",className:"me-1"}),"Nuevo"]}),(0,k.jsx)(i.uE,{color:"info",className:"text-light align-content-center d-flex",children:(0,k.jsx)(r.c,{icon:c.W,size:"xl"})})]})]}),(0,k.jsxs)(i.Yj,{children:[(0,k.jsxs)(i.YR,{children:[(0,k.jsx)(i.Q5,{children:"Filtros de busqueda"}),(0,k.jsxs)("div",{className:"mb-3 d-flex",children:[(0,k.jsx)("div",{className:"flex-fill me-2",children:(0,k.jsx)(i.Wc,{value:t,onChange:e=>n(e.target.value),"aria-label":"caseFilter",options:[{label:"Proveedor",value:"provider"},{label:"Solicitante",value:"petitioner"},{label:"Status",value:"status"}]})}),(0,k.jsx)("div",{className:"flex-fill me-2",children:"status"!==t?(0,k.jsx)(i.Ip,{value:d,onChange:e=>u(e.target.value),type:"text",id:"provider",placeholder:"Ingresar texto"}):(0,k.jsx)(i.Wc,{value:d,onChange:e=>u(e.target.value),"aria-label":"caseFilter",options:[{label:"Pendientes",value:"pending"},{label:"Revisadas",value:"review"},{label:"Aprobadas",value:"approved"},{label:"Rechazadas",value:"rejects"}]})})]}),(0,k.jsx)(i.uE,{type:"button",className:"text-light fw-semibold",onClick:()=>m(f(p,t,d)),children:"Buscar"})]}),b?(0,k.jsx)("div",{className:"d-flex justify-content-center",children:(0,k.jsx)(i.GG,{color:"primary",variant:"grow"})}):(0,k.jsx)(I,{data:j})]}),(0,k.jsx)(i.IE,{children:(0,k.jsx)(g.KQ,{currentPage:p,lastPage:y,setCurrentPage:h})})]}),(0,k.jsx)(z,{visible:e,onClose:()=>a(!1)})]})}}}]);
//# sourceMappingURL=520.cf3eaf14.chunk.js.map