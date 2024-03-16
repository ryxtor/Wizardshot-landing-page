import Accordion from "../components/Accordion/Accordion"; 

export default function LandingPage() {
  return (
    <div className="flex flex-col justify-center items-center m-5 lg:mx-60 mt-24">
      <div className="flex flex-col gap-4 items-center mb-24 lg:mb-8 lg:w-[60vw]">
        <h1 className="text-4xl lg:text-6xl font-bold text-center px-4">
          Your Magic Wand for Instant Documentation
        </h1>
        <h3 className="text-2xl lg:text-lg font-semibold text-center text-gray-500">
          TURN ANY PROCESS INTO A SIMPLE STEP-BY STEP GUIDE
        </h3>
        <button className="bg-black hover:bg-gray-700 text-white py-2 pl-6 pr-4 rounded-lg font-semibold">
          Install Wizardshot
          <img src="assets/icons/arrow-right.svg" className="inline-block ml-2" />
        </button>
      </div>

      <div className="relative video-bg-gradient w-full rounded-xl p-3 mt-4 mb-12">
        <div className="absolute -top-9 left-8 text-xs">
          <p className="font-semibold italic w-3/5">It only takes 3 clicks to publish your first tutorial</p>
        </div>
        <img src="assets/icons/arrow.png" className="absolute -top-6 left-0" />
        <img
          src="/assets/images/video-preview.png"
          className="h-full w-full rounded-xl"
        />
      </div>

      <div className="my-4 flex justify-center">
        <h1 className="text-3xl lg:text-5xl lg:w-2/3 font-bold text-center">
          Say <span className="underline">Goodbye To Writing Docs</span>, and
          Hello To Wizardshot Doing it for YOU.
        </h1>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col lg:flex-row gap-8 lg:justify-around lg:w-full lg:items-start lg:pt-8 ">
        <div className="relative flex flex-col gap-5 justify-center items-center z-10 bg-transparent lg:justify-between lg:h-[26rem]">
          <div className="step-1-bg-gradient -z-10"></div>
          <img
            src="assets/images/click-capture.png"
            className="bg-transparent w-80"
          />
          <div className="w-80 lg:h-32">
            <h3 className="pl-2 text-2xl font-bold mb-2">1. Click Capture</h3>
            <p className="text-gray-500">
              Once you install the Chrome extension, fire it up, and click
              “Capture”.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 justify-center items-center z-10 bg-transparent lg:justify-between lg:h-[26rem]">
          <div className="step-2-bg-gradient -z-10"></div>
          <img
            src="assets/images/perform-actions.png"
            className="bg-transparent w-80"
          />
          <div className="w-80 lg:h-32">
            <h3 className="pl-2 text-2xl font-bold mb-2">2. Perform Your Actions</h3>
            <p className="text-gray-500">
              Once capturing, Wizardshot carefully monitors what you do to
              understand how to document it.
            </p>
          </div>
        </div>

        <div className="relative flex flex-col gap-5 justify-center items-center z-10 bg-transparent lg:justify-between lg:h-[26rem]">
          <div className="step-3-bg-gradient -z-10"></div>
          <img
            src="assets/images/article-written.png"
            className="bg-transparent w-80"
          />
          <div className="w-80 lg:h-32">
            <h3 className="pl-2 text-2xl font-bold mb-2">3. ✅ Done. Article Written</h3>
            <p className="text-gray-500">
              Wizardshot carefully crafts the perfect article based off your
              actions recorded. Just click “Done” and we’ll write up the article
              in a second.
            </p>
          </div>
        </div>
      </div>
      {/* Steps Section */}

      <div className="relative mt-12 lg:mb-24">
        <h1 className="text-3xl lg:text-4xl font-bold text-center underline">+32 MORE FEATURES</h1>
        <h2  className="text-xl lg:text-2xl font-bold text-center">INCLUDING A KB INTEGRATION</h2>
        <img src="assets/icons/more-features-icon.svg" className="absolute -bottom-4 -right-10 lg:-bottom-[65%] lg:-right-[50%]" />
      </div>

      <div className="relative flex justify-center gap-2 my-8 ">
        <div className="absolute w-[98%] h-1/2 top-[30%] -z-10 free-unlimited-powerful-bg-gradient"></div>
        <div className="flex gap-1 text-gray-900 opacity-60">
          <h1 className="text-xl lg:text-5xl lg:pb-2 border-b-2 border-gray-900">Free</h1>
          <div className="">
            <p className="text-[10px] lg:text-lg -mb-1">Free</p>
            <p className="text-[10px] lg:text-lg">Forever</p>
          </div>
        </div>
        <div className="flex gap-1 text-gray-900 opacity-60">
          <h1 className="text-xl lg:text-5xl border-b-2 border-gray-900">Unlimited</h1>
          <div>
            <p className="text-[10px] lg:text-lg -mb-1">Tutorial</p>
            <p className="text-[10px] lg:text-lg">Creation</p>
          </div>
        </div>
        <div className="flex gap-1 text-gray-900 opacity-60">
          <h1 className="text-xl lg:text-5xl border-b-2 border-gray-900">Powerful</h1>
          <div>
            <p className="text-[10px] lg:text-lg -mb-1">Editor &</p>
            <p className="text-[10px] lg:text-lg">Integrations</p>
          </div>
        </div>
        <img src="assets/icons/colored-arrow.png" className="absolute -bottom-[60px] right-[-20px] lg:-bottom-[60px] lgright-[-45px]" />
      </div>

      <div className="relative border-black border-4 rounded-lg px-4 py-8 flex flex-col justify-center items-center lg:w-[65vw] lg:mb-8">
        {/* <img src="assets/icons/colored-arrow.png" className="lg:hidden absolute -top-9 right-2" /> */}
        <h1 className="text-3xl font-bold text-center mb-0 lg:w-1/3">Create A Detailed Tutorial In Less Than 3 Clicks</h1>

        <div className="relative my-8">
          <div className="absolute install-wizard-bg-gradient -z-10"></div>
        <button className="bg-black hover:bg-gray-700 text-white text-2xl py-4 px-8 lg:px-16 rounded-lg text-center flex">
          <img src="assets/icons/chrome-icon.svg" className="w-8 h-8 inline-block mr-2" />
          Install Wizardshot</button>
        </div>

        <div className="text-center flex flex-col justify-center items-center lg:text-2xl">
          <h1 className="font-bold">“Has helped us write help docs 100x faster”</h1>
          <p>– Dany River, Cartier Informatie</p>
          <img src="assets/icons/stars.png" className="" />
        </div>
      </div>

      <Accordion />

      <div className="relative bg-black rounded-t-lg lg:w-[75vw]">
        <div className="absolute -top-4 right-2 text-xs">
          <p className="font-bold">100% free, forever 🤑</p>
        </div>
        <div className="bottom-line"></div>
        <div className="px-4 py-8 flex flex-col lg:flex-row gap-4 overflow-hidden">
          <div className="flex flex-col gap-4 lg:w-1/2">
            <h1 className="text-white text-2xl">Create Tutorials in 3 Clicks.</h1>
            <p className="text-gray-500">With WizardShot, You Click Capture, And We’ll Capture What’s Happening on Your Screen And Turn It Into A Tutorial.</p>
          </div>

          <div className="relative flex justify-end items-center lg:w-1/2 pr-[10%]">
            <button className="relative text-white underline text-xl z-10">Try Wizardshot
            <div className="try-wizardshot-bg-gradient" ></div>
              <img src="assets/icons/arrow-right.svg" className="inline-block ml-2" />
            </button>
          </div>
        </div>
      </div>

    <div className="flex flex-col gap-6 p-4 lg:flex-row lg:pt-12 lg:justify-between lg:items-start lg:w-[75vw]">
      <div className="flex flex-col justify-center items-start gap-4 mt-8 lg:mt-0 lg:w-1/3">
        <img src="assets/images/wizardshot-logo.svg" className="w-2/5" />
        <p className="w-2/3 font-semibold">Turn complex process into a simple step-by step Guide</p>
        <div className="border-4 border-black">
          <div className="flex">
            <div className="text-center w-1/2 border-r-2 border-black">
              <p className="text-3xl font-extrabold">12</p>
              <p className="text-lg font-bold">YEARS</p>
            </div>
            <div className="text-center w-1/2 border-l-2 border-black flex flex-col justify-center items-center">
              <p className="text-xs font-bold">BUILT BY</p>
              <div className="relative w-fit">
                <img src="assets/icons/helpjuice-logo.svg" className="" />
                <img src="assets/icons/helpjuice-tear.svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              </div>
              <p className="text-xs font-bold">HELPJUICE</p>
            </div>
          </div>
          <p className="text-[8px] p-1 border-t-4 border-black font-bold">#1 Rated Knowledge Base Software</p>
        </div>
      </div>

        <div className="flex justify-between lg:justify-around lg:w-1/3">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Learn more</h1>
            <div className="flex flex-col items-start">
              <button className="hover:underline">Wizardshot</button>
              <button className="hover:underline">Community Page</button>
              <button className="hover:underline">Help Center</button>
              <button className="hover:underline">Security Information</button>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-semibold mb-2">Company</h1>
            <div className="flex flex-col items-start">
              <button className="hover:underline">About Us</button>
              <button className="hover:underline">Status Page</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:w-1/3 lg:items-end">
          <div className="flex gap-3 lg:order-2">
            <img src="assets/icons/tiktok.svg" className="cursor-pointer" />
            <img src="assets/icons/instagram.svg" className="cursor-pointer" />
          </div>

          <div className="flex gap-6 border-b border-gray-300 pb-8 lg:border-none lg:order-2">
            <button className="bg-transparent hover:underline text-black font-semibold py-2 px-0 lg:order-2">
              Log in
            </button>
            <button className="bg-transparent hover:underline text-black font-semibold py-2 px-0 lg:order-1">
              Sign Up
            </button>
          </div>

          <div className="text-center pt-8 lg:order-1 lg:pt-0 lg:text-end">
            <p>📞 +1 (833) 387 3877</p>
            <p>✉️ success@wizardshot.com</p>
          </div>
        </div>

      </div>
        <div className="pb-8">
          <p className="text-center text-gray-500">© 2024 Wizardshot - All rights reserved.</p>
        </div>
    </div>
  );
}
