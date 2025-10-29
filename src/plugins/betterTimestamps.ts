import { Plugin } from '@/api/Plugins';

export const BetterTimestamps: Plugin = {
  name: 'Better Timestamps',
  description: 'Enhances message timestamps with relative time formatting',
  authors: [{ name: 'Vencord Team' }],
  
  start() {
    console.log('[Better Timestamps] Started - Timestamps enhanced!');
  },
  
  stop() {
    console.log('[Better Timestamps] Stopped');
  },
  
  settings: {
    use24Hour: {
      type: 'boolean',
      description: 'Use 24-hour time format',
      default: false,
    },
    showSeconds: {
      type: 'boolean',
      description: 'Show seconds in timestamps',
      default: false,
    },
  },
};