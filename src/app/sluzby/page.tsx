import ServiceList from "../../components/ServiceList";

export default function SluzbyPage() {
  return (
     <main className="px-4 py-12 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-left">Nabídka služeb</h1>
      <ServiceList />
    </main>
  );
}
