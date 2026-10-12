const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;

document.getElementById("lastModified").innerHTML = `Last Modification: ${document.lastModified}`;


 
    const feedbackForm = document.getElementById("feedback-form");
    const formFeedback = document.getElementById("form-feedback");

    if (feedbackForm) {
        feedbackForm.addEventListener("submit", (e) => {
            e.preventDefault();

            const fullname = document.getElementById("fullname").value;
            const email = document.getElementById("email").value;
            const message = document.getElementById("message").value;

          
            if (fullname && email) {
                const feedbackData = { fullname, email, message, date: new Date().toLocaleDateString() };
                
        
                localStorage.setItem("lastFeedback", JSON.stringify(feedbackData));

                formFeedback.classList.remove("hidden");
                formFeedback.textContent = `Thank you, ${fullname}! Your feedback has been saved locally.`;
                feedbackForm.reset();
            }
        });
    }

 
  
