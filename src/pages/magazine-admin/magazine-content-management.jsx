import { useState } from 'react';
import MagazineArticles from '../../components/magazine-admin-dashboard/magazine-articles';
import PublishMagazineArticle from '../../components/magazine-admin-dashboard/publish-magazine-article';

export default function ContentManagement() {
  const [showPublish, setShowPublish] = useState(false);

  const handleShowPublish = () => {
    setShowPublish(true);
  };

  const cancelPublish = () => {
    setShowPublish(false);
  };

  return (
    <>
      {showPublish ? (
        <PublishMagazineArticle cancelPublish={cancelPublish} />
      ) : (
        <MagazineArticles handleShowPublish={handleShowPublish} />
      )}
    </>
  );
}
