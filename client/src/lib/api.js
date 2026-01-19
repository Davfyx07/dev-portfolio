const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:1337';

export async function fetchAPI(path) {
  const url = `${API_URL}/api${path}`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching from Strapi:', error);
    return null;
  }
}

export async function getProjects() {
  return fetchAPI('/projects?populate=*');
}

export async function getSkills() {
  return fetchAPI('/skills');
}

export async function getHero() {
  const data = await fetchAPI('/heroes?populate=*');
  // Retornar el primer elemento si es un array
  return data?.data?.[0] ? { data: data.data[0] } : data;
}

export async function getAboutMe() {
  return fetchAPI('/about-me?populate=*');
}

// Helper para obtener URL de imagen de Strapi
export function getStrapiMedia(url) {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return `${API_URL}${url}`;
}