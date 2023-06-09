import Image from 'next/image'
import Landing from '@/components/Landing/Landing'
import Services from '@/components/Services/Services'
import Footer from '@/components/Footer/Footer'
import ContactForm from '@/components/ContactForm/ContactForm'
export default function Home() {
  return (
    <>
   <Landing/>
   <Services/>
   <ContactForm/>
   <Footer/>
   </>
  )
}
