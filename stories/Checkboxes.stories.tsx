/* eslint-disable import/no-extraneous-dependencies */
import React, { MouseEvent } from 'react';
import { storiesOf } from '@storybook/react';
import centered from '@storybook/addon-centered/react';
import { Checkboxes, Form, Fieldset, Hint, Button, Input } from '../src';

const stories = storiesOf('Checkboxes', module);

stories
  .addDecorator(centered)
  .add('Standard', () => (
    <Fieldset aria-describedby="nationality-hint">
      <Fieldset.Legend>What is your nationality?</Fieldset.Legend>
      <Checkboxes
        name="nationality"
        id="nationality"
        hint="If you have more than 1 nationality, select all options that are relevant to you."
      >
        <Checkboxes.Box value="british">British</Checkboxes.Box>
        <Checkboxes.Box value="irish">Irish</Checkboxes.Box>
        <Checkboxes.Box value="other">Citizen of another country</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  ))
  .add('With Hint Text', () => (
    <Fieldset>
      <Fieldset.Legend isPageHeading>How do you want to sign in?</Fieldset.Legend>
      <Checkboxes>
        <Checkboxes.Box
          id="government-gateway"
          name="gateway"
          type="checkbox"
          value="gov-gateway"
          hint="You’ll have a user ID if you’ve registered for Self Assessment or filed a tax return online before."
        >
          Sign in with Government Gateway
        </Checkboxes.Box>
        <Checkboxes.Box
          id="nhsuk-login"
          name="verify"
          value="nhsuk-verify"
          hint="You’ll have an account if you’ve already proved your identity with either Barclays, CitizenSafe, Digidentity, Experian, Post Office, Royal Mail or SecureIdentity."
        >
          Sign in with NHS.UK login
        </Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  ))
  .add('With Disabled Item', () => (
    <Checkboxes id="colours" name="colours">
      <Checkboxes.Box value="red">Red</Checkboxes.Box>
      <Checkboxes.Box value="green">Green</Checkboxes.Box>
      <Checkboxes.Box value="red" disabled>
        Blue
      </Checkboxes.Box>
    </Checkboxes>
  ))
  .add('With Legend as Page Heading', () => (
    <Fieldset aria-describedby="waste-hint">
      <Fieldset.Legend isPageHeading>
        Which types of waste do you transport regularly?
      </Fieldset.Legend>
      <Checkboxes id="waste" name="waste" hint="Select all that apply">
        <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
        <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
        <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  ))
  .add('With Error (Boolean)', () => {
    const [errorToggle, setErrorToggle] = React.useState(true);
    return (
      <>
        <Fieldset aria-describedby="waste-hint">
          <Fieldset.Legend isPageHeading>
            Which types of waste do you transport regularly?
          </Fieldset.Legend>
          <Checkboxes error={errorToggle} id="waste" name="waste" hint="Select all that apply">
            <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
            <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
            <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          </Checkboxes>
        </Fieldset>
        <Button
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setErrorToggle(!errorToggle);
          }}
        >
          Toggle Error
        </Button>
      </>
    );
  })
  .add('With Error (String)', () => {
    const [error, setError] = React.useState('Please select an option');
    return (
      <>
        <Fieldset aria-describedby="waste-hint">
          <Fieldset.Legend isPageHeading>
            Which types of waste do you transport regularly?
          </Fieldset.Legend>
          <Checkboxes id="waste" name="waste" hint="Select all that apply" error={error}>
            <Checkboxes.Box value="animal">Waste from animal carcasses</Checkboxes.Box>
            <Checkboxes.Box value="mines">Waste from mines or quarries</Checkboxes.Box>
            <Checkboxes.Box value="farm">Farm or agricultural waste</Checkboxes.Box>
          </Checkboxes>
        </Fieldset>
        <Input value={error} onChange={e => setError(e.currentTarget.value)} />
      </>
    );
  })
  .add('With Conditional Content', () => (
    <Fieldset aria-describedby="waste-hint">
      <Fieldset.Legend isPageHeading>
        Which types of waste do you transport regularly?
      </Fieldset.Legend>
      <Hint id="waste-hint">Select all that apply</Hint>
      <Checkboxes id="waste" name="waste">
        <Checkboxes.Box conditional={<p>This includes rocks and earth.</p>} value="mines">
          Waste from mines or quarries
        </Checkboxes.Box>
      </Checkboxes>
    </Fieldset>
  ));
    