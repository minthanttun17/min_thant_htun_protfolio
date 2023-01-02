const hamburgerBtn = document.querySelector('.hamburger-menu');
const navBar = document.querySelector('.nav-bar');
const navLink = document.querySelectorAll('.nav-link');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
const line3 = document.querySelector('.line3');


// Open menu
hamburgerBtn.addEventListener('click', function(){
    navBar.classList.toggle('active');
    line2.classList.toggle('active')
    line1.classList.toggle('active')
    line3.classList.toggle('active')


    console.log('click');
})

//Close Menu when click link
navLink.forEach(e =>{
    e.addEventListener('click',()=>{
        navBar.classList.remove('active')
        line2.classList.remove('active')
        line1.classList.remove('active')
        line3.classList.remove('active')
    })
})


// render projects
const projectContainer = document.querySelector('.projects');
projects.map(project => {
    console.log(project);
    projectContainer.innerHTML += `
        <div class="project">
            <img src="${project.img}" class="${project.name}" alt="food" />
            <h3 class="name">${project.name}</h3>
            <a href="${project.demon}" class="demon btn">Demon</a>
            <a href="${project.github}" class="github"><i class="fa-brands fa-github"></i>Github</a>
        </div>
    `
})

