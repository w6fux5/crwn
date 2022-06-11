import React, { useState } from 'react';
import { Form, Button, Popover, OverlayTrigger } from 'react-bootstrap';

const popover = (
  <Popover id="popover-basic">
    <Popover.Body>no ice cream will actually be delivered</Popover.Body>
  </Popover>
);

const label = (
  <OverlayTrigger placement="right" overlay={popover}>
    <span>Terms and conditions</span>
  </OverlayTrigger>
);

export const SummaryForm = () => {
  const [tcChecked, setTcChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group controlId="Terms-and-conditions">
        <Form.Check
          type="checkbox"
          label={label}
          checked={tcChecked}
          onChange={({ target }) => setTcChecked(target.checked)}
        />
      </Form.Group>
      <Button variant="primary" disabled={!tcChecked} type="submit">
        Confirm order
      </Button>
    </Form>
  );
};
