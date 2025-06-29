import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { SalesOverviewComponent } from './dashboard-components/sales-overview/sales-overview.component';
import { OurVisiterComponent } from './dashboard-components/our-visiter/our-visiter.component';
import { ProfileComponent } from './dashboard-components/profile/profile.component';
import { ContactsComponent } from './dashboard-components/contacts/contacts.component';
import { ActivityTimelineComponent } from './dashboard-components/activity-timeline/activity-timeline.component';
import { BankListComponent } from './dashboard-components/bank-list/bank-list.component';
import { Router } from '@angular/router';
import { LlmService } from '../services/llm.service';
// import { LlmSearchBarComponent } from '../llm-search-bar/llm-search-bar.component';



@Component({
	selector: 'app-dashboard',
	standalone: true,
	imports: [SalesOverviewComponent, OurVisiterComponent, ProfileComponent, ContactsComponent, ActivityTimelineComponent, BankListComponent],
	templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {

	explanation: string = '';

	// @ViewChild(LlmSearchBarComponent) searchBar!: LlmSearchBarComponent;
  

	ngAfterViewInit() { }

	constructor(private router: Router, private llmService: LlmService){}
	logout(): void {
		localStorage.removeItem('token'); // Clear the token
		this.router.navigate(['/login']); // Redirect to login
	  }

	//   handleQuestion(question: string) {
	// 	this.llmService.queryLLM(question).subscribe({
	// 	  next: res => {
	// 		this.explanation = res.explanation;
	// 		this.searchBar.loading = false; // reset loading state
	// 	  },
	// 	  error: err => {
	// 		console.error('LLM error:', err);
	// 		this.explanation = 'An error occurred while querying the assistant.';
	// 		this.searchBar.loading = false; // reset loading state
	// 	  }
	// 	});
	//   }

}
