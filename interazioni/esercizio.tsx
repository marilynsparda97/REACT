import { render, screen, waitFor } from '@testing-library/react';
import GithubUser from './GithubUser';

describe('Componente GithubUser', () => {
  
  
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('mostra lo stato di caricamento e poi i dati dell\'utente', async () => {
    const mockUser = {
      login: 'octocat',
      name: 'The Octocat',
      avatar_url: 'https://avatars.githubusercontent.com/u/583231?v=4'
    };

    
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockUser),
    });

    render(<GithubUser username="octocat" />);

    
    expect(screen.getByText(/Caricamento.../i)).toBeInTheDocument();

    
    const nameElement = await screen.findByText('The Octocat');
    const usernameElement = screen.getByText('@octocat');

    expect(nameElement).toBeInTheDocument();
    expect(usernameElement).toBeInTheDocument();
    
    
    const avatar = screen.getByRole('img');
    expect(avatar).toHaveAttribute('src', mockUser.avatar_url);
  });

  test('mostra un messaggio di errore se l\'utente non viene trovato', async () => {
    
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: false,
      status: 404
    });

    render(<GithubUser username="non-existent-user" />);

    
    const errorElement = await screen.findByText(/Errore: Utente non trovato/i);
    expect(errorElement).toBeInTheDocument();
  });

});