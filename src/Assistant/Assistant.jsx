import './assistant.scss'

function Assistant({ position, text }) {
  return (

    <div className="assistant" style={{ left: `${position.x}px`, top: `${position.y}px` }}>
      <img src="avatar.png" alt="Assistant Avatar" className="avatar" />
      <p className="assistant-text">{text}</p>
    </div>

  )
}

export default Assistant