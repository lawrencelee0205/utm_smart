import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AcademicStaffPage } from './academic-staff.page';

describe('AcademicStaffPage', () => {
  let component: AcademicStaffPage;
  let fixture: ComponentFixture<AcademicStaffPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicStaffPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AcademicStaffPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
