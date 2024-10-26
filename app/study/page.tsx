'use client';
import { useEffect, useState } from "react";
import GithubPageImage from "../ui/component/GithuPageImage";

export default function Study() {
  const [ubcImageIndex, setUbcImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const ubcImage = [
    {
      src: "https://fellowshipbard.com/wp-content/uploads/2023/09/Fully-Funded-PhD-in-Computer-Science-at-University-of-British-Columbia-768x428.jpg",
      alt: "ubc logo",
      width: 380,
      height: 200,
    },
    {
      src: "https://www.usnews.com/object/image/00000155-7e9e-d3ec-a9fd-7fdfc7240000/160623-ubc-submitted.jpg?update-time=1466708333713&size=responsiveFlow970",
      alt: "ubc image",
      width: 380,
      height: 200
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setUbcImageIndex((prevIndex) => (prevIndex + 1) % ubcImage.length);
        setIsVisible(true);
      }, 500)
    }, 7000)

    return () => clearInterval(interval)
  }, [ubcImage.length])

  return (
    <section className="pt-20 sm:px-8 md:px-24 lg:px-48 xl:px-72">
      <div className="grid gap-4 place-content-center space-y-4">
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center">
            <GithubPageImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Visible_Minorities_of_Vancouver.png/640px-Visible_Minorities_of_Vancouver.png" alt="Vancouver demographics" width={380} height={200} className="sm:mb-4"></GithubPageImage>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                人種分布
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                多様な人種が住んでいるため、英語のレベルも様々
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                それぞれのレベルに合った会話相手を探すことも簡単
              </li>
            </ul>
          </div>
        </div>
        <div className="md:grid grid-cols-2 px-4 md:space-x-16">
          <div className="flex flex-col items-center space-y-8 relative overflow-hidden">
            <GithubPageImage src={ubcImage[ubcImageIndex].src} alt={ubcImage[ubcImageIndex].alt} width={ubcImage[ubcImageIndex].width} height={200} className={`sm:mb-4 bg-white transition-opacity duration-300 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}></GithubPageImage>
          </div>
          <div className="flex flex-col mt-2">
            <div className="flex f sm:mb-4 md:mb-8 place-content-center">
              <p className="text-lg font-[family-name:var(--font-geist-sans)]">
                The University of British Columbia
              </p>
            </div>
            <ul className="list-disc space-y-4">
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                世界大学ランキングで京大以上
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                ハイレベルな学問も学習可能
              </li>
              <li className="text-sm font-[family-name:var(--font-geist-sans)]">
                敷地も広大(400ヘクタール)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}