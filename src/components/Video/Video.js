import axios from "axios";
import React, { useEffect, useState } from "react";
import APIKEY from "../ApiKey";
import Slider from "react-slick";

const Video = ({ id }) => {
  const [video, setVideo] = useState([]);
  const getVideo = async (id, key) => {
    const res = await axios(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`
    );
    setVideo(res.data.results);
  };

  useEffect(() => {
    getVideo(id, APIKEY);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div id="video">
      <div className="container">
        <Slider {...settings}>
          {video.map((el) => (
            <div>
              <div className="video">
                <iframe
                  width="270"
                  height="170"
                  src={`https://www.youtube.com/embed/${el.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Video;
