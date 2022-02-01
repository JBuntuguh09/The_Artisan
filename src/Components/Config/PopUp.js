import { Dialog, DialogTitle, DialogContent } from '@material-ui/core'
import React from 'react'


export default function PopUp(props){
    const {title, children, openPopUp, setPopUp } = props

    return(
        <Dialog open={openPopUp}  >
            
            <DialogContent style={{margin:0, display: 'flex', backgroundColor: 'rgba(52, 52, 52, 0.8)',
						justifyContent: 'center' }}>
                <div>{children}</div>
            </DialogContent>
        </Dialog>
        
    )
}