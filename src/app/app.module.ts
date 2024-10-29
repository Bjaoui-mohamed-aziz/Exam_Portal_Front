import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { provideToastr, ToastrModule } from 'ngx-toastr';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatCardModule} from '@angular/material/card';
import { MatAutocompleteModule } from '@angular/material/autocomplete';  // Import this
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { HomeComponent } from './pages/home/home.component';
import { authInterceptorProviders } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';  // Import this
import { UserdComponent } from './pages/user/userd/userd.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import {MatSelectModule} from '@angular/material/select';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { SidebaruserComponent } from './pages/user/sidebaruser/sidebaruser.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from "ngx-ui-loader";
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyModalComponent } from './login-modal/login-modal.component';
import { SignupModalComponent } from './signup-modal/signup-modal.component';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';
import { ViewResultsComponent } from './pages/admin/view-results/view-results.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    UserdComponent,
    DashboardComponent,
    ProfileComponent,
    SidebarComponent,
    ProfileComponent,
    WelcomeComponent,
    AddCategoryComponent,
    ViewCategoriesComponent,
    ViewQuizzesComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuizQuestionsComponent,
    AddQuestionComponent,
    SidebaruserComponent,
    LoadQuizComponent,
    InstructionsComponent,
    StartComponent,
    MyModalComponent,
    SignupModalComponent,
    AuthModalComponent,
    UpdateQuestionComponent,
    ViewResultsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    ToastrModule.forRoot(
      {timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,}
    ),
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatSlideToggleModule,
    ReactiveFormsModule, 
    MatSelectModule,
    CKEditorModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,  
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      
    })
  ],
  providers: [authInterceptorProviders, provideToastr()
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
