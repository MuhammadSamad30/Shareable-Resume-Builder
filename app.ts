const background:any = document.querySelector('.background');
const numberOfSpans = 300;

for (let i = 0; i < numberOfSpans; i++) {
    const span = document.createElement('span');
    const x = Math.random() * 100;
    const delay = Math.random() * 1;
    const duration = Math.random() * 5 + 5;

    span.style.left = `${x}vw`;
    span.style.animationDelay = `${delay}s`;
    span.style.animationDuration = `${duration}s`;
    background.appendChild(span);
}

function goTo(){
    window.location.href="main.html"
}

function goBack(){
    window.location.href="index.html"
}

function toggleSkills(): void {
    const skillsContent = document.getElementById('skills-content') as HTMLElement;
    const toggleButton = document.querySelector('.toggle-button') as HTMLButtonElement;
  
    if (skillsContent.style.display === 'none') {
        skillsContent.style.display = 'block';
        toggleButton.textContent = 'Hide Skills';
    } else {
        skillsContent.style.display = 'none';
        toggleButton.textContent = 'Show Skills';
    }
  }

function generateResume(): void {
    const name = (document.getElementById('name') as HTMLInputElement)?.value.trim();
    const email = (document.getElementById('email') as HTMLInputElement)?.value.trim();
    const number = (document.getElementById('number') as HTMLInputElement)?.value.trim();
    const city = (document.querySelector('input[name="city"]:checked') as HTMLInputElement)?.value || '';
    const Skills = (document.getElementById('Skills') as HTMLInputElement)?.value.trim();
    
    const degree = (document.getElementById('degree') as HTMLInputElement)?.value.trim();
    const university = (document.getElementById('university') as HTMLInputElement)?.value.trim();
    const graduationDate = (document.getElementById('graduation-date') as HTMLInputElement)?.value;
    const jobTitle = (document.getElementById('job-title') as HTMLInputElement)?.value.trim();
    const companyName = (document.getElementById('company-name') as HTMLInputElement)?.value.trim();
    const startDate = (document.getElementById('start-date') as HTMLInputElement)?.value;
    const endDate = (document.getElementById('end-date') as HTMLInputElement)?.value;

    if (!name || !email || !number || !city || !degree || !university || !graduationDate || !jobTitle || !companyName || !startDate || !endDate) {
        alert('Please fill in all required fields!');
        return;
    }

    const imageUpload = document.getElementById('imageUplaod') as HTMLInputElement;
    let imageUrl = '';
    if (imageUpload?.files?.length) {
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
    const downloadButton = document.getElementById("download-resume-btn")
    const linkButton = document.getElementById("url-resume-btn")
    if (formContainer && editButton && downloadButton  && linkButton) {
        formContainer.style.display = 'none';
        editButton.style.display = 'inline-block';
        downloadButton.style.display = 'inline-block';
        linkButton.style.display = 'inline-block';
    }
}

function editResume(): void {
    const formContainer = document.getElementById("form-container");
    const editButton = document.getElementById("edit-resume-btn");
    if (formContainer && editButton) {
        formContainer.style.display = 'block';
        editButton.style.display = 'none';

       window.scrollTo({
        top: 0,
        behavior: "smooth"
       })
    }
}

// print section

function downloadResume(): void {
    window.print();
}

// Url section 

function shareUrl(): void{
   const name = (document.getElementById("name") as HTMLInputElement)?.value.trim()
   if(!name){
    alert("Please generate the resume first!")
    return
   }
 
   const baseUrl = `https://${name}.vercel.app/resume/`
   const url = `${baseUrl}`
   const urlInput = document.getElementById("shareable-url") as HTMLInputElement;

   if(urlInput){
    urlInput.value = url
    urlInput.style.display = "block";
    urlInput.select();
    alert(`Sharable Link Copied: ${url}`) 

   }else{
    console.error("URL input element not found. ");
    
   }
}
