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
            window.scrollBy(0, -5);
            setTimeout(animateScroll(), 10);
        }
    }

    button.addEventListener("click", function(){
        e.stopPropagation();
        animateScroll();
    }, false);

    window.addEventListener("scroll", function(e){
        if(document.scrollingElement.scrollTop >= 100) {
            button.classList.remove("hidden");
        } else {
            console.log('test');
            button.classList.add("hidden");
        }
    }, false);

})();