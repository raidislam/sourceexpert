export default function Button({ width, height, show, content }) {
  return (
    <div>
      <button
        style={{ width: `${width}px`, height: `${height}px` }}
        className={`px-6 py-3 text-white font-semibold bg-gradient-to-r from-[#9B9FFF] to-[#666CFF] rounded-full hover:from-[#666CFF] hover:to-[#9B9FFF] transition-all text-base  flex items-center justify-center gap-8`}
      >
        <span>{content}</span>
        {show && <img src="/hero/buttonArrow.png" alt="arraow" />}
      </button>
    </div>
  );
}
