import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoMaterialModule } from 'src/app/demo-material-module';
import { DataServiceService } from 'src/app/services/data-service.service';
import { Bank } from './bank.model';

@Component({
  selector: 'app-bank-list',
  standalone: true,
  imports: [DemoMaterialModule, NgFor],
  templateUrl: './bank-list.component.html',
  styleUrls: ['./bank-list.component.scss']
})
export class BankListComponent implements OnInit {
  panelOpenState = false;
  step = 0;

  years = Array.from({ length: 2025 - 2010 + 1 }, (_, index) => 2010 + index);
  months = [
    { value: '01', name: 'January' },
    { value: '02', name: 'February' },
    { value: '03', name: 'March' },
    { value: '04', name: 'April' },
    { value: '05', name: 'May' },
    { value: '06', name: 'June' },
    { value: '07', name: 'July' },
    { value: '08', name: 'August' },
    { value: '09', name: 'September' },
    { value: '10', name: 'October' },
    { value: '11', name: 'November' },
    { value: '12', name: 'December' },
  ];

  banks: Bank[] = []; // Array to store banks
  errorMessage: string = ''; // Store error messages

  constructor(private dataService: DataServiceService) {

  }

  ngOnInit(): void {
    this.loadBanks();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    // display new container withtabledata from database
  }

  prevStep() {
    this.step--;
  }
  // Fetch banks from the API
  loadBanks(): void {
    this.dataService.getBanks().subscribe({
      next: (data: Bank[]) => {
        this.banks = data.sort((a, b) =>
          a.bank_name.localeCompare(b.bank_name)
        );
       // Assign the data to the array
      },
      error: (err) => {
        this.handleError(err, 'Failed to load banks');
      },
    });
  }

  private handleError(err: any, fallbackMessage: string): void {
    console.error(err); // Log the error to the console
    this.errorMessage = err.message || fallbackMessage;
  }
}
