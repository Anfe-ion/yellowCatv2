import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';


@Component({
  selector: 'app-e-bikes',
  standalone: true,
  imports: [],
  templateUrl: './e-bikes.component.html',
  styleUrl: './e-bikes.component.scss'
})
export class EBikesComponent implements OnInit {

  dataProducts: any[] = [];

  constructor(private bikesService: ProductsService) { }

  ngOnInit() {
    this.bikesService.getData().subscribe(data=>{
      this.dataProducts = data
      console.log(this.dataProducts)
    })
  }
}