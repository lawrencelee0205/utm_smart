import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ResultSlipPage } from './result-slip.page';

describe('ResultSlipPage', () => {
  let component: ResultSlipPage;
  let fixture: ComponentFixture<ResultSlipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultSlipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ResultSlipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
