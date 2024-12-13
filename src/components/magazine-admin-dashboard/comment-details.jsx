import { MessageSquareText } from 'lucide-react';
import { FaHeart, FaRegShareSquare } from 'react-icons/fa';
import { formatNumber } from '../../utils/util-functions';

export default function CommentDetails({ comments, id }) {
  const commentIndex = comments.findIndex((comment) => comment.id === +id);
  const details = comments[commentIndex];

  return (
    <>
      <div className='flex items-center gap-5 border-b border-[#E6E6E6] py-4 px-4 xl:px-6 sticky top-0 z-50 bg-white'>
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
    </>
  );
}
