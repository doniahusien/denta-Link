// app/(profile)/profile/page.jsx
import ContentBox from '@/components/UI/profile/ContentBox';
import ToolCard from '@/components/profile/ToolCard';
export default function ProfilePage() {

  return (
    <ContentBox title="Tools">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <ToolCard 
        imageSrc="/images/Profile/mirror.svg" 
        name="Mirror"
        price="300LE"
        category="Endodontics"
        description="Used to adjust braces, wires, and other orthodontic appliances."
        editLink="/edit/mirror"  
      />
      </div>
    </ContentBox>
  );
}