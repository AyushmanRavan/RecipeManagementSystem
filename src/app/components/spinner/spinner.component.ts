import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() stroke: number = 4;
  @Input() diameter: number = 36;
  @Input() isLoading: boolean = false;
  @Input() color: string = 'primary';
  @Input() mode: string = 'indeterminate';
  @Input() value: number = 36;
  @Input() message: string = "loading...";
  constructor() { }

  ngOnInit(): void {
  }

}
