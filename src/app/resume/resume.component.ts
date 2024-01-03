import {Component, ViewEncapsulation} from '@angular/core';
import {CommonModule} from "@angular/common";
interface Project {
  companyName: string;
  roleName: string;
  timePeriod: string;
  workPoints: string[];
}
@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.sass',
  encapsulation: ViewEncapsulation.None  // Disable view encapsulation
})
export class ResumeComponent {
  projects: Project[] = [
    {
      companyName: 'Prudential Financial, NY',
      roleName: 'Sr.Full Stack Java Developer',
      timePeriod: ' Jun 2022 - Present',
      workPoints: ['Prudential Financial is a distinguished financial corporation, and I am a valued member of the Card Services team, contributing as a Full Stack Java Developer enhancing the current software.']
    },
    {
      companyName: 'Abbott Laboratories, IL',
      roleName: 'Sr.Full Stack Java Developer',
      timePeriod: 'Sep 2021 - May 2022',
      workPoints: ['Abbott Laboratories is a prominent healthcare provider renowned for its diverse range of healthcare-related machinery. As a Full Stack Java Developer, I developed a comprehensive software designed to monitor machine status, health, and error diagnostics.']
    },
  ];
}
