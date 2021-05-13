import React from "react";

// const Task = (props) => {
//     console.log(props);
//     return (
//         <h1>Task Component</h1>
//     );
// };

class Tasks extends React.Component {

    state = {
        tasks: {}
    }

    render() {
        return (
            <p>Esto es Tasks</p>
        );
    };

}

export default Tasks;