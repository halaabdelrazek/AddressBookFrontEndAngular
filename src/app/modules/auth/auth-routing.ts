import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginRegisterAuthGuardService } from "../core/login-register-guard/login-register-auth-guard.service";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { SignUpComponent } from "./sign-up/sign-up.component";



const routes:Routes=[{
  path:'',component:AuthComponent
  ,children:[ 
      {path:"register",component:SignUpComponent}
  ,{path:'login',component:LoginComponent}
],canActivate:[LoginRegisterAuthGuardService]}]

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class AuthRouting{}
