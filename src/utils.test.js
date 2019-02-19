import { add } from './utils';

it('should add 1 + 1', () => {
  const result = add(1, 1);

  expect(result).toMatchSnapshot();
});
