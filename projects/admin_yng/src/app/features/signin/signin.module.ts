import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [SigninComponent],
  imports: [CommonModule, SharedModule, SigninRoutingModule]
})
export class SigninModule {}
