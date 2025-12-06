import { url } from "inspector";
import {
	BookOpen,
	Car,
	Frame,
	House,
	ScanBarcode,
	ScanBarcodeIcon,
	Settings2,
	SquareTerminal,
	Wrench,
} from "lucide-react";
import { NavMain } from "@/components/NavMain";
import { NavTools } from "@/components/NavTools";
import { NavVehicles } from "@/components/NavVehicles";
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail,
} from "@/components/ui/sidebar";

const data = {
	navMain: [
		{
			title: "Home",
			url: "/",
			icon: House,
		},
	],
	navVehicles: [
		{
			title: "Test Vehicle",
			url: "/test",
			icon: Car,
		},
	],
	tools: [
		{
			name: "OBD2 Code Lookup",
			url: "#",
			icon: ScanBarcode,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:p-1.5!"
						>
							<a href="/">
								<Wrench className="size-5" />
								<span className="text-base font-semibold">
									Service Bay
								</span>
							</a>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
				<NavMain items={data.navMain} />
			</SidebarHeader>
			<SidebarContent>
				<NavVehicles items={data.navVehicles} />
				<NavTools tools={data.tools} />
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	);
}
