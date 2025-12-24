import { useState } from 'react';
import { languages } from './languages';
import './App.css';

function Header() {
  return (
    <header>
      <h1 className="heading">Assembly: Endgame</h1>
      <p className="header-sub-text">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
    </header>
  );
}

function Status() {
  // Hard-code for the time being.
  return (
    <div className="status-div">
      <div className="inner-status-div">
        <p style={{ fontSize: '1.75rem' }}>You Win!</p>
        <p style={{ fontSize: '1rem' }}>Well Done! &nbsp; 🎉</p>
      </div>
    </div>
  );
}

function LanguageSection({
  name,
  bgColor,
  textColor,
}: {
  name: string;
  bgColor: string;
  textColor: string;
}) {
  const styles: React.CSSProperties = {
    color: textColor,
    fontWeight: 500,
    textAlign: 'center',
    backgroundColor: bgColor,
  };
  return (
    <div className="lang-div" style={styles}>
      <p>{name}</p>
    </div>
  );
}

function Keyboard() {
  let alphaArr: string[] = [];
  for (let i: number = 65; i <= 90; i++) {
    alphaArr.push(String.fromCharCode(i));
  }

  const mappedAlphaArr = alphaArr.map((alphabet, idx) => (
    <button key={idx} className="keyboard-button">
      {alphabet}
    </button>
  ));
  return <div className="keyboard-div">{mappedAlphaArr}</div>;
}

export default function AssemblyEndGame() {
  const [currentWord] = useState<string>('React');
  const mappedArr = currentWord.split('').map((letter, idx) => (
    <span key={idx} className="span-input">
      {letter.toUpperCase()}
    </span>
  ));

  const langArr = languages.map((lang, idx) => (
    <LanguageSection
      name={lang.name}
      bgColor={lang.backgroundColor}
      textColor={lang.textColor}
      key={idx}
    />
  ));

  return (
    <>
      <Header />
      <Status />

      <div className="main-languages-div">
        <div className="inner-main-lang-div">{langArr}</div>
      </div>

      <div className="input-div">
        <p className="input-text">{mappedArr}</p>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Keyboard />
      </div>
      
    </>
  );
}
