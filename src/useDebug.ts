import { useEffect, useRef } from 'react';
import { useRenderCount } from './useRenderCount';

export const useDebug = <Props extends Record<string, any> = any>(
  componentName: string,
  props: Props
) => {
  const componentDisplayName = `<${componentName} />`;

  const renderCount = useRenderCount();

  const changedProps = useRef<Record<string, { previous: any; current: any }>>(
    {}
  );
  const previousProps = useRef<Props>(props);
  const lastRenderTimestamp = useRef(Date.now());

  const propKeys = Object.keys({ ...props, ...previousProps });

  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    };
  }, {});

  const info = {
    renderCount,
    changedProps: changedProps.current,
    timeSinceLastRender: Date.now() - lastRenderTimestamp.current,
    lastRenderTimestamp: lastRenderTimestamp.current,
  };

  useEffect(() => {
    previousProps.current = props;
    lastRenderTimestamp.current = Date.now();
    // console.log('[debug-info]', componentName, info);

    console.group(
      componentDisplayName,
      `Rerenders: ${info.renderCount}, Last Rerender ${
        info.timeSinceLastRender
      }ms, Last Rerender Time: ${new Date(
        info.lastRenderTimestamp
      ).toISOString()}`
    );
    if (Object.keys(changedProps.current).length > 0) {
      console.group('Changed props');
      console.table(changedProps.current);
      console.groupEnd();
    }
    console.groupEnd();
  });

  return info;
};

export default useDebug;
