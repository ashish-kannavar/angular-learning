import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DonutDetails } from 'src/app/interfaces/donut-api-model';
import { DonutApiService } from 'src/app/services/donut-api.service';
@Component({
  selector: 'app-donut-details',
  templateUrl: './donut-details.component.html',
  styleUrls: ['./donut-details.component.css']
})
export class DonutDetailsComponent implements OnInit {

  donut?: DonutDetails;
  constructor(private donutApiService: DonutApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.donutApiService.fetchDonutById(2).subscribe((data)=>{
    //   console.log(data);
    //   this.donut = data;
    // }

    // )

    this.route.params.subscribe((params) => {
      this.donutApiService
        .fetchDonutById(parseInt(params['id']))
        .subscribe((data) => {
          this.donut = data;
        });
    });

  }


}
