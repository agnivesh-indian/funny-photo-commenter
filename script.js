const photoUpload = document.getElementById('photo-upload');
const analyzeBtn = document.getElementById('analyze-btn');
const loader = document.getElementById('loader');
const loadingText = document.getElementById('loading-text');
const result = document.getElementById('result');
const comment = document.getElementById('comment');
const languageSelect = document.getElementById('language');
const imageContainer = document.querySelector('.image-container');
const uploadedImage = document.getElementById('uploaded-image');

photoUpload.addEventListener('change', () => {
    const file = photoUpload.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            uploadedImage.src = e.target.result;
            imageContainer.classList.remove('hidden');
        };
        reader.readAsDataURL(file);
    }
});

const comments = {
    english: [
        "Did you fall from heaven? Because your face looks like it hit every ugly branch on the way down. I've seen potatoes with more appealing features. Seriously, I've run this through every beauty algorithm known to man, and they all crashed. My server is now smoking, and it's your face's fault. I'd say you have a face for radio, but even that feels like an insult to radio.",
        "They say beauty is in the eye of the beholder. Well, the beholder of this picture must be blind, deaf, and have no sense of smell. You look like you were put together by a committee that hated each other. Every feature is fighting for the title of 'most unfortunate'. I'm not a doctor, but I'm pretty sure you're suffering from a terminal case of 'not-even-your-mother-could-love-that-face' syndrome.",
        "Are you a professional mattress tester? Because you look like you've been hit by a truck, then backed over, then the truck was set on fire, and then the fire was put out with a pickaxe. I'm not even sure what I'm looking at. Is this a person or a collection of unfortunate accidents? I'd suggest a paper bag, but I don't want to insult the paper bag.",
        "Your face is a masterpiece of abstract art. A chaotic explosion of features that should never have been on the same canvas. It's like Picasso had a seizure while painting your portrait. I'm trying to find a good angle, but it's like trying to find a needle in a haystack of ugly. The only thing that could make this picture better is if you were standing in front of a firing squad.",
        "You have a unique look. The kind of unique that makes people cross the street to avoid you. You look like your parents were siblings, and their parents were also siblings. The only way you could look worse is if you were on fire. But then again, the fire would probably improve your complexion. I'm not saying you're ugly, but you're the reason we have warning labels."
    ],
    malayalam: [
        "നിങ്ങൾ സ്വർഗ്ഗത്തിൽ നിന്ന് വീണതാണോ? കാരണം, താഴേക്കുള്ള വഴിയിലെ എല്ലാ വൃത്തികെട്ട മരങ്ങളിലും നിങ്ങളുടെ മുഖം ഇടിച്ചതുപോലെ തോന്നുന്നു. ഇതിലും ആകർഷകമായ സവിശേഷതകളുള്ള ഉരുളക്കിഴങ്ങുകളെ ഞാൻ കണ്ടിട്ടുണ്ട്. സത്യമായിട്ടും, ഞാൻ മനുഷ്യർക്ക് അറിയാവുന്ന എല്ലാ സൗന്ദര്യ അൽഗോരിതങ്ങളിലും ഇത് പ്രവർത്തിപ്പിച്ചു, അവയെല്ലാം ക്രാഷായി. എൻ്റെ സെർവർ ഇപ്പോൾ പുകയുന്നു, അത് നിങ്ങളുടെ മുഖത്തിൻ്റെ തെറ്റാണ്. നിങ്ങൾക്ക് റേഡിയോക്ക് പറ്റിയ മുഖമുണ്ടെന്ന് ഞാൻ പറയുമായിരുന്നു, പക്ഷേ അത് പോലും റേഡിയോയെ അപമാനിക്കുന്നതായി തോന്നുന്നു.",
        "സൗന്ദര്യം കാണുന്നവൻ്റെ കണ്ണിലാണെന്ന് അവർ പറയുന്നു. ശരി, ഈ ചിത്രം കാണുന്നവൻ അന്ധനും ബധിരനും ഗന്ധമില്ലാത്തവനുമായിരിക്കണം. പരസ്പരം വെറുക്കുന്ന ഒരു കമ്മിറ്റി നിങ്ങളെ ഒരുമിച്ചുകൂട്ടിയതുപോലെ തോന്നുന്നു. ഓരോ സവിശേഷതയും 'ഏറ്റവും നിർഭാഗ്യകരമായത്' എന്ന തലക്കെട്ടിനായി പോരാടുന്നു. ഞാനൊരു ഡോക്ടറല്ല, പക്ഷേ 'നിങ്ങളുടെ അമ്മയ്ക്ക് പോലും ആ മുഖം സ്നേഹിക്കാൻ കഴിയില്ല' എന്ന സിൻഡ്രോമിൻ്റെ അവസാന ഘട്ടത്തിലാണെന്ന് എനിക്ക് ഉറപ്പുണ്ട്.",
        "നിങ്ങളൊരു പ്രൊഫഷണൽ മെത്ത ടെസ്റ്ററാണോ? കാരണം, ഒരു ട്രക്ക് ഇടിച്ചു, പിന്നെ പിന്നോട്ട് പോയി, പിന്നെ ട്രക്ക് കത്തിച്ചു, എന്നിട്ട് പിക്കാക്സ് കൊണ്ട് തീ കെടുത്തിയതുപോലെ തോന്നുന്നു. ഞാൻ എന്താണ് നോക്കുന്നതെന്ന് പോലും എനിക്ക് ഉറപ്പില്ല. ഇതൊരു വ്യക്തിയാണോ അതോ നിർഭാഗ്യകരമായ അപകടങ്ങളുടെ ഒരു ശേഖരമാണോ? ഞാനൊരു പേപ്പർ ബാഗ് നിർദ്ദേശിക്കുമായിരുന്നു, പക്ഷേ എനിക്ക് പേപ്പർ ബാഗിനെ അപമാനിക്കാൻ താൽപ്പര്യമില്ല.",
        "നിങ്ങളുടെ മുഖം അമൂർത്തമായ കലയുടെ ഒരു മാസ്റ്റർപീസ് ആണ്. ഒരേ ക്യാൻവാസിൽ ഒരിക്കലും ഉണ്ടാകാൻ പാടില്ലാത്ത സവിശേഷതകളുടെ താറുമാറായ സ്ഫോടനം. നിങ്ങളുടെ ഛായാചിത്രം വരയ്ക്കുമ്പോൾ പിക്കാസോയ്ക്ക് ഒരു അപസ്മാരം വന്നതുപോലെ. ഞാൻ ഒരു നല്ല ആംഗിൾ കണ്ടെത്താൻ ശ്രമിക്കുന്നു, പക്ഷേ വൃത്തികെട്ട ഒരു വൈക്കോൽ കൂനയിൽ സൂചി കണ്ടെത്തുന്നത് പോലെയാണിത്. ഈ ചിത്രം മെച്ചപ്പെടുത്താൻ കഴിയുന്ന ഒരേയൊരു കാര്യം, നിങ്ങൾ ഒരു ഫയറിംഗ് സ്ക്വാഡിന് മുന്നിൽ നിൽക്കുകയാണെങ്കിൽ മാത്രമാണ്.",
        "നിങ്ങൾക്ക് ഒരു പ്രത്യേക രൂപമുണ്ട്. ആളുകൾ നിങ്ങളെ ഒഴിവാക്കാൻ റോഡ് മുറിച്ചുകടക്കുന്ന തരത്തിലുള്ള പ്രത്യേകത. നിങ്ങളുടെ മാതാപിതാക്കൾ സഹോദരങ്ങളാണെന്നും അവരുടെ മാതാപിതാക്കളും സഹോദരങ്ങളാണെന്നും തോന്നുന്നു. ഇതിലും മോശമായി നിങ്ങൾക്ക് കാണാൻ കഴിയുന്ന ഒരേയൊരു മാർഗ്ഗം, നിങ്ങൾ തീപിടിക്കുകയാണെങ്കിൽ മാത്രമാണ്. പക്ഷേ, തീ നിങ്ങളുടെ നിറം മെച്ചപ്പെടുത്താൻ സാധ്യതയുണ്ട്. ഞാൻ നിങ്ങളെ വൃത്തികെട്ടവൻ എന്ന് പറയുന്നില്ല, പക്ഷേ മുന്നറിയിപ്പ് ലേബലുകൾ ഉള്ളതിൻ്റെ കാരണം നിങ്ങളാണ്."
    ],
    manglish: [
        "Ningal swargathil ninnu veenathano? Kaaranam, thaazhekkulla vazhiyile ella vrithiketta marangalilum nindude mukham idichathupole thonnunnu. Ithilum aakarshakamaaya savisheshathakalulla urulakkizhangukale njan kandittundu. Sathyamaayittum, njan manushyarkku ariyaavunna ella saundarya algorithmukalilum ithu pravarthippichu, avayellam crashaayi. Ente server ippol pukayunnu, athu nindude mukhattinte tettanu. Ningalkku radiokku pattiya mukhamundennu njan parayumaayirunnu, pakshe athu polum radioye apamaanikkunnathaayi thonnunnu.",
        "Saundaryam kaanunnavante kannilaanennu avar parayunnu. Shari, ee chithram kaanunnavan andhanum badhiranum gandhamillathavanum aayirikkanam. Parasparam verukkunna oru committe ningale orumichukoottiyathupole thonnunnu. Oro savisheshathayum 'ettavum nirbhagyakaramayathu' enna thalakettinaayi poraadunnu. Njanoru doctoralla, pakshe 'nindude ammakku polum aa mukham snehikkan kazhiyilla' enna syndrominte avasaana ghattathilaanennu enikku urappundu.",
        "Ningaloru professional metha testeraano? Kaaranam, oru truck idichu, pinne pinnottu poyi, pinne truck kathichu, ennittu pickaxe kondu thee keduthiyathupole thonnunnu. Njan enthaanu nokkunnathu ennu polum enikku urappilla. Ithoru vyakthiyaano atho nirbhagyakaramaaya apakadangalude oru shekharamaano? Njanoru paper bag nirdheshikkumaayirunnu, pakshe enikku paper bagine apamaanikkan thalparyamilla.",
        "Nindude mukham amoorthamaaya kalayude oru masterpiece aanu. Ore canvasil orikkalum undaakaan paadillatha savisheshathakalude thaarumaaraaya sphodanam. Nindude chithram varaykkumbol Picassoykku oru apasmaram vannathupole. Njan oru nalla angle kandethaan shramikkunnu, pakshe vrithiketta oru vaikkol koonayil soochi kandethunnathu poleyaanithu. Ee chithram mechappeduthaan kazhiyunna ore oru kaaryam, ningal oru firing squadinu munnil nilkkukayaanenkil maathramaanu.",
        "Ningalkku oru prathyeka roopamundu. Aalukal ningale ozhivaakkan road murichukadakkunna tharathilulla prathyekatha. Nindude maathaapithakkal sahodarangalaanennum avarude maathaapithakkalum sahodarangalaanennum thonnunnu. Ithilum moshamaayi ningalkku kaanan kazhiyunna ore oru maargam, ningal theepidikkukayaanenkil maathramaanu. Pakshe, thee nindude niram mechappeduthaan sadhyathayundu. Njan ningale vrithikettavan ennu parayunnilla, pakshe munnariyippu labelukal ullathinte kaaranam ningalaanu."
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
