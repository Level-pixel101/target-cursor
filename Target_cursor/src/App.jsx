import { useState } from 'react';
import TargetCursor from './TargetCursor';
import './App.css';

export default function App() {
  const [settings, setSettings] = useState({
    spinDuration: 2,
    hideDefaultCursor: true,
    parallaxOn: true,
    cursorColor: '#6366f1',
    cursorSize: 20,
  });

  const cursorColors = [
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Rose', value: '#f43f5e' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Violet', value: '#8b5cf6' },
  ];

  const cursorSizes = [
    { name: 'Small', value: 16 },
    { name: 'Medium', value: 20 },
    { name: 'Large', value: 24 },
  ];

  const handleSettingChange = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const targetElements = [
    { type: 'button', className: 'btn-primary', text: 'Primary Button' },
    { type: 'button', className: 'btn-secondary', text: 'Secondary Button' },
    { type: 'card', className: 'card', text: 'Interactive Card' },
    { type: 'link', className: 'link', text: 'Navigation Link' },
    { type: 'input', className: 'input-field', text: 'Input Field' },
  ];

  return (
    <div className="app-container">
      <TargetCursor 
        spinDuration={settings.spinDuration}
        hideDefaultCursor={settings.hideDefaultCursor}
        parallaxOn={settings.parallaxOn}
        cursorColor={settings.cursorColor}
        cursorSize={settings.cursorSize}
      />
      
      <header className="header">
        <h1 className="title">✨ Custom TargetCursor Demo</h1>
        <p className="subtitle">Hover over any interactive element to see the custom cursor in action</p>
      </header>

      <main className="main-content">
        <section className="settings-panel">
          <h2>🎛️ Cursor Settings</h2>
          
          <div className="settings-grid">
            <div className="setting-group">
              <label className="setting-label">
                <span>Spin Duration: {settings.spinDuration}s</span>
                <input
                  type="range"
                  min="0.5"
                  max="5"
                  step="0.5"
                  value={settings.spinDuration}
                  onChange={(e) => handleSettingChange('spinDuration', parseFloat(e.target.value))}
                  className="slider"
                />
              </label>
            </div>

            <div className="setting-group">
              <label className="setting-label">
                <span>Cursor Size</span>
                <div className="button-group">
                  {cursorSizes.map((size) => (
                    <button
                      key={size.name}
                      className={`size-btn ${settings.cursorSize === size.value ? 'active' : ''}`}
                      onClick={() => handleSettingChange('cursorSize', size.value)}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </label>
            </div>

            <div className="setting-group">
              <label className="setting-label">
                <span>Cursor Color</span>
                <div className="color-picker">
                  {cursorColors.map((color) => (
                    <button
                      key={color.name}
                      className="color-option"
                      style={{ backgroundColor: color.value }}
                      onClick={() => handleSettingChange('cursorColor', color.value)}
                      title={color.name}
                    />
                  ))}
                </div>
              </label>
            </div>

            <div className="setting-group toggle-group">
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={settings.hideDefaultCursor}
                  onChange={(e) => handleSettingChange('hideDefaultCursor', e.target.checked)}
                  className="toggle-input"
                />
                <span className="toggle-slider"></span>
                Hide Default Cursor
              </label>
              
              <label className="toggle-label">
                <input
                  type="checkbox"
                  checked={settings.parallaxOn}
                  onChange={(e) => handleSettingChange('parallaxOn', e.target.checked)}
                  className="toggle-input"
                />
                <span className="toggle-slider"></span>
                Parallax Effect
              </label>
            </div>
          </div>
        </section>

        <section className="demo-section">
          <h2>🎯 Interactive Elements</h2>
          <p className="section-description">Hover over these elements to see different cursor behaviors</p>
          
          <div className="demo-grid">
            {targetElements.map((element, index) => (
              <div key={index} className="demo-item">
                {element.type === 'button' ? (
                  <button className={`cursor-target ${element.className}`}>
                    {element.text}
                  </button>
                ) : element.type === 'card' ? (
                  <div className={`cursor-target ${element.className}`}>
                    <h3>Interactive Card</h3>
                    <p>Hover over this entire card area</p>
                    <div className="card-content">
                      <p>The cursor will track movement across this element</p>
                    </div>
                  </div>
                ) : element.type === 'link' ? (
                  <a href="#demo" className={`cursor-target ${element.className}`}>
                    {element.text} →
                  </a>
                ) : (
                  <input
                    type="text"
                    className={`cursor-target ${element.className}`}
                    placeholder={element.text}
                  />
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="features-section">
          <h2>🌟 Features</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">🎮</div>
              <h3>Customizable</h3>
              <p>Adjust spin duration, size, color, and effects in real-time</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🌀</div>
              <h3>Smooth Parallax</h3>
              <p>Enable/disable parallax effect for depth perception</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🎯</div>
              <h3>Precise Tracking</h3>
              <p>Accurately follows cursor movement with smooth animations</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Performant</h3>
              <p>Optimized animations using requestAnimationFrame</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Try hovering over the settings controls too! The cursor responds to all interactive elements.</p>
        <p className="hint">💡 Tip: Adjust the settings while hovering to see instant changes</p>
      </footer>
    </div>
  );
}