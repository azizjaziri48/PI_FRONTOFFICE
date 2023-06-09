import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';

import { SharedModule } from '../../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { AccountService } from 'src/app/services/account.service';

@NgModule({
  declarations: [BlogComponent, ContentComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    NgxPaginationModule,
    NgbModule,
    SharedModule
  ]
})
export class BlogModule { }
