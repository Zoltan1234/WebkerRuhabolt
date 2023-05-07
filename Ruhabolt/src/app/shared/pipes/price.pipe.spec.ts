import { NumToHufPipe } from './price.pipe';

describe('NumToHufPipe', () => {
  it('create an instance', () => {
    const pipe = new NumToHufPipe();
    expect(pipe).toBeTruthy();
  });
});
