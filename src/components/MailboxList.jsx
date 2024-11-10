import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <div>
      <h1>Mailbox List</h1>
      <div className="mailbox-list">
        {props.mailboxes.map((mailbox) => (
          <div key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>Mailbox{mailbox._id}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MailboxList;
