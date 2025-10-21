// QP-JS-002: Study Materials Functionality
const materials = [
  { id: 1, title: 'GK Basics', category: 'General Knowledge', type: 'pdf', url: '/assets/pdfs/sample1.pdf', premium: false },
  { id: 2, title: 'English Practice Set', category: 'English', type: 'pdf', url: '/assets/pdfs/sample2.pdf', premium: true }
];

const listEl = document.getElementById('materialsList');
if (listEl) {
  listEl.innerHTML = materials.map(m => `
    <div class="col-12 col-md-6">
      <div class="card">
        <div class="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 class="card-title mb-1">${m.title}</h5>
            <small class="text-muted">${m.category} ${m.premium ? '(Premium)' : '(Free)'}</small>
          </div>
          <button class="btn btn-primary" data-id="${m.id}">${m.premium ? 'Preview' : 'Open'}</button>
        </div>
      </div>
    </div>
  `).join('');

  listEl.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-id]');
    if (!btn) return;
    const item = materials.find(x => x.id === Number(btn.dataset.id));
    if (!item) return;
    // QP-STUDY-002: Open PDF in modal
    const modal = new bootstrap.Modal(document.getElementById('pdfModal'));
    document.getElementById('pdfTitle').textContent = item.title;
    document.getElementById('pdfFrame').src = item.url;
    modal.show();
  });
}
