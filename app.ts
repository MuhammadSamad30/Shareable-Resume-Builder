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

    const resumeContent: string = `
        <h1>Resume</h1>
        <h2>Personal Information</h2>
        <p><strong>Full Name:</strong> ${name}</p>
        <p><strong>Email Address:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${number}</p>
        <p><strong>City:</strong> ${city}</p>

        <h2>Skills</h2>
        <p><strong>Skills:</strong> ${Skills}</p>

        <h2>Education</h2>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>University:</strong> ${university}</p>
        <p><strong>Graduation Date:</strong> ${graduationDate}</p>

        <h2>Work Experience</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>End Date:</strong> ${endDate}</p>
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

document.getElementById("download-resume-btn")?.addEventListener("click", function() {
    window.print(); 
});

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
