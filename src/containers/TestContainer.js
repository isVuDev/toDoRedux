import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import { test } from '../actions/action';
import Test from '../components/Test';

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators (test, dispatch)}
}

function mapStateToProps(state)  {
    console.log(state)
    return {
        test : state.test
    }
}

export default connect(mapStateToProps,
    mapDispatchToProps) (Test)
