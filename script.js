document.addEventListener("DOMContentLoaded", function () {
    const songsData = {
        "A Satana": {
            title: "A Satana, 1980",
            lyrics: `Sangue scuro e fetido che avanza dalla parte scura
Il fronte dei cadaveri divora ogni cosa vivente

E satana padrone è a capo del suo carro di teste umane
Folle delirante generale del suo esercito di scarafaggi nucleari

E il passato scorre scorre oscuro di fronte agli occhi miei
E la torcia di Palak non è valsa a spegnere i fiori del male

E il sacrificio umano non può nulla contro il pugno di ferro
Satana ha la frusta a nove code del barone (Von Glodoeten?)`,
            youtube: "https://www.youtube.com/embed/IoqAN7XRJek"
        },
        "Sono dannato": {
            title: "Sono dannato, 1980",
            lyrics: `Vieni con me (sai che mi nascondo sempre?) nella notte
grida e soffri, solo così proverò il piacere
ricorda che non ci sono limiti alle nostre azioni

Perché sono
o si io sono
io sono
un dannato

Grida con me tra fumo e odori della nostra carne
guarda onde viola che si allungano, danza con loro
l'ultimo ballo della morte

Perché sono
o si io sono
io sono
un dannato

(Azabachero?) portano gli angeli caduti dal cielo
senza le ali, corpi coperti di sangue blu
scuotigli fuoco, le bombe viola e masse pululente
guarda onde viola che si allungano, danza con loro
l'ultimo ballo della morte
grida con loro`,
            youtube: "https://www.youtube.com/embed/VbR1VGnISvI"
        },
        "Mars": {
            title: "Mars, 1980",
            lyrics: `Nella foresta di cemento armato
viveva un cieco figlio di Mars
lui conosceva la felicità
e disse che poteva darla pure a me
piccolo straniero se vuoi farla tua
la inseguirai per tutta la tua vita
gira per la notte vestita di nero
ti farà schiavo con la sua illusione

Nella foresta di cemento armato
viveva un cieco figlio di Mars
lui conosceva la felicità
e disse che poteva darla pure a me
piccolo straniero se vuoi farla tua
la inseguirai per tutta la tua vita
gira per la notte vestita di nero
ti farà schiavo con la sua illusione`,
            youtube: "https://www.youtube.com/embed/LC1rcnf6t-g"
        },
        "One minute": {
            title: "One minute, 1980",
            lyrics: `Testo non trascritto`,
            youtube: "https://youtube.com/embed/6QtRyIptS0Y"
        },
        "After Death": {
            title: "After Death, 1980",
            lyrics: `When I will die no one will cry my bones will lie
When I will die my bones are broke my touch my smoke
When I will lie I'll understand and from my heart
When I will die my ghost will cry and you would smile

When I will die no one will cry no one will lie
When I will die my bones will broke my touch my smoke
When I will lie I'll understand and from my heart
When I will die my ghost will cry and you would smile

When I will die no one will cry my bones will lie
When I will die my bones are broke my touch my smoke
When I will lie I'll understand and from my heart
When I will lie my ghost will cry and you would smile`,
            youtube: "https://youtube.com/embed/yj09MDuJUOo"
        },
        "Control": {
            title: "Control, 1980",
            lyrics: `Fuck into your mother
and I'll make into
fuck into your mother
and I'll make it through
fuck into your mother
and I'll make into the eyes
fuck into the maker
and I'll make it skies
fuck into your maker
and I'll make it too
fuck into your maker
and I'll rabaduba cool

O control
o control
o control
o control

Have it too the charlie
and they'll think it con gli altri
fuck into your mother
and I'll make it cool
never had a body
and I'll make his eyes
fuck into your mother
and I'll make his eyes

O control
o control
I say control
o control
controllami
stranger
fuck into your mother
rock and roll is here to stay
rock and roll is here to stay
rock and roll rock and roll
fuck into your mother
fuck into your mother`,
            youtube: "https://youtube.com/embed/km2_m3rNSV8"
        },
        "Elettroflash": {
            title: "Elettroflash, 1980",
            lyrics: `Sulla porta un vecchio straccio intriso del sangue di una città
e voci lontane si perderanno nei cuniculi
mentre sei impaziente elettroflash
e la festa ormai è nulla per te

Forse un giorno spengero una vita di marmo
e sognerò di avere solo sognato
nelle mani avrò solo un brutto vecchio timbro
tradito sempre solo dallo stesso me

Annegherò nell'asfalto liquido
assistendo inerme al momento della mia disfatta
forse un giorno spengero una vita di marmo
pensando sempre questo è il segnale`,
            youtube: "https://youtube.com/embed/ede1kTX8T2c"
        },
        "Your Body": {
            title: "Your body, 1980",
            lyrics: `Testo non trascritto`,
            youtube: "https://youtube.com/embed/kWyR4cb1eCY"
        },
        "Anniversary": {
            title: "Anniversary, 1980",
            lyrics: `Testo non trascritto`,
            youtube: "https://youtube.com/embed/Uc2ryj6dlGU"
        },
        "In my head": {
            title: "In my head, 1980",
            lyrics: `Testo non trascritto`,
            youtube: "https://youtube.com/embed/0qRX3K5jMqs"
        },
        "Autocontrollo": {
            title: "Autocontrollo, 1981",
            lyrics: `Testo non trascritto`,
            youtube: "https://youtube.com/embed/83D4NYIyML0"
        },
        "Rotterdam": {
            title: "Rotterdam, 1981",
            lyrics: `Don't look for power because now you'll never be king
Don't think about this because you will never
Now close your eyes and see the weight of your decisions to me
All into a box that space you for the tais
You are violent son but you will never the king
Just play the dance for you deadly missed me
Your rotten ideas will do disasters
You are violent son but you will never the king
You are violent son but you will never the king
You are violent son but you will never the king
You are violent son but you will never the king
Silly
Silly
Silly
Silly`,
            youtube: "https://youtube.com/embed/MwLsjIMr5OM"
        },
        "Dea del Fujiama": {
            title: "Dea del Fujiama, 1981",
            lyrics: `Finalmente ti vedo regina del fuoco
Solo ora ti sento O Dea  dei fumi
Nel tuo sguardo freddo c'è scritto il dolore
Sotto la pelle bianca il corpo è senza vita

O Dea, del Fujiama Fujiama
Figlia di Nagasaki Nagasaki Nagasaki

Ma poi ti chiamo e tu non rispondi
E quando ti sfioro svanisci nel nulla
Fantasma aereo, fantasma senza pace mai

O Regina dei samurai samurai
O Figlia di Nagasaki Nagasaki Nagasaki

Finalmente mi tratti di sguardi e inespressive
Non c'è emozione sulle tue dure labbra
Perché sei morta nel freddo sole blu
A Nagasaki carbonizzata anche tu

O Dea, del Fujiama Fujiama
Figlia di Nagasaki Nagasaki Nagasaki
O Regina dei samurai
O Dea, del Fujiama Fujiama`,
            youtube: "https://youtube.com/embed/wQkWl9UyZno"
        },
        "Claustrofobia": {
            title: "Claustrofobia, 1982",
            lyrics: `Portami sotto di te
per essere reale
porta me sotto stanze vuote
e mettimi sotto la stanza ad ascoltare i vostri passi
mettimi sotto la terra senza poi essere avvertito
chiudi i miei occhi
questi specchi mi hanno lacerato la pelle
chiudi i miei occhi
gli specchi gli specchi che ci osservano

Ecco i miei occhi
eccoti i miei veri occhi
ecco i miei pensieri no non specchiarti dentro
eccoti i miei occhi per aprire con lame il loro corpo di cera
e mettimi sotto la stanza per essere reale
lasciami sotto la terra ad ascoltare i vostri passi
lasciami sotto la terra dove manca
l'aria l'aria l'aria l'aria l'aria l'aria
l'aria
rende consumabile
rende consumabile

Claustrofobia 
Claustrofobia 
Claustrofobia 
Claustrofobia`,
            youtube: "https://youtube.com/embed/KaTh0adm3AA"
        },
        "Vuoto": {
            title: "Vuoto, 1982",
            lyrics: `Aria ferma sotto i passi tuoi senza peso
aria ch'io non respirerò mai mai più
e tu chi sei tu chi sei
chi sei
lama ora penetra nel fianco caldo mio
che è aperto e suda sangue sangue sangue
e tu chi sei tu chi sei
voglio odio brucio brucio i ricordi brucia la pazzia
assordando distruggendo distruggendo tutto il vuoto
vuoto
vuoto
vuoto

Oltre il tempo c'è il ricordo non lo riavrai
oltre il tempo c'è il ricordo non lo riavrai
oltre il tempo c'è il ricordo non lo riavrai
oltre il tempo c'è il ricordo non lo riavrai mai
non lo riavrai non lo riavrai mai
non lo riavrai non lo riavrai mai
non lo riavrai non lo riavrai mai

Ora chiusa la porta e celati questi specchi curiosi
che la mia vista non vedrà mai più
e tu chi sei tu chi sei
chi sei
lama ora penetra nel fianco caldo mio
che è aperto e suda sangue sangue sangue
e tu chi sei tu chi sei
voglio odio brucio brucio i ricordi brucia la pazzia
assordando distruggendo distruggendo tutto il vuoto
vuoto
vuoto
vuoto

Oltre il tempo c'è il ricordo non lo riavrai
oltre il tempo c'è il ricordo non lo riavrai
oltre il tempo c'è il ricordo non lo riavrai
oltre il tempo c'è il ricordo non lo riavrai mai
non lo riavrai non lo riavrai mai
non lo riavrai non lo riavrai mai
non lo riavrai non lo riavrai mai
non lo riavrai non lo riavrai
non lo riavrai non lo riavrai
non lo riavrai non lo riavrai`,
            youtube: "https://youtube.com/embed/7MUReal9fR8"
        },
        "Interior Deus": {
            title: "Interior Deus, 1982",
            lyrics: `laus
laus
laus
laus
laus
laus deus

(tutti guardano me?)
il mio respiro
e l'immagine malcapitante su di me
dallo schermo una luce va mista adonai
(rimani 7 ore?), 7 ore in una maschera
dalle labbra una voce grida come va

laus
laus
laus
laus deus
laus
laus

quello sguardo nello schermo l'ho cercato in mille altri
tutti i respiri che ora sai più senza te
schermi vetri infranti rotti dentro te, dentro di te
mentre la luce nel buio più cattivo qui con te
dalle labbra una voce grida come vaaaa

laus
laus
laus
laus
laus deus
laus deus
interior deus
interior deus`,
            youtube: "https://www.youtube.com/embed/VbR1VGnISvI"
        },
        "Pigalle": {
            title: "Pigalle, 1982",
            lyrics: `Testo della canzone 2...
                     Ancora altre righe...`,
            youtube: "https://www.youtube.com/embed/OngdbRQpGVA"
        },
        "Betrayal": {
            title: "Betrayal, 1982",
            lyrics: `Who prays for us
when I say to another man
what is betrayal
when I look and take my mind
when I look and take my mind
when I look and take my mind
whos praying for us
when I say to another time
what is betrayal
when I say and look my mind

Who prays for us
who prays for us
who prays for us
who prays for us

Whos praying for us
when I look and take my life
what is betrayal
when I look and take my mind
whos praying for us
when I look and take your face
say else betrayal
when I look and take your face
when I look and take your face
when I look and take your face
when I look and take your face
who's praying for us 

Who prays for us
who prays for us
who prays for us
who prays for us

Oooooo who's praying
oooooo betrayal
oooooo who's praying
oooooo betrayal
oooooo who's praying
oooooo betrayal
oooooo who's praying
oooooo betrayal

Who prays for us
who prays for us
who prays for us
who prays for us`,
            youtube: "https://youtube.com/embed/x0X1Im6C0do"
        },
        "Tradimento": {
            title: "Tradimento, 1982",
            lyrics: `Chi prega per me
non è Dio o il suo Messia
su croci crocifisso
chi prega per me
chi piangerà con me
chi piangerà con me
con me
non te
perché
con te
perché 
con te
perché 
con te

Ti indicherò solo
faccio parte di un altra era, lontana anni luce
nessuno raggiunger mi può
nessuno raggiunger mi può
quel bacio fu tradimento 
chi prega per me
per me
per me
non te
perché 
non te
perché 
non te
perché 
non te

Tu sei Giuda 
tu sei Giuda
tu sei Giuda 
tu sei Giuda
tu sei Giuda
tu sei Giuda
tu sei
Giuda 
perché 
non te
perché 
non te
perché 
non te 
perché
tu sei tu sei Giuda
perché tu sei Giuda`,
            youtube: "https://youtube.com/embed/Q2PgV_IG9k0"
        },
        "Nave Notte": {
            title: "Nave Notte, 1983",
            lyrics: `Testo della canzone 3...`,
            youtube: "https://youtube.com/embed/dMINff8ixPg"
        },
        "Bisogno di odio": {
            title: "Bisogno di odio, 1983",
            lyrics: `Seguo l'ombra, l'ombra segue me
io guardo lui, lui e me ci affronteremo
niente più da perdere apparte noi
io seguo lui, lui e me ci affronteremo
cuori non sono mai serviti a noi
cuori non hanno mai mai capito
di amare, amare noi

Seguo l'ombra, l'ombra segue me
la lama tua penetra nel mio petto
niente più da perdere apparte noi
io seguo lui, lui e me ci strapperemo
cuori non sono mai serviti a noi
cuori non hanno mai mai capito
di amare, amare noi
di amare, amare noi
di amare, amare noi
di amare, amare noi

Il suo corpo coperto è dal mio, immerso nell'odio
i suoi occhi coperti dal mio bisogno di odio
Il suo corpo coperto è dal mio bisogno di odio
i suoi occhi coperti dal mio bisogno di odio
bisogno di odio
bisogno, bisogno di odio
bisogno di odio
bisogno di
bisogno di odio`,
            youtube: "https://youtube.com/embed/b3EUj_k075U"
        },
        "Ridi e sogna": {
            title: "Ridi e sogna, 1983",
            lyrics: `Testo della canzone 2...
                     Ancora altre righe...`,
            youtube: "https://youtube.com/embed/P5wTT0pAsLM"
        },
        "People in war": {
            title: "People in war, 1985",
            lyrics: `Testo della canzone 3...`,
            youtube: "https://youtube.com/embed/h8Gck7KO5G4"
        },
        "Occhi neri": {
            title: "Occhi neri, 1986",
            lyrics: `Occhi neri
dal vuoto non puoi salvarti più
stupido il tuo gioco, stupido
credere a un diverso mondo e stare qui

Zaiando, zeidespeooo

Occhi neri
dal vuoto non puoi salvarti più
stupido il tuo gioco, stupido
credere a un diverso mondo e stare qui

Nella notte senza luna ho pregato piano
nella notte senza suono mi è arrivato dio
mi è arrivato dio
mi è arrivato dio

Zaiando, zeidespeooo

Occhi neri
dal vuoto non puoi salvarti più
maledetto

Nella notte senza luna ho pregato piano
nella notte senza suono mi è arrivato dio
mi è arrivato dio
mi è arrivato il mio dio
mi è arrivato dio
mi è arrivato dio
mi è arrivato dio
mi è arrivato dio
mi è arrivato dio
mi è arrivato dio`,
            youtube: "https://youtube.com/embed/AruJIvfQ_kM"
         },
        "Oltre la notte": {
            title: "Oltre la notte, 1986",
            lyrics: `Io sono uno
io sono due
mi cullerò
lungo questa notte
da un infinita ha emanato una voce
che tutto sa

Io sono uno
io sono due
mi cullerò
lungo questa notte
da un infinita emanò una voce
che tutto sa

Io sono uno
io sono due
mi cullerò
lungo questa notte
da un infinita ha emanato una voce
che tutto sa`,
            youtube: "https://youtube.com/embed/OozncD2JEx4"
        }
    };

    const songList = document.getElementById("song-list");

    if (songList) {
        for (let key in songsData) {
            const song = songsData[key];

            const songCard = document.createElement("div");
            songCard.classList.add("song-card");
            songCard.innerHTML = `<h3>${song.title}</h3>`;

            songCard.addEventListener("click", function () {
                window.location.href = `song.html?title=${key}`;
            });

            songList.appendChild(songCard);
        }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const songKey = urlParams.get("title");

    if (songKey && songsData[songKey]) {
        const songDetails = songsData[songKey];

        document.getElementById("song-title").innerText = songDetails.title;
        document.getElementById("song-lyrics").innerText = songDetails.lyrics;
        document.getElementById("song-video").src = songDetails.youtube;
    }
});