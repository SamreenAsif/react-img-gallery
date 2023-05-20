import React from 'react'
import {AiFillPlusCircle} from "react-icons/ai" ;
const Button = () => {
  return (
    <div>
      <label className="add-btn" htmlfor ="file_picker">
        <AiFillPlusCircle/>
        <input hidden type="file" name="file_picker" id="file_picker" />
      </label>
    </div>
  )
}

export default Button
