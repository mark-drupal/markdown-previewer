/*This project forms a part of the freecodecamp projects for front end libarys
which you can find at https://www.freecodecamp.org/learn/

specific project is the https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer

aim of this class is produce a editor interface for this project*/

/*Import statements*/

import React from 'react';
import Previewer from './previewer.js';
import defaultState from './defaultstate.js'

class Editor extends React.Component{

  constructor(props){
    ///create the react component
    super(props);


    ///state variables
    this.state = {
      userinput: defaultState()
    }

    console.log("\n\nEditor being constructed...\n\n");
    console.log("Current default input is: \n\n" + this.state.input);
    console.log("**************************************************\n");
    ///bind methods to the class
    this.change = this.onChange.bind(this);

  }

  onChange = (event) => {
    //the value of what the user hs typed into the text editor
    let change = event.target.value;

    //update the input state
    this.setState(state => {
        return state.userinput = change;
    });

  }

  render(){
    /*Use Case #1 involves making a textarea in HTML with the id=editor*/



    return(
      <div>
        <h1>Type some mark down text in here</h1>
        <textarea
          rows="20"
          cols="100"
          id="editor"
          value={this.state.userinput}
          onChange={this.onChange.bind(this)}

          />
        <Previewer
          input={this.state.userinput}
        />
      </div>
    );
  }

}

export default Editor;
