import Affiliates from '../../components/magazine-admin-dashboard/affiliates';
import SponsoredAds from '../../components/magazine-admin-dashboard/sponsored-ads';

export default function MagazineAdminAdvertising() {
  return (
    <div className='px-4 py-5 md:px-6 md:py-10'>
      <SponsoredAds />
      <Affiliates />
    </div>
  );
}
