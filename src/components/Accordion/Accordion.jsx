import { useState } from 'react';
import PropTypes from 'prop-types';

const AccordionItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <h1 className="font-semibold">{title}</h1>
        <img src={isOpen ? "assets/icons/chevron-up.svg" : "assets/icons/chevron-down.svg"} className="transition-transform duration-300" />
      </div>
      {isOpen && <p className="pb-4 border-b-gray-300 border-b">{children}</p>}
    </div>
  );
};

AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Accordion = () => {
  return (
    <div className="flex flex-col gap-4 items-center p-8 lg:w-[60vw]">
      <h1 className="font-bold text-3xl mb-4">Common Questions</h1>

      <AccordionItem title="What is Wizardshot?">
        Wizardshot is a web app & chrome extension that allows you to create step-by-step tutorials simply by capturing your screen.
      </AccordionItem>

      <AccordionItem title="How is Wizardshot Free?">
        The costs to run a service is really inexpensive as most of the processing happens in the Chrome extension.
        <br /><br />
        Really - all that we have to pay for is <span className='underline'>super-secure hosting</span>, <span className='underline'>awesome 24/7 support</span> and that’s it.
        <br /><br />
        <strong>We built Wizardshot as a stand-alone product with a deep <span className='underline'>Helpjuice Knowledge Base</span> integration.</strong>
      </AccordionItem>

      <AccordionItem title="Is my data secure?">
        Yes, your data is secure. We use 256-bit encryption for all data and all data is stored in secure data centers.
      </AccordionItem>

      <div className="w-full text-center lg:flex lg:justify-between lg:pt-6">
        <h2 className="font-bold mb-2">Curious To Learn More?</h2>
        <button className="bg-gray-900 hover:bg-gray-700 text-white py-2 px-6 rounded-lg">
          Visit Help & Community Center
        </button>
      </div>
    </div>
  );
};

export default Accordion;
