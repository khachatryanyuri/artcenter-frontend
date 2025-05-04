import * as React from 'react';
import { Admin, Resource, ResourceProps } from 'react-admin';
import { authProvider } from './providers/authProvider';
import { dataProvider } from './providers/dataProvider';

import resources from './components/resourcesConfig';

const App = () => (
  <Admin dataProvider={dataProvider} authProvider={authProvider}>
    {resources.map((resource: React.JSX.IntrinsicAttributes & ResourceProps) => (
      <Resource key={resource.name} {...resource} />
    ))}
  </Admin>
);

export default App;
