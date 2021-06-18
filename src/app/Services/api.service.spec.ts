import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from '../app.module';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        AppModule
      ],
    });
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be return products', () => {
    let result = service.getProducts();
    expect(result).toBeTruthy();    
  });

  it('should be return added cart', () => {
    let obj = { a: 1}
    let result = service.addProductToCart(obj);
    expect(result).toBeTruthy();    
  });

  it('should be return get cart list', () => {
    let result = service.getCartItems();
    expect(result).toBeTruthy();    
  });
});
