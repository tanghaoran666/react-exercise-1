import React from 'react';
import Education from './Education';

class Educations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      educations: [
        {
          year: 1990,
          firstLine: 'I was born in Katowice',
          content:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi.',
        },
        {
          year: 2005,
          firstLine: 'Secondary school specializing in artistic',
          content:
            'Eos, explicabo, nam, tenetur et ab eius deserunt aspernatur ipsum ducimus quibusdam quis voluptatibus.',
        },
        {
          year: 2009,
          firstLine: 'First level graduation in Graphic Design',
          content:
            'Aspernatur, mollitia, quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis? lusto, quibusdam asperiores unde repel lat.',
        },
        {
          year: 2012,
          firstLine: 'Second level graduation in Graphic Design',
          content: 'Ducimus, aliquam tempore autem ¡taque et accusantium!',
        },
      ],
    };
  }
  render() {
    return (
      <div>
        {this.state.educations.map((education) => (
          <Education
            year={education.year}
            key={education.year}
            firstLine={education.firstLine}
            content={education.content}
          />
        ))}
      </div>
    );
  }
}

export default Educations;
