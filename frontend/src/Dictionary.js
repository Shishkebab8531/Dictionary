import { Component } from "react";

export class Dictionary extends Component{
    constructor(props) {
        super(props);
        this.state = {value: '', output: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOnClick = this.handleOnClick.bind(this);
      }    
      handleChange(event) {    this.setState({value: event.target.value});  }
      handleOnClick(event) {
        console.log('value state: ' + this.state.value)
        this.getTranslation()
      }
      handleSubmit(event) {
         
        event.preventDefault();
      }
      render() {
        return (
          <div>
            <form action="/action_page.php">
              <label>English word:</label>
              <input onChange={this.handleChange}/><br></br>
              <input type="button" value="Submit" onClick={this.handleOnClick}></input><br></br>
              <label>Translation: </label>
              <input value={this.state.output}/>
          </form>
          
          </div>
        );
      }
        async getTranslation(){
            await fetch('http://localhost:50465/api/Dictionary/' + this.state.value)
        .then(response=>response.json())
        .then(data => {this.setState({output: data[0].Result});})
        .catch(error => this.setState({output: "Error, no entry found."}));
        }
}