"use client";
import {Button} from "@mui/icons-material";
import {deepOrange} from  "@mui/material/colors";

const DemoPage = ()=> {
    return (
        <> 
        <Button 
        variant ="contained"
        disableRipple
        DisableElevation
        sx={{
            bgcolor: deepOrange[800],
            textTransform:"none",
            fontSize:"lrem",
        }}
        >
        click me 
        </Button>
        </>
    );
};
export default DemoPage;