import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ROUTER_CONFIGURATION, ActivatedRoute } from '@angular/router';
import { ProductsService, Product } from 'src/app/rest';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  product: Product

  constructor(private route: ActivatedRoute,
    private productService: ProductsService,
    ) { }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params.id)
                        .subscribe(product => this.product = product)
  }

}
