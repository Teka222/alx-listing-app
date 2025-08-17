import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import { CardProps } from "@/interfaces";
import { PLACEHOLDER_IMAGE } from "@/constants";

const sampleProperties: CardProps[] = [
  {
    title: "Luxury Villa",
    image: PLACEHOLDER_IMAGE,
    description: "A beautiful villa with ocean view and modern amenities.",
  },
  {
    title: "Cozy Apartment",
    image: PLACEHOLDER_IMAGE,
    description: "A compact and comfortable apartment in the city center.",
  },
  {
    title: "Country House",
    image: PLACEHOLDER_IMAGE,
    description: "Escape to the countryside with this spacious property.",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">ALX Listing App</h1>
        <Button buttonLabel="Add New Listing" buttonBackgroundColor="blue" />
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sampleProperties.map((property, index) => (
          <Card
            key={index}
            title={property.title}
            image={property.image}
            description={property.description}
          />
        ))}
      </main>
    </div>
  );
}
