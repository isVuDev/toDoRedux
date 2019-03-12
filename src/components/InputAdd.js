import React from 'react';
const InputAdd = ({addText,onTextClick,onTextChange,onAddClick}) => {
    return (
        <div>
            <input type="text" name="addText"
            value= {addText}
            placeholder="Rule the world!!!"
            onClick={onTextClick}
            onChange= {onTextChange}
            />  
            <button onClick={onAddClick} >Add</button>
        </div>
    )
}

export default InputAdd