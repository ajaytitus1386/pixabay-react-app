import React, { Component } from 'react';
import ImageTag from './imageTag.jsx'

export class imageCard extends Component {
    state = {
        ids : [1,2],
        tags: ["janky"],
        count : 0
    }

    constructor(){
        super();
        this.splitTags = this.splitTags.bind(this);
        this.getKey = this.getKey.bind(this);
    }

    render() {
        return (
            <div className="">
                <div className="max-w-sm rounded overflow-hidden shadow-2xl dark:bg-gray-800 dark:hover:bg-gray-700 bg-gray-100 hover:bg-gray-300 transition duration-500 ease-in-out">
                    <a href={this.props.image.pageURL} className="" target="_blank" rel="noreferrer">
                        <img src={this.props.image.webformatURL} alt="" className="w-full"/>
                    </a>
                    
                    <div className="px-6 py-4">
                        <div className="font-bold dark:text-blue-500 text-blue-800 text-xl mb-2">
                        Photo Credits : {this.props.image.user}
                        </div>
                        <ul className="dark:text-white">
                        <li>
                            <strong>Views 👁:</strong> {this.props.image.views}
                        </li>
                        <li>
                            <strong>Downloads 📁:</strong> {this.props.image.downloads}
                        </li>
                        <li>
                            <strong>Thumbs 👍:</strong> {this.props.image.likes}
                        </li>
                        </ul>
                    </div>

                    <div className="px-6 py-4 flex flex-row dark:text-gray-400">
                            {
                                this.state.tags.map(tag => (<ImageTag key={this.props.image.id} tags={this.props.image.tags.split(",")}/>))
                            }
                    </div>
      
                </div>
            </div>
        )
    }

    getKey = () => {
        this.setState({ count : this.state.count + 1})
        console.log(this.state.key);
        return this.state.count;
    }
    splitTags() {
        //console.log(this.props.image.tags.split(","))
        //this.setState({tags : this.props.image.tags.split(",")});
    }
}

export default imageCard

