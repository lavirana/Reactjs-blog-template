import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios'; 
class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            articles:null
        }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/articles').then((resp)=>{
            resp.json().then((result)=>{
                //console.warn(result.data)
                this.setState({articles:result})
            })
        })
    }
    render(){
       return( <div>
      {/*   <!-- Responsive navbar--> */}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{borderBottom: `1px solid #fff`}}>
            <div class="container">
                <a class="navbar-brand" href="#!">MY WORLD</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#!">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        {/* <!-- Page header with logo and tagline--> */}
        <header class="py-5 bg-light border-bottom mb-4" style={{ 
      backgroundImage: `url("maxresdefault.jpg")` 
    }} >
            <div class="container">
                <div class="text-center my-5">
                    <h1 class="fw-bolder" style={{textShadow: `25px 0px 25px white`}}>Welcome to My World!</h1>
                    <p class="lead mb-0"></p>
                </div>
            </div>
        </header>
        {/* <!-- Page content--> */}
        <div class="container">
            <div class="row">
                {/* <!-- Blog entries--> */}
                <div class="col-md-9">
                    {/* <!-- Featured blog post--> */}
                    <div class="card mb-4">
                        <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                        <div class="card-body">
                            <div class="small text-muted">January 1, 2021</div>
                            <h2 class="card-title">Featured Post Title</h2>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a class="btn btn-primary" href="#!">Read more →</a>
                        </div>
                    </div>
                   {/*  <!-- Nested row for non-featured blog posts--> */}
                
                    <div class="row">
    {

        this.state.articles ?
        this.state.articles.map((item,i)=>
    <div class="col-md-6">
        <div  style={{ border: `1px solid #dee1e6`,
        padding: `0px` }}>
        <a href="#"><img class="card-img-top" src={item.picture} alt="..." /></a>
        <div class="card-body">
            <div class="small text-muted">January 1, 2021</div>
            <h2 class="card-title h4">Post Title</h2>
            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
            <a class="btn btn-primary" href="#">Read more →</a>
        </div>
        </div>
        <br/>
    </div> 
        )
        :
        null
    }
                    
                    </div>
                    <br/>
                    {/* <!-- Pagination--> */}
                    <nav aria-label="Pagination">
                        <hr class="my-0" />
                        <ul class="pagination justify-content-center my-4">
                            <li class="page-item disabled"><a class="page-link" href="#" tabindex="-1" aria-disabled="true">Newer</a></li>
                            <li class="page-item active" aria-current="page"><a class="page-link" href="#!">1</a></li>
                            <li class="page-item"><a class="page-link" href="#!">2</a></li>
                            <li class="page-item"><a class="page-link" href="#!">3</a></li>
                            <li class="page-item disabled"><a class="page-link" href="#!">...</a></li>
                            <li class="page-item"><a class="page-link" href="#!">15</a></li>
                            <li class="page-item"><a class="page-link" href="#!">Older</a></li>
                        </ul>
                    </nav>
                </div>
                {/* <!-- Side widgets--> */}
                <div class="col-md-3">
                  {/*   <!-- Search widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                   {/*  <!-- Categories widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">Web Design</a></li>
                                        <li><a href="#!">HTML</a></li>
                                        <li><a href="#!">Freebies</a></li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul class="list-unstyled mb-0">
                                        <li><a href="#!">JavaScript</a></li>
                                        <li><a href="#!">CSS</a></li>
                                        <li><a href="#!">Tutorials</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                   {/*  <!-- Side widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Side Widget</div>
                        <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- Footer--> */}
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2021</p></div>
        </footer>
       {/*  <!-- Bootstrap core JS--> */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        {/* <!-- Core theme JS--> */}
        <script src="assets/js/scripts.js"></script>
        </div>
       );   
}
}
export default Home;