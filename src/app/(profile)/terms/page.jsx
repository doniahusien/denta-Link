"use client";

import ContentBox from '@/components/UI/profile/ContentBox';
import TermsCard from '@/components/profile/TermsCard';
import ProtectedRoute from '@/components/ProtectedRoute';
const dummyTermsData = [
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
    title: "2. Acceptance of Terms",
    content: "By downloading, installing, or using the App, you confirm that you have read, understood, and agree to these Terms. If you are using the App on behalf of an organization, you represent that you have the authority to bind that organization to these Terms."
  },
  {
    title: "3. App Usage",
    content: "The App is designed to assist dental professionals and patients in managing dental care. You agree to use the App only for lawful purposes and in accordance with these Terms. Prohibited activities include:"
  }
];

export default function ProfilePage() {
  return (
    <ProtectedRoute>
    <ContentBox title="Terms & Conditions">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {dummyTermsData.map((item, index) => (
          <TermsCard 
            key={index}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </ContentBox>
    </ProtectedRoute>
  );
}
