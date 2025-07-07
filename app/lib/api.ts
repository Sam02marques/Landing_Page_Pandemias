 //USEI O FETCH A PARTIR DO DEPLOY DA API QUE FIZ NO RENDER

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

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