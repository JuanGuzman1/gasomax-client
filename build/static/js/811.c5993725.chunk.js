"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[811],{7201:(e,s,a)=>{a.d(s,{Tg:()=>u,a4:()=>c,iT:()=>i,mY:()=>n,mk:()=>m,uD:()=>d,uf:()=>l,yw:()=>o});var t=a(9779),r=a(9101);const l=e=>(e/1).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),i=e=>t.ou.fromISO(e).toLocaleString(t.ou.DATE_SHORT),n=e=>t.ou.fromISO(e).toLocaleString(t.ou.DATETIME_SHORT),o={advance:"Anticipo",settlement:"Liquidaci\xf3n",payment:"Abono a cuenta"},c={pending:"Cotizaci\xf3n completa",approved:"Cotizaci\xf3n aprobada",paid:"Cotizaci\xf3n pagada",rejected:"Cotizaci\xf3n rechazada"},d={pending:"warning",approved:"success",paid:"info",rejected:"danger"},m={index:"Lectura",create:"Crear",edit:"Editar",delete:"Eliminar",reject:"Rechazar",pay:"Pagar",authorize:"Autorizar",modules:"Asignar modulos",permissions:"Asignar permisos"},u=(e,s)=>{const a=(0,r.v9)((e=>e.auth.permissions)),t=(0,r.v9)((e=>e.auth.modules)).find((s=>s.submodule===e));return!!t&&!!a.find((e=>e.submodule===t.submodule&&e.permission===s))}},1811:(e,s,a)=>{a.r(s),a.d(s,{default:()=>S});var t=a(2791),r=a(2937),l=a(9101),i=a(4846),n=a(8030),o=a(574),c=a(5294),d=a(591),m=a(6647);const u=(e,s,a)=>async t=>{try{const r=await c.Z.get("".concat(m.Z.instance.baseURL,"/api/user?").concat(s,"=").concat(a,"&page=").concat(e),{headers:{...m.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:d.fo,payload:r.data})}catch(r){t({type:d.zA,payload:{msg:r.response.statusText,status:r.response.status}})}};var h=a(3896),x=a(1830),p=a.n(x),j=a(4166),g=a(1404),v=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313' class='ci-primary'/>"],b=a(184);const f=e=>{let{visible:s,onClose:a,userData:n}=e;const[u,h]=(0,t.useState)(1),[x,p]=(0,t.useState)(),[f,y]=(0,t.useState)(""),[C,N]=(0,t.useState)(""),[k,S]=(0,t.useState)(""),[w,L]=(0,t.useState)(""),[A,Z]=(0,t.useState)(""),[E,U]=(0,t.useState)(""),[D,z]=(0,t.useState)(""),[T,F]=(0,t.useState)(""),[I,P]=(0,t.useState)({numCharacters:!1,uppercaseLetter:!1,lowercaseLetter:!1,number:!1,symbol:!1}),R=(0,l.I0)(),B=((0,l.v9)((e=>e.user.loading)),(0,t.useCallback)((()=>{y(""),N(""),Z(""),U(""),L(""),z(""),F(""),S(""),p(""),h(1)}),[]));return(0,t.useEffect)((()=>{n&&(p(n.id),y(n.name),N(n.email),L(n.role),F(n.payrollNumber),z(n.nss))}),[n]),(0,t.useEffect)((()=>{if(!A)return void P({numCharacters:!1,uppercaseLetter:!1,lowercaseLetter:!1,number:!1,symbol:!1});const e={numCharacters:A.length>8,lowercaseLetter:!!/[a-z]/.test(A),uppercaseLetter:!!/[A-Z]/.test(A),number:!!/\d/.test(A),symbol:!!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(A)};P(e)}),[A]),(0,b.jsxs)(r.Tk,{visible:s,onClose:a,"aria-labelledby":"LiveDemoExampleLabel",children:[(0,b.jsx)(r.p0,{onClose:a,children:(0,b.jsx)(r.fl,{id:"LiveDemoExampleLabel",children:n?"Editar ".concat(n.name):"Agregar nuevo"})}),(0,b.jsxs)(r.sD,{children:[(0,b.jsxs)(r.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:[(0,b.jsx)(r.U6,{role:"presentation",children:(0,b.jsx)(r.AQ,{active:1===u,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===u,onClick:()=>h(1),children:"Datos"})}),(0,b.jsx)(r.U6,{role:"presentation",children:(0,b.jsx)(r.AQ,{active:2===u,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":2===u,onClick:()=>h(2),children:"Contrase\xf1a"})})]}),(0,b.jsxs)(r.gr,{children:[(0,b.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===u,children:(0,b.jsxs)(r.lx,{className:"mt-3",children:[(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)(r.L8,{htmlFor:"name",children:"Nombre completo"}),(0,b.jsx)(r.jO,{type:"text",id:"name",placeholder:"Nombre",onChange:e=>y(e.target.value),value:f})]}),(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)(r.L8,{htmlFor:"email",children:"Correo electr\xf3nico"}),(0,b.jsx)(r.jO,{type:"text",id:"email",placeholder:"Correo electr\xf3nico",onChange:e=>N(e.target.value),value:C})]}),(0,b.jsxs)("div",{className:"mb-3 d-flex",children:[(0,b.jsxs)("div",{className:"flex-fill me-2",children:[(0,b.jsx)(r.L8,{htmlFor:"nss",children:"N\xfamero de seguro social (NSS)"}),(0,b.jsx)(r.jO,{type:"text",id:"nss",placeholder:"NSS",onChange:e=>z(e.target.value),value:D})]}),(0,b.jsxs)("div",{className:"flex-fill me-2",children:[(0,b.jsx)(r.L8,{htmlFor:"payrollNumber",children:"N\xfamero de n\xf3mina"}),(0,b.jsx)(r.jO,{type:"text",id:"payrollNumber",placeholder:"No. N\xf3mina",onChange:e=>F(e.target.value),value:T})]})]}),(0,b.jsxs)("div",{className:"mb-3 d-flex",children:[(0,b.jsxs)("div",{className:"flex-fill me-2",children:[(0,b.jsx)(r.L8,{children:"Departamento"}),(0,b.jsx)(r.LX,{"aria-label":"charge",options:[{label:"Seleccione...",value:""},{label:"Direccion",value:"Direccion"},{label:"Sistemas",value:"Sistemas"}],onChange:e=>S(e.target.value),value:k})]}),(0,b.jsxs)("div",{className:"flex-fill me-2",children:[(0,b.jsx)(r.L8,{children:"Rol"}),(0,b.jsx)(r.LX,{"aria-label":"role",options:[{label:"Seleccione...",value:""},{label:"Director",value:"Director"},{label:"Jefe Dpto",value:"Jefe Dpto"},{label:"Colaborador",value:"Colaborador"}],onChange:e=>L(e.target.value),value:w})]})]})]})}),(0,b.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:2===u,children:(0,b.jsxs)(r.lx,{className:"mt-3",children:[(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)(r.L8,{htmlFor:"name",children:"Contrase\xf1a"}),(0,b.jsx)(r.jO,{type:"password",id:"password",placeholder:"Contrase\xf1a",onChange:e=>Z(e.target.value),value:A})]}),(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)(r.L8,{htmlFor:"confirmPassword",children:"Confirmar contrase\xf1a"}),(0,b.jsx)(r.jO,{type:"password",id:"confirmPassword",placeholder:"Confirmar contrase\xf1a",onChange:e=>U(e.target.value),value:E}),E&&A!==E&&(0,b.jsx)("p",{className:"text-danger",children:"*La contrase\xf1a no coincide"})]}),(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("h6",{className:"fw-bolder",children:"La contrase\xf1a debe contener: "}),(0,b.jsxs)("div",{className:"d-flex align-items-center",children:[I.numCharacters?(0,b.jsx)(i.Z,{icon:g.F,className:"text-success"}):(0,b.jsx)(i.Z,{icon:v,className:"text-danger"}),"8 o mas digitos"]}),(0,b.jsxs)("div",{className:"d-flex align-items-center",children:[I.uppercaseLetter?(0,b.jsx)(i.Z,{icon:g.F,className:"text-success"}):(0,b.jsx)(i.Z,{icon:v,className:"text-danger"}),"Una letra mayuscula"]}),(0,b.jsxs)("div",{className:"d-flex align-items-center",children:[I.lowercaseLetter?(0,b.jsx)(i.Z,{icon:g.F,className:"text-success"}):(0,b.jsx)(i.Z,{icon:v,className:"text-danger"}),"Una letra minuscula"]}),(0,b.jsxs)("div",{className:"d-flex align-items-center",children:[I.number?(0,b.jsx)(i.Z,{icon:g.F,className:"text-success"}):(0,b.jsx)(i.Z,{icon:v,className:"text-danger"}),"Un numero"]}),(0,b.jsxs)("div",{className:"d-flex align-items-center",children:[I.symbol?(0,b.jsx)(i.Z,{icon:g.F,className:"text-success"}):(0,b.jsx)(i.Z,{icon:v,className:"text-danger"}),"Un simbolo"]})]})]})})]})]}),(0,b.jsxs)(r.Ym,{children:[(0,b.jsx)(r.u5,{color:"secondary",onClick:a,children:"Cerrar"}),(0,b.jsx)(r.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!f)return void alert("Ingrese un nombre");if(!C)return void alert("Ingrese un correo electr\xf3nico");if(Object.values(I).every((e=>!e)))return void alert("Verifique las pol\xedticas de contrase\xf1a segura");if(!E)return void alert("Confirme la contrase\xf1a");let s={name:f,email:C,password:A,nss:D,role:w,payrollNumber:T};R(n?((e,s,a)=>async t=>{try{const r=await c.Z.put("".concat(m.Z.instance.baseURL,"/api/user/").concat(s),e,{headers:{...m.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});t({type:d.AX,payload:r.data.data}),a(r.data)}catch(r){t({type:d.zA,payload:{msg:r.response.statusText,status:r.response.status}}),a({success:!1,message:r.message})}})(s,x,(e=>{e.success?R((0,j.f)((0,o.Kv)({msg:"Usuario actualizado correctamente.",title:"Usuarios",type:"success"}))):R((0,j.f)((0,o.Kv)({msg:"Ha ocurrido un error.",title:"Usuarios",type:"error"}))),B(),a()})):((e,s)=>async a=>{try{const t=await c.Z.post("".concat(m.Z.instance.baseURL,"/api/user"),e,{headers:{...m.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:d.jN,payload:t.data.data}),s(t.data)}catch(t){a({type:d.zA,payload:{msg:t.response.statusText,status:t.response.status}}),s({success:!1,message:t.message})}})(s,(e=>{e.success?R((0,j.f)((0,o.Kv)({msg:"Usuario agregado correctamente.",title:"Usuarios",type:"success"}))):R((0,j.f)((0,o.Kv)({msg:"Ha ocurrido un error.",title:"Usuarios",type:"error"}))),B(),a()})))},children:"Guardar"})]})]})},y=e=>{let{visible:s,onClose:a,userData:i}=e;const[n,u]=(0,t.useState)(1),[h,x]=(0,t.useState)(),[p,g]=(0,t.useState)(!1),[v,f]=(0,t.useState)(!1),[y,C]=(0,t.useState)(!1),[N,k]=(0,t.useState)(!1),[S,w]=(0,t.useState)(!1),[L,A]=(0,t.useState)(!1),[Z,E]=(0,t.useState)([]),U=(0,l.I0)(),D=((0,l.v9)((e=>e.user.loading)),function(e,s){arguments.length>2&&void 0!==arguments[2]&&arguments[2]||E(e?[...Z,s]:Z.filter((e=>e!==s))),"banks"===s&&g(e),"providers"===s&&f(e),"purchaseRequest"===s&&C(e),"pendingPayments"===s&&k(e),"departments"===s&&w(e),"users"===s&&A(e)});return(0,t.useEffect)((()=>{if(!i)return;x(i.id);let e=[];i.modules&&(i.modules.forEach((s=>{D(!0,s.module.submodule,!0),e.push(s.module.submodule)})),E(e))}),[i]),console.log(Z),(0,b.jsxs)(r.Tk,{visible:s,onClose:a,"aria-labelledby":"UserModulesModal",size:"lg",children:[(0,b.jsx)(r.p0,{onClose:a,children:(0,b.jsx)(r.fl,{id:"UserModulesModal",children:"Asignar modulos a ".concat(i.name)})}),(0,b.jsxs)(r.sD,{children:[(0,b.jsx)(r.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,b.jsx)(r.U6,{role:"presentation",children:(0,b.jsx)(r.AQ,{active:1===n,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===n,onClick:()=>u(1),children:"Modulos"})})}),(0,b.jsx)(r.gr,{children:(0,b.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===n,children:(0,b.jsxs)(r.lx,{className:"mt-3",children:[(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("h5",{children:"Administraci\xf3n"}),(0,b.jsxs)("div",{className:"row row-cols-3",children:[(0,b.jsx)("div",{className:"col",children:(0,b.jsx)(r.EC,{id:"banks",label:"Bancos",checked:p,onChange:e=>D(e.target.checked,"banks")})}),(0,b.jsx)("div",{className:"col",children:(0,b.jsx)(r.EC,{id:"providers",label:"Proveedores",checked:v,onChange:e=>D(e.target.checked,"providers")})})]})]}),(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("h5",{children:"Pagos"}),(0,b.jsxs)("div",{className:"row row-cols-3",children:[(0,b.jsx)("div",{className:"col",children:(0,b.jsx)(r.EC,{id:"purchaseRequest",label:"Solicitud de compra",checked:y,onChange:e=>D(e.target.checked,"purchaseRequest")})}),(0,b.jsx)("div",{className:"col",children:(0,b.jsx)(r.EC,{id:"pendingPayments",label:"Pagos pendientes",checked:N,onChange:e=>D(e.target.checked,"pendingPayments")})})]})]}),(0,b.jsxs)("div",{className:"mb-3",children:[(0,b.jsx)("h5",{children:"Usuarios"}),(0,b.jsxs)("div",{className:"row row-cols-3",children:[(0,b.jsx)("div",{className:"col",children:(0,b.jsx)(r.EC,{id:"departments",label:"Departamentos",checked:S,onChange:e=>D(e.target.checked,"departments")})}),(0,b.jsx)("div",{className:"col",children:(0,b.jsx)(r.EC,{id:"users",label:"Usuarios",checked:L,onChange:e=>D(e.target.checked,"users")})})]})]})]})})})]}),(0,b.jsxs)(r.Ym,{children:[(0,b.jsx)(r.u5,{color:"secondary",onClick:a,children:"Cerrar"}),(0,b.jsx)(r.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault(),U(((e,s)=>async a=>{try{const t=await c.Z.post("".concat(m.Z.instance.baseURL,"/api/assign/module"),e,{headers:{...m.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:d.AX,payload:t.data.data}),s(t.data)}catch(t){a({type:d.zA,payload:{msg:t.response.statusText,status:t.response.status}}),s({success:!1,message:t.message})}})({user_id:h,modules:Z},(e=>{e.success&&U((0,j.f)((0,o.Kv)({msg:e.message,type:"success"})))}))),a()},children:"Guardar"})]})]})};var C=a(7201);const N=e=>{let{visible:s,onClose:a,userData:i}=e;const[n,u]=(0,t.useState)(1),[h,x]=(0,t.useState)(),[p,g]=(0,t.useState)([]),v=(0,l.I0)(),f=(0,l.v9)((e=>e.permission.loading)),y=(0,l.v9)((e=>e.permission.permissions));(0,t.useEffect)((()=>{if(!i)return;x(i.id);let e=[];i.permissions&&(i.permissions.forEach((s=>{N(!0,s.permission.id,!0),e.push(s.permission.id)})),g(e))}),[i]),(0,t.useEffect)((()=>{v((async e=>{try{const s=await c.Z.get("".concat(m.Z.instance.baseURL,"/api/permission"),{headers:{...m.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:d.ji,payload:s.data})}catch(s){e({type:d.qZ,payload:{msg:s.response.statusText,status:s.response.status}})}}))}),[v]);const N=function(e,s){arguments.length>2&&void 0!==arguments[2]&&arguments[2]||g(e?[...p,s]:p.filter((e=>e!==s)))};return(0,b.jsxs)(r.Tk,{visible:s,onClose:a,"aria-labelledby":"UserPermissionsModal",size:"lg",children:[(0,b.jsx)(r.p0,{onClose:a,children:(0,b.jsx)(r.fl,{id:"UserPermissionsModal",children:"Editar permisos a ".concat(i.name)})}),(0,b.jsxs)(r.sD,{children:[(0,b.jsx)(r.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,b.jsx)(r.U6,{role:"presentation",children:(0,b.jsx)(r.AQ,{active:1===n,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===n,onClick:()=>u(1),children:"Permisos"})})}),(0,b.jsx)(r.gr,{children:f?(0,b.jsx)(r.LQ,{color:"primary",variant:"grow"}):(0,b.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===n,children:(0,b.jsx)(r.lx,{className:"mt-3",children:(0,b.jsxs)("div",{className:"row row-cols-3 mb-3",children:[i.modules.find((e=>"banks"===e.module.submodule))&&(0,b.jsxs)("div",{className:"col",children:[(0,b.jsx)("h5",{children:"Bancos"}),null===y||void 0===y?void 0:y.map((e=>"banks"===e.module.submodule?(0,b.jsx)("div",{children:(0,b.jsx)(r.EC,{id:e.name,label:C.mk[e.name],checked:p.find((s=>s===e.id)),onChange:s=>N(s.target.checked,e.id)})},e.id):(0,b.jsx)(b.Fragment,{})))]}),i.modules.find((e=>"providers"===e.module.submodule))&&(0,b.jsxs)("div",{className:"col",children:[(0,b.jsx)("h5",{children:"Proveedores"}),y.map((e=>"providers"===e.module.submodule?(0,b.jsx)("div",{children:(0,b.jsx)(r.EC,{id:e.name,label:C.mk[e.name],checked:p.find((s=>s===e.id)),onChange:s=>N(s.target.checked,e.id)})},e.id):(0,b.jsx)(b.Fragment,{})))]}),i.modules.find((e=>"purchaseRequest"===e.module.submodule))&&(0,b.jsxs)("div",{className:"col",children:[(0,b.jsx)("h5",{children:"Solicitudes de pago"}),y.map((e=>"purchaseRequest"===e.module.submodule?(0,b.jsx)("div",{children:(0,b.jsx)(r.EC,{id:e.name,label:C.mk[e.name],checked:p.find((s=>s===e.id)),onChange:s=>N(s.target.checked,e.id)})},e.id):(0,b.jsx)(b.Fragment,{})))]}),i.modules.find((e=>"pendingPayments"===e.module.submodule))&&(0,b.jsxs)("div",{className:"col",children:[(0,b.jsx)("h5",{children:"Pagos pendientes"}),y.map((e=>"pendingPayments"===e.module.submodule?(0,b.jsx)("div",{children:(0,b.jsx)(r.EC,{id:e.name,label:C.mk[e.name],checked:p.find((s=>s===e.id)),onChange:s=>N(s.target.checked,e.id)})},e.id):(0,b.jsx)(b.Fragment,{})))]}),i.modules.find((e=>"departments"===e.module.submodule))&&(0,b.jsxs)("div",{className:"col",children:[(0,b.jsx)("h5",{children:"Departamentos"}),y.map((e=>"departments"===e.module.submodule?(0,b.jsx)("div",{children:(0,b.jsx)(r.EC,{id:e.name,label:C.mk[e.name],checked:p.find((s=>s===e.id)),onChange:s=>N(s.target.checked,e.id)})},e.id):(0,b.jsx)(b.Fragment,{})))]}),i.modules.find((e=>"users"===e.module.submodule))&&(0,b.jsxs)("div",{className:"col",children:[(0,b.jsx)("h5",{children:"Usuarios"}),y.map((e=>"users"===e.module.submodule?(0,b.jsx)("div",{children:(0,b.jsx)(r.EC,{id:e.name,label:C.mk[e.name],checked:p.find((s=>s===e.id)),onChange:s=>N(s.target.checked,e.id)})},e.id):(0,b.jsx)(b.Fragment,{})))]})]})})})})]}),(0,b.jsxs)(r.Ym,{children:[(0,b.jsx)(r.u5,{color:"secondary",onClick:a,children:"Cerrar"}),(0,b.jsx)(r.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{e.preventDefault(),v(((e,s)=>async a=>{try{const t=await c.Z.post("".concat(m.Z.instance.baseURL,"/api/assign/permission"),e,{headers:{...m.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:d.AX,payload:t.data.data}),s(t.data)}catch(t){a({type:d.zA,payload:{msg:t.response.statusText,status:t.response.status}}),s({success:!1,message:t.message})}})({user_id:h,permissions:p},(e=>{e.success?v((0,j.f)((0,o.Kv)({msg:e.message,type:"success"}))):v((0,j.f)((0,o.Kv)({msg:e.message,type:"error"})))}))),a()},children:"Guardar"})]})]})},k=e=>{let{data:s}=e;const[a,n]=(0,t.useState)(!1),[u,x]=(0,t.useState)(!1),[g,v]=(0,t.useState)(!1),[k,S]=(0,t.useState)(null),w=(0,l.I0)(),L=(0,C.Tg)("users","delete"),A=(0,C.Tg)("users","edit"),Z=(0,C.Tg)("users","modules"),E=(0,C.Tg)("users","permissions"),U=e=>{p().fire({title:"\xbfEst\xe1 seguro?",text:"No podr\xe1s revertir esto.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Si, eliminar."}).then((s=>{s.isConfirmed&&w(((e,s)=>async a=>{try{const t=await c.Z.delete("".concat(m.Z.instance.baseURL,"/api/user/").concat(e),{headers:{...m.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});a({type:d.AZ,payload:e}),s(t.data)}catch(t){a({type:d.zA,payload:{msg:t.response.statusText,status:t.response.status}}),s({success:!1,message:t.message})}})(e,(e=>{e.success?(w((0,j.f)((0,o.Kv)({msg:"Usuario eliminado correctamente.",title:"Usuarios",type:"success"}))),p().fire({title:"Eliminado!",text:"El Usuario ha sido eliminado.",icon:"success"})):w((0,j.f)((0,o.Kv)({msg:"Ocurrio un error.",title:"Usuarios",type:"error"})))})))}))};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(r.Sx,{striped:!0,responsive:!0,children:[(0,b.jsx)(r.V,{children:(0,b.jsxs)(r.T6,{children:[(0,b.jsx)(r.is,{scope:"col",children:"#"}),(0,b.jsx)(r.is,{scope:"col",children:"Nombre"}),(0,b.jsx)(r.is,{scope:"col",children:"Correo electr\xf3nico"}),(0,b.jsx)(r.is,{scope:"col",children:"Departamento"}),(0,b.jsx)(r.is,{scope:"col",className:"text-center",children:"Opciones"})]})}),(0,b.jsx)(r.NR,{children:null===s||void 0===s?void 0:s.map((e=>{var s;return(0,b.jsxs)(r.T6,{children:[(0,b.jsx)(r.is,{scope:"row",children:e.id}),(0,b.jsx)(r.NN,{children:e.name}),(0,b.jsx)(r.NN,{children:e.email}),(0,b.jsx)(r.NN,{children:(null===e||void 0===e||null===(s=e.department)||void 0===s?void 0:s.name)||(0,b.jsx)("span",{className:"text-primary fw-bolder",children:"Sin departamento asignado"})}),(0,b.jsx)(r.NN,{className:"text-center overflow-visible",children:(0,b.jsxs)(r.w5,{variant:"dropdown",children:[(0,b.jsx)(r.SQ,{href:"#",color:"light",children:(0,b.jsx)(i.Z,{icon:h.t,title:"Opciones",size:"lg"})}),(0,b.jsxs)(r.$H,{className:"position-fixed",children:[Z&&(0,b.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{x(!u),S(e)},children:"Asignar modulos"}),E&&(0,b.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{v(!g),S(e)},children:"Permisos"}),A&&(0,b.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>{n(!a),S(e)},children:"Editar"}),L&&(0,b.jsx)(r.$f,{style:{cursor:"pointer"},onClick:()=>U(e.id),children:"Eliminar"})]})]})})]},e.id)}))})]}),a&&(0,b.jsx)(f,{visible:a,onClose:()=>n(!1),userData:k}),u&&(0,b.jsx)(y,{visible:u,onClose:()=>x(!1),userData:k}),g&&(0,b.jsx)(N,{visible:g,onClose:()=>v(!1),userData:k})]})},S=()=>{const[e,s]=(0,t.useState)(!1),a=(0,l.I0)(),[c,d]=(0,t.useState)("name"),[m,h]=(0,t.useState)(""),x=(0,l.v9)((e=>e.user.users.data)),[p,j]=(0,t.useState)(1),g=(0,l.v9)((e=>e.user.users.current_page)),v=(0,l.v9)((e=>e.user.users.last_page)),y=((0,l.v9)((e=>e.user.users.total)),(0,l.v9)((e=>e.user.loading)));return(0,t.useEffect)((()=>{a(u(p,c,m))}),[a,p]),(0,t.useEffect)((()=>{g&&j(g)}),[g]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(r.xH,{children:[(0,b.jsxs)(r.bn,{className:"d-flex justify-content-between align-items-center",children:[(0,b.jsx)("h4",{children:"Listado de usuarios"}),(0,b.jsx)("div",{className:"d-flex gap-2",children:(0,C.Tg)("users","create")&&(0,b.jsxs)(r.u5,{color:"primary",className:"text-light fw-semibold align-content-center d-flex",onClick:()=>s(!e),children:[(0,b.jsx)(i.Z,{icon:n.q,size:"xl",className:"me-1"}),"Nuevo"]})})]}),(0,b.jsxs)(r.sl,{children:[(0,b.jsxs)(r.lx,{children:[(0,b.jsx)(r.L8,{children:"Filtros de busqueda"}),(0,b.jsxs)("div",{className:"mb-3 d-flex",children:[(0,b.jsx)("div",{className:"flex-fill me-2",children:(0,b.jsx)(r.LX,{value:c,onChange:e=>d(e.target.value),"aria-label":"caseFilter",options:[{label:"Nombre",value:"name"}]})}),(0,b.jsx)("div",{className:"flex-fill me-2",children:(0,b.jsx)(r.jO,{value:m,onChange:e=>h(e.target.value),type:"text",placeholder:"Ingresar texto"})})]}),(0,b.jsx)(r.u5,{type:"button",className:"text-light fw-semibold",onClick:()=>a(u(p,c,m)),children:"Buscar"})]}),y?(0,b.jsx)("div",{className:"d-flex justify-content-center",children:(0,b.jsx)(r.LQ,{color:"primary",variant:"grow"})}):(0,b.jsx)(k,{data:x})]}),(0,b.jsx)(r.Bt,{children:(0,b.jsx)(o.bD,{currentPage:p,lastPage:v,setCurrentPage:j})})]}),(0,b.jsx)(f,{visible:e,onClose:()=>s(!1)})]})}},1404:(e,s,a)=>{a.d(s,{F:()=>t});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/>"]}}]);
//# sourceMappingURL=811.c5993725.chunk.js.map