import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
const TeamCard = ({ img, name }) => {
    return (
        <div className="card shadow my-5" style={{ backgroundColor: '#FFF', border: 'none', margin: '0 15px', width: '18rem', height: '24rem', borderRadius: '10px' }}>
            <img src={img} className="card-img-top" alt="Team Member" style={{ height: '15rem', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
                <p style={{ opacity: 0.7 }}>Profession</p>
                <div className="d-flex justify-content-evenly align-items-center" style={{ color: '#96BB7C', fontSize: '1.5rem' }}>
                    <i className="bi bi-facebook"></i>
                    <i className="bi bi-instagram"></i>
                    <i className="bi bi-twitter"></i>
                </div>
            </div>
        </div>
    );
};


const PrevArrow = ({ onClick }) => (
    <div className="slick-prev-arrow" onClick={onClick} style={{ fontSize: '2.5rem', color: '#96BB7C', cursor: 'pointer', position: 'absolute', left: '-40px',top:'50%' }}>
        <BiChevronLeft />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div className="slick-next-arrow" onClick={onClick} style={{ fontSize: '2.5rem', color: '#96BB7C', cursor: 'pointer', position: 'absolute', right: '-40px' ,top:'50%'}}>
        <BiChevronRight />
    </div>
);

const teamMembers = [
    { img: 'https://newprofilepic.photo-cdn.net//assets/images/article/profile.jpg?90af0c8', name: 'John Doe' },
    { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3flIHsvZtK3eU7tEnp-LSEjNznTZCn0dkcA&s', name: 'Mickle' },
    { img: 'https://easy-peasy.ai/cdn-cgi/image/quality=80,format=auto,width=700/https://fdczvxmwwjwpwbeeqcth.supabase.co/storage/v1/object/public/images/f8239007-7d36-45ce-a0a1-fdf91052b10e/299f5e14-73c4-4a9b-99c9-e44adbc218cf.png', name: 'Mic' },
    { img: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Alex' },
    { img: 'https://randomuser.me/api/portraits/women/44.jpg', name: 'Sophie' },
    { img: 'https://randomuser.me/api/portraits/men/24.jpg', name: 'Tom' },
];

const Team = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <section className="team d-flex align-items-center py-5" style={{ height: '100vh', backgroundColor: "#fff" }}>
            <div className="container">
                <div className="row mt-5 align-items-center">
                    <div className="col-sm-12 ">
                        <h5 className="px-5" style={{ margin: '20px auto', color: '#FEBC94' }}>Team</h5>
                        <h3 className="px-5 mb-3">Get Quality Education</h3>
                        <h6 className="px-5 mb-5 w-75" style={{ maxWidth: '600px', opacity: 0.7 }}>
                            Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                        </h6>
                    </div>
                    <div className="col-12 position-relative p-5">
                        <Slider {...settings}>
                            {teamMembers.map((team, index) => (
                                <div key={index} style={{ padding: '10px' }}>
                                    <TeamCard img={team.img} name={team.name} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
