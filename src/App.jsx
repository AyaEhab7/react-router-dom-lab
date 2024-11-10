// src/App.jsx
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import MailboxList from './components/MailboxList';
import NavBar from './components/NavBar';
import MailboxDetails from './components/MailboxDetails';
import MailboxForm from './components/MailboxForm';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addBox = (newBoxData) => {
    const newBox = { ...newBoxData, _id: mailboxes.length + 1 };
    setMailboxes((prev) => [...prev, newBox]);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<h1>post office boxes</h1>} />
        <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
        <Route path="/new-mailbox" element={<MailboxForm addBox={addBox} />} />
        <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
      </Routes>
    </>
  );
};

export default App;
