import { render, screen } from '@testing-library/react';
import Spinner from '.';

describe('<Spinner/>', () => {
  it('must show if the spinner exists ', () => {
    render(<Spinner />);

    const spinner = screen.getByTestId('spinner');
    expect(spinner).toHaveClass('spinner');
  });
});
