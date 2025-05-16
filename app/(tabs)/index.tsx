import { useEffect } from "react";
import { useRouter } from "expo-router";

export default function TabsIndex() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/HomeScreen");
    }, 0);

    return () => clearTimeout(timeout);
  }, [router]);

  return null;
}
