import React from "react";

import './todo-list-item.css';

export default class TodoListItem extends React.Component {

    // state = {
    //     done: false,
    //     important: false
    // };

    // onLabelClick = () => {
    //     console.log(`Done: ${this.props.label}`)
    //     this.setState(({done}) => {
    //         return {
    //             done: !done
    //         };
    //     });
    // };

    // onMarkImportant = () => {
    //     this.setState(({important}) => {
    //         return {
    //             important: !important
    //         };
    //     });
    // }

    render() {
        const {
            label, onDeleted, onToggleImportant, onToggleDone,
            done, important
        } = this.props;

        let classNames = 'todo-list-item'
        if (done) {
            classNames += ' done';
        }

        if (important) {
            classNames += ' important'
        }

        return (
            <span className={classNames}>
                  <span
                      onClick={onToggleDone}
                      className="todo-list-item-label">
                         {label}
                  </span>

                  <button type="button"
                          className="btn btn-outline-success btn-sm float-right"
                          onClick={onToggleImportant}>
                    <i className="fa fa-exclamation"/>
                  </button>

                  <button type="button"
                          className="btn btn-outline-danger btn-sm float-right"
                          onClick={onDeleted}>
                    <i className="fa fa-trash-o"/>
                  </button>
             </span>
        );
    };


}

