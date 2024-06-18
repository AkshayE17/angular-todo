import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportentTaskComponent } from './importent-task.component';

describe('ImportentTaskComponent', () => {
  let component: ImportentTaskComponent;
  let fixture: ComponentFixture<ImportentTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImportentTaskComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImportentTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
