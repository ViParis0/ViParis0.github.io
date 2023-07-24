import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('renders main page items', () => {
  test('renders my name', () => {
    render(<App />);
    const helloElement = screen.getByRole("heading", /marcus vinicius g paris/i);
    expect(helloElement).toBeInTheDocument();
  });
})

describe('renders Header items', () => {
  test('renders Projects link', () => {
    render(<App />);
    const linkElement = screen.getByText(/projetos/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Home link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders Contact link', () => {
    render(<App />);
    const linkElement = screen.getByText(/Contato/i);
    expect(linkElement).toBeInTheDocument();
  });
})