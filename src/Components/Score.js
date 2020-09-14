import React, {useState} from 'react'

const Score = () => {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You score is {count}</p>
      <button onClick={() => setCount(count +1)}>Click</button>
    </div>

  )
}

export default Score;