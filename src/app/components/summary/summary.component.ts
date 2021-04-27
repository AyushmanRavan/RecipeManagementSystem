import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectionService } from '../selection/selection.service';

@Component({
  selector: 'summary-highlight',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
  @Input() type: string;
  @Input() machineID: number;
  @Input() entity: string;

  @Input() data: {};
  @Input() totalsecond: string;
  @Input() color: string = "#3e6ceb";

  @Output() cardClick = new EventEmitter();
  blocks: any[] = [];
  summary;
  breakpoint;
  constructor(private selection: SelectionService) { }

  ngOnInit() {
    if (this.entity.toUpperCase() === "ENERGY") {
      this.render(this.data);
    } else {
      this.selection.getSummary(this.machineID).subscribe(data => {
        this.render(data);
        console.log("summaryXXXX", data)
      });
    }
  }

  goTo(text: string) {
    this.cardClick.emit(text);
  }

  private render(data) {

    if (this.type == "card") {

      this.summary = data;
    } else {
      this.blocks = [];
      let { alarm_count } = data;
      switch (this.entity) {
        case "production":
          const {
            total_good_production, 
            production_kgs,
            total_reject_production,
            // perdayProductionAverage
          } = data;
          this.blocks.push(
            { label: `Production`, value: `${this.format(total_good_production)} Pkts` },
            { label: `Production`, value: `${this.format(production_kgs)} Kg` },
            { label: `Rejected Products`, value: `${this.format(total_reject_production)} pkts` },
            // { label: `Avg. / Hour`, value: `${this.format(perdayProductionAverage)} pkts` }
          );
          break;

        case "alarm":

          this.blocks.push(
            { label: `Total Alarms`, value: `${this.format(alarm_count)}` }
          );
          break;

        case "alarm-strip":

          this.blocks.push(
            { label: `Total Alarms`, value: `${this.format(alarm_count)}` }
          );
          this.blocks.push(
            { label: `Total Time`, value: this.totalsecond }
          );

          break;

        case "machine":
          const {
            running_hours,
            stop_hours,
            idle_hours,
            number_of_stopages,
            // status
          } = data;
          this.blocks.push(
            { label: `Running`, value: `${running_hours}` },
            { label: `Idle`, value: `${idle_hours}` },
            { label: `Stopped`, value: `${stop_hours}` },
            { label: `Number of Stoppage`, value: `${this.format(number_of_stopages)}` }
          );
          break;

        case "energy":
          const { total_kwh } = data;
          this.blocks.push(
            { label: `Total Energy Consumed`, value: `${this.format(total_kwh)}  kWh` }
          );
          break;
      }
    }
  }




  private format(number: string) {
    return parseInt(number).toLocaleString("en");
  }
}
