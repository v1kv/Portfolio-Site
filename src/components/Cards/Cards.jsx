import './Cards.scss'
const Cards = ({ cardsTitle, cardsDesc, img, link }) => {
  return (
    <div className="cards-wrapper">
      <div className="cards-img">
        <img src={img} className="img" alt="" />
      </div>
      <p className="cards-title">{cardsTitle}</p>
      <p className="cards-desc">{cardsDesc}</p>
      <a href={link} className="cards-btn">
        Go to project
      </a>
    </div>
  )
}
export default Cards
