import { FilterRecipeByFirstCharPipe } from './filter-recipe-by-first-char.pipe';

describe('FilterRecipeByFirstCharPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterRecipeByFirstCharPipe();
    expect(pipe).toBeTruthy();
  });
});
