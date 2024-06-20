import './index.scss'
import { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'


const LetsConnect = () => {
    const form = useRef()

    useEffect(() => {
      return setTimeout(() => {
      }, 3000)
    }, [])

    const sendEmail = (e) => {
      e.preventDefault()

      emailjs
        .sendForm('service_24434sl', 'template_iilhoag', form.current, 'J_nbVfr5QmC7oA9zt')
        .then(
          () => {
            alert('Message successfully sent!')
            window.location.reload(false)
          },
          () => {
            alert('Failed to send the message, please try again')
          }
        )
    }

    return (
        <>
          <div className="container contact-page">
            <div className="text-zone">
              <p>
                I am interested in software development opportunities - especially on ambitious
                or large projects. However, if you have any other requests or
                questions, don't hesitate to contact me using below form either.
              </p>
              <div className="contact-form">
                    <form ref={form} onSubmit={sendEmail}>
                      <ul>
                          <li className="half">
                              <input placeholder="Name" type="text" name="name" required />
                          </li>
                          <li className="half">
                              <input placeholder="Email" type="email" name="email" required />
                          </li>
                          <li>
                              <input placeholder="Subject" type="text" name="subject" required/>
                          </li>
                          <li>
                              <textarea placeholder="Message" name="message" required></textarea>
                          </li>
                          <li>
                          <input type="submit" className="flat-button" value="SEND" />
                          </li>
                      </ul>
                    </form>
                </div>

            </div>
          </div>
        </>
      )
}

export default LetsConnect