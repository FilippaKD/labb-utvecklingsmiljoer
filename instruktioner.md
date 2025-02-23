# Laboration: PWA & Electron
I denna del av labben ska du testa på att skapa din egna PWA samt en Electron app från ett existerande projekt. 

## Progressive web app.
I första delen av labben ska du få testa på att skapa en PWA och testa på att installera denna på mobiltelefon.

### Innan du börjar

Skapa ett privat repository på github för kunna publicera projektet på netlify och test appen på din enhet.

### Del 1: Web manifest
För att kunna installera en PWA krävs ett manifest. Denna fil saknas i projektet och du behöver skapa denna. 

Nedan följer instruktioner för hur detta kan göras:  

1. I mappen icons ligger ikonen som ska användas till PWA:n. Gå in på https://www.pwabuilder.com/imageGenerator och generera de ikoner som behövs. *Du väljer själv vilka enheter du vill skapa ikoner för.*

2. Ladda ner bilderna som genereras och placera dessa i mappen icons.

3. Skapa en manifest-fil med nödvändig meta-data. PWA:n ska köras som en standalone applikation och inkludera de ikoner som genereras. Döp även appen till ett relevant namn. Kolla på https://developer.mozilla.org/en-US/docs/Web/Manifest om du är osäker på vilka taggar som finns och behövs.

4. Länka till manifest filen från index.html.

5. Publicera appen på netlify och testa att installera den på din enhet.

### Del 2: Egen offline skärm
Om användaren saknar internetuppkoppling kan en egen offline-skärm öka användarupplevelsen. I denna del ska du registrera en service-worker som visar en custom-sida om internet uppkoppling saknas.

Nedan följer instruktioner för hur detta kan göras:

1. Service workern har redan skapats, så läs igenom filen *sw.js* och försök förstå koden.

2. Ditt jobb blir att registrera service workern från script.js.

3. Kontrollera sedan om service workern är registrerad i chrome devtools och kolla vad som är sparat i lokal cache.

4. Pusha till github och starta om PWA:n på din enhet.

5. Testa att stänga av internet på din telefon och starta om den installerade appen.

## Electron
Del två av labben är att skapa en offline desktop version av samma applikation med hjälp av Electron. 

*Eftersom electron fungerar offline, behövs inte den service worker som installerades. Ta bort registreringsfunktionen i script.js.*

Nedan följer instruktioner för hur detta kan genomföras; 

1. Installera Node.js om du inte redan har det. Länk till node: https://nodejs.org/en

2. I terminalen för ditt projekt kör kommandot: `npm init -y`.

3. Installera Electron till ditt projekt med kommandot: `npm i electron --save-dev`.

4. Lägg till start scriptet i package.json filen: `"start": "electron ."`.

5. Ändra ingångspunkten till: `"main.js"`.

6. Skapa main.js filen i roten av projektet.

7. Instansiera nu ett nytt fönster i main.js och ladda in index.html.

8. Testa nu att starta din applikation med kommandot: `npm run start`.

### Interprocesskommunikation
I denna del av labben ska du få djupare förståelse för Electrons processmodell och hur kommunikationen mellan dessa kan gå till.

Målet är att skapa en egen knapp för att stänga ner fönstret och applikationen. Detta åstadkoms förslagsvis genom att använda preload-script och ipc-modulen.

1. Skapa ett preload-scrip.

2. Ladda in detta vid instansiering av fönstret.

3. Använd contextBridge för att skapa ett api som kan anropas från renderingskontexten.

4. Definer en metod i ditt API för att anropa en kanal med ipcRenderer.

5. Skapa en lyssnare för kanalen som anropar close() på fönsterinstansen. ex. `win.close()`.

Tips! Kolla föreläsningen och läs denna guide: https://www.electronjs.org/docs/latest/tutorial/ipc.

Ställ frågor vid behov,

Lycka till!
