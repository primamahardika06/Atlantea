// Start Maps
document.addEventListener('DOMContentLoaded', () => {
    const waveFilter = document.getElementById('filter-wave');
    const hydroFilter = document.getElementById('filter-hydro');

    const icons = document.querySelectorAll('.icon');

    waveFilter.addEventListener('change', () => {
        icons.forEach(icon => {
            if (icon.dataset.type === 'wave') {
                icon.style.display = waveFilter.checked ? 'block' : 'none';
            }
        });
    });

    hydroFilter.addEventListener('change', () => {
        icons.forEach(icon => {
            if (icon.dataset.type === 'hydro') {
                icon.style.display = hydroFilter.checked ? 'block' : 'none';
            }
        });
    });
});
