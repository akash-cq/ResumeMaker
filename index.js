const fullName = document.getElementById("fullName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const r_name = document.getElementById("r-name");
const r_email = document.getElementById("r-email");
const r_phone = document.getElementById("r-phone");
const r_post = document.getElementById("post");
const colleges = document.getElementsByClassName("colleges");
const sessions = document.getElementsByClassName("sessions");
const degrees = document.getElementsByClassName("degrees");
const companies = document.getElementsByClassName("companies");
const times = document.getElementsByClassName("times");
const skills = document.getElementsByClassName("skills");
const about = document.getElementById('about-me');
const adrs = document.querySelector("#adrs");
const submitBtn = document.querySelector('button[type="submit"]');
const show = document.querySelector(".show");
const t = document.querySelector(".cont");
const down = document.querySelector(".down");
const file = document.querySelector("#pic");
const newBtn = document.querySelector(".new");
const clg_val = [],
  sess_val = [],
  deg_val = [],
  com_val = [],
  times_val = [],
  skills_val = [];

submitBtn.addEventListener("click", () => {
  Array.from(colleges).forEach((element) => clg_val.push(element.value));
  Array.from(sessions).forEach((element) => sess_val.push(element.value));
  Array.from(degrees).forEach((element) => deg_val.push(element.value));
  Array.from(companies).forEach((element) => com_val.push(element.value));
  Array.from(times).forEach((element) => times_val.push(element.value));
  Array.from(skills).forEach((element) => skills_val.push(element.value));
  const f = file.files[0];
  let imgsrc;
  if (f) {
    imgsrc = URL.createObjectURL(f);
  }
  let html = `
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Professional Resume</title>
    <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
    />
    <style>
        body {
        font-family: 'Arial', sans-serif;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        }

        .container {
        display: flex;
        flex-direction: row;
        max-width: 1200px;
        margin: 30px auto;
        background: white;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        overflow: hidden;
        }

        .left {
        width: 30%;
        background-color: #283e56;
        color: white;
        padding: 20px;
        }

        .left h3 {
        margin-top: 30px;
        border-bottom: 2px solid #3c5a7a;
        padding-bottom: 10px;
        font-size: 18px;
        }

        .img {
        width: 150px;
        height: 150px;
        margin: 0 auto;
        border: 5px solid #ffffff;
        border-radius: 50%;
        overflow: hidden;
        }

        .img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        }

        .about-content,
        .contact div,
        .info-r {
        margin-top: 10px;
        font-size: 14px;
        line-height: 1.6;
        }

        .info-r h4 {
        margin: 10px 0 5px;
        }

        .right {
        width: 70%;
        padding: 20px 30px;
        }

        .Cname {
        text-align: center;
        margin-bottom: 20px;
        }

        .Cname h1 {
        font-size: 30px;
        font-weight: bold;
        color: #283e56;
        }

        .education, .experience, .skills {
        margin-bottom: 30px;
        }

        .education h1, .experience h3, .skills h3 {
        font-size: 20px;
        color: #283e56;
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        gap: 10px;
        }

        .info-ed ul, .experience ul, .skills ul {
        list-style: none;
        padding: 0;
        }

        .ed-li, .e-li {
        margin-bottom: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        }

        .ed-year, .right-e {
        font-size: 14px;
        font-weight: bold;
        color: #555;
        }

        .ed-name, .name-e {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        color: #283e56;
        }

        .ed-about {
        font-size: 14px;
        color: #777;
        }

        .skills ul li {
        font-size: 14px;
        background: #e3f2fd;
        color: #283e56;
        padding: 5px 10px;
        border-radius: 20px;
        display: inline-block;
        margin-right: 10px;
        margin-bottom: 5px;
        }
    </style>
    </head>
    <body>
    <div class="container">
        <div class="left">
        <div class="img">
        <img src=${imgsrc} alt="user picture" />
        </div>
        <h3>ABOUT ME</h3>
        <p class="about-content">
        ${about.value}
        </p>
        <h3>CONTACT</h3>
        <div class="adrs">${adrs.value}</div>
        <div class="phone">${phone.value}</div>
        <div class="email">${email.value}</div>
        <h3>REFERENCE</h3>
        <div class="info-r">
            <h4>${r_name.value}</h4>
            <p>${r_post.value}</p>
            <p>${r_phone.value}</p>
            <p>${r_email.value}</p>
        </div>
        </div>

        <div class="right">
        <div class="Cname">
            <h1>${fullName.value}</h1>
        </div>
        <div class="education">
            <h1><i class="fa-solid fa-graduation-cap"></i> Education</h1>
            <div class="info-ed">
            <ul>
            ${clg_val
              .map(
                (clg, indx) => `
                <li class="ed-li">
                <div class="left-ed">
                    <h4 class="ed-year">${sess_val[indx]}</h4>
                </div>
                <div class="right-ed">
                    <h4 class="ed-name">${deg_val[indx]}</h4>
                    <p class="ed-about">${clg}</p>
                </div>
                </li>
                `
              )
              .join("")}

            </ul>
            </div>
        </div>
        <div class="experience">
            <h3><i class="fa-brands fa-black-tie"></i> Experience</h3>
            <ul>
            ${times_val
              .map(
                (times, indx) => `
            <li class="e-li">
                <div class="right-e">${times}</div>
                <p class="name-e">${com_val[indx]}</p>
            </li>  
                `
              )
              .join("")}
            
            </ul>
        </div>
        <div class="skills">
            <h3><i class="fa-solid fa-gears"></i> Skills</h3>
            <ul>
            ${skills_val
              .map(
                (skill, indx) => `
                <li>${skill}</li>
                `
              )
              .join("")}
            </ul>
        </div>
        </div>
    </div>
    </body>
    </html>
    `;
  t.classList.add("t");
  show.classList.remove("hide");
  down.classList.remove("hide");
  newBtn.classList.remove("hide");
  show.innerHTML = html;
});
down.addEventListener("click", () => {
  down.innerHTML = "New One";
  html2pdf()
    .set({
      margin: 1,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    })
    .from(show)
    .save();
});

newBtn.addEventListener("click", () => {
  t.classList.remove("t");
  show.classList.add("hide");
  down.classList.add("hide");
  newBtn.classList.add("hide");
});
