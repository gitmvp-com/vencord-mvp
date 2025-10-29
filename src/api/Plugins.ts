export interface PluginAuthor {
  name: string;
}

export interface PluginSetting {
  type: 'string' | 'number' | 'boolean';
  description: string;
  default: string | number | boolean;
}

export interface Plugin {
  name: string;
  description: string;
  authors: PluginAuthor[];
  start?: () => void;
  stop?: () => void;
  settings?: Record<string, PluginSetting>;
}

export interface PluginState {
  enabled: boolean;
  settings: Record<string, any>;
}

class PluginManager {
  private plugins: Map<string, Plugin> = new Map();
  private pluginStates: Map<string, PluginState> = new Map();

  constructor() {
    this.loadStates();
  }

  register(id: string, plugin: Plugin) {
    this.plugins.set(id, plugin);
    
    if (!this.pluginStates.has(id)) {
      const defaultSettings: Record<string, any> = {};
      if (plugin.settings) {
        Object.entries(plugin.settings).forEach(([key, setting]) => {
          defaultSettings[key] = setting.default;
        });
      }
      
      this.pluginStates.set(id, {
        enabled: false,
        settings: defaultSettings,
      });
    }
  }

  getAll(): Array<{ id: string; plugin: Plugin; state: PluginState }> {
    return Array.from(this.plugins.entries()).map(([id, plugin]) => ({
      id,
      plugin,
      state: this.pluginStates.get(id)!,
    }));
  }

  toggle(id: string) {
    const state = this.pluginStates.get(id);
    const plugin = this.plugins.get(id);
    
    if (!state || !plugin) return;

    state.enabled = !state.enabled;

    if (state.enabled && plugin.start) {
      plugin.start();
    } else if (!state.enabled && plugin.stop) {
      plugin.stop();
    }

    this.saveStates();
  }

  updateSetting(pluginId: string, settingKey: string, value: any) {
    const state = this.pluginStates.get(pluginId);
    if (!state) return;

    state.settings[settingKey] = value;
    this.saveStates();
  }

  getSetting(pluginId: string, settingKey: string): any {
    return this.pluginStates.get(pluginId)?.settings[settingKey];
  }

  private saveStates() {
    const states: Record<string, PluginState> = {};
    this.pluginStates.forEach((state, id) => {
      states[id] = state;
    });
    localStorage.setItem('vencord-plugin-states', JSON.stringify(states));
  }

  private loadStates() {
    const stored = localStorage.getItem('vencord-plugin-states');
    if (stored) {
      try {
        const states = JSON.parse(stored);
        Object.entries(states).forEach(([id, state]) => {
          this.pluginStates.set(id, state as PluginState);
        });
      } catch (e) {
        console.error('Failed to load plugin states:', e);
      }
    }
  }
}

export const Plugins = new PluginManager();