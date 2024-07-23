import React from "react";
import { Typography as MuiTypography } from "@mui/material";
interface TypogrpahyProps{
    children:React.ReactNode;
    variant:"h3"|"body1"
}
const Typography:React.FC<TypogrpahyProps>=({children,variant})=>{
    return(
        <MuiTypography variant={variant}>{children}</MuiTypography>
    );
}
export default Typography;
