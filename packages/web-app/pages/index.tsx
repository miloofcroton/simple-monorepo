import React from 'react';
import foo from '@namespace/foo';
import Bar from '@namespace/bar';
import { Button, Input } from '@namespace/components';

const Home: React.FC = () => {
  const [wordQuery, setWordQuery] = React.useState<string>('');
  const [apiResult, setApiResult] = React.useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setWordQuery(event.target.value);
  };

  const handleClick = (
    _event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ): void => {
    fetch(`http://localhost:8080/api/echo/${wordQuery}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(res => res.text())
      .then(text => setApiResult(text));
  };

  return (
    <div>
      Imported modules from another workspace:
      <pre>{foo}</pre>
      <Bar />
      <br />
      <Input value={wordQuery} handleChange={handleChange} />
      <Button onClick={handleClick} />
      <br />
      Result from api call to another workspace: {apiResult}
    </div>
  );
};

export default Home;
