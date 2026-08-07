export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">

      <div className="absolute inset-0 bg-[#050816]" />

      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      <div
        className="
          absolute
          left-1/3
          top-32
          h-80
          w-80
          rounded-full
          bg-cyan-500/10
          blur-[120px]
        "
      />

      <div
        className="
          absolute
          right-1/4
          bottom-10
          h-96
          w-96
          rounded-full
          bg-blue-500/10
          blur-[150px]
        "
      />

    </div>
  );
}