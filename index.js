document.querySelectorAll('#sidebar ul li').forEach(item => {
    item.addEventListener('mouseenter', function() {
        document.getElementById('main-content').classList.add('expanded');
    });

    item.addEventListener('mouseleave', function() {
        document.getElementById('main-content').classList.remove('expanded');
    });

    item.addEventListener('click', function() {
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });
        const contentId = item.textContent.trim().toLowerCase();
        document.getElementById(contentId).classList.add('active');
    });
});
