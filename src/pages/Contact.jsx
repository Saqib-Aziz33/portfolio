import {useState} from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import contactImage from '../assets/contact.svg'
import 'animate.css/animate.min.css'
import Breadcrum from '../components/Breadcrum';
import emailjs from '@emailjs/browser'
import Alert from '../components/Alert';


function Contact() {
  const [showAlert, setShowAlert] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setShowAlert(true)
    // email logic
    emailjs.sendForm('service_3b9evib', 'template_46fq0hq', e.target, 'user_6uE1OybS2h1VCkJVQAE9z')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset()
  }


    return <div className='container mx-auto my-8 contact'>
      <Breadcrum current='Contact' />
      {showAlert && <Alert msg='Message sent successfully' />}
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className='animate__animated animate__backInUp'>
          <img src={contactImage} alt="contact svg" className='max-w-sm h-auto block m-auto ' />
        </div>

        <form onSubmit={sendEmail} className='animate__animated animate__backInUp p-2'>
          <Input type={'text'} placeholder={'Name'} text={"Name"} />
          <Input type={'email'} placeholder={'Email'} text={"Email"} />
          <Input textarea={true} placeholder={'Message...'} text={"Message"} />
          <Button type={'submit'}>Submit</Button>
        </form>
      </div>

    </div>;
  }

  export default Contact;