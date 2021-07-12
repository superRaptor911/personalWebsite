import React from 'react';
import Header from '../components/Header';
import '../styles/Global.css';

export default function Home () {
  return (
    <div>
      <Header curPage="Home"/>
      <div className="content">
      Home Page
      </div>
    </div>
  );
}
