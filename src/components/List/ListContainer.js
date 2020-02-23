import {connect} from 'react-redux';
import List from './List';
import {
  createActionAddColumn, 
  getColumnsForList,
} from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.listId),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);