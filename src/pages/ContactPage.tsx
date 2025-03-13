
import PageLayout from '../components/PageLayout';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <PageLayout
      hero={{
        title: 'Get in Touch',
        subtitle: 'Let's start a conversation',
        badge: 'Contact Us',
        primaryCta: {
          text: 'Schedule a Call',
          link: '#contact-form'
        }
      }}
    >
      <div id="contact-form">
        <Contact />
      </div>
    </PageLayout>
  );
};

export default ContactPage;
