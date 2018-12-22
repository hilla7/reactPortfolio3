import React, { Component } from 'react';
import Button from '../../../../components/shared/button/Button';
import Input from '../../../../components/shared/input/Input';
import { FaSignInAlt } from 'react-icons/fa';
import { capitalizeFirstLetter } from '../../../../utils/string-manipulator';
import userService from '../../../../services/user.service';
import { withRouter } from 'react-router-dom';
const required = ['Username', 'Password'];

class LoginForm extends Component {

    state = {
        credentials: {
            username: '',
            password: ''
        },
        isTriedSubmit: false,
        touched: false,
        isWrongCredentials: false
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ isTriedSubmit: true });
        if (!this.state.isFormValid) {
            return;
        }

        const { username, password } = this.state.credentials;
        if (userService.validateUser(username, password)) {
            setTimeout(() => {
                this.props.history.push('/home');
            })
        } else {
            this.setState({ isWrongCredentials: true });
        }
    }

    handleValueChange = (value, label) => {
        this.setState((prevState, prevProps) => {
            let newState = {
                ...prevState,
                credentials: { ...prevState.credentials, [label]: value },
                touched: true,
                isWrongCredentials: false
            }
            if (!newState.credentials.username || !newState.credentials.password) {
                return newState;
            }
            return { ...newState, isFormValid: true }
        });
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} >
                    {Object.keys(this.state.credentials).map(key => {
                        return <Input value={this.state.credentials[key]}
                            placeholder={capitalizeFirstLetter(key)}
                            label={key}
                            key={key}
                            onChange={this.handleValueChange} />
                    })}
                    <div className="validation-error">
                        {this.state.isTriedSubmit && !this.state.isFormValid ? `${required.join(', ')} are required!` : ''}
                    </div>
                    <div className="validation-error">
                        {this.state.isWrongCredentials ? 'Opss.. username or password is incorrect. please try again' : ''}
                    </div>
                    <Button onClick={this.handleSubmit}
                        label={<FaSignInAlt />}
                        type="submit" />
                </form>
            </React.Fragment>
        );
    }
}

export default withRouter(LoginForm);