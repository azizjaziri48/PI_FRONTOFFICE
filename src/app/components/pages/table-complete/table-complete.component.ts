import { Component, OnInit } from '@angular/core';
import {DecimalPipe} from '@angular/common';
import { QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {Country} from './country';
import {CountryService} from './country.service';
import {NgbdSortableHeader, SortEvent} from './sortable.directive';

@Component({
  selector: 'app-table-complete',
  templateUrl: './table-complete.component.html',
  providers: [CountryService, DecimalPipe]
})
export class TableCompleteComponent implements OnInit {
  countries$: Observable<Country[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: CountryService) {
    this.countries$ = service.countries$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }


  ngOnInit(): void {
  }

}
