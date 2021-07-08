function toggleNav(){
    let navbarbtn = document.querySelector(".btn-toggler");
    let sidebar = document.querySelector(".sidebar");

    navbarbtn.onclick = ()=>{
        sidebar.classList.toggle("slide")
    }
}


$(document).ready(function(){
    $('.project-img-cont').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options
    });
})

function AnimateImg(){
    let pic = document.querySelectorAll(".pic");
    pic.forEach((el)=>{
        let img = document.querySelectorAll("img")
        img.forEach((imge)=>{
            imge.setAttribute("data-aos", "fade-up")
        })
    })

}
AnimateImg()