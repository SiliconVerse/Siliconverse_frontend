import { useCallback, useState } from 'react';
import MagazineArticles from '../../components/magazine-admin-dashboard/magazine-articles';
import PublishMagazineArticle from '../../components/magazine-admin-dashboard/publish-magazine-article';

export default function ContentManagement() {
  const [showPublish, setShowPublish] = useState(false);

  const handleShowPublish = useCallback(() => {
    setShowPublish(true);
  }, []);

  const cancelPublish = useCallback(() => {
    setShowPublish(false);
  }, []);

  return (
    <div className='px-4 py-5 md:px-6 md:py-10 '>
      {showPublish ? (
        <PublishMagazineArticle cancelPublish={cancelPublish} />
      ) : (
        <MagazineArticles handleShowPublish={handleShowPublish} />
      )}
    </div>
  );
}
