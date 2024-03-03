"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[876],{7201:(e,a,s)=>{s.d(a,{Jw:()=>c,Tg:()=>h,a4:()=>d,aL:()=>o,iT:()=>n,mY:()=>l,mk:()=>p,uD:()=>u,uf:()=>t});var i=s(9779),r=s(9101);const t=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),n=e=>i.ou.fromISO(e).toLocaleString(i.ou.DATE_SHORT),l=e=>i.ou.fromISO(e).toLocaleString(i.ou.DATETIME_SHORT),o=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:a?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:a?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},c={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},d={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},u={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},p={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},h=(e,a)=>{const s=(0,r.v9)((e=>e.auth.permissions)),i=(0,r.v9)((e=>e.auth.modules)).find((a=>a.submodule===e));return!!i&&!!s.find((e=>e.submodule===i.submodule&&e.permission===a))}},1876:(e,a,s)=>{s.r(a),s.d(a,{default:()=>g});var i=s(2791),r=s(2937),t=s(4846),n=s(8723),l=s(9101),o=s(5294),c=s(591),d=s(6647);const u=(e,a,s)=>async i=>{try{const r=1,t=await o.Z.get("".concat(d.Z.instance.baseURL,"/api/pending/purchaseRequest?user_id=").concat(r,"&").concat(a,"=").concat(s,"&page=").concat(e),{headers:{...d.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});i({type:c.x0,payload:{...t.data,filters:{filter:a,value:s}}})}catch(r){i({type:c.xL,payload:{msg:r.response.statusText,status:r.response.status}})}};var p=s(574),h=s(3896),x=s(7201),j=s(184);const v=e=>{let{visible:a,onClose:s,purchaseRequestDetailID:t,provider:n}=e;const u=(0,l.I0)(),[p,h]=(0,i.useState)(0),{balance:v,loadingBalance:m}=(0,l.v9)((e=>e.pendingPayments));return(0,i.useEffect)((()=>{var e;u((e=t,async a=>{try{const s=await o.Z.get("".concat(d.Z.instance.baseURL,"/api/balance/purchaseRequestDetail/").concat(e),{headers:{...d.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:c.Or,payload:s.data})}catch(s){a({type:c.xL,payload:{msg:s.response.statusText,status:s.response.status}})}}))}),[u,t]),(0,i.useEffect)((()=>{var e;v&&h(null===(e=v.find((e=>!e.purchase_detail_pending_id)))||void 0===e?void 0:e.totalAmount)}),[v]),(0,j.jsxs)(r.Tk,{visible:a,onClose:s,"aria-labelledby":"ModalForm",size:"lg",children:[(0,j.jsx)(r.p0,{onClose:s,children:(0,j.jsx)(r.fl,{id:"ModalForm",children:"Estado de cuenta"})}),(0,j.jsx)(r.sD,{children:m?(0,j.jsx)("div",{className:"d-flex justify-content-center",children:(0,j.jsx)(r.LQ,{color:"primary",variant:"grow"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(r.lx,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"provider",children:"Proveedor"}),(0,j.jsx)(r.jO,{type:"text",id:"provider",value:n,disabled:!0})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("p",{children:"Importe total"}),(0,j.jsxs)("h5",{id:"totalAmount",className:"fw-bold text-primary",children:["$",(0,x.uf)(p)]})]})]}),(0,j.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,j.jsx)(r.V,{children:(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.is,{scope:"col",children:"Fecha"}),(0,j.jsx)(r.is,{scope:"col",children:"Cargo"}),(0,j.jsx)(r.is,{scope:"col",children:"Concepto"}),(0,j.jsx)(r.is,{scope:"col",children:"Detalle"}),(0,j.jsx)(r.is,{scope:"col",children:"Pago"}),(0,j.jsx)(r.is,{scope:"col",children:"Saldo"})]})}),(0,j.jsx)(r.NR,{children:null===v||void 0===v?void 0:v.map((e=>(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.NN,{children:(0,x.mY)(e.created_at)}),(0,j.jsx)(r.NN,{children:e.charge}),(0,j.jsx)(r.NN,{children:e.concept}),(0,j.jsx)(r.NN,{children:e.observation}),(0,j.jsxs)(r.NN,{children:["$",(0,x.uf)(e.paymentAmount)]}),(0,j.jsx)(r.NN,{children:e.balance<=0?"$"+(0,x.uf)((null===e||void 0===e?void 0:e.totalAmount)-(null===e||void 0===e?void 0:e.paymentAmount)):"$"+(0,x.uf)(e.balance)})]},e.id)))})]})]})}),(0,j.jsx)(r.Ym,{children:(0,j.jsx)(r.u5,{color:"secondary",onClick:s,children:"Cerrar"})})]})},m=e=>{let{data:a}=e;const[s,n]=(0,i.useState)(!1),[o,c]=(0,i.useState)(null),[d,u]=(0,i.useState)("");(0,l.I0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,j.jsx)(r.V,{children:(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.is,{scope:"col",children:"Proveedor"}),(0,j.jsx)(r.is,{scope:"col",children:"Solicitante"}),(0,j.jsx)(r.is,{scope:"col",children:"Cargo"}),(0,j.jsx)(r.is,{scope:"col",children:"Concepto"}),(0,j.jsx)(r.is,{scope:"col",children:"Observaci\xf3n"}),(0,j.jsx)(r.is,{scope:"col",children:"Fecha solic."}),(0,j.jsx)(r.is,{scope:"col",children:"Saldo"}),(0,j.jsx)(r.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,j.jsx)(r.NR,{children:null===a||void 0===a?void 0:a.map((e=>e.detailsFiltered.map((a=>(0,j.jsxs)(r.T6,{children:[(0,j.jsx)(r.NN,{children:e.provider.name}),(0,j.jsx)(r.NN,{children:e.petitioner.name}),(0,j.jsx)(r.NN,{children:a.charge}),(0,j.jsx)(r.NN,{children:a.concept}),(0,j.jsx)(r.NN,{children:a.observation}),(0,j.jsx)(r.NN,{children:(0,x.iT)(e.created_at)}),(0,j.jsxs)(r.NN,{children:["$",(0,x.uf)(a.balance)]}),(0,j.jsx)(r.NN,{className:"text-center overflow-visible",children:(0,j.jsxs)(r.w5,{variant:"dropdown",children:[(0,j.jsx)(r.SQ,{href:"#",color:"light",children:(0,j.jsx)(t.Z,{icon:h.t,title:"Opciones",size:"lg"})}),(0,j.jsx)(r.$H,{className:"position-fixed",children:(0,j.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{u(e.provider.name),c(a.id),n(!s)},children:"Ver estado de cuenta"})})]})})]},e.id)))))})]}),s&&(0,j.jsx)(v,{visible:s,onClose:()=>{n(!1),c(null),u("")},purchaseRequestDetailID:o,provider:d})]})},g=()=>{const[e,a]=(0,i.useState)("provider"),[s,o]=(0,i.useState)(""),[c,d]=(0,i.useState)(1),h=(0,l.I0)(),{currentPage:x,last_page:v,data:g}=(0,l.v9)((e=>e.pendingPayments.pendingPayments)),b=(0,l.v9)((e=>e.pendingPayments.loading));return(0,i.useEffect)((()=>{h(u(c,e,s))}),[c,h]),(0,i.useEffect)((()=>{x&&d(x)}),[x]),(0,j.jsxs)(r.xH,{children:[(0,j.jsxs)(r.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,j.jsx)("h4",{children:"Listado de Pagos Pendientes"}),(0,j.jsx)("div",{className:"d-flex gap-2",children:(0,j.jsx)(r.u5,{color:"info",className:"text-light align-content-center d-flex",children:(0,j.jsx)(t.Z,{icon:n.j,size:"xl"})})})]}),(0,j.jsxs)(r.sl,{children:[(0,j.jsxs)(r.lx,{children:[(0,j.jsx)(r.L8,{children:"Filtros de busqueda"}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsx)("div",{className:"flex-fill me-2",children:(0,j.jsx)(r.LX,{value:e,onChange:e=>a(e.target.value),"aria-label":"caseFilter",options:[{label:"Proveedor",value:"provider"},{label:"Solicitante",value:"petitioner"}]})}),(0,j.jsx)("div",{className:"flex-fill me-2",children:"status"!==e?(0,j.jsx)(r.jO,{value:s,onChange:e=>o(e.target.value),type:"text",id:"provider",placeholder:"Ingresar texto"}):(0,j.jsx)(r.LX,{value:s,onChange:e=>o(e.target.value),"aria-label":"caseFilter",options:[{label:"Pendientes",value:"pending"},{label:"Revisadas",value:"review"},{label:"Aprobadas",value:"approved"},{label:"Rechazadas",value:"rejects"}]})})]}),(0,j.jsx)(r.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>h(u(c,e,s)),children:"Buscar"})]}),b?(0,j.jsx)("div",{className:"d-flex justify-content-center",children:(0,j.jsx)(r.LQ,{color:"primary",variant:"grow"})}):(0,j.jsx)(m,{data:g})]}),(0,j.jsx)(r.Bt,{children:(0,j.jsx)(p.bD,{currentPage:c,lastPage:v,setCurrentPage:d})})]})}}}]);
//# sourceMappingURL=876.bbf622ec.chunk.js.map