import { Routes } from '@angular/router';
import { Contato } from './contato/contato';
import { Vitrine } from './vitrine/vitrine';
import { Cadastro } from './cadastro/cadastro';
import { Login } from './login/login';

export const routes: Routes = [
    {path:"cadastro", component:Cadastro},
    {path:"contato", component:Contato},
    {path:"vitrine", component:Vitrine},
    {path:"login", component:Login},
    {path:"", component:Vitrine}
];
