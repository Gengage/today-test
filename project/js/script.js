
//로그인 파트
const forms = document.querySelector(".forms"),
      pwShowHide = document.querySelectorAll(".eye-icon"),
      links = document.querySelectorAll(".link")
//비밀번호 보여주기
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password")
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text"
                eyeIcon.classList.replace("bx-hide", "bx-show")
                return
            }
            password.type = "password"
            eyeIcon.classList.replace("bx-show", "bx-hide")
        })
        
    })
})      
//회원가입으로 이동
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault() //preventing form submit
       forms.classList.toggle("show-signup")
    })
})
//랜덤 포스터 파트
function showRandomImage() {
    let images = document.getElementsByClassName("random-image")
    let randomIndex = Math.floor(Math.random() * images.length)
    
    for (let i = 0; i < images.length; i++) {
        images[i].classList.remove("sh") /* show */
    }
    
    images[randomIndex].classList.add("sh")
}
//박스오피스 파트
function view(arg){
    $(".time1, .time2, .time3, .time4, .ad1, .ad2, .ad3, .ad4").css("display","none");
    if(arg=="0") {
        $(".time2, .ad2").css("display","block");
        viewcount = 1;
    }
    else if(arg=="1") {
        $(".time3, .ad3").css("display","block");
        viewcount = 2;
    }
    else if(arg=="2") {
        $(".time4, .ad4").css("display","block");
        viewcount = 3;
    }
    else if(arg=="3") {
        $(".time1, .ad1").css("display","block");
        viewcount = 0;
    }
}
let viewcount = 3;
let rtcarousel = setInterval(function(){ view(viewcount) },1000); //자동

$("#wrap .best_add").mouseenter(function() {
    clearInterval(rtcarousel);
});

$("#wrap .best_add").mouseleave(function() {
    rtcarousel = setInterval(function(){ view(viewcount) },2000); //마우스 때고 몇초뒤 변경
})

//모달파트
const modalContainer = document.querySelector('.modal-container')
const controls = modalContainer.querySelectorAll('button')


function closeModal(){
    modalContainer.classList.remove('show')
    document.body.style.overflow = ''
}

setTimeout(function(){
    modalContainer.classList.add('show')
    document.body.style.overflow = 'hidden'
}, 0)

for(let button of controls){
    button.addEventListener('click', closeModal)
}

