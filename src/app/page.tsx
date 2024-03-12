import Header from "./_components/header";
import SideBar from "./_components/side-bar";
import TableComponent from "./_components/table";

/**
 * Component is a layout component that renders a sidebar, a header, and a main content area with a table.
 * It uses a grid layout to organize the sidebar and content area, and applies styling for dark mode.
 *
 * @returns The Component with Sidebar, Header, and TableComponent as a JSX.Element.
 */
export default function Component() {
  return (
    <div className="grid min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr] dark">
      <SideBar />
      <div className="flex flex-col dark">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <div className="border shadow-sm rounded-lg p-2">
            <div className="@container">
              <TableComponent />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
