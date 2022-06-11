import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SummaryForm } from '../SummaryForm';

test('Initial conditions', () => {
  render(<SummaryForm />);
  // 初始 checkbox 默認沒有選中
  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });
  expect(checkbox).not.toBeChecked();

  // 初始按鈕默認 disable
  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });
  expect(confirmButton).toBeDisabled();
});

test('Checkbox enables button on first click and disables on second click', async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();

  const checkbox = screen.getByRole('checkbox', {
    name: /terms and conditions/i,
  });

  const confirmButton = screen.getByRole('button', {
    name: /confirm order/i,
  });
  // checkbox 選中後，enables button
  await user.click(checkbox);
  expect(confirmButton).toBeEnabled();

  // checkbox 取消後，disables button
  await user.click(checkbox);
  expect(confirmButton).toBeDisabled();
});

test('Popover responds to hover', async () => {
  render(<SummaryForm />);
  const user = userEvent.setup();

  // Popover starts out hidden
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i,
  );
  expect(nullPopover).not.toBeInTheDocument();

  // Popover appears upon mouseover of checkbox label
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // Popover disappears when mouse out
  await user.unhover(termsAndConditions);
  const overlay = screen.queryByText(
    /no ice cream will actually be delivered/i,
  );
  expect(overlay).not.toBeInTheDocument();
});
