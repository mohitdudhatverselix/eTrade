import { useEffect } from 'react';
import sal from 'sal.js';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    sal({
      threshold: 0.3,
      once: true,
    });
  }, []);

  return (
    <>
      <main>{children}</main>
    </>
  );
}

