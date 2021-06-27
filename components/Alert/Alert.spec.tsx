import * as React from 'react';
import { Alert, Props } from './Alert';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';

describe('Alert', () => {
  it('Show title only if provided', async () => {
    const props: Props = {
      status: 'info',
      children: 'Message',
    };
    const { debug } = render(<Alert {...props} />);
    // const element = screen.getByText('Alert Message');
    // debug();
    // ex
  });

  it('show fully Alert box', () => {});
});
