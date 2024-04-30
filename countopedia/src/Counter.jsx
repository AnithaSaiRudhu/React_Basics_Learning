import React from "react";
import attack from "./images/attack.png";
import defend from "./images/defend.png";


class Counter extends React.Component{

    constructor(props){
        super(props);
        //this.handleAttack = this.handleAttack.bind(this);
        //this.handleDefend = this.handleDefend.bind(this);
       
        this.state = {
            count : 0,
            gameStatus :'',
            lastPlay:''
        };
    }

    handleAttack = () => {
        this.setState((p) =>{
            let newCount = p.count + Math.round(Math.random() * 10)
      
            return{
                count: newCount,
                gameStatus: newCount >= 10 ? 'You Won !!!' : p.gameStatus,
                lastPlay : newCount >= 10 ? "Attack" : p.lastPlay
            }                            
        });

        // this.setState((p) =>{
        //     return{
        //         count: p.count + 12
        //     }            
        // });
        // this.setState({count : this.state.count + 100});
        // this.setState({count : this.state.count + 10});        
   }

   handleRandomPlay = () => {
        let playMode = Math.round(Math.random());
        if(playMode == 0){
            this.handleAttack();
        }
        else{
            this.handleDefend();
        }
   }

   handleDefend = () => {

    this.setState((p) =>{
        let newCount = p.count - Math.round(Math.random() * 10)
        return{
            count: newCount,
            gameStatus: newCount <= -10 ? 'You Lost!!' : p.gameStatus,
            lastPlay : newCount <= -10 ? "Defend" : p.lastPlay
        }            
    });

   
        // this.setState({count : this.state.count - 1});          
   }

   handleReset = () => {

    this.setState(() =>{        
        return{
            count: 0,
            gameStatus: '',
            lastPlay : ''
        }            
    });

   
   }

    render(){
        return(

            <div className="row text-white text-center">
                <h1>Game Score : {this.state.count}</h1>
                <p>You win at +10 points and lose at -10 point!</p>
                <p>Last Play:{this.state.lastPlay}</p>
                <p>Game Status:{this.state.gameStatus}</p>
                <div className="col-6 col-md-3 offset-md-3">
                    <img style={{
                        width: '100px',
                        cursor:'pointer',
                        border:'1px solid green',

                    }} className="p-4 rounded" src={attack} onClick={this.handleAttack} >
                    </img>
                </div> 

                <div className="col-12 col-md-3 offset-md-3">
                    <img style={{
                        width: '100px',
                        cursor:'pointer',
                        border:'1px solid red',

                    }} className="p-4 rounded" src={defend} onClick={this.handleDefend} >
                    </img>
                </div> 

                <div className="col-12 col-md-4 offset-md-4">
                    <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay}>Random Play
                    </button>
                    <button className="btn btn-warning w-100 mt-2" onClick={this.handleReset}>Reset
                    </button>
                </div>                  
                
            </div>

        )
    }
}

export default Counter;