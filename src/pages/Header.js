import React from "react";
class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            category:null
        }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/categories').then((cat_response)=>{
            cat_response.json().then((category_result)=>{
                this.setState({category:category_result})
            })
        })
    }
    render(){
    return (
        <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderBottom: `1px solid #fff`}}>
            <div class="container">
                <a class="navbar-brand" href="#!">MY WORLD</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    {
                    this.state.category ?
        this.state.category.map((cat,i)=>
                        <li class="nav-item"><a class="nav-link" style={{color: `#fff`,fontSize: `25px`, marginright: `15px`}} href="#">{cat.name}</a></li>
                        )
                        :
                        null
                    }
                    </ul>
                </div>
            </div>
        </nav>
        </div>
    )
}
}
export default Header