import React from "react";

class Button extends React.Component {


    
    render() {
        return (
            <div className="button-container">
                <button>
                    <div className="icon-container">
                        <i className='bx bx-plus'></i>
                    </div>
                </button>
            </div>
        );
    };

};

export default Button;