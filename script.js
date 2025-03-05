document.addEventListener("DOMContentLoaded", function () {
    displayMotivations();
    displayQuote();
    displayGyan();

    document.getElementById("submit-btn").addEventListener("click", submitMotivation);
    document.getElementById("new-challenge").addEventListener("click", generateChallenge);
    document.getElementById("complete-challenge").addEventListener("click", completeChallenge);
    document.getElementById("new-quote").addEventListener("click",displayQuote());
});
function displayGyan(){
    const quotes = [
        "Karmanye vadhikaraste, ma phaleshu kadachana, \nMa karma phala hetur bhur, ma te sangostva akarmani. – Bhagavad Gita 2.47",
        
        "Vasamsi jirnani yatha vihaya, \nNavani grihnati naro parani, \nTatha sharirani vihaya jirnany, \nAnyani samyati navani dehi. – Bhagavad Gita 2.22",
        
        "Na jayate mriyate va kadachin, \nNayam bhutva bhavita va na bhuyah, \nAjo nityah shashvato'yam purano, \nNa hanyate hanyamane sharire. – Bhagavad Gita 2.20",
        
        "Yada yada hi dharmasya glanir bhavati bharata, \nAbhyutthanam adharmasya tadatmanam srijamy aham. – Bhagavad Gita 4.7",
        
        "Paritranaya sadhunam, vinashaya cha dushkritam, \nDharma-samsthapanarthaya, sambhavami yuge yuge. – Bhagavad Gita 4.8",
        
        "Dhyayato vishayan pumsah, sangas teshupajayate, \nSangat sanjayate kamah, kamat krodho'bhijayate. – Bhagavad Gita 2.62",
        
        "Krodhad bhavati sammohah, sammohat smriti-vibhramah, \nSmriti-bhramshad buddhi-nasho, buddhi-nashat pranashyati. – Bhagavad Gita 2.63",
        
        "Man mana bhava mad bhakto, \nMad yaji mam namaskuru, \nMam evaishyasi satyam te, \nPratijane priyo'si me. – Bhagavad Gita 18.65",
        
        "Sarva-dharman parityajya, mam ekam sharanam vraja, \nAham tvam sarva-papebhyo, mokshayishyami ma shuchah. – Bhagavad Gita 18.66",
        
        "Yogah karmasu kaushalam. – Bhagavad Gita 2.50"
    ];
    let randomGyan = quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById("gyan").textContent=randomGyan;
}
function displayQuote() {
    const quotes = [
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "Your only limit is your mind.",
        "Do what you can, with what you have, where you are. – Theodore Roosevelt",
        "Push yourself, because no one else is going to do it for you.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",
        "Dream big and dare to fail. – Norman Vaughan",
        "Hardships often prepare ordinary people for an extraordinary destiny. – C.S. Lewis",
        "Opportunities don’t happen. You create them. – Chris Grosser",
        "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
        "It always seems impossible until it’s done. – Nelson Mandela"
    ];
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
}

function submitMotivation() {
    let input = document.getElementById("motivation-input").value.trim();
    if (input === "") {
        alert("Please enter a motivational message.");
        return;
    }

    let messages = JSON.parse(localStorage.getItem("motivations")) || [];
    messages.push(input);
    localStorage.setItem("motivations", JSON.stringify(messages));

    document.getElementById("motivation-input").value = ""; // Clear input
    displayMotivations();
}

function displayMotivations() {
    let messages = JSON.parse(localStorage.getItem("motivations")) || [];
    let motivationList = document.getElementById("motivation-display");

    if (!motivationList) return;

    motivationList.innerHTML = ""; 

    messages.forEach((msg, index) => {
        let li = document.createElement("li");
        li.textContent = msg;

        // Delete button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = () => removeMotivation(index);

        li.appendChild(deleteBtn);
        motivationList.appendChild(li);
    });
}

function removeMotivation(index) {
    let messages = JSON.parse(localStorage.getItem("motivations")) || [];
    messages.splice(index, 1);
    localStorage.setItem("motivations", JSON.stringify(messages));
    displayMotivations();
}

function generateChallenge() {
    const challenges = [
        "Write down 3 things you're grateful for!",
        "Do 10 minutes of meditation!",
        "Perform a random act of kindness!",
        "Exercise for at least 20 minutes!",
        "Read something inspiring today!"
    ];
    let challenge = challenges[Math.floor(Math.random() * challenges.length)];
    document.getElementById("challenge").textContent = challenge;
}

function completeChallenge() {
    let countElement = document.getElementById("count");
    let count = parseInt(countElement.textContent) || 0;
    count++;
    countElement.textContent = count;
}
