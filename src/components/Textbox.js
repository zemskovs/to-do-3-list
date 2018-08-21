import React from 'react';

export class Textbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'term': '',
            'day': 'Today'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e) {
        this.setState({
            'term': e.target.value
        })
    }

    handleSelect(event) {
        this.setState({
            'day': event.target.value
        })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.updateEntry(this.state.term, this.state.day)
        this.setState({
            'term': ''
        })
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="form">
                    <fieldset className="form-group form-warning">
                        <label htmlFor="day">День: </label>
                        <select value={this.state.day} id="day" onChange={this.handleSelect} className="form-control" >
                            <option value="Today">Сегодня</option>
                            <option value="Tomorrow">Завтра</option>
                            <option value="Day_After_Tomorrow">Послезавтра</option>
                        </select>
                    </fieldset>
                    <fieldset className="form-group form-warning">
                        <label>Цель</label>
                        <input type="text" id="aim" value={this.state.term} placeholder='напишите, что хотите сделать' onChange={this.handleChange} className="form-control" />
                    </fieldset>
                    <button className="btn btn-warning btn-ghost">Я сделаю это.</button>
                </form>
            </div>
        )
    }
}