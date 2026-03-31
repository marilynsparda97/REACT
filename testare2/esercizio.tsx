import { render, screen, fireEvent } from '@testing-library/react';
import UncontrolledLogin from './UncontrolledLogin';

describe('Componente UncontrolledLogin', () => {
  
  test('deve inviare i dati corretti quando il form viene sottomesso', () => {
    
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    render(<UncontrolledLogin />);

    
    const usernameInput = screen.getByLabelText(/Username:/i);
    const passwordInput = screen.getByLabelText(/Password:/i);
    const rememberCheckbox = screen.getByLabelText(/Ricordami:/i);
    const submitButton = screen.getByRole('button', { name: /Login/i });

    
    fireEvent.change(usernameInput, { target: { value: 'mario_rossi', name: 'username' } });
    fireEvent.change(passwordInput, { target: { value: 'password123', name: 'password' } });
    fireEvent.click(rememberCheckbox);

    
    fireEvent.click(submitButton);

    
    expect(logSpy).toHaveBeenCalledWith("Dati del Login:", {
      username: 'mario_rossi',
      password: 'password123',
      remember: true,
    });

   
    logSpy.mockRestore();
  });

  test('deve avere il valore remember a false se non selezionato', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    render(<UncontrolledLogin />);
    
    const submitButton = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(submitButton);

    expect(logSpy).toHaveBeenCalledWith(
      expect.anything(),
      expect.objectContaining({ remember: false })
    );

    logSpy.mockRestore();
  });
});