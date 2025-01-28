import React from 'react';
import './Instructions.css';
import { useTranslation } from 'react-i18next';
import TopBar from '../utilities/TopBar';
import { Col, Container, Row } from 'react-bootstrap';
import { ReactComponent as DownloadIcon } from '../utilities/icons/download.svg';
import PropTypes from 'prop-types';

const DownloadLink = ({ fileUrl, fileName, linkText }) => {
    return (
        <a href={fileUrl} download={fileName} aria-label={`Download ${fileName}`}>
            {linkText}
            <DownloadIcon
                className="ms-2"
                width="16"
                height="16"
                aria-hidden="true"
                focusable="false"
            />
        </a>
    );
};

const Instructions = () => {
    const { t } = useTranslation();

    return (
        <Container>
            <Row className="justify-content-center mb-4">
                <Col className="col-auto">
                    <DownloadLink
                        fileUrl="/instructions.pdf"
                        fileName="instructions.pdf"
                        linkText={t('download_instructions')}
                    />
                </Col>

                <Col className="col-auto">
                    <DownloadLink
                        fileUrl="/slides.pdf"
                        fileName="slides.pdf"
                        linkText={t('download_slides')}
                    />
                </Col>

                <Col className="col-auto">
                    <DownloadLink
                        fileUrl="/slides.pptx"
                        fileName="slides.pptx"
                        linkText={t('download_slides_powerpoint')}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <TopBar heading={t('instructions_heading')} />
                    <div className="embed-responsive-container">
                        <p>
                            <a name="_Hlk188388862"></a>
                            <span lang="FI">
                                <img
                                    width="140"
                                    height="37"
                                    src="/image002.png"
                                    alt="A green and black logoDescription automatically generated"
                                />
                            </span>
                            <span lang="EN-US">   </span>
                        </p>

                        <p>
                            <span lang="EN-US">Dear University Teacher!</span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Welcome using the <i>Reflection Compass</i> in research ethics and
                                integrity teaching!
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                The <i>Reflection Compass</i> application is designed to support
                                teachers in teaching about research ethics and integrity, and to
                                support students in reflective engagement with research
                                ethics/integrity learning tasks.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Many courses have elements of research ethics and integrity
                                integrated in them – like research seminars, methodology courses,
                                academic writing, peer reviewing or publishing seminars. In
                                addition, reflection is an important aspect of becoming ethically
                                sensitive. Research ethics and reflection skills may be challenging
                                to evaluate pertaining if and what the students are learning.
                                Moreover, students may rely on AI tools to get assignments done –
                                which is often fine, but if done without own thinking and
                                reflection, it is questionable what students have truly learned.
                                Teachers may wish they could avoid unwanted use of AI and maintain a
                                connection with the students’ learning process without being
                                overloaded with assignments to read.{' '}
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="EN-US">What does the application do?</span>
                            </b>
                        </p>

                        <p>
                            <span lang="EN-US">
                                We are introducing a research-based tool for university teachers who
                                cover research ethics/integrity in their teaching. The application
                                is developed by research ethics experts and pedagogues to help
                                teachers to
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="EN-US">
                                find out what the students are learning and if their teaching is
                                effective;
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="EN-US">
                                monitor how their students understand the ethics/integrity-related
                                content covered in a course;
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="EN-US">
                                implement formative assessment and provide feedback to students
                                during a course;
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="EN-US">
                                encourage students to think about their learning and support the
                                development of students’ reflection skills;
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                ·<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="EN-US">
                                support students in learning to evaluate their own understanding.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="EN-US">How does the application work?</span>
                            </b>
                        </p>

                        <p>
                            <span lang="EN-US">
                                The application guides the teacher to set up a course with
                                assignments of topics that require student reflection. After setting
                                up the course and assignments (it is a good idea to include several
                                assignments in one course, the assignment time will indicate when
                                students can do them), the teacher then copies an invitation to be
                                shared with students. Teachers can also duplicate their courses and
                                assignments and use them in the coming semesters (courses will have
                                unique IDs that will help distinguish between different years and
                                groups).
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Students sign in using their credentials and can go to the
                                assignment that the teacher has indicated in the invitation link.
                                 Students do two tasks – they first reflect on the topic indicated
                                in the assignment by writing a paragraph following the task 1
                                description. After that they read five statements and pick the one
                                that best describes their understanding of the topic they had just
                                reflected on. After submitting their response, they will see
                                automated feedback describing the level of understanding they had
                                picked. The application encourages students to think if the
                                reflection they submitted matches the level of understanding
                                described in the feedback. Students have a chance to go back to
                                their response and edit either their written paragraph or their
                                level of understanding.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                The application analyses the indicated levels of understanding and
                                provides results as a pie-chart to the teacher (see figure 1).{' '}
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img width="363" height="269" src="/image003.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Figure 1. Pie-chart with the assignment results.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Moreover, both the teacher and students can see learning progress on
                                the linear graph (see figure 2).{' '}
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img width="352" height="163" src="/image004.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Figure 2. Linear graph with student progress in two assignments.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                In addition to the automated feedback, the teacher can also provide
                                more personalised feedback in the form of written text or by
                                indicating the teacher’s estimation of the level of understanding
                                displayed in the paragraph written by the student.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                While using the app mainly supports students’ reflective learning
                                and formative assessment during the course, the graph displaying the
                                individual student’s learning process serves well as a foundation
                                for a subsequent ‘reflection journal’. The graph functions as a
                                prompt for students as they summarise their learning process in the
                                reflection journal. The reflection journal can be used for the
                                purpose of summative assessment, that is, as a graded assignment
                                contributing to the final assessment in the course, usually the
                                grade.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Repeated use of the application provides teachers insights on how
                                the students are progressing, which topics seem to be more
                                challenging and which ones have been mastered. Students can also see
                                their own progress on the graph, and by reading the feedback
                                provided by the application and the teacher, can work on their
                                reflection skills.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Levels of understanding based on the SOLO taxonomy:
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">Symbol</span>
                            <span lang="EN-US">  </span>
                            <span lang="FI">
                                <img width="12" height="12" src="/image005.png" />
                            </span>
                            <span lang="EN-US">  </span>
                            <span lang="EN-US">
                                indicates a need for help to understand. To improve their level of
                                understanding the learner can improve their ethical competence by
                                consulting relevant codes of conduct, and to discuss with
                                experienced researchers how they think about making right choices in
                                research.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">Symbol</span>
                            <span lang="EN-US"> </span>
                            <span lang="EN-GB">
                                <img width="13" height="13" src="/image006.png" />
                            </span>
                            <span lang="EN-US">  </span>
                            <span lang="EN-US">
                                indicates emerging understanding. The learner is encouraged to think
                                of related questions, or new questions which may follow the initial
                                issue, it is a good idea to map who are concerned by a situation,
                                and what kind of different questions they would raise about the
                                situation.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">Symbol</span>
                            <span lang="EN-US"> </span>
                            <span lang="EN-GB">
                                <img width="17" height="17" src="/image007.png" />
                            </span>
                            <span lang="EN-GB"> </span>
                            <span lang="EN-US">
                                indicates moderate understanding. The learner should try to see
                                connections between different ethical aspects in research and think
                                of examples to describe those connections.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-GB">Symbol</span>
                            <span lang="EN-GB"></span>
                            <span lang="EN-GB">
                                <img
                                    width="16"
                                    height="16"
                                    src="/image008.png"
                                    alt="A black and purple square with circlesDescription automatically generated"
                                />
                            </span>
                            <span lang="EN-GB"> </span>
                            <span lang="EN-GB">
                                indicates coherent understanding in which relationships between
                                concepts are understood. The learner is advised to apply their
                                knowledge in various contexts and provide help to others.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-GB">Symbol</span>
                            <span lang="EN-GB">
                                  <img width="19" height="19" src="/image009.png" />
                                  
                            </span>
                            <span lang="EN-GB">
                                indicates in-depth understanding. The learner may have thought about
                                themselves as a role model in promoting good scientific practice in
                                the research community more broadly, and in helping to create an
                                ethically sustainable research culture.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="EN-US">
                                    What background is the application based on?
                                </span>
                            </b>
                        </p>

                        <p>
                            <i>
                                <span lang="EN-US">Reflection Compass</span>
                            </i>
                            <span lang="EN-US">
                                {' '}
                                is built on research and design principles and utilizes the{' '}
                                <i>Structure of Observed Learning Outcomes</i> (SOLO) taxonomy to
                                provide solid grounding to the results. By combining the results of
                                the application, monitoring the student work in class and work
                                submitted at different timepoints of the course, the teacher can get
                                a holistic picture of the student development and effectiveness of
                                the training.
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                If you are interested in finding out more about the SOLO taxonomy or
                                the research behind the application, please visit the following
                                links:
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                SOLO taxonomy:{' '}
                                <a href="https://www.johnbiggs.com.au/academic/solo-taxonomy/">
                                    https://www.johnbiggs.com.au/academic/solo-taxonomy/
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Article: John Biggs (1999) What the Student Does: teaching for
                                enhanced learning, Higher Education Research &amp; Development,
                                18:1, 57-75, DOI: 10.1080/0729436990180105
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Link to the article:{' '}
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/0729436990180105">
                                    https://www.tandfonline.com/doi/pdf/10.1080/0729436990180105
                                </a>
                            </span>
                        </p>

                        <p>
                            <i>
                                <span lang="EN-US">
                                    Research about the development of the reflection application:
                                </span>
                            </i>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Article: Anu Tammeleht &amp; Erika Löfström (2024) Learners’
                                self-assessment as a measure to evaluate the effectiveness of
                                research ethics and integrity training: can we rely on
                                self-reports?, <i>Ethics &amp; Behavior</i>, 34:8, 575-596, DOI:
                                10.1080/10508422.2023.2266073{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Link to the article:{' '}
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/10508422.2023.2266073">
                                    https://www.tandfonline.com/doi/pdf/10.1080/10508422.2023.2266073
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                The development of the application was supported by:
                            </span>
                        </p>

                        <p>
                            <img
                                width="106"
                                height="106"
                                src="/image010.jpg"
                                align="left"
                                hspace="9"
                            />
                            <span lang="FI">
                                <img border="0" width="114" height="43" src="/image011.png" />
                            </span>
                            <span lang="EN-US">
                                  <img border="0" width="44" height="40" src="/image012.png" />
                                   
                            </span>
                            <span lang="FI">
                                <img
                                    border="0"
                                    width="61"
                                    height="46"
                                    src="/image013.jpg"
                                    alt="Reimagining Teachers and Teacher Education for our Futures | University of  Helsinki"
                                />
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Link to the application:{' '}
                                <a href="https://reflection-compass.it.helsinki.fi">
                                    https://reflection-compass.it.helsinki.fi
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">&nbsp;</span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Hyvä yliopiston opettaja!</span>
                            </b>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">
                                    Tervetuloa käyttämään Reflektiokompassia tutkimusetiikan
                                    opetuksessa!
                                </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Reflektiokompassisovellus on suunniteltu tukemaan opettajia
                                tutkimusetiikan opetuksessa sekä tukemaan opiskelijoiden reflektiota
                                tutkimusetiikan oppimistehtävissä.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Tutkimuseettisiä teemoja käsitellään monella opintojaksolla,
                                esimerkiksi tutkimusseminaareissa, menetelmäkursseilla, tieteellisen
                                kirjoittamisen kursseilla sekä vertaisarviointia ja julkaisemista
                                käsittelevissä seminaareissa. Lisäksi reflektio on tärkeä osa
                                eettisen herkkyyden kehittymistä. Kun opettaja haluaa tietää, mitä
                                ja miten opiskelijat oppivat, tutkimusetiikan ja reflektiotaitojen
                                arviointi voi olla haastavaa. Opiskelijat saattavat turvautua
                                tekoälytyökaluihin tehtävien suorittamisessa, mikä on usein
                                hyväksyttävää, mutta jos se tehdään ilman omaa ajattelua ja
                                reflektiota, on kyseenalaista, mitä opiskelijat ovat todella
                                oppineet. Opettajat saattavat toivoa voivansa välttää ei-toivottua
                                tekoälyn käyttöä samalla kun heillä säilyy yhteys opiskelijoiden
                                oppimisprosessiin ilman, että se edellyttää huomattavaa määrää
                                tehtävien tarkistamista.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Mitä sovellus tekee? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Esittelemme tutkimuspohjaisen työkalun yliopisto-opettajille, jotka
                                käsittelevät tutkimusetiikkaa opetuksessaan. Sovelluksen ovat
                                kehittäneet tutkimusetiikan asiantuntijat ja pedagogit opettajan
                                tueksi. Sovellus auttaa opettajaa{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                selvittämään, mitä opiskelijat oppivat ja miten toimivaa opetus on;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                seuraamaan, miten opiskelijat ymmärtävät kurssilla käsiteltyjä
                                tutkimusetiikan sisältöjä;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                toteuttamaan formatiivista arviointia ja antamaan palautetta
                                opiskelijoille kurssin aikana;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                kannustamaan opiskelijoita pohtimaan oppimistaan ja tukemaan heidän
                                reflektiotaitojensa kehittymistä;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                tukemaan opiskelijoita itsearviointitaitojen kehittämisessä.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Miten sovellus toimii? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Sovellus ohjaa opettajaa luomaan kurssin, jossa on opiskelijan
                                reflektiota vaativia tehtäviä. Kurssin ja tehtävien luomisen jälkeen
                                opettaja kopioi kutsun, joka jaetaan opiskelijoille. Kurssiin
                                kannattaa sisällyttää useita tehtäviä. Niiden ajankohdan voi
                                jaksottaa, ja sovellus ilmoittaa opiskelijalle, mikä tehtävä on
                                kulloinkin aktiivinen. Opettaja voi myös kopioida kurssejaan ja
                                tehtäviään ja käyttää niitä tulevina lukukausina (kursseilla on
                                yksilölliset tunnukset, jotka auttavat erottamaan toisistaan eri
                                vuodet ja ryhmät).
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Opiskelijat kirjautuvat sisään tunnuksillaan ja voivat siirtyä
                                tehtävään, jonka opettaja on ilmoittanut kutsulinkissä.
                                Opiskelijalle tehtävä sisältää kaksi vaihetta. Ensin he pohtivat
                                tehtävässä ilmoitettua aihetta kirjoittamalla lyhyehkön
                                tekstikappaleen tehtävän kuvauksen mukaisesti. Sen jälkeen he
                                lukevat viisi väitettä ja valitsevat sen, joka parhaiten kuvaa
                                heidän ymmärrystään aiheesta, josta juuri ovat kirjoittaneet.
                                Lähetettyään vastauksensa, opiskelijat saavat automaattisen
                                palautteen, joka kuvaa sanallisesti heidän valitsemaansa ymmärryksen
                                tasoa. Sovellus kannustaa opiskelijoita pohtimaan, vastaako heidän
                                lähettämänsä teksti palautteessa kuvattua ymmärryksen tasoa.
                                Opiskelijoilla on mahdollisuus palata vastaukseensa ja muokata joko
                                kirjoittamaansa kappaletta tai valita toinen vaihtoehto kuvaamaan
                                heidän ymmärryksensä tasoa.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Sovellus analysoi opiskelijan itse arvioiman ymmärryksenä tason ja
                                esittää tulokset piirakkakaaviona opettajalle (katso kuvio 1).
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img border="0" width="347" height="253" src="/image014.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Kuvio 1. Opettajan näkymä suoritetuista tehtävistä.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="FI">
                                Sekä opettaja että opiskelijat voivat nähdä oppimisen edistymisen
                                myös lineaarisessa kaaviossa (katso kuvio 2).
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img border="0" width="343" height="163" src="/image015.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Kuvio 2. Lineaarinen kaavio opiskelijoiden edistymisestä (esimerkki
                                kahden tehtävän tuloksista).
                            </span>
                        </p>

                        <p>
                            <span lang="FI">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="FI">
                                Opettaja voi myös lukea opiskelijoiden tuottamat tekstit ja antaa
                                henkilökohtaisempaa palautetta kirjoittamalla omin sanoin palautteen
                                opiskelijalle ja/tai valitsemalla valikosta sen ymmärryksen tason,
                                jota opiskelijan teksti opettajan arvion mukaan ilmentää.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Sovelluksen käyttö tukee pääasiassa opiskelijoiden reflektiivistä
                                oppimista ja formatiivista arviointia kurssin aikana, mutta
                                yksittäisen opiskelijan oppimisprosessia kuvaava kaavio (kuvio 2)
                                toimii hyvin perustana myöhemmälle reflektiopäiväkirjalle, jos
                                opettaja haluaa liittää sellaisen kurssiinsa. Kaavio toimii pohjana
                                ja inspiraationa opiskelijalle ja auttaa häntä analysoimaan
                                oppimisprosessiaan reflektiopäiväkirjassa. Reflektiopäiväkirjaa
                                voidaan käyttää summatiivisen arvioinnin tarkoituksiin, eli
                                arvioitavana tehtävänä, jonka perusteella muodostuu kurssin
                                lopullinen arviointi, yleensä arvosana.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Sovelluksen toistuva käyttö antaa opettajille tietoa siitä, miten
                                opiskelijat edistyvät, mitkä aiheet ovat hyvin hallussa ja mitkä
                                ovat opiskelijoille haastavampia. Opiskelijat voivat myös nähdä oman
                                edistymisensä kaaviossa, ja lukemalla sovelluksen ja opettajan
                                antamaa palautetta he voivat kehittää osaamistaan sekä reflektointi-
                                ja itsearviointitaitojaan.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="FI">Ymmärryksen tasot perustuvat SOLO-taksonomiaan: </span>
                        </p>

                        <p>
                            <span lang="FI">Symboli </span>
                            <span lang="FI">
                                <img border="0" width="12" height="12" src="/image005.png" />
                            </span>
                            <span lang="FI">
                                 merkitsee, että opiskelija tarvitsee apua ymmärryksen
                                muodostamiseen opiskeltavasta tutkimusetiikan sisällöstä.
                                Kehittääkseen ymmärrystään tutkimusetiikasta, oppijan on hyvä
                                tutustua esimerkiksi asiaankuuluviin eettisiin ohjeistuksiin ja
                                keskustella kokeneiden tutkijoiden kanssa siitä, miten he
                                ajattelevat oikeiden valintojen tekemistä tutkimuksessa.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Symboli </span>
                            <span lang="EN-GB">
                                <img border="0" width="13" height="13" src="/image006.png" />
                            </span>
                            <span lang="EN-GB"> </span>
                            <span lang="FI">
                                merkitsee orastavan ymmärryksen tasoa. Oppijalla on jonkinlainen
                                käsitys aiheesta, mutta se voi olla yksipuolista. Opiskelijaa
                                kannustetaan ajattelemaan minkälaisia muita ulottuvuuksia tai
                                kysymyksiä aiheeseen voisi liittyä tai jotka voivat seurata
                                opiskelijan esittämästä näkökulmasta. Opiskelijaa voi esimerkiksi
                                kannustaa pohtimaan ketkä tai mitkä tahot ovat osallisia kyseisessä
                                tutkimuseettisessä kysymyksessä ja miten aisa näyttäytyy heidän
                                näkökulmastaan.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Symboli </span>
                            <span lang="EN-GB">
                                <img border="0" width="17" height="17" src="/image007.png" />
                            </span>
                            <span lang="EN-GB"> </span>
                            <span lang="FI">
                                merkitsee kohtalaisen ymmärryksen tasoa. Oppijalla on ymmärrystä
                                monista aiheeseen liittyvistä seikoista, ja seuraava askel on
                                kehittää ymmärrystä asioiden välisistä yhteyksistä.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Symboli </span>
                            <span lang="EN-GB">
                                <img
                                    border="0"
                                    width="16"
                                    height="16"
                                    src="/image008.png"
                                    alt="A black and purple square with circlesDescription automatically generated"
                                />
                            </span>
                            <span lang="EN-GB"> </span>
                            <span lang="FI">
                                merkitsee asioiden välisten suhteiden ymmärtämistä. Tällä tasolla
                                oppija kykenee soveltamaan tietojaan uusissa tai erilaisissa
                                yhteyksissä ja myös neuvomaan muita.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Symboli </span>
                            <span lang="EN-GB">
                                <img border="0" width="19" height="19" src="/image009.png" />
                            </span>
                            <span lang="EN-GB"> </span>
                            <span lang="FI">
                                merkitsee syvällisen ymmärryksen tasoa. Oppija on saattanut ajatella
                                itseään roolimallina ja ymmärtää miten hän omalla toiminnallaan voi
                                edistää tutkimuseettisestä kestävää toimintatapaa.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Mihin tutkimustietoon sovellus perustuu? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Reflektiokompassi pohjautuu tutkimuksellisiin
                                suunnitteluperiaatteisiin ja tutkittuun tietoon. Se hyödyntää
                                <i>Structure of Observed Learning Outcomes</i> (SOLO) -taksonomiaa
                                ymmärryksen tasojen kuvauksessa ja palautteen muotoiluissa.
                                Seuraamalla opiskelijoiden työskentelyä kurssin aikana palautettujen
                                vastausten kautta ja yhdistämällä sovelluksen tehtävistä tuottamaa
                                tietoa ja visualisointeja opettaja voi saada kokonaisvaltaisen kuvan
                                opiskelijoiden kehityksestä ja opetuksen toimivuudesta.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Täältä voit lukea lisää SOLO-taksonomiasta tai sovelluksen taustalla
                                olevasta tutkimuksesta:{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                SOLO-taksonomia:{' '}
                                <a href="https://www.johnbiggs.com.au/academic/solo-taxonomy/">
                                    https://www.johnbiggs.com.au/academic/solo-taxonomy/
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Artikkeli: John Biggs (1999){' '}
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/0729436990180105">
                                    What the Student Does: teaching for enhanced learning
                                </a>
                                , Higher Education Research &amp; Development, 18:1, 57-75, DOI:
                                10.1080/0729436990180105
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">Tutkimus reflektiosovelluksen kehittämisestä: </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Artikkeli: Anu Tammeleht &amp; Erika Löfström (2024){' '}
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/10508422.2023.2266073">
                                    Learners’ self-assessment as a measure to evaluate the
                                    effectiveness of research ethics and integrity training: can we
                                    rely on self-reports
                                </a>
                                ?, <i>Ethics &amp; Behavior</i>, 34:8, 575-596, DOI:
                                10.1080/10508422.2023.2266073
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Seuraavat tahot ovat tukeneet sovelluksen kehittämistä:{' '}
                            </span>
                        </p>

                        <p>
                            <img
                                width="106"
                                height="106"
                                src="/image010.jpg"
                                align="left"
                                hspace="9"
                            />
                            <span lang="FI">
                                <img border="0" width="114" height="43" src="/image011.png" />
                            </span>
                            <span lang="EN-US">
                                  <img border="0" width="44" height="40" src="/image012.png" />
                                   
                            </span>
                            <span lang="FI">
                                <img
                                    border="0"
                                    width="61"
                                    height="46"
                                    src="/image013.jpg"
                                    alt="Reimagining Teachers and Teacher Education for our Futures | University of  Helsinki"
                                />
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                <a href="https://beyondbadapples.eu/">
                                    <span lang="SV">Beyond Bad Apples</span>
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Linkki sovellukseen: </span>
                            <span lang="EN-US">
                                <a href="https://reflection-compass.it.helsinki.fi">
                                    <span lang="SV">https://reflection-compass.it.helsinki.fi</span>
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="SV">&nbsp;</span>
                        </p>

                        <p>
                            <b>
                                <span lang="SV">Bästa universitetslärare!</span>
                            </b>
                        </p>

                        <p>
                            <b>
                                <span lang="SV">
                                    Välkommen att använda Reflektionskompassen i undervisningen om
                                    forskningsetik!
                                </span>
                            </b>
                        </p>

                        <p>
                            <span lang="SV">
                                Reflektionskompassen är en applikation för att stödja lärare i
                                undervisningen om forskningsetik, och för att stödja studenter i
                                reflekterande lärande med uppgifter relaterade till forskningsetik.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Forskningsetik behandlas inom många olika kurser, till exempel
                                forskningsseminarier, metodikkurser, vetenskapligt skrivande, och
                                seminarier om referentgranskning och publicering. Dessutom är
                                reflektion viktigt i sammanhang som kräver etisk sensitivitet. Det
                                kan var svårt för läraren att veta hur undervisning i forskningsetik
                                inverkar på studerandes vilja att förhålla sig reflektivt och agera
                                enligt god vetenskaplig praxis. Dessutom kan studenter förlita sig
                                på AI-verktyg för att slutföra uppgifter – vilket ofta är okej, men
                                om det görs utan egen tankeverksamhet och reflektion är det tveksamt
                                vad studenterna verkligen har lärt sig. Lärare kan önska att de
                                kunde undvika oönskad användning av AI och samtidigt hålla sig
                                underrättade om studenternas lärandeprocess utan att bli
                                överbelastade med uppgifter att läsa.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="SV">Vad gör applikationen? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="SV">
                                Vi introducerar ett forskningsbaserat verktyg för universitetslärare
                                som undervisar i forskningsetik. Applikationen är utvecklad av
                                experter på forskningsetik och pedagoger för att hjälpa lärare att{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="SV">
                                ta reda på vad studenterna lär sig och om deras undervisning är
                                ändamålsenlig;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="SV">övervaka hur studenterna förstår kursinnehållet; </span>
                        </p>

                        <p>
                            <span lang="SV">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="SV">
                                genomföra formativ bedömning och ge feedback till studenter under
                                kursens gång;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="SV">
                                uppmuntra studenter att vara medvetna om sitt lärande och stödja
                                utvecklingen av deras reflektionsförmåga;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="SV">
                                stödja studenter i att lära sig att utvärdera sin egen förståelse
                                och sitt lärande.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="SV">Hur fungerar applikationen? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="SV">
                                Applikationen vägleder läraren att sätta upp en kurs med uppgifter,
                                varpå läraren kopierar en inbjudan som delas med studenterna. Det är
                                en bra idé att inkludera flera uppgifter i en kurs. Uppgifterna
                                utförs under en tid som bestäms av läraren. Tidsspannet indikera när
                                studenterna kan göra uppgifterna. Lärare kan också duplicera sina
                                kurser och uppgifter och använda dem under kommande terminer.
                                Kurserna ges ett unikt ID som hjälper till att skilja mellan olika
                                år och grupper.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Studenter loggar in med sina inloggningsuppgifter och slår upp den
                                kurs och uppgift som läraren har angett i inbjudningslänken.
                                Uppgifterna består av två moment: först skriver studenten en
                                relativt kort text som svar på lärarens uppgift varpå hen
                                reflekterar över sitt eget kunnande och indikerar sin förståelse
                                genom att välja ett av fem alternativ som bäst beskriver
                                förståelsen. Efter att ha skickat in sitt svar får studenten
                                automatiserad feedback som beskriver den förståelsenivå de har valt.
                                Applikationen uppmuntrar studenterna reflektera över huruvida den
                                förståelsenivå som beskrivs i den automatiserade återkopplingen
                                motsvarar deras egen uppfattning. Studenten kan gå tillbaka till och
                                redigera antingen den egna svarstexten eller förståelsenivån.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Applikationen analyserar de av studenterna själva angivna nivåerna
                                för förståelse och anger resultaten i ett cirkeldiagram till läraren
                                (se figur 1).
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img border="0" width="363" height="269" src="/image003.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Figur 1. Lärarens vy över de av studenterna indikerade nivåerna för
                                förståelse av kursinnehåll.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="SV">
                                Dessutom kan både lärare och studenter se utvecklingen i ett
                                linjediagram (se figur 2).
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img border="0" width="352" height="163" src="/image004.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Figur 2. Linjediagram över en students självutvärdering av två
                                uppgifter.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="SV">
                                Utöver den automatiserade feedbacken som student får via
                                applikationen kan läraren ge mer personligt anpassad feedback i form
                                av skriven text eller genom att ange sin uppskattning av den
                                förståelsenivå som hen anser att studentens text uttrycker.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Användningen av appen stöder främst studenternas reflekterande
                                lärande och formativ bedömning under kursens gång, men diagrammet
                                som visar den enskilda studentens lärandeprocess (se figur 2)
                                fungerar väl som en grund för 'reflektionsdagbok'. Diagrammet
                                fungerar som en sammanfattning över lärandeprocessen och kan
                                användas för vidare reflektioner i dagboken. Reflektionsdagboken kan
                                användas för summativ bedömning, det vill säga som en betygsatt
                                uppgift som bidrar till den slutliga bedömningen i kursen.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Upprepad användning av applikationen ger lärare insikter om hur
                                studenterna utvecklas, vilka teman inom forskningsetik som verkar
                                vara mer utmanande och vilka som har bemästrats. Studenterna kan
                                också se sin egen utveckling i diagrammet, och genom att läsa
                                feedbacken som ges av applikationen och eventuellt också läraren,
                                utveckla självutvärderingskompetensen.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="SV">Förståelsenivåer baserade på SOLO-taxonomin: </span>
                        </p>

                        <p>
                            <span lang="SV">Symbolen </span>
                            <span lang="FI">
                                <img border="0" width="12" height="12" src="/image005.png" />
                            </span>
                            <span lang="SV">
                                 indikerar studentens behov av hjälp för att förstå. Studenten kan
                                behöva bekanta sig med central forskningsetiska regelverk och
                                diskutera med erfarna forskare om hur de tänker kring att göra rätt
                                val i forskningen.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Symbolen </span>
                            <span lang="EN-GB">
                                <img border="0" width="13" height="13" src="/image006.png" />
                            </span>
                            <span lang="SV">
                                 indikerar spirande förståelse. Studenten uppmuntras att tänka på
                                andra perspektiv som kan tänkas relatera till det studenten redan
                                känner till. Studenten kan till exempel uppmuntras att identifiera
                                vilka som berörs av frågan och sedan granska frågan från berörda
                                parters synvinklar, vilket kan hjälpa studenten att bredda insyn i
                                vad annat som kan ingå i temat/frågan.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Symbolen </span>
                            <span lang="EN-GB">
                                <img border="0" width="17" height="17" src="/image007.png" />
                            </span>
                            <span lang="SV">
                                 indikerar måttlig förståelse. Studenten gynnas av stöd i att
                                försöka se samband mellan olika etiska aspekter i forskningen och
                                tänka på exempel för att beskriva dessa samband.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Symbolen </span>
                            <span lang="EN-GB">
                                <img
                                    border="0"
                                    width="16"
                                    height="16"
                                    src="/image008.png"
                                    alt="A black and purple square with circlesDescription automatically generated"
                                />
                            </span>
                            <span lang="SV">
                                 indikerar förståelse för samband. På den här nivån kan studenten
                                med fördel rekommenderas att tillämpa sina kunskaper i olika
                                sammanhang och stöda/ instruera andra.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Symbolen </span>
                            <span lang="EN-GB">
                                <img border="0" width="19" height="19" src="/image009.png" />
                            </span>
                            <span lang="SV">
                                 indikerar djuplodande förståelse. Studenten uppfattar sin roll i
                                att främja god vetenskaplig praxis och i att upprätthålla en etiskt
                                hållbar handlingskultur.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="SV">Vilken forskning bygger applikationen på? </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Reflektionskompassen bygger på designprinciper baserade på
                                forsknings samt forskningsresultat. Applikationen utnyttjar{' '}
                                <i>Structure of Observed Learning Outcomes</i> (SOLO) -taxonomin i
                                beskrivningen av nivåerna för förståelse samt i den automatiserade
                                feedbacken. Genom visualiseringarna som applikationen producera och
                                genom att följa med svaren studenterna ger på kursuppgifterna vid
                                olika tidpunkter under kursens gång, kan läraren få en helhetsbild
                                av studenternas lärande samt information om hur undervisningen
                                fungerar.
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Genom följande länkar får du mera information om SOLO-taxonomin och
                                forskningen bakom applikationen:{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                SOLO-taxonomin:{' '}
                                <a href="https://www.johnbiggs.com.au/academic/solo-taxonomy/">
                                    https://www.johnbiggs.com.au/academic/solo-taxonomy/
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Artikel: John Biggs (1999) What the Student Does: teaching for
                                enhanced learning, Higher Education Research &amp; Development,
                                18:1, 57-75, DOI: 10.1080/0729436990180105
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Länk till artikeln:</span>
                            <span lang="FI">
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/0729436990180105">
                                    <span lang="SV">
                                        https://www.tandfonline.com/doi/pdf/10.1080/0729436990180105
                                    </span>
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="SV">
                                Forskning om självutvärdering och utvecklingen av
                                reflektionsapplikationen:{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Artikel: Anu Tammeleht &amp; Erika Löfström (2024) Learners’
                                self-assessment as a measure to evaluate the effectiveness of
                                research ethics and integrity training: can we rely on
                                self-reports?, <i>Ethics &amp; Behavior</i>, 34:8, 575-596, DOI:
                                10.1080/10508422.2023.2266073{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Länk till artikeln:</span>
                            <span lang="FI">
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/10508422.2023.2266073">
                                    <span lang="SV">
                                        https://www.tandfonline.com/doi/pdf/10.1080/10508422.2023.2266073
                                    </span>
                                </a>
                            </span>
                            <span lang="FI"> </span>
                        </p>

                        <p>
                            <span lang="SV">Utvecklingen av applikationen har fått stöd av: </span>
                        </p>

                        <p>
                            <img
                                width="106"
                                height="106"
                                src="/image010.jpg"
                                align="left"
                                hspace="9"
                            />
                            <span lang="FI">
                                <img border="0" width="114" height="43" src="/image011.png" />
                            </span>
                            <span lang="SV">  </span>
                            <span lang="EN-US">
                                <img border="0" width="44" height="40" src="/image012.png" />
                            </span>
                            <span lang="SV">   </span>
                            <span lang="FI">
                                <img
                                    border="0"
                                    width="61"
                                    height="46"
                                    src="/image013.jpg"
                                    alt="Reimagining Teachers and Teacher Education for our Futures | University of  Helsinki"
                                />
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                <a href="https://beyondbadapples.eu/">
                                    <span lang="SV">Beyond Bad Apples</span>
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Länk till applikationen: </span>
                            <span lang="FI">
                                <a href="https://reflection-compass.it.helsinki.fi">
                                    <span lang="SV">https://reflection-compass.it.helsinki.fi</span>
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="SV">&nbsp;</span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Lugupeetud </span>
                            </b>
                            <b>
                                <span lang="ET">õp</span>
                                <span lang="FI">pej</span>
                            </b>
                            <b>
                                <span lang="ET">õu</span>
                                <span lang="FI">d!</span>
                            </b>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">
                                    Tere tulemast kasutama Refleksioonikompassi teaduseetika
                                    õpetamisel!
                                </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Refleksioonikompassi rakendus on loodud toetama õpetajaid
                                teaduseetika õpetamisel ning toetama üliõpilasi
                                refleksiooniülesannete täitmisel teaduseetikas.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Paljudesse kursustesse on integreeritud teaduseetika elemendid –
                                näiteks teadusseminarid, metoodikakursused, akadeemiline
                                kirjutamine, retsenseerimine või publitseerimisega seotud seminarid.
                                Lisaks on refleksioon oluline eetilise tundlikkuse t
                            </span>
                            <span lang="ET">õ</span>
                            <span lang="FI">
                                stmisel. Teaduseetika ja refleksioonioskuste hindamine võib olla
                                keeruline, et teha kindlaks, mida ja kuidas üliõpilased õpivad.
                                Lisaks võivad üliõpilased tugineda AI-tööriistadele ülesannete
                                täitmisel, mis on sageli aktsepteeritav, kuid kui seda tehakse ilma
                                oma mõtlemise ja refleksioonita, on küsitav, mida üliõpilased
                                tegelikult on õppinud. Õpetajad võivad soovida vältida soovimatut AI
                                kasutamist ja silma peal hoida üliõpilaste õppeprotsessil ilma, et
                                neid liigselt koormataks.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Mis rakendus see on? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Tutvustame teaduspõhist tööriista ülikooliõpetajatele, kes
                                käsitlevad oma õpetamises teaduseetikat. Rakenduse on välja töötanud
                                teaduseetika eksperdid ja pedagoogid, et aidata õpetajaid …
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                selgitada, mida üliõpilased õpivad ja kas õpetamine on tõhus;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                jälgida, kuidas üliõpilased mõistavad kursusel käsitletud
                                eetikateemasid;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                rakendada formaalset hindamist ja anda üliõpilastele tagasisidet
                                kursuse ajal;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                julgustada üliõpilasi mõtlema oma õppimisele ja toetada üliõpilaste
                                refleksioonioskuste arendamist;{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                •<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            </span>
                            <span lang="FI">
                                toetada üliõpilasi oma arusaamise hindamise õppimisel.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Kuidas rakendus töötab? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Rakendus juhendab õpetajat looma kursust ülesannetega, mis nõuavad
                                üliõpilaste refleksiooni. Pärast kursuse ja ülesannete looist (on
                                hea mõte lisada ühte kursusesse mitu ülesannet, ülesande aeg näitab,
                                millal üliõpilased saavad neid teha), kopeerib õpetaja kutse, mida
                                jagatakse üliõpilastega. Õpetajad saavad ka oma kursusi ja
                                ülesandeid dubleerida ja kasutada neid tulevastel semestritel
                                (kursustel on unikaalsed ID-d, mis aitavad eristada erinevaid
                                aastaid ja gruppe).
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Üliõpilased logivad sisse oma tunnustega ja saavad minna ülesandele,
                                mille õpetaja on kutselingis märkinud. Üliõpilased teevad kaks
                                ülesannet – esmalt reflekteerivad nad ülesandes märgitud teemat,
                                kirjutades lõigu vastavalt ülesande 1 kirjeldusele. Seejärel loevad
                                nad viit väidet ja valivad selle, mis kõige paremini kirjeldab nende
                                arusaamist teemast, mida nad just reflekteerisid. Pärast vastuse
                                esitamist näevad nad automaatset tagasisidet, mis kirjeldab nende
                                valitud arusaamise taset. Rakendus julgustab üliõpilasi mõtlema, kas
                                nende esitatud refleksioon vastab tagasisides kirjeldatud arusaamise
                                tasemele. Üliõpilastel on võimalus oma vastusele tagasi minna ja
                                redigeerida kas oma kirjutatud lõiku või oma arusaamise taset.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Rakendus analüüsib märgitud arusaamise tasemeid ja esitab tulemused
                                õpetajale sektordiagrammina (vt joonis 1).
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img border="0" width="363" height="269" src="/image003.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Joonis 1. Sektordiagramm ülesande tulemustega.</span>
                        </p>

                        <p>
                            <span lang="FI">
                                Lisaks saavad nii õpetaja kui üliõpilased näha õppimise edenemist
                                lineaardiagrammis (vt joonis 2).
                            </span>
                        </p>

                        <p align="center">
                            <span lang="FI">
                                <img border="0" width="352" height="163" src="/image004.png" />
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Joonis 2. Lineaardiagramm üliõpilaste edusammudega.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Õpetaja saab lugeda ka üliõpilaste refleksioone ja anda isiklikumat
                                tagasisidet (kirjaliku tekstina või märkides õpetaja hinnangu
                                arusaamise tasemele, mida üliõpilase kirjutatud lõik näitab).
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Rakenduse kasutamine toetab peamiselt üliõpilaste reflektiivset
                                õppimist ja kujundavat hindamist kursuse ajal, kuid õppeprotsessi
                                kuvamine diagrammis toimib hästi järgneva 'refleksioonipäeviku'
                                alusena. Diagrammi saab üliõpilane v
                            </span>
                            <span lang="ET">õtta aluseks</span>
                            <span lang="FI">
                                , kui ta oma õppeprotsessi refleksioonipäevikus kokku v
                            </span>
                            <span lang="ET">õ</span>
                            <span lang="FI">
                                tavad. Refleksioonipäevikut saab kasutada summatiivse hindamise
                                eesmärgil, st hindamistegevusena, mis aitab kaasa kursuse lõplikule
                                hindamisele, mis vïb olla hindeline.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Rakenduse korduv kasutamine annab õpetajatele ülevaate, kuidas
                                üliõpilased edenevad, millised teemad tunduvad olevat keerulisemad
                                ja millised on omandatud. Üliõpilased saavad ka oma edusamme
                                diagrammis näha ning rakenduse ja õpetaja antud tagasisidet lugedes
                                saavad nad arendada oma refleksioonioskusi.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="FI">&nbsp;</span>
                        </p>

                        <p>
                            <span lang="FI">Arusaamise tasemed põhinevad SOLO taksonoomial: </span>
                        </p>

                        <p>
                            <span lang="FI">Sümbol </span>
                            <span lang="FI">
                                <img border="0" width="12" height="12" src="/image005.png" />
                            </span>
                            <span lang="FI">
                                 näitab vajadust abi mõistmiseks. Oma arusaamise taseme
                                parandamiseks võib õppija parandada oma eetilist pädevust,
                                konsulteerides asjakohaste käitumisjuhenditega ja arutades kogenud
                                teadlastega, kuidas nad mõtlevad õigete valikute tegemisele
                                teadustöös.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Sümbol </span>
                            <span lang="EN-GB">
                                <img border="0" width="13" height="13" src="/image006.png" />
                            </span>
                            <span lang="FI">
                                 näitab arenevat arusaamist. Õppijat julgustatakse mõtlema seotud
                                küsimustele või uutele küsimustele, mis võivad tuleneda algsest
                                probleemist, on hea mõte kaardistada, kes on olukorrast huvitatud ja
                                milliseid erinevaid küsimusi nad olukorra kohta esitaksid.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Sümbol </span>
                            <span lang="EN-GB">
                                <img border="0" width="17" height="17" src="/image007.png" />
                            </span>
                            <span lang="FI">
                                 näitab mõõdukat arusaamist. Õppija peaks püüdma näha seoseid
                                erinevate eetiliste aspektide vahel teadustöös ja mõtlema näidetele
                                nende seoste kirjeldamiseks.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">Sümbol </span>
                            <span lang="EN-GB">
                                <img
                                    border="0"
                                    width="16"
                                    height="16"
                                    src="/image008.png"
                                    alt="A black and purple square with circlesDescription automatically generated"
                                />
                            </span>
                            <span lang="FI">
                                 näitab sidusat arusaamist. Õppijale soovitatakse rakendada oma
                                teadmisi erinevates kontekstides ja aidata teisi.{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Sümbol <img border="0" width="19" height="19" src="/image016.png" />
                                 näitab sügavat arusaamist. Õppija võib olla mõelnud endale kui
                                eeskujule hea teadusliku praktika edendamisel laiemalt teadlaskonnas
                                ja aitamisel luua eetiliselt jätkusuutlik teaduskultuur.
                            </span>
                        </p>

                        <p>
                            <b>
                                <span lang="FI">Millistel uuringutel rakendus tugineb? </span>
                            </b>
                        </p>

                        <p>
                            <span lang="FI">
                                Refleksioonikompass on üles ehitatud uurimis- ja disainip
                            </span>
                            <span lang="ET">õ</span>
                            <span lang="FI">him</span>
                            <span lang="ET">õ</span>
                            <span lang="FI">
                                tetele ning kasutab <i>Structure of Observed Learning Outcomes</i>{' '}
                                (SOLO) taksonoomiat, et pakkuda kindlat alust tulemustele.
                                Kombineerides rakenduse tulemusi, jälgides üliõpilaste tööd klassis
                                ja erinevatel ajahetkedel kursuse jooksul esitatud töid, saab
                                õpetaja tervikliku pildi üliõpilaste arengust ja koolituse
                                tõhususest.
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Kui olete huvitatud SOLO taksonoomiast või uurimistööst, millele
                                rakendus tugineb, külastage järgmisi linke:{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                SOLO taksonoomia:{' '}
                                <a href="https://www.johnbiggs.com.au/academic/solo-taxonomy/">
                                    https://www.johnbiggs.com.au/academic/solo-taxonomy/
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Artikkel: John Biggs (1999) What the Student Does: teaching for
                                enhanced learning, Higher Education Research &amp; Development,
                                18:1, 57-75, DOI: 10.1080/0729436990180105
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Link artiklile: </span>
                            <span lang="FI">
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/0729436990180105">
                                    <span lang="SV">
                                        https://www.tandfonline.com/doi/pdf/10.1080/0729436990180105
                                    </span>
                                </a>
                            </span>
                            <span lang="FI"> </span>
                        </p>

                        <p>
                            <span lang="FI">
                                Uurimistöö refleksioonirakenduse arendamise kohta:{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">
                                Artikkel: Anu Tammeleht &amp; Erika Löfström (2024) Learners’
                                self-assessment as a measure to evaluate the effectiveness of
                                research ethics and integrity training: can we rely on
                                self-reports?, <i>Ethics &amp; Behavior</i>, 34:8, 575-596, DOI:
                                10.1080/10508422.2023.2266073{' '}
                            </span>
                        </p>

                        <p>
                            <span lang="SV">Link artiklile: </span>
                            <span lang="FI">
                                <a href="https://www.tandfonline.com/doi/pdf/10.1080/10508422.2023.2266073">
                                    <span lang="SV">
                                        https://www.tandfonline.com/doi/pdf/10.1080/10508422.2023.2266073
                                    </span>
                                </a>
                            </span>
                            <span lang="SV"> </span>
                        </p>

                        <p>
                            <span lang="EN-US">Rakenduse arendamist toetas: </span>
                        </p>

                        <p>
                            <img
                                width="106"
                                height="106"
                                src="/image010.jpg"
                                align="left"
                                hspace="9"
                            />
                            <span lang="FI">
                                <img border="0" width="114" height="43" src="/image011.png" />
                            </span>
                            <span lang="EN-US">
                                  <img border="0" width="44" height="40" src="/image012.png" />
                                   
                            </span>
                            <span lang="FI">
                                <img
                                    border="0"
                                    width="61"
                                    height="46"
                                    src="/image013.jpg"
                                    alt="Reimagining Teachers and Teacher Education for our Futures | University of  Helsinki"
                                />
                            </span>
                        </p>

                        <p>
                            <span lang="FI">
                                <a href="https://beyondbadapples.eu/">
                                    <span lang="EN-GB">Beyond Bad Apples</span>
                                </a>
                            </span>
                        </p>

                        <p>
                            <span lang="EN-US">Link rakendusele: </span>
                            <span lang="FI">
                                <a href="https://reflection-compass.it.helsinki.fi">
                                    <span lang="EN-US">
                                        https://reflection-compass.it.helsinki.fi
                                    </span>
                                </a>
                            </span>
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

DownloadLink.propTypes = {
    fileUrl: PropTypes.string.isRequired,
    fileName: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
};

export default Instructions;
