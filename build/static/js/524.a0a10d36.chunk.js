"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[524],{1232:(e,a,t)=>{t.d(a,{Az:()=>n,Fr:()=>u,J9:()=>o,P0:()=>c,dm:()=>l,i1:()=>d,j7:()=>p});var s=t(5294),i=t(591),r=t(6647);const o=(e,a,t)=>async o=>{try{const n=await s.Z.get("".concat(r.Z.instance.baseURL,"/api/provider?").concat(a,"=").concat(t,"&page=").concat(e),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:i.E3,payload:{...n.data,filters:{filter:a,value:t}}})}catch(n){o({type:i.Q_,payload:{msg:n.response.statusText,status:n.response.status}})}},n=(e,a)=>async t=>{try{const o=await s.Z.post("".concat(r.Z.instance.baseURL,"/api/provider"),e,{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:i.Tm,payload:o.data.data}),a(o.data)}catch(o){t({type:i.Q_,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},c=(e,a,t)=>async o=>{try{const n=await s.Z.put("".concat(r.Z.instance.baseURL,"/api/provider/").concat(a),e,{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:i.rE,payload:n.data.data}),t(n.data)}catch(n){o({type:i.Q_,payload:{msg:n.response.statusText,status:n.response.status}}),t({success:!1,message:n.message})}},l=(e,a)=>async t=>{try{const o=await s.Z.delete("".concat(r.Z.instance.baseURL,"/api/provider/").concat(e),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:i.Z4,payload:e}),a(o.data)}catch(o){t({type:i.Q_,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},d=(e,a)=>async t=>{try{const o=await s.Z.get("".concat(r.Z.instance.baseURL,"/api/excel/provider/export?").concat(e,"=").concat(a),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")},responseType:"blob"}),n=window.URL.createObjectURL(new Blob([o.data])),c=document.createElement("a");c.href=n,c.setAttribute("download","Proveedores.xlsx"),document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(n),t({type:i.Nx})}catch(o){t({type:i.Q_,payload:{msg:o.response.statusText,status:o.response.status}})}},u=()=>async e=>{try{const a=await s.Z.get("".concat(r.Z.instance.baseURL,"/api/select/provider"),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:i.tb,payload:a.data})}catch(a){e({type:i.Q_,payload:{msg:a.response.statusText,status:a.response.status}})}},p=e=>async a=>{try{const t=await s.Z.get("".concat(r.Z.instance.baseURL,"/api/select/account/provider/").concat(e),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:i.e4,payload:t.data})}catch(t){a({type:i.Q_,payload:{msg:t.response.statusText,status:t.response.status}})}}},7201:(e,a,t)=>{t.d(a,{Jw:()=>l,Tg:()=>h,a4:()=>d,aL:()=>c,iT:()=>o,mY:()=>n,mk:()=>p,uD:()=>u,uf:()=>r});var s=t(9779),i=t(9101);const r=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),o=e=>s.ou.fromISO(e).toLocaleString(s.ou.DATE_SHORT),n=e=>s.ou.fromISO(e).toLocaleString(s.ou.DATETIME_SHORT),c=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:a?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:a?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},l={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},d={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},u={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},p={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},h=(e,a)=>{const t=(0,i.v9)((e=>e.auth.permissions)),s=(0,i.v9)((e=>e.auth.modules)).find((a=>a.submodule===e));return!!s&&!!t.find((e=>e.submodule===s.submodule&&e.permission===a))}},1732:(e,a,t)=>{t.d(a,{K:()=>s});const s={provider:"provider",purchaseRequest:"purchaseRequest",quote:"quote",user:"user"}},6524:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var s=t(2791),i=t(2937),r=t(4846),o=t(8030),n=t(8723),c=t(3896),l=t(9101),d=t(1830),u=t.n(d),p=t(7462),h=t(9463),m=t(1732),v=t(7941),g=t(7201),x=t(1232),j=t(5294),y=t(591),b=t(6647);const f=(e,a,t)=>async s=>{try{const i=await j.Z.get("".concat(b.Z.instance.baseURL,"/api/purchaseRequest?").concat(a,"=").concat(t,"&page=").concat(e),{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:y.Cj,payload:{...i.data,filters:{filter:a,value:t}}})}catch(i){s({type:y.MH,payload:{msg:i.response.statusText,status:i.response.status}})}};var S=t(4166),C=t(184);const N=e=>{var a,t,r;let{visible:o,onClose:n,purchaseData:c,view:d}=e;const[N,R]=(0,s.useState)(1),[w,k]=(0,s.useState)(""),[Z,z]=(0,s.useState)(null),[A,T]=(0,s.useState)(""),[L,q]=(0,s.useState)(0),[F,I]=(0,s.useState)(0),[E,_]=(0,s.useState)([]),[B,M]=(0,s.useState)(null),[O,P]=(0,s.useState)(null),[U,D]=(0,s.useState)(!1),[Q,H]=(0,s.useState)(!1),[K,$]=(0,s.useState)(!1),[V,X]=(0,s.useState)(""),[Y,G]=(0,s.useState)(""),[W,J]=(0,s.useState)(""),[ee,ae]=(0,s.useState)(""),te=(0,l.I0)(),{progress:se}=(0,l.v9)((e=>e.file)),ie=(0,g.Tg)("purchaseRequest","pay"),re=(0,g.Tg)("purchaseRequest","reject"),oe=(0,g.Tg)("purchaseRequest","authorize"),ne=null===(a=(0,l.v9)((e=>e.auth.user)))||void 0===a||null===(t=a.data)||void 0===t?void 0:t.user,ce=(0,s.useRef)(),le=(0,s.useRef)(),de=(0,l.v9)((e=>e.provider.providers)),ue=(0,l.v9)((e=>e.provider.accounts)),{purchaseRequests:pe,filters:he}=(0,l.v9)((e=>e.purchaseRequest));(0,s.useEffect)((()=>{te((0,x.Fr)())}),[te]),(0,s.useEffect)((()=>{W&&te((0,x.j7)(W))}),[te,W]),(0,s.useEffect)((()=>{var e;Y&&""!==Y&&te((e=Y,async a=>{try{const t=await j.Z.get("".concat(b.Z.instance.baseURL,"/api/pending/details/purchaseRequest?provider_id=").concat(e),{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:y.lL,payload:t.data})}catch(t){a({type:y.MH,payload:{msg:t.response.statusText,status:t.response.status}})}}))}),[te,Y,c]),(0,s.useEffect)((()=>{var e,a,t;c&&(k(c.id),G(c.quote.id),_(null===(e=c.files)||void 0===e?void 0:e.filter((e=>e.tag===p.O.img))),M(null===(a=c.files)||void 0===a?void 0:a.find((e=>e.tag===p.O.invoice))),P(null===(t=c.files)||void 0===t?void 0:t.find((e=>e.tag===p.O.receipt))),T(c.title),q(c.totalAmount),I(c.paymentAmount),D(!!c.totalPaymentApproved),H(!!c.totalPaymentModified),J(c.provider_id),ae(c.provider_account_id),$(c.paymentWithoutInvoice),X(c.paymentDate))}),[c]);const me=(0,s.useCallback)((()=>{k(""),G(""),T(""),q(""),I(""),_([])}),[]),ve=e=>{E.length>0?Promise.all(E.map((a=>{if(!a.id)return te((0,h.cT)(a.file,a.tag,null,e.id,m.K.purchaseRequest,(()=>{})));n(),me()}))).finally((()=>{te(f(pe.current_page,he.filter,he.value))})):(n(),me())},ge=e=>{try{te((0,h.cT)(O.file,O.tag,null,e.id,m.K.purchaseRequest,(()=>{te(f(pe.current_page,he.filter,he.value))})))}catch(a){console.log(a)}};return(0,s.useEffect)((()=>{100===se&&setTimeout((()=>{n(),me()}),3e3)}),[se,n,me]),(0,s.useEffect)((()=>{U&&(H(!1),I(L))}),[U,L]),(0,s.useEffect)((()=>{Q&&D(!1)}),[Q]),(0,C.jsxs)(i.Tk,{visible:o,onClose:n,"aria-labelledby":"ModalForm",size:"xl",children:[(0,C.jsx)(i.p0,{onClose:n,children:(0,C.jsx)(i.fl,{id:"ModalForm",children:c?"".concat(d?"":"Editar"," Solicitud ").concat(c.title):"Nueva Solicitud"})}),(0,C.jsxs)(i.sD,{children:[E.length>0&&E.some((e=>!e.id))&&(0,C.jsxs)(i.yI,{value:se,className:"mb-2",children:[se,"%"]}),O&&!O.id&&(0,C.jsxs)(i.yI,{value:se,className:"mb-2",children:[se,"%"]}),(0,C.jsxs)(i.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:[(0,C.jsx)(i.U6,{role:"presentation",children:(0,C.jsx)(i.AQ,{active:1===N,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===N,onClick:()=>R(1),children:"General"})}),!oe&&!d&&!(null!==c&&void 0!==c&&c.fromQuote)&&(0,C.jsx)(i.U6,{role:"presentation",children:(0,C.jsx)(i.AQ,{active:2===N,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":2===N,onClick:()=>R(2),children:"Pagos pendientes"})}),(d&&"approved"===c.status&&ie||d&&"paid"===c.status)&&(0,C.jsx)(i.U6,{role:"presentation",children:(0,C.jsx)(i.AQ,{active:3===N,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":3===N,onClick:()=>R(3),children:"Tramite de pago"})})]}),(0,C.jsxs)(i.gr,{children:[(0,C.jsx)(i.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===N,children:(0,C.jsxs)(i.lx,{className:"mt-3",children:[c&&c.fromQuote&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)("div",{className:"mb-3 d-flex",children:[(0,C.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,C.jsx)(i.L8,{children:"Proveedor"}),(0,C.jsxs)(i.LX,{"aria-label":"provider",onChange:e=>J(e.target.value),value:W,disabled:d||(null===c||void 0===c?void 0:c.fromQuote),children:[(0,C.jsx)("option",{value:"",children:"Selecciona..."}),de.data.map((e=>{let{id:a,name:t}=e;return(0,C.jsx)("option",{value:a,children:t},a)}))]})]}),(0,C.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,C.jsx)(i.L8,{children:"Cuenta"}),(0,C.jsxs)(i.LX,{"aria-label":"providerAccount",onChange:e=>ae(e.target.value),value:ee,disabled:d,children:[(0,C.jsx)("option",{value:"",children:"Selecciona..."}),null===ue||void 0===ue||null===(r=ue.data)||void 0===r?void 0:r.map((e=>{let{id:a,clabe:t,bank:s}=e;return(0,C.jsxs)("option",{value:a,children:[s.name," - ",t]},a)}))]})]})]}),B&&(0,C.jsx)("div",{className:"mb-3 d-flex",children:(0,C.jsx)(v.sZ,{file:B,onDelete:e=>{M(null)},viewMode:c})}),(0,C.jsx)("div",{className:"mb-3",children:(0,C.jsx)(i.EC,{id:"paymentWithoutInvoice",label:"Tramitar pago sin factura",checked:K,onChange:e=>$(e.target.checked),disabled:d||(null===c||void 0===c?void 0:c.fromQuote)})})]}),(0,C.jsxs)("div",{className:"mb-3",children:[(0,C.jsx)(i.L8,{children:"T\xedtulo"}),(0,C.jsx)(i.jO,{type:"text",id:"title",placeholder:"T\xedtulo de la solicitud",value:A,onChange:e=>T(e.target.value),disabled:d})]}),(0,C.jsxs)("div",{className:"mb-3",children:[(0,C.jsx)(i.L8,{children:"Monto"}),(0,C.jsx)(i.jO,{type:"number",id:"totalAmount",placeholder:"0",value:L,onChange:e=>q(e.target.value),disabled:d||(null===c||void 0===c?void 0:c.fromQuote)})]}),!d&&(0,C.jsxs)("div",{className:"mb-3",children:[(0,C.jsxs)(i.L8,{children:["Sube ",(0,C.jsx)("b",{children:"im\xe1genes"})," para la solicitud (opcional)"]}),(0,C.jsx)(i.jO,{ref:ce,type:"file",id:"imgFile",onChange:e=>{if(!e.target.files[0])return;let a={localName:e.target.files[0].name,tag:p.O.img,file:e.target.files[0]};_([...E,a]),ce.current.value=""},accept:"image/*",text:"Archivos permitidos jpg, png, jpeg (10 MB)"})]}),(0,C.jsx)("div",{className:"mb-3 d-flex",children:E.map(((e,a)=>(0,C.jsx)(v.sZ,{file:e,onDelete:t=>e.id?_(E.filter((e=>e.id!==t))):_(E.filter(((e,t)=>a!==t))),viewMode:d},e.tag)))}),(d&&oe||"approved"===(null===c||void 0===c?void 0:c.status)||"paid"===(null===c||void 0===c?void 0:c.status))&&(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)("div",{className:"mb-3",children:(0,C.jsx)(i.EC,{id:"totalPaymentApproved",label:"Se aprueba monto de pago",checked:U,onChange:e=>D(e.target.checked),disabled:d&&"approved"===c.status||"paid"===c.status})}),(0,C.jsx)("div",{className:"mb-3",children:(0,C.jsx)(i.EC,{id:"totalPaymentModified",label:"Se modifica monto de pago",checked:Q,onChange:e=>H(e.target.checked),disabled:d&&"approved"===c.status||"paid"===c.status})}),Q&&(0,C.jsxs)("div",{className:"mb-3",children:[(0,C.jsx)(i.L8,{children:"Monto"}),(0,C.jsx)(i.jO,{type:"number",id:"amount",placeholder:"0",value:F,onChange:e=>I(e.target.value),disabled:d&&"approved"===c.status||"paid"===c.status})]}),Q&&(0,C.jsx)("div",{className:"mb-3",children:(0,C.jsxs)(i.L8,{className:"fw-bold",children:["Saldo $",(0,g.uf)(L-F)]})})]})]})}),(0,C.jsx)(i.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:2===N}),(0,C.jsx)(i.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:3===N,children:(0,C.jsxs)(i.lx,{className:"mt-3",children:[(0,C.jsxs)("div",{className:"mb-3",children:[(0,C.jsx)(i.L8,{children:"Dia de pago"}),(0,C.jsx)(i.jO,{type:"date",id:"paymentDate",value:V,onChange:e=>X(e.target.value),disabled:d&&"paid"===c.status})]}),d&&"paid"!==c.status&&(0,C.jsxs)("div",{className:"mb-3",children:[(0,C.jsx)(i.L8,{children:"Adjuntar comprobante de pago"}),(0,C.jsx)(i.jO,{type:"file",ref:le,id:"receiptFile",onChange:e=>P({file:e.target.files[0],tag:p.O.receipt,localName:e.target.files[0].name}),text:"Archivos permitidos jpg, pdf, png, xlxs (10 MB)"})]}),(0,C.jsx)("div",{className:"mb-3 d-flex",children:O&&(0,C.jsx)(v.sZ,{file:O,onDelete:e=>{P(null),le.current.value=""},viewMode:d&&"paid"===c.status})})]})})]})]}),(0,C.jsxs)(i.Ym,{children:[(0,C.jsx)(i.u5,{color:"secondary",onClick:n,children:"Cerrar"}),"approved"!==(null===c||void 0===c?void 0:c.status)&&!ie&&"paid"!==(null===c||void 0===c?void 0:c.status)&&(0,C.jsx)(i.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();try{let e={quote_id:Y,title:A,paymentAmount:F,totalAmount:L,provider_id:W,provider_account_id:ee,paymentWithoutInvoice:K,totalPaymentApproved:U,totalPaymentModified:Q};te(c?((e,a,t)=>async s=>{try{const i=await j.Z.put("".concat(b.Z.instance.baseURL,"/api/purchaseRequest/").concat(a),e,{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:y.kX,payload:i.data.data}),t(i.data)}catch(i){s({type:y.MH,payload:{msg:i.response.statusText,status:i.response.status}}),t({success:!1,message:i.message})}})(e,w,(e=>{e.success?(te((0,S.f)((0,v.Kv)({msg:"Solicitud actualizada correctamente.",title:"Solicitudes de compra",type:"success"}))),ve(e.data)):te((0,S.f)((0,v.Kv)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})):((e,a)=>async t=>{try{const s=await j.Z.post("".concat(b.Z.instance.baseURL,"/api/purchaseRequest"),e,{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:y.LB,payload:s.data.data}),a(s.data)}catch(s){t({type:y.MH,payload:{msg:s.response.statusText,status:s.response.status}}),a({success:!1,message:s.message})}})({...e,petitioner_id:ne.id},(e=>{e.success?(te((0,S.f)((0,v.Kv)({msg:"Solicitud realizada correctamente.",title:"Solicitudes de compra",type:"success"}))),ve(e.data)):te((0,S.f)((0,v.Kv)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})))}catch(a){console.log(a)}},children:"Guardar"}),d&&(0,C.jsxs)(C.Fragment,{children:["approved"===c.status&&ie&&(0,C.jsx)(i.u5,{color:"info",className:"text-light fw-semibold",onClick:()=>{try{if(!V)return void alert("Selecciona fecha de pago");if(!O)return void alert("Adjunta comprobante de pago");te((e={paymentDate:V,user_id:ne.id},a=c.id,t=e=>{e.success&&(ge(e.data),te((0,S.f)((0,v.Kv)({msg:e.message,type:"success"}))),u().fire({title:"Solicitud pagada"}))},async s=>{try{const i=await j.Z.put("".concat(b.Z.instance.baseURL,"/api/pay/purchaseRequest/").concat(a),e,{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:y.kX,payload:i.data.data}),t(i.data)}catch(i){s({type:y.MH,payload:{msg:i.response.statusText,status:i.response.status}}),t({success:!1,message:i.message})}}))}catch(s){u().showValidationMessage("Request failed: ".concat(s))}var e,a,t},children:"Pagar"}),"paid"!==c.status&&re&&"approved"!==c.status&&!c.fromQuote&&(0,C.jsx)(i.u5,{color:"danger",className:"text-light fw-semibold",onClick:()=>{u().fire({title:"Escribe un motivo del rechazo",input:"textarea",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Enviar",confirmButtonColor:"#E94834",showLoaderOnConfirm:!0,preConfirm:async e=>{try{if(!e)return void u().showValidationMessage("\n            Escribe una observacion\n          ");te((a={observation:e,user_id:ne.id},t=c.id,s=e=>{e.success&&te((0,S.f)((0,v.Kv)({msg:"Solicitud rechazada",type:"success"})))},async e=>{try{const i=await j.Z.put("".concat(b.Z.instance.baseURL,"/api/reject/purchaseRequest/").concat(t),a,{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:y.kX,payload:i.data.data}),s(i.data)}catch(i){e({type:y.MH,payload:{msg:i.response.statusText,status:i.response.status}}),s({success:!1,message:i.message})}}))}catch(i){u().showValidationMessage("\n            Request failed: ".concat(i,"\n          "))}var a,t,s},allowOutsideClick:()=>!u().isLoading()}).then((e=>{e.isConfirmed&&u().fire({title:"Solicitud rechazada correctamente"})}))},children:"Rechazar"})]})]})]})},R=e=>{var a,t;let{visible:r,onClose:o,purchaseRequestID:n}=e;const c=(0,l.I0)(),[d,u]=(0,s.useState)(""),{observations:p,loadingObservations:h}=(0,l.v9)((e=>e.purchaseRequest)),m=null===(a=(0,l.v9)((e=>e.auth.user)))||void 0===a||null===(t=a.data)||void 0===t?void 0:t.user;(0,s.useEffect)((()=>{var e;c((e=n,async a=>{try{const t=await j.Z.get("".concat(b.Z.instance.baseURL,"/api/purchaseRequestObservation?purchase_request_id=").concat(e),{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:y.oj,payload:t.data})}catch(t){a({type:y.MH,payload:{msg:t.response.statusText,status:t.response.status}})}}))}),[c,n]);return(0,C.jsxs)(i.Tk,{visible:r,onClose:o,"aria-labelledby":"ModalForm",children:[(0,C.jsx)(i.p0,{onClose:o,children:(0,C.jsx)(i.fl,{id:"ModalForm",children:"Observaciones"})}),(0,C.jsx)(i.sD,{children:h?(0,C.jsx)("div",{className:"d-flex justify-content-center",children:(0,C.jsx)(i.LQ,{color:"primary",variant:"grow"})}):(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(i.Sx,{striped:!0,responsive:!0,children:[(0,C.jsx)(i.V,{children:(0,C.jsxs)(i.T6,{children:[(0,C.jsx)(i.is,{scope:"col",children:"Usuario"}),(0,C.jsx)(i.is,{scope:"col",children:"Observaci\xf3n"}),(0,C.jsx)(i.is,{scope:"col",children:"Fecha"})]})}),(0,C.jsx)(i.NR,{children:null===p||void 0===p?void 0:p.map((e=>(0,C.jsxs)(i.T6,{children:[(0,C.jsx)(i.NN,{children:e.user.name}),(0,C.jsx)(i.NN,{children:e.message}),(0,C.jsx)(i.NN,{children:(0,g.mY)(e.created_at)})]},e.id)))})]}),(0,C.jsx)(i.lx,{className:"mt-3",children:(0,C.jsx)("div",{className:"mb-3",children:(0,C.jsx)(i.PB,{id:"obs",label:"Observaci\xf3n",rows:2,text:"Debe tener entre 8 y 20 palabras.",value:d,onChange:e=>u(e.target.value)})})})]})}),(0,C.jsxs)(i.Ym,{children:[(0,C.jsx)(i.u5,{color:"secondary",onClick:o,children:"Cerrar"}),(0,C.jsx)(i.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();try{if(!d||""===d)return void c((0,S.f)((0,v.Kv)({msg:"Escribe un mensaje",title:"Error",type:"error"})));let e={message:d,user_id:m.id,purchase_request_id:n};c(((e,a)=>async t=>{try{const s=await j.Z.post("".concat(b.Z.instance.baseURL,"/api/purchaseRequestObservation"),e,{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:y.L4,payload:s.data.data}),a(s.data)}catch(s){t({type:y.MH,payload:{msg:s.response.statusText,status:s.response.status}}),a({success:!1,message:s.message})}})(e,(e=>{e.success?c((0,S.f)((0,v.Kv)({msg:"Mensaje guardado con exito",title:"Observacion",type:"success"}))):c((0,S.f)((0,v.Kv)({msg:"Ha ocurrido un error",title:"Observacion",type:"error"})))})))}catch(a){console.log(a)}u("")},children:"Guardar"})]})]})},w=e=>{let{data:a}=e;const[t,o]=(0,s.useState)(!1),[n,d]=(0,s.useState)(!1),[p,x]=(0,s.useState)(null),[f,w]=(0,s.useState)(!1),k=(0,l.I0)(),Z=(0,g.Tg)("purchaseRequest","delete"),z=(0,g.Tg)("purchaseRequest","edit"),A=(0,g.Tg)("purchaseRequest","show"),T=e=>{u().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((a=>{a.isConfirmed&&(k(((e,a)=>async t=>{try{const s=await j.Z.delete("".concat(b.Z.instance.baseURL,"/api/purchaseRequest/").concat(e),{headers:{...b.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:y.jx,payload:e}),a(s.data)}catch(s){t({type:y.MH,payload:{msg:s.response.statusText,status:s.response.status}}),a({success:!1,message:s.message})}})(e,(a=>{a.success?(k((0,S.f)((0,v.Kv)({msg:"Solicitud eliminada correctamente.",title:"Solicitudes de pago",type:"success"}))),k((0,h.MM)(e,m.K.purchaseRequest))):k((0,S.f)((0,v.Kv)({msg:"Ha ocurrido un error.",title:"Solicitudes de pago",type:"error"})))}))),u().fire({title:"Eliminado!",text:"La solicitud ha sido eliminada.",icon:"success"}))}))};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(i.Sx,{striped:!0,responsive:!0,children:[(0,C.jsx)(i.V,{children:(0,C.jsxs)(i.T6,{children:[(0,C.jsx)(i.is,{scope:"col",children:"Folio"}),(0,C.jsx)(i.is,{scope:"col",children:"Solicitante"}),(0,C.jsx)(i.is,{scope:"col",children:"Titulo"}),(0,C.jsx)(i.is,{scope:"col",children:"Fecha de solicitud"}),(0,C.jsx)(i.is,{scope:"col",children:"Monto"}),(0,C.jsx)(i.is,{scope:"col",children:"Status"}),(0,C.jsx)(i.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,C.jsx)(i.NR,{children:null===a||void 0===a?void 0:a.map((e=>(0,C.jsxs)(i.T6,{children:[(0,C.jsx)(i.is,{scope:"row",children:e.id}),(0,C.jsx)(i.NN,{children:e.petitioner.name}),(0,C.jsx)(i.NN,{children:e.title}),(0,C.jsx)(i.NN,{children:(0,g.iT)(e.created_at)}),(0,C.jsxs)(i.NN,{children:["$",(0,g.uf)(e.paymentAmount)]}),(0,C.jsx)(i.NN,{children:(0,C.jsx)(i.C_,{style:{backgroundColor:g.uD[e.status]},children:g.a4[e.status]})}),(0,C.jsx)(i.NN,{className:"text-center overflow-visible",children:(0,C.jsxs)(i.w5,{variant:"dropdown",children:[(0,C.jsx)(i.SQ,{href:"#",color:"light",children:(0,C.jsx)(r.Z,{icon:c.t,title:"Opciones",size:"lg"})}),(0,C.jsxs)(i.$H,{className:"position-fixed",children:[A&&(0,C.jsx)(i.$f,{style:{cursor:"pointer"},onClick:()=>{x(e),w(!0),o(!t)},children:"Ver solicitud"}),z&&"approved"!==e.status&&"paid"!==e.status&&(0,C.jsx)(i.$f,{style:{cursor:"pointer"},onClick:()=>{x(e),o(!t)},children:"Editar"}),Z&&"approved"!==e.status&&"paid"!==e.status&&!e.fromQuote&&(0,C.jsx)(i.$f,{style:{cursor:"pointer"},onClick:()=>T(e.id),children:"Eliminar"}),(0,C.jsx)(i.$f,{style:{cursor:"pointer"},onClick:()=>{x(e),d(!n)},children:"Ver observaciones"})]})]})})]},e.id)))})]}),t&&(0,C.jsx)(N,{visible:t,onClose:()=>{o(!1),w(!1)},purchaseData:p,view:f}),n&&(0,C.jsx)(R,{purchaseRequestID:null===p||void 0===p?void 0:p.id,visible:n,onClose:()=>d(!1)})]})},k=()=>{const[e,a]=(0,s.useState)(!1),[t,c]=(0,s.useState)("provider"),[d,u]=(0,s.useState)(""),[p,h]=(0,s.useState)(1),m=(0,l.I0)(),{currentPage:x,last_page:j,data:y}=(0,l.v9)((e=>e.purchaseRequest.purchaseRequests)),b=(0,l.v9)((e=>e.purchaseRequest.loading));return(0,s.useEffect)((()=>{m(f(p,t,d))}),[p,m]),(0,s.useEffect)((()=>{x&&h(x)}),[x]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(i.xH,{children:[(0,C.jsxs)(i.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,C.jsx)("h4",{children:"Solicitudes de pago"}),(0,C.jsxs)("div",{className:"d-flex gap-2",children:[(0,g.Tg)("purchaseRequest","create")&&(0,C.jsxs)(i.u5,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>a(!e),children:[(0,C.jsx)(r.Z,{icon:o.q,size:"xl",className:"me-1"}),"Nuevo"]}),(0,C.jsx)(i.u5,{color:"info",className:"text-light align-content-center d-flex",children:(0,C.jsx)(r.Z,{icon:n.j,size:"xl"})})]})]}),(0,C.jsxs)(i.sl,{children:[(0,C.jsxs)(i.lx,{children:[(0,C.jsx)(i.L8,{children:"Filtros de busqueda"}),(0,C.jsxs)("div",{className:"mb-3 d-flex",children:[(0,C.jsx)("div",{className:"flex-fill me-2",children:(0,C.jsx)(i.LX,{value:t,onChange:e=>c(e.target.value),"aria-label":"caseFilter",options:[{label:"Proveedor",value:"provider"},{label:"Solicitante",value:"petitioner"},{label:"Status",value:"status"}]})}),(0,C.jsx)("div",{className:"flex-fill me-2",children:"status"!==t?(0,C.jsx)(i.jO,{value:d,onChange:e=>u(e.target.value),type:"text",id:"provider",placeholder:"Ingresar texto"}):(0,C.jsx)(i.LX,{value:d,onChange:e=>u(e.target.value),"aria-label":"caseFilter",options:[{label:"Pendientes",value:"pending"},{label:"Revisadas",value:"review"},{label:"Aprobadas",value:"approved"},{label:"Rechazadas",value:"rejects"}]})})]}),(0,C.jsx)(i.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>m(f(p,t,d)),children:"Buscar"})]}),b?(0,C.jsx)("div",{className:"d-flex justify-content-center",children:(0,C.jsx)(i.LQ,{color:"primary",variant:"grow"})}):(0,C.jsx)(w,{data:y})]}),(0,C.jsx)(i.Bt,{children:(0,C.jsx)(v.bD,{currentPage:p,lastPage:j,setCurrentPage:h})})]}),(0,C.jsx)(N,{visible:e,onClose:()=>a(!1)})]})}}}]);
//# sourceMappingURL=524.a0a10d36.chunk.js.map