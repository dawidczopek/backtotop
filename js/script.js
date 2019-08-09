(function(){

    function createButton(){
        var button = document.createElement("button");

        button.classList.add("backToTop", "hidden");
        button.textContent = "Przewiń do góry";
        document.body.appendChild(button);

        return button;
    }

    var button = createButton();

    function animateScroll() {
        if(document.scrollingElement.scrollTop > 0){
            // window.scrollTo(0, -5);
            // setTimeout(animateScroll, 10);
            window.scroll({"top": 0, behavior: "smooth"})
        }
    }

    button.addEventListener("click", function(e){
        animateScroll();
        e.stopPropagation();
    }, false);

    window.addEventListener("scroll", function(){
        if(document.scrollingElement.scrollTop >= 100) {
            button.classList.remove("hidden");
        } else {
            button.classList.add("hidden");
        }
    }, false);

})();