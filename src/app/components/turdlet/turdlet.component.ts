import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turdlet',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './turdlet.component.html',
  styleUrl: './turdlet.component.scss'
})
export class TurdletComponent {

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {

  }
}
