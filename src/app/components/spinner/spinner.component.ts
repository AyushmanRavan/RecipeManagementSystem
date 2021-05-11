import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  // @Input() stroke: number = 4;
  // @Input() diameter: number = 36;

  @Input() color: string = 'primary';
  @Input() mode: string = 'indeterminate';
  @Input() value: number = 50;

  @Input() message: string;
  constructor() { }

  ngOnInit(): void {
  }

}
