import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  // selectedTab: string = "recipes";

  // onChangeSelectedTab(newSelectedTab: string) {
  //   this.selectedTab = newSelectedTab;
  // }
  loadedFeature = "recipe";
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyD_Hv77Vmkc18Yo1lshGrGZNzbwf02B6Cg",
      authDomain: "ng-http-a95a7.firebaseio.com"
    });
  }
  title = "shopping-recipes";
}
