import { useQuery } from '@tanstack/react-query';


const fetchGithubUserData = async (username) => {
  if (!username) return null;

  const response = await fetch(`https://api.github.com/users/${username}`);
  
  if (!response.ok) {
    throw new Error('Utente non trovato o errore di rete');
  }
  
  return response.json();
};

export function useGithubUser(username) {
  const { 
    data, 
    isLoading, 
    error, 
    refetch 
  } = useQuery({
    queryKey: ['githubUser', username],
    
    queryFn: () => fetchGithubUserData(username),
    
    enabled: !!username,
    
    retry: false,
  });

  return { 
    user: data,           
    loading: isLoading,   
    error: error?.message, 
    refetchUser: refetch  
  };
}