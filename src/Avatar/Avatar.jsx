import './avatar.scss'
import React, { useState } from 'react';
import Assistant from '../Assistant/Assistant';

const Avatar = () => {

   const Buttons =  [
        {
        id: 1,
        title: 'Red Button',
        background: 'Red',
        color: 'White',
        },
        {
        id: 2,
        title: 'Crimson Button',
        background: 'Crimson',
        color: 'White',
        },
        {
        id: 3,
        title: 'Brown Button',
        background: 'Brown',
        color: 'White',
        },
        {
        id: 4,
        title: 'Green Button',
        background: 'Green',
        color: 'White',
        },
        {
        id: 5,
        title: 'Blue Button',
        background: 'Blue',
        color: 'White',
        },
        {
        id: 6,
        title: 'Black Button',
        background: 'Black',
        color: 'White',
        },
    ]

const [assistantPosition, setAssistantPosition] = useState({ x: 20, y: 20 });
  const [assistantText, setAssistantText] = useState('');

  const handleButtonClick = (event, buttonText) => {
    const buttonRect = event.target.getBoundingClientRect();
    setAssistantPosition({
      x: buttonRect.left + buttonRect.width + 10,
      y: buttonRect.top,
    });
    setAssistantText(`This is "${buttonText}".`);
  };

  return (

        <div className="App">
            <h1 className='click'>Hi, Click a Button</h1>
        {Buttons.map((button) =>(
            <div className='buttons' key={button.id}>
                <button onClick={(e) => handleButtonClick(e, `${button.title}`)} style={{ background: `${button.background}`, color: `${button.color}`}}>{button.title}</button>
                <Assistant position={assistantPosition} text={assistantText} />
            </div>
        ))}
    </div>
 
  )
}

export default Avatar