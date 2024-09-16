import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GravelComponent } from './gravel.component';

describe('GravelComponent', () => {
  let component: GravelComponent;
  let fixture: ComponentFixture<GravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GravelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
