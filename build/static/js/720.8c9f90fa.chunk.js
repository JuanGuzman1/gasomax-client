"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[720],{4880:(e,t,a)=>{a.d(t,{GB:()=>n,GU:()=>c,M7:()=>d,jH:()=>r,yq:()=>l});var s=a(8372),i=a(2156),o=a(4836);const r=(e,t,a)=>async r=>{try{const l=await s.c.get("".concat(o.c.instance.baseURL,"/api/department?").concat(t,"=").concat(a,"&page=").concat(e),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});r({type:i.Uj,payload:l.data})}catch(l){r({type:i.G4,payload:{msg:l.response.statusText,status:l.response.status}})}},l=(e,t)=>async a=>{try{const r=await s.c.post("".concat(o.c.instance.baseURL,"/api/department"),e,{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:i._e,payload:r.data.data}),t(r.data)}catch(r){a({type:i.G4,payload:{msg:r.response.statusText,status:r.response.status}}),t({success:!1,message:r.message})}},n=(e,t,a)=>async r=>{try{const l=await s.c.put("".concat(o.c.instance.baseURL,"/api/department/").concat(t),e,{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});r({type:i.gR,payload:l.data.data}),a(l.data)}catch(l){r({type:i.G4,payload:{msg:l.response.statusText,status:l.response.status}}),a({success:!1,message:l.message})}},c=(e,t)=>async a=>{try{const r=await s.c.delete("".concat(o.c.instance.baseURL,"/api/department/").concat(e),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:i.mw,payload:e}),t(r.data)}catch(r){a({type:i.G4,payload:{msg:r.response.statusText,status:r.response.status}}),t({success:!1,message:r.message})}},d=()=>async e=>{try{const t=await s.c.get("".concat(o.c.instance.baseURL,"/api/select/department"),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:i.Av,payload:t.data})}catch(t){e({type:i.G4,payload:{msg:t.response.statusText,status:t.response.status}})}}},2984:(e,t,a)=>{a.d(t,{Gq:()=>p,I5:()=>r,Md:()=>d,Ul:()=>u,Y2:()=>l,kR:()=>n,sD:()=>c});var s=a(8372),i=a(2156),o=a(4836);const r=(e,t,a)=>async r=>{try{const l=await s.c.get("".concat(o.c.instance.baseURL,"/api/provider?").concat(t,"=").concat(a,"&page=").concat(e),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});r({type:i.GS,payload:{...l.data,filters:{filter:t,value:a}}})}catch(l){r({type:i.r4,payload:{msg:l.response.statusText,status:l.response.status}})}},l=(e,t)=>async a=>{try{const r=await s.c.post("".concat(o.c.instance.baseURL,"/api/provider"),e,{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:i.uC,payload:r.data.data}),t(r.data)}catch(r){a({type:i.r4,payload:{msg:r.response.statusText,status:r.response.status}}),t({success:!1,message:r.message})}},n=(e,t,a)=>async r=>{try{const l=await s.c.put("".concat(o.c.instance.baseURL,"/api/provider/").concat(t),e,{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});r({type:i.wJ,payload:l.data.data}),a(l.data)}catch(l){r({type:i.r4,payload:{msg:l.response.statusText,status:l.response.status}}),a({success:!1,message:l.message})}},c=(e,t)=>async a=>{try{const r=await s.c.delete("".concat(o.c.instance.baseURL,"/api/provider/").concat(e),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:i.KY,payload:e}),t(r.data)}catch(r){a({type:i.r4,payload:{msg:r.response.statusText,status:r.response.status}}),t({success:!1,message:r.message})}},d=(e,t)=>async a=>{try{const r=await s.c.get("".concat(o.c.instance.baseURL,"/api/excel/provider/export?").concat(e,"=").concat(t),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")},responseType:"blob"}),l=window.URL.createObjectURL(new Blob([r.data])),n=document.createElement("a");n.href=l,n.setAttribute("download","Proveedores.xlsx"),document.body.appendChild(n),n.click(),document.body.removeChild(n),window.URL.revokeObjectURL(l),a({type:i.iA})}catch(r){a({type:i.r4,payload:{msg:r.response.statusText,status:r.response.status}})}},u=()=>async e=>{try{const t=await s.c.get("".concat(o.c.instance.baseURL,"/api/select/provider"),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:i.qK,payload:t.data})}catch(t){e({type:i.r4,payload:{msg:t.response.statusText,status:t.response.status}})}},p=e=>async t=>{try{const a=await s.c.get("".concat(o.c.instance.baseURL,"/api/select/account/provider/").concat(e),{headers:{...o.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:i.WY,payload:a.data})}catch(a){t({type:i.r4,payload:{msg:a.response.statusText,status:a.response.status}})}}},868:(e,t,a)=>{a.d(t,{Im:()=>v,OO:()=>l,SU:()=>d,Sk:()=>n,UT:()=>u,YD:()=>p,_x:()=>c,iy:()=>o,my:()=>r});var s=a(9427),i=a(8044);const o=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),r=e=>s.CS.fromISO(e).toLocaleString(s.CS.DATE_SHORT),l=e=>s.CS.fromISO(e).toLocaleString(s.CS.DATETIME_SHORT),n=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:t?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:t?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},c={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},d={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},u={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},p={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},v=(e,t)=>{const a=(0,i.w1)((e=>e.auth.permissions)),s=(0,i.w1)((e=>e.auth.modules)).find((t=>t.submodule===e));return!!s&&!!a.find((e=>e.submodule===s.submodule&&e.permission===t))}},8128:(e,t,a)=>{a.d(t,{i:()=>s});const s={provider:"provider",purchaseRequest:"purchaseRequest",quote:"quote",user:"user"}},6960:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var s=a(9060),i=a(3084),o=a(5564),r=a(2276),l=a(3088),n=a(8044),c=a(7316),d=a(868),u=a(6552),p=a(9012),v=a.n(p),h=a(2984),m=a(5064),x=a(686),g=a(8128),j=a(8372),y=a(2156),f=a(4836);var b=a(2692);var S=a(2496);const C=e=>{var t,a;let{visible:o,onClose:r,quoteID:l}=e;const u=(0,n.OY)(),[p,v]=(0,s.useState)(""),{observations:h,loadingObservations:x}=(0,n.w1)((e=>e.quote)),g=null===(t=(0,n.w1)((e=>e.auth.user)))||void 0===t||null===(a=t.data)||void 0===a?void 0:a.user;(0,s.useEffect)((()=>{u((0,b.Ab)(l))}),[u,l]);return(0,S.jsxs)(i.U5,{visible:o,onClose:r,"aria-labelledby":"ModalObsForm",keyboard:!1,backdrop:"static",children:[(0,S.jsx)(i.gO,{onClose:r,children:(0,S.jsx)(i._K,{id:"ModalObsForm",children:"Observaciones"})}),(0,S.jsx)(i.EB,{children:x?(0,S.jsx)("div",{className:"d-flex justify-content-center",children:(0,S.jsx)(i.GG,{color:"primary",variant:"grow"})}):(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(i.k7,{striped:!0,responsive:!0,children:[(0,S.jsx)(i.Iy,{children:(0,S.jsxs)(i.uH,{children:[(0,S.jsx)(i.Qr,{scope:"col",children:"Usuario"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Observaci\xf3n"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Fecha"})]})}),(0,S.jsx)(i.g7,{children:null===h||void 0===h?void 0:h.map((e=>(0,S.jsxs)(i.uH,{children:[(0,S.jsx)(i.kz,{children:e.user.name}),(0,S.jsx)(i.kz,{children:e.message}),(0,S.jsx)(i.kz,{children:(0,d.OO)(e.created_at)})]},e.id)))})]}),(0,S.jsx)(i.YR,{className:"mt-3",children:(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.cF,{id:"obs",label:"Observaci\xf3n",rows:2,value:p,onChange:e=>v(e.target.value)})})})]})}),(0,S.jsxs)(i.yI,{children:[(0,S.jsx)(i.uE,{color:"secondary",onClick:r,children:"Cerrar"}),(0,S.jsx)(i.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();try{if(!p||""===p)return void u((0,m.I)((0,c.oN)({msg:"Escribe un mensaje",title:"Error",type:"error"})));let e={message:p,user_id:g.id,quote_id:l};u((0,b.qU)(e,(e=>{e.success?u((0,m.I)((0,c.oN)({msg:"Mensaje guardado con exito",title:"Observacion",type:"success"}))):u((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error",title:"Observacion",type:"error"})))})))}catch(t){console.log(t)}v("")},children:"Guardar"})]})]})};var N=a(4880);const z=e=>{var t,a,l;let{visible:p,onClose:z,quoteData:k,view:I}=e;const[w,A]=(0,s.useState)(1),[E,q]=(0,s.useState)(""),[P,F]=(0,s.useState)(""),[Q,R]=(0,s.useState)(""),[T,_]=(0,s.useState)([]),[B,O]=(0,s.useState)(""),[U,D]=(0,s.useState)(""),[L,M]=(0,s.useState)(""),[G,W]=(0,s.useState)([]),[H,Y]=(0,s.useState)([]),[V,J]=(0,s.useState)(null),[K,$]=(0,s.useState)(""),[X,Z]=(0,s.useState)(0),[ee,te]=(0,s.useState)([]),[ae,se]=(0,s.useState)([]),[ie,oe]=(0,s.useState)(""),[re,le]=(0,s.useState)(""),[ne,ce]=(0,s.useState)(""),[de,ue]=(0,s.useState)(""),[pe,ve]=(0,s.useState)(!1),[he,me]=(0,s.useState)(0),[xe,ge]=(0,s.useState)(""),[je,ye]=(0,s.useState)(""),[fe,be]=(0,s.useState)(""),[Se,Ce]=(0,s.useState)(0),[Ne,ze]=(0,s.useState)(""),[ke,Ie]=(0,s.useState)(!1),[we,Ae]=(0,s.useState)(!1),[Ee,qe]=(0,s.useState)(!1),[Pe,Fe]=(0,s.useState)(""),Qe=(0,n.OY)(),{progress:Re}=(0,n.w1)((e=>e.file)),{providers:Te,accounts:_e}=(0,n.w1)((e=>e.provider)),Be=(0,d.Im)("quotes","pay"),Oe=((0,d.Im)("quotes","reject"),(0,d.Im)("quotes","approve")),Ue=(0,d.Im)("quotes","authorize.minor.5000"),De=(0,d.Im)("quotes","authorize.mayor.5000"),Le=(0,d.Im)("quotes","upload.quote"),Me=(0,s.useRef)(),Ge=(0,s.useRef)(),We=(0,s.useRef)(),He=null===(t=(0,n.w1)((e=>e.auth.user)))||void 0===t||null===(a=t.data)||void 0===a?void 0:a.user,Ye=(0,n.w1)((e=>e.quoteConcept.charges)),Ve=(0,n.w1)((e=>e.quoteConcept.concepts)),Je=(0,n.w1)((e=>e.department.departments)),Ke=(0,n.w1)((e=>e.unit.lines)),$e=(0,n.w1)((e=>e.unit.units)),{quotes:Xe,filters:Ze,progress:et}=(0,n.w1)((e=>e.quote)),[tt,at]=(0,s.useState)(!1);(0,s.useEffect)((()=>{Qe((0,h.Ul)())}),[Qe]),(0,s.useEffect)((()=>{Qe((async e=>{try{const t=await j.c.get("".concat(f.c.instance.baseURL,"/api/select/line"),{headers:{...f.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:y.sZ,payload:t.data})}catch(t){e({type:y.Wq,payload:{msg:t.response.statusText,status:t.response.status}})}})),Qe((0,N.M7)())}),[Qe]),(0,s.useEffect)((()=>{if(!Je)return;let e=["NOMINA","TESORERIA","CONTRALORIA","CARWASH","RESTAURANTE","MAXSTORE"],t=Je.data.filter((t=>!e.includes(t.name)));_(t)}),[Je]),(0,s.useEffect)((()=>{re&&Qe((e=>async t=>{try{const a=await j.c.get("".concat(f.c.instance.baseURL,"/api/select/unit/line?line=").concat(e),{headers:{...f.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:y.GE,payload:a.data})}catch(a){t({type:y.Wq,payload:{msg:a.response.statusText,status:a.response.status}})}})(re))}),[Qe,re]),(0,s.useEffect)((()=>{B&&Qe((e=>async t=>{try{const a=await j.c.get("".concat(f.c.instance.baseURL,"/api/select/charge?department_id=").concat(e),{headers:{...f.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:y.ei,payload:a.data})}catch(a){t({type:y.C2,payload:{msg:a.response.statusText,status:a.response.status}})}})(B))}),[Qe,B]),(0,s.useEffect)((()=>{Q&&Qe((e=>async t=>{try{const a=await j.c.get("".concat(f.c.instance.baseURL,"/api/select/concept/charge?charge=").concat(e),{headers:{...f.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:y.qu,payload:a.data})}catch(a){t({type:y.C2,payload:{msg:a.response.statusText,status:a.response.status}})}})(Q))}),[Qe,Q]),(0,s.useEffect)((()=>{xe&&Qe((0,h.Gq)(xe))}),[Qe,xe]),(0,s.useEffect)((()=>{let e=[];for(let t=0;t<X;t++)e.push(t);se(e)}),[X]),(0,s.useEffect)((()=>{we&&qe(!1)}),[we]),(0,s.useEffect)((()=>{Ee&&Ae(!1)}),[Ee]),(0,s.useEffect)((()=>{var e;if(k&&(q(k.id),F(k.title),M(k.description),O(k.quote_concept.department_id),R(k.quote_concept.charge),D(k.quote_concept.id),le(k.line),ce(k.unit),Z(k.numProviders),te(JSON.parse(k.recommendedProviders)),W(k.images),Y(k.files),ue(null===(e=k.files.find((e=>e.selectedQuoteFile)))||void 0===e?void 0:e.id),ve(k.rejectQuotes),me(k.approvedAmount),Ae(k.onePayment),qe(k.multiplePayments),oe(k.suggestedProvider),ge(k.provider_id),ye(k.provider_account_id),Ie(k.paymentWithoutInvoice),!k.paymentWithoutInvoice)){var t,a;let e=null===k||void 0===k||null===(t=k.payments)||void 0===t||null===(a=t.find((e=>!e.purchase_request_pending_id&&e.fromQuote)))||void 0===a?void 0:a.files,s=null===e||void 0===e?void 0:e.find((e=>e.tag===u.k.invoice));J(s)}}),[k]);const st=(0,s.useCallback)((()=>{W([])}),[]),it=e=>{e.preventDefault();try{if(!P||""===P)return void Qe((0,m.I)((0,c.oN)({msg:"Falta agregar un titulo",type:"error"})));if(!B||""===B)return void Qe((0,m.I)((0,c.oN)({msg:"Falta seleccionar departamento",type:"error"})));if(!Q||""===Q)return void Qe((0,m.I)((0,c.oN)({msg:"Falta seleccionar Cargo y Concepto",type:"error"})));if(!L||""===L)return void Qe((0,m.I)((0,c.oN)({msg:"Falta agregar descripcion",type:"error"})));if(!re||""===re)return void Qe((0,m.I)((0,c.oN)({msg:"Falta seleccionar Giro y Unidad",type:"error"})));let e;pe?e="rejected":he>0&&(e="approved");let t={title:P,provider_id:xe,quote_concept_id:U,description:L,numProviders:X,recommendedProviders:JSON.stringify(ee),line:re,unit:ne,rejectQuotes:pe,approvedAmount:he,observation:Pe,onePayment:we,multiplePayments:Ee,suggestedProvider:ie,status:e,selectedQuoteID:de};Qe(k?(0,b.s1)(t,E,(e=>{e.success?(Qe((0,m.I)((0,c.oN)({msg:"Solicitud actualizada correctamente.",title:"Solicitudes de compra",type:"success"}))),ot(e.data)):Qe((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})):(0,b.Ap)({...t,petitioner_id:He.id},(e=>{e.success?(Qe((0,m.I)((0,c.oN)({msg:"Solicitud realizada correctamente.",title:"Solicitudes de compra",type:"success"}))),ot(e.data)):Qe((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})))}catch(t){console.log(t)}},ot=e=>{G.length>0?Promise.all(G.map((t=>{if(!t.id)return Qe((0,x.S_)(t.file,t.tag,null,e.id,g.i.quote,(()=>{})));z(),st()}))).finally((()=>{Qe((0,b.gh)(Xe.current_page,Ze.filter,Ze.value))})):(z(),st())},rt=e=>{e.preventDefault();try{if(H.length<=0)return void alert("Agrega cotizaci\xf3nes a la solicitud");Qe((0,b.s1)({status:"inprogress",rejectQuotes:!1,approvedAmount:0},E,(e=>{e.success?(Qe((0,m.I)((0,c.oN)({msg:"Solicitud actualizada correctamente.",title:"Solicitudes de compra",type:"success"}))),H.length>0?Promise.all(H.map((e=>{if(!e.id){let t={file:e.file,tag:e.tag,description:e.description,provider:e.provider,amount:e.amount,deliveryDate:e.deliveryDate,quote_id:E};return Qe((0,b.KE)(t,(()=>{})))}z(),st()}))).finally((()=>{Qe((0,b.gh)(Xe.current_page,Ze.filter,Ze.value))})):(z(),st())):Qe((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})))}catch(t){console.log(t)}},lt=e=>{try{Qe((0,x.S_)(V.file,V.tag,null,e.id,g.i.purchaseRequest,(()=>{Qe((0,b.gh)(Xe.current_page,Ze.filter,Ze.value))})))}catch(t){console.log(t)}},nt=e=>{e.preventDefault();try{v().fire({title:"\xbfEsta seguro de autorizar?",showCancelButton:!0,confirmButtonText:"Autorizar"}).then((e=>{e.isConfirmed&&Qe((0,b.s1)({status:"authorized"},E,(e=>{e.success?(Qe((0,m.I)((0,c.oN)({msg:"Solicitud actualizada correctamente.",title:"Solicitudes de compra",type:"success"}))),z(),st(),v().fire("Autorizado!","","success")):Qe((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})))}))}catch(t){console.log(t)}};return(0,s.useEffect)((()=>{100===Re&&setTimeout((()=>{z(),st()}),3e3)}),[Re,z,st]),(0,s.useEffect)((()=>{100===et&&setTimeout((()=>{z(),st()}),3e3)}),[et,z,st]),(0,s.useEffect)((()=>{pe&&(me(0),ue(""))}),[pe]),(0,s.useEffect)((()=>{var e;if(!de)return void me(0);let t=null===k||void 0===k||null===(e=k.files)||void 0===e?void 0:e.find((e=>e.id===de));t&&(me(t.amount),ve(!1))}),[de,k]),(0,s.useEffect)((()=>{I&&["sentPay","paid"].includes(k.status)||ke&&(J(null),We.current.value="")}),[ke,k,I]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(i.U5,{visible:p,onClose:z,"aria-labelledby":"ModalForm",size:"xl",scrollable:!0,backdrop:"static",children:[(0,S.jsx)(i.gO,{onClose:z,children:(0,S.jsx)(i._K,{id:"ModalForm",children:k?"".concat(I?"":"Editar"," Solicitud ").concat(k.title):"Nueva Solicitud"})}),(0,S.jsxs)(i.EB,{children:[G.length>0&&G.some((e=>!e.id))&&(0,S.jsxs)(i.a4,{value:Re,className:"mb-2",children:[Re,"%"]}),H.length>0&&H.some((e=>!e.id))&&(0,S.jsxs)(i.a4,{value:et,className:"mb-2",children:[et,"%"]}),V&&!(null!==V&&void 0!==V&&V.id)&&(0,S.jsxs)(i.a4,{value:Re,className:"mb-2",children:[Re,"%"]}),(0,S.jsxs)(i.wx,{variant:"tabs",role:"tablist",className:"mt-1",children:[(0,S.jsx)(i.SU,{role:"presentation",children:(0,S.jsx)(i.QJ,{active:1===w,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===w,onClick:()=>A(1),children:"General"})}),I&&(0,S.jsx)(i.SU,{role:"presentation",children:(0,S.jsx)(i.QJ,{active:2===w,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":2===w,onClick:()=>A(2),children:"Cotizaci\xf3nes"})}),(I&&"authorized"===k.status&&Be||I&&"sentPay"===k.status||I&&"paid"===k.status)&&(0,S.jsx)(i.SU,{role:"presentation",children:(0,S.jsx)(i.QJ,{active:3===w,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":3===w,onClick:()=>A(3),children:"Selecci\xf3n de cuenta y proveedor"})})]}),(0,S.jsxs)(i.CY,{children:[(0,S.jsx)(i.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===w,children:(0,S.jsxs)(i.YR,{className:"mt-3",children:[(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsx)(i.Q5,{children:"T\xedtulo(*)"}),(0,S.jsx)(i.Ip,{type:"text",id:"title",placeholder:"T\xedtulo de la solicitud",value:P,onChange:e=>F(e.target.value),disabled:I})]}),(0,S.jsxs)("div",{className:"mb-3 d-flex",children:[(0,S.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,S.jsx)(i.Q5,{children:"Departamento(*)"}),(0,S.jsxs)(i.Wc,{"aria-label":"department",onChange:e=>O(e.target.value),value:B,disabled:I,children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),T.map((e=>{let{id:t,name:a}=e;return(0,S.jsx)("option",{value:t,children:a},a)}))]})]}),(0,S.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,S.jsx)(i.Q5,{children:"Cargo(*)"}),(0,S.jsxs)(i.Wc,{"aria-label":"charge",onChange:e=>R(e.target.value),value:Q,disabled:I,children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),Ye.map((e=>{let{charge:t}=e;return(0,S.jsx)("option",{value:t,children:t},t)}))]})]}),(0,S.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,S.jsx)(i.Q5,{children:"Concepto(*)"}),(0,S.jsxs)(i.Wc,{"aria-label":"concept",onChange:e=>D(e.target.value),value:U,disabled:I,children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),Ve.data.map((e=>{let{id:t,concept:a}=e;return(0,S.jsx)("option",{value:t,children:a},t)}))]})]})]}),(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.cF,{id:"desc",label:"Descripci\xf3n(*)",rows:2,value:L,onChange:e=>M(e.target.value),disabled:I})}),!I&&(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsxs)(i.Q5,{children:["Sube ",(0,S.jsx)("b",{children:"im\xe1genes"})," para la solicitud (opcional)"]}),(0,S.jsx)(i.Ip,{ref:Me,type:"file",id:"imgFile",onChange:e=>{if(!e.target.files[0])return;let t={localName:e.target.files[0].name,file:e.target.files[0]};Me.current.value&&(W([...G,{...t,tag:u.k.img}]),Me.current.value="")},accept:"image/*",text:"Archivos permitidos jpg, png, jpeg (10 MB)"})]}),(0,S.jsx)("div",{className:"mb-3 d-flex",children:G.map(((e,t)=>(0,S.jsx)(c.S_,{file:e,onDelete:a=>e.id?W(G.filter((e=>e.id!==a))):W(G.filter(((e,a)=>t!==a))),viewMode:I},e.tag)))}),(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.e0,{id:"onePayment",label:"Pago en una sola exhibici\xf3n",checked:we,onChange:e=>Ae(e.target.checked),disabled:I})}),(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.e0,{id:"multiplePayments",label:"M\xfaltiples pagos",checked:Ee,onChange:e=>qe(e.target.checked),disabled:I})}),(0,S.jsxs)("div",{className:"mb-3 d-flex",children:[(0,S.jsxs)("div",{className:"flex-fill",children:[(0,S.jsx)(i.Q5,{children:"Giro(*)"}),(0,S.jsxs)(i.Wc,{"aria-label":"line",onChange:e=>le(e.target.value),value:re,disabled:I,children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),Ke.map((e=>(0,S.jsx)("option",{value:e.line,children:e.line},e.line)))]})]}),(0,S.jsxs)("div",{className:"flex-fill mx-2",children:[(0,S.jsx)(i.Q5,{children:"Unidad(*)"}),(0,S.jsxs)(i.Wc,{"aria-label":"unit",onChange:e=>ce(e.target.value),value:ne,disabled:I,children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),$e.data.map((e=>{let{id:t,unit:a}=e;return(0,S.jsx)("option",{value:a,children:a},t)}))]})]}),(0,S.jsxs)("div",{className:"flex-fill",children:[(0,S.jsx)(i.Q5,{htmlFor:"recommendedProviders",children:"Cotizaci\xf3nes requeridas"}),(0,S.jsx)(i.Ip,{type:"number",id:"recommendedProviders",placeholder:"No Cotizaci\xf3nes",onChange:e=>Z(e.target.value),value:X,max:5,min:0,disabled:I})]})]}),ae.map(((e,t)=>(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsxs)(i.Q5,{children:["Proveedor recomendado ",e+1," (opcional)"]}),(0,S.jsxs)(i.Wc,{"aria-label":"charge",onChange:e=>((e,t)=>{if(""===e.target.value)return void te(ee.filter(((e,a)=>a!==t)));let a=[...ee];a[t]=e.target.value?e.target.value:"",te(a)})(e,t),value:ee[t],disabled:I,children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),Te.data.map((e=>{let{id:t,name:a}=e;return(0,S.jsx)("option",{value:a,children:a},t)}))]})]},e))),X>0&&(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsx)(i.Q5,{children:"Proveedor sugerido (No registrado) (opcional)"}),(0,S.jsx)(i.Ip,{type:"text",id:"suggestedProvider",placeholder:"Proveedor sugerido",value:ie,onChange:e=>oe(e.target.value),disabled:I})]})]})}),(0,S.jsx)(i.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:2===w,children:(0,S.jsxs)(i.YR,{className:"mt-3",children:[(Oe&&Le&&"sent"===(null===k||void 0===k?void 0:k.status)||Le&&!Oe&&"authorized"!==(null===k||void 0===k?void 0:k.status)&&"approved"!==(null===k||void 0===k?void 0:k.status)&&"sentPay"!==(null===k||void 0===k?void 0:k.status)&&"paid"!==(null===k||void 0===k?void 0:k.status))&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(i.Q5,{className:"fs-5",children:["A\xf1ade las ",(0,S.jsx)("b",{children:"Cotizaci\xf3nes"})," para la solicitud"]}),(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.Ip,{ref:Ge,type:"file",id:"quoteFile",text:"Archivos permitidos jpg, pdf, png, xlxs (10 MB)"})}),(0,S.jsxs)("div",{className:"d-flex mb-3",children:[(0,S.jsxs)("div",{className:"flex-fill",children:[(0,S.jsx)(i.Q5,{children:"Proveedor(*)"}),(0,S.jsx)(i.Ip,{type:"text",id:"quoteProvider",placeholder:"Proveedor",value:fe,onChange:e=>be(e.target.value)})]}),(0,S.jsxs)("div",{className:"flex-fill mx-2",children:[(0,S.jsx)(i.Q5,{children:"Monto(*)"}),(0,S.jsx)(i.Ip,{type:"number",id:"amount",placeholder:"0",value:Se,onChange:e=>Ce(e.target.value)})]}),(0,S.jsxs)("div",{className:"flex-fill",children:[(0,S.jsx)(i.Q5,{children:"Tiempo de entrega(*)"}),(0,S.jsx)(i.Ip,{type:"date",id:"deliveryDate",value:Ne,onChange:e=>ze(e.target.value)})]})]}),(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.cF,{id:"desc",label:"Descripci\xf3n",rows:2,value:K,onChange:e=>$(e.target.value)})}),(0,S.jsxs)(i.uE,{color:"primary",className:"text-light fw-semibold me-2",onClick:()=>{Ge.current.value?fe?Se?Ne?Ge.current.value&&(Y([...H,{localName:Ge.current.files[0].name,file:Ge.current.files[0],tag:u.k.quotation,description:K,provider:fe,amount:Se,deliveryDate:Ne}]),Ge.current.value="",$(""),be(""),Ce(0),ze("")):alert("Selecciona fecha de entrega"):alert("Escribe un monto"):alert("Escribe un proveedor"):alert("Carga una cotizaci\xf3n")},children:[(0,S.jsx)(o.c,{icon:r.O,className:"me-1"}),"A\xf1adir a la solicitud"]})]}),H.length>0?(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(i.k7,{striped:!0,responsive:!0,children:[(0,S.jsx)(i.Iy,{children:(0,S.jsxs)(i.uH,{children:[(0,S.jsx)(i.Qr,{scope:"col",children:"Datos"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Descripci\xf3n"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Archivo Cotizaci\xf3n"}),(Oe||Oe&&Le&&"sent"===(null===k||void 0===k?void 0:k.status)||Ue||De||Be&&"approved"===(null===k||void 0===k?void 0:k.status)||Be&&"authorized"===(null===k||void 0===k?void 0:k.status)||Be&&"sentPay"===(null===k||void 0===k?void 0:k.status)||I&&"paid"===(null===k||void 0===k?void 0:k.status))&&(0,S.jsx)(i.Qr,{scope:"col",className:"text-center",children:"Aprobada"})]})}),(0,S.jsx)(i.g7,{children:H.map(((e,t)=>(0,S.jsxs)(i.uH,{children:[(0,S.jsxs)(i.kz,{children:[(0,S.jsxs)("p",{children:[(0,S.jsx)("b",{children:"Monto: "}),"$",(0,d.iy)(e.amount)]}),(0,S.jsxs)("p",{children:[(0,S.jsx)("b",{children:"Proveedor: "})," ",e.provider]}),(0,S.jsxs)("p",{children:[(0,S.jsx)("b",{children:"Tiempo de entrega: "})," ",e.deliveryDate]})]}),(0,S.jsx)(i.kz,{children:e.description}),(0,S.jsx)(i.kz,{children:(0,S.jsx)(c.S_,{file:e,quoteFile:!0,onDelete:a=>e.id?Y(H.filter((e=>e.id!==a))):Y(H.filter(((e,a)=>t!==a))),viewMode:I&&Le&&"inprogress"===k.status||I&&!Le||I&&"approved"===k.status||I&&"authorized"===k.status||I&&"sentPay"===k.status||I&&"paid"===k.status},e.name)}),(Oe||Oe&&Le&&"sent"===(null===k||void 0===k?void 0:k.status)||Ue||De||Be&&"approved"===(null===k||void 0===k?void 0:k.status)||Be&&"authorized"===(null===k||void 0===k?void 0:k.status)||Be&&"sentPay"===(null===k||void 0===k?void 0:k.status)||I&&"paid"===(null===k||void 0===k?void 0:k.status))&&(0,S.jsx)(i.kz,{className:"text-center",children:(0,S.jsx)(i.e0,{id:"selectedQuoteID",checked:e.id===de,onChange:t=>{t.target.checked?ue(e.id):ue("")},disabled:"rejected"===(null===k||void 0===k?void 0:k.status)&&k.rejectQuotes||"approved"===(null===k||void 0===k?void 0:k.status)||"ok"===(null===k||void 0===k?void 0:k.status)||"authorized"===(null===k||void 0===k?void 0:k.status)||"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status)})})]},e.name)))})]}),I&&(Oe||Oe&&Le&&"sent"===(null===k||void 0===k?void 0:k.status)||"approved"===(null===k||void 0===k?void 0:k.status)||"ok"===(null===k||void 0===k?void 0:k.status)||"authorized"===(null===k||void 0===k?void 0:k.status)||"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status))&&(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.e0,{id:"rejectQuotes",label:"Se descartan todas las cotizaci\xf3nes",checked:pe,onChange:e=>ve(e.target.checked),disabled:"rejected"===(null===k||void 0===k?void 0:k.status)&&k.rejectQuotes||"approved"===(null===k||void 0===k?void 0:k.status)||"ok"===(null===k||void 0===k?void 0:k.status)||"authorized"===(null===k||void 0===k?void 0:k.status)||"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status)})}),(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsx)(i.Q5,{htmlFor:"approvedAmount",children:"Monto de cotizaci\xf3n aprobada ($)"}),(0,S.jsx)(i.Ip,{type:"number",id:"approvedAmount",placeholder:"Importe",onChange:e=>me(e.target.value),value:he,disabled:pe||"approved"===(null===k||void 0===k?void 0:k.status)||"ok"===(null===k||void 0===k?void 0:k.status)||"authorized"===(null===k||void 0===k?void 0:k.status)||"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status)})]}),"rejected"===(null===k||void 0===k?void 0:k.status)||"approved"===(null===k||void 0===k?void 0:k.status)||"ok"===(null===k||void 0===k?void 0:k.status)||"authorized"===(null===k||void 0===k?void 0:k.status)||"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status)?(0,S.jsx)(i.uE,{color:"primary",className:"text-white",onClick:()=>at(!0),children:"Ver observaciones"}):(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.cF,{id:"obs",label:"Observaci\xf3n",rows:2,value:Pe,onChange:e=>Fe(e.target.value)})})]})]}):!Le&&(0,S.jsx)("h3",{className:"text-center text-primary font-monospace",children:"No hay cotizaci\xf3nes disponibles"})]})}),(0,S.jsx)(i.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:3===w,children:(0,S.jsxs)(i.YR,{className:"mt-3",children:[(0,S.jsxs)("div",{className:"mb-3 d-flex",children:[(0,S.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,S.jsx)(i.Q5,{children:"Proveedor(*)"}),(0,S.jsxs)(i.Wc,{"aria-label":"provider",onChange:e=>ge(e.target.value),value:xe,disabled:"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status),children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),Te.data.map((e=>{let{id:t,name:a}=e;return(0,S.jsx)("option",{value:t,children:a},t)}))]})]}),(0,S.jsxs)("div",{className:"flex-md-fill me-2",children:[(0,S.jsx)(i.Q5,{children:"Cuenta(*)"}),(0,S.jsxs)(i.Wc,{"aria-label":"providerAccount",onChange:e=>ye(e.target.value),value:je,disabled:"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status),children:[(0,S.jsx)("option",{value:"",children:"Selecciona..."}),null===_e||void 0===_e||null===(l=_e.data)||void 0===l?void 0:l.map((e=>{let{id:t,clabe:a,bank:s}=e;return(0,S.jsxs)("option",{value:t,children:[s.name," - ",a]},t)}))]})]})]}),I&&"authorized"===k.status&&Be&&(0,S.jsxs)("div",{className:"mb-3",children:[(0,S.jsxs)(i.Q5,{children:["Sube la ",(0,S.jsx)("b",{children:"factura"})," para la solicitud de pago"]}),(0,S.jsx)(i.Ip,{ref:We,type:"file",id:"invoiceFile",onChange:e=>J({tag:u.k.invoice,file:e.target.files[0],localName:e.target.files[0].name}),text:"Archivos permitidos jpg, pdf, jpeg (10 MB)",disabled:ke})]}),V&&(0,S.jsx)("div",{className:"mb-3 d-flex",children:(0,S.jsx)(c.S_,{file:V,onDelete:e=>{J(null),We.current.value=""},viewMode:null===V||void 0===V?void 0:V.id})}),(0,S.jsx)("div",{className:"mb-3",children:(0,S.jsx)(i.e0,{id:"paymentWithoutInvoice",label:"Tramitar pago sin factura",checked:ke,onChange:e=>Ie(e.target.checked),disabled:"sentPay"===(null===k||void 0===k?void 0:k.status)||"paid"===(null===k||void 0===k?void 0:k.status)})})]})})]})]}),(0,S.jsxs)(i.yI,{children:[(0,S.jsx)(i.uE,{color:"secondary",onClick:z,children:"Cerrar"}),I&&"authorized"===k.status&&Be&&(0,S.jsx)(i.uE,{color:"info",className:"text-light fw-semibold",onClick:()=>{try{if(!xe)return void alert("Selecciona un proveedor");if(!je)return void alert("Selecciona una cuenta de proveedor");if(!ke&&!V)return void alert("Sube la factura de pago o selecciona pago sin factura");let e={provider_id:xe,provider_account_id:je,paymentWithoutInvoice:ke,status:"sentPay"};v().fire({title:"\xbfEsta seguro de enviar a pago?",showCancelButton:!0,confirmButtonText:"Enviar"}).then((t=>{t.isConfirmed&&Qe((0,b.oN)(e,E,(e=>{e.success?(Qe((0,m.I)((0,c.oN)({msg:"Solicitud enviada a pago",title:"Solicitudes de compra",type:"success"}))),lt(e.data.purchaseRequest),z(),st(),v().fire("Solicitud de pago enviada!","","success")):Qe((0,m.I)((0,c.oN)({msg:e.message,title:"Solicitudes de compra",type:"error"})))})))}))}catch(e){console.log(e)}},children:"Enviar a pago"}),I&&"approved"!==k.status&&"authorized"!==k.status&&"sentPay"!==k.status&&"paid"!==k.status&&(0,S.jsx)(i.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{Le?(Oe&&"sent"===k.status&&rt(e),Oe&&"inprogress"===k.status&&it(e),Oe||rt(e)):it(e)},children:"Guardar"}),!I&&(0,S.jsx)(i.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{it(e)},children:"Guardar"}),Ue&&I&&"approved"===k.status&&k.approvedAmount<5e3&&(0,S.jsx)(i.uE,{color:"info",className:"text-light fw-semibold",onClick:nt,children:"Autorizar"}),De&&I&&"ok"===k.status&&k.approvedAmount>5e3&&(0,S.jsx)(i.uE,{color:"info",className:"text-light fw-semibold",onClick:nt,children:"Autorizar"}),Ue&&I&&"approved"===k.status&&k.approvedAmount>5e3&&(0,S.jsx)(i.uE,{color:"info",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();try{v().fire({title:"\xbfDar el visto bueno?",showCancelButton:!0,confirmButtonText:"Si"}).then((e=>{e.isConfirmed&&Qe((0,b.s1)({status:"ok"},E,(e=>{e.success?(Qe((0,m.I)((0,c.oN)({msg:"Solicitud actualizada correctamente.",title:"Solicitudes de compra",type:"success"}))),z(),st(),v().fire("Autorizado!","","success")):Qe((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})))}))}catch(t){console.log(t)}},children:"VoBo"}),Ue&&I&&"approved"===k.status&&(0,S.jsx)(i.uE,{color:"danger",className:"text-light fw-semibold",onClick:e=>{e.preventDefault(),v().fire({title:"Escribe un motivo del rechazo",input:"textarea",inputAttributes:{autocapitalize:"off"},showCancelButton:!0,confirmButtonText:"Enviar",confirmButtonColor:"#E94834",showLoaderOnConfirm:!0,preConfirm:async e=>{try{if(!e)return void v().showValidationMessage("\n              Escribe una observacion\n            ");Qe((0,b.s1)({status:"rejected",observation:e,selectedQuoteID:de,approvedAmount:0},E,(e=>{e.success?(Qe((0,m.I)((0,c.oN)({msg:"Solicitud actualizada correctamente.",title:"Solicitudes de compra",type:"success"}))),z(),st(),v().fire("Rechazado!","","success")):Qe((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))})))}catch(t){v().showValidationMessage("\n              Request failed: ".concat(t,"\n            "))}},allowOutsideClick:()=>!v().isLoading()}).then((e=>{e.isConfirmed&&v().fire({title:"Solicitud rechazada correctamente"})}))},children:"Rechazar"})]})]}),tt&&(0,S.jsx)(C,{quoteID:null===k||void 0===k?void 0:k.id,visible:tt,onClose:()=>at(!1)})]})};var k=a(4904);const I=e=>{let{data:t}=e;const[a,r]=(0,s.useState)(!1),[l,u]=(0,s.useState)(!1),[p,h]=(0,s.useState)(null),[x,g]=(0,s.useState)(!1),j=(0,n.OY)(),y=(0,d.Im)("quotes","delete"),f=(0,d.Im)("quotes","edit"),N=(0,d.Im)("quotes","show"),I=(0,d.Im)("quotes","upload.quote"),w=e=>{v().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((t=>{t.isConfirmed&&(j((0,b.qk)(e,(t=>{t.success?(j((0,m.I)((0,c.oN)({msg:"Solicitud eliminada correctamente.",title:"Solicitudes de compra",type:"success"}))),j((0,b.MT)(e))):j((0,m.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Solicitudes de compra",type:"error"})))}))),v().fire({title:"Eliminado!",text:"La solicitud ha sido eliminada.",icon:"success"}))}))};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(i.k7,{striped:!0,responsive:!0,children:[(0,S.jsx)(i.Iy,{children:(0,S.jsxs)(i.uH,{children:[(0,S.jsx)(i.Qr,{scope:"col",children:"Folio"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Solicitante"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Titulo"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Fecha de solicitud"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Giro"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Unidad"}),(0,S.jsx)(i.Qr,{scope:"col",children:"Status"}),(0,S.jsx)(i.Qr,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,S.jsx)(i.g7,{children:null===t||void 0===t?void 0:t.map((e=>(0,S.jsxs)(i.uH,{children:[(0,S.jsx)(i.Qr,{scope:"row",children:e.id}),(0,S.jsx)(i.kz,{children:e.petitioner.name}),(0,S.jsx)(i.kz,{children:e.title}),(0,S.jsx)(i.kz,{children:(0,d.my)(e.created_at)}),(0,S.jsx)(i.kz,{children:e.line}),(0,S.jsx)(i.kz,{children:e.unit}),(0,S.jsx)(i.kz,{children:(0,S.jsx)(i.oh,{style:{backgroundColor:d._x[e.status]},children:(0,d.Sk)(e.status,I)})}),(0,S.jsx)(i.kz,{className:"text-center overflow-visible",children:(0,S.jsxs)(i.Cg,{variant:"dropdown",children:[(0,S.jsx)(i.uw,{href:"#",color:"light",children:(0,S.jsx)(o.c,{icon:k.i,title:"Opciones",size:"lg"})}),(0,S.jsxs)(i.cI,{className:"position-fixed",children:[N&&(0,S.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>{h(e),g(!0),r(!a)},children:"Ver solicitud"}),f&&"approved"!==e.status&&"inprogress"!==e.status&&"ok"!==e.status&&"authorized"!==e.status&&"sentPay"!==e.status&&"paid"!==e.status&&(0,S.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>{h(e),r(!a)},children:"Editar"}),y&&"approved"!==e.status&&"inprogress"!==e.status&&"ok"!==e.status&&"authorized"!==e.status&&"sentPay"!==e.status&&"paid"!==e.status&&(0,S.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>w(e.id),children:"Eliminar"}),(0,S.jsx)(i.yu,{style:{cursor:"pointer"},onClick:()=>{h(e),u(!l)},children:"Ver observaciones"})]})]})})]},e.id)))})]}),a&&(0,S.jsx)(z,{visible:a,onClose:()=>{r(!1),g(!1)},quoteData:p,view:x}),l&&(0,S.jsx)(C,{quoteID:null===p||void 0===p?void 0:p.id,visible:l,onClose:()=>u(!1)})]})},w=()=>{const[e,t]=(0,s.useState)(!1),[a,u]=(0,s.useState)("provider"),[p,v]=(0,s.useState)(""),[h,m]=(0,s.useState)(1),x=(0,n.OY)(),{currentPage:g,last_page:j,data:y}=(0,n.w1)((e=>e.quote.quotes)),f=(0,n.w1)((e=>e.quote.loading));return(0,s.useEffect)((()=>{x((0,b.gh)(h,a,p))}),[h,x]),(0,s.useEffect)((()=>{g&&m(g)}),[g]),(0,S.jsxs)(S.Fragment,{children:[(0,S.jsxs)(i.u0,{children:[(0,S.jsxs)(i.Q_,{className:"d-flex justify-content-between align-items-center",children:[(0,S.jsx)("h4",{children:"Solicitudes de compra"}),(0,S.jsxs)("div",{className:"d-flex gap-2",children:[(0,d.Im)("quotes","create")&&(0,S.jsxs)(i.uE,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>t(!e),children:[(0,S.jsx)(o.c,{icon:r.O,size:"xl",className:"me-1"}),"Nuevo"]}),(0,S.jsx)(i.uE,{color:"info",className:"text-light align-content-center d-flex",children:(0,S.jsx)(o.c,{icon:l.W,size:"xl"})})]})]}),(0,S.jsxs)(i.Yj,{children:[(0,S.jsxs)(i.YR,{children:[(0,S.jsx)(i.Q5,{children:"Filtros de busqueda"}),(0,S.jsxs)("div",{className:"mb-3 d-flex",children:[(0,S.jsx)("div",{className:"flex-fill me-2",children:(0,S.jsx)(i.Wc,{value:a,onChange:e=>u(e.target.value),"aria-label":"caseFilter",options:[{label:"Proveedor",value:"provider"},{label:"Solicitante",value:"petitioner"},{label:"Status",value:"status"}]})}),(0,S.jsx)("div",{className:"flex-fill me-2",children:"status"!==a?(0,S.jsx)(i.Ip,{value:p,onChange:e=>v(e.target.value),type:"text",id:"provider",placeholder:"Ingresar texto"}):(0,S.jsx)(i.Wc,{value:p,onChange:e=>v(e.target.value),"aria-label":"caseFilter",options:[{label:"Pendientes",value:"pending"},{label:"Revisadas",value:"review"},{label:"Aprobadas",value:"approved"},{label:"Rechazadas",value:"rejects"}]})})]}),(0,S.jsx)(i.uE,{type:"button",className:"text-light fw-semibold",onClick:()=>x((0,b.gh)(h,a,p)),children:"Buscar"})]}),f?(0,S.jsx)("div",{className:"d-flex justify-content-center",children:(0,S.jsx)(i.GG,{color:"primary",variant:"grow"})}):(0,S.jsx)(I,{data:y})]}),(0,S.jsx)(i.IE,{children:(0,S.jsx)(c.KQ,{currentPage:h,lastPage:j,setCurrentPage:m})})]}),e&&(0,S.jsx)(z,{visible:e,onClose:()=>t(!1)})]})}}}]);
//# sourceMappingURL=720.8c9f90fa.chunk.js.map