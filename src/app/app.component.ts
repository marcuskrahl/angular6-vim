import { Component } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title: number | string = "app"

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public test(): void {
    console.log("this is a test")
    this.test();
    this.title = 42
    test();
    this.title = 42;
  }

  private function3(test: any[]): void {
    this.router.navigate(["."])
  }

  private function2(n: number, t: string): boolean {
    return n == 42 || t == "fourtytwo"
  }
}
