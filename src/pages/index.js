import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link, useStaticQuery} from "gatsby"


import BackgroundImage from "gatsby-background-image"
import Sparkle from 'react-sparkle'
import Typewriter from 'typewriter-effect';
import Background from "../components/background";
import Gem from "../images/svg/gem.svg";




const IndexPage = () => {
  const data = useStaticQuery(
      graphql`
      query {
        placeholderImage: file(relativePath: { eq: "potion_bottle_v2.png" }) {
          childImageSharp {
             fluid(maxWidth: 1826, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        placeholderImageMobile: file(relativePath: { eq: "nebula_v4.jpg" }) {
          childImageSharp {
             fluid(maxWidth: 1826, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

    const imageData = data.placeholderImage.childImageSharp.fluid
    const imageDataMobile = data.placeholderImageMobile.childImageSharp.fluid

  return(
      <Background>
              <BackgroundImage
                  className="landing"
                  Tag="section"
                  fluid={imageData}
              >
                  <BackgroundImage
                      className= "mobile"
                      Tag="section"
                      fluid={imageDataMobile}
                      />
                  <Layout>
                    <SEO title="Home" />
                    <div style={{ position: 'relative', height:'80vh'}}>
                        <Sparkle
                            minSize={3}
                            maxSize={5}
                            count={60}
                            fadeOutSpeed={1}
                            flickerSpeed={'slowest'}
                        />
                        <div className="landingDiv">
                            <div>
                                <div className="landingTitle">
                                    <Typewriter
                                        onInit={(typewriter) => {
                                            typewriter.typeString('Create magic')
                                                .pauseFor(2500)
                                                .deleteChars(5)
                                                .typeString('your magic')
                                                .start();
                                        }}

                                    />
                                </div>
                                <h2 className="landingSubt">Welcome to Witchypedia, your source for everything spell related</h2>
                            </div>
                            <div className="textBox">
                                <p className="landingText">
                                    Here you can find all the useful information about crystals and herbs (coming soon!), handily organised by category.
                                    You can even create you own online grimoire so you never lose your notes again.
                                </p>
                            </div>
                                <div className="buttonFlex">
                                    <Link to={"/"}><div className="tagLink"><Gem /><p>Check it out</p> </div></Link>
                                </div>
                        </div>

                    </div>
                  </Layout>
              </BackgroundImage>
      </Background>
      )

}


export default IndexPage


