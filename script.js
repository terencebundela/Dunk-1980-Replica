const titleBox = document.querySelector('#welcome');
const infoBox = document.querySelector('.mySelf');

const title = "Welcome.";
const info = `My name is Terence Bundela. <br> I'm a front-end developer with 5+ years of experience providing high-impact web solutions for diverse industry organizations. Skilled in designing and developing multiple web-based applications incorporating a range of technologies. Aspiring to combine broad background with strong technical skills to excel as a Front-End Developer.`;
const info1 = `Designed and modified the web page with the new events and activities with CSS and JavaScript & jQuery 
<br> <br> Job Description: <em>web developer</em>
<br> skills: <em>HTML5, CSS3, JavaScript and jQuery</em>`
const info2 = `Designed pages as per the client's requirement with help of CSS3 and JavaScript.
<br><br> Job Description: <em>frontend developer.</em> <br>
skills: <em>HTML5, CSS3, JavaScript and jQuery.</em>`
const info3 = `Used CRUD Method to post and get data on the client page and web services using Fetch API Standard, JSON, and Angular Resources.
<br><br>Job Description: <em>Frontend developer.</em>
skills: <em>HTML5, CSS3, JavaScript, jQuery and Angula</em>r<br> `
const info4 = "Sed egestas egestas fringilla phasellus faucibus. Ac tortor dignissim convallis aenean et tortor. Aenean pharetra magna ac placerat. Ac ut consequat semper viverra nam libero. Scelerisque viverra mauris in aliquam sem fringilla ut. Eget mauris pharetra et ultrices neque ornare aenean. Amet consectetur adipiscing elit ut aliquam purus. Pellentesque adipiscing commodo elit at. Semper quis lectus nulla at volutpat. Nullam vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Urna molestie at elementum eu facilisis. Tortor at auctor urna nunc id cursus metus."

const title1 = `Landing Page`
const title2 = "Responsive Blog Website";
const title3 = "Customer listing with filtering";

const lorem = document.getElementById('lorem');
const ipsum = document.getElementById('ipsum');
const dolor = document.getElementById('dolor');

lorem.addEventListener("click", displayProject1);
ipsum.addEventListener("click", displayProject2);
dolor.addEventListener("click", displayProject3);

const logoBtn = document.querySelector('.logoBtn');

logoBtn.addEventListener("click", displayProject);

function displayProject() {
    titleBox.innerHTML = title;
    titleBox.style.fontSize = "7rem";
    infoBox.innerHTML = info;
}

function displayProject1(){
    titleBox.innerHTML = title1;
    titleBox.style.fontSize = "4rem";
    infoBox.innerHTML = info1;
    p1;
}

function displayProject2(){
    titleBox.innerHTML = title2;
    titleBox.style.fontSize = "4rem";
    infoBox.innerHTML = info2;
}

function displayProject3(){
    titleBox.innerHTML = title3;
    titleBox.style.fontSize = "4rem";
    infoBox.innerHTML = info3;
}


// Welcome js Animation

const welcomeBackground  = gsap.timeline({ repeat: -1 });
welcomeBackground.to("h1", 30, { backgroundPosition: "-960px 0" });


// Text Animation

const p1 = $(document).ready(function(){
    $("#lorem, #ipsum, #dolor").click(function(){
      $(".welcome").animate({left: '250px'});
    });
  });