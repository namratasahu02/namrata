import { Link } from "react-router-dom";
const Topmenu=()=>
{
    return( <>
<nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarTogglerDemo01"
      aria-controls="navbarTogglerDemo01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>
    <div class="collapse navbar-collapse bg=light" id="navbarTogglerDemo01" >
      <a class="navbar-brand" href="#">Ice Cream</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
          <Link to="/Home" class="nav-link ">Home</Link>
        </li>
        
        
        <li class="nav-item">
        
          <Link to="/Product" class="nav-link">Product</Link> 
        </li>
       
        <li class="nav-item">
     
          <Link to="/About" class="nav-link">About</Link> 
        </li>
        <li class="nav-item">
       
          
          <Link to="/Contact" class="nav-link">Contact</Link> 
        </li>
        
      </ul>
      <form class="d-flex input-group w-auto">
        <input
          type="search"
          class="form-control"
          placeholder="Type "
          aria-label="Search"
        />
        <button
          class="btn btn-outline-primary"
          type="button"
          data-mdb-ripple-color="dark"
        >
          Search
        </button>
      </form>
    </div>
  </div>
</nav>


</>
    );
}
export default Topmenu;