/* eslint-disable @next/next/no-img-element */
function Team() {
  return (
    <section id="relume" className="px-[5%] py-16">
      <h2 className="rb-5 mb-24 text-4xl font-normal xl:text-7xl text-center">
        Meet the Team
      </h2>
      <div
        className="container grid grid-cols-1 items-start gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:gap-16"
      >
        <div>
          <div className="rb-6 mb-6 md:mb-8">
            <img
              className="h-60 w-60 rounded-full mx-auto md:mx-0"
              src="/images/headshot_david_hemm.png"
              alt="David Hemm"
            />
          </div>
          <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
            David Hemm
          </h3>
          <div className="prose space-y-6">
            <p>
              I am an expert in small business benefits. I understand the unique challenges that small business owners face to provide quality benefits at a price they can afford. I understand the complexities of the health insurance industry and know how to create solutions that meet the needs of each company I work with.
            </p>
            <p>
              A question I always ask is: What would it look like if we injected “integrity” into the healthcare system? Would it change anything? What would function differently? Is it possible to build plans and designs around that premise? These questions have been guiding my direction in how I pursue innovation.
            </p>
            <p>
              If we truly want to love our neighbor, then we should want what is best for them and their wellbeing. It also means we need to work hard to find solutions to our current problems. We won’t be able to help everyone, but we will help some, and that is something worth doing.
            </p>
          </div>
          <div className="mt-10 flex justify-center z-20 rounded-full">
            <a href="https://calendly.com/david-sog0/30min" target="_blank" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
          </div>
        </div>
        <div>
          <div className="rb-6 mb-6 md:mb-8">
            <img
              className="h-60 w-60 rounded-full mx-auto md:mx-0"
              src="/images/headshot_adam_cravens.jpg"
              alt="David Hemm"
            />
          </div>
          <h3 className="mb-5 text-2xl font-bold md:mb-6 md:text-3xl md:leading-[1.3] lg:text-4xl">
            Adam Cravens
          </h3>
          <div className="prose space-y-6">
            <p>
              With over 14 years of experience in human resources and organizational management, I’ve had the opportunity to work across industries and business sizes—from serving in leadership roles at a Fortune 100 company to acting as an executive in HR and Operations for a start-up. I also successfully owned and operated my own service business for 6 years before selling it, which gave me firsthand insight into the challenges business owners face. My MBA in Organizational Behavior and Human Resources Management, along with my PHR certification, equips me to offer strategic, faith-driven HR solutions.
            </p>
            <p>
              In every role I’ve held, I’ve learned that effective leadership goes beyond processes and policies—it’s about shaping a culture that reflects integrity, accountability, and purpose. I often consider how applying biblical wisdom to these areas can create environments where both businesses and their employees thrive. How do we lead with humility and grace while still making sound, strategic decisions? This is the balance I strive to achieve in the work I do with Christian business owners.
            </p>
            <p>
              Through my work, I aim to help businesses create not just successful operations, but meaningful workplaces that reflect their faith in action. It’s about fostering environments where people are valued, supported, and equipped to grow, while ensuring the company remains aligned with a biblical worldview. The journey may not always be easy, but with the right solutions and perspective, we can create a lasting impact that goes beyond the bottom line.
            </p>
          </div>
          <div className="mt-10 flex justify-center z-20 rounded-full">
            <a href="https://calendly.com/david-sog0/30min" target="_blank" className="flex w-auto items-center justify-center rounded-full border border-transparent bg-royal-blue-600 px-4 py-2.5 text-base font-medium text-white hover:bg-royal-blue-700 hover:border-[1px] hover:border-yellow-300 ">Book An Appointment</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team