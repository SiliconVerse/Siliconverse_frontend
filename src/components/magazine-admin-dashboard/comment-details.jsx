import { Clock10, EllipsisIcon, MessageSquareText, Send } from 'lucide-react';
import { useLayoutEffect, useRef, useState } from 'react';
import { FaHeart, FaRegShareSquare } from 'react-icons/fa';
import profilePic from '../../assets/woman.png';
import {
  cn,
  formatNumber,
  formatTime12Hours,
} from '../../utils/util-functions';

export default function CommentDetails({ comments, id }) {
  const commentIndex = comments.findIndex((comment) => comment.id === +id);
  const details = comments[commentIndex];

  const [comment, setComment] = useState(details.allComments);

  const sortedComments = comment.toSorted(
    (commentA, commentB) =>
      new Date(commentA.timestamp) - new Date(commentB.timestamp)
  );

  const [visibleDropdowns, setVisibleDropdowns] = useState({});

  const [commentValue, setcommentValue] = useState('');

  const bottomRef = useRef();

  const toggleMessageDropdown = (id) => {
    setVisibleDropdowns((prev) => ({
      ...prev,
      [id]: visibleDropdowns[id] ? false : true,
    }));
  };

  const handleSendComment = (event) => {
    event.preventDefault();
    const currentTime = new Date();
    const newComment = {
      id: `${currentTime.getTime()}`,
      user: {
        name: 'User2',
        profilePicture: profilePic,
      },
      comment: commentValue,
      timestamp: currentTime.toISOString(),
    };
    setComment((prev) => [...prev, newComment]);
    setcommentValue('');
  };

  useLayoutEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({
        behaviour: 'instant',
        block: 'start',
      });
    }
  }, [comment]);

  return (
    <>
      <div className='flex items-center gap-5 border-b border-[#E6E6E6] py-4 px-4 xl:px-6 sticky top-0 z-20 bg-white'>
        <img
          src={details.image}
          alt={details.title}
          width={100}
          height={100}
          className='size-[6.25rem] rounded-full'
        />

        <div className='space-y-4'>
          <h3 className='font-medium'>{details.title}</h3>
          <div className='flex items-center gap-3 flex-wrap'>
            <p className='flex items-center gap-1 '>
              <MessageSquareText className='text-primaryColor' />
              <span>{`${formatNumber(details.comments)} comments`}</span>
            </p>
            <p className='flex items-center gap-1'>
              <FaHeart fill='#FF4500' className='' />
              <span>{`${formatNumber(details.reactions)} reactions`}</span>
            </p>
            <p className='flex items-center gap-1'>
              <FaRegShareSquare className='text-primaryColor' size={20} />
              <span>{`${formatNumber(details.shares)} shares`}</span>
            </p>
          </div>
        </div>
      </div>

      <ul className='py-4 px-4 xl:px-6 space-y-6'>
        {sortedComments.map((comment) => {
          return (
            <li key={comment.id} className={cn('w-fit flex mr-10 gap-1')}>
              <img
                src={comment.user.profilePicture}
                alt={comment.user.name}
                width={30}
                height={30}
                className='size-10 rounded-full'
              />

              <div className='flex flex-col'>
                <div className='relative flex flex-col'>
                  <button
                    aria-label='more actions'
                    className='self-end block'
                    onClick={() => toggleMessageDropdown(comment.id)}
                  >
                    <EllipsisIcon />
                  </button>

                  {/* dropdown options */}

                  {visibleDropdowns[comment.id] ? (
                    <div className='absolute top-full right-0 bg-white p-2 shadow-sl flex flex-col justify-start items-start'>
                      <button className='capitalize'>reply</button>
                      <button className='capitalize'>delete</button>
                      <button className='capitalize'>contact</button>
                    </div>
                  ) : null}
                </div>

                <p
                  className={cn(
                    'p-4 border border-[#F7F7F7] bg-[#F4F4F4] rounded-tr-xl rounded-b-xl'
                  )}
                >
                  {comment.comment}
                </p>

                <div
                  className={cn(
                    'flex items-center gap-1 text-xs text-[#A3A3A3] mt-1'
                  )}
                >
                  <Clock10 size={15} />
                  <p className=''>{formatTime12Hours(comment.timestamp)}</p>
                </div>
              </div>
            </li>
          );
        })}

        <li ref={bottomRef} />
      </ul>

      <form
        className='grid grid-cols-[1fr_auto] gap-5 sticky bottom-0 px-4 xl:px-6 md:pb-5 bg-white'
        onSubmit={handleSendComment}
      >
        <textarea
          placeholder='Type something here..'
          rows={1}
          className='bg-[#F4F4F4] placeholder:text-gray-700 w-full outline-none p-4 rounded-[7.12px] h-16'
          value={commentValue}
          onChange={(event) => setcommentValue(event.target.value)}
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
