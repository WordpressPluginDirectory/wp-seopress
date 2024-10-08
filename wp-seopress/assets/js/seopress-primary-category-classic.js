'use strict';
document.addEventListener('DOMContentLoaded', e => {
    let primaryCategory = seopressPrimaryCategorySelectData.primaryCategory;

    const categoriesMetabox = document.querySelector('#product_catdiv') ? document.querySelector('#product_catdiv') : document.querySelector('#categorydiv');
    const seopressPrimaryCategorySelect = document.querySelector('#seopress_cpt #seopress_robots_primary_cat');
    if (!categoriesMetabox || !seopressPrimaryCategorySelect) return;

    categoriesMetabox.querySelector('.inside').insertAdjacentHTML('beforeend', seopressPrimaryCategorySelectData.selectHTML);
    const categoriesMetaboxPrimaryCategorySelect = categoriesMetabox.querySelector('#seopress_robots_primary_cat');

    const syncSelects = value => {
        primaryCategory = value
        seopressPrimaryCategorySelect.value = primaryCategory;
        categoriesMetaboxPrimaryCategorySelect.value = primaryCategory;
    }

    seopressPrimaryCategorySelect.addEventListener('change', e => syncSelects(seopressPrimaryCategorySelect.value));
    categoriesMetaboxPrimaryCategorySelect.addEventListener('change', e => syncSelects(categoriesMetaboxPrimaryCategorySelect.value));
});
