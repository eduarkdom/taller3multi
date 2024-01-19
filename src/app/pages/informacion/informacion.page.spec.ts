import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { InformacionPage } from './informacion.page';

describe('InformacionPage', () => {
  let component: InformacionPage;
  let fixture: ComponentFixture<InformacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InformacionPage],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(InformacionPage);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
