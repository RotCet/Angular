import { Routes, RouterModule } from '@angular/router'

import { InicioComponent } from './inicio.component'
import { NosotrosComponent } from './nosotros.component'
import { ContactenosComponent } from './contactenos.component'
import { EmpleadoComponent } from './empleado.component'

const APP_ROUTES: Routes = [
  { path:'inicio', component: InicioComponent },
  { path:'nosotros', component: NosotrosComponent },
  { path:'contactenos', component: ContactenosComponent },
  { path:'empleado/:id', component: EmpleadoComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);