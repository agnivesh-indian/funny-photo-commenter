const photoUpload = document.getElementById('photo-upload');
const analyzeBtn = document.getElementById('analyze-btn');
const loader = document.getElementById('loader');
const loadingText = document.getElementById('loading-text');
const result = document.getElementById('result');
const comment = document.getElementById('comment');
const languageSelect = document.getElementById('language');

const comments = {
    english: [
        "Is that your face or did your neck throw up?",
        "I've seen better faces on a slapped arse.",
        "You're the reason the gene pool needs a lifeguard.",
        "If I had a face like yours, I'd sue my parents.",
        "You must have been born on a highway, because that's where most accidents happen.",
        "I'm not saying you're ugly, but you could be a modern art masterpiece.",
        "Your face is a crime scene, and my eyes are the detectives.",
        "You're living proof that God has a sense of humor.",
        "I've had nightmares that were more attractive than you.",
        "Are you a model? A model of what not to look like."
    ],
    malayalam: [
        "ഇതാണോ മുഖം അതോ കഴുത്തു ഛർദിച്ചതാണോ?",
        "ഇതിലും നല്ല മുഖം ഞാൻ കണ്ടിട്ടുണ്ട്, അതും തല്ലിയ зад ഭാഗത്തു.",
        "നിങ്ങളാണ് ജീൻ പൂളിന് ഒരു ലൈഫ്ഗാർഡ് വേണമെന്ന് ഓർമ്മിപ്പിക്കുന്നത്.",
        "എനിക്ക് ഇതുപോലൊരു മുഖം ഉണ്ടായിരുന്നെങ്കിൽ, ഞാൻ എൻ്റെ മാതാപിതാക്കൾക്കെതിരെ കേസ് കൊടുക്കുമായിരുന്നു.",
        "നീ ജനിച്ചത് ഒരു ഹൈവേയിലായിരിക്കണം, കാരണം അവിടെയാണ് ഏറ്റവും കൂടുതൽ അപകടങ്ങൾ നടക്കുന്നത്.",
        "ഞാൻ നിങ്ങളെ വൃത്തികെട്ടവൻ എന്ന് പറയുന്നില്ല, പക്ഷേ നിങ്ങൾ ഒരു ആധുനിക കലയുടെ മാസ്റ്റർപീസ് ആകാം.",
        "നിങ്ങളുടെ മുഖം ഒരു ക്രൈം സീൻ ആണ്, എൻ്റെ കണ്ണുകൾ ഡിറ്റക്ടീവുകളാണ്.",
        "ദൈവത്തിന് നർമ്മബോധം ഉണ്ടെന്നുള്ളതിന് ജീവിക്കുന്ന തെളിവാണ് നിങ്ങൾ.",
        "ഞാൻ ഇതിലും ആകർഷകമായ പേടിസ്വപ്നങ്ങൾ കണ്ടിട്ടുണ്ട്.",
        "നിങ്ങളൊരു മോഡലാണോ? എന്തിന്റെ മോഡൽ, എങ്ങനെയിരിക്കരുത് എന്നതിൻ്റെ."
    ],
    manglish: [
        "Ithaano mukham atho kazhuthu chardichathano?",
        "Ithilum nalla mukham njan kandittundu, athum thalliya зад bhagathu.",
        "Ningalaanu gene poolinu oru lifeguard venamennu ormippikkunnathu.",
        "Enikku ithupole oru mukham undayirunnenkil, njan ente maathapithakkalkkethire case kodukkumaayirunnu.",
        "Nee janichathu oru highwayil aayirikkanam, kaaranam avideyaanu ettavum kooduthal apakadangal nadakkunnathu.",
        "Njan ningale vrithikettavan ennu parayunnilla, pakshe ningal oru aadhunika kalayude masterpiece aakam.",
        "Nindude mukham oru crime scene aanu, ente kannukal detectiveukal aanu.",
        "Daivathinu narmabodham undennullathinu jeevikkunna thelivu aanu ningal.",
        "Njan ithilum aakarshakamaaya pediswapnangal kandittundu.",
        "Ningaloru modelaano? Enthinte model, enganeyirikkaruthu ennathinte."
    ]
};

const loadingMessages = {
    english: [
        "Scanning your face for any redeeming qualities...",
        "Applying advanced ugliness detection algorithms...",
        "Consulting with the spirits of brutal honesty...",
        "Trying to find something nice to say... this might take a while.",
        "Comparing your photo to a database of unfortunate-looking people...",
        "Calculating the probability of you ever getting a date...",
        "Analyzing your face... my condolences."
    ],
    malayalam: [
        "നിങ്ങളുടെ മുഖത്ത് എന്തെങ്കിലും നല്ല ഗുണങ്ങളുണ്ടോ എന്ന് പരിശോധിക്കുന്നു...",
        "അഡ്വാൻസ്ഡ് വൃത്തികേട് കണ്ടെത്തൽ അൽഗോരിതം പ്രയോഗിക്കുന്നു...",
        "ക്രൂരമായ സത്യസന്ധതയുടെ ആത്മാക്കളുമായി കൂടിയാലോചിക്കുന്നു...",
        "നല്ലതൊന്നും പറയാൻ കിട്ടുന്നില്ല... കുറച്ച് സമയമെടുക്കും.",
        "നിങ്ങളുടെ ഫോട്ടോ നിർഭാഗ്യവാന്മാരായ ആളുകളുടെ ഡാറ്റാബേസുമായി താരതമ്യം ചെയ്യുന്നു...",
        "നിങ്ങൾക്ക് എപ്പോഴെങ്കിലും ഒരു ഡേറ്റ് കിട്ടാനുള്ള സാധ്യത കണക്കാക്കുന്നു...",
        "നിങ്ങളുടെ മുഖം വിശകലനം ചെയ്യുന്നു... എൻ്റെ അനുശോചനം."
    ],
    manglish: [
        "Nindude mukathu enthenkilum nalla gunangalundo ennu parishodikkunnu...",
        "Advanced vrithikedu kandethal algorithm prayogikkunnu...",
        "Krooramaaya sathyasandhathayude aathmakkalumaayi koodiyaalochikkunnu...",
        "Nallathonnum parayan kittunnilla... kurachu samayamedukkum.",
        "Nindude photo nirbhagyavanmaaraya aalukalude databaseumaayi thaarathamyam cheyyunnu...",
        "Ningalkku eppozhenkilum oru date kittaanulla sadhyatha kanakkaakkunnu...",
        "Nindude mukham vishakalanum cheyyunnu... ente anushochanam."
    ]
};

analyzeBtn.addEventListener('click', () => {
    if (photoUpload.files.length === 0) {
        alert('Please upload a photo first!');
        return;
    }

    const language = languageSelect.value;
    loader.classList.remove('hidden');
    result.classList.add('hidden');

    let messageIndex = 0;
    loadingText.textContent = loadingMessages[language][messageIndex];
    const interval = setInterval(() => {
        messageIndex = (messageIndex + 1) % loadingMessages[language].length;
        loadingText.textContent = loadingMessages[language][messageIndex];
    }, 2000);

    setTimeout(() => {
        clearInterval(interval);
        loader.classList.add('hidden');
        const randomIndex = Math.floor(Math.random() * comments[language].length);
        comment.textContent = comments[language][randomIndex];
        result.classList.remove('hidden');
    }, 10000);
});
