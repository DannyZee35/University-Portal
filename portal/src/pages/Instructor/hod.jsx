import { useState, useEffect } from "react";
import { Container } from "@mui/material";


const drawerWidth=300;
export const Hod = () => {
 
  

  return (
    <>
     <Container sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
           p:3
        }}>
      <h1>Hod Page</h1>
      </Container>
    </>
  );
};
