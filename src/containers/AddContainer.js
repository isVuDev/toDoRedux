import {addToDoReset, addToDoChange, addToDo} from '../actions/action'
import InputText from '../components/InputText';
import {
    connect
} from 'react-redux';

const mapStateToProps = (state) => {
    console.log(state)
    return {
        addText : state.addText,
    }
}

const mapDispatchToProps = (dispatch) => ({
        onTextClick : ()=>dispatch(addToDoReset()),
        onTextChange: (e) => console.log('value',e.target.value) 
        || dispatch(addToDoChange(e.target.value)),
        onAddClick: () => dispatch(addToDo()),
})


const AddContainer = connect(mapStateToProps,mapDispatchToProps)(InputText);

export default AddContainer;