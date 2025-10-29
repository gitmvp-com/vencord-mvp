# Vencord MVP - Plugin Manager Demo

A simplified MVP version of [Vencord](https://github.com/Vendicated/Vencord) showcasing the core plugin management system.

## Features

- 🔌 Plugin System - Enable/disable plugins dynamically
- ⚙️ Settings Management - Each plugin can have its own settings
- 💾 Persistence - Settings are saved to localStorage
- 🎨 Clean UI - React-based interface similar to Vencord
- 📦 Example Plugins - Pre-built plugins to demonstrate functionality

## What is this?

This is a minimal viable product (MVP) demonstrating the core concepts of Vencord's plugin architecture:

- **Plugin Registration**: Plugins are defined with metadata and functionality
- **Toggle System**: Enable/disable plugins on the fly
- **Settings Storage**: Persistent plugin configuration
- **React Components**: Modern UI built with React

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the plugin manager.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── api/          # Core API (Settings, Plugins)
├── components/   # React UI components
├── plugins/      # Example plugins
├── utils/        # Utility functions
└── main.tsx      # Application entry
```

## Creating a Plugin

Plugins are simple objects with metadata and optional settings:

```typescript
import { Plugin } from '@api/Plugins';

export const MyPlugin: Plugin = {
  name: 'My Cool Plugin',
  description: 'Does something cool',
  authors: [{ name: 'Your Name' }],
  
  start() {
    console.log('Plugin started!');
  },
  
  stop() {
    console.log('Plugin stopped!');
  },
  
  settings: {
    mySetting: {
      type: 'boolean',
      description: 'Enable cool feature',
      default: true
    }
  }
};
```

## Differences from Full Vencord

This MVP focuses on the plugin system core:

- ✅ Plugin enable/disable
- ✅ Settings management
- ✅ Persistent storage
- ❌ No Discord integration
- ❌ No webpack patching
- ❌ No theme support
- ❌ No API patching
- ❌ No update system

## License

MIT License - This is an educational MVP inspired by Vencord

Original Vencord: GPL-3.0-or-later © Vendicated and contributors