import React, { Component } from 'react';
import './App.css';
import { Button } from 'react-bootstrap';





class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'',
      value1:'',
      value2:'',
      actionType:'',
      final:[]
    }
    this.handlechange = this.handlechange.bind(this);    
    this.add = this.add.bind(this);
    this.sub = this.sub.bind(this);
    this.mul = this.mul.bind(this);
    this.div = this.div.bind(this);
    this.submit = this.submit.bind(this);
    this.clearInput = this.clearInput.bind(this);
    
  }

  componentDidMount(){
    this.inputName.focus();
  }
  
  handlechange(e){    
    this.setState({value:e.target.value});
    this.inputName.focus();
  }


  add(e){
    e.preventDefault();
    this.setState((prevstate)=>({
        value:prevstate.value + '+',
    }));
    this.inputName.focus();  
  }

  sub(e){
    e.preventDefault();
    this.setState((prevstate)=>({
        value:prevstate.value + '-',
    })) 
    this.inputName.focus();     
  }

  mul(e){
    e.preventDefault();
    this.setState((prevstate)=>({
        value:prevstate.value + '*',
    }))    
  }

  div(e){
    e.preventDefault();
    this.setState((prevstate)=>({
        value:prevstate.value + '/',
    }))    
    this.inputName.focus();  
  }

  submit(){
    if(this.state.value.length > 0){
      this.setState((prevState)=>({
        value:prevState.value + this.state.value
      })) 
      const lastString = this.state.value.slice(-1);
      console.log('Last ',lastString);
      if(lastString == '+' || lastString == '-' || lastString == '*' || lastString =='/'){
       this.setState({value:eval(this.state.value.slice(0,-1))})  ;     
      }else{
        this.setState({value:eval(this.state.value)});
      }     
    }
    this.inputName.focus();  
    
    
  }
  getNum(num){
    console.log(num);
    this.setState((prevState)=>({
      value:""+prevState.value + num
    }))
  }
  clearInput(){
    this.setState({value:''});
    this.inputName.focus();
  }
  render() {
    const array =this.state.final;
   // console.log(array);
    return (
      <div className="App">
      <div className="">
      <div className="row">
      <div className="col-xs-3">
      <a onClick={this.clearInput} className="cal-btn clear"href ="#"> c</a>
      </div>
      <div className="col-xs-9">
      <input value={this.state.value} ref={(input)=>{this.inputName = input}}className='inputBox' onChange={this.handlechange} type="text" value={this.state.value}/>
      </div>
      </div>
        <div className="row">
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(7)} className="cal-btn"href ="#">7</a>
          </div>
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(8)} className="cal-btn"href ="#">8</a>
          </div>
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(9)} data-id='9' className="cal-btn"href ="#">9</a>
          </div>
          <div className="col-xs-3">
          <a  onClick={this.add} className="cal-btn"href ="#">+</a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(4)} className="cal-btn"href ="#">4</a>
          </div>
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(5)} className="cal-btn"href ="#">5</a>
          </div>
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(6)} className="cal-btn"href ="#">6</a>
          </div>
          <div className="col-xs-3">
          <a onClick={this.sub} className="cal-btn"href ="#">-</a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(1)} className="cal-btn"href ="#">1</a>
          </div>
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(2)} className="cal-btn"href ="#">2</a>
          </div>
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(3)} className="cal-btn"href ="#">3</a>
          </div>
          <div className="col-xs-3">
          <a onClick={this.mul} className="cal-btn"href ="#">*</a>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
          <a onClick={()=>this.getNum(0)} className="cal-btn"href ="#">0</a>
          </div>
          <div className="col-xs-3">
          <a onClick={()=>{this.getNum('.')}} className="cal-btn" href ="#">.</a>
          </div>
          <div className="col-xs-3">
          <a  onClick={this.submit} className="cal-btn equal"href ="#">=</a>
          </div>         
          <div className="col-xs-3">
          <a onClick={this.div} className="cal-btn"href ="#">/</a>
          </div>
        </div>
      </div>
       
       
      </div>
    );
  }
}

export default App;
