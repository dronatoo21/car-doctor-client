import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className='py-12'>
            <div className="hero bg-base-200 h-[500px]">
              <div className="hero-content flex-col gap-10 lg:flex-row">
                <div className="lg:w-1/2 relative">
                     <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                     <img src={parts} className="w-1/2 absolute rounded-lg top-1/2 left-1/2 border-8 border-white" />
                </div>
                <div>
                    <h1 className='text-3xl font-bold mb-4'>About us</h1>
                  <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                  <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                  <p className='pb-6'>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                  <button className="btn btn-primary">Get more info</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default About;