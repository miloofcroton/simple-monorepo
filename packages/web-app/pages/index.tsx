import React from 'react';
import foo from '@namespace/foo';
import Bar from '@namespace/bar';
import { Button, Input } from '@namespace/components';

const Home: React.FC = () => {
  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
      <br />
      <Button />
      <br />
      <Input />
    </div>
  );
};

export default Home;
