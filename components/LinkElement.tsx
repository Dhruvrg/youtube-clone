"use client";

const LinkElement = ({ route, label, Icon }: any) => {
  return (
    <div className="flex items-center rounded-xl py-2 pr-10 hover:bg-[#212121]">
      <Icon className="ml-5 mr-6" size={26} />
      <div className="font-semibold text-sm">{label}</div>
    </div>
  );
};

export default LinkElement;
