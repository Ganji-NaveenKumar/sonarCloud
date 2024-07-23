import React from "react";
import Typography from "../../atoms/Typography";
import data from "../../../utils/constants";
const DataComp:React.FC=()=>{
    return(
        <>
        <Typography variant="h3">Agriculture</Typography>
        <Typography variant="body1">{data.Argiculture}</Typography>
        <Typography variant="h3">Business</Typography>
        <Typography variant="body1">{data.Business}</Typography>
        <Typography variant="h3">It</Typography>
        <Typography variant="body1">{data.It}</Typography>
        </>
    );
}
export default DataComp;