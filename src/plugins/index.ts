import { Plugins } from '@/api/Plugins';
import { BetterTimestamps } from './betterTimestamps';
import { NoTyping } from './noTyping';
import { MessageLogger } from './messageLogger';
import { ViewRaw } from './viewRaw';
import { QuickReply } from './quickReply';

// Register all plugins
Plugins.register('betterTimestamps', BetterTimestamps);
Plugins.register('noTyping', NoTyping);
Plugins.register('messageLogger', MessageLogger);
Plugins.register('viewRaw', ViewRaw);
Plugins.register('quickReply', QuickReply);

export { Plugins };