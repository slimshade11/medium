import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CurrentUser } from '@auth/models/current-user.model';
import { Store } from '@ngrx/store';
import { AuthActions, AuthSelectors } from '@store/auth';
import { Observable } from 'rxjs';

const TopBarImports: Array<any> = [
  CommonModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  RouterModule,
  MatRippleModule,
  MatButtonModule,
];

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: TopBarImports,
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBarComponent {
  private readonly store: Store = inject(Store);

  public readonly currentUser$: Observable<CurrentUser | null | undefined> = inject(Store).select(AuthSelectors.currentUser);

  public logout(): void {
    this.store.dispatch(AuthActions.logout());
  }
}
