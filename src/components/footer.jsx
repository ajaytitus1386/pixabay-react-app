import React, { Component } from 'react'

export default class footer extends Component {
    render() {
        return (
            <div className="container p-5 w-full h-auto bg-gray-800">
            
                <div className="footer">
                <div>
                        <p className="text-white">Copyright &copy; 2021 All Rights Reserved By Bolde </p>
                </div>
                <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center">
                    <button onClick={this.toggleDarkMode}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.292 4.113-9.612 9.315-9.965-3.205 2.154-5.315 5.813-5.315 9.965s2.11 7.811 5.315 9.965c-5.202-.353-9.315-4.673-9.315-9.965z"/></svg>
                    </button>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                <div className="flex flex-row-reverse">

                    <ul className="social-icons flex flex-row space-x-2 ">
                        <li><a className="facebook bg-gray-500 hover:bg-blue-600 transition duration-500 ease-in-out rounded-full w-10 h-10 flex items-center justify-center" href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i className="fa fa-facebook"></i></a></li>
                        <li><a className="twitter  bg-gray-500 hover:bg-blue-400 transition duration-500 ease-in-out rounded-full w-10 h-10 flex items-center justify-center" href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><i className="fa fa-twitter"></i></a></li>
                        <li><a className="linkedin  bg-gray-500 hover:bg-yellow-600 transition duration-500 ease-in-out rounded-full w-10 h-10 flex items-center justify-center" href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></li>   
                        <li><a className="instagram  bg-gray-500 hover:bg-purple-800 transition duration-500 ease-in-out rounded-full w-10 h-10 flex items-center justify-center" href="https://www.instagram.com/" target="_blank" rel="noreferrer"><i className="fa fa-instagram"></i></a></li>   

                    </ul>
                </div>
                </div>
            </div>
        )
    }

    toggleDarkMode(){
        let parent = document.getElementById("parent");
        if(parent.classList.contains("dark")){
            parent.classList.remove("dark");
        }
        else{
            parent.classList.add("dark");
        }
    }
}
