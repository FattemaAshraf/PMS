"use strict";(self.webpackChunkProject_Management_System=self.webpackChunkProject_Management_System||[]).push([[984],{7984:(ue,b,l)=>{l.r(b),l.d(b,{DashboardModule:()=>me});var u=l(6814),e=l(5879),c=l(3403),g=l(7700);let y=(()=>{class t{constructor(n,i){this.dialogRef=n,this.Router=i}ngOnInit(){}onClose(){this.dialogRef.close()}logOut(){localStorage.removeItem("userToken"),localStorage.removeItem("role"),localStorage.removeItem("userName"),localStorage.removeItem("userEmail"),localStorage.removeItem("loglevel"),this.Router.navigate(["/auth"])}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(g.so),e.Y36(c.F0))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-logout"]],decls:11,vars:1,consts:[[1,"auth-card"],[1,"text-center","text-white"],[1,"mb-2"],[1,"d-flex","justify-content-between"],["cdkFocusInitial","",1,"outline-primary","me-2",3,"click"],["cdkFocusInitial","",1,"primary",3,"mat-dialog-close","click"]],template:function(i,o){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),e._uU(3,"Log Out"),e.qZA(),e.TgZ(4,"p"),e._uU(5,"are you sure you want to log out ? if you are sure just click on log out "),e.qZA()(),e.TgZ(6,"div",3)(7,"button",4),e.NdJ("click",function(){return o.onClose()}),e._uU(8,"Cancle"),e.qZA(),e.TgZ(9,"button",5),e.NdJ("click",function(){return o.logOut()}),e._uU(10,"Log Out"),e.qZA()()()),2&i&&(e.xp6(9),e.Q6J("mat-dialog-close",!0))},dependencies:[g.ZT],styles:[".auth-card[_ngcontent-%COMP%]{border-radius:0!important}"]})}return t})();var d=l(7782),x=l(7862),Z=l(2296),P=l(617),_=l(6311);function U(t,r){if(1&t&&e._UZ(0,"img",17),2&t){const n=e.oxw();e.Q6J("src","https://upskilling-egypt.com/"+(null==n.userData?null:n.userData.imagePath),e.LSH)}}function w(t,r){1&t&&e._UZ(0,"img",18)}let A=(()=>{class t{constructor(n,i,o){this.dialog=n,this._AuthService=i,this._HelperService=o,this.isEmployee=!1}ngOnInit(){this.isManger(),this.getCurrentUser()}isManger(){return this.isEmployee="Manager"==this._AuthService.role}openLogoutDialog(){this.dialog.open(y,{data:{},width:"25%"}).afterClosed().subscribe(i=>{})}sayHello(){console.log("hello")}getCurrentUser(){this._HelperService.onGetCurrentUser().subscribe({next:n=>{this.userData=n}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(g.uw),e.Y36(d.e),e.Y36(x.W))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-navbar"]],decls:36,vars:5,consts:[["id","navbar"],[1,"container-fluid"],[1,"row","justify-content-between","align-items-center"],[1,"col-2"],["src","assets/images/logo-dark.svg",1,"w-100"],[1,"col-4"],[1,"d-flex","align-items-center","justify-content-end"],[3,"src",4,"ngIf"],["src","assets/images/dummy-avatar-profile.jpg",4,"ngIf"],[1,"ms-2"],[1,"m-0"],[1,"text-muted"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["routerLink","/dashboard/profile/","mat-menu-item",""],["routerLink","/auth/change-password","mat-menu-item",""],["mat-menu-item","",3,"click"],[3,"src"],["src","assets/images/dummy-avatar-profile.jpg"]],template:function(i,o){if(1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5)(6,"div",6)(7,"div"),e.YNc(8,U,1,1,"img",7),e.YNc(9,w,1,0,"img",8),e.qZA(),e.TgZ(10,"div",9)(11,"h6",10),e._uU(12),e.qZA(),e.TgZ(13,"span",11),e._uU(14),e.qZA()(),e.TgZ(15,"div")(16,"button",12)(17,"mat-icon"),e._uU(18,"expand_more"),e.qZA()(),e.TgZ(19,"mat-menu",null,13)(21,"button",14)(22,"mat-icon"),e._uU(23,"account_circle"),e.qZA(),e.TgZ(24,"span"),e._uU(25,"Profile"),e.qZA()(),e.TgZ(26,"button",15)(27,"mat-icon"),e._uU(28,"lock-open"),e.qZA(),e.TgZ(29,"span"),e._uU(30,"Change Password"),e.qZA()(),e.TgZ(31,"button",16),e.NdJ("click",function(){return o.openLogoutDialog()}),e.TgZ(32,"mat-icon"),e._uU(33,"logout"),e.qZA(),e.TgZ(34,"span"),e._uU(35,"Logout"),e.qZA()()()()()()()()()),2&i){const s=e.MAs(20);e.xp6(8),e.Q6J("ngIf",null==o.userData?null:o.userData.profileImage),e.xp6(1),e.Q6J("ngIf",!(null!=o.userData&&o.userData.profileImage)),e.xp6(3),e.Oqu(null==o.userData?null:o.userData.userName),e.xp6(2),e.Oqu(null==o.userData?null:o.userData.email),e.xp6(2),e.Q6J("matMenuTriggerFor",s)}},dependencies:[u.O5,Z.RK,P.Hw,_.VK,_.OP,_.p6,c.rH],styles:["#navbar[_ngcontent-%COMP%]   .col-4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%}.shadow-sm[_ngcontent-%COMP%]{--bs-box-shadow-sm: 0px 1px 4px 0px #00000026}"]})}return t})();var C=l(2425);const N=function(t){return{"d-none":t}};function I(t,r){if(1&t&&(e.TgZ(0,"a",8)(1,"div",9)(2,"span"),e._UZ(3,"i"),e.qZA(),e.TgZ(4,"span",10),e._uU(5),e.qZA()()()),2&t){const n=e.oxw().$implicit,i=e.oxw();e.Q6J("routerLink",n.link),e.xp6(1),e.Tol(i.isOpened?"":"justify-content-center"),e.xp6(2),e.Tol(n.icon),e.xp6(1),e.Q6J("ngClass",e.VKq(7,N,!i.isOpened)),e.xp6(1),e.Oqu(n.title)}}function F(t,r){if(1&t&&(e.ynx(0),e.YNc(1,I,6,9,"a",7),e.BQk()),2&t){const n=r.$implicit;e.xp6(1),e.Q6J("ngIf",n.isActive)}}const M=function(t,r){return{"max-height":t,"v-height":r}};let O=(()=>{class t{constructor(n,i,o,s){this._AuthService=n,this.router=i,this.toastr=o,this.dialog=s,this.isOpenedValue=new e.vpe,this.isOpened=!0,this.isMaxHeight=!0,this.is100vHeight=!1,this.menu=[{title:"Home",icon:"fa-solid fa-house",link:"/dashboard/manager/home",isActive:this.isManager()},{title:"Users",icon:"fa-solid fa-users",link:"/dashboard/manager/users",isActive:this.isManager()},{title:"Projects",icon:"fa-solid fa-calendar-day",link:"/dashboard/manager/projects",isActive:this.isManager()},{title:"Tasks",icon:"fa-solid fa-list-check",link:"/dashboard/manager/tasks",isActive:this.isManager()},{title:"Home",icon:"fa-solid fa-house",link:"/dashboard/employee/home",isActive:this.isEmployee()},{title:"Projects",icon:"fa-solid fa-diagram-project",link:"/dashboard/employee/projects",isActive:this.isEmployee()},{title:"Tasks",icon:"fa-solid fa-list-check",link:"/dashboard/employee/tasks",isActive:this.isEmployee()}]}isManager(){return"Manager"==this._AuthService.role}isEmployee(){return"Employee"==this._AuthService.role}ngOnInit(){this.isManager()?this.router.navigate(["/dashboard/manager/home"]):this.isEmployee()&&this.router.navigate(["/dashboard/employee/home"])}onClicked(){this.isOpened=!this.isOpened,this.isOpenedValue.emit(this.isOpened),console.log(this.isOpened)}onWindowScroll(){const n=window.scrollY;this.isMaxHeight=n<64,this.is100vHeight=n>64}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(d.e),e.Y36(c.F0),e.Y36(C._W),e.Y36(g.uw))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-sidebar"]],hostBindings:function(i,o){1&i&&e.NdJ("scroll",function(){return o.onWindowScroll()},!1,e.Jf7)},outputs:{isOpenedValue:"isOpenedValue"},decls:8,vars:8,consts:[["id","sidebar",3,"ngClass"],[1,"container-fluid"],[1,"row"],[3,"ngClass","click"],[1,"fa-solid"],[1,"mt-5"],[4,"ngFor","ngForOf"],["class","d-block text-decoration-none","routerLinkActive","bg-active",3,"routerLink",4,"ngIf"],["routerLinkActive","bg-active",1,"d-block","text-decoration-none",3,"routerLink"],[1,"item","d-flex"],[1,"icon-name",3,"ngClass"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div")(4,"a",3),e.NdJ("click",function(){return o.onClicked()}),e._UZ(5,"i",4),e.qZA()(),e.TgZ(6,"div",5),e.YNc(7,F,2,1,"ng-container",6),e.qZA()()()()),2&i&&(e.Q6J("ngClass",e.WLB(5,M,o.isMaxHeight,o.is100vHeight)),e.xp6(4),e.Q6J("ngClass",o.isOpened?"position-left":"position-right"),e.xp6(1),e.Tol(o.isOpened?"fa-chevron-left":"fa-chevron-right"),e.xp6(2),e.Q6J("ngForOf",o.menu))},dependencies:[u.mk,u.sg,u.O5,c.rH,c.Od],styles:["#sidebar[_ngcontent-%COMP%]{background-color:#0e382f;position:sticky;top:0;z-index:1071;transition:height .3s ease}*[_ngcontent-%COMP%]{transition:all .5s ease}.item[_ngcontent-%COMP%]{cursor:pointer;padding:10px 5px!important;font-weight:500;margin:.5rem 0px;color:#fff}.item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:1rem}.item[_ngcontent-%COMP%]   .bg-active[_ngcontent-%COMP%]{background-color:#ef9b284d;border-radius:8px}.item[_ngcontent-%COMP%]   .bg-activespan[_ngcontent-%COMP%]{color:#ef9b28!important}.bg-active[_ngcontent-%COMP%]{background-color:#ef9b284d;border-radius:8px}.bg-activespan[_ngcontent-%COMP%]{color:#ef9b28!important}.position-left[_ngcontent-%COMP%]{padding:10px 5px;border-radius:.5rem 0 0 .5rem;background:#ef9b28;color:#fff;position:absolute;right:0;top:20px;cursor:pointer}.position-right[_ngcontent-%COMP%]{padding:10px 5px;border-radius:0 .5rem .5rem 0;background:#ef9b28;position:absolute;right:-20px;top:20px;color:#fff;cursor:pointer}@media (max-width: 425px){.row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:none}}.max-height[_ngcontent-%COMP%]{height:calc(100vh - 64px)}.v-height[_ngcontent-%COMP%]{height:100vh}"]})}return t})(),k=(()=>{class t{constructor(){this.receivedBoolean=!0}handleBooleanChange(n){this.receivedBoolean=n}ngOnInit(){}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-dashboard"]],decls:8,vars:4,consts:[["id","dashboard"],[1,"container-fluid"],[1,"row"],[1,"nav-bar","py-2","shadow-sm"],[1,"px-0","side-bar"],[3,"isOpenedValue"],[1,"col-md-10","px-0","bg-gray","shadow-lg"]],template:function(i,o){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2),e._UZ(3,"app-navbar",3),e.TgZ(4,"div",4)(5,"app-sidebar",5),e.NdJ("isOpenedValue",function(m){return o.handleBooleanChange(m)}),e.qZA()(),e.TgZ(6,"div",6),e._UZ(7,"router-outlet"),e.qZA()()()()),2&i&&(e.xp6(4),e.Tol(o.receivedBoolean?"col-md-2":"col-md-1"),e.xp6(2),e.Tol(o.receivedBoolean?"col-md-10":"col-md-11"))},dependencies:[c.lC,A,O],styles:[".nav-bar[_ngcontent-%COMP%]{z-index:200;padding:0;background:#FFF;position:sticky}#dashboard[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{transition:all .8s ease}"]})}return t})();var q=l(6208),a=l(6223),J=l(2032),h=l(9157),v=l(4426);function S(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"userName is required"),e.qZA())}function Q(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"Invalid userName format must contains numbers andcharacters"),e.qZA())}function Y(t,r){if(1&t&&(e.TgZ(0,"span",25),e.YNc(1,S,2,0,"span",16),e.YNc(2,Q,2,0,"span",16),e.qZA()),2&t){const n=e.oxw();let i,o;e.xp6(1),e.Q6J("ngIf",null==(i=n.ProfileForm.get("userName"))?null:i.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.ProfileForm.get("userName"))?null:o.hasError("pattern"))}}function H(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"Email is required"),e.qZA())}function E(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"Email is invalid"),e.qZA())}function j(t,r){if(1&t&&(e.TgZ(0,"span",25),e.YNc(1,H,2,0,"span",16),e.YNc(2,E,2,0,"span",16),e.qZA()),2&t){const n=e.oxw();let i,o;e.xp6(1),e.Q6J("ngIf",null==(i=n.ProfileForm.get("email"))?null:i.hasError("required")),e.xp6(1),e.Q6J("ngIf",null==(o=n.ProfileForm.get("email"))||null==o.errors?null:o.errors.email)}}function z(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1,"country is required"),e.qZA())}function D(t,r){if(1&t&&(e.TgZ(0,"span",25),e.YNc(1,z,2,0,"span",16),e.qZA()),2&t){const n=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=n.ProfileForm.get("country"))?null:i.hasError("required"))}}function V(t,r){1&t&&(e.TgZ(0,"span",27),e._uU(1,"phoneNumber is required"),e.qZA())}function L(t,r){1&t&&(e.TgZ(0,"span",27),e._uU(1,"phoneNumber starts with 011/012/015/010 and length 11 number "),e.qZA())}function B(t,r){if(1&t&&(e.TgZ(0,"span",25),e.YNc(1,V,2,0,"span",26),e.YNc(2,L,2,0,"span",26),e.qZA()),2&t){const n=e.oxw();let i,o;e.xp6(1),e.Q6J("ngIf",null==(i=n.ProfileForm.get("phoneNumber"))||null==i.errors?null:i.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.ProfileForm.get("phoneNumber"))||null==o.errors?null:o.errors.pattern)}}function R(t,r){if(1&t&&(e.TgZ(0,"mat-form-field",7)(1,"mat-label",8),e._uU(2,"Join Date"),e.qZA(),e._UZ(3,"input",28),e.qZA()),2&t){const n=e.oxw();e.xp6(3),e.Q6J("value",n.user.creationDate)("disabled",!0)}}function G(t,r){if(1&t&&(e.TgZ(0,"mat-form-field",7)(1,"mat-label",8),e._uU(2,"Role"),e.qZA(),e._UZ(3,"input",28),e.qZA()),2&t){const n=e.oxw();e.xp6(3),e.Q6J("value",n.user.group.name)("disabled",!0)}}function K(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," confirmPassword is required "),e.qZA())}function W(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," confirmPassword must have capital,small letters,sympols,number and pass length(8-16) "),e.qZA())}function X(t,r){1&t&&(e.TgZ(0,"span"),e._uU(1," password and confirm password not match "),e.qZA())}function $(t,r){if(1&t&&(e.TgZ(0,"span",25),e.YNc(1,K,2,0,"span",16),e.YNc(2,W,2,0,"span",16),e.YNc(3,X,2,0,"span",16),e.qZA()),2&t){const n=e.oxw(2);let i,o,s;e.xp6(1),e.Q6J("ngIf",null==(i=n.ProfileForm.get("confirmPassword"))||null==i.errors?null:i.errors.required),e.xp6(1),e.Q6J("ngIf",null==(o=n.ProfileForm.get("confirmPassword"))||null==o.errors?null:o.errors.pattern),e.xp6(1),e.Q6J("ngIf",null==(s=n.ProfileForm.get("confirmPassword"))||null==s.errors?null:s.errors.invalid)}}function ee(t,r){if(1&t){const n=e.EpF();e.ynx(0),e.TgZ(1,"mat-form-field",7)(2,"mat-label"),e._uU(3,"Confirm Password"),e.qZA(),e._UZ(4,"input",29),e.TgZ(5,"button",30),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.hide=!o.hide)}),e.TgZ(6,"mat-icon"),e._uU(7),e.qZA()()(),e.YNc(8,$,4,3,"span",31),e.BQk()}if(2&t){const n=e.oxw();let i;e.xp6(4),e.Q6J("type",n.hide?"password":"text"),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",n.hide),e.xp6(2),e.Oqu(n.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("ngIf",(null==(i=n.ProfileForm.get("confirmPassword"))?null:i.errors)&&(null==(i=n.ProfileForm.get("confirmPassword"))?null:i.touched))}}function te(t,r){1&t&&(e.TgZ(0,"ngx-dropzone-label",36),e._UZ(1,"i",37),e.TgZ(2,"div"),e._uU(3,"choose your profile image"),e.qZA()())}function ne(t,r){if(1&t&&(e.TgZ(0,"ngx-dropzone-label"),e._UZ(1,"img",38),e.qZA()),2&t){const n=e.oxw(2);e.xp6(1),e.Q6J("src",n.imgSrc,e.LSH)}}function oe(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"ngx-dropzone-image-preview",39),e.NdJ("removed",function(){const s=e.CHM(n).$implicit,m=e.oxw(2);return e.KtG(m.onRemove(s))}),e.qZA()}if(2&t){const n=r.$implicit;e.Q6J("removable",!0)("file",n)}}function ie(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"div",32)(1,"ngx-dropzone",33),e.NdJ("change",function(o){e.CHM(n);const s=e.oxw();return e.KtG(s.onSelect(o))}),e.YNc(2,te,4,0,"ngx-dropzone-label",34),e.YNc(3,ne,2,1,"ngx-dropzone-label",16),e.YNc(4,oe,1,2,"ngx-dropzone-image-preview",35),e.qZA()()}if(2&t){const n=e.oxw();e.xp6(1),e.Q6J("multiple",!1),e.xp6(1),e.Q6J("ngIf",!n.imgSrc),e.xp6(1),e.Q6J("ngIf",n.imgSrc),e.xp6(1),e.Q6J("ngForOf",n.files)}}function re(t,r){1&t&&(e.TgZ(0,"div",40),e._UZ(1,"img",41),e.qZA())}function se(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"button",42),e.NdJ("click",function(){e.CHM(n);const o=e.oxw();return e.KtG(o.enableFormControls())}),e._uU(1," Update Profile "),e.qZA()}if(2&t){const n=e.oxw();e.Q6J("disabled",n.ProfileForm.invalid)}}function ae(t,r){if(1&t&&(e.TgZ(0,"button",43),e._uU(1," Save "),e.qZA()),2&t){const n=e.oxw();e.Q6J("disabled",n.ProfileForm.invalid)}}const le=function(t){return{"col-md-11 mx-auto":t}};let T=(()=>{class t{constructor(n,i,o,s,m){this.router=n,this._HelperService=i,this._AuthService=o,this.toastr=s,this.ActivatedRoute=m,this.pathHttps="https://upskilling-egypt.com/",this.Messgage="",this.isEmployee=!1,this.isView=!0,this.isUpdate=!1,this.ProfileForm=new a.cw({userName:new a.NI(null,[a.kI.required,a.kI.pattern("([a-zA-Z]){3,12}([0-9]{1,3})")]),email:new a.NI(null,[a.kI.required,a.kI.email]),country:new a.NI(null,[a.kI.required]),phoneNumber:new a.NI(null,[a.kI.required,a.kI.pattern("^(01|01|00201)[0-2,5]{1}[0-9]{8}")]),confirmPassword:new a.NI(null,[a.kI.required,a.kI.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$")]),imagePath:new a.NI(null),role:new a.NI(null),joinDate:new a.NI(null)}),this.hide=!0,this.hideConfirm=!0,this.files=[],1==this.isUpdate?this.enableFormControls():1==this.isView&&(this.getCurrentUser(),this.disableFormControls())}ngOnInit(){this.isManager()}enableFormControls(){this.isView=!1,this.ProfileForm.get("userName")?.enable(),this.ProfileForm.get("email")?.enable(),this.ProfileForm.get("country")?.enable(),this.ProfileForm.get("phoneNumber")?.enable(),this.ProfileForm.get("confirmPassword")?.enable()}disableFormControls(){this.isView&&(this.ProfileForm.get("userName")?.disable(),this.ProfileForm.get("email")?.disable(),this.ProfileForm.get("country")?.disable(),this.ProfileForm.get("phoneNumber")?.disable(),this.ProfileForm.get("confirmPassword")?.disable())}isManager(){return this.isEmployee="Manager"==this._AuthService.role}getCurrentUser(){this._HelperService.onGetCurrentUser().subscribe({next:n=>{console.log(n),this.user=n},error:n=>{console.log(n.error.message)},complete:()=>{this.imgSrc=this.pathHttps+this.user.imagePath,this.ProfileForm.patchValue({userName:this.user?.userName,email:this.user?.email,country:this.user?.country,phoneNumber:this.user?.phoneNumber,role:this.user?.group.name,joinDate:this.user.creationDate})}})}onSubmit(n){console.log(n.value);let i=new FormData,o=new Map(Object.entries(n.value));for(const[s,m]of o)i.append(s,n.value[s]);i.append("profileImage",this.imgSrc,this.imgSrc.name),this._HelperService.onUpdateCurrentUser(i).subscribe({next:s=>{console.log(s)},error:s=>{console.log(s),this.toastr.error(s.error.message,"Error!")},complete:()=>{this.isView=!0,this.toastr.success("profile updated successfully"),"Manager"==localStorage.getItem("role")?this.router.navigate(["/dashboard/manager/home"]):this.router.navigate(["/dashboard/employee/home"])}})}onSelect(n){console.log(n),this.imgSrc=n.addedFiles[0],this.files.push(...n.addedFiles)}onRemove(n){console.log(n),this.files.splice(this.files.indexOf(n),1)}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(c.F0),e.Y36(x.W),e.Y36(d.e),e.Y36(C._W),e.Y36(c.gz))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-user-profile"]],decls:48,vars:16,consts:[["id","user-view",1,"p-5"],[1,"container"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-md-8",3,"ngClass"],[1,"title","my-4"],[1,"col-md-6"],["appearance","fill",1,"w-100"],[1,"text-secondry"],["formControlName","userName","matInput","",1,"text-main"],["class","text-danger  mb-3",4,"ngIf"],["matInput","","formControlName","email",1,"text-main"],["formControlName","country","matInput","",1,"text-main"],["matInput","","formControlName","phoneNumber",1,"text-main"],["appearance","fill","class","w-100",4,"ngIf"],[1,"col-md-12"],[4,"ngIf"],[1,"col-md-4"],["class","d-flex justify-content-center m-5",4,"ngIf"],["class","circle-preview m-5",4,"ngIf"],[1,"d-flex","justify-content-center","gap-2","my-4"],["class","px-4 primary",3,"disabled","click",4,"ngIf"],["type","submit","class","px-4 primary",3,"disabled",4,"ngIf"],["type","button",1,"outline-primary",3,"routerLink","click"],[1,"fa-solid","fa-arrow-left","pl-2"],[1,"text-danger","mb-3"],["class","mb-0",4,"ngIf"],[1,"mb-0"],["matInput","",1,"text-dark",3,"value","disabled"],["formControlName","confirmPassword","matInput","","placeholder","Enter Your Password",1,"text-dark",3,"type"],["type","button","mat-icon-button","","matSuffix","",3,"click"],["class","text-danger mb-3",4,"ngIf"],[1,"d-flex","justify-content-center","m-5"],[1,"circle-preview",3,"multiple","change"],["class","text-main p-3 m-0",4,"ngIf"],["ngProjectAs","ngx-dropzone-preview","class","w-100",5,["ngx-dropzone-preview"],3,"removable","file","removed",4,"ngFor","ngForOf"],[1,"text-main","p-3","m-0"],[1,"fa-solid","fa-upload","fa-3x","mb-3"],["alt","",1,"img-fluid",3,"src"],["ngProjectAs","ngx-dropzone-preview",5,["ngx-dropzone-preview"],1,"w-100",3,"removable","file","removed"],[1,"circle-preview","m-5"],["src","assets/images/dummy-avatar-profile.jpg",1,"w-100","rounded-circle"],[1,"px-4","primary",3,"disabled","click"],["type","submit",1,"px-4","primary",3,"disabled"]],template:function(i,o){if(1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return o.onSubmit(o.ProfileForm)}),e.TgZ(3,"div",3)(4,"div",4)(5,"div",5)(6,"h3"),e._uU(7,"User Profile"),e.qZA()(),e.TgZ(8,"div",3)(9,"div",6)(10,"mat-form-field",7)(11,"mat-label",8),e._uU(12,"User Name"),e.qZA(),e._UZ(13,"input",9),e.qZA(),e.YNc(14,Y,3,2,"span",10),e.qZA(),e.TgZ(15,"div",6)(16,"mat-form-field",7)(17,"mat-label",8),e._uU(18,"E-mail"),e.qZA(),e._UZ(19,"input",11),e.qZA(),e.YNc(20,j,3,2,"span",10),e.qZA(),e.TgZ(21,"div",6)(22,"mat-form-field",7)(23,"mat-label",8),e._uU(24,"Country"),e.qZA(),e._UZ(25,"input",12),e.qZA(),e.YNc(26,D,2,1,"span",10),e.qZA(),e.TgZ(27,"div",6)(28,"mat-form-field",7)(29,"mat-label",8),e._uU(30,"Phone Number"),e.qZA(),e._UZ(31,"input",13),e.qZA(),e.YNc(32,B,3,2,"span",10),e.qZA(),e.TgZ(33,"div",6),e.YNc(34,R,4,2,"mat-form-field",14),e.qZA(),e.TgZ(35,"div",6),e.YNc(36,G,4,2,"mat-form-field",14),e.qZA(),e.TgZ(37,"div",15),e.YNc(38,ee,9,5,"ng-container",16),e.qZA()()(),e.TgZ(39,"div",17),e.YNc(40,ie,5,4,"div",18),e.YNc(41,re,2,0,"div",19),e.qZA(),e.TgZ(42,"div",20),e.YNc(43,se,2,1,"button",21),e.YNc(44,ae,2,1,"button",22),e.TgZ(45,"button",23),e.NdJ("click",function(){return o.isManager()}),e._UZ(46,"i",24),e._uU(47," Back To Home "),e.qZA()()()()()()),2&i){let s,m,p,f;e.xp6(2),e.Q6J("formGroup",o.ProfileForm),e.xp6(2),e.Q6J("ngClass",e.VKq(14,le,o.isUpdate)),e.xp6(10),e.Q6J("ngIf",(null==(s=o.ProfileForm.get("userName"))?null:s.invalid)&&((null==(s=o.ProfileForm.get("userName"))?null:s.dirty)||(null==(s=o.ProfileForm.get("userName"))?null:s.touched))),e.xp6(6),e.Q6J("ngIf",(null==(m=o.ProfileForm.get("email"))?null:m.invalid)&&(null==(m=o.ProfileForm.get("email"))?null:m.touched)),e.xp6(6),e.Q6J("ngIf",(null==(p=o.ProfileForm.get("country"))?null:p.invalid)&&((null==(p=o.ProfileForm.get("country"))?null:p.dirty)||(null==(p=o.ProfileForm.get("country"))?null:p.touched))),e.xp6(6),e.Q6J("ngIf",(null==(f=o.ProfileForm.get("phoneNumber"))?null:f.errors)&&(null==(f=o.ProfileForm.get("phoneNumber"))?null:f.touched)),e.xp6(2),e.Q6J("ngIf",o.isView),e.xp6(2),e.Q6J("ngIf",o.isView),e.xp6(2),e.Q6J("ngIf",!o.isView),e.xp6(2),e.Q6J("ngIf",!o.isView),e.xp6(1),e.Q6J("ngIf",o.isView),e.xp6(2),e.Q6J("ngIf",o.isView),e.xp6(1),e.Q6J("ngIf",!o.isView),e.xp6(1),e.Q6J("routerLink",o.isEmployee?"/dashboard/manager/home/":"/dashboard/employee/home/")}},dependencies:[u.mk,u.sg,u.O5,J.Nt,h.KE,h.hX,h.R9,Z.RK,P.Hw,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,c.rH,v._f,v.NP,v.sv],styles:["input[_ngcontent-%COMP%]   .mdc-text-field--filled[_ngcontent-%COMP%]:not(.mdc-text-field--disabled)   .mdc-text-field__input[_ngcontent-%COMP%]{color:#000!important}.circle-preview[_ngcontent-%COMP%]{width:250px;height:250px;border-radius:50%;background-color:bisque;border:4px dashed #ef9b28}.circle-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover}"]})}return t})();const ce=[{path:"",component:k,children:[{path:"manager",canActivate:[t=>{const r=(0,e.f3M)(c.F0),n=(0,e.f3M)(d.e),i=localStorage.getItem("userToken"),o=localStorage.getItem("role");return null!==i&&"Manager"==o||(n.getProfile(),r.navigate(["/dashboard"]),!1)}],loadChildren:()=>l.e(172).then(l.bind(l,2172)).then(t=>t.ManagerModule)},{path:"employee",canActivate:[t=>{const r=(0,e.f3M)(c.F0),n=(0,e.f3M)(d.e),i=localStorage.getItem("userToken"),o=localStorage.getItem("role");return null!==i&&"Employee"==o||(n.getProfile(),r.navigate(["/dashboard"]),!1)}],loadChildren:()=>l.e(645).then(l.bind(l,3817)).then(t=>t.EmployeeModule)},{path:"profile",component:T},{path:"updateProfile",component:T}]}];let me=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.ez,c.Bz.forChild(ce),q.m]})}return t})()}}]);