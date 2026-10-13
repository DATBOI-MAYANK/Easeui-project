import { ToolTip } from "@/components/ToolTip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const ToolTipPage = () => {
  const usageCode = `import { ToolTip } from "@/components/ToolTip";

<ToolTip
  content="More information"
  contentClassName="bg-(--tooltip-bg-color) text-(--tooltip-text-color)"
  side="top"
>
  <button>Hover or focus me</button>
</ToolTip>`;

  const propsData = [
    {
      prop: "content",
      type: "React.ReactNode",
      default: "required",
      description: "The content displayed inside the tooltip.",
    },
    {
      prop: "side",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "The side where the tooltip appears relative to its trigger.",
    },
    {
      prop: "disabled",
      type: "boolean",
      default: "false",
      description: "Disables the tooltip and prevents it from being displayed.",
    },
    {
      prop: "contentClassName",
      type: "string",
      default: "default tooltip styles",
      description: "Additional classes applied to the tooltip content.",
    },
    {
      prop: "children",
      type: "React.ReactNode",
      default: "required",
      description: "The element that triggers the tooltip on hover or focus.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-12">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>
        <p className="text-lg text-gray-600">
          Displays helpful information when users hover over or focus an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-(--text-color)">Usage</h2>
        <ComponentDemo code={usageCode}>
          <ToolTip
            content="More information"
            contentClassName="bg-(--tooltip-bg-color) text-(--tooltip-text-color)"
            side="top"
          >
            <button className="rounded-md bg-indigo-600 px-4 py-2 text-white">
              Hover or focus me
            </button>
          </ToolTip>
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

export default ToolTipPage;