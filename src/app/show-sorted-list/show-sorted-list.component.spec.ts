import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSortedListComponent } from './show-sorted-list.component';

describe('ShowSortedListComponent', () => {
  let component: ShowSortedListComponent;
  let fixture: ComponentFixture<ShowSortedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSortedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowSortedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
