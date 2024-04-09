(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[960],{1736:function(e,t,n){Promise.resolve().then(n.bind(n,66449))},66449:function(e,t,n){"use strict";n.r(t),n.d(t,{Report:function(){return F}});var s=n(57437),r=n(2265),a=n(61958),l=n(62067),i=n.n(l),o=n(55194),d=n.n(o),c=n(99109),u=n(70349),f=n(86110),m=n(69394),x=n(34334),h=n(89314),p=n(39311),g=n(93023),j=n(81291),b=n(17158),y=n(68183);function v(e){let{className:t,classNames:n,showOutsideDays:r=!0,...a}=e;return(0,s.jsx)(y._W,{showOutsideDays:r,className:(0,p.cn)("p-3",t),classNames:{months:"flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",month:"space-y-4",caption:"flex justify-center pt-1 relative items-center",caption_label:"text-sm font-medium",nav:"space-x-1 flex items-center",nav_button:(0,p.cn)((0,g.d)({variant:"outline"}),"h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100"),nav_button_previous:"absolute left-1",nav_button_next:"absolute right-1",table:"w-full border-collapse space-y-1",head_row:"flex",head_cell:"text-muted-foreground rounded-md w-9 font-normal text-[0.8rem]",row:"flex w-full mt-2",cell:"h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",day:(0,p.cn)((0,g.d)({variant:"ghost"}),"h-9 w-9 p-0 font-normal aria-selected:opacity-100"),day_range_end:"day-range-end",day_selected:"bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",day_today:"bg-accent text-accent-foreground",day_outside:"day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",day_disabled:"text-muted-foreground opacity-50",day_range_middle:"aria-selected:bg-accent aria-selected:text-accent-foreground",day_hidden:"invisible",...n},components:{IconLeft:e=>{let{...t}=e;return(0,s.jsx)(j.Z,{className:"h-4 w-4"})},IconRight:e=>{let{...t}=e;return(0,s.jsx)(b.Z,{className:"h-4 w-4"})}},...a})}v.displayName="Calendar";var N=n(25831);function w(e){let{dateRange:t,className:n,buttonClassName:a,contentAlign:l,onOpenChange:i}=e,[o,d]=r.useState({from:(null==t?void 0:t.from)||new Date(2022,0,20),to:(null==t?void 0:t.to)||(0,x.Z)(new Date(2022,0,20),20)});return(0,s.jsx)("div",{className:(0,p.cn)("grid gap-2",n),children:(0,s.jsxs)(N.J2,{onOpenChange:e=>{i&&i(e,o)},children:[(0,s.jsx)(N.xo,{asChild:!0,children:(0,s.jsxs)(g.z,{id:"date",variant:"outline",className:(0,p.cn)("w-[300px] justify-start text-left font-normal ",!o&&"text-muted-foreground",a),children:[(0,s.jsx)(m.Que,{className:"size-4 mr-2"}),(null==o?void 0:o.from)?o.to?(0,s.jsxs)(s.Fragment,{children:[(0,h.ZP)(o.from,"LLL dd, y")," -"," ",(0,h.ZP)(o.to,"LLL dd, y")]}):(0,h.ZP)(o.from,"LLL dd, y"):(0,s.jsx)("span",{children:"Pick a date"})]})}),(0,s.jsx)(N.yk,{className:"w-auto p-0",align:l,children:(0,s.jsx)(v,{initialFocus:!0,mode:"range",defaultMonth:null==o?void 0:o.from,selected:o,onSelect:d,numberOfMonths:2})})]})})}var $=n(84168),S=n(58094),k=n(25645),C=n(70825),I=n(60106);let O=(0,I.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n    }\n  }\n"),D=(0,I.BX)("\n  query DailyStats(\n    $start: DateTimeUtc!\n    $end: DateTimeUtc!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n    }\n  }\n");var _=n(61985),Y=n(57166),P=n(50439),R=n(6435),Z=n(76586);function M(e){let{data:t}=e,{theme:n}=(0,R.F)(),r=(0,P.iP)(),a=r.width||0;return(0,s.jsx)(Z.ZP,{data:t,colorScheme:"dark"===n?"dark":"light",theme:{light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["rgb(45, 51, 59)","#0e4429","#006d32","#26a641","#39d353"]},blockSize:a>=1300?13:a>=1e3?9:5,hideTotalCount:!0,showWeekdayLabels:!0})}function L(e){let{yearlyStats:t}=e,n=0,r=(null==t?void 0:t.reduce((e,t)=>{let s=i()(t.start).format("YYYY-MM-DD");return n+=t.completions,{...e,[s]:t.completions}},{}))||{},a=Array(365).fill("").map((e,t)=>{let n=i()().subtract(t,"days").format("YYYY-MM-DD"),s=r[n]||0;return{date:n,count:s,level:Math.min(4,Math.ceil(s/5))}}).reverse();return(0,s.jsxs)("div",{className:"flex h-full flex-col rounded-lg border bg-primary-foreground/30 px-6 py-4",children:[(0,s.jsxs)("h3",{className:"mb-5 text-sm font-medium tracking-tight",children:[(0,s.jsx)("b",{children:n})," activities in the last year"]}),(0,s.jsx)("div",{className:"flex flex-1 items-center justify-center",children:(0,s.jsx)(M,{data:a})})]})}var B=n(42232),A=n(45253),z=n(44876),q=n(11399),E=n(24235),V=n(50039),Q=n(86812);function T(e){let{active:t,payload:n,label:r}=e;if(t&&n&&n.length){let{completion:e,select:t}=n[0].payload;return e?(0,s.jsx)(f.Zb,{children:(0,s.jsxs)(f.aY,{className:"flex flex-col gap-y-0.5 px-4 py-2 text-sm",children:[(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Completion:"}),(0,s.jsx)("b",{children:e})]}),(0,s.jsxs)("p",{className:"flex items-center",children:[(0,s.jsx)("span",{className:"mr-3 inline-block w-20",children:"Acceptance:"}),(0,s.jsx)("b",{children:t})]}),(0,s.jsx)("p",{className:"text-muted-foreground",children:r})]})}):null}return null}function U(e){let{dailyStats:t,dateRange:n}=e,{theme:r}=(0,R.F)();(0,a.Z)(null==t?void 0:t.map(e=>e.completions));let l=n.from||new Date,o=n.to||l,d={},c={};null==t||t.forEach(e=>{let t=i()(e.start).format("YYYY-MM-DD");d[t]=e.completions,c[t]=e.selects},{});let u=(0,B.Z)({start:l,end:o}),f=u.map(e=>{let t=i()(e).format("YYYY-MM-DD"),n=d[t]||0,s=c[t]||0;return{name:i()(e).format("D MMM"),completion:n,select:s,pending:n-s}});return(0,s.jsxs)("div",{className:"rounded-lg border bg-primary-foreground/30 px-6 py-4",children:[(0,s.jsx)("h3",{className:"mb-5 text-sm font-medium tracking-tight",children:"Daily Statistics"}),(0,s.jsx)(A.h,{width:"100%",height:300,children:(0,s.jsxs)(z.v,{data:f,margin:{top:5,right:20,left:20,bottom:5},children:[(0,s.jsx)(q.$,{dataKey:"select",stackId:"stats",fill:"dark"===r?"#e8e1d3":"#54452c",radius:3}),(0,s.jsx)(q.$,{dataKey:"pending",stackId:"stats",fill:"dark"===r?"#423929":"#e8e1d3",radius:3}),(0,s.jsx)(E.K,{dataKey:"name",fontSize:12}),(0,s.jsx)(V.B,{fontSize:12,width:20,allowDecimals:!1}),(0,s.jsx)(Q.u,{cursor:{fill:"transparent"},content:(0,s.jsx)(T,{})})]})})]})}function X(e){let{dailyStats:t}=e,n=(0,a.Z)(null==t?void 0:t.map(e=>e.completions)),r=(0,a.Z)(null==t?void 0:t.map(e=>e.selects)),l=0===r?0:Math.round(r/n*100);return(0,s.jsxs)("div",{className:"flex w-full items-center justify-center space-x-6 xl:justify-start",children:[(0,s.jsxs)(f.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 md:block",children:[(0,s.jsxs)(f.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(f.ll,{className:"text-sm font-medium",children:"Accept Rate"}),(0,s.jsx)($.IconActivity,{className:"text-muted-foreground"})]}),(0,s.jsx)(f.aY,{children:(0,s.jsxs)("div",{className:"text-2xl font-bold",children:[l,"%"]})})]}),(0,s.jsxs)(f.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 md:block",children:[(0,s.jsxs)(f.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(f.ll,{className:"text-sm font-medium",children:"Total completions"}),(0,s.jsx)($.IconCode,{className:"text-muted-foreground"})]}),(0,s.jsx)(f.aY,{children:(0,s.jsx)("div",{className:"text-2xl font-bold",children:d()(n).format("0,0")})})]}),(0,s.jsxs)(f.Zb,{className:"flex flex-1 flex-col justify-between self-stretch bg-primary-foreground/30 md:block",children:[(0,s.jsxs)(f.Ol,{className:"flex flex-row items-center justify-between space-y-0 pb-2",children:[(0,s.jsx)(f.ll,{className:"text-sm font-medium",children:"Total acceptances"}),(0,s.jsx)($.IconCheck,{className:"h-4 w-4 text-muted-foreground"})]}),(0,s.jsx)(f.aY,{children:(0,s.jsx)("div",{className:"text-2xl font-bold",children:r})})]})]})}function F(){let[e]=function(){let[e,t]=(0,r.useState)({first:_.L}),[n,s]=(0,r.useState)([]),[a,l]=(0,r.useState)(!1),[{data:i,fetching:o}]=(0,c.aM)({query:Y.yw,variables:e});return(0,r.useEffect)(()=>{if(!a&&!o&&i){let e=null==i?void 0:i.users.edges.map(e=>({id:e.node.id,email:e.node.email})),r=(null==i?void 0:i.users.pageInfo.endCursor)||"",a=null==i?void 0:i.users.pageInfo.hasNextPage,o=[...n];s(o.concat(e)),a?t({first:_.L,after:r}):l(!0)}},[e,o]),[n]}(),[t,n]=(0,r.useState)({from:i()().subtract(14,"day").toDate(),to:i()().toDate()}),[a,l]=(0,r.useState)("all"),[o,d]=(0,r.useState)("all"),[{data:f,fetching:m}]=(0,c.aM)({query:D,variables:{start:i()(t.from).startOf("day").utc().format(),end:i()(t.to).endOf("day").utc().format(),users:"all"===a?void 0:[a],languages:"all"===o?void 0:[o]}}),x=null==f?void 0:f.dailyStats.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects})),[{data:h,fetching:p}]=(0,c.aM)({query:O,variables:{users:"all"===a?void 0:a}}),g=null==h?void 0:h.dailyStatsInPastYear.map(e=>({start:e.start,end:e.end,completions:e.completions,selects:e.selects}));return(0,s.jsxs)("div",{className:"mx-auto max-w-5xl",children:[(0,s.jsxs)("div",{className:"mb-3 flex flex-col items-center justify-between gap-y-2 md:flex-row md:items-end md:gap-y-0",children:[(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("h1",{className:"mb-1.5 scroll-m-20 text-center text-4xl font-extrabold tracking-tight md:text-left lg:text-5xl",children:"Reports"}),(0,s.jsx)("p",{className:"text-muted-foreground",children:"Statistics around Tabby IDE / Extensions"})]}),(0,s.jsx)(C.Z,{loading:m,fallback:(0,s.jsx)(k.O,{className:"h-8 w-32"}),children:(0,s.jsxs)(S.Ph,{defaultValue:"all",onValueChange:l,children:[(0,s.jsx)(S.i4,{className:"h-auto w-auto border-none py-0 shadow-none",children:(0,s.jsxs)("div",{className:"flex h-6 items-center",children:[(0,s.jsx)($.IconUsers,{className:"mr-1"}),(0,s.jsx)("p",{className:"mr-1.5",children:"Member:"}),(0,s.jsx)("div",{className:"w-[80px] overflow-hidden text-ellipsis text-left",children:(0,s.jsx)(S.ki,{})})]})}),(0,s.jsx)(S.Bw,{align:"end",children:(0,s.jsxs)(S.DI,{children:[(0,s.jsx)(S.Ql,{value:"all",children:"All"}),e.map(e=>(0,s.jsx)(S.Ql,{value:e.id,children:e.email},e.id))]})})]})})]}),(0,s.jsx)(C.Z,{loading:p,fallback:(0,s.jsx)(k.O,{className:"mb-8 h-48"}),children:(0,s.jsxs)("div",{className:"mb-8",children:[(0,s.jsx)("h1",{className:"mb-2 text-xl font-semibold",children:"Activity"}),(0,s.jsx)(L,{yearlyStats:g})]})}),(0,s.jsx)(C.Z,{loading:m,fallback:(0,s.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,s.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,s.jsx)(k.O,{className:"h-32 flex-1"}),(0,s.jsx)(k.O,{className:"h-32 flex-1"}),(0,s.jsx)(k.O,{className:"h-32 flex-1"})]}),(0,s.jsx)(k.O,{className:"h-56"})]}),children:(0,s.jsxs)("div",{className:"mb-10 flex flex-col gap-y-5",children:[(0,s.jsxs)("div",{className:"-mb-2 flex flex-col justify-between gap-y-1 md:flex-row md:items-end md:gap-y-0",children:[(0,s.jsx)("h1",{className:"text-xl font-semibold",children:"Usage"}),(0,s.jsxs)("div",{className:"flex items-center gap-x-3",children:[(0,s.jsxs)(S.Ph,{defaultValue:"all",onValueChange:e=>d(e),children:[(0,s.jsx)(S.i4,{className:"w-[180px]",children:(0,s.jsxs)("div",{className:"flex w-full items-center truncate",children:[(0,s.jsx)("span",{className:"mr-1.5 text-muted-foreground",children:"Language:"}),(0,s.jsx)("div",{className:"overflow-hidden text-ellipsis",children:(0,s.jsx)(S.ki,{})})]})}),(0,s.jsx)(S.Bw,{children:(0,s.jsxs)(S.DI,{children:[(0,s.jsx)(S.Ql,{value:"all",children:"All"}),Object.entries(u.SQ).map(e=>{let[t,n]=e;return(0,s.jsx)(S.Ql,{value:n,children:t},n)})]})})]}),(0,s.jsx)(w,{buttonClassName:"h-full",contentAlign:"end",dateRange:t,onOpenChange:(e,t)=>{!e&&t&&n(t)}})]})]}),(0,s.jsx)(X,{dailyStats:x}),(0,s.jsx)(U,{dailyStats:x,dateRange:t})]})})]})}},70825:function(e,t,n){"use strict";var s=n(57437),r=n(2265),a=n(36850),l=n(93111);t.Z=e=>{let{loading:t,fallback:n,delay:i,children:o}=e,[d,c]=r.useState(!t),[u]=(0,a.n)(d,null!=i?i:200);return(r.useEffect(()=>{t||d||c(!0)},[t]),u)?o:n||(0,s.jsx)(l.cg,{})}},93111:function(e,t,n){"use strict";n.d(t,{PF:function(){return o},cg:function(){return l},tB:function(){return i}});var s=n(57437),r=n(39311),a=n(25645);let l=e=>{let{className:t,...n}=e;return(0,s.jsxs)("div",{className:(0,r.cn)("space-y-3",t),...n,children:[(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-full"})]})},i=e=>{let{className:t,...n}=e;return(0,s.jsx)(a.O,{className:(0,r.cn)("h-4 w-full",t),...n})},o=e=>{let{className:t,...n}=e;return(0,s.jsxs)("div",{className:(0,r.cn)("flex flex-col gap-3",t),...n,children:[(0,s.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(a.O,{className:"h-4 w-full"}),(0,s.jsx)(a.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(a.O,{className:"h-4 w-full"})]})}},93023:function(e,t,n){"use strict";n.d(t,{d:function(){return o},z:function(){return d}});var s=n(57437),r=n(2265),a=n(67256),l=n(7404),i=n(39311);let o=(0,l.j)("inline-flex items-center justify-center rounded-md text-sm font-medium shadow ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-md hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90","hover-destructive":"shadow-none hover:bg-destructive/90 hover:text-destructive-foreground",outline:"border border-input hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"shadow-none hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 shadow-none hover:underline"},size:{default:"h-8 px-4 py-2",sm:"h-8 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-8 w-8 p-0"}},defaultVariants:{variant:"default",size:"default"}}),d=r.forwardRef((e,t)=>{let{className:n,variant:r,size:l,asChild:d=!1,...c}=e,u=d?a.g7:"button";return(0,s.jsx)(u,{className:(0,i.cn)(o({variant:r,size:l,className:n})),ref:t,...c})});d.displayName="Button"},86110:function(e,t,n){"use strict";n.d(t,{Ol:function(){return i},Zb:function(){return l},aY:function(){return c},eW:function(){return u},ll:function(){return o}});var s=n(57437),r=n(2265),a=n(39311);let l=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",n),...r})});l.displayName="Card";let i=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex flex-col space-y-1.5 p-6",n),...r})});i.displayName="CardHeader";let o=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("h3",{ref:t,className:(0,a.cn)("text-2xl font-semibold leading-none tracking-tight",n),...r})});o.displayName="CardTitle";let d=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("p",{ref:t,className:(0,a.cn)("text-sm text-muted-foreground",n),...r})});d.displayName="CardDescription";let c=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("p-6 pt-0",n),...r})});c.displayName="CardContent";let u=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)("div",{ref:t,className:(0,a.cn)("flex items-center p-6 pt-0",n),...r})});u.displayName="CardFooter"},25831:function(e,t,n){"use strict";n.d(t,{J2:function(){return i},i9:function(){return c},tW:function(){return u},xo:function(){return o},xp:function(){return d},yk:function(){return f}});var s=n(57437),r=n(2265),a=n(19190),l=n(39311);let i=a.fC,o=a.xz,d=a.x8,c=a.h_,u=a.ee,f=r.forwardRef((e,t)=>{let{className:n,sideOffset:r=4,...i}=e;return(0,s.jsx)(a.VY,{ref:t,sideOffset:r,className:(0,l.cn)("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n),...i})});f.displayName=a.VY.displayName},58094:function(e,t,n){"use strict";n.d(t,{Bw:function(){return f},DI:function(){return d},Ph:function(){return o},Ql:function(){return x},i4:function(){return u},ki:function(){return c}});var s=n(57437),r=n(2265),a=n(98608),l=n(39311),i=n(84168);let o=a.fC,d=a.ZA,c=a.B4,u=r.forwardRef((e,t)=>{let{className:n,children:r,...o}=e;return(0,s.jsxs)(a.xz,{ref:t,className:(0,l.cn)("flex h-9 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n),...o,children:[r,(0,s.jsx)(a.JO,{asChild:!0,children:(0,s.jsx)(i.IconChevronUpDown,{className:"opacity-50"})})]})});u.displayName=a.xz.displayName;let f=r.forwardRef((e,t)=>{let{className:n,children:r,position:i="popper",...o}=e;return(0,s.jsx)(a.h_,{children:(0,s.jsx)(a.VY,{ref:t,className:(0,l.cn)("relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-80","popper"===i&&"translate-y-1",n),position:i,...o,children:(0,s.jsx)(a.l_,{className:(0,l.cn)("p-1","popper"===i&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:r})})})});f.displayName=a.VY.displayName;let m=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.__,{ref:t,className:(0,l.cn)("py-1.5 pl-8 pr-2 text-sm font-semibold",n),...r})});m.displayName=a.__.displayName;let x=r.forwardRef((e,t)=>{let{className:n,children:r,isPlaceHolder:o,...d}=e;return(0,s.jsxs)(a.ck,{ref:t,className:(0,l.cn)("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",n),...d,children:[!o&&(0,s.jsx)("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:(0,s.jsx)(a.wU,{children:(0,s.jsx)(i.IconCheck,{className:"h-4 w-4"})})}),(0,s.jsx)(a.eT,{children:r})]})});x.displayName=a.ck.displayName;let h=r.forwardRef((e,t)=>{let{className:n,...r}=e;return(0,s.jsx)(a.Z0,{ref:t,className:(0,l.cn)("-mx-1 my-1 h-px bg-muted",n),...r})});h.displayName=a.Z0.displayName},25645:function(e,t,n){"use strict";n.d(t,{O:function(){return a}});var s=n(57437),r=n(39311);function a(e){let{className:t,...n}=e;return(0,s.jsx)("div",{className:(0,r.cn)("h-4 animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",t),...n})}},61985:function(e,t,n){"use strict";n.d(t,{L:function(){return r},o:function(){return s}});let s="name@yourcompany.com",r=20},36850:function(e,t,n){"use strict";n.d(t,{S:function(){return i},n:function(){return o}});var s=n(2265),r=n(50976),a=n(15357);let l=e=>{let t=(0,a.d)(e);s.useEffect(()=>()=>{t.current()},[])};function i(e,t,n){let i=(0,a.d)(e),o=s.useMemo(()=>(0,r.Z)(function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.current(...t)},t,n),[]);return l(()=>o.cancel()),{run:o,cancel:o.cancel,flush:o.flush}}function o(e,t,n){let[r,a]=s.useState(e),{run:l}=i(()=>{a(e)},t,n);return s.useEffect(()=>{l()},[e]),[r,a]}},15357:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var s=n(2265);function r(e){let t=s.useRef(e);return t.current=e,t}},57166:function(e,t,n){"use strict";n.d(t,{DQ:function(){return o},GG:function(){return l},S1:function(){return a},lE:function(){return r},yB:function(){return i},yw:function(){return d}});var s=n(60106);let r=(0,s.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,s.BX)("\n  query repositories($after: String, $before: String, $first: Int, $last: Int) {\n    repositories(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),l=(0,s.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          finishedAt\n          exitCode\n          stdout\n          stderr\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,s.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),o=(0,s.BX)("\n  query ListJobs {\n    jobs\n  }\n"),d=(0,s.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}},function(e){e.O(0,[6990,8310,768,9109,3072,2699,7070,3714,3815,8608,9190,9583,7753,4168,2971,7864,1744],function(){return e(e.s=1736)}),_N_E=e.O()}]);