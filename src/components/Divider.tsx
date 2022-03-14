import desktopDivider from '../images/pattern-divider-desktop.svg'
import mobileDivider from '../images/pattern-divider-mobile.svg'

const Divider: React.FC = () => {
  return (
    <picture>
      <source srcSet={desktopDivider} media="(min-width: 64rem)" />
      <img
        className="w-full h-4"
        src={mobileDivider}
        alt="-------- O --------"
      />
    </picture>
  )
}

export default Divider
