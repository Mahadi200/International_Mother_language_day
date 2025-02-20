// বর্তমান সাল বের করে ইনপুট ফিল্ডের placeholder আপডেট করা
let currentYear = new Date().getFullYear();
document.getElementById("dateInput").placeholder = `21/02/${currentYear}`;

document.getElementById("dateInput").addEventListener("input", function() {
    let inputDate = this.value.trim();
    let expectedDate = `21/02/${currentYear}`; // বর্তমান বছরের জন্য ডায়নামিক তারিখ

    if (inputDate === expectedDate) {
        let messageContainer = document.getElementById("message-container");
        let messageBox = document.getElementById("message");
        let febImage = document.getElementById("febImage");

        messageBox.innerHTML = `
            <h2>🌺 সকল ভাষা শহীদের প্রতি বিনম্র শ্রদ্ধা ও গভীর কৃতজ্ঞতা 🌺</h2>
            <p>তাদের আত্মত্যাগেই আমরা পেয়েছি মাতৃভাষার অধিকার।</p>
            <p>তাদের আত্মার মাগফিরাত কামনা করছি।</p>
            <h3><strong>আন্তর্জাতিক মাতৃভাষা দিবস – বাংলা ভাষার গৌরবময় অর্জনের দিন। </strong></h3>
        `;
        
        messageContainer.style.display = "block";
        febImage.classList.add("show"); 
    } else {
        document.getElementById("message-container").style.display = "none";
        document.getElementById("febImage").classList.remove("show");
    }
});
