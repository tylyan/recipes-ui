import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { BrowseModule } from './browse/browse.module'
import { AppRoutingModule } from './routes/app-routing.module'

import { AppComponent } from './app.component'

import { RecipeService } from './service/recipe.service'
import { NavigationComponent } from './navigation/navigation.component'
import { SearchComponent } from './search/search.component'
import { NotFoundComponent } from './not-found/not-found.component'
import { AwsUtil } from './service/aws.service'
import { CognitoUtil } from './service/cognito.service'
import { UserLoginService } from './service/user-login.service'
import { UserRegisterService } from './service/user-register.service'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SearchComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    RecipeService,
    AwsUtil,
    CognitoUtil,
    UserLoginService,
    UserRegisterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
