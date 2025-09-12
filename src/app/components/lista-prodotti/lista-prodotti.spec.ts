import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProdotti } from './lista-prodotti';

describe('ListaProdotti', () => {
  let component: ListaProdotti;
  let fixture: ComponentFixture<ListaProdotti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProdotti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaProdotti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
