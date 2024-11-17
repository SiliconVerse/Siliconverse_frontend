import { format } from 'date-fns';
import { CheckCheck } from 'lucide-react';
import { useState } from 'react';
import tempImg from '../../assets/woman.png';
import {
  formatDate,
  formatDayWithOrdinal,
  formatTime12Hours,
} from '../../utils/util-functions';

export default function MagazineAdminNotification() {
  const [notifications, setNotifications] = useState(tempNotifications);

  const notificationsbyDate = notifications.reduce((grouped, notification) => {
    const key = new Date(notification.date).toISOString().split('T')[0];

    if (!grouped[key]) {
      grouped[key] = [];
    }

    grouped[key].push(notification);

    return grouped;
  }, {});

  const formatDateTime = (dateString) => {
    const date = new Date(dateString);

    const day = formatDayWithOrdinal(date);
    const month = format(date, 'MMM');
    const year = format(date, 'yyyy');

    const time = formatTime12Hours(date);

    return {
      date: `${day} ${month}, ${year}`,
      time,
    };
  };

  const handleMarkAllAsRead = () => {
    const updatedNotifications = notifications.map((notification) => {
      if (!notification.read) {
        return { ...notification, read: true };
      }
      return notification;
    });

    setNotifications(updatedNotifications);
  };

  return (
    <>
      <h1 className='mb-8 font-medium'>Notification</h1>
      <button
        className='border border-[#FF5F153B] rounded-sl py-[6px] flex text-nowrap gap-2 px-3'
        onClick={handleMarkAllAsRead}
      >
        <CheckCheck />
        Mark all as read
      </button>

      <section className='mt-10'>
        {Object.keys(notificationsbyDate).map((date) => {
          return (
            <div key={date} className='group'>
              <h3 className='group-first:hidden flex justify-center relative after:content-[""] after:absolute after:top-1/2 after:-translate-y-1/2 after:bg-[#7F7F7F] after:w-full after:h-[1px] z-0 after:-z-[1] my-6'>
                <span className='bg-white w-fit inline-block px-2'>
                  {formatDate(date)}
                </span>
              </h3>

              <ul className='flex flex-col gap-4'>
                {notificationsbyDate[date].map((notification) => {
                  const { date, time } = formatDateTime(notification.date);

                  return (
                    <li
                      key={notification.id}
                      className='flex items-start gap-2'
                    >
                      <img
                        src={notification.image}
                        alt='profile image'
                        width={30}
                        height={30}
                        className='rounded-full'
                      />
                      <div className='flex flex-col gap-2 items-start'>
                        <p className='line-clamp-2'>{notification.message}</p>
                        <p className='text-off-white flex items-center gap-3'>
                          <span>{date}</span>
                          <span className='inline-block bg-off-white size-1 rounded-full'></span>
                          <span>{time}</span>
                        </p>
                      </div>

                      <div
                        className={`self-center pl-7 ${
                          notification.read ? 'invisible' : 'visible'
                        }`}
                      >
                        <span className='inline-block size-2 rounded-full bg-[#ED1F24]'></span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </section>
    </>
  );
}

const tempNotifications = [
  {
    id: 1,
    image: tempImg,

    message:
      "Daniel Aganaba Sent you a message.    'Hey! Have you been exploring Web3 recently? It's crazy how it's evolving—decentralized tech is popping up everywhere. What's been on your mind lately'",
    read: false,
    type: 'info',
    date: '2024-10-05T03:08:00',
  },
  {
    id: 2,
    image: tempImg,
    message:
      "Great news! A new subscriber has just joined your community. Keep up the fantastic work, and let's continue growing the audience with more engaging content. Every new subscriber is a step toward expanding your reach!",
    read: false,
    type: 'comment',
    date: '2024-10-05T03:08:00',
  },
  {
    id: 0,
    image: tempImg,
    message:
      "New comment from Sarah: 'I loved the insights you shared in this article! It really made me rethink my approach to content creation...' Check it out and keep the conversation going!",
    read: true,
    type: 'message',
    date: '2024-10-05T03:08:00',
  },
  {
    id: 3,
    image: tempImg,
    message:
      "'New post alert! Jessica Thompson has just published a new article titled 'Unlocking the Future: The Impact of AI on Everyday Life.' Be sure to check it out and share your thoughts!'",
    read: true,
    type: 'message',
    date: '2024-10-04T03:08:00',
  },
  {
    id: 4,
    image: tempImg,
    message:
      "Daniel Aganaba Sent you a message.  'Hey! Have you been exploring Web3 recently? It's crazy how it's evolving—decentralized tech is popping up everywhere. What's been on your",
    read: true,
    type: 'message',
    date: '2024-10-04T03:08:00',
  },
  {
    id: 5,
    image: tempImg,
    message:
      "Great news! A new subscriber has just joined your community. Keep up the fantastic work, and let's continue growing the audience with more engaging content. Every new subscriber is a step toward expanding your reach!",
    read: true,
    type: 'message',
    date: '2024-10-04T03:08:00',
  },
  {
    id: 6,
    image: tempImg,
    message:
      "New comment from Sarah: 'I loved the insights you shared in this article! It really made me rethink my approach to content creation...' Check it out and keep the conversation going!",
    read: true,
    type: 'message',
    date: '2024-10-04T03:08:00',
  },
];
