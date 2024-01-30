"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[876],{7201:(e,s,a)=>{a.d(s,{Tg:()=>x,a4:()=>o,iT:()=>n,mY:()=>t,mk:()=>p,uD:()=>d,uf:()=>r,yw:()=>c});var i=a(9779),l=a(9101);const r=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),n=e=>i.ou.fromISO(e).toLocaleString(i.ou.DATE_SHORT),t=e=>i.ou.fromISO(e).toLocaleString(i.ou.DATETIME_SHORT),c={advance:"Anticipo",settlement:"Liquidaci\xf3n",payment:"Abono a cuenta"},o={pending:"Cotizaci\xf3n completa",approved:"Cotizaci\xf3n aprobada",paid:"Cotizaci\xf3n pagada",rejected:"Cotizaci\xf3n rechazada"},d={pending:"warning",approved:"success",paid:"info",rejected:"danger"},p={index:"Lectura",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",authorize:"Autorizar",modules:"Asignar modulos",permissions:"Asignar permisos"},x=(e,s)=>{const a=(0,l.v9)((e=>e.auth.permissions)),i=(0,l.v9)((e=>e.auth.modules)).find((s=>s.submodule===e));return!!i&&!!a.find((e=>e.submodule===i.submodule&&e.permission===s))}},1876:(e,s,a)=>{a.r(s),a.d(s,{default:()=>g});var i=a(2791),l=a(2937),r=a(4846),n=a(8723),t=a(9101),c=a(5294),o=a(591),d=a(6647);const p=(e,s,a)=>async i=>{try{const l=1,r=await c.Z.get("".concat(d.Z.instance.baseURL,"/api/pending/purchaseRequest?user_id=").concat(l,"&").concat(s,"=").concat(a,"&page=").concat(e),{headers:{...d.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});i({type:o.x0,payload:{...r.data,filters:{filter:s,value:a}}})}catch(l){i({type:o.xL,payload:{msg:l.response.statusText,status:l.response.status}})}};var x=a(574),h=a(3896),u=a(7201),j=a(184);const m=e=>{let{visible:s,onClose:a,purchaseRequestDetailID:r,provider:n}=e;const p=(0,t.I0)(),[x,h]=(0,i.useState)(0),{balance:m,loadingBalance:v}=(0,t.v9)((e=>e.pendingPayments));return(0,i.useEffect)((()=>{var e;p((e=r,async s=>{try{const a=await c.Z.get("".concat(d.Z.instance.baseURL,"/api/balance/purchaseRequestDetail/").concat(e),{headers:{...d.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:o.Or,payload:a.data})}catch(a){s({type:o.xL,payload:{msg:a.response.statusText,status:a.response.status}})}}))}),[p,r]),(0,i.useEffect)((()=>{var e;m&&h(null===(e=m.find((e=>!e.purchase_detail_pending_id)))||void 0===e?void 0:e.totalAmount)}),[m]),(0,j.jsxs)(l.Tk,{visible:s,onClose:a,"aria-labelledby":"ModalForm",size:"lg",children:[(0,j.jsx)(l.p0,{onClose:a,children:(0,j.jsx)(l.fl,{id:"ModalForm",children:"Estado de cuenta"})}),(0,j.jsx)(l.sD,{children:v?(0,j.jsx)("div",{className:"d-flex justify-content-center",children:(0,j.jsx)(l.LQ,{color:"primary",variant:"grow"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(l.lx,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(l.L8,{htmlFor:"provider",children:"Proveedor"}),(0,j.jsx)(l.jO,{type:"text",id:"provider",value:n,disabled:!0})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("p",{children:"Importe total"}),(0,j.jsxs)("h5",{id:"totalAmount",className:"fw-bold text-primary",children:["$",(0,u.uf)(x)]})]})]}),(0,j.jsxs)(l.Sx,{striped:!0,responsive:!0,children:[(0,j.jsx)(l.V,{children:(0,j.jsxs)(l.T6,{children:[(0,j.jsx)(l.is,{scope:"col",children:"Fecha"}),(0,j.jsx)(l.is,{scope:"col",children:"Cargo"}),(0,j.jsx)(l.is,{scope:"col",children:"Concepto"}),(0,j.jsx)(l.is,{scope:"col",children:"Detalle"}),(0,j.jsx)(l.is,{scope:"col",children:"Pago"}),(0,j.jsx)(l.is,{scope:"col",children:"Saldo"})]})}),(0,j.jsx)(l.NR,{children:null===m||void 0===m?void 0:m.map((e=>(0,j.jsxs)(l.T6,{children:[(0,j.jsx)(l.NN,{children:(0,u.mY)(e.created_at)}),(0,j.jsx)(l.NN,{children:e.charge}),(0,j.jsx)(l.NN,{children:e.concept}),(0,j.jsx)(l.NN,{children:e.observation}),(0,j.jsxs)(l.NN,{children:["$",(0,u.uf)(e.paymentAmount)]}),(0,j.jsx)(l.NN,{children:e.balance<=0?"$"+(0,u.uf)((null===e||void 0===e?void 0:e.totalAmount)-(null===e||void 0===e?void 0:e.paymentAmount)):"$"+(0,u.uf)(e.balance)})]},e.id)))})]})]})}),(0,j.jsx)(l.Ym,{children:(0,j.jsx)(l.u5,{color:"secondary",onClick:a,children:"Cerrar"})})]})},v=e=>{let{data:s}=e;const[a,n]=(0,i.useState)(!1),[c,o]=(0,i.useState)(null),[d,p]=(0,i.useState)("");(0,t.I0)();return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(l.Sx,{striped:!0,responsive:!0,children:[(0,j.jsx)(l.V,{children:(0,j.jsxs)(l.T6,{children:[(0,j.jsx)(l.is,{scope:"col",children:"Proveedor"}),(0,j.jsx)(l.is,{scope:"col",children:"Solicitante"}),(0,j.jsx)(l.is,{scope:"col",children:"Cargo"}),(0,j.jsx)(l.is,{scope:"col",children:"Concepto"}),(0,j.jsx)(l.is,{scope:"col",children:"Observaci\xf3n"}),(0,j.jsx)(l.is,{scope:"col",children:"Fecha solic."}),(0,j.jsx)(l.is,{scope:"col",children:"Saldo"}),(0,j.jsx)(l.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,j.jsx)(l.NR,{children:null===s||void 0===s?void 0:s.map((e=>e.detailsFiltered.map((s=>(0,j.jsxs)(l.T6,{children:[(0,j.jsx)(l.NN,{children:e.provider.name}),(0,j.jsx)(l.NN,{children:e.petitioner.name}),(0,j.jsx)(l.NN,{children:s.charge}),(0,j.jsx)(l.NN,{children:s.concept}),(0,j.jsx)(l.NN,{children:s.observation}),(0,j.jsx)(l.NN,{children:(0,u.iT)(e.created_at)}),(0,j.jsxs)(l.NN,{children:["$",(0,u.uf)(s.balance)]}),(0,j.jsx)(l.NN,{className:"text-center overflow-visible",children:(0,j.jsxs)(l.w5,{variant:"dropdown",children:[(0,j.jsx)(l.SQ,{href:"#",color:"light",children:(0,j.jsx)(r.Z,{icon:h.t,title:"Opciones",size:"lg"})}),(0,j.jsx)(l.$H,{className:"position-fixed",children:(0,j.jsx)(l.$f,{style:{cursor:"pointer"},onClick:()=>{p(e.provider.name),o(s.id),n(!a)},children:"Ver estado de cuenta"})})]})})]},e.id)))))})]}),a&&(0,j.jsx)(m,{visible:a,onClose:()=>{n(!1),o(null),p("")},purchaseRequestDetailID:c,provider:d})]})},g=()=>{const[e,s]=(0,i.useState)("provider"),[a,c]=(0,i.useState)(""),[o,d]=(0,i.useState)(1),h=(0,t.I0)(),{currentPage:u,last_page:m,data:g}=(0,t.v9)((e=>e.pendingPayments.pendingPayments)),f=(0,t.v9)((e=>e.pendingPayments.loading));return(0,i.useEffect)((()=>{h(p(o,e,a))}),[o,h]),(0,i.useEffect)((()=>{u&&d(u)}),[u]),(0,j.jsxs)(l.xH,{children:[(0,j.jsxs)(l.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,j.jsx)("h4",{children:"Listado de Pagos Pendientes"}),(0,j.jsx)("div",{className:"d-flex gap-2",children:(0,j.jsx)(l.u5,{color:"info",className:"text-light align-content-center d-flex",children:(0,j.jsx)(r.Z,{icon:n.j,size:"xl"})})})]}),(0,j.jsxs)(l.sl,{children:[(0,j.jsxs)(l.lx,{children:[(0,j.jsx)(l.L8,{children:"Filtros de busqueda"}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsx)("div",{className:"flex-fill me-2",children:(0,j.jsx)(l.LX,{value:e,onChange:e=>s(e.target.value),"aria-label":"caseFilter",options:[{label:"Proveedor",value:"provider"},{label:"Solicitante",value:"petitioner"}]})}),(0,j.jsx)("div",{className:"flex-fill me-2",children:"status"!==e?(0,j.jsx)(l.jO,{value:a,onChange:e=>c(e.target.value),type:"text",id:"provider",placeholder:"Ingresar texto"}):(0,j.jsx)(l.LX,{value:a,onChange:e=>c(e.target.value),"aria-label":"caseFilter",options:[{label:"Pendientes",value:"pending"},{label:"Revisadas",value:"review"},{label:"Aprobadas",value:"approved"},{label:"Rechazadas",value:"rejects"}]})})]}),(0,j.jsx)(l.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>h(p(o,e,a)),children:"Buscar"})]}),f?(0,j.jsx)("div",{className:"d-flex justify-content-center",children:(0,j.jsx)(l.LQ,{color:"primary",variant:"grow"})}):(0,j.jsx)(v,{data:g})]}),(0,j.jsx)(l.Bt,{children:(0,j.jsx)(x.bD,{currentPage:o,lastPage:m,setCurrentPage:d})})]})}},8723:(e,s,a)=>{a.d(s,{j:()=>i});var i=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='272 434.744 272 209.176 240 209.176 240 434.744 188.118 382.862 165.49 405.489 256 496 346.51 405.489 323.882 382.862 272 434.744' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M400,161.176c0-79.4-64.6-144-144-144s-144,64.6-144,144a96,96,0,0,0,0,192h80v-32H112a64,64,0,0,1,0-128h32v-32a112,112,0,0,1,224,0v32h32a64,64,0,0,1,0,128H320v32h80a96,96,0,0,0,0-192Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=876.56beb6ba.chunk.js.map