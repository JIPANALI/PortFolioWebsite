import React from 'react';
import { Timeline } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import './Education.css'; // Importing the CSS for styling

const Education = () => {
  return (
    <div className="education-container">
      <Timeline
        items={[
          {
            color: 'green',
            children: (
              <>
                <h2>Experience</h2>
                <h3>Frontend Developer at Metavy</h3>
                <p className='date'>2023 - Present</p>
              </>
            ),
          },
          {
            color: 'green',
            children: (
                <>
                  <h2>Lecturer</h2>
                  <h3>Annex College</h3>
                  <p className='date'>2022-2023</p>
                </>
              ),
          },
          {
            color: 'green',
            children: (
                <>
                  <h2>M.Tech in Computer Science And Engineering</h2>
                  <h3>Aliah University</h3>
                  <p className='date'>2019-2021</p>
                </>
              ),
          },
          {
            children: (
              <>
                <h2>B.tech in Computer Science And Engineering</h2>
                <h3>Aliah University</h3>
                <p className='date'>2014-2018</p>
              </>
            ),
          },
          {
            color: 'gray',
            children: (
              <>
                <h2>Gate Qualified Three Times in Computer Science</h2>
                <p className='date'>2021,2022,2023</p>
              </>
            ),
          },
          {
            color: 'gray',
            children: (
              <>
                <h2>Net Qualified in Computer Science</h2>
                <p className='date'>2023</p>
              </>
            ),
          },
        //   {
        //     color: '#00CCFF',
        //     dot: <SmileOutlined />,
        //     children: <p>Custom color testing</p>,
        //   },
        ]}
      />
    </div>
  );
};

export default Education;
