import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliesComponent } from './supplies.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

describe('SuppliesComponent', () => {
  let component: SuppliesComponent;
  let fixture: ComponentFixture<SuppliesComponent>;
  let material: MaterialModule;
  let flex: FlexLayoutModule;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, FlexLayoutModule],
      declarations: [ SuppliesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should return supplies', () => {

    expect(component.supplies).toEqual(
      [{
        type: 'flowers',
        instock: 8,
        description: 'Inseason Plants of various sizes',
        Price: 13.99,
        featured: false

      },
      {
      type: 'trees',
      instock: 22,
      description: 'Various Trees',
      Price: 50,
      featured: true
    },
    {
      type: 'potting soil',
      instock: 0,
      description: 'Potting soil',
      Price: 5.99,
      featured: false
    }])
  })
});
