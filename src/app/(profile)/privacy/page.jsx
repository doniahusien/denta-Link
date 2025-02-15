// app/(profile)/profile/page.jsx
import ContentBox from '@/components/UI/profile/ContentBox';
import PrivacyCard from '@/components/profile/PrivacyCard';

export default function ProfilePage() {
  const policySections = [
    {
      title: "1. Introduction",
      content: (
        <>
          <p>
            Welcome to <span className="text-blue-600 font-semibold">DentaLink</span>! Your privacy is important to us. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you use our mobile application designed to assist dental students with patient discovery, equipment marketplaces, and educational material exchange.
          </p>
        </>
      )
    },
    {
      title: "2. Information We Collect",
      content: (
        <>
          <p>
            <span className="font-semibold">Personal Information:</span> Name, email address, phone number and age.
          </p>
          <p>
            <span className="font-semibold">Patient Matching Information:</span> Any data you voluntarily provide for patient discovery and matching services.
          </p>
          <p>
            <span className="font-semibold">Information We Collect Automatically:</span> 
            <br />
            <span className="font-semibold">Usage Data:</span> Details about how you interact with the app, including clicks, page views, and time spent on features.
          </p>
        </>
      )
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <ul className="list-disc ml-4">
          <li>Facilitate patient discovery and connections between users.</li>
          <li>Provide access to the dental equipment marketplace.</li>
          <li>Enable the exchange of educational materials.</li>
          <li>Improve app functionality and user experience.</li>
          <li>Communicate with you about updates, promotions, and support.</li>
          <li>Ensure compliance with applicable laws and academic guidelines.</li>
        </ul>
      )
    },
    {
      title: "4. Data Security",
      content: (
        <>
          <p>
            We implement reasonable measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
        </>
      )
    }
  ];

  return (
    <ContentBox title="Privacy Policy">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {policySections.map((section, index) => (
          <PrivacyCard key={index} title={section.title} content={section.content} />
        ))}
      </div>
    </ContentBox>
  );
}
