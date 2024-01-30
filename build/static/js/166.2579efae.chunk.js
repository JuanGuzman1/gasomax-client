"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[166],{507:(e,a,s)=>{s.d(a,{AG:()=>l,G5:()=>c,I2:()=>i,qH:()=>o,wT:()=>d});var t=s(5294),r=s(591),n=s(6647);const c=(e,a,s)=>async c=>{try{const o=await t.Z.get("".concat(n.Z.instance.baseURL,"/api/bank?").concat(a,"=").concat(s,"&page=").concat(e),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.s6,payload:o.data})}catch(o){c({type:r.l9,payload:{msg:o.response.statusText,status:o.response.status}})}},o=(e,a)=>async s=>{try{const c=await t.Z.post("".concat(n.Z.instance.baseURL,"/api/bank"),e,{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.RS,payload:c.data.data}),a(c.data)}catch(c){s({type:r.l9,payload:{msg:c.response.statusText,status:c.response.status}}),a({success:!1,message:c.message})}},l=(e,a,s)=>async c=>{try{const o=await t.Z.put("".concat(n.Z.instance.baseURL,"/api/bank/").concat(a),e,{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.h5,payload:o.data.data}),s(o.data)}catch(o){c({type:r.l9,payload:{msg:o.response.statusText,status:o.response.status}}),s({success:!1,message:o.message})}},i=(e,a)=>async s=>{try{const c=await t.Z.delete("".concat(n.Z.instance.baseURL,"/api/bank/").concat(e),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.ZU,payload:e}),a(c.data)}catch(c){s({type:r.l9,payload:{msg:c.response.statusText,status:c.response.status}}),a({success:!1,message:c.message})}},d=()=>async e=>{try{const a=await t.Z.get("".concat(n.Z.instance.baseURL,"/api/select/bank"),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:r.mC,payload:a.data})}catch(a){e({type:r.l9,payload:{msg:a.response.statusText,status:a.response.status}})}}},1232:(e,a,s)=>{s.d(a,{Az:()=>o,Fr:()=>p,J9:()=>c,P0:()=>l,dm:()=>i,i1:()=>d});var t=s(5294),r=s(591),n=s(6647);const c=(e,a,s)=>async c=>{try{const o=await t.Z.get("".concat(n.Z.instance.baseURL,"/api/provider?").concat(a,"=").concat(s,"&page=").concat(e),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.E3,payload:{...o.data,filters:{filter:a,value:s}}})}catch(o){c({type:r.Q_,payload:{msg:o.response.statusText,status:o.response.status}})}},o=(e,a)=>async s=>{try{const c=await t.Z.post("".concat(n.Z.instance.baseURL,"/api/provider"),e,{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.Tm,payload:c.data.data}),a(c.data)}catch(c){s({type:r.Q_,payload:{msg:c.response.statusText,status:c.response.status}}),a({success:!1,message:c.message})}},l=(e,a,s)=>async c=>{try{const o=await t.Z.put("".concat(n.Z.instance.baseURL,"/api/provider/").concat(a),e,{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.rE,payload:o.data.data}),s(o.data)}catch(o){c({type:r.Q_,payload:{msg:o.response.statusText,status:o.response.status}}),s({success:!1,message:o.message})}},i=(e,a)=>async s=>{try{const c=await t.Z.delete("".concat(n.Z.instance.baseURL,"/api/provider/").concat(e),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.Z4,payload:e}),a(c.data)}catch(c){s({type:r.Q_,payload:{msg:c.response.statusText,status:c.response.status}}),a({success:!1,message:c.message})}},d=(e,a)=>async s=>{try{const c=await t.Z.get("".concat(n.Z.instance.baseURL,"/api/excel/provider/export?").concat(e,"=").concat(a),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")},responseType:"blob"}),o=window.URL.createObjectURL(new Blob([c.data])),l=document.createElement("a");l.href=o,l.setAttribute("download","Proveedores.xlsx"),document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(o),s({type:r.Nx})}catch(c){s({type:r.Q_,payload:{msg:c.response.statusText,status:c.response.status}})}},p=()=>async e=>{try{const a=await t.Z.get("".concat(n.Z.instance.baseURL,"/api/select/provider"),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:r.tb,payload:a.data})}catch(a){e({type:r.Q_,payload:{msg:a.response.statusText,status:a.response.status}})}}},7462:(e,a,s)=>{s.d(a,{O:()=>t});const t={csf:"CSF"}},7201:(e,a,s)=>{s.d(a,{Tg:()=>u,a4:()=>i,iT:()=>c,mY:()=>o,mk:()=>p,uD:()=>d,uf:()=>n,yw:()=>l});var t=s(9779),r=s(9101);const n=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c=e=>t.ou.fromISO(e).toLocaleString(t.ou.DATE_SHORT),o=e=>t.ou.fromISO(e).toLocaleString(t.ou.DATETIME_SHORT),l={advance:"Anticipo",settlement:"Liquidaci\xf3n",payment:"Abono a cuenta"},i={pending:"Cotizaci\xf3n completa",approved:"Cotizaci\xf3n aprobada",paid:"Cotizaci\xf3n pagada",rejected:"Cotizaci\xf3n rechazada"},d={pending:"warning",approved:"success",paid:"info",rejected:"danger"},p={index:"Lectura",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",authorize:"Autorizar",modules:"Asignar modulos",permissions:"Asignar permisos"},u=(e,a)=>{const s=(0,r.v9)((e=>e.auth.permissions)),t=(0,r.v9)((e=>e.auth.modules)).find((a=>a.submodule===e));return!!t&&!!s.find((e=>e.submodule===t.submodule&&e.permission===a))}},1732:(e,a,s)=>{s.d(a,{K:()=>t});const t={provider:"provider"}},1166:(e,a,s)=>{s.r(a),s.d(a,{default:()=>k});var t=s(2791),r=s(2937),n=s(8030),c=s(1404),o=s(7256),l=s(4846),i=s(9101),d=s(1232),p=s(9463),u=s(7462),h=s(1732),x=s(574),m=s(507),v=s(4166),j=s(184);const g=e=>{let{visible:a,onClose:s,providerData:g}=e;const[y,b]=(0,t.useState)(1),[f,C]=(0,t.useState)(!1),[N,S]=(0,t.useState)(""),[k,Z]=(0,t.useState)(""),[A,L]=(0,t.useState)("ext"),[T,w]=(0,t.useState)(""),[z,F]=(0,t.useState)(""),[I,R]=(0,t.useState)(""),[O,E]=(0,t.useState)(""),[B,P]=(0,t.useState)(""),[U,_]=(0,t.useState)(""),[D,Q]=(0,t.useState)(""),[H,K]=(0,t.useState)("1"),[M,q]=(0,t.useState)(""),[J,$]=(0,t.useState)([]),[G,X]=(0,t.useState)(null),[V,Y]=(0,t.useState)([]),W=(0,i.I0)(),{progress:ee}=(0,i.v9)((e=>e.file)),{loading:ae,providers:se,filters:te}=(0,i.v9)((e=>e.provider)),{banks:re}=(0,i.v9)((e=>e.bank)),ne=e=>{G?W((0,p.cT)(G,u.O.csf,e.id,h.K.provider,(()=>{W((0,d.J9)(se.current_page,te.filter,te.value))}))):(s(),ce())},ce=(0,t.useCallback)((()=>{S(""),Z(""),L("ext"),w(""),F(""),R(""),E(""),P(""),_(""),X(null),b(1)}),[]);return(0,t.useEffect)((()=>{var e,a,s,t,r,n;g&&(S(g.id),Z(g.name),L(g.type),w(null!==(e=g.contact)&&void 0!==e?e:""),F(null!==(a=g.rfc)&&void 0!==a?a:""),R(null!==(s=g.address)&&void 0!==s?s:""),E(null!==(t=g.phone)&&void 0!==t?t:""),P(null!==(r=g.email)&&void 0!==r?r:""),_(null!==(n=g.accountingAccount)&&void 0!==n?n:""),Y(g.files),$(g.accounts))}),[g]),(0,t.useEffect)((()=>{100===ee&&setTimeout((()=>{s(),ce()}),3e3)}),[ee,s,ce]),(0,t.useEffect)((()=>{W((0,m.wT)())}),[W]),(0,j.jsxs)(r.Tk,{visible:a,onClose:s,"aria-labelledby":"ModalForm",size:"lg",children:[(0,j.jsx)(r.p0,{onClose:s,children:(0,j.jsx)(r.fl,{id:"ModalForm",children:g?"Editar ".concat(g.name):"Agregar nuevo"})}),(0,j.jsxs)(r.sD,{children:[G&&(0,j.jsxs)(r.yI,{value:ee,className:"mb-2",children:[ee,"%"]}),(0,j.jsxs)(r.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:[(0,j.jsx)(r.U6,{role:"presentation",children:(0,j.jsx)(r.AQ,{active:1===y,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===y,onClick:()=>b(1),children:"Datos"})}),(0,j.jsx)(r.U6,{role:"presentation",children:(0,j.jsx)(r.AQ,{active:2===y,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":2===y,onClick:()=>b(2),children:"Cuentas"})}),(0,j.jsx)(r.U6,{role:"presentation",children:(0,j.jsx)(r.AQ,{active:3===y,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":3===y,onClick:()=>b(3),children:"Archivos"})})]}),(0,j.jsxs)(r.gr,{children:[(0,j.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===y,children:(0,j.jsxs)(r.lx,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"provider",children:"Proveedor"}),(0,j.jsx)(r.jO,{type:"text",id:"provider",placeholder:"nombre",onChange:e=>Z(e.target.value),value:k})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{children:"Tipo"}),(0,j.jsx)(r.LX,{"aria-label":"type",options:[{label:"Interno",value:"int"},{label:"Externo",value:"ext"}],onChange:e=>L(e.target.value),value:A})]}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.L8,{htmlFor:"contact",children:"Contacto"}),(0,j.jsx)(r.jO,{type:"text",id:"contact",placeholder:"contacto",onChange:e=>w(e.target.value),value:T})]}),(0,j.jsxs)("div",{className:"flex-fill",children:[(0,j.jsx)(r.L8,{htmlFor:"rfc",children:"RFC"}),(0,j.jsx)(r.jO,{type:"text",id:"rfc",placeholder:"RFC",onChange:e=>F(e.target.value),value:z})]})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"address",children:"Direcci\xf3n"}),(0,j.jsx)(r.jO,{type:"text",id:"address",placeholder:"direcci\xf3n",onChange:e=>R(e.target.value),value:I})]}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.L8,{htmlFor:"phone",children:"Tel\xe9fono"}),(0,j.jsx)(r.jO,{type:"number",id:"phone",placeholder:"tel\xe9fono",onChange:e=>E(e.target.value),value:O})]}),(0,j.jsxs)("div",{className:"flex-fill",children:[(0,j.jsx)(r.L8,{htmlFor:"email",children:"Correo electr\xf3nico"}),(0,j.jsx)(r.jO,{type:"email",id:"email",placeholder:"correo electr\xf3nico",onChange:e=>P(e.target.value),value:B})]})]})]})}),(0,j.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"account-tab-pane",visible:2===y,children:(0,j.jsxs)(r.lx,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"accountingAccount",children:"Cuenta contable"}),(0,j.jsx)(r.jO,{type:"text",id:"accountingAccount",placeholder:"cuenta contable",onChange:e=>_(e.target.value),value:U})]}),(0,j.jsxs)("div",{className:"d-flex gap-2 align-items-center",children:[(0,j.jsx)("h5",{children:"Cuentas bancarias"}),!f&&(0,j.jsx)(r.u5,{type:"button",size:"sm",shape:"rounded-3",className:"text-light fw-semibold",title:"Agregar",onClick:()=>C(!0),children:(0,j.jsx)(l.Z,{icon:n.q,size:"custom"})})]}),(0,j.jsx)("hr",{}),f&&(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsx)("div",{className:"flex-fill ",children:(0,j.jsx)(r.jO,{type:"text",placeholder:"Cuenta bancaria",value:D,onChange:e=>Q(e.target.value)})}),(0,j.jsx)("div",{className:"flex-fill ms-2 me-2",children:(0,j.jsx)(r.LX,{"aria-label":"caseFilter",value:H,onChange:e=>K(e.target.value),children:re.data.map((e=>(0,j.jsx)("option",{value:e.id,children:e.name},e.id)))})}),(0,j.jsx)("div",{className:"flex-fill",children:(0,j.jsx)(r.jO,{type:"text",placeholder:"CLABE",value:M,onChange:e=>q(e.target.value)})}),(0,j.jsx)(r.u5,{className:"ms-2 text-light",shape:"rounded-3",type:"button",size:"sm",title:"A\xf1adir",onClick:()=>{$(J.concat({bankAccount:D,bank_id:parseInt(H),clabe:M})),C(!1),Q(""),q("")},children:(0,j.jsx)(l.Z,{icon:c.F,size:"custom"})})]}),(0,j.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,j.jsx)(r.V,{children:(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.is,{scope:"col",children:"Cuenta bancaria"}),(0,j.jsx)(r.is,{scope:"col",children:"Banco"}),(0,j.jsx)(r.is,{scope:"col",className:"text-center",children:"CLABE Interbancaria"}),(0,j.jsx)(r.is,{scope:"col",className:"text-center",children:"Principal"}),(0,j.jsx)(r.is,{scope:"col",children:"Opciones"})]})}),(0,j.jsx)(r.NR,{children:J.map(((e,a)=>(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.NN,{children:e.bankAccount}),(0,j.jsx)(r.NN,{children:re.data.find((a=>a.id===e.bank_id)).name}),(0,j.jsx)(r.NN,{className:"text-center",children:e.clabe}),(0,j.jsx)(r.NN,{children:e.primary?(0,j.jsx)(l.Z,{icon:c.F,size:"custom"}):null}),(0,j.jsxs)(r.NN,{children:[(0,j.jsx)(r.u5,{color:"success",variant:"outline",title:"Asignar principal",className:"me-2",onClick:()=>(e=>{$(J.map(((a,s)=>(a.primary=s===e,a))))})(a),children:(0,j.jsx)(l.Z,{icon:c.F,size:"sm"})}),(0,j.jsx)(r.u5,{color:"danger",variant:"outline",title:"Eliminar",onClick:()=>(e=>{$(J.filter(((a,s)=>s!==e)))})(a),children:(0,j.jsx)(l.Z,{icon:o.N,size:"sm"})})]})]},e.clabe)))})]})]})}),(0,j.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:3===y,children:(0,j.jsx)(r.lx,{className:"mt-3",children:(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"csfFile",children:"Constancia de situaci\xf3n fiscal"}),V.length<=0?(0,j.jsx)(r.jO,{type:"file",id:"csfFile",placeholder:"nombre",onChange:e=>X(e.target.files[0])}):(0,j.jsx)(j.Fragment,{children:V.map((e=>e.tag!==u.O.csf?null:(0,j.jsx)(x.sZ,{file:e,onDelete:e=>Y(V.filter((a=>a.id!==e)))},e.tag)))})]})})})]})]}),(0,j.jsxs)(r.Ym,{children:[(0,j.jsx)(r.u5,{color:"secondary",onClick:s,children:"Cerrar"}),(0,j.jsx)(r.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!k)return void alert("Ingrese un nombre");if(ae)return;let a={name:k,type:A,contact:T,rfc:z,address:I,phone:O,email:B,accountingAccount:U,bankAccounts:J};W(g?(0,d.P0)(a,N,(e=>{e.success?(W((0,v.f)((0,x.Kv)({msg:"Proveedor actualizado correctamente.",title:"Proveedores",type:"success"}))),ne(e.data)):W((0,v.f)((0,x.Kv)({msg:"Ha ocurrido un error.",title:"Proveedores",type:"error"})))})):(0,d.Az)(a,(e=>{e.success?(W((0,v.f)((0,x.Kv)({msg:"Proveedor agregado correctamente.",title:"Proveedores",type:"success"}))),ne(e.data)):W((0,v.f)((0,x.Kv)({msg:"Ha ocurrido un error.",title:"Proveedores",type:"error"})))})))},children:"Guardar"})]})]})};var y=s(3896),b=s(1830),f=s.n(b),C=s(7201);const N=e=>{let{data:a}=e;const[s,n]=(0,t.useState)(!1),[c,o]=(0,t.useState)(null),m=(0,i.I0)(),b=(0,C.Tg)("providers","delete"),N=(0,C.Tg)("providers","edit");return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,j.jsx)(r.V,{children:(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.is,{scope:"col",children:"#"}),(0,j.jsx)(r.is,{scope:"col",children:"Proveedor"}),(0,j.jsx)(r.is,{scope:"col",children:"Contacto"}),(0,j.jsx)(r.is,{scope:"col",children:"RFC"}),(0,j.jsx)(r.is,{scope:"col",children:"Direcci\xf3n"}),(0,j.jsx)(r.is,{scope:"col",children:"Tel\xe9fono"}),(0,j.jsx)(r.is,{scope:"col",children:"Correo electr\xf3nico"}),(0,j.jsx)(r.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,j.jsx)(r.NR,{children:null===a||void 0===a?void 0:a.map((e=>(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.is,{scope:"row",children:e.id}),(0,j.jsx)(r.NN,{children:e.name}),(0,j.jsx)(r.NN,{children:e.contact}),(0,j.jsx)(r.NN,{children:e.rfc}),(0,j.jsx)(r.NN,{children:e.address}),(0,j.jsx)(r.NN,{children:e.phone}),(0,j.jsx)(r.NN,{children:e.email}),(0,j.jsx)(r.NN,{className:"text-center overflow-visible",children:(0,j.jsxs)(r.w5,{variant:"dropdown",children:[(0,j.jsx)(r.SQ,{href:"#",color:"light",children:(0,j.jsx)(l.Z,{icon:y.t,title:"Opciones",size:"lg"})}),(0,j.jsxs)(r.$H,{className:"position-fixed",children:[N&&(0,j.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{n(!s),o(e)},children:"Editar"}),b&&(0,j.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{return a=e.id,void f().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((e=>{e.isConfirmed&&(m((0,d.dm)(a,(e=>{e.success?(m((0,v.f)((0,x.Kv)({msg:"Proveedor eliminado correctamente.",title:"Proveedores",type:"success"}))),m((0,p.MM)(a,h.K.provider))):m((0,v.f)((0,x.Kv)({msg:"Ha ocurrido un error.",title:"Proveedores",type:"error"})))}))),f().fire({title:"Eliminado!",text:"El proveedor ha sido eliminado.",icon:"success"}))}));var a},children:"Eliminar"}),(0,j.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>(e=>{if(!e||e.length<=0)return void f().fire({title:"CSF",text:"No existe cedula cargada a este proveedor",icon:"info"});const a=e.find((e=>e.tag===u.O.csf)).id;m((0,p.Sv)(a))})(e.files),children:"Descargar CSF"})]})]})})]},e.id)))})]}),(0,j.jsx)(g,{visible:s,onClose:()=>n(!1),providerData:c})]})};var S=s(8723);const k=()=>{const[e,a]=(0,t.useState)(!1),s=(0,i.I0)(),[c,o]=(0,t.useState)("name"),[p,u]=(0,t.useState)(""),h=(0,i.v9)((e=>e.provider.providers.data)),[m,v]=(0,t.useState)(1),y=(0,i.v9)((e=>e.provider.providers.current_page)),b=(0,i.v9)((e=>e.provider.providers.last_page)),f=((0,i.v9)((e=>e.provider.providers.total)),(0,i.v9)((e=>e.provider.loading)));return(0,t.useEffect)((()=>{s((0,d.J9)(m,c,p))}),[s,m]),(0,t.useEffect)((()=>{y&&v(y)}),[y]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(r.xH,{children:[(0,j.jsxs)(r.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,j.jsx)("h4",{children:"Listado de Proveedores"}),(0,j.jsxs)("div",{className:"d-flex gap-2",children:[(0,C.Tg)("providers","create")&&(0,j.jsxs)(r.u5,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>a(!e),children:[(0,j.jsx)(l.Z,{icon:n.q,size:"xl",className:"me-1"}),"Nuevo"]}),(0,j.jsx)(r.u5,{color:"info",className:"text-light align-content-center d-flex",onClick:()=>s((0,d.i1)(c,p)),children:(0,j.jsx)(l.Z,{icon:S.j,size:"xl"})})]})]}),(0,j.jsxs)(r.sl,{children:[(0,j.jsxs)(r.lx,{children:[(0,j.jsx)(r.L8,{children:"Filtros de busqueda"}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsx)("div",{className:"flex-fill me-2",children:(0,j.jsx)(r.LX,{value:c,onChange:e=>o(e.target.value),"aria-label":"caseFilter",options:[{label:"Proveedor",value:"name"},{label:"Contacto",value:"contact"},{label:"RFC",value:"rfc"}]})}),(0,j.jsx)("div",{className:"flex-fill me-2",children:(0,j.jsx)(r.jO,{value:p,onChange:e=>u(e.target.value),type:"text",id:"provider",placeholder:"Ingresar texto"})})]}),(0,j.jsx)(r.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>s((0,d.J9)(m,c,p)),children:"Buscar"})]}),f?(0,j.jsx)("div",{className:"d-flex justify-content-center",children:(0,j.jsx)(r.LQ,{color:"primary",variant:"grow"})}):(0,j.jsx)(N,{data:h})]}),(0,j.jsx)(r.Bt,{children:(0,j.jsx)(x.bD,{currentPage:m,lastPage:b,setCurrentPage:v})})]}),(0,j.jsx)(g,{visible:e,onClose:()=>a(!1)})]})}},1404:(e,a,s)=>{s.d(a,{F:()=>t});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/>"]},8723:(e,a,s)=>{s.d(a,{j:()=>t});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=166.2579efae.chunk.js.map