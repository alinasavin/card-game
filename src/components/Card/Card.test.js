import { render} from '@testing-library/react';
import Card from './Card';

test("data exists", () => {
    const { queryByTestId } = render(
      <Card  />
    );
    expect(queryByTestId("card")).toBeTruthy();
  });