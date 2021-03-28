import { CSSTransition } from 'react-transition-group' 

export const Card = (props) => {
  const { id, content, isClicked, handleClick } = props
  
  return (
    <CSSTransition>
      <div id={id} className="card" onClick={(e) => handleClick(e)}>
        <div className="content-img">
          <img className="avatar" src={content.image} alt=""/>
        </div>
        <div className="content-name">{content.name}</div>
        {/* Cheat Mode */}
        {/* {isClicked && <p>Clicked</p>} */}
      </div>
    </CSSTransition>
  )
}
