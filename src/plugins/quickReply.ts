import { Plugin } from '@/api/Plugins';

export const QuickReply: Plugin = {
  name: 'Quick Reply',
  description: 'Reply to messages with a hotkey',
  authors: [{ name: 'Vencord Team' }],
  
  start() {
    console.log('[Quick Reply] Started - Press R to reply to messages');
  },
  
  stop() {
    console.log('[Quick Reply] Stopped');
  },
  
  settings: {
    hotkey: {
      type: 'string',
      description: 'Hotkey for quick reply',
      default: 'r',
    },
  },
};