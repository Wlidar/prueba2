import { Component } from "@angular/core";

@Component({
  selector: 'app-image-formatter-cell',
  template: `<img border="0" style="max-width:100%;max-height:100%;" height="auto" src=\"{{ params.value }}\">` })

export class TableImageComponent {
  params: any;
  agInit(params: any){
    this.params = params;
  }
}
