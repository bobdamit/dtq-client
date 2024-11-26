import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurdletComponent } from './turdlet.component';

describe('TurdletComponent', () => {
  let component: TurdletComponent;
  let fixture: ComponentFixture<TurdletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurdletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurdletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
