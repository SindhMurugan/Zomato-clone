import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ToolBarComponent } from '../tool-bar/tool-bar.component';

@Component({
  selector: 'app-parent',
  imports: [RouterOutlet , ToolBarComponent,RouterModule],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit{
  ngOnInit(): void {
    console.log("parent compoent")
  }

}
