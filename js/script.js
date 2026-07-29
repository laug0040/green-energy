document.addEventListener('DOMContentLoaded', function () {
    const controls = document.getElementById('controls');
    if (!controls) return;

    const buttons = Array.from(controls.querySelectorAll('button'));
    const contentEl = document.getElementById('solution-content');
    if (!contentEl) return;

    const contents = [{
            title: 'Affordable Solar Panels',
            img: 'img/placeholder-solar.jpg',
            html: '<p>Generate your own clean electricity with rooftop solar panels. Government incentives, rebates, and flexible financing make solar adoption accessible.</p>' +
                '<ul><li>Lower monthly electricity bills</li><li>Increase home value</li><li>Clean, renewable, and sustainable</li></ul>'
        },
        {
            title: 'Community Wind Projects',
            img: 'img/placeholder-wind.jpg',
            html: '<p>Small-scale and community-owned wind projects share costs and benefits across neighborhoods, lowering per-household expense.</p>' +
                '<ul><li>Shared capital and maintenance</li><li>Lower per-household cost</li><li>Local job creation</li></ul>'
        },
        {
            title: 'Energy Efficiency Upgrades',
            img: 'img/placeholder-efficiency.jpg',
            html: '<p>Insulation, efficient appliances, and smart thermostats reduce consumption and often pay back through lower bills.</p>' +
                '<ul><li>Immediate bill savings</li><li>Improved comfort</li><li>Long-term reduced energy demand</li></ul>'
        }
    ];

    function activateButton(btn) {
        buttons.forEach(b => {
            b.removeAttribute('id');
            b.setAttribute('aria-selected', 'false');
        });
        btn.id = 'active-button';
        btn.setAttribute('aria-selected', 'true');
    }

    function showContent(index) {
        const data = contents[index];
        if (!data) return;
        contentEl.innerHTML = '' +
            '<img src="' + data.img + '" alt="' + data.title + '">' +
            '<h2>' + data.title + '</h2>' +
            data.html;
        contentEl.focus();
    }

    buttons.forEach((btn, i) => {
        btn.dataset.index = String(i);
        btn.setAttribute('role', 'tab');
        if (btn.id === 'active-button') {
            btn.setAttribute('aria-selected', 'true');
        } else {
            btn.setAttribute('aria-selected', 'false');
        }
        btn.addEventListener('click', function () {
            activateButton(this);
            showContent(i);
        });
    });

    const initialIndex = buttons.findIndex(b => b.id === 'active-button');
    showContent(initialIndex >= 0 ? initialIndex : 0);
});