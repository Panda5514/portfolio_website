// Content of 2.1e063bca.chunk.js

(function($) {
    // Document ready function
    $(document).ready(function() {
        // Smooth scrolling
        $('a[href*="#"]').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top
            }, 500, 'linear');
        });

        // Header animation on scroll
        $(window).scroll(function() {
            if ($(this).scrollTop() > 50) {
                $('header').addClass('header-scrolled');
            } else {
                $('header').removeClass('header-scrolled');
            }
        });

        // Initialize Isotope for portfolio filtering
        var $portfolioList = $('#portfolio-list');
        $portfolioList.isotope({
            itemSelector: '.project-item',
            layoutMode: 'masonry'
        });

        // Portfolio filter
        $('#portfolio-filter a').click(function() {
            var selector = $(this).attr('data-filter');
            $portfolioList.isotope({ filter: selector });
            return false;
        });

        // Animate elements on scroll
        function animateOnScroll() {
            $('.animate-on-scroll').each(function() {
                if ($(this).isInViewport()) {
                    $(this).addClass('animated');
                }
            });
        }

        // Check if element is in viewport
        $.fn.isInViewport = function() {
            var elementTop = $(this).offset().top;
            var elementBottom = elementTop + $(this).outerHeight();
            var viewportTop = $(window).scrollTop();
            var viewportBottom = viewportTop + $(window).height();
            return elementBottom > viewportTop && elementTop < viewportBottom;
        };

        // Trigger animations on scroll
        $(window).on('scroll', animateOnScroll);
        animateOnScroll();
    });
})(jQuery);
