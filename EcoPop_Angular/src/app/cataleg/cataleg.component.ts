import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productos } from '../../Models/productos.model';

@Component({
  selector: 'app-cataleg',
  templateUrl: './cataleg.component.html',
  styleUrls: ['./cataleg.component.css']
})
export class CatalegComponent implements OnInit {

  productosArray : Productos[] = [];
  isResultLoaded = false;
  isUpdateFromActive = false;

  nom_producte:string = "";
  imatge:string = "";
  stock: number = 0;
  preu: number = 0;
  descripcio: string = "";
  venut: 0;

constructor(private http: HttpClient) {
  this.getAllXuxemons();
}

getAllXuxemons() {
  this.http.get("http://127.0.0.1:8000/api/producte")
  .subscribe((resultData: any)=>
  {
    this.isResultLoaded = true;
    console.log(resultData);
    this.productosArray = resultData;
  }

  )
}

ngOnInit(): void {
}

}