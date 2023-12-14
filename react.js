 import React from "react";
 import ReactDOM from "react-dom/client";


//const heading = React.createElement("h1" , {id: "heading" ,xyz: "abc"} ,"hello from react");

//const parent =React.createElement("h1" , {id: "parent"} ,
//[React.createElement("h2" ,{id:"child"}, "hi child from react"),React.createElement("h2",{id: "child2"},"second child in react")]);
   // const root = ReactDOM.createRoot(document.getElementById("root"));
   // root.render(heading);
   // root.render(parent);

   const jsx= <h1>Index written in jsx</h1>;

   const Title =() => (
    <h1 className ="head" tabIndex={1}> Title for component composition</h1>
   );

   const Heading = () => (
<div id ="container">
    <Title/>
    <h2>heading tag in jsx </h2> </div>
   );
   //console.log(jsx);
    const root =ReactDOM.createRoot(document.getElementById("root"));
   root.render(<Heading/>);
