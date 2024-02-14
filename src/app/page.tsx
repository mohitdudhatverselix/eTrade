"use client"
import Link from 'next/link';
import NextTopLoader from 'nextjs-toploader';
import Header from './Components/Header';
import { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel';
import Banner from "./Components/Banner";
import $ from "jquery";
import "slick-carousel/slick/slick";
import "slick-carousel/slick/slick.css";

export default function Home(): JSX.Element {
  const [progress, setProgress] = useState<number>(0);
  const [render, setRender] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const loadScript = (src: string, callback: () => void): void => {
      const script = document.createElement("script");
      script.src = src;
      script.defer = true;
      script.onload = callback;
      document.head.appendChild(script);
    };

    const scriptSources: string[] = [
      // ... array of script sources
    ];

    const loadScripts = (index: number): void => {
      if (index < scriptSources.length) {
        loadScript(scriptSources[index], () => loadScripts(index + 1));
      }
    };

    $(document).on("turbo:before-cache", function () {
      const sliders = document.querySelectorAll(".slick-initialized");
      sliders.forEach((item: Element) => {
        $(item).slick("unslick");
      });
    });

    setProgress((progress) => progress + 10);
    setProgress((progress) => progress + 20);
    setProgress((progress) => progress + 30);
    setProgress(100);

    setTimeout(() => {
      loadScripts(0);
      // initFunction();
    }, 1500);

    return () => {
      scriptSources.forEach((src) => {
        const scriptElement = document.querySelector(`script[src="${src}"]`);
        if (scriptElement) {
          scriptElement.remove();
        }
      });
    };
  }, []);

  return (
    <>
      <NextTopLoader
        color="#2299DD"
        // ... other props
      />
      <Header TopCampaignBoolean={true} style={1} />
      <Banner />
      <Link href="/signin">signin</Link>
    </>
  );
}

