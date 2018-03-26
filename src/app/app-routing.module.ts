import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/about',
    pathMatch: 'full'
  },
  {
    path: 'about', component: AboutComponent,
  },
  // {
  //   path: 'master', component: TransportComponent,
  //   children: [
  //     { path: '', component: MasterStaffListComponent },
  //     { path: 'staff', component: MasterStaffComponent },
  //     { path: 'car-carrier', component: MasterCarCarrierComponent },
  //     { path: 'client', component: MasterClientComponent },
  //     { path: 'office-list', component: MasterOfficeListComponent },
  //     { path: 'office', component: MasterOfficeComponent },
  //     { path: 'point', component: MasterPointComponent },
  //     { path: 'subcontractor', component: MasterSubcontractorComponent },
  //     { path: 'user', component: MasterUserComponent },
  //     { path: 'user-registration', component: MasterUserRegistrationComponent },
  //   ]
  // },

  // {
  //   path: 'transport', component: TransportComponent,
  //   children: [
  //     { path: '', component: TransportTopComponent },
  //     { path: 'transport-list-search', component: TransportListSearchComponent },
  //     { path: 'transport-list-bidding', component: TransportListBiddingComponent },
  //     { path: 'transport-list-successful', component: TransportListSuccessfulComponent },
  //     { path: 'transport-conclude-list', component: TransportConcludeListComponent }
  //   ]
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  ,
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
