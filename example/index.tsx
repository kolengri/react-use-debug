import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useDebug } from '../src/useDebug';

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const info = useDebug(App.displayName || App.name, { count });

  return (
    <div>
      {count}
      <button onClick={() => setCount((s) => s + 1)}>Click!</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
