import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Buttons from '../../components/Buttons/Buttons'
import Header from '../../components/Header'
import cx from 'classnames'
import './Main.scss'
const Main = () => {
  const [projectState, setProjectState] = useState(false)

  const handelProject = () => {
    setProjectState(!projectState)
  }

  useEffect(() => {}, [projectState])

  return (
    <>
      <div className="main-page">
        <Header />
        <div className="title-descriptions">
          <div className="title-name">
            <p className="name">Front-End</p>
          </div>

          <div className="title-about">
            <p className="about">
              I'm passionate about creating interactive and beautiful web
              applications. My skills and experience include user interface
              development, building responsive and adaptive websites, as well as
              utilizing modern technologies and frameworks such as HTML, CSS,
              JavaScript, React, and others.
            </p>
          </div>
          <div className="img-wrapper"></div>
        </div>
        <Link to="/project" className="button_hola">
          To project
        </Link>
      </div>

      <div className={'btn-check-my-skill '}>
        <Buttons
          classNames={'button_hola'}
          text={'Check my skills'}
          onClick={handelProject}
        />
      </div>

      <div className="tehnology-wrapper">
        <div className="tehnology">
          <div className="tehnology-title">Java Script</div>
          <div
            className={cx(`tehnology-progress`, { java: projectState })}
          ></div>
        </div>

        <div className="tehnology">
          <div className="tehnology-title">React</div>
          <div
            className={cx(`tehnology-progress`, { react: projectState })}
          ></div>
        </div>

        <div className="tehnology">
          <div className="tehnology-title">HTML</div>
          <div
            className={cx(`tehnology-progress`, { html: projectState })}
          ></div>
        </div>

        <div className="tehnology">
          <div className="tehnology-title">CSS</div>
          <div
            className={cx(`tehnology-progress`, { css: projectState })}
          ></div>
        </div>

        <div className="tehnology">
          <div className="tehnology-title">Redux</div>
          <div
            className={cx(`tehnology-progress`, { redux: projectState })}
          ></div>
        </div>
      </div>
    </>
  )
}

export default Main
