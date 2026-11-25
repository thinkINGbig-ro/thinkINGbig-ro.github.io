# Site-ul FinVenture (thinkingbig-ro.github.io)

Folosește skill-ul frontend-design pentru tot ce ține de design.

## Context
- Echipa: thinkINGbig, elevi de la Colegiul Național „Gheorghe Șincai” din Baia Mare.
- Inițiativa: FinVenture. Vrem să învățăm lumea educație financiară cât mai simplu, încât lumea să devină mai educată financiar.
- Primul produs e jocul web FinVenture (un life-simulator de tip BitLife cu decizii financiare), publicat la /finventure/ pe același domeniu, din repo-ul separat thinkingbig-ro/finventure (public). Citește README-ul de acolo pentru descrierea jocului, temele acoperite și cifrele din simulare. Nu copia text tehnic.
- Proiectul a pornit pentru concursul de educație financiară Banometru și e în dezvoltare.
- Publicul site-ului: profesori, părinți, juriul concursului, adolescenți.

## Ce construim
Un site de prezentare de o singură pagină, la rădăcina domeniului, în acest repo (thinkingbig-ro/thinkingbig-ro.github.io, GitHub Pages din main). Limba: română, cu diacritice.

Ordinea secțiunilor e importantă: întâi cine suntem și ce vrem, abia apoi jocul. Butonul „Joacă FinVenture” apare de două ori: în hero, ca să fie vizibil din prima (cerut de echipă pe 25.11.2026), și din nou în secțiunea Joacă, după prezentare. Nu e în meniu (pagina nu are meniu).

1. Hero: logo + „FinVenture” + misiunea într-o frază + un semn discret „proiect în dezvoltare” + butonul „Joacă FinVenture” și un îndemn să citești mai departe.
2. De ce: problema, pe scurt. Educația financiară vine de obicei prea târziu, după primul salariu, primul credit sau prima greșeală. Fără statistici inventate: dacă folosești o cifră, trebuie să aibă sursă reală, verificabilă și citată; altfel scrie calitativ.
3. Ce vrem: misiunea, explicată simplu, în 2–3 paragrafe scurte.
4. Cine suntem: echipa thinkINGbig, elevi la Colegiul Național „Gheorghe Șincai”, Baia Mare. FĂRĂ nume sau prenume de membri și fără poze. Proiectul a pornit pentru concursul Banometru: menționează doar în text, fără logo-urile ING sau Banometru.
5. Ce am construit: jocul FinVenture, ce înveți (grupat pe teme, din README-ul jocului), cum funcționează (pornești la 18 ani, iei decizii, vezi consecințele, la final afli ce te-a ajutat și ce te-a costat) și cum am verificat că e corect: am lăsat calculatorul să joace mii de vieți cu stiluri diferite (prudent, frugal, aleator, riscant), cu cifrele din README-ul jocului; valorile economice urmează reguli reale (ex. plafonul de îndatorare BNR, Codul civil la moșteniri).
6. Joacă: butonul mare „Joacă FinVenture” → /finventure/ (cale absolută), repetat după prezentare. Mențiune: merge pe telefon, fără cont, fără instalare.
7. În dezvoltare: ce urmează, pe scurt (mai mult conținut, materiale pentru profesori, clasament între licee), plus invitația la feedback.
8. Contact: thinkingbig.romania@gmail.com (link mailto) și Instagram @finventure_romania (link https://www.instagram.com/finventure_romania/).
9. Footer: © thinkINGbig, Baia Mare, an curent.

## Branding
Aceeași paletă ca jocul, 60-30-10, temă întunecată:
- 60% #1E1638 (mov închis, fundal)
- 30% #3B5BDB (albastru, suprafețe, accente secundare)
- 10% #FF8A3D (portocaliu, DOAR pentru butoanele „Joacă” și foarte puține accente)
- text #F3EEFF; pe butoanele portocalii textul e #1E1638

Logo-ul (simbolul rotund, busola) e în assets/logo.svg; lângă el stă wordmark-ul „FinVenture” (assets/wordmark.svg, „Fin” în #FF8A3D, „Venture” în #F3EEFF). Din ele se generează favicon-ul și imaginea Open Graph. La o versiune nouă a logo-ului, totul (hero, 404, favicon, OG) se actualizează prin înlocuirea fișierelor și rularea scriptului (vezi „Logo, favicon și imaginea OG” mai jos).

Tipografia: o pereche distinctivă, coerentă cu jocul (jocul folosește un font rotunjit, gen Fredoka/Nunito), pentru titluri și text. Ar trebui să pară făcut de oameni cu gust, nu generat.

## Să NU arate a site făcut cu AI
- Fără gradienți-blob, glassmorphism, glow, neon, umbre mari.
- Fără grila clasică de „3 carduri cu iconiță + titlu + 2 rânduri”, fără emoji ca iconițe.
- Fără formulări goale: „revoluționar”, „inovator”, „soluție completă”, „hai să descoperim împreună”, „în era digitală”. Textul trebuie să fie concret, scurt, cu exemple reale din joc (ex. „iei un credit rapid de 2.000 lei și vezi cum ajunge la poprire pe salariu”).
- Fără liniuțe de dialog (—) presărate peste tot; punctuație normală.
- Ceva cu personalitate: reproducerea în HTML/CSS a unui card de decizie din joc, cu stilul și textele reale din repo-ul jocului.
- Animații puține și discrete, cu prefers-reduced-motion respectat.

## Tehnic
- HTML + CSS (+ minim JS doar dacă e nevoie), fără framework, fără build. Fișier .nojekyll.
- Mobile-first, arată excelent la 360 px și pe desktop. Accesibil: contrast AA, focus vizibil, ierarhie corectă de titluri, alt la imagini, lang="ro".
- Meta: title, description, Open Graph și Twitter card, favicon, theme-color #1E1638.
- FĂRĂ localStorage, cookie-uri, analytics sau trackere. Site-ul e pe același domeniu cu jocul, iar jocul își ține salvările în localStorage cu prefixul „finventure.”. Nu atinge nimic din /finventure/.
- O pagină 404.html simplă, în același stil, cu link spre pagina principală și spre joc.
- Performanță: imagini optimizate, fonturi încărcate eficient (font-display: swap), fără resurse inutile.

## Cum lucrăm
1. Pentru schimbări mari: propune pe scurt direcția și textele, așteaptă confirmarea înainte de cod.
2. Verifică în browser la 360 px și pe desktop (captură dacă poți), plus linkul /finventure/.
3. Commit-uri mici, fără nicio atribuire (fără Co-Authored-By, fără „Generated with Claude Code”). Push pe main (dacă mediul nu permite, push pe ramura de lucru + PR spre main, fără atribuire în descriere).
4. După publicare, verifică thinkingbig-ro.github.io și că thinkingbig-ro.github.io/finventure/ funcționează în continuare.

---

## Cum e construit site-ul (stare curentă)

Fișiere:
- `index.html`: pagina; `404.html`: pagina de eroare.
- `css/site.css`: tot stilul. Culorile sunt variabile în `:root`.
- `assets/fonts/`: fonturile, găzduite local (fără cereri către Google Fonts).
- `assets/logo.svg`: logo-ul (simbolul). `assets/wordmark.svg`: numele „FinVenture” în Fredoka Bold, convertit în contururi.
- `assets/favicon.svg`, `assets/favicon-32.png`, `assets/apple-touch-icon.png`, `assets/og-image.png`, `favicon.ico`: GENERATE, nu le edita de mână.
- `tools/genereaza-imagini.mjs`: scriptul care le generează.
- Singurul JS e o linie care pune anul curent în footer.

### Tipografie
- Titluri: **Nunito** (600–900), rotunjit ca jocul. Fredoka (fontul jocului) NU are ă, ș, ț, așa că nu se poate folosi pentru titluri în română; a rămas doar în wordmark (convertit în contururi, fără diacritice).
- Text: **Newsreader** (serif de lectură, optical size fixat la 16).
- Fonturile sunt subseturi (Latin de bază + ă â î ș ț și variantele cu sedilă, ghilimele românești) făcute cu fontTools din fișierele variabile din github.com/google/fonts. Dacă apar caractere noi care nu se văd, refă subsetul cu `pyftsubset`/fontTools incluzând caracterele lipsă.

### Paleta pe pagină
- Portocaliul apare doar în: „Fin” din wordmark, săgeata din logo, suma „2.000 lei” din cardul de joc și cele două butoane „Joacă FinVenture”. Nu-l folosi în altă parte.
- Albastrul: butoanele de alegere din card, barele din grafic, sublinierea linkurilor și panoul secțiunii „Joacă”. Nu se pune text albastru pe mov (contrast prea mic).
- Nuanțe auxiliare luate din joc: #2A2050, #352A63 (suprafețe), #C9BFE8 (text secundar), #FF8F9C (efecte negative din card).

### Logo, favicon și imaginea OG
Logo-ul primit de la echipă (export Affinity, pânză 1254×1254) a fost modificat doar la `viewBox`, decupat pe cerc (`292 135 658 632`), ca să nu aibă margini goale. La o versiune nouă:
1. Înlocuiește `assets/logo.svg`. Decupează `viewBox` pe desen (altfel apare mic, cu spațiu gol în jur) și actualizează `width`/`height` din `<img class="hero-simbol">` (index.html) și din 404.html la raportul nou.
2. Dacă se schimbă și numele scris, înlocuiește `assets/wordmark.svg` (text convertit în contururi; fără font extern).
3. Iconița se face din `assets/logo-icon.svg` dacă există, altfel din `assets/logo.svg`. Acum nu există `logo-icon.svg`, logo-ul e deja pătrat.
4. Regenerează favicon-urile și imaginea OG:
   ```
   npm i -g playwright && npx playwright install chromium   # o singură dată
   NODE_PATH=$(npm root -g) node tools/genereaza-imagini.mjs
   ```
   Scriptul rescrie: `favicon.ico`, `assets/favicon.svg`, `assets/favicon-32.png`, `assets/apple-touch-icon.png`, `assets/og-image.png` (1200×630, simbol + wordmark + misiunea).
5. Verifică imaginile, apoi fă commit. Rețelele sociale țin imaginea OG în cache; o poți reîmprospăta din debugger-ul fiecărei platforme.

### De unde vin cifrele (de actualizat când se schimbă jocul)
Toate cifrele despre joc sunt luate din README-ul repo-ului thinkingbig-ro/finventure (verificat la commit-ul 17ee226, 25.11.2026):
- „90 de concepte” și „14 finaluri”: secțiunea „Ce înveți”.
- Simularea: secțiunea „Cum am verificat că jocul e corect”: 500 de vieți pe stil, 4 stiluri (deci 2.000 în total); procentele „Ajung liniștiți la pensie” (afișate pe site ca „ajung la pensie fără faliment”: 100%, 100%, 38%, 1%) și averea tipică (~1,3 mil., ~2 mil., ~86.000 lei, sub zero).
- Cele 10 teme de la „Ce înveți”: secțiunea „Ce înveți” din README.
- „Ce nu face încă jocul” (Noua Casă, credite în euro): secțiunea cu același nume.
- Plafonul de îndatorare 40% / 45% la prima locuință: README, secțiunea „Cifrele sunt reale”; sursa din joc e `data/config.json` („Regulamentul BNR 17/2012 modificat”).
- Codul civil la moșteniri: `data/config.json` și `data/concepts.json` din joc (art. 1114 alin. 2), evenimentul „Casa unchiului”.
- Textele din cardul de decizie: evenimentele `urgenta-2000`, `ifn-alegere`, `ifn-restanta` din `data/events/urgente.json`.
La o versiune nouă a jocului, recitește README-ul și actualizează în `index.html` cifrele de mai sus.
