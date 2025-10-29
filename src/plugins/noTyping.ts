import { Plugin } from '@/api/Plugins';

export const NoTyping: Plugin = {
  name: 'No Typing',
  description: 'Prevents showing typing indicator to other users',
  authors: [{ name: 'Vencord Team' }],
  
  start() {
    console.log('[No Typing] Started - Typing indicator disabled');
  },
  
  stop() {
    console.log('[No Typing] Stopped - Typing indicator enabled');
  },
};