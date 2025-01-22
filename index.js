$(document).ready(function() {
// MENU
    //let timeout;
    
    $('#menu > li').hover(
        function () {
            $(this).find('ul').stop(true, true).slideDown(300);
        },
        function () {
            $(this).find('ul').stop(true, true).slideUp(300);					
        }
       );

// STRONA GŁÓWNA
    // SLAJDY, STRZAŁKI, KROPECZKI
    let slides = $("#slides a");
    let dots = $("#dots .dot");
    let currentIndex = 1;

    slides.hide();
    slides.eq(currentIndex).show();
    dots.eq(currentIndex).addClass("active");

    function showNextSlide() {
        slides.eq(currentIndex).fadeOut(400, function() {
            currentIndex = (currentIndex + 1) % slides.length;
            slides.eq(currentIndex).fadeIn(400);
            updateDots();
        });
    }
    function showPrevSlide() {
        slides.eq(currentIndex).fadeOut(400, function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            slides.eq(currentIndex).fadeIn(400);
            updateDots();
        });
    }
    function updateDots() {
        dots.removeClass("active");
        dots.eq(currentIndex).addClass("active");
    }
    function startAutoSlide() {
        interval = setInterval(showNextSlide, 3000);
    }
    function stopAutoSlide() {
        clearInterval(interval);
    }
    function showNextSlideOnClick() {
        slides.eq(currentIndex).fadeOut(200, function() {
            currentIndex = (currentIndex + 1) % slides.length;
            slides.eq(currentIndex).fadeIn(200);
        });
    }
    function showPrevSlideOnClick() {
        slides.eq(currentIndex).fadeOut(200, function() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            slides.eq(currentIndex).fadeIn(200);
        });
    }

    // Obsługa kropeczek
    dots.click(function() {
        stopAutoSlide();
        currentIndex = $(this).index();
        slides.fadeOut(500);
        slides.eq(currentIndex).fadeIn(500);
        updateDots();
        startAutoSlide();
    }); 
    $("#next").click(function () {
        stopAutoSlide();
        showNextSlideOnClick();
        updateDots();
        startAutoSlide();
    });
    $("#prev").click(function () {
        stopAutoSlide();
        showPrevSlideOnClick();
        updateDots();
        startAutoSlide();
    });

    interval = setInterval(showNextSlide, 2000);
    let strzalki = $("#prev, #next");
    strzalki.hide();
    $("#slides").mouseenter(function() {
        $("#prev, #next").fadeIn(200);
    });
    $("#slides").mouseleave(function() {
        $("#prev, #next").fadeOut(200);
    });

    // Funkcja rozwijania i zwijania tekstu
    $(".column").click(function() {
        $(this).toggleClass("active"); 
    });
    
});

document.addEventListener("scroll", () => {
    const menu = document.getElementById("header");
    if (window.scrollY > 50) {
        menu.style.backgroundColor = "rgba(0,0,0, 0.6)"; // Ciemne tło po przewinięciu
    } else {
        menu.style.backgroundColor = "rgba(0, 0, 0, 1)"; // Przezroczyste tło na górze
    }
});

// STRONA GŁÓWNA
// przyciski "czytaj więcej"
function toggleText(toggleBtnId, textId, overlayId) {
    const toggleBtn = document.getElementById(toggleBtnId);
    const text = document.getElementById(textId);
    const overlay = document.getElementById(overlayId);

    toggleBtn.addEventListener('click', function() {
        if (text.style.maxHeight === 'none') {
            text.style.maxHeight = '150px';
            overlay.style.height = '50px'; // Przywrócenie wysokości overlay
            toggleBtn.textContent = 'Zobacz więcej';
        } else {
            text.style.maxHeight = 'none';
            overlay.style.height = '0'; // Ukrywanie overlay
            toggleBtn.textContent = 'Zobacz mniej';
        }
    });
}

toggleText('toggleBtn1', 'text1', 'overlay1');
toggleText('toggleBtn2', 'text2', 'overlay2');
toggleText('toggleBtn3', 'text3', 'overlay3');
toggleText('toggleBtn4', 'text4', 'overlay4');

