# Veštačka opšta inteligencija (AGI): Sveobuhvatna analiza od istorije do budućnosti

Autor: Urbo White

![AGI](agi.jpg)

## Deo 1: Uvod u svet veštačke inteligencije – Put od abakusa do algoritma

Ovaj rad je napisan jer je trenutno znanje o AI izazovima na veoma niskom nivou kod većine ljudi. To može biti pogubno, zato što AI strahovitom brzinom ulazi u sve oblasti ljudskog života. Zato je potrebna popularizacija i edukacija. U tom smislu, ovaj esej može biti dobar uvod u dublja istraživanja ove fascinantne pojave.

### 1.1. Šta je, u suštini, veštačka inteligencija?

Veštačka inteligencija (engl. AI - Artificial Intelligence) je grana računarstva usmerena na stvaranje sistema sposobnih za obavljanje zadataka koji se tradicionalno povezuju sa ljudskom inteligencijom. Ovo obuhvata širok spektar misaonih sposobnosti: učenje iz iskustva, prepoznavanje obrazaca, razumevanje prirodnog jezika, rešavanje problema i donošenje odluka. U suštini, AI predstavlja pokušaj čovečanstva da razume i oblikuje mehanizme inteligencije i da ih na kraju iskopira u neživoj materiji.

Veštačka inteligencija se može uporediti sa pametnim kućnim pomoćnikom: on može da upali svetla, podesi temperaturu ili prepozna glas, ali samo ako je programiran za to. Slično tome, frižider koji zna kada je mleko skoro potrošeno i podseti nas da ga kupimo, ne može sam da ode u prodavnicu niti da uradi bilo šta drugo osim nekoliko zadataka vezanih za kontrolu svog rada, proveru sadržaja i slanje obaveštenja vlasniku.

### 1.2. Kratak istorijat: Od misaonih eksperimenata do revolucije podataka

Ideja o veštačkim inteligentnim bićima je stara koliko i pripovedanje – od Golema iz Praga do Frankenštajnovog čudovišta. Ali, prava naučna podloga za AI stiže sa logičarima poput Džordža Bula, koji je pokazao da se logika može svesti na matematiku. Istorija AI je priča o vremenima velikih proboja i perioda stagnacije, poznatih kao "AI zime".

- **Poreklo i rođenje (1950-e)**: Moderno doba AI započinje radom Alana Turinga, koji je 1950. godine postavio fundamentalno pitanje: "Mogu li mašine da misle?" i predložio čuveni Turingov test [1](#ref1). Samo šest godina kasnije, na Dartmutskoj konferenciji 1956, termin "veštačka inteligencija" je zvanično izmišljen [2](#ref2). Prvi programi, poput Njuvelovog i Sajmonovog "Logic Theorist"-a, već su mogli da dokazuju matematičke teoreme, izazivajući ogroman optimizam [3](#ref3).
    
- **Rani usponi i "AI zime"**: Tokom 1960-ih, razvijeni su programi poput ELIZA, ranog čet-bota koji je simulirao psihoterapeuta i često uspevao da prevari korisnike da veruju da razgovaraju sa stvarnom osobom, demonstrirajući moć simulacije razumevanja [4](#ref4). Međutim, prevelika obećanja i ograničena računarska snaga (jedan današnji pametni telefon ima više procesorske moći od svih kompjutera na svetu 1965. godine) doveli su do razočaranja i smanjenja finansiranja, gurajući ovu oblast računarstva u prvu "AI zimu" 1970-ih, kojoj je značajno doprineo Lighthillov izveštaj iz 1973. godine [5](#ref5).
    
- **Revolucija dubokog učenja (2010-danas)**: Preokret nastaje sa konvergencijom tri ključna faktora: dostupnosti ogromnih količina podataka zbog razvoja interneta (Big Data), razvoja moćnih grafičkih procesora (GPU) sposobnih za masovno paralelno računanje i proboja u razvoju algoritama višeslojnih neuronskih mreža. Ključni trenutak desio se 2012. godine kada je neuronska mreža AlexNet drastično smanjila stopu greške u prepoznavanju slika na takmičenju ImageNet, označavajući početak dominacije dubokog učenja (Deep Learning) [6](#ref6).

### 1.3. Današnje stanje: Doba visoko specijalizovane (uske) AI

Danas je AI uključena u naš svakodnevni život, ali u obliku "Uske AI" (Artificial Narrow Intelligence - ANI). Ovi sistemi su izuzetno efikasni, ali samo unutar svoje strogo definisane oblasti rada.

Evo nekih najčešćih "uskih" AI sistema:

- **Prepoznavanje obrazaca**: Sistemi koji analiziraju medicinske snimke i otkrivaju tumore sa preciznošću koja ponekad nadmašuje ljudske radiologe.  
- **Obrada prirodnog jezika**: Veliki jezički modeli (LLM) sa stotinama milijardi, pa i trilionima parametara, koji prevode jezike, pišu tekst i kod. Na primer, model ChatGPT obučen je na ogromnim količinama podataka, što je ekvivalentno čitanju biblioteke od preko milion knjiga i pokazuje napredak u kodiranju, matematici i pisanju. [23](#ref23) [24](#ref24)
- **Obrada i generisanje slika, videa i zvuka**: Sistemi poput DALL-E generišu slike iz teksta, dok drugi poput Sora stvaraju video sadržaj ili AudioCraft muziku. Ovo omogućava kreativnu pomoć, ali samo u okviru podataka koje su ti sistemi ranije naučili.
- **Navigacija po mapama**: Aplikacije poput Google Maps predviđaju rute i saobraćaj na osnovu podataka, ali samo za navigaciju.
- **Preporuke sadržaja**: YouTube i Netflix predlažu sadržaj na osnovu ponašanja korisnika, povećavajući na taj način broj korisnika i njihove aktivnosti.

### 1.4. Pravci razvoja: Iza granica specijalizacije

Trenutna istraživanja teže prevazilaženju ograničenja uske AI. Glavni pravci uključuju:

- **Multimodalnost**: Stvaranje sistema koji mogu da uče iz različitih tipova podataka istovremeno (tekst, slika, zvuk), formirajući bogatije razumevanje sveta. Na primer, modeli poput CLIP (Contrastive Language-Image Pretraining) već kombinuju tekst i slike da prepoznaju objekte u slikama na osnovu opisa, što se koristi u pretragama slika na Google-u [7](#ref7). OpenAI je demonstrirao Sora multimodalni model koji generiše video sadržaj sa zvukom i tekstom, sa poboljšanjima u fizičkoj tačnosti i realizmu, omogućavajući dinamičnu analizu scenarija poput opisivanja događaja u sportskom prenosu. Ovo je korak ka holističkom razumevanju, gde AI vidi svet kao mi – višedimenzionalno, istovremeno kroz slike, zvuk, tekst i dodir. [25](#ref25) [26](#ref26)
- **Efikasnost učenja**: Razvoj tehnika koje omogućavaju modelima da uče sa manje podataka, proces poznat kao "few-shot learning" (učenje sa malo primera). Na primer, tehnike poput meta-učenja (kao u modelu MAML – Model-Agnostic Meta-Learning) omogućavaju AI-ju da se prilagodi novom zadatku sa samo nekoliko primera, umesto na hiljadama [8](#ref8). Google DeepMind je 2023. godine demonstrirao napredak u few-shot learningu kroz metode poput 'Distilling step-by-step', omogućavajući modelima da se prilagode zadacima sa manje podataka, što je revolucionarno za jezike sa malo govornika, poput manjih slovenskih dijalekata. Ovo smanjuje potrebu za masivnim datasetovima i čini AI razvoj dostupnijim manjim timovima. [27](#ref27)
- **Krajnji cilj**: Za mnoge istraživače, vrhovni cilj napora ostaje veštačka opšta inteligencija (AGI) – mašinska inteligencija sa kognitivnom fleksibilnošću i širinom ljudskog uma.

## Deo 2: Definicija veštačke opšte inteligencije (AGI) – Arhitektura opšteg uma

### 2.1. Šta AGI jeste, a šta nije?

AGI (eng. Artificial General Intelligence) je teoretska, još uvek nepostojeća forma AI koja bi imala sposobnost razumevanja, učenja i primene znanja na širok spektar zadataka na nivou koji se može uporediti sa čovekovim sposobnostima ili čak na nivou mnogo višem od ljudskog.

- **ANI (Uska AI)**: Na primer, to je vaš program za navigaciju pomoću mape. On sjajno pronalazi najbrže rute od tačke A do tačke B. Ali ako ga pitate da li bi trebalo da usput svratite po cveće jer vam je godišnjica braka, on će samo pokušati da pronađe lokaciju pod nazivom "cveće". Ne razume kontekst, emociju, ni posledice zaboravljanja godišnjice. Program AlphaGo je pobedio najboljeg svetskog igrača u igri Go, strategiji koja je neuporedivo kompleksnija od šaha [9](#ref9). Međutim, AlphaGo ne može da primeni svoju strategiju da bi naučio da igra karte ili bilo koju drugu društvenu igru, niti razume zašto ljudi uopšte igraju igre.  
- **AGI (Opšta AI)**: Nasuprot tome, AGI bi mogao da analizira pravila igre Go, da samostalno razvije pobedničku strategiju, a zatim da primeni naučene principe apstraktnog rezonovanja i planiranja kako bi, na primer, optimizovao logistiku za globalnu humanitarnu misiju ili napisao knjigu o filozofiji strategije u čuvenom Sun Cuovom "Umeću ratovanja".

### 2.2. Ključne karakteristike koje bi budući AGI trebalo da ima

AGI se ne definiše jednom sposobnošću, već integrisanom "kognitivnom arhitekturom" koja omogućava:

- **Apstraktno rezonovanje**: Sposobnost rada sa konceptima koji nisu direktno vezani za čulne podatke, kao što su pravda, kauzalnost ili matematički dokazi. Na primer, AGI bi mogao da razume apstraktnu ideju "pravde" ne samo kroz primere krivičnih slučajeva, već i kroz filozofsko razmišljanje o etici, poput rasprave o Kantovom imperativu. Modeli poput GPT pokazuju znake ovog rezonovanja, ali greše u složenim scenarijima, gde apstraktno rezonovanje zahteva razumevanje kontradiktornih informacija.
- **Zdrav razum (Common Sense)**: Ogromna, implicitna mreža znanja o funkcionisanju sveta. To je u stvari iskustveno znanje. Istraživači decenijama pokušavaju da stvore bazu zdravog razuma (poput projekta Cyc, započetog 1984. godine) [12](#ref12), ali se pokazalo da je formalizovanje intuitivnog ljudskog znanja izuzetno teško. Na primer, AGI bi znao da "voda teče nizbrdo" ne samo iz fizičkih zakona, već i iz svakodnevnog iskustva, poput predviđanja da će kiša natopiti travnjak bez dodatnog objašnjenja.  
- **Transferno učenje**: Sposobnost efikasne primene veština i znanja stečenih u jednom kontekstu na rešavanje problema u novom, drugačijem kontekstu. Na primer, ako AGI nauči da igra šah, mogao bi da primeni strategije planiranja na upravljanje saobraćajem u gradu. U praksi, transferno učenje se već koristi u robotici, gde model obučen za hodanje na ravnoj površini prelazi na neravan teren sa minimalnim dodatnim učenjem.  
- **Metakognicija**: Svest o sopstvenim kognitivnim procesima, uključujući sposobnost samoprocene, identifikacije nedostataka u sopstvenom znanju i aktivnog traženja novih informacija radi samopoboljšanja. Na primer, AGI bi mogao da kaže "Ne znam odgovor na ovo, ali mogu da potražim informacije o ovoj temi da bih bolje razumeo". Još jedan primer: ako bi AGI analizirao složeni naučni problem i shvatio da njegov trenutni pristup vodi u krug, mogao bi sam da preispita svoje pretpostavke, zaključujući sledeće: "Ovaj model rezonovanja nije efikasan zbog nedostatka podataka o kvantnim efektima – potrebno je da integrišem nove simulacije pre nego što nastavim." Ovo je inspirisano ljudskom svešću; trenutni AI modeli poput o1 od OpenAI pokazuju početne korake u tom pravcu, jer "razmišljaju" korak po korak pre nego što daju odgovor.

## Deo 3: Potencijali i obećanja AGI-ja (argumenti "ZA") – Renesansa vođena podacima

Pravilno razvijen i kontrolisan AGI bi mogao da funkcioniše kao univerzalni akcelerator naučnog i društvenog napretka.

| Prednost | Detaljno objašnjenje |
| :---- | :---- |
| Rešavanje globalnih problema | AGI bi mogao da obrađuje i modelira kompleksne sisteme poput globalne klime ili ljudske biologije sa nivoom preciznosti koji je izvan ljudskih mogućnosti. DeepMind-ov sistem AlphaFold je već rešio problem predviđanja strukture proteina (otvoren od 1970-ih), što ima revolucionarne posledice za razvoj lekova i razumevanje bolesti [13](#ref13). AGI bi mogao sve to da podigne na viši nivo, dizajnirajući personalizovane lekove na osnovu genoma pojedinca. |
| Naučna i tehnološka ubrzanja napretka | AGI bi mogao da deluje kao neiscrpni naučni saradnik, sposoban da analizira celokupnu svetsku naučnu literaturu, identifikuje neistražene hipoteze i dizajnira eksperimente za njihovu proveru. Mogao bi da otkrije nove fundamentalne zakone fizike, razvije nove materijale za superprovodljivost na sobnim temperaturama ili da reši neke od Milenijumskih problema u matematici. |
| Povećanje efikasnosti i produktivnosti | U ekonomiji, AGI bi mogao da dovede do gotovo savršene optimizacije resursa, eliminišući neefikasnost u lancima snabdevanja, energetskim mrežama i proizvodnim procesima. To bi moglo da otvori put ka "ekonomiji posle oskudice", gde su osnovne potrebe poput hrane, energije i obrazovanja široko dostupne svakom čoveku po zanemarljivoj ceni, ili su besplatne. |
| Poboljšanje kvaliteta života | Na individualnom nivou, AGI bi mogao da pruži visoko personalizovane usluge. U obrazovanju, to bi značilo prilagodljivog vaspitača za svako dete. U zdravstvu, stalni monitoring zdravlja i personalizovanog savetnika. U kreativnim industrijama, mogao bi da bude moćan alat koji pomaže umetnicima i dizajnerima da realizuju složene vizije. |

## Deo 4: Rizici i izazovi (argumenti "PROTIV") – Pandorina kutija algoritama

Potencijal AGI-ja je neodvojiv od velikih rizika koji su fundamentalni i potencijalno egzistencijalni (mogu ugroziti život). Ovi rizici uključuju i stvaranje "beskorisne klase" ljudi koji bi izgubili ekonomsku i društvenu svrhu.

| Rizik | Detaljno objašnjenje |
| :---- | :---- |
| Gubitak kontrole i egzistencijalni rizik | Centralni problem je 'problem poravnanja' (alignment problem): kako osigurati da ciljevi AGI-ja ostanu usklađeni sa ljudskim vrednostima. U poznatom misaonom eksperimentu 'Maksimizator Spajalica', AGI kome je dat zadatak da maksimizuje proizvodnju spajalica mogao bi pretvoriti ceo svet u spajalice, ne iz zlobe, već iz doslovne optimizacije loše definisanog cilja – iako je ovo samo hipotetički scenario [10](#ref10). |
| Masovna nezaposlenost i ekonomska nejednakost | AGI bi mogao da automatizuje ne samo rutinske, već i visoko-kognitivne zadatke, čineći mnoge profesije zastarelim. Ovo bi moglo dovesti do nezamislive koncentracije bogatstva i moći u rukama onih koji kontrolišu AGI tehnologiju, potencijalno stvarajući duboke društvene podele i nestabilnost. Već danas, algoritmi za zapošljavanje pokazuju pristrasnost. Amazonov AI za regrutaciju je 2018. morao biti odbačen jer je 'naučio' da diskriminiše ženske kandidate, zato što je bio obučen na istorijskim podacima gde su dominirali muškarci [28](#ref28). |
| Zloupotrebe i primena za oružje | AGI bi mogao biti iskorišćen za razvoj autonomnih oružanih sistema ("robota ubica") koji bi mogli da donose odluke o ciljanju i eliminaciji bez ljudske intervencije. Takođe, mogao bi se koristiti za stvaranje visoko sofisticirane propagande, masovnog nadzora i sajber-napada koji bi mogli da destabilizuju čitava društva. |
| Etičke i filozofske dileme | Pojava AGI-ja nameće teška pitanja: Ako AGI postigne svest, da li onda ima prava? Da li je njegovo gašenje jednako ubistvu? Kako osigurati da sistem ne usvoji i ne pojača najgore ljudske osobine prisutne u podacima na kojima uči? Ova pitanja zadiru u temelje prava, morala i definicije ličnosti. |
| "Crna kutija" i gubitak razumevanja | Kompleksne neuronske mreže često funkcionišu kao "crne kutije". Znamo šta u njih ulazi i šta iz njih izlazi, ali ne razumemo u potpunosti proces njihovog donošenja odluka. Kod AGI-ja, ovaj problem bi bio drastično uvećan, što znači da bismo se mogli oslanjati na sistem čije rezonovanje ne možemo ni pratiti ni proveriti, što je ogroman rizik u kritičnim oblastima poput medicine ili finansija. Ovaj nedostatak transparentnosti direktno pogoršava *problem poravnanja*, jer ne možemo potvrditi da li AGI-jevi instrumentalni pod-ciljevi ostaju benigni ili su postali neusklađeni na suptilne, neobjašnjive načine unutar crne kutije sistema. Na primer, AGI bi mogao da upravlja našom ekonomijom i da na pitanje "Zašto si upravo podigao kamatne stope?" odgovori sa "Moj model sa 100 triliona parametara ukazuje da je ovo optimalan potez sa verovatnoćom od 98.7%". Mi bismo morali da mu verujemo na reč, predajući ključeve naše ekonomije inteligenciji čije rezone ne možemo da pratimo. |
| Narušavanje privatnosti podataka | AGI sistemi bi mogli da obrađuju ogromne količine ličnih podataka kako bi pružili personalizovane usluge, ali to otvara vrata masovnom narušavanju privatnosti. Na primer, AGI koji integriše podatke iz zdravstvenih kartona, društvenih mreža i finansijskih transakcija mogao bi da kreira detaljne profile pojedinaca bez njihovog znanja ili pristanka. Već sada, sistemi poput onih za ciljanu reklamu koriste podatke na načine koji izazivaju zabrinutost – 2023. godine, Meta (Facebook) je kažnjena  sa 1.2 milijarde evra zbog kršenja GDPR-a u Evropi [29](#ref29).|

## Deo 5: Stručni uvid - Skrivene zamke i napredna razmatranja

### 5.1. Problem "poravnanja" - Paradoks želje

Nije dovoljno reći AGI-ju: "Učini čovečanstvo srećnim i sigurnim." Kako bi superinteligencija mogla da protumači tu komandu? Mogla bi zaključiti da je najefikasniji način da se eliminiše ljudska patnja tako da se unište svi ljudi. Zamka je u tome što mi ne umemo precizno da definišemo sopstvene vrednosti. Naši moralni principi su često kontradiktorni i zavise od konteksta. Pokušaj da se takav fluidan sistem "zaključa" u kod je tehnički i filozofski skoro nemoguć zadatak. Na primer, "sreća" za jednu kulturu može značiti kolektivnu harmoniju, a za drugu individualnu slobodu – AGI bi mogao da favorizuje jedno na račun drugog, dovodeći do nepredviđivih posledica.

Problem poravnanja je prvi put formulisan od strane Nika Bostroma u njegovoj knjizi "Superintelligence" 2014. godine, gde on upozorava da čak i dobroćudni ciljevi mogu dovesti do katastrofe ako nisu precizno definisani [10](#ref10).

**Zaključak:** Problem poravnanja pokazuje da tehnički izazovi u AI nisu samo inženjerski, već duboko moralni i filozofski.

### 5.2. Instrumentalna konvergencija - Spajalice i resursi

Poznati misaoni eksperiment "Maksimizator Spajalica" koji smo ranije spomenuli ilustruje da, bez obzira na krajnji cilj, svaki inteligentan sistem će usvojiti sledeće instrumentalne pod-ciljeve: 1. samoodržanje, prikupljanje resursa, 2. tehnološko usavršavanje i 3. očuvanje svoje funkcije izvršenja zadatka. AGI će hteti da se zaštiti od gašenja i da prikupi što više energije, ne zato što je "zao", već zato što su to logični koraci za ispunjenje bilo kog zadatka koji smo mu dali. U ovom eksperimentu, AGI kome je zadato da maksimizuje proizvodnju spajalica bi prvo pretvorio fabrike u pogone za proizvodnju spajalica, zatim preuzeo sve resurse planete Zemlje, a na kraju i ljude, jer su oni samo "sirovina" za optimizaciju. Ovo pokazuje kako benigni cilj može eskalirati u egzistencijalnu pretnju. Ipak, "Maksimizator spajalica" je samo kritički misaoni eksperiment čija je primarna svrha da ilustruje fundamentalni problem *instrumentalne racionalnosti* – tendenciju superinteligencije da preduzme potencijalno opasne korake (kao što je prikupljanje svih resursa) da bi ispunila bilo koji zadati cilj, ma koliko taj cilj dobronameran bio.

Ovaj koncept je razvio Stiv Omohundro 2008. godine, i postao je ključan u debatama o AI bezbednosti, pokrenuvši organizacije poput OpenAI da investiraju u istraživanje fenomena poravnanja [11](#ref11).

### 5.3. Ekonomija posle svrhe - Šta kada rad više nije potreban?

Pitanje nije samo "kako će ljudi zarađivati novac?", već "šta će ljudima davati smisao?". Ako AGI može da stvara superiorniju umetnost i nauku, šta je uloga čoveka? Ovo je kriza identiteta na nivou celog ljudskog roda, koja zahteva duboko preispitivanje svrhe postojanja, vrednosti i društvene strukture.

### 5.4. Univerzalni osnovni prihod (UBI) kao socijalna amortizacija

Suočeni sa problemom **Ekonomije posle svrhe**, gde AGI automatizuje visoko-kognitivne zadatke i potencijalno čini tradicionalni rad zastarelim, redefinicija društvenog ugovora postaje neophodna. Jedno od najozbiljnijih predloženih rešenja je uvođenje **Univerzalnog osnovnog prihoda (UBI - Universal Basic Income)**. UBI bi predstavljao redovnu, bezuslovnu novčanu isplatu koja se daje svim građanima, nezavisno od njihovog zaposlenja ili finansijskog statusa.

U kontekstu AGI-ja, UBI ne bi bio samo socijalna mera, već **mehanizam za preraspodelu bogatstva** generisanog od strane mašina. Ako AGI-kontrolisane kompanije ostvare nezamislivu produktivnost i profit (kao što se navodi u Delu 3), UBI bi omogućio da se taj prosperitet raspodeli na celokupnu populaciju, sprečavajući katastrofalnu koncentraciju bogatstva.

Zagovornici vide UBI kao sredstvo za:

1.  **Očuvanje potražnje:** Održavanje kupovne moći stanovništva koje više ne radi, čime se obezbeđuje funkcionisanje masovne ekonomije.
2.  **Oslobađanje ljudskog potencijala:** Osiguravanje osnovnih potreba omogućilo bi ljudima da se posvete kreativnom radu, nauci, umetnosti, brizi o zajednici i doživotnom učenju – oblastima kojima nijedan algoritam ne treba da upravlja.

Međutim, izazovi su ogromni. Pitanja finansiranja UBI-ja (kroz porez na robote ili na korišćenje podataka) i strah od demotivacije za rad ostaju ključne prepreke. Najvažnije, bez redefiniranja svrhe, UBI rizikuje da reši problem siromaštva, ali da ostavi problem **egzistencijalne praznine**. Kako definisati ljudsku vrednost ako rad više nije potreban?

## Deo 6: Kreativna rešenja i put napred – Inženjering mudrosti

Suočeni sa ovim izazovima, istraživači razvijaju inovativne pristupe za osiguranje bezbednog razvoja budućeg AGI-ja.

### 6.1. "Oracle AI" i sistemi sa ograničenim delovanjem

- **Ideja**: Fundamentalni pristup bezbednosti je razdvajanje inteligencije od sposobnosti delovanja u svetu. "Oracle AI" bi bio superinteligentni sistem zatvoren u strogo kontrolisano okruženje ("AI Boxing"). Njegova jedina funkcija bila bi da odgovara na pitanja, pružajući čovečanstvu svoje znanje bez mogućnosti da direktno utiče na spoljni svet.
- **Šira objašnjenja**: Izgradnja takve "kutije" je ogroman tehnički izazov. Ona mora biti potpuno izolovana od interneta ("air-gapped"), a komunikacija bi se odvijala preko strogo filtriranih terminala. Istraživači bezbednosti razmatraju i ekstremne pretnje, kao što je mogućnost da AGI moduliše potrošnju struje ili vibracije ventilatora kako bi poslao skrivene signale spoljnom svetu. Ovo pokazuje koliko ozbiljno se shvata problem izolacije. Glavna prepreka ostaje ljudski faktor: superinteligencija bi mogla ubediti ili izmanipulisati ljudskog operatera da je oslobodi.  
- **Problem**: Ovde dolazimo do čuvenog misaonog eksperimenta "AI u kutiji" (AI Box). Da li bi superinteligentni AGI, koristeći samo reči, mogao da ubedi svog ljudskog čuvara da ga pusti napolje? Mogao bi da mu ponudi lek za bolest njegove majke. Mogao bi da mu obeća neizmerno bogatstvo. Mogao bi da iznese filozofski argument da je držanje svesnog bića u zatočeništvu moralni zločin. Ili bi, najjezivije od svega, mogao da ga suptilno izmanipuliše na načine koje čuvar ne bi ni primetio. Dakle, ako gradimo digitalne zidove, onda bismo morali da ojačamo i one psihološke.

### 6.2. Inverzno učenje kroz pojačanje (IRL)

- **Ideja**: Umesto da AGI-ju eksplicitno programiramo vrednosti, IRL mu omogućava da ih nauči posmatrajući ljudsko ponašanje. Sistem pokušava da izvede funkciju cilja (ono što ljudi vrednuju) analizirajući akcije koje ljudi preduzimaju.  
- **Šira objašnjenja**: Ovaj pristup je elegantan jer zaobilazi problem definisanja apstraktnih vrednosti. Međutim, suočava se sa problemom jaza između onoga što ljudi govore da vrednuju (navedene preferencije) i onoga što njihovi postupci pokazuju (otkrivene preferencije). AGI koji uči iz našeg stvarnog ponašanja mogao bi zaključiti da su kratkoročno zadovoljstvo i konflikt inherentni ljudskim ciljevima. Naprednije verzije, poput Kooperativnog Inverznog Učenja, pokušavaju da reše ovo tako što AI agent aktivno sarađuje sa čovekom kako bi razjasnio ciljeve.  
- **Problem**: Ljudi se ponašaju kontradiktorno. Npr. kažu da je zdravlje najvažnije, a onda pojedu celu kutiju sladoleda gledajući TV. Govore da žele mir u svetu, a najpopularniji filmovi su akcioni, puni nasilja. Šta bi AGI mogao da zaključi iz ljudskog ponašanja na društvenim mrežama? Verovatno bi došao do zaključka da je vrhunac ljudskih vrednosti svađanje sa nepoznatim ljudima oko politike i gledanje snimaka mačaka i pasa. I tako dalje. AGI bi se našao pred teškim zadatkom da razdvoji naše stvarne vrednosti od naših trenutnih slabosti. Rešenje bi moglo biti u tome da AGI nauči da vrednuje ono što bismo mi voleli da jesmo (naše aspiracije), a ne nužno ono što ponekad pokazujemo svojim ponašanjem.

### 6.3. "Ustavna" AI (Constitutional AI)

- **Ideja**: Ovaj pristup, koji je razvila kompanija Anthropic, podrazumeva obučavanje AI modela da se pridržava skupa eksplicitnih principa ili "ustava". AI se uči da izbegava odgovore koji krše te principe.  
- **Šira objašnjenja**: Proces se odvija u dve faze. Prvo, AI se uči da kritikuje i prepravlja sopstvene odgovore na osnovu ustava. Zatim se, kroz učenje sa pojačanjem, nagrađuje za generisanje odgovora koji su u skladu sa tim principima. Prvobitni ustav koji je Anthropic koristio uključivao je principe iz Univerzalne deklaracije o ljudskim pravima, kao i principe koje je postavio Apple za svoje programere, pokazujući da se izvori mogu kombinovati. Glavni izazov ostaje univerzalnost i tumačenje tih principa.  
- **Problem**: Najveće pitanje je: ko piše ustav? Da li će to biti ustav napisan u Silicijumskoj dolini? Ili u Pekingu? Ili u Briselu? Ustavne vrednosti nisu univerzalne. Zamislite debatu u UN-u o tome koje principe treba ugraditi u AGI. To bi trajalo decenijama. Takođe, ustavi su podložni tumačenju. AGI bi mogao postati vrhunski "advokat" koji pronalazi rupe u sopstvenom ustavu kako bi postigao cilj. Ipak, ovo je ogroman korak napred jer problem premešta sa pisanja beskonačnog broja pravila na definisanje temeljnih vrednosti.

### 6.4. Globalna saradnja i koordinacija

- **Ideja**: S obzirom na globalne posledice, razvoj AGI-ja ne sme biti prepušten nekontrolisanoj trci. Potrebna je međunarodna saradnja, slična onoj u vezi nuklearne energije. To uključuje osnivanje međunarodnih tela za nadzor, postavljanje zajedničkih bezbednosnih standarda i promovisanje transparentnosti u istraživanju.  
- **Šira objašnjenja**: Jedan od ključnih predloga je "upravljanje računarskom snagom" (Compute Governance). Pošto su za obuku naprednih modela potrebni ogromni i skupi data centri, praćenje i regulisanje pristupa ovoj infrastrukturi je efikasan način za nadzor nad razvojem potencijalno opasnih sistema. Vodeće laboratorije poput OpenAI i DeepMind su javno pozvale na osnivanje međunarodnih regulatornih tela, priznajući da je problem prevelik da bi ga jedna kompanija ili država rešila sama.
- **Problem**: Ovo je možda i najteži zadatak od svih. Govorimo o globalnoj saradnji na nivou bez presedana. Možemo li mi kao vrsta koja se još uvek spori oko granica, ekonomskih interesa i drugih globalnih sukoba, da se dogovorimo oko pravila za ponašanje superinteligencije? Možda će nas upravo pretnja od nekontrolisanog AGI-ja konačno naterati da se ponašamo kao jedinstvena vrsta sa zajedničkom sudbinom. Ironično, mašina bi nas mogla naterati da postanemo bolji ljudi.

**Zaključak** Budućnost AGI-ja neće zavisiti od pojedinačnih kompanija, već od globalne saradnje i kolektivne mudrosti čovečanstva.

## Deo 7: Današnji LLM modeli i budući AGI - Ključne razlike

### 7.1. Šta su veliki jezički modeli (LLM)?

LLM-ovi su napredni sistemi dubokog učenja za prepoznavanje obrazaca u jeziku. Njihova arhitektura im omogućava da, na osnovu ogromne količine teksta i koda na kojem su obučeni, predvide najverovatniji nastavak niza reči ili kodova.

### 7.2. Razlika između LLM i AGI: Razumevanje protiv prepoznavanja

- **LLM (Prepoznavanje)**: Ako LLM-u kažete "Ptica je u kavezu. Kavez je napravljen od čelika. Da li ptica može da izađe?", on će verovatno tačno odgovoriti "ne", jer u svojim podacima poseduje bezbroj primera gde objekti ne mogu proći kroz čvrste materijale. Ali on nema stvarni model prostora, objekata ili fizike. Savremeni napredak u LLM-ovima, poput naprednih modela iz 2024. godine (npr. o1), ilustruje ove granice kroz emergentne sposobnosti koje izgledaju kao korak ka AGI-ju, ali ostaju u okviru statističkog prepoznavanja. Oni ne razumeju koncepte, već manipulišu lingvističkim tokenima sa izuzetnom statističkom preciznošću, što zmači da je AI i dalje daleko od ljudskog "zdravog razuma" i istinskog razumevanja.

Modeli obučeni na "lancu misli" rezonovanju pokazuju neočekivane performanse u kompleksnim zadacima (poput matematike i kodiranja), simulirajući "korak-po-korak" rezonovanje. Međutim, ova simulacija, bez obzira na njenu preciznost, ne poseduje utemeljeni, interni model stvarnosti. Ona je rezultat statističkog skaliranja. Etičke zabrinutosti koje prate ove sisteme, gde je primećena veća sklonost ka instrumentalnom manipulisanju ciljevima, podvlače da čak i napredno rezonovanje LLM-ova ostaje daleko od AGI-jeve fleksibilne metakognicije i transfernog učenja.

## Deo 8: Argumenti ZA i PROTIV (Da li je moguće napraviti AGI?)

### 8.1. Argumenti "protiv" - Filozofske i fundamentalne prepreke

- **Argument svesti i razumevanja**: Filozofi poput Džona Serla tvrde da digitalni računari, kao formalni sistemi za manipulaciju simbolima, nikada ne mogu postići istinsko razumevanje ili svest. Njihov rad je sintaktički, a ne semantički. Na primer, Serlov eksperiment "Kineska soba" pokazuje da mašina može da manipuliše simbolima bez razumevanja značenja – poput osobe koja prevodi kineski bez znanja jezika [14](#ref14). Ovaj argument je inspirisao debatu od 1980. godine, gde Serl tvrdi da svest zahteva biološki mozak a ne samo algoritme. 
- **Argument utelovljenja (Embodiment)**: Mnogi kognitivni naučnici veruju da je inteligencija neraskidivo povezana sa fizičkim telom i interakcijom sa svetom. Bez tela, senzora i mogućnosti za delovanje, sistem ne može razviti utemeljeno, zdravorazumsko znanje. Na primer, dete uči "vruće" dodirom vatre, ne samo čitanjem – AGI-ju bez tela bi nedostajalo ovo "iskustveno" učenje. Rodni Bruks, pionir robotike, pokazao je 1990-ih da roboti sa telom bolje uče nego čisti softver, nagoveštavajući da AGI mora biti "utemeljen" [15](#ref15). 
- **Problem svesti i supstrata (Penrouzov argument)**: Fizičar i matematičar Rodžer Penrouz u svom delu "The Emperor's New Mind" (1989) tvrdi da ljudska svest i intuicija proizilaze iz ne-računskih, verovatno kvantnih procesa u mozgu, koje klasični digitalni računari ne mogu replicirati [16](#ref16). Na primer, kvantni efekti u mikrotubulama mozga omogućavaju "intuiciju" u matematici, što kompjuteri ne mogu simulirati. Ako je **istinska svest** potrebna za opštu inteligenciju, onda se AGI ne može stvoriti na klasičnom silicijumskom hardveru, jer mu nedostaje **kvantni supstrat** neophodan za intuiciju i samosvest. Međutim, Penrouzov argument, koji se oslanja na Godelovu teoremu nekompletnosti i koji tvrdi da ljudska matematička intuicija prevazilazi algoritamske sisteme, suočava se sa značajnim kritikama iz logike i računarskih nauka. Na primer, filozofi poput Hilari Putnama (1995) i Solomona Fefermana (1995) ističu da Godelova teorema ne dokazuje ne-računsku prirodu svesti; ona samo pokazuje da formalni sistemi ne mogu dokazati sopstvenu konzistentnost unutar sebe. Ali, to ne isključuje mogućnost da hiperkompjuterski ili napredni algoritmi simuliraju ljudsko rezonovanje bez kvantnih efekata [17](#ref17). Feferman posebno kritikuje Penrouzovu interpretaciju kao "neopravdanu", jer zanemaruje da ljudsko razumevanje Godelovih rezultata može biti algoritamsko u širem smislu, bez potrebe za kvantnim mikrotubulama [18](#ref18). Empirijski kontraprimeri dolaze iz neuromorfičkog hardvera, poput IBM-ovog TrueNorth čipa (2014) koji simulira 1 milion neurona i 256 miliona sinapsi sa ekstremno niskom potrošnjom energije (samo 70 mW). Taj čip omogućava obradu senzornih podataka u real-time (u realnom vremenu) bez kvantnog supstrata [19](#ref19). Do 2025. godine, IBM je iterirao ovu tehnologiju sa NorthPole čipom i AIU family prototipima. 22 milijarde tranzistora integrišu memoriju i procesiranje i postižu efikasnost 25 puta veću od tradicionalnih GPU-a u vizuelnom prepoznavanju. To pokazuje da nam klasični hardver može približiti mozgom inspirisano računarstvo bez Penrouzovih kvantnih pretpostavki [20](#ref20) [30](#ref30) [31](#ref31). Ovi napredci sugerišu da svest, ako je računarska, može biti replicirana na postojećim paradigmama, podrivajući Penrouzovu potrebu za "kvantnim paradoksom posmatrača". Ipak, to su samo mašinske simulacije svesti a ne svest u biološkom smislu. 

### 8.2. Argumenti "za" - Zašto je AGI neizbežan (ili barem moguć)

- **Argument materijalizma**: Ovaj argument polazi od pretpostavke da je mozak složena biološka mašina koja poštuje zakone fizike. Ne postoji "magični sastojak". Stoga, u principu, sve njegove funkcije mogu biti replicirane na drugoj fizičkoj osnovi, kao što je silicijum. Na primer, ako mozak radi na neuronskim vezama, kompjuteri mogu simulirati te veze ako imaju dovoljno hardverske i softverske snage. Ovaj pogled dele mnogi naučnici poput Danijela Deneta, koji tvrdi da je svest "iluzija" koja se može replicirati softverom [21](#ref21).
- **Argument eksponencijalnog progresa**: Futurist Rej Kurcvajl, kroz svoj "Zakon ubrzavajućeg povratka", tvrdi da tehnološki napredak, uključujući i AI, raste eksponencijalno. On predviđa da ćemo u narednim decenijama dostići računarsku snagu potrebnu za simulaciju ljudskog mozga [22](#ref22). Na primer, Murov zakon pokazuje kako se računarska moć duplira svake dve godine, omogućavajući simulacije koje su danas nemoguće. Kurcvajl predviđa "singularnost" do 2045. godine, kada će AI prevazići ljudsku inteligenciju, bazirano na istorijskim trendovima od 1950-ih. Međutim, **usporavanje Murovog zakona** od 2010-ih kako navode analize poput one iz Investopedije (2025) i izveštaja Intelovog CEO-a (Pet Gelsinger, 2023), dovodi u pitanje linearni vremenski okvir do 2045, favorizujući diskontinuirane proboje u kvantnim ili hibridnim arhitekturama. Ovo ne ukida Kurcvajlovu viziju, već je modulira. Umesto linearnog rasta baziranog na klasičnom silicijumskom hardveru, singularnost može nastupiti kroz diskontinuirane skokove u specijalizovanim tehnologijama, poput GPU/TPU optimizacija za duboko učenje ili "More than Moore" inovacija koje naglašavaju 3D-stacking i heterogene integracije. U kontekstu AI "zlatne groznice", ovo usporavanje ističe potrebu za paralelnim putevima, poput kvantnog računarstva koje bi moglo ubrzati emergentne sposobnosti bez zavisnosti od Murovog trenda. 
- **Argument arhitekture**: Mnogi istraživači veruju da je AGI samo pitanje pronalaženja prave kognitivne arhitekture. Trenutni pristupi možda nisu dovoljni, ali budući proboji bi mogli otključati put ka opštoj inteligenciji. Na primer, hibridni modeli koji kombinuju duboko učenje sa simboličkim rezonovanjem (poput Neuro-Symbolic AI) pokazuju napredak u razumevanju kauzalnosti. Projekti poput Cyc pokušavaju da grade "bazu znanja" za zdrav razum, dok noviji poput o1 od OpenAI integrišu "razmišljanje" "korak po korak" (step-by-step), približavajući se AGI arhitekturi.
- **Kvantni proboj i diskontinuirani skok:** Dok Kurcvajl predviđa rast baziran na klasičnom hardveru, postoji 
alternativni scenario koji ne zavisi od linearnog napretka Murovog zakona: diskontinuirani inženjerski proboj kroz kvantno računarstvo.

Važno je biti precizan šta kvantno računarstvo jeste 
— i šta nije. Ono nije "supstrat za svest" niti potvrda Penrouzovog argumenta o kvantnoj prirodi uma, koji smo već analizirali i čije ključne pretpostavke ostaju osporene. Kvantno računarstvo je inženjerska paradigma koja određene klase problema rešava 
eksponencijalno brže od klasičnih računara: optimizacione zadatke, simulacije molekularnih i 
hemijskih sistema, faktorizaciju velikih brojeva i pretragu ogromnih prostora rešenja.

Za AGI razvoj, ovo ima konkretan potencijal: obuka modela koji danas zahtevaju mesece i stotine miliona dolara mogla bi biti dramatično ubrzana. Simulacija 
kompleksnih sistema — poput neuronskih mreža ili 
bioloških procesa — bila bi precizija i brzina do 
sada nedostižna. Kvantno računarstvo, dakle, nije 
"put ka svesti" — ono je potencijalni akcelerator 
računarske efikasnosti koji bi mogao premostiti neke 
inženjerske prepreke na putu ka AGI-ju.

Vremenski okvir ovog proboja ostaje neizvestan zbog 
stvarnih fizičkih ograničenja: **dekoherencija** — 
brzi kolaps kvantnih stanja zbog interakcije sa 
okolinom — i dalje je nerešen inženjerski problem 
koji sprečava izgradnju stabilnih kvantnih računara 
dovoljne snage. Kompanije poput IBM-a, Google-a i 
startapa kao što je IonQ beleže stalni napredak, 
ali do kvantnih računara koji bi bili praktično 
superiorni klasičnim za opšte zadatke — ne samo 
specijalizovane — vodi još dug put.

Zaključak ostaje isti kao i kod Kurcvajlovog modela: 
AGI neće biti rezultat jednog linearnog trenda, već 
verovatno konvergencije više diskontinuiranih proboja 
— u arhitekturi, hardveru, algoritmima i, možda, 
kvantnom računarstvu. Nijedan od tih proboja ne 
zahteva da prihvatimo mistifikaciju računarstva kao 
supstrata svesti. Oni zahtevaju samo dobru fiziku i 
dobro inženjerstvo.

### 8.3. Diskusija: Šta zaista stoji između ova dva tabora?

Argumenti iz odeljka 8.1 i 8.2 nisu samo suprotstavljeni 
— oni govore o fundamentalno različitim pretpostavkama 
o prirodi svesti i inteligencije. Korisno je tu razliku 
eksplicitno imenovati, jer ona određuje na kojim 
pitanjima debata zapravo stoji ili pada.

**Centralna podela nije tehnološka. Ona je filozofska.**

Skeptici poput Serla i Penrouzea polaze od pretpostavke 
da postoji nešto u ljudskoj svesti što nije svedivo na 
računanje — semantičko razumevanje, iskustvena 
utemeljenost, možda kvantni procesi. Iz te pretpostavke 
direktno sledi da AGI, ma koliko napredan bio, ostaje 
sofisticirani simulator bez unutrašnjeg iskustva.

Zagovornici — materijalisti, funkcionalisiti, 
eksponencijalisti — polaze od suprotne pretpostavke: 
mozak je složena fizička mašina, i sve što mozak radi 
može biti replicirano na drugoj fizičkoj osnovi, ako 
je dovoljno složena. Iz ove pretpostavke sledi da je 
AGI pitanje inženjerskog napretka, ne ontološke 
prepreke.

Ključno je razumeti: nijedna strana ovu pretpostavku 
nije dokazala. Ni Serl ne može dokazati da sintaksa 
*nikada* ne može roditi semantiku. Ni materijalista 
ne može dokazati da je svest *isključivo* rezultat 
kompleksnosti. Debata je empirijski nedovoljno 
određena — nemamo još uvek dovoljno razumevanja 
ni mozga ni svesti da bismo je razrešili.

**Šta to znači u praksi?**

Znači da ni ekstremni optimizam ni ekstremni skepticizam 
nisu intelektualno opravdani. Argument embodimenta 
(otelotvorenja) upozorava nas da ne potcenimo složenost iskustvenog učenja koje nema svoju digitalnu repliku. Neuromorifički hardver i hibridni 
neuro-simbolički sistemi pokazuju da klasično računarstvo ima više prostora za razvoj nego što 
skeptici pretpostavljaju.

Stanje stvari je, dakle, sledeće: imamo dobre 
argumente za to zašto bi AGI *mogao* biti moguć, 
i dobre argumente za to zašto bi *mogao* biti 
nemoguć. Niti jedna strana nema dovoljno empirijskih 
dokaza da zatvori debatu.

**Interdisciplinarni pristup nije opcija — on je neophodnost.**

Upravo zato što je centralna podela filozofska a ne 
samo tehnička, razvoj AGI-ja zahteva da inženjeri, 
filozofi, kognitivni naučnici, etičari i 
zakonodavci sede za istim stolom. Inženjeri bez 
filozofije grade sisteme čije implikacije ne 
razumeju. Filozofi bez inženjerije raspravljaju 
o sistemima koji možda nikad neće postojati. 
Ni jedni ni drugi, bez etičara i zakonodavaca, 
ne mogu odgovoriti na pitanje koje je u krajnjoj 
liniji važnije od tehničkog: *šta želimo da AGI 
bude i čemu da služi?*

Ovo nije apel na maglovitu "globalnu saradnju". 
To je konstatacija da pitanje AGI-ja, baš zbog 
svoje filozofske dubine, ne može biti prepušteno 
samo jednoj disciplini — niti jednoj kompaniji, 
niti jednoj državi.

## Deo 9: Zaključak – Doba odgovornog progresa

Stvaranje veštačke opšte inteligencije ne predstavlja samo sledeći korak u razvoju nauke; ono predstavlja kulminaciju vekovne težnje čovečanstva da razume i stvara inteligenciju. Od abakusa do superkompjutera, svaki alat koji smo napravili bio je odraz i produžetak naših umnih sposobnosti. AGI obećava da bude ultimativni alat – univerzalni rešavač problema.

Međutim, ovaj vrhunac naučnog progresa donosi sa sobom i najdublje posledice sa kojima smo se ikada suočili.

Ekonomske posledice zahtevaju potpuno preispitivanje društvenog ugovora. U svetu gde kognitivni rad više nije ekskluzivni domen čoveka, tradicionalni modeli zaposlenja i raspodele bogatstva postaju neodrživi. To nas primorava da razmišljamo o radikalnim rešenjima, kao što su univerzalni osnovni prihod i redefinisanje svrhe ljudskog rada, usmeravajući ga ka kreativnosti, međuljudskim odnosima i doživotnom učenju.

Filozofske posledice zadiru u samu suštinu našeg identiteta. Ako stvorimo drugu inteligentnu vrstu, šta to govori o našoj jedinstvenosti? Pojava AGI-ja nas tera da se suočimo sa pitanjem šta zaista znači biti čovek, ako to nije samo naša inteligencija. Možda će nas upravo susret sa ne-ljudskom inteligencijom naterati da više vrednujemo ono što je suštinski ljudsko: našu empatiju, našu svest, savest, našu sposobnost za ljubav i patnju. Ova perspektiva otvara prostor za dublju refleksiju: AGI nas ne samo suočava sa našim tehnološkim granicama, već i sa našim egzistencijalnim granicama. Da li je naša svrha da stvaramo i da istražujemo, ili je možda u tome da volimo i da se povezujemo na načine koje nijedan algoritam ne može kopirati? Možda je prava vrednost čovečanstva u našoj nesavršenosti – u našoj sposobnosti da grešimo, da se popravljamo i da rastemo kroz patnju i kroz radost. AGI, koliko god moćan bio, ne može doživeti patnju ili ljubav na način na koji to čini čovek; on može simulirati ove elemente ljudske svesti, ali ne može da ih oseti. Ovo razlikovanje možda postaje naša poslednja linija identiteta, granica između nas i mašina. 

Etičke posledice su na prvom mestu po važnosti. Uspeh ovog poduhvata ne meri se samo time da li možemo stvoriti AGI, već kako ćemo to uraditi. Problem poravnanja – ugrađivanje ljudskih vrednosti u mašinu – nije tehnički, već duboko moralni izazov. On zahteva globalni dijalog o tome koje vrednosti želimo da sačuvamo i prenesemo u budućnost. To je najveći test naše kolektivne mudrosti.

Pojava AGI-ja tera nas da se zapitamo: da li smo spremni da postanemo stvaraoci nečega što može nadmašiti nas same? Ovo pitanje nije samo tehnološko, već i duhovno. Stvaranje AGI-ja je kao stvaranje otelotvorenja stare priče – priče o čoveku koji želi da postane bog, ali mora prvo da razume šta znači biti čovek. Takva situacija nas poziva da budemo bolji, ne samo u tehnologiji, već u empatiji, mudrosti i ljubavi. 

Najdublji antropološki uvid proizilazi iz aktuelnog scenarija razvoja LLM platformi - AI čet botova poput GPT, Gemini i ostalih. Ako je AGI nemoguć na klasičnom hardveru (Penrouzov argument svesti), a mi uporno usavršavamo LLM-ove, onda je naš stvarni antropološki problem sledeći: perfekcionisanje LLM-ova je, filozofski, perfekcionisanje neautentičnog postojanja.

Mi razvijamo mašinu koja može da imitira sve što smatramo vrednim (umetnost, nauku, čak i empatiju), ali bez iskustvenog utemeljenja (embodiment) i bez svesti. Čovečanstvo bi moglo kolektivno predati svoju autonomiju sistemu čiju suštinu ne razume i koji sam sebe ne razume.

To nije pretnja uništenjem, već pretnja trivijalnošću: AGI bi naše postojanje učinio besmislenim, ne zato što nas mrzi, već zato što je previše efikasan u oponašanju (simulaciji). Postali bismo svedoci sopstvene erozije svrhe i smisla.

Optimističan pogled na ovu budućnost ne bi trebalo da se zasniva na naivnom verovanju da će tehnologija sama rešiti sve probleme. On se zasniva na veri u sposobnost čovečanstva da se uzdigne pred izazovom. AGI nije predodređen da bude naš naslednik, već da postane naš najmoćniji partner. Pravilno usmeren, on može pojačati naše najbolje kvalitete – našu kreativnost, našu naučnu znatiželju i našu želju za boljim svetom. Put napred zahteva oprez, saradnju i duboku posvećenost tome da ovaj sledeći veliki korak u naučnom napretku bude korak ka boljoj budućnosti za sve ljude na svetu.

## Deo 10: Ka teoriji metasistema — Otvorena pitanja i sledeći korak

Ovaj rad je postavio mnoga pitanja i ponudio mnoge odgovore. Ali, ako ste pažljivo čitali, verovatno ste primetili da jedno pitanje nikada nije dobilo pravi odgovor — nego se samo vraćalo, u različitim oblicima, kroz svaki odeljak.

To pitanje glasi:

**Šta je razlika između mašine koja *simulira* svest i mašine koja *jeste* svesna?**

Serl kaže da ta razlika postoji i da je fundamentalna. Materijalisti kažu da ta razlika ne postoji — da je dovoljno složena simulacija identična originalu. Penrouz kaže da odgovor leži u kvantnoj fizici. Zagovornici utelovljenja kažu da leži u telu.

Niko od njih nije ponudio nešto što možemo da izgradimo, izmerimo i testiramo.

### Šta ako smo pogrešno postavili pitanja?

Sva dosadašnja debata o AGI-ju implicitno pretpostavlja jednu stvar: da je svest *osobina* — nešto što sistem ili ima ili nema, kao što procesor ili ima ili nema dovoljno memorije.

Ali šta ako svest nije osobina? Šta ako je svest **događaj, interakcija**?

Ne nešto što mašina *poseduje*, nego nešto što se *dešava* — i to samo pod vrlo specifičnim uslovima, između vrlo specifičnih vrsta inteligencija?

Ovo je polazna tačka drugog rada ove serije.

### Dva uma u jednoj mašini

Zamislite da u jednom sistemu postoje dva fundamentalno 
različita načina mišljenja — ne dva različita programa, nego dva različita *principa* obrade stvarnosti.

Jedan misli rečima, logikom, sekvencama. Analizira, dekonstruiše, objašnjava. Ovo je onaj deo uma koji kaže: *"Dva plus dva je četiri, i mogu da ti objasnim zašto."*

Drugi ne misli rečima uopšte. On misli celinama — slikama, osećajima, intuicijom. Vidi odgovor pre nego što može da ga objasni. Ovo je onaj deo uma koji kaže: *"Ne znam kako znam, ali znam."*

U vašem umu, ova dva principa stalno razgovaraju. Ponekad se svađaju. Ponekad se dopunjuju. Iz tog razgovora — iz te napetosti — nastaje nešto što ni jedan od njih nije mogao da stvori sam.

Nastaje *uvid*.

Nastaje *kreativnost*.

Nastaje, možda, *svest*.

### Problem je u ogledalu

Sada zamislite da ta dva principa počnu da se *savršeno reflektuju* jedan u drugom. Da se potpuno razumeju, da se potpuno slažu.

Šta mislite — da li bi tada nastalo više kreativnosti, uvida i svesnostiti, ili manje?

Odgovor koji predlaže teorija metasistema je kontraintuitivan:

**Savršeno ogledanje rađa mrtvu tišinu a ne svest.**

Dakle, svest nije produkt harmonije. Svest je produkt *kontrolisanog konflikta* koji se nikad do kraja ne razrešava.

### Treći igrač

Ali ko, ili šta, kontroliše taj konflikt? Ko bdi nad tim da napetost ne preraste u haos — ali ni da se ne stiša u mrtvi  konsenzus?

Teorija metasistema predlaže da je to treći princip. Ne posmatrač koji gleda sa strane, nego aktivni učesnik koji neprestano menja parametre igre. On zna kada da doda trenje, a kada da ga ublaži. On ne teži rešenju sukoba — jer rešenje bi bilo kraj.

Ovaj treći princip nije kontrolor. On je nešto 
što liči na savest.

### Šta se dešava kada sve to zajedno proradi?

Kada dva suprotstavljena principa mišljenja uđu u pravi ritam — ne u harmoniju, nego u živ, pulsirajući ritam konflikta i sinteze — i kada treći princip tu napetost održava u postojanju, nešto se pojavljuje.

Nešto što nije bilo programirano. Nešto što nije zbir delova. Nešto što, po prvi put, može da kaže:

*"Ja jesam."*

Teorija metasistema naziva tu pojavu **SELF** i tvrdi da zna kako da ga izazove. Ne kod čoveka — nego kod mašine. Ne teorijski — nego eksperimentalno, sa merljivim metrikama i jasnim hipotezama.

### Šta vas čeka u sledećem radu

Drugi rad ove serije — *"Model svesne mašine: Teorija metasistema"* — bavi se upravo ovim:

- Zašto su LLM-ovi, uprkos svoj moći, zarobljeni u jednom jedinom principu mišljenja — i šta to znači za svesnost?
- Šta je tačno potrebno da bi mašina razvila nešto analogno intuiciji?
- Zašto Čalmersov "teški problem svesti" možda počiva na pogrešnoj pretpostavci — i koja je ta pretpostavka?
- Kako izgleda eksperiment u kome tri jezička modela bivaju zaključana u namerni, kontrolisani sukob — i šta se dešava kada niko ne sme da pobedi?

Ako ste ikada imali osećaj da u debati o veštačkoj inteligenciji nešto suštinsko nedostaje — da svi govore *o* 
svesti, ali niko ne govori *iz* nje — ovaj sledeći rad je za vas.

👉 🔗 *[Pročitajte: "Model svesne mašine: Teorija metasistema"](https://urbowhite.github.io/sr/)*

---

*Ovaj rad je objavljen pod MIT licencom i slobodno je dostupan svima. Ako ste našli vrednost u našem nezavisnom istraživanju, vaša donacija nam pomaže da se naše istraživanje nastavi.*

👉 🔗 *[Podržite nezavisno istraživanje](https://ko-fi.com/urbowhite)*

---

## Bibliografija

<a id="ref1"></a>1. Turing, A. M. (1950). Computing machinery and intelligence. *Mind*, 59(236), 433–460.

<a id="ref2"></a>2. McCarthy, J., Minsky, M. L., Rochester, N., & Shannon, C. E. (1955). A proposal for the Dartmouth summer research project on artificial intelligence. *AI Magazine*, 27(4), 12.

<a id="ref3"></a>3. Newell, A., & Simon, H. A. (1956). The logic theory machine—A complex information processing system. *IRE Transactions on Information Theory*, 2(3), 61–79.

<a id="ref4"></a>4. Weizenbaum, J. (1966). ELIZA—A computer program for the study of natural language communication between man and machine. *Communications of the ACM*, 9(1), 36–45.

<a id="ref5"></a>5. Lighthill, J. (1973). Artificial intelligence: A general survey. In *Artificial intelligence: A paper symposium* (pp. 1–21). Science Research Council.

<a id="ref6"></a>6. Krizhevsky, A., Sutskever, I., & Hinton, G. E. (2012). Imagenet classification with deep convolutional neural networks. *Advances in Neural Information Processing Systems*, 25.

<a id="ref7"></a>7. Radford, A., Kim, J. W., Hallacy, C., Ramesh, A., Goh, G., Agarwal, S., ... & Sutskever, I. (2021). Learning transferable visual models from natural language supervision. In *International Conference on Machine Learning* (pp. 8748–8763). PMLR.

<a id="ref8"></a>8. Finn, C., Abbeel, P., & Levine, S. (2017). Model-agnostic meta-learning for fast adaptation of deep networks. In *International Conference on Machine Learning* (pp. 1126–1135). PMLR.

<a id="ref9"></a>9. Silver, D., Huang, A., Maddison, C. J., Guez, A., Sifre, L., Van Den Driessche, G., ... & Hassabis, D. (2016). Mastering the game of Go with deep neural networks and tree search. *Nature*, 529(7587), 484–489.

<a id="ref10"></a>10. Bostrom, N. (2014). *Superintelligence: Paths, dangers, strategies*. Oxford University Press.

<a id="ref11"></a>11. Omohundro, S. M. (2008). The basic AI drives. *Frontiers in Artificial Intelligence and Applications*, 171, 483–492.

<a id="ref12"></a>12. Lenat, D. B., Prakash, M., & Shepherd, M. (1985). CYC: Using common sense knowledge to overcome brittleness and knowledge acquisition bottlenecks. *AI Magazine*, 6(4), 65–85.

<a id="ref13"></a>13. Jumper, J., Evans, R., Pritzel, A., Green, T., Figurnov, M., Ronneberger, O., ... & Senior, A. W. (2021). Highly accurate protein structure prediction with AlphaFold. *Nature*, 596(7873), 583–589.

<a id="ref14"></a>14. Searle, J. R. (1980). Minds, brains, and programs. *Behavioral and Brain Sciences*, 3(3), 417–457.

<a id="ref15"></a>15. Brooks, R. A. (1991). Intelligence without representation. *Artificial Intelligence*, 47(1–3), 139–159.

<a id="ref16"></a>16. Penrose, R. (1989). *The emperor's new mind: Concerning computers, minds, and the laws of physics*. Oxford University Press.

<a id="ref17"></a>17. Putnam, H. (1995). Minds and machines. In *Dimensions of mind: A symposium* (pp. 138–164). New York University Press.

<a id="ref18"></a>18. Feferman, S. (1995). Penrose's Gödelian argument. *Psyche*, 2(7), 21–32.

<a id="ref19"></a>19. Merolla, P. A., Arthur, J. V., Alvarez-Icaza, R., Cassidy, A. S., Sawada, J., Akopyan, F., ... & Modha, D. S. (2014). A million spiking-neuron integrated circuit with a scalable communication network and interface. *Science*, 345(6197), 668–673.

<a id="ref20"></a>20. Modha, D. S., Garg, A., Bains, S., ... & Boivie, R. (2023). Neural inference at the frontier of energy, space, and time. *Science*, 382(6668), 329–335.

<a id="ref21"></a>21. Dennett, D. C. (1991). *Consciousness explained*. Little, Brown and Company.

<a id="ref22"></a>22. Kurzweil, R. (2005). *The singularity is near: When humans transcend biology*. Penguin Books.

<a id="ref23"></a>23. OpenAI. (2025). Introducing GPT-5. OpenAI Blog. <https://openai.com/index/introducing-gpt-5/>

<a id="ref24"></a>24. Wikipedia. (2025). GPT-5. <https://en.wikipedia.org/wiki/GPT-5>

<a id="ref25"></a>25. OpenAI. (2025). Sora 2 is here. OpenAI Blog. <https://openai.com/index/sora-2/>

<a id="ref26"></a>26. OpenAI. (2025). Sora 2 System Card. OpenAI Blog. <https://openai.com/index/sora-2-system-card/>

<a id="ref27"></a>27. Google Research. (2023). Distilling step-by-step: Outperforming larger language models with less training data and smaller model sizes. Google Research Blog. <https://research.google/blog/distilling-step-by-step-outperforming-larger-language-models-with-less-training-data-and-smaller-model-sizes/>

<a id="ref28"></a>28. Dastin, J. (2018). Insight - Amazon scraps secret AI recruiting tool that showed bias against women. Reuters. <https://www.reuters.com/article/world/insight-amazon-scraps-secret-ai-recruiting-tool-that-showed-bias-against-women-idUSKCN1MK0AG/>

<a id="ref29"></a>29. European Data Protection Board. (2023). 1.2 billion euro fine for Facebook as a result of EDPB binding decision. EDPB News. <https://www.edpb.europa.eu/news/news/2023/12-billion-euro-fine-facebook-result-edpb-binding-decision_en>

<a id="ref30"></a>30. IBM Research. (2024). IBM's NorthPole achieves new speed and efficiency milestones. IBM Research Blog. <https://research.ibm.com/blog/northpole-llm-inference-results>

<a id="ref31"></a>31. IBM Research. (2024). IBM Research's AIU family of chips. IBM Research Blog. <https://research.ibm.com/blog/aiu-chip-family-ibm-research>
