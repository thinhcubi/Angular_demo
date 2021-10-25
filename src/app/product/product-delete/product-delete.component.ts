import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService:ProductService,
             private router: ActivatedRoute,
              private route: Router,
  ) { }

  ngOnInit(): void {
    let id = parseInt(<string>this.router.snapshot.paramMap.get('id'))
    this.productService.deleteProduct(id)
    this.route.navigate(['product/list']);
  }
  confirm(){
    alert('Are you sure?')
  }


}
