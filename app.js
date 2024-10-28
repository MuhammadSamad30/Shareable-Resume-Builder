"use strict";
var _a;
function toggleSkills() {
    const skillsContent = document.getElementById('skills-content');
    const toggleButton = document.querySelector('.toggle-button');
    if (skillsContent.style.display === 'none') {
        skillsContent.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    }
    else {
        skillsContent.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
}
function generateResume() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const name = (_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value.trim();
    const email = (_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value.trim();
    const number = (_c = document.getElementById('number')) === null || _c === void 0 ? void 0 : _c.value.trim();
    const city = ((_d = document.querySelector('input[name="city"]:checked')) === null || _d === void 0 ? void 0 : _d.value) || '';
    const Skills = (_e = document.getElementById('Skills')) === null || _e === void 0 ? void 0 : _e.value.trim();
    const degree = (_f = document.getElementById('degree')) === null || _f === void 0 ? void 0 : _f.value.trim();
    const university = (_g = document.getElementById('university')) === null || _g === void 0 ? void 0 : _g.value.trim();
    const graduationDate = (_h = document.getElementById('graduation-date')) === null || _h === void 0 ? void 0 : _h.value;
    const jobTitle = (_j = document.getElementById('job-title')) === null || _j === void 0 ? void 0 : _j.value.trim();
    const companyName = (_k = document.getElementById('company-name')) === null || _k === void 0 ? void 0 : _k.value.trim();
    const startDate = (_l = document.getElementById('start-date')) === null || _l === void 0 ? void 0 : _l.value;
    const endDate = (_m = document.getElementById('end-date')) === null || _m === void 0 ? void 0 : _m.value;
    if (!name || !email || !number || !city || !degree || !university || !graduationDate || !jobTitle || !companyName || !startDate || !endDate) {
        alert('Please fill in all required fields!');
        return;
    }
    const imageUpload = document.getElementById('imageUplaod');
    let imageUrl = '';
    if ((_o = imageUpload === null || imageUpload === void 0 ? void 0 : imageUpload.files) === null || _o === void 0 ? void 0 : _o.length) {
        const file = imageUpload.files[0];
        imageUrl = URL.createObjectURL(file);
    }
    const resumeContent = `  

    <h1 style="text-align: center; font-size: 2.5em; color: #333; margin-bottom: 20px; border-bottom: 2px solid #4a90e2; padding-bottom: 10px;">Resume</h1>        
    ${imageUrl ? `<img src="${imageUrl}" alt="User Image" style="float:right; width:100px; height:100px; border-radius:50%; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); margin: 0 0 20px 20px;"/>` : ''}
    <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Personal Information</h2>
    <p><strong style="color: #333;">Full Name:</strong> ${name}</p>
    <p><strong style="color: #333;">Email Address:</strong> ${email}</p>
    <p><strong style="color: #333;">Contact Number:</strong> ${number}</p>
    <p><strong style="color: #333;">City:</strong> ${city}</p>

    <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Skills</h2>
    <p><strong style="color: #333;">Skills:</strong> ${Skills}</p>

    <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Education</h2>
    <p><strong style="color: #333;">Degree:</strong> ${degree}</p>
    <p><strong style="color: #333;">University:</strong> ${university}</p>
    <p><strong style="color: #333;">Graduation Date:</strong> ${graduationDate}</p>

    <h2 style="color: #4a90e2; font-size: 1.8em; margin-top: 20px;">Work Experience</h2>
    <p><strong style="color: #333;">Job Title:</strong> ${jobTitle}</p>
    <p><strong style="color: #333;">Company Name:</strong> ${companyName}</p>
    <p><strong style="color: #333;">Start Date:</strong> ${startDate}</p>
    <p><strong style="color: #333;">End Date:</strong> ${endDate}</p>
    
    `;
    const resumeContainer = document.getElementById('resume-content');
    if (resumeContainer) {
        resumeContainer.innerHTML = resumeContent;
    }
    alert("Resume Generated! Your Resume Has Been Generated.");
    console.log(resumeContent);
    const formContainer = document.getElementById('form-container');
    const editButton = document.getElementById('edit-resume-btn');
    const downloadButton = document.getElementById("download-resume-btn");
    const linkButton = document.getElementById("url-resume-btn");
    if (formContainer && editButton && downloadButton && linkButton) {
        formContainer.style.display = 'none';
        editButton.style.display = 'inline-block';
        downloadButton.style.display = 'inline-block';
        linkButton.style.display = 'inline-block';
    }
}
function editResume() {
    const formContainer = document.getElementById("form-container");
    const editButton = document.getElementById("edit-resume-btn");
    if (formContainer && editButton) {
        formContainer.style.display = 'block';
        editButton.style.display = 'none';
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}
// print section
(_a = document.getElementById("download-resume-btn")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    window.print();
});
// Url section 
function shareUrl() {
    var _a;
    const name = (_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value.trim();
    if (!name) {
        alert("Please generate the resume first!");
        return;
    }
    const baseUrl = `https://${name}.vercel.app/resume/`;
    const url = `${baseUrl}`;
    const urlInput = document.getElementById("shareable-url");
    if (urlInput) {
        urlInput.value = url;
        urlInput.style.display = "block";
        urlInput.select();
        alert(`Sharable Link Copied: ${url}`);
    }
    else {
        console.error("URL input element not found. ");
    }
}
