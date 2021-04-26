import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, Link, useStaticQuery} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Sparkle from 'react-sparkle'
import Typewriter from 'typewriter-effect';
import Background from "../components/background";
import Gem from "../images/svg/gem.svg";




const IndexPage = () => {

  return(
      <Background>
                  <Layout>
                    <SEO title="Home" />
                        <div className="landingDiv">
                                <div className="welcome">
                                    <div className="mainLanding">
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
                                        <Link to={"/crystals"}><button className="tagLink indexButton"><Gem /><p>Check it out</p> </button></Link>
                                    </div>
                                    <div className="landingImage" style={{ position: 'relative'}}>
                                        <StaticImage src="../images/nebula_bottle.png" alt="magic bottle" placeholder="blurred" className="bottleImage"/>
                                        <Sparkle
                                            minSize={3}
                                            maxSize={6}
                                            count={90}
                                            fadeOutSpeed={1}
                                            flickerSpeed={'slowest'}
                                        />
                                    </div>
                                </div>
                            <div className="textBox">
                                <p className="landingText">
                                    Here you can find all the useful information about crystals and herbs (coming soon!), handily organised by category.
                                    You can even create you own online grimoire so you never lose your notes again.
                                </p>
                            </div>
                        </div>
                  </Layout>
      </Background>
      )

}


export default IndexPage


