import React, { useState, useRef } from 'react'
import Languages from './Languages/Languages'
import Slider from 'react-slick'
import { projects } from './projectsData'
import './RealDes.scss'

function SampleNextArrow({ slider }) {
    return (
        <button className="slick-arrow slick-next" onClick={() => slider?.current?.slickNext()}>
            <i className="fas fa-chevron-right"></i>
        </button>
    );
}

function SamplePrevArrow({ slider }) {
    return (
        <button className="slick-arrow slick-prev" onClick={() => slider?.current?.slickPrev()}>
            <i className="fas fa-chevron-left"></i>
        </button>
    );
}


const RealDes = ({ darkmode, showRealDes, setShowRealDes, title }) => {
    const slider = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow slider={slider} />,
        prevArrow: <SamplePrevArrow slider={slider} />,
        draggable: true,
    };

    const [displayImage, setDisplayImage] = useState("none")
    const [imageClicked, setImageClicked] = useState("")
    const ScaleImage = (src) => {
        setImageClicked(src)
        setDisplayImage("flex")
    }

    const ClosePicture = () => {
        setImageClicked("")
        setDisplayImage("none")
    }
    const returnReal = () => {
        setShowRealDes("0")
        let slide = document.getElementsByClassName('slide');
        for (let i = 0; i < slide.length; i++) {
            slide[i].style.transform = 'scale(1)';
        }
    }

    const project = projects.find(p => p.key === title);
    if (!project) return null;

    return (
        <div className={`realDes${showRealDes !== "0" ? " open" : ""}`}
            style={{
                transform: "scale(" + showRealDes + ")",
                backgroundColor: (darkmode ? "#1c1d1f" : "white"),
                color: (darkmode ? "white" : "black")
            }}
            onClick={e => e.stopPropagation()}
        >
            <h2 className="title-real-des">{project.title}</h2>
            {project.video ? (
                <div className="slider-real-des">
                    <video autoPlay loop muted>
                        <source src={project.video} type="video/mp4" />
                    </video>
                </div>
            ) : project.slides && project.slides.length > 1 ? (
                <div className="slider-real-des">
                    <Slider ref={slider} {...settings}>
                        {project.slides.map((slide, idx) => (
                            <img className="slide" src={slide.img} alt={slide.alt} key={idx} onClick={() => ScaleImage(slide.img)} />
                        ))}
                    </Slider>
                </div>
            ) : (
                <div className="img-real-des">
                    <img className="slide" src={project.slides[0].img} alt={project.slides[0].alt} onClick={() => ScaleImage(project.slides[0].img)} />
                </div>
            )}
            <div className="real-des">
                {Array.isArray(project.description)
                    ? project.description.map((line, i) => <p className="description" key={i}>{line}</p>)
                    : <p className="description">{project.description}</p>
                }
            </div>
            <div className="usage-technos">
                <p className="usage-title">Langages ou technos utilisés</p>
                <div className="technos">
                    {project.technos.map((tech, idx) => (
                        <Languages key={tech.name + idx} techno={tech.name} percentage={tech.percentage} />
                    ))}
                </div>
            </div>
            <div className="return-real">
                <button
                    className="rereal"
                    onClick={returnReal}
                    aria-label="Fermer la fiche projet"
                    tabIndex={0}
                    type="button"
                >
                    Retour
                </button>
            </div>
            <div className="big-picture" style={{ display: displayImage }}>
                <img src={imageClicked} alt="big" id="big-picture" onClick={ClosePicture} />
                <p className="cross-picture" onClick={ClosePicture}>X</p>
            </div>
        </div>
    )
}

export default RealDes
