// import p1 from "../../assets/Images/UserProfiles/p1.png";
// import p2 from "../../assets/Images/UserProfiles/p2.png";
// import p3 from "../../assets/Images/UserProfiles/p3.png";
// import p4 from "../../assets/Images/UserProfiles/p4.png";
// import p5 from "../../assets/Images/UserProfiles/p5.png";
// import SidebarComponent from "./SidebarComponent";
// import { Principal } from "@dfinity/principal";
// import React, { useEffect, useState } from "react";
// import one from "../../assets/Images/UserProfiles/one.png";
// import { DDate_backend } from "../../../declarations/DDate_backend/index";

// // import { DDate_backend } from "../../../declarations/DDate_backend/index";
// // 1. algo needs to run..   //  find_match_for_me

// // 2. array needs to be returned   // get_matched_profile

// const Swipe = () => {
//   const principalString = localStorage.getItem("id");

//   const [matchedProfiles, setMatchedProfiles] = useState([]);

//   const [swipeProfiles, setSwipeProfiles] = useState([]);

//   console.log("profiles are being returned overhere!", matchedProfiles);

//   console.log("aha array aa jehra profiles sambhi betha", swipeProfiles);

//   const handleDislike = () => {
//     console.log("Dislike button is clicked");
//     // setCurrentIndex(prevIndex => (prevIndex + 1) % swipeProfiles.length);
//   };

//   const handleLike = () => {
//     console.log("Like button is clicked");
//     // setCurrentIndex(prevIndex => (prevIndex + 1) % swipeProfiles.length);
//   };

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const currentProfile = swipeProfiles[currentIndex];

//   // if (swipeProfiles.length === 0) {
//   //   return <div>No profiles available.</div>;
//   // }

//   function convertStringToPrincipal(principalString) {
//     try {
//       const principal = Principal.fromText(principalString);
//       console.log("Converted Principal: ", principal.toText());
//       return principal;
//     } catch (error) {
//       console.error("Error converting string to Principal: ", error);
//       return null;
//     }
//   }

//   const principal = convertStringToPrincipal(principalString); //principal

//   console.log("pri =>", principal);

//   // DDate_backend.find_match_for_me(principal);

//   const findMatchesForMe = async (principal) => {
//     try {
//       await DDate_backend.find_matches_for_me(principal);
//       console.log("find_matches_for_me called successfully");

//       getMatchedProfiles(principal);
//       // Additional code to handle after calling the function
//     } catch (error) {
//       console.error("Error calling find_matches_for_me:", error);
//     }
//   };

//   // const handleFindMatches = () => {
//   //   // Assuming you have the principal available
//   //   findMatchesForMe(principal);
//   // };

//   useEffect(() => {
//     console.log("outside useEffect!!!")
//     if (principal) {
//       findMatchesForMe(principal);
//       console.log("useEffect is getting called");
//     }
//   }, []);

//   const fetchUserProfile = async (principal) => {
//     try {
//       const userProfile = await DDate_backend.get_profile(principal);
//       return userProfile;
//     } catch (error) {
//       console.error("Error fetching user profile for principal:", principal, error);
//       return null; // or you can return a default user profile structure
//     }
//   };

//   const fetchAllUserProfiles = async (principals) => {
//     try {
//       const profilesPromises = principals.map(principal => fetchUserProfile(principal));
//       const profiles = await Promise.all(profilesPromises);
//       //setMatchedProfiles(profiles.filter(profile => profile !== null)); // Update state with non-null profiles
//       setSwipeProfiles(profiles.filter(profile => profile !== null));
//     } catch (error) {
//       console.error("Error fetching all user profiles:", error);
//     }
//   };

//   useEffect(() => {
//     if (matchedProfiles.length > 0) {
//       fetchAllUserProfiles(matchedProfiles);
//     }
//   }, [matchedProfiles]);

//   // console.log("find_match_for_me will find match for you");

//   // DDate_backend.get_matched_profiles(principal);

//   const getMatchedProfiles = async (principal) => {
//     try {
//       const matchedProfiles = await DDate_backend.get_matched_profiles(principal);
//       if (matchedProfiles.length === 0) {
//         console.log("No matches found.");

//       } else {
//         console.log("Matched Profiles:", matchedProfiles);
//         setMatchedProfiles(matchedProfiles);
//         // You can set the matched profiles to a state or use them as needed
//       }
//     } catch (error) {
//       console.error("Error fetching matched profiles:", error);
//     }
//   };

//   console.log("")

//   const [formData, setFormData] = useState({
//     selectedintrests: "",
//     selectedpreferAge: "",
//     selectedLocation: "",
//     selectedPrefferedLocation: "",
//     selectedIntro: "",
//   });

//   // const getData=DDate_backend.get_profile(principal)

//   //  get_matched_profile  -> Array

//   const userData = {
//     name: "Elena Gilbert",
//     pronouns: "she/her",
//     jobTitle: "Artist",
//     joinDate: "10th Dec 2020",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
//   };

//   const photos = [p1, p2, p3, p4, p5];

//   return (
//     <div className="h-screen grid grid-cols-12">
//       <div className="col-span-3">
//         <SidebarComponent />
//       </div>

//       <div className="col-span-9 flex flex-col justify-center items-center">
//   <div className="bg-white shadow-lg rounded-fully h-screen w-98 flex justify-center items-center  mx-auto relative">
//     {/* Display currentProfile details here */}
//   </div>

//       {swipeProfiles.map(profile => (

//       <div className="col-span-9 flex flex-col justify-center items-center">
//         <div className="bg-white shadow-lg rounded-fully h-screen w-98 flex justify-center items-center  mx-auto relative">
//           {/* <img
//             src={one}
//             alt="Profile"
//             className="rounded-lg object-cover h-full w-full"
//           /> */}

//         {/* <div> */}
//           {profile.images.map((image, index) => (
//             <>
//             {console.log("image passed to src is ", image)}
//             <img key={index} src={image} alt={`${profile.name}'s profile`} />
//             </>
//           ))}
//         {/* </div> */}

//           <div className="flex justify-center flex-start mt-4 gap-4 absolute ml-4 cursor-pointer bottom-1 left-1">

//             <button onClick={handleDislike}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="48"
//               height="48"
//               viewBox="0 0 63 63"
//               fill="none"
//             >
//               <circle cx="31.275" cy="31.275" r="31.275" fill="#E13131" />
//               <path
//                 d="M41.6356 44.7888L30.897 34.0402L20.1584 44.7888L17.7607 42.3927L28.5162 31.661L17.7607 20.9293L20.1584 18.5332L30.897 29.2818L41.6356 18.5501L44.0163 20.9293L33.2777 31.661L44.0163 42.3927L41.6356 44.7888Z"
//                 fill="black"
//               />
//             </svg></button>

//             <button onClick={handleLike}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="48"
//               height="48"
//               viewBox="0 0 63 63"
//               fill="none"
//             >
//               <circle cx="31.7242" cy="31.275" r="31.275" fill="#3FB844" />
//               <path
//                 d="M26.7715 44.7888L14.3496 32.3433L17.4551 29.2319L26.7715 38.566L46.7664 18.5332L49.8718 21.6446L26.7715 44.7888Z"
//                 fill="#ECECEC"
//               />
//             </svg>
//             </button>
//           </div>
//           <div className="mt-4 ml-4 absolute bottom-16 left-0 text-white">
//             <h2 className="text-4xl font-bold text-gray-400">
//               {/* {userData.name} */}
//               {profile.name}
//             </h2>
//             {/* <p className="text-lg text-gray-700 font-bold ">
//               {userData.jobTitle} - Since {userData.joinDate}
//             </p> */}

//             <p className="text-lg text-gray-700 font-bold ">
//             {profile.dob}
//             </p>

//               <p className="text-lg text-gray-700 font-bold ">
//               <div key={profile.id}>{profile.location}</div>
//               </p>

//             {/* <p className="text-lg text-gray-700 font-bold ">
//               {userData.jobTitle} - Since {userData.joinDate}
//             </p> */}

//             <p className="mt-2 font-bold">{userData.bio}</p>
//           </div>
//         </div>

//       </div>
//        ))}

// </div>
//     </div>

//   );
// };

// export default Swipe;

import React, { useState, useMemo, useRef, useEffect } from "react";
import ProfileModal from "./ProfileModal";
import TinderCard from "react-tinder-card";
import SidebarComponent from "./SidebarComponent"; // Importing SidebarComponent
import "./Swipe.css";
import { Principal } from "@dfinity/principal";
import { DDate_backend } from "../../../declarations/DDate_backend/index";
import NoMatchModal from "./NoMatchModal";
// const db = [
//   {
//     name: "Richard Hendricks",
//     url: "./img/richard.jpg",
//   },
//   {
//     name: "Erlich Bachman",
//     url: "./img/erlich.jpg",
//   },4444444444444444444444444444
//   {
//     name: "Monica Hall",
//     url: "./img/monica.jpg",
//   },
//   {
//     name: "Jared Dunn",
//     url: "./img/jared.jpg",
//   },
//   {
//     name: "Dinesh Chugtai",
//     url: "./img/dinesh.jpg",
//   },
// ];



// const principalString = localStorage.getItem("id");



function Swipe() {


  // const principalString = "tc7cw-ilo2x-rwqep-gohde-puqog-soeyv-szxvv-ybcgw-lbrkl-sm7ab-wae";

  const principalString = localStorage.getItem("id");

  console.log("this is principal strinng", principalString);

  const [pToLike, setPToLike] = useState('');

  const [matchedProfiles, setMatchedProfiles] = useState([]); //principals

  const [db, setSwipeProfiles] = useState([]); // profiles


  console.log("profiles are being returned overhere!", matchedProfiles);

  console.log("aha array aa jehra profiles sambhi betha", db);

  const handleDislike = () => {
    console.log("Dislike button is clicked");
    // setCurrentIndex(prevIndex => (prevIndex + 1) % swipeProfiles.length);
  };

  const handleLike = () => {
    console.log("Like button is clicked");
    // setCurrentIndex(prevIndex => (prevIndex + 1) % swipeProfiles.length);
  };

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const currentProfile = swipeProfiles[currentIndex];

  // if (swipeProfiles.length === 0) {
  //   return <div>No profiles available.</div>;
  // }

  function convertStringToPrincipal(principalString) {
    console.log("conversion principal is being called");
    try {
      const principal = Principal.fromText(principalString);
      console.log("Converted Principal: ", principal.toText());
      return principal;
    } catch (error) {
      console.error("Error converting string to Principal: ", error);
      return null;
    }
  }

  const principal = convertStringToPrincipal(principalString); //principal

  console.log("pri =>", principal);

  // DDate_backend.find_match_for_me(principal);

  const findMatchesForMe = async (principal) => {
    try {
      await DDate_backend.find_matches_for_me(principal);
      console.log("find_matches_for_me called successfully");

      getMatchedProfiles(principal);
      // Additional code to handle after calling the function
    } catch (error) {
      console.error("Error calling find_matches_for_me:", error);
    }
  };

  // const handleFindMatches = () => {
  //   // Assuming you have the principal available
  //   findMatchesForMe(principal);
  // };

  useEffect(() => {
    console.log("outside useEffect!!!")
    if (principal) {
      findMatchesForMe(principal);
      console.log("useEffect is getting called");
    }
  }, []);

  const fetchUserProfile = async (principal) => {
    try {
      const userProfile = await DDate_backend.get_profile(principal);
      return userProfile;
    } catch (error) {
      console.error("Error fetching user profile for principal:", principal, error);
      return null; // or you can return a default user profile structure
    }
  };

  const fetchAllUserProfiles = async (principals) => {
    try {
      const profilesPromises = principals.map(principal => fetchUserProfile(principal));
      const profiles = await Promise.all(profilesPromises);
      //setMatchedProfiles(profiles.filter(profile => profile !== null)); // Update state with non-null profiles
      setSwipeProfiles(profiles.filter(profile => profile !== null));
    } catch (error) {
      console.error("Error fetching all user profiles:", error);
    }
  };

  useEffect(() => {
    if (matchedProfiles.length > 0) {
      fetchAllUserProfiles(matchedProfiles);
    }
  }, [matchedProfiles]);

  // console.log("find_match_for_me will find match for you");

  // DDate_backend.get_matched_profiles(principal);

  const [noMatch, setNoMatch] = useState(false);

  function closeKrna() {
    setNoMatch(false)
  }

  const getMatchedProfiles = async (principal) => {
    try {
      const matchedProfiles = await DDate_backend.get_matched_profiles(principal);
      if (matchedProfiles.length === 0) {
        console.log("No matches found.");
        setNoMatch(true);

      } else {
        console.log("Matched Profiles:", matchedProfiles);
        setMatchedProfiles(matchedProfiles); //array
        // You can set the matched profiles to a state or use them as needed
      }
    } catch (error) {
      console.error("Error fetching matched profiles:", error);
    }
  };

  useEffect(() => {
    setCurrentIndex(db.length - 1);
  }, [db]);



  console.log("length of data base", db.length);
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  // used for outOfFrame closure
  const currentIndexRef = useRef(currentIndex);

  // const childRefs = useMemo(
  //   () =>
  //     Array(db.length)
  //       .fill(0)
  //       .map((i) => React.createRef()),
  //   []
  // );

  const childRefs = useMemo(() => {
    return Array(db.length).fill(0).map(() => React.createRef());
  }, [db.length]);

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canSwipe = currentIndex >= 0;

  // State to hold the selected ID
  const [selectedId, setSelectedId] = useState(null);
  console.log("selected idd dekhde aa ke milda", selectedId);

  //const



  const [indexxx, setIndexxx] = useState();


  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {

    setSelectedId(db[index].id);

    setIndexxx(index);

    console.log("Swipedddd is called !!!!!!!!!!!!!!!!!!!!")

    // likeAndItsAMatch();
    // console.log("Like button is clicked");
    // console.log("principal jehra pas kna ", principal);

    // console.log("Selected id ", selectedId);

    // const isMatch = DDate_backend.check_user_match(principal, selectedId);

    // console.log("isMatch", isMatch)
    // if (isMatch) {
    //   console.log('Its a match');
    // } else {
    //   console.log('You have liked the profile but match could not be made');
    // }


    setLastDirection(direction);

    updateCurrentIndex(index - 1);
  };




  const [match, setMatch] = useState(false);

  // Define the checkMatch function
  const checkMatch = async (id) => {
    console.log("Checking match for selected ID:", id);

    // Assuming DDate_backend.check_user_match is an async function
    try {
      const isMatch = await DDate_backend.check_user_match(principal, id);
      if (isMatch) {
        console.log('It\'s a match response from backend!!!! !!!! !!!! !!!!');
        setMatch(true);

      } else {
        console.log('You have liked the profile, but a match could not be made! ! !');
      }
    } catch (error) {
      console.error("Error in checking match:", error);
    }
  };

  useEffect(() => {
    if (selectedId !== null) {

      checkMatch(selectedId);
      // You can now perform actions that depend on the updated value of selectedId
      // Example:
      // const isMatch = await DDate_backend.check_user_match(principal, selectedId);
      // if (isMatch) {
      //   console.log('Its a match');
      // } else {
      //   console.log('You have liked the profile but match could not be made');
      // }
    }
  }, [selectedId]);


  console.log("swiped profile has this principal", selectedId);


  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
    // TODO: when quickly swipe and restore multiple times the same card,
    // it happens multiple outOfFrame events are queued and the card disappear
    // during latest swipes. Only the last outOfFrame event should be considered valid
  };

  // const swipe = async (dir) => {
  //   {console.log("Swipe is clicked", dir)}
  //   {console.log("canSwipe",canSwipe)}
  //     {console.log("currentIndex"+currentIndex)}
  //   if (canSwipe && currentIndex < db.length) {
  //     {console.log("canSwipe",canSwipe)}
  //     {console.log("currentIndex"+currentIndex)}
  //     {console.log("currentIndex"+currentIndex)}
  //     await childRefs[currentIndex].current.swipe(dir); // Swipe the card!
  //   }
  // };
  // const swipe = async (dir) => {
  //   if (canSwipe && currentIndex >= 0 && currentIndex < db.length) {
  //     const cardRef = childRefs[currentIndex];
  //     if (cardRef && cardRef.current) {
  //       await cardRef.current.swipe(dir); // Swipe the card!
  //     } else {
  //       console.error("Invalid card reference:", currentIndex);
  //     }
  //   }
  // };

  const swipe = async (dir) => {
    console.log("Attempting to swipe:", dir);
    console.log("Current index:", currentIndex);
    console.log("DB length:", db.length);
    console.log("ChildRefs length:", childRefs.length);

    if (canSwipe && currentIndex >= 0 && currentIndex < db.length) {
      const cardRef = childRefs[currentIndex];
      if (cardRef && cardRef.current) {
        console.log("Swiping card with index:", currentIndex);
        await cardRef.current.swipe(dir); // Swipe the card!
      } else {
        console.error("Invalid card reference at index:", currentIndex);
      }
    } else {
      console.error("Cannot swipe. Index or db length issue.");
    }

    if (dir == 'right') {

    }
  };

  // {console.log("Princiapl to like state" +pToLike)}
  const handleCloseModal = () => {
    setMatch(false);
    //setMatchedProfile(null);
  };

  return (
    <div className="h-screen grid grid-cols-12">
      {/* Sidebar */}
      <div className="col-span-3">
        <SidebarComponent />
      </div>

      {/* Main Content */}
      <div className="col-span-9 flex flex-col justify-center items-center">
        {/* Title */}
        {/* <h1>React Tinder Card</h1> */}

        {/* Card Container */}
        <div className="bg-white shadow-lg rounded-fully h-screen w-98 flex justify-center items-center mx-auto relative">
          {db.map((character, index) => (
            <TinderCard
              ref={childRefs[index]}
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name, index)}
              onCardLeftScreen={() => outOfFrame(character.name, index)}
            >
              <div
                style={{ backgroundImage: "url(" + character.images[0] + ")" }}
                className="card"
              >

                <div className="flex justify-center flex-start mt-4 gap-4 absolute ml-4 cursor-pointer bottom-1 left-1">
                  <button onClick={() => swipe("left")}> <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 63 63"
                    fill="none"
                  >
                    <circle cx="31.275" cy="31.275" r="31.275" fill="#E13131" />
                    <path
                      d="M41.6356 44.7888L30.897 34.0402L20.1584 44.7888L17.7607 42.3927L28.5162 31.661L17.7607 20.9293L20.1584 18.5332L30.897 29.2818L41.6356 18.5501L44.0163 20.9293L33.2777 31.661L44.0163 42.3927L41.6356 44.7888Z"
                      fill="black"
                    />
                  </svg></button>
                  <button onClick={() => swipe("right")}>  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 63 63"
                    fill="none"
                  >
                    <circle cx="31.7242" cy="31.275" r="31.275" fill="#3FB844" />
                    <path
                      d="M26.7715 44.7888L14.3496 32.3433L17.4551 29.2319L26.7715 38.566L46.7664 18.5332L49.8718 21.6446L26.7715 44.7888Z"
                      fill="#ECECEC"
                    />
                  </svg></button>
                </div>

                <div className="mt-4 ml-4 absolute bottom-16 left-0 text-white">
                  {/* <img src={character.images[0]}></img> */}
                  {/* <h2 className="text-4xl font-bold text-white">{character.name}</h2> */}
                  
                  <h2 className="text-4xl font-bold text-gradient-to-b from-[#DB7D11] to-[#6B3018]">{character.name}</h2>
                  <p className="text-lg text-gray-700 font-bold ">{character.location}</p>
                  {/* <h4>{character.id}</h4> */}
                  {console.log(character.id)}
                  {console.log(character.location)}
                  {console.log(character.images[0])}
                  <p className="mt-2 font-bold text-white">{character.introduction}</p>
                  {/* {setPToLike(character.id)} */}</div>






              </div>
              {match && (
                <ProfileModal profile={db[indexxx]} indexxx={indexxx} onClose={handleCloseModal} />
              )}
            </TinderCard>

          ))}
        </div>
      </div>
    </div>
  );
}

export default Swipe;
