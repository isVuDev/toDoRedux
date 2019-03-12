import { searchToDoReset, searchToDoChange } from "../actions/action";
import {
    connect
} from 'react-redux';
import InputSearch from "../components/InputSearch";


const mapStateToProps = (state) => {
    console.log(state.searchText)
    return {
        searchText : state.searchText,
    }
}

const mapDispatchToProps = (dispatch) => ({
    onTextClick : () => dispatch(searchToDoReset()),
    onTextChange : (e) => dispatch(searchToDoChange(e.target.value)), 
})

const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(InputSearch);

export default SearchContainer;