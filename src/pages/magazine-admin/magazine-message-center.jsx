import { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { recentChats } from '../../components/magazine-admin-dashboard/magazine-temp-data';
import MessageCenterDetails from '../../components/magazine-admin-dashboard/message-center-details';
import MessageCenterSidebar from '../../components/magazine-admin-dashboard/message-center-sidebar';
import useMediaQuery from '../../hooks/use-media-query';
import { tempUploads } from '../../utils/temp-data';

export default function MagazineMessageCenter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const isMobileDevice = useMediaQuery('(max-width:767px)');

  const showDetails =
    isMobileDevice && searchParams.get('type') && searchParams.get('id');

  const handleMessageClick = useCallback((type, id) => {
    setSearchParams({ type, id });
  }, []);

  const comments = tempUploads.slice(0, 2);

  // md:h-[calc(100vh-6rem)] xl:h-[calc(100vh-13rem)] overflow-hidden
  return (
    <div className='flex md:h-[calc(100vh-6rem)] xl:h-[calc(100vh-13rem)] overflow-hidden'>
      <MessageCenterSidebar
        messages={recentChats}
        comments={comments}
        handleMessageClick={handleMessageClick}
        showDetails={showDetails}
      />
      <MessageCenterDetails
        messages={recentChats}
        comments={comments}
        searchParams={searchParams}
        showDetails={showDetails}
      />
    </div>
  );
}
