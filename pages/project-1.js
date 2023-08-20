import React from 'react'
import Head from 'next/head'

import HeaderContainer from '../components/header-container'
import FooterContainer from '../components/footer-container'

const Project1 = (props) => {
  return (
    <>
      <div className="project1-container">
        <Head>
          <title>Project-1 - lena-cms</title>
          <meta property="og:title" content="Project-1 - lena-cms" />
        </Head>
        <HeaderContainer rootClassName="header-container-root-class-name1"></HeaderContainer>
        <div className="project1-hero">
          <h1 className="project1-text">Ome</h1>
          <span className="project1-text01">
            <span>Exhibition and Public Program</span>
            <br></br>
          </span>
          <span className="project1-text04">
            <span>Kunstraum Kreuzberg / Bethanien, Berlin, Germany</span>
            <br></br>
          </span>
          <span className="project1-text07">
            <span>2023</span>
            <br></br>
          </span>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1471086569966-db3eebc25a59?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxtaW5pbWFsaXNtJTIwcGxhbnR8ZW58MHx8fHwxNjI2MTgyODMw&amp;ixlib=rb-1.2.1&amp;w=1200"
            className="project1-image"
          />
          <span className="project1-text10">
            <span>
              People from more than 185 ethnic groups live in russia.** Despite
              this fact, the country is still largely perceived as white,
              especially in the West. Even though ethnic minorities were and are
              oppressed and have been the targets of ethnic cleansing and even
              genocide, colonialism is often perceived as a Western import, not
              just by the regime, but also by large parts of the russian
              opposition. Rather than dealing with the country’s colonial
              history, a narrative of russia as an anti-colonial and
              anti-imperialist power is being upheld and has even gained
              momentum since russia’s invasion of Ukraine.
            </span>
            <br></br>
            <br></br>
            <span>
              The exhibition Өмә ([ome]; Bashqort for “collective self-help
              practices”) demonstrates that the current war and the annexation
              of Crimea in 2014 are just the latest events in a historical
              continuity of russian imperialism. While Ukrainian positions have
              often – and rightfully – been foregrounded in the past year, Өмә
              seeks to make room for anticolonial resistance within russia.
            </span>
            <br></br>
            <br></br>
            <span>
              To this end, the exhibition shows approximately thirty artistic
              positions from members of indigenous communities and persons with
              migrant identities and experience of living in russia. They reveal
              russia as a colonial power that could only constitute itself
              within its current borders by deportation, forced assimilation,
              Christianization, russification and extractivism.
            </span>
            <br></br>
            <br></br>
            <span>
              Since the image of a white russia is being upheld not only by the
              regime but by the predominantly white opposition as well, the
              decolonial movements that emerged after the dissolution of the
              USSR never gained traction. By telling theirstories and developing
              methods of autoethnography and working with memory through
              archives, Өмә therefore seeks to represent the complexity of
              russia as a colonial realm. In doing so, the exhibition situates
              itself within the historical and political context of an ongoing
              russian colonial expansion and violence in different territories.
            </span>
          </span>
          <div className="project1-hero1">
            <div className="project1-container1">
              <h1 className="project1-text21">Ome</h1>
              <span className="project1-text22">
                Exhibition and Public Program
              </span>
              <span className="project1-text23">
                Kunstraum Kreuzberg/Bethanien, Berlin, Germany
              </span>
              <span className="project1-text24">2023</span>
              <span className="project1-text25">
                <span>
                  People from more than 185 ethnic groups live in russia.**
                  Despite this fact, the country is still largely perceived as
                  white, especially in the West. Even though ethnic minorities
                  were and are oppressed and have been the targets of ethnic
                  cleansing and even genocide, colonialism is often perceived as
                  a Western import, not just by the regime, but also by large
                  parts of the russian opposition. Rather than dealing with the
                  country’s colonial history, a narrative of russia as an
                  anti-colonial and anti-imperialist power is being upheld and
                  has even gained momentum since russia’s invasion of Ukraine.
                </span>
                <br></br>
                <br></br>
                <span>
                  The exhibition Өмә ([ome]; Bashqort for “collective self-help
                  practices”) demonstrates that the current war and the
                  annexation of Crimea in 2014 are just the latest events in a
                  historical continuity of russian imperialism. While Ukrainian
                  positions have often – and rightfully – been foregrounded in
                  the past year, Өмә seeks to make room for anticolonial
                  resistance within russia.
                </span>
                <br></br>
                <br></br>
                <span>
                  To this end, the exhibition shows approximately thirty
                  artistic positions from members of indigenous communities and
                  persons with migrant identities and experience of living in
                  russia. They reveal russia as a colonial power that could only
                  constitute itself within its current borders by deportation,
                  forced assimilation, Christianization, russification and
                  extractivism.
                </span>
                <br></br>
                <br></br>
                <span>
                  Since the image of a white russia is being upheld not only by
                  the regime but by the predominantly white opposition as well,
                  the decolonial movements that emerged after the dissolution of
                  the USSR never gained traction. By telling theirstories and
                  developing methods of autoethnography and working with memory
                  through archives, Өмә therefore seeks to represent the
                  complexity of russia as a colonial realm. In doing so, the
                  exhibition situates itself within the historical and political
                  context of an ongoing russian colonial expansion and violence
                  in different territories.
                </span>
              </span>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxtaW5pbWFsaXNtJTIwZ3JlZW58ZW58MHx8fHwxNjI1ODQxMDcw&amp;ixlib=rb-1.2.1&amp;h=1200"
              className="project1-image1"
            />
          </div>
        </div>
        <FooterContainer rootClassName="footer-container-root-class-name1"></FooterContainer>
      </div>
      <style jsx>
        {`
          .project1-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .project1-hero {
            width: 100%;
            display: flex;
            padding: 48px;
            align-self: flex-start;
            min-height: 80vh;
            align-items: center;
            padding-top: 48px;
            padding-right: 53px;
            flex-direction: column;
            justify-content: center;
          }
          .project1-text {
            align-self: flex-start;
          }
          .project1-text01 {
            align-self: flex-start;
          }
          .project1-text04 {
            align-self: flex-start;
            font-style: italic;
          }
          .project1-text07 {
            align-self: flex-start;
            font-weight: bold;
          }
          .project1-image {
            width: 45rem;
            align-self: flex-start;
            margin-top: 32px;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .project1-text10 {
            align-self: flex-start;
            margin-top: 0px;
            margin-right: 0px;
            margin-bottom: 0px;
            padding-right: 150px;
          }
          .project1-hero1 {
            width: 100%;
            display: flex;
            padding: 48px;
            max-width: 1400px;
            min-height: 80vh;
            align-items: center;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            flex-direction: row;
            justify-content: space-between;
          }
          .project1-container1 {
            width: 50%;
            display: flex;
            align-self: flex-start;
            border-color: var(--dl-color-gray-black);
            border-width: 0px;
            margin-right: 0px;
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
          }
          .project1-text21 {
            font-size: 3rem;
            max-width: 450px;
          }
          .project1-text22 {
            font-style: italic;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          .project1-text23 {
            margin-top: 0px;
            margin-bottom: 0px;
          }
          .project1-text24 {
            margin-top: var(--dl-space-space-unit);
            font-weight: bold;
            margin-bottom: var(--dl-space-space-unit);
          }
          .project1-text25 {
            align-self: flex-start;
            margin-top: 0px;
            margin-bottom: 0px;
          }
          .project1-image1 {
            width: 400px;
            align-self: flex-start;
            object-fit: cover;
          }
          @media (max-width: 991px) {
            .project1-hero {
              flex-direction: column;
            }
            .project1-image {
              width: 80%;
            }
            .project1-text10 {
              text-align: left;
              padding-left: 0px;
              padding-right: 0px;
            }
            .project1-hero1 {
              flex-direction: column;
            }
            .project1-container1 {
              align-items: center;
              margin-right: 0px;
              margin-bottom: 32px;
              padding-right: 0px;
            }
            .project1-text21 {
              text-align: center;
            }
            .project1-text22 {
              text-align: center;
              padding-left: 48px;
              padding-right: 48px;
            }
            .project1-text23 {
              text-align: center;
              padding-left: 48px;
              padding-right: 48px;
            }
            .project1-text24 {
              text-align: center;
              padding-left: 48px;
              padding-right: 48px;
            }
            .project1-text25 {
              text-align: center;
              padding-left: 48px;
              padding-right: 48px;
            }
          }
          @media (max-width: 767px) {
            .project1-hero {
              padding-left: 32px;
              padding-right: 32px;
            }
            .project1-text10 {
              text-align: left;
              border-color: var(--dl-color-gray-black);
              border-width: 0px;
              padding-left: var(--dl-space-space-unit);
              border-radius: var(--dl-radius-radius-radius4);
              padding-right: var(--dl-space-space-unit);
            }
            .project1-hero1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .project1-text22 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .project1-text23 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .project1-text24 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .project1-text25 {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .project1-image1 {
              width: 80%;
            }
          }
          @media (max-width: 479px) {
            .project1-hero {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .project1-text10 {
              align-self: flex-start;
              text-align: left;
              border-color: var(--dl-color-gray-black);
              border-width: 0px;
              padding-left: 0px;
              border-radius: var(--dl-radius-radius-radius2);
              padding-right: 0px;
            }
            .project1-hero1 {
              padding-top: 32px;
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: 32px;
            }
            .project1-container1 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .project1-text25 {
              border-color: var(--dl-color-gray-black);
              border-width: 0px;
              padding-left: 0px;
              border-radius: var(--dl-radius-radius-radius2);
              padding-right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Project1
