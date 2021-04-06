import React, {useEffect, useState, ReactElement, useCallback} from 'react';

import {InitialState, NavigationContainer} from '@react-navigation/native';
import {AsyncStorage, StatusBar} from 'react-native';

const NAVIGATION_STATE_KEY = `NAVIGATION_STATE_KEY-`;

// export type FontSouce = Parameters<typeof Font.loadAsync>[0];
// const usePromiseAll = (promises: Promise<void | void[]>[], cb: () => void) =>
//   useEffect(() => {
//     (async () => {
//       await Promise.all(promises);
//       cb();
//     })();
//   });

// const useLoadAssets = (assets: number[], fonts: FontSouce): boolean => {
//   const [ready, setReady] = useState(false);
//   usePromiseAll(
//     [Font.loadAsync(fonts), ...assets.map((asset) => Asset.loadAsync(asset))],
//     () => setReady(true),
//   );
//   return ready;
// };

interface LoadAssetsProps {
  //   fonts?: FontSouce;
  assets?: number[];
  children: ReactElement | ReactElement[];
}

const LoadAssets = ({assets, children}: LoadAssetsProps) => {
  const [isNavigationReady, setIsNavigationReady] = useState(!__DEV__);
  const [initialState, setInitialState] = useState<InitialState | undefined>();
  //   const ready = useLoadAssets(assets || [], fonts || {});

  useEffect(() => {
    const restoreState = async () => {
      try {
        const savedStateString = await AsyncStorage.getItem(
          NAVIGATION_STATE_KEY,
        );

        const state = savedStateString
          ? JSON.parse(savedStateString)
          : undefined;
        console.log(`state`, state)
        setInitialState(state);
      } finally {
        setIsNavigationReady(true);
      }
    };

    if (!isNavigationReady) {
      restoreState();
    }
  }, [isNavigationReady]);

  const onStateChange = useCallback(
    (state) =>
      AsyncStorage.setItem(NAVIGATION_STATE_KEY, JSON.stringify(state)),
    [],
  );

  return (
    <NavigationContainer {...{onStateChange, initialState}}>
      <StatusBar />
      {children}
    </NavigationContainer>
  );
};

export default LoadAssets;
