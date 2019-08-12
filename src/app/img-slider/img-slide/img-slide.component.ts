import {Component, OnInit, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-img-slide',
  templateUrl: './img-slide.component.html',
  styleUrls: ['./img-slide.component.scss']
})
export class ImgSlideComponent implements OnInit {
  @ViewChild('tmpl', {static: false}) template: TemplateRef<any>;

  constructor() {
  }

  ngOnInit() {
  }

}
