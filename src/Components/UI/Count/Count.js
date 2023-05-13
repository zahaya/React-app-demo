import React, { useContext } from 'react';
import classes from './Count.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../../store/CartContext';




// 计数器组件
const Count = (props) => {
  const ctx = useContext(CartContext)


  const addButtonHandler = () => {
    ctx.addItem(props.meal)
  }

  const subButtonHandler = () => {
    ctx.removeItem(props.meal)
  }


  return (
    <div className={classes.counter}>


      {/* 
          当props.amount存在且不等于0时，显示按钮-和数字，否则为null
      */}
      {
        (props.meal.amount && props.meal.amount > 0) ?
          <>
            <button className={classes.sub} onClick={subButtonHandler}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className={classes.count}>{props.meal.amount}</span>
          </>
          : null
      }

      <button className={classes.add} onClick={addButtonHandler}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
};

export default Count;