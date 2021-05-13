import React from "react";

class Form extends React.Component {
    
    state = {
        show: true
    }

    showForm = () => {
        this.setState({show: !this.state.show});
    }

    render() {
        if (this.state.show) {
            return (
                <div className="task-form" onClick={this.showForm}>
                    <i className='bx bx-plus bx-sm'></i>
                </div>
            );
        }
        else{
            return (
                <div></div>
            );
        }
    };
    
};

export default Form;