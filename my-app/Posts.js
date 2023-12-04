import { react } from react;

export function Posts({ messages }) {
    return (
        <div>
          <ul> //list of the post history
            {messages.map((message) => (
              <li key={message.id}>
                <h4>{message.message}</h4> // message display
                <p>{message.created_at}</p> // timestamp display
              </li>
            ))}
          </ul>
        </div>
      );
  }