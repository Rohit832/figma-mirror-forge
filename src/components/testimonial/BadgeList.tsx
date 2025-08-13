import React from 'react';

interface Badge {
  icon: string;
  text: string;
  iconColor?: string;
}

interface BadgeListProps {
  badges: Badge[];
}

const BadgeItem: React.FC<{ badge: Badge }> = ({ badge }) => {
  return (
    <div className="flex h-[23px] justify-center items-center gap-[2.87px] shadow-[1.435px_-1.722px_0_0_#000] relative bg-white p-[2.87px] rounded-[2.87px] border-[0.574px] border-solid border-black max-sm:w-auto max-sm:min-w-[120px]">
      <div dangerouslySetInnerHTML={{ __html: badge.icon }} />
      <div className="text-black text-center text-[13px] font-bold tracking-[0.523px] relative">
        <div className="font-bold text-[13px] text-black">{badge.text}</div>
      </div>
    </div>
  );
};

export const BadgeList: React.FC<BadgeListProps> = ({ badges }) => {
  return (
    <div className="flex items-center gap-[54px] self-stretch relative max-md:gap-[30px] max-md:flex-wrap max-md:justify-center max-sm:gap-[15px] max-sm:flex-col">
      {badges.map((badge, index) => (
        <BadgeItem key={index} badge={badge} />
      ))}
    </div>
  );
};
