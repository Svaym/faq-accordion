import './App.scss';
import image from './assets/images/icon-star.svg';
import plus from './assets/images/icon-plus.svg';
import minus from './assets/images/icon-minus.svg';
import { arr } from './data.ts';
import { useState } from 'react';
function App() {
  const [click, setClick] = useState(null);
  function handleClick(id) {
    setClick(id === click ? null : id)
  };
  return(
    <>
      <div className="container">
        <div className="accordion">
          <div className='accordion__str'>
            <img src={image} alt="star" className='accordion__star' />
            <h1 className='accordion__title'>FAQs</h1>
          </div>
            {arr.map((item, id) => (
              <>
                <div key={id} className="accordion__btn" onClick={() => handleClick(id)}>
                  <h2 className='accordion__que'>{item.que}</h2>
                  {click === id ? <img src={plus} alt="plus" /> : <img src={minus} alt="minus" />}
                </div>
                {click === id && <p className='accordion__answer'>{item.answer}</p>}
              </>
            ))}
        </div>
      </div>
    </>
  )
}

export default App
