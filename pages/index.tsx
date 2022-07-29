import React from 'react';
import axios from 'axios';

// import VideoCard from '../components/VideoCard';
// import { BASE_URL } from '../utils';
// import { Video } from '../types';
// import NoResults from '../components/NoResults';

// interface IProps {
//   // videos: Video[];
//   videos: [];
// }

// const Home = ({ videos }: IProps) => {
const Home = () => {
  return (
    <div className='flex flex-col gap-10 videos h-full'>
      {/* {videos.length ? (
        videos?.map((video: Video) => <VideoCard post={video} isShowingOnHome key={video._id} />)
      ) : (
        <NoResults text={`No Videos`} />
      )} */}
    </div>
  );
};

export default Home;

export const getServerSideProps = async ({ query: { topic } }: { query: { topic: string } }) => {
  // let response = await axios.get(`${BASE_URL}/api/post`);

  // if (topic) {
  //   // response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  //   response = await axios.get(`http://localhost:3000/api/discover/${topic}`);
  // }

  // return {
  //   props: { videos: response.data },
  // };

  // !TEMP
  let { data } = await axios.get(`http://localhost:3000/api/post`);
  return { props: { videos: data } };
};