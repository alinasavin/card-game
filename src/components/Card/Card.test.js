import { render} from '@testing-library/react';
import Cards from './Card';

test("data exists", () => {
    const { queryByTestId } = render(
      <Cards  />
    );
    expect(queryByTestId("card")).toBeTruthy();
  });