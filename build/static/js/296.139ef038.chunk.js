"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[296],{4528:(e,a,s)=>{s.d(a,{Uv:()=>d,ii:()=>o,jd:()=>l,mQ:()=>c,pR:()=>i});var t=s(8372),n=s(2156),r=s(4836);const o=(e,a,s)=>async o=>{try{const i=await t.c.get("".concat(r.c.instance.baseURL,"/api/bank?").concat(a,"=").concat(s,"&page=").concat(e),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:n.SQ,payload:i.data})}catch(i){o({type:n.S7,payload:{msg:i.response.statusText,status:i.response.status}})}},i=(e,a)=>async s=>{try{const o=await t.c.post("".concat(r.c.instance.baseURL,"/api/bank"),e,{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:n._k,payload:o.data.data}),a(o.data)}catch(o){s({type:n.S7,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},c=(e,a,s)=>async o=>{try{const i=await t.c.put("".concat(r.c.instance.baseURL,"/api/bank/").concat(a),e,{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});o({type:n.kf,payload:i.data.data}),s(i.data)}catch(i){o({type:n.S7,payload:{msg:i.response.statusText,status:i.response.status}}),s({success:!1,message:i.message})}},l=(e,a)=>async s=>{try{const o=await t.c.delete("".concat(r.c.instance.baseURL,"/api/bank/").concat(e),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:n._i,payload:e}),a(o.data)}catch(o){s({type:n.S7,payload:{msg:o.response.statusText,status:o.response.status}}),a({success:!1,message:o.message})}},d=()=>async e=>{try{const a=await t.c.get("".concat(r.c.instance.baseURL,"/api/select/bank"),{headers:{...r.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:n.Tf,payload:a.data})}catch(a){e({type:n.S7,payload:{msg:a.response.statusText,status:a.response.status}})}}},868:(e,a,s)=>{s.d(a,{Im:()=>m,OO:()=>i,SU:()=>d,Sk:()=>c,UT:()=>u,YD:()=>p,_x:()=>l,iy:()=>r,my:()=>o});var t=s(9427),n=s(8044);const r=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),o=e=>t.CS.fromISO(e).toLocaleString(t.CS.DATE_SHORT),i=e=>t.CS.fromISO(e).toLocaleString(t.CS.DATETIME_SHORT),c=function(e){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:a?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:a?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},l={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},d={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},u={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},p={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},m=(e,a)=>{const s=(0,n.w1)((e=>e.auth.permissions)),t=(0,n.w1)((e=>e.auth.modules)).find((a=>a.submodule===e));return!!t&&!!s.find((e=>e.submodule===t.submodule&&e.permission===a))}},3296:(e,a,s)=>{s.r(a),s.d(a,{default:()=>j});var t=s(9060),n=s(3084),r=s(8044),o=s(4528),i=s(5064),c=s(7316),l=s(2496);const d=e=>{let{visible:a,onClose:s,bankData:d}=e;const[u,p]=(0,t.useState)(1),[m,h]=(0,t.useState)(),[x,g]=(0,t.useState)(),b=(0,r.OY)(),j=((0,r.w1)((e=>e.bank.loading)),(0,t.useCallback)((()=>{g(),p(1)}),[]));return(0,t.useEffect)((()=>{d&&(h(d.id),g(d.name))}),[d]),(0,l.jsxs)(n.U5,{visible:a,onClose:s,"aria-labelledby":"LiveDemoExampleLabel",size:"lg",children:[(0,l.jsx)(n.gO,{onClose:s,children:(0,l.jsx)(n._K,{id:"LiveDemoExampleLabel",children:d?"Editar ".concat(d.name):"Agregar nuevo"})}),(0,l.jsxs)(n.EB,{children:[(0,l.jsx)(n.wx,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,l.jsx)(n.SU,{role:"presentation",children:(0,l.jsx)(n.QJ,{active:1===u,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===u,onClick:()=>p(1),children:"Datos"})})}),(0,l.jsx)(n.CY,{children:(0,l.jsx)(n.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===u,children:(0,l.jsx)(n.YR,{className:"mt-3",children:(0,l.jsxs)("div",{className:"mb-3",children:[(0,l.jsx)(n.Q5,{htmlFor:"bank",children:"Banco"}),(0,l.jsx)(n.Ip,{type:"text",id:"bank",placeholder:"nombre",onChange:e=>g(e.target.value),value:x})]})})})})]}),(0,l.jsxs)(n.yI,{children:[(0,l.jsx)(n.uE,{color:"secondary",onClick:s,children:"Cerrar"}),(0,l.jsx)(n.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!x)return void alert("Ingrese un nombre");let a={name:x};b(d?(0,o.mQ)(a,m,(e=>{e.success?b((0,i.I)((0,c.oN)({msg:"Banco actualizado correctamente.",title:"Bancos",type:"success"}))):b((0,i.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Bancos",type:"error"}))),j(),s()})):(0,o.pR)(a,(e=>{e.success?b((0,i.I)((0,c.oN)({msg:"Banco agregado correctamente.",title:"Bancos",type:"success"}))):b((0,i.I)((0,c.oN)({msg:"Ha ocurrido un error.",title:"Bancos",type:"error"}))),j(),s()})))},children:"Guardar"})]})]})};var u=s(5564),p=s(4904),m=s(9012),h=s.n(m),x=s(868);const g=e=>{let{data:a}=e;const[s,m]=(0,t.useState)(!1),[g,b]=(0,t.useState)(null),j=(0,r.OY)(),y=(0,x.Im)("banks","delete"),v=(0,x.Im)("banks","edit");return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.k7,{striped:!0,responsive:!0,children:[(0,l.jsx)(n.Iy,{children:(0,l.jsxs)(n.uH,{children:[(0,l.jsx)(n.Qr,{scope:"col",children:"#"}),(0,l.jsx)(n.Qr,{scope:"col",children:"Banco"}),(0,l.jsx)(n.Qr,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,l.jsx)(n.g7,{children:null===a||void 0===a?void 0:a.map((e=>(0,l.jsxs)(n.uH,{children:[(0,l.jsx)(n.Qr,{scope:"row",children:e.id}),(0,l.jsx)(n.kz,{children:e.name}),(0,l.jsx)(n.kz,{className:"text-center overflow-visible",children:(0,l.jsxs)(n.Cg,{variant:"dropdown",children:[(0,l.jsx)(n.uw,{href:"#",color:"light",children:(0,l.jsx)(u.c,{icon:p.i,title:"Opciones",size:"lg"})}),(0,l.jsxs)(n.cI,{className:"position-fixed",children:[v&&(0,l.jsx)(n.yu,{style:{cursor:"pointer"},onClick:()=>{m(!s),b(e)},children:"Editar"}),y&&(0,l.jsx)(n.yu,{style:{cursor:"pointer"},onClick:()=>{return a=e.id,void h().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((e=>{e.isConfirmed&&j((0,o.jd)(a,(e=>{e.success?(j((0,i.I)((0,c.oN)({msg:"Banco eliminado correctamente.",title:"Bancos",type:"success"}))),h().fire({title:"Eliminado!",text:"El banco ha sido eliminado.",icon:"success"})):j((0,i.I)((0,c.oN)({msg:"Ocurrio un error.",title:"Bancos",type:"error"})))})))}));var a},children:"Eliminar"})]})]})})]},e.id)))})]}),(0,l.jsx)(d,{visible:s,onClose:()=>m(!1),bankData:g})]})};var b=s(2276);const j=()=>{const[e,a]=(0,t.useState)(!1),s=(0,r.OY)(),[i,p]=(0,t.useState)("name"),[m,h]=(0,t.useState)(""),j=(0,r.w1)((e=>e.bank.banks.data)),[y,v]=(0,t.useState)(1),k=(0,r.w1)((e=>e.bank.banks.current_page)),f=(0,r.w1)((e=>e.bank.banks.last_page)),S=((0,r.w1)((e=>e.bank.banks.total)),(0,r.w1)((e=>e.bank.loading)));return(0,t.useEffect)((()=>{s((0,o.ii)(y,i,m))}),[s,y]),(0,t.useEffect)((()=>{k&&v(k)}),[k]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.u0,{children:[(0,l.jsxs)(n.Q_,{className:"d-flex justify-content-between align-items-center",children:[(0,l.jsx)("h4",{children:"Listado de Bancos"}),(0,l.jsx)("div",{className:"d-flex gap-2",children:(0,x.Im)("banks","create")&&(0,l.jsxs)(n.uE,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>a(!e),children:[(0,l.jsx)(u.c,{icon:b.O,size:"xl",className:"me-1"}),"Nuevo"]})})]}),(0,l.jsxs)(n.Yj,{children:[(0,l.jsxs)(n.YR,{children:[(0,l.jsx)(n.Q5,{children:"Filtros de busqueda"}),(0,l.jsxs)("div",{className:"mb-3 d-flex",children:[(0,l.jsx)("div",{className:"flex-fill me-2",children:(0,l.jsx)(n.Wc,{value:i,onChange:e=>p(e.target.value),"aria-label":"caseFilter",options:[{label:"Banco",value:"name"}]})}),(0,l.jsx)("div",{className:"flex-fill me-2",children:(0,l.jsx)(n.Ip,{value:m,onChange:e=>h(e.target.value),type:"text",placeholder:"Ingresar texto"})})]}),(0,l.jsx)(n.uE,{type:"button",className:"text-light fw-semibold",onClick:()=>s((0,o.ii)(y,i,m)),children:"Buscar"})]}),S?(0,l.jsx)("div",{className:"d-flex justify-content-center",children:(0,l.jsx)(n.GG,{color:"primary",variant:"grow"})}):(0,l.jsx)(g,{data:j})]}),(0,l.jsx)(n.IE,{children:(0,l.jsx)(c.KQ,{currentPage:y,lastPage:f,setCurrentPage:v})})]}),e&&(0,l.jsx)(d,{visible:e,onClose:()=>a(!1)})]})}}}]);
//# sourceMappingURL=296.139ef038.chunk.js.map