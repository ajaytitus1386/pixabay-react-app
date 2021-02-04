import React, { Component } from 'react'

export class imageTag extends Component {
    state = {
        tags : []
    }

    render() {
        return (
            <div>
                {this.props.tags.map(tag => (
                    <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        #{tag.trim()}
                    </span>
                ))}
                
            </div>
        )
    }
}

export default imageTag
