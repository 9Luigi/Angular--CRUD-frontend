import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'ngbd-pagination-advanced',
	standalone: true,
	imports: [NgbPaginationModule],
	templateUrl: '../../assets/pagination-advanced.html',
})

export class NgbdPaginationAdvanced {
	@Input() collectionSize;
	@Input() maxSize;
	@Input() pageSize;
	page: number = 1;
	@Output() pageChangeNotify: EventEmitter<number> = new EventEmitter<number>();
	sendPage(): void {
		this.pageChangeNotify.emit(this.page);
	}
}