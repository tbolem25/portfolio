import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
interface Project {
  companyName: string;
  timePeriod: string;
  workPoints: string[];
}
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.sass'
})
export class ResumeComponent {
  projects: Project[] = [
    {
      companyName: 'Company 1',
      timePeriod: '2022-2023',
      workPoints: ['Work point 1', 'Work point 2']
    },
    {
      companyName: 'Company 2',
      timePeriod: '2024-2026',
      workPoints: ['Work point 1', 'Work point 2']
    },
    // ... add more projects here
  ];
}
