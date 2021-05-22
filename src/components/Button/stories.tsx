import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '.';
import ButtonProps from './interface';

export default {
  title: 'Button',
  component: Button,
} as Meta;

export const Primary: Story<ButtonProps> = () => (
  <Button
    type="submit"
    isPrimary
    onClick={() => alert('this is a Primary Button!')}
  >
    Primary
  </Button>
);

export const Basic: Story<ButtonProps> = () => (
  <Button type="submit" onClick={() => alert('this is a Basic Button!')}>
    Basic
  </Button>
);
