import { useState } from 'react';
import { Plugin, PluginState } from '@/api/Plugins';
import { Plugins } from '@/plugins';
import './PluginCard.css';

interface PluginCardProps {
  id: string;
  plugin: Plugin;
  state: PluginState;
  onRefresh: () => void;
}

function PluginCard({ id, plugin, state, onRefresh }: PluginCardProps) {
  const [showSettings, setShowSettings] = useState(false);

  const handleToggle = () => {
    Plugins.toggle(id);
    onRefresh();
  };

  const handleSettingChange = (key: string, value: any) => {
    Plugins.updateSetting(id, key, value);
    onRefresh();
  };

  const hasSettings = plugin.settings && Object.keys(plugin.settings).length > 0;

  return (
    <div className={`plugin-card ${state.enabled ? 'enabled' : ''}`}>
      <div className="card-header">
        <div className="plugin-info">
          <h3 className="plugin-name">{plugin.name}</h3>
          <p className="plugin-description">{plugin.description}</p>
          <div className="plugin-authors">
            By {plugin.authors.map(a => a.name).join(', ')}
          </div>
        </div>
        <label className="toggle-switch">
          <input
            type="checkbox"
            checked={state.enabled}
            onChange={handleToggle}
          />
          <span className="slider"></span>
        </label>
      </div>

      {hasSettings && (
        <div className="card-footer">
          <button
            className="settings-toggle"
            onClick={() => setShowSettings(!showSettings)}
          >
            {showSettings ? '▼' : '▶'} Settings
          </button>
          
          {showSettings && (
            <div className="settings-panel">
              {Object.entries(plugin.settings!).map(([key, setting]) => (
                <div key={key} className="setting-item">
                  <div className="setting-info">
                    <label className="setting-label">{key}</label>
                    <span className="setting-description">{setting.description}</span>
                  </div>
                  <div className="setting-control">
                    {setting.type === 'boolean' ? (
                      <input
                        type="checkbox"
                        checked={state.settings[key]}
                        onChange={(e) => handleSettingChange(key, e.target.checked)}
                      />
                    ) : setting.type === 'number' ? (
                      <input
                        type="number"
                        value={state.settings[key]}
                        onChange={(e) => handleSettingChange(key, Number(e.target.value))}
                      />
                    ) : (
                      <input
                        type="text"
                        value={state.settings[key]}
                        onChange={(e) => handleSettingChange(key, e.target.value)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default PluginCard;