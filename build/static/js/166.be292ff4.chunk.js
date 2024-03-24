"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[166],{507:(e,a,t)=>{t.d(a,{AG:()=>c,G5:()=>n,I2:()=>l,qH:()=>i,wT:()=>d});var s=t(5294),r=t(591),o=t(6647);const n=(e,a,t)=>async n=>{try{const i=await s.Z.get("".concat(o.Z.instance.baseURL,"/api/bank?").concat(a,"=").concat(t,"&page=").concat(e),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.s6,payload:i.data})}catch(i){n({type:r.l9,payload:{msg:i.response.statusText,status:i.response.status}})}},i=(e,a)=>async t=>{try{const n=await s.Z.post("".concat(o.Z.instance.baseURL,"/api/bank"),e,{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:r.RS,payload:n.data.data}),a(n.data)}catch(n){t({type:r.l9,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},c=(e,a,t)=>async n=>{try{const i=await s.Z.put("".concat(o.Z.instance.baseURL,"/api/bank/").concat(a),e,{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.h5,payload:i.data.data}),t(i.data)}catch(i){n({type:r.l9,payload:{msg:i.response.statusText,status:i.response.status}}),t({success:!1,message:i.message})}},l=(e,a)=>async t=>{try{const n=await s.Z.delete("".concat(o.Z.instance.baseURL,"/api/bank/").concat(e),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:r.ZU,payload:e}),a(n.data)}catch(n){t({type:r.l9,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},d=()=>async e=>{try{const a=await s.Z.get("".concat(o.Z.instance.baseURL,"/api/select/bank"),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:r.mC,payload:a.data})}catch(a){e({type:r.l9,payload:{msg:a.response.statusText,status:a.response.status}})}}},1232:(e,a,t)=>{t.d(a,{Az:()=>i,Fr:()=>u,J9:()=>n,P0:()=>c,dm:()=>l,i1:()=>d,j7:()=>p});var s=t(5294),r=t(591),o=t(6647);const n=(e,a,t)=>async n=>{try{const i=await s.Z.get("".concat(o.Z.instance.baseURL,"/api/provider?").concat(a,"=").concat(t,"&page=").concat(e),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.E3,payload:{...i.data,filters:{filter:a,value:t}}})}catch(i){n({type:r.Q_,payload:{msg:i.response.statusText,status:i.response.status}})}},i=(e,a)=>async t=>{try{const n=await s.Z.post("".concat(o.Z.instance.baseURL,"/api/provider"),e,{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:r.Tm,payload:n.data.data}),a(n.data)}catch(n){t({type:r.Q_,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},c=(e,a,t)=>async n=>{try{const i=await s.Z.put("".concat(o.Z.instance.baseURL,"/api/provider/").concat(a),e,{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.rE,payload:i.data.data}),t(i.data)}catch(i){n({type:r.Q_,payload:{msg:i.response.statusText,status:i.response.status}}),t({success:!1,message:i.message})}},l=(e,a)=>async t=>{try{const n=await s.Z.delete("".concat(o.Z.instance.baseURL,"/api/provider/").concat(e),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:r.Z4,payload:e}),a(n.data)}catch(n){t({type:r.Q_,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},d=(e,a)=>async t=>{try{const n=await s.Z.get("".concat(o.Z.instance.baseURL,"/api/excel/provider/export?").concat(e,"=").concat(a),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")},responseType:"blob"}),i=window.URL.createObjectURL(new Blob([n.data])),c=document.createElement("a");c.href=i,c.setAttribute("download","Proveedores.xlsx"),document.body.appendChild(c),c.click(),document.body.removeChild(c),window.URL.revokeObjectURL(i),t({type:r.Nx})}catch(n){t({type:r.Q_,payload:{msg:n.response.statusText,status:n.response.status}})}},u=()=>async e=>{try{const a=await s.Z.get("".concat(o.Z.instance.baseURL,"/api/select/provider"),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:r.tb,payload:a.data})}catch(a){e({type:r.Q_,payload:{msg:a.response.statusText,status:a.response.status}})}},p=e=>async a=>{try{const t=await s.Z.get("".concat(o.Z.instance.baseURL,"/api/select/account/provider/").concat(e),{headers:{...o.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.e4,payload:t.data})}catch(t){a({type:r.Q_,payload:{msg:t.response.statusText,status:t.response.status}})}}},7201:(e,a,t)=>{t.d(a,{Jw:()=>d,Tg:()=>x,a4:()=>u,aL:()=>l,iT:()=>n,mY:()=>i,mk:()=>h,uD:()=>p,uf:()=>o,y3:()=>c});var s=t(9779),r=t(9101);const o=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),n=e=>s.ou.fromISO(e).toLocaleString(s.ou.DATE_SHORT),i=e=>s.ou.fromISO(e).toLocaleString(s.ou.DATETIME_SHORT),c=e=>new Promise(((a,t)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=e=>a(e.target.result.toString()),s.onerror=t})),l=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:a?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:a?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},d={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},u={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},p={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},h={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},x=(e,a)=>{const t=(0,r.v9)((e=>e.auth.permissions)),s=(0,r.v9)((e=>e.auth.modules)).find((a=>a.submodule===e));return!!s&&!!t.find((e=>e.submodule===s.submodule&&e.permission===a))}},1732:(e,a,t)=>{t.d(a,{K:()=>s});const s={provider:"provider",purchaseRequest:"purchaseRequest",quote:"quote",user:"user"}},1166:(e,a,t)=>{t.r(a),t.d(a,{default:()=>k});var s=t(2791),r=t(2937),o=t(8030),n=t(1404),i=t(7256),c=t(4846),l=t(9101),d=t(1232),u=t(9463),p=t(7462),h=t(1732),x=t(7941),m=t(507),v=t(4166),g=t(184);const j=e=>{let{visible:a,onClose:t,providerData:j}=e;const[y,b]=(0,s.useState)(1),[f,C]=(0,s.useState)(!1),[N,S]=(0,s.useState)(""),[k,A]=(0,s.useState)(""),[F,z]=(0,s.useState)("ext"),[Z,L]=(0,s.useState)(""),[w,T]=(0,s.useState)(""),[R,I]=(0,s.useState)(""),[P,B]=(0,s.useState)(""),[E,O]=(0,s.useState)(""),[U,D]=(0,s.useState)(""),[_,Q]=(0,s.useState)(""),[q,K]=(0,s.useState)("1"),[H,$]=(0,s.useState)(""),[J,M]=(0,s.useState)([]),[V,G]=(0,s.useState)(null),[X,Y]=(0,s.useState)([]),W=(0,l.I0)(),{progress:ee}=(0,l.v9)((e=>e.file)),{loading:ae,providers:te,filters:se}=(0,l.v9)((e=>e.provider)),{banks:re}=(0,l.v9)((e=>e.bank)),oe=e=>{V?W((0,u.cT)(V,p.O.csf,null,e.id,h.K.provider,(()=>{W((0,d.J9)(te.current_page,se.filter,se.value))}))):(t(),ne())},ne=(0,s.useCallback)((()=>{S(""),A(""),z("ext"),L(""),T(""),I(""),B(""),O(""),D(""),G(null),b(1),M([])}),[]);return(0,s.useEffect)((()=>{var e,a,t,s,r,o;j&&(S(j.id),A(j.name),z(j.type),L(null!==(e=j.contact)&&void 0!==e?e:""),T(null!==(a=j.rfc)&&void 0!==a?a:""),I(null!==(t=j.address)&&void 0!==t?t:""),B(null!==(s=j.phone)&&void 0!==s?s:""),O(null!==(r=j.email)&&void 0!==r?r:""),D(null!==(o=j.accountingAccount)&&void 0!==o?o:""),Y(j.files),M(j.accounts))}),[j]),(0,s.useEffect)((()=>{100===ee&&setTimeout((()=>{t(),ne()}),3e3)}),[ee,t,ne]),(0,s.useEffect)((()=>{W((0,m.wT)())}),[W]),(0,g.jsxs)(r.Tk,{visible:a,onClose:t,"aria-labelledby":"ModalForm",size:"lg",children:[(0,g.jsx)(r.p0,{onClose:t,children:(0,g.jsx)(r.fl,{id:"ModalForm",children:j?"Editar ".concat(j.name):"Agregar nuevo"})}),(0,g.jsxs)(r.sD,{children:[V&&(0,g.jsxs)(r.yI,{value:ee,className:"mb-2",children:[ee,"%"]}),(0,g.jsxs)(r.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:[(0,g.jsx)(r.U6,{role:"presentation",children:(0,g.jsx)(r.AQ,{active:1===y,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===y,onClick:()=>b(1),children:"Datos"})}),(0,g.jsx)(r.U6,{role:"presentation",children:(0,g.jsx)(r.AQ,{active:2===y,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":2===y,onClick:()=>b(2),children:"Cuentas"})}),(0,g.jsx)(r.U6,{role:"presentation",children:(0,g.jsx)(r.AQ,{active:3===y,component:"button",role:"tab","aria-controls":"account-tab-pane","aria-selected":3===y,onClick:()=>b(3),children:"Archivos"})})]}),(0,g.jsxs)(r.gr,{children:[(0,g.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===y,children:(0,g.jsxs)(r.lx,{className:"mt-3",children:[(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(r.L8,{htmlFor:"provider",children:"Proveedor"}),(0,g.jsx)(r.jO,{type:"text",id:"provider",placeholder:"nombre",onChange:e=>A(e.target.value),value:k})]}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(r.L8,{children:"Tipo"}),(0,g.jsx)(r.LX,{"aria-label":"type",options:[{label:"Interno",value:"int"},{label:"Externo",value:"ext"}],onChange:e=>z(e.target.value),value:F})]}),(0,g.jsxs)("div",{className:"mb-3 d-flex",children:[(0,g.jsxs)("div",{className:"flex-fill me-2",children:[(0,g.jsx)(r.L8,{htmlFor:"contact",children:"Contacto"}),(0,g.jsx)(r.jO,{type:"text",id:"contact",placeholder:"contacto",onChange:e=>L(e.target.value),value:Z})]}),(0,g.jsxs)("div",{className:"flex-fill",children:[(0,g.jsx)(r.L8,{htmlFor:"rfc",children:"RFC"}),(0,g.jsx)(r.jO,{type:"text",id:"rfc",placeholder:"RFC",onChange:e=>T(e.target.value),value:w})]})]}),(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(r.L8,{htmlFor:"address",children:"Direcci\xf3n"}),(0,g.jsx)(r.jO,{type:"text",id:"address",placeholder:"direcci\xf3n",onChange:e=>I(e.target.value),value:R})]}),(0,g.jsxs)("div",{className:"mb-3 d-flex",children:[(0,g.jsxs)("div",{className:"flex-fill me-2",children:[(0,g.jsx)(r.L8,{htmlFor:"phone",children:"Tel\xe9fono (10 Dig.)"}),(0,g.jsx)(r.jO,{type:"text",id:"phone",placeholder:"tel\xe9fono",onChange:e=>B(e.target.value),value:P,maxLength:10})]}),(0,g.jsxs)("div",{className:"flex-fill",children:[(0,g.jsx)(r.L8,{htmlFor:"email",children:"Correo electr\xf3nico"}),(0,g.jsx)(r.jO,{type:"email",id:"email",placeholder:"correo electr\xf3nico",onChange:e=>O(e.target.value),value:E})]})]})]})}),(0,g.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"account-tab-pane",visible:2===y,children:(0,g.jsxs)(r.lx,{className:"mt-3",children:[(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(r.L8,{htmlFor:"accountingAccount",children:"Cuenta contable"}),(0,g.jsx)(r.jO,{type:"text",id:"accountingAccount",placeholder:"cuenta contable",onChange:e=>D(e.target.value),value:U})]}),(0,g.jsxs)("div",{className:"d-flex gap-2 align-items-center",children:[(0,g.jsx)("h5",{children:"Cuentas bancarias"}),!f&&(0,g.jsx)(r.u5,{type:"button",size:"sm",shape:"rounded-3",className:"text-light fw-semibold",title:"Agregar",onClick:()=>C(!0),children:(0,g.jsx)(c.Z,{icon:o.q,size:"custom"})})]}),(0,g.jsx)("hr",{}),f&&(0,g.jsxs)("div",{className:"mb-3 d-flex",children:[(0,g.jsx)("div",{className:"flex-fill ",children:(0,g.jsx)(r.jO,{type:"text",placeholder:"Cuenta bancaria",value:_,onChange:e=>Q(e.target.value)})}),(0,g.jsx)("div",{className:"flex-fill ms-2 me-2",children:(0,g.jsx)(r.LX,{"aria-label":"caseFilter",value:q,onChange:e=>K(e.target.value),children:re.data.map((e=>(0,g.jsx)("option",{value:e.id,children:e.name},e.id)))})}),(0,g.jsx)("div",{className:"flex-fill",children:(0,g.jsx)(r.jO,{type:"text",placeholder:"CLABE",value:H,onChange:e=>$(e.target.value)})}),(0,g.jsx)(r.u5,{className:"ms-2 text-light",shape:"rounded-3",type:"button",size:"sm",title:"A\xf1adir",onClick:()=>{M(J.concat({bankAccount:_,bank_id:parseInt(q),clabe:H})),C(!1),Q(""),$("")},children:(0,g.jsx)(c.Z,{icon:n.F,size:"custom"})})]}),(0,g.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,g.jsx)(r.V,{children:(0,g.jsxs)(r.T6,{children:[(0,g.jsx)(r.is,{scope:"col",children:"Cuenta bancaria"}),(0,g.jsx)(r.is,{scope:"col",children:"Banco"}),(0,g.jsx)(r.is,{scope:"col",className:"text-center",children:"CLABE Interbancaria"}),(0,g.jsx)(r.is,{scope:"col",className:"text-center",children:"Principal"}),(0,g.jsx)(r.is,{scope:"col",children:"Opciones"})]})}),(0,g.jsx)(r.NR,{children:J.map(((e,a)=>(0,g.jsxs)(r.T6,{children:[(0,g.jsx)(r.NN,{children:e.bankAccount}),(0,g.jsx)(r.NN,{children:re.data.find((a=>a.id===e.bank_id)).name}),(0,g.jsx)(r.NN,{className:"text-center",children:e.clabe}),(0,g.jsx)(r.NN,{children:e.primary?(0,g.jsx)(c.Z,{icon:n.F,size:"custom"}):null}),(0,g.jsxs)(r.NN,{children:[(0,g.jsx)(r.u5,{color:"success",variant:"outline",title:"Asignar principal",className:"me-2",onClick:()=>(e=>{M(J.map(((a,t)=>(a.primary=t===e,a))))})(a),children:(0,g.jsx)(c.Z,{icon:n.F,size:"sm"})}),(0,g.jsx)(r.u5,{color:"danger",variant:"outline",title:"Eliminar",onClick:()=>(e=>{M(J.filter(((a,t)=>t!==e)))})(a),children:(0,g.jsx)(c.Z,{icon:i.N,size:"sm"})})]})]},e.clabe)))})]})]})}),(0,g.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:3===y,children:(0,g.jsx)(r.lx,{className:"mt-3",children:(0,g.jsxs)("div",{className:"mb-3",children:[(0,g.jsx)(r.L8,{htmlFor:"csfFile",children:"Constancia de situaci\xf3n fiscal"}),X.length<=0?(0,g.jsx)(r.jO,{type:"file",id:"csfFile",placeholder:"nombre",onChange:e=>G(e.target.files[0])}):(0,g.jsx)(g.Fragment,{children:X.map((e=>e.tag!==p.O.csf?null:(0,g.jsx)(x.sZ,{file:e,onDelete:e=>Y(X.filter((a=>a.id!==e)))},e.tag)))})]})})})]})]}),(0,g.jsxs)(r.Ym,{children:[(0,g.jsx)(r.u5,{color:"secondary",onClick:t,children:"Cerrar"}),(0,g.jsx)(r.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!k)return void alert("Ingrese un nombre");if(ae)return;let a={name:k,type:F,contact:Z,rfc:w,address:R,phone:P,email:E,accountingAccount:U,bankAccounts:J};W(j?(0,d.P0)(a,N,(e=>{e.success?(W((0,v.f)((0,x.Kv)({msg:"Proveedor actualizado correctamente.",title:"Proveedores",type:"success"}))),oe(e.data)):W((0,v.f)((0,x.Kv)({msg:"Ha ocurrido un error.",title:"Proveedores",type:"error"})))})):(0,d.Az)(a,(e=>{e.success?(W((0,v.f)((0,x.Kv)({msg:"Proveedor agregado correctamente.",title:"Proveedores",type:"success"}))),oe(e.data)):W((0,v.f)((0,x.Kv)({msg:"Ha ocurrido un error.",title:"Proveedores",type:"error"})))})))},children:"Guardar"})]})]})};var y=t(3896),b=t(1830),f=t.n(b),C=t(7201);const N=e=>{let{data:a}=e;const[t,o]=(0,s.useState)(!1),[n,i]=(0,s.useState)(null),m=(0,l.I0)(),b=(0,C.Tg)("providers","delete"),N=(0,C.Tg)("providers","edit");return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,g.jsx)(r.V,{children:(0,g.jsxs)(r.T6,{children:[(0,g.jsx)(r.is,{scope:"col",children:"#"}),(0,g.jsx)(r.is,{scope:"col",children:"Proveedor"}),(0,g.jsx)(r.is,{scope:"col",children:"Contacto"}),(0,g.jsx)(r.is,{scope:"col",children:"RFC"}),(0,g.jsx)(r.is,{scope:"col",children:"Direcci\xf3n"}),(0,g.jsx)(r.is,{scope:"col",children:"Tel\xe9fono"}),(0,g.jsx)(r.is,{scope:"col",children:"Correo electr\xf3nico"}),(0,g.jsx)(r.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,g.jsx)(r.NR,{children:null===a||void 0===a?void 0:a.map((e=>(0,g.jsxs)(r.T6,{children:[(0,g.jsx)(r.is,{scope:"row",children:e.id}),(0,g.jsx)(r.NN,{children:e.name}),(0,g.jsx)(r.NN,{children:e.contact}),(0,g.jsx)(r.NN,{children:e.rfc}),(0,g.jsx)(r.NN,{children:e.address}),(0,g.jsx)(r.NN,{children:e.phone}),(0,g.jsx)(r.NN,{children:e.email}),(0,g.jsx)(r.NN,{className:"text-center overflow-visible",children:(0,g.jsxs)(r.w5,{variant:"dropdown",children:[(0,g.jsx)(r.SQ,{href:"#",color:"light",children:(0,g.jsx)(c.Z,{icon:y.t,title:"Opciones",size:"lg"})}),(0,g.jsxs)(r.$H,{className:"position-fixed",children:[N&&(0,g.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{o(!t),i(e)},children:"Editar"}),b&&(0,g.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{return a=e.id,void f().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((e=>{e.isConfirmed&&(m((0,d.dm)(a,(e=>{e.success?(m((0,v.f)((0,x.Kv)({msg:"Proveedor eliminado correctamente.",title:"Proveedores",type:"success"}))),m((0,u.MM)(a,h.K.provider))):m((0,v.f)((0,x.Kv)({msg:"Ha ocurrido un error.",title:"Proveedores",type:"error"})))}))),f().fire({title:"Eliminado!",text:"El proveedor ha sido eliminado.",icon:"success"}))}));var a},children:"Eliminar"}),(0,g.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>(e=>{if(!e||e.length<=0)return void f().fire({title:"CSF",text:"No existe cedula cargada a este proveedor",icon:"info"});const a=e.find((e=>e.tag===p.O.csf)).id;m((0,u.Sv)(a))})(e.files),children:"Descargar CSF"})]})]})})]},e.id)))})]}),(0,g.jsx)(j,{visible:t,onClose:()=>o(!1),providerData:n})]})};var S=t(8723);const k=()=>{const[e,a]=(0,s.useState)(!1),t=(0,l.I0)(),[n,i]=(0,s.useState)("name"),[u,p]=(0,s.useState)(""),h=(0,l.v9)((e=>e.provider.providers.data)),[m,v]=(0,s.useState)(1),y=(0,l.v9)((e=>e.provider.providers.current_page)),b=(0,l.v9)((e=>e.provider.providers.last_page)),f=((0,l.v9)((e=>e.provider.providers.total)),(0,l.v9)((e=>e.provider.loading)));return(0,s.useEffect)((()=>{t((0,d.J9)(m,n,u))}),[t,m]),(0,s.useEffect)((()=>{y&&v(y)}),[y]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(r.xH,{children:[(0,g.jsxs)(r.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,g.jsx)("h4",{children:"Listado de Proveedores"}),(0,g.jsxs)("div",{className:"d-flex gap-2",children:[(0,C.Tg)("providers","create")&&(0,g.jsxs)(r.u5,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>a(!e),children:[(0,g.jsx)(c.Z,{icon:o.q,size:"xl",className:"me-1"}),"Nuevo"]}),(0,g.jsx)(r.u5,{color:"info",className:"text-light align-content-center d-flex",onClick:()=>t((0,d.i1)(n,u)),children:(0,g.jsx)(c.Z,{icon:S.j,size:"xl"})})]})]}),(0,g.jsxs)(r.sl,{children:[(0,g.jsxs)(r.lx,{children:[(0,g.jsx)(r.L8,{children:"Filtros de busqueda"}),(0,g.jsxs)("div",{className:"mb-3 d-flex",children:[(0,g.jsx)("div",{className:"flex-fill me-2",children:(0,g.jsx)(r.LX,{value:n,onChange:e=>i(e.target.value),"aria-label":"caseFilter",options:[{label:"Proveedor",value:"name"},{label:"Contacto",value:"contact"},{label:"RFC",value:"rfc"}]})}),(0,g.jsx)("div",{className:"flex-fill me-2",children:(0,g.jsx)(r.jO,{value:u,onChange:e=>p(e.target.value),type:"text",id:"provider",placeholder:"Ingresar texto"})})]}),(0,g.jsx)(r.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>t((0,d.J9)(m,n,u)),children:"Buscar"})]}),f?(0,g.jsx)("div",{className:"d-flex justify-content-center",children:(0,g.jsx)(r.LQ,{color:"primary",variant:"grow"})}):(0,g.jsx)(N,{data:h})]}),(0,g.jsx)(r.Bt,{children:(0,g.jsx)(x.bD,{currentPage:m,lastPage:b,setCurrentPage:v})})]}),(0,g.jsx)(j,{visible:e,onClose:()=>a(!1)})]})}},1404:(e,a,t)=>{t.d(a,{F:()=>s});var s=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/>"]}}]);
//# sourceMappingURL=166.be292ff4.chunk.js.map