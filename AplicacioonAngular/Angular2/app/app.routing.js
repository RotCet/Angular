"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var inicio_component_1 = require("./templates/inicio.component");
var nosotros_component_1 = require("./templates/nosotros.component");
var contactenos_component_1 = require("./templates/contactenos.component");
var empleado_component_1 = require("./empleado.component");
var APP_ROUTES = [
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'nosotros', component: nosotros_component_1.NosotrosComponent },
    { path: 'contactanos', component: contactenos_component_1.ContactenosComponent },
    { path: 'empleado/:id', component: empleado_component_1.EmpleadoComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map