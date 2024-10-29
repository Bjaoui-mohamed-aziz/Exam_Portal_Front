import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit{

categories= [];
constructor(private _category:CategoryService,private toastr : ToastrService){}

ngOnInit(): void {
  this._category.categories().subscribe((data:any)=> {
    this.categories = data;
    console.log(this.categories);
  },
  (error)=>{
    //
    console.log(error);
    this.toastr.success('Quiz added successfully!', 'Success');

  })
    
}

}
