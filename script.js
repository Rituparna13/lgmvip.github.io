document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const registrationDetails = document.getElementById("registrationDetails");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const website = document.getElementById("website").value;
      const image = document.getElementById("image").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const genderValue = gender ? gender.value : "N/A";
      const skills = document.querySelectorAll('input[name="skills"]:checked');
      const skillsArray = Array.from(skills).map(skill => skill.value);
  
      const details = `
        <h2>Registration Details:</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Website Link:</strong> <a href="${website}" target="_blank">${website}</a></p>
        <p><strong>Image Link:</strong> <a href="${image}" target="_blank">${image}</a></p>
        <p><strong>Gender:</strong> ${genderValue}</p>
        <p><strong>Skills:</strong> ${skillsArray.join(", ")}</p>
      `;
  
      registrationDetails.innerHTML = details;
    });
  });
  
  function cancelForm() {
    document.getElementById("registrationForm").reset();
    document.getElementById("registrationDetails").innerHTML = "";
  }