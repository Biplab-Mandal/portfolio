type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({
  children,
}: ContainerProps) {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-[1440px]
        px-6
        md:px-8
        lg:px-10
        xl:px-12
      "
    >
      {children}
    </div>
  );
}