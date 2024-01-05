function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }

   const links = document.querySelectorAll(".nav-list li a") 

   for (const link of links){
    link.addEventListener("click", smoothScroll)
   }

   function smoothScroll(e){
    e.preventDefault()

    const href = this.getAttribute("href")
    document.querySelector(href).scrollIntoView({
        behavior: "smooth"
    })
   }