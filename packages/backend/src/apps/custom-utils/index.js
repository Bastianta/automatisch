import defineApp from '../../helpers/define-app.js';
import actions from './actions/index.js';
import dynamicData from './dynamic-data/index.js';

export default defineApp({
  name: 'Custom Utils',
  key: 'custom-utils',
  baseUrl: '',
  apiBaseUrl: '',
  iconUrl: '{BASE_URL}/apps/custom-utils/assets/favicon.svg',
  authDocUrl: '',
  primaryColor: '#5865F2',
  supportsConnections: false,
  actions,
  dynamicData,
});
