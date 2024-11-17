import MagazineArticles from './magazine-articles';
import PublishMagazineArticle from './publish-magazine-article';

export default function ContentManagement({ setSearchParams, searchParams }) {
  const publish = !!searchParams.get('publish');

  const handleShowPublish = () => {
    setSearchParams({ tab: 'content-management', publish: true });
  };

  const cancelPublish = () => {
    setSearchParams({ tab: 'content-management' });
  };

  return (
    <>
      {publish ? (
        <PublishMagazineArticle cancelPublish={cancelPublish} />
      ) : (
        <MagazineArticles handleShowPublish={handleShowPublish} />
      )}
    </>
  );
}
