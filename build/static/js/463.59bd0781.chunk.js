"use strict";(self.webpackChunkgasomax_client=self.webpackChunkgasomax_client||[]).push([[463],{8383:(e,a,s)=>{s.d(a,{BZ:()=>c,If:()=>i,Ps:()=>n,j4:()=>o,tt:()=>d});var t=s(5294),r=s(591),l=s(6647);const n=(e,a,s)=>async n=>{try{const c=await t.Z.get("".concat(l.Z.instance.baseURL,"/api/department?").concat(a,"=").concat(s,"&page=").concat(e),{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.hf,payload:c.data})}catch(c){n({type:r.fm,payload:{msg:c.response.statusText,status:c.response.status}})}},c=(e,a)=>async s=>{try{const n=await t.Z.post("".concat(l.Z.instance.baseURL,"/api/department"),e,{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.Wo,payload:n.data.data}),a(n.data)}catch(n){s({type:r.fm,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},o=(e,a,s)=>async n=>{try{const c=await t.Z.put("".concat(l.Z.instance.baseURL,"/api/department/").concat(a),e,{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.aZ,payload:c.data.data}),s(c.data)}catch(c){n({type:r.fm,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}},i=(e,a)=>async s=>{try{const n=await t.Z.delete("".concat(l.Z.instance.baseURL,"/api/department/").concat(e),{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.k_,payload:e}),a(n.data)}catch(n){s({type:r.fm,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},d=()=>async e=>{try{const a=await t.Z.get("".concat(l.Z.instance.baseURL,"/api/select/department"),{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:r.qN,payload:a.data})}catch(a){e({type:r.fm,payload:{msg:a.response.statusText,status:a.response.status}})}}},640:(e,a,s)=>{s.d(a,{Nq:()=>o,Rf:()=>n,X9:()=>m,cn:()=>c,h8:()=>i,zx:()=>d});var t=s(5294),r=s(591),l=s(6647);const n=(e,a,s)=>async n=>{try{const c=await t.Z.get("".concat(l.Z.instance.baseURL,"/api/user?").concat(a,"=").concat(s,"&page=").concat(e),{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.fo,payload:c.data})}catch(c){n({type:r.zA,payload:{msg:c.response.statusText,status:c.response.status}})}},c=(e,a)=>async s=>{try{const n=await t.Z.post("".concat(l.Z.instance.baseURL,"/api/user"),e,{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.jN,payload:n.data.data}),a(n.data)}catch(n){s({type:r.zA,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},o=(e,a,s)=>async n=>{try{const c=await t.Z.put("".concat(l.Z.instance.baseURL,"/api/user/").concat(a),e,{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});n({type:r.AX,payload:c.data.data}),s(c.data)}catch(c){n({type:r.zA,payload:{msg:c.response.statusText,status:c.response.status}}),s({success:!1,message:c.message})}},i=(e,a)=>async s=>{try{const n=await t.Z.delete("".concat(l.Z.instance.baseURL,"/api/user/").concat(e),{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.AZ,payload:e}),a(n.data)}catch(n){s({type:r.zA,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},d=(e,a)=>async s=>{try{const n=await t.Z.post("".concat(l.Z.instance.baseURL,"/api/assign/module"),e,{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.AX,payload:n.data.data}),a(n.data)}catch(n){s({type:r.zA,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}},m=(e,a)=>async s=>{try{const n=await t.Z.post("".concat(l.Z.instance.baseURL,"/api/assign/permission"),e,{headers:{...l.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});s({type:r.AX,payload:n.data.data}),a(n.data)}catch(n){s({type:r.zA,payload:{msg:n.response.statusText,status:n.response.status}}),a({success:!1,message:n.message})}}},222:(e,a,s)=>{s.d(a,{Z:()=>y});var t=s(2791),r=s(2937),l=s(9101),n=s(4166),c=s(7941),o=s(640),i=s(4846),d=s(1404),m=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313' class='ci-primary'/>"],u=s(8383),h=s(591),p=s(5294),x=s(6647);var g=s(7689),j=s(184);const y=e=>{let{visible:a,onClose:s,userData:y,visibleChangePassword:v,fromProfile:b}=e;const[f,N]=(0,t.useState)(v?2:1),[Z,C]=(0,t.useState)(),[w,L]=(0,t.useState)(""),[S,A]=(0,t.useState)(""),[k,U]=(0,t.useState)(""),[z,I]=(0,t.useState)(""),[R,T]=(0,t.useState)(""),[F,B]=(0,t.useState)(""),[D,P]=(0,t.useState)(""),[E,O]=(0,t.useState)(""),[q,_]=(0,t.useState)({numCharacters:!1,uppercaseLetter:!1,lowercaseLetter:!1,number:!1,symbol:!1}),K=(0,l.I0)(),X=(0,l.v9)((e=>e.role.roles)),H=(0,l.v9)((e=>e.department.departments)),Q=(0,g.s0)();(0,t.useEffect)((()=>{K((0,u.tt)()),K((async e=>{try{const a=await p.Z.get("".concat(x.Z.instance.baseURL,"/api/select/role"),{headers:{...x.Z.instance.headers,Authorization:"Bearer "+localStorage.getItem("token")}});e({type:h.gJ,payload:a.data})}catch(a){e({type:h.lZ,payload:{msg:a.response.statusText,status:a.response.status}})}}))}),[K]);const G=(0,t.useCallback)((()=>{L(""),A(""),T(""),B(""),I(""),P(""),O(""),U(""),C(""),N(1)}),[]);return(0,t.useEffect)((()=>{y&&(C(y.id),L(y.name),A(y.email),I(y.role_id),U(y.department_id),O(y.payrollNumber),P(y.nss))}),[y]),(0,t.useEffect)((()=>{if(!R)return void _({numCharacters:!1,uppercaseLetter:!1,lowercaseLetter:!1,number:!1,symbol:!1});const e={numCharacters:R.length>8,lowercaseLetter:!!/[a-z]/.test(R),uppercaseLetter:!!/[A-Z]/.test(R),number:!!/\d/.test(R),symbol:!!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(R)};_(e)}),[R]),(0,j.jsxs)(r.Tk,{visible:a,onClose:s,"aria-labelledby":"LiveDemoExampleLabel",children:[(0,j.jsx)(r.p0,{onClose:s,children:(0,j.jsx)(r.fl,{id:"LiveDemoExampleLabel",children:y?"Editar ".concat(y.name):"Agregar nuevo"})}),(0,j.jsxs)(r.sD,{children:[(0,j.jsxs)(r.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:[!v&&(0,j.jsx)(r.U6,{role:"presentation",children:(0,j.jsx)(r.AQ,{active:1===f,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===f,onClick:()=>N(1),children:"Datos"})}),(v||!y)&&(0,j.jsx)(r.U6,{role:"presentation",children:(0,j.jsx)(r.AQ,{active:2===f,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":2===f,onClick:()=>N(2),children:"Contrase\xf1a"})})]}),(0,j.jsxs)(r.gr,{children:[(0,j.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===f,children:(0,j.jsxs)(r.lx,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"name",children:"Nombre completo"}),(0,j.jsx)(r.jO,{type:"text",id:"name",placeholder:"Nombre",onChange:e=>L(e.target.value),value:w})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"email",children:"Correo electr\xf3nico"}),(0,j.jsx)(r.jO,{type:"text",id:"email",placeholder:"Correo electr\xf3nico",onChange:e=>A(e.target.value),value:S})]}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.L8,{htmlFor:"nss",children:"N\xfamero de seguro social (NSS)"}),(0,j.jsx)(r.jO,{type:"text",id:"nss",placeholder:"NSS",onChange:e=>P(e.target.value),value:D})]}),(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.L8,{htmlFor:"payrollNumber",children:"N\xfamero de n\xf3mina"}),(0,j.jsx)(r.jO,{type:"text",id:"payrollNumber",placeholder:"No. N\xf3mina",onChange:e=>O(e.target.value),value:E})]})]}),(0,j.jsxs)("div",{className:"mb-3 d-flex",children:[(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.L8,{children:"Departamento"}),(0,j.jsxs)(r.LX,{"aria-label":"charge",onChange:e=>U(e.target.value),value:k,children:[(0,j.jsx)("option",{value:"",children:"Seleccione..."}),null===H||void 0===H?void 0:H.data.map((e=>(0,j.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,j.jsxs)("div",{className:"flex-fill me-2",children:[(0,j.jsx)(r.L8,{children:"Rol"}),(0,j.jsxs)(r.LX,{"aria-label":"role",onChange:e=>I(e.target.value),value:z,children:[(0,j.jsx)("option",{value:"",children:"Seleccione..."}),null===X||void 0===X?void 0:X.data.map((e=>(0,j.jsx)("option",{value:e.id,children:e.name},e.id)))]})]})]})]})}),(0,j.jsx)(r.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:2===f,children:(0,j.jsxs)(r.lx,{className:"mt-3",children:[(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"name",children:"Contrase\xf1a"}),(0,j.jsx)(r.jO,{type:"password",id:"password",placeholder:"Contrase\xf1a",onChange:e=>T(e.target.value),value:R})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)(r.L8,{htmlFor:"confirmPassword",children:"Confirmar contrase\xf1a"}),(0,j.jsx)(r.jO,{type:"password",id:"confirmPassword",placeholder:"Confirmar contrase\xf1a",onChange:e=>B(e.target.value),value:F}),F&&R!==F&&(0,j.jsx)("p",{className:"text-danger",children:"*La contrase\xf1a no coincide"})]}),(0,j.jsxs)("div",{className:"mb-3",children:[(0,j.jsx)("h6",{className:"fw-bolder",children:"La contrase\xf1a debe contener: "}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.numCharacters?(0,j.jsx)(i.Z,{icon:d.F,className:"text-success"}):(0,j.jsx)(i.Z,{icon:m,className:"text-danger"}),"8 o mas digitos"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.uppercaseLetter?(0,j.jsx)(i.Z,{icon:d.F,className:"text-success"}):(0,j.jsx)(i.Z,{icon:m,className:"text-danger"}),"Una letra mayuscula"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.lowercaseLetter?(0,j.jsx)(i.Z,{icon:d.F,className:"text-success"}):(0,j.jsx)(i.Z,{icon:m,className:"text-danger"}),"Una letra minuscula"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.number?(0,j.jsx)(i.Z,{icon:d.F,className:"text-success"}):(0,j.jsx)(i.Z,{icon:m,className:"text-danger"}),"Un numero"]}),(0,j.jsxs)("div",{className:"d-flex align-items-center",children:[q.symbol?(0,j.jsx)(i.Z,{icon:d.F,className:"text-success"}):(0,j.jsx)(i.Z,{icon:m,className:"text-danger"}),"Un simbolo"]})]})]})})]})]}),(0,j.jsxs)(r.Ym,{children:[(0,j.jsx)(r.u5,{color:"secondary",onClick:s,children:"Cerrar"}),(0,j.jsx)(r.u5,{color:"primary",className:"text-light fw-semibold",onClick:e=>{if(e.preventDefault(),!w)return void alert("Ingrese un nombre");if(!S)return void alert("Ingrese un correo electr\xf3nico");if(v||!y){if(Object.values(q).every((e=>!e)))return void alert("Verifique las pol\xedticas de contrase\xf1a segura");if(!F)return void alert("Confirme la contrase\xf1a")}let a={name:w,email:S,nss:D,role_id:z,department_id:k,payrollNumber:E},t={password:R},r=v?t:a;K(y?(0,o.Nq)(r,Z,(e=>{e.success?(K((0,n.f)((0,c.Kv)({msg:"Usuario actualizado correctamente.",title:"Usuarios",type:"success"}))),v&&b&&Q("/login")):K((0,n.f)((0,c.Kv)({msg:"Ha ocurrido un error.",title:"Usuarios",type:"error"}))),G(),s()})):(0,o.cn)({...a,...t},(e=>{e.success?K((0,n.f)((0,c.Kv)({msg:"Usuario agregado correctamente.",title:"Usuarios",type:"success"}))):K((0,n.f)((0,c.Kv)({msg:"Ha ocurrido un error.",title:"Usuarios",type:"error"}))),G(),s()})))},children:"Guardar"})]})]})}},1732:(e,a,s)=>{s.d(a,{K:()=>t});const t={provider:"provider",purchaseRequest:"purchaseRequest",quote:"quote",user:"user"}},8463:(e,a,s)=>{s.r(a),s.d(a,{default:()=>p});var t=s(2937),r=s(2791),l=s(9101),n=s(7462),c=s(9463),o=s(1732),i=s(374),d=s(184);const m=e=>{let{visible:a,onClose:s,userData:m}=e;const[u,h]=(0,r.useState)(1),[p,x]=(0,r.useState)(),[g,j]=(0,r.useState)(null),y=(0,l.v9)((e=>e.file.progress)),v=(0,l.I0)();(0,r.useEffect)((()=>{m&&x(m.id)}),[m]);return(0,r.useEffect)((()=>{100===y&&setTimeout((()=>{s()}),3e3)}),[y,s]),(0,d.jsxs)(t.Tk,{visible:a,onClose:s,"aria-labelledby":"uploadPhoto",alignment:"center",children:[(0,d.jsx)(t.p0,{onClose:s,children:(0,d.jsx)(t.fl,{id:"uploadPhoto",children:m?"Editar ".concat(m.name):"Agregar nuevo"})}),(0,d.jsxs)(t.sD,{children:[g&&!(null!==g&&void 0!==g&&g.id)&&(0,d.jsxs)(t.yI,{value:y,className:"mb-2",children:[y,"%"]}),(0,d.jsx)(t.n2,{variant:"tabs",role:"tablist",className:"mt-1",children:(0,d.jsx)(t.U6,{role:"presentation",children:(0,d.jsx)(t.AQ,{active:1===u,component:"button",role:"tab","aria-controls":"data-tab-pane","aria-selected":1===u,onClick:()=>h(1),children:"Foto"})})}),(0,d.jsx)(t.gr,{children:(0,d.jsx)(t.IA,{role:"tabpanel","aria-labelledby":"data-tab-pane",visible:1===u,children:(0,d.jsx)(t.lx,{className:"mt-3",children:(0,d.jsxs)("div",{className:"mb-3",children:[(0,d.jsx)(t.L8,{htmlFor:"name",children:"Sube una foto o imagen de perfil"}),(0,d.jsx)(t.jO,{type:"file",id:"photo",onChange:e=>j({file:e.target.files[0],tag:n.O.img,fileName:e.target.files[0].name}),accept:"image/*"})]})})})})]}),(0,d.jsxs)(t.Ym,{children:[(0,d.jsx)(t.u5,{color:"secondary",onClick:s,children:"Cerrar"}),(0,d.jsx)(t.u5,{color:"primary",className:"text-light fw-semibold",onClick:()=>{try{v((0,c.cT)(g.file,g.tag,null,p,o.K.user,(()=>{v((0,i.PR)())})))}catch(e){console.log(e)}},children:"Guardar"})]})]})};var u=s(222);const h=s(2276),p=()=>{const e=(0,l.v9)((e=>e.auth.user)).data.user,[a,s]=(0,r.useState)(!1),[n,c]=(0,r.useState)(!1);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"d-flex",children:[(0,d.jsx)(t.xH,{className:"flex-fill mx-3",children:(0,d.jsxs)(t.sl,{className:"d-flex flex-column align-items-center",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(t.DW,{rounded:!0,src:h,width:200,height:200,className:"mt-4"}),(0,d.jsx)("p",{className:"text-primary text-center text-decoration-underline",onClick:()=>c(!n),children:"Cambiar imagen"})]}),(0,d.jsx)(t.tj,{className:"text-primary fs-3 mt-3",children:e.name}),(0,d.jsx)("hr",{className:"text-secondary w-25"}),(0,d.jsxs)("div",{className:"d-flex mt-2",children:[(0,d.jsxs)("div",{className:"mx-1",children:[(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-end lh-sm fw-semibold text-muted",children:"Nombre:"})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-end lh-sm fw-semibold text-muted",children:"Correo electr\xf3nico:"})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-end lh-sm fw-semibold text-muted",children:"Departamento:"})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-end lh-sm fw-semibold text-muted",children:"Puesto:"})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-end lh-sm fw-semibold text-muted",children:"No. Nomina:"})})]}),(0,d.jsxs)("div",{className:"mx-1",children:[(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-start lh-sm fw-bold",children:e.name})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-start lh-sm fw-bold",children:e.email})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-start lh-sm fw-bold",children:e.department.name})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-start lh-sm fw-bold",children:e.role.name})}),(0,d.jsx)("div",{children:(0,d.jsx)("p",{className:"text-start lh-sm fw-bold",children:e.payrollNumber})})]})]})]})}),(0,d.jsx)("div",{className:"w-25",children:(0,d.jsx)(t.xH,{children:(0,d.jsx)(t.sl,{children:(0,d.jsx)(t.u5,{className:"w-100 p-3 text-white fw-normal",style:{backgroundColor:"#21274E"},onClick:()=>s(!a),children:"Cambiar contrase\xf1a"})})})})]}),a&&(0,d.jsx)(u.Z,{visible:a,onClose:()=>{s(!1)},userData:e,visibleChangePassword:!0,fromProfile:!0}),(0,d.jsx)(m,{visible:n,onClose:()=>{c(!1)},userData:e})]})}},1404:(e,a,s)=>{s.d(a,{F:()=>t});var t=["512 512","<polygon fill='var(--ci-primary-color, currentColor)' points='200.359 382.269 61.057 251.673 82.943 228.327 199.641 337.731 428.686 108.687 451.314 131.313 200.359 382.269' class='ci-primary'/>"]}}]);
//# sourceMappingURL=463.59bd0781.chunk.js.map