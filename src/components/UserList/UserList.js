import React, { PureComponent, Fragment} from 'react';

class UserList extends PureComponent {

    renderList = () => this.props.userList.map((item, index) => <div key={index}>{index + 1}. {item}</div>);
    render() {
        return (
            <Fragment>
                <div className="users">
            {this.renderList()}
                </div>
            </Fragment>
        )
    }
}

export default UserList;