"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[72],{4880:(e,s,a)=>{a.d(s,{GB:()=>o,GU:()=>l,M7:()=>d,jH:()=>c,yq:()=>i});var t=a(8372),r=a(2156),n=a(4836);const c=(e,s,a)=>async c=>{try{const i=await t.c.get("".concat(n.c.instance.baseURL,"/api/department?").concat(s,"=").concat(a,"&page=").concat(e),{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.Uj,payload:i.data})}catch(i){c({type:r.G4,payload:{msg:i.response.statusText,status:i.response.status}})}},i=(e,s)=>async a=>{try{const c=await t.c.post("".concat(n.c.instance.baseURL,"/api/department"),e,{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r._e,payload:c.data.data}),s(c.data)}catch(c){a({type:r.G4,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}},o=(e,s,a)=>async c=>{try{const i=await t.c.put("".concat(n.c.instance.baseURL,"/api/department/").concat(s),e,{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.gR,payload:i.data.data}),a(i.data)}catch(i){c({type:r.G4,payload:{msg:i.response.statusText,status:i.response.status}}),a({success:!1,message:i.message})}},l=(e,s)=>async a=>{try{const c=await t.c.delete("".concat(n.c.instance.baseURL,"/api/department/").concat(e),{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.mw,payload:e}),s(c.data)}catch(c){a({type:r.G4,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}},d=()=>async e=>{try{const s=await t.c.get("".concat(n.c.instance.baseURL,"/api/select/department"),{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:r.Av,payload:s.data})}catch(s){e({type:r.G4,payload:{msg:s.response.statusText,status:s.response.status}})}}},2784:(e,s,a)=>{a.d(s,{A0:()=>l,Ab:()=>d,O8:()=>c,Oq:()=>u,YL:()=>o,i2:()=>i});var t=a(8372),r=a(2156),n=a(4836);const c=(e,s,a)=>async c=>{try{const i=await t.c.get("".concat(n.c.instance.baseURL,"/api/user?").concat(s,"=").concat(a,"&page=").concat(e),{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.gX,payload:i.data})}catch(i){c({type:r.I7,payload:{msg:i.response.statusText,status:i.response.status}})}},i=(e,s)=>async a=>{try{const c=await t.c.post("".concat(n.c.instance.baseURL,"/api/user"),e,{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.A5,payload:c.data.data}),s(c.data)}catch(c){a({type:r.I7,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}},o=(e,s,a)=>async c=>{try{const i=await t.c.put("".concat(n.c.instance.baseURL,"/api/user/").concat(s),e,{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});c({type:r.Qr,payload:i.data.data}),a(i.data)}catch(i){c({type:r.I7,payload:{msg:i.response.statusText,status:i.response.status}}),a({success:!1,message:i.message})}},l=(e,s)=>async a=>{try{const c=await t.c.delete("".concat(n.c.instance.baseURL,"/api/user/").concat(e),{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.ym,payload:e}),s(c.data)}catch(c){a({type:r.I7,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}},d=(e,s)=>async a=>{try{const c=await t.c.post("".concat(n.c.instance.baseURL,"/api/assign/module"),e,{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.Qr,payload:c.data.data}),s(c.data)}catch(c){a({type:r.I7,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}},u=(e,s)=>async a=>{try{const c=await t.c.post("".concat(n.c.instance.baseURL,"/api/assign/permission"),e,{headers:{...n.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:r.Qr,payload:c.data.data}),s(c.data)}catch(c){a({type:r.I7,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}}},9936:(e,s,a)=>{a.d(s,{c:()=>b});var t=a(9060),r=a(3084),n=a(8044),c=a(5064),i=a(7316),o=a(2784),l=a(5564),d=a(76),u=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313' class='ci-primary'/>"],m=a(4880),h=a(2156),p=a(8372),x=a(4836);var g=a(1560),j=a(2496);const b=e=>{let{visible:s,onClose:a,userData:b,visibleChangePassword:v,fromProfile:y}=e;const[f,C]=(0,t.useState)(v?2:1),[N,S]=(0,t.useState)(),[k,w]=(0,t.useState)(""),[I,z]=(0,t.useState)(""),[U,A]=(0,t.useState)(""),[E,F]=(0,t.useState)(""),[L,R]=(0,t.useState)(""),[P,D]=(0,t.useState)(""),[B,Q]=(0,t.useState)(""),[O,Y]=(0,t.useState)(""),[q,T]=(0,t.useState)({numCharacters:!1,uppercaseLetter:!1,lowercaseLetter:!1,number:!1,symbol:!1}),_=(0,n.OY)(),G=(0,n.w1)((e=>e.role.roles)),M=(0,n.w1)((e=>e.department.departments)),H=(0,g.i6)();(0,t.useEffect)((()=>{_((0,m.M7)()),_((async e=>{try{const s=await p.c.get("".concat(x.c.instance.baseURL,"/api/select/role"),{headers:{...x.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:h.sp,payload:s.data})}catch(s){e({type:h.AX,payload:{msg:s.response.statusText,status:s.response.status}})}}))}),[_]);const W=(0,t.useCallback)((()=>{w(""),z(""),R(""),D(""),F(""),Q(""),Y(""),A(""),S(""),C(1)}),[]);return(0,t.useEffect)((()=>{b&&(S(b.id),w(b.name),z(b.email),F(b.role_id),A(b.department_id),Y(b.payrollNumber),Q(b.nss))}),[b]),(0,t.useEffect)((()=>{if(!L)return void T({numCharacters:!1,uppercaseLetter:!1,lowercaseLetter:!1,number:!1,symbol:!1});const e={numCharacters:L.length>8,lowercaseLetter:!!/[a-z]/.test(L),uppercaseLetter:!!/[A-Z]/.test(L),number:!!/\d/.test(L),symbol:!!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(L)};T(e)}),[L]),(0,j.jsxs)(r.U5,{visible:s,onClose:a,"aria-labelledby":"LiveDemoExampleLabel",children:[(0,j.jsx)(r.gO,{onClose:a,children:(0,j.jsx)(r._K,{id:"LiveDemoExampleLabel",children:b?"Editar ".concat(b.name):"Agregar nuevo"})}),(0,j.jsxs)(r.EB,{children:[(0,j.jsxs)(r.wx,{variant:"tabs",role:"tablist",className:"mt-1",children:[!v&&(0,j.jsx)(r.SU,{role:"presentation",children:(0,j.jsx)(r.QJ,{active:1===f,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===f,onClick:()=>C(1),children:"Datos"})}),(v||!b)&&(0,j.jsx)(r.SU,{role:"presentation",children:(0,j.jsx)(r.QJ,{active:2===f,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":2===f,onClick:()=>C(2),children:"Contrase\xf1a"})})]}),(0,j.jsxs)(r.CY,{children:[(0,j.jsx)(r.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===f,children:(0,j.jsxs)(r.YR,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.Q5,{htmlFor:"name",children:"Nombre completo"}),(0,j.jsx)(r.Ip,{type:"text",id:"name",placeholder:"Nombre",onChange:e=>w(e.target.value),value:k})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.Q5,{htmlFor:"email",children:"Correo electr\xf3nico"}),(0,j.jsx)(r.Ip,{type:"text",id:"email",placeholder:"Correo electr\xf3nico",onChange:e=>z(e.target.value),value:I})]}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.Q5,{htmlFor:"nss",children:"N\xfamero de seguro social (NSS)"}),(0,j.jsx)(r.Ip,{type:"text",id:"nss",placeholder:"NSS",onChange:e=>Q(e.target.value),value:B})]}),(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.Q5,{htmlFor:"payrollNumber",children:"N\xfamero de n\xf3mina"}),(0,j.jsx)(r.Ip,{type:"text",id:"payrollNumber",placeholder:"No. N\xf3mina",onChange:e=>Y(e.target.value),value:O})]})]}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.Q5,{children:"Departamento"}),(0,j.jsxs)(r.Wc,{"aria-label":"charge",onChange:e=>A(e.target.value),value:U,children:[(0,j.jsx)("option",{value:"",children:"Seleccione..."}),null===M||void 0===M?void 0:M.data.map((e=>(0,j.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.Q5,{children:"Rol"}),(0,j.jsxs)(r.Wc,{"aria-label":"role",onChange:e=>F(e.target.value),value:E,children:[(0,j.jsx)("option",{value:"",children:"Seleccione..."}),null===G||void 0===G?void 0:G.data.map((e=>(0,j.jsx)("option",{value:e.id,children:e.name},e.id)))]})]})]})]})}),(0,j.jsx)(r.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:2===f,children:(0,j.jsxs)(r.YR,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.Q5,{htmlFor:"name",children:"Contrase\xf1a"}),(0,j.jsx)(r.Ip,{type:"password",id:"password",placeholder:"Contrase\xf1a",onChange:e=>R(e.target.value),value:L})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.Q5,{htmlFor:"confirmPassword",children:"Confirmar contrase\xf1a"}),(0,j.jsx)(r.Ip,{type:"password",id:"confirmPassword",placeholder:"Confirmar contrase\xf1a",onChange:e=>D(e.target.value),value:P}),P&&L!==P&&(0,j.jsx)("p",{className:"text-danger",children:"*La contrase\xf1a no coincide"})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("h6",{className:"fw-bolder",children:"La contrase\xf1a debe contener: "}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.numCharacters?(0,j.jsx)(l.c,{icon:d.q,className:"text-success"}):(0,j.jsx)(l.c,{icon:u,className:"text-danger"}),"8 o mas digitos"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.uppercaseLetter?(0,j.jsx)(l.c,{icon:d.q,className:"text-success"}):(0,j.jsx)(l.c,{icon:u,className:"text-danger"}),"Una letra mayuscula"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.lowercaseLetter?(0,j.jsx)(l.c,{icon:d.q,className:"text-success"}):(0,j.jsx)(l.c,{icon:u,className:"text-danger"}),"Una letra minuscula"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.number?(0,j.jsx)(l.c,{icon:d.q,className:"text-success"}):(0,j.jsx)(l.c,{icon:u,className:"text-danger"}),"Un numero"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.symbol?(0,j.jsx)(l.c,{icon:d.q,className:"text-success"}):(0,j.jsx)(l.c,{icon:u,className:"text-danger"}),"Un simbolo"]})]})]})})]})]}),(0,j.jsxs)(r.yI,{children:[(0,j.jsx)(r.uE,{color:"secondary",onClick:a,children:"Cerrar"}),(0,j.jsx)(r.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!k)return void alert("Ingrese un nombre");if(!I)return void alert("Ingrese un correo electr\xf3nico");if(v||!b){if(Object.values(q).every((e=>!e)))return void alert("Verifique las pol\xedticas de contrase\xf1a segura");if(!P)return void alert("Confirme la contrase\xf1a")}let s={name:k,email:I,nss:B,role_id:E,department_id:U,payrollNumber:O},t={password:L},r=v?t:s;_(b?(0,o.YL)(r,N,(e=>{e.success?(_((0,c.I)((0,i.oN)({msg:"Usuario actualizado correctamente.",title:"Usuarios",type:"success"}))),v&&y&&H("/login")):_((0,c.I)((0,i.oN)({msg:"Ha ocurrido un error.",title:"Usuarios",type:"error"}))),W(),a()})):(0,o.i2)({...s,...t},(e=>{e.success?_((0,c.I)((0,i.oN)({msg:"Usuario agregado correctamente.",title:"Usuarios",type:"success"}))):_((0,c.I)((0,i.oN)({msg:"Ha ocurrido un error.",title:"Usuarios",type:"error"}))),W(),a()})))},children:"Guardar"})]})]})}},868:(e,s,a)=>{a.d(s,{Im:()=>h,OO:()=>i,SU:()=>d,Sk:()=>o,UT:()=>u,YD:()=>m,_x:()=>l,iy:()=>n,my:()=>c});var t=a(9427),r=a(8044);const n=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),c=e=>t.CS.fromISO(e).toLocaleString(t.CS.DATE_SHORT),i=e=>t.CS.fromISO(e).toLocaleString(t.CS.DATETIME_SHORT),o=function(e){let s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{inprogress:s?"Cotizaci\xf3nes enviadas":"Cotizaci\xf3nes disponibles",approved:"Cotizaci\xf3n aprobada",authorized:"Cotizaci\xf3n autorizada",ok:"Cotizaci\xf3n VoBo",sent:s?"Solicitud nueva":"Solicitud enviada",sentPay:"Enviada a pago",paid:"Pagado",rejected:"Cotizaci\xf3nes rechazadas"}[e]},l={inprogress:"#00FFFF",approved:"#00FF00",authorized:"#0000FF",ok:"#008000",sent:"#FFA500",sentPay:"#30AFD4",paid:"#800080",rejected:"#FF0000"},d={pending:"Pendiente de aprobaci\xf3n",approved:"Solicitud aprobada",paid:"Pagado",rejected:"Solicitud rechazada"},u={pending:"#FFA500",approved:"#00FF00",paid:"#800080",rejected:"#FF0000"},m={index:"Listar",show:"Ver",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",approve:"Aprobar",authorize:"Autorizar","authorize.minor.1000":"Autorizar < $1,000","authorize.mayor.1000":"Autorizar > $1,000","authorize.minor.5000":"Autorizar < $5,000","authorize.mayor.5000":"Autorizar > $5,000",modules:"Asignar modulos",permissions:"Asignar permisos","upload.quote":"Subir cotizaci\xf3nes"},h=(e,s)=>{const a=(0,r.w1)((e=>e.auth.permissions)),t=(0,r.w1)((e=>e.auth.modules)).find((s=>s.submodule===e));return!!t&&!!a.find((e=>e.submodule===t.submodule&&e.permission===s))}},72:(e,s,a)=>{a.r(s),a.d(s,{default:()=>N});var t=a(9060),r=a(3084),n=a(8044),c=a(5564),i=a(2276),o=a(7316),l=a(2784),d=a(4904),u=a(9012),m=a.n(u),h=a(5064),p=a(9936),x=a(2496);const g=e=>{let{visible:s,onClose:a,userData:c}=e;const[i,d]=(0,t.useState)(1),[u,m]=(0,t.useState)(),[p,g]=(0,t.useState)(!1),[j,b]=(0,t.useState)(!1),[v,y]=(0,t.useState)(!1),[f,C]=(0,t.useState)(!1),[N,S]=(0,t.useState)(!1),[k,w]=(0,t.useState)(!1),[I,z]=(0,t.useState)(!1),[U,A]=(0,t.useState)([]),E=(0,n.OY)(),F=((0,n.w1)((e=>e.user.loading)),function(e,s){arguments.length>2&&void 0!==arguments[2]&&arguments[2]||A(e?[...U,s]:U.filter((e=>e!==s))),"banks"===s&&g(e),"providers"===s&&b(e),"quotes"===s&&y(e),"purchaseRequest"===s&&C(e),"pendingPayments"===s&&S(e),"departments"===s&&w(e),"users"===s&&z(e)});return(0,t.useEffect)((()=>{if(!c)return;m(c.id);let e=[];c.modules&&(c.modules.forEach((s=>{F(!0,s.module.submodule,!0),e.push(s.module.submodule)})),A(e))}),[c]),console.log(U),(0,x.jsxs)(r.U5,{visible:s,onClose:a,"aria-labelledby":"UserModulesModal",size:"lg",children:[(0,x.jsx)(r.gO,{onClose:a,children:(0,x.jsx)(r._K,{id:"UserModulesModal",children:"Asignar modulos a ".concat(c.name)})}),(0,x.jsxs)(r.EB,{children:[(0,x.jsx)(r.wx,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,x.jsx)(r.SU,{role:"presentation",children:(0,x.jsx)(r.QJ,{active:1===i,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===i,onClick:()=>d(1),children:"Modulos"})})}),(0,x.jsx)(r.CY,{children:(0,x.jsx)(r.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===i,children:(0,x.jsxs)(r.YR,{className:"mt-3",children:[(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)("h5",{children:"Administraci\xf3n"}),(0,x.jsxs)("div",{className:"row row-cols-3",children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(r.e0,{id:"banks",label:"Bancos",checked:p,onChange:e=>F(e.target.checked,"banks")})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(r.e0,{id:"providers",label:"Proveedores",checked:j,onChange:e=>F(e.target.checked,"providers")})})]})]}),(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)("h5",{children:"Pagos"}),(0,x.jsxs)("div",{className:"row row-cols-3",children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(r.e0,{id:"quotes",label:"Solicitud de compra",checked:v,onChange:e=>F(e.target.checked,"quotes")})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(r.e0,{id:"purchaseRequest",label:"Solicitud de pago",checked:f,onChange:e=>F(e.target.checked,"purchaseRequest")})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(r.e0,{id:"pendingPayments",label:"Pagos pendientes",checked:N,onChange:e=>F(e.target.checked,"pendingPayments")})})]})]}),(0,x.jsxs)("div",{className:"mb-3",children:[(0,x.jsx)("h5",{children:"Usuarios"}),(0,x.jsxs)("div",{className:"row row-cols-3",children:[(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(r.e0,{id:"departments",label:"Departamentos",checked:k,onChange:e=>F(e.target.checked,"departments")})}),(0,x.jsx)("div",{className:"col",children:(0,x.jsx)(r.e0,{id:"users",label:"Usuarios",checked:I,onChange:e=>F(e.target.checked,"users")})})]})]})]})})})]}),(0,x.jsxs)(r.yI,{children:[(0,x.jsx)(r.uE,{color:"secondary",onClick:a,children:"Cerrar"}),(0,x.jsx)(r.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();let s={user_id:u,modules:U};E((0,l.Ab)(s,(e=>{e.success&&E((0,h.I)((0,o.oN)({msg:e.message,type:"success"})))}))),a()},children:"Guardar"})]})]})};var j=a(2156),b=a(8372),v=a(4836);var y=a(868);const f=e=>{let{visible:s,onClose:a,userData:c}=e;const[i,d]=(0,t.useState)(1),[u,m]=(0,t.useState)(),[p,g]=(0,t.useState)([]),f=(0,n.OY)(),C=(0,n.w1)((e=>e.permission.loading)),N=(0,n.w1)((e=>e.permission.permissions));(0,t.useEffect)((()=>{if(!c)return;m(c.id);let e=[];c.permissions&&(c.permissions.forEach((s=>{S(!0,s.permission.id,!0),e.push(s.permission.id)})),g(e))}),[c]),(0,t.useEffect)((()=>{f((async e=>{try{const s=await b.c.get("".concat(v.c.instance.baseURL,"/api/permission"),{headers:{...v.c.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:j.kV,payload:s.data})}catch(s){e({type:j.Ks,payload:{msg:s.response.statusText,status:s.response.status}})}}))}),[f]);const S=function(e,s){arguments.length>2&&void 0!==arguments[2]&&arguments[2]||g(e?[...p,s]:p.filter((e=>e!==s)))};return(0,x.jsxs)(r.U5,{visible:s,onClose:a,"aria-labelledby":"UserPermissionsModal",size:"xl",children:[(0,x.jsx)(r.gO,{onClose:a,children:(0,x.jsx)(r._K,{id:"UserPermissionsModal",children:"Editar permisos a ".concat(c.name)})}),(0,x.jsxs)(r.EB,{children:[(0,x.jsx)(r.wx,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,x.jsx)(r.SU,{role:"presentation",children:(0,x.jsx)(r.QJ,{active:1===i,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===i,onClick:()=>d(1),children:"Permisos"})})}),(0,x.jsx)(r.CY,{children:C?(0,x.jsx)(r.GG,{color:"primary",variant:"grow"}):(0,x.jsx)(r.Wy,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===i,children:(0,x.jsx)(r.YR,{className:"mt-3",children:(0,x.jsxs)("div",{className:"row row-cols-5",children:[c.modules.find((e=>"banks"===e.module.submodule))&&(0,x.jsxs)("div",{className:"col mb-3",children:[(0,x.jsx)("h5",{children:"Bancos"}),null===N||void 0===N?void 0:N.map((e=>"banks"===e.module.submodule?(0,x.jsx)("div",{children:(0,x.jsx)(r.e0,{id:e.name,label:y.YD[e.name],checked:p.find((s=>s===e.id)),onChange:s=>S(s.target.checked,e.id)})},e.id):(0,x.jsx)(x.Fragment,{})))]}),c.modules.find((e=>"providers"===e.module.submodule))&&(0,x.jsxs)("div",{className:"col mb-3",children:[(0,x.jsx)("h5",{children:"Proveedores"}),N.map((e=>"providers"===e.module.submodule?(0,x.jsx)("div",{children:(0,x.jsx)(r.e0,{id:e.name,label:y.YD[e.name],checked:p.find((s=>s===e.id)),onChange:s=>S(s.target.checked,e.id)})},e.id):(0,x.jsx)(x.Fragment,{})))]}),c.modules.find((e=>"quotes"===e.module.submodule))&&(0,x.jsxs)("div",{className:"col mb-3",children:[(0,x.jsx)("h5",{children:"Solicitudes de compra"}),N.map((e=>"quotes"===e.module.submodule?(0,x.jsx)("div",{children:(0,x.jsx)(r.e0,{id:e.name,label:y.YD[e.name],checked:p.find((s=>s===e.id)),onChange:s=>S(s.target.checked,e.id)})},e.id):(0,x.jsx)(x.Fragment,{})))]}),c.modules.find((e=>"purchaseRequest"===e.module.submodule))&&(0,x.jsxs)("div",{className:"col mb-3",children:[(0,x.jsx)("h5",{children:"Solicitudes de pago"}),N.map((e=>"purchaseRequest"===e.module.submodule?(0,x.jsx)("div",{children:(0,x.jsx)(r.e0,{id:e.name,label:y.YD[e.name],checked:p.find((s=>s===e.id)),onChange:s=>S(s.target.checked,e.id)})},e.id):(0,x.jsx)(x.Fragment,{})))]}),c.modules.find((e=>"pendingPayments"===e.module.submodule))&&(0,x.jsxs)("div",{className:"col mb-3",children:[(0,x.jsx)("h5",{children:"Pagos pendientes"}),N.map((e=>"pendingPayments"===e.module.submodule?(0,x.jsx)("div",{children:(0,x.jsx)(r.e0,{id:e.name,label:y.YD[e.name],checked:p.find((s=>s===e.id)),onChange:s=>S(s.target.checked,e.id)})},e.id):(0,x.jsx)(x.Fragment,{})))]}),c.modules.find((e=>"departments"===e.module.submodule))&&(0,x.jsxs)("div",{className:"col mb-3",children:[(0,x.jsx)("h5",{children:"Departamentos"}),N.map((e=>"departments"===e.module.submodule?(0,x.jsx)("div",{children:(0,x.jsx)(r.e0,{id:e.name,label:y.YD[e.name],checked:p.find((s=>s===e.id)),onChange:s=>S(s.target.checked,e.id)})},e.id):(0,x.jsx)(x.Fragment,{})))]}),c.modules.find((e=>"users"===e.module.submodule))&&(0,x.jsxs)("div",{className:"col mb-3",children:[(0,x.jsx)("h5",{children:"Usuarios"}),N.map((e=>"users"===e.module.submodule?(0,x.jsx)("div",{children:(0,x.jsx)(r.e0,{id:e.name,label:y.YD[e.name],checked:p.find((s=>s===e.id)),onChange:s=>S(s.target.checked,e.id)})},e.id):(0,x.jsx)(x.Fragment,{})))]})]})})})})]}),(0,x.jsxs)(r.yI,{children:[(0,x.jsx)(r.uE,{color:"secondary",onClick:a,children:"Cerrar"}),(0,x.jsx)(r.uE,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault();let s={user_id:u,permissions:p};f((0,l.Oq)(s,(e=>{e.success?f((0,h.I)((0,o.oN)({msg:e.message,type:"success"}))):f((0,h.I)((0,o.oN)({msg:e.message,type:"error"})))}))),a()},children:"Guardar"})]})]})},C=e=>{let{data:s}=e;const[a,i]=(0,t.useState)(!1),[u,j]=(0,t.useState)(!1),[b,v]=(0,t.useState)(!1),[C,N]=(0,t.useState)(!1),[S,k]=(0,t.useState)(null),w=(0,n.OY)(),I=(0,y.Im)("users","delete"),z=(0,y.Im)("users","edit"),U=(0,y.Im)("users","modules"),A=(0,y.Im)("users","permissions"),E=e=>{m().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((s=>{s.isConfirmed&&w((0,l.A0)(e,(e=>{e.success?(w((0,h.I)((0,o.oN)({msg:"Usuario eliminado correctamente.",title:"Usuarios",type:"success"}))),m().fire({title:"Eliminado!",text:"El Usuario ha sido eliminado.",icon:"success"})):w((0,h.I)((0,o.oN)({msg:"Ocurrio un error.",title:"Usuarios",type:"error"})))})))}))};return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(r.k7,{striped:!0,responsive:!0,children:[(0,x.jsx)(r.Iy,{children:(0,x.jsxs)(r.uH,{children:[(0,x.jsx)(r.Qr,{scope:"col",children:"#"}),(0,x.jsx)(r.Qr,{scope:"col",children:"Nombre"}),(0,x.jsx)(r.Qr,{scope:"col",children:"Correo electr\xf3nico"}),(0,x.jsx)(r.Qr,{scope:"col",children:"Departamento"}),(0,x.jsx)(r.Qr,{scope:"col",children:"Rol"}),(0,x.jsx)(r.Qr,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,x.jsx)(r.g7,{children:null===s||void 0===s?void 0:s.map((e=>{var s,t,n;return(0,x.jsxs)(r.uH,{children:[(0,x.jsx)(r.Qr,{scope:"row",children:e.id}),(0,x.jsx)(r.kz,{children:e.name}),(0,x.jsx)(r.kz,{children:e.email}),(0,x.jsx)(r.kz,{children:(null===e||void 0===e||null===(s=e.department)||void 0===s?void 0:s.name)||(0,x.jsx)("span",{className:"text-primary fw-bolder",children:"Sin departamento asignado"})}),(0,x.jsx)(r.kz,{children:(null===e||void 0===e||null===(t=e.role)||void 0===t?void 0:t.name)||(0,x.jsx)("span",{className:"text-primary fw-bolder",children:"Sin rol asignado"})}),(0,x.jsx)(r.kz,{className:"text-center overflow-visible",children:(0,x.jsxs)(r.Cg,{variant:"dropdown",children:[(0,x.jsx)(r.uw,{href:"#",color:"light",children:(0,x.jsx)(c.c,{icon:d.i,title:"Opciones",size:"lg"})}),(0,x.jsxs)(r.cI,{className:"position-fixed",children:[U&&(0,x.jsx)(r.yu,{style:{cursor:"pointer"},onClick:()=>{j(!u),k(e)},children:"Asignar modulos"}),A&&(null===e||void 0===e||null===(n=e.modules)||void 0===n?void 0:n.length)>0&&(0,x.jsx)(r.yu,{style:{cursor:"pointer"},onClick:()=>{v(!b),k(e)},children:"Permisos"}),z&&(0,x.jsx)(r.yu,{style:{cursor:"pointer"},onClick:()=>{i(!a),k(e)},children:"Editar"}),z&&(0,x.jsx)(r.yu,{style:{cursor:"pointer"},onClick:()=>{i(!a),N(!0),k(e)},children:"Cambiar contrase\xf1a"}),I&&(0,x.jsx)(r.yu,{style:{cursor:"pointer"},onClick:()=>E(e.id),children:"Eliminar"})]})]})})]},e.id)}))})]}),a&&(0,x.jsx)(p.c,{visible:a,onClose:()=>{i(!1),N(!1)},userData:S,visibleChangePassword:C}),u&&(0,x.jsx)(g,{visible:u,onClose:()=>j(!1),userData:S}),b&&(0,x.jsx)(f,{visible:b,onClose:()=>v(!1),userData:S})]})},N=()=>{const[e,s]=(0,t.useState)(!1),a=(0,n.OY)(),[d,u]=(0,t.useState)("name"),[m,h]=(0,t.useState)(""),g=(0,n.w1)((e=>e.user.users.data)),[j,b]=(0,t.useState)(1),v=(0,n.w1)((e=>e.user.users.current_page)),f=(0,n.w1)((e=>e.user.users.last_page)),N=((0,n.w1)((e=>e.user.users.total)),(0,n.w1)((e=>e.user.loading)));return(0,t.useEffect)((()=>{a((0,l.O8)(j,d,m))}),[a,j]),(0,t.useEffect)((()=>{v&&b(v)}),[v]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(r.u0,{children:[(0,x.jsxs)(r.Q_,{className:"d-flex justify-content-between align-items-center",children:[(0,x.jsx)("h4",{children:"Listado de usuarios"}),(0,x.jsx)("div",{className:"d-flex gap-2",children:(0,y.Im)("users","create")&&(0,x.jsxs)(r.uE,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>s(!e),children:[(0,x.jsx)(c.c,{icon:i.O,size:"xl",className:"me-1"}),"Nuevo"]})})]}),(0,x.jsxs)(r.Yj,{children:[(0,x.jsxs)(r.YR,{children:[(0,x.jsx)(r.Q5,{children:"Filtros de busqueda"}),(0,x.jsxs)("div",{className:"mb-3 d-flex",children:[(0,x.jsx)("div",{className:"flex-fill me-2",children:(0,x.jsx)(r.Wc,{value:d,onChange:e=>u(e.target.value),"aria-label":"caseFilter",options:[{label:"Nombre",value:"name"},{label:"Rol",value:"role"}]})}),(0,x.jsx)("div",{className:"flex-fill me-2",children:(0,x.jsx)(r.Ip,{value:m,onChange:e=>h(e.target.value),type:"text",placeholder:"Ingresar texto"})})]}),(0,x.jsx)(r.uE,{type:"button",className:"text-light fw-semibold",onClick:()=>a((0,l.O8)(j,d,m)),children:"Buscar"})]}),N?(0,x.jsx)("div",{className:"d-flex justify-content-center",children:(0,x.jsx)(r.GG,{color:"primary",variant:"grow"})}):(0,x.jsx)(C,{data:g})]}),(0,x.jsx)(r.IE,{children:(0,x.jsx)(o.KQ,{currentPage:j,lastPage:f,setCurrentPage:b})})]}),e&&(0,x.jsx)(p.c,{visible:e,onClose:()=>s(!1)})]})}},76:(e,s,a)=>{a.d(s,{q:()=>t});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/>"]}}]);
//# sourceMappingURL=72.fe7f31b8.chunk.js.map