import Card from './Card.jsx';

export default {
  title: 'Components/Card',
  component: Card
};

export const Basic = {
  render: () => (
    <Card title="Task Card">
      <p>Manage your tasks efficiently with our clean interface.</p>
    </Card>
  )
};

export const StatsCard = {
  render: () => (
    <Card title="Total Tasks" className="max-w-sm">
      <div className="text-3xl font-bold text-blue-600">24</div>
      <p className="text-sm text-gray-600 mt-1">Completed this week</p>
    </Card>
  )
};
