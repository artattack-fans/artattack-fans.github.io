'use strict';

const startYear = 1990;
const endYear = 2026;
const startMonth = 0; // January
const endMonth = 3;   // April
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const appendDates = wrapper => {
    for (let y = startYear; y <= endYear; y++) {
        for (let m = startMonth; m < 12; m++) {
            if (y === endYear && m > endMonth)
                break;

            const monthItem = document.createElement('div');
            monthItem.classList.add('month-item');
            const monthLabel = document.createElement('span');
            monthLabel.classList.add('month-label');
            monthLabel.innerText = months[m];
            const yearLabel = document.createElement('span');
            yearLabel.classList.add('year-label');
            yearLabel.innerText = y;
            monthItem.appendChild(monthLabel);
            monthItem.appendChild(yearLabel);

            wrapper.appendChild(monthItem);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelectorAll('.timeline-container');
    Array.from(wrapper).forEach(appendDates)
});