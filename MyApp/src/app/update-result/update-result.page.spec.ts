import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { IonicModule } from "@ionic/angular";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpdateResultPage } from "./update-result.page";

describe("UpdateResultPage", () => {
  let component: UpdateResultPage;
  let fixture: ComponentFixture<UpdateResultPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateResultPage],
      imports: [IonicModule.forRoot(), ReactiveFormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateResultPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
