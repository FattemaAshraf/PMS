"use strict";(self.webpackChunkProject_Management_System=self.webpackChunkProject_Management_System||[]).push([[592],{1948:(s,i,a)=>{a.d(i,{m:()=>c});var r=a(5879),t=a(9862);let c=(()=>{class n{constructor(e){this._HttpClient=e}onGetManagerProjects(e){return this._HttpClient.get("Project/manager",{params:e})}onProjectById(e){return this._HttpClient.get(`Project/${e}`)}editProject(e,o){return this._HttpClient.put(`Project/${o}`,e)}deleteProject(e){return this._HttpClient.delete(`Project/${e}`)}onAddProject(e){return this._HttpClient.post("Project",e)}static#t=this.\u0275fac=function(o){return new(o||n)(r.LFG(t.eN))};static#e=this.\u0275prov=r.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})()},8693:(s,i,a)=>{a.d(i,{F:()=>c});var r=a(7700),t=a(5879);let c=(()=>{class n{constructor(e,o){this.dialogRef=e,this.data=o}onNoClick(){this.dialogRef.close()}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(r.so),t.Y36(r.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-delete-dialog"]],decls:14,vars:2,consts:[[1,"auth-card"],[1,"text-end","mb-3"],[1,"pointer",3,"click"],[1,"fa-regular","fa-circle-xmark","text-secondry"],[1,"text-center","text-white"],[1,"text-secondry"],[1,"text-center"],["cdkFocusInitial","",1,"btn","btn-outline-danger","my-3","text-danger","text-center","bg-white",3,"mat-dialog-close"]],template:function(o,l){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"span",2),t.NdJ("click",function(){return l.onNoClick()}),t._UZ(3,"i",3),t.qZA()(),t.TgZ(4,"div",4)(5,"h4"),t._uU(6,"Delete This item? "),t.TgZ(7,"span",5),t._uU(8),t.qZA()(),t.TgZ(9,"p"),t._uU(10,"are you sure you want to delete this item ? if you are sure just click on delete it"),t.qZA()(),t.TgZ(11,"div",6)(12,"button",7),t._uU(13,"Delete"),t.qZA()()()),2&o&&(t.xp6(8),t.hij(" ",l.data.title,""),t.xp6(4),t.Q6J("mat-dialog-close",l.data))},dependencies:[r.ZT],styles:[".auth-card[_ngcontent-%COMP%]{border-radius:0!important}button[_ngcontent-%COMP%]:hover{color:#fff!important;background-color:red!important}"]})}return n})()}}]);