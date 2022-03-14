import axios from 'axios'
import { useState, useEffect } from 'react'

import Button from './Button'
import Content from './Content'

import { IAdvice } from '../types/data'

const url = 'https://api.adviceslip.com/advice'

const App: React.FC = () => {
  const [advice, setAdvice] = useState<IAdvice>({
    id: 0,
    advice: '',
  })
  const [fetching, setFetching] = useState(false)
  const [cooldown, setCooldown] = useState(0)

  // fetch and set data in here
  const addAdvice = async () => {
    setFetching(true) // with this part we are able to show loader
    const response = await axios.get(url, {
      params: {
        t: new Date().getTime(),
      },
    })
    setFetching(false) // turn off loader after get response // even if request failed
    if (response.status !== 200) return
    const data = response.data
    setAdvice({
      id: data.slip.id,
      advice: data.slip.advice,
    })
    setCooldown(2)
  }

  const handleButton: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (cooldown > 0) return
    addAdvice()
  }

  // on first app load set loader and fetch data
  useEffect(() => {
    setFetching(true)
    addAdvice()
  }, [])

  // this code suppose to control our cooldown timer after get data (each time)
  useEffect(() => {
    const timer = setInterval(() => {
      if (cooldown <= 0) return
      setCooldown((cooldown) => cooldown - 1)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [cooldown])

  return (
    <div className="flex items-center justify-center min-h-screen p-2 pb-8 xs:p-4 font-manrope bg-clr-dark-blue">
      <h1 className="hidden">advice generator</h1>
      <div className="relative w-full max-w-sm px-8 pt-10 pb-20 text-center rounded-lg shadow-lg lg:max-w-lg bg-clr-dark-grayish-blue h-[38rem] xs:h-[28rem] lg:h-96">
        {fetching ? (
          <div className="flex items-center justify-center h-full text-3xl text-clr-light-cyan">
            Loading...
          </div>
        ) : (
          <>
            <Content id={advice.id} advice={advice.advice} />

            <div
              // positioning of bottom depends on button size
              className="absolute -translate-x-1/2 -bottom-8 left-1/2 "
            >
              <Button handleClick={handleButton} cooldown={cooldown} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default App
