import React from "react";
import './jobs.styles.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { SearchBox } from "../../Components/Resources/search/search.component";
import { JobsFilter } from "../../Components/Resources/filter/filter.component";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../../Components/Resources/Header/header.component";
import { JobCards } from "../../Components/job-cards/job-cards.component";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {ref, get, child, getDatabase} from "firebase/database"
import noPic from "../../Components/Images/nobody.jpg"

export class Jobs extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [],
            searchField: "",
            filterArray: []
        };
    }

    

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => response.json())
        //     .then((users) => this.setState({ users: users }));

        this.getJobs()


    }

    async getJobs(){
        const auth=getAuth() 
        signInWithEmailAndPassword(auth, "lonewolf.09@hotmail.com", "passwordzero24six")
                        .then((userCredential) => {
                            // Signed in 
                          
                            
                            
                            // ...
                            const dbRef = ref(getDatabase());
                            var trh=[]
                            get(child(dbRef, `Jobs/`)).then((snapshot) => {
                              if (snapshot.exists()) {
                                trh=[]
                    var res={}
                    snapshot.forEach((child) => {
                        var name=""
                        
                    res = {...res, Location : child.val().Location,
                        Name : child.val().Name,
                        Details : child.val().Details, 
                        Number : child.val().Number
                      
                      }
                      if(res!==null){
                        //console.log("bb", JSON.stringify(res))
                        trh.push(res)
                        }
                    })
                  //  trh.sort((a,b) => a.Id.localeCompare(b.Id));
                    //setdata(trh)
                  
                  //  uniVal = trh
                   this.setJobs(trh)
                  
                              } else {
                                console.log("No data available");
                              }
                            }).catch((error) => {
                              console.error(error);
                            });
                        })
                        .catch((error) => {
                            const errorCode = error.code;
                            const errorMessage = error.message;
                            alert(errorMessage)
                        });     
    }

     setJobs(filter){
       var recs = filter.map((val, key)=>{
        // const topic = val.Topic.toUpperCase()
        //  var content = val.Text
        //  if(content.length>200){
        //    console.log("Helo")
        //    content = <p>{content.substring(0, 200)} <i  style={{fontWeight:'normal',color:'gray'}}>.......Tap for more</i></p>
        //  }
           return(
               <div onClick={()=>{
               
                 
               }}  style={{width:'90%', display:'flex', margin:'20px',  justifyContent:'center', alignItems:'center'}}>
               
               <Container key={key} className="text-dark job-card">
                            <Row>
                                <Col className='m-2' id="jobfilter" sm={1}>
                                    <img width='50' src={noPic} alt='profile pic' />
                                </Col>
                                <Col sm={7}>
                                    <h4>{val.Name}</h4>
                                    <p><span>Loc: </span><span>{val.Location}</span> | <span>{val.Number}</span></p>
                                </Col>
                                <Col className='mb-3' sm={3}>
                                    <img width='100' src={noPic} alt='profile pic' />
                                </Col>
                            </Row>
                        </Container>
    
               
               
               </div>
            )
        })
        
    console.log(JSON.stringify(recs))
        this.setState({myJobs:recs})
    }

    handleChange = e => {
        return this.setState({ searchField: e.target.value })
    }

    handleFilterChange = e => {
        if (e.target.checked) {
            document.getElementById('searchBox').disabled = true
            document.getElementById('searchBox').placeholder = 'Uncheck filter to use search'

            return this.setState(prevState => (
                prevState.filterArray.includes(e.target.value) ?
                    { filterArray: [...prevState.filterArray] }
                    :
                    { filterArray: [...prevState.filterArray, e.target.value] }
            ))
        } else {
            let currentState = this.state.filterArray
            let index = currentState.indexOf(e.target.value)
            currentState.splice(index, 1)

            return this.setState({ filterArray: currentState })
        }
    }

    getFilter = () => {
        const { users, searchField } = this.state;
        const searchedUsers = users.filter((user) =>
            user.name.toLowerCase().includes(searchField.toLowerCase()) || user.address.city.toLowerCase().includes(searchField.toLowerCase())
        );
        return searchedUsers
    }

    getFilteredList = () => {
        let filterUsers = []
        const { users, filterArray } = this.state

        for (let el of filterArray) {
            let found = users.filter((user) => user.name.toLowerCase().includes(el.toLowerCase()) || user.address.city.toLowerCase().includes(el.toLowerCase())
            )
            filterUsers = [...filterUsers, ...found]
        }
        return filterUsers
    }

    render() {
        let filteredUsers = this.getFilteredList().length !== 0 ? this.getFilteredList() : this.getFilter();
        filteredUsers = filteredUsers.filter((item, pos) => (filteredUsers.indexOf(item) === pos)).sort((a, b) => a.name.localeCompare(b.name))
        console.log(filteredUsers)
        return (
            <div>
                <Header />
                <Container>
                    <Row>
                        <SearchBox filterUsers={this.getFilteredList()} handleChange={this.handleChange} placeholder="search jobs" />
                    </Row>
                    <Row>
                        <Col id="jobfilter" sm={3}>
                            <JobsFilter handleFilterChange={this.handleFilterChange} />
                        </Col>
                        <Col sm={7}>
                            {this.state.myJobs}
                        </Col>
                    </Row>
                </Container>

            </div>
        );
    }

}