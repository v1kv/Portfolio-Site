import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import Buttons from '../Buttons/Buttons'
import cx from 'classnames'
import './Todolist.scss'

const Todolist = () => {
  const refInput = useRef()
  const [listarr, setListarr] = useState([])
  const [complite, setComplite] = useState([])

  const addtodo = () => {
    const input = refInput.current
    if (listarr.includes(input.value)) {
      return
    }
    setListarr([...listarr, input.value])
    input.value = ''
  }
  const compliteTodo = (element) => {
    if (complite.includes(element)) {
      setComplite(complite.filter((item) => item !== element))
    } else {
      setComplite([...complite, element])
    }
  }
  const itemsTodoDelete = (index) => {
    setListarr((prevList) => {
      const newList = prevList.filter((_, i) => i !== index)
      return newList
    })
  }
  const itemsTodo = () => {
    return listarr.map((element, index) => (
      <li key={index} className="list-item">
        <span
          className={cx('text-todo', { completed: complite.includes(element) })}
        >
          {element}
        </span>
        <div className="btn-wrapper">
          <Buttons
            classNames="btn-complitee"
            text="Complite"
            onClick={() => compliteTodo(element)}
          />
          <Buttons
            classNames="btn-delete"
            text="Delete"
            onClick={() => itemsTodoDelete(index, element.id)} // Передача идентификатора элемента
          />
        </div>
      </li>
    ))
  }
  return (
    <div className="todo-wrapper">
      <div className={'btn-todo'}>
        <Buttons text={'Add To-Do'} onClick={addtodo} />
      </div>
      <div>
        <input
          ref={refInput}
          placeholder="Write your task."
          type="text"
          className="input"
          maxLength={20}
        />
      </div>
      <div className="todo-list">
        <ul>{itemsTodo()}</ul>
      </div>
    </div>
  )
}
export default Todolist
