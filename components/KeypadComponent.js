import React from "react";

class KeypadComponent extends React.Component {
    render() {
       return (
         <div className="calculator-body">
           <div className="calc-wrapper">
            <div className="row">
               <button> 1 </button>
               <button> 2 </button>
               <button> 3 </button>
               <button> 4 </button>
            </div>
               
               
            <div className="row">
               <button> 5 </button>
               <button> 6 </button>
               <button> 7 </button>
               <button> 8 </button>
            </div>
               

            <div className="row">
               <button> 9 </button>
               <button> / </button>
               <button> * </button>
               <button> + </button>
            </div>
               

            <div className="row">
               <button> - </button>
               <button> . </button>
               <button> % </button>
               <button> CE </button>
            </div>
               

            <div className="row">
               <button> = </button>
            </div>
               
        </div>
    </div>
       )
    }
}

export default KeypadComponent;