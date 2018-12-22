import React, { Component } from 'react';
import './PortfolioForm.css';
import Button from '../../../../components/shared/button/Button';
import Input from '../../../../components/shared/input/Input';
import { FaSave } from 'react-icons/fa';
import { getInitializedItem } from '../../../../utils/initialized-item';
import { capitalizeFirstLetter } from '../../../../utils/string-manipulator';
import PortfolioService from '../../../../services/portfolio.service';
import { withRouter } from 'react-router-dom';
import portfolioService from '../../../../services/portfolio.service';
import { Prompt } from 'react-router-dom';
const required = ['Title', 'Image'];

class PortfolioForm extends Component {

    state = {
        item: getInitializedItem(),
        isTriedSubmit: false,
        isNewItem: true,
        isFormValid: false,
        touched: false
    };

    componentDidMount() {
        const id = this.props.match.params.id;
        if (!id || id === 'new') {
            return;
        }
        const item = portfolioService.getItemById(id);
        const isValid = item && item.title && item.imageUrl;
        this.setState({ item: item, isNewItem: false, isFormValid: isValid });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ isTriedSubmit: true });
        if (!this.state.isFormValid) {
            return;
        }

        if (this.state.isNewItem) {
            PortfolioService.addNewItem(this.state.item);
        } else {
            PortfolioService.editItem(this.state.item);
        }
        setTimeout(() => {
            this.props.history.push('/items');
        })
    }

    handleValueChange = (value, label) => {
        this.setState((prevState, prevProps) => {
            let newState = { ...prevState, item: { ...prevState.item, [label]: value }, touched: true }
            if (!newState.item.title || !newState.item.imageUrl) {
                return newState;
            }
            return { ...newState, isFormValid: true }
        });
    }

    checkIfUnsavedChanges = () => {
        const { title, description, imageUrl } = this.state.item;
        const { isTriedSubmit, touched } = this.state;
        return touched && !isTriedSubmit && !!(title || description || imageUrl);
    }

    render() {
        return (
            <React.Fragment>
                <Prompt
                    when={this.checkIfUnsavedChanges()}
                    message={_ => 'You have unsaved changes. Are you sure you want to leave this page?'}
                />
                <form onSubmit={this.handleSubmit} >
                    {Object.keys(this.state.item).map(key => {
                        if (key === 'id') return null;
                        return <Input value={this.state.item[key]}
                            placeholder={capitalizeFirstLetter(key)}
                            label={key}
                            key={key}
                            onChange={this.handleValueChange} />
                    })}
                    <div className="validation-error">
                        {this.state.isTriedSubmit && !this.state.isFormValid ? `${required.join(', ')} are required!` : ''}
                    </div>
                    <Button onClick={this.handleSubmit}
                        label={<FaSave />}
                        type="submit" />
                </form>
            </React.Fragment>
        );
    }
}

export default withRouter(PortfolioForm);