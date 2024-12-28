import { useState } from 'react';
import {
  cn,
  formatNumber,
  formatTime24Hours,
} from '../../utils/util-functions';
import InputField from '../input-field';

export default function MessageCenterSidebar({
  messages,
  comments,
  handleMessageClick = () => {},
  showDetails,
}) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
  };

  return (
    <aside
      className={cn(
        'lg:w-6/12 xl:w-4/12 2xl:w-2/12 py-10 border-r border-[#E6E6E6] overflow-y-auto scrollbar md:max-w-[16rem] h-full',
        showDetails && 'hidden'
      )}
    >
      <div className='px-3 md:px-5'>
        <InputField
          type='search'
          label={'Search'}
          labelStyles='sr-only'
          value={searchValue}
          onChange={handleSearchChange}
          id={'search'}
          name='search'
          placeholder='Search'
        />
      </div>
      <section className='space-y-2 mt-4'>
        <h2 className='font-medium text-lg px-3 md:px-5 mb-4'>Messages</h2>
        <div className='space-y-1'>
          {messages.map((message) => {
            const time = formatTime24Hours(message.timestamp);

            return (
              <div
                key={message.chatId}
                className={cn(
                  'flex items-center gap-2 w-full py-3 px-3 md:px-5',
                  message.unreadMessages && 'bg-[#eee]'
                )}
                onClick={() => {
                  handleMessageClick('message', message.chatId);
                }}
              >
                <img
                  src={message.user.profilePicture}
                  alt={message.user.name}
                  width={50}
                  height={50}
                  className='rounded-full w-10'
                />
                <div className='overflow-hidden'>
                  <h3 className='font-medium'>{message.user.name}</h3>
                  <p className='truncate text-sm'>{message.lastMessage}</p>
                </div>

                <p className='self-end'>{time}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className='mt-9 space-y-2'>
        <h2 className='font-medium text-lg px-3 md:px-5 mb-4'>Comments</h2>
        <div>
          {comments.map((comment) => {
            const totalComments = formatNumber(comment.comments);
            return (
              <div
                key={comment.id}
                className='space-y-4 w-full px-3 md:px-5 py-3'
                onClick={() => {
                  handleMessageClick('comment', comment.id);
                }}
              >
                <div className='flex items-start gap-2 w-full'>
                  <img
                    src={comment.image}
                    alt={comment.title}
                    width={50}
                    height={50}
                    className='size-10 rounded-full'
                  />
                  <p className='line-clamp-2 text-sm'>{comment.title}</p>
                </div>
                <p className='text-right'>{`${totalComments} Comments`}</p>
              </div>
            );
          })}
        </div>
      </section>
    </aside>
  );
}
