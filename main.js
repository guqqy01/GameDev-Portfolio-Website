/*
  tabs.js — Tab Navigation
  ═══════════════════════════════════════════════════════════════

  Handles switching between the three main views:
  Portfolio, About, and Contact.

  "import" pulls in functions from other files — like a "using"
  statement in C#, except it references the file directly.

  ═══════════════════════════════════════════════════════════════
*/

import { appendLog } from './console.js';

/**
 * Shows the selected view and hides the others.
 * Called from the onclick attributes in index.html.
 *
 * @param {string} name - One of: 'portfolio', 'about', 'contact'
 */
export function switchTab(name) {

  // Remove 'active' from all tabs and views.
  // querySelectorAll returns a list of elements matching a CSS selector —
  // like FindObjectsOfType<T>() but for HTML elements.
  document.querySelectorAll('.tab').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.view').forEach(view => view.classList.remove('active'));

  // Map tab names to their position in the tab list (0, 1, 2)
  const tabIndex = { portfolio: 0, about: 1, contact: 2 };

  // Add 'active' to the clicked tab and its matching view
  document.querySelectorAll('.tab')[tabIndex[name]].classList.add('active');
  document.getElementById('view-' + name).classList.add('active');

  // Write to the console panel
  appendLog(`[NAV] Switched to ${name}`, 'info');
}

// Expose switchTab on the window object so the inline onclick=""
// attributes in index.html can reach it.
// (Normally module functions are scoped to the module — this is
// the bridge between modules and inline HTML event handlers.)
window.switchTab = switchTab;
