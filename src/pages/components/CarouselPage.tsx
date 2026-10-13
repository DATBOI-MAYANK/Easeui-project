import { Carousel } from "@/components/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const usageCode = `import { Carousel } from "@/components/Carousel";

<Carousel autoplay>
  <div className="bg-indigo-600 p-16 text-center text-white">First slide</div>
  <div className="bg-purple-600 p-16 text-center text-white">Second slide</div>
  <div className="bg-pink-600 p-16 text-center text-white">Third slide</div>
</Carousel>`;

  const propsData = [
    { prop: "children", type: "React.ReactNode[]", default: "required", description: "The slides displayed by the carousel." },
    { prop: "initialIndex", type: "number", default: "0", description: "The slide shown initially." },
    { prop: "index", type: "number", default: "undefined", description: "Controls the active slide in controlled mode." },
    { prop: "onIndexChange", type: "(index: number) => void", default: "undefined", description: "Called when the active slide changes." },
    { prop: "autoplay", type: "boolean", default: "false", description: "Automatically advances through the slides." },
    { prop: "autoplayInterval", type: "number", default: "5000", description: "Delay between autoplay transitions in milliseconds." },
    { prop: "loop", type: "boolean", default: "true", description: "Wraps navigation from the last slide to the first." },
    { prop: "showControls", type: "boolean", default: "true", description: "Shows previous and next buttons." },
    { prop: "showIndicators", type: "boolean", default: "true", description: "Shows clickable slide indicators." },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>Carousel</p>
        <p className="text-lg text-gray-600">A slideshow for cycling through a collection of content.</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-(--text-color)">Usage</h2>
        <ComponentDemo code={usageCode}>
          <Carousel>
            <div className="bg-indigo-600 p-16 text-center text-white">First slide</div>
            <div className="bg-purple-600 p-16 text-center text-white">Second slide</div>
            <div className="bg-pink-600 p-16 text-center text-white">Third slide</div>
          </Carousel>
        </ComponentDemo>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-(--text-color)">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;
