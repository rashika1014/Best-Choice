import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';
import { By } from '@angular/platform-browser';
import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
          HttpClientModule,
          AppModule
        ],
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have call add to cart method', (() => {
    let buttonElement = fixture.debugElement.queryAll(By.css('#addCart'));
    // fixture.detectChanges();
    expect(buttonElement).toBeTruthy();
  }));
});
