import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultSubscription = "advanced";
  formData: {
    email: string;
    subscription: string;
    password: string;
  } = {
    email: "",
    subscription: "",
    password: "",
  };

  submitted = false;

  onSubmit() {
    this.submitted = true;

    this.formData.email = this.signupForm.value.email;
    this.formData.subscription = this.signupForm.value.subscription;
    this.formData.password = this.signupForm.value.password;

    this.signupForm.reset();
  }
}
