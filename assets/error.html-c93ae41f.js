import{_ as r,r as s,o as a,c,a as n,e as t,w as i,b as e}from"./app-3ff1fc36.js";const u={},_=e("h2",{id:"这个是什么",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#这个是什么","aria-hidden":"true"},"#"),t(" 这个是什么？")],-1),h=e("p",null,[t("这个是收集一些"),e("code",null,"AList"),t("使用期间的一些错误码，然后如何解决（网络问题或者网盘更改API以及其它一些问题可能会无法当时解决需要人为去干预）")],-1),p=e("br",null,null,-1),m=e("hr",null,null,-1),f=e("strong",null,"TooManyRequests",-1),g=e("strong",null,"Too Many Requests",-1),v=e("br",null,null,-1),x=e("strong",null,"点我查看详细说明",-1),y=e("hr",null,null,-1),b=e("br",null,null,-1),E=e("code",null,"AList",-1),A=e("code",null,"48",-1),B=e("code",null,"config.json",-1),w=e("ul",null,[e("li",null,"如果你登录的时候提示登录成功然后又显示这个提示，检查你是否使用了CDN加速等给AList进行了缓存导致的")],-1),k=e("hr",null,null,-1),Q=e("br",null,null,-1),T=e("code",null,"驱动",-1),F=e("hr",null,null,-1),L=e("br",null,null,-1),I=e("code",null,"驱动",-1),j=e("strong",null,"阿里云盘open",-1),C=e("hr",null,null,-1),N=e("br",null,null,-1),D=e("code",null,"阿里云盘open",-1),P=e("hr",null,null,-1),S=e("br",null,null,-1),M=e("hr",null,null,-1),V=e("br",null,null,-1),q=e("hr",null,null,-1),z=e("br",null,null,-1),R=e("hr",null,null,-1),U=e("br",null,null,-1),K=e("hr",null,null,-1),G=e("br",null,null,-1),H=e("code",null,"AList",-1),J=e("strong",null,"查看详细说明",-1),O=e("hr",null,null,-1),W=e("strong",null,"PikPak/分享",-1),X=e("br",null,null,-1),Y=e("strong",null,"Terabox",-1),Z=e("br",null,null,-1),$={href:"https://anwen-anyi.github.io/index/07-wenti.html#_41-alist%E5%A6%82%E4%BD%95-%E4%BD%BF%E7%94%A8-%E5%90%83%E5%88%B0-%E4%BB%A3%E7%90%86-proxy",target:"_blank",rel:"noopener noreferrer"},ee=e("strong",null,"参考方案",-1),te=e("ul",null,[e("li",null,"例如 Google、Mega、Terabox 等这些需要代理才能访问的都可以通过这样的方法使用")],-1),ne=e("hr",null,null,-1),le=e("br",null,null,-1),oe=e("code",null,"搜索索引",-1),ie=e("strong",null,"点我查看",-1),se=e("hr",null,null,-1),de=e("br",null,null,-1),re=e("hr",null,null,-1),ae=e("br",null,null,-1),ce=e("code",null,"根文件夹ID",-1),ue=e("hr",null,null,-1),_e=e("br",null,null,-1),he={href:"https://github.com/alist-org/alist/discussions/2399",target:"_blank",rel:"noopener noreferrer"},pe=e("strong",null,"详情查看点击查看",-1),me=e("hr",null,null,-1),fe=e("br",null,null,-1),ge=e("hr",null,null,-1),ve=e("p",null,"暂时就这些，如果还有可以留言，或者按照格式添加（为了统一直观）",-1);function xe(ye,be){const l=s("Badge"),o=s("RouterLink"),d=s("ExternalLinkIcon");return a(),c("div",null,[_,h,p,m,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("："),f,t(" 、"),g,v,n(l,{text:"A",type:"info",vertical:"middle"}),t("："),n(o,{to:"/zh/guide/drivers/aliyundrive_open.html"},{default:i(()=>[x]),_:1}),y,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Token is expired（出现在登录AList账号时）"),b,n(l,{text:"A",type:"info",vertical:"middle"}),t("：是指你"),E,t("登录有效期到了默认是"),A,t("小时，可以在修改"),B,t("配置文件中"),w,k,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Failed init storage but storage is already created: failed init storage: failed to refresh token: The input parameter refresh_token is missing. Please refer to document."),Q,n(l,{text:"A",type:"info",vertical:"middle"}),t("：一般是在添加"),T,t("的时候刷新令牌(token)不对，更换正确的替换了即可解决。"),F,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：failed get objs: failed to list objs: ForbiddenDriveNotValid:not valid driveld"),L,n(l,{text:"A",type:"info",vertical:"middle"}),t("：一般指的是"),I,t("已经弃用，例如阿里云盘，更换成"),n(o,{to:"/zh/guide/drivers/aliyundrive_open.html"},{default:i(()=>[j]),_:1}),t("即可,其他的暂时未知，其他的暂时没有"),C,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：no such host、TLS handshake timeout、read: connection reset by peer、dns lookup failed、connect: connection refused、Client.Timeout exceeded while awaiting headers、network is unreachable"),N,n(l,{text:"A",type:"info",vertical:"middle"}),t("：遇到这些问题一般都是网络问题导致的，自行排查然后解决。"),e("ul",null,[e("li",null,[t("如果是添加"),D,t("时候遇到：TLS handshake timeout （"),n(o,{to:"/zh/faq/why.html#%E6%B7%BB%E5%8A%A0%E9%98%BF%E9%87%8C%E4%BA%91%E7%9B%98-%E5%88%86%E4%BA%AB-%E6%97%B6%E6%8F%90%E7%A4%BA-%E6%8F%90%E7%A4%BApost-https-auth-aliyundrive-com-v2-account-token-net-http-tls-handshake-timeout"},{default:i(()=>[t("点击我查看如何解决")]),_:1}),t("）")])]),P,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Failed create storage in database: UNIQUE constraint failed: x_storages.mount_path （出现在挂载驱动时）"),S,n(l,{text:"A",type:"info",vertical:"middle"}),t("：要挂载到的路径，它是唯一的，不能重复"),M,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Key: 'Storage.MountPath' Error:Field validation for 'MountPath' failed on the 'required' tag（出现在挂载驱动时）"),V,n(l,{text:"A",type:"info",vertical:"middle"}),t("：挂载路径是必填选项，填写一下"),q,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：UNIQUE constraint failed: x_meta.path（出现在添加元信息时）"),z,n(l,{text:"A",type:"info",vertical:"middle"}),t("：添加元信息时路径只能有一个，不可以重复"),R,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Key: 'Meta.Path' Error:Field validation for 'Path' failed on the 'required' tag（出现在添加元信息时）"),U,n(l,{text:"A",type:"info",vertical:"middle"}),t("：添加元信息时，路径是必须要填写的"),K,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Failed load storage: failed init storage: the site does not allow mounted"),G,n(l,{text:"A",type:"info",vertical:"middle"}),t("：对方的"),H,t("站点不允许挂载，"),n(o,{to:"/zh/guide/drivers/Alist%20V2%20V3.html#%E9%93%BE%E6%8E%A5"},{default:i(()=>[J]),_:1}),O,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：failed get objs: failed to list objs: Sorry, sharing is not available in the current region（"),W,t("）"),X,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：failed get objs: failed to list objs: terabox is not yet available in this are（"),Y,t("）"),Z,n(l,{text:"A",type:"info",vertical:"middle"}),t("：国内不支持访问，如果你是在本地搭建的可以查看一下这个"),e("a",$,[ee,n(d)]),te,ne,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Search not available（出现在构建索引时）"),le,n(l,{text:"A",type:"info",vertical:"middle"}),t("："),oe,t("选项没有选择，无法构建使用，不知道选择哪个搜索索引好?"),n(o,{to:"/zh/guide/advanced/search.html#%E4%B8%8D%E5%90%8C%E6%90%9C%E7%B4%A2%E7%B4%A2%E5%BC%95%E4%B9%8B%E9%97%B4%E7%9A%84%E5%B7%AE%E5%BC%82"},{default:i(()=>[ie]),_:1}),se,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：only chinese and english, numbers and underscores are supported, and the length is no more than 50（出现在一刻相册文件改名时）"),de,n(l,{text:"A",type:"info",vertical:"middle"}),t("：一刻相册文件夹改名时最大50长度"),re,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：failed get objs: failed to list objs: NotFound.FileId:The resource file_id cannot be found. file_id:634e704cefa78f92fefd4c779f7422d820082d041（添加阿里云盘open）"),ae,n(l,{text:"A",type:"info",vertical:"middle"}),t("：添加阿里云盘open存储时，"),ce,t("错误上述最后哪个ID就是错误的ID去获取正确的替换即可"),ue,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：System error: SyntaxError: Invalid regular expression: /?/: Nothing to repeat"),_e,n(l,{text:"A",type:"info",vertical:"middle"}),t("：你的油猴答题插件冲突了，关闭了即可"),e("a",he,[pe,n(d)]),me,n(l,{text:"Q",type:"warning",vertical:"middle"}),t("：Too many unsuccessful sign-in attempts have been made using an incorrect username or password, Try again later."),fe,n(l,{text:"A",type:"info",vertical:"middle"}),t("：连续登录输入6次密码错误就会锁定，重启AList即可重置。"),ge,ve])}const Ae=r(u,[["render",xe],["__file","error.html.vue"]]);export{Ae as default};