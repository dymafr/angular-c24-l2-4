import { COMMA, ENTER } from "@angular/cdk/keycodes";
import { Component } from "@angular/core";
import { MatChipInputEvent } from "@angular/material/chips";

@Component({
  selector: "app-exemple-component",
  templateUrl: "exemple.html",
  styleUrls: ["exemple.scss"]
})
export class ExempleComponent {
  // entrée, virgule
  readonly separateurs: number[] = [ENTER, COMMA];

  vetements = [{ nom: "Chemise" }, { nom: "Veste" }, { nom: "Chapeau" }];

  add(event: MatChipInputEvent): void {
    let input = event.input;
    let value = event.value;

    if (value) {
      this.vetements.push({ nom: value.trim() });
    }

    if (input) {
      input.value = "";
    }
  }

  remove(vetement: any): void {
    this.vetements = this.vetements.filter(v => v != vetement);
  }
}
