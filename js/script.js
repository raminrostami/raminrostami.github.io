let $ = document

// form 
let userName = $.querySelector(".username")
let password = $.querySelector(".password")
let button = $.querySelector(".button")
let sitecontent = $.querySelector("#site-content")
let form = $.querySelector(".form")
let photo = $.querySelector(".photo")
let question = $.querySelector("#question")

// Information
let absent = $.querySelector(".absent")
let userId = $.querySelector(".userId")
let lastname = $.querySelector(".lastname")

// forget pass
let forg = $.querySelector(".forg")
let formForget = $.querySelector(".forget")
let usernameforget = $.querySelector(".usernameforget")
let idforget = $.querySelector(".idforget")
let fonduntion = $.querySelector(".fonduntion")
let buttonforget = $.querySelector(".buttonforget")
let result = $.querySelector(".result")
let resaltpass = $.querySelector(".resaltpass")
let blockexam = $.querySelector("#blockexam")
let khodarzesh = $.querySelector("#khodarzesh")
let Onlineclass = $.querySelector("#Online-class")
let videoeducition = $.querySelector("#videoeducition")
let examtitel = $.querySelector("#examtitel2")
let education = $.querySelector(".education")
let School = $.querySelector(".School")

let mainnavigation = $.querySelector(".main-navigation")
let branding = $.getElementById("branding")
let upTo = $.querySelector(".upTo")
let imgheder = $.getElementById("imgheder")
let moon = $.getElementById("moon")



let studentInformation = [
    {Idcard: 4530292878, Password: 4530292878, Name: "بردیا رحیم زاده", Absent: 3, Foundation: 5, href: "https://drive.google.com/drive/folders/12_L8UAXZ-Cf5u37TcX4Qe89y8xRTOaUn?usp=sharing"},
    {Idcard: 4530289311, Password: 4530289311, Name: "احمد رضا سالاری دوست", Absent: 9, Foundation: 5, href: "https://drive.google.com/drive/folders/16bjO3FYuR-6yrCdufRU69LBBMv_U49U0?usp=sharing"},
    {Idcard: 4530286673, Password: 4530286673, Name: "محمد امین صید", Absent: 0, Foundation: 5, href: "https://drive.google.com/drive/folders/1SLyFh7jCxRUQcYapNw0irGPMWGTb4iIO?usp=sharing"},
    {Idcard: 4530288145, Password: 4530288145, Name: "امیر حافظ صیدی نژاد", Absent: 1, Foundation: 5, href: "https://drive.google.com/drive/folders/1UgY2-SC302ajAYZaLNDOkW8MND7J5t3d?usp=sharing"},
    {Idcard: 4530288315, Password: 4530288315, Name: "محمد طاها کاظمی", Absent: 7, Foundation: 5, href: "https://drive.google.com/drive/folders/1NDbiMOFS0PqEdK5_MrpCABQjcXsTYEDZ?usp=sharing"},
    {Idcard: 4530288293, Password: 4530288293, Name: "محمد طاوس", Absent: 4, Foundation: 5, href: "https://drive.google.com/drive/folders/1lQs9m0ipZ-RA8X6MJwpyKYcDVcgC_g08?usp=sharing"},
    {Idcard: 6160071920, Password: 6160071920},
]


function sendIn(){
    
    let users = studentInformation.find(function(item){
        return item.Idcard == userName.value, item.Password == password.value
    })
    
    
    if (users){
        
        absent.innerHTML = users.Absent
        userId.innerHTML = users.Idcard
        lastname.innerHTML = users.Name
        photo.href = users.href
        sitecontent.style.display = "block"
        form.style.display = "none"
        
    } else {
        alert("همچین دانش آموزی وجود ندارد.")
    }

    if(users.Foundation == "5"){
        question.href = "https://drive.google.com/drive/folders/1j6WB5mT3dK5AAndtb0q3MBvy8hUkxWaZ?usp=sharing"
        blockexam.href = "https://drive.google.com/drive/folders/1XIfH_jQbO-0xi-IQ00vYylFgBwmN_fOH?usp=sharing"
        khodarzesh.href = "https://drive.google.com/drive/folders/1EuE0pkyUUNFIxKAK8bQkGYv49sVtA7ub?usp=sharing"
        Onlineclass.href = "https://join.skype.com/acXjzx7W9E3D"
        videoeducition.href = "https://drive.google.com/drive/folders/1S2t0N0fv6r_ItHYYQAOj4xw8XUst0mzK?usp=sharing"
    } else {
        question.href = "https://drive.google.com/drive/folders/1L8tHgG_fPCU-kb8aqp14BYEFMRBEloMN?usp=sharing" 
        blockexam.href = "https://drive.google.com/drive/folders/1seBYXQWGoGO-ibTrKiqsIPSPaN3iyEdG?usp=sharing"
        khodarzesh.href = "https://drive.google.com/drive/folders/1OhpPmmjvAChvwJnnuyj_aoEpCFqp6Jfw?usp=sharing"
        Onlineclass.href = "https://join.skype.com/dUgU6Z9F9iWX"
        videoeducition.href = "https://drive.google.com/drive/folders/1JltnqTHecM9puLc2Xh9bKH6jZO9d5d6s?usp=sharing"
    }
    
    if (users.Idcard == "6160071920"){
        examtitel.innerHTML = "مشخصات معلم"
        education.innerHTML = "تحصیلات"
        userId.innerHTML = "دانشجوی ارشد - رشته مدیریت"
        School.innerHTML = "محل خدمت"
        absent.innerHTML = "مدرسه شهید نوریان - گدمه"
        lastname.innerHTML = "رامین رستمی"
        photo.href = "https://drive.google.com/drive/folders/1zKnPmlhPTJr9th2cayvvE95I6outIrxB?usp=sharing"
        question.href = "https://drive.google.com/drive/folders/1v7SHfVk2BhRCiPQL-uCe_Gl6GcN830Fy?usp=sharing"
        blockexam.href = "https://drive.google.com/drive/folders/1Mr_-7giG2hTMFFMiaMYeoZkbL8melRPB?usp=sharing"
        khodarzesh.href = "https://drive.google.com/drive/folders/1CO10FyMnX3-KLcHvwlO1ibbzY5g9R2yc?usp=sharing"
        videoeducition.href = "https://drive.google.com/drive/folders/1XaC715X079G45R01I7gsqZ8eWQwO7syE?usp=sharing"
        Onlineclass.href = ""
    }
}

function forgetPass(){
    let forgetinformation = studentInformation.find(function(item){
        return item.Name == usernameforget.value, item.Idcard == idforget.value, item.Foundation == fonduntion.value
    })
    
    if(forgetinformation){
        resaltpass.innerHTML = "رمز عبور شما: " + forgetinformation.Password
    } else {
        alert("اطلاعات وارد شده صحیح نیست!!")
    }
}

function showformforget(){
    formForget.style.display = "inline-grid"
}

function blockex(){
    let users = studentInformation.find(function(item){
        return item.Idcard == userName.value, item.Password == password.value
    })

    if(users.Absent > 8){
        blockexam.href = ""
        alert("شما مجاز به شرکت در آزمون نیستید.")
    }
}

function scrollHandler(){
    if(document.documentElement.scrollTop !=0){
        upTo.style.display = "block"

    } else {
        upTo.style.display = "none"
    }
}

function uptoHandler(){
    document.documentElement.scrollTop = 0
}

function clickmoonHandler(){
    document.body.classList.toggle('dark')

    if (document.body.className.includes('dark')) {
        localStorage.setItem('theam', 'dark')
    } else {
        localStorage.setItem('theam', 'light')
    }
}

window.onload = function(){
    let theam = localStorage.getItem('theam')

    if (theam === "dark") {
        document.body.classList.add('dark')
    }
}

button.addEventListener("click", sendIn)
buttonforget.addEventListener("click", forgetPass)
forg.addEventListener("click", showformforget)
blockexam.addEventListener("click", blockex)
document.addEventListener("scroll", scrollHandler)
upTo.addEventListener("click", uptoHandler)
moon.addEventListener("click", clickmoonHandler)