import { AsyncStorage } from 'react-native'
import Reactotron from 'reactotron-react-native'
export interface ReactotronConfig {
  /** The name of the app. */
  name?: string
  /** The host to connect to: default 'localhost'. */
  host?: string
  /** Should we use async storage */
  useAsyncStorage?: boolean
  /** Should we clear Reactotron when load? */
  clearOnLoad?: boolean
  /** Root state logging. */
  state?: {
    /** log the initial data that we put into the state on startup? */
    initial?: boolean
    /** log snapshot changes. */
    snapshots?: boolean
  }
}

/**
 * The default Reactotron configuration.
 */
export const DEFAULT_REACTOTRON_CONFIG: ReactotronConfig = {
  clearOnLoad: true,
  host: "localhost",
  useAsyncStorage: true,
  state: {
    initial: true,
    snapshots: false,
  },
}
const middleware = (tron) => { /* plugin definition */ };

Reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: "React Native Demo"
  })
  .useReactNative() // add all built-in react native plugins
  .use(middleware) // plus some custom made plugin.
  .connect();
