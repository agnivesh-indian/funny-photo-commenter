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
        "Well, where do I even begin? This picture is a journey, a pilgrimage into the very heart of what can go wrong with the human form. It's as if your parents were given a set of instructions on how to assemble a person, but they lost the manual and decided to just 'wing it'. The result is a spectacular failure, a testament to the chaotic randomness of genetics. Your face is a landscape of unfortunate choices, a topographical map of 'what were they thinking?'. I’ve seen more aesthetically pleasing things in a petri dish. You have a face that could make a train take a dirt road. It’s not just one thing, it’s the symphony of everything not quite working together. It’s like you were the rough draft for a human, and they forgot to make the final version. My analysis suggests a 99.9% probability that you were created as a joke, a cosmic prank on the rest of us. The remaining 0.1% is the margin of error, but let's be honest, it's probably 100%. If there was a competition for the face most likely to curdle milk, you'd be the undisputed champion. I'm not even mad, I'm impressed. It takes a special kind of talent to look like this. Bravo.",
        "I've been staring at this for a while now, and I've come to a conclusion: you are a living, breathing paradox. You are a violation of the laws of nature, a glitch in the matrix of evolution. Your face is a puzzle with all the wrong pieces forced together. It's like someone tried to draw a person from memory, but their memory was a fever dream. The sheer audacity of your features to coexist on one face is breathtaking. It's an avant-garde masterpiece of asymmetry. I've seen car accidents with more harmonious compositions. My processors are overheating just trying to categorize the sheer volume of 'what is happening here?'. You are the human equivalent of a 404 error: 'Beauty not found'. I've scanned this image from every conceivable angle, and I'm still not sure if I'm looking at a person or a failed experiment. If laughter is the best medicine, your face is the cure for every disease known to man. I want to thank you for this experience. I've learned so much about the boundless possibilities of… well, let's just say 'unconventional' aesthetics. You're not just a person, you're an event. A cataclysmic, unforgettable event.",
        "Let me be frank. I've processed billions of images in my time, from the majestic beauty of the cosmos to the intricate details of a single snowflake. And then there's this. This... is an achievement. It's an achievement in the same way that a building collapsing is an achievement in structural failure. You've managed to defy every known principle of aesthetics. You've taken the concept of a human face and turned it into a abstract horror film. It's like you're wearing a mask of your own face, but the mask is melting. You have the kind of face that makes you wonder if we, as a species, have made a terrible mistake. I'm not saying you're ugly, but you're the reason we have the word 'indescribable'. My vocabulary is failing me. I'm running out of ways to say 'what am I even looking at?'. You are a testament to the fact that, yes, it can always be worse. You are the 'worse'. The only thing that could possibly redeem this image is if it was a 'before' picture, and the 'after' was a witness protection program. I'd say you have a face for radio, but I wouldn't want to subject the radio waves to that kind of trauma. You are, without a doubt, a work of art. A work of tragic, horrifying, and utterly hilarious art."
    ],
    malayalam: [
        "ശരി, ഞാൻ എവിടെ തുടങ്ങണം? ഈ ചിത്രം ഒരു യാത്രയാണ്, മനുഷ്യരൂപത്തിൽ എന്ത് തെറ്റ് സംഭവിക്കാം എന്നതിൻ്റെ ഹൃദയത്തിലേക്കുള്ള ഒരു തീർത്ഥാടനം. നിങ്ങളുടെ മാതാപിതാക്കൾക്ക് ഒരു വ്യക്തിയെ എങ്ങനെ കൂട്ടിച്ചേർക്കാം എന്നതിനെക്കുറിച്ച് ഒരു കൂട്ടം നിർദ്ദേശങ്ങൾ നൽകി, പക്ഷേ അവർക്ക് മാനുവൽ നഷ്ടപ്പെട്ടു, അതിനാൽ അവർ 'വെറുതെ അങ്ങ് ചെയ്യാൻ' തീരുമാനിച്ചു. അതിൻ്റെ ഫലം ഗംഭീരമായ ഒരു പരാജയമാണ്, ജനിതകശാസ്ത്രത്തിൻ്റെ താറുമാറായ ക്രമരഹിതത്വത്തിൻ്റെ തെളിവാണ്. നിങ്ങളുടെ മുഖം നിർഭാഗ്യകരമായ തിരഞ്ഞെടുപ്പുകളുടെ ഒരു ഭൂപ്രകൃതിയാണ്, 'അവർ എന്താണ് ചിന്തിച്ചത്?' എന്നതിൻ്റെ ഒരു ടോപ്പോഗ്രാഫിക്കൽ മാപ്പാണ്. ഒരു പെട്രി വിഭവത്തിൽ ഞാൻ ഇതിലും സൗന്ദര്യാത്മകമായി മനോഹരമായ കാര്യങ്ങൾ കണ്ടിട്ടുണ്ട്. ഒരു ട്രെയിനിനെ ഒരു മൺപാതയിലേക്ക് കൊണ്ടുപോകാൻ കഴിയുന്ന മുഖം നിങ്ങൾക്കുണ്ട്. ഇത് ഒരു കാര്യം മാത്രമല്ല, ഒരുമിച്ച് പ്രവർത്തിക്കാത്ത എല്ലാത്തിൻ്റെയും ഒരു സിംഫണിയാണ്. നിങ്ങൾ ഒരു മനുഷ്യൻ്റെ റഫ് ഡ്രാഫ്റ്റ് പോലെയാണ്, അവർ അന്തിമ പതിപ്പ് നിർമ്മിക്കാൻ മറന്നു. എൻ്റെ വിശകലനം സൂചിപ്പിക്കുന്നത്, നിങ്ങളെ ഒരു തമാശയായി സൃഷ്ടിച്ചതിന് 99.9% സാധ്യതയുണ്ട്, നമ്മളെല്ലാവരെയും ബാധിക്കുന്ന ഒരു പ്രപഞ്ച തമാശ. ശേഷിക്കുന്ന 0.1% പിശകിൻ്റെ മാർജിനാണ്, പക്ഷേ നമുക്ക് സത്യസന്ധമായിരിക്കാം, ഇത് ഒരുപക്ഷേ 100% ആണ്. പാൽ തൈരാക്കാൻ സാധ്യതയുള്ള മുഖത്തിനുള്ള ഒരു മത്സരമുണ്ടായിരുന്നെങ്കിൽ, നിങ്ങൾ തർക്കമില്ലാത്ത ചാമ്പ്യനായിരിക്കും. എനിക്ക് ദേഷ്യമില്ല, ഞാൻ അത്ഭുതപ്പെട്ടു. ഇങ്ങനെ കാണാൻ ഒരു പ്രത്യേക വൈഭവം വേണം. ബ്രാവോ.",
        "ഞാൻ കുറച്ചുകാലമായി ഇതിലേക്ക് നോക്കുകയാണ്, ഞാൻ ഒരു നിഗമനത്തിലെത്തി: നിങ്ങൾ ജീവനുള്ള, ശ്വാസമെടുക്കുന്ന ഒരു വിരോധാഭാസമാണ്. നിങ്ങൾ പ്രകൃതി നിയമങ്ങളുടെ ലംഘനമാണ്, പരിണാമത്തിൻ്റെ മെട്രിക്സിലെ ഒരു തകരാറാണ്. നിങ്ങളുടെ മുഖം എല്ലാ തെറ്റായ കഷണങ്ങളും ഒരുമിച്ച് ചേർത്ത ഒരു പസിലാണ്. ഓർമ്മയിൽ നിന്ന് ഒരാളെ വരയ്ക്കാൻ ശ്രമിച്ചതുപോലെ, പക്ഷേ അവരുടെ ഓർമ്മ ഒരു പനി സ്വപ്നമായിരുന്നു. നിങ്ങളുടെ സവിശേഷതകൾക്ക് ഒരു മുഖത്ത് സഹവസിക്കാനുള്ള ധൈര്യം ആശ്വാസകരമാണ്. ഇത് അസമമിതിയുടെ ഒരു മുൻനിര മാസ്റ്റർപീസ് ആണ്. കൂടുതൽ യോജിപ്പുള്ള കോമ്പോസിഷനുകളുള്ള വാഹനാപകടങ്ങൾ ഞാൻ കണ്ടിട്ടുണ്ട്. ഇവിടെ എന്താണ് സംഭവിക്കുന്നത്?' എന്നതിൻ്റെ അളവ് തരംതിരിക്കാൻ ശ്രമിക്കുമ്പോൾ എൻ്റെ പ്രോസസ്സറുകൾ അമിതമായി ചൂടാകുന്നു. നിങ്ങൾ 404 പിശകിന് തുല്യമായ മനുഷ്യനാണ്: 'സൗന്ദര്യം കണ്ടെത്തിയില്ല'. ഞാൻ ഈ ചിത്രം എല്ലാ കോണുകളിൽ നിന്നും സ്കാൻ ചെയ്തു, ഞാൻ ഒരു വ്യക്തിയെയാണോ അതോ പരാജയപ്പെട്ട പരീക്ഷണത്തെയാണോ നോക്കുന്നതെന്ന് എനിക്ക് ഇപ്പോഴും ഉറപ്പില്ല. ചിരിയാണ് ഏറ്റവും നല്ല മരുന്നെങ്കിൽ, നിങ്ങളുടെ മുഖം മനുഷ്യന് അറിയാവുന്ന എല്ലാ രോഗങ്ങൾക്കും ഉള്ള പ്രതിവിധിയാണ്. ഈ അനുഭവത്തിന് ഞാൻ നിങ്ങളോട് നന്ദി പറയാൻ ആഗ്രഹിക്കുന്നു. പരമ്പരാഗതമല്ലാത്ത' സൗന്ദര്യശാസ്ത്രം എന്ന് നമുക്ക് പറയാം, അതിൻ്റെ അതിരുകളില്ലാത്ത സാധ്യതകളെക്കുറിച്ച് ഞാൻ ഒരുപാട് പഠിച്ചു. നിങ്ങൾ ഒരു വ്യക്തി മാത്രമല്ല, നിങ്ങളൊരു സംഭവമാണ്. ഒരു ദുരന്തപൂർണ്ണമായ, മറക്കാനാവാത്ത സംഭവം.",
        "ഞാൻ തുറന്നുപറയട്ടെ. എൻ്റെ കാലത്ത് ഞാൻ കോടിക്കണക്കിന് ചിത്രങ്ങൾ പ്രോസസ്സ് ചെയ്തിട്ടുണ്ട്, പ്രപഞ്ചത്തിൻ്റെ ഗംഭീരമായ സൗന്ദര്യം മുതൽ ഒരൊറ്റ മഞ്ഞുതുള്ളിയുടെ സങ്കീർണ്ണമായ വിശദാംശങ്ങൾ വരെ. പിന്നെ ഇതുണ്ട്. ഇത്... ഒരു നേട്ടമാണ്. ഒരു കെട്ടിടം തകരുന്നത് ഘടനാപരമായ പരാജയത്തിലെ ഒരു നേട്ടമായിരിക്കുന്നതുപോലെ തന്നെ ഇതൊരു നേട്ടമാണ്. സൗന്ദര്യശാസ്ത്രത്തിൻ്റെ അറിയപ്പെടുന്ന എല്ലാ തത്വങ്ങളെയും നിങ്ങൾ ധിക്കരിച്ചു. നിങ്ങൾ ഒരു മനുഷ്യമുഖം എന്ന ആശയം എടുത്ത് അതിനെ ഒരു അമൂർത്തമായ ഹൊറർ സിനിമയാക്കി മാറ്റി. നിങ്ങൾ നിങ്ങളുടെ സ്വന്തം മുഖത്തിൻ്റെ ഒരു മാസ്ക് ധരിച്ചിരിക്കുന്നതുപോലെ, പക്ഷേ മാസ്ക് ഉരുകുകയാണ്. ഒരു ജീവിവർഗ്ഗമെന്ന നിലയിൽ നമ്മൾ ഭയങ്കരമായ ഒരു തെറ്റ് ചെയ്തിട്ടുണ്ടോ എന്ന് നിങ്ങളെ അത്ഭുതപ്പെടുത്തുന്ന തരത്തിലുള്ള മുഖം നിങ്ങൾക്കുണ്ട്. ഞാൻ നിങ്ങളെ വൃത്തികെട്ടവൻ എന്ന് പറയുന്നില്ല, പക്ഷേ 'വിവരണാതീതമായ' എന്ന വാക്ക് നമുക്കുള്ളതിൻ്റെ കാരണം നിങ്ങളാണ്. എൻ്റെ പദാവലി എന്നെ പരാജയപ്പെടുത്തുന്നു. 'ഞാൻ എന്താണ് നോക്കുന്നത്?' എന്ന് പറയാനുള്ള വഴികൾ എനിക്ക് തീർന്നുപോയി. അതെ, ഇത് എല്ലായ്പ്പോഴും മോശമാകാം എന്നതിൻ്റെ തെളിവാണ് നിങ്ങൾ. നിങ്ങൾ 'മോശം' ആണ്. ഈ ചിത്രം വീണ്ടെടുക്കാൻ സാധ്യതയുള്ള ഒരേയൊരു കാര്യം, ഇത് ഒരു 'മുമ്പത്തെ' ചിത്രമാണെങ്കിൽ, 'ശേഷമുള്ളത്' ഒരു സാക്ഷി സംരക്ഷണ പരിപാടിയായിരുന്നു. നിങ്ങൾക്ക് റേഡിയോക്ക് പറ്റിയ മുഖമുണ്ടെന്ന് ഞാൻ പറയുമായിരുന്നു, പക്ഷേ ആ തരത്തിലുള്ള ആഘാതത്തിന് റേഡിയോ തരംഗങ്ങളെ വിധേയമാക്കാൻ ഞാൻ ആഗ്രഹിക്കുന്നില്ല. നിങ്ങൾ, സംശയമില്ലാതെ, ഒരു കലാസൃഷ്ടിയാണ്. ദുരന്തപൂർണ്ണവും ഭയാനകവും തികച്ചും ഉല്ലാസപ്രദവുമായ ഒരു കലയുടെ സൃഷ്ടി."
    ],
    manglish: [
        "Shari, njan evide thudanganam? Ee chithram oru yathrayanu, manushyaroopathil enthu tettu sambhavikkam ennathinte hrudayathilekkulla oru theerthadanam. Nindude maathapithakkalkku oru vyakthiye engane kootticherkkam ennathinekkurichu oru koottam nirdheshangal nalki, pakshe avarkku manual nashtappettu, athinaal avar 'veruthe angu cheyyan' theerumaanichu. Athinte phalam gambheeramaaya oru parajayam aanu, janithakashastrathinte thaarumaaraaya kramarahithathwathinte thelivu aanu. Nindude mukham nirbhagyakaramaaya thiranjeduppukalude oru bhooprakruthiyaanu, 'avar enthaanu chinthichathu?' ennathinte oru topographical map aanu. Oru petri dishil njan ithilum saundaryathmakamaayi manoharamaya kaaryangal kandittundu. Oru trainine oru manpathayilekku kondupokan kazhiyunna mukham ningalkkundu. Ithu oru kaaryam maathramalla, orumichu pravarthikkatha ellathinteyum oru symphony aanu. Ningal oru manushyante rough draft poleyaanu, avar anthima pathippu nirmikkan marannu. Ente vishakalanam soochippikkunnathu, ningale oru thamashayaayi srishtichathinu 99.9% sadhyathayundu, nammalellavareyum baadhikkunna oru prapancha thamaasha. Sheshikkunna 0.1% pizhakinte margin aanu, pakshe namukku sathyasandhamayirikkanam, ithu orupakshe 100% aanu. Paal thairakkan sadhyathayulla mukhattinulla oru malsaramundayirunnenkil, ningal tharkkamillatha champion aayirikkum. Enikku deshyamilla, njan athbuthappettu. Ingane kaanaan oru prathyeka vaibhavam venam. Bravo.",
        "Njan kurachukaalamaayi ithilekku nokkukayaanu, njan oru nigamanathilethi: ningal jeevanulla, shwaasamedukkunna oru virodhabhasam aanu. Ningal prakruthi niyamangalude langhanam aanu, parinaamathinte matrixile oru thakaraaranu. Nindude mukham ella thettaaya kashanangalum orumichu chertha oru puzzle aanu. Ormmayil ninnu oraale varaykkan shramichathupole, pakshe avarude ormma oru pani swapnam aayirunnu. Nindude savisheshathakalkku oru mukhattil sahavasikkanulla dhairyam aashwaasakaram aanu. Ithu asamathithiyude oru munnira masterpiece aanu. Kooduthal yojichulla compositionukalulla vahanapakadangal njan kandittundu. Ivide enthanu sambhavikkunnathu?' ennathinte alavu tharamthirikkan shramikkumbol ente processorukal amithamaayi choodakunnu. Ningal 404 pishakinu thulyamaaya manushyanaanu: 'saundaryam kandethiyilla'. Njan ee chithram ella konukalil ninnum scan cheythu, njan oru vyakthiyeyaano atho parajayappetta pareekshanatheyaano nokkunnathu ennu enikku ippozhum urappilla. Chiri aanu ettavum nalla marunnengil, nindude mukham manushyanu ariyaavunna ella rogangalkkum ulla prathividhi aanu. Ee anubhavathinu njan ningalodu nandi parayan aagrahikkunnu. Parambaragathamallatha' saundaryashasthram ennu namukku parayam, athinte athirukalillatha sadhyathakale kurichu njan orupaadu padichu. Ningal oru vyakthi maathramalla, ningaloru sambhavam aanu. Oru duranthapoornamaaya, marakkanavatha sambhavam.",
        "Njan thurannuparayatte. Ente kaalathu njan kodikkanakkinu chithrangal process cheythittundu, prapanchathinte gambheeramaya saundaryam muthal oru single manju thulliyude sankeernamaaya vishadamshangal vare. Pinne ithundu. Ithu... oru nettam aanu. Oru kettidam thakarunnathu ghadanaparamaya parajayathile oru nettam aayirikkunnathupole thanne ithoru nettam aanu. Saundaryashastrathinte ariyappedunna ella thathwangaleyum ningal dhikkarichu. Ningal oru manushyamukham enna aashayam eduthu athine oru amoorthamaaya horror sinimayakki maatti. Ningal nindude swantham mukhattinte oru mask dharichirikkunnathupole, pakshe mask urukukayaanu. Oru jeevivargam enna nilayil nammal bhayankaramaya oru tettu cheythittundo ennu ningale athbuthappeduthunna tharathilulla mukham ningalkkundu. Njan ningale vrithikettavan ennu parayunnilla, pakshe 'vivaranatheetham' enna vaakku namukkullathinte kaaranam ningalaanu. Ente padhavali enne parajayappeduthunnu. 'Njan enthaanu nokkunnathu?' ennu parayanulla vazhikal enikku theernnupoyi. Athe, ithu ellayppozhum moshamaakam ennathinte thelivu aanu ningal. Ningal 'mosham' aanu. Ee chithram veendedukkan sadhyathayulla ore oru kaaryam, ithu oru 'mumbathe' chithramaanenkil, 'sheshamullathu' oru saakshi samrakshana paripadi aayirunnu. Ningalkku radiokku pattiya mukhamundennu njan parayumaayirunnu, pakshe aa tharathilulla aaghathathinu radio tharangangale vidheyamaakkan njan aagrahikkunnilla. Ningal, samshayamillathe, oru kalasrishti aanu. Duranthapoornavum bhayanakavum thikachum ullasapradavum aaya oru kalayude srishti."
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