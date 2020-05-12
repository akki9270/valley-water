import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  @ViewChild('sect') sect: ElementRef<HTMLElement>;

  ngOnInit() {
    this.setbackgroundImageHeight();   
  }

  setbackgroundImageHeight() {
    console.log($(this.sect.nativeElement).offset().top);
    let height = window.innerHeight - $(this.sect.nativeElement).offset().top;
    this.sect.nativeElement.style.height = height + 'px';
    console.log('height ', height)
  }
}
