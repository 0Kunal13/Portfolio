const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "BTech Mech Engineer";
    }, 0);
    setTimeout(() => {
        text.textContent = "CAD Software user.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Simulation & Analyser.";
    }, 8000);
};
textLoad();



const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener("click", () => {
    let resumePath =
        "https://drive.google.com/file/d/1fzOqOW0qdFoy4Z18BPO_dNNY-01dRM6j/view?usp=sharing";
    window.location.href = resumePath;
});

const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const projList = document.querySelector(".project-list");

let scrollAmount = 0;
const scrollStep = calculateStep();

prevBtn.addEventListener("click", () => {
    console.log("prev-btn clicked");
    scrollAmount -= scrollStep;
    if (scrollAmount < 0) {
        scrollAmount = 0;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});
nextBtn.addEventListener("click", () => {
    scrollAmount += scrollStep;
    console.log(scrollAmount);
    if (scrollAmount > projList.scrollWidth - projList.clientWidth) {
        scrollAmount = projList.scrollWidth - projList.clientWidth;
    }
    slideTo(scrollAmount);
    updateButtonVisibility();
});

// Function to calculate scroll step dynamically based on image sizes
function calculateStep() {
    const firstImage = document.querySelector(".overlay");
    const imageWidth = firstImage.clientWidth;
    // Add some additional padding or margin to the step if needed
    return imageWidth + 16; // Adjust this value as needed
}

function slideTo(amount) {
    projList.scrollTo({
        left: amount,
        behavior: "smooth",
    });
}
function updateButtonVisibility() {
    // Check if at the beginning or end of the scrollable content
    if (scrollAmount <= 0) {
        prevBtn.style.display = "none";
    } else {
        prevBtn.style.display = "block";
    }
    if (scrollAmount >= projList.scrollWidth - projList.clientWidth) {
        nextBtn.style.display = "none";
    } else {
        nextBtn.style.display = "block";
    }
}

// sending email
const form = document.querySelector("form");
const fullName = document.querySelector("#name");
const email = document.querySelector("#email");
const contact = document.querySelector("#contact");
const sub = document.querySelector("#sub");
const msg = document.querySelector("#messg");
const errorDivs = document.querySelectorAll(".error-field");

function sendEmail() {
    const bodyMesg = `Full Name : ${fullName.value}<br> Contact No.: ${contact.value}<br>Email-Address: ${email.value}<br> Message: ${msg.value}`;
    console.log(email.value);

    errorDivs.forEach((errorDiv) => {
        errorDiv.style.display = "none";
    });

    // Check if any required field is empty
    let hasError = false;
    errorDivs.forEach((errorDiv, index) => {
        const inputField = form.elements[index];
        if (!inputField.value) {
            showError(errorDiv);
            hasError = true;
        }
    });

    if (hasError) {
        return; // Prevent further processing if there are errors
    }
    function showError(errorDiv) {
        errorDiv.style.display = "block";
    }


}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
    form.reset();
});
const ul = document.querySelector(".ham-list");
const ham = document.querySelector(".hamburg-menu");
ham.addEventListener("click", () => {
    ul.classList.toggle("display");
});
document.querySelectorAll(".ham-list li").forEach((item) => {
    item.addEventListener("click", function () {
        document.querySelector(".ham-list").classList.remove("display");
    });
});
