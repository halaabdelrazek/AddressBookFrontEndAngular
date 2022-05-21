import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuardService } from "../core/authGuard/auth-guard.service";
import { HomeComponent } from "./home.component";


const routes:Routes=[{
    path:'',component:HomeComponent,   canActivate:[AuthGuardService]
  }]

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class HomeRouting{}