import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table1RawComponent } from './table1-raw.component';

describe('Table1RawComponent', () => {
  let component: Table1RawComponent;
  let fixture: ComponentFixture<Table1RawComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table1RawComponent]
    });
    fixture = TestBed.createComponent(Table1RawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
