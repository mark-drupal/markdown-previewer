/*This project forms a part of the freecodecamp projects for front end libarys
which you can find at https://www.freecodecamp.org/learn/

This specific project is the https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer

The aim of this class is produce a previewer for this project*/

/*Import statements*/

import React from 'react';
import marked from 'marked';
import $ from 'jquery';

const Previewer = function (props){

    //allows carigde returns and lines breaks with marked!
    marked.setOptions({
      breaks: true
    });

    console.log("***********************************************************");
    console.log("   RUNNING MarkDown conversion ");
    console.log("***********************************************************");

    //markdown input
    let markedDown = marked(props.input);
    console.log("\n MarkedDown input: " + markedDown);

    ///convert to html
    console.log("\n\n***********************************************************");
    console.log("\n\nadding HTML to the div");
    $('#preview').ready(function() {
      $('#preview').html(markedDown);
    });
    $('#preview').html(markedDown);



    console.log(" html added to preview div");

  return(
    <div>
      <h1>This is a preview</h1>
      <div id='preview'></div>
    </div>

  );
}

export default Previewer;
