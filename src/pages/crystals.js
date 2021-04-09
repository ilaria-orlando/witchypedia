import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"

const AllCrystals = () => {

    return (
        <Layout>
            <div className="divStyle">
                <div className="crystalPage">

                </div>
                <div className="tags">
                    <Link to={"/protection/"}><div className="tagLink">Protection </div></Link>
                    <Link to={"/money/"}><div className="tagLink">Money </div></Link>
                    <Link to={"/clarity/"}><div className="tagLink">Clarity </div></Link>
                    <Link to={"/love/"}><div className="tagLink">Love </div></Link>
                </div>

            </div>
        </Layout>
    )


}

export default AllCrystals