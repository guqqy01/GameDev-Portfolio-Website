/*
  console.js — Right Panel Console Log
  ═══════════════════════════════════════════════════════════════

  Manages the fake console output in the right inspector panel.

  This module exports one function — appendLog() — which other
  scripts import and call to write a new line to the console.

  "export" is how you make a function available to other files.
  It's similar to "public" in C#.

  ═══════════════════════════════════════════════════════════════
*/

// Record when the page first loaded so we can show elapsed time.
// Date.now() returns milliseconds since 1970 — same idea as
// Time.realtimeSinceStartup in Unity.
const startTime = Date.now();

/**
 * Appends a new line to the console panel.
 *
 * @param {string} message  - The text to display, e.g. "[NAV] Portfolio opened"
 * @param {string} type     - Optional style: "ok" (green) or "info" (teal)
 */
export function appendLog(message, type = '') {

  // Find the console container element in the HTML
  const log = document.getElementById('console-log');

  // Calculate elapsed seconds since page load, formatted as "00:00:04"
  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2).padStart(7, '0');

  // Create a new line element
  const line = document.createElement('div');
  line.className = 'log-line';

  // Set its content — template literals (backticks) work like C#'s $"" strings
  line.innerHTML = `
    <span class="log-time">${elapsed}</span>
    <span class="log-msg ${type}">${message}</span>
  `;

  // Add it to the console and scroll to the bottom
  log.appendChild(line);
  log.scrollTop = log.scrollHeight;
}

// Write the startup messages when the page first loads.
// These run immediately when this script is imported.
appendLog('[OK] Site loaded', 'ok');
appendLog('[INF] 3 games found', 'info');
appendLog('[SYS] Rendering scenes');
appendLog('[OK] All assets ready', 'ok');
appendLog('[INF] Visitor detected', 'info');
