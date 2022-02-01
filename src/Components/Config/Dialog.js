import { Dialog, DialogTitle, DialogContent, Typography, Button } from '@material-ui/core'
import React from 'react'


export default function Dialogs(props){
    var {title, children, openPopUp, setOpenPopUp } = props

    return(
        <Dialog open={openPopUp} maxWidth='md' >
            <DialogTitle dividers>
                <div style={{textAlign:'center', display:'flex', justifyContent:'center'}}>
                    <Typography component='h2' style={{flex :1, alignSelf:'center'}}>{title}</Typography>
                    <Button   color="secondary" onClick={()=>{setOpenPopUp(false)}} >X</Button>
                </div></DialogTitle>
            <DialogContent dividers  >
                <div>{children}</div>
            </DialogContent>
        </Dialog>
        
    )
}