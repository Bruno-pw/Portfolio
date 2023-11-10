document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('menuToggle');
    var floatingMenu = document.getElementById('floatingMenu');

    menuToggle.addEventListener('click', function() {
        floatingMenu.classList.toggle('show-menu');
    });

    window.addEventListener('click', function(event) {
        if (!menuToggle.contains(event.target)) {
            floatingMenu.classList.remove('show-menu');
        }
    });

    document.querySelectorAll('#floatingMenu a').forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            floatingMenu.classList.remove('show-menu');
        });
    });
});
