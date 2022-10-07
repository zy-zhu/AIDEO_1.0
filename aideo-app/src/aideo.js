import React, {Component} from 'react';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
import { getDatabase, ref, set } from "firebase/database";



// import Firebase from 'firebase';

var uuid=require('uuid');
var firebase=require('firebase/app');


const firebaseConfig = {
    apiKey: "AIzaSyB3x_iRZjRiBqsELkBdIaf2BFW1HnGMcik",
    authDomain: "aideo-app.firebaseapp.com",
    databaseURL: "https://aideo-app-default-rtdb.firebaseio.com",
    projectId: "aideo-app",
    storageBucket: "aideo-app.appspot.com",
    messagingSenderId: "145608834598",
    appId: "1:145608834598:web:76e22e75f1bf83891570e7",
    measurementId: "G-WPW9QQHJ2X"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);




class Aideo extends Component{

    

    ideoerNameSubmit(event){
        var name = this.refs.name.value;
        this.setState({ideoerName:name},function(){
            console.log(this.state);
        })

    };

    surveySubmit(event){
     
        this.setState({isSubmitted:true 
        }, function(){console.log(this.state);})

        const db=getDatabase();
        set(ref(db,'aideo-app/'+this.state.uid),{
            ideoerName:this.state.ideoerName,
                answers:this.state.answers,
        });

        // getDatabase.ref('aideo-app/'+this.state.uid).set(
        //     {
        //         ideoerName:this.state.ideoerName,
        //         answers:this.state.answers
        //     }
        // );
       

    };

    answerSelected(event){
        var answers = this.state.answers;
        if(event.target.name =='ans1'){
            answers.ans1=event.target.value;
        }
        else if(event.target.name =='ans2'){
            answers.ans2=event.target.value;
    }
   this.setState({answers:answers},function(){
    console.log(this.state)
   })
    };


    constructor(props){
        super(props);
        this.state={
            uid:uuid.v1(),
            ideoerName:'',
            answers:{
                ans1:'',
                ans2:'',
            },
            isSubmitted:false
        };

        this.ideoerNameSubmit=this.ideoerNameSubmit.bind(this)
        this.answerSelected= this.answerSelected.bind(this)
        this.surveySubmit=this.surveySubmit.bind(this)
    }
    render(){
        var name='';
        var questions='';

        if(this.state.ideoerName =='' && this.state.isSubmitted ==false){
            name = <div>
                <h1>
                    Enter Your Email
                </h1>
                <form>
                    <input className='ideo_name' type='text' placeholder='Your email here' ref="name"/>
                    <br/>
                    <input className='feedback-button' type='button' value='Next' onClick={this.ideoerNameSubmit}/>
                </form>
                </div>
        }
        else if(this.ideoerName !=='' && this.state.isSubmitted ==false){
            name=<div>
                <h1>Welcome!{this.state.ideoerName} to aiDEO</h1>

            </div>
            questions=<div>
                <h2>Let's dive in one question, type in whatever you feel comfortable with</h2>
                <form>
                    <div className='card'>
                        <label>
                            How do you feel today?
                        </label><br/>
                        <input type='radio' name='ans1' value='Good' onChange={this.answerSelected}/>Good
                        <input type='radio' name='ans1' value='It is OK' onChange={this.answerSelected}/>It is OK
                        <input type='radio' name='ans1' value='Whatever' onChange={this.answerSelected}/>Whatever
                        <input type='radio' name='ans1' value='OMG' onChange={this.answerSelected}/>OMG
                    </div>

                    <div className='card'>
                        <label>
                            What will you expect if somebody invite you to a random zoom meeting?
                        </label><br/>
                        <input type='radio' name='ans2' value='Good' onChange={this.answerSelected}/>Good
                        <input type='radio' name='ans2' value='It is OK' onChange={this.answerSelected}/>It is OK
                        <input type='radio' name='ans2' value='Whatever' onChange={this.answerSelected}/>Whatever
                        <input type='radio' name='ans2' value='OMG' onChange={this.answerSelected}/>OMG
                    </div>

                    <input className='feedback-button' type='button' value='submit' onClick={this.surveySubmit}/>
                </form>
            </div>
        }

        return(  

   
            <div>
                <h1>Hey IDEOer</h1>

                {name}

                -----

                {questions}

            </div>
        )
    }
}

export default Aideo;