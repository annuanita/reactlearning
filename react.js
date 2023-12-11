 import React from "react";
 import ReactDOM from "react-dom/client";


//const heading = React.createElement("h1" , {id: "heading" ,xyz: "abc"} ,"hello from react");

const parent =React.createElement("h1" , {id: "parent"} ,
[React.createElement("h2" ,{id:"child"}, "hi child from react"),React.createElement("h2",{id: "child2"},"second child in react")]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
   // root.render(heading);
    root.render(parent);