import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExampleComponent } from './pipes-example.component';
import { RouterTestingModule } from '@angular/router/testing';

xdescribe('PipesExampleComponent', () => {
  let component: PipesExampleComponent;
  let fixture: ComponentFixture<PipesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ PipesExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
