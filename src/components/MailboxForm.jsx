import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const mailbox = {
  _id: 0,
  boxSize: '',
  boxholder: '',
};

const MailboxForm = ({ addBox }) => {
  const [formData, setFormData] = useState(mailbox);
  const navigate = useNavigate()

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBox(formData);  // Pass data to parent (App.jsx)
    setFormData(mailbox);  // Reset form
    navigate('/mailboxes')
  };

  return (
    <>
    <h1>New Mailbox</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxholder">Boxholder Name:</label>
      <input
        type="text"
        id="boxholder"
        name="boxholder"
        value={formData.boxholder}
        onChange={handleChange}
      />

      <label htmlFor="boxSize">Box Size:</label>
      <select
        id="boxSize"
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Submit</button>
    </form>
    </>
  );
};

export default MailboxForm;
