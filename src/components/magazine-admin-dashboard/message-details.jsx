import { format, isToday, isYesterday } from 'date-fns';
import { Clock10, EllipsisIcon, Send } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import profilePic from '../../assets/woman.png';
import { cn, formatDate, formatTime12Hours } from '../../utils/util-functions';
import { chatDetails } from './magazine-temp-data';

export default function MessageDetails({ messages, id }) {
  const [visibleDropdowns, setVisibleDropdowns] = useState({});

  const [messageValue, setMessageValue] = useState('');

  const [chat, setChat] = useState(chatDetails);

  const bottomRef = useRef();

  const messageIndex = messages.findIndex((message) => message.chatId === id);

  const details = messages[messageIndex];

  const groupedMessages = chat.messages.reduce((grouped, message) => {
    const key = format(new Date(message.timestamp), 'yyyy-MM-dd');

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(message);

    return grouped;
  }, {});

  const orderedMessages = Object.entries(groupedMessages).toSorted(
    ([dateA], [dateB]) => {
      return new Date(dateA) - new Date(dateB);
    }
  );

  const displayDate = (dateStr) => {
    const date = new Date(dateStr);
    if (isToday(date)) {
      return 'Today';
    }
    if (isYesterday(date)) {
      return 'Yesterday';
    }
    return formatDate(dateStr);
  };

  const toggleMessageDropdown = (id) => {
    setVisibleDropdowns((prev) => ({
      ...prev,
      [id]: visibleDropdowns[id] ? false : true,
    }));
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const currentTime = new Date();
    const newMessage = {
      id: `${currentTime.getTime()}`,
      user: 'User2',
      message: messageValue,
      timestamp: currentTime.toISOString(),
      profilePicture: profilePic,
    };
    setChat((prev) => ({ ...prev, messages: [newMessage, ...prev.messages] }));
    setMessageValue('');
  };

  useLayoutEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behaviour: 'instant',
        block: 'start',
      });
    }
  }, [chat]);

  return (
    <>
      <div className='flex items-center gap-5 border-b border-[#E6E6E6] py-4 px-4 xl:px-6 bg-white sticky top-0 z-10'>
        <img
          src={details.user.profilePicture}
          alt={details.user.name}
          width={100}
          height={100}
          className='rounded-full'
        />

        <div className='overflow-hidden'>
          <h3 className='font-medium text-xl truncate'>{details.user.name}</h3>
          <p className='text-sm truncate'>{details.user.email}</p>
        </div>
      </div>
      <div className='space-y-10 py-4 px-4 xl:px-6 h-full overflow-y-auto scrollbar'>
        {orderedMessages.map(([date, messages]) => {
          return (
            <div key={date} className='space-y-10'>
              <p className='text-center'>{displayDate(date)}</p>
              <ul className='flex flex-col gap-6'>
                {messages
                  .toSorted(
                    (messageA, messageB) =>
                      new Date(messageA.timestamp) -
                      new Date(messageB.timestamp)
                  )
                  .map((message) => {
                    // message sent by currently logged in user. ** switch to auth user id after backend is connected**

                    const isCurrentUser = message.user === 'User2';

                    return (
                      <li
                        key={message.id}
                        className={cn(
                          'w-fit flex gap-1',
                          isCurrentUser ? ' self-end ml-10' : 'mr-10'
                        )}
                      >
                        {!isCurrentUser ? (
                          <img
                            src={message.profilePicture}
                            alt={message.user}
                            width={30}
                            height={30}
                            className='size-10 rounded-full'
                          />
                        ) : null}
                        <div className='flex flex-col'>
                          {isCurrentUser ? null : (
                            <div className='relative flex flex-col'>
                              <button
                                aria-label='more actions'
                                className='self-end block'
                                onClick={() =>
                                  toggleMessageDropdown(message.id)
                                }
                              >
                                <EllipsisIcon />
                              </button>

                              {/* dropdown options */}

                              {visibleDropdowns[message.id] ? (
                                <div className='absolute top-full right-0 bg-white p-2 shadow-sl'>
                                  <button>reply</button>
                                </div>
                              ) : null}
                            </div>
                          )}

                          <p
                            className={cn(
                              'p-4',
                              isCurrentUser
                                ? ' rounded-t-xl rounded-bl-xl bg-primaryColor text-[#FEFEFE]'
                                : 'border border-[#F7F7F7] bg-[#F4F4F4] rounded-tr-xl rounded-b-xl'
                            )}
                          >
                            {message.message}
                          </p>

                          <div
                            className={cn(
                              'flex items-center gap-1 text-xs text-[#A3A3A3] mt-1',
                              isCurrentUser && 'justify-end'
                            )}
                          >
                            <Clock10
                              size={15}
                              className={cn('', { hidden: isCurrentUser })}
                            />
                            <p className=''>
                              {formatTime12Hours(message.timestamp)}
                            </p>
                          </div>
                        </div>
                      </li>
                    );
                  })}
              </ul>
            </div>
          );
        })}

        {/* scroll to last message */}
        <div ref={bottomRef} />
      </div>

      <form
        className='grid grid-cols-[1fr_auto] gap-5 sticky bottom-0 px-4 xl:px-6 md:pb-5 bg-white'
        onSubmit={handleSendMessage}
      >
        <textarea
          placeholder='Type something here..'
          rows={1}
          className='bg-[#F4F4F4] placeholder:text-gray-700 w-full outline-none p-4 rounded-[7.12px] h-16'
          value={messageValue}
          onChange={(event) => setMessageValue(event.target.value)}
        ></textarea>
        <button
          aria-label='send message'
          className='bg-primaryColor text-white w-16 h-full flex justify-center items-center rounded-[7.12px]'
        >
          <Send size={20} />
        </button>
      </form>
    </>
  );
}
