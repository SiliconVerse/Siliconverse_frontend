import { useSearchParams } from 'react-router-dom';
import MagazineAdminProfile from '../../components/magazine-admin-dashboard/magazine-admin-profile';
import MagazineAdminSecuritySettings from '../../components/magazine-admin-dashboard/magazine-admin-security-settings';

export default function MagazineAdminSettings() {
  const [searchParams, setSearchParams] = useSearchParams();

  const activeTab = searchParams.get('tab') ?? 'my profile';

  const tabs = ['my profile', 'security'];

  const toggleTab = (value) => {
    setSearchParams({ tab: value });
  };

  return (
    <div className='px-4 py-5 md:px-6 md:py-10 '>
      <div className='flex items-center gap-11 border-b-[0.5px] pb-2 border-[#C0C0C0] mb-8'>
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`capitalize relative -bottom-2 pb-2 transition-colors duration-200 ease-linear md:hover:text-primaryColor/70 ${
              activeTab === tab
                ? 'border-b border-black text-black'
                : 'text-[#858585]'
            }`}
            onClick={() => toggleTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <>
        {activeTab === 'my profile' ? (
          <MagazineAdminProfile />
        ) : (
          <MagazineAdminSecuritySettings />
        )}{' '}
      </>
    </div>
  );
}
