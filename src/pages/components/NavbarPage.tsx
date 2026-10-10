import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

<Navbar>
  <h1>Logo</h1>
  <div className="flex gap-5">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Customer</a>
  </div>
  <div>
    <Button hoverAnimation="none">Profile</Button>
  </div>
</Navbar>`;

  const propsData = [
    {
      prop: "variant",
      type: '"dark" | "light" | "primary" | "glass"',
      default: '"light"',
      description: "The visual style of the navbar.",
    },
    {
      prop: "size",
      type: '"default" | "sm" | "lg" | "xl"',
      default: '"default"',
      description: "Controls the height of the navbar.",
    },
    {
      prop: "animation",
      type: "keyof entranceAnimations",
      default: '"fadeIn"',
      description: "The entrance animation applied when the navbar mounts.",
    },
    {
      prop: "hoverAnimation",
      type: "keyof hoverAnimations",
      default: '"none"',
      description: "The animation applied when the pointer enters the navbar.",
    },
    {
      prop: "asChild",
      type: "boolean",
      default: "false",
      description: "Renders the navbar through Radix Slot when enabled.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "Default navbar content",
      description:
        "Optional custom content. When omitted, the default logo, links, and profile button are rendered.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
       <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Navbar
        </p>
        <p className="text-lg text-gray-600">
        A collection of links for navigating websites.      
  </p>
      </header>

      <section  className="space-y-4 "> 
        <h2 className="text-2xl font-semibold text-(--text-color)">Usage</h2>
      <ComponentDemo code={usageCode}>
        <Navbar />
      </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-(--text-color)">
          API Reference
        </h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default NavbarPage;
