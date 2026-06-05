/*
  main.js — Entry Point
  ═══════════════════════════════════════════════════════════════

  This is the first script that runs when the page loads.
  Think of it like a Start() method in Unity — it's where you
  put initialisation logic that needs to run once at startup.

  All the other JS files (tabs.js, games.js, console.js) export
  their own functions. This file is where you'd wire things
  together or add any setup that spans multiple systems.

  Currently it's minimal — the modules handle themselves — but
  this is where you'd add things like:
    - Fetching game data from an external API
    - Animating elements on page load
    - Registering global keyboard shortcuts

  ═══════════════════════════════════════════════════════════════
*/

// The imports below don't use the imported values directly here —
// they just ensure those modules are loaded and their startup
// code (like the initial console messages) runs.
import './console.js';
import './tabs.js';
import './games.js';

// ── EXAMPLE: keyboard shortcut to switch tabs ─────────────────
// This listens for keypress events on the whole document.
// document.addEventListener works like Unity's Input.GetKeyDown —
// it fires a callback function whenever an event occurs.
document.addEventListener('keydown', (event) => {

  // event.key is the key that was pressed
  // event.altKey checks if Alt was held at the same time
  if (!event.altKey) return;   // only act when Alt is held

  if (event.key === '1') window.switchTab('portfolio');
  if (event.key === '2') window.switchTab('about');
  if (event.key === '3') window.switchTab('contact');
});

// ── ADD MORE INITIALISATION BELOW THIS LINE ───────────────────
