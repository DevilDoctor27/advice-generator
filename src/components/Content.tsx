import Divider from './Divider'

import { IAdvice } from '../types/data'

const Content: React.FC<IAdvice> = (props) => {
  const { id, advice } = props
  return (
    <div className="relative h-full pb-6 text-center">
      <h2 className="text-sm font-extrabold tracking-[0.3em] uppercase text-clr-neon-green">
        Advice #<span>{id}</span>
      </h2>

      <p className="flex items-center h-full">
        <q className="mx-auto text-[1.75rem] text-clr-light-cyan">
          <span>{advice}</span>
        </q>
      </p>

      <Divider />
    </div>
  )
}

export default Content
