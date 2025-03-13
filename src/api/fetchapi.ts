const API_URL = 'http://localhost:5000/packages';

export const fetchPackages = async () => {
  try {
    const response = await fetch(API_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};


const API_URL2 = 'http://localhost:5000/WomenCat';

export const fetchWomenCat = async () => {
  try {
    const response = await fetch(API_URL2);
    return await response.json();
  } catch (error) {
    console.error('Error fetching WomenCat:', error);
    return [];
  }
};

const API_URL3 = 'http://localhost:5000/customers';

export const fetchCustomers = async () => {
  try {
    const response = await fetch(API_URL3);
    return await response.json();
  } catch (error) {
    console.error('Error fetching WomenCat:', error);
    return [];
  }
};


const API_URL4 = 'http://localhost:5000/mainCat';

export const fetchMainCat = async () => {
  try {
    const response = await fetch(API_URL4);
    return await response.json();
  } catch (error) {
    console.error('Error fetching WomenCat:', error);
    return [];
  }
};

const API_URL5 = 'http://localhost:5000/slider';

export const fetchSlider = async () => {
  try {
    const response = await fetch(API_URL5);
    return await response.json();
  } catch (error) {
    console.error('Error fetching WomenCat:', error);
    return [];
  }
};

const API_URL6 = 'http://localhost:5000/tinySlider';

export const fetchTinySlider = async () => {
  try {
    const response = await fetch(API_URL6);
    return await response.json();
  } catch (error) {
    console.error('Error fetching WomenCat:', error);
    return [];
  }
};

const API_URL7 = 'http://localhost:5000/MenCat';
export const fetchMenCat = async () => {
  try {
    const response = await fetch(API_URL7);
    return await response.json();
  } catch (error) {
    console.error('Error fetching WomenCat:', error);
    return [];
  }
};

const API_URL8 = 'http://localhost:5000/CatWoman';
export const fetchCatWoman = async () => {
  try {
    const response = await fetch(API_URL8);
    return await response.json();
  } catch (error) {
    console.error('Error fetching WomenCat:', error);
    return [];
  }
};