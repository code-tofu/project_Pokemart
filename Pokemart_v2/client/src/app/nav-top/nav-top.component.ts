import { Component, OnInit, SimpleChanges, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-top',
  templateUrl: './nav-top.component.html',
  styleUrls: ['./nav-top.component.css'],
})
export class NavTopComponent {
  searchQuery: FormControl = new FormControl<string>('', [
    Validators.minLength(3),
  ]);
  router = inject(Router);

  //   ngOnInit(): void {
  //     this.searchQuery.setErrors({ length: false });
  //   }

  search() {
    if (this.searchQuery.invalid || this.searchQuery.value.trim() < 3) {
      this.searchQuery.setErrors({ length: true });
    } else {
      this.router.navigate(['/shop', 'search'], {
        queryParams: { query: this.searchQuery.value.trim() },
      });
    }
  }
}
