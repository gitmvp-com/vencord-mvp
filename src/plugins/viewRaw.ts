import { Plugin } from '@/api/Plugins';

export const ViewRaw: Plugin = {
  name: 'View Raw',
  description: 'Copy and view the raw content/data of any message',
  authors: [{ name: 'Vencord Team' }],
  
  start() {
    console.log('[View Raw] Started - Right-click messages to view raw data');
  },
  
  stop() {
    console.log('[View Raw] Stopped');
  },
};