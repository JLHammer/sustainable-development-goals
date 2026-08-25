import { Form } from './ContactForm.styled';
import type { ContactFormProps } from './ContactForm.types';

const ContactForm = (props: ContactFormProps) => {
  return <Form {...props} />;
};

export default ContactForm;
