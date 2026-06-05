/*
  games.js — Game Card Filtering
  ═══════════════════════════════════════════════════════════════

  Handles the sidebar filter buttons on the portfolio page.
  When you click "Game Jams", this script shows only cards
  with "jam" in their data-tags attribute and hides the rest.

  ═══════════════════════════════════════════════════════════════
*/

import { appendLog } from './console.js';

/**
 * Filters the game cards by category or tag.
 * Called from the onclick attributes on sidebar buttons.
 *
 * @param {string}      filter  - The tag to filter by, e.g. 'jam', 'Unity', 'all'
 * @param {HTMLElement} btn     - The button that was clicked (passed as 'this' in HTML)
 */
export function filterGames(filter, btn) {

  // Deactivate all sidebar items, then activate just the clicked one
  document.querySelectorAll('.sidebar-item').forEach(item => item.classList.remove('active'));
  btn.classList.add('active');

  // Get every game card and decide whether to show or hide it
  const cards = document.querySelectorAll('.game-card');
  let visibleCount = 0;

  cards.forEach(card => {

    // data-tags in HTML becomes dataset.tags in JavaScript.
    // e.g. data-tags="all,jam,Unity" → ['all', 'jam', 'Unity']
    const tags = card.dataset.tags ? card.dataset.tags.split(',') : [];

    // Show this card if we're showing everything, or if it has the matching tag
    const isVisible = filter === 'all' || tags.includes(filter);

    // Setting display:none hides the element entirely — like SetActive(false)
    card.style.display = isVisible ? 'block' : 'none';

    if (isVisible) visibleCount++;
  });

  appendLog(`[INF] ${visibleCount} project(s) matched "${filter}"`, 'info');
}

// Expose on window so inline onclick="" attributes can reach it
window.filterGames = filterGames;
