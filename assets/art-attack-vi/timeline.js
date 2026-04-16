'use strict';

const startYear = 1990;
const endYear = 2026;
const startMonth = 0; // January
const endMonth = 3;   // April
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/**
 *
 * @param eType
 * @param opts? {{innerText?: string, classes?: string[]}}
 * @returns {*}
 */
const createE = (eType, opts) => {
    const e = document.createElement(eType);
    if (opts.innerText)
        e.innerText = opts.innerText;

    if (opts.classes && opts.classes.length > 0)
        opts.classes.forEach(c => e.classList.add(c))

    return e;
}

const CYCLE = ['🤖', '🗿', '⚡️', '🦖', '🚀', '🪨', '💡', '🌲', '🏎️', '🕯️', '💾', '🌝']
const appendDates = wrapper => {
    for (let y = startYear; y <= endYear; y++) {
        for (let m = startMonth; m < 12; m++) {
            if (y === endYear && m > endMonth)
                break;

            const monthItem = createE('div', {classes: ['month-item']});
            const monthLabel = createE('span', {
                classes: ['month-label'],
                innerText: months[m]
            });
            const yearLabel = createE('span', {
                classes: ['year-label'],
                innerText: y
            });
            monthItem.appendChild(monthLabel);
            monthItem.appendChild(yearLabel);

            wrapper.appendChild(monthItem);
            wrapper.appendChild(createE('div', {innerText: CYCLE[m], classes: ['month-item', 'short']}));
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelectorAll('.timeline-container');
    Array.from(wrapper).forEach(appendDates)
});