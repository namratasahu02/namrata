const Topbenner=()=>
{
    return (
        <>
       <div class="container-lg my-3">
    <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
   
        <ol class="carousel-indicators">
            <li data-bs-target="#myCarousel" data-bs-slide-to="0" class="active"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="1"></li>
            <li data-bs-target="#myCarousel" data-bs-slide-to="2"></li>
        </ol>
        
      
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="b3.jpg" class="d-block w-100" alt="Slide 1"/>
            </div>
            <div class="carousel-item">
                <img src="b2.jpg" class="d-block w-100" alt="Slide 2"/>
            </div>
            <div class="carousel-item">
                <img src="b1.jpg" class="d-block w-100" alt="Slide 3"/>
            </div>
        </div>

       
        <a class="carousel-control-prev" href="#myCarousel" data-bs-slide="prev">
            <span class="carousel-control-prev-icon"></span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" data-bs-slide="next">
            <span class="carousel-control-next-icon"></span>
        </a>
    </div>
</div>

    
</>
    );
}
export default Topbenner;
