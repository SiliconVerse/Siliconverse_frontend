import { cn } from '../../utils/util-functions';
import CommentDetails from './comment-details';
import MessageDetails from './message-details';

export default function MessageCenterDetails({
  messages,
  comments,
  searchParams,
  showDetails,
}) {
  const type = searchParams.get('type');

  const id = searchParams.get('id');

  if (!type && !id) return null;

  return (
    <section
      className={cn(
        'w-full h-full hidden md:block overflow-y-auto scrollbar',
        showDetails && 'block'
      )}
    >
      {type === 'message' ? (
        <MessageDetails messages={messages} id={id} />
      ) : (
        <CommentDetails comments={comments} id={id} />
      )}
    </section>
  );
}
