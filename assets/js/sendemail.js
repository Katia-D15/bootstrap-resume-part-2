function sendMail(contactForm) {
    emailjs.send("gmail","rosie", {
    "project_request": contactForm.projectsummary.value,
    "from_name": contactForm.name.value,
    "from_email": contactForm.emailaddress.value
    })
    .then(
        function(response) {
            console.log("SUCCESS");

        },
    function(error){
        console.log("FAILED", error);
    });
    return false;
}