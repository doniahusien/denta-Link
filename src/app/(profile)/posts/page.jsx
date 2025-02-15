// app/(profile)/profile/page.jsx
import ContentBox from '@/components/UI/profile/ContentBox';
import IconCard from '@/components/UI/profile/IconCard';
import ProtectedRoute from '@/components/ProtectedRoute'
export default function ProfilePage() {
  const cards = [
    {
      icon: '/images/Profile/tools.svg',
      title: 'Tools',
      href: '/posts/tools'
    },
    {
      icon: '/images/Profile/Patients.svg',
      title: 'Patients',
      href: '/posts/patients'
    }
    ,
    {
      icon: '/images/Profile/exchange.svg',
      title: 'Exchange',
      href: '/posts/exchange'
    }
  ];

  return (
    
    <ContentBox title="My Posts">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <IconCard
            key={card.href}
            icon={card.icon}
            title={card.title}
            href={card.href}
          />
        ))}
      </div>
    </ContentBox>
  );
}