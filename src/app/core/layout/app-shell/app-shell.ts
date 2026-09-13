import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { MobileHeader } from '../mobile-header/mobile-header';

@Component({
  selector: 'app-shell',
  imports: [RouterOutlet, Sidebar, MobileHeader],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.css',
})
export class AppShell {}
