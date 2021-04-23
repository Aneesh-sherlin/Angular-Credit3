import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared-modules/material-flex.module';
import { TopNavigationBarComponent } from './shared-components/top-navigation-bar/top-navigation-bar.component';
import { CategoryBarComponent } from './shared-components/category-bar/category-bar.component';
import { HomeComponent } from './public-components/home/home.component';
import { LoginComponent } from './shared-components/login/login.component';
import { RegisterComponent } from './shared-components/register/register.component';
import { FooterComponent } from './shared-components/footer/footer.component';
import { DirectoryComponent } from './public-components/directory/directory.component';

import { SellerProfileComponent } from './public-components/seller-profile/seller-profile.component';
import { SellerModule } from './private-user-components/seller/seller.module';
import { BuyerModule } from './private-user-components/buyer/buyer.module';

import { SearchComponent } from './public-components/search/search.component';
import { ProductDetailComponent } from './public-components/product-detail/product-detail.component';
import { SharedComponentsModule } from './shared-modules/shared-components.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptorComponent } from './shared-components/loader-interceptor/loader-interceptor.component';
import { LoaderService } from './services/shared-services/loader/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';
import { OngoingProjectsComponent } from './public-components/ongoing-projects/ongoing-projects.component';
import { BuidingProjectsComponent } from './public-components/ongoing-projects/buiding-projects/buiding-projects.component';
import { ProjectDetailsComponent } from './public-components/ongoing-projects/buiding-projects/project-details/project-details.component';
import { LowerCasePipe } from '@angular/common';
import { AdminComponent } from './private-user-components/admin/admin.component';

import { AdminModule } from './private-user-components/admin/admin.module';
import { AdminCreateProductComponent } from './private-user-components/admin/admin-create-product/admin-create-product.component';
import { AdminCreateOngoingProjectsComponent } from './private-user-components/admin/admin-create-ongoing-projects/admin-create-ongoing-projects.component';
import { AdminManageProductComponent } from './private-user-components/admin/admin-manage-product/admin-manage-product.component';
import { AdminManageOngoingProjectsComponent } from './private-user-components/admin/admin-manage-ongoing-projects/admin-manage-ongoing-projects.component';
import { EmailNotificationComponent } from './shared-components/email-notification/email-notification.component';
import { ProjectsService } from './services/shared-services/projects/projects.service';
import { AboutComponent } from './public-components/about/about.component';
import { ContactComponent } from './public-components/contact/contact.component';
import { contactUsComponent } from './public-components/contactUs/contactUs.component';
import { Terms } from './public-components/terms/terms.component';
import { PrivacyPolicy } from './public-components/privacyPolicy/privacyPolicy.component';
import { CareersComponent } from './public-components/careers/careers.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PaginationService } from './services/shared-services/pagination/pagination.service';
import { NoPageFoundComponent } from './public-components/no-page-found/no-page-found.component';
import { ChatWindowComponent } from './shared-components/chat-window/chat-window.component';
import { ChatListComponent } from './shared-components/chat-list/chat-list.component';
import { ChatNotificationsComponent } from './shared-components/chat-notifications/chat-notifications.component';
import { ForgotpasswordComponent } from './shared-components/forgotpassword/forgotpassword.component';
import { TokenComponent } from './shared-components/token/token.component';
import { ResetpasswordComponent } from './shared-components/resetpassword/resetpassword.component';
import { EmailVerificationRegisterComponent } from './shared-components/email-verification-register/email-verification-register.component';

import { environment } from '../environments/environment'
@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    SellerModule,
    BuyerModule,
    SharedComponentsModule,
    AdminModule,
    CarouselModule,
  ],
  exports: [
    MaterialModule,
    HttpClientModule,
    SharedComponentsModule,
    TopNavigationBarComponent,
    CategoryBarComponent,
    FooterComponent,
    LoaderInterceptorComponent
  ],
  declarations: [
    AppComponent,
    TopNavigationBarComponent,
    CategoryBarComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    DirectoryComponent,
    SellerProfileComponent,
    SearchComponent,
    ProductDetailComponent,
    LoaderInterceptorComponent,
    OngoingProjectsComponent,
    BuidingProjectsComponent,
    ProjectDetailsComponent,
    AdminComponent,
    AdminCreateProductComponent,
    AdminCreateOngoingProjectsComponent,
    AdminManageProductComponent,
    AdminManageOngoingProjectsComponent,
    EmailNotificationComponent,
    AboutComponent,
    contactUsComponent,
    Terms,
    PrivacyPolicy,
    ContactComponent,
    CareersComponent,
    NoPageFoundComponent,
    ChatWindowComponent,
    ChatListComponent,
    ChatNotificationsComponent,
    ForgotpasswordComponent,
    TokenComponent,
    ResetpasswordComponent,
    EmailVerificationRegisterComponent,

  ],
  providers: [
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    LowerCasePipe,
    ProjectsService,
    PaginationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
