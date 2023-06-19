import cx from 'classnames'
import './Buttons.scss'
const Buttons = ({
  onClick,
  classNames,
  btnActive,
  backgroundColor,
  text,
  isDisabled,
  type,
  width,
}) => {
  return (
    <button
      className={cx('button', classNames, { active: btnActive })}
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, width: width }}
      disabled={isDisabled}
      type={type}
    >
      {text}
      </button>
      
      
  )
}

export default Buttons
