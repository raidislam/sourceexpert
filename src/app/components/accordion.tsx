export default function Accordion() {
  return (
    <>
      <div className="collapse collapse-arrow bg-[#F8F8F8] ">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          <h3 className="py-[35px] px-[40px] text-2xl xl:text-6xl font-inter font-semibold leading-[40px] bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
            <span> 01</span>&nbsp; <span>UI/UX Design</span>
          </h3>
        </div>
        <div className="collapse-content">
          <p className="font-inter text-[18px] font-normal leading-[28px] w-[700px] text-[#5C5E60] pl-[40px]">
            Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
            Ultricies nisl enim lacus id aliquam montes euismod urna sem.
          </p>
          <div>
            <img
              className="ml-[40px] mt-[40px]"
              src="/about/ui-ux.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#F8F8F8] my-[24px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <h3 className="py-[35px] px-[40px] text-2xl xl:text-6xl font-inter font-semibold leading-[40px] bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
            <span> 02</span>&nbsp; <span>Web Development</span>
          </h3>
        </div>
        <div className="collapse-content">
          <p className="font-inter text-[18px] font-normal leading-[28px] w-[700px] text-[#5C5E60] pl-[40px]">
            Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
            Ultricies nisl enim lacus id aliquam montes euismod urna sem.
          </p>
          <div>
            <img
              className="ml-[40px] mt-[40px]"
              src="/about/ui-ux.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#F8F8F8]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <h3 className="py-[35px] px-[40px] text-2xl xl:text-6xl font-inter font-semibold leading-[40px] bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
            <span> 03</span>&nbsp; <span>Mobile App Development</span>
          </h3>
        </div>
        <div className="collapse-content">
          <p className="font-inter text-[18px] font-normal leading-[28px] w-[700px] text-[#5C5E60] pl-[40px]">
            Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
            Ultricies nisl enim lacus id aliquam montes euismod urna sem.
          </p>
          <div>
            <img
              className="ml-[40px] mt-[40px]"
              src="/about/ui-ux.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="collapse collapse-arrow bg-[#F8F8F8] mt-[24px]">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title text-xl font-medium">
          <h3 className="py-[35px] px-[40px] text-2xl xl:text-6xl font-inter font-semibold leading-[40px] bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] bg-clip-text text-transparent">
            <span> 04</span>&nbsp; <span>Devops Solutions</span>
          </h3>
        </div>
        <div className="collapse-content">
          <p className="font-inter text-[18px] font-normal leading-[28px] w-[700px] text-[#5C5E60] pl-[40px]">
            Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
            Ultricies nisl enim lacus id aliquam montes euismod urna sem.
          </p>
          <div>
            <img
              className="ml-[40px] mt-[40px]"
              src="/about/ui-ux.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}
