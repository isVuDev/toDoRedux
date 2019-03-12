import React from 'react';

function InputSearch (props) {
        return (
            <div>
                <input type="text" name="searchText"
                value= {props.searchText}
                onClick={props.onTextClick}
                onChange={props.onTextChange}
                placeholder= "own your life"
                />
            </div>
        )

}

export default InputSearch