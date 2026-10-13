import { Layout } from "@/components/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const usageCode = `import { Layout } from "@/components/Layout";

<Layout
  header={<div className="p-4">Header</div>}
  sidebar={<nav className="h-full w-48 p-4">Sidebar</nav>}
  footer={<div className="p-4">Footer</div>}
>
  <div className="h-full min-h-48 w-full p-8">Main content</div>
</Layout>`;

  const propsData = [
    { prop: "header", type: "React.ReactNode", default: "undefined", description: "Content rendered above the main area." },
    { prop: "sidebar", type: "React.ReactNode", default: "undefined", description: "Content rendered beside the main area." },
    { prop: "footer", type: "React.ReactNode", default: "undefined", description: "Content rendered below the main area." },
    { prop: "children", type: "React.ReactNode", default: "required", description: "The primary page content." },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      <header className="space-y-2">
        <p className="text-4xl font-bold tracking-tight" style={{ color: "var(--text-color)" }}>Layout</p>
        <p className="text-lg text-gray-600">A flexible page structure with optional header, sidebar, main content, and footer regions.</p>
      </header>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-(--text-color)">Usage</h2>
        <ComponentDemo code={usageCode}>
          <Layout
            className="min-h-80 overflow-hidden rounded border border-gray-200 text-sm"
            header={<div className="bg-indigo-600 p-4 text-white">Header</div>}
            sidebar={<nav className="h-full w-32 bg-gray-100 p-4">Sidebar</nav>}
            footer={<div className="bg-gray-100 p-3 text-center">Footer</div>}
          >
            <div className="p-8 text-(--text-color)">Main content</div>
          </Layout>
        </ComponentDemo>
      </section>
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-(--text-color)">API Reference</h2>
        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;
