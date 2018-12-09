import { TestBed, inject } from '@angular/core/testing';

import { RecipesResolveService } from './recipes.resolve.service';

describe('Recipes.ResolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecipesResolveService]
    });
  });

  it('should be created', inject([RecipesResolveService], (service: RecipesResolveService) => {
    expect(service).toBeTruthy();
  }));
});
