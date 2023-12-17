import axios from 'axios';

export async function FetchData(url, dataFrom) {

  const optionsExerciseDB = {
    method: 'GET',
    url: url,
    headers: {
      'X-RapidAPI-Key': String(import.meta.env.VITE_APP_RAPID_API_EXERCISEDDB_KEY),
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


  const optionsYoutubeSearch = {
    method: 'GET',
    url: url,
    headers: {
      'X-RapidAPI-Key': String(import.meta.env.VITE_APP_RAPID_API_YOUTUBE_SEARCH_AND_DOWNLOAD_KEY),
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  }

  if (dataFrom === 'youtube') {
    try {
      const response = await axios.request(optionsYoutubeSearch);

      return response.data;
    } catch (error) {
      console.error("Youtube server error :", error);
    }
  } else if(dataFrom === 'exercisedb'){
    try {
      const response = await axios.request(optionsExerciseDB);

      return response.data;
    } catch (error) {
      console.error("exercisedb server error : ", error);
    }
  }else{
    console.log('dataFrom is not found.');
  }

}

