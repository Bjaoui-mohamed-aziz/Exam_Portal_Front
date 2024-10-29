import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  category = {
    title: '',
    description: '',
  };

  constructor(
    private _category: CategoryService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  formSubmit() {
    if (this.category.title.trim() == '' || this.category.title == null) {
      this.toastr.error('Title required', 'Warning');
      return;
    }

    //all done

    this._category.addCategory(this.category).subscribe(
      (data: any) => {
        this.category.title = '';
        this.category.description = '';
        this.toastr.success('Category added successfully!', 'Success');
        this.router.navigate(['/admin/categories']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
