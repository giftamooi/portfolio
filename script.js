let activePanel = null;
let activePill = null;

function openPanel(panelId, pillElement) {
  if (activePanel) return;

  const panel = document.getElementById(panelId);
  const overlayId = panelId.replace('-panel', '-overlay');
  const overlay = document.getElementById(overlayId);

  panel.classList.add('open');
  overlay.classList.add('open');

  if (pillElement) {
    pillElement.classList.add('active');
  }

  activePanel = panelId;
  activePill = pillElement ? pillElement.id : null;
}

function closePanel(panelId, pillId) {
  const panel = document.getElementById(panelId);
  const overlayId = panelId.replace('-panel', '-overlay');
  const overlay = document.getElementById(overlayId);

  panel.classList.add('closing');
  overlay.classList.remove('open');

  setTimeout(() => {
    panel.classList.remove('open');
    panel.classList.remove('closing');
  }, 400);

  if (pillId) {
    const pill = document.getElementById(pillId);
    if (pill) pill.classList.remove('active');
  }

  activePanel = null;
  activePill = null;
}

function closeAllPanels() {
  if (!activePanel) return;
  closePanel(activePanel, activePill);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && activePanel) {
    closeAllPanels();
  }
});

function toggleCard(card) {
  card.classList.toggle('active');
}

function toggleShowMore(button) {
  const hiddenItems = document.querySelectorAll('.hidden-item');

  hiddenItems.forEach(item => {
    item.classList.toggle('show');
  });

  if (button.innerHTML.includes('Show more')) {
    button.innerHTML = 'Show less <i class="fa-solid fa-chevron-up"></i>';
  } else {
    button.innerHTML = 'Show more <i class="fa-solid fa-chevron-down"></i>';
  }
}