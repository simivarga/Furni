document.addEventListener('DOMContentLoaded', (event) => {
    // Add event listeners to nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            // Add 'active' class to the clicked nav link
            this.classList.add('active');
        });
    });
});
