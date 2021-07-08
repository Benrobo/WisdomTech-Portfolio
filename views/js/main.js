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


function sendMail(){
    let form = document.getElementById("contact-form");
    let username = document.querySelector(".username")
    let useremail = document.querySelector(".useremail")
    let usermsg = document.querySelector(".usermsg")

    let sendbtn = document.querySelector(".contact-btn")

    sendbtn.onclick = (e)=>{
        e.preventDefault();

        validate(username.value, useremail.value, usermsg.value)
    }

}
sendMail()

function validate(name, mail, msg){
    if(name == "" || mail == "" || msg == ""){
        return error()
    }
    else{
        emailjs.send("service_hd5qbz2","template_i2zy4a9",{
            from_name: name,
            to_name: "wisdomtechsafetysolutions@gmail.com",
            message: `
                ${msg}
            `,
        });
        success()
    }
}

const error = ()=>{
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fielsd cannot be empty!',
    })
}

const success = ()=>{
    Swal.fire({
        icon: 'success',
        title: 'Email Sent',
        text: 'Thanks for contacting us, we get back to you as soon as possible!',
    })
}