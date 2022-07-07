import React from 'react'
import RingLoader from "react-spinners/RingLoader";

const override = {
    display: "block",
    position:"absolute",
    top: "calc(50% - 50px)",
    left: "calc(50% - 50px)",
    margin: "0 auto",
    borderColor: "black",
  };
  
const Loading = ({loading}) => {
  return (
    <RingLoader color="#8b008b" loading={loading} cssOverride={override} size={150} />
    )
}

export default Loading