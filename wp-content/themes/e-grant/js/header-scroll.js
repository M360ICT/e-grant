// Header navigation scroll behavior
document.addEventListener('DOMContentLoaded', function () {
    const headerNav = document.querySelector('.header-nav');
    const specialistSection = document.querySelector('.specialist-inner-section');

    if (!headerNav || !specialistSection) {
        return;
    }

    // Function to check if specialist section is in view
    function checkScrollPosition() {
        const specialistRect = specialistSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Show header-nav when specialist-inner-section scrolls into view
        // (when the top of the section is at or above the top of the viewport)
        if (specialistRect.top <= 0) {
            headerNav.classList.add('show');
        } else {
            headerNav.classList.remove('show');
        }
    }

    // Listen to scroll events
    window.addEventListener('scroll', checkScrollPosition);

    // Check initial position
    checkScrollPosition();
});
