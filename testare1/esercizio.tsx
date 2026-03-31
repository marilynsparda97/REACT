import { render, screen } from '@testing-library/react';
import Welcome from './App'; 

describe('Componente Welcome', () => {
  
  test('deve renderizzare il nome passato come prop', () => {
    render(<Welcome name="Gianluca" age={25} />);
    
    
    const nameElement = screen.getByText(/Welcome, /i);
    expect(nameElement).toHaveTextContent('Gianluca');
  });

  test('deve renderizzare "Guest" se la prop name non è fornita', () => {
    render(<Welcome age={30} />);
    
    const welcomeElement = screen.getByText(/Welcome, /i);
    expect(welcomeElement).toHaveTextContent('Guest');
  });

  test('deve renderizzare l\'età correttamente tramite il componente Age', () => {
    const testAge = 28;
    render(<Welcome name="Luca" age={testAge} />);
    
    
    const ageElement = screen.getByText(`Your age is ${testAge}`);
    expect(ageElement).toBeInTheDocument();
  });

});