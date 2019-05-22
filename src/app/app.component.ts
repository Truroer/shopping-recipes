import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { ENV } from "../../env";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  constructor(private env: ENV) {}
  // selectedTab: string = "recipes";

  // onChangeSelectedTab(newSelectedTab: string) {
  //   this.selectedTab = newSelectedTab;
  // }
  loadedFeature = "recipe";
  ngOnInit() {
    firebase.initializeApp({
      apiKey: this.env.API_KEY,
      authDomain: this.env.AUTH_DOMAIN
    });
  }
  title = "shopping-recipes";
}
