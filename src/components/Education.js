/* eslint-disable react/prop-types */
import React from 'react';
import './Education.css';

class Education extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul>
        <li>
          <h4 className="education" id="year">
            {this.props.year}
          </h4>
          <body>
            <h4 className="education">{this.props.firstLine}</h4>
            <p className="education">{this.props.content}</p>
          </body>
        </li>
      </ul>
    );
  }
}

export default Education;
