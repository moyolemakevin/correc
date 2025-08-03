import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { 
  IonMenu, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonIcon, 
  IonLabel,
  IonMenuToggle
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuToggle
  ]
})
export class SideMenuComponent {
  menuItems = [
    { title: 'Inicio', icon: 'home', path: '/home' },
    // Ruta correcta para el perfil
    { title: 'Perfil', icon: 'person', path: '/perfil' },
    { title: 'Mis Documentos', icon: 'document-text', path: '/mis-documentos' },
    { title: 'Configuración', icon: 'settings', path: '/settings' }
  ];

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}