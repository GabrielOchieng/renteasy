import { useEffect } from "react";
import {
  IoPersonCircleSharp,
  IoCheckmark,
  IoCheckmarkDone,
} from "react-icons/io5";
import { format } from "timeago.js";

const Message = ({
  message,
  own,
  currentChat,
  markMessageAsRead,
  chosenEmoji,
}) => {
  useEffect(() => {
    if (
      message.read === false &&
      currentChat &&
      currentChat._id === message.conversationId &&
      !own // Check if message sender is not the current user
    ) {
      // Mark message as read if it's unread, in the current chat, and not sent by the user
      markMessageAsRead(message._id);
    }
  }, [message, currentChat, own, markMessageAsRead]);

  const isRead = message.read && own; // Show two ticks for read messages from others

  return (
    <div className={`message flex flex-col ${own ? "items-end" : ""}`}>
      <div className="flex">
        {!own && (
          <IoPersonCircleSharp className="messageImg w-8 h-8 rounded-full mr-2" />
        )}
        <p
          className={`messageText px-4 py-2 rounded-lg max-w-md ${
            own ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
          }`}
        >
          {chosenEmoji && <span>{chosenEmoji.emoji}</span>} {message.text}
        </p>
        {isRead && (
          <div className="messageRead ml-2">
            <IoCheckmarkDone className="text-green-500" />
          </div>
        )}
        {!isRead && own && (
          <div className="messageUnread ml-2">
            <IoCheckmark className="text-gray-500" />
          </div>
        )}
      </div>
      <div className="messageBottom text-sm mt-2">
        {format(message.createdAt)}
      </div>
    </div>
  );
};

export default Message;

// import { useEffect, useState } from "react";
// import {
//   IoPersonCircleSharp,
//   IoCheckmark,
//   IoCheckmarkDone,
// } from "react-icons/io5";
// import { format } from "timeago.js";
// import EmojiPicker from "emoji-picker-react"; // Import EmojiPicker

// const Message = ({ message, own, currentChat, markMessageAsRead }) => {
//   const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State for emoji picker visibility
//   const [chosenEmoji, setChosenEmoji] = useState(null); // State for chosen emoji

//   useEffect(() => {
//     if (
//       message.read === false &&
//       currentChat &&
//       currentChat._id === message.conversationId &&
//       !own // Check if message sender is not the current user
//     ) {
//       // Mark message as read if it's unread, in the current chat, and not sent by the user
//       markMessageAsRead(message._id);
//     }
//   }, [message, currentChat, own, markMessageAsRead]);

//   const handleEmojiClick = (event, emojiObject) => {
//     setChosenEmoji(emojiObject); // Update chosen emoji state
//     setShowEmojiPicker(false); // Hide picker after selection
//   };

//   const isRead = message.read && own; // Show two ticks for read messages from others

//   return (
//     <div className={`message flex flex-col ${own ? "items-end" : ""}`}>
//       <div className="flex">
//         {!own && (
//           <IoPersonCircleSharp className="messageImg w-8 h-8 rounded-full mr-2" />
//         )}
//         <p
//           className={`messageText px-4 py-2 rounded-lg max-w-md ${
//             own ? "bg-green-500 text-white" : "bg-gray-200 text-gray-800"
//           }`}
//         >
//           {own && chosenEmoji && <span>{chosenEmoji.emoji}</span>}{" "}
//           {message.text}
//         </p>
//         {isRead && (
//           <div className="messageRead ml-2">
//             <IoCheckmarkDone className="text-green-500" />
//           </div>
//         )}
//         {!isRead && own && (
//           <div className="messageUnread ml-2">
//             <IoCheckmark className="text-gray-500" />
//           </div>
//         )}
//         {own && (
//           <button
//             className="emoji-picker-button"
//             onClick={() => setShowEmojiPicker(!showEmojiPicker)}
//           >
//             Emoji
//             {/* Add an icon or text for emoji picker button */}
//           </button>
//         )}
//       </div>
//       {showEmojiPicker && own && (
//         <div className="emoji-picker-container">
//           <EmojiPicker onEmojiClick={handleEmojiClick} />
//         </div>
//       )}
//       <div className="messageBottom text-sm mt-2">
//         {format(message.createdAt)}
//       </div>
//     </div>
//   );
// };

// export default Message;
