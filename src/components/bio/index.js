import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{name}</strong>
            .<br />
          </p>
          <p className="description">
            I'm a {bio.role} <ReactRotatingText items={bio.description} />
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
      </div>
      
      <div className="thumbnail-wrapper">
        <div className='relative'>
            
            <div aria-hidden="true">
              <div className='relative-blob'>
                
                <Image src={bio.thumbnail} className='photo' alt="thumbnail" />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Bio;
