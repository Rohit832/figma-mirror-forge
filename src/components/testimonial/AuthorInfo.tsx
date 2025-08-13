import React from 'react';

interface AuthorInfoProps {
  name: string;
  title: string;
  avatarUrl: string;
  badge: string;
}

export const AuthorInfo: React.FC<AuthorInfoProps> = ({ name, title, avatarUrl, badge }) => {
  return (
    <div className="flex items-center gap-[11px] relative max-sm:flex-col max-sm:text-center max-sm:gap-2">
      <img 
        src={avatarUrl}
        alt={`${name} avatar`}
        className="w-[49px] h-[51px] relative rounded-[14px]"
      />
      <div className="flex w-[120px] flex-col items-start gap-1.5 relative max-sm:items-center max-sm:w-auto">
        <div className="flex flex-col items-start self-stretch relative max-sm:items-center">
          <div className="self-stretch text-black text-[15px] font-extrabold leading-[15px] relative">
            <div className="font-bold text-[15px] text-black">{name}</div>
          </div>
          <div className="self-stretch text-black text-center text-[10px] font-normal leading-[15px] relative max-sm:text-center">
            <div className="font-normal text-[10px] text-black">{title}</div>
          </div>
        </div>
        <div className="flex justify-center items-center relative bg-[#FF7E3E] px-1.5 py-0.5 rounded-[3px]">
          <div className="text-black text-center text-[13px] font-bold leading-[19px] relative">
            <div className="font-bold text-[13px] text-black">{badge}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
