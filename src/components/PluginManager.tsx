import { useState, useEffect } from 'react';
import { Plugins } from '@/plugins';
import PluginCard from './PluginCard';
import './PluginManager.css';

function PluginManager() {
  const [plugins, setPlugins] = useState(Plugins.getAll());
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState<'all' | 'enabled' | 'disabled'>('all');

  const refreshPlugins = () => {
    setPlugins(Plugins.getAll());
  };

  const filteredPlugins = plugins.filter(({ plugin, state }) => {
    const matchesSearch = plugin.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         plugin.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filter === 'all' || 
                         (filter === 'enabled' && state.enabled) ||
                         (filter === 'disabled' && !state.enabled);
    return matchesSearch && matchesFilter;
  });

  const enabledCount = plugins.filter(p => p.state.enabled).length;

  return (
    <div className="plugin-manager">
      <div className="manager-header">
        <div className="stats">
          <div className="stat">
            <span className="stat-value">{plugins.length}</span>
            <span className="stat-label">Total Plugins</span>
          </div>
          <div className="stat">
            <span className="stat-value enabled">{enabledCount}</span>
            <span className="stat-label">Enabled</span>
          </div>
          <div className="stat">
            <span className="stat-value">{plugins.length - enabledCount}</span>
            <span className="stat-label">Disabled</span>
          </div>
        </div>

        <div className="controls">
          <input
            type="text"
            className="search-input"
            placeholder="Search plugins..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="filter-buttons">
            <button
              className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={`filter-btn ${filter === 'enabled' ? 'active' : ''}`}
              onClick={() => setFilter('enabled')}
            >
              Enabled
            </button>
            <button
              className={`filter-btn ${filter === 'disabled' ? 'active' : ''}`}
              onClick={() => setFilter('disabled')}
            >
              Disabled
            </button>
          </div>
        </div>
      </div>

      <div className="plugin-grid">
        {filteredPlugins.length === 0 ? (
          <div className="no-results">
            <p>No plugins found</p>
          </div>
        ) : (
          filteredPlugins.map(({ id, plugin, state }) => (
            <PluginCard
              key={id}
              id={id}
              plugin={plugin}
              state={state}
              onRefresh={refreshPlugins}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default PluginManager;