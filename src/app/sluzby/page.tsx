import ServiceCard from "../../components/ServiceCard";
import Link from "next/link";
import ServiceList from "../../components/ServiceList";

export default function SluzbyPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Nabídka služeb</h1>
      <ServiceList />
    </main>
  );
}
