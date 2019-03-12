import {addToDoReset, addToDoChange, addToDo, searchToDoReset} from '../actions/action'
import {
    connect
} from 'react-redux';
import InputAdd from '../components/InputAdd';

const mapStateToProps = (state) => {
    return {
        addText : state.addText,
    }
}

const mapDispatchToProps = (dispatch) => ({
        onTextClick : ()=>dispatch(addToDoReset()),
        onTextChange: (e) => dispatch(addToDoChange(e.target.value)),
        onAddClick: () => (dispatch(addToDo()) && dispatch(searchToDoReset())),
})


const AddContainer = connect(mapStateToProps,mapDispatchToProps)(InputAdd);

export default AddContainer;