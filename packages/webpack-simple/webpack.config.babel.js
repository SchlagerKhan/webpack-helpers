import './register';

import p from 'path';

import { createApiConfig } from './src';

const entry = p.resolve('./src/index.ts');
const path = p.resolve('./dist');

export default createApiConfig({ entry, path });
