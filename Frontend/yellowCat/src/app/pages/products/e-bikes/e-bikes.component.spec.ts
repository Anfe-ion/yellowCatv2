import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EBikesComponent } from './e-bikes.component';

describe('EBikesComponent', () => {
  let component: EBikesComponent;
  let fixture: ComponentFixture<EBikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EBikesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
