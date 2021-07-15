function toggleMenu(menuElement) {
    const removeClickListener = function() {
        $(document).off('click', outsideMenuListener)
    }

    const outsideMenuListener = function(event) {
        if (!$(event.target).is($(menuElement).prev())) {
            if($(menuElement).is(':visible')) {
                $(menuElement).attr('aria-expanded', 'false')
                $(menuElement).prev().attr('aria-expanded', 'false')
                removeClickListener()
            }
        }
    }

    $(menuElement).attr('aria-expanded', function(i, expanded) {
        return expanded === 'false';
    });
    $(menuElement).prev().attr('aria-expanded', function(i, expanded) {
        return expanded === 'false';
    });

    $(document).on('click', outsideMenuListener)
}


// event handlers
$('[data-hook="nav-menu-toggle"]').click(function() {
    toggleMenu($('[data-hook="nav-menu-content"]'));
});


$('[data-hook="gpdr-accept"]').click(function() {
    document.querySelector('.cookies_wrapper').classList.remove('cookies_wrapper--active');
    document.getElementById('GDPR_Modal').classList.remove('is-open');
});

$('[data-hook="gdpr-manage"]').click(function() {
    document.getElementById('GDPR_Modal').classList.add('is-open');
});

$('[data-hook="gdpr-cancel"]').click(function() {
    document.getElementById('GDPR_Modal').classList.remove('is-open');
});
