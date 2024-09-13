/* import React, { useEffect, useState } from "react";

const ImageCarousel = () => {
  const url = "https://reqres.in/api/users";
  const [data, setData] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const userData = await response.json();
      setData(userData.data);

      const avatars = userData.data.map((user) => user.avatar);
      setProfiles(avatars);
    };
    fetchData();
  }, []);

  const prevImage = () => {
    setCurrent((curr) => (curr === 0 ? profiles.length - 1 : curr - 1));
    console.log(current);
    
  };

  const nextImage = () => {
    setCurrent((curr) => (curr === profiles.length - 1 ? 0 : curr + 1));
    console.log(current);

  };
  


  return (
    <div className="m-5">
      <h1 className="text-primary">Image Carousel</h1>
      <div className="w-25 m-5">
        <img src={profiles[current]} />
      </div>

      <div className="m-5 w-25">
        <button onClick={prevImage} className="btn btn-warning btn-sm">Previous</button>
        <button onClick={nextImage} className="btn btn-primary btn-sm">Next</button>
      </div>
    </div>
  );
};

export default ImageCarousel;
 */


import React, { useEffect, useState } from "react";

const ImageCarousel = () => {
  const url = "https://reqres.in/api/users";
  const [profiles, setProfiles] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const userData = await response.json();

      // Extract the avatars and set them in profiles state
      const avatars = userData.data.map((user) => user.avatar);
      setProfiles(avatars);
    };
    fetchData();
  }, []); // Empty dependency array ensures data is fetched only once

  // Handle previous image
  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? profiles.length - 1 : prev - 1));
    console.log(current);
    
  };

  // Handle next image
  const nextImage = () => {
    setCurrent((next) => (next === profiles.length - 1 ? 0 : next + 1));

    console.log(current);
    
  };

  return (
    <div className="m-5">
      <h1 className="text-primary">Image Carousel</h1>

      {/* Render the current image */}
      <div className="w-25 m-5">
        {profiles.length > 0 ? (
          <img
            src={profiles[current]}
            alt={`Profile ${current}`}
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="m-5 w-25">
        <button onClick={prevImage} className="btn btn-warning btn-sm">
          Previous
        </button>
        <button onClick={nextImage} className="btn btn-primary btn-sm">
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
