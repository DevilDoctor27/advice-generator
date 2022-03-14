import { ReactComponent as Dice } from '../images/icon-dice.svg'

interface IButton {
  cooldown: number
  handleClick: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<IButton> = ({ cooldown, handleClick }) => {
  return (
    <button
      // if change size, don't forget to fix positioning in parent component
      className={`relative flex items-center justify-center w-16 transition-colors rounded-full cursor-pointer aspect-square active:bg-clr-neon-green/30 before:absolute before:content-[''] before:w-16 before:-z-10 before:opacity-0 before:top-1/2 before:left-1/2 before:-translate-y-1/2 duration-300 before:transition-opacity before:duration-300 before:-translate-x-1/2 before:aspect-square before:bg-clr-neon-green before:rounded-full before:blur-xl ${
        cooldown > 0
          ? 'bg-clr-neon-green/50'
          : 'bg-clr-neon-green hover:before:opacity-100'
      }`}
      onClick={handleClick}
    >
      {cooldown > 0 ? <span className="text-2xl"> {cooldown}</span> : <Dice />}
    </button>
  )
}

export default Button
