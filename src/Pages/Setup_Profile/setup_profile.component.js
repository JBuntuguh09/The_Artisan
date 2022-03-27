import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import FormInput from "../../Components/Resources/form-input/form-input.component";
import { FormLabel, TextareaAutosize } from "@material-ui/core";
import ReactDropdown from "react-dropdown";
import nobody from "../../Components/Images/nobody.jpg";
import { AddAPhoto, Close } from "@material-ui/icons";

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { get, getDatabase, ref, child, set, push, update } from 'firebase/database'
import {getDownloadURL, getStorage, ref as refSor, uploadBytes } from 'firebase/storage'
import utils from "../../Components/Config/utils";
import PopUp from "../../Components/Config/PopUp";
import { useNavigate } from "react-router-dom";




export default function Setup_Profile(props){
    const [fname, setFname] = useState(localStorage.getItem("fname"))
    const [email, setEmail] = useState(localStorage.getItem("email"))
    const [phone, setPhone] = useState("")
    const [phone2, setPhone2] = useState("")
    const [pic, setPic] = useState("")
    const [pic2, setPic2] = useState("")
    const [pic3, setPic3] = useState("")
    const [pic4, setPic4] = useState("")
    const [pic5, setPic5] = useState("")
    const [imagez, setImage] = useState(null)
    const [imagez2, setImage2] = useState(null)
    const [imagez3, setImage3] = useState(null)
    const [imagez4, setImage4] = useState(null)
    const [imagez5, setImage5] = useState(null)
    const [showPic2, setShowPic2] = useState(false)
    const [showPic3, setShowPic3] = useState(false)
    const [showPic4, setShowPic4] = useState(false)
    const [ShowPic5, setShowPic5] = useState(false)
    const [camCheck, setCamCheck] = useState(1)
    const [popupState, setPopupState] = useState(false)

    const [job, setJob] = useState("")
    const [summary, setSummary] = useState("")
    const [price, setPrice] = useState("")

    let navigate = useNavigate();
    function handleClick(val) {
      navigate(val);
    } 

    function getJobs(){
        return[
            "Carpenter", "Painter", "Mason", "Caterer", "Cook", "Labourer", "Driver", "Tailor", "Seamstress"
        ]
    }

    const changeHandler=(e, typez)=>{
		let selected = e.target.files[0];
		const types = ['image/png', 'image/jpeg']
     
		if(selected && types.includes(selected.type)){
			if(typez==="1"){
                setPic(selected)
                setImage(URL.createObjectURL(selected))
            }else if(typez==="2"){
                setPic2(selected)
                setImage2(URL.createObjectURL(selected))
            }else if(typez==="3"){
                setPic3(selected)
                setImage3(URL.createObjectURL(selected))
            }else if(typez==="4"){
                setPic4(selected)
                setImage4(URL.createObjectURL(selected))
            }else if(typez==="5"){
                setPic5(selected)
                setImage5(URL.createObjectURL(selected))
            }
            
		   
		}else{
			setPic(null)

		   // setErr("Please Select an image file(png or jpeg format)")
		}
	}

    const picVis=(type)=>{
        if(type==="+"){
            setCamCheck(camCheck+1)
            if(camCheck===1){
                setShowPic2(true)
            }else if(camCheck===2){
                setShowPic3(true)
            }else if(camCheck===3){
                setShowPic4(true)
            }else if(camCheck===4){
                setShowPic5(true)
            }

        }else if(type==="-"){
            setCamCheck(camCheck-1)
            if(camCheck===2){
                setPic2("")
                setImage2(null)
                setShowPic2(false)
            }else if(camCheck===3){
                setPic3("")
                setImage3(null)
                setShowPic3(false)
            }else if(camCheck===4){
                setPic4("")
                setImage4(null)
                setShowPic4(false)
            }else if(camCheck===5){
                setPic5("")
                setImage5(null)
                setShowPic5(false)

            }
            
        }
    }

    const checkUpLoad=()=>{
        if(phone===""){
            alert("Enter phone number")
        }else if (job===""){
            alert("Select a job")
        }else if (summary===""){
            alert ("Enter your summary")
        }else{
            setPopupState(true)
            startUpload()
        }
    }

    async function startUpload(){
        const auth=getAuth() 
       
                    const dbRef = ref(getDatabase());
                    
                   
                      
                        var userId = localStorage.getItem("userId")
                        
                        const storage = getStorage();
                        //const storageRef = refSor(storage, 'News_Pic/Image'+ num);

                        // 'file' comes from the Blob or File API
                    
                     const storageRef1 = refSor(storage, 'User_Pic/'+userId+'/Image1');
                     const storageRef2 = refSor(storage, 'User_Pic/'+userId+'/Image2');
                     const storageRef3 = refSor(storage, 'User_Pic/'+userId+'/Image3');
                     const storageRef4 = refSor(storage, 'User_Pic/'+userId+'/Image4');
                     const storageRef5 = refSor(storage, 'User_Pic/'+userId+'/Image5');
                     
                    var pathUrl1 = ""
                    var pathUrl2 = ""
                    var pathUrl3 = ""
                    var pathUrl4 = ""
                    var pathUrl5 = ""
                    
                        uploadBytes(storageRef1, pic).then((snapshot) => {
                            getDownloadURL(storageRef1).then((url)=>{
                                pathUrl1 = url
                                uploadBytes(storageRef2, pic2).then((snapshot) => {
                                    getDownloadURL(storageRef2).then((url)=>{
                                        pathUrl2 = url
                                        uploadBytes(storageRef3, pic3).then((snapshot) => {
                                            getDownloadURL(storageRef3).then((url)=>{
                                                pathUrl3 = url
                                                uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                    getDownloadURL(storageRef4).then((url)=>{
                                                        pathUrl4 = url
                                                        uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                            getDownloadURL(storageRef5).then((url)=>{
                                                                pathUrl5 = url
                                                                
                                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                
                                                            }).catch((error)=>{ console.log(error)
                                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                            })
                                
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                            })
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                                                    })
                                                
                                               // sendData(pathUrl, pathUrl1, pathUrl2, num2)
                
                                            }).catch((error)=>{ console.log(error)
                                                uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                    getDownloadURL(storageRef4).then((url)=>{
                                                        pathUrl4 = url
                                                        uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                            getDownloadURL(storageRef5).then((url)=>{
                                                                pathUrl5 = url
                                                                
                                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                
                                                            }).catch((error)=>{ console.log(error)
                                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                            })
                                
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                            })
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                                                    })
                                            })
                
                                        }).catch((error)=>{ console.log(error)
                                         uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                    getDownloadURL(storageRef4).then((url)=>{
                                                        pathUrl4 = url
                                                        uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                            getDownloadURL(storageRef5).then((url)=>{
                                                                pathUrl5 = url
                                                                
                                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                
                                                            }).catch((error)=>{ console.log(error)
                                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                            })
                                
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                            })
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                                                    })
                                            })
        
                                    }).catch((error)=>{ console.log(error)
                                        
                                    })
        
                                }).catch((error)=>{ console.log(error)
                                    uploadBytes(storageRef3, pic3).then((snapshot) => {
                                        getDownloadURL(storageRef3).then((url)=>{
                                            pathUrl3 = url
                                            uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                getDownloadURL(storageRef4).then((url)=>{
                                                    pathUrl4 = url
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                                                })
                                            
                                           // sendData(pathUrl, pathUrl1, pathUrl2, num2)
            
                                        }).catch((error)=>{ console.log(error)
                                            uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                getDownloadURL(storageRef4).then((url)=>{
                                                    pathUrl4 = url
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                                                })
                                        })
            
                                    }).catch((error)=>{ console.log(error)
                                     uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                getDownloadURL(storageRef4).then((url)=>{
                                                    pathUrl4 = url
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                                                })
                                        })
                                    })

                            }).catch((error)=>{ console.log(error)
                                
                            })

                        }).catch((error)=>{ console.log(error)
                            uploadBytes(storageRef2, pic2).then((snapshot) => {
                                getDownloadURL(storageRef2).then((url)=>{
                                    pathUrl2 = url
                                    uploadBytes(storageRef3, pic3).then((snapshot) => {
                                        getDownloadURL(storageRef3).then((url)=>{
                                            pathUrl3 = url
                                            uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                getDownloadURL(storageRef4).then((url)=>{
                                                    pathUrl4 = url
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                                                })
                                            
                                           // sendData(pathUrl, pathUrl1, pathUrl2, num2)
            
                                        }).catch((error)=>{ console.log(error)
                                            uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                getDownloadURL(storageRef4).then((url)=>{
                                                    pathUrl4 = url
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                                                })
                                        })
            
                                    }).catch((error)=>{ console.log(error)
                                     uploadBytes(storageRef4, pic4).then((snapshot) => {
                                                getDownloadURL(storageRef4).then((url)=>{
                                                    pathUrl4 = url
                                                    uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                        getDownloadURL(storageRef5).then((url)=>{
                                                            pathUrl5 = url
                                                            
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                            
                                                        }).catch((error)=>{ console.log(error)
                                                            sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                            
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                        })
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                                                })
                                        })
    
                                }).catch((error)=>{ console.log(error)
                                    
                                })
    
                            }).catch((error)=>{ console.log(error)
                                uploadBytes(storageRef3, pic3).then((snapshot) => {
                                    getDownloadURL(storageRef3).then((url)=>{
                                        pathUrl3 = url
                                        uploadBytes(storageRef4, pic4).then((snapshot) => {
                                            getDownloadURL(storageRef4).then((url)=>{
                                                pathUrl4 = url
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                
                                            }).catch((error)=>{ console.log(error)
                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                            })
                
                                        }).catch((error)=>{ console.log(error)
                                            uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                getDownloadURL(storageRef5).then((url)=>{
                                                    pathUrl5 = url
                                                    
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                                            })
                                        
                                       // sendData(pathUrl, pathUrl1, pathUrl2, num2)
        
                                    }).catch((error)=>{ console.log(error)
                                        uploadBytes(storageRef4, pic4).then((snapshot) => {
                                            getDownloadURL(storageRef4).then((url)=>{
                                                pathUrl4 = url
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                
                                            }).catch((error)=>{ console.log(error)
                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                            })
                
                                        }).catch((error)=>{ console.log(error)
                                            uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                getDownloadURL(storageRef5).then((url)=>{
                                                    pathUrl5 = url
                                                    
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                                            })
                                    })
        
                                }).catch((error)=>{ console.log(error)
                                 uploadBytes(storageRef4, pic4).then((snapshot) => {
                                            getDownloadURL(storageRef4).then((url)=>{
                                                pathUrl4 = url
                                                uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                    getDownloadURL(storageRef5).then((url)=>{
                                                        pathUrl5 = url
                                                        
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                        
                                                    }).catch((error)=>{ console.log(error)
                                                        sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                        
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                    })
                
                                            }).catch((error)=>{ console.log(error)
                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                            })
                
                                        }).catch((error)=>{ console.log(error)
                                            uploadBytes(storageRef5, pic5).then((snapshot) => {
                                                getDownloadURL(storageRef5).then((url)=>{
                                                    pathUrl5 = url
                                                    
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                    
                                                }).catch((error)=>{ console.log(error)
                                                    sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                    
                                            }).catch((error)=>{ console.log(error)
                                                sendData(pathUrl1, pathUrl2, pathUrl3, pathUrl4, pathUrl5)
                                                })
                                            })
                                    })
                                })
                        });


                   
                
    }

    const sendData=(u1, u2, u3, u4, u5)=>{
        const db = getDatabase()
            //     set(ref(db, 'Users/' + localStorage.getItem("userId")), {
            //     Summary: summary,
            //     Image1: u1,
            //     Image2: u2,
            //     Image3: u3,
            //     Image4: u4,
            //     Image5 : u5,
            //     Phone : phone,
            //     Phone2 : phone2,
            //     Job : job,
            //     Date_Created : currentDate()
            // }).then(()=>{
                
            //     alert("Successfully Completed Profile")
            // })

  // A post entry.
        const postData = {
                Summary: summary,
                Image1: u1,
                Image2: u2,
                Image3: u3,
                Image4: u4,
                Image5 : u5,
                Phone : phone,
                Phone2 : phone2,
                Job : job,
                Date_Created : currentDate()
        };

            // Get a key for a new Post.
            // const newPostKey = push(child(ref(db), 'posts')).key;

            // Write the new post's data simultaneously in the posts list and the user's post list.
            const updates = {};
            //updates['/Users/' ] = postData;
            updates['/Artisans/' + localStorage.getItem("userId") + '/' ] = postData;

             update(ref(db), updates).then(()=>{
                 handleClick("/jobs")
                alert("Successfully set up Profile")
             })
    }

    const currentDate=()=>{
        var now = new Date();
        var day = ("0" + now.getDate()).slice(-2);
        var month = ("0" + (now.getMonth() + 1)).slice(-2);
        var year = now.getFullYear() 
        var toDate = day+"/"+month+"/"+year
        

        return toDate
    }
    
    
    return(
        <div style={{ marginTop: "40px" }}>
                <div className="outer">
                    <div className="inner">
                        <form>
                            <h3>Complete Profile</h3>
           
                <FormLabel style={{width:"100%"}}>NAME : {fname}</FormLabel>
                <FormLabel style={{width:"100%", marginTop:"20px"}}>EMAIL : {email}</FormLabel>
                <FormInput
                label={"Enter Phone Number"}
                required
                value ={phone}
                onChange={(e)=>setPhone(e.target.value)}
                />

                <FormInput
                label={"Enter alternative Phone Number"}
                value ={phone2}
                onChange={(e)=>setPhone2(e.target.value)}
                />

                <div className="form-group" style={{marginTop:"20px"}}>
                            <ReactDropdown options={getJobs()} placeholder="Select Job type" 
                            required
                            value={job} onChange={(e)=>{setJob(e.value)}}/>
                </div>

               

            <TextareaAutosize
                style={{width: "100%", marginTop:'20px', minHeight:"150px"}}
                placeholder={"Give a summary of your self and your job"}
                value ={summary}
                required
                onChange={(e)=>setSummary(e.target.value)}
                />


            <div>
                <div  style={{display:'flex', flexDirection:'column', placeItems:'center', justifyContent:'center', alignItems:'center', marginTop:"20px"}}>
					<img src={imagez!==null?imagez:nobody}  style={{height:"200px", placeItems:'center', justifyContent:'center', alignItems:'center'}}/>
					<input type="file" onChange={(e)=>changeHandler(e, "1")}/>

				</div>

                {showPic2?<div  style={{display:'flex', flexDirection:'column', placeItems:'center', justifyContent:'center', alignItems:'center', marginTop:"20px"}}>
                {camCheck===2? <Close style={{marginTop:"20px"}} onClick={()=>{picVis("-")}}/> : null}
                    <img src={imagez2!==null?imagez2:nobody}  style={{height:"200px", placeItems:'center', justifyContent:'center', alignItems:'center'}}/>
					<input type="file" onChange={(e)=>changeHandler(e, "2")}/>

				</div>:null}
                
                {showPic3?<div  style={{display:'flex', flexDirection:'column', placeItems:'center', justifyContent:'center', alignItems:'center', marginTop:"20px"}}>
                {camCheck===3? <Close style={{marginTop:"20px"}} onClick={()=>{picVis("-")}}/> : null}
                    <img src={imagez3!==null?imagez3:nobody}  style={{height:"200px", placeItems:'center', justifyContent:'center', alignItems:'center'}}/>
					<input type="file" onChange={(e)=>changeHandler(e, "3")}/>
                    
				</div>:null}
                
               {showPic4? <div  style={{display:'flex', flexDirection:'column', placeItems:'center', justifyContent:'center', alignItems:'center', marginTop:"20px"}}>
               {camCheck===4? <Close style={{marginTop:"20px"}} onClick={()=>{picVis("-")}}/> : null}
                    <img src={imagez4!==null?imagez4:nobody}  style={{height:"200px", placeItems:'center', justifyContent:'center', alignItems:'center'}}/>
					<input type="file" onChange={(e)=>changeHandler(e, "4")}/>

				</div>:null}
                
                {ShowPic5?<div  style={{display:'flex', flexDirection:'column', placeItems:'center', justifyContent:'center', alignItems:'center', marginTop:"20px"}}>
					{camCheck===5? <Close style={{marginTop:"20px"}} onClick={()=>{picVis("-")}}/> : null}
                    <img src={imagez5!==null?imagez5:nobody}  style={{height:"200px", placeItems:'center', justifyContent:'center', alignItems:'center'}}/>
					<input type="file" onChange={(e)=>changeHandler(e, "5")}/>

				</div>:null}
                </div>

                {camCheck<5?<AddAPhoto 
                onClick={()=>{picVis("+")}}
                style={{width:'100%'}}/> :null}
                


            <Button variant="primary"
                        type='submit'
                        onClick={(e) => {
                            e.preventDefault()
                          
                            checkUpLoad()
                        }}
            >Submit</Button>
            </form>
            <PopUp 
            openPopUp={popupState}
            children={<Spinner animation="border" variant="success" />}/>
            </div>
            </div>
        </div>
    )
}