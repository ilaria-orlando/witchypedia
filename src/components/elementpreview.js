import React from 'react'
import { Link } from 'gatsby'

const ElementPreview = (crystal) => {

    return (
        <Link to={`/crystals/${crystal.slug}`}>{crystal.name}</Link>
    )

}

export default ElementPreview