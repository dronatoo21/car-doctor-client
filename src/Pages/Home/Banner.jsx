import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

const Banner = () => {
    return (
        <div>
            <div className="carousel h-[600px] w-full">
              <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute bg-gradient-to-r flex items-center from-[#151515] to-[rgba(21, 21, 21, 0)] left-0 top-0 h-full">
                  <div className=' text-white w-1/3 space-y-7 pl-28'>
                    <h1 className='text-5xl font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, molestiae error optio rerum harum alias consequuntur ea labore    vitae. Suscipit.</p>
                    <div>
                      <button className='btn btn-neutral mr-5'>hello</button>
                      <button className='btn btn-neutral'>guys</button>
                    </div>
                  </div>
                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
              </div> 
              <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                  <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
                  <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
              </div>
            </div>
        </div>
    );
};

export default Banner;