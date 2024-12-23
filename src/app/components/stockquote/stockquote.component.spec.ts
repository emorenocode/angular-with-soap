import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockquoteComponent } from './stockquote.component';

describe('StockquoteComponent', () => {
  let component: StockquoteComponent;
  let fixture: ComponentFixture<StockquoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockquoteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockquoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
