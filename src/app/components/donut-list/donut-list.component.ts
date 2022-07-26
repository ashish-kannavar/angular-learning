import { Component, OnInit } from '@angular/core';
import { DonutListItem, DonutResultToListItem} from 'src/app/interfaces/donut-list-item';
import { DonutApiService } from 'src/app/services/donut-api.service';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.css']
})
export class DonutListComponent implements OnInit {

  results: DonutListItem[] = [];

  constructor(private donutApiService: DonutApiService) { }

  ngOnInit(): void {
    this.donutApiService.fetchAllDonut().subscribe(data => {
            this.results = data.results.map(DonutResultToListItem);
    });
  }

}
