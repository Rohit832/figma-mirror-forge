import React from 'react';
import { QuoteIcon } from './QuoteIcon';
import { AuthorInfo } from './AuthorInfo';
import { BadgeList } from './BadgeList';

interface TestimonialCardProps {
  quote: string;
  author: {
    name: string;
    title: string;
    avatarUrl: string;
    badge: string;
  };
  badges: Array<{
    icon: string;
    text: string;
  }>;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, badges }) => {
  return (
    <article className="flex w-[884px] h-[367px] flex-col items-start gap-2.5 shrink-0 relative bg-white px-[90px] py-[37px] max-md:w-full max-md:max-w-[884px] max-md:px-[60px] max-md:py-[30px] max-sm:w-full max-sm:h-auto max-sm:px-[30px] max-sm:py-5">
      <div>
        <div dangerouslySetInnerHTML={{
          __html: `<svg id="228:62" width="891" height="374" viewBox="0 0 891 374" fill="none" xmlns="http://www.w3.org/2000/svg" class="background-border" style="display: flex; width: 884px; height: 367px; justify-content: center; align-items: center; position: absolute; top: 0; left: 0; z-index: 0"> <g filter="url(#filter0_d_228_62)"> <path d="M880.229 18.7354V355.736L807.215 359.262L43.2188 363.227L4.05664 356.225L32.5312 30.7295L69.1689 14.6904L792.118 3.77637L880.229 18.7354Z" stroke="black" stroke-width="7.54319" shape-rendering="crispEdges"></path> </g> <defs> <filter id="filter0_d_228_62" x="0" y="0" width="890.6" height="373.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"> <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood> <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix> <feOffset dx="6.60029" dy="6.60029"></feOffset> <feComposite in2="hardAlpha" operator="out"></feComposite> <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"></feColorMatrix> <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_228_62"></feBlend> <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_228_62" result="shape"></feBlend> </filter> </defs> </svg>`
        }} />
      </div>
      
      <div className="flex w-[703px] flex-col items-center gap-[25px] relative z-[1] max-md:w-full max-md:max-w-[703px] max-sm:w-full">
        <div className="flex flex-col items-center gap-5 self-stretch relative max-sm:gap-[15px]">
          <QuoteIcon />
          <blockquote className="self-stretch text-black text-center text-[27px] font-normal leading-[27.4px] relative max-md:text-2xl max-md:leading-6 max-sm:text-xl max-sm:leading-[22px]">
            <div className="font-normal text-[27px] text-black max-md:text-2xl max-sm:text-xl">
              "{quote}"
            </div>
          </blockquote>
        </div>
        
        <div className="flex w-[388px] flex-col items-center gap-[35px] relative max-md:w-full max-md:max-w-[388px] max-sm:w-full max-sm:gap-[25px]">
          <AuthorInfo 
            name={author.name}
            title={author.title}
            avatarUrl={author.avatarUrl}
            badge={author.badge}
          />
          <BadgeList badges={badges} />
        </div>
      </div>
    </article>
  );
};
