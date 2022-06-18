import React from "react";
import Series from "../components/Series";
import requests from "../Requests";
import Row from '../components/Row'
import FooterBottom from "../components/FooterBottom";

const TVShows = () => {
  return (
    <>
      <Series />
      <Row rowID='1' title='On The Air' fetchURL = {requests.requestUpcomingShows}/>
      <Row rowID='2' title='Popular' fetchURL = {requests.requestPopularShows}/>
      <Row rowID='3' title='Trending' fetchURL = {requests.requestTrendingShows}/>
      <Row rowID='4' title='Top Rated' fetchURL = {requests.requestTopRatedShows}/>
      <Row rowID='5' title='Horror' fetchURL = {requests.requestHorrorShows}/>
      {/* <Row rowID='6' title='Airing Today' fetchURL = {requests.requestAiringToday}/> */}
      <FooterBottom/>
    </>
  );
};

export default TVShows;
