import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadCrampsComponent } from './bread-cramps.component';

describe('BreadCrampsComponent', () => {
  let component: BreadCrampsComponent;
  let fixture: ComponentFixture<BreadCrampsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BreadCrampsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BreadCrampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
