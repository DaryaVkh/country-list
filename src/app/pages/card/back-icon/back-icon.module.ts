import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'back-icon',
  templateUrl: './back-icon.module.html',
  styleUrls: ['./back-icon.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackIconComponent {}
