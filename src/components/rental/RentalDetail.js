import React from 'react';

export class RentalDetail extends React.Component {


    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <h1>I am detail component {this.props.match.params.id} </h1>
            </div>
        );
    }


}
