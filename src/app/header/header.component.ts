import { Component, OnInit } from "@angular/core";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "../auth/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor(
    private service: DataStorageService,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  saveData() {
    this.service.saveRecipesToServer();
  }

  fetchData() {
    this.service.fetchRecipesFromServer();
  }

  onLogout() {
    this.authService.logout();
  }
}
