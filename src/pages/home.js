import React from "react";
import moment from 'moment';
import Header from './Header';
class Home extends React.Component {
    
    constructor() {
        super();
        this.state = {
            articles:null,
            featured_articles:null,
            category:null
        }
    }
    componentDidMount(){
        fetch('http://127.0.0.1:8000/api/articles').then((resp)=>{
            resp.json().then((result)=>{
                //console.warn(result.data)
                this.setState({articles:result})
            })
        })

        fetch('http://127.0.0.1:8000/api/featured_articles').then((response)=>{
            response.json().then((result2)=>{
                //console.warn(result2.data)
                this.setState({featured_articles:result2})
            })
        })


        fetch('http://127.0.0.1:8000/api/categories').then((cat_response)=>{
            cat_response.json().then((category_result)=>{
                this.setState({category:category_result})
            })
        })
    }
    render(){
       return( <div>
      {/*   <!-- Responsive navbar--> */}
      <Header />
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
                    {
                    this.state.featured_articles ?
        this.state.featured_articles.map((featured_item,i)=>
                    <div class="card mb-4">
                        <a href="#!"><img class="card-img-top" src={featured_item.picture} alt="..." /></a>
                        <div class="card-body">
                            <div class="small text-muted">January 1, 2021</div>
                            <h2 class="card-title">Featured Post Title</h2>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a class="btn btn-primary" href="#!">Read more ???</a>
                        </div>
                    </div>
                    )
        :
        null
    }
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
            <div class="small text-muted">{moment(item.created_at).format("YYYY-MM-DD")}</div>
            <h2 class="card-title h4">{item.title}</h2>
            <p class="card-text">{item.description}</p>
            <a class="btn btn-primary" href="#">Read more ???</a>
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