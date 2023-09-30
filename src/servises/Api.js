import axios from 'axios';

const API_KEY = '38933529-1badfc8ed6dbb186160b3796b';
const BASE_URL = 'https://pixabay.com/api/';

export const findPictures = async (picThem, page=1, perPage = 12) => {
  const { data } = await axios.get(
    `${BASE_URL}?q=${picThem}&key=${API_KEY}&&image_type=photo&orientation=horizontal&page=${page}&per_page=${perPage}`
  );
  return data;
};