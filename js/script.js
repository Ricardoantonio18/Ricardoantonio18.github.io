const scrollOffSet = 100;

const scrollElements = document.querySelectorAll(".js-scroll");

/*scrollElements.forEach((el) => {
    el.style.opacity = 0
})*/

const elementInView = (el, offSet = 0) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <=
        ((window.innerHeight || document.documentElement.clientHeight) - offSet)
        );
};

const elementOutofView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop > (window.innerHeight || document.documentElement.clientWidth.clientHeight)
        );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () =>{
    scrollElements.forEach((el) => {
        if(elementInView(el, scrollOffSet)){
            displayScrollElement(el);
        }else if (elementOutofView(el)){
            hideScrollElement(el)
        }
    })
}
window.addEventListener("scroll", () => {
    handleScrollAnimation();
    console.log("ok");
});