import { Routes, RouterModule } from '@angular/router'
import { InicioComponent } from './templates/inicio.component';
import { NosotrosComponent } from './templates/nosotros.component';
import { ContactenosComponent } from './templates/contactenos.component';


const APP_ROUTES: Routes=[
    { path:'inicio',component: InicioComponent },
    { path:'nosotros',component: NosotrosComponent },
    { path:'contactanos',component: ContactenosComponent }
];
export const routing=RouterModule.forRoot(APP_ROUTES);
