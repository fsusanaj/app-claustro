import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductosClientesPage } from './productos-clientes.page';

describe('ProductosClientesPage', () => {
  let component: ProductosClientesPage;
  let fixture: ComponentFixture<ProductosClientesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
