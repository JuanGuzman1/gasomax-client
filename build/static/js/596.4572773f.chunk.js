"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[596],{507:(e,a,s)=>{s.d(a,{AG:()=>c,G5:()=>o,I2:()=>l,qH:()=>i,wT:()=>d});var t=s(5294),n=s(591),r=s(6647);const o=(e,a,s)=>async o=>{try{const i=await t.Z.get("".concat(r.Z.instance.baseURL,"/api/bank?").concat(a,"=").concat(s,"&page=").concat(e),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:n.s6,payload:i.data})}catch(i){o({type:n.l9,payload:{msg:i.response.statusText,status:i.response.status}})}},i=(e,a)=>async s=>{try{const o=await t.Z.post("".concat(r.Z.instance.baseURL,"/api/bank"),e,{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:n.RS,payload:o.data.data}),a(o.data)}catch(o){s({type:n.l9,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},c=(e,a,s)=>async o=>{try{const i=await t.Z.put("".concat(r.Z.instance.baseURL,"/api/bank/").concat(a),e,{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:n.h5,payload:i.data.data}),s(i.data)}catch(i){o({type:n.l9,payload:{msg:i.response.statusText,status:i.response.status}}),s({success:!1,message:i.message})}},l=(e,a)=>async s=>{try{const o=await t.Z.delete("".concat(r.Z.instance.baseURL,"/api/bank/").concat(e),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:n.ZU,payload:e}),a(o.data)}catch(o){s({type:n.l9,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},d=()=>async e=>{try{const a=await t.Z.get("".concat(r.Z.instance.baseURL,"/api/select/bank"),{headers:{...r.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:n.mC,payload:a.data})}catch(a){e({type:n.l9,payload:{msg:a.response.statusText,status:a.response.status}})}}},7201:(e,a,s)=>{s.d(a,{Jw:()=>d,Tg:()=>h,a4:()=>u,aL:()=>l,iT:()=>o,mY:()=>i,mk:()=>m,uD:()=>p,uf:()=>r,y3:()=>c});var t=s(9779),n=s(9101);const r=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),o=e=>t.ou.fromISO(e).toLocaleString(t.ou.DATE_SHORT),i=e=>t.ou.fromISO(e).toLocaleString(t.ou.DATETIME_SHORT),c=e=>new Promise(((a,s)=>{const t=new FileReader;t.readAsDataURL(e),t.onload=e=>a(e.target.result.toString()),t.onerror=s})),l=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:a?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:a?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},d={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},u={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},p={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},m={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},h=(e,a)=>{const s=(0,n.v9)((e=>e.auth.permissions)),t=(0,n.v9)((e=>e.auth.modules)).find((a=>a.submodule===e));return!!t&&!!s.find((e=>e.submodule===t.submodule&&e.permission===a))}},596:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var t=s(2791),n=s(2937),r=s(9101),o=s(507),i=s(4166),c=s(7941),l=s(184);const d=e=>{let{visible:a,onClose:s,bankData:d}=e;const[u,p]=(0,t.useState)(1),[m,h]=(0,t.useState)(),[x,g]=(0,t.useState)(),b=(0,r.I0)(),j=((0,r.v9)((e=>e.bank.loading)),(0,t.useCallback)((()=>{g(),p(1)}),[]));return(0,t.useEffect)((()=>{d&&(h(d.id),g(d.name))}),[d]),(0,l.jsxs)(n.Tk,{visible:a,onClose:s,"aria-labelledby":"LiveDemoExampleLabel",size:"lg",children:[(0,l.jsx)(n.p0,{onClose:s,children:(0,l.jsx)(n.fl,{id:"LiveDemoExampleLabel",children:d?"Editar ".concat(d.name):"Agregar nuevo"})}),(0,l.jsxs)(n.sD,{children:[(0,l.jsx)(n.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,l.jsx)(n.U6,{role:"presentation",children:(0,l.jsx)(n.AQ,{active:1===u,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===u,onClick:()=>p(1),children:"Datos"})})}),(0,l.jsx)(n.gr,{children:(0,l.jsx)(n.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===u,children:(0,l.jsx)(n.lx,{className:"mt-3",children:(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(n.L8,{htmlFor:"bank",children:"Banco"}),(0,l.jsx)(n.jO,{type:"text",id:"bank",placeholder:"nombre",onChange:e=>g(e.target.value),value:x})]})})})})]}),(0,l.jsxs)(n.Ym,{children:[(0,l.jsx)(n.u5,{color:"secondary",onClick:s,children:"Cerrar"}),(0,l.jsx)(n.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!x)return void alert("Ingrese un nombre");let a={name:x};b(d?(0,o.AG)(a,m,(e=>{e.success?b((0,i.f)((0,c.Kv)({msg:"Banco actualizado correctamente.",title:"Bancos",type:"success"}))):b((0,i.f)((0,c.Kv)({msg:"Ha ocurrido un error.",title:"Bancos",type:"error"}))),j(),s()})):(0,o.qH)(a,(e=>{e.success?b((0,i.f)((0,c.Kv)({msg:"Banco agregado correctamente.",title:"Bancos",type:"success"}))):b((0,i.f)((0,c.Kv)({msg:"Ha ocurrido un error.",title:"Bancos",type:"error"}))),j(),s()})))},children:"Guardar"})]})]})};var u=s(4846),p=s(3896),m=s(1830),h=s.n(m),x=s(7201);const g=e=>{let{data:a}=e;const[s,m]=(0,t.useState)(!1),[g,b]=(0,t.useState)(null),j=(0,r.I0)(),v=(0,x.Tg)("banks","delete"),y=(0,x.Tg)("banks","edit");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.Sx,{striped:!0,responsive:!0,children:[(0,l.jsx)(n.V,{children:(0,l.jsxs)(n.T6,{children:[(0,l.jsx)(n.is,{scope:"col",children:"#"}),(0,l.jsx)(n.is,{scope:"col",children:"Banco"}),(0,l.jsx)(n.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,l.jsx)(n.NR,{children:null===a||void 0===a?void 0:a.map((e=>(0,l.jsxs)(n.T6,{children:[(0,l.jsx)(n.is,{scope:"row",children:e.id}),(0,l.jsx)(n.NN,{children:e.name}),(0,l.jsx)(n.NN,{className:"text-center overflow-visible",children:(0,l.jsxs)(n.w5,{variant:"dropdown",children:[(0,l.jsx)(n.SQ,{href:"#",color:"light",children:(0,l.jsx)(u.Z,{icon:p.t,title:"Opciones",size:"lg"})}),(0,l.jsxs)(n.$H,{className:"position-fixed",children:[y&&(0,l.jsx)(n.$f,{style:{cursor:"pointer"},onClick:()=>{m(!s),b(e)},children:"Editar"}),v&&(0,l.jsx)(n.$f,{style:{cursor:"pointer"},onClick:()=>{return a=e.id,void h().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((e=>{e.isConfirmed&&j((0,o.I2)(a,(e=>{e.success?(j((0,i.f)((0,c.Kv)({msg:"Banco eliminado correctamente.",title:"Bancos",type:"success"}))),h().fire({title:"Eliminado!",text:"El banco ha sido eliminado.",icon:"success"})):j((0,i.f)((0,c.Kv)({msg:"Ocurrio un error.",title:"Bancos",type:"error"})))})))}));var a},children:"Eliminar"})]})]})})]},e.id)))})]}),(0,l.jsx)(d,{visible:s,onClose:()=>m(!1),bankData:g})]})};var b=s(8030);const j=()=>{const[e,a]=(0,t.useState)(!1),s=(0,r.I0)(),[i,p]=(0,t.useState)("name"),[m,h]=(0,t.useState)(""),j=(0,r.v9)((e=>e.bank.banks.data)),[v,y]=(0,t.useState)(1),f=(0,r.v9)((e=>e.bank.banks.current_page)),k=(0,r.v9)((e=>e.bank.banks.last_page)),z=((0,r.v9)((e=>e.bank.banks.total)),(0,r.v9)((e=>e.bank.loading)));return(0,t.useEffect)((()=>{s((0,o.G5)(v,i,m))}),[s,v]),(0,t.useEffect)((()=>{f&&y(f)}),[f]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.xH,{children:[(0,l.jsxs)(n.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,l.jsx)("h4",{children:"Listado de Bancos"}),(0,l.jsx)("div",{className:"d-flex gap-2",children:(0,x.Tg)("banks","create")&&(0,l.jsxs)(n.u5,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>a(!e),children:[(0,l.jsx)(u.Z,{icon:b.q,size:"xl",className:"me-1"}),"Nuevo"]})})]}),(0,l.jsxs)(n.sl,{children:[(0,l.jsxs)(n.lx,{children:[(0,l.jsx)(n.L8,{children:"Filtros de busqueda"}),(0,l.jsxs)("div",{className:"mb-3 d-flex",children:[(0,l.jsx)("div",{className:"flex-fill me-2",children:(0,l.jsx)(n.LX,{value:i,onChange:e=>p(e.target.value),"aria-label":"caseFilter",options:[{label:"Banco",value:"name"}]})}),(0,l.jsx)("div",{className:"flex-fill me-2",children:(0,l.jsx)(n.jO,{value:m,onChange:e=>h(e.target.value),type:"text",placeholder:"Ingresar texto"})})]}),(0,l.jsx)(n.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>s((0,o.G5)(v,i,m)),children:"Buscar"})]}),z?(0,l.jsx)("div",{className:"d-flex justify-content-center",children:(0,l.jsx)(n.LQ,{color:"primary",variant:"grow"})}):(0,l.jsx)(g,{data:j})]}),(0,l.jsx)(n.Bt,{children:(0,l.jsx)(c.bD,{currentPage:v,lastPage:k,setCurrentPage:y})})]}),e&&(0,l.jsx)(d,{visible:e,onClose:()=>a(!1)})]})}}}]);
//# sourceMappingURL=596.4572773f.chunk.js.map