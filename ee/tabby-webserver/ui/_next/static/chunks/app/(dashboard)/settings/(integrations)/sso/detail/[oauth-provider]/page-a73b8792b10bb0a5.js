(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4159],{38790:function(e,r,t){Promise.resolve().then(t.bind(t,274))},10221:function(e,r,t){"use strict";t.d(r,{D:function(){return a}});var n=t(36164),s=t(57288);function a(e){let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,s.cn)("text-xl font-semibold",r),...t})}},7846:function(e,r,t){"use strict";t.d(r,{ZP:function(){return F}});var n=t(36164),s=t(3546),a=t(11978),l=t(84381),i=t(94909),o=t(5493),c=t(2578),d=t(40055),u=t(23782),f=t(43240),m=t(18500),x=t(11634),p=t(57288),h=t(73460),j=t(31458),v=t(98150),N=t(81565),g=t(82394),b=t(5266),y=t(80363),C=t(48537),w=t(94770),_=t(3518),I=t(10221);let k=(0,f.BX)("\n  mutation updateOauthCredential($input: UpdateOAuthCredentialInput!) {\n    updateOauthCredential(input: $input)\n  }\n"),O=(0,f.BX)("\n  mutation deleteOauthCredential($provider: OAuthProvider!) {\n    deleteOauthCredential(provider: $provider)\n  }\n"),R=(0,f.BX)("\n  query OAuthCallbackUrl($provider: OAuthProvider!) {\n    oauthCallbackUrl(provider: $provider)\n  }\n"),z=u.Ry({clientId:u.Z_(),clientSecret:u.Z_().optional(),provider:u.jb(m.O4)});function F(e){let{className:r,isNew:t,provider:u,defaultValues:f,onSuccess:F,...A}=e,D=(0,a.useRouter)(),G=(0,d.m8)(),S=s.useMemo(()=>({...f||{},provider:u}),[]),[P,T]=s.useState(!1),[$,V]=s.useState(!1),q=(0,o.cI)({resolver:(0,l.F)(z),defaultValues:S}),E=q.watch("provider"),U=!(0,i.Z)(q.formState.dirtyFields),{isSubmitting:M}=q.formState,Z=()=>{D.replace("/settings/sso")},L=(0,x.Db)(k,{onCompleted(e){(null==e?void 0:e.updateOauthCredential)&&(null==F||F(q.getValues()))},form:q}),X=(0,x.Db)(O),W=async e=>{if(t){let r=await G.query(_.oauthCredential,{provider:e.provider}).then(e=>{var r;return!!(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.oauthCredential)});if(r){q.setError("provider",{message:"Provider already exists. Please choose another one"});return}}L({input:e})},[{data:B}]=(0,d.aM)({query:R,variables:{provider:E}}),J=s.useMemo(()=>t?"e.g. e363c08d7e9ca4e66e723a53f38a21f6a54c1b83":Array(36).fill("*").join(""),[t]);return(0,n.jsx)(v.l0,{...q,children:(0,n.jsxs)("div",{className:(0,p.cn)("grid gap-2",r),...A,children:[(0,n.jsxs)("form",{className:"grid gap-4",onSubmit:q.handleSubmit(W),children:[(0,n.jsx)(I.D,{children:"Basic information"}),(0,n.jsx)(v.Wi,{control:q.control,name:"provider",render:e=>{let{field:{onChange:r,...s}}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{children:"Provider"}),(0,n.jsx)(v.NI,{children:(0,n.jsxs)(y.E,{className:"flex gap-8",orientation:"horizontal",onValueChange:r,...s,children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(y.m,{value:m.O4.Github,id:"r_github",disabled:!t}),(0,n.jsxs)(b._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_github",children:[(0,n.jsx)(N.IconGitHub,{className:"h-5 w-5"}),"GitHub"]})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(y.m,{value:m.O4.Google,id:"r_google",disabled:!t}),(0,n.jsxs)(b._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_google",children:[(0,n.jsx)(N.IconGoogle,{className:"h-5 w-5"}),"Google"]})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(y.m,{value:m.O4.Gitlab,id:"r_gitlab",disabled:!t}),(0,n.jsxs)(b._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_gitlab",children:[(0,n.jsx)(N.IconGitLab,{className:"h-5 w-5"}),"GitLab"]})]})]})}),(0,n.jsx)(v.zG,{})]})}}),B&&(0,n.jsx)(v.xJ,{className:"mt-4",children:(0,n.jsxs)("div",{className:"flex flex-col gap-2 rounded-lg border px-3 py-2",children:[(0,n.jsx)("div",{className:"text-sm text-muted-foreground",children:"Create your OAuth2 application with the following information"}),(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)("div",{className:"text-sm font-medium",children:"Authorization callback URL"}),(0,n.jsxs)("span",{className:"flex items-center text-sm",children:[B.oauthCallbackUrl,(0,n.jsx)(C.q,{type:"button",value:B.oauthCallbackUrl})]})]})]})}),(0,n.jsxs)("div",{className:"mt-4",children:[(0,n.jsx)(I.D,{children:"OAuth provider information"}),(0,n.jsx)(v.pf,{children:"The information is provided by your identity provider."})]}),(0,n.jsx)(v.Wi,{control:q.control,name:"clientId",render:e=>{let{field:r}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:!0,children:"Client ID"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(g.I,{placeholder:"e.g. ae1542c44b154c10c859",autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",...r})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsx)(v.Wi,{control:q.control,name:"clientSecret",render:e=>{let{field:r}=e;return(0,n.jsxs)(v.xJ,{children:[(0,n.jsx)(v.lX,{required:t,children:"Client Secret"}),(0,n.jsx)(v.NI,{children:(0,n.jsx)(g.I,{className:(0,p.cn)({"placeholder:translate-y-[10%] !placeholder-foreground":!t}),placeholder:J,autoCapitalize:"none",autoComplete:"off",autoCorrect:"off",type:"password",...r})}),(0,n.jsx)(v.zG,{})]})}}),(0,n.jsxs)("div",{className:"flex justify-end gap-4",children:[(0,n.jsx)(j.z,{type:"button",variant:"ghost",onClick:Z,children:"Back"}),!t&&(0,n.jsxs)(h.aR,{open:P,onOpenChange:T,children:[(0,n.jsx)(h.vW,{asChild:!0,children:(0,n.jsx)(j.z,{variant:"hover-destructive",children:"Delete"})}),(0,n.jsxs)(h._T,{children:[(0,n.jsxs)(h.fY,{children:[(0,n.jsx)(h.f$,{children:"Are you absolutely sure?"}),(0,n.jsx)(h.yT,{children:"This action cannot be undone. It will permanently delete the current credential."})]}),(0,n.jsxs)(h.xo,{children:[(0,n.jsx)(h.le,{children:"Cancel"}),(0,n.jsxs)(h.OL,{className:(0,j.d)({variant:"destructive"}),onClick:e=>{e.preventDefault(),V(!0),X({provider:E}).then(e=>{var r,t;(null==e?void 0:null===(r=e.data)||void 0===r?void 0:r.deleteOauthCredential)?Z():(V(!1),(null==e?void 0:e.error)&&c.A.error(null==e?void 0:null===(t=e.error)||void 0===t?void 0:t.message))})},children:[$&&(0,n.jsx)(N.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),"Yes, delete it"]})]})]})]}),(0,n.jsx)(w.M,{licenses:[m.oj.Enterprise],children:e=>{let{hasValidLicense:r}=e;return(0,n.jsxs)(j.z,{type:"submit",disabled:!r||M||!t&&!U,children:[M&&(0,n.jsx)(N.IconSpinner,{className:"mr-2 h-4 w-4 animate-spin"}),t?"Create":"Update"]})}})]})]}),(0,n.jsx)(v.zG,{className:"text-center"})]})})}},31988:function(e,r,t){"use strict";t.d(r,{w:function(){return i}});var n=t(36164),s=t(57288),a=t(5266),l=t(80363);function i(e){let{value:r,onChange:t,className:i,readonly:o}=e;return(0,n.jsxs)("div",{className:(0,s.cn)("mb-6 space-y-2",i),children:[(0,n.jsx)(a._,{children:"Type"}),(0,n.jsxs)(l.E,{value:r,onValueChange:e=>null==t?void 0:t(e),className:"flex gap-8",orientation:"horizontal",disabled:o,children:[(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(l.m,{value:"oauth",id:"r_oauth"}),(0,n.jsx)(a._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_oauth",children:"OAuth 2.0"})]}),(0,n.jsxs)("div",{className:"flex items-center",children:[(0,n.jsx)(l.m,{value:"ldap",id:"r_ldap"}),(0,n.jsx)(a._,{className:"flex cursor-pointer items-center gap-2 pl-2",htmlFor:"r_ldap",children:"LDAP"})]})]})]})}},274:function(e,r,t){"use strict";t.r(r),t.d(r,{OAuthCredentialDetail:function(){return x}});var n=t(36164),s=t(3546),a=t(11978),l=t(74630),i=t(25937),o=t(40055),c=t(6230),d=t(90379),u=t(3518),f=t(7846),m=t(31988);let x=e=>{let{provider:r}=e,t=(0,a.useRouter)(),[{data:x,fetching:p}]=(0,o.aM)({query:u.oauthCredential,variables:{provider:r}}),h=null==x?void 0:x.oauthCredential,j=s.useMemo(()=>{if(h)return(0,i.Z)(h,e=>!(0,l.Z)(e))},[h]);return(0,n.jsx)("div",{children:(0,n.jsxs)(c.Z,{loading:p,fallback:(0,n.jsx)(d.cg,{className:"mt-2"}),children:[(0,n.jsx)(m.w,{value:"oauth",readonly:!0}),(0,n.jsx)(f.ZP,{provider:r,defaultValues:j,onSuccess:()=>{t.push("/settings/sso")}})]})})}},48537:function(e,r,t){"use strict";t.d(r,{q:function(){return i}});var n=t(36164);t(3546);var s=t(28312),a=t(31458),l=t(81565);function i(e){let{className:r,value:t,onCopyContent:i,text:o,...c}=e,{isCopied:d,copyToClipboard:u}=(0,s.m)({timeout:2e3,onCopyContent:i});return t?(0,n.jsxs)(a.z,{variant:"ghost",size:o?"default":"icon",className:r,onClick:()=>{d||u(t)},...c,children:[d?(0,n.jsx)(l.IconCheck,{className:"text-green-600"}):(0,n.jsx)(l.IconCopy,{}),o&&(0,n.jsx)("span",{children:o}),!o&&(0,n.jsx)("span",{className:"sr-only",children:"Copy"})]}):null}},73460:function(e,r,t){"use strict";t.d(r,{OL:function(){return j},_T:function(){return f},aR:function(){return o},f$:function(){return p},fY:function(){return m},le:function(){return v},vW:function(){return c},xo:function(){return x},yT:function(){return h}});var n=t(36164),s=t(3546),a=t(28961),l=t(57288),i=t(31458);let o=a.fC,c=a.xz,d=e=>{let{className:r,children:t,...s}=e;return(0,n.jsx)(a.h_,{className:(0,l.cn)(r),...s,children:(0,n.jsx)("div",{className:"fixed inset-0 z-50 flex items-end justify-center sm:items-center",children:t})})};d.displayName=a.h_.displayName;let u=s.forwardRef((e,r)=>{let{className:t,children:s,...i}=e;return(0,n.jsx)(a.aV,{className:(0,l.cn)("fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity animate-in fade-in",t),...i,ref:r})});u.displayName=a.aV.displayName;let f=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsxs)(d,{children:[(0,n.jsx)(u,{}),(0,n.jsx)(a.VY,{ref:r,className:(0,l.cn)("fixed z-50 grid w-full max-w-lg scale-100 gap-4 border bg-background p-6 opacity-100 shadow-lg animate-in fade-in-90 slide-in-from-bottom-10 sm:rounded-lg sm:zoom-in-90 sm:slide-in-from-bottom-0 md:w-full",t),...s})]})});f.displayName=a.VY.displayName;let m=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col space-y-2 text-center sm:text-left",r),...t})};m.displayName="AlertDialogHeader";let x=e=>{let{className:r,...t}=e;return(0,n.jsx)("div",{className:(0,l.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",r),...t})};x.displayName="AlertDialogFooter";let p=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.Dx,{ref:r,className:(0,l.cn)("text-lg font-semibold",t),...s})});p.displayName=a.Dx.displayName;let h=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.dk,{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})});h.displayName=a.dk.displayName;let j=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.aU,{ref:r,className:(0,l.cn)((0,i.d)(),t),...s})});j.displayName=a.aU.displayName;let v=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.$j,{ref:r,className:(0,l.cn)((0,i.d)({variant:"outline"}),"mt-2 sm:mt-0",t),...s})});v.displayName=a.$j.displayName},98150:function(e,r,t){"use strict";t.d(r,{NI:function(){return h},Wi:function(){return u},l0:function(){return c},lX:function(){return p},pf:function(){return j},xJ:function(){return x},zG:function(){return v}});var n=t(36164),s=t(3546),a=t(74047),l=t(5493),i=t(57288),o=t(5266);let c=l.RV,d=s.createContext({}),u=e=>{let{...r}=e;return(0,n.jsx)(d.Provider,{value:{name:r.name},children:(0,n.jsx)(l.Qr,{...r})})},f=()=>{let e=s.useContext(d),r=s.useContext(m),{getFieldState:t,formState:n}=(0,l.Gc)(),a=e.name||"root",i=t(a,n);if(!n)throw Error("useFormField should be used within <Form>");let{id:o}=r;return{id:o,name:a,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...i}},m=s.createContext({}),x=s.forwardRef((e,r)=>{let{className:t,...a}=e,l=s.useId();return(0,n.jsx)(m.Provider,{value:{id:l},children:(0,n.jsx)("div",{ref:r,className:(0,i.cn)("space-y-2",t),...a})})});x.displayName="FormItem";let p=s.forwardRef((e,r)=>{let{className:t,required:s,...a}=e,{error:l,formItemId:c}=f();return(0,n.jsx)(o._,{ref:r,className:(0,i.cn)(l&&"text-destructive",s&&'after:ml-0.5 after:text-destructive after:content-["*"]',t),htmlFor:c,...a})});p.displayName="FormLabel";let h=s.forwardRef((e,r)=>{let{...t}=e,{error:s,formItemId:l,formDescriptionId:i,formMessageId:o}=f();return(0,n.jsx)(a.g7,{ref:r,id:l,"aria-describedby":s?"".concat(i," ").concat(o):"".concat(i),"aria-invalid":!!s,...t})});h.displayName="FormControl";let j=s.forwardRef((e,r)=>{let{className:t,...s}=e,{formDescriptionId:a}=f();return(0,n.jsx)("div",{ref:r,id:a,className:(0,i.cn)("text-sm text-muted-foreground",t),...s})});j.displayName="FormDescription";let v=s.forwardRef((e,r)=>{let{className:t,children:s,...a}=e,{error:l,formMessageId:o}=f(),c=l?String(null==l?void 0:l.message):s;return c?(0,n.jsx)("p",{ref:r,id:o,className:(0,i.cn)("text-sm font-medium text-destructive",t),...a,children:c}):null});v.displayName="FormMessage"},82394:function(e,r,t){"use strict";t.d(r,{I:function(){return l}});var n=t(36164),s=t(3546),a=t(57288);let l=s.forwardRef((e,r)=>{let{className:t,type:s,...l}=e;return(0,n.jsx)("input",{type:s,className:(0,a.cn)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),ref:r,...l})});l.displayName="Input"},5266:function(e,r,t){"use strict";t.d(r,{_:function(){return c}});var n=t(36164),s=t(3546),a=t(90893),l=t(14375),i=t(57288);let o=(0,l.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.f,{ref:r,className:(0,i.cn)(o(),t),...s})});c.displayName=a.f.displayName},80363:function(e,r,t){"use strict";t.d(r,{E:function(){return o},m:function(){return c}});var n=t(36164),s=t(3546),a=t(70772),l=t(57288),i=t(81565);let o=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.fC,{className:(0,l.cn)("grid gap-2",t),...s,ref:r})});o.displayName=a.fC.displayName;let c=s.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,n.jsx)(a.ck,{ref:r,className:(0,l.cn)("aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",t),...s,children:(0,n.jsx)(a.z$,{className:"flex items-center justify-center",children:(0,n.jsx)(i.IconCircle,{className:"h-2.5 w-2.5 fill-current text-current"})})})});c.displayName=a.ck.displayName},28312:function(e,r,t){"use strict";t.d(r,{m:function(){return i}});var n=t(3546),s=t(61200),a=t.n(s),l=t(2578);function i(e){let{timeout:r=2e3,onError:t,onCopyContent:s}=e,[i,o]=n.useState(!1),c=()=>{o(!0),setTimeout(()=>{o(!1)},r)},d=e=>{if("function"==typeof t){null==t||t(e);return}l.A.error("Failed to copy.")};return{isCopied:i,copyToClipboard:e=>{var r;if(e){if(s){s(e),c();return}if(null===(r=navigator.clipboard)||void 0===r?void 0:r.writeText)navigator.clipboard.writeText(e).then(c).catch(d);else{let r=a()(e);r?c():d()}}}}}}},function(e){e.O(0,[8415,7430,55,7812,4007,340,2546,1283,3449,2578,8511,240,2287,7070,8961,3707,7137,8087,7288,1565,3240,4656,3518,3375,5289,1744],function(){return e(e.s=38790)}),_N_E=e.O()}]);