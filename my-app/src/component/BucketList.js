import React from "react"
import Bucket from "./Bucket"

const BucketList = props => {
    return(
        <div className="bucket-list">
            <h1>This is my bucket list component</h1>
            <Bucket />
        </div>
    )
}
export default BucketList;