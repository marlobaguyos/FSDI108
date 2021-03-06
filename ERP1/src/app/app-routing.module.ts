import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { ConverterComponent } from './components/converter/converter.component';
import { LoginComponent } from './components/login/login.component';

//register the routes (paths) for your pages
const routes: Routes = [
    {path: '', component: MainPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'converter', component: ConverterComponent},
    {path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
