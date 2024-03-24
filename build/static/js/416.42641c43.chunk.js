"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[416],{8383:(e,t,a)=>{a.d(t,{BZ:()=>i,If:()=>l,Ps:()=>o,j4:()=>c,tt:()=>d});var s=a(5294),r=a(591),n=a(6647);const o=(e,t,a)=>async o=>{try{const i=await s.Z.get("".concat(n.Z.instance.baseURL,"/api/department?").concat(t,"=").concat(a,"&page=").concat(e),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:r.hf,payload:i.data})}catch(i){o({type:r.fm,payload:{msg:i.response.statusText,status:i.response.status}})}},i=(e,t)=>async a=>{try{const o=await s.Z.post("".concat(n.Z.instance.baseURL,"/api/department"),e,{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.Wo,payload:o.data.data}),t(o.data)}catch(o){a({type:r.fm,payload:{msg:o.response.statusText,status:o.response.status}}),t({success:!1,message:o.message})}},c=(e,t,a)=>async o=>{try{const i=await s.Z.put("".concat(n.Z.instance.baseURL,"/api/department/").concat(t),e,{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:r.aZ,payload:i.data.data}),a(i.data)}catch(i){o({type:r.fm,payload:{msg:i.response.statusText,status:i.response.status}}),a({success:!1,message:i.message})}},l=(e,t)=>async a=>{try{const o=await s.Z.delete("".concat(n.Z.instance.baseURL,"/api/department/").concat(e),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.k_,payload:e}),t(o.data)}catch(o){a({type:r.fm,payload:{msg:o.response.statusText,status:o.response.status}}),t({success:!1,message:o.message})}},d=()=>async e=>{try{const t=await s.Z.get("".concat(n.Z.instance.baseURL,"/api/select/department"),{headers:{...n.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:r.qN,payload:t.data})}catch(t){e({type:r.fm,payload:{msg:t.response.statusText,status:t.response.status}})}}},7201:(e,t,a)=>{a.d(t,{Jw:()=>d,Tg:()=>h,a4:()=>p,aL:()=>l,iT:()=>o,mY:()=>i,mk:()=>u,uD:()=>m,uf:()=>n,y3:()=>c});var s=a(9779),r=a(9101);const n=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),o=e=>s.ou.fromISO(e).toLocaleString(s.ou.DATE_SHORT),i=e=>s.ou.fromISO(e).toLocaleString(s.ou.DATETIME_SHORT),c=e=>new Promise(((t,a)=>{const s=new FileReader;s.readAsDataURL(e),s.onload=e=>t(e.target.result.toString()),s.onerror=a})),l=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:t?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:t?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},d={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},p={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},m={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},u={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},h=(e,t)=>{const a=(0,r.v9)((e=>e.auth.permissions)),s=(0,r.v9)((e=>e.auth.modules)).find((t=>t.submodule===e));return!!s&&!!a.find((e=>e.submodule===s.submodule&&e.permission===t))}},1416:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var s=a(2791),r=a(2937),n=a(9101),o=a(4846),i=a(8030),c=a(7941),l=a(8383),d=a(3896),p=a(1830),m=a.n(p),u=a(4166),h=a(184);const x=e=>{let{visible:t,onClose:a,departmentData:o}=e;const[i,d]=(0,s.useState)(1),[p,m]=(0,s.useState)(),[x,g]=(0,s.useState)(),j=(0,n.I0)(),v=((0,n.v9)((e=>e.department.loading)),(0,s.useCallback)((()=>{g(),d(1)}),[]));return(0,s.useEffect)((()=>{o&&(m(o.id),g(o.name))}),[o]),(0,h.jsxs)(r.Tk,{visible:t,onClose:a,"aria-labelledby":"LiveDemoExampleLabel",size:"lg",children:[(0,h.jsx)(r.p0,{onClose:a,children:(0,h.jsx)(r.fl,{id:"LiveDemoExampleLabel",children:o?"Editar ".concat(o.name):"Agregar nuevo"})}),(0,h.jsxs)(r.sD,{children:[(0,h.jsx)(r.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,h.jsx)(r.U6,{role:"presentation",children:(0,h.jsx)(r.AQ,{active:1===i,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===i,onClick:()=>d(1),children:"Datos"})})}),(0,h.jsx)(r.gr,{children:(0,h.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===i,children:(0,h.jsx)(r.lx,{className:"mt-3",children:(0,h.jsxs)("div",{className:"mb-3",children:[(0,h.jsx)(r.L8,{htmlFor:"department",children:"Departamento"}),(0,h.jsx)(r.jO,{type:"text",id:"department",placeholder:"nombre",onChange:e=>g(e.target.value),value:x})]})})})})]}),(0,h.jsxs)(r.Ym,{children:[(0,h.jsx)(r.u5,{color:"secondary",onClick:a,children:"Cerrar"}),(0,h.jsx)(r.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!x)return void alert("Ingrese un nombre");let t={name:x};j(o?(0,l.j4)(t,p,(e=>{e.success?j((0,u.f)((0,c.Kv)({msg:"Departamento actualizado correctamente.",title:"Departamentos",type:"success"}))):j((0,u.f)((0,c.Kv)({msg:"Ha ocurrido un error.",title:"Departamentos",type:"error"}))),v(),a()})):(0,l.BZ)(t,(e=>{e.success?j((0,u.f)((0,c.Kv)({msg:"Departamento agregado correctamente.",title:"Departamentos",type:"success"}))):j((0,u.f)((0,c.Kv)({msg:"Ha ocurrido un error.",title:"Departamentos",type:"error"}))),v(),a()})))},children:"Guardar"})]})]})};var g=a(7201);const j=e=>{let{data:t}=e;const[a,i]=(0,s.useState)(!1),[p,j]=(0,s.useState)(null),v=(0,n.I0)(),f=(0,g.Tg)("departments","delete"),y=(0,g.Tg)("departments","edit");return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,h.jsx)(r.V,{children:(0,h.jsxs)(r.T6,{children:[(0,h.jsx)(r.is,{scope:"col",children:"#"}),(0,h.jsx)(r.is,{scope:"col",children:"Departamento"}),(0,h.jsx)(r.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,h.jsx)(r.NR,{children:null===t||void 0===t?void 0:t.map((e=>(0,h.jsxs)(r.T6,{children:[(0,h.jsx)(r.is,{scope:"row",children:e.id}),(0,h.jsx)(r.NN,{children:e.name}),(0,h.jsx)(r.NN,{className:"text-center overflow-visible",children:(0,h.jsxs)(r.w5,{variant:"dropdown",children:[(0,h.jsx)(r.SQ,{href:"#",color:"light",children:(0,h.jsx)(o.Z,{icon:d.t,title:"Opciones",size:"lg"})}),(0,h.jsxs)(r.$H,{className:"position-fixed",children:[y&&(0,h.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{i(!a),j(e)},children:"Editar"}),f&&(0,h.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{return t=e.id,void m().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((e=>{e.isConfirmed&&v((0,l.If)(t,(e=>{e.success?(v((0,u.f)((0,c.Kv)({msg:"Departamento eliminado correctamente.",title:"Departamentos",type:"success"}))),m().fire({title:"Eliminado!",text:"El departamento ha sido eliminado.",icon:"success"})):v((0,u.f)((0,c.Kv)({msg:"Ocurrio un error.",title:"Departamentos",type:"error"})))})))}));var t},children:"Eliminar"})]})]})})]},e.id)))})]}),(0,h.jsx)(x,{visible:a,onClose:()=>i(!1),departmentData:p})]})},v=()=>{const[e,t]=(0,s.useState)(!1),a=(0,n.I0)(),[d,p]=(0,s.useState)("name"),[m,u]=(0,s.useState)(""),v=(0,n.v9)((e=>e.department.departments.data)),[f,y]=(0,s.useState)(1),b=(0,n.v9)((e=>e.department.departments.current_page)),z=(0,n.v9)((e=>e.department.departments.last_page)),C=((0,n.v9)((e=>e.department.departments.total)),(0,n.v9)((e=>e.department.loading)));return(0,s.useEffect)((()=>{a((0,l.Ps)(f,d,m))}),[a,f]),(0,s.useEffect)((()=>{b&&y(b)}),[b]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(r.xH,{children:[(0,h.jsxs)(r.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,h.jsx)("h4",{children:"Listado de departamentos"}),(0,h.jsx)("div",{className:"d-flex gap-2",children:(0,g.Tg)("departments","create")&&(0,h.jsxs)(r.u5,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>t(!e),children:[(0,h.jsx)(o.Z,{icon:i.q,size:"xl",className:"me-1"}),"Nuevo"]})})]}),(0,h.jsxs)(r.sl,{children:[(0,h.jsxs)(r.lx,{children:[(0,h.jsx)(r.L8,{children:"Filtros de busqueda"}),(0,h.jsxs)("div",{className:"mb-3 d-flex",children:[(0,h.jsx)("div",{className:"flex-fill me-2",children:(0,h.jsx)(r.LX,{value:d,onChange:e=>p(e.target.value),"aria-label":"caseFilter",options:[{label:"Departamento",value:"name"}]})}),(0,h.jsx)("div",{className:"flex-fill me-2",children:(0,h.jsx)(r.jO,{value:m,onChange:e=>u(e.target.value),type:"text",placeholder:"Ingresar texto"})})]}),(0,h.jsx)(r.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>a((0,l.Ps)(f,d,m)),children:"Buscar"})]}),C?(0,h.jsx)("div",{className:"d-flex justify-content-center",children:(0,h.jsx)(r.LQ,{color:"primary",variant:"grow"})}):(0,h.jsx)(j,{data:v})]}),(0,h.jsx)(r.Bt,{children:(0,h.jsx)(c.bD,{currentPage:f,lastPage:z,setCurrentPage:y})})]}),(0,h.jsx)(x,{visible:e,onClose:()=>t(!1)})]})}}}]);
//# sourceMappingURL=416.42641c43.chunk.js.map