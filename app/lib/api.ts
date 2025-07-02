const API_BASE_URL = 'https://pandemia-api-3.onrender.com';

export const fetchPandemias = async () => {
  const response = await fetch(`${API_BASE_URL}/pandemias`);
  if (!response.ok) throw new Error('Erro ao procurar pandemias')
  return response.json();
};

export const fetchVacinas = async () => {
  const response = await fetch(`${API_BASE_URL}/vacinas`);
  if (!response.ok) throw new Error('Erro ao procurar vacinas')
  return response.json();
};

export const fetchFakeNews = async () => {
  const response = await fetch(`${API_BASE_URL}/fakeNews`);
  if (!response.ok) throw new Error('Erro ao procurar notícias')
  return response.json();
};