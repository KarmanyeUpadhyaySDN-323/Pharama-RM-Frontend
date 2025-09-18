import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'react-to-angular';
  activeModule = 'overview';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        const url = event.url;
        if (url === '/' || url === '/overview') {
          this.activeModule = 'overview';
        } else {
          this.activeModule = url.substring(1);
        }
      });
  }

  onModuleChange(moduleId: string): void {
    this.activeModule = moduleId;
  }
}
