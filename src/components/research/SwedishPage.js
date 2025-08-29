import React from 'react';
import './Researchpermission.css';

const SwedishPage = () => {
    return (
        <div>
            <p>
                <b>
                    <span lang="SV">
                        Informationsbrev om forskning om självutvärdering i lärande av
                        forskningsetik
                    </span>
                </b>
            </p>

            <p>
                <span lang="SV">
                    Vi, utvecklarna av Reflektionskompassen, är forskare inom undervisning och
                    lärande vid Helsingfors universitet, Pedagogiska fakulteten. Vi skulle vilja
                    förstå självutvärdering i kontexten av forskningsetik och skulle vilja analysera
                    matchningen mellan studenters egen utvärdering och av sin förståelse av
                    forskningsetik och de öppna svaren de ger. Vi är också intresserade av hur
                    studenternas egen utvärdering förhåller sig till lärarens eventuella
                    utvärdering. Vi analyserar inte lärarens kursuppgifter.
                </span>
            </p>

            <p>
                <span lang="SV">
                    Deltagande i forskningen är frivilligt. Först ber vi läraren att tillåta oss att
                    använda informationen som genereras genom denna applikation. Om läraren
                    samtycker skickar systemet en förfrågan till kursens studenter. Om läraren
                    avböjer användningen av informationen som genereras genom användningen av
                    applikationen kommer systemet inte att skicka en förfrågan till studenterna.
                    Information från studenter som inte har gett sitt samtycke kommer inte att
                    användas, även om läraren samtyckt. Deltagande i forskning hjälper oss att
                    utveckla forskningsetisk utbildning.
                </span>
            </p>

            <p>
                <span lang="SV">
                    Referenser till individer, platser eller institutioner kommer att anonymiseras.
                    Forskare arbetar bara med anonymiserade data. Forskningen följer
                    Forskningsetiska delegationens riktlinjer. Vi avslöjar inte personlig
                    information, och vi garanterar din anonymitet i forskningsrapporter och
                    vetenskapliga artiklar. Vi lagrar uppgifterna på lösenordsskyddade konton som är
                    kopplade till Helsingfors universitet. Om du vill dra dig ur forskningen kan du
                    göra det när som helst utan att ange en anledning och utan konsekvenser för dig.
                    Du kan avbryta genom att kontakta e-postadressen nedan. Eftersom forskarna
                    arbetar med anonymiserade data är det dock möjligt att det inte går att spåra
                    dina data efter vissa faser i forskningsprocessen.
                </span>
            </p>

            <p>
                <span lang="SV">
                    Om du har frågor, tveka inte att kontakta Erika Löfström
                    Erika.lofstrom@helsinki.fi
                </span>
            </p>

            <p>
                <b>
                    <span lang="SV">Samtycke</span>
                </b>
            </p>

            <p>Jag förstår att</p>

            <p>
                <span lang="FI" className="p">
                    deltagande i forskning är frivilligt, och jag kan när som helst avsluta mitt
                    deltagande utan att ange någon anledning
                </span>
            </p>

            <p>
                <span lang="SV" className="p">
                    jag har rätt att återkalla mitt samtycke och be forskare att radera redan
                    insamlade data. Jag förstår att forskarna vid det här laget kanske inte kan
                    spåra mina data
                </span>
            </p>

            <p>
                <span lang="SV" className="p">
                    min identitet eller annan information som kan leda till att min identitet
                    avslöjas kommer inte att avslöjas över av forskarna
                </span>
            </p>

            <p>
                <span lang="SV" className="p">
                    jag kan kontakta forskarna om jag har frågor om forskningen
                </span>
            </p>
        </div>
    );
};

export default SwedishPage;
