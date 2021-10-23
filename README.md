# react-use-debug

## Debug hook for react

[![NPM](https://img.shields.io/npm/v/react-use-debug.svg)](https://www.npmjs.com/package/react-use-debug)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Badges](https://badgen.net/npm/license/react-use-debug)](https://www.npmjs.com/package/react-use-debug)
[![Badges](https://badgen.net/npm/dependents/react-use-debug)](https://www.npmjs.com/package/react-use-debug)
[![Badges](https://badgen.net/npm/types/react-use-debug)](https://www.npmjs.com/package/react-use-debug)
[![Badges](https://badgen.net/github/issues/kolengri/react-use-debug)](https://www.npmjs.com/package/react-use-debug)
[![Badges](https://badgen.net/bundlephobia/min/react-use-debug)](https://bundlephobia.com/result?p=react-use-debug)
[![Badges](https://badgen.net/bundlephobia/minzip/react-use-debug)](https://bundlephobia.com/result?p=react-use-debug)

## Install

```bash
npm install --save react-use-debug
```

```bash
yarn add react-use-debug
```

## Usage

The aim of this package is to end up with annoying practice of component debugging. Hook shows component name with changed props and rerender count to console, and return all needed info as a result

```tsx
// SomeComponent.tsx
import * as React from 'react';
import { useDebug } from 'react-use-debug';

const SomeComponent: React.FC = () => {
  const [count, setCount] = React.useState(0);
  // Use info whatever you want
  const info = useDebug(SomeComponent.displayName || SomeComponent.name, {
    count,
  });

  return (
    <div>
      {count}
      <button onClick={() => setCount((s) => s + 1)}>Click!</button>
    </div>
  );
};
```

![Browser Console](https://github.com/kolengri/react-use-debug/blob/master/docs/images/console.png?raw=true)

## License

MIT © [kolengri](https://github.com/kolengri)
