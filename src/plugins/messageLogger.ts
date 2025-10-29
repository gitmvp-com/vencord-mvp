import { Plugin } from '@/api/Plugins';

export const MessageLogger: Plugin = {
  name: 'Message Logger',
  description: 'Logs deleted and edited messages for your viewing',
  authors: [{ name: 'Vencord Team' }],
  
  start() {
    console.log('[Message Logger] Started - Logging deleted/edited messages');
  },
  
  stop() {
    console.log('[Message Logger] Stopped');
  },
  
  settings: {
    logDeletes: {
      type: 'boolean',
      description: 'Log deleted messages',
      default: true,
    },
    logEdits: {
      type: 'boolean',
      description: 'Log edited messages',
      default: true,
    },
    ignoreBots: {
      type: 'boolean',
      description: 'Ignore bot messages',
      default: true,
    },
  },
};