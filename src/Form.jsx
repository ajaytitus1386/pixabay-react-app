import React, { Component } from 'react';
import App from './App.js'

export class Form extends Component {
    state = {
        query : "",
        showForm: true
    }
    constructor(props) {
        super(props);
        this.state={
            query : null,
            showForm: true
            
        }
    }

    render() {
        const formShow = this.state.showForm ?  null : "hidden";
        const appShow = this.state.showForm ?  "hidden" : null;
        return (
            <div className="" id="parent">
            <div className="flex bg-gradient-to-r from-green-400 to-blue-500 dark:from-green-800 dark:to-blue-800 h-screen w-full justify-center items-center">
                <form onSubmit={this.hideForm} className={`flex flex-col w-72 h-72  m-auto justify-center items-center dark:bg-gray-700 dark:hover:bg-gray-600 bg-white max-w-sm rounded-lg overflow-hidden shadow-2xl space-y-8 hover:bg-gray-300 transition duration-500 ease-in-out ${formShow}`}>
                    <label className="dark:text-white">Enter a single search term!</label>
                    <input type="text" placeholder="Search For" id="query" name="query" onChange={this.queryChangeHandler} className="bg-gray-400 rounded font-black"></input>
                    <button type="submit" className=" min-w-auto w-1/4 min-h-auto h-1/8 font-semibold text-white bg-indigo-600 rounded hover:bg-indigo-800 transition duration-500 ease-in-out">Submit</button>
                </form>
                <div className={`flex overflow-scroll bg-gradient-to-r  dark:from-green-800 dark:to-blue-800 from-green-400 to-blue-500 h-screen w-screen lg:h-screen ${appShow}`}>
                    {this.goToApp(formShow)}
                </div>
            </div>
            </div>
        )
    }

    hideForm = (event) => {
        event.preventDefault()
        if(this.state.query !== null && this.state.query !== '')
        {
            this.setState({ showForm : !(this.state.showForm)});
        }
    }

    goToApp = (formShow) => {

        if(formShow === "hidden"){
            return <App queryTerm={this.state.query}/>
        }
    }

    queryChangeHandler = (event) => {
        let name = event.target.name;
        let query = event.target.value;
        this.setState({[name] : query});
    }
}

export default Form
