import Input from './Input.jsx';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    error: { control: 'text' },
    type: { control: 'text' }
  }
};

export const Default = {
  args: { placeholder: 'Enter email', label: 'Email' }
};

export const Error = {
  args: { 
    placeholder: 'Enter password', 
    label: 'Password',
    error: 'Password must be at least 6 characters'
  }
};

export const Types = {
  render: (args) => (
    <div className="space-y-4 p-8">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="number" placeholder="Age" />
    </div>
  )
};
