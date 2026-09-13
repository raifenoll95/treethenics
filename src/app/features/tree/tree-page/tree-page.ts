import { Component } from '@angular/core';
import { TreeCanvas } from '../tree-canvas/tree-canvas';

@Component({
  selector: 'app-tree-page',
  imports: [TreeCanvas],
  templateUrl: './tree-page.html',
  styleUrl: './tree-page.css',
})
export class TreePage {}
