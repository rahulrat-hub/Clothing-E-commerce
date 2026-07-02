import react from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PersonPinCircleIcon from '@mui/icons-material/PersonPinCircle';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import contact from '../assets/frontend_assets/contact.png'

function Contact() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative h-125 overflow-hidden">

        <img
          src={contact}
          alt=""
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">

          <div>

            <h1 className="text-6xl md:text-8xl font-extrabold text-white leading-none">
              Let's
              <br />
              <span className="text-white">Con</span>
              <span className="text-blue-600">nect.</span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg max-w-3/5">
              Have a question, collaboration, or just want to say hello?
              We'd love to hear from you.
            </p>

          </div>

        </div>
      </section>

      {/* Contact Section */}

      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">

        {/* Form */}

        <div>

          <h2 className="text-4xl font-bold mb-10">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 px-5 py-4 focus:border-blue-600 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 px-5 py-4 focus:border-blue-600 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full border border-gray-300 px-5 py-4 focus:border-blue-600 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full border border-gray-300 px-5 py-4 resize-none focus:border-blue-600 outline-none"
            />

            <button
              className="bg-blue-600 hover:bg-black duration-300 text-white font-semibold w-full py-4"
            >
              SEND MESSAGE
            </button>

          </form>

        </div>

        {/* Info */}

        <div>

          <h2 className="text-4xl font-bold mb-10">
            Get In Touch
          </h2>

          <div className="space-y-10">

            <div className="flex gap-5">

              <EmailIcon
              className="text-blue-600 scale-105"
              />

              <div>

                <h4 className="font-bold text-xl">
                  Email
                </h4>

                <p className="text-gray-500">
                  hello@yourbrand.com
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <LocalPhoneIcon
                className="text-blue-600 scale-105"
              />

              <div>

                <h4 className="font-bold text-xl">
                  Phone
                </h4>

                <p className="text-gray-500">
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <PersonPinCircleIcon
                className="text-blue-600 scale-105"
              />

              <div>

                <h4 className="font-bold text-xl">
                  Address
                </h4>

                <p className="text-gray-500">
                 Uttarakhand, Rishikesh
                  <br />
                  India
                </p>

              </div>

            </div>

            <div className="flex gap-5">

              <WatchLaterIcon
                className="text-blue-600 scale-105"
              />

              <div>

                <h4 className="font-bold text-xl">
                  Working Hours
                </h4>

                <p className="text-gray-500">
                  Monday - Saturday
                  <br />
                  10:00 AM - 7:00 PM
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Contact;