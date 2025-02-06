import React from 'react';
import CommentSection from '@/components/CommentSection';
import ContactForm from '@/components/ContactForm';
import Insta from '@/components/Insta';
import Friends from '@/components/Friends';

import Gallery from '@/components/Gallery';

const Page = () => {
  return (
    <>
    <Insta/>
    <div className="min-h-screen  py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Comment Section */}
        <div className=" p-6 rounded-lg shadow-lg">
          <CommentSection />
        </div>

        {/* Contact Form */}
        <div className=" p-6 rounded-lg shadow-lg">
          <ContactForm />
        </div>
      </div>
    </div>
    <Gallery/>
  
    <Friends/>
    </>
  );
};

export default Page;
