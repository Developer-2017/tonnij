import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
// import { getByKey } from "src/app/shared/directives/loading/loading.selector";
// import { ScheduleADemoComponent } from "../schedule-a-demo/schedule-a-demo.component";
import * as fromStore from "../../store";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  isLoading!: Observable<boolean>;
  loginForm!: FormGroup;
  isPasswordVisible: boolean = false;
  constructor(
    private dialog: MatDialog,
    public fb: FormBuilder,
    public router: Router,
    private store: Store<fromStore.UserProfileState>
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.isLoading = this.store.select(
      getByKey(fromStore.UserLoginActionTypes.USER_LOGIN)
    );
  }

  initForm() {
    const {email} = window.history.state;
    this.loginForm = this.fb.group({
      userName: [email, [Validators.required]],
      password: [null, [Validators.required,Validators.minLength(8),Validators.maxLength(16)]],
      rememberMe: [true, [Validators.required]],
    });
  }
  // bookDemo()
  // {
  //   this.dialog.open(ScheduleADemoComponent)
  // }
  submit() {
    if (this.loginForm.valid) {
      this.store.dispatch(
        new fromStore.Login(
          {
            user_login_elm: this.loginForm.value["userName"],
            user_pass_elm: this.loginForm.value["password"],
            device_id: "1650ceb1126b9973",
            player_id: "7ade37ae-ef81-419b-971a-73a26b00c8f6",
          },
          this.loginForm.value["rememberMe"]
        )
      );
    }
  }
}
