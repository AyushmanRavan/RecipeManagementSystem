import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./default/default.component";
import { DashboardComponent } from "./dashboard.component";

const routes: Routes = [
  {
    path: "", component: DashboardComponent,
    children: [
      { path: "", component: DefaultComponent },
      { path: "products", loadChildren: () => import('./../product/product.module').then(products => products.ProductModule) },
      { path: 'alarms', loadChildren: () => import('./../alarm/alarm.module').then(alarms => alarms.AlarmModule) },
      { path: "machine-status", loadChildren: () => import('./../machine/machine.module').then(machine => machine.MachineModule) },
      { path: "config", loadChildren: () => import('./../configuration/configuration.module').then(config => config.ConfigurationModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
