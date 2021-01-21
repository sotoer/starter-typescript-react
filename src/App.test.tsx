import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should display correct title', async () => {
    const { findByTestId } = renderComponent();
    const title = await findByTestId('title');
    expect(title).toHaveTextContent('Starter - Typescript React');
  })

  function renderComponent() {
    return render(<App />)
  }
});

