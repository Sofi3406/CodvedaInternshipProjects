import Button from './Button.jsx';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'outline']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
};

export const Primary = {
  args: {
    children: 'Primary Button',
    variant: 'primary',
    size: 'md'
  }
};

export const Secondary = {
  args: { children: 'Secondary', variant: 'secondary' }
};

export const Danger = {
  args: { children: 'Delete', variant: 'danger' }
};

export const Sizes = {
  render: (args) => (
    <div className="flex gap-2 p-4">
      <Button size="sm" {...args}>Small</Button>
      <Button size="md" {...args}>Medium</Button>
      <Button size="lg" {...args}>Large</Button>
    </div>
  )
};

export const Loading = {
  args: { children: 'Loading...', loading: true }
};
